import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class DeviceGroupOtaPackageControllerClient extends BaseVXOlympusClient {
  async saveDeviceGroupOtaPackageUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/deviceGroupOtaPackage`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getFirmwareByIdUsingGET(groupId: string, firmwareType: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/deviceGroupOtaPackage/${encodeURIComponent(groupId)}/${encodeURIComponent(firmwareType)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteDeviceGroupOtaPackageUsingDELETE(id: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/deviceGroupOtaPackage/${encodeURIComponent(id)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }}