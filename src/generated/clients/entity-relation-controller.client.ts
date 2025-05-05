import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class EntityRelationControllerClient extends BaseVXOlympusClient {  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async saveRelationWithData(data: schemas.EntityRelation, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/relation`;
    const response = await this.makeRequest<void>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.EntityRelation>>}
   */
  async findByQueryUsingPOST_3WithData(data: schemas.EntityRelationsQuery, options: RequestInit = {}): Promise<Array<schemas.EntityRelation>> {
    const url = `${this.baseUrl}/api/relations`;
    const response = await this.makeRequest<Array<schemas.EntityRelation>>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} data - Request body
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.EntityRelationInfo>>}
   */
  async findInfoByQueryWithData(data: schemas.EntityRelationsQuery, options: RequestInit = {}): Promise<Array<schemas.EntityRelationInfo>> {
    const url = `${this.baseUrl}/api/relations/info`;
    const response = await this.makeRequest<Array<schemas.EntityRelationInfo>>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.fromId - Query parameter
   * @param {string} queryParams.fromType - Query parameter
   * @param {string} queryParams.relationTypeGroup - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.EntityRelationInfo>>}
   */
  async findInfoByFrom(queryParams?: { fromId?: string; fromType?: string; relationTypeGroup?: string }, options: RequestInit = {}): Promise<Array<schemas.EntityRelationInfo>> {
    const url = `${this.baseUrl}/api/relations/info{?fromId,fromType,relationTypeGroup}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.fromId !== undefined) params.set('fromId', String(queryParams.fromId));
      if (queryParams.fromType !== undefined) params.set('fromType', String(queryParams.fromType));
      if (queryParams.relationTypeGroup !== undefined) params.set('relationTypeGroup', String(queryParams.relationTypeGroup));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.EntityRelationInfo>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.toId - Query parameter
   * @param {string} queryParams.toType - Query parameter
   * @param {string} queryParams.relationTypeGroup - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.EntityRelationInfo>>}
   */
  async findInfoByTo(queryParams?: { toId?: string; toType?: string; relationTypeGroup?: string }, options: RequestInit = {}): Promise<Array<schemas.EntityRelationInfo>> {
    const url = `${this.baseUrl}/api/relations/info{?relationTypeGroup,toId,toType}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.toId !== undefined) params.set('toId', String(queryParams.toId));
      if (queryParams.toType !== undefined) params.set('toType', String(queryParams.toType));
      if (queryParams.relationTypeGroup !== undefined) params.set('relationTypeGroup', String(queryParams.relationTypeGroup));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.EntityRelationInfo>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.entityId - Query parameter
   * @param {string} queryParams.entityType - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<void>}
   */
  async deleteRelations(queryParams?: { entityId?: string; entityType?: string }, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/relations{?entityId,entityType}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.entityId !== undefined) params.set('entityId', String(queryParams.entityId));
      if (queryParams.entityType !== undefined) params.set('entityType', String(queryParams.entityType));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<void>(url + (queryString ? `?${queryString}` : ''), {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.fromId - Query parameter
   * @param {string} queryParams.fromType - Query parameter
   * @param {string} queryParams.relationType - Query parameter
   * @param {string} queryParams.relationTypeGroup - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.EntityRelation>>}
   */
  async findByFrom(queryParams?: { fromId?: string; fromType?: string; relationType?: string; relationTypeGroup?: string }, options: RequestInit = {}): Promise<Array<schemas.EntityRelation>> {
    const url = `${this.baseUrl}/api/relations{?fromId,fromType,relationType,relationTypeGroup}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.fromId !== undefined) params.set('fromId', String(queryParams.fromId));
      if (queryParams.fromType !== undefined) params.set('fromType', String(queryParams.fromType));
      if (queryParams.relationType !== undefined) params.set('relationType', String(queryParams.relationType));
      if (queryParams.relationTypeGroup !== undefined) params.set('relationTypeGroup', String(queryParams.relationTypeGroup));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.EntityRelation>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.fromId - Query parameter
   * @param {string} queryParams.fromType - Query parameter
   * @param {string} queryParams.relationTypeGroup - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.EntityRelation>>}
   */
  async findByFromUsingGET_1(queryParams?: { fromId?: string; fromType?: string; relationTypeGroup?: string }, options: RequestInit = {}): Promise<Array<schemas.EntityRelation>> {
    const url = `${this.baseUrl}/api/relations{?fromId,fromType,relationTypeGroup}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.fromId !== undefined) params.set('fromId', String(queryParams.fromId));
      if (queryParams.fromType !== undefined) params.set('fromType', String(queryParams.fromType));
      if (queryParams.relationTypeGroup !== undefined) params.set('relationTypeGroup', String(queryParams.relationTypeGroup));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.EntityRelation>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.toId - Query parameter
   * @param {string} queryParams.toType - Query parameter
   * @param {string} queryParams.relationType - Query parameter
   * @param {string} queryParams.relationTypeGroup - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.EntityRelation>>}
   */
  async findByTo(queryParams?: { toId?: string; toType?: string; relationType?: string; relationTypeGroup?: string }, options: RequestInit = {}): Promise<Array<schemas.EntityRelation>> {
    const url = `${this.baseUrl}/api/relations{?relationType,relationTypeGroup,toId,toType}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.toId !== undefined) params.set('toId', String(queryParams.toId));
      if (queryParams.toType !== undefined) params.set('toType', String(queryParams.toType));
      if (queryParams.relationType !== undefined) params.set('relationType', String(queryParams.relationType));
      if (queryParams.relationTypeGroup !== undefined) params.set('relationTypeGroup', String(queryParams.relationTypeGroup));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.EntityRelation>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
  /**
   * @param {object} queryParams - Query parameters
   * @param {string} queryParams.toId - Query parameter
   * @param {string} queryParams.toType - Query parameter
   * @param {string} queryParams.relationTypeGroup - Query parameter
   * @param {RequestInit} [options] - Fetch options
   * @returns {Promise<Array<schemas.EntityRelation>>}
   */
  async findByToUsingGET_1(queryParams?: { toId?: string; toType?: string; relationTypeGroup?: string }, options: RequestInit = {}): Promise<Array<schemas.EntityRelation>> {
    const url = `${this.baseUrl}/api/relations{?relationTypeGroup,toId,toType}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.toId !== undefined) params.set('toId', String(queryParams.toId));
      if (queryParams.toType !== undefined) params.set('toType', String(queryParams.toType));
      if (queryParams.relationTypeGroup !== undefined) params.set('relationTypeGroup', String(queryParams.relationTypeGroup));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<Array<schemas.EntityRelation>>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
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
  async getRelation(queryParams?: { fromId?: string; fromType?: string; relationType?: string; relationTypeGroup?: string; toId?: string; toType?: string }, options: RequestInit = {}): Promise<schemas.EntityRelation> {
    const url = `${this.baseUrl}/api/relation{?fromId,fromType,relationType,relationTypeGroup,toId,toType}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.fromId !== undefined) params.set('fromId', String(queryParams.fromId));
      if (queryParams.fromType !== undefined) params.set('fromType', String(queryParams.fromType));
      if (queryParams.relationType !== undefined) params.set('relationType', String(queryParams.relationType));
      if (queryParams.relationTypeGroup !== undefined) params.set('relationTypeGroup', String(queryParams.relationTypeGroup));
      if (queryParams.toId !== undefined) params.set('toId', String(queryParams.toId));
      if (queryParams.toType !== undefined) params.set('toType', String(queryParams.toType));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<schemas.EntityRelation>(url + (queryString ? `?${queryString}` : ''), {
      method: 'GET',
      
      ...options,
    });
    return response;
  }
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
  async deleteRelation(queryParams?: { fromId?: string; fromType?: string; relationType?: string; relationTypeGroup?: string; toId?: string; toType?: string }, options: RequestInit = {}): Promise<void> {
    const url = `${this.baseUrl}/api/relation{?fromId,fromType,relationType,relationTypeGroup,toId,toType}`;
    const params = new URLSearchParams();
    if (queryParams) {
      if (queryParams.fromId !== undefined) params.set('fromId', String(queryParams.fromId));
      if (queryParams.fromType !== undefined) params.set('fromType', String(queryParams.fromType));
      if (queryParams.relationType !== undefined) params.set('relationType', String(queryParams.relationType));
      if (queryParams.relationTypeGroup !== undefined) params.set('relationTypeGroup', String(queryParams.relationTypeGroup));
      if (queryParams.toId !== undefined) params.set('toId', String(queryParams.toId));
      if (queryParams.toType !== undefined) params.set('toType', String(queryParams.toType));
    }
    const queryString = params.toString();
    const response = await this.makeRequest<void>(url + (queryString ? `?${queryString}` : ''), {
      method: 'DELETE',
      
      ...options,
    });
    return response;
  }}