import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class OAuth2ConfigTemplateControllerClient extends BaseVXOlympusClient {  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.OAuth2ClientRegistrationTemplate>>}
   */
  async getClientRegistrationTemplatesUsingGET_1(options: RequestInit = {}): Promise<Array<schemas.OAuth2ClientRegistrationTemplate>> {
    const url = `${this.baseUrl}/api/oauth2/config/template`;
    const response = await this.makeRequest<Array<schemas.OAuth2ClientRegistrationTemplate>>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.OAuth2ClientRegistrationTemplate>}
   */
  async saveClientRegistrationTemplateWithData(data: schemas.OAuth2ClientRegistrationTemplate, options: RequestInit = {}): Promise<schemas.OAuth2ClientRegistrationTemplate> {
    const url = `${this.baseUrl}/api/oauth2/config/template`;
    const response = await this.makeRequest<schemas.OAuth2ClientRegistrationTemplate>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} clientRegistrationTemplateId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteClientRegistrationTemplate(clientRegistrationTemplateId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/oauth2/config/template/${encodeURIComponent(clientRegistrationTemplateId)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }}