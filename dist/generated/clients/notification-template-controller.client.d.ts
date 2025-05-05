import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class NotificationTemplateControllerClient extends BaseVXOlympusClient {
    listSlackConversationsUsingGET(type: string, token: string, options?: RequestInit): Promise<any>;
    saveNotificationTemplateUsingPOST(data: schemas.NotificationTemplate, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        notificationType: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT" | "RULE_NODE" | "GENERAL";
        tenantId?: any;
        configuration?: any;
    }>;
    getNotificationTemplateByIdUsingGET(id: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        notificationType: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT" | "RULE_NODE" | "GENERAL";
        tenantId?: any;
        configuration?: any;
    }>;
    deleteNotificationTemplateByIdUsingDELETE(id: string, options?: RequestInit): Promise<any>;
    getNotificationTemplatesUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, notificationTypes: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
}
