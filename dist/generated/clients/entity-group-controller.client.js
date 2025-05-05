"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityGroupControllerClient = void 0;
const base_client_1 = require("../../base-client");
class EntityGroupControllerClient extends base_client_1.BaseVXOlympusClient {
    async getAllEdgeEntityGroupsUsingGET(edgeId, groupType, options = {}) {
        const url = `${this.baseUrl}/api/allEntityGroups/edge/${encodeURIComponent(edgeId)}/${encodeURIComponent(groupType)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async assignEntityGroupToEdgeUsingPOST(edgeId, groupType, entityGroupId, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/entityGroup/${encodeURIComponent(entityGroupId)}/${encodeURIComponent(groupType)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async unassignEntityGroupFromEdgeUsingDELETE(edgeId, groupType, entityGroupId, options = {}) {
        const url = `${this.baseUrl}/api/edge/${encodeURIComponent(edgeId)}/entityGroup/${encodeURIComponent(entityGroupId)}/${encodeURIComponent(groupType)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async saveEntityGroupUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getEntityGroupAllByOwnerAndTypeUsingGET(ownerType, ownerId, groupType, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/all/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEntityGroupByIdUsingGET(entityGroupId, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteEntityGroupUsingDELETE(entityGroupId, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async addEntitiesToEntityGroupUsingPOST(entityGroupId, data, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/addEntities`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async removeEntitiesFromEntityGroupUsingPOST(entityGroupId, data, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/deleteEntities`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getEntitiesUsingGET(entityGroupId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/entities{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async makeEntityGroupPrivateUsingPOST(entityGroupId, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/makePrivate`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async makeEntityGroupPublicUsingPOST(entityGroupId, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/makePublic`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async shareEntityGroupUsingPOST(entityGroupId, data, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/share`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getGroupEntityUsingGET(entityGroupId, entityId, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/${encodeURIComponent(entityId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async shareEntityGroupToChildOwnerUserGroupUsingPOST(entityGroupId, userGroupId, roleId, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/${encodeURIComponent(userGroupId)}/${encodeURIComponent(roleId)}/share`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async getEntityGroupByOwnerAndNameAndTypeUsingGET(ownerType, ownerId, groupType, groupName, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}/${encodeURIComponent(groupName)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEntityGroupEntityInfoByIdUsingGET(entityGroupId, options = {}) {
        const url = `${this.baseUrl}/api/entityGroupInfo/${encodeURIComponent(entityGroupId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getSharedEntityGroupEntityInfosByTypeAndPageLinkUsingGET(groupType, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroupInfos/${encodeURIComponent(groupType)}/shared{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEntityGroupEntityInfosByTypeAndPageLinkUsingGET(groupType, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroupInfos/${encodeURIComponent(groupType)}{?includeShared,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEntityGroupEntityInfosByOwnerAndTypeAndPageLinkUsingGET(ownerType, ownerId, groupType, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroupInfos/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEntityGroupEntityInfosHierarchyByOwnerAndTypeAndPageLinkUsingGET(ownerType, ownerId, groupType, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroupInfosHierarchy/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEntityGroupEntityInfosByIdsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroupInfos{?entityGroupIds}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEdgeEntityGroupsUsingGET(edgeId, groupType, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroups/edge/${encodeURIComponent(edgeId)}/${encodeURIComponent(groupType)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEntityGroupsForEntityUsingGET(entityType, entityId, options = {}) {
        const url = `${this.baseUrl}/api/entityGroups/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getSharedEntityGroupsByTypeUsingGET(groupType, options = {}) {
        const url = `${this.baseUrl}/api/entityGroups/${encodeURIComponent(groupType)}/shared`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getSharedEntityGroupsByTypeAndPageLinkUsingGET(groupType, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroups/${encodeURIComponent(groupType)}/shared{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEntityGroupsByTypeAndPageLinkUsingGET(groupType, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroups/${encodeURIComponent(groupType)}{?includeShared,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEntityGroupsByTypeUsingGET(groupType, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroups/${encodeURIComponent(groupType)}{?includeShared}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEntityGroupsByOwnerAndTypeUsingGET(ownerType, ownerId, groupType, options = {}) {
        const url = `${this.baseUrl}/api/entityGroups/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEntityGroupsByOwnerAndTypeAndPageLinkUsingGET(ownerType, ownerId, groupType, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroups/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEntityGroupsHierarchyByOwnerAndTypeAndPageLinkUsingGET(ownerType, ownerId, groupType, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroupsHierarchy/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getEntityGroupsByIdsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroups{?entityGroupIds}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getOwnerInfoUsingGET(ownerType, ownerId, options = {}) {
        const url = `${this.baseUrl}/api/ownerInfo/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getOwnerInfosUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/ownerInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getOwnersUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/owners{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.EntityGroupControllerClient = EntityGroupControllerClient;
