"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomTranslationControllerClient = void 0;
const base_client_1 = require("../../base-client");
class CustomTranslationControllerClient extends base_client_1.BaseVXOlympusClient {
    async getCurrentCustomTranslationUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/customTranslation/currentCustomTranslation`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getCustomTranslationUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/customTranslation/customTranslation`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveCustomTranslationUsingPOST(data, options = {}) {
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
