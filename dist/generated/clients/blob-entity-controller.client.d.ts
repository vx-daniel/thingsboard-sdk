import { BaseVXOlympusClient } from '../../base-client';
export declare class BlobEntityControllerClient extends BaseVXOlympusClient {
    getBlobEntitiesByIdsUsingGET(blobEntityIds: string, options?: RequestInit): Promise<any>;
    getBlobEntitiesUsingGET(pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getBlobEntityInfoByIdUsingGET(blobEntityId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        contentType: "application/pdf" | "image/jpeg" | "image/png";
        customerTitle: string;
        customerIsPublic: {};
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    deleteBlobEntityUsingDELETE(blobEntityId: string, options?: RequestInit): Promise<any>;
    downloadBlobEntityUsingGET(blobEntityId: string, options?: RequestInit): Promise<{
        description: string;
        file: string;
        filename: string;
        open: boolean;
        readable: boolean;
        uri: string;
        url: string;
        inputStream?: any;
    }>;
}
