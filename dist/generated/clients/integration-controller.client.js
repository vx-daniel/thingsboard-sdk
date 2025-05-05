"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationControllerClient = void 0;
const base_client_1 = require("../../base-client");
class IntegrationControllerClient extends base_client_1.BaseVXOlympusClient {
    async findEdgeMissingAttributesUsingGET(edgeId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/edge/integration/${encodeURIComponent(edgeId)}/missingAttributes{?integrationIds}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async findAllRelatedEdgesMissingAttributesUsingGET(integrationId, options = {}) {
        const url = `${this.baseUrl}/api/edge/integration/${encodeURIComponent(integrationId)}/allMissingAttributes`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async assignIntegrationToEdgeUsingPOST(edgeId, integrationId, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/integration/${encodeURIComponent(integrationId)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async unassignIntegrationFromEdgeUsingDELETE(edgeId, integrationId, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/integration/${encodeURIComponent(integrationId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async getEdgeIntegrationInfosUsingGET(edgeId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/integrationInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEdgeIntegrationsUsingGET(edgeId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/integrations{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveIntegrationUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/integration`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async checkIntegrationConnectionUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/integration/check`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getIntegrationByRoutingKeyUsingGET(routingKey, options = {}) {
        const url = `${this.baseUrl}/api/integration/routingKey/${encodeURIComponent(routingKey)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getIntegrationByIdUsingGET(integrationId, options = {}) {
        const url = `${this.baseUrl}/api/integration/${encodeURIComponent(integrationId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteIntegrationUsingDELETE(integrationId, options = {}) {
        const url = `${this.baseUrl}/api/integration/${encodeURIComponent(integrationId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async getIntegrationInfosUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/integrationInfos{?isEdgeTemplate,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getIntegrationsByIdsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/integrations{?integrationIds}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getIntegrationsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/integrations{?isEdgeTemplate,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.IntegrationControllerClient = IntegrationControllerClient;
