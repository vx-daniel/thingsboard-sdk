"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelemetryControllerClient = void 0;
const base_client_1 = require("../../base-client");
class TelemetryControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveDeviceAttributesUsingPOST(deviceId, scope, data, options = {}) {
        const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(deviceId)}/${encodeURIComponent(scope)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async deleteDeviceAttributesUsingDELETE(deviceId, scope, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(deviceId)}/${encodeURIComponent(scope)}{?keys}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async saveEntityAttributesV2UsingPOST(entityType, entityId, scope, data, options = {}) {
        const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/attributes/${encodeURIComponent(scope)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getAttributeKeysUsingGET(entityType, entityId, options = {}) {
        const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/keys/attributes`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getAttributeKeysByScopeUsingGET(entityType, entityId, scope, options = {}) {
        const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/keys/attributes/${encodeURIComponent(scope)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getTimeseriesKeysUsingGET_1(entityType, entityId, options = {}) {
        const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/keys/timeseries`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteEntityTimeseriesUsingDELETE(entityType, entityId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/timeseries/delete{?deleteAllDataForKeys,deleteLatest,endTs,keys,rewriteLatestIfDeleted,startTs}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async saveEntityTelemetryWithTTLUsingPOST(entityType, entityId, scope, ttl, data, options = {}) {
        const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/timeseries/${encodeURIComponent(scope)}/${encodeURIComponent(ttl)}?scope=ANY`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async saveEntityTelemetryUsingPOST(entityType, entityId, scope, data, options = {}) {
        const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/timeseries/${encodeURIComponent(scope)}?scope=ANY`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getAttributesByScopeUsingGET(entityType, entityId, scope, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/values/attributes/${encodeURIComponent(scope)}{?keys}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getAttributesUsingGET(entityType, entityId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/values/attributes{?keys}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getTimeseriesUsingGET(entityType, entityId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/values/timeseries{?agg,endTs,interval,keys,limit,orderBy,startTs,useStrictDataTypes}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getLatestTimeseriesUsingGET(entityType, entityId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/values/timeseries{?keys,useStrictDataTypes}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveEntityAttributesV1UsingPOST(entityType, entityId, scope, data, options = {}) {
        const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/${encodeURIComponent(scope)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async deleteEntityAttributesUsingDELETE(entityType, entityId, scope, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/plugins/telemetry/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/${encodeURIComponent(scope)}{?keys}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
}
exports.TelemetryControllerClient = TelemetryControllerClient;
