import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class EntitiesVersionControlControllerClient extends BaseVXOlympusClient {  /**
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_List_Of_BranchInfo>}
   */
  async listBranches(options: RequestInit = {}): Promise<schemas.DeferredResult_Of_List_Of_BranchInfo> {
    const url = `${this.baseUrl}/api/entities/vc/branches`;
    const response = await this.makeRequest<schemas.DeferredResult_Of_List_Of_BranchInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityType - Path parameter
   * @param {string} internalEntityUuid - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.versionId - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_EntityDataDiff>}
   */
  async compareEntityDataToVersion(entityType: 'ALARM' | 'API_USAGE_STATE' | 'ASSET' | 'ASSET_PROFILE' | 'BLOB_ENTITY' | 'CONVERTER' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'DEVICE_PROFILE' | 'EDGE' | 'ENTITY_GROUP' | 'ENTITY_VIEW' | 'GROUP_PERMISSION' | 'INTEGRATION' | 'NOTIFICATION' | 'NOTIFICATION_REQUEST' | 'NOTIFICATION_RULE' | 'NOTIFICATION_TARGET' | 'NOTIFICATION_TEMPLATE' | 'OTA_PACKAGE' | 'QUEUE' | 'ROLE' | 'RPC' | 'RULE_CHAIN' | 'RULE_NODE' | 'SCHEDULER_EVENT' | 'TB_RESOURCE' | 'TENANT' | 'TENANT_PROFILE' | 'USER' | 'WIDGETS_BUNDLE' | 'WIDGET_TYPE', internalEntityUuid: string, queryParams?: { versionId?: string }, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_EntityDataDiff> {
    const url = `${this.baseUrl}/api/entities/vc/diff/${encodeURIComponent(entityType)}/${encodeURIComponent(internalEntityUuid)}{?versionId}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.versionId !== undefined) params.set('versionId', String(queryParams.versionId));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.DeferredResult_Of_EntityDataDiff>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<string>}
   */
  async loadEntitiesVersionWithData(data: schemas.VersionLoadRequest, options: RequestInit = {}): Promise<string> {
    const url = `${this.baseUrl}/api/entities/vc/entity`;
    const response = await this.makeRequest<string>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityType - Path parameter
   * @param {string} versionId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_List_Of_VersionedEntityInfo>}
   */
  async listEntitiesAtVersion(entityType: 'ALARM' | 'API_USAGE_STATE' | 'ASSET' | 'ASSET_PROFILE' | 'BLOB_ENTITY' | 'CONVERTER' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'DEVICE_PROFILE' | 'EDGE' | 'ENTITY_GROUP' | 'ENTITY_VIEW' | 'GROUP_PERMISSION' | 'INTEGRATION' | 'NOTIFICATION' | 'NOTIFICATION_REQUEST' | 'NOTIFICATION_RULE' | 'NOTIFICATION_TARGET' | 'NOTIFICATION_TEMPLATE' | 'OTA_PACKAGE' | 'QUEUE' | 'ROLE' | 'RPC' | 'RULE_CHAIN' | 'RULE_NODE' | 'SCHEDULER_EVENT' | 'TB_RESOURCE' | 'TENANT' | 'TENANT_PROFILE' | 'USER' | 'WIDGETS_BUNDLE' | 'WIDGET_TYPE', versionId: string, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_List_Of_VersionedEntityInfo> {
    const url = `${this.baseUrl}/api/entities/vc/entity/${encodeURIComponent(entityType)}/${encodeURIComponent(versionId)}`;
    const response = await this.makeRequest<schemas.DeferredResult_Of_List_Of_VersionedEntityInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} requestId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.VersionLoadResult>}
   */
  async getVersionLoadRequestStatus(requestId: string, options: RequestInit = {}): Promise<schemas.VersionLoadResult> {
    const url = `${this.baseUrl}/api/entities/vc/entity/${encodeURIComponent(requestId)}/status`;
    const response = await this.makeRequest<schemas.VersionLoadResult>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} versionId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_List_Of_VersionedEntityInfo>}
   */
  async listAllEntitiesAtVersion(versionId: string, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_List_Of_VersionedEntityInfo> {
    const url = `${this.baseUrl}/api/entities/vc/entity/${encodeURIComponent(versionId)}`;
    const response = await this.makeRequest<schemas.DeferredResult_Of_List_Of_VersionedEntityInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} versionId - Path parameter
   * @param {string} entityType - Path parameter
   * @param {string} externalEntityUuid - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.internalEntityId - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_EntityDataInfo>}
   */
  async getEntityDataInfo(versionId: string, entityType: 'ALARM' | 'API_USAGE_STATE' | 'ASSET' | 'ASSET_PROFILE' | 'BLOB_ENTITY' | 'CONVERTER' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'DEVICE_PROFILE' | 'EDGE' | 'ENTITY_GROUP' | 'ENTITY_VIEW' | 'GROUP_PERMISSION' | 'INTEGRATION' | 'NOTIFICATION' | 'NOTIFICATION_REQUEST' | 'NOTIFICATION_RULE' | 'NOTIFICATION_TARGET' | 'NOTIFICATION_TEMPLATE' | 'OTA_PACKAGE' | 'QUEUE' | 'ROLE' | 'RPC' | 'RULE_CHAIN' | 'RULE_NODE' | 'SCHEDULER_EVENT' | 'TB_RESOURCE' | 'TENANT' | 'TENANT_PROFILE' | 'USER' | 'WIDGETS_BUNDLE' | 'WIDGET_TYPE', externalEntityUuid: string, queryParams?: { internalEntityId?: string }, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_EntityDataInfo> {
    const url = `${this.baseUrl}/api/entities/vc/info/${encodeURIComponent(versionId)}/${encodeURIComponent(entityType)}/${encodeURIComponent(externalEntityUuid)}{?internalEntityId}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.internalEntityId !== undefined) params.set('internalEntityId', String(queryParams.internalEntityId));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.DeferredResult_Of_EntityDataInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.DeferredResult_Of_uuid>}
   */
  async saveEntitiesVersionWithData(data: schemas.VersionCreateRequest, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_uuid> {
    const url = `${this.baseUrl}/api/entities/vc/version`;
    const response = await this.makeRequest<schemas.DeferredResult_Of_uuid>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
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
  async listEntityVersions(entityType: 'ALARM' | 'API_USAGE_STATE' | 'ASSET' | 'ASSET_PROFILE' | 'BLOB_ENTITY' | 'CONVERTER' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'DEVICE_PROFILE' | 'EDGE' | 'ENTITY_GROUP' | 'ENTITY_VIEW' | 'GROUP_PERMISSION' | 'INTEGRATION' | 'NOTIFICATION' | 'NOTIFICATION_REQUEST' | 'NOTIFICATION_RULE' | 'NOTIFICATION_TARGET' | 'NOTIFICATION_TEMPLATE' | 'OTA_PACKAGE' | 'QUEUE' | 'ROLE' | 'RPC' | 'RULE_CHAIN' | 'RULE_NODE' | 'SCHEDULER_EVENT' | 'TB_RESOURCE' | 'TENANT' | 'TENANT_PROFILE' | 'USER' | 'WIDGETS_BUNDLE' | 'WIDGET_TYPE', externalEntityUuid: string, queryParams?: { branch?: string; internalEntityId?: string; pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'timestamp'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_PageData_Of_EntityVersion> {
    const url = `${this.baseUrl}/api/entities/vc/version/${encodeURIComponent(entityType)}/${encodeURIComponent(externalEntityUuid)}?sortProperty=timestamp{&branch,internalEntityId,page,pageSize,sortOrder,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.branch !== undefined) params.set('branch', String(queryParams.branch));
      if (queryParams.internalEntityId !== undefined) params.set('internalEntityId', String(queryParams.internalEntityId));
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.DeferredResult_Of_PageData_Of_EntityVersion>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
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
  async listEntityTypeVersions(entityType: 'ALARM' | 'API_USAGE_STATE' | 'ASSET' | 'ASSET_PROFILE' | 'BLOB_ENTITY' | 'CONVERTER' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'DEVICE_PROFILE' | 'EDGE' | 'ENTITY_GROUP' | 'ENTITY_VIEW' | 'GROUP_PERMISSION' | 'INTEGRATION' | 'NOTIFICATION' | 'NOTIFICATION_REQUEST' | 'NOTIFICATION_RULE' | 'NOTIFICATION_TARGET' | 'NOTIFICATION_TEMPLATE' | 'OTA_PACKAGE' | 'QUEUE' | 'ROLE' | 'RPC' | 'RULE_CHAIN' | 'RULE_NODE' | 'SCHEDULER_EVENT' | 'TB_RESOURCE' | 'TENANT' | 'TENANT_PROFILE' | 'USER' | 'WIDGETS_BUNDLE' | 'WIDGET_TYPE', queryParams?: { branch?: string; pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'timestamp'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_PageData_Of_EntityVersion> {
    const url = `${this.baseUrl}/api/entities/vc/version/${encodeURIComponent(entityType)}?sortProperty=timestamp{&branch,page,pageSize,sortOrder,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.branch !== undefined) params.set('branch', String(queryParams.branch));
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.DeferredResult_Of_PageData_Of_EntityVersion>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} requestId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.VersionCreationResult>}
   */
  async getVersionCreateRequestStatus(requestId: string, options: RequestInit = {}): Promise<schemas.VersionCreationResult> {
    const url = `${this.baseUrl}/api/entities/vc/version/${encodeURIComponent(requestId)}/status`;
    const response = await this.makeRequest<schemas.VersionCreationResult>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
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
  async listVersions(queryParams?: { branch?: string; pageSize?: number; page?: number; textSearch?: string; sortProperty?: 'timestamp'; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.DeferredResult_Of_PageData_Of_EntityVersion> {
    const url = `${this.baseUrl}/api/entities/vc/version?sortProperty=timestamp{&branch,page,pageSize,sortOrder,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.branch !== undefined) params.set('branch', String(queryParams.branch));
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.DeferredResult_Of_PageData_Of_EntityVersion>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}