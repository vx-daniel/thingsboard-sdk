import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class SignUpControllerClient extends BaseVXOlympusClient {
    activateUserByEmailCode(queryParams?: {
        emailCode?: string;
        pkgName?: string;
    }, options?: RequestInit): Promise<schemas.JWT_Pair>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.emailCode - Query parameter
     * @param {string} queryParams.pkgName - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<string>}
     */
    activateEmail(queryParams?: {
        emailCode?: string;
        pkgName?: string;
    }, options?: RequestInit): Promise<string>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.pkgName - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<string>}
     */
    mobileLogin(queryParams?: {
        pkgName?: string;
    }, options?: RequestInit): Promise<string>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.email - Query parameter
     * @param {string} queryParams.pkgName - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    resendEmailActivation(queryParams?: {
        email?: string;
        pkgName?: string;
    }, options?: RequestInit): Promise<void>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<string>}
     */
    signUpWithData(data: schemas.SignUpRequest, options?: RequestInit): Promise<string>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    acceptPrivacyPolicy(options?: RequestInit): Promise<schemas.JsonNode>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    acceptTermsOfUse(options?: RequestInit): Promise<schemas.JsonNode>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<boolean>}
     */
    privacyPolicyAccepted(options?: RequestInit): Promise<boolean>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<boolean>}
     */
    termsOfUseAccepted(options?: RequestInit): Promise<boolean>;
}
