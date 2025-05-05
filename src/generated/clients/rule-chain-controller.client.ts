import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class RuleChainControllerClient extends BaseVXOlympusClient {
  async assignRuleChainToEdgeUsingPOST(edgeId: string, ruleChainId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/ruleChain/${encodeURIComponent(ruleChainId)}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async unassignRuleChainFromEdgeUsingDELETE(edgeId: string, ruleChainId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/ruleChain/${encodeURIComponent(ruleChainId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async getEdgeRuleChainsUsingGET(edgeId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/ruleChains{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveRuleChainUsingPOST_1(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/ruleChain`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getAutoAssignToEdgeRuleChainsUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/ruleChain/autoAssignToEdgeRuleChains`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveRuleChainUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/ruleChain/device/default`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async saveRuleChainMetaDataUsingPOST(data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/ruleChain/metadata{?updateRelated}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async isTbelEnabledUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/ruleChain/tbelEnabled`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async testScriptUsingPOST(data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/ruleChain/testScript{?scriptLang}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getRuleChainByIdUsingGET(ruleChainId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteRuleChainUsingDELETE(ruleChainId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async setAutoAssignToEdgeRuleChainUsingPOST(ruleChainId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}/autoAssignToEdge`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async unsetAutoAssignToEdgeRuleChainUsingDELETE(ruleChainId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}/autoAssignToEdge`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async setEdgeTemplateRootRuleChainUsingPOST(ruleChainId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}/edgeTemplateRoot`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async getRuleChainMetaDataUsingGET(ruleChainId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}/metadata`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getRuleChainOutputLabelsUsingGET(ruleChainId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}/output/labels`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getRuleChainOutputLabelsUsageUsingGET(ruleChainId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}/output/labels/usage`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async setRootRuleChainUsingPOST(ruleChainId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}/root`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async exportRuleChainsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/ruleChains/export{?limit}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async importRuleChainsUsingPOST(data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/ruleChains/import{?overwrite}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getRuleChainsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/ruleChains{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getLatestRuleNodeDebugInputUsingGET(ruleNodeId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/ruleNode/${encodeURIComponent(ruleNodeId)}/debugIn`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}