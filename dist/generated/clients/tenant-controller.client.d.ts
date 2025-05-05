import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class TenantControllerClient extends BaseVXOlympusClient {
    saveTenantUsingPOST(data: schemas.Tenant, options?: RequestInit): Promise<{
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
        region: string;
        id?: any;
        additionalInfo?: any;
        tenantProfileId?: any;
    }>;
    getTenantInfoByIdUsingGET(tenantId: string, options?: RequestInit): Promise<{
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
        region: string;
        tenantProfileName: string;
        id?: any;
        additionalInfo?: any;
        tenantProfileId?: any;
    }>;
    getTenantByIdUsingGET(tenantId: string, options?: RequestInit): Promise<{
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
        region: string;
        id?: any;
        additionalInfo?: any;
        tenantProfileId?: any;
    }>;
    deleteTenantUsingDELETE(tenantId: string, options?: RequestInit): Promise<any>;
    getTenantInfosUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getTenantsUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getTenantsByIdsUsingGET(tenantIds: string, options?: RequestInit): Promise<any>;
}
