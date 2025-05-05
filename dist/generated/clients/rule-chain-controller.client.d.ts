import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class RuleChainControllerClient extends BaseVXOlympusClient {
    assignRuleChainToEdgeUsingPOST(edgeId: string, ruleChainId: string, options?: RequestInit): Promise<{
        type: "EDGE" | "CORE";
        createdTime: number;
        name: string;
        debugMode: boolean;
        root: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
        firstRuleNodeId?: any;
    }>;
    unassignRuleChainFromEdgeUsingDELETE(edgeId: string, ruleChainId: string, options?: RequestInit): Promise<{
        type: "EDGE" | "CORE";
        createdTime: number;
        name: string;
        debugMode: boolean;
        root: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
        firstRuleNodeId?: any;
    }>;
    getEdgeRuleChainsUsingGET(edgeId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    saveRuleChainUsingPOST_1(data: schemas.RuleChain, options?: RequestInit): Promise<{
        type: "EDGE" | "CORE";
        createdTime: number;
        name: string;
        debugMode: boolean;
        root: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
        firstRuleNodeId?: any;
    }>;
    getAutoAssignToEdgeRuleChainsUsingGET(options?: RequestInit): Promise<any>;
    saveRuleChainUsingPOST(data: schemas.DefaultRuleChainCreateRequest, options?: RequestInit): Promise<{
        type: "EDGE" | "CORE";
        createdTime: number;
        name: string;
        debugMode: boolean;
        root: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
        firstRuleNodeId?: any;
    }>;
    saveRuleChainMetaDataUsingPOST(updateRelated: boolean, data: schemas.RuleChainMetaData, options?: RequestInit): Promise<{
        firstNodeIndex: number;
        nodes: any[];
        connections: any[];
        ruleChainConnections: any[];
        ruleChainId?: any;
    }>;
    isTbelEnabledUsingGET(options?: RequestInit): Promise<any>;
    testScriptUsingPOST(scriptLang: string, data: schemas.JsonNode, options?: RequestInit): Promise<{}>;
    getRuleChainByIdUsingGET(ruleChainId: string, options?: RequestInit): Promise<{
        type: "EDGE" | "CORE";
        createdTime: number;
        name: string;
        debugMode: boolean;
        root: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
        firstRuleNodeId?: any;
    }>;
    deleteRuleChainUsingDELETE(ruleChainId: string, options?: RequestInit): Promise<any>;
    setAutoAssignToEdgeRuleChainUsingPOST(ruleChainId: string, options?: RequestInit): Promise<{
        type: "EDGE" | "CORE";
        createdTime: number;
        name: string;
        debugMode: boolean;
        root: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
        firstRuleNodeId?: any;
    }>;
    unsetAutoAssignToEdgeRuleChainUsingDELETE(ruleChainId: string, options?: RequestInit): Promise<{
        type: "EDGE" | "CORE";
        createdTime: number;
        name: string;
        debugMode: boolean;
        root: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
        firstRuleNodeId?: any;
    }>;
    setEdgeTemplateRootRuleChainUsingPOST(ruleChainId: string, options?: RequestInit): Promise<{
        type: "EDGE" | "CORE";
        createdTime: number;
        name: string;
        debugMode: boolean;
        root: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
        firstRuleNodeId?: any;
    }>;
    getRuleChainMetaDataUsingGET(ruleChainId: string, options?: RequestInit): Promise<{
        firstNodeIndex: number;
        nodes: any[];
        connections: any[];
        ruleChainConnections: any[];
        ruleChainId?: any;
    }>;
    getRuleChainOutputLabelsUsingGET(ruleChainId: string, options?: RequestInit): Promise<any>;
    getRuleChainOutputLabelsUsageUsingGET(ruleChainId: string, options?: RequestInit): Promise<any>;
    setRootRuleChainUsingPOST(ruleChainId: string, options?: RequestInit): Promise<{
        type: "EDGE" | "CORE";
        createdTime: number;
        name: string;
        debugMode: boolean;
        root: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
        firstRuleNodeId?: any;
    }>;
    exportRuleChainsUsingGET(limit: number, options?: RequestInit): Promise<{
        ruleChains: any[];
        metadata: any[];
    }>;
    importRuleChainsUsingPOST(overwrite: boolean, data: schemas.RuleChainData, options?: RequestInit): Promise<any>;
    getRuleChainsUsingGET(pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getLatestRuleNodeDebugInputUsingGET(ruleNodeId: string, options?: RequestInit): Promise<{}>;
}
