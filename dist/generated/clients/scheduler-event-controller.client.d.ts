import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class SchedulerEventControllerClient extends BaseVXOlympusClient {
    getAllSchedulerEvents(edgeId: string, options?: RequestInit): Promise<Array<schemas.SchedulerEventInfo>>;
    /**
     * @param {string} edgeId - Path parameter
     * @param {string} schedulerEventId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.SchedulerEventInfo>}
     */
    assignSchedulerEventToEdge(edgeId: string, schedulerEventId: string, options?: RequestInit): Promise<schemas.SchedulerEventInfo>;
    /**
     * @param {string} edgeId - Path parameter
     * @param {string} schedulerEventId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.SchedulerEventInfo>}
     */
    unassignSchedulerEventFromEdge(edgeId: string, schedulerEventId: string, options?: RequestInit): Promise<schemas.SchedulerEventInfo>;
    /**
     * @param {string} edgeId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_SchedulerEventInfo>}
     */
    getEdgeSchedulerEvents(edgeId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: string;
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_SchedulerEventInfo>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.SchedulerEvent>}
     */
    saveSchedulerEventWithData(data: schemas.SchedulerEvent, options?: RequestInit): Promise<schemas.SchedulerEvent>;
    /**
     * @param {string} schedulerEventId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.SchedulerEventWithCustomerInfo>}
     */
    getSchedulerEventInfoById(schedulerEventId: string, options?: RequestInit): Promise<schemas.SchedulerEventWithCustomerInfo>;
    /**
     * @param {string} schedulerEventId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.SchedulerEvent>}
     */
    getSchedulerEventById(schedulerEventId: string, options?: RequestInit): Promise<schemas.SchedulerEvent>;
    /**
     * @param {string} schedulerEventId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteSchedulerEvent(schedulerEventId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.schedulerEventIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.SchedulerEventInfo>>}
     */
    getSchedulerEventsByIds(queryParams?: {
        schedulerEventIds?: string;
    }, options?: RequestInit): Promise<Array<schemas.SchedulerEventInfo>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.type - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.SchedulerEventWithCustomerInfo>>}
     */
    getSchedulerEvents(queryParams?: {
        type?: string;
    }, options?: RequestInit): Promise<Array<schemas.SchedulerEventWithCustomerInfo>>;
}
