"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConverterControllerClient = void 0;
const base_client_1 = require("../../base-client");
class ConverterControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveConverterUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/converter`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async testDownLinkConverterUsingPOST(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/converter/testDownLink{?scriptLang}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async testUpLinkConverterUsingPOST(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/converter/testUpLink{?scriptLang}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getConverterByIdUsingGET(converterId, options = {}) {
        const url = `${this.baseUrl}/api/converter/${encodeURIComponent(converterId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteConverterUsingDELETE(converterId, options = {}) {
        const url = `${this.baseUrl}/api/converter/${encodeURIComponent(converterId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async getLatestConverterDebugInputUsingGET(converterId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/converter/${encodeURIComponent(converterId)}/debugIn{?converterType,integrationName,integrationType}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getConvertersByIdsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/converters{?converterIds}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getConvertersUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/converters{?isEdgeTemplate,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.ConverterControllerClient = ConverterControllerClient;
