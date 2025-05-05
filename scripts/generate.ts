import { OpenAPIRegistry, extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { z } from 'zod';

interface OpenAPIOperation {
  operationId?: string;
  parameters?: Array<{
    name: string;
    in: string;
    schema: any;
  }>;
  requestBody?: {
    content?: {
      'application/json'?: {
        schema?: any;
      };
    };
  };
  responses?: {
    [key: string]: {
      content?: {
        'application/json'?: {
          schema?: any;
        };
      };
    };
  };
}

interface OpenAPIPathItem {
  [method: string]: OpenAPIOperation;
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

async function generate() {
  // Extend Zod with OpenAPI functionality
  extendZodWithOpenApi(z);

  // Read the OpenAPI spec
  const apiSpec = require('../api-docs.json');
  
  const registry = new OpenAPIRegistry();

  // First pass: collect all schema names and their dependencies
  const schemaDeps: Record<string, Set<string>> = {};
  const schemas = apiSpec.components?.schemas || {};

  Object.entries(schemas).forEach(([name, schema]: [string, any]) => {
    const sanitizedName = sanitizeTypeName(name);
    schemaDeps[sanitizedName] = new Set();
    collectDependencies(schema, schemaDeps[sanitizedName]);
  });

  // Sort schemas topologically
  const sortedSchemas = topologicalSort(schemaDeps);

  // Generate TypeScript types
  const schemaTypes = `
import { z } from 'zod';

// Initialize all schemas with empty objects to handle circular dependencies
${Object.keys(schemaDeps).map(name => {
    const schema = Object.entries(schemas).find(([n]) => sanitizeTypeName(n) === name)?.[1] as any;
    const isObject = schema?.type === 'object';
    return `let ${name}Schema = ${isObject ? 'z.object({})' : 'z.lazy(() => z.object({}))'};`;
  }).join('\n')}

// Now define the actual schema contents
${sortedSchemas.map(name => {
    const schema = Object.entries(schemas).find(([n]) => sanitizeTypeName(n) === name)?.[1];
    if (!schema) return '';
    const zodSchema = generateZodSchema(schema);
    return `
${name}Schema = ${zodSchema};
export type ${name} = z.infer<typeof ${name}Schema>;
export { ${name}Schema };
  `;
  }).join('\n')}
`;

  // Ensure the generated directory exists
  mkdirSync(join(__dirname, '../src/generated'), { recursive: true });
  
  // Write the generated schemas to a file
  writeFileSync(
    join(__dirname, '../src/generated/schemas.ts'),
    schemaTypes
  );

  // Generate the API client
  const apiClient = `
import { z } from 'zod';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BaseVXOlympusClient } from '../base-client';
import * as schemas from './schemas';

export class VXOlympusClient extends BaseVXOlympusClient {
  constructor(baseURL: string, token?: string) {
    super(baseURL, token);
  }

  ${generateApiMethods(apiSpec.paths)}
}

export * from './schemas';
`;

  writeFileSync(
    join(__dirname, '../src/generated/index.ts'),
    apiClient
  );
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
        return `${refName}Schema`;
      }
      return 'z.lazy(() => z.object({}))';
  }
}

function generateApiMethods(paths: OpenAPIPaths): string {
  if (!paths) return '';

  const methods: string[] = [];

  Object.entries(paths).forEach(([path, pathItem]) => {
    Object.entries(pathItem || {}).forEach(([method, operation]) => {
      if (!operation?.operationId) return;

      const parameters = operation.parameters || [];
      const requestBody = operation.requestBody?.content?.['application/json']?.schema;
      const successResponse = Object.entries(operation.responses || {})
        .find(([code]) => code.startsWith('2'));
      
      const responseSchema = successResponse?.[1]?.content?.['application/json']?.schema;

      const methodParams = [
        ...parameters.map((p) => `${sanitizeIdentifier(p.name)}: ${generateTypeForSchema(p.schema)}`),
        requestBody ? `data: ${generateTypeForSchema(requestBody)}` : '',
        'options?: AxiosRequestConfig'
      ].filter(Boolean);

      const queryParams = parameters
        .filter((p) => p.in === 'query')
        .map((p) => p.name);

      const pathParams = parameters
        .filter((p) => p.in === 'path')
        .map((p) => p.name);

      const methodConfig = {
        method: method.toUpperCase(),
        url: pathParams.reduce(
          (url: string, param: string) => url.replace(`{${param}}`, `\${${sanitizeIdentifier(param)}}`),
          path
        ),
        queryParams,
        hasBody: !!requestBody,
        responseSchema: responseSchema?.$ref ? sanitizeTypeName(responseSchema.$ref.split('/').pop() || '') : null
      };

      methods.push(`
  async ${sanitizeIdentifier(operation.operationId)}(${methodParams.join(', ')}) {
    const config: AxiosRequestConfig = {
      ...options,
      method: '${methodConfig.method}',
      url: \`${methodConfig.url}\`${methodConfig.queryParams.length ? `,
      params: {
        ${queryParams.map((param) => `${sanitizeIdentifier(param)}: ${sanitizeIdentifier(param)}`).join(',\n        ')}
      }` : ''}${methodConfig.hasBody ? ',\n      data' : ''}
    };

    const response = await this.client.request(config);
    ${methodConfig.responseSchema 
      ? `return schemas.${methodConfig.responseSchema}Schema.parse(response.data);`
      : 'return response.data;'}
  }`);
    });
  });

  return methods.join('\n\n');
}

function generateTypeForSchema(schema: any): string {
  if (!schema) return 'void';

  if (schema.$ref) {
    const refName = sanitizeTypeName(schema.$ref.split('/').pop() || '');
    return `schemas.${refName}`;
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
      return `${generateTypeForSchema(schema.items)}[]`;
    case 'object':
      if (schema.additionalProperties) {
        const valueType = generateTypeForSchema(schema.additionalProperties);
        return `Record<string, ${valueType}>`;
      }
      return 'Record<string, any>';
    default:
      return 'any';
  }
}

generate().catch(console.error);
