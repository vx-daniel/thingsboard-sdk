import { BaseVXOlympusClient } from '../../base-client';
export declare class NotificationControllerClient extends BaseVXOlympusClient {
    getAvailableDeliveryMethodsUsingGET(options?: RequestInit): Promise<unknown>;
    createNotificationRequestUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getNotificationRequestPreviewUsingPOST(data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
    getNotificationRequestByIdUsingGET(id: string, options?: RequestInit): Promise<unknown>;
    deleteNotificationRequestUsingDELETE(id: string, options?: RequestInit): Promise<unknown>;
    getNotificationRequestsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getNotificationSettingsUsingGET(options?: RequestInit): Promise<unknown>;
    saveNotificationSettingsUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getUserNotificationSettingsUsingGET(options?: RequestInit): Promise<unknown>;
    saveUserNotificationSettingsUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    deleteNotificationUsingDELETE(id: string, options?: RequestInit): Promise<unknown>;
    markNotificationAsReadUsingPUT(id: string, options?: RequestInit): Promise<unknown>;
    markAllNotificationsAsReadUsingPUT(options?: RequestInit): Promise<unknown>;
    getNotificationsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
