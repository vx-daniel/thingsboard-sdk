import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class CustomMenuControllerClient extends BaseVXOlympusClient {
  async getCurrentCustomMenuUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customMenu/currentCustomMenu`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getCustomMenuUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customMenu/customMenu`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveCustomMenuUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customMenu/customMenu`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}