import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class AssetProfileControllerClient extends BaseVXOlympusClient {
  async saveAssetProfileUsingPOST(data: schemas.AssetProfile, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    config.body = JSON.stringify(data);

    const url = new URL(`/api/assetProfile`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.AssetProfileSchemaSchema.parse(responseData);
  }

  async getAssetProfileNamesUsingGET(activeOnly: boolean, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/assetProfile/names{?activeOnly}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (activeOnly !== undefined) searchParams.append('activeOnly', String(activeOnly));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  }

  async deleteAssetProfileUsingDELETE(assetProfileId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/assetProfile/${encodeURIComponent(assetProfileId)}`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  }

  async setDefaultAssetProfileUsingPOST(assetProfileId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/assetProfile/${encodeURIComponent(assetProfileId)}/default`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.AssetProfileSchemaSchema.parse(responseData);
  }

  async getAssetProfileByIdUsingGET(assetProfileId: string, inlineImages: boolean, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/assetProfile/${encodeURIComponent(assetProfileId)}{?inlineImages}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (inlineImages !== undefined) searchParams.append('inlineImages', String(inlineImages));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.AssetProfileSchemaSchema.parse(responseData);
  }

  async getDefaultAssetProfileInfoUsingGET(options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/assetProfileInfo/default`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.AssetProfileInfoSchemaSchema.parse(responseData);
  }

  async getAssetProfileInfoByIdUsingGET(assetProfileId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/assetProfileInfo/${encodeURIComponent(assetProfileId)}`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.AssetProfileInfoSchemaSchema.parse(responseData);
  }

  async getAssetProfilesByIdsUsingGET(assetProfileIds: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/assetProfileInfos{?assetProfileIds}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (assetProfileIds !== undefined) searchParams.append('assetProfileIds', String(assetProfileIds));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  }

  async getAssetProfileInfosUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/assetProfileInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (pageSize !== undefined) searchParams.append('pageSize', String(pageSize));
    if (page !== undefined) searchParams.append('page', String(page));
    if (textSearch !== undefined) searchParams.append('textSearch', String(textSearch));
    if (sortProperty !== undefined) searchParams.append('sortProperty', String(sortProperty));
    if (sortOrder !== undefined) searchParams.append('sortOrder', String(sortOrder));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.PageData_Of_AssetProfileInfoSchemaSchema.parse(responseData);
  }

  async getAssetProfilesUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/assetProfiles{?page,pageSize,sortOrder,sortProperty,textSearch}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (pageSize !== undefined) searchParams.append('pageSize', String(pageSize));
    if (page !== undefined) searchParams.append('page', String(page));
    if (textSearch !== undefined) searchParams.append('textSearch', String(textSearch));
    if (sortProperty !== undefined) searchParams.append('sortProperty', String(sortProperty));
    if (sortOrder !== undefined) searchParams.append('sortOrder', String(sortOrder));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.PageData_Of_AssetProfileSchemaSchema.parse(responseData);
  }}