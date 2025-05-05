import { BaseVXOlympusClient } from '../../base-client';
export declare class EntitiesVersionControlControllerClient extends BaseVXOlympusClient {
    listBranchesUsingGET(options?: RequestInit): Promise<unknown>;
    compareEntityDataToVersionUsingGET(entityType: string, internalEntityUuid: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    loadEntitiesVersionUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    listEntitiesAtVersionUsingGET(entityType: string, versionId: string, options?: RequestInit): Promise<unknown>;
    getVersionLoadRequestStatusUsingGET(requestId: string, options?: RequestInit): Promise<unknown>;
    listAllEntitiesAtVersionUsingGET(versionId: string, options?: RequestInit): Promise<unknown>;
    getEntityDataInfoUsingGET(versionId: string, entityType: string, externalEntityUuid: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    saveEntitiesVersionUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    listEntityVersionsUsingGET(entityType: string, externalEntityUuid: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    listEntityTypeVersionsUsingGET(entityType: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getVersionCreateRequestStatusUsingGET(requestId: string, options?: RequestInit): Promise<unknown>;
    listVersionsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
