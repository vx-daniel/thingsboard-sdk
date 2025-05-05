import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class UserPermissionsControllerClient extends BaseVXOlympusClient {  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.AllowedPermissionsInfo>}
   */
  async getAllowedPermissions(options: RequestInit = {}): Promise<schemas.AllowedPermissionsInfo> {
    const url = `${this.baseUrl}/api/permissions/allowedPermissions`;
    const response = await this.makeRequest<schemas.AllowedPermissionsInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}