import { BaseVXOlympusClient } from '../../base-client';
export declare class CustomMenuControllerClient extends BaseVXOlympusClient {
    getCurrentCustomMenuUsingGET(options?: RequestInit): Promise<unknown>;
    getCustomMenuUsingGET(options?: RequestInit): Promise<unknown>;
    saveCustomMenuUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
}
