import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class ConverterControllerClient extends BaseVXOlympusClient {
    saveConverterUsingPOST(data: schemas.Converter, options?: RequestInit): Promise<{
        type: "DOWNLINK" | "UPLINK";
        createdTime: number;
        name: string;
        debugMode: boolean;
        edgeTemplate: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
    }>;
    testDownLinkConverterUsingPOST(scriptLang: string, data: schemas.JsonNode, options?: RequestInit): Promise<{}>;
    testUpLinkConverterUsingPOST(scriptLang: string, data: schemas.JsonNode, options?: RequestInit): Promise<{}>;
    getConverterByIdUsingGET(converterId: string, options?: RequestInit): Promise<{
        type: "DOWNLINK" | "UPLINK";
        createdTime: number;
        name: string;
        debugMode: boolean;
        edgeTemplate: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
    }>;
    deleteConverterUsingDELETE(converterId: string, options?: RequestInit): Promise<any>;
    getLatestConverterDebugInputUsingGET(converterId: string, converterType: string, integrationType: string, integrationName: string, options?: RequestInit): Promise<{}>;
    getConvertersByIdsUsingGET(converterIds: string, options?: RequestInit): Promise<any>;
    getConvertersUsingGET(isEdgeTemplate: boolean, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
}
