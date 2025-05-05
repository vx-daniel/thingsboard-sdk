import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class NotificationTargetControllerClient extends BaseVXOlympusClient {
    saveNotificationTargetUsingPOST(data: schemas.NotificationTarget, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        tenantId?: any;
        configuration?: any;
    }>;
    getRecipientsForNotificationTargetConfigUsingPOST(pageSize: number, page: number, data: schemas.NotificationTarget, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getNotificationTargetByIdUsingGET(id: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        tenantId?: any;
        configuration?: any;
    }>;
    deleteNotificationTargetByIdUsingDELETE(id: string, options?: RequestInit): Promise<any>;
    getNotificationTargetsByIdsUsingGET(ids: string, options?: RequestInit): Promise<any>;
    getNotificationTargetsBySupportedNotificationTypeUsingGET(notificationType: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getNotificationTargetsUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
}
