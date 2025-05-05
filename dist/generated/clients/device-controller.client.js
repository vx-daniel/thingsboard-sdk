"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceControllerClient = void 0;
const base_client_1 = require("../../base-client");
class DeviceControllerClient extends base_client_1.BaseVXOlympusClient {
    async reClaimDevice(deviceName, options = {}) {
        const url = `${this.baseUrl}/api/customer/device/${encodeURIComponent(deviceName)}/claim`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} deviceName - Path parameter
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.subCustomerId - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    async claimDeviceWithData(deviceName, data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer/device/${encodeURIComponent(deviceName)}/claim{?subCustomerId}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.subCustomerId !== undefined)
                params.set('subCustomerId', String(queryParams.subCustomerId));
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
     * @param {string} customerId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {boolean} queryParams.includeCustomers - Query parameter
     * @param {string} queryParams.deviceProfileId - Query parameter
     * @param {boolean} queryParams.active - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_DeviceInfo>}
     */
    async getCustomerDeviceInfos(customerId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/deviceInfos{?active,deviceProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.includeCustomers !== undefined)
                params.set('includeCustomers', String(queryParams.includeCustomers));
            if (queryParams.deviceProfileId !== undefined)
                params.set('deviceProfileId', String(queryParams.deviceProfileId));
            if (queryParams.active !== undefined)
                params.set('active', String(queryParams.active));
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
    /**
     * @param {string} customerId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Device>}
     */
    async getCustomerDevices(customerId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/devices{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.type !== undefined)
                params.set('type', String(queryParams.type));
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
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.entityGroupId - Query parameter
     * @param {string} queryParams.entityGroupIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Device>}
     */
    async saveDeviceWithCredentialsWithData(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/device-with-credentials{?entityGroupId,entityGroupIds}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.entityGroupId !== undefined)
                params.set('entityGroupId', String(queryParams.entityGroupId));
            if (queryParams.entityGroupIds !== undefined)
                params.set('entityGroupIds', String(queryParams.entityGroupIds));
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
     * @returns {Promise<schemas.BulkImportResult_Of_Device>}
     */
    async processDevicesBulkImportWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/device/bulk_import`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeviceCredentials>}
     */
    async updateDeviceCredentialsWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/device/credentials`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} deviceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeviceInfo>}
     */
    async getDeviceInfoById(deviceId, options = {}) {
        const url = `${this.baseUrl}/api/device/info/${encodeURIComponent(deviceId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.EntitySubtype>>}
     */
    async getDeviceTypes(options = {}) {
        const url = `${this.baseUrl}/api/device/types`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} deviceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Device>}
     */
    async getDeviceById(deviceId, options = {}) {
        const url = `${this.baseUrl}/api/device/${encodeURIComponent(deviceId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} deviceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async deleteDevice(deviceId, options = {}) {
        const url = `${this.baseUrl}/api/device/${encodeURIComponent(deviceId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} deviceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeviceCredentials>}
     */
    async getDeviceCredentialsByDeviceId(deviceId, options = {}) {
        const url = `${this.baseUrl}/api/device/${encodeURIComponent(deviceId)}/credentials`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {boolean} queryParams.includeCustomers - Query parameter
     * @param {string} queryParams.deviceProfileId - Query parameter
     * @param {boolean} queryParams.active - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_DeviceInfo>}
     */
    async getAllDeviceInfos(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/deviceInfos/all{?active,deviceProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.includeCustomers !== undefined)
                params.set('includeCustomers', String(queryParams.includeCustomers));
            if (queryParams.deviceProfileId !== undefined)
                params.set('deviceProfileId', String(queryParams.deviceProfileId));
            if (queryParams.active !== undefined)
                params.set('active', String(queryParams.active));
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
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.Device>>}
     */
    async findByQueryUsingPOST_1WithData(data, options = {}) {
        const url = `${this.baseUrl}/api/devices`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} otaPackageType - Path parameter
     * @param {string} deviceProfileId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<number>}
     */
    async countByDeviceProfileAndEmptyOtaPackage(otaPackageType, deviceProfileId, options = {}) {
        const url = `${this.baseUrl}/api/devices/count/${encodeURIComponent(otaPackageType)}/${encodeURIComponent(deviceProfileId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} otaPackageType - Path parameter
     * @param {string} otaPackageId - Path parameter
     * @param {string} entityGroupId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<number>}
     */
    async countByDeviceGroupAndEmptyOtaPackage(otaPackageType, otaPackageId, entityGroupId, options = {}) {
        const url = `${this.baseUrl}/api/devices/count/${encodeURIComponent(otaPackageType)}/${encodeURIComponent(otaPackageId)}/${encodeURIComponent(entityGroupId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.deviceIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.Device>>}
     */
    async getDevicesByIds(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/devices{?deviceIds}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.deviceIds !== undefined)
                params.set('deviceIds', String(queryParams.deviceIds));
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
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.accessToken - Query parameter
     * @param {string} queryParams.entityGroupId - Query parameter
     * @param {string} queryParams.entityGroupIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Device>}
     */
    async saveDeviceWithData(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/device{?accessToken,entityGroupId,entityGroupIds}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.accessToken !== undefined)
                params.set('accessToken', String(queryParams.accessToken));
            if (queryParams.entityGroupId !== undefined)
                params.set('entityGroupId', String(queryParams.entityGroupId));
            if (queryParams.entityGroupIds !== undefined)
                params.set('entityGroupIds', String(queryParams.entityGroupIds));
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
     * @param {string} entityGroupId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Device>}
     */
    async getDevicesByEntityGroupId(entityGroupId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/devices{?page,pageSize,sortOrder,sortProperty,textSearch}`;
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
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.deviceName - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Device>}
     */
    async getTenantDevice(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenant/devices{?deviceName}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.deviceName !== undefined)
                params.set('deviceName', String(queryParams.deviceName));
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
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Device>}
     */
    async getTenantDevices(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenant/devices{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.type !== undefined)
                params.set('type', String(queryParams.type));
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
    /**
     * @param {string} tenantId - Path parameter
     * @param {string} deviceId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Device>}
     */
    async assignDeviceToTenant(tenantId, deviceId, options = {}) {
        const url = `${this.baseUrl}/api/tenant/${encodeURIComponent(tenantId)}/device/${encodeURIComponent(deviceId)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Device>}
     */
    async getUserDevices(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/user/devices{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.type !== undefined)
                params.set('type', String(queryParams.type));
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
exports.DeviceControllerClient = DeviceControllerClient;
