import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class DeviceConnectivityControllerClient extends BaseVXOlympusClient {  /**
   * @param {string} deviceId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.Resource>}
   */
  async downloadGatewayDockerCompose(deviceId: string, options: RequestInit = {}): Promise<schemas.Resource> {
    const url = `${this.baseUrl}/api/device-connectivity/gateway-launch/${encodeURIComponent(deviceId)}/docker-compose/download`;
    const response = await this.makeRequest<schemas.Resource>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} deviceId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.JsonNode>}
   */
  async getDevicePublishTelemetryCommands(deviceId: string, options: RequestInit = {}): Promise<schemas.JsonNode> {
    const url = `${this.baseUrl}/api/device-connectivity/${encodeURIComponent(deviceId)}`;
    const response = await this.makeRequest<schemas.JsonNode>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} protocol - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.Resource>}
   */
  async downloadServerCertificate(protocol: string, options: RequestInit = {}): Promise<schemas.Resource> {
    const url = `${this.baseUrl}/api/device-connectivity/${encodeURIComponent(protocol)}/certificate/download`;
    const response = await this.makeRequest<schemas.Resource>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}