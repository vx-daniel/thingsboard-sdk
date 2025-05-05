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
  const schemaTypes = generateSchemas(apiSpec.components?.schemas);

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

function generateSchemas(schemas: Record<string, any>): string {
  const code: string[] = [];
  const generatedSchemas = new Set<string>();

  // Add imports
  code.push('import { z } from "zod";');
  code.push('');

  // First pass: declare all schema variables to handle circular dependencies
  for (const [name, _] of Object.entries(schemas)) {
    const baseName = sanitizeTypeName(name);
    const schemaName = `${baseName}Schema`;
    code.push(`export const ${schemaName}: z.ZodType<any> = z.lazy(() => ${schemaName}Impl);`);
  }
  code.push('');

  // Second pass: implement the schemas
  for (const [name, schema] of Object.entries(schemas)) {
    const baseName = sanitizeTypeName(name);
    const schemaName = `${baseName}Schema`;
    const implName = `${schemaName}Impl`;
    const typeName = baseName;

    if (generatedSchemas.has(schemaName)) {
      continue;
    }

    const schemaDefinition = generateSchemaForType(schema);
    code.push(`const ${implName} = ${schemaDefinition};`);
    code.push(`export type ${typeName} = z.infer<typeof ${schemaName}>;`);
    code.push('');
    generatedSchemas.add(schemaName);
  }

  return code.join('\n');
}

function generateSchemaForType(schema: any): string {
  if (schema.$ref) {
    const refType = schema.$ref.split('/').pop();
    if (!refType) throw new Error(`Invalid $ref: ${schema.$ref}`);
    return `${sanitizeTypeName(refType)}Schema`;
  }

  if (schema.type === 'array' && schema.items) {
    return `z.array(${generateSchemaForType(schema.items)})`;
  }

  if (schema.type === 'object' || schema.properties) {
    const properties = schema.properties || {};
    const required = schema.required || [];
    const propertyLines = Object.entries(properties).map(([propName, propSchema]) => {
      const isRequired = required.includes(propName);
      return `  "${propName}": ${generateSchemaForType(propSchema)}${isRequired ? '' : '.optional()'}`;
    });
    return `z.object({\n${propertyLines.join(',\n')}\n})`;
  }

  if (schema.enum) {
    return `z.enum([${schema.enum.map((e: string) => `"${e}"`).join(', ')}])`;
  }

  switch (schema.type) {
    case 'string':
      return 'z.string()';
    case 'number':
    case 'integer':
      return 'z.number()';
    case 'boolean':
      return 'z.boolean()';
    default:
      return 'z.any()';
  }
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

function generateMethodName(operation: OpenAPIOperation): string {
  if (!operation.operationId) {
    throw new Error('Operation ID is required');
  }
  
  // Remove HTTP method suffix (e.g., UsingGET, UsingPOST, etc.)
  let methodName = operation.operationId.replace(/Using(GET|POST|PUT|DELETE|PATCH)$/, '');
  
  // If this is a POST/PUT with a request body, append 'WithData'
  if (operation.requestBody) {
    methodName += 'WithData';
  }
  
  return methodName;
}

function generateApiMethod(operation: OpenAPIOperation, path: string, method: string): string {
  const methodName = generateMethodName(operation);
  const pathParams = operation.parameters?.filter(p => p.in === 'path') || [];
  const queryParams = operation.parameters?.filter(p => p.in === 'query') || [];
  const hasRequestBody = operation.requestBody != null;
  const responseSchema = operation.responses?.['200']?.content?.['application/json']?.schema;
  const returnType = responseSchema ? generateTypeForSchema(responseSchema) : 'void';

  // Build JSDoc comment
  const jsdoc = ['  /**'];
  
  // Add param descriptions
  pathParams.forEach(p => {
    jsdoc.push(`   * @param {string} ${p.name} - Path parameter`);
  });
  if (hasRequestBody) {
    jsdoc.push(`   * @param {object} data - Request body`);
  }
  if (queryParams.length > 0) {
    jsdoc.push(`   * @param {object} queryParams - Query parameters`);
    queryParams.forEach(p => {
      const type = p.schema?.type || 'any';
      jsdoc.push(`   * @param {${type}} queryParams.${p.name} - Query parameter`);
    });
  }
  jsdoc.push(`   * @param {RequestInit} [options] - Fetch options`);
  jsdoc.push(`   * @returns {Promise<${returnType}>}`);
  jsdoc.push('   */');

  // Build method parameters
  const methodParams = [];
  
  // Add path parameters with proper types
  methodParams.push(...pathParams.map(p => {
    const schema = p.schema || {};
    const type = schema.type === 'string' && schema.enum ? 
      (schema.enum as string[]).map(e => `'${e}'`).join(' | ') : 
      'string';
    return `${p.name}: ${type}`;
  }));
  
  // Add request body if needed with proper type
  if (hasRequestBody) {
    const schema = operation.requestBody?.content?.['application/json']?.schema;
    const type = schema ? generateTypeForSchema(schema) : 'any';
    methodParams.push(`data: ${type}`);
  }
  
  // Add query parameters if needed with proper types
  if (queryParams.length > 0) {
    const queryType = queryParams.map(param => {
      const schema = param.schema || {};
      let type = generateTypeForSchema(schema);
      if (schema.type === 'string' && schema.enum) {
        type = (schema.enum as string[]).map(e => `'${e}'`).join(' | ');
      }
      return `${param.name}?: ${type}`;
    }).join('; ');
    methodParams.push(`queryParams?: { ${queryType} }`);
  }
  
  // Add options parameter
  methodParams.push('options: RequestInit = {}');

  // Build the URL with path parameters
  let urlPath = path;
  for (const param of pathParams) {
    urlPath = urlPath.replace(`{${param.name}}`, `\${encodeURIComponent(${param.name})}`);
  }

  // Build query string if needed
  let queryString = '';
  if (queryParams.length > 0) {
    queryString = `
    const params = new URLSearchParams();
    if (queryParams) {
      ${queryParams.map(p => `if (queryParams.${p.name} !== undefined) params.set('${p.name}', String(queryParams.${p.name}));`).join('\n      ')}
    }
    const queryString = params.toString();`;
  }

  // Generate the method
  return `${jsdoc.join('\n')}
  async ${methodName}(${methodParams.join(', ')}): Promise<${returnType}> {
    const url = \`\${this.baseUrl}${urlPath}\`;${queryString}
    const response = await this.makeRequest<${returnType}>(url${queryParams.length > 0 ? ' + (queryString ? `?\${queryString}` : \'\')' : ''}, {
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
