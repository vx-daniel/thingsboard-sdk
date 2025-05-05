"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationControllerClient = void 0;
const base_client_1 = require("../../base-client");
class IntegrationControllerClient extends base_client_1.BaseVXOlympusClient {
    async findEdgeMissingAttributes(edgeId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/edge/integration/${encodeURIComponent(edgeId)}/missingAttributes{?integrationIds}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.integrationIds !== undefined)
                params.set('integrationIds', String(queryParams.integrationIds));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} integrationId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<string>}
     */
    async findAllRelatedEdgesMissingAttributes(integrationId, options = {}) {
        const url = `${this.baseUrl}/api/edge/integration/${encodeURIComponent(integrationId)}/allMissingAttributes`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} edgeId - Path parameter
     * @param {string} integrationId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Integration>}
     */
    async assignIntegrationToEdge(edgeId, integrationId, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/integration/${encodeURIComponent(integrationId)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} edgeId - Path parameter
     * @param {string} integrationId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Integration>}
     */
    async unassignIntegrationFromEdge(edgeId, integrationId, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/integration/${encodeURIComponent(integrationId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} edgeId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_IntegrationInfo>}
     */
    async getEdgeIntegrationInfos(edgeId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/integrationInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`;
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
     * @param {string} edgeId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Integration>}
     */
    async getEdgeIntegrations(edgeId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/integrations{?page,pageSize,sortOrder,sortProperty,textSearch}`;
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
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Integration>}
     */
    async saveIntegrationWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/integration`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async checkIntegrationConnectionWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/integration/check`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} routingKey - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Integration>}
     */
    async getIntegrationByRoutingKey(routingKey, options = {}) {
        const url = `${this.baseUrl}/api/integration/routingKey/${encodeURIComponent(routingKey)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} integrationId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Integration>}
     */
    async getIntegrationById(integrationId, options = {}) {
        const url = `${this.baseUrl}/api/integration/${encodeURIComponent(integrationId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} integrationId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async deleteIntegration(integrationId, options = {}) {
        const url = `${this.baseUrl}/api/integration/${encodeURIComponent(integrationId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
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
     * @returns {Promise<schemas.PageData_Of_IntegrationInfo>}
     */
    async getIntegrationInfos(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/integrationInfos{?isEdgeTemplate,page,pageSize,sortOrder,sortProperty,textSearch}`;
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
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.integrationIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.Integration>>}
     */
    async getIntegrationsByIds(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/integrations{?integrationIds}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.integrationIds !== undefined)
                params.set('integrationIds', String(queryParams.integrationIds));
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
     * @returns {Promise<schemas.PageData_Of_Integration>}
     */
    async getIntegrations(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/integrations{?isEdgeTemplate,page,pageSize,sortOrder,sortProperty,textSearch}`;
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
exports.IntegrationControllerClient = IntegrationControllerClient;
