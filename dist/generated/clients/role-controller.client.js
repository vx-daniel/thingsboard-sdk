"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleControllerClient = void 0;
const base_client_1 = require("../../base-client");
class RoleControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveRoleUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/role`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getRoleByIdUsingGET(roleId, options = {}) {
        const url = `${this.baseUrl}/api/role/${encodeURIComponent(roleId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteRoleUsingDELETE(roleId, options = {}) {
        const url = `${this.baseUrl}/api/role/${encodeURIComponent(roleId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async getRolesUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/roles{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getRolesByIdsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/roles{?roleIds}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.RoleControllerClient = RoleControllerClient;
