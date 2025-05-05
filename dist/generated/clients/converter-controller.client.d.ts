import { BaseVXOlympusClient } from '../../base-client';
export declare class ConverterControllerClient extends BaseVXOlympusClient {
    saveConverterUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    testDownLinkConverterUsingPOST(data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
    testUpLinkConverterUsingPOST(data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
    getConverterByIdUsingGET(converterId: string, options?: RequestInit): Promise<unknown>;
    deleteConverterUsingDELETE(converterId: string, options?: RequestInit): Promise<unknown>;
    getLatestConverterDebugInputUsingGET(converterId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getConvertersByIdsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getConvertersUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
