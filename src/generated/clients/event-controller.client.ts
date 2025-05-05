import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class EventControllerClient extends BaseVXOlympusClient {  /**
   * @param {string} entityType - Path parameter
   * @param {string} entityId - Path parameter
   * @param {object} data - Request body
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.startTime - Query parameter
   * @param {integer} queryParams.endTime - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async clearEventsWithData(entityType: string, entityId: string, data: schemas.EventFilter, queryParams?: { startTime?: number; endTime?: number }, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/clear{?endTime,startTime}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.startTime !== undefined) params.set('startTime', String(queryParams.startTime));
      if (queryParams.endTime !== undefined) params.set('endTime', String(queryParams.endTime));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<void>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityType - Path parameter
   * @param {string} entityId - Path parameter
   * @param {string} eventType - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.tenantId - Query parameter
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {integer} queryParams.startTime - Query parameter
   * @param {integer} queryParams.endTime - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_EventInfo>}
   */
  async getEventsUsingGET_1(entityType: string, entityId: string, eventType: string, queryParams?: { tenantId?: string; pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'id' | 'ts'; sortOrder?: 'ASC' | 'DESC'; startTime?: number; endTime?: number }, options: RequestInit = {}): Promise<schemas.PageData_Of_EventInfo> {
    const url = `${this.baseUrl}/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/${encodeURIComponent(eventType)}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.tenantId !== undefined) params.set('tenantId', String(queryParams.tenantId));
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
      if (queryParams.startTime !== undefined) params.set('startTime', String(queryParams.startTime));
      if (queryParams.endTime !== undefined) params.set('endTime', String(queryParams.endTime));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_EventInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityType - Path parameter
   * @param {string} entityId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.tenantId - Query parameter
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {integer} queryParams.startTime - Query parameter
   * @param {integer} queryParams.endTime - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_EventInfo>}
   */
  async getEvents(entityType: string, entityId: string, queryParams?: { tenantId?: string; pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'id' | 'ts'; sortOrder?: 'ASC' | 'DESC'; startTime?: number; endTime?: number }, options: RequestInit = {}): Promise<schemas.PageData_Of_EventInfo> {
    const url = `${this.baseUrl}/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.tenantId !== undefined) params.set('tenantId', String(queryParams.tenantId));
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
      if (queryParams.startTime !== undefined) params.set('startTime', String(queryParams.startTime));
      if (queryParams.endTime !== undefined) params.set('endTime', String(queryParams.endTime));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_EventInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityType - Path parameter
   * @param {string} entityId - Path parameter
   * @param {object} data - Request body
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.tenantId - Query parameter
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {integer} queryParams.startTime - Query parameter
   * @param {integer} queryParams.endTime - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_EventInfo>}
   */
  async getEventsWithData(entityType: string, entityId: string, data: schemas.EventFilter, queryParams?: { tenantId?: string; pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'id' | 'ts'; sortOrder?: 'ASC' | 'DESC'; startTime?: number; endTime?: number }, options: RequestInit = {}): Promise<schemas.PageData_Of_EventInfo> {
    const url = `${this.baseUrl}/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.tenantId !== undefined) params.set('tenantId', String(queryParams.tenantId));
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
      if (queryParams.startTime !== undefined) params.set('startTime', String(queryParams.startTime));
      if (queryParams.endTime !== undefined) params.set('endTime', String(queryParams.endTime));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_EventInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}