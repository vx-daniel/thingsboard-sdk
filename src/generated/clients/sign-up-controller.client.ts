import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class SignUpControllerClient extends BaseVXOlympusClient {  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.emailCode - Query parameter
   * @param {string} queryParams.pkgName - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.JWT_Pair>}
   */
  async activateUserByEmailCode(queryParams?: { emailCode?: string; pkgName?: string }, options: RequestInit = {}): Promise<schemas.JWT_Pair> {
    const url = `${this.baseUrl}/api/noauth/activateByEmailCode{?emailCode,pkgName}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.emailCode !== undefined) params.set('emailCode', String(queryParams.emailCode));
      if (queryParams.pkgName !== undefined) params.set('pkgName', String(queryParams.pkgName));
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
   * @param {string} queryParams.emailCode - Query parameter
   * @param {string} queryParams.pkgName - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<string>}
   */
  async activateEmail(queryParams?: { emailCode?: string; pkgName?: string }, options: RequestInit = {}): Promise<string> {
    const url = `${this.baseUrl}/api/noauth/activateEmail{?emailCode,pkgName}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.emailCode !== undefined) params.set('emailCode', String(queryParams.emailCode));
      if (queryParams.pkgName !== undefined) params.set('pkgName', String(queryParams.pkgName));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<string>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.pkgName - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<string>}
   */
  async mobileLogin(queryParams?: { pkgName?: string }, options: RequestInit = {}): Promise<string> {
    const url = `${this.baseUrl}/api/noauth/login{?pkgName}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pkgName !== undefined) params.set('pkgName', String(queryParams.pkgName));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<string>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.email - Query parameter
   * @param {string} queryParams.pkgName - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async resendEmailActivation(queryParams?: { email?: string; pkgName?: string }, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/noauth/resendEmailActivation{?email,pkgName}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.email !== undefined) params.set('email', String(queryParams.email));
      if (queryParams.pkgName !== undefined) params.set('pkgName', String(queryParams.pkgName));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<void>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<string>}
   */
  async signUpWithData(data: schemas.SignUpRequest, options: RequestInit = {}): Promise<string> {
    const url = `${this.baseUrl}/api/noauth/signup`;
    const response = await this.makeRequest<string>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.JsonNode>}
   */
  async acceptPrivacyPolicy(options: RequestInit = {}): Promise<schemas.JsonNode> {
    const url = `${this.baseUrl}/api/signup/acceptPrivacyPolicy`;
    const response = await this.makeRequest<schemas.JsonNode>(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.JsonNode>}
   */
  async acceptTermsOfUse(options: RequestInit = {}): Promise<schemas.JsonNode> {
    const url = `${this.baseUrl}/api/signup/acceptTermsOfUse`;
    const response = await this.makeRequest<schemas.JsonNode>(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<boolean>}
   */
  async privacyPolicyAccepted(options: RequestInit = {}): Promise<boolean> {
    const url = `${this.baseUrl}/api/signup/privacyPolicyAccepted`;
    const response = await this.makeRequest<boolean>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<boolean>}
   */
  async termsOfUseAccepted(options: RequestInit = {}): Promise<boolean> {
    const url = `${this.baseUrl}/api/signup/termsOfUseAccepted`;
    const response = await this.makeRequest<boolean>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}