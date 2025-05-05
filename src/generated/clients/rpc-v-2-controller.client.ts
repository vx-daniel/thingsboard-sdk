import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class RpcV2ControllerClient extends BaseVXOlympusClient {
  async handleOneWayDeviceRPCRequestUsingPOST_1(deviceId: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/rpc/oneway/${encodeURIComponent(deviceId)}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getPersistedRpcByDeviceUsingGET(deviceId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/rpc/persistent/device/${encodeURIComponent(deviceId)}{?page,pageSize,rpcStatus,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getPersistedRpcUsingGET(rpcId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/rpc/persistent/${encodeURIComponent(rpcId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteRpcUsingDELETE(rpcId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/rpc/persistent/${encodeURIComponent(rpcId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async handleTwoWayDeviceRPCRequestUsingPOST_1(deviceId: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/rpc/twoway/${encodeURIComponent(deviceId)}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}