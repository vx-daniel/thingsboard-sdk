import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class AssetProfileControllerClient extends BaseVXOlympusClient {
    saveAssetProfileWithData(data: schemas.AssetProfile, options?: RequestInit): Promise<schemas.AssetProfile>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.activeOnly - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntityInfo>>}
     */
    getAssetProfileNames(queryParams?: {
        activeOnly?: boolean;
    }, options?: RequestInit): Promise<Array<schemas.EntityInfo>>;
    /**
     * @param {string} assetProfileId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteAssetProfile(assetProfileId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} assetProfileId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AssetProfile>}
     */
    setDefaultAssetProfile(assetProfileId: string, options?: RequestInit): Promise<schemas.AssetProfile>;
    /**
     * @param {string} assetProfileId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.inlineImages - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AssetProfile>}
     */
    getAssetProfileById(assetProfileId: string, queryParams?: {
        inlineImages?: boolean;
    }, options?: RequestInit): Promise<schemas.AssetProfile>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AssetProfileInfo>}
     */
    getDefaultAssetProfileInfo(options?: RequestInit): Promise<schemas.AssetProfileInfo>;
    /**
     * @param {string} assetProfileId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AssetProfileInfo>}
     */
    getAssetProfileInfoById(assetProfileId: string, options?: RequestInit): Promise<schemas.AssetProfileInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.assetProfileIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.AssetProfileInfo>>}
     */
    getAssetProfilesByIds(queryParams?: {
        assetProfileIds?: string;
    }, options?: RequestInit): Promise<Array<schemas.AssetProfileInfo>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_AssetProfileInfo>}
     */
    getAssetProfileInfos(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'description' | 'isDefault' | 'name';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_AssetProfileInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_AssetProfile>}
     */
    getAssetProfiles(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'description' | 'isDefault' | 'name';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_AssetProfile>;
}
