import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class DeviceConnectivityControllerClient extends BaseVXOlympusClient {
  async downloadGatewayDockerComposeUsingGET(deviceId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/device-connectivity/gateway-launch/${encodeURIComponent(deviceId)}/docker-compose/download`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.ResourceSchemaSchema.parse(responseData);
  }

  async getDevicePublishTelemetryCommandsUsingGET(deviceId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/device-connectivity/${encodeURIComponent(deviceId)}`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.JsonNodeSchemaSchema.parse(responseData);
  }

  async downloadServerCertificateUsingGET(protocol: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/device-connectivity/${encodeURIComponent(protocol)}/certificate/download`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.ResourceSchemaSchema.parse(responseData);
  }}