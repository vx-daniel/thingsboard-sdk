"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminControllerClient = void 0;
const base_client_1 = require("../../base-client");
class AdminControllerClient extends base_client_1.BaseVXOlympusClient {
    async getAutoCommitSettingsUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/admin/autoCommitSettings`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveAutoCommitSettingsUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/admin/autoCommitSettings`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async deleteAutoCommitSettingsUsingDELETE(options = {}) {
        const url = `${this.baseUrl}/api/admin/autoCommitSettings`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async autoCommitSettingsExistsUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/admin/autoCommitSettings/exists`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getFeaturesInfoUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/admin/featuresInfo`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getJwtSettingsUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/admin/jwtSettings`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveJwtSettingsUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/admin/jwtSettings`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getLicenseUsageInfoUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/admin/licenseUsageInfo`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getAuthorizationUrlUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/admin/mail/oauth2/authorize`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async codeProcessingUrlUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/admin/mail/oauth2/code{?code,state}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getMailProcessingUrlUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/admin/mail/oauth2/loginProcessingUrl`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getRepositorySettingsUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/admin/repositorySettings`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveRepositorySettingsUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/admin/repositorySettings`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async deleteRepositorySettingsUsingDELETE(options = {}) {
        const url = `${this.baseUrl}/api/admin/repositorySettings`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async checkRepositoryAccessUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/admin/repositorySettings/checkAccess`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async repositorySettingsExistsUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/admin/repositorySettings/exists`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getRepositorySettingsInfoUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/admin/repositorySettings/info`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getSecuritySettingsUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/admin/securitySettings`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveSecuritySettingsUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/admin/securitySettings`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async saveAdminSettingsUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/admin/settings`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async sendTestMailUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/admin/settings/testMail`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async sendTestSmsUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/admin/settings/testSms`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getAdminSettingsUsingGET(key, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/admin/settings/${encodeURIComponent(key)}{?systemByDefault}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getSystemInfoUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/admin/systemInfo`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async checkUpdatesUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/admin/updates`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.AdminControllerClient = AdminControllerClient;
