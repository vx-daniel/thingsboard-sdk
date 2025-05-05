"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfRegistrationControllerClient = void 0;
const base_client_1 = require("../../base-client");
class SelfRegistrationControllerClient extends base_client_1.BaseVXOlympusClient {
    async getPrivacyPolicyUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/noauth/selfRegistration/privacyPolicy`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getSignUpSelfRegistrationParamsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/noauth/selfRegistration/signUpSelfRegistrationParams{?pkgName}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getTermsOfUseUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/noauth/selfRegistration/termsOfUse`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getSelfRegistrationParamsUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/selfRegistration/selfRegistrationParams`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveSelfRegistrationParamsUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/selfRegistration/selfRegistrationParams`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async deleteSelfRegistrationParamsUsingDELETE(domainName, options = {}) {
        const url = `${this.baseUrl}/api/selfRegistration/selfRegistrationParams/${encodeURIComponent(domainName)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
}
exports.SelfRegistrationControllerClient = SelfRegistrationControllerClient;
