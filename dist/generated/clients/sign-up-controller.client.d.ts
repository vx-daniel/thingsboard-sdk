import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class SignUpControllerClient extends BaseVXOlympusClient {
    activateUserByEmailCodeUsingPOST(emailCode: string, pkgName: string, options?: RequestInit): Promise<{
        token: string;
        refreshToken: string;
        scope: "CUSTOMER_USER" | "PRE_VERIFICATION_TOKEN" | "REFRESH_TOKEN" | "SYS_ADMIN" | "TENANT_ADMIN";
    }>;
    activateEmailUsingGET(emailCode: string, pkgName: string, options?: RequestInit): Promise<any>;
    mobileLoginUsingGET(pkgName: string, options?: RequestInit): Promise<any>;
    resendEmailActivationUsingPOST(email: string, pkgName: string, options?: RequestInit): Promise<any>;
    signUpUsingPOST(data: schemas.SignUpRequest, options?: RequestInit): Promise<any>;
    acceptPrivacyPolicyUsingPOST(options?: RequestInit): Promise<{}>;
    acceptTermsOfUseUsingPOST(options?: RequestInit): Promise<{}>;
    privacyPolicyAcceptedUsingGET(options?: RequestInit): Promise<any>;
    termsOfUseAcceptedUsingGET(options?: RequestInit): Promise<any>;
}
