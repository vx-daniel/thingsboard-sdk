"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationControllerClient = void 0;
const base_client_1 = require("../../base-client");
class NotificationControllerClient extends base_client_1.BaseVXOlympusClient {
    async getAvailableDeliveryMethods(options = {}) {
        const url = `${this.baseUrl}/api/notification/deliveryMethods`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.NotificationRequest>}
     */
    async createNotificationRequestWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/notification/request`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.recipientsPreviewSize - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.NotificationRequestPreview>}
     */
    async getNotificationRequestPreviewWithData(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/notification/request/preview{?recipientsPreviewSize}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.recipientsPreviewSize !== undefined)
                params.set('recipientsPreviewSize', String(queryParams.recipientsPreviewSize));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} id - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.NotificationRequestInfo>}
     */
    async getNotificationRequestById(id, options = {}) {
        const url = `${this.baseUrl}/api/notification/request/${encodeURIComponent(id)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} id - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async deleteNotificationRequest(id, options = {}) {
        const url = `${this.baseUrl}/api/notification/request/${encodeURIComponent(id)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_NotificationRequestInfo>}
     */
    async getNotificationRequests(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/notification/requests{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.textSearch !== undefined)
                params.set('textSearch', String(queryParams.textSearch));
            if (queryParams.sortProperty !== undefined)
                params.set('sortProperty', String(queryParams.sortProperty));
            if (queryParams.sortOrder !== undefined)
                params.set('sortOrder', String(queryParams.sortOrder));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.NotificationSettings>}
     */
    async getNotificationSettings(options = {}) {
        const url = `${this.baseUrl}/api/notification/settings`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.NotificationSettings>}
     */
    async saveNotificationSettingsWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/notification/settings`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.UserNotificationSettings>}
     */
    async getUserNotificationSettings(options = {}) {
        const url = `${this.baseUrl}/api/notification/settings/user`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.UserNotificationSettings>}
     */
    async saveUserNotificationSettingsWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/notification/settings/user`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} id - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async deleteNotification(id, options = {}) {
        const url = `${this.baseUrl}/api/notification/${encodeURIComponent(id)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} id - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async markNotificationAsRead(id, options = {}) {
        const url = `${this.baseUrl}/api/notification/${encodeURIComponent(id)}/read`;
        const response = await this.makeRequest(url, {
            method: 'PUT',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async markAllNotificationsAsRead(options = {}) {
        const url = `${this.baseUrl}/api/notifications/read`;
        const response = await this.makeRequest(url, {
            method: 'PUT',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {boolean} queryParams.unreadOnly - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Notification>}
     */
    async getNotifications(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/notifications{?page,pageSize,sortOrder,sortProperty,textSearch,unreadOnly}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.textSearch !== undefined)
                params.set('textSearch', String(queryParams.textSearch));
            if (queryParams.sortProperty !== undefined)
                params.set('sortProperty', String(queryParams.sortProperty));
            if (queryParams.sortOrder !== undefined)
                params.set('sortOrder', String(queryParams.sortOrder));
            if (queryParams.unreadOnly !== undefined)
                params.set('unreadOnly', String(queryParams.unreadOnly));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.NotificationControllerClient = NotificationControllerClient;
