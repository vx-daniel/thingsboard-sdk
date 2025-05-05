import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class RoleControllerClient extends BaseVXOlympusClient {
  async saveRoleUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/role`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getRoleByIdUsingGET(roleId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/role/${encodeURIComponent(roleId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteRoleUsingDELETE(roleId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/role/${encodeURIComponent(roleId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async getRolesUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/roles{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getRolesByIdsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/roles{?roleIds}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}