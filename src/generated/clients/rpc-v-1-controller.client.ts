import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class RpcV1ControllerClient extends BaseVXOlympusClient {
  async handleOneWayDeviceRPCRequestUsingPOST(deviceId: string, data: string, options?: RequestInit) {
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

    const url = new URL(`/api/plugins/rpc/oneway/${encodeURIComponent(deviceId)}`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_ResponseEntitySchemaSchema.parse(responseData);
  }

  async handleTwoWayDeviceRPCRequestUsingPOST(deviceId: string, data: string, options?: RequestInit) {
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

    const url = new URL(`/api/plugins/rpc/twoway/${encodeURIComponent(deviceId)}`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_ResponseEntitySchemaSchema.parse(responseData);
  }}