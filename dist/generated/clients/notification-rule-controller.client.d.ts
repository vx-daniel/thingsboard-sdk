import { BaseVXOlympusClient } from '../../base-client';
export declare class NotificationRuleControllerClient extends BaseVXOlympusClient {
    saveNotificationRuleUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getNotificationRuleByIdUsingGET(id: string, options?: RequestInit): Promise<unknown>;
    deleteNotificationRuleUsingDELETE(id: string, options?: RequestInit): Promise<unknown>;
    getNotificationRulesUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
