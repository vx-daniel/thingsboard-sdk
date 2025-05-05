import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class EventControllerClient extends BaseVXOlympusClient {
  async clearEventsUsingPOST(entityType: string, entityId: string, startTime: number, endTime: number, data: schemas.EventFilter, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    config.body = JSON.stringify(data);

    const url = new URL(`/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/clear{?endTime,startTime}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
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
    return responseData;
  }

  async getEventsUsingGET_1(entityType: string, entityId: string, eventType: string, tenantId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/${encodeURIComponent(eventType)}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (tenantId !== undefined) searchParams.append('tenantId', String(tenantId));
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
    return schemas.PageData_Of_EventInfoSchemaSchema.parse(responseData);
  }

  async getEventsUsingGET(entityType: string, entityId: string, tenantId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (tenantId !== undefined) searchParams.append('tenantId', String(tenantId));
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
    return schemas.PageData_Of_EventInfoSchemaSchema.parse(responseData);
  }

  async getEventsUsingPOST(entityType: string, entityId: string, tenantId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, data: schemas.EventFilter, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    config.body = JSON.stringify(data);

    const url = new URL(`/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (tenantId !== undefined) searchParams.append('tenantId', String(tenantId));
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
    return schemas.PageData_Of_EventInfoSchemaSchema.parse(responseData);
  }}