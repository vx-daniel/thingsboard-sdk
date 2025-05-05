import { BaseVXOlympusClient } from '../../base-client';
export declare class RoleControllerClient extends BaseVXOlympusClient {
    saveRoleUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getRoleByIdUsingGET(roleId: string, options?: RequestInit): Promise<unknown>;
    deleteRoleUsingDELETE(roleId: string, options?: RequestInit): Promise<unknown>;
    getRolesUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    getRolesByIdsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
