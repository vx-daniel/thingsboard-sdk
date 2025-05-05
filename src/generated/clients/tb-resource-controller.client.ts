import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class TbResourceControllerClient extends BaseVXOlympusClient {
  async saveResourceUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/resource`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getResourceInfoByIdUsingGET(resourceId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/resource/info/${encodeURIComponent(resourceId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async downloadJksResourceIfChangedUsingGET(resourceId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/resource/jks/${encodeURIComponent(resourceId)}/download`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async downloadJsResourceIfChangedUsingGET(resourceId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/resource/js/${encodeURIComponent(resourceId)}/download`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getLwm2mListObjectsPageUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/resource/lwm2m/page{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async downloadLwm2mResourceIfChangedUsingGET(resourceId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/resource/lwm2m/${encodeURIComponent(resourceId)}/download`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getLwm2mListObjectsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/resource/lwm2m{?objectIds,sortOrder,sortProperty}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async downloadPkcs12ResourceIfChangedUsingGET(resourceId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/resource/pkcs12/${encodeURIComponent(resourceId)}/download`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getTenantResourcesUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/resource/tenant{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteResourceUsingDELETE(resourceId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/resource/${encodeURIComponent(resourceId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async downloadResourceUsingGET(resourceId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/resource/${encodeURIComponent(resourceId)}/download`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getResourcesUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/resource{?page,pageSize,resourceType,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}