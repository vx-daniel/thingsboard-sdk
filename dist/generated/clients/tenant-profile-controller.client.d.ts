import { BaseVXOlympusClient } from '../../base-client';
export declare class TenantProfileControllerClient extends BaseVXOlympusClient {
    saveTenantProfileUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getTenantProfileByIdUsingGET(tenantProfileId: string, options?: RequestInit): Promise<unknown>;
    deleteTenantProfileUsingDELETE(tenantProfileId: string, options?: RequestInit): Promise<unknown>;
    setDefaultTenantProfileUsingPOST(tenantProfileId: string, options?: RequestInit): Promise<unknown>;
    getDefaultTenantProfileInfoUsingGET(options?: RequestInit): Promise<unknown>;
    getTenantProfileInfoByIdUsingGET(tenantProfileId: string, options?: RequestInit): Promise<unknown>;
    getTenantProfileInfosUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getTenantProfilesByIdsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getTenantProfilesUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
