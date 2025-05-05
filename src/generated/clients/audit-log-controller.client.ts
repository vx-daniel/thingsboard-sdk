import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class AuditLogControllerClient extends BaseVXOlympusClient {
  async getAuditLogsByCustomerIdUsingGET(customerId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/audit/logs/customer/${encodeURIComponent(customerId)}{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getAuditLogsByEntityIdUsingGET(entityType: string, entityId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/audit/logs/entity/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getAuditLogsByUserIdUsingGET(userId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/audit/logs/user/${encodeURIComponent(userId)}{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getAuditLogsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/audit/logs{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}