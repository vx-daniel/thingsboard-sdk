"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentDescriptorControllerClient = void 0;
const base_client_1 = require("../../base-client");
class ComponentDescriptorControllerClient extends base_client_1.BaseVXOlympusClient {
    async getComponentDescriptorByClazzUsingGET(componentDescriptorClazz, options = {}) {
        const url = `${this.baseUrl}/api/component/${encodeURIComponent(componentDescriptorClazz)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getComponentDescriptorsByTypeUsingGET(componentType, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/components/${encodeURIComponent(componentType)}{?ruleChainType}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getComponentDescriptorsByTypesUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/components{?componentTypes,ruleChainType}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.ComponentDescriptorControllerClient = ComponentDescriptorControllerClient;
