"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminControllerClient = void 0;
const base_client_1 = require("../../base-client");
class AdminControllerClient extends base_client_1.BaseVXOlympusClient {
    async getAutoCommitSettings(options = {}) {
        const url = `${this.baseUrl}/api/admin/autoCommitSettings`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Record<string, schemas.AutoVersionCreateConfig>>}
     */
    async saveAutoCommitSettingsWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/admin/autoCommitSettings`;
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
    async deleteAutoCommitSettings(options = {}) {
        const url = `${this.baseUrl}/api/admin/autoCommitSettings`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<boolean>}
     */
    async autoCommitSettingsExists(options = {}) {
        const url = `${this.baseUrl}/api/admin/autoCommitSettings/exists`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.FeaturesInfo>}
     */
    async getFeaturesInfo(options = {}) {
        const url = `${this.baseUrl}/api/admin/featuresInfo`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JWT_Settings>}
     */
    async getJwtSettings(options = {}) {
        const url = `${this.baseUrl}/api/admin/jwtSettings`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JWT_Pair>}
     */
    async saveJwtSettingsWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/admin/jwtSettings`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.LicenseUsageInfo>}
     */
    async getLicenseUsageInfo(options = {}) {
        const url = `${this.baseUrl}/api/admin/licenseUsageInfo`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async getAuthorizationUrl(options = {}) {
        const url = `${this.baseUrl}/api/admin/mail/oauth2/authorize`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.code - Query parameter
     * @param {string} queryParams.state - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async codeProcessingUrl(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/admin/mail/oauth2/code{?code,state}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.code !== undefined)
                params.set('code', String(queryParams.code));
            if (queryParams.state !== undefined)
                params.set('state', String(queryParams.state));
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
    async getMailProcessingUrl(options = {}) {
        const url = `${this.baseUrl}/api/admin/mail/oauth2/loginProcessingUrl`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.RepositorySettings>}
     */
    async getRepositorySettings(options = {}) {
        const url = `${this.baseUrl}/api/admin/repositorySettings`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_RepositorySettings>}
     */
    async saveRepositorySettingsWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/admin/repositorySettings`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_Void>}
     */
    async deleteRepositorySettings(options = {}) {
        const url = `${this.baseUrl}/api/admin/repositorySettings`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_Void>}
     */
    async checkRepositoryAccessWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/admin/repositorySettings/checkAccess`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<boolean>}
     */
    async repositorySettingsExists(options = {}) {
        const url = `${this.baseUrl}/api/admin/repositorySettings/exists`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.RepositorySettingsInfo>}
     */
    async getRepositorySettingsInfo(options = {}) {
        const url = `${this.baseUrl}/api/admin/repositorySettings/info`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.SecuritySettings>}
     */
    async getSecuritySettings(options = {}) {
        const url = `${this.baseUrl}/api/admin/securitySettings`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.SecuritySettings>}
     */
    async saveSecuritySettingsWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/admin/securitySettings`;
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
     * @returns {Promise<schemas.AdminSettings>}
     */
    async saveAdminSettingsWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/admin/settings`;
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
    async sendTestMailWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/admin/settings/testMail`;
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
    async sendTestSmsWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/admin/settings/testSms`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} key - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.systemByDefault - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AdminSettings>}
     */
    async getAdminSettings(key, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/admin/settings/${encodeURIComponent(key)}{?systemByDefault}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.systemByDefault !== undefined)
                params.set('systemByDefault', String(queryParams.systemByDefault));
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
     * @returns {Promise<schemas.SystemInfo>}
     */
    async getSystemInfo(options = {}) {
        const url = `${this.baseUrl}/api/admin/systemInfo`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.UpdateMessage>}
     */
    async checkUpdates(options = {}) {
        const url = `${this.baseUrl}/api/admin/updates`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.AdminControllerClient = AdminControllerClient;
