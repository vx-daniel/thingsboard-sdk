import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class UsageInfoControllerClient extends BaseVXOlympusClient {
  async getTenantUsageInfoUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/usage`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}