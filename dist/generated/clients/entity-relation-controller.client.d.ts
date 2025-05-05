import { BaseVXOlympusClient } from '../../base-client';
export declare class EntityRelationControllerClient extends BaseVXOlympusClient {
    saveRelationUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    findByQueryUsingPOST_3(data: any, options?: RequestInit): Promise<unknown>;
    findInfoByQueryUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    findInfoByFromUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    findInfoByToUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    deleteRelationsUsingDELETE(queryParams: any, options?: RequestInit): Promise<unknown>;
    findByFromUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    findByFromUsingGET_1(queryParams: any, options?: RequestInit): Promise<unknown>;
    findByToUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    findByToUsingGET_1(queryParams: any, options?: RequestInit): Promise<unknown>;
    getRelationUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    deleteRelationUsingDELETE(queryParams: any, options?: RequestInit): Promise<unknown>;
}
