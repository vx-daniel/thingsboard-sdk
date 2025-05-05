"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbResourceControllerClient = void 0;
const base_client_1 = require("../../base-client");
class TbResourceControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveResourceWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/resource`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} resourceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.TbResourceInfo>}
     */
    async getResourceInfoById(resourceId, options = {}) {
        const url = `${this.baseUrl}/api/resource/info/${encodeURIComponent(resourceId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} resourceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async downloadJksResourceIfChanged(resourceId, options = {}) {
        const url = `${this.baseUrl}/api/resource/jks/${encodeURIComponent(resourceId)}/download`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} resourceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async downloadJsResourceIfChanged(resourceId, options = {}) {
        const url = `${this.baseUrl}/api/resource/js/${encodeURIComponent(resourceId)}/download`;
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
     * @returns {Promise<Array<schemas.LwM2mObject>>}
     */
    async getLwm2mListObjectsPage(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/resource/lwm2m/page{?page,pageSize,sortOrder,sortProperty,textSearch}`;
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
     * @param {string} resourceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async downloadLwm2mResourceIfChanged(resourceId, options = {}) {
        const url = `${this.baseUrl}/api/resource/lwm2m/${encodeURIComponent(resourceId)}/download`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.objectIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.LwM2mObject>>}
     */
    async getLwm2mListObjects(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/resource/lwm2m{?objectIds,sortOrder,sortProperty}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.sortOrder !== undefined)
                params.set('sortOrder', String(queryParams.sortOrder));
            if (queryParams.sortProperty !== undefined)
                params.set('sortProperty', String(queryParams.sortProperty));
            if (queryParams.objectIds !== undefined)
                params.set('objectIds', String(queryParams.objectIds));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} resourceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async downloadPkcs12ResourceIfChanged(resourceId, options = {}) {
        const url = `${this.baseUrl}/api/resource/pkcs12/${encodeURIComponent(resourceId)}/download`;
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
     * @returns {Promise<schemas.PageData_Of_TbResourceInfo>}
     */
    async getTenantResources(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/resource/tenant{?page,pageSize,sortOrder,sortProperty,textSearch}`;
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
     * @param {string} resourceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async deleteResource(resourceId, options = {}) {
        const url = `${this.baseUrl}/api/resource/${encodeURIComponent(resourceId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} resourceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.ByteArrayResource>}
     */
    async downloadResource(resourceId, options = {}) {
        const url = `${this.baseUrl}/api/resource/${encodeURIComponent(resourceId)}/download`;
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
     * @param {string} queryParams.resourceType - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_TbResourceInfo>}
     */
    async getResources(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/resource{?page,pageSize,resourceType,sortOrder,sortProperty,textSearch}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.resourceType !== undefined)
                params.set('resourceType', String(queryParams.resourceType));
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
exports.TbResourceControllerClient = TbResourceControllerClient;
