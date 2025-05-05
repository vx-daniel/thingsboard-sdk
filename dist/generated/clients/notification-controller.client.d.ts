import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class NotificationControllerClient extends BaseVXOlympusClient {
    getAvailableDeliveryMethodsUsingGET(options?: RequestInit): Promise<any>;
    createNotificationRequestUsingPOST(data: schemas.NotificationRequest, options?: RequestInit): Promise<{
        status: "SENT" | "PROCESSING" | "SCHEDULED";
        createdTime: number;
        targets: string[];
        id?: any;
        tenantId?: any;
        stats?: any;
        additionalConfig?: any;
        info?: any;
        originatorEntityId?: any;
        ruleId?: any;
        template?: any;
        templateId?: any;
    }>;
    getNotificationRequestPreviewUsingPOST(recipientsPreviewSize: number, data: schemas.NotificationRequest, options?: RequestInit): Promise<{
        processedTemplates: Record<string, any>;
        recipientsCountByTarget: Record<string, number>;
        recipientsPreview: string[];
        totalRecipientsCount: number;
    }>;
    getNotificationRequestByIdUsingGET(id: string, options?: RequestInit): Promise<{
        status: "SENT" | "PROCESSING" | "SCHEDULED";
        createdTime: number;
        targets: string[];
        deliveryMethods: ("EMAIL" | "MICROSOFT_TEAMS" | "SLACK" | "SMS" | "WEB")[];
        templateName: string;
        id?: any;
        tenantId?: any;
        stats?: any;
        additionalConfig?: any;
        info?: any;
        originatorEntityId?: any;
        ruleId?: any;
        template?: any;
        templateId?: any;
    }>;
    deleteNotificationRequestUsingDELETE(id: string, options?: RequestInit): Promise<any>;
    getNotificationRequestsUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getNotificationSettingsUsingGET(options?: RequestInit): Promise<{
        deliveryMethodsConfigs: Record<string, any>;
    }>;
    saveNotificationSettingsUsingPOST(data: schemas.NotificationSettings, options?: RequestInit): Promise<{
        deliveryMethodsConfigs: Record<string, any>;
    }>;
    getUserNotificationSettingsUsingGET(options?: RequestInit): Promise<{
        prefs: Record<string, any>;
    }>;
    saveUserNotificationSettingsUsingPOST(data: schemas.UserNotificationSettings, options?: RequestInit): Promise<{
        prefs: Record<string, any>;
    }>;
    deleteNotificationUsingDELETE(id: string, options?: RequestInit): Promise<any>;
    markNotificationAsReadUsingPUT(id: string, options?: RequestInit): Promise<any>;
    markAllNotificationsAsReadUsingPUT(options?: RequestInit): Promise<any>;
    getNotificationsUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, unreadOnly: boolean, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
}
