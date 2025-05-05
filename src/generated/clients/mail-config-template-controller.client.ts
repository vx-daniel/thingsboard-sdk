import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class MailConfigTemplateControllerClient extends BaseVXOlympusClient {
  async getClientRegistrationTemplatesUsingGET(options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/mail/config/template`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.JsonNodeSchemaSchema.parse(responseData);
  }}