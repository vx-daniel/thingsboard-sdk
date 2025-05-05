import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class TenantControllerClient extends BaseVXOlympusClient {
  async saveTenantUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenant`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getTenantInfoByIdUsingGET(tenantId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenant/info/${encodeURIComponent(tenantId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getTenantByIdUsingGET(tenantId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenant/${encodeURIComponent(tenantId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteTenantUsingDELETE(tenantId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenant/${encodeURIComponent(tenantId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async getTenantInfosUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenantInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getTenantsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenants{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getTenantsByIdsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenants{?tenantIds}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}