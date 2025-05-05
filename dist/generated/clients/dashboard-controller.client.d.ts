import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class DashboardControllerClient extends BaseVXOlympusClient {
    getCustomerHomeDashboardInfoUsingGET(options?: RequestInit): Promise<{
        hideDashboardToolbar: boolean;
        dashboardId?: any;
    }>;
    setCustomerHomeDashboardInfoUsingPOST(data: schemas.HomeDashboardInfo, options?: RequestInit): Promise<any>;
    getCustomerDashboardsUsingGET(customerId: string, pageSize: number, page: number, includeCustomers: boolean, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getHomeDashboardUsingGET(options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        image: string;
        hideDashboardToolbar: boolean;
        title: string;
        assignedCustomers: any[];
        mobileHide: boolean;
        mobileOrder: number;
        id?: any;
        tenantId?: any;
        customerId?: any;
        ownerId?: any;
        configuration?: any;
    }>;
    getHomeDashboardInfoUsingGET(options?: RequestInit): Promise<{
        hideDashboardToolbar: boolean;
        dashboardId?: any;
    }>;
    getDashboardInfoByIdUsingGET(dashboardId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        ownerName: string;
        groups: any[];
        image: string;
        title: string;
        assignedCustomers: any[];
        mobileHide: boolean;
        mobileOrder: number;
        id?: any;
        tenantId?: any;
        customerId?: any;
        ownerId?: any;
        configuration?: any;
    }>;
    getMaxDatapointsLimitUsingGET(options?: RequestInit): Promise<any>;
    getServerTimeUsingGET(options?: RequestInit): Promise<any>;
    deleteDashboardUsingDELETE(dashboardId: string, options?: RequestInit): Promise<any>;
    getDashboardByIdUsingGET(dashboardId: string, inlineImages: boolean, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        image: string;
        title: string;
        assignedCustomers: any[];
        mobileHide: boolean;
        mobileOrder: number;
        id?: any;
        tenantId?: any;
        customerId?: any;
        ownerId?: any;
        configuration?: any;
    }>;
    getAllDashboardsUsingGET(pageSize: number, page: number, includeCustomers: boolean, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getDashboardsByIdsUsingGET(dashboardIds: string, options?: RequestInit): Promise<any>;
    saveDashboardUsingPOST(entityGroupId: string, entityGroupIds: string, data: schemas.Dashboard, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        image: string;
        title: string;
        assignedCustomers: any[];
        mobileHide: boolean;
        mobileOrder: number;
        id?: any;
        tenantId?: any;
        customerId?: any;
        ownerId?: any;
        configuration?: any;
    }>;
    exportGroupDashboardsUsingGET(entityGroupId: string, limit: number, options?: RequestInit): Promise<any>;
    importGroupDashboardsUsingPOST(entityGroupId: string, overwrite: boolean, data: Array<schemas.Dashboard>, options?: RequestInit): Promise<any>;
    getDashboardsByEntityGroupIdUsingGET(entityGroupId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getTenantHomeDashboardInfoUsingGET(options?: RequestInit): Promise<{
        hideDashboardToolbar: boolean;
        dashboardId?: any;
    }>;
    setTenantHomeDashboardInfoUsingPOST(data: schemas.HomeDashboardInfo, options?: RequestInit): Promise<any>;
    getTenantDashboardsUsingGET(pageSize: number, page: number, mobile: boolean, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getTenantDashboardsUsingGET_1(tenantId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getUserDashboardsUsingGET(pageSize: number, page: number, mobile: boolean, textSearch: string, sortProperty: string, sortOrder: string, operation: string, userId: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
}
