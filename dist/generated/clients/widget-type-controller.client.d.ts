import { BaseVXOlympusClient } from '../../base-client';
export declare class WidgetTypeControllerClient extends BaseVXOlympusClient {
    deleteWidgetTypeUsingDELETE(widgetTypeId: string, options?: RequestInit): Promise<unknown>;
    getWidgetTypeByIdUsingGET(widgetTypeId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getBundleWidgetTypeFqnsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getWidgetTypeInfoByIdUsingGET(widgetTypeId: string, options?: RequestInit): Promise<unknown>;
    getBundleWidgetTypesDetailsByBundleAliasUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getBundleWidgetTypesDetailsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getBundleWidgetTypesInfosByBundleAliasUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getBundleWidgetTypesInfosUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getBundleWidgetTypesByBundleAliasUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getWidgetTypesUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getBundleWidgetTypesUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getWidgetTypeByBundleAliasAndTypeAliasUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getWidgetTypeUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    saveWidgetTypeUsingPOST(data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
}
