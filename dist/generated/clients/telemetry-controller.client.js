"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelemetryControllerClient = void 0;
const base_client_1 = require("../../base-client");
const schemas = __importStar(require("../schemas"));
class TelemetryControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveDeviceAttributesUsingPOST(deviceId, scope, data, options) {
        const config = {
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
    async deleteDeviceAttributesUsingDELETE(deviceId, scope, keys, options) {
        const config = {
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
        if (keys !== undefined)
            searchParams.append('keys', String(keys));
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
    async saveEntityAttributesV2UsingPOST(entityType, entityId, scope, data, options) {
        const config = {
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
    async getAttributeKeysUsingGET(entityType, entityId, options) {
        const config = {
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
    async getAttributeKeysByScopeUsingGET(entityType, entityId, scope, options) {
        const config = {
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
    async getTimeseriesKeysUsingGET_1(entityType, entityId, options) {
        const config = {
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
    async deleteEntityTimeseriesUsingDELETE(entityType, entityId, keys, deleteAllDataForKeys, startTs, endTs, deleteLatest, rewriteLatestIfDeleted, options) {
        const config = {
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
        if (keys !== undefined)
            searchParams.append('keys', String(keys));
        if (deleteAllDataForKeys !== undefined)
            searchParams.append('deleteAllDataForKeys', String(deleteAllDataForKeys));
        if (startTs !== undefined)
            searchParams.append('startTs', String(startTs));
        if (endTs !== undefined)
            searchParams.append('endTs', String(endTs));
        if (deleteLatest !== undefined)
            searchParams.append('deleteLatest', String(deleteLatest));
        if (rewriteLatestIfDeleted !== undefined)
            searchParams.append('rewriteLatestIfDeleted', String(rewriteLatestIfDeleted));
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
    async saveEntityTelemetryWithTTLUsingPOST(entityType, entityId, scope, ttl, data, options) {
        const config = {
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
    async saveEntityTelemetryUsingPOST(entityType, entityId, scope, data, options) {
        const config = {
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
    async getAttributesByScopeUsingGET(entityType, entityId, scope, keys, options) {
        const config = {
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
        if (keys !== undefined)
            searchParams.append('keys', String(keys));
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
    async getAttributesUsingGET(entityType, entityId, keys, options) {
        const config = {
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
        if (keys !== undefined)
            searchParams.append('keys', String(keys));
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
    async getTimeseriesUsingGET(entityType, entityId, keys, startTs, endTs, interval, limit, agg, orderBy, useStrictDataTypes, options) {
        const config = {
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
        if (keys !== undefined)
            searchParams.append('keys', String(keys));
        if (startTs !== undefined)
            searchParams.append('startTs', String(startTs));
        if (endTs !== undefined)
            searchParams.append('endTs', String(endTs));
        if (interval !== undefined)
            searchParams.append('interval', String(interval));
        if (limit !== undefined)
            searchParams.append('limit', String(limit));
        if (agg !== undefined)
            searchParams.append('agg', String(agg));
        if (orderBy !== undefined)
            searchParams.append('orderBy', String(orderBy));
        if (useStrictDataTypes !== undefined)
            searchParams.append('useStrictDataTypes', String(useStrictDataTypes));
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
    async getLatestTimeseriesUsingGET(entityType, entityId, keys, useStrictDataTypes, options) {
        const config = {
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
        if (keys !== undefined)
            searchParams.append('keys', String(keys));
        if (useStrictDataTypes !== undefined)
            searchParams.append('useStrictDataTypes', String(useStrictDataTypes));
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
    async saveEntityAttributesV1UsingPOST(entityType, entityId, scope, data, options) {
        const config = {
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
    async deleteEntityAttributesUsingDELETE(entityType, entityId, scope, keys, options) {
        const config = {
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
        if (keys !== undefined)
            searchParams.append('keys', String(keys));
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
}
exports.TelemetryControllerClient = TelemetryControllerClient;
