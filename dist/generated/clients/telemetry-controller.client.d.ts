import { BaseVXOlympusClient } from '../../base-client';
export declare class TelemetryControllerClient extends BaseVXOlympusClient {
    saveDeviceAttributesUsingPOST(deviceId: string, scope: string, data: any, options?: RequestInit): Promise<unknown>;
    deleteDeviceAttributesUsingDELETE(deviceId: string, scope: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    saveEntityAttributesV2UsingPOST(entityType: string, entityId: string, scope: string, data: any, options?: RequestInit): Promise<unknown>;
    getAttributeKeysUsingGET(entityType: string, entityId: string, options?: RequestInit): Promise<unknown>;
    getAttributeKeysByScopeUsingGET(entityType: string, entityId: string, scope: string, options?: RequestInit): Promise<unknown>;
    getTimeseriesKeysUsingGET_1(entityType: string, entityId: string, options?: RequestInit): Promise<unknown>;
    deleteEntityTimeseriesUsingDELETE(entityType: string, entityId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    saveEntityTelemetryWithTTLUsingPOST(entityType: string, entityId: string, scope: string, ttl: string, data: any, options?: RequestInit): Promise<unknown>;
    saveEntityTelemetryUsingPOST(entityType: string, entityId: string, scope: string, data: any, options?: RequestInit): Promise<unknown>;
    getAttributesByScopeUsingGET(entityType: string, entityId: string, scope: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getAttributesUsingGET(entityType: string, entityId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getTimeseriesUsingGET(entityType: string, entityId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getLatestTimeseriesUsingGET(entityType: string, entityId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    saveEntityAttributesV1UsingPOST(entityType: string, entityId: string, scope: string, data: any, options?: RequestInit): Promise<unknown>;
    deleteEntityAttributesUsingDELETE(entityType: string, entityId: string, scope: string, queryParams: any, options?: RequestInit): Promise<unknown>;
}
