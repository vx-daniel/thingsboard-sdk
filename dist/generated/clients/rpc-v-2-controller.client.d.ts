import { BaseVXOlympusClient } from '../../base-client';
export declare class RpcV2ControllerClient extends BaseVXOlympusClient {
    handleOneWayDeviceRPCRequestUsingPOST_1(deviceId: string, data: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getPersistedRpcByDeviceUsingGET(deviceId: string, pageSize: number, page: number, rpcStatus: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getPersistedRpcUsingGET(rpcId: string, options?: RequestInit): Promise<{
        status: "DELETED" | "FAILED" | "SENT" | "DELIVERED" | "EXPIRED" | "QUEUED" | "SUCCESSFUL" | "TIMEOUT";
        createdTime: number;
        expirationTime: number;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        deviceId?: any;
        request?: any;
        response?: any;
    }>;
    deleteRpcUsingDELETE(rpcId: string, options?: RequestInit): Promise<any>;
    handleTwoWayDeviceRPCRequestUsingPOST_1(deviceId: string, data: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
}
