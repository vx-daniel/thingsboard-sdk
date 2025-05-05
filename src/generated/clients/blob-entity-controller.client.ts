import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class BlobEntityControllerClient extends BaseVXOlympusClient {
  async getBlobEntitiesByIdsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/blobEntities{?blobEntityIds}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getBlobEntitiesUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/blobEntities{?endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch,type}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getBlobEntityInfoByIdUsingGET(blobEntityId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/blobEntity/info/${encodeURIComponent(blobEntityId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteBlobEntityUsingDELETE(blobEntityId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/blobEntity/${encodeURIComponent(blobEntityId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async downloadBlobEntityUsingGET(blobEntityId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/blobEntity/${encodeURIComponent(blobEntityId)}/download`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}