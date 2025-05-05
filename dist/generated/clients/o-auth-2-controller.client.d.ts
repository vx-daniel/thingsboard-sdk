import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class OAuth2ControllerClient extends BaseVXOlympusClient {
    getOAuth2ClientsUsingPOST(pkgName: string, platform: string, options?: RequestInit): Promise<any>;
    getCurrentOAuth2InfoUsingGET(options?: RequestInit): Promise<{
        enabled: boolean;
        oauth2ParamsInfos: any[];
    }>;
    saveOAuth2InfoUsingPOST(data: schemas.OAuth2Info, options?: RequestInit): Promise<{
        enabled: boolean;
        oauth2ParamsInfos: any[];
    }>;
    getLoginProcessingUrlUsingGET(options?: RequestInit): Promise<any>;
}
