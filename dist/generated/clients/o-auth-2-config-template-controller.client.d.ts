import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class OAuth2ConfigTemplateControllerClient extends BaseVXOlympusClient {
    getClientRegistrationTemplatesUsingGET_1(options?: RequestInit): Promise<any>;
    saveClientRegistrationTemplateUsingPOST(data: schemas.OAuth2ClientRegistrationTemplate, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        comment: string;
        scope: string[];
        accessTokenUri: string;
        authorizationUri: string;
        clientAuthenticationMethod: string;
        helpLink: string;
        jwkSetUri: string;
        loginButtonIcon: string;
        loginButtonLabel: string;
        providerId: string;
        userInfoUri: string;
        userNameAttributeName: string;
        id?: any;
        additionalInfo?: any;
        mapperConfig?: any;
    }>;
    deleteClientRegistrationTemplateUsingDELETE(clientRegistrationTemplateId: string, options?: RequestInit): Promise<any>;
}
