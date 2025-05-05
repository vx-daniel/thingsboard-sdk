"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfRegistrationControllerClient = void 0;
const base_client_1 = require("../../base-client");
class SelfRegistrationControllerClient extends base_client_1.BaseVXOlympusClient {
    async getPrivacyPolicy(options = {}) {
        const url = `${this.baseUrl}/api/noauth/selfRegistration/privacyPolicy`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.pkgName - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.SignUpSelfRegistrationParams>}
     */
    async getSignUpSelfRegistrationParams(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/noauth/selfRegistration/signUpSelfRegistrationParams{?pkgName}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pkgName !== undefined)
                params.set('pkgName', String(queryParams.pkgName));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<string>}
     */
    async getTermsOfUse(options = {}) {
        const url = `${this.baseUrl}/api/noauth/selfRegistration/termsOfUse`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.SelfRegistrationParams>}
     */
    async getSelfRegistrationParams(options = {}) {
        const url = `${this.baseUrl}/api/selfRegistration/selfRegistrationParams`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.SelfRegistrationParams>}
     */
    async saveSelfRegistrationParamsWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/selfRegistration/selfRegistrationParams`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} domainName - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    async deleteSelfRegistrationParams(domainName, options = {}) {
        const url = `${this.baseUrl}/api/selfRegistration/selfRegistrationParams/${encodeURIComponent(domainName)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
}
exports.SelfRegistrationControllerClient = SelfRegistrationControllerClient;
