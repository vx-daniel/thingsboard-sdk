import { BaseVXOlympusClient } from '../../base-client';
export declare class TwoFactorAuthConfigControllerClient extends BaseVXOlympusClient {
    generateTwoFaAccountConfigUsingPOST(queryParams: any, options?: RequestInit): Promise<unknown>;
    submitTwoFaAccountConfigUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    updateTwoFaAccountConfigUsingPUT(data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
    deleteTwoFaAccountConfigUsingDELETE(queryParams: any, options?: RequestInit): Promise<unknown>;
    verifyAndSaveTwoFaAccountConfigUsingPOST(data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
    getAccountTwoFaSettingsUsingGET(options?: RequestInit): Promise<unknown>;
    getAvailableTwoFaProvidersUsingGET(options?: RequestInit): Promise<unknown>;
    getPlatformTwoFaSettingsUsingGET(options?: RequestInit): Promise<unknown>;
    savePlatformTwoFaSettingsUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
}
