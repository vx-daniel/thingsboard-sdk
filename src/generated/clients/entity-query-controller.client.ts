import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class EntityQueryControllerClient extends BaseVXOlympusClient {
  async countAlarmsByQueryUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/alarmsQuery/count`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async findAlarmDataByQueryUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/alarmsQuery/find`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async countEntitiesByQueryUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entitiesQuery/count`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async findEntityDataByQueryUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entitiesQuery/find`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async findEntityTimeseriesAndAttributesKeysByQueryUsingPOST(data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entitiesQuery/find/keys{?attributes,timeseries}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}