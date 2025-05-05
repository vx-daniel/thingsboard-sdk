import { BaseVXOlympusClient } from '../../base-client';
export declare class RuleEngineControllerClient extends BaseVXOlympusClient {
    handleRuleEngineRequestUsingPOST_3(data: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    handleRuleEngineRequestUsingPOST_2(entityType: string, entityId: string, data: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    handleRuleEngineRequestUsingPOST_1(entityType: string, entityId: string, queueName: string, timeout: number, data: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    handleRuleEngineRequestUsingPOST(entityType: string, entityId: string, timeout: number, data: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
}
