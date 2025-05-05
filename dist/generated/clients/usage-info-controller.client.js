"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageInfoControllerClient = void 0;
const base_client_1 = require("../../base-client");
class UsageInfoControllerClient extends base_client_1.BaseVXOlympusClient {
    async getTenantUsageInfo(options = {}) {
        const url = `${this.baseUrl}/api/usage`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.UsageInfoControllerClient = UsageInfoControllerClient;
