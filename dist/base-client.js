"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseVXOlympusClient = void 0;
const axios_1 = __importDefault(require("axios"));
const zod_1 = require("zod");
const LoginResponseSchema = zod_1.z.object({
    token: zod_1.z.string(),
    refreshToken: zod_1.z.string().optional(),
});
class BaseVXOlympusClient {
    constructor(baseURL, token) {
        this.baseURL = baseURL;
        this.token = token;
        this.client = axios_1.default.create({
            baseURL,
            headers: token ? { 'X-Authorization': `Bearer ${token}` } : {}
        });
        // Add response interceptor to handle token expiration
        this.client.interceptors.response.use((response) => response, async (error) => {
            if (error.response?.status === 401 && this.refreshToken) {
                try {
                    // Try to refresh the token
                    const newToken = await this.refreshAuthToken();
                    // Retry the original request with the new token
                    const config = error.config;
                    config.headers['X-Authorization'] = `Bearer ${newToken}`;
                    return this.client.request(config);
                }
                catch (refreshError) {
                    // If refresh fails, throw the original error
                    throw error;
                }
            }
            throw error;
        });
    }
    async login(username, password) {
        try {
            const response = await this.client.post('/api/auth/login', {
                username,
                password,
            });
            const loginResponse = LoginResponseSchema.parse(response.data);
            this.token = loginResponse.token;
            this.refreshToken = loginResponse.refreshToken;
            // Update client headers with the new token
            this.client.defaults.headers['X-Authorization'] = `Bearer ${this.token}`;
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                if (error.response?.status === 401) {
                    throw new Error('Invalid username or password');
                }
                throw new Error(`Login failed: ${error.response?.data?.message || error.message}`);
            }
            throw error;
        }
    }
    async refreshAuthToken() {
        if (!this.refreshToken) {
            throw new Error('No refresh token available');
        }
        try {
            const response = await this.client.post('/api/auth/token', {
                refreshToken: this.refreshToken,
            });
            const loginResponse = LoginResponseSchema.parse(response.data);
            this.token = loginResponse.token;
            this.refreshToken = loginResponse.refreshToken;
            // Update client headers with the new token
            this.client.defaults.headers['X-Authorization'] = `Bearer ${this.token}`;
            return this.token;
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                throw new Error(`Token refresh failed: ${error.response?.data?.message || error.message}`);
            }
            throw error;
        }
    }
    getToken() {
        return this.token;
    }
    isAuthenticated() {
        return !!this.token;
    }
    logout() {
        this.token = undefined;
        this.refreshToken = undefined;
        delete this.client.defaults.headers['X-Authorization'];
    }
}
exports.BaseVXOlympusClient = BaseVXOlympusClient;
