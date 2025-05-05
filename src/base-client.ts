import { z } from 'zod';

const LoginResponseSchema = z.object({
  token: z.string(),
  refreshToken: z.string(),
});

type LoginResponse = z.infer<typeof LoginResponseSchema>;

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
export class BaseVXOlympusClient {
  protected baseUrl: string;
  protected token?: string;
  protected refreshToken?: string;

  constructor(baseUrl: string, token?: string) {
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
  protected async makeRequest<T>(url: string, options: RequestInit = {}): Promise<T> {
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
      } catch (refreshError) {
        throw new Error('Token refresh failed');
      }
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // For 204 No Content responses, return null
    if (response.status === 204) {
      return null as T;
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
  async login(username: string, password: string): Promise<void> {
    try {
      const response = await this.makeRequest<LoginResponse>(`${this.baseUrl}/api/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      });

      const loginResponse = LoginResponseSchema.parse(response);
      this.token = loginResponse.token;
      this.refreshToken = loginResponse.refreshToken;
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
   * @returns The new token if successful
   * @throws {Error} If token refresh fails
   * @internal
   */
  protected async refreshAuthToken(): Promise<string> {
    if (!this.refreshToken) {
      throw new Error('No refresh token available');
    }

    try {
      const response = await this.makeRequest<LoginResponse>(`${this.baseUrl}/api/auth/token`, {
        method: 'POST',
        body: JSON.stringify({ refreshToken: this.refreshToken }),
      });

      const loginResponse = LoginResponseSchema.parse(response);
      this.token = loginResponse.token;
      this.refreshToken = loginResponse.refreshToken;

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
   * @returns The current token or undefined if not authenticated
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
   * Logs out the current user by clearing the authentication tokens.
   */
  logout(): void {
    this.token = undefined;
    this.refreshToken = undefined;
  }
}
