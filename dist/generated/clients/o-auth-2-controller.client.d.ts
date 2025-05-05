import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class OAuth2ControllerClient extends BaseVXOlympusClient {
    getOAuth2Clients(queryParams?: {
        pkgName?: string;
        platform?: 'ANDROID' | 'IOS' | 'WEB';
    }, options?: RequestInit): Promise<Array<schemas.OAuth2ClientInfo>>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.OAuth2Info>}
     */
    getCurrentOAuth2Info(options?: RequestInit): Promise<schemas.OAuth2Info>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.OAuth2Info>}
     */
    saveOAuth2InfoWithData(data: schemas.OAuth2Info, options?: RequestInit): Promise<schemas.OAuth2Info>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<string>}
     */
    getLoginProcessingUrl(options?: RequestInit): Promise<string>;
}
