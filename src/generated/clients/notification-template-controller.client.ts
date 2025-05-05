import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class NotificationTemplateControllerClient extends BaseVXOlympusClient {  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.type - Query parameter
   * @param {string} queryParams.token - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.SlackConversation>>}
   */
  async listSlackConversations(queryParams?: { type?: 'DIRECT' | 'PRIVATE_CHANNEL' | 'PUBLIC_CHANNEL'; token?: string }, options: RequestInit = {}): Promise<Array<schemas.SlackConversation>> {
    const url = `${this.baseUrl}/api/notification/slack/conversations{?token,type}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.type !== undefined) params.set('type', String(queryParams.type));
      if (queryParams.token !== undefined) params.set('token', String(queryParams.token));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.SlackConversation>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.NotificationTemplate>}
   */
  async saveNotificationTemplateWithData(data: schemas.NotificationTemplate, options: RequestInit = {}): Promise<schemas.NotificationTemplate> {
    const url = `${this.baseUrl}/api/notification/template`;
    const response = await this.makeRequest<schemas.NotificationTemplate>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} id - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.NotificationTemplate>}
   */
  async getNotificationTemplateById(id: string, options: RequestInit = {}): Promise<schemas.NotificationTemplate> {
    const url = `${this.baseUrl}/api/notification/template/${encodeURIComponent(id)}`;
    const response = await this.makeRequest<schemas.NotificationTemplate>(url, {
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
  async deleteNotificationTemplateById(id: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/notification/template/${encodeURIComponent(id)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
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
   * @param {string} queryParams.notificationTypes - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_NotificationTemplate>}
   */
  async getNotificationTemplates(queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: string; sortOrder?: string; notificationTypes?: 'ALARM' | 'ALARM_ASSIGNMENT' | 'ALARM_COMMENT' | 'API_USAGE_LIMIT' | 'DEVICE_ACTIVITY' | 'ENTITIES_LIMIT' | 'ENTITY_ACTION' | 'GENERAL' | 'INTEGRATION_LIFECYCLE_EVENT' | 'NEW_PLATFORM_VERSION' | 'RATE_LIMITS' | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT' | 'RULE_NODE' }, options: RequestInit = {}): Promise<schemas.PageData_Of_NotificationTemplate> {
    const url = `${this.baseUrl}/api/notification/templates{?notificationTypes,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
      if (queryParams.notificationTypes !== undefined) params.set('notificationTypes', String(queryParams.notificationTypes));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_NotificationTemplate>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}