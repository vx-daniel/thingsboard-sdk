import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class EntityQueryControllerClient extends BaseVXOlympusClient {
    countAlarmsByQueryWithData(data: schemas.AlarmCountQuery, options?: RequestInit): Promise<number>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_AlarmData>}
     */
    findAlarmDataByQueryWithData(data: schemas.AlarmDataQuery, options?: RequestInit): Promise<schemas.PageData_Of_AlarmData>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<number>}
     */
    countEntitiesByQueryWithData(data: schemas.EntityCountQuery, options?: RequestInit): Promise<number>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntityData>}
     */
    findEntityDataByQueryWithData(data: schemas.EntityDataQuery, options?: RequestInit): Promise<schemas.PageData_Of_EntityData>;
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.timeseries - Query parameter
     * @param {boolean} queryParams.attributes - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    findEntityTimeseriesAndAttributesKeysByQueryWithData(data: schemas.EntityDataQuery, queryParams?: {
        timeseries?: boolean;
        attributes?: boolean;
    }, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
}
