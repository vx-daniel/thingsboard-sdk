import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class UserControllerClient extends BaseVXOlympusClient {
    getAllCustomerUsers(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'email' | 'firstName' | 'lastName';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_User>;
    /**
     * @param {string} customerId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {boolean} queryParams.includeCustomers - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_UserInfo>}
     */
    getCustomerUserInfos(customerId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        includeCustomers?: boolean;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'email' | 'firstName' | 'lastName';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_UserInfo>;
    /**
     * @param {string} customerId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_User>}
     */
    getCustomerUsers(customerId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'email' | 'firstName' | 'lastName';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_User>;
    /**
     * @param {string} entityGroupId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_User>}
     */
    getUsersByEntityGroupId(entityGroupId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'email' | 'firstName' | 'lastName';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_User>;
    /**
     * @param {string} tenantId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_User>}
     */
    getTenantAdmins(tenantId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'email' | 'firstName' | 'lastName';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_User>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.UserDashboardsInfo>}
     */
    getUserDashboardsInfo(options?: RequestInit): Promise<schemas.UserDashboardsInfo>;
    /**
     * @param {string} dashboardId - Path parameter
     * @param {string} action - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.UserDashboardsInfo>}
     */
    reportUserDashboardAction(dashboardId: string, action: string, options?: RequestInit): Promise<schemas.UserDashboardsInfo>;
    /**
     * @param {string} userId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.UserInfo>}
     */
    getUserInfoById(userId: string, options?: RequestInit): Promise<schemas.UserInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.email - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    sendActivationEmail(queryParams?: {
        email?: string;
    }, options?: RequestInit): Promise<void>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    getUserSettings(options?: RequestInit): Promise<schemas.JsonNode>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    putUserSettingsWithData(data: schemas.JsonNode, options?: RequestInit): Promise<void>;
    /**
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    saveUserSettingsWithData(data: schemas.JsonNode, options?: RequestInit): Promise<schemas.JsonNode>;
    /**
     * @param {string} paths - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteUserSettingsUsingDELETE_1(paths: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} type - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    getUserSettingsUsingGET_1(type: string, options?: RequestInit): Promise<schemas.JsonNode>;
    /**
     * @param {string} type - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    putUserSettingsUsingPUT_1WithData(type: string, data: schemas.JsonNode, options?: RequestInit): Promise<void>;
    /**
     * @param {string} paths - Path parameter
     * @param {string} type - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteUserSettings(paths: string, type: string, options?: RequestInit): Promise<void>;
    /**
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<boolean>}
     */
    isUserTokenAccessEnabled(options?: RequestInit): Promise<boolean>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_User>}
     */
    getUserUsers(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'email' | 'firstName' | 'lastName';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_User>;
    /**
     * @param {string} userId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.User>}
     */
    getUserById(userId: string, options?: RequestInit): Promise<schemas.User>;
    /**
     * @param {string} userId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteUser(userId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} userId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    getActivationLink(userId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {string} userId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JWT_Pair>}
     */
    getUserToken(userId: string, options?: RequestInit): Promise<schemas.JWT_Pair>;
    /**
     * @param {string} userId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.userCredentialsEnabled - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    setUserCredentialsEnabled(userId: string, queryParams?: {
        userCredentialsEnabled?: boolean;
    }, options?: RequestInit): Promise<void>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {boolean} queryParams.includeCustomers - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_UserInfo>}
     */
    getAllUserInfos(queryParams?: {
        pageSize?: number;
        page?: number;
        includeCustomers?: boolean;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'email' | 'firstName' | 'lastName';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_UserInfo>;
    /**
     * @param {string} alarmId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_UserEmailInfo>}
     */
    getUsersForAssign(alarmId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'email' | 'firstName' | 'lastName';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_UserEmailInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_UserEmailInfo>}
     */
    findUsersByQuery(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'createdTime' | 'email' | 'firstName' | 'lastName';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_UserEmailInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.userIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.User>>}
     */
    getUsersByIds(queryParams?: {
        userIds?: string;
    }, options?: RequestInit): Promise<Array<schemas.User>>;
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {boolean} queryParams.sendActivationMail - Query parameter
     * @param {string} queryParams.entityGroupId - Query parameter
     * @param {string} queryParams.entityGroupIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.User>}
     */
    saveUserWithData(data: schemas.User, queryParams?: {
        sendActivationMail?: boolean;
        entityGroupId?: string;
        entityGroupIds?: string;
    }, options?: RequestInit): Promise<schemas.User>;
}
