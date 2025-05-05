import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class EntitiesVersionControlControllerClient extends BaseVXOlympusClient {
  async listBranchesUsingGET(options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/entities/vc/branches`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_List_BranchInfo_SchemaSchema.parse(responseData);
  }

  async compareEntityDataToVersionUsingGET(entityType: string, internalEntityUuid: string, versionId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/entities/vc/diff/${encodeURIComponent(entityType)}/${encodeURIComponent(internalEntityUuid)}{?versionId}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (versionId !== undefined) searchParams.append('versionId', String(versionId));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_EntityDataDiffSchemaSchema.parse(responseData);
  }

  async loadEntitiesVersionUsingPOST(data: schemas.VersionLoadRequest, options?: RequestInit) {
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

    const url = new URL(`/api/entities/vc/entity`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  }

  async listEntitiesAtVersionUsingGET(entityType: string, versionId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/entities/vc/entity/${encodeURIComponent(entityType)}/${encodeURIComponent(versionId)}`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_List_VersionedEntityInfo_SchemaSchema.parse(responseData);
  }

  async getVersionLoadRequestStatusUsingGET(requestId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/entities/vc/entity/${encodeURIComponent(requestId)}/status`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.VersionLoadResultSchemaSchema.parse(responseData);
  }

  async listAllEntitiesAtVersionUsingGET(versionId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/entities/vc/entity/${encodeURIComponent(versionId)}`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_List_VersionedEntityInfo_SchemaSchema.parse(responseData);
  }

  async getEntityDataInfoUsingGET(versionId: string, entityType: string, externalEntityUuid: string, internalEntityId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/entities/vc/info/${encodeURIComponent(versionId)}/${encodeURIComponent(entityType)}/${encodeURIComponent(externalEntityUuid)}{?internalEntityId}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (internalEntityId !== undefined) searchParams.append('internalEntityId', String(internalEntityId));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_EntityDataInfoSchemaSchema.parse(responseData);
  }

  async saveEntitiesVersionUsingPOST(data: schemas.VersionCreateRequest, options?: RequestInit) {
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

    const url = new URL(`/api/entities/vc/version`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.DeferredResult_Of_uuidSchemaSchema.parse(responseData);
  }

  async listEntityVersionsUsingGET(entityType: string, externalEntityUuid: string, branch: string, internalEntityId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/entities/vc/version/${encodeURIComponent(entityType)}/${encodeURIComponent(externalEntityUuid)}?sortProperty=timestamp{&branch,internalEntityId,page,pageSize,sortOrder,textSearch}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (branch !== undefined) searchParams.append('branch', String(branch));
    if (internalEntityId !== undefined) searchParams.append('internalEntityId', String(internalEntityId));
    if (pageSize !== undefined) searchParams.append('pageSize', String(pageSize));
    if (page !== undefined) searchParams.append('page', String(page));
    if (textSearch !== undefined) searchParams.append('textSearch', String(textSearch));
    if (sortProperty !== undefined) searchParams.append('sortProperty', String(sortProperty));
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
    return schemas.DeferredResult_Of_PageData_EntityVersion_SchemaSchema.parse(responseData);
  }

  async listEntityTypeVersionsUsingGET(entityType: string, branch: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/entities/vc/version/${encodeURIComponent(entityType)}?sortProperty=timestamp{&branch,page,pageSize,sortOrder,textSearch}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (branch !== undefined) searchParams.append('branch', String(branch));
    if (pageSize !== undefined) searchParams.append('pageSize', String(pageSize));
    if (page !== undefined) searchParams.append('page', String(page));
    if (textSearch !== undefined) searchParams.append('textSearch', String(textSearch));
    if (sortProperty !== undefined) searchParams.append('sortProperty', String(sortProperty));
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
    return schemas.DeferredResult_Of_PageData_EntityVersion_SchemaSchema.parse(responseData);
  }

  async getVersionCreateRequestStatusUsingGET(requestId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/entities/vc/version/${encodeURIComponent(requestId)}/status`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.VersionCreationResultSchemaSchema.parse(responseData);
  }

  async listVersionsUsingGET(branch: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/entities/vc/version?sortProperty=timestamp{&branch,page,pageSize,sortOrder,textSearch}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (branch !== undefined) searchParams.append('branch', String(branch));
    if (pageSize !== undefined) searchParams.append('pageSize', String(pageSize));
    if (page !== undefined) searchParams.append('page', String(page));
    if (textSearch !== undefined) searchParams.append('textSearch', String(textSearch));
    if (sortProperty !== undefined) searchParams.append('sortProperty', String(sortProperty));
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
    return schemas.DeferredResult_Of_PageData_EntityVersion_SchemaSchema.parse(responseData);
  }}