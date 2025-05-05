import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class EdgeEventControllerClient extends BaseVXOlympusClient {
  async getEdgeEventsUsingGET(edgeId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/edge/${encodeURIComponent(edgeId)}/events{?endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (pageSize !== undefined) searchParams.append('pageSize', String(pageSize));
    if (page !== undefined) searchParams.append('page', String(page));
    if (textSearch !== undefined) searchParams.append('textSearch', String(textSearch));
    if (sortProperty !== undefined) searchParams.append('sortProperty', String(sortProperty));
    if (sortOrder !== undefined) searchParams.append('sortOrder', String(sortOrder));
    if (startTime !== undefined) searchParams.append('startTime', String(startTime));
    if (endTime !== undefined) searchParams.append('endTime', String(endTime));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.PageData_Of_EdgeEventSchemaSchema.parse(responseData);
  }}