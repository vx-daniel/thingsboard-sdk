"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolutionControllerClient = void 0;
const base_client_1 = require("../../base-client");
class SolutionControllerClient extends base_client_1.BaseVXOlympusClient {
    async getSolutionTemplateDetailsUsingGET(solutionTemplateId, options = {}) {
        const url = `${this.baseUrl}/api/solutions/templates/details/${encodeURIComponent(solutionTemplateId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getSolutionTemplateInfosUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/solutions/templates/infos`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getSolutionTemplateInstructionsUsingGET(solutionTemplateId, options = {}) {
        const url = `${this.baseUrl}/api/solutions/templates/instructions/${encodeURIComponent(solutionTemplateId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async uninstallSolutionTemplateUsingDELETE(solutionTemplateId, options = {}) {
        const url = `${this.baseUrl}/api/solutions/templates/${encodeURIComponent(solutionTemplateId)}/delete`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async installSolutionTemplateUsingPOST(solutionTemplateId, options = {}) {
        const url = `${this.baseUrl}/api/solutions/templates/${encodeURIComponent(solutionTemplateId)}/install`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
}
exports.SolutionControllerClient = SolutionControllerClient;
