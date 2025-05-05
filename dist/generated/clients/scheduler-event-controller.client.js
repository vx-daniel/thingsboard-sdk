"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerEventControllerClient = void 0;
const base_client_1 = require("../../base-client");
class SchedulerEventControllerClient extends base_client_1.BaseVXOlympusClient {
    async getAllSchedulerEventsUsingGET(edgeId, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/allSchedulerEvents`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async assignSchedulerEventToEdgeUsingPOST(edgeId, schedulerEventId, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/schedulerEvent/${encodeURIComponent(schedulerEventId)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async unassignSchedulerEventFromEdgeUsingDELETE(edgeId, schedulerEventId, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/schedulerEvent/${encodeURIComponent(schedulerEventId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async getEdgeSchedulerEventsUsingGET(edgeId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/schedulerEvents{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveSchedulerEventUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/schedulerEvent`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getSchedulerEventInfoByIdUsingGET(schedulerEventId, options = {}) {
        const url = `${this.baseUrl}/api/schedulerEvent/info/${encodeURIComponent(schedulerEventId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getSchedulerEventByIdUsingGET(schedulerEventId, options = {}) {
        const url = `${this.baseUrl}/api/schedulerEvent/${encodeURIComponent(schedulerEventId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteSchedulerEventUsingDELETE(schedulerEventId, options = {}) {
        const url = `${this.baseUrl}/api/schedulerEvent/${encodeURIComponent(schedulerEventId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async getSchedulerEventsByIdsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/schedulerEvents{?schedulerEventIds}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getSchedulerEventsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/schedulerEvents{?type}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.SchedulerEventControllerClient = SchedulerEventControllerClient;
