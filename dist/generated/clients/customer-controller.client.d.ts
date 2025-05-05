import { BaseVXOlympusClient } from '../../base-client';
export declare class CustomerControllerClient extends BaseVXOlympusClient {
    getCustomerInfoByIdUsingGET(customerId: string, options?: RequestInit): Promise<unknown>;
    getCustomerByIdUsingGET(customerId: string, options?: RequestInit): Promise<unknown>;
    deleteCustomerUsingDELETE(customerId: string, options?: RequestInit): Promise<unknown>;
    getCustomerCustomerInfosUsingGET(customerId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getShortCustomerInfoByIdUsingGET(customerId: string, options?: RequestInit): Promise<unknown>;
    getCustomerTitleByIdUsingGET(customerId: string, options?: RequestInit): Promise<unknown>;
    getAllCustomerInfosUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getCustomersByIdsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getCustomersUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    saveCustomerUsingPOST(data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
    getCustomersByEntityGroupIdUsingGET(entityGroupId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getTenantCustomerUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getUserCustomersUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
