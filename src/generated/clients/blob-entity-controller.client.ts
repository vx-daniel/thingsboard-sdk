import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class BlobEntityControllerClient extends BaseVXOlympusClient {  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.blobEntityIds - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.BlobEntityInfo>>}
   */
  async getBlobEntitiesByIds(queryParams?: { blobEntityIds?: string }, options: RequestInit = {}): Promise<Array<schemas.BlobEntityInfo>> {
    const url = `${this.baseUrl}/api/blobEntities{?blobEntityIds}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.blobEntityIds !== undefined) params.set('blobEntityIds', String(queryParams.blobEntityIds));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.BlobEntityInfo>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
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
   * @param {integer} queryParams.startTime - Query parameter
   * @param {integer} queryParams.endTime - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_BlobEntityWithCustomerInfo>}
   */
  async getBlobEntities(queryParams?: { pageSize?: number; page?: number; type?: string; textSearch?: string; sortProperty?: 'contentType' | 'createdTime' | 'customerTitle' | 'name' | 'type'; sortOrder?: 'ASC' | 'DESC'; startTime?: number; endTime?: number }, options: RequestInit = {}): Promise<schemas.PageData_Of_BlobEntityWithCustomerInfo> {
    const url = `${this.baseUrl}/api/blobEntities{?endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch,type}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.type !== undefined) params.set('type', String(queryParams.type));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
      if (queryParams.startTime !== undefined) params.set('startTime', String(queryParams.startTime));
      if (queryParams.endTime !== undefined) params.set('endTime', String(queryParams.endTime));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_BlobEntityWithCustomerInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} blobEntityId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.BlobEntityWithCustomerInfo>}
   */
  async getBlobEntityInfoById(blobEntityId: string, options: RequestInit = {}): Promise<schemas.BlobEntityWithCustomerInfo> {
    const url = `${this.baseUrl}/api/blobEntity/info/${encodeURIComponent(blobEntityId)}`;
    const response = await this.makeRequest<schemas.BlobEntityWithCustomerInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} blobEntityId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteBlobEntity(blobEntityId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/blobEntity/${encodeURIComponent(blobEntityId)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} blobEntityId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.Resource>}
   */
  async downloadBlobEntity(blobEntityId: string, options: RequestInit = {}): Promise<schemas.Resource> {
    const url = `${this.baseUrl}/api/blobEntity/${encodeURIComponent(blobEntityId)}/download`;
    const response = await this.makeRequest<schemas.Resource>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}