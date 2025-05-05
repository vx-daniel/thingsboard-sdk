import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class AuthControllerClient extends BaseVXOlympusClient {  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.ObjectNode>}
   */
  async changePasswordWithData(data: schemas.ChangePasswordRequest, options: RequestInit = {}): Promise<schemas.ObjectNode> {
    const url = `${this.baseUrl}/api/auth/changePassword`;
    const response = await this.makeRequest<schemas.ObjectNode>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async logout(options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/auth/logout`;
    const response = await this.makeRequest<void>(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.User>}
   */
  async getUser(options: RequestInit = {}): Promise<schemas.User> {
    const url = `${this.baseUrl}/api/auth/user`;
    const response = await this.makeRequest<schemas.User>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.activateToken - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<string>}
   */
  async checkActivateToken(queryParams?: { activateToken?: string }, options: RequestInit = {}): Promise<string> {
    const url = `${this.baseUrl}/api/noauth/activate{?activateToken}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.activateToken !== undefined) params.set('activateToken', String(queryParams.activateToken));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<string>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {object} queryParams - Query parameters
   * @param {boolean} queryParams.sendActivationMail - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.JWT_Pair>}
   */
  async activateUserWithData(data: schemas.ActivateUserRequest, queryParams?: { sendActivationMail?: boolean }, options: RequestInit = {}): Promise<schemas.JWT_Pair> {
    const url = `${this.baseUrl}/api/noauth/activate{?sendActivationMail}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.sendActivationMail !== undefined) params.set('sendActivationMail', String(queryParams.sendActivationMail));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.JWT_Pair>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.JWT_Pair>}
   */
  async resetPasswordWithData(data: schemas.ResetPasswordRequest, options: RequestInit = {}): Promise<schemas.JWT_Pair> {
    const url = `${this.baseUrl}/api/noauth/resetPassword`;
    const response = await this.makeRequest<schemas.JWT_Pair>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async requestResetPasswordByEmailWithData(data: schemas.ResetPasswordEmailRequest, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/noauth/resetPasswordByEmail`;
    const response = await this.makeRequest<void>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.resetToken - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<string>}
   */
  async checkResetToken(queryParams?: { resetToken?: string }, options: RequestInit = {}): Promise<string> {
    const url = `${this.baseUrl}/api/noauth/resetPassword{?resetToken}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.resetToken !== undefined) params.set('resetToken', String(queryParams.resetToken));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<string>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.UserPasswordPolicy>}
   */
  async getUserPasswordPolicy(options: RequestInit = {}): Promise<schemas.UserPasswordPolicy> {
    const url = `${this.baseUrl}/api/noauth/userPasswordPolicy`;
    const response = await this.makeRequest<schemas.UserPasswordPolicy>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}