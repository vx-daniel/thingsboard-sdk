import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class DeviceGroupOtaPackageControllerClient extends BaseVXOlympusClient {
    saveDeviceGroupOtaPackageUsingPOST(data: schemas.DeviceGroupOtaPackage, options?: RequestInit): Promise<{
        id: string;
        otaPackageType: "FIRMWARE" | "SOFTWARE";
        otaPackageUpdateTime: number;
        groupId?: any;
        otaPackageId?: any;
    }>;
    getFirmwareByIdUsingGET(groupId: string, firmwareType: string, options?: RequestInit): Promise<{
        id: string;
        otaPackageType: "FIRMWARE" | "SOFTWARE";
        otaPackageUpdateTime: number;
        groupId?: any;
        otaPackageId?: any;
    }>;
    deleteDeviceGroupOtaPackageUsingDELETE(id: string, options?: RequestInit): Promise<any>;
}
