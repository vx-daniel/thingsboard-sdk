import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class UserPermissionsControllerClient extends BaseVXOlympusClient {
  async getAllowedPermissionsUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/permissions/allowedPermissions`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}