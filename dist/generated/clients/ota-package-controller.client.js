"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtaPackageControllerClient = void 0;
const base_client_1 = require("../../base-client");
class OtaPackageControllerClient extends base_client_1.BaseVXOlympusClient {
    async saveOtaPackageInfoUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/otaPackage`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async getOtaPackageInfoByIdUsingGET(otaPackageId, options = {}) {
        const url = `${this.baseUrl}/api/otaPackage/info/${encodeURIComponent(otaPackageId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getOtaPackageByIdUsingGET(otaPackageId, options = {}) {
        const url = `${this.baseUrl}/api/otaPackage/${encodeURIComponent(otaPackageId)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async saveOtaPackageDataUsingPOST(otaPackageId, data, options = {}) {
        const url = `${this.baseUrl}/api/otaPackage/${encodeURIComponent(otaPackageId)}`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async deleteOtaPackageUsingDELETE(otaPackageId, options = {}) {
        const url = `${this.baseUrl}/api/otaPackage/${encodeURIComponent(otaPackageId)}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async downloadOtaPackageUsingGET(otaPackageId, options = {}) {
        const url = `${this.baseUrl}/api/otaPackage/${encodeURIComponent(otaPackageId)}/download`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getGroupOtaPackagesUsingGET(groupId, type, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/otaPackages/group/${encodeURIComponent(groupId)}/${encodeURIComponent(type)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getOtaPackagesUsingGET_1(deviceProfileId, type, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/otaPackages/${encodeURIComponent(deviceProfileId)}/${encodeURIComponent(type)}{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getOtaPackagesUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/otaPackages{?page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.OtaPackageControllerClient = OtaPackageControllerClient;
