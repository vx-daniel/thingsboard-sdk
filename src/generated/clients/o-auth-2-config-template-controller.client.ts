import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class OAuth2ConfigTemplateControllerClient extends BaseVXOlympusClient {
  async getClientRegistrationTemplatesUsingGET_1(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/oauth2/config/template`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveClientRegistrationTemplateUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/oauth2/config/template`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async deleteClientRegistrationTemplateUsingDELETE(clientRegistrationTemplateId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/oauth2/config/template/${encodeURIComponent(clientRegistrationTemplateId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }}