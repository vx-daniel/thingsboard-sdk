import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class OtaPackageControllerClient extends BaseVXOlympusClient {  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.OtaPackageInfo>}
   */
  async saveOtaPackageInfoWithData(data: schemas.SaveOtaPackageInfoRequest, options: RequestInit = {}): Promise<schemas.OtaPackageInfo> {
    const url = `${this.baseUrl}/api/otaPackage`;
    const response = await this.makeRequest<schemas.OtaPackageInfo>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} otaPackageId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.OtaPackageInfo>}
   */
  async getOtaPackageInfoById(otaPackageId: string, options: RequestInit = {}): Promise<schemas.OtaPackageInfo> {
    const url = `${this.baseUrl}/api/otaPackage/info/${encodeURIComponent(otaPackageId)}`;
    const response = await this.makeRequest<schemas.OtaPackageInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} otaPackageId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.OtaPackage>}
   */
  async getOtaPackageById(otaPackageId: string, options: RequestInit = {}): Promise<schemas.OtaPackage> {
    const url = `${this.baseUrl}/api/otaPackage/${encodeURIComponent(otaPackageId)}`;
    const response = await this.makeRequest<schemas.OtaPackage>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} otaPackageId - Path parameter
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.OtaPackageInfo>}
   */
  async saveOtaPackageDataWithData(otaPackageId: string, data: any, options: RequestInit = {}): Promise<schemas.OtaPackageInfo> {
    const url = `${this.baseUrl}/api/otaPackage/${encodeURIComponent(otaPackageId)}`;
    const response = await this.makeRequest<schemas.OtaPackageInfo>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} otaPackageId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteOtaPackage(otaPackageId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/otaPackage/${encodeURIComponent(otaPackageId)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} otaPackageId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.Resource>}
   */
  async downloadOtaPackage(otaPackageId: string, options: RequestInit = {}): Promise<schemas.Resource> {
    const url = `${this.baseUrl}/api/otaPackage/${encodeURIComponent(otaPackageId)}/download`;
    const response = await this.makeRequest<schemas.Resource>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} groupId - Path parameter
   * @param {string} type - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_OtaPackageInfo>}
   */
  async getGroupOtaPackages(groupId: string, type: 'FIRMWARE' | 'SOFTWARE', queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'checksum' | 'createdTime' | 'dataSize' | 'fileName' | 'tag' | 'title' | 'type' | 'url' | 'version'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_OtaPackageInfo> {
    const url = `${this.baseUrl}/api/otaPackages/group/${encodeURIComponent(groupId)}/${encodeURIComponent(type)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_OtaPackageInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} deviceProfileId - Path parameter
   * @param {string} type - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_OtaPackageInfo>}
   */
  async getOtaPackagesUsingGET_1(deviceProfileId: string, type: 'FIRMWARE' | 'SOFTWARE', queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'checksum' | 'createdTime' | 'dataSize' | 'fileName' | 'tag' | 'title' | 'type' | 'url' | 'version'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_OtaPackageInfo> {
    const url = `${this.baseUrl}/api/otaPackages/${encodeURIComponent(deviceProfileId)}/${encodeURIComponent(type)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_OtaPackageInfo>(url + (queryString ? `?${queryString}` : ''), {
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
   * @returns {Promise<schemas.PageData_Of_OtaPackageInfo>}
   */
  async getOtaPackages(queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'checksum' | 'createdTime' | 'dataSize' | 'fileName' | 'tag' | 'title' | 'type' | 'url' | 'version'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_OtaPackageInfo> {
    const url = `${this.baseUrl}/api/otaPackages{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_OtaPackageInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}