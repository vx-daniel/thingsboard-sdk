import { BaseVXOlympusClient } from '../../base-client';
export declare class SolutionControllerClient extends BaseVXOlympusClient {
    getSolutionTemplateDetailsUsingGET(solutionTemplateId: string, options?: RequestInit): Promise<{
        id: string;
        description: string;
        title: string;
        highlights: string;
        imageUrls: string[];
        installed: boolean;
        level: "MAKER" | "PROTOTYPE" | "STARTUP";
        installTimeoutMs: number;
        tenantTelemetryKeys: string[];
        tenantAttributeKeys: string[];
    }>;
    getSolutionTemplateInfosUsingGET(options?: RequestInit): Promise<any>;
    getSolutionTemplateInstructionsUsingGET(solutionTemplateId: string, options?: RequestInit): Promise<{
        details: string;
        mainDashboardPublic: boolean;
        dashboardId?: any;
        dashboardGroupId?: any;
        publicId?: any;
    }>;
    uninstallSolutionTemplateUsingDELETE(solutionTemplateId: string, options?: RequestInit): Promise<any>;
    installSolutionTemplateUsingPOST(solutionTemplateId: string, options?: RequestInit): Promise<{
        details: string;
        mainDashboardPublic: boolean;
        success: boolean;
        dashboardId?: any;
        dashboardGroupId?: any;
        publicId?: any;
    }>;
}
