import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class EdgeControllerClient extends BaseVXOlympusClient {
  async getCustomerEdgeInfosUsingGET(customerId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/edgeInfos{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch,type}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getCustomerEdgesUsingGET(customerId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/edges{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async processEdgesBulkImportUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/bulk_import`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getEdgeInfoByIdUsingGET(edgeId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/info/${encodeURIComponent(edgeId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getEdgeInstallInstructionsUsingGET(edgeId: string, method: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/instructions/install/${encodeURIComponent(edgeId)}/${encodeURIComponent(method)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getEdgeUpgradeInstructionsUsingGET(edgeVersion: string, method: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/instructions/upgrade/${encodeURIComponent(edgeVersion)}/${encodeURIComponent(method)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async findMissingToRelatedRuleChainsUsingGET(edgeId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/missingToRelatedRuleChains/${encodeURIComponent(edgeId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async syncEdgeUsingPOST(edgeId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/sync/${encodeURIComponent(edgeId)}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async getEdgeTypesUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/types`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getEdgeByIdUsingGET(edgeId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteEdgeUsingDELETE(edgeId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async isEdgeUpgradeAvailableUsingGET(edgeId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/upgrade/available`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async setEdgeRootRuleChainUsingPOST(edgeId: string, ruleChainId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/${encodeURIComponent(ruleChainId)}/root`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async getAllEdgeInfosUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edgeInfos/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch,type}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async findByQueryUsingPOST_2(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edges`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async isEdgesSupportEnabledUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edges/enabled`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getEdgesByIdsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edges{?edgeIds}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getEdgesUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edges{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveEdgeUsingPOST(data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge{?entityGroupId,entityGroupIds}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getEdgesByEntityGroupIdUsingGET(entityGroupId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/edges{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async activateInstanceUsingPOST(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/license/activateInstance{?licenseSecret,releaseDate}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async checkInstanceUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/license/checkInstance`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getTenantEdgeUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenant/edges{?edgeName}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getTenantEdgesUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenant/edges{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getUserEdgesUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user/edges{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}