import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class TenantControllerClient extends BaseVXOlympusClient {  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.Tenant>}
   */
  async saveTenantWithData(data: schemas.Tenant, options: RequestInit = {}): Promise<schemas.Tenant> {
    const url = `${this.baseUrl}/api/tenant`;
    const response = await this.makeRequest<schemas.Tenant>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} tenantId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.TenantInfo>}
   */
  async getTenantInfoById(tenantId: string, options: RequestInit = {}): Promise<schemas.TenantInfo> {
    const url = `${this.baseUrl}/api/tenant/info/${encodeURIComponent(tenantId)}`;
    const response = await this.makeRequest<schemas.TenantInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} tenantId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.Tenant>}
   */
  async getTenantById(tenantId: string, options: RequestInit = {}): Promise<schemas.Tenant> {
    const url = `${this.baseUrl}/api/tenant/${encodeURIComponent(tenantId)}`;
    const response = await this.makeRequest<schemas.Tenant>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} tenantId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteTenant(tenantId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/tenant/${encodeURIComponent(tenantId)}`;
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
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_TenantInfo>}
   */
  async getTenantInfos(queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'address' | 'address2' | 'city' | 'country' | 'createdTime' | 'email' | 'phone' | 'state' | 'tenantProfileName' | 'title' | 'zip'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_TenantInfo> {
    const url = `${this.baseUrl}/api/tenantInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_TenantInfo>(url + (queryString ? `?${queryString}` : ''), {
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
   * @returns {Promise<schemas.PageData_Of_Tenant>}
   */
  async getTenants(queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'address' | 'address2' | 'city' | 'country' | 'createdTime' | 'email' | 'phone' | 'state' | 'title' | 'zip'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_Tenant> {
    const url = `${this.baseUrl}/api/tenants{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_Tenant>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.tenantIds - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.Tenant>>}
   */
  async getTenantsByIds(queryParams?: { tenantIds?: string }, options: RequestInit = {}): Promise<Array<schemas.Tenant>> {
    const url = `${this.baseUrl}/api/tenants{?tenantIds}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.tenantIds !== undefined) params.set('tenantIds', String(queryParams.tenantIds));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.Tenant>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}