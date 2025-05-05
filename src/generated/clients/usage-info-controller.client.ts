import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class UsageInfoControllerClient extends BaseVXOlympusClient {  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.UsageInfo>}
   */
  async getTenantUsageInfo(options: RequestInit = {}): Promise<schemas.UsageInfo> {
    const url = `${this.baseUrl}/api/usage`;
    const response = await this.makeRequest<schemas.UsageInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}