import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class DeviceControllerClient extends BaseVXOlympusClient {  /**
   * @param {string} deviceName - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async reClaimDevice(deviceName: string, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/customer/device/${encodeURIComponent(deviceName)}/claim`;
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} deviceName - Path parameter
   * @param {object} data - Request body
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.subCustomerId - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async claimDeviceWithData(deviceName: string, data: schemas.ClaimRequest, queryParams?: { subCustomerId?: string }, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/customer/device/${encodeURIComponent(deviceName)}/claim{?subCustomerId}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.subCustomerId !== undefined) params.set('subCustomerId', String(queryParams.subCustomerId));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url + (queryString ? `?${queryString}` : ''), {
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
   * @param {string} queryParams.deviceProfileId - Query parameter
   * @param {boolean} queryParams.active - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_DeviceInfo>}
   */
  async getCustomerDeviceInfos(customerId: string, queryParams?: { pageSize?: number; page?: number; includeCustomers?: boolean; deviceProfileId?: string; active?: boolean; textSearch?: string; sortProperty?: 'createdTime' | 'customerTitle' | 'deviceProfileName' | 'label' | 'name'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_DeviceInfo> {
    const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/deviceInfos{?active,deviceProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.includeCustomers !== undefined) params.set('includeCustomers', String(queryParams.includeCustomers));
      if (queryParams.deviceProfileId !== undefined) params.set('deviceProfileId', String(queryParams.deviceProfileId));
      if (queryParams.active !== undefined) params.set('active', String(queryParams.active));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_DeviceInfo>(url + (queryString ? `?${queryString}` : ''), {
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
   * @returns {Promise<schemas.PageData_Of_Device>}
   */
  async getCustomerDevices(customerId: string, queryParams?: { pageSize?: number; page?: number; type?: string; textSearch?: string; sortProperty?: 'createdTime' | 'customerTitle' | 'deviceProfileName' | 'label' | 'name'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_Device> {
    const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/devices{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
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
    const response = await this.makeRequest<schemas.PageData_Of_Device>(url + (queryString ? `?${queryString}` : ''), {
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
   * @returns {Promise<schemas.Device>}
   */
  async saveDeviceWithCredentialsWithData(data: schemas.SaveDeviceWithCredentialsRequest, queryParams?: { entityGroupId?: string; entityGroupIds?: string }, options: RequestInit = {}): Promise<schemas.Device> {
    const url = `${this.baseUrl}/api/device-with-credentials{?entityGroupId,entityGroupIds}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.entityGroupId !== undefined) params.set('entityGroupId', String(queryParams.entityGroupId));
      if (queryParams.entityGroupIds !== undefined) params.set('entityGroupIds', String(queryParams.entityGroupIds));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.Device>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.BulkImportResult_Of_Device>}
   */
  async processDevicesBulkImportWithData(data: schemas.BulkImportRequest, options: RequestInit = {}): Promise<schemas.BulkImportResult_Of_Device> {
    const url = `${this.baseUrl}/api/device/bulk_import`;
    const response = await this.makeRequest<schemas.BulkImportResult_Of_Device>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeviceCredentials>}
   */
  async updateDeviceCredentialsWithData(data: schemas.DeviceCredentials, options: RequestInit = {}): Promise<schemas.DeviceCredentials> {
    const url = `${this.baseUrl}/api/device/credentials`;
    const response = await this.makeRequest<schemas.DeviceCredentials>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} deviceId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeviceInfo>}
   */
  async getDeviceInfoById(deviceId: string, options: RequestInit = {}): Promise<schemas.DeviceInfo> {
    const url = `${this.baseUrl}/api/device/info/${encodeURIComponent(deviceId)}`;
    const response = await this.makeRequest<schemas.DeviceInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.EntitySubtype>>}
   */
  async getDeviceTypes(options: RequestInit = {}): Promise<Array<schemas.EntitySubtype>> {
    const url = `${this.baseUrl}/api/device/types`;
    const response = await this.makeRequest<Array<schemas.EntitySubtype>>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} deviceId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.Device>}
   */
  async getDeviceById(deviceId: string, options: RequestInit = {}): Promise<schemas.Device> {
    const url = `${this.baseUrl}/api/device/${encodeURIComponent(deviceId)}`;
    const response = await this.makeRequest<schemas.Device>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} deviceId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteDevice(deviceId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/device/${encodeURIComponent(deviceId)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} deviceId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeviceCredentials>}
   */
  async getDeviceCredentialsByDeviceId(deviceId: string, options: RequestInit = {}): Promise<schemas.DeviceCredentials> {
    const url = `${this.baseUrl}/api/device/${encodeURIComponent(deviceId)}/credentials`;
    const response = await this.makeRequest<schemas.DeviceCredentials>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {boolean} queryParams.includeCustomers - Query parameter
   * @param {string} queryParams.deviceProfileId - Query parameter
   * @param {boolean} queryParams.active - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_DeviceInfo>}
   */
  async getAllDeviceInfos(queryParams?: { pageSize?: number; page?: number; includeCustomers?: boolean; deviceProfileId?: string; active?: boolean; textSearch?: string; sortProperty?: 'createdTime' | 'customerTitle' | 'deviceProfileName' | 'label' | 'name'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_DeviceInfo> {
    const url = `${this.baseUrl}/api/deviceInfos/all{?active,deviceProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.includeCustomers !== undefined) params.set('includeCustomers', String(queryParams.includeCustomers));
      if (queryParams.deviceProfileId !== undefined) params.set('deviceProfileId', String(queryParams.deviceProfileId));
      if (queryParams.active !== undefined) params.set('active', String(queryParams.active));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_DeviceInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.Device>>}
   */
  async findByQueryUsingPOST_1WithData(data: schemas.DeviceSearchQuery, options: RequestInit = {}): Promise<Array<schemas.Device>> {
    const url = `${this.baseUrl}/api/devices`;
    const response = await this.makeRequest<Array<schemas.Device>>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} otaPackageType - Path parameter
   * @param {string} deviceProfileId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<number>}
   */
  async countByDeviceProfileAndEmptyOtaPackage(otaPackageType: 'FIRMWARE' | 'SOFTWARE', deviceProfileId: string, options: RequestInit = {}): Promise<number> {
    const url = `${this.baseUrl}/api/devices/count/${encodeURIComponent(otaPackageType)}/${encodeURIComponent(deviceProfileId)}`;
    const response = await this.makeRequest<number>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} otaPackageType - Path parameter
   * @param {string} otaPackageId - Path parameter
   * @param {string} entityGroupId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<number>}
   */
  async countByDeviceGroupAndEmptyOtaPackage(otaPackageType: 'FIRMWARE' | 'SOFTWARE', otaPackageId: string, entityGroupId: string, options: RequestInit = {}): Promise<number> {
    const url = `${this.baseUrl}/api/devices/count/${encodeURIComponent(otaPackageType)}/${encodeURIComponent(otaPackageId)}/${encodeURIComponent(entityGroupId)}`;
    const response = await this.makeRequest<number>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.deviceIds - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.Device>>}
   */
  async getDevicesByIds(queryParams?: { deviceIds?: string }, options: RequestInit = {}): Promise<Array<schemas.Device>> {
    const url = `${this.baseUrl}/api/devices{?deviceIds}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.deviceIds !== undefined) params.set('deviceIds', String(queryParams.deviceIds));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.Device>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.accessToken - Query parameter
   * @param {string} queryParams.entityGroupId - Query parameter
   * @param {string} queryParams.entityGroupIds - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.Device>}
   */
  async saveDeviceWithData(data: schemas.Device, queryParams?: { accessToken?: string; entityGroupId?: string; entityGroupIds?: string }, options: RequestInit = {}): Promise<schemas.Device> {
    const url = `${this.baseUrl}/api/device{?accessToken,entityGroupId,entityGroupIds}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.accessToken !== undefined) params.set('accessToken', String(queryParams.accessToken));
      if (queryParams.entityGroupId !== undefined) params.set('entityGroupId', String(queryParams.entityGroupId));
      if (queryParams.entityGroupIds !== undefined) params.set('entityGroupIds', String(queryParams.entityGroupIds));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.Device>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      body: JSON.stringify(data),
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
   * @returns {Promise<schemas.PageData_Of_Device>}
   */
  async getDevicesByEntityGroupId(entityGroupId: string, queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'createdTime' | 'customerTitle' | 'deviceProfileName' | 'label' | 'name'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_Device> {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/devices{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_Device>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.deviceName - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.Device>}
   */
  async getTenantDevice(queryParams?: { deviceName?: string }, options: RequestInit = {}): Promise<schemas.Device> {
    const url = `${this.baseUrl}/api/tenant/devices{?deviceName}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.deviceName !== undefined) params.set('deviceName', String(queryParams.deviceName));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.Device>(url + (queryString ? `?${queryString}` : ''), {
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
   * @returns {Promise<schemas.PageData_Of_Device>}
   */
  async getTenantDevices(queryParams?: { pageSize?: number; page?: number; type?: string; textSearch?: string; sortProperty?: 'createdTime' | 'customerTitle' | 'deviceProfileName' | 'label' | 'name'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_Device> {
    const url = `${this.baseUrl}/api/tenant/devices{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
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
    const response = await this.makeRequest<schemas.PageData_Of_Device>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} tenantId - Path parameter
   * @param {string} deviceId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.Device>}
   */
  async assignDeviceToTenant(tenantId: string, deviceId: string, options: RequestInit = {}): Promise<schemas.Device> {
    const url = `${this.baseUrl}/api/tenant/${encodeURIComponent(tenantId)}/device/${encodeURIComponent(deviceId)}`;
    const response = await this.makeRequest<schemas.Device>(url, {
      method: 'POST',
      
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
   * @returns {Promise<schemas.PageData_Of_Device>}
   */
  async getUserDevices(queryParams?: { pageSize?: number; page?: number; type?: string; textSearch?: string; sortProperty?: 'createdTime' | 'customerTitle' | 'deviceProfileName' | 'label' | 'name'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_Device> {
    const url = `${this.baseUrl}/api/user/devices{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
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
    const response = await this.makeRequest<schemas.PageData_Of_Device>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}