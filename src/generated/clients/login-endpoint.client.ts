import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class LoginEndpointClient extends BaseVXOlympusClient {  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.LoginResponse>}
   */
  async loginPostWithData(data: schemas.LoginRequest, options: RequestInit = {}): Promise<schemas.LoginResponse> {
    const url = `${this.baseUrl}/api/auth/login`;
    const response = await this.makeRequest<schemas.LoginResponse>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}