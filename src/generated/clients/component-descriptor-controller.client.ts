import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class ComponentDescriptorControllerClient extends BaseVXOlympusClient {  /**
   * @param {string} componentDescriptorClazz - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.ComponentDescriptor>}
   */
  async getComponentDescriptorByClazz(componentDescriptorClazz: string, options: RequestInit = {}): Promise<schemas.ComponentDescriptor> {
    const url = `${this.baseUrl}/api/component/${encodeURIComponent(componentDescriptorClazz)}`;
    const response = await this.makeRequest<schemas.ComponentDescriptor>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} componentType - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.ruleChainType - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.ComponentDescriptor>>}
   */
  async getComponentDescriptorsByType(componentType: 'ACTION' | 'ENRICHMENT' | 'EXTERNAL' | 'FILTER' | 'TRANSFORMATION', queryParams?: { ruleChainType?: 'CORE' | 'EDGE' }, options: RequestInit = {}): Promise<Array<schemas.ComponentDescriptor>> {
    const url = `${this.baseUrl}/api/components/${encodeURIComponent(componentType)}{?ruleChainType}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.ruleChainType !== undefined) params.set('ruleChainType', String(queryParams.ruleChainType));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.ComponentDescriptor>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.componentTypes - Query parameter
   * @param {string} queryParams.ruleChainType - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.ComponentDescriptor>>}
   */
  async getComponentDescriptorsByTypes(queryParams?: { componentTypes?: string; ruleChainType?: 'CORE' | 'EDGE' }, options: RequestInit = {}): Promise<Array<schemas.ComponentDescriptor>> {
    const url = `${this.baseUrl}/api/components{?componentTypes,ruleChainType}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.componentTypes !== undefined) params.set('componentTypes', String(queryParams.componentTypes));
      if (queryParams.ruleChainType !== undefined) params.set('ruleChainType', String(queryParams.ruleChainType));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.ComponentDescriptor>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}