import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class TelemetryControllerClient extends BaseVXOlympusClient {
    saveDeviceAttributesUsingPOST(deviceId: string, scope: string, data: schemas.JsonNode, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    deleteDeviceAttributesUsingDELETE(deviceId: string, scope: string, keys: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    saveEntityAttributesV2UsingPOST(entityType: string, entityId: string, scope: string, data: schemas.JsonNode, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getAttributeKeysUsingGET(entityType: string, entityId: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getAttributeKeysByScopeUsingGET(entityType: string, entityId: string, scope: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getTimeseriesKeysUsingGET_1(entityType: string, entityId: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    deleteEntityTimeseriesUsingDELETE(entityType: string, entityId: string, keys: string, deleteAllDataForKeys: boolean, startTs: number, endTs: number, deleteLatest: boolean, rewriteLatestIfDeleted: boolean, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    saveEntityTelemetryWithTTLUsingPOST(entityType: string, entityId: string, scope: string, ttl: number, data: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    saveEntityTelemetryUsingPOST(entityType: string, entityId: string, scope: string, data: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getAttributesByScopeUsingGET(entityType: string, entityId: string, scope: string, keys: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getAttributesUsingGET(entityType: string, entityId: string, keys: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getTimeseriesUsingGET(entityType: string, entityId: string, keys: string, startTs: number, endTs: number, interval: number, limit: number, agg: string, orderBy: string, useStrictDataTypes: boolean, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getLatestTimeseriesUsingGET(entityType: string, entityId: string, keys: string, useStrictDataTypes: boolean, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    saveEntityAttributesV1UsingPOST(entityType: string, entityId: string, scope: string, data: schemas.JsonNode, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    deleteEntityAttributesUsingDELETE(entityType: string, entityId: string, scope: string, keys: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
}
