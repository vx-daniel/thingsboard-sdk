import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class AlarmCommentControllerClient extends BaseVXOlympusClient {  /**
   * @param {string} alarmId - Path parameter
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.AlarmComment>}
   */
  async saveAlarmCommentWithData(alarmId: string, data: schemas.AlarmComment, options: RequestInit = {}): Promise<schemas.AlarmComment> {
    const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}/comment`;
    const response = await this.makeRequest<schemas.AlarmComment>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} alarmId - Path parameter
   * @param {string} commentId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteAlarmComment(alarmId: string, commentId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}/comment/${encodeURIComponent(commentId)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} alarmId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_AlarmCommentInfo>}
   */
  async getAlarmComments(alarmId: string, queryParams?: { pageSize?: number; page?: number; sortProperty?: 'createdTime' | 'id'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_AlarmCommentInfo> {
    const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}/comment{?page,pageSize,sortOrder,sortProperty}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_AlarmCommentInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}