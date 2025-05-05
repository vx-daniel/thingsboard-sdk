import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class TwoFactorAuthConfigControllerClient extends BaseVXOlympusClient {  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.providerType - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.TwoFaAccountConfig>}
   */
  async generateTwoFaAccountConfig(queryParams?: { providerType?: 'BACKUP_CODE' | 'EMAIL' | 'SMS' | 'TOTP' }, options: RequestInit = {}): Promise<schemas.TwoFaAccountConfig> {
    const url = `${this.baseUrl}/api/2fa/account/config/generate{?providerType}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.providerType !== undefined) params.set('providerType', String(queryParams.providerType));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.TwoFaAccountConfig>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async submitTwoFaAccountConfigWithData(data: schemas.TwoFaAccountConfig, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/2fa/account/config/submit`;
    const response = await this.makeRequest<void>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.providerType - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.AccountTwoFaSettings>}
   */
  async updateTwoFaAccountConfigWithData(data: schemas.TwoFaAccountConfigUpdateRequest, queryParams?: { providerType?: 'BACKUP_CODE' | 'EMAIL' | 'SMS' | 'TOTP' }, options: RequestInit = {}): Promise<schemas.AccountTwoFaSettings> {
    const url = `${this.baseUrl}/api/2fa/account/config{?providerType}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.providerType !== undefined) params.set('providerType', String(queryParams.providerType));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.AccountTwoFaSettings>(url + (queryString ? `?${queryString}` : ''), {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.providerType - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.AccountTwoFaSettings>}
   */
  async deleteTwoFaAccountConfig(queryParams?: { providerType?: 'BACKUP_CODE' | 'EMAIL' | 'SMS' | 'TOTP' }, options: RequestInit = {}): Promise<schemas.AccountTwoFaSettings> {
    const url = `${this.baseUrl}/api/2fa/account/config{?providerType}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.providerType !== undefined) params.set('providerType', String(queryParams.providerType));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.AccountTwoFaSettings>(url + (queryString ? `?${queryString}` : ''), {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.verificationCode - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.AccountTwoFaSettings>}
   */
  async verifyAndSaveTwoFaAccountConfigWithData(data: schemas.TwoFaAccountConfig, queryParams?: { verificationCode?: string }, options: RequestInit = {}): Promise<schemas.AccountTwoFaSettings> {
    const url = `${this.baseUrl}/api/2fa/account/config{?verificationCode}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.verificationCode !== undefined) params.set('verificationCode', String(queryParams.verificationCode));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.AccountTwoFaSettings>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.AccountTwoFaSettings>}
   */
  async getAccountTwoFaSettings(options: RequestInit = {}): Promise<schemas.AccountTwoFaSettings> {
    const url = `${this.baseUrl}/api/2fa/account/settings`;
    const response = await this.makeRequest<schemas.AccountTwoFaSettings>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<string>>}
   */
  async getAvailableTwoFaProviders(options: RequestInit = {}): Promise<Array<string>> {
    const url = `${this.baseUrl}/api/2fa/providers`;
    const response = await this.makeRequest<Array<string>>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PlatformTwoFaSettings>}
   */
  async getPlatformTwoFaSettings(options: RequestInit = {}): Promise<schemas.PlatformTwoFaSettings> {
    const url = `${this.baseUrl}/api/2fa/settings`;
    const response = await this.makeRequest<schemas.PlatformTwoFaSettings>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.PlatformTwoFaSettings>}
   */
  async savePlatformTwoFaSettingsWithData(data: schemas.PlatformTwoFaSettings, options: RequestInit = {}): Promise<schemas.PlatformTwoFaSettings> {
    const url = `${this.baseUrl}/api/2fa/settings`;
    const response = await this.makeRequest<schemas.PlatformTwoFaSettings>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}