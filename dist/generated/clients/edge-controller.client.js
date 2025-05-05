"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgeControllerClient = void 0;
const base_client_1 = require("../../base-client");
class EdgeControllerClient extends base_client_1.BaseVXOlympusClient {
    async getCustomerEdgeInfosUsingGET(customerId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/edgeInfos{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getCustomerEdgesUsingGET(customerId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/edges{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async processEdgesBulkImportUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/edge/bulk_import`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getEdgeInfoByIdUsingGET(edgeId, options = {}) {
        const url = `${this.baseUrl}/api/edge/info/${encodeURIComponent(edgeId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEdgeInstallInstructionsUsingGET(edgeId, method, options = {}) {
        const url = `${this.baseUrl}/api/edge/instructions/install/${encodeURIComponent(edgeId)}/${encodeURIComponent(method)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEdgeUpgradeInstructionsUsingGET(edgeVersion, method, options = {}) {
        const url = `${this.baseUrl}/api/edge/instructions/upgrade/${encodeURIComponent(edgeVersion)}/${encodeURIComponent(method)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async findMissingToRelatedRuleChainsUsingGET(edgeId, options = {}) {
        const url = `${this.baseUrl}/api/edge/missingToRelatedRuleChains/${encodeURIComponent(edgeId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async syncEdgeUsingPOST(edgeId, options = {}) {
        const url = `${this.baseUrl}/api/edge/sync/${encodeURIComponent(edgeId)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async getEdgeTypesUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/edge/types`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEdgeByIdUsingGET(edgeId, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteEdgeUsingDELETE(edgeId, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async isEdgeUpgradeAvailableUsingGET(edgeId, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/upgrade/available`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async setEdgeRootRuleChainUsingPOST(edgeId, ruleChainId, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/${encodeURIComponent(ruleChainId)}/root`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async getAllEdgeInfosUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/edgeInfos/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async findByQueryUsingPOST_2(data, options = {}) {
        const url = `${this.baseUrl}/api/edges`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async isEdgesSupportEnabledUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/edges/enabled`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEdgesByIdsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/edges{?edgeIds}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEdgesUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/edges{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveEdgeUsingPOST(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/edge{?entityGroupId,entityGroupIds}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getEdgesByEntityGroupIdUsingGET(entityGroupId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/edges{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async activateInstanceUsingPOST(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/license/activateInstance{?licenseSecret,releaseDate}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async checkInstanceUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/license/checkInstance`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getTenantEdgeUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenant/edges{?edgeName}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getTenantEdgesUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenant/edges{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getUserEdgesUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/user/edges{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.EdgeControllerClient = EdgeControllerClient;
