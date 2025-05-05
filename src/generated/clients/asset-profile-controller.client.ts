import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class AssetProfileControllerClient extends BaseVXOlympusClient {
  async saveAssetProfileUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/assetProfile`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getAssetProfileNamesUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/assetProfile/names{?activeOnly}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteAssetProfileUsingDELETE(assetProfileId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/assetProfile/${encodeURIComponent(assetProfileId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async setDefaultAssetProfileUsingPOST(assetProfileId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/assetProfile/${encodeURIComponent(assetProfileId)}/default`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async getAssetProfileByIdUsingGET(assetProfileId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/assetProfile/${encodeURIComponent(assetProfileId)}{?inlineImages}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getDefaultAssetProfileInfoUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/assetProfileInfo/default`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getAssetProfileInfoByIdUsingGET(assetProfileId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/assetProfileInfo/${encodeURIComponent(assetProfileId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getAssetProfilesByIdsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/assetProfileInfos{?assetProfileIds}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getAssetProfileInfosUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/assetProfileInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getAssetProfilesUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/assetProfiles{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}