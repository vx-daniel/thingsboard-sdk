import { BaseVXOlympusClient } from '../../base-client';
export declare class WidgetsBundleControllerClient extends BaseVXOlympusClient {
    saveWidgetsBundleUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    deleteWidgetsBundleUsingDELETE(widgetsBundleId: string, options?: RequestInit): Promise<unknown>;
    updateWidgetsBundleWidgetFqnsUsingPOST(widgetsBundleId: string, data: any, options?: RequestInit): Promise<unknown>;
    updateWidgetsBundleWidgetTypesUsingPOST(widgetsBundleId: string, data: any, options?: RequestInit): Promise<unknown>;
    getWidgetsBundleByIdUsingGET(widgetsBundleId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getWidgetsBundlesUsingGET(options?: RequestInit): Promise<unknown>;
    getWidgetsBundlesUsingGET_1(queryParams: any, options?: RequestInit): Promise<unknown>;
    getWidgetsBundlesByIdsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
