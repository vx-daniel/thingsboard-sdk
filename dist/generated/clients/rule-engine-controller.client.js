"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleEngineControllerClient = void 0;
const base_client_1 = require("../../base-client");
class RuleEngineControllerClient extends base_client_1.BaseVXOlympusClient {
    async handleRuleEngineRequestUsingPOST_3WithData(data, options = {}) {
        const url = `${this.baseUrl}/api/rule-engine/`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    async handleRuleEngineRequestUsingPOST_2WithData(entityType, entityId, data, options = {}) {
        const url = `${this.baseUrl}/api/rule-engine/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {string} queueName - Path parameter
     * @param {string} timeout - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    async handleRuleEngineRequestUsingPOST_1WithData(entityType, entityId, queueName, timeout, data, options = {}) {
        const url = `${this.baseUrl}/api/rule-engine/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/${encodeURIComponent(queueName)}/${encodeURIComponent(timeout)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {string} timeout - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    async handleRuleEngineRequestWithData(entityType, entityId, timeout, data, options = {}) {
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
