import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class EdgeEventControllerClient extends BaseVXOlympusClient {
    getEdgeEvents(edgeId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type';
        sortOrder?: 'ASC' | 'DESC';
        startTime?: number;
        endTime?: number;
    }, options?: RequestInit): Promise<schemas.PageData_Of_EdgeEvent>;
}
