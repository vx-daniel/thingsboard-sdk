import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class RoleControllerClient extends BaseVXOlympusClient {  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.Role>}
   */
  async saveRoleWithData(data: schemas.Role, options: RequestInit = {}): Promise<schemas.Role> {
    const url = `${this.baseUrl}/api/role`;
    const response = await this.makeRequest<schemas.Role>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} roleId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.Role>}
   */
  async getRoleById(roleId: string, options: RequestInit = {}): Promise<schemas.Role> {
    const url = `${this.baseUrl}/api/role/${encodeURIComponent(roleId)}`;
    const response = await this.makeRequest<schemas.Role>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} roleId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteRole(roleId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/role/${encodeURIComponent(roleId)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.type - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_Role>}
   */
  async getRoles(queryParams?: { pageSize?: number; page?: number; type?: 'GENERIC' | 'GROUP'; textSearch?: string; sortProperty?: 'createdTime' | 'description' | 'name' | 'type'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_Role> {
    const url = `${this.baseUrl}/api/roles{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.type !== undefined) params.set('type', String(queryParams.type));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_Role>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.roleIds - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.Role>>}
   */
  async getRolesByIds(queryParams?: { roleIds?: string }, options: RequestInit = {}): Promise<Array<schemas.Role>> {
    const url = `${this.baseUrl}/api/roles{?roleIds}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.roleIds !== undefined) params.set('roleIds', String(queryParams.roleIds));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.Role>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}