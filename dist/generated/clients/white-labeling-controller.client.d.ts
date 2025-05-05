import { BaseVXOlympusClient } from '../../base-client';
export declare class WhiteLabelingControllerClient extends BaseVXOlympusClient {
    getLoginWhiteLabelParamsUsingGET(options?: RequestInit): Promise<unknown>;
    getCurrentLoginWhiteLabelParamsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getCurrentWhiteLabelParamsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    isCustomerWhiteLabelingAllowedUsingGET(options?: RequestInit): Promise<unknown>;
    isWhiteLabelingAllowedUsingGET(options?: RequestInit): Promise<unknown>;
    saveLoginWhiteLabelParamsUsingPOST(data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
    saveMailTemplatesUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getMailTemplatesUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    previewWhiteLabelParamsUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getWhiteLabelParamsUsingGET(options?: RequestInit): Promise<unknown>;
    saveWhiteLabelParamsUsingPOST(data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
}
