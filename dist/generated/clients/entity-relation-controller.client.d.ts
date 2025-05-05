import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class EntityRelationControllerClient extends BaseVXOlympusClient {
    saveRelationUsingPOST(data: schemas.EntityRelation, options?: RequestInit): Promise<any>;
    findByQueryUsingPOST_3(data: schemas.EntityRelationsQuery, options?: RequestInit): Promise<any>;
    findInfoByQueryUsingPOST(data: schemas.EntityRelationsQuery, options?: RequestInit): Promise<any>;
    findInfoByFromUsingGET(fromId: string, fromType: string, relationTypeGroup: string, options?: RequestInit): Promise<any>;
    findInfoByToUsingGET(toId: string, toType: string, relationTypeGroup: string, options?: RequestInit): Promise<any>;
    deleteRelationsUsingDELETE(entityId: string, entityType: string, options?: RequestInit): Promise<any>;
    findByFromUsingGET(fromId: string, fromType: string, relationType: string, relationTypeGroup: string, options?: RequestInit): Promise<any>;
    findByFromUsingGET_1(fromId: string, fromType: string, relationTypeGroup: string, options?: RequestInit): Promise<any>;
    findByToUsingGET(toId: string, toType: string, relationType: string, relationTypeGroup: string, options?: RequestInit): Promise<any>;
    findByToUsingGET_1(toId: string, toType: string, relationTypeGroup: string, options?: RequestInit): Promise<any>;
    getRelationUsingGET(fromId: string, fromType: string, relationType: string, relationTypeGroup: string, toId: string, toType: string, options?: RequestInit): Promise<{
        type: string;
        typeGroup: "DASHBOARD" | "EDGE" | "RULE_CHAIN" | "RULE_NODE" | "COMMON" | "EDGE_AUTO_ASSIGN_RULE_CHAIN" | "FROM_ENTITY_GROUP";
        additionalInfo?: any;
        from?: any;
        to?: any;
    }>;
    deleteRelationUsingDELETE(fromId: string, fromType: string, relationType: string, relationTypeGroup: string, toId: string, toType: string, options?: RequestInit): Promise<any>;
}
