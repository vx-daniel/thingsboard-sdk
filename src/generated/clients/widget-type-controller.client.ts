import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class WidgetTypeControllerClient extends BaseVXOlympusClient {
  async deleteWidgetTypeUsingDELETE(widgetTypeId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/widgetType/${encodeURIComponent(widgetTypeId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async getWidgetTypeByIdUsingGET(widgetTypeId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/widgetType/${encodeURIComponent(widgetTypeId)}{?inlineImages}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getBundleWidgetTypeFqnsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/widgetTypeFqns{?widgetsBundleId}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getWidgetTypeInfoByIdUsingGET(widgetTypeId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/widgetTypeInfo/${encodeURIComponent(widgetTypeId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getBundleWidgetTypesDetailsByBundleAliasUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/widgetTypesDetails{?bundleAlias,isSystem}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getBundleWidgetTypesDetailsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/widgetTypesDetails{?inlineImages,widgetsBundleId}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getBundleWidgetTypesInfosByBundleAliasUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/widgetTypesInfos{?bundleAlias,isSystem}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getBundleWidgetTypesInfosUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/widgetTypesInfos{?deprecatedFilter,fullSearch,page,pageSize,sortOrder,sortProperty,textSearch,widgetTypeList,widgetsBundleId}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getBundleWidgetTypesByBundleAliasUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/widgetTypes{?bundleAlias,isSystem}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getWidgetTypesUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/widgetTypes{?deprecatedFilter,fullSearch,page,pageSize,sortOrder,sortProperty,tenantOnly,textSearch,widgetTypeList}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getBundleWidgetTypesUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/widgetTypes{?widgetsBundleId}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getWidgetTypeByBundleAliasAndTypeAliasUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/widgetType{?alias,bundleAlias,isSystem}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getWidgetTypeUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/widgetType{?fqn}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveWidgetTypeUsingPOST(data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/widgetType{?updateExistingByFqn}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}