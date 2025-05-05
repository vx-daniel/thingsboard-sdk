import { AxiosInstance } from 'axios';
export declare class BaseVXOlympusClient {
    protected baseURL: string;
    protected client: AxiosInstance;
    protected token?: string;
    protected refreshToken?: string;
    constructor(baseURL: string, token?: string);
    login(username: string, password: string): Promise<void>;
    private refreshAuthToken;
    getToken(): string | undefined;
    isAuthenticated(): boolean;
    logout(): void;
}
