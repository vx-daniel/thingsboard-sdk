import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class DeviceProfileControllerClient extends BaseVXOlympusClient {
  async saveDeviceProfileUsingPOST(data: schemas.DeviceProfile, options?: RequestInit) {
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

    const url = new URL(`/api/deviceProfile`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeviceProfileSchemaSchema.parse(responseData);
  }

  async getAttributesKeysUsingGET(deviceProfileId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/deviceProfile/devices/keys/attributes{?deviceProfileId}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (deviceProfileId !== undefined) searchParams.append('deviceProfileId', String(deviceProfileId));
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

  async getTimeseriesKeysUsingGET(deviceProfileId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/deviceProfile/devices/keys/timeseries{?deviceProfileId}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (deviceProfileId !== undefined) searchParams.append('deviceProfileId', String(deviceProfileId));
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

  async getDeviceProfileNamesUsingGET(activeOnly: boolean, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/deviceProfile/names{?activeOnly}`, this.baseURL);
    
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

  async deleteDeviceProfileUsingDELETE(deviceProfileId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/deviceProfile/${encodeURIComponent(deviceProfileId)}`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  }

  async setDefaultDeviceProfileUsingPOST(deviceProfileId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/deviceProfile/${encodeURIComponent(deviceProfileId)}/default`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeviceProfileSchemaSchema.parse(responseData);
  }

  async getDeviceProfileByIdUsingGET(deviceProfileId: string, inlineImages: boolean, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/deviceProfile/${encodeURIComponent(deviceProfileId)}{?inlineImages}`, this.baseURL);
    
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
    return schemas.DeviceProfileSchemaSchema.parse(responseData);
  }

  async getDefaultDeviceProfileInfoUsingGET(options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/deviceProfileInfo/default`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeviceProfileInfoSchemaSchema.parse(responseData);
  }

  async getDeviceProfileInfoByIdUsingGET(deviceProfileId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/deviceProfileInfo/${encodeURIComponent(deviceProfileId)}`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeviceProfileInfoSchemaSchema.parse(responseData);
  }

  async getDeviceProfilesByIdsUsingGET(deviceProfileIds: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/deviceProfileInfos{?deviceProfileIds}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (deviceProfileIds !== undefined) searchParams.append('deviceProfileIds', String(deviceProfileIds));
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

  async getDeviceProfileInfosUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, transportType: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/deviceProfileInfos{?page,pageSize,sortOrder,sortProperty,textSearch,transportType}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (pageSize !== undefined) searchParams.append('pageSize', String(pageSize));
    if (page !== undefined) searchParams.append('page', String(page));
    if (textSearch !== undefined) searchParams.append('textSearch', String(textSearch));
    if (sortProperty !== undefined) searchParams.append('sortProperty', String(sortProperty));
    if (sortOrder !== undefined) searchParams.append('sortOrder', String(sortOrder));
    if (transportType !== undefined) searchParams.append('transportType', String(transportType));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.PageData_Of_DeviceProfileInfoSchemaSchema.parse(responseData);
  }

  async getDeviceProfilesUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/deviceProfiles{?page,pageSize,sortOrder,sortProperty,textSearch}`, this.baseURL);
    
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
    return schemas.PageData_Of_DeviceProfileSchemaSchema.parse(responseData);
  }}