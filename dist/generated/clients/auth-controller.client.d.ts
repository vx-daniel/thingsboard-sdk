import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class AuthControllerClient extends BaseVXOlympusClient {
    changePasswordWithData(data: schemas.ChangePasswordRequest, options?: RequestInit): Promise<schemas.ObjectNode>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    logout(options?: RequestInit): Promise<void>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.User>}
     */
    getUser(options?: RequestInit): Promise<schemas.User>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.activateToken - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<string>}
     */
    checkActivateToken(queryParams?: {
        activateToken?: string;
    }, options?: RequestInit): Promise<string>;
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.sendActivationMail - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JWT_Pair>}
     */
    activateUserWithData(data: schemas.ActivateUserRequest, queryParams?: {
        sendActivationMail?: boolean;
    }, options?: RequestInit): Promise<schemas.JWT_Pair>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JWT_Pair>}
     */
    resetPasswordWithData(data: schemas.ResetPasswordRequest, options?: RequestInit): Promise<schemas.JWT_Pair>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    requestResetPasswordByEmailWithData(data: schemas.ResetPasswordEmailRequest, options?: RequestInit): Promise<void>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.resetToken - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<string>}
     */
    checkResetToken(queryParams?: {
        resetToken?: string;
    }, options?: RequestInit): Promise<string>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.UserPasswordPolicy>}
     */
    getUserPasswordPolicy(options?: RequestInit): Promise<schemas.UserPasswordPolicy>;
}
