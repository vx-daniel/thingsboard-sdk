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
exports.WidgetTypeControllerClient = void 0;
const base_client_1 = require("../../base-client");
const schemas = __importStar(require("../schemas"));
class WidgetTypeControllerClient extends base_client_1.BaseVXOlympusClient {
    async deleteWidgetTypeUsingDELETE(widgetTypeId, options) {
        const config = {
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
    async getWidgetTypeByIdUsingGET(widgetTypeId, inlineImages, options) {
        const config = {
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
        if (inlineImages !== undefined)
            searchParams.append('inlineImages', String(inlineImages));
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
    async getBundleWidgetTypeFqnsUsingGET(widgetsBundleId, options) {
        const config = {
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
        if (widgetsBundleId !== undefined)
            searchParams.append('widgetsBundleId', String(widgetsBundleId));
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
    async getWidgetTypeInfoByIdUsingGET(widgetTypeId, options) {
        const config = {
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
    async getBundleWidgetTypesDetailsByBundleAliasUsingGET(isSystem, bundleAlias, options) {
        const config = {
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
        if (isSystem !== undefined)
            searchParams.append('isSystem', String(isSystem));
        if (bundleAlias !== undefined)
            searchParams.append('bundleAlias', String(bundleAlias));
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
    async getBundleWidgetTypesDetailsUsingGET(widgetsBundleId, inlineImages, options) {
        const config = {
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
        if (widgetsBundleId !== undefined)
            searchParams.append('widgetsBundleId', String(widgetsBundleId));
        if (inlineImages !== undefined)
            searchParams.append('inlineImages', String(inlineImages));
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
    async getBundleWidgetTypesInfosByBundleAliasUsingGET(isSystem, bundleAlias, options) {
        const config = {
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
        if (isSystem !== undefined)
            searchParams.append('isSystem', String(isSystem));
        if (bundleAlias !== undefined)
            searchParams.append('bundleAlias', String(bundleAlias));
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
    async getBundleWidgetTypesInfosUsingGET(widgetsBundleId, pageSize, page, textSearch, sortProperty, sortOrder, fullSearch, deprecatedFilter, widgetTypeList, options) {
        const config = {
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
        if (widgetsBundleId !== undefined)
            searchParams.append('widgetsBundleId', String(widgetsBundleId));
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
        if (fullSearch !== undefined)
            searchParams.append('fullSearch', String(fullSearch));
        if (deprecatedFilter !== undefined)
            searchParams.append('deprecatedFilter', String(deprecatedFilter));
        if (widgetTypeList !== undefined)
            searchParams.append('widgetTypeList', String(widgetTypeList));
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
    async getBundleWidgetTypesByBundleAliasUsingGET(isSystem, bundleAlias, options) {
        const config = {
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
        if (isSystem !== undefined)
            searchParams.append('isSystem', String(isSystem));
        if (bundleAlias !== undefined)
            searchParams.append('bundleAlias', String(bundleAlias));
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
    async getWidgetTypesUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, tenantOnly, fullSearch, deprecatedFilter, widgetTypeList, options) {
        const config = {
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
        if (tenantOnly !== undefined)
            searchParams.append('tenantOnly', String(tenantOnly));
        if (fullSearch !== undefined)
            searchParams.append('fullSearch', String(fullSearch));
        if (deprecatedFilter !== undefined)
            searchParams.append('deprecatedFilter', String(deprecatedFilter));
        if (widgetTypeList !== undefined)
            searchParams.append('widgetTypeList', String(widgetTypeList));
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
    async getBundleWidgetTypesUsingGET(widgetsBundleId, options) {
        const config = {
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
        if (widgetsBundleId !== undefined)
            searchParams.append('widgetsBundleId', String(widgetsBundleId));
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
    async getWidgetTypeByBundleAliasAndTypeAliasUsingGET(isSystem, bundleAlias, alias, options) {
        const config = {
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
        if (isSystem !== undefined)
            searchParams.append('isSystem', String(isSystem));
        if (bundleAlias !== undefined)
            searchParams.append('bundleAlias', String(bundleAlias));
        if (alias !== undefined)
            searchParams.append('alias', String(alias));
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
    async getWidgetTypeUsingGET(fqn, options) {
        const config = {
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
        if (fqn !== undefined)
            searchParams.append('fqn', String(fqn));
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
    async saveWidgetTypeUsingPOST(updateExistingByFqn, data, options) {
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
        const url = new URL(`/api/widgetType{?updateExistingByFqn}`, this.baseURL);
        const searchParams = new URLSearchParams();
        if (updateExistingByFqn !== undefined)
            searchParams.append('updateExistingByFqn', String(updateExistingByFqn));
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
}
exports.WidgetTypeControllerClient = WidgetTypeControllerClient;
