import { BaseVXOlympusClient } from '../../base-client';
export declare class UsageInfoControllerClient extends BaseVXOlympusClient {
    getTenantUsageInfoUsingGET(options?: RequestInit): Promise<{
        maxAssets: number;
        maxCustomers: number;
        maxDashboards: number;
        maxDevices: number;
        maxEmails: number;
        maxSms: number;
        maxTbelExecutions: number;
        maxTransportMessages: number;
        maxUsers: number;
        smsEnabled: boolean;
        alarms: number;
        assets: number;
        customers: number;
        dashboards: number;
        devices: number;
        emails: number;
        jsExecutions: number;
        maxAlarms: number;
        maxJsExecutions: number;
        sms: number;
        tbelExecutions: number;
        transportMessages: number;
        users: number;
    }>;
}
