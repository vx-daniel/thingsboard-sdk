import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class DeviceConnectivityControllerClient extends BaseVXOlympusClient {
    downloadGatewayDockerCompose(deviceId: string, options?: RequestInit): Promise<schemas.Resource>;
    /**
     * @param {string} deviceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    getDevicePublishTelemetryCommands(deviceId: string, options?: RequestInit): Promise<schemas.JsonNode>;
    /**
     * @param {string} protocol - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Resource>}
     */
    downloadServerCertificate(protocol: string, options?: RequestInit): Promise<schemas.Resource>;
}
