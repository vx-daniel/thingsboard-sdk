"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlobEntityControllerClient = void 0;
const base_client_1 = require("../../base-client");
class BlobEntityControllerClient extends base_client_1.BaseVXOlympusClient {
    async getBlobEntitiesByIds(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/blobEntities{?blobEntityIds}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.blobEntityIds !== undefined)
                params.set('blobEntityIds', String(queryParams.blobEntityIds));
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
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {integer} queryParams.startTime - Query parameter
     * @param {integer} queryParams.endTime - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_BlobEntityWithCustomerInfo>}
     */
    async getBlobEntities(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/blobEntities{?endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch,type}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.type !== undefined)
                params.set('type', String(queryParams.type));
            if (queryParams.textSearch !== undefined)
                params.set('textSearch', String(queryParams.textSearch));
            if (queryParams.sortProperty !== undefined)
                params.set('sortProperty', String(queryParams.sortProperty));
            if (queryParams.sortOrder !== undefined)
                params.set('sortOrder', String(queryParams.sortOrder));
            if (queryParams.startTime !== undefined)
                params.set('startTime', String(queryParams.startTime));
            if (queryParams.endTime !== undefined)
                params.set('endTime', String(queryParams.endTime));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} blobEntityId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.BlobEntityWithCustomerInfo>}
     */
    async getBlobEntityInfoById(blobEntityId, options = {}) {
        const url = `${this.baseUrl}/api/blobEntity/info/${encodeURIComponent(blobEntityId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} blobEntityId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async deleteBlobEntity(blobEntityId, options = {}) {
        const url = `${this.baseUrl}/api/blobEntity/${encodeURIComponent(blobEntityId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} blobEntityId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Resource>}
     */
    async downloadBlobEntity(blobEntityId, options = {}) {
        const url = `${this.baseUrl}/api/blobEntity/${encodeURIComponent(blobEntityId)}/download`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.BlobEntityControllerClient = BlobEntityControllerClient;
