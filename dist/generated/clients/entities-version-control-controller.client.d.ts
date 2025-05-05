import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class EntitiesVersionControlControllerClient extends BaseVXOlympusClient {
    listBranchesUsingGET(options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    compareEntityDataToVersionUsingGET(entityType: string, internalEntityUuid: string, versionId: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    loadEntitiesVersionUsingPOST(data: schemas.VersionLoadRequest, options?: RequestInit): Promise<any>;
    listEntitiesAtVersionUsingGET(entityType: string, versionId: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getVersionLoadRequestStatusUsingGET(requestId: string, options?: RequestInit): Promise<{
        result: any[];
        done: boolean;
        error?: any;
    }>;
    listAllEntitiesAtVersionUsingGET(versionId: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getEntityDataInfoUsingGET(versionId: string, entityType: string, externalEntityUuid: string, internalEntityId: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    saveEntitiesVersionUsingPOST(data: schemas.VersionCreateRequest, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    listEntityVersionsUsingGET(entityType: string, externalEntityUuid: string, branch: string, internalEntityId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    listEntityTypeVersionsUsingGET(entityType: string, branch: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getVersionCreateRequestStatusUsingGET(requestId: string, options?: RequestInit): Promise<{
        error: string;
        added: number;
        done: boolean;
        modified: number;
        removed: number;
        version?: any;
    }>;
    listVersionsUsingGET(branch: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
}
