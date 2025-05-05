import { BaseVXOlympusClient } from '../../base-client';
export declare class AlarmControllerClient extends BaseVXOlympusClient {
    saveAlarmUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getHighestAlarmSeverityUsingGET(entityType: string, entityId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getAlarmInfoByIdUsingGET(alarmId: string, options?: RequestInit): Promise<unknown>;
    getAlarmTypesUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getAlarmByIdUsingGET(alarmId: string, options?: RequestInit): Promise<unknown>;
    deleteAlarmUsingDELETE(alarmId: string, options?: RequestInit): Promise<unknown>;
    ackAlarmUsingPOST(alarmId: string, options?: RequestInit): Promise<unknown>;
    unassignAlarmUsingDELETE(alarmId: string, options?: RequestInit): Promise<unknown>;
    assignAlarmUsingPOST(alarmId: string, assigneeId: string, options?: RequestInit): Promise<unknown>;
    clearAlarmUsingPOST(alarmId: string, options?: RequestInit): Promise<unknown>;
    getAlarmsUsingGET(entityType: string, entityId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getAllAlarmsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getAlarmsV2UsingGET(entityType: string, entityId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getAllAlarmsV2UsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
