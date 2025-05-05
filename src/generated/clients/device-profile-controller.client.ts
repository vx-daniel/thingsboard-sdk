import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class DeviceProfileControllerClient extends BaseVXOlympusClient {
  async saveDeviceProfileUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/deviceProfile`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getAttributesKeysUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/deviceProfile/devices/keys/attributes{?deviceProfileId}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getTimeseriesKeysUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/deviceProfile/devices/keys/timeseries{?deviceProfileId}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getDeviceProfileNamesUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/deviceProfile/names{?activeOnly}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteDeviceProfileUsingDELETE(deviceProfileId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/deviceProfile/${encodeURIComponent(deviceProfileId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async setDefaultDeviceProfileUsingPOST(deviceProfileId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/deviceProfile/${encodeURIComponent(deviceProfileId)}/default`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async getDeviceProfileByIdUsingGET(deviceProfileId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/deviceProfile/${encodeURIComponent(deviceProfileId)}{?inlineImages}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getDefaultDeviceProfileInfoUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/deviceProfileInfo/default`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getDeviceProfileInfoByIdUsingGET(deviceProfileId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/deviceProfileInfo/${encodeURIComponent(deviceProfileId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getDeviceProfilesByIdsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/deviceProfileInfos{?deviceProfileIds}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getDeviceProfileInfosUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/deviceProfileInfos{?page,pageSize,sortOrder,sortProperty,textSearch,transportType}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getDeviceProfilesUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/deviceProfiles{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}