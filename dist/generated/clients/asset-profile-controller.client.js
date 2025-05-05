"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetProfileControllerClient = void 0;
const base_client_1 = require("../../base-client");
class AssetProfileControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveAssetProfileWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/assetProfile`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.activeOnly - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntityInfo>>}
     */
    async getAssetProfileNames(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/assetProfile/names{?activeOnly}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.activeOnly !== undefined)
                params.set('activeOnly', String(queryParams.activeOnly));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} assetProfileId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async deleteAssetProfile(assetProfileId, options = {}) {
        const url = `${this.baseUrl}/api/assetProfile/${encodeURIComponent(assetProfileId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} assetProfileId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AssetProfile>}
     */
    async setDefaultAssetProfile(assetProfileId, options = {}) {
        const url = `${this.baseUrl}/api/assetProfile/${encodeURIComponent(assetProfileId)}/default`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} assetProfileId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.inlineImages - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AssetProfile>}
     */
    async getAssetProfileById(assetProfileId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/assetProfile/${encodeURIComponent(assetProfileId)}{?inlineImages}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.inlineImages !== undefined)
                params.set('inlineImages', String(queryParams.inlineImages));
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
     * @returns {Promise<schemas.AssetProfileInfo>}
     */
    async getDefaultAssetProfileInfo(options = {}) {
        const url = `${this.baseUrl}/api/assetProfileInfo/default`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} assetProfileId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AssetProfileInfo>}
     */
    async getAssetProfileInfoById(assetProfileId, options = {}) {
        const url = `${this.baseUrl}/api/assetProfileInfo/${encodeURIComponent(assetProfileId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.assetProfileIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.AssetProfileInfo>>}
     */
    async getAssetProfilesByIds(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/assetProfileInfos{?assetProfileIds}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.assetProfileIds !== undefined)
                params.set('assetProfileIds', String(queryParams.assetProfileIds));
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
     * @returns {Promise<schemas.PageData_Of_AssetProfileInfo>}
     */
    async getAssetProfileInfos(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/assetProfileInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`;
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
     * @returns {Promise<schemas.PageData_Of_AssetProfile>}
     */
    async getAssetProfiles(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/assetProfiles{?page,pageSize,sortOrder,sortProperty,textSearch}`;
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
exports.AssetProfileControllerClient = AssetProfileControllerClient;
