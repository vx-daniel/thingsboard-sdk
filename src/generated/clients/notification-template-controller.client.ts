import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class NotificationTemplateControllerClient extends BaseVXOlympusClient {
  async listSlackConversationsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/slack/conversations{?token,type}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveNotificationTemplateUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/template`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getNotificationTemplateByIdUsingGET(id: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/template/${encodeURIComponent(id)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteNotificationTemplateByIdUsingDELETE(id: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/template/${encodeURIComponent(id)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async getNotificationTemplatesUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/templates{?notificationTypes,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}