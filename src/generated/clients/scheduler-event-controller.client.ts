import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class SchedulerEventControllerClient extends BaseVXOlympusClient {  /**
   * @param {string} edgeId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.SchedulerEventInfo>>}
   */
  async getAllSchedulerEvents(edgeId: string, options: RequestInit = {}): Promise<Array<schemas.SchedulerEventInfo>> {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/allSchedulerEvents`;
    const response = await this.makeRequest<Array<schemas.SchedulerEventInfo>>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} edgeId - Path parameter
   * @param {string} schedulerEventId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.SchedulerEventInfo>}
   */
  async assignSchedulerEventToEdge(edgeId: string, schedulerEventId: string, options: RequestInit = {}): Promise<schemas.SchedulerEventInfo> {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/schedulerEvent/${encodeURIComponent(schedulerEventId)}`;
    const response = await this.makeRequest<schemas.SchedulerEventInfo>(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} edgeId - Path parameter
   * @param {string} schedulerEventId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.SchedulerEventInfo>}
   */
  async unassignSchedulerEventFromEdge(edgeId: string, schedulerEventId: string, options: RequestInit = {}): Promise<schemas.SchedulerEventInfo> {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/schedulerEvent/${encodeURIComponent(schedulerEventId)}`;
    const response = await this.makeRequest<schemas.SchedulerEventInfo>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} edgeId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_SchedulerEventInfo>}
   */
  async getEdgeSchedulerEvents(edgeId: string, queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: string; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_SchedulerEventInfo> {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/schedulerEvents{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_SchedulerEventInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.SchedulerEvent>}
   */
  async saveSchedulerEventWithData(data: schemas.SchedulerEvent, options: RequestInit = {}): Promise<schemas.SchedulerEvent> {
    const url = `${this.baseUrl}/api/schedulerEvent`;
    const response = await this.makeRequest<schemas.SchedulerEvent>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} schedulerEventId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.SchedulerEventWithCustomerInfo>}
   */
  async getSchedulerEventInfoById(schedulerEventId: string, options: RequestInit = {}): Promise<schemas.SchedulerEventWithCustomerInfo> {
    const url = `${this.baseUrl}/api/schedulerEvent/info/${encodeURIComponent(schedulerEventId)}`;
    const response = await this.makeRequest<schemas.SchedulerEventWithCustomerInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} schedulerEventId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.SchedulerEvent>}
   */
  async getSchedulerEventById(schedulerEventId: string, options: RequestInit = {}): Promise<schemas.SchedulerEvent> {
    const url = `${this.baseUrl}/api/schedulerEvent/${encodeURIComponent(schedulerEventId)}`;
    const response = await this.makeRequest<schemas.SchedulerEvent>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} schedulerEventId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteSchedulerEvent(schedulerEventId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/schedulerEvent/${encodeURIComponent(schedulerEventId)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.schedulerEventIds - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.SchedulerEventInfo>>}
   */
  async getSchedulerEventsByIds(queryParams?: { schedulerEventIds?: string }, options: RequestInit = {}): Promise<Array<schemas.SchedulerEventInfo>> {
    const url = `${this.baseUrl}/api/schedulerEvents{?schedulerEventIds}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.schedulerEventIds !== undefined) params.set('schedulerEventIds', String(queryParams.schedulerEventIds));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.SchedulerEventInfo>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.type - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.SchedulerEventWithCustomerInfo>>}
   */
  async getSchedulerEvents(queryParams?: { type?: string }, options: RequestInit = {}): Promise<Array<schemas.SchedulerEventWithCustomerInfo>> {
    const url = `${this.baseUrl}/api/schedulerEvents{?type}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.type !== undefined) params.set('type', String(queryParams.type));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.SchedulerEventWithCustomerInfo>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}