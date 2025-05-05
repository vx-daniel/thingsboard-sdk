"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlarmCommentControllerClient = void 0;
const base_client_1 = require("../../base-client");
class AlarmCommentControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveAlarmCommentUsingPOST(alarmId, data, options = {}) {
        const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}/comment`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async deleteAlarmCommentUsingDELETE(alarmId, commentId, options = {}) {
        const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}/comment/${encodeURIComponent(commentId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async getAlarmCommentsUsingGET(alarmId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}/comment{?page,pageSize,sortOrder,sortProperty}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.AlarmCommentControllerClient = AlarmCommentControllerClient;
