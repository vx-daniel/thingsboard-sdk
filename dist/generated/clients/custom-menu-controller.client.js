"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomMenuControllerClient = void 0;
const base_client_1 = require("../../base-client");
class CustomMenuControllerClient extends base_client_1.BaseVXOlympusClient {
    async getCurrentCustomMenu(options = {}) {
        const url = `${this.baseUrl}/api/customMenu/currentCustomMenu`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.CustomMenu>}
     */
    async getCustomMenu(options = {}) {
        const url = `${this.baseUrl}/api/customMenu/customMenu`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.CustomMenu>}
     */
    async saveCustomMenuWithData(data, options = {}) {
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
