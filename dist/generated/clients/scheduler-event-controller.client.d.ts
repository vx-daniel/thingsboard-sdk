import { BaseVXOlympusClient } from '../../base-client';
export declare class SchedulerEventControllerClient extends BaseVXOlympusClient {
    getAllSchedulerEventsUsingGET(edgeId: string, options?: RequestInit): Promise<unknown>;
    assignSchedulerEventToEdgeUsingPOST(edgeId: string, schedulerEventId: string, options?: RequestInit): Promise<unknown>;
    unassignSchedulerEventFromEdgeUsingDELETE(edgeId: string, schedulerEventId: string, options?: RequestInit): Promise<unknown>;
    getEdgeSchedulerEventsUsingGET(edgeId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    saveSchedulerEventUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getSchedulerEventInfoByIdUsingGET(schedulerEventId: string, options?: RequestInit): Promise<unknown>;
    getSchedulerEventByIdUsingGET(schedulerEventId: string, options?: RequestInit): Promise<unknown>;
    deleteSchedulerEventUsingDELETE(schedulerEventId: string, options?: RequestInit): Promise<unknown>;
    getSchedulerEventsByIdsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getSchedulerEventsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
