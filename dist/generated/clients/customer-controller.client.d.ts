import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class CustomerControllerClient extends BaseVXOlympusClient {
    getCustomerInfoByIdUsingGET(customerId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        email: string;
        ownerName: string;
        groups: any[];
        address: string;
        address2: string;
        city: string;
        country: string;
        phone: string;
        state: string;
        zip: string;
        title: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        parentCustomerId?: any;
    }>;
    getCustomerByIdUsingGET(customerId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        email: string;
        address: string;
        address2: string;
        city: string;
        country: string;
        phone: string;
        state: string;
        zip: string;
        title: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        parentCustomerId?: any;
    }>;
    deleteCustomerUsingDELETE(customerId: string, options?: RequestInit): Promise<any>;
    getCustomerCustomerInfosUsingGET(customerId: string, pageSize: number, page: number, includeCustomers: boolean, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getShortCustomerInfoByIdUsingGET(customerId: string, options?: RequestInit): Promise<{}>;
    getCustomerTitleByIdUsingGET(customerId: string, options?: RequestInit): Promise<any>;
    getAllCustomerInfosUsingGET(pageSize: number, page: number, includeCustomers: boolean, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getCustomersByIdsUsingGET(customerIds: string, options?: RequestInit): Promise<any>;
    getCustomersUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    saveCustomerUsingPOST(entityGroupId: string, entityGroupIds: string, data: schemas.Customer, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        email: string;
        address: string;
        address2: string;
        city: string;
        country: string;
        phone: string;
        state: string;
        zip: string;
        title: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        parentCustomerId?: any;
    }>;
    getCustomersByEntityGroupIdUsingGET(entityGroupId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getTenantCustomerUsingGET(customerTitle: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        email: string;
        address: string;
        address2: string;
        city: string;
        country: string;
        phone: string;
        state: string;
        zip: string;
        title: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        parentCustomerId?: any;
    }>;
    getUserCustomersUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
}
