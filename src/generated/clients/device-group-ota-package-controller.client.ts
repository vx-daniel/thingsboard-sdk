import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class DeviceGroupOtaPackageControllerClient extends BaseVXOlympusClient {
  async saveDeviceGroupOtaPackageUsingPOST(data: schemas.DeviceGroupOtaPackage, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    config.body = JSON.stringify(data);

    const url = new URL(`/api/deviceGroupOtaPackage`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeviceGroupOtaPackageSchemaSchema.parse(responseData);
  }

  async getFirmwareByIdUsingGET(groupId: string, firmwareType: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/deviceGroupOtaPackage/${encodeURIComponent(groupId)}/${encodeURIComponent(firmwareType)}`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeviceGroupOtaPackageSchemaSchema.parse(responseData);
  }

  async deleteDeviceGroupOtaPackageUsingDELETE(id: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/deviceGroupOtaPackage/${encodeURIComponent(id)}`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  }}