import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class NotificationTemplateControllerClient extends BaseVXOlympusClient {
    listSlackConversations(queryParams?: {
        type?: 'DIRECT' | 'PRIVATE_CHANNEL' | 'PUBLIC_CHANNEL';
        token?: string;
    }, options?: RequestInit): Promise<Array<schemas.SlackConversation>>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.NotificationTemplate>}
     */
    saveNotificationTemplateWithData(data: schemas.NotificationTemplate, options?: RequestInit): Promise<schemas.NotificationTemplate>;
    /**
     * @param {string} id - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.NotificationTemplate>}
     */
    getNotificationTemplateById(id: string, options?: RequestInit): Promise<schemas.NotificationTemplate>;
    /**
     * @param {string} id - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteNotificationTemplateById(id: string, options?: RequestInit): Promise<void>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {string} queryParams.notificationTypes - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_NotificationTemplate>}
     */
    getNotificationTemplates(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: string;
        sortOrder?: string;
        notificationTypes?: 'ALARM' | 'ALARM_ASSIGNMENT' | 'ALARM_COMMENT' | 'API_USAGE_LIMIT' | 'DEVICE_ACTIVITY' | 'ENTITIES_LIMIT' | 'ENTITY_ACTION' | 'GENERAL' | 'INTEGRATION_LIFECYCLE_EVENT' | 'NEW_PLATFORM_VERSION' | 'RATE_LIMITS' | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT' | 'RULE_NODE';
    }, options?: RequestInit): Promise<schemas.PageData_Of_NotificationTemplate>;
}
