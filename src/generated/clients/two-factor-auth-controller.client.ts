import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class TwoFactorAuthControllerClient extends BaseVXOlympusClient {  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.TwoFaProviderInfo>>}
   */
  async getAvailableTwoFaProvidersUsingGET_1(options: RequestInit = {}): Promise<Array<schemas.TwoFaProviderInfo>> {
    const url = `${this.baseUrl}/api/auth/2fa/providers`;
    const response = await this.makeRequest<Array<schemas.TwoFaProviderInfo>>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.providerType - Query parameter
   * @param {string} queryParams.verificationCode - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.JWT_Pair>}
   */
  async checkTwoFaVerificationCode(queryParams?: { providerType?: 'BACKUP_CODE' | 'EMAIL' | 'SMS' | 'TOTP'; verificationCode?: string }, options: RequestInit = {}): Promise<schemas.JWT_Pair> {
    const url = `${this.baseUrl}/api/auth/2fa/verification/check{?providerType,verificationCode}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.providerType !== undefined) params.set('providerType', String(queryParams.providerType));
      if (queryParams.verificationCode !== undefined) params.set('verificationCode', String(queryParams.verificationCode));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.JWT_Pair>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.providerType - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async requestTwoFaVerificationCode(queryParams?: { providerType?: 'BACKUP_CODE' | 'EMAIL' | 'SMS' | 'TOTP' }, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/auth/2fa/verification/send{?providerType}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.providerType !== undefined) params.set('providerType', String(queryParams.providerType));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<void>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      
      ...options,
    });
    return response;
  }}