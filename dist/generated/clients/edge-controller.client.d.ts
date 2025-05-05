import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class EdgeControllerClient extends BaseVXOlympusClient {
    getCustomerEdgeInfos(customerId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        includeCustomers?: boolean;
        type?: string;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_EdgeInfo>;
    /**
     * @param {string} customerId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Edge>}
     */
    getCustomerEdges(customerId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        type?: string;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_Edge>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.BulkImportResult_Of_Edge>}
     */
    processEdgesBulkImportWithData(data: schemas.BulkImportRequest, options?: RequestInit): Promise<schemas.BulkImportResult_Of_Edge>;
    /**
     * @param {string} edgeId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EdgeInfo>}
     */
    getEdgeInfoById(edgeId: string, options?: RequestInit): Promise<schemas.EdgeInfo>;
    /**
     * @param {string} edgeId - Path parameter
     * @param {string} method - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EdgeInstructions>}
     */
    getEdgeInstallInstructions(edgeId: string, method: 'centos' | 'docker' | 'ubuntu', options?: RequestInit): Promise<schemas.EdgeInstructions>;
    /**
     * @param {string} edgeVersion - Path parameter
     * @param {string} method - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EdgeInstructions>}
     */
    getEdgeUpgradeInstructions(edgeVersion: string, method: 'centos' | 'docker' | 'ubuntu', options?: RequestInit): Promise<schemas.EdgeInstructions>;
    /**
     * @param {string} edgeId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<string>}
     */
    findMissingToRelatedRuleChains(edgeId: string, options?: RequestInit): Promise<string>;
    /**
     * @param {string} edgeId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    syncEdge(edgeId: string, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntitySubtype>>}
     */
    getEdgeTypes(options?: RequestInit): Promise<Array<schemas.EntitySubtype>>;
    /**
     * @param {string} edgeId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Edge>}
     */
    getEdgeById(edgeId: string, options?: RequestInit): Promise<schemas.Edge>;
    /**
     * @param {string} edgeId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteEdge(edgeId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} edgeId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<boolean>}
     */
    isEdgeUpgradeAvailable(edgeId: string, options?: RequestInit): Promise<boolean>;
    /**
     * @param {string} edgeId - Path parameter
     * @param {string} ruleChainId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Edge>}
     */
    setEdgeRootRuleChain(edgeId: string, ruleChainId: string, options?: RequestInit): Promise<schemas.Edge>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {boolean} queryParams.includeCustomers - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_EdgeInfo>}
     */
    getAllEdgeInfos(queryParams?: {
        pageSize?: number;
        page?: number;
        includeCustomers?: boolean;
        type?: string;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_EdgeInfo>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.Edge>>}
     */
    findByQueryUsingPOST_2WithData(data: schemas.EdgeSearchQuery, options?: RequestInit): Promise<Array<schemas.Edge>>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<boolean>}
     */
    isEdgesSupportEnabled(options?: RequestInit): Promise<boolean>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.edgeIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.Edge>>}
     */
    getEdgesByIds(queryParams?: {
        edgeIds?: string;
    }, options?: RequestInit): Promise<Array<schemas.Edge>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Edge>}
     */
    getEdges(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_Edge>;
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.entityGroupId - Query parameter
     * @param {string} queryParams.entityGroupIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Edge>}
     */
    saveEdgeWithData(data: schemas.Edge, queryParams?: {
        entityGroupId?: string;
        entityGroupIds?: string;
    }, options?: RequestInit): Promise<schemas.Edge>;
    /**
     * @param {string} entityGroupId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Edge>}
     */
    getEdgesByEntityGroupId(entityGroupId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_Edge>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.licenseSecret - Query parameter
     * @param {string} queryParams.releaseDate - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    activateInstance(queryParams?: {
        licenseSecret?: string;
        releaseDate?: string;
    }, options?: RequestInit): Promise<schemas.JsonNode>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    checkInstanceWithData(data: schemas.JsonNode, options?: RequestInit): Promise<schemas.JsonNode>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.edgeName - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Edge>}
     */
    getTenantEdge(queryParams?: {
        edgeName?: string;
    }, options?: RequestInit): Promise<schemas.Edge>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Edge>}
     */
    getTenantEdges(queryParams?: {
        pageSize?: number;
        page?: number;
        type?: string;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_Edge>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Edge>}
     */
    getUserEdges(queryParams?: {
        pageSize?: number;
        page?: number;
        type?: string;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'customerTitle' | 'label' | 'name' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_Edge>;
}
