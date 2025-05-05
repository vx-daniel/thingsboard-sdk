import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class RpcV2ControllerClient extends BaseVXOlympusClient {  /**
   * @param {string} deviceId - Path parameter
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async handleOneWayDeviceRPCRequestUsingPOST_1WithData(deviceId: string, data: string, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/rpc/oneway/${encodeURIComponent(deviceId)}`;
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} deviceId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.rpcStatus - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async getPersistedRpcByDevice(deviceId: string, queryParams?: { pageSize?: number; page?: number; rpcStatus?: 'DELIVERED' | 'EXPIRED' | 'FAILED' | 'QUEUED' | 'SENT' | 'SUCCESSFUL' | 'TIMEOUT'; textSearch?: string; sortProperty?: 'createdTime' | 'expirationTime' | 'request' | 'response'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/rpc/persistent/device/${encodeURIComponent(deviceId)}{?page,pageSize,rpcStatus,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.rpcStatus !== undefined) params.set('rpcStatus', String(queryParams.rpcStatus));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} rpcId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.Rpc>}
   */
  async getPersistedRpc(rpcId: string, options: RequestInit = {}): Promise<schemas.Rpc> {
    const url = `${this.baseUrl}/api/rpc/persistent/${encodeURIComponent(rpcId)}`;
    const response = await this.makeRequest<schemas.Rpc>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} rpcId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteRpc(rpcId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/rpc/persistent/${encodeURIComponent(rpcId)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} deviceId - Path parameter
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async handleTwoWayDeviceRPCRequestUsingPOST_1WithData(deviceId: string, data: string, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/rpc/twoway/${encodeURIComponent(deviceId)}`;
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}