import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class CustomMenuControllerClient extends BaseVXOlympusClient {
    getCurrentCustomMenuUsingGET(options?: RequestInit): Promise<{
        disabledMenuItems: string[];
        menuItems: any[];
    }>;
    getCustomMenuUsingGET(options?: RequestInit): Promise<{
        disabledMenuItems: string[];
        menuItems: any[];
    }>;
    saveCustomMenuUsingPOST(data: schemas.CustomMenu, options?: RequestInit): Promise<{
        disabledMenuItems: string[];
        menuItems: any[];
    }>;
}
