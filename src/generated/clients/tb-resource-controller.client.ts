import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class TbResourceControllerClient extends BaseVXOlympusClient {  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.TbResourceInfo>}
   */
  async saveResourceWithData(data: schemas.TbResource, options: RequestInit = {}): Promise<schemas.TbResourceInfo> {
    const url = `${this.baseUrl}/api/resource`;
    const response = await this.makeRequest<schemas.TbResourceInfo>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} resourceId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.TbResourceInfo>}
   */
  async getResourceInfoById(resourceId: string, options: RequestInit = {}): Promise<schemas.TbResourceInfo> {
    const url = `${this.baseUrl}/api/resource/info/${encodeURIComponent(resourceId)}`;
    const response = await this.makeRequest<schemas.TbResourceInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} resourceId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async downloadJksResourceIfChanged(resourceId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/resource/jks/${encodeURIComponent(resourceId)}/download`;
    const response = await this.makeRequest<void>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} resourceId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async downloadJsResourceIfChanged(resourceId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/resource/js/${encodeURIComponent(resourceId)}/download`;
    const response = await this.makeRequest<void>(url, {
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
   * @returns {Promise<Array<schemas.LwM2mObject>>}
   */
  async getLwm2mListObjectsPage(queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'id' | 'name'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<Array<schemas.LwM2mObject>> {
    const url = `${this.baseUrl}/api/resource/lwm2m/page{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.LwM2mObject>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} resourceId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async downloadLwm2mResourceIfChanged(resourceId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/resource/lwm2m/${encodeURIComponent(resourceId)}/download`;
    const response = await this.makeRequest<void>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.objectIds - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.LwM2mObject>>}
   */
  async getLwm2mListObjects(queryParams?: { sortOrder?: 'ASC' | 'DESC'; sortProperty?: 'id' | 'name'; objectIds?: string }, options: RequestInit = {}): Promise<Array<schemas.LwM2mObject>> {
    const url = `${this.baseUrl}/api/resource/lwm2m{?objectIds,sortOrder,sortProperty}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.objectIds !== undefined) params.set('objectIds', String(queryParams.objectIds));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.LwM2mObject>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} resourceId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async downloadPkcs12ResourceIfChanged(resourceId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/resource/pkcs12/${encodeURIComponent(resourceId)}/download`;
    const response = await this.makeRequest<void>(url, {
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
   * @returns {Promise<schemas.PageData_Of_TbResourceInfo>}
   */
  async getTenantResources(queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'createdTime' | 'resourceType' | 'tenantId' | 'title'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_TbResourceInfo> {
    const url = `${this.baseUrl}/api/resource/tenant{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_TbResourceInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} resourceId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteResource(resourceId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/resource/${encodeURIComponent(resourceId)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} resourceId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.ByteArrayResource>}
   */
  async downloadResource(resourceId: string, options: RequestInit = {}): Promise<schemas.ByteArrayResource> {
    const url = `${this.baseUrl}/api/resource/${encodeURIComponent(resourceId)}/download`;
    const response = await this.makeRequest<schemas.ByteArrayResource>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.resourceType - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_TbResourceInfo>}
   */
  async getResources(queryParams?: { pageSize?: number; page?: number; resourceType?: 'JKS' | 'JS_MODULE' | 'LWM2M_MODEL' | 'PKCS_12'; textSearch?: string; sortProperty?: 'createdTime' | 'resourceType' | 'tenantId' | 'title'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_TbResourceInfo> {
    const url = `${this.baseUrl}/api/resource{?page,pageSize,resourceType,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.resourceType !== undefined) params.set('resourceType', String(queryParams.resourceType));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_TbResourceInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}