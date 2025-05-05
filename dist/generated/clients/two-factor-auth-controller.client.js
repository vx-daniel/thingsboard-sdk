"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoFactorAuthControllerClient = void 0;
const base_client_1 = require("../../base-client");
class TwoFactorAuthControllerClient extends base_client_1.BaseVXOlympusClient {
    async getAvailableTwoFaProvidersUsingGET_1(options = {}) {
        const url = `${this.baseUrl}/api/auth/2fa/providers`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.providerType - Query parameter
     * @param {string} queryParams.verificationCode - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JWT_Pair>}
     */
    async checkTwoFaVerificationCode(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/auth/2fa/verification/check{?providerType,verificationCode}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.providerType !== undefined)
                params.set('providerType', String(queryParams.providerType));
            if (queryParams.verificationCode !== undefined)
                params.set('verificationCode', String(queryParams.verificationCode));
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
     * @param {string} queryParams.providerType - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async requestTwoFaVerificationCode(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/auth/2fa/verification/send{?providerType}`;
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
}
exports.TwoFactorAuthControllerClient = TwoFactorAuthControllerClient;
