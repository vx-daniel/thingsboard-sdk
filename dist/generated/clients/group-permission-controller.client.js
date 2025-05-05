"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupPermissionControllerClient = void 0;
const base_client_1 = require("../../base-client");
class GroupPermissionControllerClient extends base_client_1.BaseVXOlympusClient {
    async getEntityGroupPermissions(entityGroupId, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/groupPermissions`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.GroupPermission>}
     */
    async saveGroupPermissionWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/groupPermission`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} groupPermissionId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.isUserGroup - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.GroupPermissionInfo>}
     */
    async getGroupPermissionInfoById(groupPermissionId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/groupPermission/info/${encodeURIComponent(groupPermissionId)}{?isUserGroup}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.isUserGroup !== undefined)
                params.set('isUserGroup', String(queryParams.isUserGroup));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} groupPermissionId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.GroupPermission>}
     */
    async getGroupPermissionById(groupPermissionId, options = {}) {
        const url = `${this.baseUrl}/api/groupPermission/${encodeURIComponent(groupPermissionId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} groupPermissionId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async deleteGroupPermission(groupPermissionId, options = {}) {
        const url = `${this.baseUrl}/api/groupPermission/${encodeURIComponent(groupPermissionId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.GroupPermissionInfo>>}
     */
    async loadUserGroupPermissionInfosWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/userGroup/groupPermissions/info`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} userGroupId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.GroupPermissionInfo>>}
     */
    async getUserGroupPermissions(userGroupId, options = {}) {
        const url = `${this.baseUrl}/api/userGroup/${encodeURIComponent(userGroupId)}/groupPermissions`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.GroupPermissionControllerClient = GroupPermissionControllerClient;
