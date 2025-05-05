import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class ConverterControllerClient extends BaseVXOlympusClient {
    saveConverterWithData(data: schemas.Converter, options?: RequestInit): Promise<schemas.Converter>;
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.scriptLang - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    testDownLinkConverterWithData(data: schemas.JsonNode, queryParams?: {
        scriptLang?: 'JS' | 'TBEL';
    }, options?: RequestInit): Promise<schemas.JsonNode>;
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.scriptLang - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    testUpLinkConverterWithData(data: schemas.JsonNode, queryParams?: {
        scriptLang?: 'JS' | 'TBEL';
    }, options?: RequestInit): Promise<schemas.JsonNode>;
    /**
     * @param {string} converterId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Converter>}
     */
    getConverterById(converterId: string, options?: RequestInit): Promise<schemas.Converter>;
    /**
     * @param {string} converterId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteConverter(converterId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} converterId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.converterType - Query parameter
     * @param {string} queryParams.integrationType - Query parameter
     * @param {string} queryParams.integrationName - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    getLatestConverterDebugInput(converterId: string, queryParams?: {
        converterType?: string;
        integrationType?: string;
        integrationName?: string;
    }, options?: RequestInit): Promise<schemas.JsonNode>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.converterIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.Converter>>}
     */
    getConvertersByIds(queryParams?: {
        converterIds?: string;
    }, options?: RequestInit): Promise<Array<schemas.Converter>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.isEdgeTemplate - Query parameter
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Converter>}
     */
    getConverters(queryParams?: {
        isEdgeTemplate?: boolean;
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'debugMode' | 'name' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_Converter>;
}
