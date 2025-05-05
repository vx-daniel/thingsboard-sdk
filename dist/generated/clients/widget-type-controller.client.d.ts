import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class WidgetTypeControllerClient extends BaseVXOlympusClient {
    deleteWidgetTypeUsingDELETE(widgetTypeId: string, options?: RequestInit): Promise<any>;
    getWidgetTypeByIdUsingGET(widgetTypeId: string, inlineImages: boolean, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        description: string;
        image: string;
        fqn: string;
        deprecated: boolean;
        tags: string[];
        tenantId?: any;
        descriptor?: any;
    }>;
    getBundleWidgetTypeFqnsUsingGET(widgetsBundleId: string, options?: RequestInit): Promise<any>;
    getWidgetTypeInfoByIdUsingGET(widgetTypeId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        description: string;
        image: string;
        fqn: string;
        deprecated: boolean;
        tags: string[];
        widgetType: string;
        id?: any;
        tenantId?: any;
    }>;
    getBundleWidgetTypesDetailsByBundleAliasUsingGET(isSystem: boolean, bundleAlias: string, options?: RequestInit): Promise<any>;
    getBundleWidgetTypesDetailsUsingGET(widgetsBundleId: string, inlineImages: boolean, options?: RequestInit): Promise<any>;
    getBundleWidgetTypesInfosByBundleAliasUsingGET(isSystem: boolean, bundleAlias: string, options?: RequestInit): Promise<any>;
    getBundleWidgetTypesInfosUsingGET(widgetsBundleId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, fullSearch: boolean, deprecatedFilter: string, widgetTypeList: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getBundleWidgetTypesByBundleAliasUsingGET(isSystem: boolean, bundleAlias: string, options?: RequestInit): Promise<any>;
    getWidgetTypesUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, tenantOnly: boolean, fullSearch: boolean, deprecatedFilter: string, widgetTypeList: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getBundleWidgetTypesUsingGET(widgetsBundleId: string, options?: RequestInit): Promise<any>;
    getWidgetTypeByBundleAliasAndTypeAliasUsingGET(isSystem: boolean, bundleAlias: string, alias: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        fqn: string;
        deprecated: boolean;
        id?: any;
        tenantId?: any;
        descriptor?: any;
    }>;
    getWidgetTypeUsingGET(fqn: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        fqn: string;
        deprecated: boolean;
        id?: any;
        tenantId?: any;
        descriptor?: any;
    }>;
    saveWidgetTypeUsingPOST(updateExistingByFqn: boolean, data: schemas.WidgetTypeDetails, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        description: string;
        image: string;
        fqn: string;
        deprecated: boolean;
        tags: string[];
        tenantId?: any;
        descriptor?: any;
    }>;
}
