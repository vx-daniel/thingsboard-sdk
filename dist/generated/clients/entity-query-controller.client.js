"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityQueryControllerClient = void 0;
const base_client_1 = require("../../base-client");
class EntityQueryControllerClient extends base_client_1.BaseVXOlympusClient {
    async countAlarmsByQueryUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/alarmsQuery/count`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async findAlarmDataByQueryUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/alarmsQuery/find`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async countEntitiesByQueryUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/entitiesQuery/count`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async findEntityDataByQueryUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/entitiesQuery/find`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async findEntityTimeseriesAndAttributesKeysByQueryUsingPOST(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entitiesQuery/find/keys{?attributes,timeseries}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
}
exports.EntityQueryControllerClient = EntityQueryControllerClient;
