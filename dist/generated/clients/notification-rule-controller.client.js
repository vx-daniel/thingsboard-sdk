"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRuleControllerClient = void 0;
const base_client_1 = require("../../base-client");
class NotificationRuleControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveNotificationRuleUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/notification/rule`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getNotificationRuleByIdUsingGET(id, options = {}) {
        const url = `${this.baseUrl}/api/notification/rule/${encodeURIComponent(id)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteNotificationRuleUsingDELETE(id, options = {}) {
        const url = `${this.baseUrl}/api/notification/rule/${encodeURIComponent(id)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async getNotificationRulesUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/notification/rules{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.NotificationRuleControllerClient = NotificationRuleControllerClient;
