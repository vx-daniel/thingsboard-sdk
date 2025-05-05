import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class ReportControllerClient extends BaseVXOlympusClient {
    downloadTestReportUsingPOST(reportsServerEndpointUrl: string, data: schemas.ReportConfig, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    downloadDashboardReportUsingPOST(dashboardId: string, data: schemas.JsonNode, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
}
