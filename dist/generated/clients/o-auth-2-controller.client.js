"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth2ControllerClient = void 0;
const base_client_1 = require("../../base-client");
class OAuth2ControllerClient extends base_client_1.BaseVXOlympusClient {
    async getOAuth2ClientsUsingPOST(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/noauth/oauth2Clients{?pkgName,platform}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async getCurrentOAuth2InfoUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/oauth2/config`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveOAuth2InfoUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/oauth2/config`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getLoginProcessingUrlUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/oauth2/loginProcessingUrl`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.OAuth2ControllerClient = OAuth2ControllerClient;
