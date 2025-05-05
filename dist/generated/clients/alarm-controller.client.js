"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlarmControllerClient = void 0;
const base_client_1 = require("../../base-client");
class AlarmControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveAlarmUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/alarm`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getHighestAlarmSeverityUsingGET(entityType, entityId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/alarm/highestSeverity/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?assigneeId,searchStatus,status}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getAlarmInfoByIdUsingGET(alarmId, options = {}) {
        const url = `${this.baseUrl}/api/alarm/info/${encodeURIComponent(alarmId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getAlarmTypesUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/alarm/types{?page,pageSize,sortOrder,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getAlarmByIdUsingGET(alarmId, options = {}) {
        const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteAlarmUsingDELETE(alarmId, options = {}) {
        const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async ackAlarmUsingPOST(alarmId, options = {}) {
        const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}/ack`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async unassignAlarmUsingDELETE(alarmId, options = {}) {
        const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}/assign`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async assignAlarmUsingPOST(alarmId, assigneeId, options = {}) {
        const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}/assign/${encodeURIComponent(assigneeId)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async clearAlarmUsingPOST(alarmId, options = {}) {
        const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}/clear`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async getAlarmsUsingGET(entityType, entityId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?assigneeId,endTime,fetchOriginator,page,pageSize,searchStatus,sortOrder,sortProperty,startTime,status,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getAllAlarmsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/alarms{?assigneeId,endTime,fetchOriginator,page,pageSize,searchStatus,sortOrder,sortProperty,startTime,status,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getAlarmsV2UsingGET(entityType, entityId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/v2/alarm/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?assigneeId,endTime,page,pageSize,severityList,sortOrder,sortProperty,startTime,statusList,textSearch,typeList}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getAllAlarmsV2UsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/v2/alarms{?assigneeId,endTime,page,pageSize,severityList,sortOrder,sortProperty,startTime,statusList,textSearch,typeList}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.AlarmControllerClient = AlarmControllerClient;
