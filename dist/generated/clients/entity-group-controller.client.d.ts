import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class EntityGroupControllerClient extends BaseVXOlympusClient {
    getAllEdgeEntityGroupsUsingGET(edgeId: string, groupType: string, options?: RequestInit): Promise<any>;
    assignEntityGroupToEdgeUsingPOST(edgeId: string, groupType: string, entityGroupId: string, options?: RequestInit): Promise<{
        type: "ASSET" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "EDGE" | "ENTITY_VIEW" | "USER";
        createdTime: number;
        name: string;
        groupAll: boolean;
        edgeGroupAll: boolean;
        id?: any;
        additionalInfo?: any;
        ownerId?: any;
        configuration?: any;
    }>;
    unassignEntityGroupFromEdgeUsingDELETE(edgeId: string, groupType: string, entityGroupId: string, options?: RequestInit): Promise<{
        type: "ASSET" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "EDGE" | "ENTITY_VIEW" | "USER";
        createdTime: number;
        name: string;
        groupAll: boolean;
        edgeGroupAll: boolean;
        id?: any;
        additionalInfo?: any;
        ownerId?: any;
        configuration?: any;
    }>;
    saveEntityGroupUsingPOST(data: schemas.EntityGroup, options?: RequestInit): Promise<{
        type: "ASSET" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "EDGE" | "ENTITY_VIEW" | "USER";
        createdTime: number;
        name: string;
        groupAll: boolean;
        edgeGroupAll: boolean;
        ownerIds: any[];
        id?: any;
        additionalInfo?: any;
        ownerId?: any;
        configuration?: any;
    }>;
    getEntityGroupAllByOwnerAndTypeUsingGET(ownerType: string, ownerId: string, groupType: string, options?: RequestInit): Promise<{
        type: "ASSET" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "EDGE" | "ENTITY_VIEW" | "USER";
        createdTime: number;
        name: string;
        groupAll: boolean;
        edgeGroupAll: boolean;
        ownerIds: any[];
        id?: any;
        additionalInfo?: any;
        ownerId?: any;
        configuration?: any;
    }>;
    getEntityGroupByIdUsingGET(entityGroupId: string, options?: RequestInit): Promise<{
        type: "ASSET" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "EDGE" | "ENTITY_VIEW" | "USER";
        createdTime: number;
        name: string;
        groupAll: boolean;
        edgeGroupAll: boolean;
        ownerIds: any[];
        id?: any;
        additionalInfo?: any;
        ownerId?: any;
        configuration?: any;
    }>;
    deleteEntityGroupUsingDELETE(entityGroupId: string, options?: RequestInit): Promise<any>;
    addEntitiesToEntityGroupUsingPOST(entityGroupId: string, data: Array<string>, options?: RequestInit): Promise<any>;
    removeEntitiesFromEntityGroupUsingPOST(entityGroupId: string, data: Array<string>, options?: RequestInit): Promise<any>;
    getEntitiesUsingGET(entityGroupId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    makeEntityGroupPrivateUsingPOST(entityGroupId: string, options?: RequestInit): Promise<any>;
    makeEntityGroupPublicUsingPOST(entityGroupId: string, options?: RequestInit): Promise<any>;
    shareEntityGroupUsingPOST(entityGroupId: string, data: schemas.ShareGroupRequest, options?: RequestInit): Promise<any>;
    getGroupEntityUsingGET(entityGroupId: string, entityId: string, options?: RequestInit): Promise<{
        name: string;
        id?: any;
    }>;
    shareEntityGroupToChildOwnerUserGroupUsingPOST(entityGroupId: string, userGroupId: string, roleId: string, options?: RequestInit): Promise<any>;
    getEntityGroupByOwnerAndNameAndTypeUsingGET(ownerType: string, ownerId: string, groupType: string, groupName: string, options?: RequestInit): Promise<{
        type: "ASSET" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "EDGE" | "ENTITY_VIEW" | "USER";
        createdTime: number;
        name: string;
        groupAll: boolean;
        edgeGroupAll: boolean;
        ownerIds: any[];
        id?: any;
        additionalInfo?: any;
        ownerId?: any;
        configuration?: any;
    }>;
    getEntityGroupEntityInfoByIdUsingGET(entityGroupId: string, options?: RequestInit): Promise<{
        name: string;
        id?: any;
    }>;
    getSharedEntityGroupEntityInfosByTypeAndPageLinkUsingGET(groupType: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEntityGroupEntityInfosByTypeAndPageLinkUsingGET(groupType: string, includeShared: boolean, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEntityGroupEntityInfosByOwnerAndTypeAndPageLinkUsingGET(ownerType: string, ownerId: string, groupType: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEntityGroupEntityInfosHierarchyByOwnerAndTypeAndPageLinkUsingGET(ownerType: string, ownerId: string, groupType: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEntityGroupEntityInfosByIdsUsingGET(entityGroupIds: string, options?: RequestInit): Promise<any>;
    getEdgeEntityGroupsUsingGET(edgeId: string, groupType: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEntityGroupsForEntityUsingGET(entityType: string, entityId: string, options?: RequestInit): Promise<any>;
    getSharedEntityGroupsByTypeUsingGET(groupType: string, options?: RequestInit): Promise<any>;
    getSharedEntityGroupsByTypeAndPageLinkUsingGET(groupType: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEntityGroupsByTypeAndPageLinkUsingGET(groupType: string, includeShared: boolean, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEntityGroupsByTypeUsingGET(groupType: string, includeShared: boolean, options?: RequestInit): Promise<any>;
    getEntityGroupsByOwnerAndTypeUsingGET(ownerType: string, ownerId: string, groupType: string, options?: RequestInit): Promise<any>;
    getEntityGroupsByOwnerAndTypeAndPageLinkUsingGET(ownerType: string, ownerId: string, groupType: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEntityGroupsHierarchyByOwnerAndTypeAndPageLinkUsingGET(ownerType: string, ownerId: string, groupType: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEntityGroupsByIdsUsingGET(entityGroupIds: string, options?: RequestInit): Promise<any>;
    getOwnerInfoUsingGET(ownerType: string, ownerId: string, options?: RequestInit): Promise<{
        name: string;
        id?: any;
    }>;
    getOwnerInfosUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getOwnersUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
}
