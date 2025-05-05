import { BaseVXOlympusClient } from '../../base-client';
export declare class AuthControllerClient extends BaseVXOlympusClient {
    changePasswordUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    logoutUsingPOST(options?: RequestInit): Promise<unknown>;
    getUserUsingGET(options?: RequestInit): Promise<unknown>;
    checkActivateTokenUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    activateUserUsingPOST(data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
    resetPasswordUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    requestResetPasswordByEmailUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    checkResetTokenUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getUserPasswordPolicyUsingGET(options?: RequestInit): Promise<unknown>;
}
