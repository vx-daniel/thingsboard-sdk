import { BaseVXOlympusClient } from '../../base-client';
export declare class NotificationTemplateControllerClient extends BaseVXOlympusClient {
    listSlackConversationsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    saveNotificationTemplateUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getNotificationTemplateByIdUsingGET(id: string, options?: RequestInit): Promise<unknown>;
    deleteNotificationTemplateByIdUsingDELETE(id: string, options?: RequestInit): Promise<unknown>;
    getNotificationTemplatesUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
