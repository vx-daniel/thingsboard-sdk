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
export declare class BaseVXOlympusClient {
    protected readonly baseUrl: string;
    protected token?: string;
    protected refreshToken?: string;
    constructor(baseUrl: string);
    /**
     * Makes an HTTP request to the API with authentication and error handling.
     *
     * @param url - The full URL to make the request to
     * @param options - Request configuration
     * @returns The response data
     * @internal
     */
    protected makeRequest<T>(url: string, options?: RequestInit): Promise<T>;
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
     * @returns The new token if successful
     * @throws {Error} If token refresh fails
     * @internal
     */
    protected refreshAuthToken(): Promise<string>;
    /**
     * Gets the current authentication token.
     *
     * @returns The current token or undefined if not authenticated
     */
    getToken(): string | undefined;
    /**
     * Checks if the client is currently authenticated.
     *
     * @returns True if authenticated, false otherwise
     */
    isAuthenticated(): boolean;
    /**
     * Logs out the current user by clearing the authentication tokens.
     */
    logout(): void;
}
