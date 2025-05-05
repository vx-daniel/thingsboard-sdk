"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitiesVersionControlControllerClient = void 0;
const base_client_1 = require("../../base-client");
class EntitiesVersionControlControllerClient extends base_client_1.BaseVXOlympusClient {
    async listBranches(options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/branches`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} entityType - Path parameter
     * @param {string} internalEntityUuid - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.versionId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_EntityDataDiff>}
     */
    async compareEntityDataToVersion(entityType, internalEntityUuid, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/diff/${encodeURIComponent(entityType)}/${encodeURIComponent(internalEntityUuid)}{?versionId}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.versionId !== undefined)
                params.set('versionId', String(queryParams.versionId));
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
     * @returns {Promise<string>}
     */
    async loadEntitiesVersionWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/entity`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} entityType - Path parameter
     * @param {string} versionId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_List_Of_VersionedEntityInfo>}
     */
    async listEntitiesAtVersion(entityType, versionId, options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/entity/${encodeURIComponent(entityType)}/${encodeURIComponent(versionId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} requestId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.VersionLoadResult>}
     */
    async getVersionLoadRequestStatus(requestId, options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/entity/${encodeURIComponent(requestId)}/status`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} versionId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_List_Of_VersionedEntityInfo>}
     */
    async listAllEntitiesAtVersion(versionId, options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/entity/${encodeURIComponent(versionId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} versionId - Path parameter
     * @param {string} entityType - Path parameter
     * @param {string} externalEntityUuid - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.internalEntityId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_EntityDataInfo>}
     */
    async getEntityDataInfo(versionId, entityType, externalEntityUuid, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/info/${encodeURIComponent(versionId)}/${encodeURIComponent(entityType)}/${encodeURIComponent(externalEntityUuid)}{?internalEntityId}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.internalEntityId !== undefined)
                params.set('internalEntityId', String(queryParams.internalEntityId));
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
     * @returns {Promise<schemas.DeferredResult_Of_uuid>}
     */
    async saveEntitiesVersionWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/version`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} entityType - Path parameter
     * @param {string} externalEntityUuid - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.branch - Query parameter
     * @param {string} queryParams.internalEntityId - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_PageData_Of_EntityVersion>}
     */
    async listEntityVersions(entityType, externalEntityUuid, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/version/${encodeURIComponent(entityType)}/${encodeURIComponent(externalEntityUuid)}?sortProperty=timestamp{&branch,internalEntityId,page,pageSize,sortOrder,textSearch}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.branch !== undefined)
                params.set('branch', String(queryParams.branch));
            if (queryParams.internalEntityId !== undefined)
                params.set('internalEntityId', String(queryParams.internalEntityId));
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
     * @param {string} entityType - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.branch - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_PageData_Of_EntityVersion>}
     */
    async listEntityTypeVersions(entityType, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/version/${encodeURIComponent(entityType)}?sortProperty=timestamp{&branch,page,pageSize,sortOrder,textSearch}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.branch !== undefined)
                params.set('branch', String(queryParams.branch));
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
     * @param {string} requestId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.VersionCreationResult>}
     */
    async getVersionCreateRequestStatus(requestId, options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/version/${encodeURIComponent(requestId)}/status`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.branch - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_PageData_Of_EntityVersion>}
     */
    async listVersions(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entities/vc/version?sortProperty=timestamp{&branch,page,pageSize,sortOrder,textSearch}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.branch !== undefined)
                params.set('branch', String(queryParams.branch));
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
exports.EntitiesVersionControlControllerClient = EntitiesVersionControlControllerClient;
