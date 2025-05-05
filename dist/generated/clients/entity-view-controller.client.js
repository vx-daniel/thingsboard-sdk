"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityViewControllerClient = void 0;
const base_client_1 = require("../../base-client");
class EntityViewControllerClient extends base_client_1.BaseVXOlympusClient {
    async getCustomerEntityViewInfosUsingGET(customerId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/entityViewInfos{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getCustomerEntityViewsUsingGET(customerId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/entityViews{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEntityViewsByEntityGroupIdUsingGET(entityGroupId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/entityViews{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEntityViewInfoByIdUsingGET(entityViewId, options = {}) {
        const url = `${this.baseUrl}/api/entityView/info/${encodeURIComponent(entityViewId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEntityViewTypesUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/entityView/types`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEntityViewByIdUsingGET(entityViewId, options = {}) {
        const url = `${this.baseUrl}/api/entityView/${encodeURIComponent(entityViewId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteEntityViewUsingDELETE(entityViewId, options = {}) {
        const url = `${this.baseUrl}/api/entityView/${encodeURIComponent(entityViewId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async getAllEntityViewInfosUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityViewInfos/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async findByQueryUsingPOST_4(data, options = {}) {
        const url = `${this.baseUrl}/api/entityViews`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getEntityViewsByIdsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityViews{?entityViewIds}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveEntityViewUsingPOST(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityView{?entityGroupId,entityGroupIds}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getTenantEntityViewUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenant/entityViews{?entityViewName}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getTenantEntityViewsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenant/entityViews{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getUserEntityViewsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/user/entityViews{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.EntityViewControllerClient = EntityViewControllerClient;
