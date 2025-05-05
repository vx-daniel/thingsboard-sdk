import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class NotificationControllerClient extends BaseVXOlympusClient {
    getAvailableDeliveryMethods(options?: RequestInit): Promise<Array<string>>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.NotificationRequest>}
     */
    createNotificationRequestWithData(data: schemas.NotificationRequest, options?: RequestInit): Promise<schemas.NotificationRequest>;
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.recipientsPreviewSize - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.NotificationRequestPreview>}
     */
    getNotificationRequestPreviewWithData(data: schemas.NotificationRequest, queryParams?: {
        recipientsPreviewSize?: number;
    }, options?: RequestInit): Promise<schemas.NotificationRequestPreview>;
    /**
     * @param {string} id - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.NotificationRequestInfo>}
     */
    getNotificationRequestById(id: string, options?: RequestInit): Promise<schemas.NotificationRequestInfo>;
    /**
     * @param {string} id - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteNotificationRequest(id: string, options?: RequestInit): Promise<void>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_NotificationRequestInfo>}
     */
    getNotificationRequests(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: string;
        sortOrder?: string;
    }, options?: RequestInit): Promise<schemas.PageData_Of_NotificationRequestInfo>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.NotificationSettings>}
     */
    getNotificationSettings(options?: RequestInit): Promise<schemas.NotificationSettings>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.NotificationSettings>}
     */
    saveNotificationSettingsWithData(data: schemas.NotificationSettings, options?: RequestInit): Promise<schemas.NotificationSettings>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.UserNotificationSettings>}
     */
    getUserNotificationSettings(options?: RequestInit): Promise<schemas.UserNotificationSettings>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.UserNotificationSettings>}
     */
    saveUserNotificationSettingsWithData(data: schemas.UserNotificationSettings, options?: RequestInit): Promise<schemas.UserNotificationSettings>;
    /**
     * @param {string} id - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteNotification(id: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} id - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    markNotificationAsRead(id: string, options?: RequestInit): Promise<void>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    markAllNotificationsAsRead(options?: RequestInit): Promise<void>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {boolean} queryParams.unreadOnly - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Notification>}
     */
    getNotifications(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: string;
        sortOrder?: string;
        unreadOnly?: boolean;
    }, options?: RequestInit): Promise<schemas.PageData_Of_Notification>;
}
