import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class IntegrationControllerClient extends BaseVXOlympusClient {  /**
   * @param {string} edgeId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.integrationIds - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<string>}
   */
  async findEdgeMissingAttributes(edgeId: string, queryParams?: { integrationIds?: string }, options: RequestInit = {}): Promise<string> {
    const url = `${this.baseUrl}/api/edge/integration/${encodeURIComponent(edgeId)}/missingAttributes{?integrationIds}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.integrationIds !== undefined) params.set('integrationIds', String(queryParams.integrationIds));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<string>(url + (queryString ? `?${queryString}` : ''), {
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
  async findAllRelatedEdgesMissingAttributes(integrationId: string, options: RequestInit = {}): Promise<string> {
    const url = `${this.baseUrl}/api/edge/integration/${encodeURIComponent(integrationId)}/allMissingAttributes`;
    const response = await this.makeRequest<string>(url, {
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
  async assignIntegrationToEdge(edgeId: string, integrationId: string, options: RequestInit = {}): Promise<schemas.Integration> {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/integration/${encodeURIComponent(integrationId)}`;
    const response = await this.makeRequest<schemas.Integration>(url, {
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
  async unassignIntegrationFromEdge(edgeId: string, integrationId: string, options: RequestInit = {}): Promise<schemas.Integration> {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/integration/${encodeURIComponent(integrationId)}`;
    const response = await this.makeRequest<schemas.Integration>(url, {
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
  async getEdgeIntegrationInfos(edgeId: string, queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'allowCreateDevicesOrAssets' | 'createdTime' | 'debugMode' | 'enabled' | 'name' | 'remote' | 'routingKey' | 'secret' | 'type'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_IntegrationInfo> {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/integrationInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_IntegrationInfo>(url + (queryString ? `?${queryString}` : ''), {
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
  async getEdgeIntegrations(edgeId: string, queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'allowCreateDevicesOrAssets' | 'createdTime' | 'debugMode' | 'enabled' | 'name' | 'remote' | 'routingKey' | 'secret' | 'type'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_Integration> {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/integrations{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_Integration>(url + (queryString ? `?${queryString}` : ''), {
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
  async saveIntegrationWithData(data: schemas.Integration, options: RequestInit = {}): Promise<schemas.Integration> {
    const url = `${this.baseUrl}/api/integration`;
    const response = await this.makeRequest<schemas.Integration>(url, {
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
  async checkIntegrationConnectionWithData(data: schemas.Integration, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/integration/check`;
    const response = await this.makeRequest<void>(url, {
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
  async getIntegrationByRoutingKey(routingKey: string, options: RequestInit = {}): Promise<schemas.Integration> {
    const url = `${this.baseUrl}/api/integration/routingKey/${encodeURIComponent(routingKey)}`;
    const response = await this.makeRequest<schemas.Integration>(url, {
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
  async getIntegrationById(integrationId: string, options: RequestInit = {}): Promise<schemas.Integration> {
    const url = `${this.baseUrl}/api/integration/${encodeURIComponent(integrationId)}`;
    const response = await this.makeRequest<schemas.Integration>(url, {
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
  async deleteIntegration(integrationId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/integration/${encodeURIComponent(integrationId)}`;
    const response = await this.makeRequest<void>(url, {
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
  async getIntegrationInfos(queryParams?: { isEdgeTemplate?: boolean; pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'allowCreateDevicesOrAssets' | 'createdTime' | 'debugMode' | 'enabled' | 'name' | 'remote' | 'routingKey' | 'secret' | 'type'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_IntegrationInfo> {
    const url = `${this.baseUrl}/api/integrationInfos{?isEdgeTemplate,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.isEdgeTemplate !== undefined) params.set('isEdgeTemplate', String(queryParams.isEdgeTemplate));
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_IntegrationInfo>(url + (queryString ? `?${queryString}` : ''), {
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
  async getIntegrationsByIds(queryParams?: { integrationIds?: string }, options: RequestInit = {}): Promise<Array<schemas.Integration>> {
    const url = `${this.baseUrl}/api/integrations{?integrationIds}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.integrationIds !== undefined) params.set('integrationIds', String(queryParams.integrationIds));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.Integration>>(url + (queryString ? `?${queryString}` : ''), {
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
  async getIntegrations(queryParams?: { isEdgeTemplate?: boolean; pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'allowCreateDevicesOrAssets' | 'createdTime' | 'debugMode' | 'enabled' | 'name' | 'remote' | 'routingKey' | 'secret' | 'type'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_Integration> {
    const url = `${this.baseUrl}/api/integrations{?isEdgeTemplate,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.isEdgeTemplate !== undefined) params.set('isEdgeTemplate', String(queryParams.isEdgeTemplate));
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_Integration>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}