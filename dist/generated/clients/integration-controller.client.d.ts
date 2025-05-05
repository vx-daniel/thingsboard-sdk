import { BaseVXOlympusClient } from '../../base-client';
export declare class IntegrationControllerClient extends BaseVXOlympusClient {
    findEdgeMissingAttributesUsingGET(edgeId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    findAllRelatedEdgesMissingAttributesUsingGET(integrationId: string, options?: RequestInit): Promise<unknown>;
    assignIntegrationToEdgeUsingPOST(edgeId: string, integrationId: string, options?: RequestInit): Promise<unknown>;
    unassignIntegrationFromEdgeUsingDELETE(edgeId: string, integrationId: string, options?: RequestInit): Promise<unknown>;
    getEdgeIntegrationInfosUsingGET(edgeId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getEdgeIntegrationsUsingGET(edgeId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    saveIntegrationUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    checkIntegrationConnectionUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getIntegrationByRoutingKeyUsingGET(routingKey: string, options?: RequestInit): Promise<unknown>;
    getIntegrationByIdUsingGET(integrationId: string, options?: RequestInit): Promise<unknown>;
    deleteIntegrationUsingDELETE(integrationId: string, options?: RequestInit): Promise<unknown>;
    getIntegrationInfosUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getIntegrationsByIdsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getIntegrationsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
