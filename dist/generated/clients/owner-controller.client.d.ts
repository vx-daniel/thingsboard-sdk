import { BaseVXOlympusClient } from '../../base-client';
export declare class OwnerControllerClient extends BaseVXOlympusClient {
    changeOwnerToCustomerUsingPOST(ownerId: string, entityType: string, entityId: string, data: Array<string>, options?: RequestInit): Promise<any>;
    changeOwnerToTenantUsingPOST(ownerId: string, entityType: string, entityId: string, data: Array<string>, options?: RequestInit): Promise<any>;
}
