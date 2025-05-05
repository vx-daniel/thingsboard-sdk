import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class EntityQueryControllerClient extends BaseVXOlympusClient {
    countAlarmsByQueryUsingPOST(data: schemas.AlarmCountQuery, options?: RequestInit): Promise<any>;
    findAlarmDataByQueryUsingPOST(data: schemas.AlarmDataQuery, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    countEntitiesByQueryUsingPOST(data: schemas.EntityCountQuery, options?: RequestInit): Promise<any>;
    findEntityDataByQueryUsingPOST(data: schemas.EntityDataQuery, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    findEntityTimeseriesAndAttributesKeysByQueryUsingPOST(timeseries: boolean, attributes: boolean, data: schemas.EntityDataQuery, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
}
