import { BaseVXOlympusClient } from '../../base-client';
export declare class AssetControllerClient extends BaseVXOlympusClient {
    processAssetBulkImportUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getAssetInfoByIdUsingGET(assetId: string, options?: RequestInit): Promise<unknown>;
    getAssetTypesUsingGET(options?: RequestInit): Promise<unknown>;
    getAssetByIdUsingGET(assetId: string, options?: RequestInit): Promise<unknown>;
    deleteAssetUsingDELETE(assetId: string, options?: RequestInit): Promise<unknown>;
    getAllAssetInfosUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    findByQueryUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getAssetsByIdsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    saveAssetUsingPOST(data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
    getCustomerAssetInfosUsingGET(customerId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getCustomerAssetsUsingGET(customerId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getAssetsByEntityGroupIdUsingGET(entityGroupId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getTenantAssetUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getTenantAssetsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getUserAssetsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
