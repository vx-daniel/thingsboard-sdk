import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class RuleEngineControllerClient extends BaseVXOlympusClient {
    handleRuleEngineRequestUsingPOST_3WithData(data: string, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    handleRuleEngineRequestUsingPOST_2WithData(entityType: string, entityId: string, data: string, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {string} queueName - Path parameter
     * @param {string} timeout - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    handleRuleEngineRequestUsingPOST_1WithData(entityType: string, entityId: string, queueName: string, timeout: string, data: string, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {string} timeout - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    handleRuleEngineRequestWithData(entityType: string, entityId: string, timeout: string, data: string, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
}
