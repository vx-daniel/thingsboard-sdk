"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentDescriptorControllerClient = void 0;
const base_client_1 = require("../../base-client");
class ComponentDescriptorControllerClient extends base_client_1.BaseVXOlympusClient {
    async getComponentDescriptorByClazz(componentDescriptorClazz, options = {}) {
        const url = `${this.baseUrl}/api/component/${encodeURIComponent(componentDescriptorClazz)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} componentType - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.ruleChainType - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.ComponentDescriptor>>}
     */
    async getComponentDescriptorsByType(componentType, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/components/${encodeURIComponent(componentType)}{?ruleChainType}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.ruleChainType !== undefined)
                params.set('ruleChainType', String(queryParams.ruleChainType));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.componentTypes - Query parameter
     * @param {string} queryParams.ruleChainType - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.ComponentDescriptor>>}
     */
    async getComponentDescriptorsByTypes(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/components{?componentTypes,ruleChainType}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.componentTypes !== undefined)
                params.set('componentTypes', String(queryParams.componentTypes));
            if (queryParams.ruleChainType !== undefined)
                params.set('ruleChainType', String(queryParams.ruleChainType));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.ComponentDescriptorControllerClient = ComponentDescriptorControllerClient;
