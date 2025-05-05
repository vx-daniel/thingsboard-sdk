import { BaseVXOlympusClient } from '../../base-client';
export declare class GroupPermissionControllerClient extends BaseVXOlympusClient {
    getEntityGroupPermissionsUsingGET(entityGroupId: string, options?: RequestInit): Promise<unknown>;
    saveGroupPermissionUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getGroupPermissionInfoByIdUsingGET(groupPermissionId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getGroupPermissionByIdUsingGET(groupPermissionId: string, options?: RequestInit): Promise<unknown>;
    deleteGroupPermissionUsingDELETE(groupPermissionId: string, options?: RequestInit): Promise<unknown>;
    loadUserGroupPermissionInfosUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getUserGroupPermissionsUsingGET(userGroupId: string, options?: RequestInit): Promise<unknown>;
}
