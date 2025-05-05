import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class OAuth2ConfigTemplateControllerClient extends BaseVXOlympusClient {
    getClientRegistrationTemplatesUsingGET_1(options?: RequestInit): Promise<Array<schemas.OAuth2ClientRegistrationTemplate>>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.OAuth2ClientRegistrationTemplate>}
     */
    saveClientRegistrationTemplateWithData(data: schemas.OAuth2ClientRegistrationTemplate, options?: RequestInit): Promise<schemas.OAuth2ClientRegistrationTemplate>;
    /**
     * @param {string} clientRegistrationTemplateId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteClientRegistrationTemplate(clientRegistrationTemplateId: string, options?: RequestInit): Promise<void>;
}
