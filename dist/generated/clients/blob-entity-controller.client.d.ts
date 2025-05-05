import { BaseVXOlympusClient } from '../../base-client';
export declare class BlobEntityControllerClient extends BaseVXOlympusClient {
    getBlobEntitiesByIdsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getBlobEntitiesUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getBlobEntityInfoByIdUsingGET(blobEntityId: string, options?: RequestInit): Promise<unknown>;
    deleteBlobEntityUsingDELETE(blobEntityId: string, options?: RequestInit): Promise<unknown>;
    downloadBlobEntityUsingGET(blobEntityId: string, options?: RequestInit): Promise<unknown>;
}
