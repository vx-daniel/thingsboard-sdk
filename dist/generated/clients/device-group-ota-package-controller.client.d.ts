import { BaseVXOlympusClient } from '../../base-client';
export declare class DeviceGroupOtaPackageControllerClient extends BaseVXOlympusClient {
    saveDeviceGroupOtaPackageUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getFirmwareByIdUsingGET(groupId: string, firmwareType: string, options?: RequestInit): Promise<unknown>;
    deleteDeviceGroupOtaPackageUsingDELETE(id: string, options?: RequestInit): Promise<unknown>;
}
