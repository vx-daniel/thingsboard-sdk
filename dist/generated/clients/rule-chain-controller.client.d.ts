import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class RuleChainControllerClient extends BaseVXOlympusClient {
    assignRuleChainToEdge(edgeId: string, ruleChainId: string, options?: RequestInit): Promise<schemas.RuleChain>;
    /**
     * @param {string} edgeId - Path parameter
     * @param {string} ruleChainId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.RuleChain>}
     */
    unassignRuleChainFromEdge(edgeId: string, ruleChainId: string, options?: RequestInit): Promise<schemas.RuleChain>;
    /**
     * @param {string} edgeId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_RuleChain>}
     */
    getEdgeRuleChains(edgeId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'name' | 'root';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_RuleChain>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.RuleChain>}
     */
    saveRuleChainUsingPOST_1WithData(data: schemas.RuleChain, options?: RequestInit): Promise<schemas.RuleChain>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.RuleChain>>}
     */
    getAutoAssignToEdgeRuleChains(options?: RequestInit): Promise<Array<schemas.RuleChain>>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.RuleChain>}
     */
    saveRuleChainWithData(data: schemas.DefaultRuleChainCreateRequest, options?: RequestInit): Promise<schemas.RuleChain>;
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.updateRelated - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.RuleChainMetaData>}
     */
    saveRuleChainMetaDataWithData(data: schemas.RuleChainMetaData, queryParams?: {
        updateRelated?: boolean;
    }, options?: RequestInit): Promise<schemas.RuleChainMetaData>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<boolean>}
     */
    isTbelEnabled(options?: RequestInit): Promise<boolean>;
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.scriptLang - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    testScriptWithData(data: schemas.JsonNode, queryParams?: {
        scriptLang?: 'JS' | 'TBEL';
    }, options?: RequestInit): Promise<schemas.JsonNode>;
    /**
     * @param {string} ruleChainId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.RuleChain>}
     */
    getRuleChainById(ruleChainId: string, options?: RequestInit): Promise<schemas.RuleChain>;
    /**
     * @param {string} ruleChainId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteRuleChain(ruleChainId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} ruleChainId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.RuleChain>}
     */
    setAutoAssignToEdgeRuleChain(ruleChainId: string, options?: RequestInit): Promise<schemas.RuleChain>;
    /**
     * @param {string} ruleChainId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.RuleChain>}
     */
    unsetAutoAssignToEdgeRuleChain(ruleChainId: string, options?: RequestInit): Promise<schemas.RuleChain>;
    /**
     * @param {string} ruleChainId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.RuleChain>}
     */
    setEdgeTemplateRootRuleChain(ruleChainId: string, options?: RequestInit): Promise<schemas.RuleChain>;
    /**
     * @param {string} ruleChainId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.RuleChainMetaData>}
     */
    getRuleChainMetaData(ruleChainId: string, options?: RequestInit): Promise<schemas.RuleChainMetaData>;
    /**
     * @param {string} ruleChainId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<string>>}
     */
    getRuleChainOutputLabels(ruleChainId: string, options?: RequestInit): Promise<Array<string>>;
    /**
     * @param {string} ruleChainId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.RuleChainOutputLabelsUsage>>}
     */
    getRuleChainOutputLabelsUsage(ruleChainId: string, options?: RequestInit): Promise<Array<schemas.RuleChainOutputLabelsUsage>>;
    /**
     * @param {string} ruleChainId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.RuleChain>}
     */
    setRootRuleChain(ruleChainId: string, options?: RequestInit): Promise<schemas.RuleChain>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.limit - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.RuleChainData>}
     */
    exportRuleChains(queryParams?: {
        limit?: number;
    }, options?: RequestInit): Promise<schemas.RuleChainData>;
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.overwrite - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.RuleChainImportResult>>}
     */
    importRuleChainsWithData(data: schemas.RuleChainData, queryParams?: {
        overwrite?: boolean;
    }, options?: RequestInit): Promise<Array<schemas.RuleChainImportResult>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_RuleChain>}
     */
    getRuleChains(queryParams?: {
        pageSize?: number;
        page?: number;
        type?: 'CORE' | 'EDGE';
        textSearch?: string;
        sortProperty?: 'createdTime' | 'name' | 'root';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_RuleChain>;
    /**
     * @param {string} ruleNodeId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    getLatestRuleNodeDebugInput(ruleNodeId: string, options?: RequestInit): Promise<schemas.JsonNode>;
}
