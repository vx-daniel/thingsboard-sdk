"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseVXOlympusClient = void 0;
const zod_1 = require("zod");
const LoginResponseSchema = zod_1.z.object({
    token: zod_1.z.string(),
    refreshToken: zod_1.z.string(),
});
/**
 * Base client class for VX Olympus API interactions.
 * Handles authentication, token refresh, and basic HTTP client setup.
 *
 * @example
 * ```typescript
 * const client = new BaseVXOlympusClient('http://localhost:8080');
 * await client.login('admin', 'password');
 * ```
 */
class BaseVXOlympusClient {
    constructor(baseUrl, token) {
        this.baseUrl = baseUrl;
        this.token = token;
    }
    /**
     * Makes an HTTP request to the API with authentication and error handling.
     *
     * @param url - The full URL to make the request to
     * @param options - Request configuration
     * @returns The response data
     * @internal
     */
    async makeRequest(url, options = {}) {
        const headers = {
            'Content-Type': 'application/json',
            ...(this.token ? { 'X-Authorization': `Bearer ${this.token}` } : {}),
            ...options.headers,
        };
        const response = await fetch(url, {
            ...options,
            headers,
        });
        // Handle 401 with token refresh
        if (response.status === 401 && this.refreshToken) {
            try {
                await this.refreshAuthToken();
                // Retry the request with the new token
                const retryResponse = await fetch(url, {
                    ...options,
                    headers: {
                        ...headers,
                        'X-Authorization': `Bearer ${this.token}`,
                    },
                });
                if (!retryResponse.ok) {
                    throw new Error(`HTTP error! status: ${retryResponse.status}`);
                }
                return retryResponse.json();
            }
            catch (refreshError) {
                throw new Error('Token refresh failed');
            }
        }
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // For 204 No Content responses, return null
        if (response.status === 204) {
            return null;
        }
        return response.json();
    }
    /**
     * Authenticates with the VX Olympus API using username and password.
     *
     * @param username - The user's username
     * @param password - The user's password
     * @throws {Error} If login fails due to invalid credentials or network issues
     */
    async login(username, password) {
        try {
            const response = await this.makeRequest(`${this.baseUrl}/api/auth/login`, {
                method: 'POST',
                body: JSON.stringify({ username, password }),
            });
            const loginResponse = LoginResponseSchema.parse(response);
            this.token = loginResponse.token;
            this.refreshToken = loginResponse.refreshToken;
        }
        catch (error) {
            if (error instanceof Error) {
                if (error.message.includes('401')) {
                    throw new Error('Invalid username or password');
                }
                throw new Error(`Login failed: ${error.message}`);
            }
            throw error;
        }
    }
    /**
     * Attempts to refresh the authentication token using the refresh token.
     * This is called automatically when a request fails with a 401 status.
     *
     * @returns The new token if successful
     * @throws {Error} If token refresh fails
     * @internal
     */
    async refreshAuthToken() {
        if (!this.refreshToken) {
            throw new Error('No refresh token available');
        }
        try {
            const response = await this.makeRequest(`${this.baseUrl}/api/auth/token`, {
                method: 'POST',
                body: JSON.stringify({ refreshToken: this.refreshToken }),
            });
            const loginResponse = LoginResponseSchema.parse(response);
            this.token = loginResponse.token;
            this.refreshToken = loginResponse.refreshToken;
            return this.token;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Token refresh failed: ${error.message}`);
            }
            throw error;
        }
    }
    /**
     * Gets the current authentication token.
     *
     * @returns The current token or undefined if not authenticated
     */
    getToken() {
        return this.token;
    }
    /**
     * Checks if the client is currently authenticated.
     *
     * @returns True if authenticated, false otherwise
     */
    isAuthenticated() {
        return !!this.token;
    }
    /**
     * Logs out the current user by clearing the authentication tokens.
     */
    logout() {
        this.token = undefined;
        this.refreshToken = undefined;
    }
}
exports.BaseVXOlympusClient = BaseVXOlympusClient;
