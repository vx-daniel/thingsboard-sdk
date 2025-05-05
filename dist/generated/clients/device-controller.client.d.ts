import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class DeviceControllerClient extends BaseVXOlympusClient {
    reClaimDevice(deviceName: string, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {string} deviceName - Path parameter
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.subCustomerId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    claimDeviceWithData(deviceName: string, data: schemas.ClaimRequest, queryParams?: {
        subCustomerId?: string;
    }, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {string} customerId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {boolean} queryParams.includeCustomers - Query parameter
     * @param {string} queryParams.deviceProfileId - Query parameter
     * @param {boolean} queryParams.active - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_DeviceInfo>}
     */
    getCustomerDeviceInfos(customerId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        includeCustomers?: boolean;
        deviceProfileId?: string;
        active?: boolean;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'customerTitle' | 'deviceProfileName' | 'label' | 'name';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_DeviceInfo>;
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
     * @returns {Promise<schemas.PageData_Of_Device>}
     */
    getCustomerDevices(customerId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        type?: string;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'customerTitle' | 'deviceProfileName' | 'label' | 'name';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_Device>;
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.entityGroupId - Query parameter
     * @param {string} queryParams.entityGroupIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Device>}
     */
    saveDeviceWithCredentialsWithData(data: schemas.SaveDeviceWithCredentialsRequest, queryParams?: {
        entityGroupId?: string;
        entityGroupIds?: string;
    }, options?: RequestInit): Promise<schemas.Device>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.BulkImportResult_Of_Device>}
     */
    processDevicesBulkImportWithData(data: schemas.BulkImportRequest, options?: RequestInit): Promise<schemas.BulkImportResult_Of_Device>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeviceCredentials>}
     */
    updateDeviceCredentialsWithData(data: schemas.DeviceCredentials, options?: RequestInit): Promise<schemas.DeviceCredentials>;
    /**
     * @param {string} deviceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeviceInfo>}
     */
    getDeviceInfoById(deviceId: string, options?: RequestInit): Promise<schemas.DeviceInfo>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntitySubtype>>}
     */
    getDeviceTypes(options?: RequestInit): Promise<Array<schemas.EntitySubtype>>;
    /**
     * @param {string} deviceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Device>}
     */
    getDeviceById(deviceId: string, options?: RequestInit): Promise<schemas.Device>;
    /**
     * @param {string} deviceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteDevice(deviceId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} deviceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeviceCredentials>}
     */
    getDeviceCredentialsByDeviceId(deviceId: string, options?: RequestInit): Promise<schemas.DeviceCredentials>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {boolean} queryParams.includeCustomers - Query parameter
     * @param {string} queryParams.deviceProfileId - Query parameter
     * @param {boolean} queryParams.active - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_DeviceInfo>}
     */
    getAllDeviceInfos(queryParams?: {
        pageSize?: number;
        page?: number;
        includeCustomers?: boolean;
        deviceProfileId?: string;
        active?: boolean;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'customerTitle' | 'deviceProfileName' | 'label' | 'name';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_DeviceInfo>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.Device>>}
     */
    findByQueryUsingPOST_1WithData(data: schemas.DeviceSearchQuery, options?: RequestInit): Promise<Array<schemas.Device>>;
    /**
     * @param {string} otaPackageType - Path parameter
     * @param {string} deviceProfileId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<number>}
     */
    countByDeviceProfileAndEmptyOtaPackage(otaPackageType: 'FIRMWARE' | 'SOFTWARE', deviceProfileId: string, options?: RequestInit): Promise<number>;
    /**
     * @param {string} otaPackageType - Path parameter
     * @param {string} otaPackageId - Path parameter
     * @param {string} entityGroupId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<number>}
     */
    countByDeviceGroupAndEmptyOtaPackage(otaPackageType: 'FIRMWARE' | 'SOFTWARE', otaPackageId: string, entityGroupId: string, options?: RequestInit): Promise<number>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.deviceIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.Device>>}
     */
    getDevicesByIds(queryParams?: {
        deviceIds?: string;
    }, options?: RequestInit): Promise<Array<schemas.Device>>;
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.accessToken - Query parameter
     * @param {string} queryParams.entityGroupId - Query parameter
     * @param {string} queryParams.entityGroupIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Device>}
     */
    saveDeviceWithData(data: schemas.Device, queryParams?: {
        accessToken?: string;
        entityGroupId?: string;
        entityGroupIds?: string;
    }, options?: RequestInit): Promise<schemas.Device>;
    /**
     * @param {string} entityGroupId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Device>}
     */
    getDevicesByEntityGroupId(entityGroupId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'customerTitle' | 'deviceProfileName' | 'label' | 'name';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_Device>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.deviceName - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Device>}
     */
    getTenantDevice(queryParams?: {
        deviceName?: string;
    }, options?: RequestInit): Promise<schemas.Device>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Device>}
     */
    getTenantDevices(queryParams?: {
        pageSize?: number;
        page?: number;
        type?: string;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'customerTitle' | 'deviceProfileName' | 'label' | 'name';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_Device>;
    /**
     * @param {string} tenantId - Path parameter
     * @param {string} deviceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Device>}
     */
    assignDeviceToTenant(tenantId: string, deviceId: string, options?: RequestInit): Promise<schemas.Device>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Device>}
     */
    getUserDevices(queryParams?: {
        pageSize?: number;
        page?: number;
        type?: string;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'customerTitle' | 'deviceProfileName' | 'label' | 'name';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_Device>;
}
