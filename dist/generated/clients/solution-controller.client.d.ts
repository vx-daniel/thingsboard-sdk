import { BaseVXOlympusClient } from '../../base-client';
export declare class SolutionControllerClient extends BaseVXOlympusClient {
    getSolutionTemplateDetailsUsingGET(solutionTemplateId: string, options?: RequestInit): Promise<unknown>;
    getSolutionTemplateInfosUsingGET(options?: RequestInit): Promise<unknown>;
    getSolutionTemplateInstructionsUsingGET(solutionTemplateId: string, options?: RequestInit): Promise<unknown>;
    uninstallSolutionTemplateUsingDELETE(solutionTemplateId: string, options?: RequestInit): Promise<unknown>;
    installSolutionTemplateUsingPOST(solutionTemplateId: string, options?: RequestInit): Promise<unknown>;
}
