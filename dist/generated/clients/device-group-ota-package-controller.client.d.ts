import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class DeviceGroupOtaPackageControllerClient extends BaseVXOlympusClient {
    saveDeviceGroupOtaPackageWithData(data: schemas.DeviceGroupOtaPackage, options?: RequestInit): Promise<schemas.DeviceGroupOtaPackage>;
    /**
     * @param {string} groupId - Path parameter
     * @param {string} firmwareType - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeviceGroupOtaPackage>}
     */
    getFirmwareById(groupId: string, firmwareType: string, options?: RequestInit): Promise<schemas.DeviceGroupOtaPackage>;
    /**
     * @param {string} id - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteDeviceGroupOtaPackage(id: string, options?: RequestInit): Promise<void>;
}
