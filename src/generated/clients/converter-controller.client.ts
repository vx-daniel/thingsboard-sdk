import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class ConverterControllerClient extends BaseVXOlympusClient {
  async saveConverterUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/converter`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async testDownLinkConverterUsingPOST(data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/converter/testDownLink{?scriptLang}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async testUpLinkConverterUsingPOST(data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/converter/testUpLink{?scriptLang}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getConverterByIdUsingGET(converterId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/converter/${encodeURIComponent(converterId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteConverterUsingDELETE(converterId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/converter/${encodeURIComponent(converterId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async getLatestConverterDebugInputUsingGET(converterId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/converter/${encodeURIComponent(converterId)}/debugIn{?converterType,integrationName,integrationType}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getConvertersByIdsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/converters{?converterIds}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getConvertersUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/converters{?isEdgeTemplate,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}