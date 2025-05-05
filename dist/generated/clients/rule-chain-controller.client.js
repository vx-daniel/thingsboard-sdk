"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleChainControllerClient = void 0;
const base_client_1 = require("../../base-client");
class RuleChainControllerClient extends base_client_1.BaseVXOlympusClient {
    async assignRuleChainToEdgeUsingPOST(edgeId, ruleChainId, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/ruleChain/${encodeURIComponent(ruleChainId)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async unassignRuleChainFromEdgeUsingDELETE(edgeId, ruleChainId, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/ruleChain/${encodeURIComponent(ruleChainId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async getEdgeRuleChainsUsingGET(edgeId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/ruleChains{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveRuleChainUsingPOST_1(data, options = {}) {
        const url = `${this.baseUrl}/api/ruleChain`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getAutoAssignToEdgeRuleChainsUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/ruleChain/autoAssignToEdgeRuleChains`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveRuleChainUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/ruleChain/device/default`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async saveRuleChainMetaDataUsingPOST(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/ruleChain/metadata{?updateRelated}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async isTbelEnabledUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/ruleChain/tbelEnabled`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async testScriptUsingPOST(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/ruleChain/testScript{?scriptLang}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getRuleChainByIdUsingGET(ruleChainId, options = {}) {
        const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteRuleChainUsingDELETE(ruleChainId, options = {}) {
        const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async setAutoAssignToEdgeRuleChainUsingPOST(ruleChainId, options = {}) {
        const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}/autoAssignToEdge`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async unsetAutoAssignToEdgeRuleChainUsingDELETE(ruleChainId, options = {}) {
        const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}/autoAssignToEdge`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async setEdgeTemplateRootRuleChainUsingPOST(ruleChainId, options = {}) {
        const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}/edgeTemplateRoot`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async getRuleChainMetaDataUsingGET(ruleChainId, options = {}) {
        const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}/metadata`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getRuleChainOutputLabelsUsingGET(ruleChainId, options = {}) {
        const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}/output/labels`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getRuleChainOutputLabelsUsageUsingGET(ruleChainId, options = {}) {
        const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}/output/labels/usage`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async setRootRuleChainUsingPOST(ruleChainId, options = {}) {
        const url = `${this.baseUrl}/api/ruleChain/${encodeURIComponent(ruleChainId)}/root`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async exportRuleChainsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/ruleChains/export{?limit}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async importRuleChainsUsingPOST(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/ruleChains/import{?overwrite}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getRuleChainsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/ruleChains{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getLatestRuleNodeDebugInputUsingGET(ruleNodeId, options = {}) {
        const url = `${this.baseUrl}/api/ruleNode/${encodeURIComponent(ruleNodeId)}/debugIn`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.RuleChainControllerClient = RuleChainControllerClient;
