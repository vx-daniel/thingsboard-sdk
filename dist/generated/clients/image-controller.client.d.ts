import { BaseVXOlympusClient } from '../../base-client';
export declare class ImageControllerClient extends BaseVXOlympusClient {
    uploadImageUsingPOST(data: any, options?: RequestInit): Promise<unknown>;
    importImageUsingPUT(data: any, options?: RequestInit): Promise<unknown>;
    downloadPublicImageUsingGET(publicResourceKey: string, options?: RequestInit): Promise<unknown>;
    downloadImageUsingGET(type: string, key: string, options?: RequestInit): Promise<unknown>;
    updateImageUsingPUT(type: string, key: string, data: any, options?: RequestInit): Promise<unknown>;
    exportImageUsingGET(type: string, key: string, options?: RequestInit): Promise<unknown>;
    getImageInfoUsingGET(type: string, key: string, options?: RequestInit): Promise<unknown>;
    updateImageInfoUsingPUT(type: string, key: string, data: any, options?: RequestInit): Promise<unknown>;
    downloadImagePreviewUsingGET(type: string, key: string, options?: RequestInit): Promise<unknown>;
    updateImagePublicStatusUsingPUT(type: string, key: string, isPublic: string, options?: RequestInit): Promise<unknown>;
    deleteImageUsingDELETE(type: string, key: string, queryParams: any, options?: RequestInit): Promise<unknown>;
    getImagesUsingGET(queryParams: any, options?: RequestInit): Promise<unknown>;
    downloadLoginFaviconUsingGET(type: string, key: string, options?: RequestInit): Promise<unknown>;
    downloadLoginLogoUsingGET(type: string, key: string, options?: RequestInit): Promise<unknown>;
}
