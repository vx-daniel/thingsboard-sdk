"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageControllerClient = void 0;
const base_client_1 = require("../../base-client");
class ImageControllerClient extends base_client_1.BaseVXOlympusClient {
    async uploadImageWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/image`;
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
     * @returns {Promise<schemas.TbResourceInfo>}
     */
    async importImageWithData(data, options = {}) {
        const url = `${this.baseUrl}/api/image/import`;
        const response = await this.makeRequest(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} publicResourceKey - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async downloadPublicImage(publicResourceKey, options = {}) {
        const url = `${this.baseUrl}/api/images/public/${encodeURIComponent(publicResourceKey)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} type - Path parameter
     * @param {string} key - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async downloadImage(type, key, options = {}) {
        const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} type - Path parameter
     * @param {string} key - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.TbResourceInfo>}
     */
    async updateImageWithData(type, key, data, options = {}) {
        const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}`;
        const response = await this.makeRequest(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} type - Path parameter
     * @param {string} key - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.ImageExportData>}
     */
    async exportImage(type, key, options = {}) {
        const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}/export`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} type - Path parameter
     * @param {string} key - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.TbResourceInfo>}
     */
    async getImageInfo(type, key, options = {}) {
        const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}/info`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} type - Path parameter
     * @param {string} key - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.TbResourceInfo>}
     */
    async updateImageInfoWithData(type, key, data, options = {}) {
        const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}/info`;
        const response = await this.makeRequest(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            ...options,
        });
        return response;
    }
    /**
     * @param {string} type - Path parameter
     * @param {string} key - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async downloadImagePreview(type, key, options = {}) {
        const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}/preview`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} type - Path parameter
     * @param {string} key - Path parameter
     * @param {string} isPublic - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.TbResourceInfo>}
     */
    async updateImagePublicStatus(type, key, isPublic, options = {}) {
        const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}/public/${encodeURIComponent(isPublic)}`;
        const response = await this.makeRequest(url, {
            method: 'PUT',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} type - Path parameter
     * @param {string} key - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.force - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.TbImageDeleteResult>}
     */
    async deleteImage(type, key, queryParams, options = {}) {
        const url = `${this.baseUrl}/api/images/${encodeURIComponent(type)}/${encodeURIComponent(key)}{?force}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.force !== undefined)
                params.set('force', String(queryParams.force));
        }
        const queryString = params.toString();
        const response = await this.makeRequest(url + (queryString ? `?${queryString}` : ''), {
            method: 'DELETE',
            ...options,
        });
        return response;
    }
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {boolean} queryParams.includeSystemImages - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_TbResourceInfo>}
     */
    async getImages(queryParams, options = {}) {
        const url = `${this.baseUrl}/api/images{?includeSystemImages,page,pageSize,sortOrder,sortProperty,textSearch}`;
        const params = new URLSearchParams();
        if (queryParams) {
            if (queryParams.pageSize !== undefined)
                params.set('pageSize', String(queryParams.pageSize));
            if (queryParams.page !== undefined)
                params.set('page', String(queryParams.page));
            if (queryParams.includeSystemImages !== undefined)
                params.set('includeSystemImages', String(queryParams.includeSystemImages));
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
     * @param {string} type - Path parameter
     * @param {string} key - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async downloadLoginFavicon(type, key, options = {}) {
        const url = `${this.baseUrl}/api/noauth/whiteLabel/loginFavicon/${encodeURIComponent(type)}/${encodeURIComponent(key)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
    /**
     * @param {string} type - Path parameter
     * @param {string} key - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    async downloadLoginLogo(type, key, options = {}) {
        const url = `${this.baseUrl}/api/noauth/whiteLabel/loginLogo/${encodeURIComponent(type)}/${encodeURIComponent(key)}`;
        const response = await this.makeRequest(url, {
            method: 'GET',
            ...options,
        });
        return response;
    }
}
exports.ImageControllerClient = ImageControllerClient;
