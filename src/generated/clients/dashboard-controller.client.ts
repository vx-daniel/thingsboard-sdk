import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class DashboardControllerClient extends BaseVXOlympusClient {
  async getCustomerHomeDashboardInfoUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customer/dashboard/home/info`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async setCustomerHomeDashboardInfoUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customer/dashboard/home/info`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getCustomerDashboardsUsingGET(customerId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/dashboards{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getHomeDashboardUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/dashboard/home`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getHomeDashboardInfoUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/dashboard/home/info`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getDashboardInfoByIdUsingGET(dashboardId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/dashboard/info/${encodeURIComponent(dashboardId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getMaxDatapointsLimitUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/dashboard/maxDatapointsLimit`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getServerTimeUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/dashboard/serverTime`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteDashboardUsingDELETE(dashboardId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/dashboard/${encodeURIComponent(dashboardId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async getDashboardByIdUsingGET(dashboardId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/dashboard/${encodeURIComponent(dashboardId)}{?inlineImages}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getAllDashboardsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/dashboards/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getDashboardsByIdsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/dashboards{?dashboardIds}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveDashboardUsingPOST(data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/dashboard{?entityGroupId,entityGroupIds}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async exportGroupDashboardsUsingGET(entityGroupId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/dashboards/export{?limit}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async importGroupDashboardsUsingPOST(entityGroupId: string, data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/dashboards/import{?overwrite}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getDashboardsByEntityGroupIdUsingGET(entityGroupId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/dashboards{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getTenantHomeDashboardInfoUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenant/dashboard/home/info`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async setTenantHomeDashboardInfoUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenant/dashboard/home/info`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getTenantDashboardsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenant/dashboards{?mobile,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getTenantDashboardsUsingGET_1(tenantId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenant/${encodeURIComponent(tenantId)}/dashboards{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getUserDashboardsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user/dashboards{?mobile,operation,page,pageSize,sortOrder,sortProperty,textSearch,userId}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}