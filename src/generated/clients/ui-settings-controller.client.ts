import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class UiSettingsControllerClient extends BaseVXOlympusClient {  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<string>}
   */
  async getHelpBaseUrl(options: RequestInit = {}): Promise<string> {
    const url = `${this.baseUrl}/api/uiSettings/helpBaseUrl`;
    const response = await this.makeRequest<string>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}