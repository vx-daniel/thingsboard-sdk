import { BaseVXOlympusClient } from '../../base-client';
export declare class DashboardControllerClient extends BaseVXOlympusClient {
    getCustomerHomeDashboardInfoUsingGET(options?: RequestInit): Promise<unknown>;
    setCustomerHomeDashboardInfoUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getCustomerDashboardsUsingGET(customerId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getHomeDashboardUsingGET(options?: RequestInit): Promise<unknown>;
    getHomeDashboardInfoUsingGET(options?: RequestInit): Promise<unknown>;
    getDashboardInfoByIdUsingGET(dashboardId: string, options?: RequestInit): Promise<unknown>;
    getMaxDatapointsLimitUsingGET(options?: RequestInit): Promise<unknown>;
    getServerTimeUsingGET(options?: RequestInit): Promise<unknown>;
    deleteDashboardUsingDELETE(dashboardId: string, options?: RequestInit): Promise<unknown>;
    getDashboardByIdUsingGET(dashboardId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getAllDashboardsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getDashboardsByIdsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    saveDashboardUsingPOST(data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
    exportGroupDashboardsUsingGET(entityGroupId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    importGroupDashboardsUsingPOST(entityGroupId: string, data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
    getDashboardsByEntityGroupIdUsingGET(entityGroupId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getTenantHomeDashboardInfoUsingGET(options?: RequestInit): Promise<unknown>;
    setTenantHomeDashboardInfoUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getTenantDashboardsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getTenantDashboardsUsingGET_1(tenantId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getUserDashboardsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
