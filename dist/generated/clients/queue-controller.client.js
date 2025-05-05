"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueControllerClient = void 0;
const base_client_1 = require("../../base-client");
class QueueControllerClient extends base_client_1.BaseVXOlympusClient {
    async getQueueByName(queueName, options = {}) {
        const url = `${this.baseUrl}/api/queues/name/${encodeURIComponent(queueName)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} queueId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Queue>}
     */
    async getQueueById(queueId, options = {}) {
        const url = `${this.baseUrl}/api/queues/${encodeURIComponent(queueId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} queueId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async deleteQueue(queueId, options = {}) {
        const url = `${this.baseUrl}/api/queues/${encodeURIComponent(queueId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.serviceType - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Queue>}
     */
    async getTenantQueuesByServiceType(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/queues{?page,pageSize,serviceType,sortOrder,sortProperty,textSearch}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.serviceType !== undefined)
                params.set('serviceType', String(queryParams.serviceType));
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
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.serviceType - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Queue>}
     */
    async saveQueueWithData(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/queues{?serviceType}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.serviceType !== undefined)
                params.set('serviceType', String(queryParams.serviceType));
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
exports.QueueControllerClient = QueueControllerClient;
