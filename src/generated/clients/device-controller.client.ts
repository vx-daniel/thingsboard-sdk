import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class DeviceControllerClient extends BaseVXOlympusClient {
  async reClaimDeviceUsingDELETE(deviceName: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customer/device/${encodeURIComponent(deviceName)}/claim`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async claimDeviceUsingPOST(deviceName: string, data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customer/device/${encodeURIComponent(deviceName)}/claim{?subCustomerId}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getCustomerDeviceInfosUsingGET(customerId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/deviceInfos{?active,deviceProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getCustomerDevicesUsingGET(customerId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/devices{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveDeviceWithCredentialsUsingPOST(data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/device-with-credentials{?entityGroupId,entityGroupIds}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async processDevicesBulkImportUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/device/bulk_import`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async updateDeviceCredentialsUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/device/credentials`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getDeviceInfoByIdUsingGET(deviceId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/device/info/${encodeURIComponent(deviceId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getDeviceTypesUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/device/types`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getDeviceByIdUsingGET(deviceId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/device/${encodeURIComponent(deviceId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteDeviceUsingDELETE(deviceId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/device/${encodeURIComponent(deviceId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async getDeviceCredentialsByDeviceIdUsingGET(deviceId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/device/${encodeURIComponent(deviceId)}/credentials`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getAllDeviceInfosUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/deviceInfos/all{?active,deviceProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async findByQueryUsingPOST_1(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/devices`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async countByDeviceProfileAndEmptyOtaPackageUsingGET(otaPackageType: string, deviceProfileId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/devices/count/${encodeURIComponent(otaPackageType)}/${encodeURIComponent(deviceProfileId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async countByDeviceGroupAndEmptyOtaPackageUsingGET(otaPackageType: string, otaPackageId: string, entityGroupId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/devices/count/${encodeURIComponent(otaPackageType)}/${encodeURIComponent(otaPackageId)}/${encodeURIComponent(entityGroupId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getDevicesByIdsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/devices{?deviceIds}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveDeviceUsingPOST(data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/device{?accessToken,entityGroupId,entityGroupIds}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getDevicesByEntityGroupIdUsingGET(entityGroupId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/devices{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getTenantDeviceUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenant/devices{?deviceName}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getTenantDevicesUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenant/devices{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async assignDeviceToTenantUsingPOST(tenantId: string, deviceId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenant/${encodeURIComponent(tenantId)}/device/${encodeURIComponent(deviceId)}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async getUserDevicesUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user/devices{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}