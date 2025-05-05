import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class TenantProfileControllerClient extends BaseVXOlympusClient {
    saveTenantProfileWithData(data: schemas.TenantProfile, options?: RequestInit): Promise<schemas.TenantProfile>;
    /**
     * @param {string} tenantProfileId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.TenantProfile>}
     */
    getTenantProfileById(tenantProfileId: string, options?: RequestInit): Promise<schemas.TenantProfile>;
    /**
     * @param {string} tenantProfileId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteTenantProfile(tenantProfileId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} tenantProfileId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.TenantProfile>}
     */
    setDefaultTenantProfile(tenantProfileId: string, options?: RequestInit): Promise<schemas.TenantProfile>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EntityInfo>}
     */
    getDefaultTenantProfileInfo(options?: RequestInit): Promise<schemas.EntityInfo>;
    /**
     * @param {string} tenantProfileId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EntityInfo>}
     */
    getTenantProfileInfoById(tenantProfileId: string, options?: RequestInit): Promise<schemas.EntityInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntityInfo>}
     */
    getTenantProfileInfos(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'id' | 'name';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_EntityInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.ids - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.TenantProfile>>}
     */
    getTenantProfilesByIds(queryParams?: {
        ids?: string;
    }, options?: RequestInit): Promise<Array<schemas.TenantProfile>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_TenantProfile>}
     */
    getTenantProfiles(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'description' | 'isDefault' | 'name';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_TenantProfile>;
}
