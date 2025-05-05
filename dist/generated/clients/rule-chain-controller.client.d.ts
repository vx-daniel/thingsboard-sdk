import { BaseVXOlympusClient } from '../../base-client';
export declare class RuleChainControllerClient extends BaseVXOlympusClient {
    assignRuleChainToEdgeUsingPOST(edgeId: string, ruleChainId: string, options?: RequestInit): Promise<unknown>;
    unassignRuleChainFromEdgeUsingDELETE(edgeId: string, ruleChainId: string, options?: RequestInit): Promise<unknown>;
    getEdgeRuleChainsUsingGET(edgeId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    saveRuleChainUsingPOST_1(data: any, options?: RequestInit): Promise<unknown>;
    getAutoAssignToEdgeRuleChainsUsingGET(options?: RequestInit): Promise<unknown>;
    saveRuleChainUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    saveRuleChainMetaDataUsingPOST(data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
    isTbelEnabledUsingGET(options?: RequestInit): Promise<unknown>;
    testScriptUsingPOST(data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
    getRuleChainByIdUsingGET(ruleChainId: string, options?: RequestInit): Promise<unknown>;
    deleteRuleChainUsingDELETE(ruleChainId: string, options?: RequestInit): Promise<unknown>;
    setAutoAssignToEdgeRuleChainUsingPOST(ruleChainId: string, options?: RequestInit): Promise<unknown>;
    unsetAutoAssignToEdgeRuleChainUsingDELETE(ruleChainId: string, options?: RequestInit): Promise<unknown>;
    setEdgeTemplateRootRuleChainUsingPOST(ruleChainId: string, options?: RequestInit): Promise<unknown>;
    getRuleChainMetaDataUsingGET(ruleChainId: string, options?: RequestInit): Promise<unknown>;
    getRuleChainOutputLabelsUsingGET(ruleChainId: string, options?: RequestInit): Promise<unknown>;
    getRuleChainOutputLabelsUsageUsingGET(ruleChainId: string, options?: RequestInit): Promise<unknown>;
    setRootRuleChainUsingPOST(ruleChainId: string, options?: RequestInit): Promise<unknown>;
    exportRuleChainsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    importRuleChainsUsingPOST(data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
    getRuleChainsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getLatestRuleNodeDebugInputUsingGET(ruleNodeId: string, options?: RequestInit): Promise<unknown>;
}
