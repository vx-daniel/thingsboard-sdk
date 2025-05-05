import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class AssetProfileControllerClient extends BaseVXOlympusClient {  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.AssetProfile>}
   */
  async saveAssetProfileWithData(data: schemas.AssetProfile, options: RequestInit = {}): Promise<schemas.AssetProfile> {
    const url = `${this.baseUrl}/api/assetProfile`;
    const response = await this.makeRequest<schemas.AssetProfile>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {boolean} queryParams.activeOnly - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.EntityInfo>>}
   */
  async getAssetProfileNames(queryParams?: { activeOnly?: boolean }, options: RequestInit = {}): Promise<Array<schemas.EntityInfo>> {
    const url = `${this.baseUrl}/api/assetProfile/names{?activeOnly}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.activeOnly !== undefined) params.set('activeOnly', String(queryParams.activeOnly));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.EntityInfo>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} assetProfileId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteAssetProfile(assetProfileId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/assetProfile/${encodeURIComponent(assetProfileId)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} assetProfileId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.AssetProfile>}
   */
  async setDefaultAssetProfile(assetProfileId: string, options: RequestInit = {}): Promise<schemas.AssetProfile> {
    const url = `${this.baseUrl}/api/assetProfile/${encodeURIComponent(assetProfileId)}/default`;
    const response = await this.makeRequest<schemas.AssetProfile>(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} assetProfileId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {boolean} queryParams.inlineImages - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.AssetProfile>}
   */
  async getAssetProfileById(assetProfileId: string, queryParams?: { inlineImages?: boolean }, options: RequestInit = {}): Promise<schemas.AssetProfile> {
    const url = `${this.baseUrl}/api/assetProfile/${encodeURIComponent(assetProfileId)}{?inlineImages}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.inlineImages !== undefined) params.set('inlineImages', String(queryParams.inlineImages));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.AssetProfile>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.AssetProfileInfo>}
   */
  async getDefaultAssetProfileInfo(options: RequestInit = {}): Promise<schemas.AssetProfileInfo> {
    const url = `${this.baseUrl}/api/assetProfileInfo/default`;
    const response = await this.makeRequest<schemas.AssetProfileInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} assetProfileId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.AssetProfileInfo>}
   */
  async getAssetProfileInfoById(assetProfileId: string, options: RequestInit = {}): Promise<schemas.AssetProfileInfo> {
    const url = `${this.baseUrl}/api/assetProfileInfo/${encodeURIComponent(assetProfileId)}`;
    const response = await this.makeRequest<schemas.AssetProfileInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.assetProfileIds - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.AssetProfileInfo>>}
   */
  async getAssetProfilesByIds(queryParams?: { assetProfileIds?: string }, options: RequestInit = {}): Promise<Array<schemas.AssetProfileInfo>> {
    const url = `${this.baseUrl}/api/assetProfileInfos{?assetProfileIds}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.assetProfileIds !== undefined) params.set('assetProfileIds', String(queryParams.assetProfileIds));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.AssetProfileInfo>>(url + (queryString ? `?${queryString}` : ''), {
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
   * @returns {Promise<schemas.PageData_Of_AssetProfileInfo>}
   */
  async getAssetProfileInfos(queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'createdTime' | 'description' | 'isDefault' | 'name'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_AssetProfileInfo> {
    const url = `${this.baseUrl}/api/assetProfileInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_AssetProfileInfo>(url + (queryString ? `?${queryString}` : ''), {
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
   * @returns {Promise<schemas.PageData_Of_AssetProfile>}
   */
  async getAssetProfiles(queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'createdTime' | 'description' | 'isDefault' | 'name'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_AssetProfile> {
    const url = `${this.baseUrl}/api/assetProfiles{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_AssetProfile>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}