import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class NotificationTargetControllerClient extends BaseVXOlympusClient {  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.NotificationTarget>}
   */
  async saveNotificationTargetWithData(data: schemas.NotificationTarget, options: RequestInit = {}): Promise<schemas.NotificationTarget> {
    const url = `${this.baseUrl}/api/notification/target`;
    const response = await this.makeRequest<schemas.NotificationTarget>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_User>}
   */
  async getRecipientsForNotificationTargetConfigWithData(data: schemas.NotificationTarget, queryParams?: { pageSize?: number; page?: number }, options: RequestInit = {}): Promise<schemas.PageData_Of_User> {
    const url = `${this.baseUrl}/api/notification/target/recipients{?page,pageSize}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_User>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} id - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.NotificationTarget>}
   */
  async getNotificationTargetById(id: string, options: RequestInit = {}): Promise<schemas.NotificationTarget> {
    const url = `${this.baseUrl}/api/notification/target/${encodeURIComponent(id)}`;
    const response = await this.makeRequest<schemas.NotificationTarget>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} id - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteNotificationTargetById(id: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/notification/target/${encodeURIComponent(id)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.ids - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.NotificationTarget>>}
   */
  async getNotificationTargetsByIds(queryParams?: { ids?: string }, options: RequestInit = {}): Promise<Array<schemas.NotificationTarget>> {
    const url = `${this.baseUrl}/api/notification/targets{?ids}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.ids !== undefined) params.set('ids', String(queryParams.ids));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.NotificationTarget>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.notificationType - Query parameter
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_NotificationTarget>}
   */
  async getNotificationTargetsBySupportedNotificationType(queryParams?: { notificationType?: 'ALARM' | 'ALARM_ASSIGNMENT' | 'ALARM_COMMENT' | 'API_USAGE_LIMIT' | 'DEVICE_ACTIVITY' | 'ENTITIES_LIMIT' | 'ENTITY_ACTION' | 'GENERAL' | 'INTEGRATION_LIFECYCLE_EVENT' | 'NEW_PLATFORM_VERSION' | 'RATE_LIMITS' | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT' | 'RULE_NODE'; pageSize?: number; page?: number; textSearch?: string; sortProperty?: string; sortOrder?: string }, options: RequestInit = {}): Promise<schemas.PageData_Of_NotificationTarget> {
    const url = `${this.baseUrl}/api/notification/targets{?notificationType,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.notificationType !== undefined) params.set('notificationType', String(queryParams.notificationType));
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_NotificationTarget>(url + (queryString ? `?${queryString}` : ''), {
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
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_NotificationTarget>}
   */
  async getNotificationTargets(queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: string; sortOrder?: string }, options: RequestInit = {}): Promise<schemas.PageData_Of_NotificationTarget> {
    const url = `${this.baseUrl}/api/notification/targets{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_NotificationTarget>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}