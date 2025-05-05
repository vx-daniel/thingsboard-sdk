import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class EventControllerClient extends BaseVXOlympusClient {
    clearEventsUsingPOST(entityType: string, entityId: string, startTime: number, endTime: number, data: schemas.EventFilter, options?: RequestInit): Promise<any>;
    getEventsUsingGET_1(entityType: string, entityId: string, eventType: string, tenantId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEventsUsingGET(entityType: string, entityId: string, tenantId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEventsUsingPOST(entityType: string, entityId: string, tenantId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, data: schemas.EventFilter, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
}
