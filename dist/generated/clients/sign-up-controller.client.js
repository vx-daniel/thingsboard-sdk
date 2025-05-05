"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpControllerClient = void 0;
const base_client_1 = require("../../base-client");
class SignUpControllerClient extends base_client_1.BaseVXOlympusClient {
    async activateUserByEmailCode(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/noauth/activateByEmailCode{?emailCode,pkgName}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.emailCode !== undefined)
                params.set('emailCode', String(queryParams.emailCode));
            if (queryParams.pkgName !== undefined)
                params.set('pkgName', String(queryParams.pkgName));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'POST',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.emailCode - Query parameter
     * @param {string} queryParams.pkgName - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<string>}
     */
    async activateEmail(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/noauth/activateEmail{?emailCode,pkgName}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.emailCode !== undefined)
                params.set('emailCode', String(queryParams.emailCode));
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
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.pkgName - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<string>}
     */
    async mobileLogin(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/noauth/login{?pkgName}`;
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
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.email - Query parameter
     * @param {string} queryParams.pkgName - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async resendEmailActivation(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/noauth/resendEmailActivation{?email,pkgName}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.email !== undefined)
                params.set('email', String(queryParams.email));
            if (queryParams.pkgName !== undefined)
                params.set('pkgName', String(queryParams.pkgName));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'POST',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<string>}
     */
    async signUpWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/noauth/signup`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    async acceptPrivacyPolicy(options = {}) {
        const url = `${this.baseUrl}/api/signup/acceptPrivacyPolicy`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    async acceptTermsOfUse(options = {}) {
        const url = `${this.baseUrl}/api/signup/acceptTermsOfUse`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<boolean>}
     */
    async privacyPolicyAccepted(options = {}) {
        const url = `${this.baseUrl}/api/signup/privacyPolicyAccepted`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<boolean>}
     */
    async termsOfUseAccepted(options = {}) {
        const url = `${this.baseUrl}/api/signup/termsOfUseAccepted`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.SignUpControllerClient = SignUpControllerClient;
