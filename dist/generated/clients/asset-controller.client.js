"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetControllerClient = void 0;
const base_client_1 = require("../../base-client");
class AssetControllerClient extends base_client_1.BaseVXOlympusClient {
    async processAssetBulkImportWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/asset/bulk_import`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} assetId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AssetInfo>}
     */
    async getAssetInfoById(assetId, options = {}) {
        const url = `${this.baseUrl}/api/asset/info/${encodeURIComponent(assetId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntitySubtype>>}
     */
    async getAssetTypes(options = {}) {
        const url = `${this.baseUrl}/api/asset/types`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} assetId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Asset>}
     */
    async getAssetById(assetId, options = {}) {
        const url = `${this.baseUrl}/api/asset/${encodeURIComponent(assetId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} assetId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async deleteAsset(assetId, options = {}) {
        const url = `${this.baseUrl}/api/asset/${encodeURIComponent(assetId)}`;
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
     * @param {boolean} queryParams.includeCustomers - Query parameter
     * @param {string} queryParams.assetProfileId - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_AssetInfo>}
     */
    async getAllAssetInfos(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/assetInfos/all{?assetProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.includeCustomers !== undefined)
                params.set('includeCustomers', String(queryParams.includeCustomers));
            if (queryParams.assetProfileId !== undefined)
                params.set('assetProfileId', String(queryParams.assetProfileId));
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
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.Asset>>}
     */
    async findByQueryWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/assets`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.assetIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.Asset>>}
     */
    async getAssetsByIds(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/assets{?assetIds}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.assetIds !== undefined)
                params.set('assetIds', String(queryParams.assetIds));
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
     * @param {string} queryParams.entityGroupId - Query parameter
     * @param {string} queryParams.entityGroupIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Asset>}
     */
    async saveAssetWithData(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/asset{?entityGroupId,entityGroupIds}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.entityGroupId !== undefined)
                params.set('entityGroupId', String(queryParams.entityGroupId));
            if (queryParams.entityGroupIds !== undefined)
                params.set('entityGroupIds', String(queryParams.entityGroupIds));
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
     * @param {string} customerId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {boolean} queryParams.includeCustomers - Query parameter
     * @param {string} queryParams.assetProfileId - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_AssetInfo>}
     */
    async getCustomerAssetInfos(customerId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/assetInfos{?assetProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.includeCustomers !== undefined)
                params.set('includeCustomers', String(queryParams.includeCustomers));
            if (queryParams.assetProfileId !== undefined)
                params.set('assetProfileId', String(queryParams.assetProfileId));
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
     * @param {string} customerId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Asset>}
     */
    async getCustomerAssets(customerId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/assets{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
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
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} entityGroupId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Asset>}
     */
    async getAssetsByEntityGroupId(entityGroupId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/assets{?page,pageSize,sortOrder,sortProperty,textSearch}`;
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
     * @param {string} queryParams.assetName - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Asset>}
     */
    async getTenantAsset(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenant/assets{?assetName}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.assetName !== undefined)
                params.set('assetName', String(queryParams.assetName));
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
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Asset>}
     */
    async getTenantAssets(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenant/assets{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
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
     * @param {string} queryParams.assetProfileId - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Asset>}
     */
    async getUserAssets(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/user/assets{?assetProfileId,page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.type !== undefined)
                params.set('type', String(queryParams.type));
            if (queryParams.assetProfileId !== undefined)
                params.set('assetProfileId', String(queryParams.assetProfileId));
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
exports.AssetControllerClient = AssetControllerClient;
