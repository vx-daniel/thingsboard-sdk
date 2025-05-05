"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthControllerClient = void 0;
const base_client_1 = require("../../base-client");
class AuthControllerClient extends base_client_1.BaseVXOlympusClient {
    async changePasswordWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/auth/changePassword`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async logout(options = {}) {
        const url = `${this.baseUrl}/api/auth/logout`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.User>}
     */
    async getUser(options = {}) {
        const url = `${this.baseUrl}/api/auth/user`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.activateToken - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<string>}
     */
    async checkActivateToken(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/noauth/activate{?activateToken}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.activateToken !== undefined)
                params.set('activateToken', String(queryParams.activateToken));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.sendActivationMail - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JWT_Pair>}
     */
    async activateUserWithData(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/noauth/activate{?sendActivationMail}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.sendActivationMail !== undefined)
                params.set('sendActivationMail', String(queryParams.sendActivationMail));
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
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JWT_Pair>}
     */
    async resetPasswordWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/noauth/resetPassword`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async requestResetPasswordByEmailWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/noauth/resetPasswordByEmail`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.resetToken - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<string>}
     */
    async checkResetToken(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/noauth/resetPassword{?resetToken}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.resetToken !== undefined)
                params.set('resetToken', String(queryParams.resetToken));
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
     * @returns {Promise<schemas.UserPasswordPolicy>}
     */
    async getUserPasswordPolicy(options = {}) {
        const url = `${this.baseUrl}/api/noauth/userPasswordPolicy`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.AuthControllerClient = AuthControllerClient;
