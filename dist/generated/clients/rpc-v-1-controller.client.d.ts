import { BaseVXOlympusClient } from '../../base-client';
export declare class RpcV1ControllerClient extends BaseVXOlympusClient {
    handleOneWayDeviceRPCRequestUsingPOST(deviceId: string, data: any, options?: RequestInit): Promise<unknown>;
    handleTwoWayDeviceRPCRequestUsingPOST(deviceId: string, data: any, options?: RequestInit): Promise<unknown>;
}
