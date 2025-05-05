import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class AuditLogControllerClient extends BaseVXOlympusClient {  /**
   * @param {string} customerId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {integer} queryParams.startTime - Query parameter
   * @param {integer} queryParams.endTime - Query parameter
   * @param {string} queryParams.actionTypes - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_AuditLog>}
   */
  async getAuditLogsByCustomerId(customerId: string, queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'actionStatus' | 'actionType' | 'createdTime' | 'entityName' | 'entityType' | 'userName'; sortOrder?: 'ASC' | 'DESC'; startTime?: number; endTime?: number; actionTypes?: string }, options: RequestInit = {}): Promise<schemas.PageData_Of_AuditLog> {
    const url = `${this.baseUrl}/api/audit/logs/customer/${encodeURIComponent(customerId)}{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
      if (queryParams.startTime !== undefined) params.set('startTime', String(queryParams.startTime));
      if (queryParams.endTime !== undefined) params.set('endTime', String(queryParams.endTime));
      if (queryParams.actionTypes !== undefined) params.set('actionTypes', String(queryParams.actionTypes));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_AuditLog>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityType - Path parameter
   * @param {string} entityId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {integer} queryParams.startTime - Query parameter
   * @param {integer} queryParams.endTime - Query parameter
   * @param {string} queryParams.actionTypes - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_AuditLog>}
   */
  async getAuditLogsByEntityId(entityType: string, entityId: string, queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'actionStatus' | 'actionType' | 'createdTime' | 'entityName' | 'entityType' | 'userName'; sortOrder?: 'ASC' | 'DESC'; startTime?: number; endTime?: number; actionTypes?: string }, options: RequestInit = {}): Promise<schemas.PageData_Of_AuditLog> {
    const url = `${this.baseUrl}/api/audit/logs/entity/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
      if (queryParams.startTime !== undefined) params.set('startTime', String(queryParams.startTime));
      if (queryParams.endTime !== undefined) params.set('endTime', String(queryParams.endTime));
      if (queryParams.actionTypes !== undefined) params.set('actionTypes', String(queryParams.actionTypes));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_AuditLog>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} userId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {integer} queryParams.startTime - Query parameter
   * @param {integer} queryParams.endTime - Query parameter
   * @param {string} queryParams.actionTypes - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_AuditLog>}
   */
  async getAuditLogsByUserId(userId: string, queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'actionStatus' | 'actionType' | 'createdTime' | 'entityName' | 'entityType' | 'userName'; sortOrder?: 'ASC' | 'DESC'; startTime?: number; endTime?: number; actionTypes?: string }, options: RequestInit = {}): Promise<schemas.PageData_Of_AuditLog> {
    const url = `${this.baseUrl}/api/audit/logs/user/${encodeURIComponent(userId)}{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
      if (queryParams.startTime !== undefined) params.set('startTime', String(queryParams.startTime));
      if (queryParams.endTime !== undefined) params.set('endTime', String(queryParams.endTime));
      if (queryParams.actionTypes !== undefined) params.set('actionTypes', String(queryParams.actionTypes));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_AuditLog>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {integer} queryParams.startTime - Query parameter
   * @param {integer} queryParams.endTime - Query parameter
   * @param {string} queryParams.actionTypes - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_AuditLog>}
   */
  async getAuditLogs(queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'actionStatus' | 'actionType' | 'createdTime' | 'entityName' | 'entityType' | 'userName'; sortOrder?: 'ASC' | 'DESC'; startTime?: number; endTime?: number; actionTypes?: string }, options: RequestInit = {}): Promise<schemas.PageData_Of_AuditLog> {
    const url = `${this.baseUrl}/api/audit/logs{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
      if (queryParams.startTime !== undefined) params.set('startTime', String(queryParams.startTime));
      if (queryParams.endTime !== undefined) params.set('endTime', String(queryParams.endTime));
      if (queryParams.actionTypes !== undefined) params.set('actionTypes', String(queryParams.actionTypes));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_AuditLog>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}