"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhiteLabelingControllerClient = void 0;
const base_client_1 = require("../../base-client");
class WhiteLabelingControllerClient extends base_client_1.BaseVXOlympusClient {
    async getLoginWhiteLabelParams(options = {}) {
        const url = `${this.baseUrl}/api/noauth/whiteLabel/loginWhiteLabelParams`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.customerId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.LoginWhiteLabelingParams>}
     */
    async getCurrentLoginWhiteLabelParams(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/whiteLabel/currentLoginWhiteLabelParams{?customerId}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.customerId !== undefined)
                params.set('customerId', String(queryParams.customerId));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.customerId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.WhiteLabelingParams>}
     */
    async getCurrentWhiteLabelParams(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/whiteLabel/currentWhiteLabelParams{?customerId}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.customerId !== undefined)
                params.set('customerId', String(queryParams.customerId));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<boolean>}
     */
    async isCustomerWhiteLabelingAllowed(options = {}) {
        const url = `${this.baseUrl}/api/whiteLabel/isCustomerWhiteLabelingAllowed`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<boolean>}
     */
    async isWhiteLabelingAllowed(options = {}) {
        const url = `${this.baseUrl}/api/whiteLabel/isWhiteLabelingAllowed`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.customerId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.LoginWhiteLabelingParams>}
     */
    async saveLoginWhiteLabelParamsWithData(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/whiteLabel/loginWhiteLabelParams{?customerId}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.customerId !== undefined)
                params.set('customerId', String(queryParams.customerId));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    async saveMailTemplatesWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/whiteLabel/mailTemplates`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.systemByDefault - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    async getMailTemplates(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/whiteLabel/mailTemplates{?systemByDefault}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.systemByDefault !== undefined)
                params.set('systemByDefault', String(queryParams.systemByDefault));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.WhiteLabelingParams>}
     */
    async previewWhiteLabelParamsWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/whiteLabel/previewWhiteLabelParams`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.WhiteLabelingParams>}
     */
    async getWhiteLabelParams(options = {}) {
        const url = `${this.baseUrl}/api/whiteLabel/whiteLabelParams`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.customerId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.WhiteLabelingParams>}
     */
    async saveWhiteLabelParamsWithData(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/whiteLabel/whiteLabelParams{?customerId}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.customerId !== undefined)
                params.set('customerId', String(queryParams.customerId));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
}
exports.WhiteLabelingControllerClient = WhiteLabelingControllerClient;
