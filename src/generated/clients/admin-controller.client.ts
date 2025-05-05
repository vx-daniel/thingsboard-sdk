import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class AdminControllerClient extends BaseVXOlympusClient {
  async getAutoCommitSettingsUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/autoCommitSettings`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveAutoCommitSettingsUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/autoCommitSettings`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async deleteAutoCommitSettingsUsingDELETE(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/autoCommitSettings`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async autoCommitSettingsExistsUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/autoCommitSettings/exists`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getFeaturesInfoUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/featuresInfo`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getJwtSettingsUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/jwtSettings`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveJwtSettingsUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/jwtSettings`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getLicenseUsageInfoUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/licenseUsageInfo`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getAuthorizationUrlUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/mail/oauth2/authorize`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async codeProcessingUrlUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/mail/oauth2/code{?code,state}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getMailProcessingUrlUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/mail/oauth2/loginProcessingUrl`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getRepositorySettingsUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/repositorySettings`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveRepositorySettingsUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/repositorySettings`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async deleteRepositorySettingsUsingDELETE(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/repositorySettings`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async checkRepositoryAccessUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/repositorySettings/checkAccess`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async repositorySettingsExistsUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/repositorySettings/exists`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getRepositorySettingsInfoUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/repositorySettings/info`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getSecuritySettingsUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/securitySettings`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveSecuritySettingsUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/securitySettings`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async saveAdminSettingsUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/settings`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async sendTestMailUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/settings/testMail`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async sendTestSmsUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/settings/testSms`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getAdminSettingsUsingGET(key: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/settings/${encodeURIComponent(key)}{?systemByDefault}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getSystemInfoUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/systemInfo`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async checkUpdatesUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/admin/updates`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}