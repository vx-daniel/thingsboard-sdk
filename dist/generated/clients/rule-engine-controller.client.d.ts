import { BaseVXOlympusClient } from '../../base-client';
export declare class RuleEngineControllerClient extends BaseVXOlympusClient {
    handleRuleEngineRequestUsingPOST_3(data: any, options?: RequestInit): Promise<unknown>;
    handleRuleEngineRequestUsingPOST_2(entityType: string, entityId: string, data: any, options?: RequestInit): Promise<unknown>;
    handleRuleEngineRequestUsingPOST_1(entityType: string, entityId: string, queueName: string, timeout: string, data: any, options?: RequestInit): Promise<unknown>;
    handleRuleEngineRequestUsingPOST(entityType: string, entityId: string, timeout: string, data: any, options?: RequestInit): Promise<unknown>;
}
