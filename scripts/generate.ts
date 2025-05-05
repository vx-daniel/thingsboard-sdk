import { OpenAPIRegistry, extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { z } from 'zod';

/**
 * OpenAPI operation interface representing a single API endpoint.
 * 
 * @description This interface represents a single API endpoint, including its unique identifier, parameters, request body, responses, tags, summary, and description.
 */
interface OpenAPIOperation {
  /** Unique identifier for the operation */
  operationId?: string;
  /** Array of operation parameters */
  parameters?: Array<{
    /** Parameter location (path, query, etc.) */
    in: string;
    /** Parameter name */
    name: string;
    /** Parameter description */
    description?: string;
    /** Parameter schema */
    schema?: {
      /** Data type */
      type?: string;
      /** Possible enum values */
      enum?: string[];
    };
  }>;
  /** Request body definition */
  requestBody?: {
    content?: {
      'application/json'?: {
        schema?: any;
      };
    };
  };
  /** Response definitions */
  responses?: {
    [key: string]: {
      content?: {
        'application/json'?: {
          schema?: any;
        };
      };
    };
  };
  /** Operation tags */
  tags?: string[];
  /** Operation summary */
  summary?: string;
  /** Operation description */
  description?: string;
}

/**
 * OpenAPI path item interface representing a single API endpoint.
 * Contains operations for different HTTP methods (GET, POST, etc.)
 */
interface OpenAPIPathItem {
  [method: string]: OpenAPIOperation;
}

/**
 * OpenAPI specification interface.
 * Contains paths and components sections of the OpenAPI spec.
 */
interface OpenAPISpec {
  paths: {
    [path: string]: OpenAPIPathItem;
  };
  components?: {
    schemas?: any;
  };
}

/**
 * Sanitizes a class name by removing special characters and converting to PascalCase.
 * 
 * @param name - The raw class name to sanitize
 * @returns The sanitized class name
 * @example
 * sanitizeClassName('user-controller') // returns 'UserController'
 */
function sanitizeClassName(name: string): string {
  return name
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

/**
 * Sanitizes a type name by removing special characters and converting to PascalCase.
 * 
 * @param name - The raw type name to sanitize
 * @returns The sanitized type name
 * @example
 * sanitizeTypeName('user-id') // returns 'UserId'
 */
function sanitizeTypeName(name: string): string {
  return name
    .replace(/«/g, '_Of_')
    .replace(/»/g, '')
    .replace(/\s+/g, '_')
    .replace(/[^a-zA-Z0-9_]/g, '_');
}

/**
 * Sanitizes a schema name by removing special characters and converting to PascalCase.
 * 
 * @param name - The raw schema name to sanitize
 * @returns The sanitized schema name
 * @example
 * sanitizeSchemaName('user-id-schema') // returns 'UserIdSchema'
 */
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

/**
 * Generates a TypeScript type definition from an OpenAPI schema.
 * 
 * @param schema - The OpenAPI schema to convert
 * @returns The TypeScript type definition
 * @example
 * generateTypeForSchema({ type: 'string' }) // returns 'string'
 */
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

/**
 * Generates method name from an OpenAPI operation, removing HTTP method suffixes
 * and adding appropriate suffixes for operations with request bodies.
 * 
 * @param operation - The OpenAPI operation
 * @returns The generated method name
 * @example
 * generateMethodName({ operationId: 'getUserByIdUsingGET' }) // returns 'getUserById'
 */
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

/**
 * Generates a TypeScript method implementation for an OpenAPI operation.
 * 
 * @param operation - The OpenAPI operation to generate code for
 * @param path - The API endpoint path
 * @param method - The HTTP method (GET, POST, etc.)
 * @returns The generated TypeScript method code
 * @example
 * generateApiMethod({ operationId: 'getUserByIdUsingGET' }, '/users/{id}', 'GET') // returns the generated method code
 */
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

/**
 * Collects type dependencies from an OpenAPI schema.
 * 
 * @param schema - The schema to analyze
 * @param deps - Set to store collected dependencies
 */
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

/**
 * Generates TypeScript code for all schemas in the OpenAPI specification.
 * This function handles:
 * 1. Schema declarations for handling circular dependencies
 * 2. Schema implementations with proper type inference
 * 3. Type exports for each schema
 * 
 * @param schemas - Record of schema definitions from OpenAPI spec
 * @returns Generated TypeScript code for schemas as a string
 * @example
 * ```typescript
 * // Input schema:
 * {
 *   "User": {
 *     "type": "object",
 *     "properties": {
 *       "id": { "type": "string" },
 *       "name": { "type": "string" }
 *     }
 *   }
 * }
 * 
 * // Generated output:
 * export const UserSchema = z.lazy(() => UserSchemaImpl);
 * const UserSchemaImpl = z.object({
 *   id: z.string(),
 *   name: z.string()
 * });
 * export type User = z.infer<typeof UserSchema>;
 * ```
 */
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

/**
 * Generates a Zod schema definition from an OpenAPI schema.
 * Handles various schema types including:
 * - Primitive types (string, number, boolean)
 * - Arrays
 * - Objects with properties
 * - Enums
 * - References to other schemas
 * 
 * @param schema - The OpenAPI schema to convert
 * @returns A string containing the Zod schema definition
 * @example
 * ```typescript
 * // Input schema:
 * {
 *   "type": "object",
 *   "properties": {
 *     "name": { "type": "string" },
 *     "age": { "type": "number" },
 *     "roles": {
 *       "type": "array",
 *       "items": { "type": "string" }
 *     }
 *   }
 * }
 * 
 * // Generated output:
 * z.object({
 *   name: z.string(),
 *   age: z.number(),
 *   roles: z.array(z.string())
 * })
 * ```
 */
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

/**
 * Generates TypeScript client code for all paths in the OpenAPI specification.
 * Creates separate client classes for each API tag, with methods for each operation.
 * 
 * @param spec - The complete OpenAPI specification
 * @returns Object containing:
 *   - index: Content for the index file that exports all clients
 *   - clientFiles: Record of generated client files by filename
 * @example
 * ```typescript
 * // Generated client class:
 * export class UserClient extends BaseVXOlympusClient {
 *   async getUser(id: string): Promise<User> {
 *     const url = `${this.baseUrl}/users/${id}`;
 *     return this.makeRequest<User>(url);
 *   }
 * }
 * ```
 */
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

/**
 * Main function to generate TypeScript SDK from OpenAPI specification.
 * Reads the OpenAPI spec, generates types and clients, and writes them to files.
 */
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

generate().catch(console.error);
