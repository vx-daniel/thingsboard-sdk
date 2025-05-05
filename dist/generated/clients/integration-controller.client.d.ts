import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class IntegrationControllerClient extends BaseVXOlympusClient {
    findEdgeMissingAttributes(edgeId: string, queryParams?: {
        integrationIds?: string;
    }, options?: RequestInit): Promise<string>;
    /**
     * @param {string} integrationId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<string>}
     */
    findAllRelatedEdgesMissingAttributes(integrationId: string, options?: RequestInit): Promise<string>;
    /**
     * @param {string} edgeId - Path parameter
     * @param {string} integrationId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Integration>}
     */
    assignIntegrationToEdge(edgeId: string, integrationId: string, options?: RequestInit): Promise<schemas.Integration>;
    /**
     * @param {string} edgeId - Path parameter
     * @param {string} integrationId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Integration>}
     */
    unassignIntegrationFromEdge(edgeId: string, integrationId: string, options?: RequestInit): Promise<schemas.Integration>;
    /**
     * @param {string} edgeId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_IntegrationInfo>}
     */
    getEdgeIntegrationInfos(edgeId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'allowCreateDevicesOrAssets' | 'createdTime' | 'debugMode' | 'enabled' | 'name' | 'remote' | 'routingKey' | 'secret' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_IntegrationInfo>;
    /**
     * @param {string} edgeId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Integration>}
     */
    getEdgeIntegrations(edgeId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'allowCreateDevicesOrAssets' | 'createdTime' | 'debugMode' | 'enabled' | 'name' | 'remote' | 'routingKey' | 'secret' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_Integration>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Integration>}
     */
    saveIntegrationWithData(data: schemas.Integration, options?: RequestInit): Promise<schemas.Integration>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    checkIntegrationConnectionWithData(data: schemas.Integration, options?: RequestInit): Promise<void>;
    /**
     * @param {string} routingKey - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Integration>}
     */
    getIntegrationByRoutingKey(routingKey: string, options?: RequestInit): Promise<schemas.Integration>;
    /**
     * @param {string} integrationId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Integration>}
     */
    getIntegrationById(integrationId: string, options?: RequestInit): Promise<schemas.Integration>;
    /**
     * @param {string} integrationId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteIntegration(integrationId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.isEdgeTemplate - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_IntegrationInfo>}
     */
    getIntegrationInfos(queryParams?: {
        isEdgeTemplate?: boolean;
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'allowCreateDevicesOrAssets' | 'createdTime' | 'debugMode' | 'enabled' | 'name' | 'remote' | 'routingKey' | 'secret' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_IntegrationInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.integrationIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.Integration>>}
     */
    getIntegrationsByIds(queryParams?: {
        integrationIds?: string;
    }, options?: RequestInit): Promise<Array<schemas.Integration>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.isEdgeTemplate - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Integration>}
     */
    getIntegrations(queryParams?: {
        isEdgeTemplate?: boolean;
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'allowCreateDevicesOrAssets' | 'createdTime' | 'debugMode' | 'enabled' | 'name' | 'remote' | 'routingKey' | 'secret' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_Integration>;
}
