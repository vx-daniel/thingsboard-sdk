import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class TwoFactorAuthControllerClient extends BaseVXOlympusClient {
  async getAvailableTwoFaProvidersUsingGET_1(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/auth/2fa/providers`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async checkTwoFaVerificationCodeUsingPOST(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/auth/2fa/verification/check{?providerType,verificationCode}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async requestTwoFaVerificationCodeUsingPOST(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/auth/2fa/verification/send{?providerType}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }}