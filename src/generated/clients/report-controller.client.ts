import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class ReportControllerClient extends BaseVXOlympusClient {  /**
   * @param {object} data - Request body
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.reportsServerEndpointUrl - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async downloadTestReportWithData(data: schemas.ReportConfig, queryParams?: { reportsServerEndpointUrl?: string }, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/report/test{?reportsServerEndpointUrl}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.reportsServerEndpointUrl !== undefined) params.set('reportsServerEndpointUrl', String(queryParams.reportsServerEndpointUrl));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url + (queryString ? `?${queryString}` : ''), {
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
  async downloadDashboardReportWithData(dashboardId: string, data: schemas.JsonNode, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/report/${encodeURIComponent(dashboardId)}/download`;
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}