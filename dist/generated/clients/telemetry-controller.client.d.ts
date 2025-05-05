import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class TelemetryControllerClient extends BaseVXOlympusClient {
    saveDeviceAttributesWithData(deviceId: string, scope: 'SERVER_SCOPE' | 'SHARED_SCOPE', data: schemas.JsonNode, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {string} deviceId - Path parameter
     * @param {string} scope - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.keys - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    deleteDeviceAttributes(deviceId: string, scope: 'CLIENT_SCOPE' | 'SERVER_SCOPE' | 'SHARED_SCOPE', queryParams?: {
        keys?: string;
    }, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {string} scope - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    saveEntityAttributesV2WithData(entityType: string, entityId: string, scope: 'SERVER_SCOPE' | 'SHARED_SCOPE', data: schemas.JsonNode, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    getAttributeKeys(entityType: string, entityId: string, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {string} scope - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    getAttributeKeysByScope(entityType: string, entityId: string, scope: 'CLIENT_SCOPE' | 'SERVER_SCOPE' | 'SHARED_SCOPE', options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    getTimeseriesKeysUsingGET_1(entityType: string, entityId: string, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.keys - Query parameter
     * @param {boolean} queryParams.deleteAllDataForKeys - Query parameter
     * @param {integer} queryParams.startTs - Query parameter
     * @param {integer} queryParams.endTs - Query parameter
     * @param {boolean} queryParams.deleteLatest - Query parameter
     * @param {boolean} queryParams.rewriteLatestIfDeleted - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    deleteEntityTimeseries(entityType: string, entityId: string, queryParams?: {
        keys?: string;
        deleteAllDataForKeys?: boolean;
        startTs?: number;
        endTs?: number;
        deleteLatest?: boolean;
        rewriteLatestIfDeleted?: boolean;
    }, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {string} scope - Path parameter
     * @param {string} ttl - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    saveEntityTelemetryWithTTLWithData(entityType: string, entityId: string, scope: 'ANY', ttl: string, data: string, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {string} scope - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    saveEntityTelemetryWithData(entityType: string, entityId: string, scope: 'ANY', data: string, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {string} scope - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.keys - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    getAttributesByScope(entityType: string, entityId: string, scope: 'CLIENT_SCOPE' | 'SERVER_SCOPE' | 'SHARED_SCOPE', queryParams?: {
        keys?: string;
    }, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.keys - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    getAttributes(entityType: string, entityId: string, queryParams?: {
        keys?: string;
    }, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.keys - Query parameter
     * @param {integer} queryParams.startTs - Query parameter
     * @param {integer} queryParams.endTs - Query parameter
     * @param {integer} queryParams.interval - Query parameter
     * @param {integer} queryParams.limit - Query parameter
     * @param {string} queryParams.agg - Query parameter
     * @param {string} queryParams.orderBy - Query parameter
     * @param {boolean} queryParams.useStrictDataTypes - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    getTimeseries(entityType: string, entityId: string, queryParams?: {
        keys?: string;
        startTs?: number;
        endTs?: number;
        interval?: number;
        limit?: number;
        agg?: 'AVG' | 'COUNT' | 'MAX' | 'MIN' | 'NONE' | 'SUM';
        orderBy?: 'ASC' | 'DESC';
        useStrictDataTypes?: boolean;
    }, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.keys - Query parameter
     * @param {boolean} queryParams.useStrictDataTypes - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    getLatestTimeseries(entityType: string, entityId: string, queryParams?: {
        keys?: string;
        useStrictDataTypes?: boolean;
    }, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {string} scope - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    saveEntityAttributesV1WithData(entityType: string, entityId: string, scope: 'SERVER_SCOPE' | 'SHARED_SCOPE', data: schemas.JsonNode, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {string} scope - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.keys - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    deleteEntityAttributes(entityType: string, entityId: string, scope: 'CLIENT_SCOPE' | 'SERVER_SCOPE' | 'SHARED_SCOPE', queryParams?: {
        keys?: string;
    }, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
}
