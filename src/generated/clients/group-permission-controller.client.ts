import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class GroupPermissionControllerClient extends BaseVXOlympusClient {
  async getEntityGroupPermissionsUsingGET(entityGroupId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/groupPermissions`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveGroupPermissionUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/groupPermission`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getGroupPermissionInfoByIdUsingGET(groupPermissionId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/groupPermission/info/${encodeURIComponent(groupPermissionId)}{?isUserGroup}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getGroupPermissionByIdUsingGET(groupPermissionId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/groupPermission/${encodeURIComponent(groupPermissionId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteGroupPermissionUsingDELETE(groupPermissionId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/groupPermission/${encodeURIComponent(groupPermissionId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async loadUserGroupPermissionInfosUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/userGroup/groupPermissions/info`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getUserGroupPermissionsUsingGET(userGroupId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/userGroup/${encodeURIComponent(userGroupId)}/groupPermissions`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}