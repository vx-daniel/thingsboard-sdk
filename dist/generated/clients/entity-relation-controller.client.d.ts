import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class EntityRelationControllerClient extends BaseVXOlympusClient {
    saveRelationWithData(data: schemas.EntityRelation, options?: RequestInit): Promise<void>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntityRelation>>}
     */
    findByQueryUsingPOST_3WithData(data: schemas.EntityRelationsQuery, options?: RequestInit): Promise<Array<schemas.EntityRelation>>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntityRelationInfo>>}
     */
    findInfoByQueryWithData(data: schemas.EntityRelationsQuery, options?: RequestInit): Promise<Array<schemas.EntityRelationInfo>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.fromId - Query parameter
     * @param {string} queryParams.fromType - Query parameter
     * @param {string} queryParams.relationTypeGroup - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntityRelationInfo>>}
     */
    findInfoByFrom(queryParams?: {
        fromId?: string;
        fromType?: string;
        relationTypeGroup?: string;
    }, options?: RequestInit): Promise<Array<schemas.EntityRelationInfo>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.toId - Query parameter
     * @param {string} queryParams.toType - Query parameter
     * @param {string} queryParams.relationTypeGroup - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntityRelationInfo>>}
     */
    findInfoByTo(queryParams?: {
        toId?: string;
        toType?: string;
        relationTypeGroup?: string;
    }, options?: RequestInit): Promise<Array<schemas.EntityRelationInfo>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.entityId - Query parameter
     * @param {string} queryParams.entityType - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteRelations(queryParams?: {
        entityId?: string;
        entityType?: string;
    }, options?: RequestInit): Promise<void>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.fromId - Query parameter
     * @param {string} queryParams.fromType - Query parameter
     * @param {string} queryParams.relationType - Query parameter
     * @param {string} queryParams.relationTypeGroup - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntityRelation>>}
     */
    findByFrom(queryParams?: {
        fromId?: string;
        fromType?: string;
        relationType?: string;
        relationTypeGroup?: string;
    }, options?: RequestInit): Promise<Array<schemas.EntityRelation>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.fromId - Query parameter
     * @param {string} queryParams.fromType - Query parameter
     * @param {string} queryParams.relationTypeGroup - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntityRelation>>}
     */
    findByFromUsingGET_1(queryParams?: {
        fromId?: string;
        fromType?: string;
        relationTypeGroup?: string;
    }, options?: RequestInit): Promise<Array<schemas.EntityRelation>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.toId - Query parameter
     * @param {string} queryParams.toType - Query parameter
     * @param {string} queryParams.relationType - Query parameter
     * @param {string} queryParams.relationTypeGroup - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntityRelation>>}
     */
    findByTo(queryParams?: {
        toId?: string;
        toType?: string;
        relationType?: string;
        relationTypeGroup?: string;
    }, options?: RequestInit): Promise<Array<schemas.EntityRelation>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.toId - Query parameter
     * @param {string} queryParams.toType - Query parameter
     * @param {string} queryParams.relationTypeGroup - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntityRelation>>}
     */
    findByToUsingGET_1(queryParams?: {
        toId?: string;
        toType?: string;
        relationTypeGroup?: string;
    }, options?: RequestInit): Promise<Array<schemas.EntityRelation>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.fromId - Query parameter
     * @param {string} queryParams.fromType - Query parameter
     * @param {string} queryParams.relationType - Query parameter
     * @param {string} queryParams.relationTypeGroup - Query parameter
     * @param {string} queryParams.toId - Query parameter
     * @param {string} queryParams.toType - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.EntityRelation>}
     */
    getRelation(queryParams?: {
        fromId?: string;
        fromType?: string;
        relationType?: string;
        relationTypeGroup?: string;
        toId?: string;
        toType?: string;
    }, options?: RequestInit): Promise<schemas.EntityRelation>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.fromId - Query parameter
     * @param {string} queryParams.fromType - Query parameter
     * @param {string} queryParams.relationType - Query parameter
     * @param {string} queryParams.relationTypeGroup - Query parameter
     * @param {string} queryParams.toId - Query parameter
     * @param {string} queryParams.toType - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteRelation(queryParams?: {
        fromId?: string;
        fromType?: string;
        relationType?: string;
        relationTypeGroup?: string;
        toId?: string;
        toType?: string;
    }, options?: RequestInit): Promise<void>;
}
