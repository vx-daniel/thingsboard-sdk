import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class TenantProfileControllerClient extends BaseVXOlympusClient {  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.TenantProfile>}
   */
  async saveTenantProfileWithData(data: schemas.TenantProfile, options: RequestInit = {}): Promise<schemas.TenantProfile> {
    const url = `${this.baseUrl}/api/tenantProfile`;
    const response = await this.makeRequest<schemas.TenantProfile>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} tenantProfileId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.TenantProfile>}
   */
  async getTenantProfileById(tenantProfileId: string, options: RequestInit = {}): Promise<schemas.TenantProfile> {
    const url = `${this.baseUrl}/api/tenantProfile/${encodeURIComponent(tenantProfileId)}`;
    const response = await this.makeRequest<schemas.TenantProfile>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} tenantProfileId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteTenantProfile(tenantProfileId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/tenantProfile/${encodeURIComponent(tenantProfileId)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} tenantProfileId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.TenantProfile>}
   */
  async setDefaultTenantProfile(tenantProfileId: string, options: RequestInit = {}): Promise<schemas.TenantProfile> {
    const url = `${this.baseUrl}/api/tenantProfile/${encodeURIComponent(tenantProfileId)}/default`;
    const response = await this.makeRequest<schemas.TenantProfile>(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.EntityInfo>}
   */
  async getDefaultTenantProfileInfo(options: RequestInit = {}): Promise<schemas.EntityInfo> {
    const url = `${this.baseUrl}/api/tenantProfileInfo/default`;
    const response = await this.makeRequest<schemas.EntityInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} tenantProfileId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.EntityInfo>}
   */
  async getTenantProfileInfoById(tenantProfileId: string, options: RequestInit = {}): Promise<schemas.EntityInfo> {
    const url = `${this.baseUrl}/api/tenantProfileInfo/${encodeURIComponent(tenantProfileId)}`;
    const response = await this.makeRequest<schemas.EntityInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_EntityInfo>}
   */
  async getTenantProfileInfos(queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'id' | 'name'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_EntityInfo> {
    const url = `${this.baseUrl}/api/tenantProfileInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_EntityInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.ids - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.TenantProfile>>}
   */
  async getTenantProfilesByIds(queryParams?: { ids?: string }, options: RequestInit = {}): Promise<Array<schemas.TenantProfile>> {
    const url = `${this.baseUrl}/api/tenantProfiles{?ids}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.ids !== undefined) params.set('ids', String(queryParams.ids));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.TenantProfile>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_TenantProfile>}
   */
  async getTenantProfiles(queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'createdTime' | 'description' | 'isDefault' | 'name'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_TenantProfile> {
    const url = `${this.baseUrl}/api/tenantProfiles{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_TenantProfile>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}