import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class EdgeEventControllerClient extends BaseVXOlympusClient {  /**
   * @param {string} edgeId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {integer} queryParams.startTime - Query parameter
   * @param {integer} queryParams.endTime - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_EdgeEvent>}
   */
  async getEdgeEvents(edgeId: string, queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type'; sortOrder?: 'ASC' | 'DESC'; startTime?: number; endTime?: number }, options: RequestInit = {}): Promise<schemas.PageData_Of_EdgeEvent> {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/events{?endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
      if (queryParams.startTime !== undefined) params.set('startTime', String(queryParams.startTime));
      if (queryParams.endTime !== undefined) params.set('endTime', String(queryParams.endTime));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_EdgeEvent>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}