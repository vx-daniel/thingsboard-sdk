import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class CustomTranslationControllerClient extends BaseVXOlympusClient {
    getCurrentCustomTranslationUsingGET(options?: RequestInit): Promise<{
        translationMap: Record<string, string>;
    }>;
    getCustomTranslationUsingGET(options?: RequestInit): Promise<{
        translationMap: Record<string, string>;
    }>;
    saveCustomTranslationUsingPOST(data: schemas.CustomTranslation, options?: RequestInit): Promise<{
        translationMap: Record<string, string>;
    }>;
}
