import { BaseVXOlympusClient } from '../../base-client';
export declare class DeviceConnectivityControllerClient extends BaseVXOlympusClient {
    downloadGatewayDockerComposeUsingGET(deviceId: string, options?: RequestInit): Promise<{
        description: string;
        file: string;
        filename: string;
        open: boolean;
        readable: boolean;
        uri: string;
        url: string;
        inputStream?: any;
    }>;
    getDevicePublishTelemetryCommandsUsingGET(deviceId: string, options?: RequestInit): Promise<{}>;
    downloadServerCertificateUsingGET(protocol: string, options?: RequestInit): Promise<{
        description: string;
        file: string;
        filename: string;
        open: boolean;
        readable: boolean;
        uri: string;
        url: string;
        inputStream?: any;
    }>;
}
