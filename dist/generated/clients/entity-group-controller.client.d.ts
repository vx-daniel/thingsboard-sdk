import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class EntityGroupControllerClient extends BaseVXOlympusClient {
    getAllEdgeEntityGroups(edgeId: string, groupType: 'ASSET' | 'DASHBOARD' | 'DEVICE' | 'ENTITY_VIEW' | 'USER', options?: RequestInit): Promise<Array<schemas.EntityGroupInfo>>;
    /**
     * @param {string} edgeId - Path parameter
     * @param {string} groupType - Path parameter
     * @param {string} entityGroupId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EntityGroup>}
     */
    assignEntityGroupToEdge(edgeId: string, groupType: 'ASSET' | 'DASHBOARD' | 'DEVICE' | 'ENTITY_VIEW' | 'USER', entityGroupId: string, options?: RequestInit): Promise<schemas.EntityGroup>;
    /**
     * @param {string} edgeId - Path parameter
     * @param {string} groupType - Path parameter
     * @param {string} entityGroupId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EntityGroup>}
     */
    unassignEntityGroupFromEdge(edgeId: string, groupType: 'ASSET' | 'DASHBOARD' | 'DEVICE' | 'ENTITY_VIEW' | 'USER', entityGroupId: string, options?: RequestInit): Promise<schemas.EntityGroup>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EntityGroupInfo>}
     */
    saveEntityGroupWithData(data: schemas.EntityGroup, options?: RequestInit): Promise<schemas.EntityGroupInfo>;
    /**
     * @param {string} ownerType - Path parameter
     * @param {string} ownerId - Path parameter
     * @param {string} groupType - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EntityGroupInfo>}
     */
    getEntityGroupAllByOwnerAndType(ownerType: 'CUSTOMER' | 'TENANT', ownerId: string, groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', options?: RequestInit): Promise<schemas.EntityGroupInfo>;
    /**
     * @param {string} entityGroupId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EntityGroupInfo>}
     */
    getEntityGroupById(entityGroupId: string, options?: RequestInit): Promise<schemas.EntityGroupInfo>;
    /**
     * @param {string} entityGroupId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteEntityGroup(entityGroupId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} entityGroupId - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    addEntitiesToEntityGroupWithData(entityGroupId: string, data: Array<string>, options?: RequestInit): Promise<void>;
    /**
     * @param {string} entityGroupId - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    removeEntitiesFromEntityGroupWithData(entityGroupId: string, data: Array<string>, options?: RequestInit): Promise<void>;
    /**
     * @param {string} entityGroupId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_ShortEntityView>}
     */
    getEntities(entityGroupId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: string;
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_ShortEntityView>;
    /**
     * @param {string} entityGroupId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    makeEntityGroupPrivate(entityGroupId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} entityGroupId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    makeEntityGroupPublic(entityGroupId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} entityGroupId - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    shareEntityGroupWithData(entityGroupId: string, data: schemas.ShareGroupRequest, options?: RequestInit): Promise<void>;
    /**
     * @param {string} entityGroupId - Path parameter
     * @param {string} entityId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.ShortEntityView>}
     */
    getGroupEntity(entityGroupId: string, entityId: string, options?: RequestInit): Promise<schemas.ShortEntityView>;
    /**
     * @param {string} entityGroupId - Path parameter
     * @param {string} userGroupId - Path parameter
     * @param {string} roleId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    shareEntityGroupToChildOwnerUserGroup(entityGroupId: string, userGroupId: string, roleId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} ownerType - Path parameter
     * @param {string} ownerId - Path parameter
     * @param {string} groupType - Path parameter
     * @param {string} groupName - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EntityGroupInfo>}
     */
    getEntityGroupByOwnerAndNameAndType(ownerType: 'CUSTOMER' | 'TENANT', ownerId: string, groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', groupName: string, options?: RequestInit): Promise<schemas.EntityGroupInfo>;
    /**
     * @param {string} entityGroupId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EntityInfo>}
     */
    getEntityGroupEntityInfoById(entityGroupId: string, options?: RequestInit): Promise<schemas.EntityInfo>;
    /**
     * @param {string} groupType - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntityInfo>}
     */
    getSharedEntityGroupEntityInfosByTypeAndPageLink(groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: string;
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_EntityInfo>;
    /**
     * @param {string} groupType - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.includeShared - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntityInfo>}
     */
    getEntityGroupEntityInfosByTypeAndPageLink(groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', queryParams?: {
        includeShared?: boolean;
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: string;
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_EntityInfo>;
    /**
     * @param {string} ownerType - Path parameter
     * @param {string} ownerId - Path parameter
     * @param {string} groupType - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntityInfo>}
     */
    getEntityGroupEntityInfosByOwnerAndTypeAndPageLink(ownerType: 'CUSTOMER' | 'TENANT', ownerId: string, groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: string;
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_EntityInfo>;
    /**
     * @param {string} ownerType - Path parameter
     * @param {string} ownerId - Path parameter
     * @param {string} groupType - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntityInfo>}
     */
    getEntityGroupEntityInfosHierarchyByOwnerAndTypeAndPageLink(ownerType: 'CUSTOMER' | 'TENANT', ownerId: string, groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: string;
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_EntityInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.entityGroupIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntityInfo>>}
     */
    getEntityGroupEntityInfosByIds(queryParams?: {
        entityGroupIds?: string;
    }, options?: RequestInit): Promise<Array<schemas.EntityInfo>>;
    /**
     * @param {string} edgeId - Path parameter
     * @param {string} groupType - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntityGroupInfo>}
     */
    getEdgeEntityGroups(edgeId: string, groupType: 'ASSET' | 'DASHBOARD' | 'DEVICE' | 'ENTITY_VIEW' | 'USER', queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: string;
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_EntityGroupInfo>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntityGroupId>>}
     */
    getEntityGroupsForEntity(entityType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', entityId: string, options?: RequestInit): Promise<Array<schemas.EntityGroupId>>;
    /**
     * @param {string} groupType - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntityGroupInfo>>}
     */
    getSharedEntityGroupsByType(groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', options?: RequestInit): Promise<Array<schemas.EntityGroupInfo>>;
    /**
     * @param {string} groupType - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntityGroupInfo>}
     */
    getSharedEntityGroupsByTypeAndPageLink(groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: string;
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_EntityGroupInfo>;
    /**
     * @param {string} groupType - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.includeShared - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntityGroupInfo>}
     */
    getEntityGroupsByTypeAndPageLink(groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', queryParams?: {
        includeShared?: boolean;
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: string;
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_EntityGroupInfo>;
    /**
     * @param {string} groupType - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.includeShared - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntityGroupInfo>>}
     */
    getEntityGroupsByType(groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', queryParams?: {
        includeShared?: boolean;
    }, options?: RequestInit): Promise<Array<schemas.EntityGroupInfo>>;
    /**
     * @param {string} ownerType - Path parameter
     * @param {string} ownerId - Path parameter
     * @param {string} groupType - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntityGroupInfo>>}
     */
    getEntityGroupsByOwnerAndType(ownerType: 'CUSTOMER' | 'TENANT', ownerId: string, groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', options?: RequestInit): Promise<Array<schemas.EntityGroupInfo>>;
    /**
     * @param {string} ownerType - Path parameter
     * @param {string} ownerId - Path parameter
     * @param {string} groupType - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntityGroupInfo>}
     */
    getEntityGroupsByOwnerAndTypeAndPageLink(ownerType: 'CUSTOMER' | 'TENANT', ownerId: string, groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: string;
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_EntityGroupInfo>;
    /**
     * @param {string} ownerType - Path parameter
     * @param {string} ownerId - Path parameter
     * @param {string} groupType - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntityGroupInfo>}
     */
    getEntityGroupsHierarchyByOwnerAndTypeAndPageLink(ownerType: 'CUSTOMER' | 'TENANT', ownerId: string, groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: string;
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_EntityGroupInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.entityGroupIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntityGroupInfo>>}
     */
    getEntityGroupsByIds(queryParams?: {
        entityGroupIds?: string;
    }, options?: RequestInit): Promise<Array<schemas.EntityGroupInfo>>;
    /**
     * @param {string} ownerType - Path parameter
     * @param {string} ownerId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EntityInfo>}
     */
    getOwnerInfo(ownerType: 'CUSTOMER' | 'TENANT', ownerId: string, options?: RequestInit): Promise<schemas.EntityInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntityInfo>}
     */
    getOwnerInfos(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: string;
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_EntityInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_ContactBased_Of_object>}
     */
    getOwners(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: string;
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_ContactBased_Of_object>;
}
