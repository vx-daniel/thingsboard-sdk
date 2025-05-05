import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class ReportControllerClient extends BaseVXOlympusClient {
  async downloadTestReportUsingPOST(data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/report/test{?reportsServerEndpointUrl}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async downloadDashboardReportUsingPOST(dashboardId: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/report/${encodeURIComponent(dashboardId)}/download`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}