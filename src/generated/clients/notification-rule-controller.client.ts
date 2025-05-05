import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class NotificationRuleControllerClient extends BaseVXOlympusClient {
  async saveNotificationRuleUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/rule`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getNotificationRuleByIdUsingGET(id: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/rule/${encodeURIComponent(id)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteNotificationRuleUsingDELETE(id: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/rule/${encodeURIComponent(id)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async getNotificationRulesUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/rules{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}