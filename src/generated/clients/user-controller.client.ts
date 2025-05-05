import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class UserControllerClient extends BaseVXOlympusClient {
  async getAllCustomerUsersUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customer/users{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getCustomerUserInfosUsingGET(customerId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/userInfos{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getCustomerUsersUsingGET(customerId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/users{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getUsersByEntityGroupIdUsingGET(entityGroupId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/users{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getTenantAdminsUsingGET(tenantId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenant/${encodeURIComponent(tenantId)}/users{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getUserDashboardsInfoUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user/dashboards`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async reportUserDashboardActionUsingGET(dashboardId: string, action: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user/dashboards/${encodeURIComponent(dashboardId)}/${encodeURIComponent(action)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getUserInfoByIdUsingGET(userId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user/info/${encodeURIComponent(userId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async sendActivationEmailUsingPOST(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user/sendActivationMail{?email}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async getUserSettingsUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user/settings`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async putUserSettingsUsingPUT(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user/settings`;
    const response = await this.makeRequest(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async saveUserSettingsUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user/settings`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async deleteUserSettingsUsingDELETE_1(paths: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user/settings/${encodeURIComponent(paths)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async getUserSettingsUsingGET_1(type: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user/settings/${encodeURIComponent(type)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async putUserSettingsUsingPUT_1(type: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user/settings/${encodeURIComponent(type)}`;
    const response = await this.makeRequest(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async deleteUserSettingsUsingDELETE(paths: string, type: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user/settings/${encodeURIComponent(type)}/${encodeURIComponent(paths)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async isUserTokenAccessEnabledUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user/tokenAccessEnabled`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getUserUsersUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user/users{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getUserByIdUsingGET(userId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user/${encodeURIComponent(userId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteUserUsingDELETE(userId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user/${encodeURIComponent(userId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async getActivationLinkUsingGET(userId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user/${encodeURIComponent(userId)}/activationLink`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getUserTokenUsingGET(userId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user/${encodeURIComponent(userId)}/token`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async setUserCredentialsEnabledUsingPOST(userId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user/${encodeURIComponent(userId)}/userCredentialsEnabled{?userCredentialsEnabled}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async getAllUserInfosUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/userInfos/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getUsersForAssignUsingGET(alarmId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/users/assign/${encodeURIComponent(alarmId)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async findUsersByQueryUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/users/info{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getUsersByIdsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/users{?userIds}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveUserUsingPOST(data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user{?entityGroupId,entityGroupIds,sendActivationMail}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}