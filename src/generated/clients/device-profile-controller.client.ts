import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class DeviceProfileControllerClient extends BaseVXOlympusClient {  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeviceProfile>}
   */
  async saveDeviceProfileWithData(data: schemas.DeviceProfile, options: RequestInit = {}): Promise<schemas.DeviceProfile> {
    const url = `${this.baseUrl}/api/deviceProfile`;
    const response = await this.makeRequest<schemas.DeviceProfile>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.deviceProfileId - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<string>>}
   */
  async getAttributesKeys(queryParams?: { deviceProfileId?: string }, options: RequestInit = {}): Promise<Array<string>> {
    const url = `${this.baseUrl}/api/deviceProfile/devices/keys/attributes{?deviceProfileId}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.deviceProfileId !== undefined) params.set('deviceProfileId', String(queryParams.deviceProfileId));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<string>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.deviceProfileId - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<string>>}
   */
  async getTimeseriesKeys(queryParams?: { deviceProfileId?: string }, options: RequestInit = {}): Promise<Array<string>> {
    const url = `${this.baseUrl}/api/deviceProfile/devices/keys/timeseries{?deviceProfileId}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.deviceProfileId !== undefined) params.set('deviceProfileId', String(queryParams.deviceProfileId));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<string>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
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
  async getDeviceProfileNames(queryParams?: { activeOnly?: boolean }, options: RequestInit = {}): Promise<Array<schemas.EntityInfo>> {
    const url = `${this.baseUrl}/api/deviceProfile/names{?activeOnly}`;
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
   * @param {string} deviceProfileId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteDeviceProfile(deviceProfileId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/deviceProfile/${encodeURIComponent(deviceProfileId)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} deviceProfileId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeviceProfile>}
   */
  async setDefaultDeviceProfile(deviceProfileId: string, options: RequestInit = {}): Promise<schemas.DeviceProfile> {
    const url = `${this.baseUrl}/api/deviceProfile/${encodeURIComponent(deviceProfileId)}/default`;
    const response = await this.makeRequest<schemas.DeviceProfile>(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} deviceProfileId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {boolean} queryParams.inlineImages - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeviceProfile>}
   */
  async getDeviceProfileById(deviceProfileId: string, queryParams?: { inlineImages?: boolean }, options: RequestInit = {}): Promise<schemas.DeviceProfile> {
    const url = `${this.baseUrl}/api/deviceProfile/${encodeURIComponent(deviceProfileId)}{?inlineImages}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.inlineImages !== undefined) params.set('inlineImages', String(queryParams.inlineImages));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.DeviceProfile>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeviceProfileInfo>}
   */
  async getDefaultDeviceProfileInfo(options: RequestInit = {}): Promise<schemas.DeviceProfileInfo> {
    const url = `${this.baseUrl}/api/deviceProfileInfo/default`;
    const response = await this.makeRequest<schemas.DeviceProfileInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} deviceProfileId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeviceProfileInfo>}
   */
  async getDeviceProfileInfoById(deviceProfileId: string, options: RequestInit = {}): Promise<schemas.DeviceProfileInfo> {
    const url = `${this.baseUrl}/api/deviceProfileInfo/${encodeURIComponent(deviceProfileId)}`;
    const response = await this.makeRequest<schemas.DeviceProfileInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.deviceProfileIds - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.DeviceProfileInfo>>}
   */
  async getDeviceProfilesByIds(queryParams?: { deviceProfileIds?: string }, options: RequestInit = {}): Promise<Array<schemas.DeviceProfileInfo>> {
    const url = `${this.baseUrl}/api/deviceProfileInfos{?deviceProfileIds}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.deviceProfileIds !== undefined) params.set('deviceProfileIds', String(queryParams.deviceProfileIds));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.DeviceProfileInfo>>(url + (queryString ? `?${queryString}` : ''), {
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
   * @param {string} queryParams.transportType - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_DeviceProfileInfo>}
   */
  async getDeviceProfileInfos(queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'createdTime' | 'description' | 'isDefault' | 'name' | 'transportType' | 'type'; sortOrder?: 'ASC' | 'DESC'; transportType?: 'COAP' | 'DEFAULT' | 'LWM2M' | 'MQTT' | 'SNMP' }, options: RequestInit = {}): Promise<schemas.PageData_Of_DeviceProfileInfo> {
    const url = `${this.baseUrl}/api/deviceProfileInfos{?page,pageSize,sortOrder,sortProperty,textSearch,transportType}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
      if (queryParams.transportType !== undefined) params.set('transportType', String(queryParams.transportType));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_DeviceProfileInfo>(url + (queryString ? `?${queryString}` : ''), {
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
   * @returns {Promise<schemas.PageData_Of_DeviceProfile>}
   */
  async getDeviceProfiles(queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'createdTime' | 'description' | 'isDefault' | 'name' | 'transportType' | 'type'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_DeviceProfile> {
    const url = `${this.baseUrl}/api/deviceProfiles{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_DeviceProfile>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}