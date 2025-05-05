import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class UserPermissionsControllerClient extends BaseVXOlympusClient {
  async getAllowedPermissionsUsingGET(options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/permissions/allowedPermissions`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.AllowedPermissionsInfoSchemaSchema.parse(responseData);
  }}