"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceProfileControllerClient = void 0;
const base_client_1 = require("../../base-client");
class DeviceProfileControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveDeviceProfileUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/deviceProfile`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getAttributesKeysUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/deviceProfile/devices/keys/attributes{?deviceProfileId}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getTimeseriesKeysUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/deviceProfile/devices/keys/timeseries{?deviceProfileId}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getDeviceProfileNamesUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/deviceProfile/names{?activeOnly}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteDeviceProfileUsingDELETE(deviceProfileId, options = {}) {
        const url = `${this.baseUrl}/api/deviceProfile/${encodeURIComponent(deviceProfileId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async setDefaultDeviceProfileUsingPOST(deviceProfileId, options = {}) {
        const url = `${this.baseUrl}/api/deviceProfile/${encodeURIComponent(deviceProfileId)}/default`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async getDeviceProfileByIdUsingGET(deviceProfileId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/deviceProfile/${encodeURIComponent(deviceProfileId)}{?inlineImages}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getDefaultDeviceProfileInfoUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/deviceProfileInfo/default`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getDeviceProfileInfoByIdUsingGET(deviceProfileId, options = {}) {
        const url = `${this.baseUrl}/api/deviceProfileInfo/${encodeURIComponent(deviceProfileId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getDeviceProfilesByIdsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/deviceProfileInfos{?deviceProfileIds}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getDeviceProfileInfosUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/deviceProfileInfos{?page,pageSize,sortOrder,sortProperty,textSearch,transportType}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getDeviceProfilesUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/deviceProfiles{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.DeviceProfileControllerClient = DeviceProfileControllerClient;
