import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class NotificationTargetControllerClient extends BaseVXOlympusClient {
  async saveNotificationTargetUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/target`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getRecipientsForNotificationTargetConfigUsingPOST(data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/target/recipients{?page,pageSize}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getNotificationTargetByIdUsingGET(id: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/target/${encodeURIComponent(id)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteNotificationTargetByIdUsingDELETE(id: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/target/${encodeURIComponent(id)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async getNotificationTargetsByIdsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/targets{?ids}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getNotificationTargetsBySupportedNotificationTypeUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/targets{?notificationType,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getNotificationTargetsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/notification/targets{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}