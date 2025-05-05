import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class QueueControllerClient extends BaseVXOlympusClient {
    getQueueByNameUsingGET(queueName: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        consumerPerPartition: boolean;
        packProcessingTimeout: number;
        partitions: number;
        pollInterval: number;
        topic: string;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        processingStrategy?: any;
        submitStrategy?: any;
    }>;
    getQueueByIdUsingGET(queueId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        consumerPerPartition: boolean;
        packProcessingTimeout: number;
        partitions: number;
        pollInterval: number;
        topic: string;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        processingStrategy?: any;
        submitStrategy?: any;
    }>;
    deleteQueueUsingDELETE(queueId: string, options?: RequestInit): Promise<any>;
    getTenantQueuesByServiceTypeUsingGET(serviceType: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    saveQueueUsingPOST(serviceType: string, data: schemas.Queue, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        consumerPerPartition: boolean;
        packProcessingTimeout: number;
        partitions: number;
        pollInterval: number;
        topic: string;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        processingStrategy?: any;
        submitStrategy?: any;
    }>;
}
