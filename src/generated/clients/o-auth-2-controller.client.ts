import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class OAuth2ControllerClient extends BaseVXOlympusClient {  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.pkgName - Query parameter
   * @param {string} queryParams.platform - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.OAuth2ClientInfo>>}
   */
  async getOAuth2Clients(queryParams?: { pkgName?: string; platform?: 'ANDROID' | 'IOS' | 'WEB' }, options: RequestInit = {}): Promise<Array<schemas.OAuth2ClientInfo>> {
    const url = `${this.baseUrl}/api/noauth/oauth2Clients{?pkgName,platform}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pkgName !== undefined) params.set('pkgName', String(queryParams.pkgName));
      if (queryParams.platform !== undefined) params.set('platform', String(queryParams.platform));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.OAuth2ClientInfo>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.OAuth2Info>}
   */
  async getCurrentOAuth2Info(options: RequestInit = {}): Promise<schemas.OAuth2Info> {
    const url = `${this.baseUrl}/api/oauth2/config`;
    const response = await this.makeRequest<schemas.OAuth2Info>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.OAuth2Info>}
   */
  async saveOAuth2InfoWithData(data: schemas.OAuth2Info, options: RequestInit = {}): Promise<schemas.OAuth2Info> {
    const url = `${this.baseUrl}/api/oauth2/config`;
    const response = await this.makeRequest<schemas.OAuth2Info>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<string>}
   */
  async getLoginProcessingUrl(options: RequestInit = {}): Promise<string> {
    const url = `${this.baseUrl}/api/oauth2/loginProcessingUrl`;
    const response = await this.makeRequest<string>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}