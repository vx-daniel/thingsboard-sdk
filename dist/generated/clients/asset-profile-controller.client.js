"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetProfileControllerClient = void 0;
const base_client_1 = require("../../base-client");
class AssetProfileControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveAssetProfileUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/assetProfile`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getAssetProfileNamesUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/assetProfile/names{?activeOnly}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteAssetProfileUsingDELETE(assetProfileId, options = {}) {
        const url = `${this.baseUrl}/api/assetProfile/${encodeURIComponent(assetProfileId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async setDefaultAssetProfileUsingPOST(assetProfileId, options = {}) {
        const url = `${this.baseUrl}/api/assetProfile/${encodeURIComponent(assetProfileId)}/default`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async getAssetProfileByIdUsingGET(assetProfileId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/assetProfile/${encodeURIComponent(assetProfileId)}{?inlineImages}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getDefaultAssetProfileInfoUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/assetProfileInfo/default`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getAssetProfileInfoByIdUsingGET(assetProfileId, options = {}) {
        const url = `${this.baseUrl}/api/assetProfileInfo/${encodeURIComponent(assetProfileId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getAssetProfilesByIdsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/assetProfileInfos{?assetProfileIds}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getAssetProfileInfosUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/assetProfileInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getAssetProfilesUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/assetProfiles{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.AssetProfileControllerClient = AssetProfileControllerClient;
