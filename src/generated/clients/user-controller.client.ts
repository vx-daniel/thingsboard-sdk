import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class UserControllerClient extends BaseVXOlympusClient {  /**
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_User>}
   */
  async getAllCustomerUsers(queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'createdTime' | 'email' | 'firstName' | 'lastName'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_User> {
    const url = `${this.baseUrl}/api/customer/users{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_User>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
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
   * @returns {Promise<schemas.PageData_Of_UserInfo>}
   */
  async getCustomerUserInfos(customerId: string, queryParams?: { pageSize?: number; page?: number; includeCustomers?: boolean; textSearch?: string; sortProperty?: 'createdTime' | 'email' | 'firstName' | 'lastName'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_UserInfo> {
    const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/userInfos{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
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
    const response = await this.makeRequest<schemas.PageData_Of_UserInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} customerId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_User>}
   */
  async getCustomerUsers(customerId: string, queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'createdTime' | 'email' | 'firstName' | 'lastName'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_User> {
    const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/users{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_User>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
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
   * @returns {Promise<schemas.PageData_Of_User>}
   */
  async getUsersByEntityGroupId(entityGroupId: string, queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'createdTime' | 'email' | 'firstName' | 'lastName'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_User> {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/users{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_User>(url + (queryString ? `?${queryString}` : ''), {
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
   * @returns {Promise<schemas.PageData_Of_User>}
   */
  async getTenantAdmins(tenantId: string, queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'createdTime' | 'email' | 'firstName' | 'lastName'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_User> {
    const url = `${this.baseUrl}/api/tenant/${encodeURIComponent(tenantId)}/users{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_User>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.UserDashboardsInfo>}
   */
  async getUserDashboardsInfo(options: RequestInit = {}): Promise<schemas.UserDashboardsInfo> {
    const url = `${this.baseUrl}/api/user/dashboards`;
    const response = await this.makeRequest<schemas.UserDashboardsInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} dashboardId - Path parameter
   * @param {string} action - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.UserDashboardsInfo>}
   */
  async reportUserDashboardAction(dashboardId: string, action: string, options: RequestInit = {}): Promise<schemas.UserDashboardsInfo> {
    const url = `${this.baseUrl}/api/user/dashboards/${encodeURIComponent(dashboardId)}/${encodeURIComponent(action)}`;
    const response = await this.makeRequest<schemas.UserDashboardsInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} userId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.UserInfo>}
   */
  async getUserInfoById(userId: string, options: RequestInit = {}): Promise<schemas.UserInfo> {
    const url = `${this.baseUrl}/api/user/info/${encodeURIComponent(userId)}`;
    const response = await this.makeRequest<schemas.UserInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.email - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async sendActivationEmail(queryParams?: { email?: string }, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/user/sendActivationMail{?email}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.email !== undefined) params.set('email', String(queryParams.email));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<void>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.JsonNode>}
   */
  async getUserSettings(options: RequestInit = {}): Promise<schemas.JsonNode> {
    const url = `${this.baseUrl}/api/user/settings`;
    const response = await this.makeRequest<schemas.JsonNode>(url, {
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
  async putUserSettingsWithData(data: schemas.JsonNode, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/user/settings`;
    const response = await this.makeRequest<void>(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.JsonNode>}
   */
  async saveUserSettingsWithData(data: schemas.JsonNode, options: RequestInit = {}): Promise<schemas.JsonNode> {
    const url = `${this.baseUrl}/api/user/settings`;
    const response = await this.makeRequest<schemas.JsonNode>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} paths - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteUserSettingsUsingDELETE_1(paths: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/user/settings/${encodeURIComponent(paths)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} type - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.JsonNode>}
   */
  async getUserSettingsUsingGET_1(type: string, options: RequestInit = {}): Promise<schemas.JsonNode> {
    const url = `${this.baseUrl}/api/user/settings/${encodeURIComponent(type)}`;
    const response = await this.makeRequest<schemas.JsonNode>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} type - Path parameter
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async putUserSettingsUsingPUT_1WithData(type: string, data: schemas.JsonNode, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/user/settings/${encodeURIComponent(type)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} paths - Path parameter
   * @param {string} type - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteUserSettings(paths: string, type: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/user/settings/${encodeURIComponent(type)}/${encodeURIComponent(paths)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<boolean>}
   */
  async isUserTokenAccessEnabled(options: RequestInit = {}): Promise<boolean> {
    const url = `${this.baseUrl}/api/user/tokenAccessEnabled`;
    const response = await this.makeRequest<boolean>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_User>}
   */
  async getUserUsers(queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'createdTime' | 'email' | 'firstName' | 'lastName'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_User> {
    const url = `${this.baseUrl}/api/user/users{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_User>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} userId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.User>}
   */
  async getUserById(userId: string, options: RequestInit = {}): Promise<schemas.User> {
    const url = `${this.baseUrl}/api/user/${encodeURIComponent(userId)}`;
    const response = await this.makeRequest<schemas.User>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} userId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteUser(userId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/user/${encodeURIComponent(userId)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} userId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async getActivationLink(userId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/user/${encodeURIComponent(userId)}/activationLink`;
    const response = await this.makeRequest<void>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} userId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.JWT_Pair>}
   */
  async getUserToken(userId: string, options: RequestInit = {}): Promise<schemas.JWT_Pair> {
    const url = `${this.baseUrl}/api/user/${encodeURIComponent(userId)}/token`;
    const response = await this.makeRequest<schemas.JWT_Pair>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} userId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {boolean} queryParams.userCredentialsEnabled - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async setUserCredentialsEnabled(userId: string, queryParams?: { userCredentialsEnabled?: boolean }, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/user/${encodeURIComponent(userId)}/userCredentialsEnabled{?userCredentialsEnabled}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.userCredentialsEnabled !== undefined) params.set('userCredentialsEnabled', String(queryParams.userCredentialsEnabled));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<void>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      
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
   * @returns {Promise<schemas.PageData_Of_UserInfo>}
   */
  async getAllUserInfos(queryParams?: { pageSize?: number; page?: number; includeCustomers?: boolean; textSearch?: string; sortProperty?: 'createdTime' | 'email' | 'firstName' | 'lastName'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_UserInfo> {
    const url = `${this.baseUrl}/api/userInfos/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
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
    const response = await this.makeRequest<schemas.PageData_Of_UserInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} alarmId - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_UserEmailInfo>}
   */
  async getUsersForAssign(alarmId: string, queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'createdTime' | 'email' | 'firstName' | 'lastName'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_UserEmailInfo> {
    const url = `${this.baseUrl}/api/users/assign/${encodeURIComponent(alarmId)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_UserEmailInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_UserEmailInfo>}
   */
  async findUsersByQuery(queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'createdTime' | 'email' | 'firstName' | 'lastName'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_UserEmailInfo> {
    const url = `${this.baseUrl}/api/users/info{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_UserEmailInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.userIds - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.User>>}
   */
  async getUsersByIds(queryParams?: { userIds?: string }, options: RequestInit = {}): Promise<Array<schemas.User>> {
    const url = `${this.baseUrl}/api/users{?userIds}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.userIds !== undefined) params.set('userIds', String(queryParams.userIds));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.User>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {object} queryParams - Query parameters
   * @param {boolean} queryParams.sendActivationMail - Query parameter
   * @param {string} queryParams.entityGroupId - Query parameter
   * @param {string} queryParams.entityGroupIds - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.User>}
   */
  async saveUserWithData(data: schemas.User, queryParams?: { sendActivationMail?: boolean; entityGroupId?: string; entityGroupIds?: string }, options: RequestInit = {}): Promise<schemas.User> {
    const url = `${this.baseUrl}/api/user{?entityGroupId,entityGroupIds,sendActivationMail}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.sendActivationMail !== undefined) params.set('sendActivationMail', String(queryParams.sendActivationMail));
      if (queryParams.entityGroupId !== undefined) params.set('entityGroupId', String(queryParams.entityGroupId));
      if (queryParams.entityGroupIds !== undefined) params.set('entityGroupIds', String(queryParams.entityGroupIds));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.User>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}