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
exports.AlarmControllerClient = void 0;
const base_client_1 = require("../../base-client");
const schemas = __importStar(require("../schemas"));
class AlarmControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveAlarmUsingPOST(data, options) {
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
        const url = new URL(`/api/alarm`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.AlarmSchemaSchema.parse(responseData);
    }
    async getHighestAlarmSeverityUsingGET(entityType, entityId, searchStatus, status, assigneeId, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/alarm/highestSeverity/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?assigneeId,searchStatus,status}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (searchStatus !== undefined)
            searchParams.append('searchStatus', String(searchStatus));
        if (status !== undefined)
            searchParams.append('status', String(status));
        if (assigneeId !== undefined)
            searchParams.append('assigneeId', String(assigneeId));
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
    async getAlarmInfoByIdUsingGET(alarmId, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/alarm/info/${encodeURIComponent(alarmId)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.AlarmInfoSchemaSchema.parse(responseData);
    }
    async getAlarmTypesUsingGET(pageSize, page, textSearch, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/alarm/types{?page,pageSize,sortOrder,textSearch}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (pageSize !== undefined)
            searchParams.append('pageSize', String(pageSize));
        if (page !== undefined)
            searchParams.append('page', String(page));
        if (textSearch !== undefined)
            searchParams.append('textSearch', String(textSearch));
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
        return schemas.PageData_Of_EntitySubtypeSchemaSchema.parse(responseData);
    }
    async getAlarmByIdUsingGET(alarmId, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/alarm/${encodeURIComponent(alarmId)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.AlarmSchemaSchema.parse(responseData);
    }
    async deleteAlarmUsingDELETE(alarmId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/alarm/${encodeURIComponent(alarmId)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    async ackAlarmUsingPOST(alarmId, options) {
        const config = {
            ...options,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/alarm/${encodeURIComponent(alarmId)}/ack`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.AlarmInfoSchemaSchema.parse(responseData);
    }
    async unassignAlarmUsingDELETE(alarmId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/alarm/${encodeURIComponent(alarmId)}/assign`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.AlarmSchemaSchema.parse(responseData);
    }
    async assignAlarmUsingPOST(alarmId, assigneeId, options) {
        const config = {
            ...options,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/alarm/${encodeURIComponent(alarmId)}/assign/${encodeURIComponent(assigneeId)}`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.AlarmSchemaSchema.parse(responseData);
    }
    async clearAlarmUsingPOST(alarmId, options) {
        const config = {
            ...options,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/alarm/${encodeURIComponent(alarmId)}/clear`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.AlarmInfoSchemaSchema.parse(responseData);
    }
    async getAlarmsUsingGET(entityType, entityId, searchStatus, status, assigneeId, pageSize, page, textSearch, sortProperty, sortOrder, startTime, endTime, fetchOriginator, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/alarm/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?assigneeId,endTime,fetchOriginator,page,pageSize,searchStatus,sortOrder,sortProperty,startTime,status,textSearch}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (searchStatus !== undefined)
            searchParams.append('searchStatus', String(searchStatus));
        if (status !== undefined)
            searchParams.append('status', String(status));
        if (assigneeId !== undefined)
            searchParams.append('assigneeId', String(assigneeId));
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
        if (fetchOriginator !== undefined)
            searchParams.append('fetchOriginator', String(fetchOriginator));
        const queryString = searchParams.toString();
        if (queryString) {
            url.search = queryString;
        }
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.PageData_Of_AlarmInfoSchemaSchema.parse(responseData);
    }
    async getAllAlarmsUsingGET(searchStatus, status, assigneeId, pageSize, page, textSearch, sortProperty, sortOrder, startTime, endTime, fetchOriginator, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/alarms{?assigneeId,endTime,fetchOriginator,page,pageSize,searchStatus,sortOrder,sortProperty,startTime,status,textSearch}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (searchStatus !== undefined)
            searchParams.append('searchStatus', String(searchStatus));
        if (status !== undefined)
            searchParams.append('status', String(status));
        if (assigneeId !== undefined)
            searchParams.append('assigneeId', String(assigneeId));
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
        if (fetchOriginator !== undefined)
            searchParams.append('fetchOriginator', String(fetchOriginator));
        const queryString = searchParams.toString();
        if (queryString) {
            url.search = queryString;
        }
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return schemas.PageData_Of_AlarmInfoSchemaSchema.parse(responseData);
    }
    async getAlarmsV2UsingGET(entityType, entityId, statusList, severityList, typeList, assigneeId, pageSize, page, textSearch, sortProperty, sortOrder, startTime, endTime, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/v2/alarm/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?assigneeId,endTime,page,pageSize,severityList,sortOrder,sortProperty,startTime,statusList,textSearch,typeList}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (statusList !== undefined)
            searchParams.append('statusList', String(statusList));
        if (severityList !== undefined)
            searchParams.append('severityList', String(severityList));
        if (typeList !== undefined)
            searchParams.append('typeList', String(typeList));
        if (assigneeId !== undefined)
            searchParams.append('assigneeId', String(assigneeId));
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
        return schemas.PageData_Of_AlarmInfoSchemaSchema.parse(responseData);
    }
    async getAllAlarmsV2UsingGET(statusList, severityList, typeList, assigneeId, pageSize, page, textSearch, sortProperty, sortOrder, startTime, endTime, options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/v2/alarms{?assigneeId,endTime,page,pageSize,severityList,sortOrder,sortProperty,startTime,statusList,textSearch,typeList}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (statusList !== undefined)
            searchParams.append('statusList', String(statusList));
        if (severityList !== undefined)
            searchParams.append('severityList', String(severityList));
        if (typeList !== undefined)
            searchParams.append('typeList', String(typeList));
        if (assigneeId !== undefined)
            searchParams.append('assigneeId', String(assigneeId));
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
        return schemas.PageData_Of_AlarmInfoSchemaSchema.parse(responseData);
    }
}
exports.AlarmControllerClient = AlarmControllerClient;
