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
exports.EntityViewControllerClient = void 0;
const base_client_1 = require("../../base-client");
const schemas = __importStar(require("../schemas"));
class EntityViewControllerClient extends base_client_1.BaseVXOlympusClient {
    async getCustomerEntityViewInfosUsingGET(customerId, pageSize, page, includeCustomers, type, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/customer/${encodeURIComponent(customerId)}/entityViewInfos{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch,type}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (pageSize !== undefined)
            searchParams.append('pageSize', String(pageSize));
        if (page !== undefined)
            searchParams.append('page', String(page));
        if (includeCustomers !== undefined)
            searchParams.append('includeCustomers', String(includeCustomers));
        if (type !== undefined)
            searchParams.append('type', String(type));
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
        return schemas.PageData_Of_EntityViewInfoSchemaSchema.parse(responseData);
    }
    async getCustomerEntityViewsUsingGET(customerId, pageSize, page, type, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/customer/${encodeURIComponent(customerId)}/entityViews{?page,pageSize,sortOrder,sortProperty,textSearch,type}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (pageSize !== undefined)
            searchParams.append('pageSize', String(pageSize));
        if (page !== undefined)
            searchParams.append('page', String(page));
        if (type !== undefined)
            searchParams.append('type', String(type));
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
        return schemas.PageData_Of_EntityViewSchemaSchema.parse(responseData);
    }
    async getEntityViewsByEntityGroupIdUsingGET(entityGroupId, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityGroup/${encodeURIComponent(entityGroupId)}/entityViews{?page,pageSize,sortOrder,sortProperty,textSearch}`, this.baseURL);
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
        return schemas.PageData_Of_EntityViewSchemaSchema.parse(responseData);
    }
    async getEntityViewInfoByIdUsingGET(entityViewId, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityView/info/${encodeURIComponent(entityViewId)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.EntityViewInfoSchemaSchema.parse(responseData);
    }
    async getEntityViewTypesUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityView/types`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    async getEntityViewByIdUsingGET(entityViewId, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityView/${encodeURIComponent(entityViewId)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.EntityViewSchemaSchema.parse(responseData);
    }
    async deleteEntityViewUsingDELETE(entityViewId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityView/${encodeURIComponent(entityViewId)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    async getAllEntityViewInfosUsingGET(pageSize, page, includeCustomers, type, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityViewInfos/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch,type}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (pageSize !== undefined)
            searchParams.append('pageSize', String(pageSize));
        if (page !== undefined)
            searchParams.append('page', String(page));
        if (includeCustomers !== undefined)
            searchParams.append('includeCustomers', String(includeCustomers));
        if (type !== undefined)
            searchParams.append('type', String(type));
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
        return schemas.PageData_Of_EntityViewInfoSchemaSchema.parse(responseData);
    }
    async findByQueryUsingPOST_4(data, options) {
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
        const url = new URL(`/api/entityViews`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    async getEntityViewsByIdsUsingGET(entityViewIds, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/entityViews{?entityViewIds}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (entityViewIds !== undefined)
            searchParams.append('entityViewIds', String(entityViewIds));
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
    async saveEntityViewUsingPOST(entityGroupId, entityGroupIds, data, options) {
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
        const url = new URL(`/api/entityView{?entityGroupId,entityGroupIds}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (entityGroupId !== undefined)
            searchParams.append('entityGroupId', String(entityGroupId));
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
        return schemas.EntityViewSchemaSchema.parse(responseData);
    }
    async getTenantEntityViewUsingGET(entityViewName, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/tenant/entityViews{?entityViewName}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (entityViewName !== undefined)
            searchParams.append('entityViewName', String(entityViewName));
        const queryString = searchParams.toString();
        if (queryString) {
            url.search = queryString;
        }
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.EntityViewSchemaSchema.parse(responseData);
    }
    async getTenantEntityViewsUsingGET(pageSize, page, type, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/tenant/entityViews{?page,pageSize,sortOrder,sortProperty,textSearch,type}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (pageSize !== undefined)
            searchParams.append('pageSize', String(pageSize));
        if (page !== undefined)
            searchParams.append('page', String(page));
        if (type !== undefined)
            searchParams.append('type', String(type));
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
        return schemas.PageData_Of_EntityViewSchemaSchema.parse(responseData);
    }
    async getUserEntityViewsUsingGET(pageSize, page, type, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/user/entityViews{?page,pageSize,sortOrder,sortProperty,textSearch,type}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (pageSize !== undefined)
            searchParams.append('pageSize', String(pageSize));
        if (page !== undefined)
            searchParams.append('page', String(page));
        if (type !== undefined)
            searchParams.append('type', String(type));
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
        return schemas.PageData_Of_EntityViewSchemaSchema.parse(responseData);
    }
}
exports.EntityViewControllerClient = EntityViewControllerClient;
