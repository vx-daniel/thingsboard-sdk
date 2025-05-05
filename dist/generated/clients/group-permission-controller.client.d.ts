import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';
export declare class GroupPermissionControllerClient extends BaseVXOlympusClient {
    getEntityGroupPermissionsUsingGET(entityGroupId: string, options?: RequestInit): Promise<any>;
    saveGroupPermissionUsingPOST(data: schemas.GroupPermission, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        public: boolean;
        entityGroupType: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RULE_CHAIN" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE" | "ENTITY_GROUP" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "RPC" | "RULE_NODE";
        id?: any;
        tenantId?: any;
        entityGroupId?: any;
        userGroupId?: any;
        roleId?: any;
    }>;
    getGroupPermissionInfoByIdUsingGET(groupPermissionId: string, isUserGroup: boolean, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        readOnly: boolean;
        public: boolean;
        entityGroupType: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RULE_CHAIN" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE" | "ENTITY_GROUP" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "RPC" | "RULE_NODE";
        entityGroupName: string;
        entityGroupOwnerName: string;
        userGroupName: string;
        userGroupOwnerName: string;
        id?: any;
        tenantId?: any;
        entityGroupId?: any;
        userGroupId?: any;
        roleId?: any;
        role?: any;
        entityGroupOwnerId?: any;
        userGroupOwnerId?: any;
    }>;
    getGroupPermissionByIdUsingGET(groupPermissionId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        public: boolean;
        entityGroupType: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RULE_CHAIN" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE" | "ENTITY_GROUP" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "RPC" | "RULE_NODE";
        id?: any;
        tenantId?: any;
        entityGroupId?: any;
        userGroupId?: any;
        roleId?: any;
    }>;
    deleteGroupPermissionUsingDELETE(groupPermissionId: string, options?: RequestInit): Promise<any>;
    loadUserGroupPermissionInfosUsingPOST(data: Array<schemas.GroupPermission>, options?: RequestInit): Promise<any>;
    getUserGroupPermissionsUsingGET(userGroupId: string, options?: RequestInit): Promise<any>;
}
