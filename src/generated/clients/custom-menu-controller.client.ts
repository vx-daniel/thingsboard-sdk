import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class CustomMenuControllerClient extends BaseVXOlympusClient {  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.CustomMenu>}
   */
  async getCurrentCustomMenu(options: RequestInit = {}): Promise<schemas.CustomMenu> {
    const url = `${this.baseUrl}/api/customMenu/currentCustomMenu`;
    const response = await this.makeRequest<schemas.CustomMenu>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.CustomMenu>}
   */
  async getCustomMenu(options: RequestInit = {}): Promise<schemas.CustomMenu> {
    const url = `${this.baseUrl}/api/customMenu/customMenu`;
    const response = await this.makeRequest<schemas.CustomMenu>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.CustomMenu>}
   */
  async saveCustomMenuWithData(data: schemas.CustomMenu, options: RequestInit = {}): Promise<schemas.CustomMenu> {
    const url = `${this.baseUrl}/api/customMenu/customMenu`;
    const response = await this.makeRequest<schemas.CustomMenu>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}