import { BaseVXOlympusClient } from '../../base-client';
export declare class EdgeEventControllerClient extends BaseVXOlympusClient {
    getEdgeEventsUsingGET(edgeId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
}
