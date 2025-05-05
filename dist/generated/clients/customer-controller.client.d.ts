import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class CustomerControllerClient extends BaseVXOlympusClient {
    getCustomerInfoById(customerId: string, options?: RequestInit): Promise<schemas.CustomerInfo>;
    /**
     * @param {string} customerId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Customer>}
     */
    getCustomerById(customerId: string, options?: RequestInit): Promise<schemas.Customer>;
    /**
     * @param {string} customerId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    deleteCustomer(customerId: string, options?: RequestInit): Promise<void>;
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
     * @returns {Promise<schemas.PageData_Of_CustomerInfo>}
     */
    getCustomerCustomerInfos(customerId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        includeCustomers?: boolean;
        textSearch?: string;
        sortProperty?: 'city' | 'country' | 'createdTime' | 'email' | 'title';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_CustomerInfo>;
    /**
     * @param {string} customerId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.JsonNode>}
     */
    getShortCustomerInfoById(customerId: string, options?: RequestInit): Promise<schemas.JsonNode>;
    /**
     * @param {string} customerId - Path parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    getCustomerTitleById(customerId: string, options?: RequestInit): Promise<void>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {boolean} queryParams.includeCustomers - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_CustomerInfo>}
     */
    getAllCustomerInfos(queryParams?: {
        pageSize?: number;
        page?: number;
        includeCustomers?: boolean;
        textSearch?: string;
        sortProperty?: 'city' | 'country' | 'createdTime' | 'email' | 'title';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_CustomerInfo>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.customerIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<Array<schemas.Customer>>}
     */
    getCustomersByIds(queryParams?: {
        customerIds?: string;
    }, options?: RequestInit): Promise<Array<schemas.Customer>>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Customer>}
     */
    getCustomers(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'city' | 'country' | 'createdTime' | 'email' | 'title';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_Customer>;
    /**
     * @param {object} data - Request body
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.entityGroupId - Query parameter
     * @param {string} queryParams.entityGroupIds - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Customer>}
     */
    saveCustomerWithData(data: schemas.Customer, queryParams?: {
        entityGroupId?: string;
        entityGroupIds?: string;
    }, options?: RequestInit): Promise<schemas.Customer>;
    /**
     * @param {string} entityGroupId - Path parameter
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Customer>}
     */
    getCustomersByEntityGroupId(entityGroupId: string, queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'city' | 'country' | 'createdTime' | 'email' | 'title';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_Customer>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {string} queryParams.customerTitle - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.Customer>}
     */
    getTenantCustomer(queryParams?: {
        customerTitle?: string;
    }, options?: RequestInit): Promise<schemas.Customer>;
    /**
     * @param {object} queryParams - Query parameters
     * @param {integer} queryParams.pageSize - Query parameter
     * @param {integer} queryParams.page - Query parameter
     * @param {string} queryParams.textSearch - Query parameter
     * @param {string} queryParams.sortProperty - Query parameter
     * @param {string} queryParams.sortOrder - Query parameter
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.PageData_Of_Customer>}
     */
    getUserCustomers(queryParams?: {
        pageSize?: number;
        page?: number;
        textSearch?: string;
        sortProperty?: 'city' | 'country' | 'createdTime' | 'email' | 'title';
        sortOrder?: 'ASC' | 'DESC';
    }, options?: RequestInit): Promise<schemas.PageData_Of_Customer>;
}
