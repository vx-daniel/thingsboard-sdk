import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class AlarmCommentControllerClient extends BaseVXOlympusClient {
    saveAlarmCommentWithData(alarmId: string, data: schemas.AlarmComment, options?: RequestInit): Promise<schemas.AlarmComment>;
    /**
     * @param {string} alarmId - Path parameter
     * @param {string} commentId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteAlarmComment(alarmId: string, commentId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} alarmId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_AlarmCommentInfo>}
     */
    getAlarmComments(alarmId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        sortProperty?: 'createdTime' | 'id';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_AlarmCommentInfo>;
}
