"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantControllerClient = void 0;
const base_client_1 = require("../../base-client");
class TenantControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveTenantWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/tenant`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} tenantId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.TenantInfo>}
     */
    async getTenantInfoById(tenantId, options = {}) {
        const url = `${this.baseUrl}/api/tenant/info/${encodeURIComponent(tenantId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} tenantId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Tenant>}
     */
    async getTenantById(tenantId, options = {}) {
        const url = `${this.baseUrl}/api/tenant/${encodeURIComponent(tenantId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} tenantId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async deleteTenant(tenantId, options = {}) {
        const url = `${this.baseUrl}/api/tenant/${encodeURIComponent(tenantId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_TenantInfo>}
     */
    async getTenantInfos(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenantInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.textSearch !== undefined)
                params.set('textSearch', String(queryParams.textSearch));
            if (queryParams.sortProperty !== undefined)
                params.set('sortProperty', String(queryParams.sortProperty));
            if (queryParams.sortOrder !== undefined)
                params.set('sortOrder', String(queryParams.sortOrder));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Tenant>}
     */
    async getTenants(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenants{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.textSearch !== undefined)
                params.set('textSearch', String(queryParams.textSearch));
            if (queryParams.sortProperty !== undefined)
                params.set('sortProperty', String(queryParams.sortProperty));
            if (queryParams.sortOrder !== undefined)
                params.set('sortOrder', String(queryParams.sortOrder));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.tenantIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.Tenant>>}
     */
    async getTenantsByIds(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenants{?tenantIds}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.tenantIds !== undefined)
                params.set('tenantIds', String(queryParams.tenantIds));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.TenantControllerClient = TenantControllerClient;
