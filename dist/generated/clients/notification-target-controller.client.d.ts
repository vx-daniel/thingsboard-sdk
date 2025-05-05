import { BaseVXOlympusClient } from '../../base-client';
export declare class NotificationTargetControllerClient extends BaseVXOlympusClient {
    saveNotificationTargetUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getRecipientsForNotificationTargetConfigUsingPOST(data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
    getNotificationTargetByIdUsingGET(id: string, options?: RequestInit): Promise<unknown>;
    deleteNotificationTargetByIdUsingDELETE(id: string, options?: RequestInit): Promise<unknown>;
    getNotificationTargetsByIdsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getNotificationTargetsBySupportedNotificationTypeUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getNotificationTargetsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
