"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomMenuControllerClient = void 0;
const base_client_1 = require("../../base-client");
class CustomMenuControllerClient extends base_client_1.BaseVXOlympusClient {
    async getCurrentCustomMenuUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/customMenu/currentCustomMenu`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getCustomMenuUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/customMenu/customMenu`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveCustomMenuUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/customMenu/customMenu`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
}
exports.CustomMenuControllerClient = CustomMenuControllerClient;
