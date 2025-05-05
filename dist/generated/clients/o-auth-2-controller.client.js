"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth2ControllerClient = void 0;
const base_client_1 = require("../../base-client");
class OAuth2ControllerClient extends base_client_1.BaseVXOlympusClient {
    async getOAuth2Clients(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/noauth/oauth2Clients{?pkgName,platform}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pkgName !== undefined)
                params.set('pkgName', String(queryParams.pkgName));
            if (queryParams.platform !== undefined)
                params.set('platform', String(queryParams.platform));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'POST',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.OAuth2Info>}
     */
    async getCurrentOAuth2Info(options = {}) {
        const url = `${this.baseUrl}/api/oauth2/config`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.OAuth2Info>}
     */
    async saveOAuth2InfoWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/oauth2/config`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<string>}
     */
    async getLoginProcessingUrl(options = {}) {
        const url = `${this.baseUrl}/api/oauth2/loginProcessingUrl`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.OAuth2ControllerClient = OAuth2ControllerClient;
