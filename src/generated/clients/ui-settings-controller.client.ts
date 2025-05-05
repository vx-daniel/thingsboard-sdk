import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class UiSettingsControllerClient extends BaseVXOlympusClient {
  async getHelpBaseUrlUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/uiSettings/helpBaseUrl`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}