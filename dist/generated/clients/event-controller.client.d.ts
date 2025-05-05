import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class EventControllerClient extends BaseVXOlympusClient {
    clearEventsWithData(entityType: string, entityId: string, data: schemas.EventFilter, queryParams?: {
        startTime?: number;
        endTime?: number;
    }, options?: RequestInit): Promise<void>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {string} eventType - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.tenantId - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {integer} queryParams.startTime - Query parameter
     * @param {integer} queryParams.endTime - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EventInfo>}
     */
    getEventsUsingGET_1(entityType: string, entityId: string, eventType: string, queryParams?: {
        tenantId?: string;
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'id' | 'ts';
        sortOrder?: 'ASC' | 'DESC';
        startTime?: number;
        endTime?: number;
    }, options?: RequestInit): Promise<schemas.PageData_Of_EventInfo>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.tenantId - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {integer} queryParams.startTime - Query parameter
     * @param {integer} queryParams.endTime - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EventInfo>}
     */
    getEvents(entityType: string, entityId: string, queryParams?: {
        tenantId?: string;
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'id' | 'ts';
        sortOrder?: 'ASC' | 'DESC';
        startTime?: number;
        endTime?: number;
    }, options?: RequestInit): Promise<schemas.PageData_Of_EventInfo>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.tenantId - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {integer} queryParams.startTime - Query parameter
     * @param {integer} queryParams.endTime - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EventInfo>}
     */
    getEventsWithData(entityType: string, entityId: string, data: schemas.EventFilter, queryParams?: {
        tenantId?: string;
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'id' | 'ts';
        sortOrder?: 'ASC' | 'DESC';
        startTime?: number;
        endTime?: number;
    }, options?: RequestInit): Promise<schemas.PageData_Of_EventInfo>;
}
