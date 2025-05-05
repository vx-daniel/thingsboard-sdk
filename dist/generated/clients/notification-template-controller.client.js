"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationTemplateControllerClient = void 0;
const base_client_1 = require("../../base-client");
class NotificationTemplateControllerClient extends base_client_1.BaseVXOlympusClient {
    async listSlackConversationsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/notification/slack/conversations{?token,type}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveNotificationTemplateUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/notification/template`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getNotificationTemplateByIdUsingGET(id, options = {}) {
        const url = `${this.baseUrl}/api/notification/template/${encodeURIComponent(id)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteNotificationTemplateByIdUsingDELETE(id, options = {}) {
        const url = `${this.baseUrl}/api/notification/template/${encodeURIComponent(id)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async getNotificationTemplatesUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/notification/templates{?notificationTypes,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.NotificationTemplateControllerClient = NotificationTemplateControllerClient;
