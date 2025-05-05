"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailConfigTemplateControllerClient = void 0;
const base_client_1 = require("../../base-client");
class MailConfigTemplateControllerClient extends base_client_1.BaseVXOlympusClient {
    async getClientRegistrationTemplatesUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/mail/config/template`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.MailConfigTemplateControllerClient = MailConfigTemplateControllerClient;
