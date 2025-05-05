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
exports.EventControllerClient = void 0;
const base_client_1 = require("../../base-client");
const schemas = __importStar(require("../schemas"));
class EventControllerClient extends base_client_1.BaseVXOlympusClient {
    async clearEventsUsingPOST(entityType, entityId, startTime, endTime, data, options) {
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
        const url = new URL(`/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/clear{?endTime,startTime}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (startTime !== undefined)
            searchParams.append('startTime', String(startTime));
        if (endTime !== undefined)
            searchParams.append('endTime', String(endTime));
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
    async getEventsUsingGET_1(entityType, entityId, eventType, tenantId, pageSize, page, textSearch, sortProperty, sortOrder, startTime, endTime, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/${encodeURIComponent(eventType)}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (tenantId !== undefined)
            searchParams.append('tenantId', String(tenantId));
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
        if (startTime !== undefined)
            searchParams.append('startTime', String(startTime));
        if (endTime !== undefined)
            searchParams.append('endTime', String(endTime));
        const queryString = searchParams.toString();
        if (queryString) {
            url.search = queryString;
        }
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.PageData_Of_EventInfoSchemaSchema.parse(responseData);
    }
    async getEventsUsingGET(entityType, entityId, tenantId, pageSize, page, textSearch, sortProperty, sortOrder, startTime, endTime, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (tenantId !== undefined)
            searchParams.append('tenantId', String(tenantId));
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
        if (startTime !== undefined)
            searchParams.append('startTime', String(startTime));
        if (endTime !== undefined)
            searchParams.append('endTime', String(endTime));
        const queryString = searchParams.toString();
        if (queryString) {
            url.search = queryString;
        }
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.PageData_Of_EventInfoSchemaSchema.parse(responseData);
    }
    async getEventsUsingPOST(entityType, entityId, tenantId, pageSize, page, textSearch, sortProperty, sortOrder, startTime, endTime, data, options) {
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
        const url = new URL(`/api/events/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (tenantId !== undefined)
            searchParams.append('tenantId', String(tenantId));
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
        if (startTime !== undefined)
            searchParams.append('startTime', String(startTime));
        if (endTime !== undefined)
            searchParams.append('endTime', String(endTime));
        const queryString = searchParams.toString();
        if (queryString) {
            url.search = queryString;
        }
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.PageData_Of_EventInfoSchemaSchema.parse(responseData);
    }
}
exports.EventControllerClient = EventControllerClient;
