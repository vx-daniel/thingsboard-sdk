import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class GroupPermissionControllerClient extends BaseVXOlympusClient {  /**
   * @param {string} entityGroupId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.GroupPermissionInfo>>}
   */
  async getEntityGroupPermissions(entityGroupId: string, options: RequestInit = {}): Promise<Array<schemas.GroupPermissionInfo>> {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/groupPermissions`;
    const response = await this.makeRequest<Array<schemas.GroupPermissionInfo>>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.GroupPermission>}
   */
  async saveGroupPermissionWithData(data: schemas.GroupPermission, options: RequestInit = {}): Promise<schemas.GroupPermission> {
    const url = `${this.baseUrl}/api/groupPermission`;
    const response = await this.makeRequest<schemas.GroupPermission>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} groupPermissionId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {boolean} queryParams.isUserGroup - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.GroupPermissionInfo>}
   */
  async getGroupPermissionInfoById(groupPermissionId: string, queryParams?: { isUserGroup?: boolean }, options: RequestInit = {}): Promise<schemas.GroupPermissionInfo> {
    const url = `${this.baseUrl}/api/groupPermission/info/${encodeURIComponent(groupPermissionId)}{?isUserGroup}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.isUserGroup !== undefined) params.set('isUserGroup', String(queryParams.isUserGroup));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.GroupPermissionInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} groupPermissionId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.GroupPermission>}
   */
  async getGroupPermissionById(groupPermissionId: string, options: RequestInit = {}): Promise<schemas.GroupPermission> {
    const url = `${this.baseUrl}/api/groupPermission/${encodeURIComponent(groupPermissionId)}`;
    const response = await this.makeRequest<schemas.GroupPermission>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} groupPermissionId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteGroupPermission(groupPermissionId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/groupPermission/${encodeURIComponent(groupPermissionId)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.GroupPermissionInfo>>}
   */
  async loadUserGroupPermissionInfosWithData(data: Array<schemas.GroupPermission>, options: RequestInit = {}): Promise<Array<schemas.GroupPermissionInfo>> {
    const url = `${this.baseUrl}/api/userGroup/groupPermissions/info`;
    const response = await this.makeRequest<Array<schemas.GroupPermissionInfo>>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} userGroupId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.GroupPermissionInfo>>}
   */
  async getUserGroupPermissions(userGroupId: string, options: RequestInit = {}): Promise<Array<schemas.GroupPermissionInfo>> {
    const url = `${this.baseUrl}/api/userGroup/${encodeURIComponent(userGroupId)}/groupPermissions`;
    const response = await this.makeRequest<Array<schemas.GroupPermissionInfo>>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}