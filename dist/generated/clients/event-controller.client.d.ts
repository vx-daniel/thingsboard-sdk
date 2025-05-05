import { BaseVXOlympusClient } from '../../base-client';
export declare class EventControllerClient extends BaseVXOlympusClient {
    clearEventsUsingPOST(entityType: string, entityId: string, data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
    getEventsUsingGET_1(entityType: string, entityId: string, eventType: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getEventsUsingGET(entityType: string, entityId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getEventsUsingPOST(entityType: string, entityId: string, data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
}
