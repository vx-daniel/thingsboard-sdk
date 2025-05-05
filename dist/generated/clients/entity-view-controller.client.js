"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityViewControllerClient = void 0;
const base_client_1 = require("../../base-client");
class EntityViewControllerClient extends base_client_1.BaseVXOlympusClient {
    async getCustomerEntityViewInfos(customerId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/entityViewInfos{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.includeCustomers !== undefined)
                params.set('includeCustomers', String(queryParams.includeCustomers));
            if (queryParams.type !== undefined)
                params.set('type', String(queryParams.type));
            if (queryParams.textSearch !== undefined)
                params.set('textSearch', String(queryParams.textSearch));
            if (queryParams.sortProperty !== undefined)
                params.set('sortProperty', String(queryParams.sortProperty));
            if (queryParams.sortOrder !== undefined)
                params.set('sortOrder', String(queryParams.sortOrder));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} customerId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntityView>}
     */
    async getCustomerEntityViews(customerId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/entityViews{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.type !== undefined)
                params.set('type', String(queryParams.type));
            if (queryParams.textSearch !== undefined)
                params.set('textSearch', String(queryParams.textSearch));
            if (queryParams.sortProperty !== undefined)
                params.set('sortProperty', String(queryParams.sortProperty));
            if (queryParams.sortOrder !== undefined)
                params.set('sortOrder', String(queryParams.sortOrder));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} entityGroupId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntityView>}
     */
    async getEntityViewsByEntityGroupId(entityGroupId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/entityViews{?page,pageSize,sortOrder,sortProperty,textSearch}`;
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
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} entityViewId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EntityViewInfo>}
     */
    async getEntityViewInfoById(entityViewId, options = {}) {
        const url = `${this.baseUrl}/api/entityView/info/${encodeURIComponent(entityViewId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntitySubtype>>}
     */
    async getEntityViewTypes(options = {}) {
        const url = `${this.baseUrl}/api/entityView/types`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} entityViewId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EntityView>}
     */
    async getEntityViewById(entityViewId, options = {}) {
        const url = `${this.baseUrl}/api/entityView/${encodeURIComponent(entityViewId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} entityViewId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async deleteEntityView(entityViewId, options = {}) {
        const url = `${this.baseUrl}/api/entityView/${encodeURIComponent(entityViewId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {boolean} queryParams.includeCustomers - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntityViewInfo>}
     */
    async getAllEntityViewInfos(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityViewInfos/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.includeCustomers !== undefined)
                params.set('includeCustomers', String(queryParams.includeCustomers));
            if (queryParams.type !== undefined)
                params.set('type', String(queryParams.type));
            if (queryParams.textSearch !== undefined)
                params.set('textSearch', String(queryParams.textSearch));
            if (queryParams.sortProperty !== undefined)
                params.set('sortProperty', String(queryParams.sortProperty));
            if (queryParams.sortOrder !== undefined)
                params.set('sortOrder', String(queryParams.sortOrder));
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
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntityView>>}
     */
    async findByQueryUsingPOST_4WithData(data, options = {}) {
        const url = `${this.baseUrl}/api/entityViews`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.entityViewIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntityView>>}
     */
    async getEntityViewsByIds(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityViews{?entityViewIds}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.entityViewIds !== undefined)
                params.set('entityViewIds', String(queryParams.entityViewIds));
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
     * @param {string} queryParams.entityGroupId - Query parameter
     * @param {string} queryParams.entityGroupIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EntityView>}
     */
    async saveEntityViewWithData(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityView{?entityGroupId,entityGroupIds}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.entityGroupId !== undefined)
                params.set('entityGroupId', String(queryParams.entityGroupId));
            if (queryParams.entityGroupIds !== undefined)
                params.set('entityGroupIds', String(queryParams.entityGroupIds));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.entityViewName - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EntityView>}
     */
    async getTenantEntityView(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenant/entityViews{?entityViewName}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.entityViewName !== undefined)
                params.set('entityViewName', String(queryParams.entityViewName));
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
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntityView>}
     */
    async getTenantEntityViews(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenant/entityViews{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.type !== undefined)
                params.set('type', String(queryParams.type));
            if (queryParams.textSearch !== undefined)
                params.set('textSearch', String(queryParams.textSearch));
            if (queryParams.sortProperty !== undefined)
                params.set('sortProperty', String(queryParams.sortProperty));
            if (queryParams.sortOrder !== undefined)
                params.set('sortOrder', String(queryParams.sortOrder));
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
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntityView>}
     */
    async getUserEntityViews(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/user/entityViews{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.type !== undefined)
                params.set('type', String(queryParams.type));
            if (queryParams.textSearch !== undefined)
                params.set('textSearch', String(queryParams.textSearch));
            if (queryParams.sortProperty !== undefined)
                params.set('sortProperty', String(queryParams.sortProperty));
            if (queryParams.sortOrder !== undefined)
                params.set('sortOrder', String(queryParams.sortOrder));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.EntityViewControllerClient = EntityViewControllerClient;
