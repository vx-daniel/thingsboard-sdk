import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class AuthControllerClient extends BaseVXOlympusClient {
    changePasswordUsingPOST(data: schemas.ChangePasswordRequest, options?: RequestInit): Promise<{}>;
    logoutUsingPOST(options?: RequestInit): Promise<any>;
    getUserUsingGET(options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        email: string;
        firstName: string;
        lastName: string;
        phone: string;
        authority: "CUSTOMER_USER" | "PRE_VERIFICATION_TOKEN" | "REFRESH_TOKEN" | "SYS_ADMIN" | "TENANT_ADMIN";
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    checkActivateTokenUsingGET(activateToken: string, options?: RequestInit): Promise<any>;
    activateUserUsingPOST(sendActivationMail: boolean, data: schemas.ActivateUserRequest, options?: RequestInit): Promise<{
        token: string;
        refreshToken: string;
        scope: "CUSTOMER_USER" | "PRE_VERIFICATION_TOKEN" | "REFRESH_TOKEN" | "SYS_ADMIN" | "TENANT_ADMIN";
    }>;
    resetPasswordUsingPOST(data: schemas.ResetPasswordRequest, options?: RequestInit): Promise<{
        token: string;
        refreshToken: string;
        scope: "CUSTOMER_USER" | "PRE_VERIFICATION_TOKEN" | "REFRESH_TOKEN" | "SYS_ADMIN" | "TENANT_ADMIN";
    }>;
    requestResetPasswordByEmailUsingPOST(data: schemas.ResetPasswordEmailRequest, options?: RequestInit): Promise<any>;
    checkResetTokenUsingGET(resetToken: string, options?: RequestInit): Promise<any>;
    getUserPasswordPolicyUsingGET(options?: RequestInit): Promise<{
        allowWhitespaces: boolean;
        forceUserToResetPasswordIfNotValid: boolean;
        maximumLength: number;
        minimumDigits: number;
        minimumLength: number;
        minimumLowercaseLetters: number;
        minimumSpecialCharacters: number;
        minimumUppercaseLetters: number;
        passwordExpirationPeriodDays: number;
        passwordReuseFrequencyDays: number;
    }>;
}
