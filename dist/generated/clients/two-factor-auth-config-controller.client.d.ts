import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class TwoFactorAuthConfigControllerClient extends BaseVXOlympusClient {
    generateTwoFaAccountConfig(queryParams?: {
        providerType?: 'BACKUP_CODE' | 'EMAIL' | 'SMS' | 'TOTP';
    }, options?: RequestInit): Promise<schemas.TwoFaAccountConfig>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    submitTwoFaAccountConfigWithData(data: schemas.TwoFaAccountConfig, options?: RequestInit): Promise<void>;
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.providerType - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AccountTwoFaSettings>}
     */
    updateTwoFaAccountConfigWithData(data: schemas.TwoFaAccountConfigUpdateRequest, queryParams?: {
        providerType?: 'BACKUP_CODE' | 'EMAIL' | 'SMS' | 'TOTP';
    }, options?: RequestInit): Promise<schemas.AccountTwoFaSettings>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.providerType - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AccountTwoFaSettings>}
     */
    deleteTwoFaAccountConfig(queryParams?: {
        providerType?: 'BACKUP_CODE' | 'EMAIL' | 'SMS' | 'TOTP';
    }, options?: RequestInit): Promise<schemas.AccountTwoFaSettings>;
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.verificationCode - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AccountTwoFaSettings>}
     */
    verifyAndSaveTwoFaAccountConfigWithData(data: schemas.TwoFaAccountConfig, queryParams?: {
        verificationCode?: string;
    }, options?: RequestInit): Promise<schemas.AccountTwoFaSettings>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AccountTwoFaSettings>}
     */
    getAccountTwoFaSettings(options?: RequestInit): Promise<schemas.AccountTwoFaSettings>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<string>>}
     */
    getAvailableTwoFaProviders(options?: RequestInit): Promise<Array<string>>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PlatformTwoFaSettings>}
     */
    getPlatformTwoFaSettings(options?: RequestInit): Promise<schemas.PlatformTwoFaSettings>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PlatformTwoFaSettings>}
     */
    savePlatformTwoFaSettingsWithData(data: schemas.PlatformTwoFaSettings, options?: RequestInit): Promise<schemas.PlatformTwoFaSettings>;
}
