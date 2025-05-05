import { BaseVXOlympusClient } from '../../base-client';
export declare class ComponentDescriptorControllerClient extends BaseVXOlympusClient {
    getComponentDescriptorByClazzUsingGET(componentDescriptorClazz: string, options?: RequestInit): Promise<{
        type: "ACTION" | "ANALYTICS" | "ENRICHMENT" | "EXTERNAL" | "FILTER" | "FLOW" | "TRANSFORMATION";
        createdTime: number;
        name: string;
        scope: "TENANT";
        clusteringMode: "ENABLED" | "SINGLETON" | "USER_PREFERENCE";
        clazz: string;
        configurationVersion: number;
        actions: string;
        id?: any;
        configurationDescriptor?: any;
    }>;
    getComponentDescriptorsByTypeUsingGET(componentType: string, ruleChainType: string, options?: RequestInit): Promise<any>;
    getComponentDescriptorsByTypesUsingGET(componentTypes: string, ruleChainType: string, options?: RequestInit): Promise<any>;
}
