import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class AdminControllerClient extends BaseVXOlympusClient {
    getAutoCommitSettingsUsingGET(options?: RequestInit): Promise<any>;
    saveAutoCommitSettingsUsingPOST(data: Record<string, schemas.AutoVersionCreateConfig>, options?: RequestInit): Promise<any>;
    deleteAutoCommitSettingsUsingDELETE(options?: RequestInit): Promise<any>;
    autoCommitSettingsExistsUsingGET(options?: RequestInit): Promise<any>;
    getFeaturesInfoUsingGET(options?: RequestInit): Promise<{
        smsEnabled: boolean;
        emailEnabled: boolean;
        notificationEnabled: boolean;
        oauthEnabled: boolean;
        twoFaEnabled: boolean;
        whiteLabelingEnabled: boolean;
    }>;
    getJwtSettingsUsingGET(options?: RequestInit): Promise<{
        tokenExpirationTime: number;
        refreshTokenExpTime: number;
        tokenIssuer: string;
        tokenSigningKey: string;
    }>;
    saveJwtSettingsUsingPOST(data: schemas.JWT_Settings, options?: RequestInit): Promise<{
        token: string;
        refreshToken: string;
        scope: "CUSTOMER_USER" | "PRE_VERIFICATION_TOKEN" | "REFRESH_TOKEN" | "SYS_ADMIN" | "TENANT_ADMIN";
    }>;
    getLicenseUsageInfoUsingGET(options?: RequestInit): Promise<{
        maxAssets: number;
        maxDevices: number;
        whiteLabelingEnabled: boolean;
        assetsCount: number;
        dashboardsCount: number;
        development: boolean;
        devicesCount: number;
        integrationsCount: number;
        plan: string;
    }>;
    getAuthorizationUrlUsingGET(options?: RequestInit): Promise<any>;
    codeProcessingUrlUsingGET(code: string, state: string, options?: RequestInit): Promise<any>;
    getMailProcessingUrlUsingGET(options?: RequestInit): Promise<any>;
    getRepositorySettingsUsingGET(options?: RequestInit): Promise<{
        password: string;
        readOnly: boolean;
        username: string;
        authMethod: "PRIVATE_KEY" | "USERNAME_PASSWORD";
        defaultBranch: string;
        privateKey: string;
        privateKeyFileName: string;
        privateKeyPassword: string;
        repositoryUri: string;
        showMergeCommits: boolean;
    }>;
    saveRepositorySettingsUsingPOST(data: schemas.RepositorySettings, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    deleteRepositorySettingsUsingDELETE(options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    checkRepositoryAccessUsingPOST(data: schemas.RepositorySettings, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    repositorySettingsExistsUsingGET(options?: RequestInit): Promise<any>;
    getRepositorySettingsInfoUsingGET(options?: RequestInit): Promise<{
        readOnly: boolean;
        configured: boolean;
    }>;
    getSecuritySettingsUsingGET(options?: RequestInit): Promise<{
        maxFailedLoginAttempts: number;
        userLockoutNotificationEmail: string;
        passwordPolicy?: any;
    }>;
    saveSecuritySettingsUsingPOST(data: schemas.SecuritySettings, options?: RequestInit): Promise<{
        maxFailedLoginAttempts: number;
        userLockoutNotificationEmail: string;
        passwordPolicy?: any;
    }>;
    saveAdminSettingsUsingPOST(data: schemas.AdminSettings, options?: RequestInit): Promise<{
        createdTime: number;
        key: string;
        id?: any;
        tenantId?: any;
        jsonValue?: any;
    }>;
    sendTestMailUsingPOST(data: schemas.AdminSettings, options?: RequestInit): Promise<any>;
    sendTestSmsUsingPOST(data: schemas.TestSmsRequest, options?: RequestInit): Promise<any>;
    getAdminSettingsUsingGET(key: string, systemByDefault: boolean, options?: RequestInit): Promise<{
        createdTime: number;
        key: string;
        id?: any;
        tenantId?: any;
        jsonValue?: any;
    }>;
    getSystemInfoUsingGET(options?: RequestInit): Promise<{
        monolith: boolean;
        systemData: any[];
    }>;
    checkUpdatesUsingGET(options?: RequestInit): Promise<{
        currentVersion: string;
        updateAvailable: boolean;
        latestVersion: string;
        upgradeInstructionsUrl: string;
        currentVersionReleaseNotesUrl: string;
        latestVersionReleaseNotesUrl: string;
    }>;
}
