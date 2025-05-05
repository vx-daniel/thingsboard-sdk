import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class QueueControllerClient extends BaseVXOlympusClient {
  async getQueueByNameUsingGET(queueName: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/queues/name/${encodeURIComponent(queueName)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getQueueByIdUsingGET(queueId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/queues/${encodeURIComponent(queueId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteQueueUsingDELETE(queueId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/queues/${encodeURIComponent(queueId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async getTenantQueuesByServiceTypeUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/queues{?page,pageSize,serviceType,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveQueueUsingPOST(data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/queues{?serviceType}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}