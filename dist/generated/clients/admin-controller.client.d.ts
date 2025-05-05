import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class AdminControllerClient extends BaseVXOlympusClient {
    getAutoCommitSettings(options?: RequestInit): Promise<Record<string, schemas.AutoVersionCreateConfig>>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Record<string, schemas.AutoVersionCreateConfig>>}
     */
    saveAutoCommitSettingsWithData(data: Record<string, schemas.AutoVersionCreateConfig>, options?: RequestInit): Promise<Record<string, schemas.AutoVersionCreateConfig>>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteAutoCommitSettings(options?: RequestInit): Promise<void>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<boolean>}
     */
    autoCommitSettingsExists(options?: RequestInit): Promise<boolean>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.FeaturesInfo>}
     */
    getFeaturesInfo(options?: RequestInit): Promise<schemas.FeaturesInfo>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JWT_Settings>}
     */
    getJwtSettings(options?: RequestInit): Promise<schemas.JWT_Settings>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JWT_Pair>}
     */
    saveJwtSettingsWithData(data: schemas.JWT_Settings, options?: RequestInit): Promise<schemas.JWT_Pair>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.LicenseUsageInfo>}
     */
    getLicenseUsageInfo(options?: RequestInit): Promise<schemas.LicenseUsageInfo>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    getAuthorizationUrl(options?: RequestInit): Promise<void>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.code - Query parameter
     * @param {string} queryParams.state - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    codeProcessingUrl(queryParams?: {
        code?: string;
        state?: string;
    }, options?: RequestInit): Promise<void>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<string>}
     */
    getMailProcessingUrl(options?: RequestInit): Promise<string>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.RepositorySettings>}
     */
    getRepositorySettings(options?: RequestInit): Promise<schemas.RepositorySettings>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_RepositorySettings>}
     */
    saveRepositorySettingsWithData(data: schemas.RepositorySettings, options?: RequestInit): Promise<schemas.DeferredResult_Of_RepositorySettings>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_Void>}
     */
    deleteRepositorySettings(options?: RequestInit): Promise<schemas.DeferredResult_Of_Void>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_Void>}
     */
    checkRepositoryAccessWithData(data: schemas.RepositorySettings, options?: RequestInit): Promise<schemas.DeferredResult_Of_Void>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<boolean>}
     */
    repositorySettingsExists(options?: RequestInit): Promise<boolean>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.RepositorySettingsInfo>}
     */
    getRepositorySettingsInfo(options?: RequestInit): Promise<schemas.RepositorySettingsInfo>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.SecuritySettings>}
     */
    getSecuritySettings(options?: RequestInit): Promise<schemas.SecuritySettings>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.SecuritySettings>}
     */
    saveSecuritySettingsWithData(data: schemas.SecuritySettings, options?: RequestInit): Promise<schemas.SecuritySettings>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AdminSettings>}
     */
    saveAdminSettingsWithData(data: schemas.AdminSettings, options?: RequestInit): Promise<schemas.AdminSettings>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    sendTestMailWithData(data: schemas.AdminSettings, options?: RequestInit): Promise<void>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    sendTestSmsWithData(data: schemas.TestSmsRequest, options?: RequestInit): Promise<void>;
    /**
     * @param {string} key - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.systemByDefault - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.AdminSettings>}
     */
    getAdminSettings(key: string, queryParams?: {
        systemByDefault?: boolean;
    }, options?: RequestInit): Promise<schemas.AdminSettings>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.SystemInfo>}
     */
    getSystemInfo(options?: RequestInit): Promise<schemas.SystemInfo>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.UpdateMessage>}
     */
    checkUpdates(options?: RequestInit): Promise<schemas.UpdateMessage>;
}
