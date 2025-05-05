import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class AssetControllerClient extends BaseVXOlympusClient {
    processAssetBulkImportUsingPOST(data: schemas.BulkImportRequest, options?: RequestInit): Promise<{
        errorsList: string[];
        created?: any;
        errors?: any;
        updated?: any;
    }>;
    getAssetInfoByIdUsingGET(assetId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        ownerName: string;
        groups: any[];
        id?: any;
        tenantId?: any;
        customerId?: any;
        assetProfileId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    getAssetTypesUsingGET(options?: RequestInit): Promise<any>;
    getAssetByIdUsingGET(assetId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        assetProfileId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    deleteAssetUsingDELETE(assetId: string, options?: RequestInit): Promise<any>;
    getAllAssetInfosUsingGET(pageSize: number, page: number, includeCustomers: boolean, assetProfileId: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    findByQueryUsingPOST(data: schemas.AssetSearchQuery, options?: RequestInit): Promise<any>;
    getAssetsByIdsUsingGET(assetIds: string, options?: RequestInit): Promise<any>;
    saveAssetUsingPOST(entityGroupId: string, entityGroupIds: string, data: schemas.Asset, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        assetProfileId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    getCustomerAssetInfosUsingGET(customerId: string, pageSize: number, page: number, includeCustomers: boolean, assetProfileId: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getCustomerAssetsUsingGET(customerId: string, pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getAssetsByEntityGroupIdUsingGET(entityGroupId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getTenantAssetUsingGET(assetName: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        assetProfileId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    getTenantAssetsUsingGET(pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getUserAssetsUsingGET(pageSize: number, page: number, type: string, assetProfileId: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
}
