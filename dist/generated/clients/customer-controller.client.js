"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerControllerClient = void 0;
const base_client_1 = require("../../base-client");
class CustomerControllerClient extends base_client_1.BaseVXOlympusClient {
    async getCustomerInfoByIdUsingGET(customerId, options = {}) {
        const url = `${this.baseUrl}/api/customer/info/${encodeURIComponent(customerId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getCustomerByIdUsingGET(customerId, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteCustomerUsingDELETE(customerId, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async getCustomerCustomerInfosUsingGET(customerId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/customerInfos{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getShortCustomerInfoByIdUsingGET(customerId, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/shortInfo`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getCustomerTitleByIdUsingGET(customerId, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/title`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getAllCustomerInfosUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customerInfos/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getCustomersByIdsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customers{?customerIds}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getCustomersUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customers{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveCustomerUsingPOST(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer{?entityGroupId,entityGroupIds}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getCustomersByEntityGroupIdUsingGET(entityGroupId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/customers{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getTenantCustomerUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenant/customers{?customerTitle}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getUserCustomersUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/user/customers{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.CustomerControllerClient = CustomerControllerClient;
