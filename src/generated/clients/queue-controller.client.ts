import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class QueueControllerClient extends BaseVXOlympusClient {  /**
   * @param {string} queueName - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.Queue>}
   */
  async getQueueByName(queueName: string, options: RequestInit = {}): Promise<schemas.Queue> {
    const url = `${this.baseUrl}/api/queues/name/${encodeURIComponent(queueName)}`;
    const response = await this.makeRequest<schemas.Queue>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} queueId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.Queue>}
   */
  async getQueueById(queueId: string, options: RequestInit = {}): Promise<schemas.Queue> {
    const url = `${this.baseUrl}/api/queues/${encodeURIComponent(queueId)}`;
    const response = await this.makeRequest<schemas.Queue>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} queueId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteQueue(queueId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/queues/${encodeURIComponent(queueId)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.serviceType - Query parameter
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_Queue>}
   */
  async getTenantQueuesByServiceType(queryParams?: { serviceType?: 'JS-EXECUTOR' | 'TB-CORE' | 'TB-RULE-ENGINE' | 'TB-TRANSPORT'; pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'createdTime' | 'name' | 'topic'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_Queue> {
    const url = `${this.baseUrl}/api/queues{?page,pageSize,serviceType,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.serviceType !== undefined) params.set('serviceType', String(queryParams.serviceType));
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_Queue>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.serviceType - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.Queue>}
   */
  async saveQueueWithData(data: schemas.Queue, queryParams?: { serviceType?: 'JS-EXECUTOR' | 'TB-CORE' | 'TB-RULE-ENGINE' | 'TB-TRANSPORT' }, options: RequestInit = {}): Promise<schemas.Queue> {
    const url = `${this.baseUrl}/api/queues{?serviceType}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.serviceType !== undefined) params.set('serviceType', String(queryParams.serviceType));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.Queue>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}