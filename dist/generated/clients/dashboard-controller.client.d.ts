import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class DashboardControllerClient extends BaseVXOlympusClient {
    getCustomerHomeDashboardInfo(options?: RequestInit): Promise<schemas.HomeDashboardInfo>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    setCustomerHomeDashboardInfoWithData(data: schemas.HomeDashboardInfo, options?: RequestInit): Promise<void>;
    /**
     * @param {string} customerId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {boolean} queryParams.includeCustomers - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_DashboardInfo>}
     */
    getCustomerDashboards(customerId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        includeCustomers?: boolean;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'title';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_DashboardInfo>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.HomeDashboard>}
     */
    getHomeDashboard(options?: RequestInit): Promise<schemas.HomeDashboard>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.HomeDashboardInfo>}
     */
    getHomeDashboardInfo(options?: RequestInit): Promise<schemas.HomeDashboardInfo>;
    /**
     * @param {string} dashboardId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DashboardInfo>}
     */
    getDashboardInfoById(dashboardId: string, options?: RequestInit): Promise<schemas.DashboardInfo>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<number>}
     */
    getMaxDatapointsLimit(options?: RequestInit): Promise<number>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<number>}
     */
    getServerTime(options?: RequestInit): Promise<number>;
    /**
     * @param {string} dashboardId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteDashboard(dashboardId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} dashboardId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.inlineImages - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Dashboard>}
     */
    getDashboardById(dashboardId: string, queryParams?: {
        inlineImages?: boolean;
    }, options?: RequestInit): Promise<schemas.Dashboard>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {boolean} queryParams.includeCustomers - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_DashboardInfo>}
     */
    getAllDashboards(queryParams?: {
        pageSize?: number;
        page?: number;
        includeCustomers?: boolean;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'title';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_DashboardInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.dashboardIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.DashboardInfo>>}
     */
    getDashboardsByIds(queryParams?: {
        dashboardIds?: string;
    }, options?: RequestInit): Promise<Array<schemas.DashboardInfo>>;
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.entityGroupId - Query parameter
     * @param {string} queryParams.entityGroupIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Dashboard>}
     */
    saveDashboardWithData(data: schemas.Dashboard, queryParams?: {
        entityGroupId?: string;
        entityGroupIds?: string;
    }, options?: RequestInit): Promise<schemas.Dashboard>;
    /**
     * @param {string} entityGroupId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.limit - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.Dashboard>>}
     */
    exportGroupDashboards(entityGroupId: string, queryParams?: {
        limit?: number;
    }, options?: RequestInit): Promise<Array<schemas.Dashboard>>;
    /**
     * @param {string} entityGroupId - Path parameter
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.overwrite - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    importGroupDashboardsWithData(entityGroupId: string, data: Array<schemas.Dashboard>, queryParams?: {
        overwrite?: boolean;
    }, options?: RequestInit): Promise<void>;
    /**
     * @param {string} entityGroupId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_DashboardInfo>}
     */
    getDashboardsByEntityGroupId(entityGroupId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'title';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_DashboardInfo>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.HomeDashboardInfo>}
     */
    getTenantHomeDashboardInfo(options?: RequestInit): Promise<schemas.HomeDashboardInfo>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    setTenantHomeDashboardInfoWithData(data: schemas.HomeDashboardInfo, options?: RequestInit): Promise<void>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {boolean} queryParams.mobile - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_DashboardInfo>}
     */
    getTenantDashboards(queryParams?: {
        pageSize?: number;
        page?: number;
        mobile?: boolean;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'title';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_DashboardInfo>;
    /**
     * @param {string} tenantId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_DashboardInfo>}
     */
    getTenantDashboardsUsingGET_1(tenantId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'title';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_DashboardInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {boolean} queryParams.mobile - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {string} queryParams.operation - Query parameter
     * @param {string} queryParams.userId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_DashboardInfo>}
     */
    getUserDashboards(queryParams?: {
        pageSize?: number;
        page?: number;
        mobile?: boolean;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'title';
        sortOrder?: 'ASC' | 'DESC';
        operation?: string;
        userId?: string;
    }, options?: RequestInit): Promise<schemas.PageData_Of_DashboardInfo>;
}
