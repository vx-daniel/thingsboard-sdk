"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupPermissionControllerClient = void 0;
const base_client_1 = require("../../base-client");
class GroupPermissionControllerClient extends base_client_1.BaseVXOlympusClient {
    async getEntityGroupPermissionsUsingGET(entityGroupId, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/groupPermissions`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveGroupPermissionUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/groupPermission`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getGroupPermissionInfoByIdUsingGET(groupPermissionId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/groupPermission/info/${encodeURIComponent(groupPermissionId)}{?isUserGroup}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getGroupPermissionByIdUsingGET(groupPermissionId, options = {}) {
        const url = `${this.baseUrl}/api/groupPermission/${encodeURIComponent(groupPermissionId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteGroupPermissionUsingDELETE(groupPermissionId, options = {}) {
        const url = `${this.baseUrl}/api/groupPermission/${encodeURIComponent(groupPermissionId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async loadUserGroupPermissionInfosUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/userGroup/groupPermissions/info`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getUserGroupPermissionsUsingGET(userGroupId, options = {}) {
        const url = `${this.baseUrl}/api/userGroup/${encodeURIComponent(userGroupId)}/groupPermissions`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.GroupPermissionControllerClient = GroupPermissionControllerClient;
