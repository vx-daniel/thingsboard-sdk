"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventControllerClient = void 0;
const base_client_1 = require("../../base-client");
class EventControllerClient extends base_client_1.BaseVXOlympusClient {
    async clearEventsWithData(entityType, entityId, data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/clear{?endTime,startTime}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.startTime !== undefined)
                params.set('startTime', String(queryParams.startTime));
            if (queryParams.endTime !== undefined)
                params.set('endTime', String(queryParams.endTime));
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
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {string} eventType - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.tenantId - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {integer} queryParams.startTime - Query parameter
     * @param {integer} queryParams.endTime - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EventInfo>}
     */
    async getEventsUsingGET_1(entityType, entityId, eventType, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/${encodeURIComponent(eventType)}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.tenantId !== undefined)
                params.set('tenantId', String(queryParams.tenantId));
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
            if (queryParams.startTime !== undefined)
                params.set('startTime', String(queryParams.startTime));
            if (queryParams.endTime !== undefined)
                params.set('endTime', String(queryParams.endTime));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.tenantId - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {integer} queryParams.startTime - Query parameter
     * @param {integer} queryParams.endTime - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EventInfo>}
     */
    async getEvents(entityType, entityId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.tenantId !== undefined)
                params.set('tenantId', String(queryParams.tenantId));
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
            if (queryParams.startTime !== undefined)
                params.set('startTime', String(queryParams.startTime));
            if (queryParams.endTime !== undefined)
                params.set('endTime', String(queryParams.endTime));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.tenantId - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {integer} queryParams.startTime - Query parameter
     * @param {integer} queryParams.endTime - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EventInfo>}
     */
    async getEventsWithData(entityType, entityId, data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.tenantId !== undefined)
                params.set('tenantId', String(queryParams.tenantId));
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
            if (queryParams.startTime !== undefined)
                params.set('startTime', String(queryParams.startTime));
            if (queryParams.endTime !== undefined)
                params.set('endTime', String(queryParams.endTime));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
}
exports.EventControllerClient = EventControllerClient;
