import { BaseVXOlympusClient } from '../../base-client';
export declare class DeviceProfileControllerClient extends BaseVXOlympusClient {
    saveDeviceProfileUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getAttributesKeysUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getTimeseriesKeysUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getDeviceProfileNamesUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    deleteDeviceProfileUsingDELETE(deviceProfileId: string, options?: RequestInit): Promise<unknown>;
    setDefaultDeviceProfileUsingPOST(deviceProfileId: string, options?: RequestInit): Promise<unknown>;
    getDeviceProfileByIdUsingGET(deviceProfileId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getDefaultDeviceProfileInfoUsingGET(options?: RequestInit): Promise<unknown>;
    getDeviceProfileInfoByIdUsingGET(deviceProfileId: string, options?: RequestInit): Promise<unknown>;
    getDeviceProfilesByIdsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getDeviceProfileInfosUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getDeviceProfilesUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
