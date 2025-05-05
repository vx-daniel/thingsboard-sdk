"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportControllerClient = void 0;
const base_client_1 = require("../../base-client");
class ReportControllerClient extends base_client_1.BaseVXOlympusClient {
    async downloadTestReportUsingPOST(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/report/test{?reportsServerEndpointUrl}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async downloadDashboardReportUsingPOST(dashboardId, data, options = {}) {
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
