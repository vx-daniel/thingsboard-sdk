"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantProfileControllerClient = void 0;
const base_client_1 = require("../../base-client");
class TenantProfileControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveTenantProfileWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/tenantProfile`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} tenantProfileId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.TenantProfile>}
     */
    async getTenantProfileById(tenantProfileId, options = {}) {
        const url = `${this.baseUrl}/api/tenantProfile/${encodeURIComponent(tenantProfileId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} tenantProfileId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async deleteTenantProfile(tenantProfileId, options = {}) {
        const url = `${this.baseUrl}/api/tenantProfile/${encodeURIComponent(tenantProfileId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} tenantProfileId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.TenantProfile>}
     */
    async setDefaultTenantProfile(tenantProfileId, options = {}) {
        const url = `${this.baseUrl}/api/tenantProfile/${encodeURIComponent(tenantProfileId)}/default`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EntityInfo>}
     */
    async getDefaultTenantProfileInfo(options = {}) {
        const url = `${this.baseUrl}/api/tenantProfileInfo/default`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} tenantProfileId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EntityInfo>}
     */
    async getTenantProfileInfoById(tenantProfileId, options = {}) {
        const url = `${this.baseUrl}/api/tenantProfileInfo/${encodeURIComponent(tenantProfileId)}`;
        const response = await this.makeRequest(url, {
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
     * @returns {Promise<schemas.PageData_Of_EntityInfo>}
     */
    async getTenantProfileInfos(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenantProfileInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`;
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
     * @param {string} queryParams.ids - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.TenantProfile>>}
     */
    async getTenantProfilesByIds(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenantProfiles{?ids}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.ids !== undefined)
                params.set('ids', String(queryParams.ids));
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
     * @returns {Promise<schemas.PageData_Of_TenantProfile>}
     */
    async getTenantProfiles(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenantProfiles{?page,pageSize,sortOrder,sortProperty,textSearch}`;
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
}
exports.TenantProfileControllerClient = TenantProfileControllerClient;
