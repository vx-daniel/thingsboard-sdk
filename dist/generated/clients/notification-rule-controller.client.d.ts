import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class NotificationRuleControllerClient extends BaseVXOlympusClient {
    saveNotificationRuleWithData(data: schemas.NotificationRule, options?: RequestInit): Promise<schemas.NotificationRule>;
    /**
     * @param {string} id - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.NotificationRuleInfo>}
     */
    getNotificationRuleById(id: string, options?: RequestInit): Promise<schemas.NotificationRuleInfo>;
    /**
     * @param {string} id - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteNotificationRule(id: string, options?: RequestInit): Promise<void>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_NotificationRuleInfo>}
     */
    getNotificationRules(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: string;
        sortOrder?: string;
    }, options?: RequestInit): Promise<schemas.PageData_Of_NotificationRuleInfo>;
}
