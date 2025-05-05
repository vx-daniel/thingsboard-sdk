import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class EdgeControllerClient extends BaseVXOlympusClient {  /**
   * @param {string} customerId - Path parameter
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
  async getCustomerEdgeInfos(customerId: string, queryParams?: { pageSize?: number; page?: number; includeCustomers?: boolean; type?: string; textSearch?: string; sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_EdgeInfo> {
    const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/edgeInfos{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch,type}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.includeCustomers !== undefined) params.set('includeCustomers', String(queryParams.includeCustomers));
      if (queryParams.type !== undefined) params.set('type', String(queryParams.type));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_EdgeInfo>(url + (queryString ? `?${queryString}` : ''), {
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
  async getCustomerEdges(customerId: string, queryParams?: { pageSize?: number; page?: number; type?: string; textSearch?: string; sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_Edge> {
    const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/edges{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.type !== undefined) params.set('type', String(queryParams.type));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_Edge>(url + (queryString ? `?${queryString}` : ''), {
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
  async processEdgesBulkImportWithData(data: schemas.BulkImportRequest, options: RequestInit = {}): Promise<schemas.BulkImportResult_Of_Edge> {
    const url = `${this.baseUrl}/api/edge/bulk_import`;
    const response = await this.makeRequest<schemas.BulkImportResult_Of_Edge>(url, {
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
  async getEdgeInfoById(edgeId: string, options: RequestInit = {}): Promise<schemas.EdgeInfo> {
    const url = `${this.baseUrl}/api/edge/info/${encodeURIComponent(edgeId)}`;
    const response = await this.makeRequest<schemas.EdgeInfo>(url, {
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
  async getEdgeInstallInstructions(edgeId: string, method: 'centos' | 'docker' | 'ubuntu', options: RequestInit = {}): Promise<schemas.EdgeInstructions> {
    const url = `${this.baseUrl}/api/edge/instructions/install/${encodeURIComponent(edgeId)}/${encodeURIComponent(method)}`;
    const response = await this.makeRequest<schemas.EdgeInstructions>(url, {
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
  async getEdgeUpgradeInstructions(edgeVersion: string, method: 'centos' | 'docker' | 'ubuntu', options: RequestInit = {}): Promise<schemas.EdgeInstructions> {
    const url = `${this.baseUrl}/api/edge/instructions/upgrade/${encodeURIComponent(edgeVersion)}/${encodeURIComponent(method)}`;
    const response = await this.makeRequest<schemas.EdgeInstructions>(url, {
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
  async findMissingToRelatedRuleChains(edgeId: string, options: RequestInit = {}): Promise<string> {
    const url = `${this.baseUrl}/api/edge/missingToRelatedRuleChains/${encodeURIComponent(edgeId)}`;
    const response = await this.makeRequest<string>(url, {
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
  async syncEdge(edgeId: string, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/edge/sync/${encodeURIComponent(edgeId)}`;
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.EntitySubtype>>}
   */
  async getEdgeTypes(options: RequestInit = {}): Promise<Array<schemas.EntitySubtype>> {
    const url = `${this.baseUrl}/api/edge/types`;
    const response = await this.makeRequest<Array<schemas.EntitySubtype>>(url, {
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
  async getEdgeById(edgeId: string, options: RequestInit = {}): Promise<schemas.Edge> {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}`;
    const response = await this.makeRequest<schemas.Edge>(url, {
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
  async deleteEdge(edgeId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}`;
    const response = await this.makeRequest<void>(url, {
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
  async isEdgeUpgradeAvailable(edgeId: string, options: RequestInit = {}): Promise<boolean> {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/upgrade/available`;
    const response = await this.makeRequest<boolean>(url, {
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
  async setEdgeRootRuleChain(edgeId: string, ruleChainId: string, options: RequestInit = {}): Promise<schemas.Edge> {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/${encodeURIComponent(ruleChainId)}/root`;
    const response = await this.makeRequest<schemas.Edge>(url, {
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
  async getAllEdgeInfos(queryParams?: { pageSize?: number; page?: number; includeCustomers?: boolean; type?: string; textSearch?: string; sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_EdgeInfo> {
    const url = `${this.baseUrl}/api/edgeInfos/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch,type}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.includeCustomers !== undefined) params.set('includeCustomers', String(queryParams.includeCustomers));
      if (queryParams.type !== undefined) params.set('type', String(queryParams.type));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_EdgeInfo>(url + (queryString ? `?${queryString}` : ''), {
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
  async findByQueryUsingPOST_2WithData(data: schemas.EdgeSearchQuery, options: RequestInit = {}): Promise<Array<schemas.Edge>> {
    const url = `${this.baseUrl}/api/edges`;
    const response = await this.makeRequest<Array<schemas.Edge>>(url, {
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
  async isEdgesSupportEnabled(options: RequestInit = {}): Promise<boolean> {
    const url = `${this.baseUrl}/api/edges/enabled`;
    const response = await this.makeRequest<boolean>(url, {
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
  async getEdgesByIds(queryParams?: { edgeIds?: string }, options: RequestInit = {}): Promise<Array<schemas.Edge>> {
    const url = `${this.baseUrl}/api/edges{?edgeIds}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.edgeIds !== undefined) params.set('edgeIds', String(queryParams.edgeIds));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.Edge>>(url + (queryString ? `?${queryString}` : ''), {
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
  async getEdges(queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_Edge> {
    const url = `${this.baseUrl}/api/edges{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_Edge>(url + (queryString ? `?${queryString}` : ''), {
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
  async saveEdgeWithData(data: schemas.Edge, queryParams?: { entityGroupId?: string; entityGroupIds?: string }, options: RequestInit = {}): Promise<schemas.Edge> {
    const url = `${this.baseUrl}/api/edge{?entityGroupId,entityGroupIds}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.entityGroupId !== undefined) params.set('entityGroupId', String(queryParams.entityGroupId));
      if (queryParams.entityGroupIds !== undefined) params.set('entityGroupIds', String(queryParams.entityGroupIds));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.Edge>(url + (queryString ? `?${queryString}` : ''), {
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
  async getEdgesByEntityGroupId(entityGroupId: string, queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_Edge> {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/edges{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_Edge>(url + (queryString ? `?${queryString}` : ''), {
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
  async activateInstance(queryParams?: { licenseSecret?: string; releaseDate?: string }, options: RequestInit = {}): Promise<schemas.JsonNode> {
    const url = `${this.baseUrl}/api/license/activateInstance{?licenseSecret,releaseDate}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.licenseSecret !== undefined) params.set('licenseSecret', String(queryParams.licenseSecret));
      if (queryParams.releaseDate !== undefined) params.set('releaseDate', String(queryParams.releaseDate));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.JsonNode>(url + (queryString ? `?${queryString}` : ''), {
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
  async checkInstanceWithData(data: schemas.JsonNode, options: RequestInit = {}): Promise<schemas.JsonNode> {
    const url = `${this.baseUrl}/api/license/checkInstance`;
    const response = await this.makeRequest<schemas.JsonNode>(url, {
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
  async getTenantEdge(queryParams?: { edgeName?: string }, options: RequestInit = {}): Promise<schemas.Edge> {
    const url = `${this.baseUrl}/api/tenant/edges{?edgeName}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.edgeName !== undefined) params.set('edgeName', String(queryParams.edgeName));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.Edge>(url + (queryString ? `?${queryString}` : ''), {
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
  async getTenantEdges(queryParams?: { pageSize?: number; page?: number; type?: string; textSearch?: string; sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_Edge> {
    const url = `${this.baseUrl}/api/tenant/edges{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.type !== undefined) params.set('type', String(queryParams.type));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_Edge>(url + (queryString ? `?${queryString}` : ''), {
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
  async getUserEdges(queryParams?: { pageSize?: number; page?: number; type?: string; textSearch?: string; sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_Edge> {
    const url = `${this.baseUrl}/api/user/edges{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.type !== undefined) params.set('type', String(queryParams.type));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_Edge>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}