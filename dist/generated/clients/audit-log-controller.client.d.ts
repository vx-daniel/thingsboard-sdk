import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class AuditLogControllerClient extends BaseVXOlympusClient {
    getAuditLogsByCustomerId(customerId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'actionStatus' | 'actionType' | 'createdTime' | 'entityName' | 'entityType' | 'userName';
        sortOrder?: 'ASC' | 'DESC';
        startTime?: number;
        endTime?: number;
        actionTypes?: string;
    }, options?: RequestInit): Promise<schemas.PageData_Of_AuditLog>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {integer} queryParams.startTime - Query parameter
     * @param {integer} queryParams.endTime - Query parameter
     * @param {string} queryParams.actionTypes - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_AuditLog>}
     */
    getAuditLogsByEntityId(entityType: string, entityId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'actionStatus' | 'actionType' | 'createdTime' | 'entityName' | 'entityType' | 'userName';
        sortOrder?: 'ASC' | 'DESC';
        startTime?: number;
        endTime?: number;
        actionTypes?: string;
    }, options?: RequestInit): Promise<schemas.PageData_Of_AuditLog>;
    /**
     * @param {string} userId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {integer} queryParams.startTime - Query parameter
     * @param {integer} queryParams.endTime - Query parameter
     * @param {string} queryParams.actionTypes - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_AuditLog>}
     */
    getAuditLogsByUserId(userId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'actionStatus' | 'actionType' | 'createdTime' | 'entityName' | 'entityType' | 'userName';
        sortOrder?: 'ASC' | 'DESC';
        startTime?: number;
        endTime?: number;
        actionTypes?: string;
    }, options?: RequestInit): Promise<schemas.PageData_Of_AuditLog>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {integer} queryParams.startTime - Query parameter
     * @param {integer} queryParams.endTime - Query parameter
     * @param {string} queryParams.actionTypes - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_AuditLog>}
     */
    getAuditLogs(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'actionStatus' | 'actionType' | 'createdTime' | 'entityName' | 'entityType' | 'userName';
        sortOrder?: 'ASC' | 'DESC';
        startTime?: number;
        endTime?: number;
        actionTypes?: string;
    }, options?: RequestInit): Promise<schemas.PageData_Of_AuditLog>;
}
