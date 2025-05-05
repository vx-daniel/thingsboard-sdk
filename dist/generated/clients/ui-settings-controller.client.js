"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiSettingsControllerClient = void 0;
const base_client_1 = require("../../base-client");
class UiSettingsControllerClient extends base_client_1.BaseVXOlympusClient {
    async getHelpBaseUrlUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...options?.headers
            }
        };
        const url = new URL(`/api/uiSettings/helpBaseUrl`, this.baseURL);
        const response = await fetch(url.toString(), config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
}
exports.UiSettingsControllerClient = UiSettingsControllerClient;
