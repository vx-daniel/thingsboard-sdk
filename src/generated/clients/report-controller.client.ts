import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class ReportControllerClient extends BaseVXOlympusClient {
  async downloadTestReportUsingPOST(reportsServerEndpointUrl: string, data: schemas.ReportConfig, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    config.body = JSON.stringify(data);

    const url = new URL(`/api/report/test{?reportsServerEndpointUrl}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (reportsServerEndpointUrl !== undefined) searchParams.append('reportsServerEndpointUrl', String(reportsServerEndpointUrl));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_ResponseEntitySchemaSchema.parse(responseData);
  }

  async downloadDashboardReportUsingPOST(dashboardId: string, data: schemas.JsonNode, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    config.body = JSON.stringify(data);

    const url = new URL(`/api/report/${encodeURIComponent(dashboardId)}/download`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_ResponseEntitySchemaSchema.parse(responseData);
  }}