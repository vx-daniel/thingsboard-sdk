import { BaseVXOlympusClient } from '../../base-client';
export declare class ReportControllerClient extends BaseVXOlympusClient {
    downloadTestReportUsingPOST(data: any, queryParams: any, options?: RequestInit): Promise<unknown>;
    downloadDashboardReportUsingPOST(dashboardId: string, data: any, options?: RequestInit): Promise<unknown>;
}
