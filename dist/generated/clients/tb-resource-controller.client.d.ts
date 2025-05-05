import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class TbResourceControllerClient extends BaseVXOlympusClient {
    saveResourceWithData(data: schemas.TbResource, options?: RequestInit): Promise<schemas.TbResourceInfo>;
    /**
     * @param {string} resourceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.TbResourceInfo>}
     */
    getResourceInfoById(resourceId: string, options?: RequestInit): Promise<schemas.TbResourceInfo>;
    /**
     * @param {string} resourceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    downloadJksResourceIfChanged(resourceId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} resourceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    downloadJsResourceIfChanged(resourceId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.LwM2mObject>>}
     */
    getLwm2mListObjectsPage(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'id' | 'name';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<Array<schemas.LwM2mObject>>;
    /**
     * @param {string} resourceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    downloadLwm2mResourceIfChanged(resourceId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.objectIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.LwM2mObject>>}
     */
    getLwm2mListObjects(queryParams?: {
        sortOrder?: 'ASC' | 'DESC';
        sortProperty?: 'id' | 'name';
        objectIds?: string;
    }, options?: RequestInit): Promise<Array<schemas.LwM2mObject>>;
    /**
     * @param {string} resourceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    downloadPkcs12ResourceIfChanged(resourceId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_TbResourceInfo>}
     */
    getTenantResources(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'resourceType' | 'tenantId' | 'title';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_TbResourceInfo>;
    /**
     * @param {string} resourceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteResource(resourceId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} resourceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.ByteArrayResource>}
     */
    downloadResource(resourceId: string, options?: RequestInit): Promise<schemas.ByteArrayResource>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.resourceType - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_TbResourceInfo>}
     */
    getResources(queryParams?: {
        pageSize?: number;
        page?: number;
        resourceType?: 'JKS' | 'JS_MODULE' | 'LWM2M_MODEL' | 'PKCS_12';
        textSearch?: string;
        sortProperty?: 'createdTime' | 'resourceType' | 'tenantId' | 'title';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_TbResourceInfo>;
}
