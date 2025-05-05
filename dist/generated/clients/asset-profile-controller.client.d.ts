import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class AssetProfileControllerClient extends BaseVXOlympusClient {
    saveAssetProfileUsingPOST(data: schemas.AssetProfile, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        default: boolean;
        defaultQueueName: string;
        description: string;
        image: string;
        id?: any;
        tenantId?: any;
        defaultDashboardId?: any;
        defaultRuleChainId?: any;
        defaultEdgeRuleChainId?: any;
    }>;
    getAssetProfileNamesUsingGET(activeOnly: boolean, options?: RequestInit): Promise<any>;
    deleteAssetProfileUsingDELETE(assetProfileId: string, options?: RequestInit): Promise<any>;
    setDefaultAssetProfileUsingPOST(assetProfileId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        default: boolean;
        defaultQueueName: string;
        description: string;
        image: string;
        id?: any;
        tenantId?: any;
        defaultDashboardId?: any;
        defaultRuleChainId?: any;
        defaultEdgeRuleChainId?: any;
    }>;
    getAssetProfileByIdUsingGET(assetProfileId: string, inlineImages: boolean, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        default: boolean;
        defaultQueueName: string;
        description: string;
        image: string;
        id?: any;
        tenantId?: any;
        defaultDashboardId?: any;
        defaultRuleChainId?: any;
        defaultEdgeRuleChainId?: any;
    }>;
    getDefaultAssetProfileInfoUsingGET(options?: RequestInit): Promise<{
        name: string;
        image: string;
        id?: any;
        tenantId?: any;
        defaultDashboardId?: any;
    }>;
    getAssetProfileInfoByIdUsingGET(assetProfileId: string, options?: RequestInit): Promise<{
        name: string;
        image: string;
        id?: any;
        tenantId?: any;
        defaultDashboardId?: any;
    }>;
    getAssetProfilesByIdsUsingGET(assetProfileIds: string, options?: RequestInit): Promise<any>;
    getAssetProfileInfosUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getAssetProfilesUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
}
