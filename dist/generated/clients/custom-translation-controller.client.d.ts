import { BaseVXOlympusClient } from '../../base-client';
export declare class CustomTranslationControllerClient extends BaseVXOlympusClient {
    getCurrentCustomTranslationUsingGET(options?: RequestInit): Promise<unknown>;
    getCustomTranslationUsingGET(options?: RequestInit): Promise<unknown>;
    saveCustomTranslationUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
}
