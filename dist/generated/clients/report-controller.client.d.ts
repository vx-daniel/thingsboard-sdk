import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class ReportControllerClient extends BaseVXOlympusClient {
    downloadTestReportWithData(data: schemas.ReportConfig, queryParams?: {
        reportsServerEndpointUrl?: string;
    }, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
    /**
     * @param {string} dashboardId - Path parameter
     * @param {object} data - Request body
     * @param {RequestInit} [options] - Fetch options
     * @returns {Promise<schemas.DeferredResult_Of_ResponseEntity>}
     */
    downloadDashboardReportWithData(dashboardId: string, data: schemas.JsonNode, options?: RequestInit): Promise<schemas.DeferredResult_Of_ResponseEntity>;
}
