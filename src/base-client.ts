import { z } from 'zod';

const LoginResponseSchema = z.object({
  token: z.string(),
  refreshToken: z.string().optional(),
});

type LoginResponse = z.infer<typeof LoginResponseSchema>;

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
export class BaseVXOlympusClient {
  protected token?: string;
  protected refreshToken?: string;
  protected headers: Record<string, string> = {};

  /**
   * Creates a new instance of the BaseVXOlympusClient.
   * 
   * @param baseURL - The base URL of the VX Olympus API
   * @param token - Optional JWT token for authentication
   */
  constructor(protected baseURL: string, token?: string) {
    this.token = token;
    if (token) {
      this.headers['X-Authorization'] = `Bearer ${token}`;
    }
  }

  /**
   * Makes an HTTP request to the API with automatic token refresh on 401 errors.
   * 
   * @param path - The API endpoint path
   * @param config - Request configuration
   * @returns The response data
   * @internal
   */
  protected async request<T>(path: string, config: RequestConfig = {}): Promise<T> {
    const url = new URL(path, this.baseURL);
    const requestConfig: RequestInit = {
      method: config.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...config.headers,
      },
    };

    if (config.body) {
      requestConfig.body = JSON.stringify(config.body);
    }

    try {
      const response = await fetch(url.toString(), requestConfig);

      // Handle 401 with token refresh
      if (response.status === 401 && this.refreshToken) {
        try {
          await this.refreshAuthToken();
          // Retry the request with the new token
          requestConfig.headers = {
            ...requestConfig.headers,
            'X-Authorization': `Bearer ${this.token}`,
          };
          const retryResponse = await fetch(url.toString(), requestConfig);
          if (!retryResponse.ok) {
            throw new Error(`HTTP error! status: ${retryResponse.status}`);
          }
          return retryResponse.json();
        } catch (refreshError) {
          throw new Error('Token refresh failed');
        }
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Request failed: ${error.message}`);
      }
      throw error;
    }
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
      const response = await this.request<LoginResponse>('/api/auth/login', {
        method: 'POST',
        body: { username, password },
      });

      const loginResponse = LoginResponseSchema.parse(response);
      this.token = loginResponse.token;
      this.refreshToken = loginResponse.refreshToken;

      // Update headers with the new token
      this.headers['X-Authorization'] = `Bearer ${this.token}`;
    } catch (error) {
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
   * @returns A new JWT token
   * @throws {Error} If token refresh fails
   * @internal
   */
  private async refreshAuthToken(): Promise<string> {
    if (!this.refreshToken) {
      throw new Error('No refresh token available');
    }

    try {
      const response = await this.request<LoginResponse>('/api/auth/token', {
        method: 'POST',
        body: { refreshToken: this.refreshToken },
      });

      const loginResponse = LoginResponseSchema.parse(response);
      this.token = loginResponse.token;
      this.refreshToken = loginResponse.refreshToken;

      // Update headers with the new token
      this.headers['X-Authorization'] = `Bearer ${this.token}`;

      return this.token;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Token refresh failed: ${error.message}`);
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
    delete this.headers['X-Authorization'];
  }
}
