import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class MailConfigTemplateControllerClient extends BaseVXOlympusClient {  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.JsonNode>}
   */
  async getClientRegistrationTemplates(options: RequestInit = {}): Promise<schemas.JsonNode> {
    const url = `${this.baseUrl}/api/mail/config/template`;
    const response = await this.makeRequest<schemas.JsonNode>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}