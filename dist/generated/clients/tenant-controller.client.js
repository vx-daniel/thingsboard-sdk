"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantControllerClient = void 0;
const base_client_1 = require("../../base-client");
class TenantControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveTenantUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/tenant`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getTenantInfoByIdUsingGET(tenantId, options = {}) {
        const url = `${this.baseUrl}/api/tenant/info/${encodeURIComponent(tenantId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getTenantByIdUsingGET(tenantId, options = {}) {
        const url = `${this.baseUrl}/api/tenant/${encodeURIComponent(tenantId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteTenantUsingDELETE(tenantId, options = {}) {
        const url = `${this.baseUrl}/api/tenant/${encodeURIComponent(tenantId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async getTenantInfosUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenantInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getTenantsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenants{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getTenantsByIdsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenants{?tenantIds}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.TenantControllerClient = TenantControllerClient;
