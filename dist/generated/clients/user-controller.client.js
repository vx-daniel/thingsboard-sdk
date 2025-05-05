"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserControllerClient = void 0;
const base_client_1 = require("../../base-client");
class UserControllerClient extends base_client_1.BaseVXOlympusClient {
    async getAllCustomerUsersUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer/users{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getCustomerUserInfosUsingGET(customerId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/userInfos{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getCustomerUsersUsingGET(customerId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/users{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getUsersByEntityGroupIdUsingGET(entityGroupId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/users{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getTenantAdminsUsingGET(tenantId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenant/${encodeURIComponent(tenantId)}/users{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getUserDashboardsInfoUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/user/dashboards`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async reportUserDashboardActionUsingGET(dashboardId, action, options = {}) {
        const url = `${this.baseUrl}/api/user/dashboards/${encodeURIComponent(dashboardId)}/${encodeURIComponent(action)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getUserInfoByIdUsingGET(userId, options = {}) {
        const url = `${this.baseUrl}/api/user/info/${encodeURIComponent(userId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async sendActivationEmailUsingPOST(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/user/sendActivationMail{?email}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async getUserSettingsUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/user/settings`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async putUserSettingsUsingPUT(data, options = {}) {
        const url = `${this.baseUrl}/api/user/settings`;
        const response = await this.makeRequest(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async saveUserSettingsUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/user/settings`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async deleteUserSettingsUsingDELETE_1(paths, options = {}) {
        const url = `${this.baseUrl}/api/user/settings/${encodeURIComponent(paths)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async getUserSettingsUsingGET_1(type, options = {}) {
        const url = `${this.baseUrl}/api/user/settings/${encodeURIComponent(type)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async putUserSettingsUsingPUT_1(type, data, options = {}) {
        const url = `${this.baseUrl}/api/user/settings/${encodeURIComponent(type)}`;
        const response = await this.makeRequest(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async deleteUserSettingsUsingDELETE(paths, type, options = {}) {
        const url = `${this.baseUrl}/api/user/settings/${encodeURIComponent(type)}/${encodeURIComponent(paths)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async isUserTokenAccessEnabledUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/user/tokenAccessEnabled`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getUserUsersUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/user/users{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getUserByIdUsingGET(userId, options = {}) {
        const url = `${this.baseUrl}/api/user/${encodeURIComponent(userId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteUserUsingDELETE(userId, options = {}) {
        const url = `${this.baseUrl}/api/user/${encodeURIComponent(userId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async getActivationLinkUsingGET(userId, options = {}) {
        const url = `${this.baseUrl}/api/user/${encodeURIComponent(userId)}/activationLink`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getUserTokenUsingGET(userId, options = {}) {
        const url = `${this.baseUrl}/api/user/${encodeURIComponent(userId)}/token`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async setUserCredentialsEnabledUsingPOST(userId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/user/${encodeURIComponent(userId)}/userCredentialsEnabled{?userCredentialsEnabled}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async getAllUserInfosUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/userInfos/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getUsersForAssignUsingGET(alarmId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/users/assign/${encodeURIComponent(alarmId)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async findUsersByQueryUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/users/info{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getUsersByIdsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/users{?userIds}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveUserUsingPOST(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/user{?entityGroupId,entityGroupIds,sendActivationMail}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
}
exports.UserControllerClient = UserControllerClient;
