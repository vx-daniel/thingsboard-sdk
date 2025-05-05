import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class RpcV2ControllerClient extends BaseVXOlympusClient {
    handleOneWayDeviceRPCRequestUsingPOST_1WithData(deviceId: string, data: string, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {string} deviceId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.rpcStatus - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    getPersistedRpcByDevice(deviceId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        rpcStatus?: 'DELIVERED' | 'EXPIRED' | 'FAILED' | 'QUEUED' | 'SENT' | 'SUCCESSFUL' | 'TIMEOUT';
        textSearch?: string;
        sortProperty?: 'createdTime' | 'expirationTime' | 'request' | 'response';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {string} rpcId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Rpc>}
     */
    getPersistedRpc(rpcId: string, options?: RequestInit): Promise<schemas.Rpc>;
    /**
     * @param {string} rpcId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteRpc(rpcId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} deviceId - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    handleTwoWayDeviceRPCRequestUsingPOST_1WithData(deviceId: string, data: string, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
}
