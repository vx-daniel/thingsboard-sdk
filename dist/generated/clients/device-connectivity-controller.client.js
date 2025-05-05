"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceConnectivityControllerClient = void 0;
const base_client_1 = require("../../base-client");
class DeviceConnectivityControllerClient extends base_client_1.BaseVXOlympusClient {
    async downloadGatewayDockerComposeUsingGET(deviceId, options = {}) {
        const url = `${this.baseUrl}/api/device-connectivity/gateway-launch/${encodeURIComponent(deviceId)}/docker-compose/download`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getDevicePublishTelemetryCommandsUsingGET(deviceId, options = {}) {
        const url = `${this.baseUrl}/api/device-connectivity/${encodeURIComponent(deviceId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async downloadServerCertificateUsingGET(protocol, options = {}) {
        const url = `${this.baseUrl}/api/device-connectivity/${encodeURIComponent(protocol)}/certificate/download`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.DeviceConnectivityControllerClient = DeviceConnectivityControllerClient;
