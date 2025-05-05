import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class SelfRegistrationControllerClient extends BaseVXOlympusClient {
  async getPrivacyPolicyUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/noauth/selfRegistration/privacyPolicy`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getSignUpSelfRegistrationParamsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/noauth/selfRegistration/signUpSelfRegistrationParams{?pkgName}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getTermsOfUseUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/noauth/selfRegistration/termsOfUse`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getSelfRegistrationParamsUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/selfRegistration/selfRegistrationParams`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveSelfRegistrationParamsUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/selfRegistration/selfRegistrationParams`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async deleteSelfRegistrationParamsUsingDELETE(domainName: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/selfRegistration/selfRegistrationParams/${encodeURIComponent(domainName)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }}