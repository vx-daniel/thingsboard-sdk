import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class RoleControllerClient extends BaseVXOlympusClient {
    saveRoleWithData(data: schemas.Role, options?: RequestInit): Promise<schemas.Role>;
    /**
     * @param {string} roleId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Role>}
     */
    getRoleById(roleId: string, options?: RequestInit): Promise<schemas.Role>;
    /**
     * @param {string} roleId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteRole(roleId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.type - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Role>}
     */
    getRoles(queryParams?: {
        pageSize?: number;
        page?: number;
        type?: 'GENERIC' | 'GROUP';
        textSearch?: string;
        sortProperty?: 'createdTime' | 'description' | 'name' | 'type';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_Role>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.roleIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.Role>>}
     */
    getRolesByIds(queryParams?: {
        roleIds?: string;
    }, options?: RequestInit): Promise<Array<schemas.Role>>;
}
