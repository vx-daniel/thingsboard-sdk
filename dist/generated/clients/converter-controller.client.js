"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConverterControllerClient = void 0;
const base_client_1 = require("../../base-client");
class ConverterControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveConverterWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/converter`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.scriptLang - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    async testDownLinkConverterWithData(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/converter/testDownLink{?scriptLang}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.scriptLang !== undefined)
                params.set('scriptLang', String(queryParams.scriptLang));
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
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.scriptLang - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    async testUpLinkConverterWithData(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/converter/testUpLink{?scriptLang}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.scriptLang !== undefined)
                params.set('scriptLang', String(queryParams.scriptLang));
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
     * @param {string} converterId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Converter>}
     */
    async getConverterById(converterId, options = {}) {
        const url = `${this.baseUrl}/api/converter/${encodeURIComponent(converterId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} converterId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async deleteConverter(converterId, options = {}) {
        const url = `${this.baseUrl}/api/converter/${encodeURIComponent(converterId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} converterId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.converterType - Query parameter
     * @param {string} queryParams.integrationType - Query parameter
     * @param {string} queryParams.integrationName - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    async getLatestConverterDebugInput(converterId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/converter/${encodeURIComponent(converterId)}/debugIn{?converterType,integrationName,integrationType}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.converterType !== undefined)
                params.set('converterType', String(queryParams.converterType));
            if (queryParams.integrationType !== undefined)
                params.set('integrationType', String(queryParams.integrationType));
            if (queryParams.integrationName !== undefined)
                params.set('integrationName', String(queryParams.integrationName));
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
     * @param {string} queryParams.converterIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.Converter>>}
     */
    async getConvertersByIds(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/converters{?converterIds}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.converterIds !== undefined)
                params.set('converterIds', String(queryParams.converterIds));
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
     * @param {boolean} queryParams.isEdgeTemplate - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Converter>}
     */
    async getConverters(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/converters{?isEdgeTemplate,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.isEdgeTemplate !== undefined)
                params.set('isEdgeTemplate', String(queryParams.isEdgeTemplate));
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
exports.ConverterControllerClient = ConverterControllerClient;
