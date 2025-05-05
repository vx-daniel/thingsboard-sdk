import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class AuthControllerClient extends BaseVXOlympusClient {
  async changePasswordUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/auth/changePassword`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async logoutUsingPOST(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/auth/logout`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async getUserUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/auth/user`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async checkActivateTokenUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/noauth/activate{?activateToken}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async activateUserUsingPOST(data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/noauth/activate{?sendActivationMail}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async resetPasswordUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/noauth/resetPassword`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async requestResetPasswordByEmailUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/noauth/resetPasswordByEmail`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async checkResetTokenUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/noauth/resetPassword{?resetToken}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getUserPasswordPolicyUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/noauth/userPasswordPolicy`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}