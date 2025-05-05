import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class WhiteLabelingControllerClient extends BaseVXOlympusClient {
    getLoginWhiteLabelParams(options?: RequestInit): Promise<schemas.LoginWhiteLabelingParams>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.customerId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.LoginWhiteLabelingParams>}
     */
    getCurrentLoginWhiteLabelParams(queryParams?: {
        customerId?: string;
    }, options?: RequestInit): Promise<schemas.LoginWhiteLabelingParams>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.customerId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.WhiteLabelingParams>}
     */
    getCurrentWhiteLabelParams(queryParams?: {
        customerId?: string;
    }, options?: RequestInit): Promise<schemas.WhiteLabelingParams>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<boolean>}
     */
    isCustomerWhiteLabelingAllowed(options?: RequestInit): Promise<boolean>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<boolean>}
     */
    isWhiteLabelingAllowed(options?: RequestInit): Promise<boolean>;
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.customerId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.LoginWhiteLabelingParams>}
     */
    saveLoginWhiteLabelParamsWithData(data: schemas.LoginWhiteLabelingParams, queryParams?: {
        customerId?: string;
    }, options?: RequestInit): Promise<schemas.LoginWhiteLabelingParams>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    saveMailTemplatesWithData(data: schemas.JsonNode, options?: RequestInit): Promise<schemas.JsonNode>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.systemByDefault - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    getMailTemplates(queryParams?: {
        systemByDefault?: boolean;
    }, options?: RequestInit): Promise<schemas.JsonNode>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.WhiteLabelingParams>}
     */
    previewWhiteLabelParamsWithData(data: schemas.WhiteLabelingParams, options?: RequestInit): Promise<schemas.WhiteLabelingParams>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.WhiteLabelingParams>}
     */
    getWhiteLabelParams(options?: RequestInit): Promise<schemas.WhiteLabelingParams>;
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.customerId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.WhiteLabelingParams>}
     */
    saveWhiteLabelParamsWithData(data: schemas.WhiteLabelingParams, queryParams?: {
        customerId?: string;
    }, options?: RequestInit): Promise<schemas.WhiteLabelingParams>;
}
