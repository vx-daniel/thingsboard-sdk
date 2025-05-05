"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportControllerClient = void 0;
const base_client_1 = require("../../base-client");
class ReportControllerClient extends base_client_1.BaseVXOlympusClient {
    async downloadTestReportWithData(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/report/test{?reportsServerEndpointUrl}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.reportsServerEndpointUrl !== undefined)
                params.set('reportsServerEndpointUrl', String(queryParams.reportsServerEndpointUrl));
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
     * @param {string} dashboardId - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    async downloadDashboardReportWithData(dashboardId, data, options = {}) {
        const url = `${this.baseUrl}/api/report/${encodeURIComponent(dashboardId)}/download`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
}
exports.ReportControllerClient = ReportControllerClient;
