import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class OAuth2ControllerClient extends BaseVXOlympusClient {
  async getOAuth2ClientsUsingPOST(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/noauth/oauth2Clients{?pkgName,platform}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async getCurrentOAuth2InfoUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/oauth2/config`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveOAuth2InfoUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/oauth2/config`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getLoginProcessingUrlUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/oauth2/loginProcessingUrl`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}