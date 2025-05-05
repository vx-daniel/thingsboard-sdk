import { BaseVXOlympusClient } from '../../base-client';
export declare class DeviceConnectivityControllerClient extends BaseVXOlympusClient {
    downloadGatewayDockerComposeUsingGET(deviceId: string, options?: RequestInit): Promise<unknown>;
    getDevicePublishTelemetryCommandsUsingGET(deviceId: string, options?: RequestInit): Promise<unknown>;
    downloadServerCertificateUsingGET(protocol: string, options?: RequestInit): Promise<unknown>;
}
