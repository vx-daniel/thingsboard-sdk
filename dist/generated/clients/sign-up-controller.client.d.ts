import { BaseVXOlympusClient } from '../../base-client';
export declare class SignUpControllerClient extends BaseVXOlympusClient {
    activateUserByEmailCodeUsingPOST(queryParams: any, options?: RequestInit): Promise<unknown>;
    activateEmailUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    mobileLoginUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    resendEmailActivationUsingPOST(queryParams: any, options?: RequestInit): Promise<unknown>;
    signUpUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    acceptPrivacyPolicyUsingPOST(options?: RequestInit): Promise<unknown>;
    acceptTermsOfUseUsingPOST(options?: RequestInit): Promise<unknown>;
    privacyPolicyAcceptedUsingGET(options?: RequestInit): Promise<unknown>;
    termsOfUseAcceptedUsingGET(options?: RequestInit): Promise<unknown>;
}
