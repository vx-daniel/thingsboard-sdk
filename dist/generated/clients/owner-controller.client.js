"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerControllerClient = void 0;
const base_client_1 = require("../../base-client");
class OwnerControllerClient extends base_client_1.BaseVXOlympusClient {
    async changeOwnerToCustomerWithData(ownerId, entityType, entityId, data, options = {}) {
        const url = `${this.baseUrl}/api/owner/CUSTOMER/${encodeURIComponent(ownerId)}/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} ownerId - Path parameter
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async changeOwnerToTenantWithData(ownerId, entityType, entityId, data, options = {}) {
        const url = `${this.baseUrl}/api/owner/TENANT/${encodeURIComponent(ownerId)}/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
}
exports.OwnerControllerClient = OwnerControllerClient;
