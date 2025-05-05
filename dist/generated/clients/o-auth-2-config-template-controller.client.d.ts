import { BaseVXOlympusClient } from '../../base-client';
export declare class OAuth2ConfigTemplateControllerClient extends BaseVXOlympusClient {
    getClientRegistrationTemplatesUsingGET_1(options?: RequestInit): Promise<unknown>;
    saveClientRegistrationTemplateUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    deleteClientRegistrationTemplateUsingDELETE(clientRegistrationTemplateId: string, options?: RequestInit): Promise<unknown>;
}
