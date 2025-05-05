import { BaseVXOlympusClient } from '../../base-client';
export declare class EntityViewControllerClient extends BaseVXOlympusClient {
    getCustomerEntityViewInfosUsingGET(customerId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getCustomerEntityViewsUsingGET(customerId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getEntityViewsByEntityGroupIdUsingGET(entityGroupId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getEntityViewInfoByIdUsingGET(entityViewId: string, options?: RequestInit): Promise<unknown>;
    getEntityViewTypesUsingGET(options?: RequestInit): Promise<unknown>;
    getEntityViewByIdUsingGET(entityViewId: string, options?: RequestInit): Promise<unknown>;
    deleteEntityViewUsingDELETE(entityViewId: string, options?: RequestInit): Promise<unknown>;
    getAllEntityViewInfosUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    findByQueryUsingPOST_4(data: any, options?: RequestInit): Promise<unknown>;
    getEntityViewsByIdsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    saveEntityViewUsingPOST(data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
    getTenantEntityViewUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getTenantEntityViewsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getUserEntityViewsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
