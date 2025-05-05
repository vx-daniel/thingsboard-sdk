"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitiesVersionControlControllerClient = void 0;
const base_client_1 = require("../../base-client");
class EntitiesVersionControlControllerClient extends base_client_1.BaseVXOlympusClient {
    async listBranchesUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/branches`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async compareEntityDataToVersionUsingGET(entityType, internalEntityUuid, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/diff/${encodeURIComponent(entityType)}/${encodeURIComponent(internalEntityUuid)}{?versionId}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async loadEntitiesVersionUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/entity`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async listEntitiesAtVersionUsingGET(entityType, versionId, options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/entity/${encodeURIComponent(entityType)}/${encodeURIComponent(versionId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getVersionLoadRequestStatusUsingGET(requestId, options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/entity/${encodeURIComponent(requestId)}/status`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async listAllEntitiesAtVersionUsingGET(versionId, options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/entity/${encodeURIComponent(versionId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEntityDataInfoUsingGET(versionId, entityType, externalEntityUuid, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/info/${encodeURIComponent(versionId)}/${encodeURIComponent(entityType)}/${encodeURIComponent(externalEntityUuid)}{?internalEntityId}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveEntitiesVersionUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/version`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async listEntityVersionsUsingGET(entityType, externalEntityUuid, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/version/${encodeURIComponent(entityType)}/${encodeURIComponent(externalEntityUuid)}?sortProperty=timestamp{&branch,internalEntityId,page,pageSize,sortOrder,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async listEntityTypeVersionsUsingGET(entityType, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/version/${encodeURIComponent(entityType)}?sortProperty=timestamp{&branch,page,pageSize,sortOrder,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getVersionCreateRequestStatusUsingGET(requestId, options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/version/${encodeURIComponent(requestId)}/status`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async listVersionsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/version?sortProperty=timestamp{&branch,page,pageSize,sortOrder,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.EntitiesVersionControlControllerClient = EntitiesVersionControlControllerClient;
