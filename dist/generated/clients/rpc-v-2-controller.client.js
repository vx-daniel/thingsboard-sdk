"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RpcV2ControllerClient = void 0;
const base_client_1 = require("../../base-client");
class RpcV2ControllerClient extends base_client_1.BaseVXOlympusClient {
    async handleOneWayDeviceRPCRequestUsingPOST_1(deviceId, data, options = {}) {
        const url = `${this.baseUrl}/api/rpc/oneway/${encodeURIComponent(deviceId)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getPersistedRpcByDeviceUsingGET(deviceId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/rpc/persistent/device/${encodeURIComponent(deviceId)}{?page,pageSize,rpcStatus,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getPersistedRpcUsingGET(rpcId, options = {}) {
        const url = `${this.baseUrl}/api/rpc/persistent/${encodeURIComponent(rpcId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteRpcUsingDELETE(rpcId, options = {}) {
        const url = `${this.baseUrl}/api/rpc/persistent/${encodeURIComponent(rpcId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async handleTwoWayDeviceRPCRequestUsingPOST_1(deviceId, data, options = {}) {
        const url = `${this.baseUrl}/api/rpc/twoway/${encodeURIComponent(deviceId)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
}
exports.RpcV2ControllerClient = RpcV2ControllerClient;
