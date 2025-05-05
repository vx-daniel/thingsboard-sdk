import { BaseVXOlympusClient } from '../../base-client';
export declare class TwoFactorAuthControllerClient extends BaseVXOlympusClient {
    getAvailableTwoFaProvidersUsingGET_1(options?: RequestInit): Promise<any>;
    checkTwoFaVerificationCodeUsingPOST(providerType: string, verificationCode: string, options?: RequestInit): Promise<{
        token: string;
        refreshToken: string;
        scope: "CUSTOMER_USER" | "PRE_VERIFICATION_TOKEN" | "REFRESH_TOKEN" | "SYS_ADMIN" | "TENANT_ADMIN";
    }>;
    requestTwoFaVerificationCodeUsingPOST(providerType: string, options?: RequestInit): Promise<any>;
}
