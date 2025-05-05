import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { z } from 'zod';

const LoginResponseSchema = z.object({
  token: z.string(),
  refreshToken: z.string().optional(),
});

type LoginResponse = z.infer<typeof LoginResponseSchema>;

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
export class BaseVXOlympusClient {
  protected client: AxiosInstance;
  protected token?: string;
  protected refreshToken?: string;

  /**
   * Creates a new instance of the BaseVXOlympusClient.
   * 
   * @param baseURL - The base URL of the VX Olympus API
   * @param token - Optional JWT token for authentication
   */
  constructor(protected baseURL: string, token?: string) {
    this.token = token;
    this.client = axios.create({
      baseURL,
      headers: token ? { 'X-Authorization': `Bearer ${token}` } : {}
    });

    // Add response interceptor to handle token expiration
    this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401 && this.refreshToken) {
          try {
            // Try to refresh the token
            const newToken = await this.refreshAuthToken();
            // Retry the original request with the new token
            const config = error.config;
            config.headers['X-Authorization'] = `Bearer ${newToken}`;
            return this.client.request(config);
          } catch (refreshError) {
            // If refresh fails, throw the original error
            throw error;
          }
        }
        throw error;
      }
    );
  }

  /**
   * Authenticates with the VX Olympus API using username and password.
   * 
   * @param username - The user's username
   * @param password - The user's password
   * @throws {Error} If login fails due to invalid credentials or network issues
   */
  async login(username: string, password: string): Promise<void> {
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
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          throw new Error('Invalid username or password');
        }
        throw new Error(`Login failed: ${error.response?.data?.message || error.message}`);
      }
      throw error;
    }
  }

  /**
   * Attempts to refresh the authentication token using the refresh token.
   * This is called automatically when a request fails with a 401 status.
   * 
   * @returns A new JWT token
   * @throws {Error} If token refresh fails
   * @internal
   */
  private async refreshAuthToken(): Promise<string> {
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
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Token refresh failed: ${error.response?.data?.message || error.message}`);
      }
      throw error;
    }
  }

  /**
   * Gets the current authentication token.
   * 
   * @returns The current JWT token or undefined if not authenticated
   */
  getToken(): string | undefined {
    return this.token;
  }

  /**
   * Checks if the client is currently authenticated.
   * 
   * @returns True if authenticated, false otherwise
   */
  isAuthenticated(): boolean {
    return !!this.token;
  }

  /**
   * Logs out the current user by clearing all authentication tokens.
   */
  logout(): void {
    this.token = undefined;
    this.refreshToken = undefined;
    delete this.client.defaults.headers['X-Authorization'];
  }
}
