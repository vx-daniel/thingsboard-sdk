import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class ComponentDescriptorControllerClient extends BaseVXOlympusClient {
  async getComponentDescriptorByClazzUsingGET(componentDescriptorClazz: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/component/${encodeURIComponent(componentDescriptorClazz)}`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.ComponentDescriptorSchemaSchema.parse(responseData);
  }

  async getComponentDescriptorsByTypeUsingGET(componentType: string, ruleChainType: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/components/${encodeURIComponent(componentType)}{?ruleChainType}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (ruleChainType !== undefined) searchParams.append('ruleChainType', String(ruleChainType));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  }

  async getComponentDescriptorsByTypesUsingGET(componentTypes: string, ruleChainType: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/components{?componentTypes,ruleChainType}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (componentTypes !== undefined) searchParams.append('componentTypes', String(componentTypes));
    if (ruleChainType !== undefined) searchParams.append('ruleChainType', String(ruleChainType));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  }}