import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class EntitiesVersionControlControllerClient extends BaseVXOlympusClient {
  async listBranchesUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entities/vc/branches`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async compareEntityDataToVersionUsingGET(entityType: string, internalEntityUuid: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entities/vc/diff/${encodeURIComponent(entityType)}/${encodeURIComponent(internalEntityUuid)}{?versionId}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async loadEntitiesVersionUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entities/vc/entity`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async listEntitiesAtVersionUsingGET(entityType: string, versionId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entities/vc/entity/${encodeURIComponent(entityType)}/${encodeURIComponent(versionId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getVersionLoadRequestStatusUsingGET(requestId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entities/vc/entity/${encodeURIComponent(requestId)}/status`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async listAllEntitiesAtVersionUsingGET(versionId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entities/vc/entity/${encodeURIComponent(versionId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getEntityDataInfoUsingGET(versionId: string, entityType: string, externalEntityUuid: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entities/vc/info/${encodeURIComponent(versionId)}/${encodeURIComponent(entityType)}/${encodeURIComponent(externalEntityUuid)}{?internalEntityId}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveEntitiesVersionUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entities/vc/version`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async listEntityVersionsUsingGET(entityType: string, externalEntityUuid: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entities/vc/version/${encodeURIComponent(entityType)}/${encodeURIComponent(externalEntityUuid)}?sortProperty=timestamp{&branch,internalEntityId,page,pageSize,sortOrder,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async listEntityTypeVersionsUsingGET(entityType: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entities/vc/version/${encodeURIComponent(entityType)}?sortProperty=timestamp{&branch,page,pageSize,sortOrder,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getVersionCreateRequestStatusUsingGET(requestId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entities/vc/version/${encodeURIComponent(requestId)}/status`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async listVersionsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entities/vc/version?sortProperty=timestamp{&branch,page,pageSize,sortOrder,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}