"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginEndpointClient = void 0;
const base_client_1 = require("../../base-client");
class LoginEndpointClient extends base_client_1.BaseVXOlympusClient {
    async loginPost(data, options = {}) {
        const url = `${this.baseUrl}/api/auth/login`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
}
exports.LoginEndpointClient = LoginEndpointClient;
