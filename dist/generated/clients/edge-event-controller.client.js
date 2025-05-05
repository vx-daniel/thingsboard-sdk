"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgeEventControllerClient = void 0;
const base_client_1 = require("../../base-client");
class EdgeEventControllerClient extends base_client_1.BaseVXOlympusClient {
    async getEdgeEventsUsingGET(edgeId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/events{?endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.EdgeEventControllerClient = EdgeEventControllerClient;
