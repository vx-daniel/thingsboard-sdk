import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class AlarmCommentControllerClient extends BaseVXOlympusClient {
    saveAlarmCommentUsingPOST(alarmId: string, data: schemas.AlarmComment, options?: RequestInit): Promise<{
        type: "OTHER" | "SYSTEM";
        createdTime: number;
        name: string;
        id?: any;
        alarmId?: any;
        userId?: any;
        comment?: any;
    }>;
    deleteAlarmCommentUsingDELETE(alarmId: string, commentId: string, options?: RequestInit): Promise<any>;
    getAlarmCommentsUsingGET(alarmId: string, pageSize: number, page: number, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
}
