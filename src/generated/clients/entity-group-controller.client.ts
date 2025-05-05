import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class EntityGroupControllerClient extends BaseVXOlympusClient {
  async getAllEdgeEntityGroupsUsingGET(edgeId: string, groupType: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/allEntityGroups/edge/${encodeURIComponent(edgeId)}/${encodeURIComponent(groupType)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async assignEntityGroupToEdgeUsingPOST(edgeId: string, groupType: string, entityGroupId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/entityGroup/${encodeURIComponent(entityGroupId)}/${encodeURIComponent(groupType)}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async unassignEntityGroupFromEdgeUsingDELETE(edgeId: string, groupType: string, entityGroupId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/entityGroup/${encodeURIComponent(entityGroupId)}/${encodeURIComponent(groupType)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async saveEntityGroupUsingPOST(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroup`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getEntityGroupAllByOwnerAndTypeUsingGET(ownerType: string, ownerId: string, groupType: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroup/all/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getEntityGroupByIdUsingGET(entityGroupId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async deleteEntityGroupUsingDELETE(entityGroupId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}`;
    const response = await this.makeRequest(url, {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }

  async addEntitiesToEntityGroupUsingPOST(entityGroupId: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/addEntities`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async removeEntitiesFromEntityGroupUsingPOST(entityGroupId: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/deleteEntities`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getEntitiesUsingGET(entityGroupId: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/entities{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async makeEntityGroupPrivateUsingPOST(entityGroupId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/makePrivate`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async makeEntityGroupPublicUsingPOST(entityGroupId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/makePublic`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async shareEntityGroupUsingPOST(entityGroupId: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/share`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async getGroupEntityUsingGET(entityGroupId: string, entityId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/${encodeURIComponent(entityId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async shareEntityGroupToChildOwnerUserGroupUsingPOST(entityGroupId: string, userGroupId: string, roleId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/${encodeURIComponent(userGroupId)}/${encodeURIComponent(roleId)}/share`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      
      ...options,
    });
    return response;
  }

  async getEntityGroupByOwnerAndNameAndTypeUsingGET(ownerType: string, ownerId: string, groupType: string, groupName: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}/${encodeURIComponent(groupName)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getEntityGroupEntityInfoByIdUsingGET(entityGroupId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroupInfo/${encodeURIComponent(entityGroupId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getSharedEntityGroupEntityInfosByTypeAndPageLinkUsingGET(groupType: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroupInfos/${encodeURIComponent(groupType)}/shared{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getEntityGroupEntityInfosByTypeAndPageLinkUsingGET(groupType: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroupInfos/${encodeURIComponent(groupType)}{?includeShared,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getEntityGroupEntityInfosByOwnerAndTypeAndPageLinkUsingGET(ownerType: string, ownerId: string, groupType: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroupInfos/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getEntityGroupEntityInfosHierarchyByOwnerAndTypeAndPageLinkUsingGET(ownerType: string, ownerId: string, groupType: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroupInfosHierarchy/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getEntityGroupEntityInfosByIdsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroupInfos{?entityGroupIds}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getEdgeEntityGroupsUsingGET(edgeId: string, groupType: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroups/edge/${encodeURIComponent(edgeId)}/${encodeURIComponent(groupType)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getEntityGroupsForEntityUsingGET(entityType: string, entityId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroups/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getSharedEntityGroupsByTypeUsingGET(groupType: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroups/${encodeURIComponent(groupType)}/shared`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getSharedEntityGroupsByTypeAndPageLinkUsingGET(groupType: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroups/${encodeURIComponent(groupType)}/shared{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getEntityGroupsByTypeAndPageLinkUsingGET(groupType: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroups/${encodeURIComponent(groupType)}{?includeShared,page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getEntityGroupsByTypeUsingGET(groupType: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroups/${encodeURIComponent(groupType)}{?includeShared}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getEntityGroupsByOwnerAndTypeUsingGET(ownerType: string, ownerId: string, groupType: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroups/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getEntityGroupsByOwnerAndTypeAndPageLinkUsingGET(ownerType: string, ownerId: string, groupType: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroups/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getEntityGroupsHierarchyByOwnerAndTypeAndPageLinkUsingGET(ownerType: string, ownerId: string, groupType: string, queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroupsHierarchy/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getEntityGroupsByIdsUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/entityGroups{?entityGroupIds}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getOwnerInfoUsingGET(ownerType: string, ownerId: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/ownerInfo/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getOwnerInfosUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/ownerInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }

  async getOwnersUsingGET(queryParams: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/owners{?page,pageSize,sortOrder,sortProperty,textSearch}`;
    const response = await this.makeRequest(url, {
      method: 'GET',
      
      ...options,
    });
    return response;
  }}