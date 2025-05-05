import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class NotificationRuleControllerClient extends BaseVXOlympusClient {  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.NotificationRule>}
   */
  async saveNotificationRuleWithData(data: schemas.NotificationRule, options: RequestInit = {}): Promise<schemas.NotificationRule> {
    const url = `${this.baseUrl}/api/notification/rule`;
    const response = await this.makeRequest<schemas.NotificationRule>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} id - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.NotificationRuleInfo>}
   */
  async getNotificationRuleById(id: string, options: RequestInit = {}): Promise<schemas.NotificationRuleInfo> {
    const url = `${this.baseUrl}/api/notification/rule/${encodeURIComponent(id)}`;
    const response = await this.makeRequest<schemas.NotificationRuleInfo>(url, {
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
  async deleteNotificationRule(id: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/notification/rule/${encodeURIComponent(id)}`;
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
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_NotificationRuleInfo>}
   */
  async getNotificationRules(queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: string; sortOrder?: string }, options: RequestInit = {}): Promise<schemas.PageData_Of_NotificationRuleInfo> {
    const url = `${this.baseUrl}/api/notification/rules{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_NotificationRuleInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}