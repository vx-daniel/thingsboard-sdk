import { BaseVXOlympusClient } from '../../base-client';
export declare class EntityQueryControllerClient extends BaseVXOlympusClient {
    countAlarmsByQueryUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    findAlarmDataByQueryUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    countEntitiesByQueryUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    findEntityDataByQueryUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    findEntityTimeseriesAndAttributesKeysByQueryUsingPOST(data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
}
