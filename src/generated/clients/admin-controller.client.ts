import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class AdminControllerClient extends BaseVXOlympusClient {  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Record<string, schemas.AutoVersionCreateConfig>>}
   */
  async getAutoCommitSettings(options: RequestInit = {}): Promise<Record<string, schemas.AutoVersionCreateConfig>> {
    const url = `${this.baseUrl}/api/admin/autoCommitSettings`;
    const response = await this.makeRequest<Record<string, schemas.AutoVersionCreateConfig>>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Record<string, schemas.AutoVersionCreateConfig>>}
   */
  async saveAutoCommitSettingsWithData(data: Record<string, schemas.AutoVersionCreateConfig>, options: RequestInit = {}): Promise<Record<string, schemas.AutoVersionCreateConfig>> {
    const url = `${this.baseUrl}/api/admin/autoCommitSettings`;
    const response = await this.makeRequest<Record<string, schemas.AutoVersionCreateConfig>>(url, {
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
  async deleteAutoCommitSettings(options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/admin/autoCommitSettings`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<boolean>}
   */
  async autoCommitSettingsExists(options: RequestInit = {}): Promise<boolean> {
    const url = `${this.baseUrl}/api/admin/autoCommitSettings/exists`;
    const response = await this.makeRequest<boolean>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.FeaturesInfo>}
   */
  async getFeaturesInfo(options: RequestInit = {}): Promise<schemas.FeaturesInfo> {
    const url = `${this.baseUrl}/api/admin/featuresInfo`;
    const response = await this.makeRequest<schemas.FeaturesInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.JWT_Settings>}
   */
  async getJwtSettings(options: RequestInit = {}): Promise<schemas.JWT_Settings> {
    const url = `${this.baseUrl}/api/admin/jwtSettings`;
    const response = await this.makeRequest<schemas.JWT_Settings>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.JWT_Pair>}
   */
  async saveJwtSettingsWithData(data: schemas.JWT_Settings, options: RequestInit = {}): Promise<schemas.JWT_Pair> {
    const url = `${this.baseUrl}/api/admin/jwtSettings`;
    const response = await this.makeRequest<schemas.JWT_Pair>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.LicenseUsageInfo>}
   */
  async getLicenseUsageInfo(options: RequestInit = {}): Promise<schemas.LicenseUsageInfo> {
    const url = `${this.baseUrl}/api/admin/licenseUsageInfo`;
    const response = await this.makeRequest<schemas.LicenseUsageInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async getAuthorizationUrl(options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/admin/mail/oauth2/authorize`;
    const response = await this.makeRequest<void>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.code - Query parameter
   * @param {string} queryParams.state - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async codeProcessingUrl(queryParams?: { code?: string; state?: string }, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/admin/mail/oauth2/code{?code,state}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.code !== undefined) params.set('code', String(queryParams.code));
      if (queryParams.state !== undefined) params.set('state', String(queryParams.state));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<void>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<string>}
   */
  async getMailProcessingUrl(options: RequestInit = {}): Promise<string> {
    const url = `${this.baseUrl}/api/admin/mail/oauth2/loginProcessingUrl`;
    const response = await this.makeRequest<string>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.RepositorySettings>}
   */
  async getRepositorySettings(options: RequestInit = {}): Promise<schemas.RepositorySettings> {
    const url = `${this.baseUrl}/api/admin/repositorySettings`;
    const response = await this.makeRequest<schemas.RepositorySettings>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_RepositorySettings>}
   */
  async saveRepositorySettingsWithData(data: schemas.RepositorySettings, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_RepositorySettings> {
    const url = `${this.baseUrl}/api/admin/repositorySettings`;
    const response = await this.makeRequest<schemas.DeferredResult_Of_RepositorySettings>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_Void>}
   */
  async deleteRepositorySettings(options: RequestInit = {}): Promise<schemas.DeferredResult_Of_Void> {
    const url = `${this.baseUrl}/api/admin/repositorySettings`;
    const response = await this.makeRequest<schemas.DeferredResult_Of_Void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_Void>}
   */
  async checkRepositoryAccessWithData(data: schemas.RepositorySettings, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_Void> {
    const url = `${this.baseUrl}/api/admin/repositorySettings/checkAccess`;
    const response = await this.makeRequest<schemas.DeferredResult_Of_Void>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<boolean>}
   */
  async repositorySettingsExists(options: RequestInit = {}): Promise<boolean> {
    const url = `${this.baseUrl}/api/admin/repositorySettings/exists`;
    const response = await this.makeRequest<boolean>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.RepositorySettingsInfo>}
   */
  async getRepositorySettingsInfo(options: RequestInit = {}): Promise<schemas.RepositorySettingsInfo> {
    const url = `${this.baseUrl}/api/admin/repositorySettings/info`;
    const response = await this.makeRequest<schemas.RepositorySettingsInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.SecuritySettings>}
   */
  async getSecuritySettings(options: RequestInit = {}): Promise<schemas.SecuritySettings> {
    const url = `${this.baseUrl}/api/admin/securitySettings`;
    const response = await this.makeRequest<schemas.SecuritySettings>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.SecuritySettings>}
   */
  async saveSecuritySettingsWithData(data: schemas.SecuritySettings, options: RequestInit = {}): Promise<schemas.SecuritySettings> {
    const url = `${this.baseUrl}/api/admin/securitySettings`;
    const response = await this.makeRequest<schemas.SecuritySettings>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.AdminSettings>}
   */
  async saveAdminSettingsWithData(data: schemas.AdminSettings, options: RequestInit = {}): Promise<schemas.AdminSettings> {
    const url = `${this.baseUrl}/api/admin/settings`;
    const response = await this.makeRequest<schemas.AdminSettings>(url, {
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
  async sendTestMailWithData(data: schemas.AdminSettings, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/admin/settings/testMail`;
    const response = await this.makeRequest<void>(url, {
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
  async sendTestSmsWithData(data: schemas.TestSmsRequest, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/admin/settings/testSms`;
    const response = await this.makeRequest<void>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} key - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {boolean} queryParams.systemByDefault - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.AdminSettings>}
   */
  async getAdminSettings(key: string, queryParams?: { systemByDefault?: boolean }, options: RequestInit = {}): Promise<schemas.AdminSettings> {
    const url = `${this.baseUrl}/api/admin/settings/${encodeURIComponent(key)}{?systemByDefault}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.systemByDefault !== undefined) params.set('systemByDefault', String(queryParams.systemByDefault));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.AdminSettings>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.SystemInfo>}
   */
  async getSystemInfo(options: RequestInit = {}): Promise<schemas.SystemInfo> {
    const url = `${this.baseUrl}/api/admin/systemInfo`;
    const response = await this.makeRequest<schemas.SystemInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.UpdateMessage>}
   */
  async checkUpdates(options: RequestInit = {}): Promise<schemas.UpdateMessage> {
    const url = `${this.baseUrl}/api/admin/updates`;
    const response = await this.makeRequest<schemas.UpdateMessage>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}