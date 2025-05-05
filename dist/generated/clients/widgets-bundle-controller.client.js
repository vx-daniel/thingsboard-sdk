"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetsBundleControllerClient = void 0;
const base_client_1 = require("../../base-client");
class WidgetsBundleControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveWidgetsBundleWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/widgetsBundle`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} widgetsBundleId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async deleteWidgetsBundle(widgetsBundleId, options = {}) {
        const url = `${this.baseUrl}/api/widgetsBundle/${encodeURIComponent(widgetsBundleId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} widgetsBundleId - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async updateWidgetsBundleWidgetFqnsWithData(widgetsBundleId, data, options = {}) {
        const url = `${this.baseUrl}/api/widgetsBundle/${encodeURIComponent(widgetsBundleId)}/widgetTypeFqns`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} widgetsBundleId - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async updateWidgetsBundleWidgetTypesWithData(widgetsBundleId, data, options = {}) {
        const url = `${this.baseUrl}/api/widgetsBundle/${encodeURIComponent(widgetsBundleId)}/widgetTypes`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} widgetsBundleId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.inlineImages - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.WidgetsBundle>}
     */
    async getWidgetsBundleById(widgetsBundleId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/widgetsBundle/${encodeURIComponent(widgetsBundleId)}{?inlineImages}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.inlineImages !== undefined)
                params.set('inlineImages', String(queryParams.inlineImages));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.WidgetsBundle>>}
     */
    async getWidgetsBundles(options = {}) {
        const url = `${this.baseUrl}/api/widgetsBundles`;
        const response = await this.makeRequest(url, {
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
     * @param {boolean} queryParams.tenantOnly - Query parameter
     * @param {boolean} queryParams.fullSearch - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_WidgetsBundle>}
     */
    async getWidgetsBundlesUsingGET_1(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/widgetsBundles{?fullSearch,page,pageSize,sortOrder,sortProperty,tenantOnly,textSearch}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.textSearch !== undefined)
                params.set('textSearch', String(queryParams.textSearch));
            if (queryParams.sortProperty !== undefined)
                params.set('sortProperty', String(queryParams.sortProperty));
            if (queryParams.sortOrder !== undefined)
                params.set('sortOrder', String(queryParams.sortOrder));
            if (queryParams.tenantOnly !== undefined)
                params.set('tenantOnly', String(queryParams.tenantOnly));
            if (queryParams.fullSearch !== undefined)
                params.set('fullSearch', String(queryParams.fullSearch));
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
     * @param {string} queryParams.widgetsBundleIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.WidgetsBundle>>}
     */
    async getWidgetsBundlesByIds(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/widgetsBundles{?widgetsBundleIds}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.widgetsBundleIds !== undefined)
                params.set('widgetsBundleIds', String(queryParams.widgetsBundleIds));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.WidgetsBundleControllerClient = WidgetsBundleControllerClient;
