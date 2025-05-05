import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class TenantProfileControllerClient extends BaseVXOlympusClient {
    saveTenantProfileUsingPOST(data: schemas.TenantProfile, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        default: boolean;
        description: string;
        isolatedTbRuleEngine: boolean;
        id?: any;
        profileData?: any;
    }>;
    getTenantProfileByIdUsingGET(tenantProfileId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        default: boolean;
        description: string;
        isolatedTbRuleEngine: boolean;
        id?: any;
        profileData?: any;
    }>;
    deleteTenantProfileUsingDELETE(tenantProfileId: string, options?: RequestInit): Promise<any>;
    setDefaultTenantProfileUsingPOST(tenantProfileId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        default: boolean;
        description: string;
        isolatedTbRuleEngine: boolean;
        id?: any;
        profileData?: any;
    }>;
    getDefaultTenantProfileInfoUsingGET(options?: RequestInit): Promise<{
        name: string;
        id?: any;
    }>;
    getTenantProfileInfoByIdUsingGET(tenantProfileId: string, options?: RequestInit): Promise<{
        name: string;
        id?: any;
    }>;
    getTenantProfileInfosUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getTenantProfilesByIdsUsingGET(ids: string, options?: RequestInit): Promise<any>;
    getTenantProfilesUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
}
