import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class EntityRelationControllerClient extends BaseVXOlympusClient {
  async saveRelationUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/relation`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async findByQueryUsingPOST_3(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/relations`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async findInfoByQueryUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/relations/info`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async findInfoByFromUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/relations/info{?fromId,fromType,relationTypeGroup}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async findInfoByToUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/relations/info{?relationTypeGroup,toId,toType}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteRelationsUsingDELETE(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/relations{?entityId,entityType}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async findByFromUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/relations{?fromId,fromType,relationType,relationTypeGroup}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async findByFromUsingGET_1(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/relations{?fromId,fromType,relationTypeGroup}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async findByToUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/relations{?relationType,relationTypeGroup,toId,toType}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async findByToUsingGET_1(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/relations{?relationTypeGroup,toId,toType}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getRelationUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/relation{?fromId,fromType,relationType,relationTypeGroup,toId,toType}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteRelationUsingDELETE(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/relation{?fromId,fromType,relationType,relationTypeGroup,toId,toType}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }}