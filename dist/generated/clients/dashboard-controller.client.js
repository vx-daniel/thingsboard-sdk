"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardControllerClient = void 0;
const base_client_1 = require("../../base-client");
class DashboardControllerClient extends base_client_1.BaseVXOlympusClient {
    async getCustomerHomeDashboardInfoUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/customer/dashboard/home/info`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async setCustomerHomeDashboardInfoUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/customer/dashboard/home/info`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getCustomerDashboardsUsingGET(customerId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/dashboards{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getHomeDashboardUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/dashboard/home`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getHomeDashboardInfoUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/dashboard/home/info`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getDashboardInfoByIdUsingGET(dashboardId, options = {}) {
        const url = `${this.baseUrl}/api/dashboard/info/${encodeURIComponent(dashboardId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getMaxDatapointsLimitUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/dashboard/maxDatapointsLimit`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getServerTimeUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/dashboard/serverTime`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteDashboardUsingDELETE(dashboardId, options = {}) {
        const url = `${this.baseUrl}/api/dashboard/${encodeURIComponent(dashboardId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async getDashboardByIdUsingGET(dashboardId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/dashboard/${encodeURIComponent(dashboardId)}{?inlineImages}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getAllDashboardsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/dashboards/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getDashboardsByIdsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/dashboards{?dashboardIds}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveDashboardUsingPOST(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/dashboard{?entityGroupId,entityGroupIds}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async exportGroupDashboardsUsingGET(entityGroupId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/dashboards/export{?limit}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async importGroupDashboardsUsingPOST(entityGroupId, data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/dashboards/import{?overwrite}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getDashboardsByEntityGroupIdUsingGET(entityGroupId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/dashboards{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getTenantHomeDashboardInfoUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/tenant/dashboard/home/info`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async setTenantHomeDashboardInfoUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/tenant/dashboard/home/info`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getTenantDashboardsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenant/dashboards{?mobile,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getTenantDashboardsUsingGET_1(tenantId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenant/${encodeURIComponent(tenantId)}/dashboards{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getUserDashboardsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/user/dashboards{?mobile,operation,page,pageSize,sortOrder,sortProperty,textSearch,userId}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.DashboardControllerClient = DashboardControllerClient;
