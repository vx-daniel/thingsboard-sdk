import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class CustomTranslationControllerClient extends BaseVXOlympusClient {
    getCurrentCustomTranslation(options?: RequestInit): Promise<schemas.CustomTranslation>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.CustomTranslation>}
     */
    getCustomTranslation(options?: RequestInit): Promise<schemas.CustomTranslation>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.CustomTranslation>}
     */
    saveCustomTranslationWithData(data: schemas.CustomTranslation, options?: RequestInit): Promise<schemas.CustomTranslation>;
}
