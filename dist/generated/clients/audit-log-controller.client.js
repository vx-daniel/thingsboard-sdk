"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogControllerClient = void 0;
const base_client_1 = require("../../base-client");
class AuditLogControllerClient extends base_client_1.BaseVXOlympusClient {
    async getAuditLogsByCustomerIdUsingGET(customerId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/audit/logs/customer/${encodeURIComponent(customerId)}{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getAuditLogsByEntityIdUsingGET(entityType, entityId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/audit/logs/entity/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getAuditLogsByUserIdUsingGET(userId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/audit/logs/user/${encodeURIComponent(userId)}{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getAuditLogsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/audit/logs{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.AuditLogControllerClient = AuditLogControllerClient;
