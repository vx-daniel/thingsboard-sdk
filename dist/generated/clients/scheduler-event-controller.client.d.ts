import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class SchedulerEventControllerClient extends BaseVXOlympusClient {
    getAllSchedulerEventsUsingGET(edgeId: string, options?: RequestInit): Promise<any>;
    assignSchedulerEventToEdgeUsingPOST(edgeId: string, schedulerEventId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        schedule?: any;
        additionalInfo?: any;
        ownerId?: any;
        originatorId?: any;
    }>;
    unassignSchedulerEventFromEdgeUsingDELETE(edgeId: string, schedulerEventId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        schedule?: any;
        additionalInfo?: any;
        ownerId?: any;
        originatorId?: any;
    }>;
    getEdgeSchedulerEventsUsingGET(edgeId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    saveSchedulerEventUsingPOST(data: schemas.SchedulerEvent, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        schedule?: any;
        additionalInfo?: any;
        ownerId?: any;
        configuration?: any;
        originatorId?: any;
    }>;
    getSchedulerEventInfoByIdUsingGET(schedulerEventId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        customerTitle: string;
        customerIsPublic: {};
        id?: any;
        tenantId?: any;
        customerId?: any;
        schedule?: any;
        additionalInfo?: any;
        ownerId?: any;
        originatorId?: any;
    }>;
    getSchedulerEventByIdUsingGET(schedulerEventId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        schedule?: any;
        additionalInfo?: any;
        ownerId?: any;
        configuration?: any;
        originatorId?: any;
    }>;
    deleteSchedulerEventUsingDELETE(schedulerEventId: string, options?: RequestInit): Promise<any>;
    getSchedulerEventsByIdsUsingGET(schedulerEventIds: string, options?: RequestInit): Promise<any>;
    getSchedulerEventsUsingGET(type: string, options?: RequestInit): Promise<any>;
}
