import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class CustomerControllerClient extends BaseVXOlympusClient {
  async getCustomerInfoByIdUsingGET(customerId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customer/info/${encodeURIComponent(customerId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getCustomerByIdUsingGET(customerId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteCustomerUsingDELETE(customerId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async getCustomerCustomerInfosUsingGET(customerId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/customerInfos{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getShortCustomerInfoByIdUsingGET(customerId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/shortInfo`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getCustomerTitleByIdUsingGET(customerId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/title`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getAllCustomerInfosUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customerInfos/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getCustomersByIdsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customers{?customerIds}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getCustomersUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customers{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveCustomerUsingPOST(data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/customer{?entityGroupId,entityGroupIds}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getCustomersByEntityGroupIdUsingGET(entityGroupId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/customers{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getTenantCustomerUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/tenant/customers{?customerTitle}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getUserCustomersUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/user/customers{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}