import { BaseVXOlympusClient } from '../../base-client';
export declare class AlarmCommentControllerClient extends BaseVXOlympusClient {
    saveAlarmCommentUsingPOST(alarmId: string, data: any, options?: RequestInit): Promise<unknown>;
    deleteAlarmCommentUsingDELETE(alarmId: string, commentId: string, options?: RequestInit): Promise<unknown>;
    getAlarmCommentsUsingGET(alarmId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
}
