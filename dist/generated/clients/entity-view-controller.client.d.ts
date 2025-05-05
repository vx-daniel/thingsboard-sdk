import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class EntityViewControllerClient extends BaseVXOlympusClient {
    getCustomerEntityViewInfosUsingGET(customerId: string, pageSize: number, page: number, includeCustomers: boolean, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getCustomerEntityViewsUsingGET(customerId: string, pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEntityViewsByEntityGroupIdUsingGET(entityGroupId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEntityViewInfoByIdUsingGET(entityViewId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        ownerName: string;
        groups: any[];
        startTimeMs: number;
        endTimeMs: number;
        keys?: any;
        id?: any;
        tenantId?: any;
        customerId?: any;
        entityId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    getEntityViewTypesUsingGET(options?: RequestInit): Promise<any>;
    getEntityViewByIdUsingGET(entityViewId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        startTimeMs: number;
        endTimeMs: number;
        keys?: any;
        id?: any;
        tenantId?: any;
        customerId?: any;
        entityId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    deleteEntityViewUsingDELETE(entityViewId: string, options?: RequestInit): Promise<any>;
    getAllEntityViewInfosUsingGET(pageSize: number, page: number, includeCustomers: boolean, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    findByQueryUsingPOST_4(data: schemas.EntityViewSearchQuery, options?: RequestInit): Promise<any>;
    getEntityViewsByIdsUsingGET(entityViewIds: string, options?: RequestInit): Promise<any>;
    saveEntityViewUsingPOST(entityGroupId: string, entityGroupIds: string, data: schemas.EntityView, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        startTimeMs: number;
        endTimeMs: number;
        keys?: any;
        id?: any;
        tenantId?: any;
        customerId?: any;
        entityId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    getTenantEntityViewUsingGET(entityViewName: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        startTimeMs: number;
        endTimeMs: number;
        keys?: any;
        id?: any;
        tenantId?: any;
        customerId?: any;
        entityId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    getTenantEntityViewsUsingGET(pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getUserEntityViewsUsingGET(pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
}
