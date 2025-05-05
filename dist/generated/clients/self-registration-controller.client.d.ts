import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class SelfRegistrationControllerClient extends BaseVXOlympusClient {
    getPrivacyPolicyUsingGET(options?: RequestInit): Promise<any>;
    getSignUpSelfRegistrationParamsUsingGET(pkgName: string, options?: RequestInit): Promise<{
        signUpTextMessage: string;
        captchaSiteKey: string;
        captchaVersion: string;
        captchaAction: string;
        showPrivacyPolicy: boolean;
        showTermsOfUse: boolean;
    }>;
    getTermsOfUseUsingGET(options?: RequestInit): Promise<any>;
    getSelfRegistrationParamsUsingGET(options?: RequestInit): Promise<{
        defaultDashboardId: string;
        domainName: string;
        adminSettingsId: string;
        appSecret: string;
        pkgName: string;
        permissions: any[];
        signUpTextMessage: string;
        captchaSiteKey: string;
        captchaVersion: string;
        captchaAction: string;
        showPrivacyPolicy: boolean;
        showTermsOfUse: boolean;
        captchaSecretKey: string;
        privacyPolicy: string;
        termsOfUse: string;
        notificationEmail: string;
        defaultDashboardFullscreen: boolean;
        appScheme: string;
        appHost: string;
    }>;
    saveSelfRegistrationParamsUsingPOST(data: schemas.SelfRegistrationParams, options?: RequestInit): Promise<{
        defaultDashboardId: string;
        domainName: string;
        adminSettingsId: string;
        appSecret: string;
        pkgName: string;
        permissions: any[];
        signUpTextMessage: string;
        captchaSiteKey: string;
        captchaVersion: string;
        captchaAction: string;
        showPrivacyPolicy: boolean;
        showTermsOfUse: boolean;
        captchaSecretKey: string;
        privacyPolicy: string;
        termsOfUse: string;
        notificationEmail: string;
        defaultDashboardFullscreen: boolean;
        appScheme: string;
        appHost: string;
    }>;
    deleteSelfRegistrationParamsUsingDELETE(domainName: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
}
