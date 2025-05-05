import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class EventControllerClient extends BaseVXOlympusClient {
  async clearEventsUsingPOST(entityType: string, entityId: string, data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/clear{?endTime,startTime}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getEventsUsingGET_1(entityType: string, entityId: string, eventType: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/${encodeURIComponent(eventType)}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getEventsUsingGET(entityType: string, entityId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getEventsUsingPOST(entityType: string, entityId: string, data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}