"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiSettingsControllerClient = void 0;
const base_client_1 = require("../../base-client");
class UiSettingsControllerClient extends base_client_1.BaseVXOlympusClient {
    async getHelpBaseUrl(options = {}) {
        const url = `${this.baseUrl}/api/uiSettings/helpBaseUrl`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.UiSettingsControllerClient = UiSettingsControllerClient;
