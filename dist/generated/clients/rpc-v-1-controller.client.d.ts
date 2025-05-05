import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class RpcV1ControllerClient extends BaseVXOlympusClient {
    handleOneWayDeviceRPCRequestWithData(deviceId: string, data: string, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {string} deviceId - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    handleTwoWayDeviceRPCRequestWithData(deviceId: string, data: string, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
}
