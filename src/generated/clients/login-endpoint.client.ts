import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class LoginEndpointClient extends BaseVXOlympusClient {
  async loginPost(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/auth/login`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}