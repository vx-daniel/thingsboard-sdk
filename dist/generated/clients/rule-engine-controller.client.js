"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleEngineControllerClient = void 0;
const base_client_1 = require("../../base-client");
class RuleEngineControllerClient extends base_client_1.BaseVXOlympusClient {
    async handleRuleEngineRequestUsingPOST_3(data, options = {}) {
        const url = `${this.baseUrl}/api/rule-engine/`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async handleRuleEngineRequestUsingPOST_2(entityType, entityId, data, options = {}) {
        const url = `${this.baseUrl}/api/rule-engine/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async handleRuleEngineRequestUsingPOST_1(entityType, entityId, queueName, timeout, data, options = {}) {
        const url = `${this.baseUrl}/api/rule-engine/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/${encodeURIComponent(queueName)}/${encodeURIComponent(timeout)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async handleRuleEngineRequestUsingPOST(entityType, entityId, timeout, data, options = {}) {
        const url = `${this.baseUrl}/api/rule-engine/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/${encodeURIComponent(timeout)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
}
exports.RuleEngineControllerClient = RuleEngineControllerClient;
