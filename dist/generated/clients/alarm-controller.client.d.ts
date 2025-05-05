import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class AlarmControllerClient extends BaseVXOlympusClient {
    saveAlarmWithData(data: schemas.Alarm, options?: RequestInit): Promise<schemas.Alarm>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.searchStatus - Query parameter
     * @param {string} queryParams.status - Query parameter
     * @param {string} queryParams.assigneeId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<string>}
     */
    getHighestAlarmSeverity(entityType: string, entityId: string, queryParams?: {
        searchStatus?: 'ACK' | 'ACTIVE' | 'ANY' | 'CLEARED' | 'UNACK';
        status?: 'ACTIVE_ACK' | 'ACTIVE_UNACK' | 'CLEARED_ACK' | 'CLEARED_UNACK';
        assigneeId?: string;
    }, options?: RequestInit): Promise<string>;
    /**
     * @param {string} alarmId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AlarmInfo>}
     */
    getAlarmInfoById(alarmId: string, options?: RequestInit): Promise<schemas.AlarmInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntitySubtype>}
     */
    getAlarmTypes(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_EntitySubtype>;
    /**
     * @param {string} alarmId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Alarm>}
     */
    getAlarmById(alarmId: string, options?: RequestInit): Promise<schemas.Alarm>;
    /**
     * @param {string} alarmId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<boolean>}
     */
    deleteAlarm(alarmId: string, options?: RequestInit): Promise<boolean>;
    /**
     * @param {string} alarmId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AlarmInfo>}
     */
    ackAlarm(alarmId: string, options?: RequestInit): Promise<schemas.AlarmInfo>;
    /**
     * @param {string} alarmId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Alarm>}
     */
    unassignAlarm(alarmId: string, options?: RequestInit): Promise<schemas.Alarm>;
    /**
     * @param {string} alarmId - Path parameter
     * @param {string} assigneeId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Alarm>}
     */
    assignAlarm(alarmId: string, assigneeId: string, options?: RequestInit): Promise<schemas.Alarm>;
    /**
     * @param {string} alarmId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AlarmInfo>}
     */
    clearAlarm(alarmId: string, options?: RequestInit): Promise<schemas.AlarmInfo>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.searchStatus - Query parameter
     * @param {string} queryParams.status - Query parameter
     * @param {string} queryParams.assigneeId - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {integer} queryParams.startTime - Query parameter
     * @param {integer} queryParams.endTime - Query parameter
     * @param {boolean} queryParams.fetchOriginator - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_AlarmInfo>}
     */
    getAlarms(entityType: string, entityId: string, queryParams?: {
        searchStatus?: 'ACK' | 'ACTIVE' | 'ANY' | 'CLEARED' | 'UNACK';
        status?: 'ACTIVE_ACK' | 'ACTIVE_UNACK' | 'CLEARED_ACK' | 'CLEARED_UNACK';
        assigneeId?: string;
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'ackTs' | 'clearTs' | 'createdTime' | 'endTs' | 'severity' | 'startTs' | 'status' | 'type';
        sortOrder?: 'ASC' | 'DESC';
        startTime?: number;
        endTime?: number;
        fetchOriginator?: boolean;
    }, options?: RequestInit): Promise<schemas.PageData_Of_AlarmInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.searchStatus - Query parameter
     * @param {string} queryParams.status - Query parameter
     * @param {string} queryParams.assigneeId - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {integer} queryParams.startTime - Query parameter
     * @param {integer} queryParams.endTime - Query parameter
     * @param {boolean} queryParams.fetchOriginator - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_AlarmInfo>}
     */
    getAllAlarms(queryParams?: {
        searchStatus?: 'ACK' | 'ACTIVE' | 'ANY' | 'CLEARED' | 'UNACK';
        status?: 'ACTIVE_ACK' | 'ACTIVE_UNACK' | 'CLEARED_ACK' | 'CLEARED_UNACK';
        assigneeId?: string;
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'ackTs' | 'clearTs' | 'createdTime' | 'endTs' | 'severity' | 'startTs' | 'status' | 'type';
        sortOrder?: 'ASC' | 'DESC';
        startTime?: number;
        endTime?: number;
        fetchOriginator?: boolean;
    }, options?: RequestInit): Promise<schemas.PageData_Of_AlarmInfo>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.statusList - Query parameter
     * @param {string} queryParams.severityList - Query parameter
     * @param {string} queryParams.typeList - Query parameter
     * @param {string} queryParams.assigneeId - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {integer} queryParams.startTime - Query parameter
     * @param {integer} queryParams.endTime - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_AlarmInfo>}
     */
    getAlarmsV2(entityType: string, entityId: string, queryParams?: {
        statusList?: 'ACK' | 'ACTIVE' | 'ANY' | 'CLEARED' | 'UNACK';
        severityList?: 'CRITICAL' | 'INDETERMINATE' | 'MAJOR' | 'MINOR' | 'WARNING';
        typeList?: string;
        assigneeId?: string;
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'ackTs' | 'clearTs' | 'createdTime' | 'endTs' | 'severity' | 'startTs' | 'status' | 'type';
        sortOrder?: 'ASC' | 'DESC';
        startTime?: number;
        endTime?: number;
    }, options?: RequestInit): Promise<schemas.PageData_Of_AlarmInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.statusList - Query parameter
     * @param {string} queryParams.severityList - Query parameter
     * @param {string} queryParams.typeList - Query parameter
     * @param {string} queryParams.assigneeId - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {integer} queryParams.startTime - Query parameter
     * @param {integer} queryParams.endTime - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_AlarmInfo>}
     */
    getAllAlarmsV2(queryParams?: {
        statusList?: 'ACK' | 'ACTIVE' | 'ANY' | 'CLEARED' | 'UNACK';
        severityList?: 'CRITICAL' | 'INDETERMINATE' | 'MAJOR' | 'MINOR' | 'WARNING';
        typeList?: string;
        assigneeId?: string;
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'ackTs' | 'clearTs' | 'createdTime' | 'endTs' | 'severity' | 'startTs' | 'status' | 'type';
        sortOrder?: 'ASC' | 'DESC';
        startTime?: number;
        endTime?: number;
    }, options?: RequestInit): Promise<schemas.PageData_Of_AlarmInfo>;
}
