"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueControllerClient = void 0;
const base_client_1 = require("../../base-client");
class QueueControllerClient extends base_client_1.BaseVXOlympusClient {
    async getQueueByNameUsingGET(queueName, options = {}) {
        const url = `${this.baseUrl}/api/queues/name/${encodeURIComponent(queueName)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getQueueByIdUsingGET(queueId, options = {}) {
        const url = `${this.baseUrl}/api/queues/${encodeURIComponent(queueId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteQueueUsingDELETE(queueId, options = {}) {
        const url = `${this.baseUrl}/api/queues/${encodeURIComponent(queueId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async getTenantQueuesByServiceTypeUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/queues{?page,pageSize,serviceType,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveQueueUsingPOST(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/queues{?serviceType}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
}
exports.QueueControllerClient = QueueControllerClient;
