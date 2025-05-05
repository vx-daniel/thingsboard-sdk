"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageControllerClient = void 0;
const base_client_1 = require("../../base-client");
class ImageControllerClient extends base_client_1.BaseVXOlympusClient {
    async uploadImageUsingPOST(data, options = {}) {
        const url = `${this.baseUrl}/api/image`;
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async importImageUsingPUT(data, options = {}) {
        const url = `${this.baseUrl}/api/image/import`;
        const response = await this.makeRequest(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async downloadPublicImageUsingGET(publicResourceKey, options = {}) {
        const url = `${this.baseUrl}/api/images/public/${encodeURIComponent(publicResourceKey)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async downloadImageUsingGET(type, key, options = {}) {
        const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async updateImageUsingPUT(type, key, data, options = {}) {
        const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}`;
        const response = await this.makeRequest(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async exportImageUsingGET(type, key, options = {}) {
        const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}/export`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async getImageInfoUsingGET(type, key, options = {}) {
        const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}/info`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async updateImageInfoUsingPUT(type, key, data, options = {}) {
        const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}/info`;
        const response = await this.makeRequest(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    async downloadImagePreviewUsingGET(type, key, options = {}) {
        const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}/preview`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async updateImagePublicStatusUsingPUT(type, key, isPublic, options = {}) {
        const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}/public/${encodeURIComponent(isPublic)}`;
        const response = await this.makeRequest(url, {
            method: 'PUT',
            ...options,
        });
        return response;
    }
    async deleteImageUsingDELETE(type, key, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}{?force}`;
        const response = await this.makeRequest(url, {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    async getImagesUsingGET(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/images{?includeSystemImages,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async downloadLoginFaviconUsingGET(type, key, options = {}) {
        const url = `${this.baseUrl}/api/noauth/whiteLabel/loginFavicon/${encodeURIComponent(type)}/${encodeURIComponent(key)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    async downloadLoginLogoUsingGET(type, key, options = {}) {
        const url = `${this.baseUrl}/api/noauth/whiteLabel/loginLogo/${encodeURIComponent(type)}/${encodeURIComponent(key)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.ImageControllerClient = ImageControllerClient;
