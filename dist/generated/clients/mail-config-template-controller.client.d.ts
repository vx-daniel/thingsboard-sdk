import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class MailConfigTemplateControllerClient extends BaseVXOlympusClient {
    getClientRegistrationTemplates(options?: RequestInit): Promise<schemas.JsonNode>;
}
