"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth2ConfigTemplateControllerClient = void 0;
const base_client_1 = require("../../base-client");
class OAuth2ConfigTemplateControllerClient extends base_client_1.BaseVXOlympusClient {
    async getClientRegistrationTemplatesUsingGET_1(options = {}) {
        const url = `${this.baseUrl}/api/oauth2/config/template`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveClientRegistrationTemplateUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/oauth2/config/template`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async deleteClientRegistrationTemplateUsingDELETE(clientRegistrationTemplateId, options = {}) {
        const url = `${this.baseUrl}/api/oauth2/config/template/${encodeURIComponent(clientRegistrationTemplateId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
}
exports.OAuth2ConfigTemplateControllerClient = OAuth2ConfigTemplateControllerClient;
