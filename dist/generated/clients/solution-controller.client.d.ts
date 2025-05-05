import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class SolutionControllerClient extends BaseVXOlympusClient {
    getSolutionTemplateDetails(solutionTemplateId: string, options?: RequestInit): Promise<schemas.TenantSolutionTemplateDetails>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.TenantSolutionTemplateInfo>>}
     */
    getSolutionTemplateInfos(options?: RequestInit): Promise<Array<schemas.TenantSolutionTemplateInfo>>;
    /**
     * @param {string} solutionTemplateId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.TenantSolutionTemplateInstructions>}
     */
    getSolutionTemplateInstructions(solutionTemplateId: string, options?: RequestInit): Promise<schemas.TenantSolutionTemplateInstructions>;
    /**
     * @param {string} solutionTemplateId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    uninstallSolutionTemplate(solutionTemplateId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} solutionTemplateId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.SolutionInstallResponse>}
     */
    installSolutionTemplate(solutionTemplateId: string, options?: RequestInit): Promise<schemas.SolutionInstallResponse>;
}
