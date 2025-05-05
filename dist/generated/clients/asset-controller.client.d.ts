import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class AssetControllerClient extends BaseVXOlympusClient {
    processAssetBulkImportWithData(data: schemas.BulkImportRequest, options?: RequestInit): Promise<schemas.BulkImportResult_Of_Asset>;
    /**
     * @param {string} assetId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AssetInfo>}
     */
    getAssetInfoById(assetId: string, options?: RequestInit): Promise<schemas.AssetInfo>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntitySubtype>>}
     */
    getAssetTypes(options?: RequestInit): Promise<Array<schemas.EntitySubtype>>;
    /**
     * @param {string} assetId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Asset>}
     */
    getAssetById(assetId: string, options?: RequestInit): Promise<schemas.Asset>;
    /**
     * @param {string} assetId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteAsset(assetId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {boolean} queryParams.includeCustomers - Query parameter
     * @param {string} queryParams.assetProfileId - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_AssetInfo>}
     */
    getAllAssetInfos(queryParams?: {
        pageSize?: number;
        page?: number;
        includeCustomers?: boolean;
        assetProfileId?: string;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_AssetInfo>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.Asset>>}
     */
    findByQueryWithData(data: schemas.AssetSearchQuery, options?: RequestInit): Promise<Array<schemas.Asset>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.assetIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.Asset>>}
     */
    getAssetsByIds(queryParams?: {
        assetIds?: string;
    }, options?: RequestInit): Promise<Array<schemas.Asset>>;
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.entityGroupId - Query parameter
     * @param {string} queryParams.entityGroupIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Asset>}
     */
    saveAssetWithData(data: schemas.Asset, queryParams?: {
        entityGroupId?: string;
        entityGroupIds?: string;
    }, options?: RequestInit): Promise<schemas.Asset>;
    /**
     * @param {string} customerId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {boolean} queryParams.includeCustomers - Query parameter
     * @param {string} queryParams.assetProfileId - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_AssetInfo>}
     */
    getCustomerAssetInfos(customerId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        includeCustomers?: boolean;
        assetProfileId?: string;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_AssetInfo>;
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
     * @returns {Promise<schemas.PageData_Of_Asset>}
     */
    getCustomerAssets(customerId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        type?: string;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_Asset>;
    /**
     * @param {string} entityGroupId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Asset>}
     */
    getAssetsByEntityGroupId(entityGroupId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_Asset>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.assetName - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Asset>}
     */
    getTenantAsset(queryParams?: {
        assetName?: string;
    }, options?: RequestInit): Promise<schemas.Asset>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Asset>}
     */
    getTenantAssets(queryParams?: {
        pageSize?: number;
        page?: number;
        type?: string;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_Asset>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.assetProfileId - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Asset>}
     */
    getUserAssets(queryParams?: {
        pageSize?: number;
        page?: number;
        type?: string;
        assetProfileId?: string;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_Asset>;
}
