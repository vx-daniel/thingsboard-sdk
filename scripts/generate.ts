import { OpenAPIRegistry, extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { z } from 'zod';

interface OpenAPIOperation {
  operationId?: string;
  tags?: string[];
  parameters?: any[];
  requestBody?: {
    content?: {
      'application/json'?: {
        schema?: any;
      };
    };
  };
  responses?: {
    '200'?: {
      content?: {
        'application/json'?: {
          schema?: {
            $ref?: string;
          };
        };
      };
    };
  };
}

interface OpenAPIPathItem {
  [method: string]: OpenAPIOperation;
}

interface OpenAPISpec {
  paths: {
    [path: string]: OpenAPIPathItem;
  };
  components?: {
    schemas?: any;
  };
}

interface OpenAPIPaths {
  [path: string]: OpenAPIPathItem;
}

function sanitizeIdentifier(name: string): string {
  // Handle special characters and spaces in identifiers
  return name
    .replace(/[^a-zA-Z0-9_]/g, '_')
    .replace(/^(\d)/, '_$1'); // Prefix with underscore if starts with a number
}

function sanitizeTypeName(name: string): string {
  // Handle special characters and spaces in type names
  return name
    .replace(/«/g, '_Of_')
    .replace(/»/g, '')
    .replace(/\s+/g, '_')
    .replace(/[^a-zA-Z0-9_]/g, '_');
}

function sanitizeSchemaName(name: string): string {
  // First, replace special characters with underscores
  let sanitized = name.replace(/[^a-zA-Z0-9«»]/g, '_');

  // Then handle generic types in a specific order
  sanitized = sanitized
    .replace(/«List»([^»]+)»/g, '_Of_List_Of_$1')
    .replace(/«PageData»([^»]+)»/g, '_Of_PageData_Of_$1')
    .replace(/«DeferredResult»([^»]+)»/g, '_Of_DeferredResult_Of_$1')
    .replace(/«([^»]+)»([^»]+)»/g, '_Of_$1_Of_$2')
    .replace(/«([^»]+)»/g, '_Of_$1');

  // Clean up any remaining special characters
  sanitized = sanitized.replace(/[^a-zA-Z0-9_]/g, '_');

  // Fix common patterns
  sanitized = sanitized
    .replace(/_Of_List_([^_]+)(?:_Schema)?$/, '_Of_List_Of_$1')
    .replace(/_Of_PageData_([^_]+)(?:_Schema)?$/, '_Of_PageData_Of_$1')
    .replace(/_Of_DeferredResult_([^_]+)(?:_Schema)?$/, '_Of_DeferredResult_Of_$1')
    .replace(/_Of_([^_]+)_([^_]+)(?:_Schema)?$/, '_Of_$1_Of_$2');

  // Add Schema suffix if not already present
  if (!sanitized.endsWith('Schema')) {
    sanitized += 'Schema';
  }

  return sanitized;
}

function sanitizeClassName(tag: string): string {
  return tag
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

async function generate() {
  // Extend Zod with OpenAPI functionality
  extendZodWithOpenApi(z);

  // Read the OpenAPI spec
  const apiSpec: OpenAPISpec = JSON.parse(readFileSync(join(__dirname, '../api-docs.json'), 'utf-8'));

  const registry = new OpenAPIRegistry();

  // Generate the schemas
  const schemaTypes = generateSchemaTypes(apiSpec.components?.schemas);

  // Ensure the generated directory exists
  mkdirSync(join(__dirname, '../src/generated'), { recursive: true });
  
  // Write the generated schemas to a file
  writeFileSync(
    join(__dirname, '../src/generated/schemas.ts'),
    schemaTypes
  );

  const { index, clientFiles } = generateApi(apiSpec);

  // Create necessary directories
  mkdirSync(join(__dirname, '../src/generated/clients'), { recursive: true });

  // Write client files
  for (const [fileName, content] of Object.entries(clientFiles)) {
    writeFileSync(
      join(__dirname, '../src/generated/clients', `${fileName}.ts`),
      content
    );
  }

  // Write index file
  writeFileSync(
    join(__dirname, '../src/generated/index.ts'),
    index
  );
}

function generateSchemaTypes(schemas: any): string {
  if (!schemas) return '';

  // First pass: collect all schema names and their sanitized versions
  const schemaMap = new Map<string, string>();
  Object.keys(schemas).forEach(name => {
    const sanitized = sanitizeSchemaName(name);
    schemaMap.set(name, sanitized);
  });

  const imports = `import { z } from 'zod';\n\n`;
  
  // First, declare all schema references to handle circular dependencies
  const schemaReferences = Object.entries(schemas).map(([name]) => {
    const sanitized = schemaMap.get(name)!;
    return `export const ${sanitized}: z.ZodType<any> = z.lazy(() => ${sanitized}Schema);`;
  }).join('\n');

  // Then declare all schema implementations
  const schemaImplementations = Object.entries(schemas).map(([name, schema]) => {
    const sanitized = schemaMap.get(name)!;
    const zodSchema = generateZodSchema(schema);
    return `export const ${sanitized}Schema = ${zodSchema};
export type ${sanitized.replace(/Schema$/, '')} = z.infer<typeof ${sanitized}>;`;
  }).join('\n\n');

  return imports + schemaReferences + '\n\n' + schemaImplementations;
}

function generateApi(spec: OpenAPISpec): { index: string; clientFiles: { [key: string]: string } } {
  const imports = `import { BaseVXOlympusClient } from '../base-client';
import * as schemas from './schemas';\n\n`;

  // Group methods by tag
  const methodsByTag: { [key: string]: string[] } = {};
  
  for (const [path, pathObj] of Object.entries(spec.paths)) {
    for (const [method, operation] of Object.entries(pathObj)) {
      if (!operation.operationId) {
        throw new Error(`Operation at ${path} ${method} is missing operationId`);
      }
      
      const tag = operation.tags?.[0] || 'default';
      if (!methodsByTag[tag]) {
        methodsByTag[tag] = [];
      }
      methodsByTag[tag].push(generateApiMethod(operation, path, method));
    }
  }

  // Generate client files for each tag
  const clientFiles: { [key: string]: string } = {};
  for (const [tag, methods] of Object.entries(methodsByTag)) {
    const className = `${sanitizeClassName(tag)}Client`;
    const fileName = `${tag.toLowerCase()}.client`;
    
    clientFiles[fileName] = `import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class ${className} extends BaseVXOlympusClient {${methods.join('\n')}}`;
  }

  // Generate index file that exports all clients
  const indexContent = imports + Object.entries(methodsByTag).map(([tag]) => {
    const className = `${sanitizeClassName(tag)}Client`;
    const fileName = `${tag.toLowerCase()}.client`;
    return `export { ${className} } from './clients/${fileName}';`;
  }).join('\n') + '\n\n';

  return { index: indexContent, clientFiles };
}

function generateApiMethod(operation: OpenAPIOperation, path: string, method: string): string {
  const operationId = operation.operationId;
  if (!operationId) {
    throw new Error(`Operation at ${path} ${method} is missing operationId`);
  }

  const pathParams = operation.parameters?.filter(p => p.in === 'path') || [];
  const queryParams = operation.parameters?.filter(p => p.in === 'query') || [];
  const hasRequestBody = operation.requestBody != null;

  // Build method parameters
  const methodParams = [];
  
  // Add path parameters
  methodParams.push(...pathParams.map(p => `${p.name}: string`));
  
  // Add request body if needed
  if (hasRequestBody) {
    methodParams.push('data: any');
  }
  
  // Add query parameters if needed
  if (queryParams.length > 0) {
    methodParams.push('queryParams: any');
  }
  
  // Add options parameter
  methodParams.push('options: RequestInit = {}');

  // Build the URL with path parameters
  let urlPath = path;
  for (const param of pathParams) {
    urlPath = urlPath.replace(`{${param.name}}`, `\${encodeURIComponent(${param.name})}`);
  }

  // Generate the method
  return `
  async ${operationId}(${methodParams.join(', ')}) {
    const url = \`\${this.baseUrl}${urlPath}\`;
    const response = await this.makeRequest(url, {
      method: '${method.toUpperCase()}',
      ${hasRequestBody ? 'body: JSON.stringify(data),' : ''}
      ...options,
    });
    return response;
  }`;
}

function collectDependencies(schema: any, deps: Set<string>) {
  if (!schema) return;

  if (schema.$ref) {
    const refName = sanitizeTypeName(schema.$ref.split('/').pop() || '');
    deps.add(refName);
  }

  if (schema.type === 'object') {
    Object.values(schema.properties || {}).forEach((prop: any) => {
      collectDependencies(prop, deps);
    });
  }

  if (schema.type === 'array') {
    collectDependencies(schema.items, deps);
  }

  if (schema.additionalProperties) {
    collectDependencies(schema.additionalProperties, deps);
  }
}

function topologicalSort(deps: Record<string, Set<string>>): string[] {
  const visited = new Set<string>();
  const temp = new Set<string>();
  const result: string[] = [];

  function visit(node: string) {
    if (temp.has(node)) {
      // Found a cycle, break it by removing the current node's dependencies
      deps[node] = new Set();
      return;
    }
    if (visited.has(node)) return;

    temp.add(node);
    for (const dep of deps[node]) {
      visit(dep);
    }
    temp.delete(node);
    visited.add(node);
    result.unshift(node);
  }

  for (const node of Object.keys(deps)) {
    if (!visited.has(node)) {
      visit(node);
    }
  }

  return result;
}

function generateZodType(schema: any): string {
  if (!schema) return 'z.lazy(() => z.object({}))';

  switch (schema.type) {
    case 'string':
      if (schema.enum) {
        return `z.enum([${schema.enum.map((e: string) => `"${e}"`).join(', ')}])`;
      }
      return 'z.string()';
    case 'number':
    case 'integer':
      return 'z.number()';
    case 'boolean':
      return 'z.boolean()';
    case 'array':
      return `z.array(${generateZodType(schema.items)})`;
    case 'object':
      if (schema.additionalProperties) {
        return `z.record(z.string(), ${generateZodType(schema.additionalProperties)})`;
      }
      return generateZodSchema(schema);
    default:
      if (schema.$ref) {
        const refName = sanitizeTypeName(schema.$ref.split('/').pop() || '');
        return sanitizeSchemaName(refName);
      }
      return 'z.lazy(() => z.object({}))';
  }
}

function generateZodSchema(schema: any): string {
  if (!schema) return 'z.lazy(() => z.object({}))';

  if (schema.type === 'object') {
    const properties = Object.entries(schema.properties || {}).map(
      ([key, value]: [string, any]) => `"${key}": ${generateZodType(value)}`
    );
    
    if (properties.length === 0) {
      return 'z.object({})';
    }

    return `z.object({\n  ${properties.join(',\n  ')}\n})`;
  }

  return generateZodType(schema);
}

function generateTypeForSchema(schema: any): string {
  if (!schema) return 'void';

  if (schema.$ref) {
    const refName = sanitizeTypeName(schema.$ref.split('/').pop() || '');
    return `schemas.${sanitizeSchemaName(refName).replace(/Schema$/, '')}`;
  }

  switch (schema.type) {
    case 'string':
      return 'string';
    case 'number':
    case 'integer':
      return 'number';
    case 'boolean':
      return 'boolean';
    case 'array':
      return `Array<${generateTypeForSchema(schema.items)}>`;
    case 'object':
      if (schema.additionalProperties) {
        return `Record<string, ${generateTypeForSchema(schema.additionalProperties)}>`;
      }
      const properties = Object.entries(schema.properties || {}).map(
        ([key, value]: [string, any]) => `${key}: ${generateTypeForSchema(value)}`
      );
      return `{ ${properties.join('; ')} }`;
    default:
      return 'any';
  }
}

generate().catch(console.error);
