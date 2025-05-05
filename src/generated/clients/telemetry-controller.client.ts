import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class TelemetryControllerClient extends BaseVXOlympusClient {
  async saveDeviceAttributesUsingPOST(deviceId: string, scope: string, data: schemas.JsonNode, options?: RequestInit) {
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

    const url = new URL(`/api/plugins/telemetry/${encodeURIComponent(deviceId)}/${encodeURIComponent(scope)}`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_ResponseEntitySchemaSchema.parse(responseData);
  }

  async deleteDeviceAttributesUsingDELETE(deviceId: string, scope: string, keys: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/plugins/telemetry/${encodeURIComponent(deviceId)}/${encodeURIComponent(scope)}{?keys}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (keys !== undefined) searchParams.append('keys', String(keys));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_ResponseEntitySchemaSchema.parse(responseData);
  }

  async saveEntityAttributesV2UsingPOST(entityType: string, entityId: string, scope: string, data: schemas.JsonNode, options?: RequestInit) {
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

    const url = new URL(`/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/attributes/${encodeURIComponent(scope)}`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_ResponseEntitySchemaSchema.parse(responseData);
  }

  async getAttributeKeysUsingGET(entityType: string, entityId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/keys/attributes`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_ResponseEntitySchemaSchema.parse(responseData);
  }

  async getAttributeKeysByScopeUsingGET(entityType: string, entityId: string, scope: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/keys/attributes/${encodeURIComponent(scope)}`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_ResponseEntitySchemaSchema.parse(responseData);
  }

  async getTimeseriesKeysUsingGET_1(entityType: string, entityId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/keys/timeseries`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_ResponseEntitySchemaSchema.parse(responseData);
  }

  async deleteEntityTimeseriesUsingDELETE(entityType: string, entityId: string, keys: string, deleteAllDataForKeys: boolean, startTs: number, endTs: number, deleteLatest: boolean, rewriteLatestIfDeleted: boolean, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/timeseries/delete{?deleteAllDataForKeys,deleteLatest,endTs,keys,rewriteLatestIfDeleted,startTs}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (keys !== undefined) searchParams.append('keys', String(keys));
    if (deleteAllDataForKeys !== undefined) searchParams.append('deleteAllDataForKeys', String(deleteAllDataForKeys));
    if (startTs !== undefined) searchParams.append('startTs', String(startTs));
    if (endTs !== undefined) searchParams.append('endTs', String(endTs));
    if (deleteLatest !== undefined) searchParams.append('deleteLatest', String(deleteLatest));
    if (rewriteLatestIfDeleted !== undefined) searchParams.append('rewriteLatestIfDeleted', String(rewriteLatestIfDeleted));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_ResponseEntitySchemaSchema.parse(responseData);
  }

  async saveEntityTelemetryWithTTLUsingPOST(entityType: string, entityId: string, scope: string, ttl: number, data: string, options?: RequestInit) {
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

    const url = new URL(`/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/timeseries/${encodeURIComponent(scope)}/${encodeURIComponent(ttl)}?scope=ANY`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_ResponseEntitySchemaSchema.parse(responseData);
  }

  async saveEntityTelemetryUsingPOST(entityType: string, entityId: string, scope: string, data: string, options?: RequestInit) {
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

    const url = new URL(`/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/timeseries/${encodeURIComponent(scope)}?scope=ANY`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_ResponseEntitySchemaSchema.parse(responseData);
  }

  async getAttributesByScopeUsingGET(entityType: string, entityId: string, scope: string, keys: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/values/attributes/${encodeURIComponent(scope)}{?keys}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (keys !== undefined) searchParams.append('keys', String(keys));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_ResponseEntitySchemaSchema.parse(responseData);
  }

  async getAttributesUsingGET(entityType: string, entityId: string, keys: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/values/attributes{?keys}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (keys !== undefined) searchParams.append('keys', String(keys));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_ResponseEntitySchemaSchema.parse(responseData);
  }

  async getTimeseriesUsingGET(entityType: string, entityId: string, keys: string, startTs: number, endTs: number, interval: number, limit: number, agg: string, orderBy: string, useStrictDataTypes: boolean, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/values/timeseries{?agg,endTs,interval,keys,limit,orderBy,startTs,useStrictDataTypes}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (keys !== undefined) searchParams.append('keys', String(keys));
    if (startTs !== undefined) searchParams.append('startTs', String(startTs));
    if (endTs !== undefined) searchParams.append('endTs', String(endTs));
    if (interval !== undefined) searchParams.append('interval', String(interval));
    if (limit !== undefined) searchParams.append('limit', String(limit));
    if (agg !== undefined) searchParams.append('agg', String(agg));
    if (orderBy !== undefined) searchParams.append('orderBy', String(orderBy));
    if (useStrictDataTypes !== undefined) searchParams.append('useStrictDataTypes', String(useStrictDataTypes));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_ResponseEntitySchemaSchema.parse(responseData);
  }

  async getLatestTimeseriesUsingGET(entityType: string, entityId: string, keys: string, useStrictDataTypes: boolean, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/values/timeseries{?keys,useStrictDataTypes}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (keys !== undefined) searchParams.append('keys', String(keys));
    if (useStrictDataTypes !== undefined) searchParams.append('useStrictDataTypes', String(useStrictDataTypes));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_ResponseEntitySchemaSchema.parse(responseData);
  }

  async saveEntityAttributesV1UsingPOST(entityType: string, entityId: string, scope: string, data: schemas.JsonNode, options?: RequestInit) {
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

    const url = new URL(`/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/${encodeURIComponent(scope)}`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_ResponseEntitySchemaSchema.parse(responseData);
  }

  async deleteEntityAttributesUsingDELETE(entityType: string, entityId: string, scope: string, keys: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/${encodeURIComponent(scope)}{?keys}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (keys !== undefined) searchParams.append('keys', String(keys));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_ResponseEntitySchemaSchema.parse(responseData);
  }}