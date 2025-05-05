import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class EdgeControllerClient extends BaseVXOlympusClient {
    getCustomerEdgeInfosUsingGET(customerId: string, pageSize: number, page: number, includeCustomers: boolean, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getCustomerEdgesUsingGET(customerId: string, pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    processEdgesBulkImportUsingPOST(data: schemas.BulkImportRequest, options?: RequestInit): Promise<{
        errorsList: string[];
        created?: any;
        errors?: any;
        updated?: any;
    }>;
    getEdgeInfoByIdUsingGET(edgeId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        ownerName: string;
        groups: any[];
        routingKey: string;
        secret: string;
        edgeLicenseKey: string;
        cloudEndpoint: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        rootRuleChainId?: any;
    }>;
    getEdgeInstallInstructionsUsingGET(edgeId: string, method: string, options?: RequestInit): Promise<{
        instructions: string;
    }>;
    getEdgeUpgradeInstructionsUsingGET(edgeVersion: string, method: string, options?: RequestInit): Promise<{
        instructions: string;
    }>;
    findMissingToRelatedRuleChainsUsingGET(edgeId: string, options?: RequestInit): Promise<any>;
    syncEdgeUsingPOST(edgeId: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getEdgeTypesUsingGET(options?: RequestInit): Promise<any>;
    getEdgeByIdUsingGET(edgeId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        routingKey: string;
        secret: string;
        edgeLicenseKey: string;
        cloudEndpoint: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        rootRuleChainId?: any;
    }>;
    deleteEdgeUsingDELETE(edgeId: string, options?: RequestInit): Promise<any>;
    isEdgeUpgradeAvailableUsingGET(edgeId: string, options?: RequestInit): Promise<any>;
    setEdgeRootRuleChainUsingPOST(edgeId: string, ruleChainId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        routingKey: string;
        secret: string;
        edgeLicenseKey: string;
        cloudEndpoint: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        rootRuleChainId?: any;
    }>;
    getAllEdgeInfosUsingGET(pageSize: number, page: number, includeCustomers: boolean, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    findByQueryUsingPOST_2(data: schemas.EdgeSearchQuery, options?: RequestInit): Promise<any>;
    isEdgesSupportEnabledUsingGET(options?: RequestInit): Promise<any>;
    getEdgesByIdsUsingGET(edgeIds: string, options?: RequestInit): Promise<any>;
    getEdgesUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    saveEdgeUsingPOST(entityGroupId: string, entityGroupIds: string, data: schemas.Edge, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        routingKey: string;
        secret: string;
        edgeLicenseKey: string;
        cloudEndpoint: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        rootRuleChainId?: any;
    }>;
    getEdgesByEntityGroupIdUsingGET(entityGroupId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    activateInstanceUsingPOST(licenseSecret: string, releaseDate: string, options?: RequestInit): Promise<{}>;
    checkInstanceUsingPOST(data: schemas.JsonNode, options?: RequestInit): Promise<{}>;
    getTenantEdgeUsingGET(edgeName: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        routingKey: string;
        secret: string;
        edgeLicenseKey: string;
        cloudEndpoint: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        rootRuleChainId?: any;
    }>;
    getTenantEdgesUsingGET(pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getUserEdgesUsingGET(pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
}
