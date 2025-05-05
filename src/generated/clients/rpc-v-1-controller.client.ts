import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class RpcV1ControllerClient extends BaseVXOlympusClient {
  async handleOneWayDeviceRPCRequestUsingPOST(deviceId: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/plugins/rpc/oneway/${encodeURIComponent(deviceId)}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async handleTwoWayDeviceRPCRequestUsingPOST(deviceId: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/plugins/rpc/twoway/${encodeURIComponent(deviceId)}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}