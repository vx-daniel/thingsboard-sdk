import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class TenantProfileControllerClient extends BaseVXOlympusClient {
  async saveTenantProfileUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenantProfile`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getTenantProfileByIdUsingGET(tenantProfileId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenantProfile/${encodeURIComponent(tenantProfileId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteTenantProfileUsingDELETE(tenantProfileId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenantProfile/${encodeURIComponent(tenantProfileId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async setDefaultTenantProfileUsingPOST(tenantProfileId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenantProfile/${encodeURIComponent(tenantProfileId)}/default`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async getDefaultTenantProfileInfoUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenantProfileInfo/default`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getTenantProfileInfoByIdUsingGET(tenantProfileId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenantProfileInfo/${encodeURIComponent(tenantProfileId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getTenantProfileInfosUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenantProfileInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getTenantProfilesByIdsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenantProfiles{?ids}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getTenantProfilesUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenantProfiles{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}