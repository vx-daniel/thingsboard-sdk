"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlarmCommentControllerClient = void 0;
const base_client_1 = require("../../base-client");
class AlarmCommentControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveAlarmCommentWithData(alarmId, data, options = {}) {
        const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}/comment`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} alarmId - Path parameter
     * @param {string} commentId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async deleteAlarmComment(alarmId, commentId, options = {}) {
        const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}/comment/${encodeURIComponent(commentId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} alarmId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_AlarmCommentInfo>}
     */
    async getAlarmComments(alarmId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}/comment{?page,pageSize,sortOrder,sortProperty}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
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
}
exports.AlarmCommentControllerClient = AlarmCommentControllerClient;
