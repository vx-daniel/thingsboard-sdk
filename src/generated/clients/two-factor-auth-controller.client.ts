import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class TwoFactorAuthControllerClient extends BaseVXOlympusClient {
  async getAvailableTwoFaProvidersUsingGET_1(options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/auth/2fa/providers`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  }

  async checkTwoFaVerificationCodeUsingPOST(providerType: string, verificationCode: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/auth/2fa/verification/check{?providerType,verificationCode}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (providerType !== undefined) searchParams.append('providerType', String(providerType));
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
    return schemas.JWT_PairSchemaSchema.parse(responseData);
  }

  async requestTwoFaVerificationCodeUsingPOST(providerType: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/auth/2fa/verification/send{?providerType}`, this.baseURL);
    
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
    return responseData;
  }}