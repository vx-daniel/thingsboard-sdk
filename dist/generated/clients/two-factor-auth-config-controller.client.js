"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoFactorAuthConfigControllerClient = void 0;
const base_client_1 = require("../../base-client");
class TwoFactorAuthConfigControllerClient extends base_client_1.BaseVXOlympusClient {
    async generateTwoFaAccountConfig(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/2fa/account/config/generate{?providerType}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.providerType !== undefined)
                params.set('providerType', String(queryParams.providerType));
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
     * @returns {Promise<void>}
     */
    async submitTwoFaAccountConfigWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/2fa/account/config/submit`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.providerType - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AccountTwoFaSettings>}
     */
    async updateTwoFaAccountConfigWithData(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/2fa/account/config{?providerType}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.providerType !== undefined)
                params.set('providerType', String(queryParams.providerType));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'PUT',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.providerType - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AccountTwoFaSettings>}
     */
    async deleteTwoFaAccountConfig(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/2fa/account/config{?providerType}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.providerType !== undefined)
                params.set('providerType', String(queryParams.providerType));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.verificationCode - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AccountTwoFaSettings>}
     */
    async verifyAndSaveTwoFaAccountConfigWithData(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/2fa/account/config{?verificationCode}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.verificationCode !== undefined)
                params.set('verificationCode', String(queryParams.verificationCode));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AccountTwoFaSettings>}
     */
    async getAccountTwoFaSettings(options = {}) {
        const url = `${this.baseUrl}/api/2fa/account/settings`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<string>>}
     */
    async getAvailableTwoFaProviders(options = {}) {
        const url = `${this.baseUrl}/api/2fa/providers`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PlatformTwoFaSettings>}
     */
    async getPlatformTwoFaSettings(options = {}) {
        const url = `${this.baseUrl}/api/2fa/settings`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PlatformTwoFaSettings>}
     */
    async savePlatformTwoFaSettingsWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/2fa/settings`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
}
exports.TwoFactorAuthConfigControllerClient = TwoFactorAuthConfigControllerClient;
