import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class WidgetTypeControllerClient extends BaseVXOlympusClient {
  async deleteWidgetTypeUsingDELETE(widgetTypeId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/widgetType/${encodeURIComponent(widgetTypeId)}`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  }

  async getWidgetTypeByIdUsingGET(widgetTypeId: string, inlineImages: boolean, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/widgetType/${encodeURIComponent(widgetTypeId)}{?inlineImages}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (inlineImages !== undefined) searchParams.append('inlineImages', String(inlineImages));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.WidgetTypeDetailsSchemaSchema.parse(responseData);
  }

  async getBundleWidgetTypeFqnsUsingGET(widgetsBundleId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/widgetTypeFqns{?widgetsBundleId}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (widgetsBundleId !== undefined) searchParams.append('widgetsBundleId', String(widgetsBundleId));
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

  async getWidgetTypeInfoByIdUsingGET(widgetTypeId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/widgetTypeInfo/${encodeURIComponent(widgetTypeId)}`, this.baseURL);
    

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.WidgetTypeInfoSchemaSchema.parse(responseData);
  }

  async getBundleWidgetTypesDetailsByBundleAliasUsingGET(isSystem: boolean, bundleAlias: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/widgetTypesDetails{?bundleAlias,isSystem}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (isSystem !== undefined) searchParams.append('isSystem', String(isSystem));
    if (bundleAlias !== undefined) searchParams.append('bundleAlias', String(bundleAlias));
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

  async getBundleWidgetTypesDetailsUsingGET(widgetsBundleId: string, inlineImages: boolean, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/widgetTypesDetails{?inlineImages,widgetsBundleId}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (widgetsBundleId !== undefined) searchParams.append('widgetsBundleId', String(widgetsBundleId));
    if (inlineImages !== undefined) searchParams.append('inlineImages', String(inlineImages));
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

  async getBundleWidgetTypesInfosByBundleAliasUsingGET(isSystem: boolean, bundleAlias: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/widgetTypesInfos{?bundleAlias,isSystem}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (isSystem !== undefined) searchParams.append('isSystem', String(isSystem));
    if (bundleAlias !== undefined) searchParams.append('bundleAlias', String(bundleAlias));
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

  async getBundleWidgetTypesInfosUsingGET(widgetsBundleId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, fullSearch: boolean, deprecatedFilter: string, widgetTypeList: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/widgetTypesInfos{?deprecatedFilter,fullSearch,page,pageSize,sortOrder,sortProperty,textSearch,widgetTypeList,widgetsBundleId}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (widgetsBundleId !== undefined) searchParams.append('widgetsBundleId', String(widgetsBundleId));
    if (pageSize !== undefined) searchParams.append('pageSize', String(pageSize));
    if (page !== undefined) searchParams.append('page', String(page));
    if (textSearch !== undefined) searchParams.append('textSearch', String(textSearch));
    if (sortProperty !== undefined) searchParams.append('sortProperty', String(sortProperty));
    if (sortOrder !== undefined) searchParams.append('sortOrder', String(sortOrder));
    if (fullSearch !== undefined) searchParams.append('fullSearch', String(fullSearch));
    if (deprecatedFilter !== undefined) searchParams.append('deprecatedFilter', String(deprecatedFilter));
    if (widgetTypeList !== undefined) searchParams.append('widgetTypeList', String(widgetTypeList));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.PageData_Of_WidgetTypeInfoSchemaSchema.parse(responseData);
  }

  async getBundleWidgetTypesByBundleAliasUsingGET(isSystem: boolean, bundleAlias: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/widgetTypes{?bundleAlias,isSystem}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (isSystem !== undefined) searchParams.append('isSystem', String(isSystem));
    if (bundleAlias !== undefined) searchParams.append('bundleAlias', String(bundleAlias));
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

  async getWidgetTypesUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, tenantOnly: boolean, fullSearch: boolean, deprecatedFilter: string, widgetTypeList: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/widgetTypes{?deprecatedFilter,fullSearch,page,pageSize,sortOrder,sortProperty,tenantOnly,textSearch,widgetTypeList}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (pageSize !== undefined) searchParams.append('pageSize', String(pageSize));
    if (page !== undefined) searchParams.append('page', String(page));
    if (textSearch !== undefined) searchParams.append('textSearch', String(textSearch));
    if (sortProperty !== undefined) searchParams.append('sortProperty', String(sortProperty));
    if (sortOrder !== undefined) searchParams.append('sortOrder', String(sortOrder));
    if (tenantOnly !== undefined) searchParams.append('tenantOnly', String(tenantOnly));
    if (fullSearch !== undefined) searchParams.append('fullSearch', String(fullSearch));
    if (deprecatedFilter !== undefined) searchParams.append('deprecatedFilter', String(deprecatedFilter));
    if (widgetTypeList !== undefined) searchParams.append('widgetTypeList', String(widgetTypeList));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.PageData_Of_WidgetTypeInfoSchemaSchema.parse(responseData);
  }

  async getBundleWidgetTypesUsingGET(widgetsBundleId: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/widgetTypes{?widgetsBundleId}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (widgetsBundleId !== undefined) searchParams.append('widgetsBundleId', String(widgetsBundleId));
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

  async getWidgetTypeByBundleAliasAndTypeAliasUsingGET(isSystem: boolean, bundleAlias: string, alias: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/widgetType{?alias,bundleAlias,isSystem}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (isSystem !== undefined) searchParams.append('isSystem', String(isSystem));
    if (bundleAlias !== undefined) searchParams.append('bundleAlias', String(bundleAlias));
    if (alias !== undefined) searchParams.append('alias', String(alias));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.WidgetTypeSchemaSchema.parse(responseData);
  }

  async getWidgetTypeUsingGET(fqn: string, options?: RequestInit) {
    const config: RequestInit = {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...options?.headers
      }
    };

    

    const url = new URL(`/api/widgetType{?fqn}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (fqn !== undefined) searchParams.append('fqn', String(fqn));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.WidgetTypeSchemaSchema.parse(responseData);
  }

  async saveWidgetTypeUsingPOST(updateExistingByFqn: boolean, data: schemas.WidgetTypeDetails, options?: RequestInit) {
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

    const url = new URL(`/api/widgetType{?updateExistingByFqn}`, this.baseURL);
    
    const searchParams = new URLSearchParams();
    if (updateExistingByFqn !== undefined) searchParams.append('updateExistingByFqn', String(updateExistingByFqn));
    const queryString = searchParams.toString();
    if (queryString) {
      url.search = queryString;
    }

    const response = await fetch(url.toString(), config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return schemas.WidgetTypeDetailsSchemaSchema.parse(responseData);
  }}