import { BaseVXOlympusClient } from '../../base-client';
export declare class EdgeControllerClient extends BaseVXOlympusClient {
    getCustomerEdgeInfosUsingGET(customerId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getCustomerEdgesUsingGET(customerId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    processEdgesBulkImportUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getEdgeInfoByIdUsingGET(edgeId: string, options?: RequestInit): Promise<unknown>;
    getEdgeInstallInstructionsUsingGET(edgeId: string, method: string, options?: RequestInit): Promise<unknown>;
    getEdgeUpgradeInstructionsUsingGET(edgeVersion: string, method: string, options?: RequestInit): Promise<unknown>;
    findMissingToRelatedRuleChainsUsingGET(edgeId: string, options?: RequestInit): Promise<unknown>;
    syncEdgeUsingPOST(edgeId: string, options?: RequestInit): Promise<unknown>;
    getEdgeTypesUsingGET(options?: RequestInit): Promise<unknown>;
    getEdgeByIdUsingGET(edgeId: string, options?: RequestInit): Promise<unknown>;
    deleteEdgeUsingDELETE(edgeId: string, options?: RequestInit): Promise<unknown>;
    isEdgeUpgradeAvailableUsingGET(edgeId: string, options?: RequestInit): Promise<unknown>;
    setEdgeRootRuleChainUsingPOST(edgeId: string, ruleChainId: string, options?: RequestInit): Promise<unknown>;
    getAllEdgeInfosUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    findByQueryUsingPOST_2(data: any, options?: RequestInit): Promise<unknown>;
    isEdgesSupportEnabledUsingGET(options?: RequestInit): Promise<unknown>;
    getEdgesByIdsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getEdgesUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    saveEdgeUsingPOST(data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
    getEdgesByEntityGroupIdUsingGET(entityGroupId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    activateInstanceUsingPOST(queryParams: any, options?: RequestInit): Promise<unknown>;
    checkInstanceUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getTenantEdgeUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getTenantEdgesUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getUserEdgesUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
