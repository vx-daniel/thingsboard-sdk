import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class EntityQueryControllerClient extends BaseVXOlympusClient {  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<number>}
   */
  async countAlarmsByQueryWithData(data: schemas.AlarmCountQuery, options: RequestInit = {}): Promise<number> {
    const url = `${this.baseUrl}/api/alarmsQuery/count`;
    const response = await this.makeRequest<number>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_AlarmData>}
   */
  async findAlarmDataByQueryWithData(data: schemas.AlarmDataQuery, options: RequestInit = {}): Promise<schemas.PageData_Of_AlarmData> {
    const url = `${this.baseUrl}/api/alarmsQuery/find`;
    const response = await this.makeRequest<schemas.PageData_Of_AlarmData>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<number>}
   */
  async countEntitiesByQueryWithData(data: schemas.EntityCountQuery, options: RequestInit = {}): Promise<number> {
    const url = `${this.baseUrl}/api/entitiesQuery/count`;
    const response = await this.makeRequest<number>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_EntityData>}
   */
  async findEntityDataByQueryWithData(data: schemas.EntityDataQuery, options: RequestInit = {}): Promise<schemas.PageData_Of_EntityData> {
    const url = `${this.baseUrl}/api/entitiesQuery/find`;
    const response = await this.makeRequest<schemas.PageData_Of_EntityData>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {object} queryParams - Query parameters
   * @param {boolean} queryParams.timeseries - Query parameter
   * @param {boolean} queryParams.attributes - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async findEntityTimeseriesAndAttributesKeysByQueryWithData(data: schemas.EntityDataQuery, queryParams?: { timeseries?: boolean; attributes?: boolean }, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/entitiesQuery/find/keys{?attributes,timeseries}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.timeseries !== undefined) params.set('timeseries', String(queryParams.timeseries));
      if (queryParams.attributes !== undefined) params.set('attributes', String(queryParams.attributes));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}