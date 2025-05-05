import { BaseVXOlympusClient } from '../../base-client';
export declare class QueueControllerClient extends BaseVXOlympusClient {
    getQueueByNameUsingGET(queueName: string, options?: RequestInit): Promise<unknown>;
    getQueueByIdUsingGET(queueId: string, options?: RequestInit): Promise<unknown>;
    deleteQueueUsingDELETE(queueId: string, options?: RequestInit): Promise<unknown>;
    getTenantQueuesByServiceTypeUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    saveQueueUsingPOST(data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
}
