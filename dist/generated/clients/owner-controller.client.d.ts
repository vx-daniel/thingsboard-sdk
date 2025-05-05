import { BaseVXOlympusClient } from '../../base-client';
export declare class OwnerControllerClient extends BaseVXOlympusClient {
    changeOwnerToCustomerUsingPOST(ownerId: string, entityType: string, entityId: string, data: any, options?: RequestInit): Promise<unknown>;
    changeOwnerToTenantUsingPOST(ownerId: string, entityType: string, entityId: string, data: any, options?: RequestInit): Promise<unknown>;
}
