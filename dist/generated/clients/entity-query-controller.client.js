"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityQueryControllerClient = void 0;
const base_client_1 = require("../../base-client");
class EntityQueryControllerClient extends base_client_1.BaseVXOlympusClient {
    async countAlarmsByQueryWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/alarmsQuery/count`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_AlarmData>}
     */
    async findAlarmDataByQueryWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/alarmsQuery/find`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<number>}
     */
    async countEntitiesByQueryWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/entitiesQuery/count`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntityData>}
     */
    async findEntityDataByQueryWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/entitiesQuery/find`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.timeseries - Query parameter
     * @param {boolean} queryParams.attributes - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    async findEntityTimeseriesAndAttributesKeysByQueryWithData(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entitiesQuery/find/keys{?attributes,timeseries}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.timeseries !== undefined)
                params.set('timeseries', String(queryParams.timeseries));
            if (queryParams.attributes !== undefined)
                params.set('attributes', String(queryParams.attributes));
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
exports.EntityQueryControllerClient = EntityQueryControllerClient;
