import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class OtaPackageControllerClient extends BaseVXOlympusClient {
  async saveOtaPackageInfoUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/otaPackage`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getOtaPackageInfoByIdUsingGET(otaPackageId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/otaPackage/info/${encodeURIComponent(otaPackageId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getOtaPackageByIdUsingGET(otaPackageId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/otaPackage/${encodeURIComponent(otaPackageId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveOtaPackageDataUsingPOST(otaPackageId: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/otaPackage/${encodeURIComponent(otaPackageId)}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async deleteOtaPackageUsingDELETE(otaPackageId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/otaPackage/${encodeURIComponent(otaPackageId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async downloadOtaPackageUsingGET(otaPackageId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/otaPackage/${encodeURIComponent(otaPackageId)}/download`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getGroupOtaPackagesUsingGET(groupId: string, type: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/otaPackages/group/${encodeURIComponent(groupId)}/${encodeURIComponent(type)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getOtaPackagesUsingGET_1(deviceProfileId: string, type: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/otaPackages/${encodeURIComponent(deviceProfileId)}/${encodeURIComponent(type)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getOtaPackagesUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/otaPackages{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}