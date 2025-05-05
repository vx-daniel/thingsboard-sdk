import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class WhiteLabelingControllerClient extends BaseVXOlympusClient {
  async getLoginWhiteLabelParamsUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/noauth/whiteLabel/loginWhiteLabelParams`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getCurrentLoginWhiteLabelParamsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/whiteLabel/currentLoginWhiteLabelParams{?customerId}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getCurrentWhiteLabelParamsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/whiteLabel/currentWhiteLabelParams{?customerId}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async isCustomerWhiteLabelingAllowedUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/whiteLabel/isCustomerWhiteLabelingAllowed`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async isWhiteLabelingAllowedUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/whiteLabel/isWhiteLabelingAllowed`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveLoginWhiteLabelParamsUsingPOST(data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/whiteLabel/loginWhiteLabelParams{?customerId}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async saveMailTemplatesUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/whiteLabel/mailTemplates`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getMailTemplatesUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/whiteLabel/mailTemplates{?systemByDefault}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async previewWhiteLabelParamsUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/whiteLabel/previewWhiteLabelParams`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getWhiteLabelParamsUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/whiteLabel/whiteLabelParams`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async saveWhiteLabelParamsUsingPOST(data: any, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/whiteLabel/whiteLabelParams{?customerId}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}