import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class RuleChainControllerClient extends BaseVXOlympusClient {  /**
   * @param {string} edgeId - Path parameter
   * @param {string} ruleChainId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.RuleChain>}
   */
  async assignRuleChainToEdge(edgeId: string, ruleChainId: string, options: RequestInit = {}): Promise<schemas.RuleChain> {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/ruleChain/${encodeURIComponent(ruleChainId)}`;
    const response = await this.makeRequest<schemas.RuleChain>(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} edgeId - Path parameter
   * @param {string} ruleChainId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.RuleChain>}
   */
  async unassignRuleChainFromEdge(edgeId: string, ruleChainId: string, options: RequestInit = {}): Promise<schemas.RuleChain> {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/ruleChain/${encodeURIComponent(ruleChainId)}`;
    const response = await this.makeRequest<schemas.RuleChain>(url, {
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
   * @returns {Promise<schemas.PageData_Of_RuleChain>}
   */
  async getEdgeRuleChains(edgeId: string, queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'createdTime' | 'name' | 'root'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_RuleChain> {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/ruleChains{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_RuleChain>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.RuleChain>}
   */
  async saveRuleChainUsingPOST_1WithData(data: schemas.RuleChain, options: RequestInit = {}): Promise<schemas.RuleChain> {
    const url = `${this.baseUrl}/api/ruleChain`;
    const response = await this.makeRequest<schemas.RuleChain>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.RuleChain>>}
   */
  async getAutoAssignToEdgeRuleChains(options: RequestInit = {}): Promise<Array<schemas.RuleChain>> {
    const url = `${this.baseUrl}/api/ruleChain/autoAssignToEdgeRuleChains`;
    const response = await this.makeRequest<Array<schemas.RuleChain>>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.RuleChain>}
   */
  async saveRuleChainWithData(data: schemas.DefaultRuleChainCreateRequest, options: RequestInit = {}): Promise<schemas.RuleChain> {
    const url = `${this.baseUrl}/api/ruleChain/device/default`;
    const response = await this.makeRequest<schemas.RuleChain>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {object} queryParams - Query parameters
   * @param {boolean} queryParams.updateRelated - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.RuleChainMetaData>}
   */
  async saveRuleChainMetaDataWithData(data: schemas.RuleChainMetaData, queryParams?: { updateRelated?: boolean }, options: RequestInit = {}): Promise<schemas.RuleChainMetaData> {
    const url = `${this.baseUrl}/api/ruleChain/metadata{?updateRelated}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.updateRelated !== undefined) params.set('updateRelated', String(queryParams.updateRelated));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.RuleChainMetaData>(url + (queryString ? `?${queryString}` : ''), {
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
  async isTbelEnabled(options: RequestInit = {}): Promise<boolean> {
    const url = `${this.baseUrl}/api/ruleChain/tbelEnabled`;
    const response = await this.makeRequest<boolean>(url, {
      method: 'GET',
      
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
  async testScriptWithData(data: schemas.JsonNode, queryParams?: { scriptLang?: 'JS' | 'TBEL' }, options: RequestInit = {}): Promise<schemas.JsonNode> {
    const url = `${this.baseUrl}/api/ruleChain/testScript{?scriptLang}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.scriptLang !== undefined) params.set('scriptLang', String(queryParams.scriptLang));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.JsonNode>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} ruleChainId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.RuleChain>}
   */
  async getRuleChainById(ruleChainId: string, options: RequestInit = {}): Promise<schemas.RuleChain> {
    const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}`;
    const response = await this.makeRequest<schemas.RuleChain>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} ruleChainId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteRuleChain(ruleChainId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} ruleChainId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.RuleChain>}
   */
  async setAutoAssignToEdgeRuleChain(ruleChainId: string, options: RequestInit = {}): Promise<schemas.RuleChain> {
    const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}/autoAssignToEdge`;
    const response = await this.makeRequest<schemas.RuleChain>(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} ruleChainId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.RuleChain>}
   */
  async unsetAutoAssignToEdgeRuleChain(ruleChainId: string, options: RequestInit = {}): Promise<schemas.RuleChain> {
    const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}/autoAssignToEdge`;
    const response = await this.makeRequest<schemas.RuleChain>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} ruleChainId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.RuleChain>}
   */
  async setEdgeTemplateRootRuleChain(ruleChainId: string, options: RequestInit = {}): Promise<schemas.RuleChain> {
    const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}/edgeTemplateRoot`;
    const response = await this.makeRequest<schemas.RuleChain>(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} ruleChainId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.RuleChainMetaData>}
   */
  async getRuleChainMetaData(ruleChainId: string, options: RequestInit = {}): Promise<schemas.RuleChainMetaData> {
    const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}/metadata`;
    const response = await this.makeRequest<schemas.RuleChainMetaData>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} ruleChainId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<string>>}
   */
  async getRuleChainOutputLabels(ruleChainId: string, options: RequestInit = {}): Promise<Array<string>> {
    const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}/output/labels`;
    const response = await this.makeRequest<Array<string>>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} ruleChainId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.RuleChainOutputLabelsUsage>>}
   */
  async getRuleChainOutputLabelsUsage(ruleChainId: string, options: RequestInit = {}): Promise<Array<schemas.RuleChainOutputLabelsUsage>> {
    const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}/output/labels/usage`;
    const response = await this.makeRequest<Array<schemas.RuleChainOutputLabelsUsage>>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} ruleChainId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.RuleChain>}
   */
  async setRootRuleChain(ruleChainId: string, options: RequestInit = {}): Promise<schemas.RuleChain> {
    const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}/root`;
    const response = await this.makeRequest<schemas.RuleChain>(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.limit - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.RuleChainData>}
   */
  async exportRuleChains(queryParams?: { limit?: number }, options: RequestInit = {}): Promise<schemas.RuleChainData> {
    const url = `${this.baseUrl}/api/ruleChains/export{?limit}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.limit !== undefined) params.set('limit', String(queryParams.limit));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.RuleChainData>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {object} queryParams - Query parameters
   * @param {boolean} queryParams.overwrite - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.RuleChainImportResult>>}
   */
  async importRuleChainsWithData(data: schemas.RuleChainData, queryParams?: { overwrite?: boolean }, options: RequestInit = {}): Promise<Array<schemas.RuleChainImportResult>> {
    const url = `${this.baseUrl}/api/ruleChains/import{?overwrite}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.overwrite !== undefined) params.set('overwrite', String(queryParams.overwrite));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.RuleChainImportResult>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      body: JSON.stringify(data),
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
   * @returns {Promise<schemas.PageData_Of_RuleChain>}
   */
  async getRuleChains(queryParams?: { pageSize?: number; page?: number; type?: 'CORE' | 'EDGE'; textSearch?: string; sortProperty?: 'createdTime' | 'name' | 'root'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_RuleChain> {
    const url = `${this.baseUrl}/api/ruleChains{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
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
    const response = await this.makeRequest<schemas.PageData_Of_RuleChain>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} ruleNodeId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.JsonNode>}
   */
  async getLatestRuleNodeDebugInput(ruleNodeId: string, options: RequestInit = {}): Promise<schemas.JsonNode> {
    const url = `${this.baseUrl}/api/ruleNode/${encodeURIComponent(ruleNodeId)}/debugIn`;
    const response = await this.makeRequest<schemas.JsonNode>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}