"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventControllerClient = void 0;
const base_client_1 = require("../../base-client");
class EventControllerClient extends base_client_1.BaseVXOlympusClient {
    async clearEventsUsingPOST(entityType, entityId, data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/clear{?endTime,startTime}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getEventsUsingGET_1(entityType, entityId, eventType, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/${encodeURIComponent(eventType)}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEventsUsingGET(entityType, entityId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEventsUsingPOST(entityType, entityId, data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
}
exports.EventControllerClient = EventControllerClient;
