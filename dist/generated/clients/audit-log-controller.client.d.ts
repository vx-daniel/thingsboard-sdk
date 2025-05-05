import { BaseVXOlympusClient } from '../../base-client';
export declare class AuditLogControllerClient extends BaseVXOlympusClient {
    getAuditLogsByCustomerIdUsingGET(customerId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getAuditLogsByEntityIdUsingGET(entityType: string, entityId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getAuditLogsByUserIdUsingGET(userId: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getAuditLogsUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
