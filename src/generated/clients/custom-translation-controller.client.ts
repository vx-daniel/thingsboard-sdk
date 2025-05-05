import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class CustomTranslationControllerClient extends BaseVXOlympusClient {
  async getCurrentCustomTranslationUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customTranslation/currentCustomTranslation`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getCustomTranslationUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customTranslation/customTranslation`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveCustomTranslationUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customTranslation/customTranslation`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}