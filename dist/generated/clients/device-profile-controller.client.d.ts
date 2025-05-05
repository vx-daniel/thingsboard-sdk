import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class DeviceProfileControllerClient extends BaseVXOlympusClient {
    saveDeviceProfileUsingPOST(data: schemas.DeviceProfile, options?: RequestInit): Promise<{
        type: "DEFAULT";
        createdTime: number;
        name: string;
        default: boolean;
        defaultQueueName: string;
        description: string;
        image: string;
        provisionDeviceKey: string;
        transportType: "COAP" | "DEFAULT" | "LWM2M" | "MQTT" | "SNMP";
        provisionType: "ALLOW_CREATE_NEW_DEVICES" | "CHECK_PRE_PROVISIONED_DEVICES" | "DISABLED" | "X509_CERTIFICATE_CHAIN";
        id?: any;
        tenantId?: any;
        defaultDashboardId?: any;
        defaultRuleChainId?: any;
        defaultEdgeRuleChainId?: any;
        firmwareId?: any;
        softwareId?: any;
        profileData?: any;
    }>;
    getAttributesKeysUsingGET(deviceProfileId: string, options?: RequestInit): Promise<any>;
    getTimeseriesKeysUsingGET(deviceProfileId: string, options?: RequestInit): Promise<any>;
    getDeviceProfileNamesUsingGET(activeOnly: boolean, options?: RequestInit): Promise<any>;
    deleteDeviceProfileUsingDELETE(deviceProfileId: string, options?: RequestInit): Promise<any>;
    setDefaultDeviceProfileUsingPOST(deviceProfileId: string, options?: RequestInit): Promise<{
        type: "DEFAULT";
        createdTime: number;
        name: string;
        default: boolean;
        defaultQueueName: string;
        description: string;
        image: string;
        provisionDeviceKey: string;
        transportType: "COAP" | "DEFAULT" | "LWM2M" | "MQTT" | "SNMP";
        provisionType: "ALLOW_CREATE_NEW_DEVICES" | "CHECK_PRE_PROVISIONED_DEVICES" | "DISABLED" | "X509_CERTIFICATE_CHAIN";
        id?: any;
        tenantId?: any;
        defaultDashboardId?: any;
        defaultRuleChainId?: any;
        defaultEdgeRuleChainId?: any;
        firmwareId?: any;
        softwareId?: any;
        profileData?: any;
    }>;
    getDeviceProfileByIdUsingGET(deviceProfileId: string, inlineImages: boolean, options?: RequestInit): Promise<{
        type: "DEFAULT";
        createdTime: number;
        name: string;
        default: boolean;
        defaultQueueName: string;
        description: string;
        image: string;
        provisionDeviceKey: string;
        transportType: "COAP" | "DEFAULT" | "LWM2M" | "MQTT" | "SNMP";
        provisionType: "ALLOW_CREATE_NEW_DEVICES" | "CHECK_PRE_PROVISIONED_DEVICES" | "DISABLED" | "X509_CERTIFICATE_CHAIN";
        id?: any;
        tenantId?: any;
        defaultDashboardId?: any;
        defaultRuleChainId?: any;
        defaultEdgeRuleChainId?: any;
        firmwareId?: any;
        softwareId?: any;
        profileData?: any;
    }>;
    getDefaultDeviceProfileInfoUsingGET(options?: RequestInit): Promise<{
        type: "DEFAULT";
        name: string;
        image: string;
        transportType: "COAP" | "DEFAULT" | "LWM2M" | "MQTT" | "SNMP";
        id?: any;
        tenantId?: any;
        defaultDashboardId?: any;
    }>;
    getDeviceProfileInfoByIdUsingGET(deviceProfileId: string, options?: RequestInit): Promise<{
        type: "DEFAULT";
        name: string;
        image: string;
        transportType: "COAP" | "DEFAULT" | "LWM2M" | "MQTT" | "SNMP";
        id?: any;
        tenantId?: any;
        defaultDashboardId?: any;
    }>;
    getDeviceProfilesByIdsUsingGET(deviceProfileIds: string, options?: RequestInit): Promise<any>;
    getDeviceProfileInfosUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, transportType: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getDeviceProfilesUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
}
