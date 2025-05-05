import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class WidgetTypeControllerClient extends BaseVXOlympusClient {
    deleteWidgetType(widgetTypeId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} widgetTypeId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.inlineImages - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.WidgetTypeDetails>}
     */
    getWidgetTypeById(widgetTypeId: string, queryParams?: {
        inlineImages?: boolean;
    }, options?: RequestInit): Promise<schemas.WidgetTypeDetails>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.widgetsBundleId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<string>>}
     */
    getBundleWidgetTypeFqns(queryParams?: {
        widgetsBundleId?: string;
    }, options?: RequestInit): Promise<Array<string>>;
    /**
     * @param {string} widgetTypeId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.WidgetTypeInfo>}
     */
    getWidgetTypeInfoById(widgetTypeId: string, options?: RequestInit): Promise<schemas.WidgetTypeInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.isSystem - Query parameter
     * @param {string} queryParams.bundleAlias - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.WidgetTypeDetails>>}
     */
    getBundleWidgetTypesDetailsByBundleAlias(queryParams?: {
        isSystem?: boolean;
        bundleAlias?: string;
    }, options?: RequestInit): Promise<Array<schemas.WidgetTypeDetails>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.widgetsBundleId - Query parameter
     * @param {boolean} queryParams.inlineImages - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.WidgetTypeDetails>>}
     */
    getBundleWidgetTypesDetails(queryParams?: {
        widgetsBundleId?: string;
        inlineImages?: boolean;
    }, options?: RequestInit): Promise<Array<schemas.WidgetTypeDetails>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.isSystem - Query parameter
     * @param {string} queryParams.bundleAlias - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.WidgetTypeInfo>>}
     */
    getBundleWidgetTypesInfosByBundleAlias(queryParams?: {
        isSystem?: boolean;
        bundleAlias?: string;
    }, options?: RequestInit): Promise<Array<schemas.WidgetTypeInfo>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.widgetsBundleId - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {boolean} queryParams.fullSearch - Query parameter
     * @param {string} queryParams.deprecatedFilter - Query parameter
     * @param {string} queryParams.widgetTypeList - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_WidgetTypeInfo>}
     */
    getBundleWidgetTypesInfos(queryParams?: {
        widgetsBundleId?: string;
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'deprecated' | 'name' | 'tenantId';
        sortOrder?: 'ASC' | 'DESC';
        fullSearch?: boolean;
        deprecatedFilter?: 'ACTUAL' | 'ALL' | 'DEPRECATED';
        widgetTypeList?: 'alarm' | 'control' | 'latest' | 'static' | 'timeseries';
    }, options?: RequestInit): Promise<schemas.PageData_Of_WidgetTypeInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.isSystem - Query parameter
     * @param {string} queryParams.bundleAlias - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.WidgetType>>}
     */
    getBundleWidgetTypesByBundleAlias(queryParams?: {
        isSystem?: boolean;
        bundleAlias?: string;
    }, options?: RequestInit): Promise<Array<schemas.WidgetType>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {boolean} queryParams.tenantOnly - Query parameter
     * @param {boolean} queryParams.fullSearch - Query parameter
     * @param {string} queryParams.deprecatedFilter - Query parameter
     * @param {string} queryParams.widgetTypeList - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_WidgetTypeInfo>}
     */
    getWidgetTypes(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'deprecated' | 'name' | 'tenantId';
        sortOrder?: 'ASC' | 'DESC';
        tenantOnly?: boolean;
        fullSearch?: boolean;
        deprecatedFilter?: 'ACTUAL' | 'ALL' | 'DEPRECATED';
        widgetTypeList?: 'alarm' | 'control' | 'latest' | 'static' | 'timeseries';
    }, options?: RequestInit): Promise<schemas.PageData_Of_WidgetTypeInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.widgetsBundleId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.WidgetType>>}
     */
    getBundleWidgetTypes(queryParams?: {
        widgetsBundleId?: string;
    }, options?: RequestInit): Promise<Array<schemas.WidgetType>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.isSystem - Query parameter
     * @param {string} queryParams.bundleAlias - Query parameter
     * @param {string} queryParams.alias - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.WidgetType>}
     */
    getWidgetTypeByBundleAliasAndTypeAlias(queryParams?: {
        isSystem?: boolean;
        bundleAlias?: string;
        alias?: string;
    }, options?: RequestInit): Promise<schemas.WidgetType>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.fqn - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.WidgetType>}
     */
    getWidgetType(queryParams?: {
        fqn?: string;
    }, options?: RequestInit): Promise<schemas.WidgetType>;
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.updateExistingByFqn - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.WidgetTypeDetails>}
     */
    saveWidgetTypeWithData(data: schemas.WidgetTypeDetails, queryParams?: {
        updateExistingByFqn?: boolean;
    }, options?: RequestInit): Promise<schemas.WidgetTypeDetails>;
}
