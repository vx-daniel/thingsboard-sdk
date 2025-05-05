import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class OtaPackageControllerClient extends BaseVXOlympusClient {
    saveOtaPackageInfoWithData(data: schemas.SaveOtaPackageInfoRequest, options?: RequestInit): Promise<schemas.OtaPackageInfo>;
    /**
     * @param {string} otaPackageId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.OtaPackageInfo>}
     */
    getOtaPackageInfoById(otaPackageId: string, options?: RequestInit): Promise<schemas.OtaPackageInfo>;
    /**
     * @param {string} otaPackageId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.OtaPackage>}
     */
    getOtaPackageById(otaPackageId: string, options?: RequestInit): Promise<schemas.OtaPackage>;
    /**
     * @param {string} otaPackageId - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.OtaPackageInfo>}
     */
    saveOtaPackageDataWithData(otaPackageId: string, data: any, options?: RequestInit): Promise<schemas.OtaPackageInfo>;
    /**
     * @param {string} otaPackageId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteOtaPackage(otaPackageId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} otaPackageId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Resource>}
     */
    downloadOtaPackage(otaPackageId: string, options?: RequestInit): Promise<schemas.Resource>;
    /**
     * @param {string} groupId - Path parameter
     * @param {string} type - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_OtaPackageInfo>}
     */
    getGroupOtaPackages(groupId: string, type: 'FIRMWARE' | 'SOFTWARE', queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'checksum' | 'createdTime' | 'dataSize' | 'fileName' | 'tag' | 'title' | 'type' | 'url' | 'version';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_OtaPackageInfo>;
    /**
     * @param {string} deviceProfileId - Path parameter
     * @param {string} type - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_OtaPackageInfo>}
     */
    getOtaPackagesUsingGET_1(deviceProfileId: string, type: 'FIRMWARE' | 'SOFTWARE', queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'checksum' | 'createdTime' | 'dataSize' | 'fileName' | 'tag' | 'title' | 'type' | 'url' | 'version';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_OtaPackageInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_OtaPackageInfo>}
     */
    getOtaPackages(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'checksum' | 'createdTime' | 'dataSize' | 'fileName' | 'tag' | 'title' | 'type' | 'url' | 'version';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_OtaPackageInfo>;
}
