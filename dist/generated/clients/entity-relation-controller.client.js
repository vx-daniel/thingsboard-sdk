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
exports.EntityRelationControllerClient = void 0;
const base_client_1 = require("../../base-client");
const schemas = __importStar(require("../schemas"));
class EntityRelationControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveRelationUsingPOST(data, options) {
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
        const url = new URL(`/api/relation`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    async findByQueryUsingPOST_3(data, options) {
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
        const url = new URL(`/api/relations`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    async findInfoByQueryUsingPOST(data, options) {
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
        const url = new URL(`/api/relations/info`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    async findInfoByFromUsingGET(fromId, fromType, relationTypeGroup, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/relations/info{?fromId,fromType,relationTypeGroup}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (fromId !== undefined)
            searchParams.append('fromId', String(fromId));
        if (fromType !== undefined)
            searchParams.append('fromType', String(fromType));
        if (relationTypeGroup !== undefined)
            searchParams.append('relationTypeGroup', String(relationTypeGroup));
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
    async findInfoByToUsingGET(toId, toType, relationTypeGroup, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/relations/info{?relationTypeGroup,toId,toType}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (toId !== undefined)
            searchParams.append('toId', String(toId));
        if (toType !== undefined)
            searchParams.append('toType', String(toType));
        if (relationTypeGroup !== undefined)
            searchParams.append('relationTypeGroup', String(relationTypeGroup));
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
    async deleteRelationsUsingDELETE(entityId, entityType, options) {
        const config = {
            ...options,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/relations{?entityId,entityType}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (entityId !== undefined)
            searchParams.append('entityId', String(entityId));
        if (entityType !== undefined)
            searchParams.append('entityType', String(entityType));
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
    async findByFromUsingGET(fromId, fromType, relationType, relationTypeGroup, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/relations{?fromId,fromType,relationType,relationTypeGroup}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (fromId !== undefined)
            searchParams.append('fromId', String(fromId));
        if (fromType !== undefined)
            searchParams.append('fromType', String(fromType));
        if (relationType !== undefined)
            searchParams.append('relationType', String(relationType));
        if (relationTypeGroup !== undefined)
            searchParams.append('relationTypeGroup', String(relationTypeGroup));
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
    async findByFromUsingGET_1(fromId, fromType, relationTypeGroup, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/relations{?fromId,fromType,relationTypeGroup}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (fromId !== undefined)
            searchParams.append('fromId', String(fromId));
        if (fromType !== undefined)
            searchParams.append('fromType', String(fromType));
        if (relationTypeGroup !== undefined)
            searchParams.append('relationTypeGroup', String(relationTypeGroup));
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
    async findByToUsingGET(toId, toType, relationType, relationTypeGroup, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/relations{?relationType,relationTypeGroup,toId,toType}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (toId !== undefined)
            searchParams.append('toId', String(toId));
        if (toType !== undefined)
            searchParams.append('toType', String(toType));
        if (relationType !== undefined)
            searchParams.append('relationType', String(relationType));
        if (relationTypeGroup !== undefined)
            searchParams.append('relationTypeGroup', String(relationTypeGroup));
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
    async findByToUsingGET_1(toId, toType, relationTypeGroup, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/relations{?relationTypeGroup,toId,toType}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (toId !== undefined)
            searchParams.append('toId', String(toId));
        if (toType !== undefined)
            searchParams.append('toType', String(toType));
        if (relationTypeGroup !== undefined)
            searchParams.append('relationTypeGroup', String(relationTypeGroup));
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
    async getRelationUsingGET(fromId, fromType, relationType, relationTypeGroup, toId, toType, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/relation{?fromId,fromType,relationType,relationTypeGroup,toId,toType}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (fromId !== undefined)
            searchParams.append('fromId', String(fromId));
        if (fromType !== undefined)
            searchParams.append('fromType', String(fromType));
        if (relationType !== undefined)
            searchParams.append('relationType', String(relationType));
        if (relationTypeGroup !== undefined)
            searchParams.append('relationTypeGroup', String(relationTypeGroup));
        if (toId !== undefined)
            searchParams.append('toId', String(toId));
        if (toType !== undefined)
            searchParams.append('toType', String(toType));
        const queryString = searchParams.toString();
        if (queryString) {
            url.search = queryString;
        }
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.EntityRelationSchemaSchema.parse(responseData);
    }
    async deleteRelationUsingDELETE(fromId, fromType, relationType, relationTypeGroup, toId, toType, options) {
        const config = {
            ...options,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/relation{?fromId,fromType,relationType,relationTypeGroup,toId,toType}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (fromId !== undefined)
            searchParams.append('fromId', String(fromId));
        if (fromType !== undefined)
            searchParams.append('fromType', String(fromType));
        if (relationType !== undefined)
            searchParams.append('relationType', String(relationType));
        if (relationTypeGroup !== undefined)
            searchParams.append('relationTypeGroup', String(relationTypeGroup));
        if (toId !== undefined)
            searchParams.append('toId', String(toId));
        if (toType !== undefined)
            searchParams.append('toType', String(toType));
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
}
exports.EntityRelationControllerClient = EntityRelationControllerClient;
