import { BaseVXOlympusClient } from '../../base-client';
export declare class EdgeEventControllerClient extends BaseVXOlympusClient {
    getEdgeEventsUsingGET(edgeId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
}
