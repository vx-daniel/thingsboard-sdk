"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPermissionsControllerClient = void 0;
const base_client_1 = require("../../base-client");
class UserPermissionsControllerClient extends base_client_1.BaseVXOlympusClient {
    async getAllowedPermissionsUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/permissions/allowedPermissions`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.UserPermissionsControllerClient = UserPermissionsControllerClient;
