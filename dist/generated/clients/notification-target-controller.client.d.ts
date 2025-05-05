import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class NotificationTargetControllerClient extends BaseVXOlympusClient {
    saveNotificationTargetWithData(data: schemas.NotificationTarget, options?: RequestInit): Promise<schemas.NotificationTarget>;
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_User>}
     */
    getRecipientsForNotificationTargetConfigWithData(data: schemas.NotificationTarget, queryParams?: {
        pageSize?: number;
        page?: number;
    }, options?: RequestInit): Promise<schemas.PageData_Of_User>;
    /**
     * @param {string} id - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.NotificationTarget>}
     */
    getNotificationTargetById(id: string, options?: RequestInit): Promise<schemas.NotificationTarget>;
    /**
     * @param {string} id - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteNotificationTargetById(id: string, options?: RequestInit): Promise<void>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.ids - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.NotificationTarget>>}
     */
    getNotificationTargetsByIds(queryParams?: {
        ids?: string;
    }, options?: RequestInit): Promise<Array<schemas.NotificationTarget>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.notificationType - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_NotificationTarget>}
     */
    getNotificationTargetsBySupportedNotificationType(queryParams?: {
        notificationType?: 'ALARM' | 'ALARM_ASSIGNMENT' | 'ALARM_COMMENT' | 'API_USAGE_LIMIT' | 'DEVICE_ACTIVITY' | 'ENTITIES_LIMIT' | 'ENTITY_ACTION' | 'GENERAL' | 'INTEGRATION_LIFECYCLE_EVENT' | 'NEW_PLATFORM_VERSION' | 'RATE_LIMITS' | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT' | 'RULE_NODE';
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: string;
        sortOrder?: string;
    }, options?: RequestInit): Promise<schemas.PageData_Of_NotificationTarget>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_NotificationTarget>}
     */
    getNotificationTargets(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: string;
        sortOrder?: string;
    }, options?: RequestInit): Promise<schemas.PageData_Of_NotificationTarget>;
}
