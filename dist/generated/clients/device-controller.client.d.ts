import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class DeviceControllerClient extends BaseVXOlympusClient {
    reClaimDeviceUsingDELETE(deviceName: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    claimDeviceUsingPOST(deviceName: string, subCustomerId: string, data: schemas.ClaimRequest, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getCustomerDeviceInfosUsingGET(customerId: string, pageSize: number, page: number, includeCustomers: boolean, deviceProfileId: string, active: boolean, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getCustomerDevicesUsingGET(customerId: string, pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    saveDeviceWithCredentialsUsingPOST(entityGroupId: string, entityGroupIds: string, data: schemas.SaveDeviceWithCredentialsRequest, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        deviceProfileId?: any;
        deviceData?: any;
        firmwareId?: any;
        softwareId?: any;
    }>;
    processDevicesBulkImportUsingPOST(data: schemas.BulkImportRequest, options?: RequestInit): Promise<{
        errorsList: string[];
        created?: any;
        errors?: any;
        updated?: any;
    }>;
    updateDeviceCredentialsUsingPOST(data: schemas.DeviceCredentials, options?: RequestInit): Promise<{
        createdTime: number;
        credentialsType: "ACCESS_TOKEN" | "LWM2M_CREDENTIALS" | "MQTT_BASIC" | "X509_CERTIFICATE";
        credentialsId: string;
        credentialsValue: string;
        id?: any;
        deviceId?: any;
    }>;
    getDeviceInfoByIdUsingGET(deviceId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        ownerName: string;
        groups: any[];
        active: boolean;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        deviceProfileId?: any;
        deviceData?: any;
        firmwareId?: any;
        softwareId?: any;
    }>;
    getDeviceTypesUsingGET(options?: RequestInit): Promise<any>;
    getDeviceByIdUsingGET(deviceId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        deviceProfileId?: any;
        deviceData?: any;
        firmwareId?: any;
        softwareId?: any;
    }>;
    deleteDeviceUsingDELETE(deviceId: string, options?: RequestInit): Promise<any>;
    getDeviceCredentialsByDeviceIdUsingGET(deviceId: string, options?: RequestInit): Promise<{
        createdTime: number;
        credentialsType: "ACCESS_TOKEN" | "LWM2M_CREDENTIALS" | "MQTT_BASIC" | "X509_CERTIFICATE";
        credentialsId: string;
        credentialsValue: string;
        id?: any;
        deviceId?: any;
    }>;
    getAllDeviceInfosUsingGET(pageSize: number, page: number, includeCustomers: boolean, deviceProfileId: string, active: boolean, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    findByQueryUsingPOST_1(data: schemas.DeviceSearchQuery, options?: RequestInit): Promise<any>;
    countByDeviceProfileAndEmptyOtaPackageUsingGET(otaPackageType: string, deviceProfileId: string, options?: RequestInit): Promise<any>;
    countByDeviceGroupAndEmptyOtaPackageUsingGET(otaPackageType: string, otaPackageId: string, entityGroupId: string, options?: RequestInit): Promise<any>;
    getDevicesByIdsUsingGET(deviceIds: string, options?: RequestInit): Promise<any>;
    saveDeviceUsingPOST(accessToken: string, entityGroupId: string, entityGroupIds: string, data: schemas.Device, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        deviceProfileId?: any;
        deviceData?: any;
        firmwareId?: any;
        softwareId?: any;
    }>;
    getDevicesByEntityGroupIdUsingGET(entityGroupId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getTenantDeviceUsingGET(deviceName: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        deviceProfileId?: any;
        deviceData?: any;
        firmwareId?: any;
        softwareId?: any;
    }>;
    getTenantDevicesUsingGET(pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    assignDeviceToTenantUsingPOST(tenantId: string, deviceId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        deviceProfileId?: any;
        deviceData?: any;
        firmwareId?: any;
        softwareId?: any;
    }>;
    getUserDevicesUsingGET(pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
}
