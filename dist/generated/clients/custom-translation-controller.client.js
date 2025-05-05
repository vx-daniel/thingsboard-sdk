"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomTranslationControllerClient = void 0;
const base_client_1 = require("../../base-client");
class CustomTranslationControllerClient extends base_client_1.BaseVXOlympusClient {
    async getCurrentCustomTranslation(options = {}) {
        const url = `${this.baseUrl}/api/customTranslation/currentCustomTranslation`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.CustomTranslation>}
     */
    async getCustomTranslation(options = {}) {
        const url = `${this.baseUrl}/api/customTranslation/customTranslation`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.CustomTranslation>}
     */
    async saveCustomTranslationWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/customTranslation/customTranslation`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
}
exports.CustomTranslationControllerClient = CustomTranslationControllerClient;
