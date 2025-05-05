import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class SelfRegistrationControllerClient extends BaseVXOlympusClient {
    getPrivacyPolicy(options?: RequestInit): Promise<string>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.pkgName - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.SignUpSelfRegistrationParams>}
     */
    getSignUpSelfRegistrationParams(queryParams?: {
        pkgName?: string;
    }, options?: RequestInit): Promise<schemas.SignUpSelfRegistrationParams>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<string>}
     */
    getTermsOfUse(options?: RequestInit): Promise<string>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.SelfRegistrationParams>}
     */
    getSelfRegistrationParams(options?: RequestInit): Promise<schemas.SelfRegistrationParams>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.SelfRegistrationParams>}
     */
    saveSelfRegistrationParamsWithData(data: schemas.SelfRegistrationParams, options?: RequestInit): Promise<schemas.SelfRegistrationParams>;
    /**
     * @param {string} domainName - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    deleteSelfRegistrationParams(domainName: string, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
}
