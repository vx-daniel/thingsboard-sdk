import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class CustomTranslationControllerClient extends BaseVXOlympusClient {  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.CustomTranslation>}
   */
  async getCurrentCustomTranslation(options: RequestInit = {}): Promise<schemas.CustomTranslation> {
    const url = `${this.baseUrl}/api/customTranslation/currentCustomTranslation`;
    const response = await this.makeRequest<schemas.CustomTranslation>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.CustomTranslation>}
   */
  async getCustomTranslation(options: RequestInit = {}): Promise<schemas.CustomTranslation> {
    const url = `${this.baseUrl}/api/customTranslation/customTranslation`;
    const response = await this.makeRequest<schemas.CustomTranslation>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.CustomTranslation>}
   */
  async saveCustomTranslationWithData(data: schemas.CustomTranslation, options: RequestInit = {}): Promise<schemas.CustomTranslation> {
    const url = `${this.baseUrl}/api/customTranslation/customTranslation`;
    const response = await this.makeRequest<schemas.CustomTranslation>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}