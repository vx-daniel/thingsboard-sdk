"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantProfileControllerClient = void 0;
const base_client_1 = require("../../base-client");
class TenantProfileControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveTenantProfileUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/tenantProfile`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getTenantProfileByIdUsingGET(tenantProfileId, options = {}) {
        const url = `${this.baseUrl}/api/tenantProfile/${encodeURIComponent(tenantProfileId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteTenantProfileUsingDELETE(tenantProfileId, options = {}) {
        const url = `${this.baseUrl}/api/tenantProfile/${encodeURIComponent(tenantProfileId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async setDefaultTenantProfileUsingPOST(tenantProfileId, options = {}) {
        const url = `${this.baseUrl}/api/tenantProfile/${encodeURIComponent(tenantProfileId)}/default`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async getDefaultTenantProfileInfoUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/tenantProfileInfo/default`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getTenantProfileInfoByIdUsingGET(tenantProfileId, options = {}) {
        const url = `${this.baseUrl}/api/tenantProfileInfo/${encodeURIComponent(tenantProfileId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getTenantProfileInfosUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenantProfileInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getTenantProfilesByIdsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenantProfiles{?ids}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getTenantProfilesUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenantProfiles{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.TenantProfileControllerClient = TenantProfileControllerClient;
