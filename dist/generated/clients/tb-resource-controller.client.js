"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbResourceControllerClient = void 0;
const base_client_1 = require("../../base-client");
class TbResourceControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveResourceUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/resource`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getResourceInfoByIdUsingGET(resourceId, options = {}) {
        const url = `${this.baseUrl}/api/resource/info/${encodeURIComponent(resourceId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async downloadJksResourceIfChangedUsingGET(resourceId, options = {}) {
        const url = `${this.baseUrl}/api/resource/jks/${encodeURIComponent(resourceId)}/download`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async downloadJsResourceIfChangedUsingGET(resourceId, options = {}) {
        const url = `${this.baseUrl}/api/resource/js/${encodeURIComponent(resourceId)}/download`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getLwm2mListObjectsPageUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/resource/lwm2m/page{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async downloadLwm2mResourceIfChangedUsingGET(resourceId, options = {}) {
        const url = `${this.baseUrl}/api/resource/lwm2m/${encodeURIComponent(resourceId)}/download`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getLwm2mListObjectsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/resource/lwm2m{?objectIds,sortOrder,sortProperty}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async downloadPkcs12ResourceIfChangedUsingGET(resourceId, options = {}) {
        const url = `${this.baseUrl}/api/resource/pkcs12/${encodeURIComponent(resourceId)}/download`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getTenantResourcesUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/resource/tenant{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteResourceUsingDELETE(resourceId, options = {}) {
        const url = `${this.baseUrl}/api/resource/${encodeURIComponent(resourceId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async downloadResourceUsingGET(resourceId, options = {}) {
        const url = `${this.baseUrl}/api/resource/${encodeURIComponent(resourceId)}/download`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getResourcesUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/resource{?page,pageSize,resourceType,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.TbResourceControllerClient = TbResourceControllerClient;
