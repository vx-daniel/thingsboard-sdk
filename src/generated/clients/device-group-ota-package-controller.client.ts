import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class DeviceGroupOtaPackageControllerClient extends BaseVXOlympusClient {  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeviceGroupOtaPackage>}
   */
  async saveDeviceGroupOtaPackageWithData(data: schemas.DeviceGroupOtaPackage, options: RequestInit = {}): Promise<schemas.DeviceGroupOtaPackage> {
    const url = `${this.baseUrl}/api/deviceGroupOtaPackage`;
    const response = await this.makeRequest<schemas.DeviceGroupOtaPackage>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} groupId - Path parameter
   * @param {string} firmwareType - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeviceGroupOtaPackage>}
   */
  async getFirmwareById(groupId: string, firmwareType: string, options: RequestInit = {}): Promise<schemas.DeviceGroupOtaPackage> {
    const url = `${this.baseUrl}/api/deviceGroupOtaPackage/${encodeURIComponent(groupId)}/${encodeURIComponent(firmwareType)}`;
    const response = await this.makeRequest<schemas.DeviceGroupOtaPackage>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} id - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteDeviceGroupOtaPackage(id: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/deviceGroupOtaPackage/${encodeURIComponent(id)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }}