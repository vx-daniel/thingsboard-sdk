import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class DashboardControllerClient extends BaseVXOlympusClient {  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.HomeDashboardInfo>}
   */
  async getCustomerHomeDashboardInfo(options: RequestInit = {}): Promise<schemas.HomeDashboardInfo> {
    const url = `${this.baseUrl}/api/customer/dashboard/home/info`;
    const response = await this.makeRequest<schemas.HomeDashboardInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async setCustomerHomeDashboardInfoWithData(data: schemas.HomeDashboardInfo, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/customer/dashboard/home/info`;
    const response = await this.makeRequest<void>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} customerId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {boolean} queryParams.includeCustomers - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_DashboardInfo>}
   */
  async getCustomerDashboards(customerId: string, queryParams?: { pageSize?: number; page?: number; includeCustomers?: boolean; textSearch?: string; sortProperty?: 'createdTime' | 'title'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_DashboardInfo> {
    const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/dashboards{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.includeCustomers !== undefined) params.set('includeCustomers', String(queryParams.includeCustomers));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_DashboardInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.HomeDashboard>}
   */
  async getHomeDashboard(options: RequestInit = {}): Promise<schemas.HomeDashboard> {
    const url = `${this.baseUrl}/api/dashboard/home`;
    const response = await this.makeRequest<schemas.HomeDashboard>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.HomeDashboardInfo>}
   */
  async getHomeDashboardInfo(options: RequestInit = {}): Promise<schemas.HomeDashboardInfo> {
    const url = `${this.baseUrl}/api/dashboard/home/info`;
    const response = await this.makeRequest<schemas.HomeDashboardInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} dashboardId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DashboardInfo>}
   */
  async getDashboardInfoById(dashboardId: string, options: RequestInit = {}): Promise<schemas.DashboardInfo> {
    const url = `${this.baseUrl}/api/dashboard/info/${encodeURIComponent(dashboardId)}`;
    const response = await this.makeRequest<schemas.DashboardInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<number>}
   */
  async getMaxDatapointsLimit(options: RequestInit = {}): Promise<number> {
    const url = `${this.baseUrl}/api/dashboard/maxDatapointsLimit`;
    const response = await this.makeRequest<number>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<number>}
   */
  async getServerTime(options: RequestInit = {}): Promise<number> {
    const url = `${this.baseUrl}/api/dashboard/serverTime`;
    const response = await this.makeRequest<number>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} dashboardId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteDashboard(dashboardId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/dashboard/${encodeURIComponent(dashboardId)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} dashboardId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {boolean} queryParams.inlineImages - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.Dashboard>}
   */
  async getDashboardById(dashboardId: string, queryParams?: { inlineImages?: boolean }, options: RequestInit = {}): Promise<schemas.Dashboard> {
    const url = `${this.baseUrl}/api/dashboard/${encodeURIComponent(dashboardId)}{?inlineImages}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.inlineImages !== undefined) params.set('inlineImages', String(queryParams.inlineImages));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.Dashboard>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {boolean} queryParams.includeCustomers - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_DashboardInfo>}
   */
  async getAllDashboards(queryParams?: { pageSize?: number; page?: number; includeCustomers?: boolean; textSearch?: string; sortProperty?: 'createdTime' | 'title'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_DashboardInfo> {
    const url = `${this.baseUrl}/api/dashboards/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.includeCustomers !== undefined) params.set('includeCustomers', String(queryParams.includeCustomers));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_DashboardInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.dashboardIds - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.DashboardInfo>>}
   */
  async getDashboardsByIds(queryParams?: { dashboardIds?: string }, options: RequestInit = {}): Promise<Array<schemas.DashboardInfo>> {
    const url = `${this.baseUrl}/api/dashboards{?dashboardIds}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.dashboardIds !== undefined) params.set('dashboardIds', String(queryParams.dashboardIds));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.DashboardInfo>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.entityGroupId - Query parameter
   * @param {string} queryParams.entityGroupIds - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.Dashboard>}
   */
  async saveDashboardWithData(data: schemas.Dashboard, queryParams?: { entityGroupId?: string; entityGroupIds?: string }, options: RequestInit = {}): Promise<schemas.Dashboard> {
    const url = `${this.baseUrl}/api/dashboard{?entityGroupId,entityGroupIds}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.entityGroupId !== undefined) params.set('entityGroupId', String(queryParams.entityGroupId));
      if (queryParams.entityGroupIds !== undefined) params.set('entityGroupIds', String(queryParams.entityGroupIds));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.Dashboard>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityGroupId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.limit - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.Dashboard>>}
   */
  async exportGroupDashboards(entityGroupId: string, queryParams?: { limit?: number }, options: RequestInit = {}): Promise<Array<schemas.Dashboard>> {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/dashboards/export{?limit}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.limit !== undefined) params.set('limit', String(queryParams.limit));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.Dashboard>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityGroupId - Path parameter
   * @param {object} data - Request body
   * @param {object} queryParams - Query parameters
   * @param {boolean} queryParams.overwrite - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async importGroupDashboardsWithData(entityGroupId: string, data: Array<schemas.Dashboard>, queryParams?: { overwrite?: boolean }, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/dashboards/import{?overwrite}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.overwrite !== undefined) params.set('overwrite', String(queryParams.overwrite));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<void>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityGroupId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_DashboardInfo>}
   */
  async getDashboardsByEntityGroupId(entityGroupId: string, queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'createdTime' | 'title'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_DashboardInfo> {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/dashboards{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_DashboardInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.HomeDashboardInfo>}
   */
  async getTenantHomeDashboardInfo(options: RequestInit = {}): Promise<schemas.HomeDashboardInfo> {
    const url = `${this.baseUrl}/api/tenant/dashboard/home/info`;
    const response = await this.makeRequest<schemas.HomeDashboardInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async setTenantHomeDashboardInfoWithData(data: schemas.HomeDashboardInfo, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/tenant/dashboard/home/info`;
    const response = await this.makeRequest<void>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {boolean} queryParams.mobile - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_DashboardInfo>}
   */
  async getTenantDashboards(queryParams?: { pageSize?: number; page?: number; mobile?: boolean; textSearch?: string; sortProperty?: 'createdTime' | 'title'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_DashboardInfo> {
    const url = `${this.baseUrl}/api/tenant/dashboards{?mobile,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.mobile !== undefined) params.set('mobile', String(queryParams.mobile));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_DashboardInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} tenantId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_DashboardInfo>}
   */
  async getTenantDashboardsUsingGET_1(tenantId: string, queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'createdTime' | 'title'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_DashboardInfo> {
    const url = `${this.baseUrl}/api/tenant/${encodeURIComponent(tenantId)}/dashboards{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_DashboardInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {boolean} queryParams.mobile - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {string} queryParams.operation - Query parameter
   * @param {string} queryParams.userId - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_DashboardInfo>}
   */
  async getUserDashboards(queryParams?: { pageSize?: number; page?: number; mobile?: boolean; textSearch?: string; sortProperty?: 'createdTime' | 'title'; sortOrder?: 'ASC' | 'DESC'; operation?: string; userId?: string }, options: RequestInit = {}): Promise<schemas.PageData_Of_DashboardInfo> {
    const url = `${this.baseUrl}/api/user/dashboards{?mobile,operation,page,pageSize,sortOrder,sortProperty,textSearch,userId}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.mobile !== undefined) params.set('mobile', String(queryParams.mobile));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
      if (queryParams.operation !== undefined) params.set('operation', String(queryParams.operation));
      if (queryParams.userId !== undefined) params.set('userId', String(queryParams.userId));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_DashboardInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}