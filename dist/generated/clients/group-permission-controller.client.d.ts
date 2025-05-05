import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class GroupPermissionControllerClient extends BaseVXOlympusClient {
    getEntityGroupPermissions(entityGroupId: string, options?: RequestInit): Promise<Array<schemas.GroupPermissionInfo>>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.GroupPermission>}
     */
    saveGroupPermissionWithData(data: schemas.GroupPermission, options?: RequestInit): Promise<schemas.GroupPermission>;
    /**
     * @param {string} groupPermissionId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.isUserGroup - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.GroupPermissionInfo>}
     */
    getGroupPermissionInfoById(groupPermissionId: string, queryParams?: {
        isUserGroup?: boolean;
    }, options?: RequestInit): Promise<schemas.GroupPermissionInfo>;
    /**
     * @param {string} groupPermissionId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.GroupPermission>}
     */
    getGroupPermissionById(groupPermissionId: string, options?: RequestInit): Promise<schemas.GroupPermission>;
    /**
     * @param {string} groupPermissionId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteGroupPermission(groupPermissionId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.GroupPermissionInfo>>}
     */
    loadUserGroupPermissionInfosWithData(data: Array<schemas.GroupPermission>, options?: RequestInit): Promise<Array<schemas.GroupPermissionInfo>>;
    /**
     * @param {string} userGroupId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.GroupPermissionInfo>>}
     */
    getUserGroupPermissions(userGroupId: string, options?: RequestInit): Promise<Array<schemas.GroupPermissionInfo>>;
}
