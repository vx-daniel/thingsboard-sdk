import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class EntityViewControllerClient extends BaseVXOlympusClient {
    getCustomerEntityViewInfos(customerId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        includeCustomers?: boolean;
        type?: string;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'name' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_EntityViewInfo>;
    /**
     * @param {string} customerId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntityView>}
     */
    getCustomerEntityViews(customerId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        type?: string;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'name' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_EntityView>;
    /**
     * @param {string} entityGroupId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntityView>}
     */
    getEntityViewsByEntityGroupId(entityGroupId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'name' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_EntityView>;
    /**
     * @param {string} entityViewId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EntityViewInfo>}
     */
    getEntityViewInfoById(entityViewId: string, options?: RequestInit): Promise<schemas.EntityViewInfo>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntitySubtype>>}
     */
    getEntityViewTypes(options?: RequestInit): Promise<Array<schemas.EntitySubtype>>;
    /**
     * @param {string} entityViewId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EntityView>}
     */
    getEntityViewById(entityViewId: string, options?: RequestInit): Promise<schemas.EntityView>;
    /**
     * @param {string} entityViewId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteEntityView(entityViewId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {boolean} queryParams.includeCustomers - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntityViewInfo>}
     */
    getAllEntityViewInfos(queryParams?: {
        pageSize?: number;
        page?: number;
        includeCustomers?: boolean;
        type?: string;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'name' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_EntityViewInfo>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntityView>>}
     */
    findByQueryUsingPOST_4WithData(data: schemas.EntityViewSearchQuery, options?: RequestInit): Promise<Array<schemas.EntityView>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.entityViewIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntityView>>}
     */
    getEntityViewsByIds(queryParams?: {
        entityViewIds?: string;
    }, options?: RequestInit): Promise<Array<schemas.EntityView>>;
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.entityGroupId - Query parameter
     * @param {string} queryParams.entityGroupIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EntityView>}
     */
    saveEntityViewWithData(data: schemas.EntityView, queryParams?: {
        entityGroupId?: string;
        entityGroupIds?: string;
    }, options?: RequestInit): Promise<schemas.EntityView>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.entityViewName - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EntityView>}
     */
    getTenantEntityView(queryParams?: {
        entityViewName?: string;
    }, options?: RequestInit): Promise<schemas.EntityView>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntityView>}
     */
    getTenantEntityViews(queryParams?: {
        pageSize?: number;
        page?: number;
        type?: string;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'name' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_EntityView>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntityView>}
     */
    getUserEntityViews(queryParams?: {
        pageSize?: number;
        page?: number;
        type?: string;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'name' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_EntityView>;
}
