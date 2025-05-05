"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetsBundleControllerClient = void 0;
const base_client_1 = require("../../base-client");
class WidgetsBundleControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveWidgetsBundleUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/widgetsBundle`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async deleteWidgetsBundleUsingDELETE(widgetsBundleId, options = {}) {
        const url = `${this.baseUrl}/api/widgetsBundle/${encodeURIComponent(widgetsBundleId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async updateWidgetsBundleWidgetFqnsUsingPOST(widgetsBundleId, data, options = {}) {
        const url = `${this.baseUrl}/api/widgetsBundle/${encodeURIComponent(widgetsBundleId)}/widgetTypeFqns`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async updateWidgetsBundleWidgetTypesUsingPOST(widgetsBundleId, data, options = {}) {
        const url = `${this.baseUrl}/api/widgetsBundle/${encodeURIComponent(widgetsBundleId)}/widgetTypes`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getWidgetsBundleByIdUsingGET(widgetsBundleId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/widgetsBundle/${encodeURIComponent(widgetsBundleId)}{?inlineImages}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getWidgetsBundlesUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/widgetsBundles`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getWidgetsBundlesUsingGET_1(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/widgetsBundles{?fullSearch,page,pageSize,sortOrder,sortProperty,tenantOnly,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getWidgetsBundlesByIdsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/widgetsBundles{?widgetsBundleIds}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.WidgetsBundleControllerClient = WidgetsBundleControllerClient;
