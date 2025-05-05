import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class EntitiesVersionControlControllerClient extends BaseVXOlympusClient {
    listBranches(options?: RequestInit): Promise<schemas.DeferredResult_Of_List_Of_BranchInfo>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} internalEntityUuid - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.versionId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_EntityDataDiff>}
     */
    compareEntityDataToVersion(entityType: 'ALARM' | 'API_USAGE_STATE' | 'ASSET' | 'ASSET_PROFILE' | 'BLOB_ENTITY' | 'CONVERTER' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'DEVICE_PROFILE' | 'EDGE' | 'ENTITY_GROUP' | 'ENTITY_VIEW' | 'GROUP_PERMISSION' | 'INTEGRATION' | 'NOTIFICATION' | 'NOTIFICATION_REQUEST' | 'NOTIFICATION_RULE' | 'NOTIFICATION_TARGET' | 'NOTIFICATION_TEMPLATE' | 'OTA_PACKAGE' | 'QUEUE' | 'ROLE' | 'RPC' | 'RULE_CHAIN' | 'RULE_NODE' | 'SCHEDULER_EVENT' | 'TB_RESOURCE' | 'TENANT' | 'TENANT_PROFILE' | 'USER' | 'WIDGETS_BUNDLE' | 'WIDGET_TYPE', internalEntityUuid: string, queryParams?: {
        versionId?: string;
    }, options?: RequestInit): Promise<schemas.DeferredResult_Of_EntityDataDiff>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<string>}
     */
    loadEntitiesVersionWithData(data: schemas.VersionLoadRequest, options?: RequestInit): Promise<string>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} versionId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_List_Of_VersionedEntityInfo>}
     */
    listEntitiesAtVersion(entityType: 'ALARM' | 'API_USAGE_STATE' | 'ASSET' | 'ASSET_PROFILE' | 'BLOB_ENTITY' | 'CONVERTER' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'DEVICE_PROFILE' | 'EDGE' | 'ENTITY_GROUP' | 'ENTITY_VIEW' | 'GROUP_PERMISSION' | 'INTEGRATION' | 'NOTIFICATION' | 'NOTIFICATION_REQUEST' | 'NOTIFICATION_RULE' | 'NOTIFICATION_TARGET' | 'NOTIFICATION_TEMPLATE' | 'OTA_PACKAGE' | 'QUEUE' | 'ROLE' | 'RPC' | 'RULE_CHAIN' | 'RULE_NODE' | 'SCHEDULER_EVENT' | 'TB_RESOURCE' | 'TENANT' | 'TENANT_PROFILE' | 'USER' | 'WIDGETS_BUNDLE' | 'WIDGET_TYPE', versionId: string, options?: RequestInit): Promise<schemas.DeferredResult_Of_List_Of_VersionedEntityInfo>;
    /**
     * @param {string} requestId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.VersionLoadResult>}
     */
    getVersionLoadRequestStatus(requestId: string, options?: RequestInit): Promise<schemas.VersionLoadResult>;
    /**
     * @param {string} versionId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_List_Of_VersionedEntityInfo>}
     */
    listAllEntitiesAtVersion(versionId: string, options?: RequestInit): Promise<schemas.DeferredResult_Of_List_Of_VersionedEntityInfo>;
    /**
     * @param {string} versionId - Path parameter
     * @param {string} entityType - Path parameter
     * @param {string} externalEntityUuid - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.internalEntityId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_EntityDataInfo>}
     */
    getEntityDataInfo(versionId: string, entityType: 'ALARM' | 'API_USAGE_STATE' | 'ASSET' | 'ASSET_PROFILE' | 'BLOB_ENTITY' | 'CONVERTER' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'DEVICE_PROFILE' | 'EDGE' | 'ENTITY_GROUP' | 'ENTITY_VIEW' | 'GROUP_PERMISSION' | 'INTEGRATION' | 'NOTIFICATION' | 'NOTIFICATION_REQUEST' | 'NOTIFICATION_RULE' | 'NOTIFICATION_TARGET' | 'NOTIFICATION_TEMPLATE' | 'OTA_PACKAGE' | 'QUEUE' | 'ROLE' | 'RPC' | 'RULE_CHAIN' | 'RULE_NODE' | 'SCHEDULER_EVENT' | 'TB_RESOURCE' | 'TENANT' | 'TENANT_PROFILE' | 'USER' | 'WIDGETS_BUNDLE' | 'WIDGET_TYPE', externalEntityUuid: string, queryParams?: {
        internalEntityId?: string;
    }, options?: RequestInit): Promise<schemas.DeferredResult_Of_EntityDataInfo>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_uuid>}
     */
    saveEntitiesVersionWithData(data: schemas.VersionCreateRequest, options?: RequestInit): Promise<schemas.DeferredResult_Of_uuid>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} externalEntityUuid - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.branch - Query parameter
     * @param {string} queryParams.internalEntityId - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_PageData_Of_EntityVersion>}
     */
    listEntityVersions(entityType: 'ALARM' | 'API_USAGE_STATE' | 'ASSET' | 'ASSET_PROFILE' | 'BLOB_ENTITY' | 'CONVERTER' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'DEVICE_PROFILE' | 'EDGE' | 'ENTITY_GROUP' | 'ENTITY_VIEW' | 'GROUP_PERMISSION' | 'INTEGRATION' | 'NOTIFICATION' | 'NOTIFICATION_REQUEST' | 'NOTIFICATION_RULE' | 'NOTIFICATION_TARGET' | 'NOTIFICATION_TEMPLATE' | 'OTA_PACKAGE' | 'QUEUE' | 'ROLE' | 'RPC' | 'RULE_CHAIN' | 'RULE_NODE' | 'SCHEDULER_EVENT' | 'TB_RESOURCE' | 'TENANT' | 'TENANT_PROFILE' | 'USER' | 'WIDGETS_BUNDLE' | 'WIDGET_TYPE', externalEntityUuid: string, queryParams?: {
        branch?: string;
        internalEntityId?: string;
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'timestamp';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.DeferredResult_Of_PageData_Of_EntityVersion>;
    /**
     * @param {string} entityType - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.branch - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_PageData_Of_EntityVersion>}
     */
    listEntityTypeVersions(entityType: 'ALARM' | 'API_USAGE_STATE' | 'ASSET' | 'ASSET_PROFILE' | 'BLOB_ENTITY' | 'CONVERTER' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'DEVICE_PROFILE' | 'EDGE' | 'ENTITY_GROUP' | 'ENTITY_VIEW' | 'GROUP_PERMISSION' | 'INTEGRATION' | 'NOTIFICATION' | 'NOTIFICATION_REQUEST' | 'NOTIFICATION_RULE' | 'NOTIFICATION_TARGET' | 'NOTIFICATION_TEMPLATE' | 'OTA_PACKAGE' | 'QUEUE' | 'ROLE' | 'RPC' | 'RULE_CHAIN' | 'RULE_NODE' | 'SCHEDULER_EVENT' | 'TB_RESOURCE' | 'TENANT' | 'TENANT_PROFILE' | 'USER' | 'WIDGETS_BUNDLE' | 'WIDGET_TYPE', queryParams?: {
        branch?: string;
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'timestamp';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.DeferredResult_Of_PageData_Of_EntityVersion>;
    /**
     * @param {string} requestId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.VersionCreationResult>}
     */
    getVersionCreateRequestStatus(requestId: string, options?: RequestInit): Promise<schemas.VersionCreationResult>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.branch - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_PageData_Of_EntityVersion>}
     */
    listVersions(queryParams?: {
        branch?: string;
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'timestamp';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.DeferredResult_Of_PageData_Of_EntityVersion>;
}
