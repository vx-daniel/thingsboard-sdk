import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class RoleControllerClient extends BaseVXOlympusClient {
    saveRoleUsingPOST(data: schemas.Role, options?: RequestInit): Promise<{
        type: "GENERIC" | "GROUP";
        createdTime: number;
        name: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        permissions?: any;
    }>;
    getRoleByIdUsingGET(roleId: string, options?: RequestInit): Promise<{
        type: "GENERIC" | "GROUP";
        createdTime: number;
        name: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        permissions?: any;
    }>;
    deleteRoleUsingDELETE(roleId: string, options?: RequestInit): Promise<any>;
    getRolesUsingGET(pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getRolesByIdsUsingGET(roleIds: string, options?: RequestInit): Promise<any>;
}
