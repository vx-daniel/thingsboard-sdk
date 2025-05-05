import { BaseVXOlympusClient } from '../../base-client';
export declare class TenantControllerClient extends BaseVXOlympusClient {
    saveTenantUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getTenantInfoByIdUsingGET(tenantId: string, options?: RequestInit): Promise<unknown>;
    getTenantByIdUsingGET(tenantId: string, options?: RequestInit): Promise<unknown>;
    deleteTenantUsingDELETE(tenantId: string, options?: RequestInit): Promise<unknown>;
    getTenantInfosUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getTenantsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getTenantsByIdsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
