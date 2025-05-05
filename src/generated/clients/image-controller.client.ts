import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class ImageControllerClient extends BaseVXOlympusClient {
  async uploadImageUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/image`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async importImageUsingPUT(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/image/import`;
    const response = await this.makeRequest(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async downloadPublicImageUsingGET(publicResourceKey: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/images/public/${encodeURIComponent(publicResourceKey)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async downloadImageUsingGET(type: string, key: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async updateImageUsingPUT(type: string, key: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}`;
    const response = await this.makeRequest(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async exportImageUsingGET(type: string, key: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}/export`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getImageInfoUsingGET(type: string, key: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}/info`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async updateImageInfoUsingPUT(type: string, key: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}/info`;
    const response = await this.makeRequest(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async downloadImagePreviewUsingGET(type: string, key: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}/preview`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async updateImagePublicStatusUsingPUT(type: string, key: string, isPublic: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}/public/${encodeURIComponent(isPublic)}`;
    const response = await this.makeRequest(url, {
      method: 'PUT',
      
      ...options,
    });
    return response;
  }

  async deleteImageUsingDELETE(type: string, key: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}{?force}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async getImagesUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/images{?includeSystemImages,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async downloadLoginFaviconUsingGET(type: string, key: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/noauth/whiteLabel/loginFavicon/${encodeURIComponent(type)}/${encodeURIComponent(key)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async downloadLoginLogoUsingGET(type: string, key: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/noauth/whiteLabel/loginLogo/${encodeURIComponent(type)}/${encodeURIComponent(key)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}