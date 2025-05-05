import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class UserPermissionsControllerClient extends BaseVXOlympusClient {
    getAllowedPermissions(options?: RequestInit): Promise<schemas.AllowedPermissionsInfo>;
}
