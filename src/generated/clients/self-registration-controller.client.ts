import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class SelfRegistrationControllerClient extends BaseVXOlympusClient {  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<string>}
   */
  async getPrivacyPolicy(options: RequestInit = {}): Promise<string> {
    const url = `${this.baseUrl}/api/noauth/selfRegistration/privacyPolicy`;
    const response = await this.makeRequest<string>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.pkgName - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.SignUpSelfRegistrationParams>}
   */
  async getSignUpSelfRegistrationParams(queryParams?: { pkgName?: string }, options: RequestInit = {}): Promise<schemas.SignUpSelfRegistrationParams> {
    const url = `${this.baseUrl}/api/noauth/selfRegistration/signUpSelfRegistrationParams{?pkgName}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pkgName !== undefined) params.set('pkgName', String(queryParams.pkgName));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.SignUpSelfRegistrationParams>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<string>}
   */
  async getTermsOfUse(options: RequestInit = {}): Promise<string> {
    const url = `${this.baseUrl}/api/noauth/selfRegistration/termsOfUse`;
    const response = await this.makeRequest<string>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.SelfRegistrationParams>}
   */
  async getSelfRegistrationParams(options: RequestInit = {}): Promise<schemas.SelfRegistrationParams> {
    const url = `${this.baseUrl}/api/selfRegistration/selfRegistrationParams`;
    const response = await this.makeRequest<schemas.SelfRegistrationParams>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.SelfRegistrationParams>}
   */
  async saveSelfRegistrationParamsWithData(data: schemas.SelfRegistrationParams, options: RequestInit = {}): Promise<schemas.SelfRegistrationParams> {
    const url = `${this.baseUrl}/api/selfRegistration/selfRegistrationParams`;
    const response = await this.makeRequest<schemas.SelfRegistrationParams>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} domainName - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
   */
  async deleteSelfRegistrationParams(domainName: string, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_ResponseEntity> {
    const url = `${this.baseUrl}/api/selfRegistration/selfRegistrationParams/${encodeURIComponent(domainName)}`;
    const response = await this.makeRequest<schemas.DeferredResult_Of_ResponseEntity>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }}