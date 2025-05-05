"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerEventControllerClient = void 0;
const base_client_1 = require("../../base-client");
class SchedulerEventControllerClient extends base_client_1.BaseVXOlympusClient {
    async getAllSchedulerEvents(edgeId, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/allSchedulerEvents`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} edgeId - Path parameter
     * @param {string} schedulerEventId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.SchedulerEventInfo>}
     */
    async assignSchedulerEventToEdge(edgeId, schedulerEventId, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/schedulerEvent/${encodeURIComponent(schedulerEventId)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} edgeId - Path parameter
     * @param {string} schedulerEventId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.SchedulerEventInfo>}
     */
    async unassignSchedulerEventFromEdge(edgeId, schedulerEventId, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/schedulerEvent/${encodeURIComponent(schedulerEventId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} edgeId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_SchedulerEventInfo>}
     */
    async getEdgeSchedulerEvents(edgeId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/schedulerEvents{?page,pageSize,sortOrder,sortProperty,textSearch}`;
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
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.SchedulerEvent>}
     */
    async saveSchedulerEventWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/schedulerEvent`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} schedulerEventId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.SchedulerEventWithCustomerInfo>}
     */
    async getSchedulerEventInfoById(schedulerEventId, options = {}) {
        const url = `${this.baseUrl}/api/schedulerEvent/info/${encodeURIComponent(schedulerEventId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} schedulerEventId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.SchedulerEvent>}
     */
    async getSchedulerEventById(schedulerEventId, options = {}) {
        const url = `${this.baseUrl}/api/schedulerEvent/${encodeURIComponent(schedulerEventId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} schedulerEventId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async deleteSchedulerEvent(schedulerEventId, options = {}) {
        const url = `${this.baseUrl}/api/schedulerEvent/${encodeURIComponent(schedulerEventId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.schedulerEventIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.SchedulerEventInfo>>}
     */
    async getSchedulerEventsByIds(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/schedulerEvents{?schedulerEventIds}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.schedulerEventIds !== undefined)
                params.set('schedulerEventIds', String(queryParams.schedulerEventIds));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.type - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.SchedulerEventWithCustomerInfo>>}
     */
    async getSchedulerEvents(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/schedulerEvents{?type}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.type !== undefined)
                params.set('type', String(queryParams.type));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.SchedulerEventControllerClient = SchedulerEventControllerClient;
