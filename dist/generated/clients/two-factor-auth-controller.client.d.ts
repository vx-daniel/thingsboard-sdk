import { BaseVXOlympusClient } from '../../base-client';
export declare class TwoFactorAuthControllerClient extends BaseVXOlympusClient {
    getAvailableTwoFaProvidersUsingGET_1(options?: RequestInit): Promise<unknown>;
    checkTwoFaVerificationCodeUsingPOST(queryParams: any, options?: RequestInit): Promise<unknown>;
    requestTwoFaVerificationCodeUsingPOST(queryParams: any, options?: RequestInit): Promise<unknown>;
}
