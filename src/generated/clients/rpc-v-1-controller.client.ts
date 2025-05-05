import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class RpcV1ControllerClient extends BaseVXOlympusClient {  /**
   * @param {string} deviceId - Path parameter
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async handleOneWayDeviceRPCRequestWithData(deviceId: string, data: string, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/plugins/rpc/oneway/${encodeURIComponent(deviceId)}`;
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url, {
      method: 'POST',
      body: JSON.stringify(data),
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
  async handleTwoWayDeviceRPCRequestWithData(deviceId: string, data: string, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/plugins/rpc/twoway/${encodeURIComponent(deviceId)}`;
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}