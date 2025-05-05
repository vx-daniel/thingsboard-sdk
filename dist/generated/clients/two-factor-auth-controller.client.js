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
    async checkTwoFaVerificationCodeUsingPOST(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/auth/2fa/verification/check{?providerType,verificationCode}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async requestTwoFaVerificationCodeUsingPOST(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/auth/2fa/verification/send{?providerType}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
}
exports.TwoFactorAuthControllerClient = TwoFactorAuthControllerClient;
