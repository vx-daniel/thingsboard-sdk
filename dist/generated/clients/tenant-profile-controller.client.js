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
exports.TenantProfileControllerClient = void 0;
const base_client_1 = require("../../base-client");
const schemas = __importStar(require("../schemas"));
class TenantProfileControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveTenantProfileUsingPOST(data, options) {
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
        const url = new URL(`/api/tenantProfile`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.TenantProfileSchemaSchema.parse(responseData);
    }
    async getTenantProfileByIdUsingGET(tenantProfileId, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/tenantProfile/${encodeURIComponent(tenantProfileId)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.TenantProfileSchemaSchema.parse(responseData);
    }
    async deleteTenantProfileUsingDELETE(tenantProfileId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/tenantProfile/${encodeURIComponent(tenantProfileId)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    async setDefaultTenantProfileUsingPOST(tenantProfileId, options) {
        const config = {
            ...options,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/tenantProfile/${encodeURIComponent(tenantProfileId)}/default`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.TenantProfileSchemaSchema.parse(responseData);
    }
    async getDefaultTenantProfileInfoUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/tenantProfileInfo/default`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.EntityInfoSchemaSchema.parse(responseData);
    }
    async getTenantProfileInfoByIdUsingGET(tenantProfileId, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/tenantProfileInfo/${encodeURIComponent(tenantProfileId)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.EntityInfoSchemaSchema.parse(responseData);
    }
    async getTenantProfileInfosUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/tenantProfileInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`, this.baseURL);
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
    async getTenantProfilesByIdsUsingGET(ids, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/tenantProfiles{?ids}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (ids !== undefined)
            searchParams.append('ids', String(ids));
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
    async getTenantProfilesUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/tenantProfiles{?page,pageSize,sortOrder,sortProperty,textSearch}`, this.baseURL);
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
        return schemas.PageData_Of_TenantProfileSchemaSchema.parse(responseData);
    }
}
exports.TenantProfileControllerClient = TenantProfileControllerClient;
