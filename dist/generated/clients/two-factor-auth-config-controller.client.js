"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoFactorAuthConfigControllerClient = void 0;
const base_client_1 = require("../../base-client");
class TwoFactorAuthConfigControllerClient extends base_client_1.BaseVXOlympusClient {
    async generateTwoFaAccountConfigUsingPOST(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/2fa/account/config/generate{?providerType}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async submitTwoFaAccountConfigUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/2fa/account/config/submit`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async updateTwoFaAccountConfigUsingPUT(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/2fa/account/config{?providerType}`;
        const response = await this.makeRequest(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async deleteTwoFaAccountConfigUsingDELETE(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/2fa/account/config{?providerType}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async verifyAndSaveTwoFaAccountConfigUsingPOST(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/2fa/account/config{?verificationCode}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getAccountTwoFaSettingsUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/2fa/account/settings`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getAvailableTwoFaProvidersUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/2fa/providers`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getPlatformTwoFaSettingsUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/2fa/settings`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async savePlatformTwoFaSettingsUsingPOST(data, options = {}) {
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
