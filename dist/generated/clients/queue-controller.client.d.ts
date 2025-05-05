import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class QueueControllerClient extends BaseVXOlympusClient {
    getQueueByName(queueName: string, options?: RequestInit): Promise<schemas.Queue>;
    /**
     * @param {string} queueId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Queue>}
     */
    getQueueById(queueId: string, options?: RequestInit): Promise<schemas.Queue>;
    /**
     * @param {string} queueId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteQueue(queueId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.serviceType - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Queue>}
     */
    getTenantQueuesByServiceType(queryParams?: {
        serviceType?: 'JS-EXECUTOR' | 'TB-CORE' | 'TB-RULE-ENGINE' | 'TB-TRANSPORT';
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'name' | 'topic';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_Queue>;
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.serviceType - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Queue>}
     */
    saveQueueWithData(data: schemas.Queue, queryParams?: {
        serviceType?: 'JS-EXECUTOR' | 'TB-CORE' | 'TB-RULE-ENGINE' | 'TB-TRANSPORT';
    }, options?: RequestInit): Promise<schemas.Queue>;
}
