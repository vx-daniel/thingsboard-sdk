import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class QueueControllerClient extends BaseVXOlympusClient {
  async getQueueByNameUsingGET(queueName: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/queues/name/${encodeURIComponent(queueName)}`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.QueueSchemaSchema.parse(responseData);
  }

  async getQueueByIdUsingGET(queueId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/queues/${encodeURIComponent(queueId)}`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.QueueSchemaSchema.parse(responseData);
  }

  async deleteQueueUsingDELETE(queueId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/queues/${encodeURIComponent(queueId)}`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  }

  async getTenantQueuesByServiceTypeUsingGET(serviceType: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/queues{?page,pageSize,serviceType,sortOrder,sortProperty,textSearch}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (serviceType !== undefined) searchParams.append('serviceType', String(serviceType));
    if (pageSize !== undefined) searchParams.append('pageSize', String(pageSize));
    if (page !== undefined) searchParams.append('page', String(page));
    if (textSearch !== undefined) searchParams.append('textSearch', String(textSearch));
    if (sortProperty !== undefined) searchParams.append('sortProperty', String(sortProperty));
    if (sortOrder !== undefined) searchParams.append('sortOrder', String(sortOrder));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.PageData_Of_QueueSchemaSchema.parse(responseData);
  }

  async saveQueueUsingPOST(serviceType: string, data: schemas.Queue, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    config.body = JSON.stringify(data);

    const url = new URL(`/api/queues{?serviceType}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (serviceType !== undefined) searchParams.append('serviceType', String(serviceType));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.QueueSchemaSchema.parse(responseData);
  }}