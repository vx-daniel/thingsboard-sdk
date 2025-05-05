import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class AlarmCommentControllerClient extends BaseVXOlympusClient {
  async saveAlarmCommentUsingPOST(alarmId: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}/comment`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async deleteAlarmCommentUsingDELETE(alarmId: string, commentId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}/comment/${encodeURIComponent(commentId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async getAlarmCommentsUsingGET(alarmId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}/comment{?page,pageSize,sortOrder,sortProperty}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}