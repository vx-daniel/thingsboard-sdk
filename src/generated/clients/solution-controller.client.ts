import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class SolutionControllerClient extends BaseVXOlympusClient {
  async getSolutionTemplateDetailsUsingGET(solutionTemplateId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/solutions/templates/details/${encodeURIComponent(solutionTemplateId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getSolutionTemplateInfosUsingGET(options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/solutions/templates/infos`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getSolutionTemplateInstructionsUsingGET(solutionTemplateId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/solutions/templates/instructions/${encodeURIComponent(solutionTemplateId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async uninstallSolutionTemplateUsingDELETE(solutionTemplateId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/solutions/templates/${encodeURIComponent(solutionTemplateId)}/delete`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async installSolutionTemplateUsingPOST(solutionTemplateId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/solutions/templates/${encodeURIComponent(solutionTemplateId)}/install`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }}