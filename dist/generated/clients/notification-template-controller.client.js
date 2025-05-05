"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationTemplateControllerClient = void 0;
const base_client_1 = require("../../base-client");
class NotificationTemplateControllerClient extends base_client_1.BaseVXOlympusClient {
    async listSlackConversations(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/notification/slack/conversations{?token,type}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.type !== undefined)
                params.set('type', String(queryParams.type));
            if (queryParams.token !== undefined)
                params.set('token', String(queryParams.token));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.NotificationTemplate>}
     */
    async saveNotificationTemplateWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/notification/template`;
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
     * @returns {Promise<schemas.NotificationTemplate>}
     */
    async getNotificationTemplateById(id, options = {}) {
        const url = `${this.baseUrl}/api/notification/template/${encodeURIComponent(id)}`;
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
    async deleteNotificationTemplateById(id, options = {}) {
        const url = `${this.baseUrl}/api/notification/template/${encodeURIComponent(id)}`;
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
     * @param {string} queryParams.notificationTypes - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_NotificationTemplate>}
     */
    async getNotificationTemplates(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/notification/templates{?notificationTypes,page,pageSize,sortOrder,sortProperty,textSearch}`;
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
            if (queryParams.notificationTypes !== undefined)
                params.set('notificationTypes', String(queryParams.notificationTypes));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.NotificationTemplateControllerClient = NotificationTemplateControllerClient;
