import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class BlobEntityControllerClient extends BaseVXOlympusClient {
    getBlobEntitiesByIds(queryParams?: {
        blobEntityIds?: string;
    }, options?: RequestInit): Promise<Array<schemas.BlobEntityInfo>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {integer} queryParams.startTime - Query parameter
     * @param {integer} queryParams.endTime - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_BlobEntityWithCustomerInfo>}
     */
    getBlobEntities(queryParams?: {
        pageSize?: number;
        page?: number;
        type?: string;
        textSearch?: string;
        sortProperty?: 'contentType' | 'createdTime' | 'customerTitle' | 'name' | 'type';
        sortOrder?: 'ASC' | 'DESC';
        startTime?: number;
        endTime?: number;
    }, options?: RequestInit): Promise<schemas.PageData_Of_BlobEntityWithCustomerInfo>;
    /**
     * @param {string} blobEntityId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.BlobEntityWithCustomerInfo>}
     */
    getBlobEntityInfoById(blobEntityId: string, options?: RequestInit): Promise<schemas.BlobEntityWithCustomerInfo>;
    /**
     * @param {string} blobEntityId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteBlobEntity(blobEntityId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} blobEntityId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Resource>}
     */
    downloadBlobEntity(blobEntityId: string, options?: RequestInit): Promise<schemas.Resource>;
}
