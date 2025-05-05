import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class NotificationControllerClient extends BaseVXOlympusClient {
  async getAvailableDeliveryMethodsUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/deliveryMethods`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async createNotificationRequestUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/request`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getNotificationRequestPreviewUsingPOST(data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/request/preview{?recipientsPreviewSize}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getNotificationRequestByIdUsingGET(id: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/request/${encodeURIComponent(id)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteNotificationRequestUsingDELETE(id: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/request/${encodeURIComponent(id)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async getNotificationRequestsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/requests{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getNotificationSettingsUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/settings`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveNotificationSettingsUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/settings`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getUserNotificationSettingsUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/settings/user`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveUserNotificationSettingsUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/settings/user`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async deleteNotificationUsingDELETE(id: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/${encodeURIComponent(id)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async markNotificationAsReadUsingPUT(id: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/${encodeURIComponent(id)}/read`;
    const response = await this.makeRequest(url, {
      method: 'PUT',
      
      ...options,
    });
    return response;
  }

  async markAllNotificationsAsReadUsingPUT(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notifications/read`;
    const response = await this.makeRequest(url, {
      method: 'PUT',
      
      ...options,
    });
    return response;
  }

  async getNotificationsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notifications{?page,pageSize,sortOrder,sortProperty,textSearch,unreadOnly}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}