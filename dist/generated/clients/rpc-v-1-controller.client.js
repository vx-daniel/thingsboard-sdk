"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RpcV1ControllerClient = void 0;
const base_client_1 = require("../../base-client");
class RpcV1ControllerClient extends base_client_1.BaseVXOlympusClient {
    async handleOneWayDeviceRPCRequestUsingPOST(deviceId, data, options = {}) {
        const url = `${this.baseUrl}/api/plugins/rpc/oneway/${encodeURIComponent(deviceId)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async handleTwoWayDeviceRPCRequestUsingPOST(deviceId, data, options = {}) {
        const url = `${this.baseUrl}/api/plugins/rpc/twoway/${encodeURIComponent(deviceId)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
}
exports.RpcV1ControllerClient = RpcV1ControllerClient;
