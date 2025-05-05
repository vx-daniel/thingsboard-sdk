import { BaseVXOlympusClient } from '../../base-client';
export declare class ComponentDescriptorControllerClient extends BaseVXOlympusClient {
    getComponentDescriptorByClazzUsingGET(componentDescriptorClazz: string, options?: RequestInit): Promise<unknown>;
    getComponentDescriptorsByTypeUsingGET(componentType: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getComponentDescriptorsByTypesUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
