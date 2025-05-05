import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class AssetControllerClient extends BaseVXOlympusClient {  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.BulkImportResult_Of_Asset>}
   */
  async processAssetBulkImportWithData(data: schemas.BulkImportRequest, options: RequestInit = {}): Promise<schemas.BulkImportResult_Of_Asset> {
    const url = `${this.baseUrl}/api/asset/bulk_import`;
    const response = await this.makeRequest<schemas.BulkImportResult_Of_Asset>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} assetId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.AssetInfo>}
   */
  async getAssetInfoById(assetId: string, options: RequestInit = {}): Promise<schemas.AssetInfo> {
    const url = `${this.baseUrl}/api/asset/info/${encodeURIComponent(assetId)}`;
    const response = await this.makeRequest<schemas.AssetInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.EntitySubtype>>}
   */
  async getAssetTypes(options: RequestInit = {}): Promise<Array<schemas.EntitySubtype>> {
    const url = `${this.baseUrl}/api/asset/types`;
    const response = await this.makeRequest<Array<schemas.EntitySubtype>>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} assetId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.Asset>}
   */
  async getAssetById(assetId: string, options: RequestInit = {}): Promise<schemas.Asset> {
    const url = `${this.baseUrl}/api/asset/${encodeURIComponent(assetId)}`;
    const response = await this.makeRequest<schemas.Asset>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} assetId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteAsset(assetId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/asset/${encodeURIComponent(assetId)}`;
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
   * @param {boolean} queryParams.includeCustomers - Query parameter
   * @param {string} queryParams.assetProfileId - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_AssetInfo>}
   */
  async getAllAssetInfos(queryParams?: { pageSize?: number; page?: number; includeCustomers?: boolean; assetProfileId?: string; textSearch?: string; sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_AssetInfo> {
    const url = `${this.baseUrl}/api/assetInfos/all{?assetProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.includeCustomers !== undefined) params.set('includeCustomers', String(queryParams.includeCustomers));
      if (queryParams.assetProfileId !== undefined) params.set('assetProfileId', String(queryParams.assetProfileId));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_AssetInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.Asset>>}
   */
  async findByQueryWithData(data: schemas.AssetSearchQuery, options: RequestInit = {}): Promise<Array<schemas.Asset>> {
    const url = `${this.baseUrl}/api/assets`;
    const response = await this.makeRequest<Array<schemas.Asset>>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.assetIds - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.Asset>>}
   */
  async getAssetsByIds(queryParams?: { assetIds?: string }, options: RequestInit = {}): Promise<Array<schemas.Asset>> {
    const url = `${this.baseUrl}/api/assets{?assetIds}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.assetIds !== undefined) params.set('assetIds', String(queryParams.assetIds));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.Asset>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.entityGroupId - Query parameter
   * @param {string} queryParams.entityGroupIds - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.Asset>}
   */
  async saveAssetWithData(data: schemas.Asset, queryParams?: { entityGroupId?: string; entityGroupIds?: string }, options: RequestInit = {}): Promise<schemas.Asset> {
    const url = `${this.baseUrl}/api/asset{?entityGroupId,entityGroupIds}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.entityGroupId !== undefined) params.set('entityGroupId', String(queryParams.entityGroupId));
      if (queryParams.entityGroupIds !== undefined) params.set('entityGroupIds', String(queryParams.entityGroupIds));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.Asset>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} customerId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {boolean} queryParams.includeCustomers - Query parameter
   * @param {string} queryParams.assetProfileId - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_AssetInfo>}
   */
  async getCustomerAssetInfos(customerId: string, queryParams?: { pageSize?: number; page?: number; includeCustomers?: boolean; assetProfileId?: string; textSearch?: string; sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_AssetInfo> {
    const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/assetInfos{?assetProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.includeCustomers !== undefined) params.set('includeCustomers', String(queryParams.includeCustomers));
      if (queryParams.assetProfileId !== undefined) params.set('assetProfileId', String(queryParams.assetProfileId));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_AssetInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} customerId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.type - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_Asset>}
   */
  async getCustomerAssets(customerId: string, queryParams?: { pageSize?: number; page?: number; type?: string; textSearch?: string; sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_Asset> {
    const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/assets{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
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
    const response = await this.makeRequest<schemas.PageData_Of_Asset>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityGroupId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_Asset>}
   */
  async getAssetsByEntityGroupId(entityGroupId: string, queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_Asset> {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/assets{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_Asset>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.assetName - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.Asset>}
   */
  async getTenantAsset(queryParams?: { assetName?: string }, options: RequestInit = {}): Promise<schemas.Asset> {
    const url = `${this.baseUrl}/api/tenant/assets{?assetName}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.assetName !== undefined) params.set('assetName', String(queryParams.assetName));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.Asset>(url + (queryString ? `?${queryString}` : ''), {
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
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_Asset>}
   */
  async getTenantAssets(queryParams?: { pageSize?: number; page?: number; type?: string; textSearch?: string; sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_Asset> {
    const url = `${this.baseUrl}/api/tenant/assets{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
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
    const response = await this.makeRequest<schemas.PageData_Of_Asset>(url + (queryString ? `?${queryString}` : ''), {
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
   * @param {string} queryParams.assetProfileId - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_Asset>}
   */
  async getUserAssets(queryParams?: { pageSize?: number; page?: number; type?: string; assetProfileId?: string; textSearch?: string; sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_Asset> {
    const url = `${this.baseUrl}/api/user/assets{?assetProfileId,page,pageSize,sortOrder,sortProperty,textSearch,type}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.type !== undefined) params.set('type', String(queryParams.type));
      if (queryParams.assetProfileId !== undefined) params.set('assetProfileId', String(queryParams.assetProfileId));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_Asset>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}