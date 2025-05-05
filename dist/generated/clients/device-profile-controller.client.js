"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceProfileControllerClient = void 0;
const base_client_1 = require("../../base-client");
class DeviceProfileControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveDeviceProfileWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/deviceProfile`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.deviceProfileId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<string>>}
     */
    async getAttributesKeys(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/deviceProfile/devices/keys/attributes{?deviceProfileId}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.deviceProfileId !== undefined)
                params.set('deviceProfileId', String(queryParams.deviceProfileId));
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
     * @param {string} queryParams.deviceProfileId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<string>>}
     */
    async getTimeseriesKeys(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/deviceProfile/devices/keys/timeseries{?deviceProfileId}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.deviceProfileId !== undefined)
                params.set('deviceProfileId', String(queryParams.deviceProfileId));
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
     * @param {boolean} queryParams.activeOnly - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntityInfo>>}
     */
    async getDeviceProfileNames(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/deviceProfile/names{?activeOnly}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.activeOnly !== undefined)
                params.set('activeOnly', String(queryParams.activeOnly));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} deviceProfileId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async deleteDeviceProfile(deviceProfileId, options = {}) {
        const url = `${this.baseUrl}/api/deviceProfile/${encodeURIComponent(deviceProfileId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} deviceProfileId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeviceProfile>}
     */
    async setDefaultDeviceProfile(deviceProfileId, options = {}) {
        const url = `${this.baseUrl}/api/deviceProfile/${encodeURIComponent(deviceProfileId)}/default`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} deviceProfileId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.inlineImages - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeviceProfile>}
     */
    async getDeviceProfileById(deviceProfileId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/deviceProfile/${encodeURIComponent(deviceProfileId)}{?inlineImages}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.inlineImages !== undefined)
                params.set('inlineImages', String(queryParams.inlineImages));
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
     * @returns {Promise<schemas.DeviceProfileInfo>}
     */
    async getDefaultDeviceProfileInfo(options = {}) {
        const url = `${this.baseUrl}/api/deviceProfileInfo/default`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} deviceProfileId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeviceProfileInfo>}
     */
    async getDeviceProfileInfoById(deviceProfileId, options = {}) {
        const url = `${this.baseUrl}/api/deviceProfileInfo/${encodeURIComponent(deviceProfileId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.deviceProfileIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.DeviceProfileInfo>>}
     */
    async getDeviceProfilesByIds(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/deviceProfileInfos{?deviceProfileIds}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.deviceProfileIds !== undefined)
                params.set('deviceProfileIds', String(queryParams.deviceProfileIds));
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
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {string} queryParams.transportType - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_DeviceProfileInfo>}
     */
    async getDeviceProfileInfos(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/deviceProfileInfos{?page,pageSize,sortOrder,sortProperty,textSearch,transportType}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.textSearch !== undefined)
                params.set('textSearch', String(queryParams.textSearch));
            if (queryParams.sortProperty !== undefined)
                params.set('sortProperty', String(queryParams.sortProperty));
            if (queryParams.sortOrder !== undefined)
                params.set('sortOrder', String(queryParams.sortOrder));
            if (queryParams.transportType !== undefined)
                params.set('transportType', String(queryParams.transportType));
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
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_DeviceProfile>}
     */
    async getDeviceProfiles(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/deviceProfiles{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.textSearch !== undefined)
                params.set('textSearch', String(queryParams.textSearch));
            if (queryParams.sortProperty !== undefined)
                params.set('sortProperty', String(queryParams.sortProperty));
            if (queryParams.sortOrder !== undefined)
                params.set('sortOrder', String(queryParams.sortOrder));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.DeviceProfileControllerClient = DeviceProfileControllerClient;
