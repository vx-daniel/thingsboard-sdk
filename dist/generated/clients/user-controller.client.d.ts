import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class UserControllerClient extends BaseVXOlympusClient {
    getAllCustomerUsersUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getCustomerUserInfosUsingGET(customerId: string, pageSize: number, page: number, includeCustomers: boolean, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getCustomerUsersUsingGET(customerId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getUsersByEntityGroupIdUsingGET(entityGroupId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getTenantAdminsUsingGET(tenantId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getUserDashboardsInfoUsingGET(options?: RequestInit): Promise<{
        starred: any[];
        last: any[];
    }>;
    reportUserDashboardActionUsingGET(dashboardId: string, action: string, options?: RequestInit): Promise<{
        starred: any[];
        last: any[];
    }>;
    getUserInfoByIdUsingGET(userId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        email: string;
        firstName: string;
        lastName: string;
        ownerName: string;
        groups: any[];
        phone: string;
        authority: "CUSTOMER_USER" | "PRE_VERIFICATION_TOKEN" | "REFRESH_TOKEN" | "SYS_ADMIN" | "TENANT_ADMIN";
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    sendActivationEmailUsingPOST(email: string, options?: RequestInit): Promise<any>;
    getUserSettingsUsingGET(options?: RequestInit): Promise<{}>;
    putUserSettingsUsingPUT(data: schemas.JsonNode, options?: RequestInit): Promise<any>;
    saveUserSettingsUsingPOST(data: schemas.JsonNode, options?: RequestInit): Promise<{}>;
    deleteUserSettingsUsingDELETE_1(paths: string, options?: RequestInit): Promise<any>;
    getUserSettingsUsingGET_1(type: string, options?: RequestInit): Promise<{}>;
    putUserSettingsUsingPUT_1(type: string, data: schemas.JsonNode, options?: RequestInit): Promise<any>;
    deleteUserSettingsUsingDELETE(paths: string, type: string, options?: RequestInit): Promise<any>;
    isUserTokenAccessEnabledUsingGET(options?: RequestInit): Promise<any>;
    getUserUsersUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getUserByIdUsingGET(userId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        email: string;
        firstName: string;
        lastName: string;
        phone: string;
        authority: "CUSTOMER_USER" | "PRE_VERIFICATION_TOKEN" | "REFRESH_TOKEN" | "SYS_ADMIN" | "TENANT_ADMIN";
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    deleteUserUsingDELETE(userId: string, options?: RequestInit): Promise<any>;
    getActivationLinkUsingGET(userId: string, options?: RequestInit): Promise<any>;
    getUserTokenUsingGET(userId: string, options?: RequestInit): Promise<{
        token: string;
        refreshToken: string;
        scope: "CUSTOMER_USER" | "PRE_VERIFICATION_TOKEN" | "REFRESH_TOKEN" | "SYS_ADMIN" | "TENANT_ADMIN";
    }>;
    setUserCredentialsEnabledUsingPOST(userId: string, userCredentialsEnabled: boolean, options?: RequestInit): Promise<any>;
    getAllUserInfosUsingGET(pageSize: number, page: number, includeCustomers: boolean, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getUsersForAssignUsingGET(alarmId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    findUsersByQueryUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getUsersByIdsUsingGET(userIds: string, options?: RequestInit): Promise<any>;
    saveUserUsingPOST(sendActivationMail: boolean, entityGroupId: string, entityGroupIds: string, data: schemas.User, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        email: string;
        firstName: string;
        lastName: string;
        phone: string;
        authority: "CUSTOMER_USER" | "PRE_VERIFICATION_TOKEN" | "REFRESH_TOKEN" | "SYS_ADMIN" | "TENANT_ADMIN";
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
}
