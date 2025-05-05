import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class TwoFactorAuthControllerClient extends BaseVXOlympusClient {
    getAvailableTwoFaProvidersUsingGET_1(options?: RequestInit): Promise<Array<schemas.TwoFaProviderInfo>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.providerType - Query parameter
     * @param {string} queryParams.verificationCode - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JWT_Pair>}
     */
    checkTwoFaVerificationCode(queryParams?: {
        providerType?: 'BACKUP_CODE' | 'EMAIL' | 'SMS' | 'TOTP';
        verificationCode?: string;
    }, options?: RequestInit): Promise<schemas.JWT_Pair>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.providerType - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    requestTwoFaVerificationCode(queryParams?: {
        providerType?: 'BACKUP_CODE' | 'EMAIL' | 'SMS' | 'TOTP';
    }, options?: RequestInit): Promise<void>;
}
