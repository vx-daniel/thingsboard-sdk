"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolutionControllerClient = void 0;
const base_client_1 = require("../../base-client");
class SolutionControllerClient extends base_client_1.BaseVXOlympusClient {
    async getSolutionTemplateDetails(solutionTemplateId, options = {}) {
        const url = `${this.baseUrl}/api/solutions/templates/details/${encodeURIComponent(solutionTemplateId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.TenantSolutionTemplateInfo>>}
     */
    async getSolutionTemplateInfos(options = {}) {
        const url = `${this.baseUrl}/api/solutions/templates/infos`;
        const response = await this.makeRequest(url, {
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
    async getSolutionTemplateInstructions(solutionTemplateId, options = {}) {
        const url = `${this.baseUrl}/api/solutions/templates/instructions/${encodeURIComponent(solutionTemplateId)}`;
        const response = await this.makeRequest(url, {
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
    async uninstallSolutionTemplate(solutionTemplateId, options = {}) {
        const url = `${this.baseUrl}/api/solutions/templates/${encodeURIComponent(solutionTemplateId)}/delete`;
        const response = await this.makeRequest(url, {
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
    async installSolutionTemplate(solutionTemplateId, options = {}) {
        const url = `${this.baseUrl}/api/solutions/templates/${encodeURIComponent(solutionTemplateId)}/install`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
}
exports.SolutionControllerClient = SolutionControllerClient;
