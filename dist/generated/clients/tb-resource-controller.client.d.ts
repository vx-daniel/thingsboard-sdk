import { BaseVXOlympusClient } from '../../base-client';
export declare class TbResourceControllerClient extends BaseVXOlympusClient {
    saveResourceUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getResourceInfoByIdUsingGET(resourceId: string, options?: RequestInit): Promise<unknown>;
    downloadJksResourceIfChangedUsingGET(resourceId: string, options?: RequestInit): Promise<unknown>;
    downloadJsResourceIfChangedUsingGET(resourceId: string, options?: RequestInit): Promise<unknown>;
    getLwm2mListObjectsPageUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    downloadLwm2mResourceIfChangedUsingGET(resourceId: string, options?: RequestInit): Promise<unknown>;
    getLwm2mListObjectsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    downloadPkcs12ResourceIfChangedUsingGET(resourceId: string, options?: RequestInit): Promise<unknown>;
    getTenantResourcesUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    deleteResourceUsingDELETE(resourceId: string, options?: RequestInit): Promise<unknown>;
    downloadResourceUsingGET(resourceId: string, options?: RequestInit): Promise<unknown>;
    getResourcesUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
