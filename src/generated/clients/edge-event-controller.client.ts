import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class EdgeEventControllerClient extends BaseVXOlympusClient {
  async getEdgeEventsUsingGET(edgeId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/events{?endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}