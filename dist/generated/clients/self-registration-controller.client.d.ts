import { BaseVXOlympusClient } from '../../base-client';
export declare class SelfRegistrationControllerClient extends BaseVXOlympusClient {
    getPrivacyPolicyUsingGET(options?: RequestInit): Promise<unknown>;
    getSignUpSelfRegistrationParamsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getTermsOfUseUsingGET(options?: RequestInit): Promise<unknown>;
    getSelfRegistrationParamsUsingGET(options?: RequestInit): Promise<unknown>;
    saveSelfRegistrationParamsUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    deleteSelfRegistrationParamsUsingDELETE(domainName: string, options?: RequestInit): Promise<unknown>;
}
