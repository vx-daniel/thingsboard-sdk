import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class IntegrationControllerClient extends BaseVXOlympusClient {
  async findEdgeMissingAttributesUsingGET(edgeId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/integration/${encodeURIComponent(edgeId)}/missingAttributes{?integrationIds}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async findAllRelatedEdgesMissingAttributesUsingGET(integrationId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/integration/${encodeURIComponent(integrationId)}/allMissingAttributes`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async assignIntegrationToEdgeUsingPOST(edgeId: string, integrationId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/integration/${encodeURIComponent(integrationId)}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async unassignIntegrationFromEdgeUsingDELETE(edgeId: string, integrationId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/integration/${encodeURIComponent(integrationId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async getEdgeIntegrationInfosUsingGET(edgeId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/integrationInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getEdgeIntegrationsUsingGET(edgeId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/integrations{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveIntegrationUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/integration`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async checkIntegrationConnectionUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/integration/check`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getIntegrationByRoutingKeyUsingGET(routingKey: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/integration/routingKey/${encodeURIComponent(routingKey)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getIntegrationByIdUsingGET(integrationId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/integration/${encodeURIComponent(integrationId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteIntegrationUsingDELETE(integrationId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/integration/${encodeURIComponent(integrationId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async getIntegrationInfosUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/integrationInfos{?isEdgeTemplate,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getIntegrationsByIdsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/integrations{?integrationIds}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getIntegrationsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/integrations{?isEdgeTemplate,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}