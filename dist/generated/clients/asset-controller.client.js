"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetControllerClient = void 0;
const base_client_1 = require("../../base-client");
class AssetControllerClient extends base_client_1.BaseVXOlympusClient {
    async processAssetBulkImportUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/asset/bulk_import`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getAssetInfoByIdUsingGET(assetId, options = {}) {
        const url = `${this.baseUrl}/api/asset/info/${encodeURIComponent(assetId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getAssetTypesUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/asset/types`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getAssetByIdUsingGET(assetId, options = {}) {
        const url = `${this.baseUrl}/api/asset/${encodeURIComponent(assetId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteAssetUsingDELETE(assetId, options = {}) {
        const url = `${this.baseUrl}/api/asset/${encodeURIComponent(assetId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async getAllAssetInfosUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/assetInfos/all{?assetProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async findByQueryUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/assets`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getAssetsByIdsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/assets{?assetIds}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveAssetUsingPOST(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/asset{?entityGroupId,entityGroupIds}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getCustomerAssetInfosUsingGET(customerId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/assetInfos{?assetProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getCustomerAssetsUsingGET(customerId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/assets{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getAssetsByEntityGroupIdUsingGET(entityGroupId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/assets{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getTenantAssetUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenant/assets{?assetName}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getTenantAssetsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenant/assets{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getUserAssetsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/user/assets{?assetProfileId,page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.AssetControllerClient = AssetControllerClient;
