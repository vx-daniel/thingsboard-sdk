import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class TwoFactorAuthConfigControllerClient extends BaseVXOlympusClient {
    generateTwoFaAccountConfigUsingPOST(providerType: string, options?: RequestInit): Promise<{
        useByDefault: boolean;
    }>;
    submitTwoFaAccountConfigUsingPOST(data: schemas.TwoFaAccountConfig, options?: RequestInit): Promise<any>;
    updateTwoFaAccountConfigUsingPUT(providerType: string, data: schemas.TwoFaAccountConfigUpdateRequest, options?: RequestInit): Promise<{
        configs: Record<string, any>;
    }>;
    deleteTwoFaAccountConfigUsingDELETE(providerType: string, options?: RequestInit): Promise<{
        configs: Record<string, any>;
    }>;
    verifyAndSaveTwoFaAccountConfigUsingPOST(verificationCode: string, data: schemas.TwoFaAccountConfig, options?: RequestInit): Promise<{
        configs: Record<string, any>;
    }>;
    getAccountTwoFaSettingsUsingGET(options?: RequestInit): Promise<{
        configs: Record<string, any>;
    }>;
    getAvailableTwoFaProvidersUsingGET(options?: RequestInit): Promise<any>;
    getPlatformTwoFaSettingsUsingGET(options?: RequestInit): Promise<{
        maxVerificationFailuresBeforeUserLockout: number;
        minVerificationCodeSendPeriod: number;
        providers: any[];
        totalAllowedTimeForVerification: number;
        useSystemTwoFactorAuthSettings: boolean;
        verificationCodeCheckRateLimit: string;
    }>;
    savePlatformTwoFaSettingsUsingPOST(data: schemas.PlatformTwoFaSettings, options?: RequestInit): Promise<{
        maxVerificationFailuresBeforeUserLockout: number;
        minVerificationCodeSendPeriod: number;
        providers: any[];
        totalAllowedTimeForVerification: number;
        useSystemTwoFactorAuthSettings: boolean;
        verificationCodeCheckRateLimit: string;
    }>;
}
