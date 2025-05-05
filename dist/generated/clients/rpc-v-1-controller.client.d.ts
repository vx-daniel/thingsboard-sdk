import { BaseVXOlympusClient } from '../../base-client';
export declare class RpcV1ControllerClient extends BaseVXOlympusClient {
    handleOneWayDeviceRPCRequestUsingPOST(deviceId: string, data: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    handleTwoWayDeviceRPCRequestUsingPOST(deviceId: string, data: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
}
