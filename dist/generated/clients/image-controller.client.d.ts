import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class ImageControllerClient extends BaseVXOlympusClient {
    uploadImageWithData(data: any, options?: RequestInit): Promise<schemas.TbResourceInfo>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.TbResourceInfo>}
     */
    importImageWithData(data: schemas.ImageExportData, options?: RequestInit): Promise<schemas.TbResourceInfo>;
    /**
     * @param {string} publicResourceKey - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    downloadPublicImage(publicResourceKey: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} type - Path parameter
     * @param {string} key - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    downloadImage(type: 'system' | 'tenant', key: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} type - Path parameter
     * @param {string} key - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.TbResourceInfo>}
     */
    updateImageWithData(type: 'system' | 'tenant', key: string, data: any, options?: RequestInit): Promise<schemas.TbResourceInfo>;
    /**
     * @param {string} type - Path parameter
     * @param {string} key - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.ImageExportData>}
     */
    exportImage(type: 'system' | 'tenant', key: string, options?: RequestInit): Promise<schemas.ImageExportData>;
    /**
     * @param {string} type - Path parameter
     * @param {string} key - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.TbResourceInfo>}
     */
    getImageInfo(type: 'system' | 'tenant', key: string, options?: RequestInit): Promise<schemas.TbResourceInfo>;
    /**
     * @param {string} type - Path parameter
     * @param {string} key - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.TbResourceInfo>}
     */
    updateImageInfoWithData(type: 'system' | 'tenant', key: string, data: schemas.TbResourceInfo, options?: RequestInit): Promise<schemas.TbResourceInfo>;
    /**
     * @param {string} type - Path parameter
     * @param {string} key - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    downloadImagePreview(type: 'system' | 'tenant', key: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} type - Path parameter
     * @param {string} key - Path parameter
     * @param {string} isPublic - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.TbResourceInfo>}
     */
    updateImagePublicStatus(type: 'system' | 'tenant', key: string, isPublic: string, options?: RequestInit): Promise<schemas.TbResourceInfo>;
    /**
     * @param {string} type - Path parameter
     * @param {string} key - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.force - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.TbImageDeleteResult>}
     */
    deleteImage(type: 'system' | 'tenant', key: string, queryParams?: {
        force?: boolean;
    }, options?: RequestInit): Promise<schemas.TbImageDeleteResult>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {boolean} queryParams.includeSystemImages - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_TbResourceInfo>}
     */
    getImages(queryParams?: {
        pageSize?: number;
        page?: number;
        includeSystemImages?: boolean;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'resourceType' | 'tenantId' | 'title';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_TbResourceInfo>;
    /**
     * @param {string} type - Path parameter
     * @param {string} key - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    downloadLoginFavicon(type: string, key: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} type - Path parameter
     * @param {string} key - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    downloadLoginLogo(type: string, key: string, options?: RequestInit): Promise<void>;
}
