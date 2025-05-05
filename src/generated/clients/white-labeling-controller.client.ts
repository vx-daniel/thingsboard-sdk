import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class WhiteLabelingControllerClient extends BaseVXOlympusClient {  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.LoginWhiteLabelingParams>}
   */
  async getLoginWhiteLabelParams(options: RequestInit = {}): Promise<schemas.LoginWhiteLabelingParams> {
    const url = `${this.baseUrl}/api/noauth/whiteLabel/loginWhiteLabelParams`;
    const response = await this.makeRequest<schemas.LoginWhiteLabelingParams>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.customerId - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.LoginWhiteLabelingParams>}
   */
  async getCurrentLoginWhiteLabelParams(queryParams?: { customerId?: string }, options: RequestInit = {}): Promise<schemas.LoginWhiteLabelingParams> {
    const url = `${this.baseUrl}/api/whiteLabel/currentLoginWhiteLabelParams{?customerId}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.customerId !== undefined) params.set('customerId', String(queryParams.customerId));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.LoginWhiteLabelingParams>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.customerId - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.WhiteLabelingParams>}
   */
  async getCurrentWhiteLabelParams(queryParams?: { customerId?: string }, options: RequestInit = {}): Promise<schemas.WhiteLabelingParams> {
    const url = `${this.baseUrl}/api/whiteLabel/currentWhiteLabelParams{?customerId}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.customerId !== undefined) params.set('customerId', String(queryParams.customerId));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.WhiteLabelingParams>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<boolean>}
   */
  async isCustomerWhiteLabelingAllowed(options: RequestInit = {}): Promise<boolean> {
    const url = `${this.baseUrl}/api/whiteLabel/isCustomerWhiteLabelingAllowed`;
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
  async isWhiteLabelingAllowed(options: RequestInit = {}): Promise<boolean> {
    const url = `${this.baseUrl}/api/whiteLabel/isWhiteLabelingAllowed`;
    const response = await this.makeRequest<boolean>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.customerId - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.LoginWhiteLabelingParams>}
   */
  async saveLoginWhiteLabelParamsWithData(data: schemas.LoginWhiteLabelingParams, queryParams?: { customerId?: string }, options: RequestInit = {}): Promise<schemas.LoginWhiteLabelingParams> {
    const url = `${this.baseUrl}/api/whiteLabel/loginWhiteLabelParams{?customerId}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.customerId !== undefined) params.set('customerId', String(queryParams.customerId));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.LoginWhiteLabelingParams>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.JsonNode>}
   */
  async saveMailTemplatesWithData(data: schemas.JsonNode, options: RequestInit = {}): Promise<schemas.JsonNode> {
    const url = `${this.baseUrl}/api/whiteLabel/mailTemplates`;
    const response = await this.makeRequest<schemas.JsonNode>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {boolean} queryParams.systemByDefault - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.JsonNode>}
   */
  async getMailTemplates(queryParams?: { systemByDefault?: boolean }, options: RequestInit = {}): Promise<schemas.JsonNode> {
    const url = `${this.baseUrl}/api/whiteLabel/mailTemplates{?systemByDefault}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.systemByDefault !== undefined) params.set('systemByDefault', String(queryParams.systemByDefault));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.JsonNode>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.WhiteLabelingParams>}
   */
  async previewWhiteLabelParamsWithData(data: schemas.WhiteLabelingParams, options: RequestInit = {}): Promise<schemas.WhiteLabelingParams> {
    const url = `${this.baseUrl}/api/whiteLabel/previewWhiteLabelParams`;
    const response = await this.makeRequest<schemas.WhiteLabelingParams>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.WhiteLabelingParams>}
   */
  async getWhiteLabelParams(options: RequestInit = {}): Promise<schemas.WhiteLabelingParams> {
    const url = `${this.baseUrl}/api/whiteLabel/whiteLabelParams`;
    const response = await this.makeRequest<schemas.WhiteLabelingParams>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.customerId - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.WhiteLabelingParams>}
   */
  async saveWhiteLabelParamsWithData(data: schemas.WhiteLabelingParams, queryParams?: { customerId?: string }, options: RequestInit = {}): Promise<schemas.WhiteLabelingParams> {
    const url = `${this.baseUrl}/api/whiteLabel/whiteLabelParams{?customerId}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.customerId !== undefined) params.set('customerId', String(queryParams.customerId));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.WhiteLabelingParams>(url + (queryString ? `?${queryString}` : ''), {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}