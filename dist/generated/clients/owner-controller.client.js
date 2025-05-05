"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerControllerClient = void 0;
const base_client_1 = require("../../base-client");
class OwnerControllerClient extends base_client_1.BaseVXOlympusClient {
    async changeOwnerToCustomerUsingPOST(ownerId, entityType, entityId, data, options) {
        const config = {
            ...options,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        config.body = JSON.stringify(data);
        const url = new URL(`/api/owner/CUSTOMER/${encodeURIComponent(ownerId)}/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    async changeOwnerToTenantUsingPOST(ownerId, entityType, entityId, data, options) {
        const config = {
            ...options,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        config.body = JSON.stringify(data);
        const url = new URL(`/api/owner/TENANT/${encodeURIComponent(ownerId)}/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
}
exports.OwnerControllerClient = OwnerControllerClient;
