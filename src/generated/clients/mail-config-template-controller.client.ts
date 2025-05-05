import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class MailConfigTemplateControllerClient extends BaseVXOlympusClient {
  async getClientRegistrationTemplatesUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/mail/config/template`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}