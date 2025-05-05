import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class OwnerControllerClient extends BaseVXOlympusClient {
  async changeOwnerToCustomerUsingPOST(ownerId: string, entityType: string, entityId: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/owner/CUSTOMER/${encodeURIComponent(ownerId)}/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async changeOwnerToTenantUsingPOST(ownerId: string, entityType: string, entityId: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/owner/TENANT/${encodeURIComponent(ownerId)}/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}