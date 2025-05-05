import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class TenantControllerClient extends BaseVXOlympusClient {
    saveTenantWithData(data: schemas.Tenant, options?: RequestInit): Promise<schemas.Tenant>;
    /**
     * @param {string} tenantId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.TenantInfo>}
     */
    getTenantInfoById(tenantId: string, options?: RequestInit): Promise<schemas.TenantInfo>;
    /**
     * @param {string} tenantId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Tenant>}
     */
    getTenantById(tenantId: string, options?: RequestInit): Promise<schemas.Tenant>;
    /**
     * @param {string} tenantId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteTenant(tenantId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_TenantInfo>}
     */
    getTenantInfos(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'address' | 'address2' | 'city' | 'country' | 'createdTime' | 'email' | 'phone' | 'state' | 'tenantProfileName' | 'title' | 'zip';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_TenantInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Tenant>}
     */
    getTenants(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'address' | 'address2' | 'city' | 'country' | 'createdTime' | 'email' | 'phone' | 'state' | 'title' | 'zip';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_Tenant>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.tenantIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.Tenant>>}
     */
    getTenantsByIds(queryParams?: {
        tenantIds?: string;
    }, options?: RequestInit): Promise<Array<schemas.Tenant>>;
}
