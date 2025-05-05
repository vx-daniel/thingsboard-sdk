"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetTypeControllerClient = void 0;
const base_client_1 = require("../../base-client");
class WidgetTypeControllerClient extends base_client_1.BaseVXOlympusClient {
    async deleteWidgetType(widgetTypeId, options = {}) {
        const url = `${this.baseUrl}/api/widgetType/${encodeURIComponent(widgetTypeId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} widgetTypeId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.inlineImages - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.WidgetTypeDetails>}
     */
    async getWidgetTypeById(widgetTypeId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/widgetType/${encodeURIComponent(widgetTypeId)}{?inlineImages}`;
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
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.widgetsBundleId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<string>>}
     */
    async getBundleWidgetTypeFqns(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/widgetTypeFqns{?widgetsBundleId}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.widgetsBundleId !== undefined)
                params.set('widgetsBundleId', String(queryParams.widgetsBundleId));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} widgetTypeId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.WidgetTypeInfo>}
     */
    async getWidgetTypeInfoById(widgetTypeId, options = {}) {
        const url = `${this.baseUrl}/api/widgetTypeInfo/${encodeURIComponent(widgetTypeId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.isSystem - Query parameter
     * @param {string} queryParams.bundleAlias - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.WidgetTypeDetails>>}
     */
    async getBundleWidgetTypesDetailsByBundleAlias(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/widgetTypesDetails{?bundleAlias,isSystem}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.isSystem !== undefined)
                params.set('isSystem', String(queryParams.isSystem));
            if (queryParams.bundleAlias !== undefined)
                params.set('bundleAlias', String(queryParams.bundleAlias));
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
     * @param {string} queryParams.widgetsBundleId - Query parameter
     * @param {boolean} queryParams.inlineImages - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.WidgetTypeDetails>>}
     */
    async getBundleWidgetTypesDetails(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/widgetTypesDetails{?inlineImages,widgetsBundleId}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.widgetsBundleId !== undefined)
                params.set('widgetsBundleId', String(queryParams.widgetsBundleId));
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
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.isSystem - Query parameter
     * @param {string} queryParams.bundleAlias - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.WidgetTypeInfo>>}
     */
    async getBundleWidgetTypesInfosByBundleAlias(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/widgetTypesInfos{?bundleAlias,isSystem}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.isSystem !== undefined)
                params.set('isSystem', String(queryParams.isSystem));
            if (queryParams.bundleAlias !== undefined)
                params.set('bundleAlias', String(queryParams.bundleAlias));
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
     * @param {string} queryParams.widgetsBundleId - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {boolean} queryParams.fullSearch - Query parameter
     * @param {string} queryParams.deprecatedFilter - Query parameter
     * @param {string} queryParams.widgetTypeList - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_WidgetTypeInfo>}
     */
    async getBundleWidgetTypesInfos(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/widgetTypesInfos{?deprecatedFilter,fullSearch,page,pageSize,sortOrder,sortProperty,textSearch,widgetTypeList,widgetsBundleId}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.widgetsBundleId !== undefined)
                params.set('widgetsBundleId', String(queryParams.widgetsBundleId));
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
            if (queryParams.fullSearch !== undefined)
                params.set('fullSearch', String(queryParams.fullSearch));
            if (queryParams.deprecatedFilter !== undefined)
                params.set('deprecatedFilter', String(queryParams.deprecatedFilter));
            if (queryParams.widgetTypeList !== undefined)
                params.set('widgetTypeList', String(queryParams.widgetTypeList));
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
     * @param {boolean} queryParams.isSystem - Query parameter
     * @param {string} queryParams.bundleAlias - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.WidgetType>>}
     */
    async getBundleWidgetTypesByBundleAlias(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/widgetTypes{?bundleAlias,isSystem}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.isSystem !== undefined)
                params.set('isSystem', String(queryParams.isSystem));
            if (queryParams.bundleAlias !== undefined)
                params.set('bundleAlias', String(queryParams.bundleAlias));
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
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {boolean} queryParams.tenantOnly - Query parameter
     * @param {boolean} queryParams.fullSearch - Query parameter
     * @param {string} queryParams.deprecatedFilter - Query parameter
     * @param {string} queryParams.widgetTypeList - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_WidgetTypeInfo>}
     */
    async getWidgetTypes(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/widgetTypes{?deprecatedFilter,fullSearch,page,pageSize,sortOrder,sortProperty,tenantOnly,textSearch,widgetTypeList}`;
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
            if (queryParams.deprecatedFilter !== undefined)
                params.set('deprecatedFilter', String(queryParams.deprecatedFilter));
            if (queryParams.widgetTypeList !== undefined)
                params.set('widgetTypeList', String(queryParams.widgetTypeList));
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
     * @param {string} queryParams.widgetsBundleId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.WidgetType>>}
     */
    async getBundleWidgetTypes(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/widgetTypes{?widgetsBundleId}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.widgetsBundleId !== undefined)
                params.set('widgetsBundleId', String(queryParams.widgetsBundleId));
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
     * @param {boolean} queryParams.isSystem - Query parameter
     * @param {string} queryParams.bundleAlias - Query parameter
     * @param {string} queryParams.alias - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.WidgetType>}
     */
    async getWidgetTypeByBundleAliasAndTypeAlias(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/widgetType{?alias,bundleAlias,isSystem}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.isSystem !== undefined)
                params.set('isSystem', String(queryParams.isSystem));
            if (queryParams.bundleAlias !== undefined)
                params.set('bundleAlias', String(queryParams.bundleAlias));
            if (queryParams.alias !== undefined)
                params.set('alias', String(queryParams.alias));
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
     * @param {string} queryParams.fqn - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.WidgetType>}
     */
    async getWidgetType(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/widgetType{?fqn}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.fqn !== undefined)
                params.set('fqn', String(queryParams.fqn));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.updateExistingByFqn - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.WidgetTypeDetails>}
     */
    async saveWidgetTypeWithData(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/widgetType{?updateExistingByFqn}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.updateExistingByFqn !== undefined)
                params.set('updateExistingByFqn', String(queryParams.updateExistingByFqn));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
}
exports.WidgetTypeControllerClient = WidgetTypeControllerClient;
