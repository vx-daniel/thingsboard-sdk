import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class TbResourceControllerClient extends BaseVXOlympusClient {
    saveResourceUsingPOST(data: schemas.TbResource, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        link: string;
        title: string;
        public: boolean;
        fileName: string;
        publicResourceKey: string;
        resourceKey: string;
        publicLink: string;
        resourceType: "IMAGE" | "JKS" | "JS_MODULE" | "LWM2M_MODEL" | "PKCS_12";
        etag: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        descriptor?: any;
    }>;
    getResourceInfoByIdUsingGET(resourceId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        link: string;
        title: string;
        public: boolean;
        fileName: string;
        publicResourceKey: string;
        resourceKey: string;
        publicLink: string;
        resourceType: "IMAGE" | "JKS" | "JS_MODULE" | "LWM2M_MODEL" | "PKCS_12";
        etag: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        descriptor?: any;
    }>;
    downloadJksResourceIfChangedUsingGET(resourceId: string, If_None_Match: string, options?: RequestInit): Promise<any>;
    downloadJsResourceIfChangedUsingGET(resourceId: string, If_None_Match: string, options?: RequestInit): Promise<any>;
    getLwm2mListObjectsPageUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<any>;
    downloadLwm2mResourceIfChangedUsingGET(resourceId: string, If_None_Match: string, options?: RequestInit): Promise<any>;
    getLwm2mListObjectsUsingGET(sortOrder: string, sortProperty: string, objectIds: string, options?: RequestInit): Promise<any>;
    downloadPkcs12ResourceIfChangedUsingGET(resourceId: string, If_None_Match: string, options?: RequestInit): Promise<any>;
    getTenantResourcesUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    deleteResourceUsingDELETE(resourceId: string, options?: RequestInit): Promise<any>;
    downloadResourceUsingGET(resourceId: string, options?: RequestInit): Promise<{
        description: string;
        file: string;
        byteArray: string;
        filename: string;
        open: boolean;
        readable: boolean;
        uri: string;
        url: string;
        inputStream?: any;
    }>;
    getResourcesUsingGET(pageSize: number, page: number, resourceType: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
}
