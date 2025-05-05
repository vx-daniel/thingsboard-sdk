import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class SolutionControllerClient extends BaseVXOlympusClient {  /**
   * @param {string} solutionTemplateId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.TenantSolutionTemplateDetails>}
   */
  async getSolutionTemplateDetails(solutionTemplateId: string, options: RequestInit = {}): Promise<schemas.TenantSolutionTemplateDetails> {
    const url = `${this.baseUrl}/api/solutions/templates/details/${encodeURIComponent(solutionTemplateId)}`;
    const response = await this.makeRequest<schemas.TenantSolutionTemplateDetails>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.TenantSolutionTemplateInfo>>}
   */
  async getSolutionTemplateInfos(options: RequestInit = {}): Promise<Array<schemas.TenantSolutionTemplateInfo>> {
    const url = `${this.baseUrl}/api/solutions/templates/infos`;
    const response = await this.makeRequest<Array<schemas.TenantSolutionTemplateInfo>>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} solutionTemplateId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.TenantSolutionTemplateInstructions>}
   */
  async getSolutionTemplateInstructions(solutionTemplateId: string, options: RequestInit = {}): Promise<schemas.TenantSolutionTemplateInstructions> {
    const url = `${this.baseUrl}/api/solutions/templates/instructions/${encodeURIComponent(solutionTemplateId)}`;
    const response = await this.makeRequest<schemas.TenantSolutionTemplateInstructions>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} solutionTemplateId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async uninstallSolutionTemplate(solutionTemplateId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/solutions/templates/${encodeURIComponent(solutionTemplateId)}/delete`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} solutionTemplateId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.SolutionInstallResponse>}
   */
  async installSolutionTemplate(solutionTemplateId: string, options: RequestInit = {}): Promise<schemas.SolutionInstallResponse> {
    const url = `${this.baseUrl}/api/solutions/templates/${encodeURIComponent(solutionTemplateId)}/install`;
    const response = await this.makeRequest<schemas.SolutionInstallResponse>(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }}