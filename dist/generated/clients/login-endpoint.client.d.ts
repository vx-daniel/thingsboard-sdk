import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class LoginEndpointClient extends BaseVXOlympusClient {
    loginPost(data: schemas.LoginRequest, options?: RequestInit): Promise<{
        token: string;
        refreshToken: string;
    }>;
}
