import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class DeviceConnectivityControllerClient extends BaseVXOlympusClient {
  async downloadGatewayDockerComposeUsingGET(deviceId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/device-connectivity/gateway-launch/${encodeURIComponent(deviceId)}/docker-compose/download`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getDevicePublishTelemetryCommandsUsingGET(deviceId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/device-connectivity/${encodeURIComponent(deviceId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async downloadServerCertificateUsingGET(protocol: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/device-connectivity/${encodeURIComponent(protocol)}/certificate/download`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}