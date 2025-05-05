import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class TelemetryControllerClient extends BaseVXOlympusClient {
  async saveDeviceAttributesUsingPOST(deviceId: string, scope: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(deviceId)}/${encodeURIComponent(scope)}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async deleteDeviceAttributesUsingDELETE(deviceId: string, scope: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(deviceId)}/${encodeURIComponent(scope)}{?keys}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async saveEntityAttributesV2UsingPOST(entityType: string, entityId: string, scope: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/attributes/${encodeURIComponent(scope)}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getAttributeKeysUsingGET(entityType: string, entityId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/keys/attributes`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getAttributeKeysByScopeUsingGET(entityType: string, entityId: string, scope: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/keys/attributes/${encodeURIComponent(scope)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getTimeseriesKeysUsingGET_1(entityType: string, entityId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/keys/timeseries`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteEntityTimeseriesUsingDELETE(entityType: string, entityId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/timeseries/delete{?deleteAllDataForKeys,deleteLatest,endTs,keys,rewriteLatestIfDeleted,startTs}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async saveEntityTelemetryWithTTLUsingPOST(entityType: string, entityId: string, scope: string, ttl: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/timeseries/${encodeURIComponent(scope)}/${encodeURIComponent(ttl)}?scope=ANY`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async saveEntityTelemetryUsingPOST(entityType: string, entityId: string, scope: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/timeseries/${encodeURIComponent(scope)}?scope=ANY`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getAttributesByScopeUsingGET(entityType: string, entityId: string, scope: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/values/attributes/${encodeURIComponent(scope)}{?keys}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getAttributesUsingGET(entityType: string, entityId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/values/attributes{?keys}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getTimeseriesUsingGET(entityType: string, entityId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/values/timeseries{?agg,endTs,interval,keys,limit,orderBy,startTs,useStrictDataTypes}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getLatestTimeseriesUsingGET(entityType: string, entityId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/values/timeseries{?keys,useStrictDataTypes}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveEntityAttributesV1UsingPOST(entityType: string, entityId: string, scope: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/${encodeURIComponent(scope)}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async deleteEntityAttributesUsingDELETE(entityType: string, entityId: string, scope: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/${encodeURIComponent(scope)}{?keys}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }}