"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpControllerClient = void 0;
const base_client_1 = require("../../base-client");
class SignUpControllerClient extends base_client_1.BaseVXOlympusClient {
    async activateUserByEmailCodeUsingPOST(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/noauth/activateByEmailCode{?emailCode,pkgName}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async activateEmailUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/noauth/activateEmail{?emailCode,pkgName}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async mobileLoginUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/noauth/login{?pkgName}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async resendEmailActivationUsingPOST(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/noauth/resendEmailActivation{?email,pkgName}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async signUpUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/noauth/signup`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async acceptPrivacyPolicyUsingPOST(options = {}) {
        const url = `${this.baseUrl}/api/signup/acceptPrivacyPolicy`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async acceptTermsOfUseUsingPOST(options = {}) {
        const url = `${this.baseUrl}/api/signup/acceptTermsOfUse`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async privacyPolicyAcceptedUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/signup/privacyPolicyAccepted`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async termsOfUseAcceptedUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/signup/termsOfUseAccepted`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.SignUpControllerClient = SignUpControllerClient;
