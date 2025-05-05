import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class OwnerControllerClient extends BaseVXOlympusClient {  /**
   * @param {string} ownerId - Path parameter
   * @param {string} entityType - Path parameter
   * @param {string} entityId - Path parameter
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async changeOwnerToCustomerWithData(ownerId: string, entityType: string, entityId: string, data: Array<string>, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/owner/CUSTOMER/${encodeURIComponent(ownerId)}/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} ownerId - Path parameter
   * @param {string} entityType - Path parameter
   * @param {string} entityId - Path parameter
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async changeOwnerToTenantWithData(ownerId: string, entityType: string, entityId: string, data: Array<string>, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/owner/TENANT/${encodeURIComponent(ownerId)}/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}