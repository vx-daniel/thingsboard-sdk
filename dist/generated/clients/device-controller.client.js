"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceControllerClient = void 0;
const base_client_1 = require("../../base-client");
class DeviceControllerClient extends base_client_1.BaseVXOlympusClient {
    async reClaimDeviceUsingDELETE(deviceName, options = {}) {
        const url = `${this.baseUrl}/api/customer/device/${encodeURIComponent(deviceName)}/claim`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async claimDeviceUsingPOST(deviceName, data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer/device/${encodeURIComponent(deviceName)}/claim{?subCustomerId}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getCustomerDeviceInfosUsingGET(customerId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/deviceInfos{?active,deviceProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getCustomerDevicesUsingGET(customerId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/customer/${encodeURIComponent(customerId)}/devices{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveDeviceWithCredentialsUsingPOST(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/device-with-credentials{?entityGroupId,entityGroupIds}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async processDevicesBulkImportUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/device/bulk_import`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async updateDeviceCredentialsUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/device/credentials`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getDeviceInfoByIdUsingGET(deviceId, options = {}) {
        const url = `${this.baseUrl}/api/device/info/${encodeURIComponent(deviceId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getDeviceTypesUsingGET(options = {}) {
        const url = `${this.baseUrl}/api/device/types`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getDeviceByIdUsingGET(deviceId, options = {}) {
        const url = `${this.baseUrl}/api/device/${encodeURIComponent(deviceId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async deleteDeviceUsingDELETE(deviceId, options = {}) {
        const url = `${this.baseUrl}/api/device/${encodeURIComponent(deviceId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async getDeviceCredentialsByDeviceIdUsingGET(deviceId, options = {}) {
        const url = `${this.baseUrl}/api/device/${encodeURIComponent(deviceId)}/credentials`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getAllDeviceInfosUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/deviceInfos/all{?active,deviceProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async findByQueryUsingPOST_1(data, options = {}) {
        const url = `${this.baseUrl}/api/devices`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async countByDeviceProfileAndEmptyOtaPackageUsingGET(otaPackageType, deviceProfileId, options = {}) {
        const url = `${this.baseUrl}/api/devices/count/${encodeURIComponent(otaPackageType)}/${encodeURIComponent(deviceProfileId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async countByDeviceGroupAndEmptyOtaPackageUsingGET(otaPackageType, otaPackageId, entityGroupId, options = {}) {
        const url = `${this.baseUrl}/api/devices/count/${encodeURIComponent(otaPackageType)}/${encodeURIComponent(otaPackageId)}/${encodeURIComponent(entityGroupId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getDevicesByIdsUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/devices{?deviceIds}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveDeviceUsingPOST(data, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/device{?accessToken,entityGroupId,entityGroupIds}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getDevicesByEntityGroupIdUsingGET(entityGroupId, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/entityGroup/${encodeURIComponent(entityGroupId)}/devices{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getTenantDeviceUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenant/devices{?deviceName}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getTenantDevicesUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/tenant/devices{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async assignDeviceToTenantUsingPOST(tenantId, deviceId, options = {}) {
        const url = `${this.baseUrl}/api/tenant/${encodeURIComponent(tenantId)}/device/${encodeURIComponent(deviceId)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            ...options,
        });
        return response;
    }
    async getUserDevicesUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/user/devices{?page,pageSize,sortOrder,sortProperty,textSearch,type}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.DeviceControllerClient = DeviceControllerClient;
