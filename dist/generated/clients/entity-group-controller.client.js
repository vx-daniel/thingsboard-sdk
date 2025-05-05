"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityGroupControllerClient = void 0;
const base_client_1 = require("../../base-client");
const schemas = __importStar(require("../schemas"));
class EntityGroupControllerClient extends base_client_1.BaseVXOlympusClient {
    async getAllEdgeEntityGroupsUsingGET(edgeId, groupType, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/allEntityGroups/edge/${encodeURIComponent(edgeId)}/${encodeURIComponent(groupType)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    async assignEntityGroupToEdgeUsingPOST(edgeId, groupType, entityGroupId, options) {
        const config = {
            ...options,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/edge/${encodeURIComponent(edgeId)}/entityGroup/${encodeURIComponent(entityGroupId)}/${encodeURIComponent(groupType)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.EntityGroupSchemaSchema.parse(responseData);
    }
    async unassignEntityGroupFromEdgeUsingDELETE(edgeId, groupType, entityGroupId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/edge/${encodeURIComponent(edgeId)}/entityGroup/${encodeURIComponent(entityGroupId)}/${encodeURIComponent(groupType)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.EntityGroupSchemaSchema.parse(responseData);
    }
    async saveEntityGroupUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        config.body = JSON.stringify(data);
        const url = new URL(`/api/entityGroup`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.EntityGroupInfoSchemaSchema.parse(responseData);
    }
    async getEntityGroupAllByOwnerAndTypeUsingGET(ownerType, ownerId, groupType, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroup/all/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.EntityGroupInfoSchemaSchema.parse(responseData);
    }
    async getEntityGroupByIdUsingGET(entityGroupId, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroup/${encodeURIComponent(entityGroupId)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.EntityGroupInfoSchemaSchema.parse(responseData);
    }
    async deleteEntityGroupUsingDELETE(entityGroupId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroup/${encodeURIComponent(entityGroupId)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    async addEntitiesToEntityGroupUsingPOST(entityGroupId, data, options) {
        const config = {
            ...options,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        config.body = JSON.stringify(data);
        const url = new URL(`/api/entityGroup/${encodeURIComponent(entityGroupId)}/addEntities`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    async removeEntitiesFromEntityGroupUsingPOST(entityGroupId, data, options) {
        const config = {
            ...options,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        config.body = JSON.stringify(data);
        const url = new URL(`/api/entityGroup/${encodeURIComponent(entityGroupId)}/deleteEntities`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    async getEntitiesUsingGET(entityGroupId, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroup/${encodeURIComponent(entityGroupId)}/entities{?page,pageSize,sortOrder,sortProperty,textSearch}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (pageSize !== undefined)
            searchParams.append('pageSize', String(pageSize));
        if (page !== undefined)
            searchParams.append('page', String(page));
        if (textSearch !== undefined)
            searchParams.append('textSearch', String(textSearch));
        if (sortProperty !== undefined)
            searchParams.append('sortProperty', String(sortProperty));
        if (sortOrder !== undefined)
            searchParams.append('sortOrder', String(sortOrder));
        const queryString = searchParams.toString();
        if (queryString) {
            url.search = queryString;
        }
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.PageData_Of_ShortEntityViewSchemaSchema.parse(responseData);
    }
    async makeEntityGroupPrivateUsingPOST(entityGroupId, options) {
        const config = {
            ...options,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroup/${encodeURIComponent(entityGroupId)}/makePrivate`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    async makeEntityGroupPublicUsingPOST(entityGroupId, options) {
        const config = {
            ...options,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroup/${encodeURIComponent(entityGroupId)}/makePublic`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    async shareEntityGroupUsingPOST(entityGroupId, data, options) {
        const config = {
            ...options,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        config.body = JSON.stringify(data);
        const url = new URL(`/api/entityGroup/${encodeURIComponent(entityGroupId)}/share`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    async getGroupEntityUsingGET(entityGroupId, entityId, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroup/${encodeURIComponent(entityGroupId)}/${encodeURIComponent(entityId)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.ShortEntityViewSchemaSchema.parse(responseData);
    }
    async shareEntityGroupToChildOwnerUserGroupUsingPOST(entityGroupId, userGroupId, roleId, options) {
        const config = {
            ...options,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroup/${encodeURIComponent(entityGroupId)}/${encodeURIComponent(userGroupId)}/${encodeURIComponent(roleId)}/share`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    async getEntityGroupByOwnerAndNameAndTypeUsingGET(ownerType, ownerId, groupType, groupName, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroup/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}/${encodeURIComponent(groupName)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.EntityGroupInfoSchemaSchema.parse(responseData);
    }
    async getEntityGroupEntityInfoByIdUsingGET(entityGroupId, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroupInfo/${encodeURIComponent(entityGroupId)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.EntityInfoSchemaSchema.parse(responseData);
    }
    async getSharedEntityGroupEntityInfosByTypeAndPageLinkUsingGET(groupType, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroupInfos/${encodeURIComponent(groupType)}/shared{?page,pageSize,sortOrder,sortProperty,textSearch}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (pageSize !== undefined)
            searchParams.append('pageSize', String(pageSize));
        if (page !== undefined)
            searchParams.append('page', String(page));
        if (textSearch !== undefined)
            searchParams.append('textSearch', String(textSearch));
        if (sortProperty !== undefined)
            searchParams.append('sortProperty', String(sortProperty));
        if (sortOrder !== undefined)
            searchParams.append('sortOrder', String(sortOrder));
        const queryString = searchParams.toString();
        if (queryString) {
            url.search = queryString;
        }
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.PageData_Of_EntityInfoSchemaSchema.parse(responseData);
    }
    async getEntityGroupEntityInfosByTypeAndPageLinkUsingGET(groupType, includeShared, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroupInfos/${encodeURIComponent(groupType)}{?includeShared,page,pageSize,sortOrder,sortProperty,textSearch}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (includeShared !== undefined)
            searchParams.append('includeShared', String(includeShared));
        if (pageSize !== undefined)
            searchParams.append('pageSize', String(pageSize));
        if (page !== undefined)
            searchParams.append('page', String(page));
        if (textSearch !== undefined)
            searchParams.append('textSearch', String(textSearch));
        if (sortProperty !== undefined)
            searchParams.append('sortProperty', String(sortProperty));
        if (sortOrder !== undefined)
            searchParams.append('sortOrder', String(sortOrder));
        const queryString = searchParams.toString();
        if (queryString) {
            url.search = queryString;
        }
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.PageData_Of_EntityInfoSchemaSchema.parse(responseData);
    }
    async getEntityGroupEntityInfosByOwnerAndTypeAndPageLinkUsingGET(ownerType, ownerId, groupType, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroupInfos/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}{?page,pageSize,sortOrder,sortProperty,textSearch}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (pageSize !== undefined)
            searchParams.append('pageSize', String(pageSize));
        if (page !== undefined)
            searchParams.append('page', String(page));
        if (textSearch !== undefined)
            searchParams.append('textSearch', String(textSearch));
        if (sortProperty !== undefined)
            searchParams.append('sortProperty', String(sortProperty));
        if (sortOrder !== undefined)
            searchParams.append('sortOrder', String(sortOrder));
        const queryString = searchParams.toString();
        if (queryString) {
            url.search = queryString;
        }
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.PageData_Of_EntityInfoSchemaSchema.parse(responseData);
    }
    async getEntityGroupEntityInfosHierarchyByOwnerAndTypeAndPageLinkUsingGET(ownerType, ownerId, groupType, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroupInfosHierarchy/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}{?page,pageSize,sortOrder,sortProperty,textSearch}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (pageSize !== undefined)
            searchParams.append('pageSize', String(pageSize));
        if (page !== undefined)
            searchParams.append('page', String(page));
        if (textSearch !== undefined)
            searchParams.append('textSearch', String(textSearch));
        if (sortProperty !== undefined)
            searchParams.append('sortProperty', String(sortProperty));
        if (sortOrder !== undefined)
            searchParams.append('sortOrder', String(sortOrder));
        const queryString = searchParams.toString();
        if (queryString) {
            url.search = queryString;
        }
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.PageData_Of_EntityInfoSchemaSchema.parse(responseData);
    }
    async getEntityGroupEntityInfosByIdsUsingGET(entityGroupIds, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroupInfos{?entityGroupIds}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (entityGroupIds !== undefined)
            searchParams.append('entityGroupIds', String(entityGroupIds));
        const queryString = searchParams.toString();
        if (queryString) {
            url.search = queryString;
        }
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    async getEdgeEntityGroupsUsingGET(edgeId, groupType, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroups/edge/${encodeURIComponent(edgeId)}/${encodeURIComponent(groupType)}{?page,pageSize,sortOrder,sortProperty,textSearch}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (pageSize !== undefined)
            searchParams.append('pageSize', String(pageSize));
        if (page !== undefined)
            searchParams.append('page', String(page));
        if (textSearch !== undefined)
            searchParams.append('textSearch', String(textSearch));
        if (sortProperty !== undefined)
            searchParams.append('sortProperty', String(sortProperty));
        if (sortOrder !== undefined)
            searchParams.append('sortOrder', String(sortOrder));
        const queryString = searchParams.toString();
        if (queryString) {
            url.search = queryString;
        }
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.PageData_Of_EntityGroupInfoSchemaSchema.parse(responseData);
    }
    async getEntityGroupsForEntityUsingGET(entityType, entityId, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroups/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    async getSharedEntityGroupsByTypeUsingGET(groupType, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroups/${encodeURIComponent(groupType)}/shared`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    async getSharedEntityGroupsByTypeAndPageLinkUsingGET(groupType, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroups/${encodeURIComponent(groupType)}/shared{?page,pageSize,sortOrder,sortProperty,textSearch}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (pageSize !== undefined)
            searchParams.append('pageSize', String(pageSize));
        if (page !== undefined)
            searchParams.append('page', String(page));
        if (textSearch !== undefined)
            searchParams.append('textSearch', String(textSearch));
        if (sortProperty !== undefined)
            searchParams.append('sortProperty', String(sortProperty));
        if (sortOrder !== undefined)
            searchParams.append('sortOrder', String(sortOrder));
        const queryString = searchParams.toString();
        if (queryString) {
            url.search = queryString;
        }
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.PageData_Of_EntityGroupInfoSchemaSchema.parse(responseData);
    }
    async getEntityGroupsByTypeAndPageLinkUsingGET(groupType, includeShared, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroups/${encodeURIComponent(groupType)}{?includeShared,page,pageSize,sortOrder,sortProperty,textSearch}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (includeShared !== undefined)
            searchParams.append('includeShared', String(includeShared));
        if (pageSize !== undefined)
            searchParams.append('pageSize', String(pageSize));
        if (page !== undefined)
            searchParams.append('page', String(page));
        if (textSearch !== undefined)
            searchParams.append('textSearch', String(textSearch));
        if (sortProperty !== undefined)
            searchParams.append('sortProperty', String(sortProperty));
        if (sortOrder !== undefined)
            searchParams.append('sortOrder', String(sortOrder));
        const queryString = searchParams.toString();
        if (queryString) {
            url.search = queryString;
        }
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.PageData_Of_EntityGroupInfoSchemaSchema.parse(responseData);
    }
    async getEntityGroupsByTypeUsingGET(groupType, includeShared, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroups/${encodeURIComponent(groupType)}{?includeShared}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (includeShared !== undefined)
            searchParams.append('includeShared', String(includeShared));
        const queryString = searchParams.toString();
        if (queryString) {
            url.search = queryString;
        }
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    async getEntityGroupsByOwnerAndTypeUsingGET(ownerType, ownerId, groupType, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroups/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    async getEntityGroupsByOwnerAndTypeAndPageLinkUsingGET(ownerType, ownerId, groupType, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroups/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}{?page,pageSize,sortOrder,sortProperty,textSearch}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (pageSize !== undefined)
            searchParams.append('pageSize', String(pageSize));
        if (page !== undefined)
            searchParams.append('page', String(page));
        if (textSearch !== undefined)
            searchParams.append('textSearch', String(textSearch));
        if (sortProperty !== undefined)
            searchParams.append('sortProperty', String(sortProperty));
        if (sortOrder !== undefined)
            searchParams.append('sortOrder', String(sortOrder));
        const queryString = searchParams.toString();
        if (queryString) {
            url.search = queryString;
        }
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.PageData_Of_EntityGroupInfoSchemaSchema.parse(responseData);
    }
    async getEntityGroupsHierarchyByOwnerAndTypeAndPageLinkUsingGET(ownerType, ownerId, groupType, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroupsHierarchy/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}/${encodeURIComponent(groupType)}{?page,pageSize,sortOrder,sortProperty,textSearch}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (pageSize !== undefined)
            searchParams.append('pageSize', String(pageSize));
        if (page !== undefined)
            searchParams.append('page', String(page));
        if (textSearch !== undefined)
            searchParams.append('textSearch', String(textSearch));
        if (sortProperty !== undefined)
            searchParams.append('sortProperty', String(sortProperty));
        if (sortOrder !== undefined)
            searchParams.append('sortOrder', String(sortOrder));
        const queryString = searchParams.toString();
        if (queryString) {
            url.search = queryString;
        }
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.PageData_Of_EntityGroupInfoSchemaSchema.parse(responseData);
    }
    async getEntityGroupsByIdsUsingGET(entityGroupIds, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroups{?entityGroupIds}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (entityGroupIds !== undefined)
            searchParams.append('entityGroupIds', String(entityGroupIds));
        const queryString = searchParams.toString();
        if (queryString) {
            url.search = queryString;
        }
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    async getOwnerInfoUsingGET(ownerType, ownerId, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/ownerInfo/${encodeURIComponent(ownerType)}/${encodeURIComponent(ownerId)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.EntityInfoSchemaSchema.parse(responseData);
    }
    async getOwnerInfosUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/ownerInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (pageSize !== undefined)
            searchParams.append('pageSize', String(pageSize));
        if (page !== undefined)
            searchParams.append('page', String(page));
        if (textSearch !== undefined)
            searchParams.append('textSearch', String(textSearch));
        if (sortProperty !== undefined)
            searchParams.append('sortProperty', String(sortProperty));
        if (sortOrder !== undefined)
            searchParams.append('sortOrder', String(sortOrder));
        const queryString = searchParams.toString();
        if (queryString) {
            url.search = queryString;
        }
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.PageData_Of_EntityInfoSchemaSchema.parse(responseData);
    }
    async getOwnersUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/owners{?page,pageSize,sortOrder,sortProperty,textSearch}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (pageSize !== undefined)
            searchParams.append('pageSize', String(pageSize));
        if (page !== undefined)
            searchParams.append('page', String(page));
        if (textSearch !== undefined)
            searchParams.append('textSearch', String(textSearch));
        if (sortProperty !== undefined)
            searchParams.append('sortProperty', String(sortProperty));
        if (sortOrder !== undefined)
            searchParams.append('sortOrder', String(sortOrder));
        const queryString = searchParams.toString();
        if (queryString) {
            url.search = queryString;
        }
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.PageData_Of_ContactBased_object_SchemaSchema.parse(responseData);
    }
}
exports.EntityGroupControllerClient = EntityGroupControllerClient;
