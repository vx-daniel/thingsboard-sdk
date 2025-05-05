import { BaseVXOlympusClient } from '../../base-client';
export declare class DeviceControllerClient extends BaseVXOlympusClient {
    reClaimDeviceUsingDELETE(deviceName: string, options?: RequestInit): Promise<unknown>;
    claimDeviceUsingPOST(deviceName: string, data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
    getCustomerDeviceInfosUsingGET(customerId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getCustomerDevicesUsingGET(customerId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    saveDeviceWithCredentialsUsingPOST(data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
    processDevicesBulkImportUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    updateDeviceCredentialsUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getDeviceInfoByIdUsingGET(deviceId: string, options?: RequestInit): Promise<unknown>;
    getDeviceTypesUsingGET(options?: RequestInit): Promise<unknown>;
    getDeviceByIdUsingGET(deviceId: string, options?: RequestInit): Promise<unknown>;
    deleteDeviceUsingDELETE(deviceId: string, options?: RequestInit): Promise<unknown>;
    getDeviceCredentialsByDeviceIdUsingGET(deviceId: string, options?: RequestInit): Promise<unknown>;
    getAllDeviceInfosUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    findByQueryUsingPOST_1(data: any, options?: RequestInit): Promise<unknown>;
    countByDeviceProfileAndEmptyOtaPackageUsingGET(otaPackageType: string, deviceProfileId: string, options?: RequestInit): Promise<unknown>;
    countByDeviceGroupAndEmptyOtaPackageUsingGET(otaPackageType: string, otaPackageId: string, entityGroupId: string, options?: RequestInit): Promise<unknown>;
    getDevicesByIdsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    saveDeviceUsingPOST(data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
    getDevicesByEntityGroupIdUsingGET(entityGroupId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getTenantDeviceUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getTenantDevicesUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    assignDeviceToTenantUsingPOST(tenantId: string, deviceId: string, options?: RequestInit): Promise<unknown>;
    getUserDevicesUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
