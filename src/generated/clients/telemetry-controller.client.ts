import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class TelemetryControllerClient extends BaseVXOlympusClient {  /**
   * @param {string} deviceId - Path parameter
   * @param {string} scope - Path parameter
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async saveDeviceAttributesWithData(deviceId: string, scope: 'SERVER_SCOPE' | 'SHARED_SCOPE', data: schemas.JsonNode, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(deviceId)}/${encodeURIComponent(scope)}`;
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} deviceId - Path parameter
   * @param {string} scope - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.keys - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async deleteDeviceAttributes(deviceId: string, scope: 'CLIENT_SCOPE' | 'SERVER_SCOPE' | 'SHARED_SCOPE', queryParams?: { keys?: string }, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(deviceId)}/${encodeURIComponent(scope)}{?keys}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.keys !== undefined) params.set('keys', String(queryParams.keys));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url + (queryString ? `?${queryString}` : ''), {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityType - Path parameter
   * @param {string} entityId - Path parameter
   * @param {string} scope - Path parameter
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async saveEntityAttributesV2WithData(entityType: string, entityId: string, scope: 'SERVER_SCOPE' | 'SHARED_SCOPE', data: schemas.JsonNode, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/attributes/${encodeURIComponent(scope)}`;
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityType - Path parameter
   * @param {string} entityId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async getAttributeKeys(entityType: string, entityId: string, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/keys/attributes`;
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityType - Path parameter
   * @param {string} entityId - Path parameter
   * @param {string} scope - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async getAttributeKeysByScope(entityType: string, entityId: string, scope: 'CLIENT_SCOPE' | 'SERVER_SCOPE' | 'SHARED_SCOPE', options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/keys/attributes/${encodeURIComponent(scope)}`;
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityType - Path parameter
   * @param {string} entityId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async getTimeseriesKeysUsingGET_1(entityType: string, entityId: string, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/keys/timeseries`;
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityType - Path parameter
   * @param {string} entityId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.keys - Query parameter
   * @param {boolean} queryParams.deleteAllDataForKeys - Query parameter
   * @param {integer} queryParams.startTs - Query parameter
   * @param {integer} queryParams.endTs - Query parameter
   * @param {boolean} queryParams.deleteLatest - Query parameter
   * @param {boolean} queryParams.rewriteLatestIfDeleted - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async deleteEntityTimeseries(entityType: string, entityId: string, queryParams?: { keys?: string; deleteAllDataForKeys?: boolean; startTs?: number; endTs?: number; deleteLatest?: boolean; rewriteLatestIfDeleted?: boolean }, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/timeseries/delete{?deleteAllDataForKeys,deleteLatest,endTs,keys,rewriteLatestIfDeleted,startTs}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.keys !== undefined) params.set('keys', String(queryParams.keys));
      if (queryParams.deleteAllDataForKeys !== undefined) params.set('deleteAllDataForKeys', String(queryParams.deleteAllDataForKeys));
      if (queryParams.startTs !== undefined) params.set('startTs', String(queryParams.startTs));
      if (queryParams.endTs !== undefined) params.set('endTs', String(queryParams.endTs));
      if (queryParams.deleteLatest !== undefined) params.set('deleteLatest', String(queryParams.deleteLatest));
      if (queryParams.rewriteLatestIfDeleted !== undefined) params.set('rewriteLatestIfDeleted', String(queryParams.rewriteLatestIfDeleted));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url + (queryString ? `?${queryString}` : ''), {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityType - Path parameter
   * @param {string} entityId - Path parameter
   * @param {string} scope - Path parameter
   * @param {string} ttl - Path parameter
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async saveEntityTelemetryWithTTLWithData(entityType: string, entityId: string, scope: 'ANY', ttl: string, data: string, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/timeseries/${encodeURIComponent(scope)}/${encodeURIComponent(ttl)}?scope=ANY`;
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityType - Path parameter
   * @param {string} entityId - Path parameter
   * @param {string} scope - Path parameter
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async saveEntityTelemetryWithData(entityType: string, entityId: string, scope: 'ANY', data: string, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/timeseries/${encodeURIComponent(scope)}?scope=ANY`;
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityType - Path parameter
   * @param {string} entityId - Path parameter
   * @param {string} scope - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.keys - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async getAttributesByScope(entityType: string, entityId: string, scope: 'CLIENT_SCOPE' | 'SERVER_SCOPE' | 'SHARED_SCOPE', queryParams?: { keys?: string }, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/values/attributes/${encodeURIComponent(scope)}{?keys}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.keys !== undefined) params.set('keys', String(queryParams.keys));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityType - Path parameter
   * @param {string} entityId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.keys - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async getAttributes(entityType: string, entityId: string, queryParams?: { keys?: string }, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/values/attributes{?keys}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.keys !== undefined) params.set('keys', String(queryParams.keys));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityType - Path parameter
   * @param {string} entityId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.keys - Query parameter
   * @param {integer} queryParams.startTs - Query parameter
   * @param {integer} queryParams.endTs - Query parameter
   * @param {integer} queryParams.interval - Query parameter
   * @param {integer} queryParams.limit - Query parameter
   * @param {string} queryParams.agg - Query parameter
   * @param {string} queryParams.orderBy - Query parameter
   * @param {boolean} queryParams.useStrictDataTypes - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async getTimeseries(entityType: string, entityId: string, queryParams?: { keys?: string; startTs?: number; endTs?: number; interval?: number; limit?: number; agg?: 'AVG' | 'COUNT' | 'MAX' | 'MIN' | 'NONE' | 'SUM'; orderBy?: 'ASC' | 'DESC'; useStrictDataTypes?: boolean }, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/values/timeseries{?agg,endTs,interval,keys,limit,orderBy,startTs,useStrictDataTypes}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.keys !== undefined) params.set('keys', String(queryParams.keys));
      if (queryParams.startTs !== undefined) params.set('startTs', String(queryParams.startTs));
      if (queryParams.endTs !== undefined) params.set('endTs', String(queryParams.endTs));
      if (queryParams.interval !== undefined) params.set('interval', String(queryParams.interval));
      if (queryParams.limit !== undefined) params.set('limit', String(queryParams.limit));
      if (queryParams.agg !== undefined) params.set('agg', String(queryParams.agg));
      if (queryParams.orderBy !== undefined) params.set('orderBy', String(queryParams.orderBy));
      if (queryParams.useStrictDataTypes !== undefined) params.set('useStrictDataTypes', String(queryParams.useStrictDataTypes));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityType - Path parameter
   * @param {string} entityId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.keys - Query parameter
   * @param {boolean} queryParams.useStrictDataTypes - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async getLatestTimeseries(entityType: string, entityId: string, queryParams?: { keys?: string; useStrictDataTypes?: boolean }, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/values/timeseries{?keys,useStrictDataTypes}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.keys !== undefined) params.set('keys', String(queryParams.keys));
      if (queryParams.useStrictDataTypes !== undefined) params.set('useStrictDataTypes', String(queryParams.useStrictDataTypes));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityType - Path parameter
   * @param {string} entityId - Path parameter
   * @param {string} scope - Path parameter
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async saveEntityAttributesV1WithData(entityType: string, entityId: string, scope: 'SERVER_SCOPE' | 'SHARED_SCOPE', data: schemas.JsonNode, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/${encodeURIComponent(scope)}`;
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityType - Path parameter
   * @param {string} entityId - Path parameter
   * @param {string} scope - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.keys - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async deleteEntityAttributes(entityType: string, entityId: string, scope: 'CLIENT_SCOPE' | 'SERVER_SCOPE' | 'SHARED_SCOPE', queryParams?: { keys?: string }, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/${encodeURIComponent(scope)}{?keys}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.keys !== undefined) params.set('keys', String(queryParams.keys));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url + (queryString ? `?${queryString}` : ''), {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }}