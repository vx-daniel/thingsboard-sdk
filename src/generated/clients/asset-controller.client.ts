import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class AssetControllerClient extends BaseVXOlympusClient {
  async processAssetBulkImportUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/asset/bulk_import`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getAssetInfoByIdUsingGET(assetId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/asset/info/${encodeURIComponent(assetId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getAssetTypesUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/asset/types`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getAssetByIdUsingGET(assetId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/asset/${encodeURIComponent(assetId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteAssetUsingDELETE(assetId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/asset/${encodeURIComponent(assetId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async getAllAssetInfosUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/assetInfos/all{?assetProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async findByQueryUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/assets`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getAssetsByIdsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/assets{?assetIds}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveAssetUsingPOST(data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/asset{?entityGroupId,entityGroupIds}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getCustomerAssetInfosUsingGET(customerId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/assetInfos{?assetProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getCustomerAssetsUsingGET(customerId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/assets{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getAssetsByEntityGroupIdUsingGET(entityGroupId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/assets{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getTenantAssetUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenant/assets{?assetName}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getTenantAssetsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenant/assets{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getUserAssetsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user/assets{?assetProfileId,page,pageSize,sortOrder,sortProperty,textSearch,type}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}