"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgeEventControllerClient = void 0;
const base_client_1 = require("../../base-client");
class EdgeEventControllerClient extends base_client_1.BaseVXOlympusClient {
    async getEdgeEvents(edgeId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/events{?endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}`;
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
}
exports.EdgeEventControllerClient = EdgeEventControllerClient;
