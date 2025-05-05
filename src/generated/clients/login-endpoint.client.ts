import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class LoginEndpointClient extends BaseVXOlympusClient {
  async loginPost(data: schemas.LoginRequest, options?: RequestInit) {
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

    const url = new URL(`/api/auth/login`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.LoginResponseSchemaSchema.parse(responseData);
  }}