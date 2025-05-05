import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class NotificationRuleControllerClient extends BaseVXOlympusClient {
    saveNotificationRuleUsingPOST(data: schemas.NotificationRule, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        triggerType: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
        enabled: boolean;
        tenantId?: any;
        additionalConfig?: any;
        templateId?: any;
        recipientsConfig?: any;
        triggerConfig?: any;
    }>;
    getNotificationRuleByIdUsingGET(id: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        triggerType: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
        enabled: boolean;
        deliveryMethods: ("EMAIL" | "MICROSOFT_TEAMS" | "SLACK" | "SMS" | "WEB")[];
        templateName: string;
        tenantId?: any;
        additionalConfig?: any;
        templateId?: any;
        recipientsConfig?: any;
        triggerConfig?: any;
    }>;
    deleteNotificationRuleUsingDELETE(id: string, options?: RequestInit): Promise<any>;
    getNotificationRulesUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
}
