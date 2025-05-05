"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlarmControllerClient = void 0;
const base_client_1 = require("../../base-client");
class AlarmControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveAlarmWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/alarm`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.searchStatus - Query parameter
     * @param {string} queryParams.status - Query parameter
     * @param {string} queryParams.assigneeId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<string>}
     */
    async getHighestAlarmSeverity(entityType, entityId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/alarm/highestSeverity/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?assigneeId,searchStatus,status}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.searchStatus !== undefined)
                params.set('searchStatus', String(queryParams.searchStatus));
            if (queryParams.status !== undefined)
                params.set('status', String(queryParams.status));
            if (queryParams.assigneeId !== undefined)
                params.set('assigneeId', String(queryParams.assigneeId));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} alarmId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AlarmInfo>}
     */
    async getAlarmInfoById(alarmId, options = {}) {
        const url = `${this.baseUrl}/api/alarm/info/${encodeURIComponent(alarmId)}`;
        const response = await this.makeRequest(url, {
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
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EntitySubtype>}
     */
    async getAlarmTypes(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/alarm/types{?page,pageSize,sortOrder,textSearch}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.textSearch !== undefined)
                params.set('textSearch', String(queryParams.textSearch));
            if (queryParams.sortOrder !== undefined)
                params.set('sortOrder', String(queryParams.sortOrder));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} alarmId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Alarm>}
     */
    async getAlarmById(alarmId, options = {}) {
        const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} alarmId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<boolean>}
     */
    async deleteAlarm(alarmId, options = {}) {
        const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} alarmId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AlarmInfo>}
     */
    async ackAlarm(alarmId, options = {}) {
        const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}/ack`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} alarmId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Alarm>}
     */
    async unassignAlarm(alarmId, options = {}) {
        const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}/assign`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} alarmId - Path parameter
     * @param {string} assigneeId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Alarm>}
     */
    async assignAlarm(alarmId, assigneeId, options = {}) {
        const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}/assign/${encodeURIComponent(assigneeId)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} alarmId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AlarmInfo>}
     */
    async clearAlarm(alarmId, options = {}) {
        const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(alarmId)}/clear`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.searchStatus - Query parameter
     * @param {string} queryParams.status - Query parameter
     * @param {string} queryParams.assigneeId - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {integer} queryParams.startTime - Query parameter
     * @param {integer} queryParams.endTime - Query parameter
     * @param {boolean} queryParams.fetchOriginator - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_AlarmInfo>}
     */
    async getAlarms(entityType, entityId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/alarm/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?assigneeId,endTime,fetchOriginator,page,pageSize,searchStatus,sortOrder,sortProperty,startTime,status,textSearch}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.searchStatus !== undefined)
                params.set('searchStatus', String(queryParams.searchStatus));
            if (queryParams.status !== undefined)
                params.set('status', String(queryParams.status));
            if (queryParams.assigneeId !== undefined)
                params.set('assigneeId', String(queryParams.assigneeId));
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.textSearch !== undefined)
                params.set('textSearch', String(queryParams.textSearch));
            if (queryParams.sortProperty !== undefined)
                params.set('sortProperty', String(queryParams.sortProperty));
            if (queryParams.sortOrder !== undefined)
                params.set('sortOrder', String(queryParams.sortOrder));
            if (queryParams.startTime !== undefined)
                params.set('startTime', String(queryParams.startTime));
            if (queryParams.endTime !== undefined)
                params.set('endTime', String(queryParams.endTime));
            if (queryParams.fetchOriginator !== undefined)
                params.set('fetchOriginator', String(queryParams.fetchOriginator));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.searchStatus - Query parameter
     * @param {string} queryParams.status - Query parameter
     * @param {string} queryParams.assigneeId - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {integer} queryParams.startTime - Query parameter
     * @param {integer} queryParams.endTime - Query parameter
     * @param {boolean} queryParams.fetchOriginator - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_AlarmInfo>}
     */
    async getAllAlarms(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/alarms{?assigneeId,endTime,fetchOriginator,page,pageSize,searchStatus,sortOrder,sortProperty,startTime,status,textSearch}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.searchStatus !== undefined)
                params.set('searchStatus', String(queryParams.searchStatus));
            if (queryParams.status !== undefined)
                params.set('status', String(queryParams.status));
            if (queryParams.assigneeId !== undefined)
                params.set('assigneeId', String(queryParams.assigneeId));
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.textSearch !== undefined)
                params.set('textSearch', String(queryParams.textSearch));
            if (queryParams.sortProperty !== undefined)
                params.set('sortProperty', String(queryParams.sortProperty));
            if (queryParams.sortOrder !== undefined)
                params.set('sortOrder', String(queryParams.sortOrder));
            if (queryParams.startTime !== undefined)
                params.set('startTime', String(queryParams.startTime));
            if (queryParams.endTime !== undefined)
                params.set('endTime', String(queryParams.endTime));
            if (queryParams.fetchOriginator !== undefined)
                params.set('fetchOriginator', String(queryParams.fetchOriginator));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.statusList - Query parameter
     * @param {string} queryParams.severityList - Query parameter
     * @param {string} queryParams.typeList - Query parameter
     * @param {string} queryParams.assigneeId - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {integer} queryParams.startTime - Query parameter
     * @param {integer} queryParams.endTime - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_AlarmInfo>}
     */
    async getAlarmsV2(entityType, entityId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/v2/alarm/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}{?assigneeId,endTime,page,pageSize,severityList,sortOrder,sortProperty,startTime,statusList,textSearch,typeList}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.statusList !== undefined)
                params.set('statusList', String(queryParams.statusList));
            if (queryParams.severityList !== undefined)
                params.set('severityList', String(queryParams.severityList));
            if (queryParams.typeList !== undefined)
                params.set('typeList', String(queryParams.typeList));
            if (queryParams.assigneeId !== undefined)
                params.set('assigneeId', String(queryParams.assigneeId));
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.textSearch !== undefined)
                params.set('textSearch', String(queryParams.textSearch));
            if (queryParams.sortProperty !== undefined)
                params.set('sortProperty', String(queryParams.sortProperty));
            if (queryParams.sortOrder !== undefined)
                params.set('sortOrder', String(queryParams.sortOrder));
            if (queryParams.startTime !== undefined)
                params.set('startTime', String(queryParams.startTime));
            if (queryParams.endTime !== undefined)
                params.set('endTime', String(queryParams.endTime));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.statusList - Query parameter
     * @param {string} queryParams.severityList - Query parameter
     * @param {string} queryParams.typeList - Query parameter
     * @param {string} queryParams.assigneeId - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {integer} queryParams.startTime - Query parameter
     * @param {integer} queryParams.endTime - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_AlarmInfo>}
     */
    async getAllAlarmsV2(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/v2/alarms{?assigneeId,endTime,page,pageSize,severityList,sortOrder,sortProperty,startTime,statusList,textSearch,typeList}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.statusList !== undefined)
                params.set('statusList', String(queryParams.statusList));
            if (queryParams.severityList !== undefined)
                params.set('severityList', String(queryParams.severityList));
            if (queryParams.typeList !== undefined)
                params.set('typeList', String(queryParams.typeList));
            if (queryParams.assigneeId !== undefined)
                params.set('assigneeId', String(queryParams.assigneeId));
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.textSearch !== undefined)
                params.set('textSearch', String(queryParams.textSearch));
            if (queryParams.sortProperty !== undefined)
                params.set('sortProperty', String(queryParams.sortProperty));
            if (queryParams.sortOrder !== undefined)
                params.set('sortOrder', String(queryParams.sortOrder));
            if (queryParams.startTime !== undefined)
                params.set('startTime', String(queryParams.startTime));
            if (queryParams.endTime !== undefined)
                params.set('endTime', String(queryParams.endTime));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.AlarmControllerClient = AlarmControllerClient;
