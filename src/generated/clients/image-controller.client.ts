import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class ImageControllerClient extends BaseVXOlympusClient {  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.TbResourceInfo>}
   */
  async uploadImageWithData(data: any, options: RequestInit = {}): Promise<schemas.TbResourceInfo> {
    const url = `${this.baseUrl}/api/image`;
    const response = await this.makeRequest<schemas.TbResourceInfo>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.TbResourceInfo>}
   */
  async importImageWithData(data: schemas.ImageExportData, options: RequestInit = {}): Promise<schemas.TbResourceInfo> {
    const url = `${this.baseUrl}/api/image/import`;
    const response = await this.makeRequest<schemas.TbResourceInfo>(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} publicResourceKey - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async downloadPublicImage(publicResourceKey: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/images/public/${encodeURIComponent(publicResourceKey)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} type - Path parameter
   * @param {string} key - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async downloadImage(type: 'system' | 'tenant', key: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} type - Path parameter
   * @param {string} key - Path parameter
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.TbResourceInfo>}
   */
  async updateImageWithData(type: 'system' | 'tenant', key: string, data: any, options: RequestInit = {}): Promise<schemas.TbResourceInfo> {
    const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}`;
    const response = await this.makeRequest<schemas.TbResourceInfo>(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} type - Path parameter
   * @param {string} key - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.ImageExportData>}
   */
  async exportImage(type: 'system' | 'tenant', key: string, options: RequestInit = {}): Promise<schemas.ImageExportData> {
    const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}/export`;
    const response = await this.makeRequest<schemas.ImageExportData>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} type - Path parameter
   * @param {string} key - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.TbResourceInfo>}
   */
  async getImageInfo(type: 'system' | 'tenant', key: string, options: RequestInit = {}): Promise<schemas.TbResourceInfo> {
    const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}/info`;
    const response = await this.makeRequest<schemas.TbResourceInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} type - Path parameter
   * @param {string} key - Path parameter
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.TbResourceInfo>}
   */
  async updateImageInfoWithData(type: 'system' | 'tenant', key: string, data: schemas.TbResourceInfo, options: RequestInit = {}): Promise<schemas.TbResourceInfo> {
    const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}/info`;
    const response = await this.makeRequest<schemas.TbResourceInfo>(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} type - Path parameter
   * @param {string} key - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async downloadImagePreview(type: 'system' | 'tenant', key: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}/preview`;
    const response = await this.makeRequest<void>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} type - Path parameter
   * @param {string} key - Path parameter
   * @param {string} isPublic - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.TbResourceInfo>}
   */
  async updateImagePublicStatus(type: 'system' | 'tenant', key: string, isPublic: string, options: RequestInit = {}): Promise<schemas.TbResourceInfo> {
    const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}/public/${encodeURIComponent(isPublic)}`;
    const response = await this.makeRequest<schemas.TbResourceInfo>(url, {
      method: 'PUT',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} type - Path parameter
   * @param {string} key - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {boolean} queryParams.force - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.TbImageDeleteResult>}
   */
  async deleteImage(type: 'system' | 'tenant', key: string, queryParams?: { force?: boolean }, options: RequestInit = {}): Promise<schemas.TbImageDeleteResult> {
    const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}{?force}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.force !== undefined) params.set('force', String(queryParams.force));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.TbImageDeleteResult>(url + (queryString ? `?${queryString}` : ''), {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {integer} queryParams.pageSize - Query parameter
   * @param {integer} queryParams.page - Query parameter
   * @param {boolean} queryParams.includeSystemImages - Query parameter
   * @param {string} queryParams.textSearch - Query parameter
   * @param {string} queryParams.sortProperty - Query parameter
   * @param {string} queryParams.sortOrder - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PageData_Of_TbResourceInfo>}
   */
  async getImages(queryParams?: { pageSize?: number; page?: number; includeSystemImages?: boolean; textSearch?: string; sortProperty?: 'createdTime' | 'resourceType' | 'tenantId' | 'title'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_TbResourceInfo> {
    const url = `${this.baseUrl}/api/images{?includeSystemImages,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.includeSystemImages !== undefined) params.set('includeSystemImages', String(queryParams.includeSystemImages));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_TbResourceInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} type - Path parameter
   * @param {string} key - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async downloadLoginFavicon(type: string, key: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/noauth/whiteLabel/loginFavicon/${encodeURIComponent(type)}/${encodeURIComponent(key)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} type - Path parameter
   * @param {string} key - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async downloadLoginLogo(type: string, key: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/noauth/whiteLabel/loginLogo/${encodeURIComponent(type)}/${encodeURIComponent(key)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}