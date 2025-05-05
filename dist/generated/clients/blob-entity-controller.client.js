"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlobEntityControllerClient = void 0;
const base_client_1 = require("../../base-client");
class BlobEntityControllerClient extends base_client_1.BaseVXOlympusClient {
    async getBlobEntitiesByIdsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/blobEntities{?blobEntityIds}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getBlobEntitiesUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/blobEntities{?endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch,type}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getBlobEntityInfoByIdUsingGET(blobEntityId, options = {}) {
        const url = `${this.baseUrl}/api/blobEntity/info/${encodeURIComponent(blobEntityId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteBlobEntityUsingDELETE(blobEntityId, options = {}) {
        const url = `${this.baseUrl}/api/blobEntity/${encodeURIComponent(blobEntityId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async downloadBlobEntityUsingGET(blobEntityId, options = {}) {
        const url = `${this.baseUrl}/api/blobEntity/${encodeURIComponent(blobEntityId)}/download`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.BlobEntityControllerClient = BlobEntityControllerClient;
