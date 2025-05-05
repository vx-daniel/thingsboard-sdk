import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class WidgetsBundleControllerClient extends BaseVXOlympusClient {
  async saveWidgetsBundleUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/widgetsBundle`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async deleteWidgetsBundleUsingDELETE(widgetsBundleId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/widgetsBundle/${encodeURIComponent(widgetsBundleId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async updateWidgetsBundleWidgetFqnsUsingPOST(widgetsBundleId: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/widgetsBundle/${encodeURIComponent(widgetsBundleId)}/widgetTypeFqns`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async updateWidgetsBundleWidgetTypesUsingPOST(widgetsBundleId: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/widgetsBundle/${encodeURIComponent(widgetsBundleId)}/widgetTypes`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getWidgetsBundleByIdUsingGET(widgetsBundleId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/widgetsBundle/${encodeURIComponent(widgetsBundleId)}{?inlineImages}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getWidgetsBundlesUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/widgetsBundles`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getWidgetsBundlesUsingGET_1(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/widgetsBundles{?fullSearch,page,pageSize,sortOrder,sortProperty,tenantOnly,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getWidgetsBundlesByIdsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/widgetsBundles{?widgetsBundleIds}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}