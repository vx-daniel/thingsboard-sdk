"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerControllerClient = void 0;
const base_client_1 = require("../../base-client");
class OwnerControllerClient extends base_client_1.BaseVXOlympusClient {
    async changeOwnerToCustomerUsingPOST(ownerId, entityType, entityId, data, options = {}) {
        const url = `${this.baseUrl}/api/owner/CUSTOMER/${encodeURIComponent(ownerId)}/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async changeOwnerToTenantUsingPOST(ownerId, entityType, entityId, data, options = {}) {
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
