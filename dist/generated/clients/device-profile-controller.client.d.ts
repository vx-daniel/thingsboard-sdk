import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class DeviceProfileControllerClient extends BaseVXOlympusClient {
    saveDeviceProfileWithData(data: schemas.DeviceProfile, options?: RequestInit): Promise<schemas.DeviceProfile>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.deviceProfileId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<string>>}
     */
    getAttributesKeys(queryParams?: {
        deviceProfileId?: string;
    }, options?: RequestInit): Promise<Array<string>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.deviceProfileId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<string>>}
     */
    getTimeseriesKeys(queryParams?: {
        deviceProfileId?: string;
    }, options?: RequestInit): Promise<Array<string>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.activeOnly - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntityInfo>>}
     */
    getDeviceProfileNames(queryParams?: {
        activeOnly?: boolean;
    }, options?: RequestInit): Promise<Array<schemas.EntityInfo>>;
    /**
     * @param {string} deviceProfileId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteDeviceProfile(deviceProfileId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} deviceProfileId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeviceProfile>}
     */
    setDefaultDeviceProfile(deviceProfileId: string, options?: RequestInit): Promise<schemas.DeviceProfile>;
    /**
     * @param {string} deviceProfileId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.inlineImages - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeviceProfile>}
     */
    getDeviceProfileById(deviceProfileId: string, queryParams?: {
        inlineImages?: boolean;
    }, options?: RequestInit): Promise<schemas.DeviceProfile>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeviceProfileInfo>}
     */
    getDefaultDeviceProfileInfo(options?: RequestInit): Promise<schemas.DeviceProfileInfo>;
    /**
     * @param {string} deviceProfileId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeviceProfileInfo>}
     */
    getDeviceProfileInfoById(deviceProfileId: string, options?: RequestInit): Promise<schemas.DeviceProfileInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.deviceProfileIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.DeviceProfileInfo>>}
     */
    getDeviceProfilesByIds(queryParams?: {
        deviceProfileIds?: string;
    }, options?: RequestInit): Promise<Array<schemas.DeviceProfileInfo>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {string} queryParams.transportType - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_DeviceProfileInfo>}
     */
    getDeviceProfileInfos(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'description' | 'isDefault' | 'name' | 'transportType' | 'type';
        sortOrder?: 'ASC' | 'DESC';
        transportType?: 'COAP' | 'DEFAULT' | 'LWM2M' | 'MQTT' | 'SNMP';
    }, options?: RequestInit): Promise<schemas.PageData_Of_DeviceProfileInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_DeviceProfile>}
     */
    getDeviceProfiles(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'description' | 'isDefault' | 'name' | 'transportType' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_DeviceProfile>;
}
