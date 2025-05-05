"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthControllerClient = void 0;
const base_client_1 = require("../../base-client");
class AuthControllerClient extends base_client_1.BaseVXOlympusClient {
    async changePasswordUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/auth/changePassword`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async logoutUsingPOST(options = {}) {
        const url = `${this.baseUrl}/api/auth/logout`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async getUserUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/auth/user`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async checkActivateTokenUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/noauth/activate{?activateToken}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async activateUserUsingPOST(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/noauth/activate{?sendActivationMail}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async resetPasswordUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/noauth/resetPassword`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async requestResetPasswordByEmailUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/noauth/resetPasswordByEmail`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async checkResetTokenUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/noauth/resetPassword{?resetToken}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getUserPasswordPolicyUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/noauth/userPasswordPolicy`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.AuthControllerClient = AuthControllerClient;
