import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class SchedulerEventControllerClient extends BaseVXOlympusClient {
  async getAllSchedulerEventsUsingGET(edgeId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/allSchedulerEvents`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async assignSchedulerEventToEdgeUsingPOST(edgeId: string, schedulerEventId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/schedulerEvent/${encodeURIComponent(schedulerEventId)}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async unassignSchedulerEventFromEdgeUsingDELETE(edgeId: string, schedulerEventId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/schedulerEvent/${encodeURIComponent(schedulerEventId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async getEdgeSchedulerEventsUsingGET(edgeId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/schedulerEvents{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveSchedulerEventUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/schedulerEvent`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getSchedulerEventInfoByIdUsingGET(schedulerEventId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/schedulerEvent/info/${encodeURIComponent(schedulerEventId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getSchedulerEventByIdUsingGET(schedulerEventId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/schedulerEvent/${encodeURIComponent(schedulerEventId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteSchedulerEventUsingDELETE(schedulerEventId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/schedulerEvent/${encodeURIComponent(schedulerEventId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async getSchedulerEventsByIdsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/schedulerEvents{?schedulerEventIds}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getSchedulerEventsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/schedulerEvents{?type}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}