"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgeControllerClient = void 0;
const base_client_1 = require("../../base-client");
class EdgeControllerClient extends base_client_1.BaseVXOlympusClient {
    async getCustomerEdgeInfos(customerId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/edgeInfos{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.includeCustomers !== undefined)
                params.set('includeCustomers', String(queryParams.includeCustomers));
            if (queryParams.type !== undefined)
                params.set('type', String(queryParams.type));
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
     * @param {string} customerId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Edge>}
     */
    async getCustomerEdges(customerId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/edges{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.type !== undefined)
                params.set('type', String(queryParams.type));
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
     * @returns {Promise<schemas.BulkImportResult_Of_Edge>}
     */
    async processEdgesBulkImportWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/edge/bulk_import`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} edgeId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EdgeInfo>}
     */
    async getEdgeInfoById(edgeId, options = {}) {
        const url = `${this.baseUrl}/api/edge/info/${encodeURIComponent(edgeId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} edgeId - Path parameter
     * @param {string} method - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EdgeInstructions>}
     */
    async getEdgeInstallInstructions(edgeId, method, options = {}) {
        const url = `${this.baseUrl}/api/edge/instructions/install/${encodeURIComponent(edgeId)}/${encodeURIComponent(method)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} edgeVersion - Path parameter
     * @param {string} method - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EdgeInstructions>}
     */
    async getEdgeUpgradeInstructions(edgeVersion, method, options = {}) {
        const url = `${this.baseUrl}/api/edge/instructions/upgrade/${encodeURIComponent(edgeVersion)}/${encodeURIComponent(method)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} edgeId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<string>}
     */
    async findMissingToRelatedRuleChains(edgeId, options = {}) {
        const url = `${this.baseUrl}/api/edge/missingToRelatedRuleChains/${encodeURIComponent(edgeId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} edgeId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    async syncEdge(edgeId, options = {}) {
        const url = `${this.baseUrl}/api/edge/sync/${encodeURIComponent(edgeId)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntitySubtype>>}
     */
    async getEdgeTypes(options = {}) {
        const url = `${this.baseUrl}/api/edge/types`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} edgeId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Edge>}
     */
    async getEdgeById(edgeId, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} edgeId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async deleteEdge(edgeId, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} edgeId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<boolean>}
     */
    async isEdgeUpgradeAvailable(edgeId, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/upgrade/available`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} edgeId - Path parameter
     * @param {string} ruleChainId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Edge>}
     */
    async setEdgeRootRuleChain(edgeId, ruleChainId, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/${encodeURIComponent(ruleChainId)}/root`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {boolean} queryParams.includeCustomers - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EdgeInfo>}
     */
    async getAllEdgeInfos(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/edgeInfos/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.includeCustomers !== undefined)
                params.set('includeCustomers', String(queryParams.includeCustomers));
            if (queryParams.type !== undefined)
                params.set('type', String(queryParams.type));
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
     * @returns {Promise<Array<schemas.Edge>>}
     */
    async findByQueryUsingPOST_2WithData(data, options = {}) {
        const url = `${this.baseUrl}/api/edges`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<boolean>}
     */
    async isEdgesSupportEnabled(options = {}) {
        const url = `${this.baseUrl}/api/edges/enabled`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.edgeIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.Edge>>}
     */
    async getEdgesByIds(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/edges{?edgeIds}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.edgeIds !== undefined)
                params.set('edgeIds', String(queryParams.edgeIds));
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
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Edge>}
     */
    async getEdges(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/edges{?page,pageSize,sortOrder,sortProperty,textSearch}`;
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
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.entityGroupId - Query parameter
     * @param {string} queryParams.entityGroupIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Edge>}
     */
    async saveEdgeWithData(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/edge{?entityGroupId,entityGroupIds}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.entityGroupId !== undefined)
                params.set('entityGroupId', String(queryParams.entityGroupId));
            if (queryParams.entityGroupIds !== undefined)
                params.set('entityGroupIds', String(queryParams.entityGroupIds));
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
     * @param {string} entityGroupId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Edge>}
     */
    async getEdgesByEntityGroupId(entityGroupId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/edges{?page,pageSize,sortOrder,sortProperty,textSearch}`;
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
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.licenseSecret - Query parameter
     * @param {string} queryParams.releaseDate - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    async activateInstance(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/license/activateInstance{?licenseSecret,releaseDate}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.licenseSecret !== undefined)
                params.set('licenseSecret', String(queryParams.licenseSecret));
            if (queryParams.releaseDate !== undefined)
                params.set('releaseDate', String(queryParams.releaseDate));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'POST',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    async checkInstanceWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/license/checkInstance`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.edgeName - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Edge>}
     */
    async getTenantEdge(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenant/edges{?edgeName}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.edgeName !== undefined)
                params.set('edgeName', String(queryParams.edgeName));
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
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Edge>}
     */
    async getTenantEdges(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenant/edges{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.type !== undefined)
                params.set('type', String(queryParams.type));
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
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Edge>}
     */
    async getUserEdges(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/user/edges{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.type !== undefined)
                params.set('type', String(queryParams.type));
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
exports.EdgeControllerClient = EdgeControllerClient;
