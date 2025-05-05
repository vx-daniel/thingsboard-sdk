import { BaseVXOlympusClient } from '../../base-client';
export declare class OAuth2ControllerClient extends BaseVXOlympusClient {
    getOAuth2ClientsUsingPOST(queryParams: any, options?: RequestInit): Promise<unknown>;
    getCurrentOAuth2InfoUsingGET(options?: RequestInit): Promise<unknown>;
    saveOAuth2InfoUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getLoginProcessingUrlUsingGET(options?: RequestInit): Promise<unknown>;
}
