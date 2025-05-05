"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationControllerClient = void 0;
const base_client_1 = require("../../base-client");
class NotificationControllerClient extends base_client_1.BaseVXOlympusClient {
    async getAvailableDeliveryMethodsUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/notification/deliveryMethods`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async createNotificationRequestUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/notification/request`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getNotificationRequestPreviewUsingPOST(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/notification/request/preview{?recipientsPreviewSize}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getNotificationRequestByIdUsingGET(id, options = {}) {
        const url = `${this.baseUrl}/api/notification/request/${encodeURIComponent(id)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteNotificationRequestUsingDELETE(id, options = {}) {
        const url = `${this.baseUrl}/api/notification/request/${encodeURIComponent(id)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async getNotificationRequestsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/notification/requests{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getNotificationSettingsUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/notification/settings`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveNotificationSettingsUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/notification/settings`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getUserNotificationSettingsUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/notification/settings/user`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveUserNotificationSettingsUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/notification/settings/user`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async deleteNotificationUsingDELETE(id, options = {}) {
        const url = `${this.baseUrl}/api/notification/${encodeURIComponent(id)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async markNotificationAsReadUsingPUT(id, options = {}) {
        const url = `${this.baseUrl}/api/notification/${encodeURIComponent(id)}/read`;
        const response = await this.makeRequest(url, {
            method: 'PUT',
            ...options,
        });
        return response;
    }
    async markAllNotificationsAsReadUsingPUT(options = {}) {
        const url = `${this.baseUrl}/api/notifications/read`;
        const response = await this.makeRequest(url, {
            method: 'PUT',
            ...options,
        });
        return response;
    }
    async getNotificationsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/notifications{?page,pageSize,sortOrder,sortProperty,textSearch,unreadOnly}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.NotificationControllerClient = NotificationControllerClient;
