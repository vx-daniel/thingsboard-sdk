import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class AlarmControllerClient extends BaseVXOlympusClient {
  async saveAlarmUsingPOST(data: schemas.Alarm, options?: RequestInit) {
    const config: RequestInit = {
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

  async getHighestAlarmSeverityUsingGET(entityType: string, entityId: string, searchStatus: string, status: string, assigneeId: string, options?: RequestInit) {
    const config: RequestInit = {
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
    if (searchStatus !== undefined) searchParams.append('searchStatus', String(searchStatus));
    if (status !== undefined) searchParams.append('status', String(status));
    if (assigneeId !== undefined) searchParams.append('assigneeId', String(assigneeId));
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

  async getAlarmInfoByIdUsingGET(alarmId: string, options?: RequestInit) {
    const config: RequestInit = {
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

  async getAlarmTypesUsingGET(pageSize: number, page: number, textSearch: string, sortOrder: string, options?: RequestInit) {
    const config: RequestInit = {
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
    if (pageSize !== undefined) searchParams.append('pageSize', String(pageSize));
    if (page !== undefined) searchParams.append('page', String(page));
    if (textSearch !== undefined) searchParams.append('textSearch', String(textSearch));
    if (sortOrder !== undefined) searchParams.append('sortOrder', String(sortOrder));
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

  async getAlarmByIdUsingGET(alarmId: string, options?: RequestInit) {
    const config: RequestInit = {
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

  async deleteAlarmUsingDELETE(alarmId: string, options?: RequestInit) {
    const config: RequestInit = {
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

  async ackAlarmUsingPOST(alarmId: string, options?: RequestInit) {
    const config: RequestInit = {
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

  async unassignAlarmUsingDELETE(alarmId: string, options?: RequestInit) {
    const config: RequestInit = {
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

  async assignAlarmUsingPOST(alarmId: string, assigneeId: string, options?: RequestInit) {
    const config: RequestInit = {
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

  async clearAlarmUsingPOST(alarmId: string, options?: RequestInit) {
    const config: RequestInit = {
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

  async getAlarmsUsingGET(entityType: string, entityId: string, searchStatus: string, status: string, assigneeId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, fetchOriginator: boolean, options?: RequestInit) {
    const config: RequestInit = {
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
    if (searchStatus !== undefined) searchParams.append('searchStatus', String(searchStatus));
    if (status !== undefined) searchParams.append('status', String(status));
    if (assigneeId !== undefined) searchParams.append('assigneeId', String(assigneeId));
    if (pageSize !== undefined) searchParams.append('pageSize', String(pageSize));
    if (page !== undefined) searchParams.append('page', String(page));
    if (textSearch !== undefined) searchParams.append('textSearch', String(textSearch));
    if (sortProperty !== undefined) searchParams.append('sortProperty', String(sortProperty));
    if (sortOrder !== undefined) searchParams.append('sortOrder', String(sortOrder));
    if (startTime !== undefined) searchParams.append('startTime', String(startTime));
    if (endTime !== undefined) searchParams.append('endTime', String(endTime));
    if (fetchOriginator !== undefined) searchParams.append('fetchOriginator', String(fetchOriginator));
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

  async getAllAlarmsUsingGET(searchStatus: string, status: string, assigneeId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, fetchOriginator: boolean, options?: RequestInit) {
    const config: RequestInit = {
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
    if (searchStatus !== undefined) searchParams.append('searchStatus', String(searchStatus));
    if (status !== undefined) searchParams.append('status', String(status));
    if (assigneeId !== undefined) searchParams.append('assigneeId', String(assigneeId));
    if (pageSize !== undefined) searchParams.append('pageSize', String(pageSize));
    if (page !== undefined) searchParams.append('page', String(page));
    if (textSearch !== undefined) searchParams.append('textSearch', String(textSearch));
    if (sortProperty !== undefined) searchParams.append('sortProperty', String(sortProperty));
    if (sortOrder !== undefined) searchParams.append('sortOrder', String(sortOrder));
    if (startTime !== undefined) searchParams.append('startTime', String(startTime));
    if (endTime !== undefined) searchParams.append('endTime', String(endTime));
    if (fetchOriginator !== undefined) searchParams.append('fetchOriginator', String(fetchOriginator));
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

  async getAlarmsV2UsingGET(entityType: string, entityId: string, statusList: string, severityList: string, typeList: string, assigneeId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, options?: RequestInit) {
    const config: RequestInit = {
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
    if (statusList !== undefined) searchParams.append('statusList', String(statusList));
    if (severityList !== undefined) searchParams.append('severityList', String(severityList));
    if (typeList !== undefined) searchParams.append('typeList', String(typeList));
    if (assigneeId !== undefined) searchParams.append('assigneeId', String(assigneeId));
    if (pageSize !== undefined) searchParams.append('pageSize', String(pageSize));
    if (page !== undefined) searchParams.append('page', String(page));
    if (textSearch !== undefined) searchParams.append('textSearch', String(textSearch));
    if (sortProperty !== undefined) searchParams.append('sortProperty', String(sortProperty));
    if (sortOrder !== undefined) searchParams.append('sortOrder', String(sortOrder));
    if (startTime !== undefined) searchParams.append('startTime', String(startTime));
    if (endTime !== undefined) searchParams.append('endTime', String(endTime));
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

  async getAllAlarmsV2UsingGET(statusList: string, severityList: string, typeList: string, assigneeId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, options?: RequestInit) {
    const config: RequestInit = {
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
    if (statusList !== undefined) searchParams.append('statusList', String(statusList));
    if (severityList !== undefined) searchParams.append('severityList', String(severityList));
    if (typeList !== undefined) searchParams.append('typeList', String(typeList));
    if (assigneeId !== undefined) searchParams.append('assigneeId', String(assigneeId));
    if (pageSize !== undefined) searchParams.append('pageSize', String(pageSize));
    if (page !== undefined) searchParams.append('page', String(page));
    if (textSearch !== undefined) searchParams.append('textSearch', String(textSearch));
    if (sortProperty !== undefined) searchParams.append('sortProperty', String(sortProperty));
    if (sortOrder !== undefined) searchParams.append('sortOrder', String(sortOrder));
    if (startTime !== undefined) searchParams.append('startTime', String(startTime));
    if (endTime !== undefined) searchParams.append('endTime', String(endTime));
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
  }}