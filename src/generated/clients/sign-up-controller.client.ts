import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class SignUpControllerClient extends BaseVXOlympusClient {
  async activateUserByEmailCodeUsingPOST(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/noauth/activateByEmailCode{?emailCode,pkgName}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async activateEmailUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/noauth/activateEmail{?emailCode,pkgName}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async mobileLoginUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/noauth/login{?pkgName}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async resendEmailActivationUsingPOST(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/noauth/resendEmailActivation{?email,pkgName}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async signUpUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/noauth/signup`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async acceptPrivacyPolicyUsingPOST(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/signup/acceptPrivacyPolicy`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async acceptTermsOfUseUsingPOST(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/signup/acceptTermsOfUse`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async privacyPolicyAcceptedUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/signup/privacyPolicyAccepted`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async termsOfUseAcceptedUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/signup/termsOfUseAccepted`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}