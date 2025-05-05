import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class WidgetsBundleControllerClient extends BaseVXOlympusClient {
    saveWidgetsBundleUsingPOST(data: schemas.WidgetsBundle, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        description: string;
        image: string;
        title: string;
        alias: string;
        order: number;
        id?: any;
        tenantId?: any;
    }>;
    deleteWidgetsBundleUsingDELETE(widgetsBundleId: string, options?: RequestInit): Promise<any>;
    updateWidgetsBundleWidgetFqnsUsingPOST(widgetsBundleId: string, data: Array<string>, options?: RequestInit): Promise<any>;
    updateWidgetsBundleWidgetTypesUsingPOST(widgetsBundleId: string, data: Array<string>, options?: RequestInit): Promise<any>;
    getWidgetsBundleByIdUsingGET(widgetsBundleId: string, inlineImages: boolean, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        description: string;
        image: string;
        title: string;
        alias: string;
        order: number;
        id?: any;
        tenantId?: any;
    }>;
    getWidgetsBundlesUsingGET(options?: RequestInit): Promise<any>;
    getWidgetsBundlesUsingGET_1(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, tenantOnly: boolean, fullSearch: boolean, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getWidgetsBundlesByIdsUsingGET(widgetsBundleIds: string, options?: RequestInit): Promise<any>;
}
