"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhiteLabelingControllerClient = void 0;
const base_client_1 = require("../../base-client");
class WhiteLabelingControllerClient extends base_client_1.BaseVXOlympusClient {
    async getLoginWhiteLabelParamsUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/noauth/whiteLabel/loginWhiteLabelParams`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getCurrentLoginWhiteLabelParamsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/whiteLabel/currentLoginWhiteLabelParams{?customerId}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getCurrentWhiteLabelParamsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/whiteLabel/currentWhiteLabelParams{?customerId}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async isCustomerWhiteLabelingAllowedUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/whiteLabel/isCustomerWhiteLabelingAllowed`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async isWhiteLabelingAllowedUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/whiteLabel/isWhiteLabelingAllowed`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveLoginWhiteLabelParamsUsingPOST(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/whiteLabel/loginWhiteLabelParams{?customerId}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async saveMailTemplatesUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/whiteLabel/mailTemplates`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getMailTemplatesUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/whiteLabel/mailTemplates{?systemByDefault}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async previewWhiteLabelParamsUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/whiteLabel/previewWhiteLabelParams`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getWhiteLabelParamsUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/whiteLabel/whiteLabelParams`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveWhiteLabelParamsUsingPOST(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/whiteLabel/whiteLabelParams{?customerId}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
}
exports.WhiteLabelingControllerClient = WhiteLabelingControllerClient;
