import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class TwoFactorAuthConfigControllerClient extends BaseVXOlympusClient {
  async generateTwoFaAccountConfigUsingPOST(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/2fa/account/config/generate{?providerType}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async submitTwoFaAccountConfigUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/2fa/account/config/submit`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async updateTwoFaAccountConfigUsingPUT(data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/2fa/account/config{?providerType}`;
    const response = await this.makeRequest(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async deleteTwoFaAccountConfigUsingDELETE(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/2fa/account/config{?providerType}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async verifyAndSaveTwoFaAccountConfigUsingPOST(data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/2fa/account/config{?verificationCode}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getAccountTwoFaSettingsUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/2fa/account/settings`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getAvailableTwoFaProvidersUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/2fa/providers`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getPlatformTwoFaSettingsUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/2fa/settings`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async savePlatformTwoFaSettingsUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/2fa/settings`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}