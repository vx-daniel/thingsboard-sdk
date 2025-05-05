import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class EntityRelationControllerClient extends BaseVXOlympusClient {
  async saveRelationUsingPOST(data: schemas.EntityRelation, options?: RequestInit) {
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

    const url = new URL(`/api/relation`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  }

  async findByQueryUsingPOST_3(data: schemas.EntityRelationsQuery, options?: RequestInit) {
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

    const url = new URL(`/api/relations`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  }

  async findInfoByQueryUsingPOST(data: schemas.EntityRelationsQuery, options?: RequestInit) {
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

    const url = new URL(`/api/relations/info`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  }

  async findInfoByFromUsingGET(fromId: string, fromType: string, relationTypeGroup: string, options?: RequestInit) {
    const config: RequestInit = {
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
    if (fromId !== undefined) searchParams.append('fromId', String(fromId));
    if (fromType !== undefined) searchParams.append('fromType', String(fromType));
    if (relationTypeGroup !== undefined) searchParams.append('relationTypeGroup', String(relationTypeGroup));
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

  async findInfoByToUsingGET(toId: string, toType: string, relationTypeGroup: string, options?: RequestInit) {
    const config: RequestInit = {
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
    if (toId !== undefined) searchParams.append('toId', String(toId));
    if (toType !== undefined) searchParams.append('toType', String(toType));
    if (relationTypeGroup !== undefined) searchParams.append('relationTypeGroup', String(relationTypeGroup));
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

  async deleteRelationsUsingDELETE(entityId: string, entityType: string, options?: RequestInit) {
    const config: RequestInit = {
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
    if (entityId !== undefined) searchParams.append('entityId', String(entityId));
    if (entityType !== undefined) searchParams.append('entityType', String(entityType));
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

  async findByFromUsingGET(fromId: string, fromType: string, relationType: string, relationTypeGroup: string, options?: RequestInit) {
    const config: RequestInit = {
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
    if (fromId !== undefined) searchParams.append('fromId', String(fromId));
    if (fromType !== undefined) searchParams.append('fromType', String(fromType));
    if (relationType !== undefined) searchParams.append('relationType', String(relationType));
    if (relationTypeGroup !== undefined) searchParams.append('relationTypeGroup', String(relationTypeGroup));
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

  async findByFromUsingGET_1(fromId: string, fromType: string, relationTypeGroup: string, options?: RequestInit) {
    const config: RequestInit = {
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
    if (fromId !== undefined) searchParams.append('fromId', String(fromId));
    if (fromType !== undefined) searchParams.append('fromType', String(fromType));
    if (relationTypeGroup !== undefined) searchParams.append('relationTypeGroup', String(relationTypeGroup));
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

  async findByToUsingGET(toId: string, toType: string, relationType: string, relationTypeGroup: string, options?: RequestInit) {
    const config: RequestInit = {
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
    if (toId !== undefined) searchParams.append('toId', String(toId));
    if (toType !== undefined) searchParams.append('toType', String(toType));
    if (relationType !== undefined) searchParams.append('relationType', String(relationType));
    if (relationTypeGroup !== undefined) searchParams.append('relationTypeGroup', String(relationTypeGroup));
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

  async findByToUsingGET_1(toId: string, toType: string, relationTypeGroup: string, options?: RequestInit) {
    const config: RequestInit = {
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
    if (toId !== undefined) searchParams.append('toId', String(toId));
    if (toType !== undefined) searchParams.append('toType', String(toType));
    if (relationTypeGroup !== undefined) searchParams.append('relationTypeGroup', String(relationTypeGroup));
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

  async getRelationUsingGET(fromId: string, fromType: string, relationType: string, relationTypeGroup: string, toId: string, toType: string, options?: RequestInit) {
    const config: RequestInit = {
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
    if (fromId !== undefined) searchParams.append('fromId', String(fromId));
    if (fromType !== undefined) searchParams.append('fromType', String(fromType));
    if (relationType !== undefined) searchParams.append('relationType', String(relationType));
    if (relationTypeGroup !== undefined) searchParams.append('relationTypeGroup', String(relationTypeGroup));
    if (toId !== undefined) searchParams.append('toId', String(toId));
    if (toType !== undefined) searchParams.append('toType', String(toType));
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

  async deleteRelationUsingDELETE(fromId: string, fromType: string, relationType: string, relationTypeGroup: string, toId: string, toType: string, options?: RequestInit) {
    const config: RequestInit = {
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
    if (fromId !== undefined) searchParams.append('fromId', String(fromId));
    if (fromType !== undefined) searchParams.append('fromType', String(fromType));
    if (relationType !== undefined) searchParams.append('relationType', String(relationType));
    if (relationTypeGroup !== undefined) searchParams.append('relationTypeGroup', String(relationTypeGroup));
    if (toId !== undefined) searchParams.append('toId', String(toId));
    if (toType !== undefined) searchParams.append('toType', String(toType));
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
  }}