import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class ComponentDescriptorControllerClient extends BaseVXOlympusClient {
    getComponentDescriptorByClazz(componentDescriptorClazz: string, options?: RequestInit): Promise<schemas.ComponentDescriptor>;
    /**
     * @param {string} componentType - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.ruleChainType - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.ComponentDescriptor>>}
     */
    getComponentDescriptorsByType(componentType: 'ACTION' | 'ENRICHMENT' | 'EXTERNAL' | 'FILTER' | 'TRANSFORMATION', queryParams?: {
        ruleChainType?: 'CORE' | 'EDGE';
    }, options?: RequestInit): Promise<Array<schemas.ComponentDescriptor>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.componentTypes - Query parameter
     * @param {string} queryParams.ruleChainType - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.ComponentDescriptor>>}
     */
    getComponentDescriptorsByTypes(queryParams?: {
        componentTypes?: string;
        ruleChainType?: 'CORE' | 'EDGE';
    }, options?: RequestInit): Promise<Array<schemas.ComponentDescriptor>>;
}
