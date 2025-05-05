import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class TwoFactorAuthConfigControllerClient extends BaseVXOlympusClient {
  async generateTwoFaAccountConfigUsingPOST(providerType: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/2fa/account/config/generate{?providerType}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (providerType !== undefined) searchParams.append('providerType', String(providerType));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.TwoFaAccountConfigSchemaSchema.parse(responseData);
  }

  async submitTwoFaAccountConfigUsingPOST(data: schemas.TwoFaAccountConfig, options?: RequestInit) {
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

    const url = new URL(`/api/2fa/account/config/submit`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  }

  async updateTwoFaAccountConfigUsingPUT(providerType: string, data: schemas.TwoFaAccountConfigUpdateRequest, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    config.body = JSON.stringify(data);

    const url = new URL(`/api/2fa/account/config{?providerType}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (providerType !== undefined) searchParams.append('providerType', String(providerType));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.AccountTwoFaSettingsSchemaSchema.parse(responseData);
  }

  async deleteTwoFaAccountConfigUsingDELETE(providerType: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/2fa/account/config{?providerType}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (providerType !== undefined) searchParams.append('providerType', String(providerType));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.AccountTwoFaSettingsSchemaSchema.parse(responseData);
  }

  async verifyAndSaveTwoFaAccountConfigUsingPOST(verificationCode: string, data: schemas.TwoFaAccountConfig, options?: RequestInit) {
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

    const url = new URL(`/api/2fa/account/config{?verificationCode}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (verificationCode !== undefined) searchParams.append('verificationCode', String(verificationCode));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.AccountTwoFaSettingsSchemaSchema.parse(responseData);
  }

  async getAccountTwoFaSettingsUsingGET(options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/2fa/account/settings`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.AccountTwoFaSettingsSchemaSchema.parse(responseData);
  }

  async getAvailableTwoFaProvidersUsingGET(options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/2fa/providers`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  }

  async getPlatformTwoFaSettingsUsingGET(options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/2fa/settings`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.PlatformTwoFaSettingsSchemaSchema.parse(responseData);
  }

  async savePlatformTwoFaSettingsUsingPOST(data: schemas.PlatformTwoFaSettings, options?: RequestInit) {
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

    const url = new URL(`/api/2fa/settings`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.PlatformTwoFaSettingsSchemaSchema.parse(responseData);
  }}