import { BaseVXOlympusClient } from '../../base-client';
export declare class RpcV2ControllerClient extends BaseVXOlympusClient {
    handleOneWayDeviceRPCRequestUsingPOST_1(deviceId: string, data: any, options?: RequestInit): Promise<unknown>;
    getPersistedRpcByDeviceUsingGET(deviceId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getPersistedRpcUsingGET(rpcId: string, options?: RequestInit): Promise<unknown>;
    deleteRpcUsingDELETE(rpcId: string, options?: RequestInit): Promise<unknown>;
    handleTwoWayDeviceRPCRequestUsingPOST_1(deviceId: string, data: any, options?: RequestInit): Promise<unknown>;
}
