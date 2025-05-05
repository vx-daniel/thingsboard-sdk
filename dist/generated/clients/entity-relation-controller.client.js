"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityRelationControllerClient = void 0;
const base_client_1 = require("../../base-client");
class EntityRelationControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveRelationUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/relation`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async findByQueryUsingPOST_3(data, options = {}) {
        const url = `${this.baseUrl}/api/relations`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async findInfoByQueryUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/relations/info`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async findInfoByFromUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/relations/info{?fromId,fromType,relationTypeGroup}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async findInfoByToUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/relations/info{?relationTypeGroup,toId,toType}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteRelationsUsingDELETE(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/relations{?entityId,entityType}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async findByFromUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/relations{?fromId,fromType,relationType,relationTypeGroup}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async findByFromUsingGET_1(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/relations{?fromId,fromType,relationTypeGroup}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async findByToUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/relations{?relationType,relationTypeGroup,toId,toType}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async findByToUsingGET_1(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/relations{?relationTypeGroup,toId,toType}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getRelationUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/relation{?fromId,fromType,relationType,relationTypeGroup,toId,toType}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteRelationUsingDELETE(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/relation{?fromId,fromType,relationType,relationTypeGroup,toId,toType}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
}
exports.EntityRelationControllerClient = EntityRelationControllerClient;
