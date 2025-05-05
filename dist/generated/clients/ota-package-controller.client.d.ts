import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class OtaPackageControllerClient extends BaseVXOlympusClient {
    saveOtaPackageInfoUsingPOST(data: schemas.SaveOtaPackageInfoRequest, options?: RequestInit): Promise<{
        type: "FIRMWARE" | "SOFTWARE";
        createdTime: number;
        contentType: string;
        url: string;
        title: string;
        fileName: string;
        version: string;
        tag: string;
        hasData: boolean;
        checksumAlgorithm: "CRC32" | "MD5" | "MURMUR3_128" | "MURMUR3_32" | "SHA256" | "SHA384" | "SHA512";
        checksum: string;
        dataSize: number;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        deviceProfileId?: any;
    }>;
    getOtaPackageInfoByIdUsingGET(otaPackageId: string, options?: RequestInit): Promise<{
        type: "FIRMWARE" | "SOFTWARE";
        createdTime: number;
        contentType: string;
        url: string;
        title: string;
        fileName: string;
        version: string;
        tag: string;
        hasData: boolean;
        checksumAlgorithm: "CRC32" | "MD5" | "MURMUR3_128" | "MURMUR3_32" | "SHA256" | "SHA384" | "SHA512";
        checksum: string;
        dataSize: number;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        deviceProfileId?: any;
    }>;
    getOtaPackageByIdUsingGET(otaPackageId: string, options?: RequestInit): Promise<{
        type: "FIRMWARE" | "SOFTWARE";
        createdTime: number;
        contentType: string;
        url: string;
        title: string;
        fileName: string;
        version: string;
        tag: string;
        hasData: boolean;
        checksumAlgorithm: "CRC32" | "MD5" | "MURMUR3_128" | "MURMUR3_32" | "SHA256" | "SHA384" | "SHA512";
        checksum: string;
        dataSize: number;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        deviceProfileId?: any;
        data?: any;
    }>;
    saveOtaPackageDataUsingPOST(otaPackageId: string, options?: RequestInit): Promise<{
        type: "FIRMWARE" | "SOFTWARE";
        createdTime: number;
        contentType: string;
        url: string;
        title: string;
        fileName: string;
        version: string;
        tag: string;
        hasData: boolean;
        checksumAlgorithm: "CRC32" | "MD5" | "MURMUR3_128" | "MURMUR3_32" | "SHA256" | "SHA384" | "SHA512";
        checksum: string;
        dataSize: number;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        deviceProfileId?: any;
    }>;
    deleteOtaPackageUsingDELETE(otaPackageId: string, options?: RequestInit): Promise<any>;
    downloadOtaPackageUsingGET(otaPackageId: string, options?: RequestInit): Promise<{
        description: string;
        file: string;
        filename: string;
        open: boolean;
        readable: boolean;
        uri: string;
        url: string;
        inputStream?: any;
    }>;
    getGroupOtaPackagesUsingGET(groupId: string, type: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getOtaPackagesUsingGET_1(deviceProfileId: string, type: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getOtaPackagesUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
}
