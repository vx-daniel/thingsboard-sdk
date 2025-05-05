"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationTargetControllerClient = void 0;
const base_client_1 = require("../../base-client");
class NotificationTargetControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveNotificationTargetUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/notification/target`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getRecipientsForNotificationTargetConfigUsingPOST(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/notification/target/recipients{?page,pageSize}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getNotificationTargetByIdUsingGET(id, options = {}) {
        const url = `${this.baseUrl}/api/notification/target/${encodeURIComponent(id)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteNotificationTargetByIdUsingDELETE(id, options = {}) {
        const url = `${this.baseUrl}/api/notification/target/${encodeURIComponent(id)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async getNotificationTargetsByIdsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/notification/targets{?ids}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getNotificationTargetsBySupportedNotificationTypeUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/notification/targets{?notificationType,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getNotificationTargetsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/notification/targets{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.NotificationTargetControllerClient = NotificationTargetControllerClient;
