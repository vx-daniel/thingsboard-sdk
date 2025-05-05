import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class WidgetsBundleControllerClient extends BaseVXOlympusClient {
    saveWidgetsBundleWithData(data: schemas.WidgetsBundle, options?: RequestInit): Promise<schemas.WidgetsBundle>;
    /**
     * @param {string} widgetsBundleId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteWidgetsBundle(widgetsBundleId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} widgetsBundleId - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    updateWidgetsBundleWidgetFqnsWithData(widgetsBundleId: string, data: Array<string>, options?: RequestInit): Promise<void>;
    /**
     * @param {string} widgetsBundleId - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    updateWidgetsBundleWidgetTypesWithData(widgetsBundleId: string, data: Array<string>, options?: RequestInit): Promise<void>;
    /**
     * @param {string} widgetsBundleId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.inlineImages - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.WidgetsBundle>}
     */
    getWidgetsBundleById(widgetsBundleId: string, queryParams?: {
        inlineImages?: boolean;
    }, options?: RequestInit): Promise<schemas.WidgetsBundle>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.WidgetsBundle>>}
     */
    getWidgetsBundles(options?: RequestInit): Promise<Array<schemas.WidgetsBundle>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {boolean} queryParams.tenantOnly - Query parameter
     * @param {boolean} queryParams.fullSearch - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_WidgetsBundle>}
     */
    getWidgetsBundlesUsingGET_1(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'tenantId' | 'title';
        sortOrder?: 'ASC' | 'DESC';
        tenantOnly?: boolean;
        fullSearch?: boolean;
    }, options?: RequestInit): Promise<schemas.PageData_Of_WidgetsBundle>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.widgetsBundleIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.WidgetsBundle>>}
     */
    getWidgetsBundlesByIds(queryParams?: {
        widgetsBundleIds?: string;
    }, options?: RequestInit): Promise<Array<schemas.WidgetsBundle>>;
}
