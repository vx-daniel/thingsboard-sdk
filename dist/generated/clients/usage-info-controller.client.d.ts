import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class UsageInfoControllerClient extends BaseVXOlympusClient {
    getTenantUsageInfo(options?: RequestInit): Promise<schemas.UsageInfo>;
}
