import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class EntityGroupControllerClient extends BaseVXOlympusClient {  /**
   * @param {string} edgeId - Path parameter
   * @param {string} groupType - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.EntityGroupInfo>>}
   */
  async getAllEdgeEntityGroups(edgeId: string, groupType: 'ASSET' | 'DASHBOARD' | 'DEVICE' | 'ENTITY_VIEW' | 'USER', options: RequestInit = {}): Promise<Array<schemas.EntityGroupInfo>> {
    const url = `${this.baseUrl}/api/allEntityGroups/edge/${encodeURIComponent(edgeId)}/${encodeURIComponent(groupType)}`;
    const response = await this.makeRequest<Array<schemas.EntityGroupInfo>>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} edgeId - Path parameter
   * @param {string} groupType - Path parameter
   * @param {string} entityGroupId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.EntityGroup>}
   */
  async assignEntityGroupToEdge(edgeId: string, groupType: 'ASSET' | 'DASHBOARD' | 'DEVICE' | 'ENTITY_VIEW' | 'USER', entityGroupId: string, options: RequestInit = {}): Promise<schemas.EntityGroup> {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/entityGroup/${encodeURIComponent(entityGroupId)}/${encodeURIComponent(groupType)}`;
    const response = await this.makeRequest<schemas.EntityGroup>(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} edgeId - Path parameter
   * @param {string} groupType - Path parameter
   * @param {string} entityGroupId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.EntityGroup>}
   */
  async unassignEntityGroupFromEdge(edgeId: string, groupType: 'ASSET' | 'DASHBOARD' | 'DEVICE' | 'ENTITY_VIEW' | 'USER', entityGroupId: string, options: RequestInit = {}): Promise<schemas.EntityGroup> {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/entityGroup/${encodeURIComponent(entityGroupId)}/${encodeURIComponent(groupType)}`;
    const response = await this.makeRequest<schemas.EntityGroup>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.EntityGroupInfo>}
   */
  async saveEntityGroupWithData(data: schemas.EntityGroup, options: RequestInit = {}): Promise<schemas.EntityGroupInfo> {
    const url = `${this.baseUrl}/api/entityGroup`;
    const response = await this.makeRequest<schemas.EntityGroupInfo>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} ownerType - Path parameter
   * @param {string} ownerId - Path parameter
   * @param {string} groupType - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.EntityGroupInfo>}
   */
  async getEntityGroupAllByOwnerAndType(ownerType: 'CUSTOMER' | 'TENANT', ownerId: string, groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', options: RequestInit = {}): Promise<schemas.EntityGroupInfo> {
    const url = `${this.baseUrl}/api/entityGroup/all/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}`;
    const response = await this.makeRequest<schemas.EntityGroupInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityGroupId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.EntityGroupInfo>}
   */
  async getEntityGroupById(entityGroupId: string, options: RequestInit = {}): Promise<schemas.EntityGroupInfo> {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}`;
    const response = await this.makeRequest<schemas.EntityGroupInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityGroupId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteEntityGroup(entityGroupId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}`;
    const response = await this.makeRequest<void>(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityGroupId - Path parameter
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async addEntitiesToEntityGroupWithData(entityGroupId: string, data: Array<string>, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/addEntities`;
    const response = await this.makeRequest<void>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityGroupId - Path parameter
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async removeEntitiesFromEntityGroupWithData(entityGroupId: string, data: Array<string>, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/deleteEntities`;
    const response = await this.makeRequest<void>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
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
  async getEntities(entityGroupId: string, queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: string; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_ShortEntityView> {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/entities{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_ShortEntityView>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityGroupId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async makeEntityGroupPrivate(entityGroupId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/makePrivate`;
    const response = await this.makeRequest<void>(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityGroupId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async makeEntityGroupPublic(entityGroupId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/makePublic`;
    const response = await this.makeRequest<void>(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityGroupId - Path parameter
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async shareEntityGroupWithData(entityGroupId: string, data: schemas.ShareGroupRequest, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/share`;
    const response = await this.makeRequest<void>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityGroupId - Path parameter
   * @param {string} entityId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.ShortEntityView>}
   */
  async getGroupEntity(entityGroupId: string, entityId: string, options: RequestInit = {}): Promise<schemas.ShortEntityView> {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/${encodeURIComponent(entityId)}`;
    const response = await this.makeRequest<schemas.ShortEntityView>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityGroupId - Path parameter
   * @param {string} userGroupId - Path parameter
   * @param {string} roleId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async shareEntityGroupToChildOwnerUserGroup(entityGroupId: string, userGroupId: string, roleId: string, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/${encodeURIComponent(userGroupId)}/${encodeURIComponent(roleId)}/share`;
    const response = await this.makeRequest<void>(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} ownerType - Path parameter
   * @param {string} ownerId - Path parameter
   * @param {string} groupType - Path parameter
   * @param {string} groupName - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.EntityGroupInfo>}
   */
  async getEntityGroupByOwnerAndNameAndType(ownerType: 'CUSTOMER' | 'TENANT', ownerId: string, groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', groupName: string, options: RequestInit = {}): Promise<schemas.EntityGroupInfo> {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}/${encodeURIComponent(groupName)}`;
    const response = await this.makeRequest<schemas.EntityGroupInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityGroupId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.EntityInfo>}
   */
  async getEntityGroupEntityInfoById(entityGroupId: string, options: RequestInit = {}): Promise<schemas.EntityInfo> {
    const url = `${this.baseUrl}/api/entityGroupInfo/${encodeURIComponent(entityGroupId)}`;
    const response = await this.makeRequest<schemas.EntityInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
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
  async getSharedEntityGroupEntityInfosByTypeAndPageLink(groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: string; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_EntityInfo> {
    const url = `${this.baseUrl}/api/entityGroupInfos/${encodeURIComponent(groupType)}/shared{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_EntityInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
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
  async getEntityGroupEntityInfosByTypeAndPageLink(groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', queryParams?: { includeShared?: boolean; pageSize?: number; page?: number; textSearch?: string; sortProperty?: string; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_EntityInfo> {
    const url = `${this.baseUrl}/api/entityGroupInfos/${encodeURIComponent(groupType)}{?includeShared,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.includeShared !== undefined) params.set('includeShared', String(queryParams.includeShared));
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_EntityInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
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
  async getEntityGroupEntityInfosByOwnerAndTypeAndPageLink(ownerType: 'CUSTOMER' | 'TENANT', ownerId: string, groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: string; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_EntityInfo> {
    const url = `${this.baseUrl}/api/entityGroupInfos/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_EntityInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
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
  async getEntityGroupEntityInfosHierarchyByOwnerAndTypeAndPageLink(ownerType: 'CUSTOMER' | 'TENANT', ownerId: string, groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: string; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_EntityInfo> {
    const url = `${this.baseUrl}/api/entityGroupInfosHierarchy/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_EntityInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.entityGroupIds - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.EntityInfo>>}
   */
  async getEntityGroupEntityInfosByIds(queryParams?: { entityGroupIds?: string }, options: RequestInit = {}): Promise<Array<schemas.EntityInfo>> {
    const url = `${this.baseUrl}/api/entityGroupInfos{?entityGroupIds}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.entityGroupIds !== undefined) params.set('entityGroupIds', String(queryParams.entityGroupIds));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.EntityInfo>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
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
  async getEdgeEntityGroups(edgeId: string, groupType: 'ASSET' | 'DASHBOARD' | 'DEVICE' | 'ENTITY_VIEW' | 'USER', queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: string; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_EntityGroupInfo> {
    const url = `${this.baseUrl}/api/entityGroups/edge/${encodeURIComponent(edgeId)}/${encodeURIComponent(groupType)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_EntityGroupInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} entityType - Path parameter
   * @param {string} entityId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.EntityGroupId>>}
   */
  async getEntityGroupsForEntity(entityType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', entityId: string, options: RequestInit = {}): Promise<Array<schemas.EntityGroupId>> {
    const url = `${this.baseUrl}/api/entityGroups/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}`;
    const response = await this.makeRequest<Array<schemas.EntityGroupId>>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} groupType - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.EntityGroupInfo>>}
   */
  async getSharedEntityGroupsByType(groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', options: RequestInit = {}): Promise<Array<schemas.EntityGroupInfo>> {
    const url = `${this.baseUrl}/api/entityGroups/${encodeURIComponent(groupType)}/shared`;
    const response = await this.makeRequest<Array<schemas.EntityGroupInfo>>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
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
  async getSharedEntityGroupsByTypeAndPageLink(groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: string; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_EntityGroupInfo> {
    const url = `${this.baseUrl}/api/entityGroups/${encodeURIComponent(groupType)}/shared{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_EntityGroupInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
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
  async getEntityGroupsByTypeAndPageLink(groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', queryParams?: { includeShared?: boolean; pageSize?: number; page?: number; textSearch?: string; sortProperty?: string; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_EntityGroupInfo> {
    const url = `${this.baseUrl}/api/entityGroups/${encodeURIComponent(groupType)}{?includeShared,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.includeShared !== undefined) params.set('includeShared', String(queryParams.includeShared));
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_EntityGroupInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} groupType - Path parameter
   * @param {object} queryParams - Query parameters
   * @param {boolean} queryParams.includeShared - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.EntityGroupInfo>>}
   */
  async getEntityGroupsByType(groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', queryParams?: { includeShared?: boolean }, options: RequestInit = {}): Promise<Array<schemas.EntityGroupInfo>> {
    const url = `${this.baseUrl}/api/entityGroups/${encodeURIComponent(groupType)}{?includeShared}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.includeShared !== undefined) params.set('includeShared', String(queryParams.includeShared));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.EntityGroupInfo>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} ownerType - Path parameter
   * @param {string} ownerId - Path parameter
   * @param {string} groupType - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.EntityGroupInfo>>}
   */
  async getEntityGroupsByOwnerAndType(ownerType: 'CUSTOMER' | 'TENANT', ownerId: string, groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', options: RequestInit = {}): Promise<Array<schemas.EntityGroupInfo>> {
    const url = `${this.baseUrl}/api/entityGroups/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}`;
    const response = await this.makeRequest<Array<schemas.EntityGroupInfo>>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
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
  async getEntityGroupsByOwnerAndTypeAndPageLink(ownerType: 'CUSTOMER' | 'TENANT', ownerId: string, groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: string; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_EntityGroupInfo> {
    const url = `${this.baseUrl}/api/entityGroups/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_EntityGroupInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
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
  async getEntityGroupsHierarchyByOwnerAndTypeAndPageLink(ownerType: 'CUSTOMER' | 'TENANT', ownerId: string, groupType: 'ASSET' | 'CUSTOMER' | 'DASHBOARD' | 'DEVICE' | 'EDGE' | 'ENTITY_VIEW' | 'USER', queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: string; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_EntityGroupInfo> {
    const url = `${this.baseUrl}/api/entityGroupsHierarchy/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_EntityGroupInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.entityGroupIds - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.EntityGroupInfo>>}
   */
  async getEntityGroupsByIds(queryParams?: { entityGroupIds?: string }, options: RequestInit = {}): Promise<Array<schemas.EntityGroupInfo>> {
    const url = `${this.baseUrl}/api/entityGroups{?entityGroupIds}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.entityGroupIds !== undefined) params.set('entityGroupIds', String(queryParams.entityGroupIds));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.EntityGroupInfo>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {string} ownerType - Path parameter
   * @param {string} ownerId - Path parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<schemas.EntityInfo>}
   */
  async getOwnerInfo(ownerType: 'CUSTOMER' | 'TENANT', ownerId: string, options: RequestInit = {}): Promise<schemas.EntityInfo> {
    const url = `${this.baseUrl}/api/ownerInfo/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}`;
    const response = await this.makeRequest<schemas.EntityInfo>(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
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
  async getOwnerInfos(queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: string; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_EntityInfo> {
    const url = `${this.baseUrl}/api/ownerInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_EntityInfo>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
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
  async getOwners(queryParams?: { pageSize?: number; page?: number; textSearch?: string; sortProperty?: string; sortOrder?: 'ASC' | 'DESC' }, options: RequestInit = {}): Promise<schemas.PageData_Of_ContactBased_Of_object> {
    const url = `${this.baseUrl}/api/owners{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.pageSize !== undefined) params.set('pageSize', String(queryParams.pageSize));
      if (queryParams.page !== undefined) params.set('page', String(queryParams.page));
      if (queryParams.textSearch !== undefined) params.set('textSearch', String(queryParams.textSearch));
      if (queryParams.sortProperty !== undefined) params.set('sortProperty', String(queryParams.sortProperty));
      if (queryParams.sortOrder !== undefined) params.set('sortOrder', String(queryParams.sortOrder));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.PageData_Of_ContactBased_Of_object>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}