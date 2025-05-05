import { BaseVXOlympusClient } from '../../base-client';
export declare class OwnerControllerClient extends BaseVXOlympusClient {
    changeOwnerToCustomerWithData(ownerId: string, entityType: string, entityId: string, data: Array<string>, options?: RequestInit): Promise<void>;
    /**
     * @param {string} ownerId - Path parameter
     * @param {string} entityType - Path parameter
     * @param {string} entityId - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<void>}
     */
    changeOwnerToTenantWithData(ownerId: string, entityType: string, entityId: string, data: Array<string>, options?: RequestInit): Promise<void>;
}
