import { BaseVXOlympusClient } from '../../base-client';
export declare class AdminControllerClient extends BaseVXOlympusClient {
    getAutoCommitSettingsUsingGET(options?: RequestInit): Promise<unknown>;
    saveAutoCommitSettingsUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    deleteAutoCommitSettingsUsingDELETE(options?: RequestInit): Promise<unknown>;
    autoCommitSettingsExistsUsingGET(options?: RequestInit): Promise<unknown>;
    getFeaturesInfoUsingGET(options?: RequestInit): Promise<unknown>;
    getJwtSettingsUsingGET(options?: RequestInit): Promise<unknown>;
    saveJwtSettingsUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getLicenseUsageInfoUsingGET(options?: RequestInit): Promise<unknown>;
    getAuthorizationUrlUsingGET(options?: RequestInit): Promise<unknown>;
    codeProcessingUrlUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getMailProcessingUrlUsingGET(options?: RequestInit): Promise<unknown>;
    getRepositorySettingsUsingGET(options?: RequestInit): Promise<unknown>;
    saveRepositorySettingsUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    deleteRepositorySettingsUsingDELETE(options?: RequestInit): Promise<unknown>;
    checkRepositoryAccessUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    repositorySettingsExistsUsingGET(options?: RequestInit): Promise<unknown>;
    getRepositorySettingsInfoUsingGET(options?: RequestInit): Promise<unknown>;
    getSecuritySettingsUsingGET(options?: RequestInit): Promise<unknown>;
    saveSecuritySettingsUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    saveAdminSettingsUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    sendTestMailUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    sendTestSmsUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getAdminSettingsUsingGET(key: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getSystemInfoUsingGET(options?: RequestInit): Promise<unknown>;
    checkUpdatesUsingGET(options?: RequestInit): Promise<unknown>;
}
