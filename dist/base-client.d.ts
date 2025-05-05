type RequestConfig = {
    method?: string;
    headers?: Record<string, string>;
    body?: any;
};
/**
 * Base client class for VX Olympus API interactions.
 * Handles authentication, token refresh, and basic HTTP client setup.
 *
 * @example
 * ```typescript
 * // Initialize with token
 * const client = new BaseVXOlympusClient('https://api.example.com', 'your-token');
 *
 * // Initialize and login with username/password
 * const client = new BaseVXOlympusClient('https://api.example.com');
 * await client.login('username', 'password');
 * ```
 */
export declare class BaseVXOlympusClient {
    protected baseURL: string;
    protected token?: string;
    protected refreshToken?: string;
    protected headers: Record<string, string>;
    /**
     * Creates a new instance of the BaseVXOlympusClient.
     *
     * @param baseURL - The base URL of the VX Olympus API
     * @param token - Optional JWT token for authentication
     */
    constructor(baseURL: string, token?: string);
    /**
     * Makes an HTTP request to the API with automatic token refresh on 401 errors.
     *
     * @param path - The API endpoint path
     * @param config - Request configuration
     * @returns The response data
     * @internal
     */
    protected request<T>(path: string, config?: RequestConfig): Promise<T>;
    /**
     * Authenticates with the VX Olympus API using username and password.
     *
     * @param username - The user's username
     * @param password - The user's password
     * @throws {Error} If login fails due to invalid credentials or network issues
     */
    login(username: string, password: string): Promise<void>;
    /**
     * Attempts to refresh the authentication token using the refresh token.
     * This is called automatically when a request fails with a 401 status.
     *
     * @returns A new JWT token
     * @throws {Error} If token refresh fails
     * @internal
     */
    private refreshAuthToken;
    /**
     * Gets the current authentication token.
     *
     * @returns The current JWT token or undefined if not authenticated
     */
    getToken(): string | undefined;
    /**
     * Checks if the client is currently authenticated.
     *
     * @returns True if authenticated, false otherwise
     */
    isAuthenticated(): boolean;
    /**
     * Logs out the current user by clearing all authentication tokens.
     */
    logout(): void;
}
export {};
