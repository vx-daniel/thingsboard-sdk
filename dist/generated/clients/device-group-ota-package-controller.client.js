"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceGroupOtaPackageControllerClient = void 0;
const base_client_1 = require("../../base-client");
class DeviceGroupOtaPackageControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveDeviceGroupOtaPackageWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/deviceGroupOtaPackage`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} groupId - Path parameter
     * @param {string} firmwareType - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeviceGroupOtaPackage>}
     */
    async getFirmwareById(groupId, firmwareType, options = {}) {
        const url = `${this.baseUrl}/api/deviceGroupOtaPackage/${encodeURIComponent(groupId)}/${encodeURIComponent(firmwareType)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} id - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async deleteDeviceGroupOtaPackage(id, options = {}) {
        const url = `${this.baseUrl}/api/deviceGroupOtaPackage/${encodeURIComponent(id)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
}
exports.DeviceGroupOtaPackageControllerClient = DeviceGroupOtaPackageControllerClient;
