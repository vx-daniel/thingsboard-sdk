import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class OwnerControllerClient extends BaseVXOlympusClient {
  async changeOwnerToCustomerUsingPOST(ownerId: string, entityType: string, entityId: string, data: Array<string>, options?: RequestInit) {
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

    const url = new URL(`/api/owner/CUSTOMER/${encodeURIComponent(ownerId)}/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  }

  async changeOwnerToTenantUsingPOST(ownerId: string, entityType: string, entityId: string, data: Array<string>, options?: RequestInit) {
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

    const url = new URL(`/api/owner/TENANT/${encodeURIComponent(ownerId)}/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  }}