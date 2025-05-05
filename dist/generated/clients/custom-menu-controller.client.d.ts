import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class CustomMenuControllerClient extends BaseVXOlympusClient {
    getCurrentCustomMenu(options?: RequestInit): Promise<schemas.CustomMenu>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.CustomMenu>}
     */
    getCustomMenu(options?: RequestInit): Promise<schemas.CustomMenu>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.CustomMenu>}
     */
    saveCustomMenuWithData(data: schemas.CustomMenu, options?: RequestInit): Promise<schemas.CustomMenu>;
}
