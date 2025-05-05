import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class ComponentDescriptorControllerClient extends BaseVXOlympusClient {
  async getComponentDescriptorByClazzUsingGET(componentDescriptorClazz: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/component/${encodeURIComponent(componentDescriptorClazz)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getComponentDescriptorsByTypeUsingGET(componentType: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/components/${encodeURIComponent(componentType)}{?ruleChainType}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getComponentDescriptorsByTypesUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/components{?componentTypes,ruleChainType}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}