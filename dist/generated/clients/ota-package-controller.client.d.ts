import { BaseVXOlympusClient } from '../../base-client';
export declare class OtaPackageControllerClient extends BaseVXOlympusClient {
    saveOtaPackageInfoUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    getOtaPackageInfoByIdUsingGET(otaPackageId: string, options?: RequestInit): Promise<unknown>;
    getOtaPackageByIdUsingGET(otaPackageId: string, options?: RequestInit): Promise<unknown>;
    saveOtaPackageDataUsingPOST(otaPackageId: string, data: any, options?: RequestInit): Promise<unknown>;
    deleteOtaPackageUsingDELETE(otaPackageId: string, options?: RequestInit): Promise<unknown>;
    downloadOtaPackageUsingGET(otaPackageId: string, options?: RequestInit): Promise<unknown>;
    getGroupOtaPackagesUsingGET(groupId: string, type: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getOtaPackagesUsingGET_1(deviceProfileId: string, type: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getOtaPackagesUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
}
