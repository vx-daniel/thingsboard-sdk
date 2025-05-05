import { BaseVXOlympusClient } from '../../base-client';
export declare class AssetProfileControllerClient extends BaseVXOlympusClient {
    saveAssetProfileUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getAssetProfileNamesUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    deleteAssetProfileUsingDELETE(assetProfileId: string, options?: RequestInit): Promise<unknown>;
    setDefaultAssetProfileUsingPOST(assetProfileId: string, options?: RequestInit): Promise<unknown>;
    getAssetProfileByIdUsingGET(assetProfileId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getDefaultAssetProfileInfoUsingGET(options?: RequestInit): Promise<unknown>;
    getAssetProfileInfoByIdUsingGET(assetProfileId: string, options?: RequestInit): Promise<unknown>;
    getAssetProfilesByIdsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getAssetProfileInfosUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getAssetProfilesUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
