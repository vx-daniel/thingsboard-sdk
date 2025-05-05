/** AccountTwoFaSettings */
export interface AccountTwoFaSettings {
    configs?: Record<string, TwoFaAccountConfig>;
}
/** ActivateUserRequest */
export interface ActivateUserRequest {
    /**
     * The activate token to verify
     * @example "AAB254FF67D.."
     */
    activateToken?: string;
    /**
     * The new password to set
     * @example "secret"
     */
    password?: string;
}
/** AdminSettings */
export interface AdminSettings {
    /** The Id of the Administration Settings, auto-generated, UUID */
    id?: AdminSettingsId;
    /**
     * Timestamp of the settings creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id. */
    tenantId?: TenantId;
    /**
     * The Administration Settings key, (e.g. 'general' or 'mail')
     * @example "mail"
     */
    key?: string;
    /** JSON representation of the Administration Settings value */
    jsonValue?: JsonNode;
}
/** AdminSettingsId */
export interface AdminSettingsId {
    /**
     * string
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
}
/** AffectedTenantAdministratorsFilter */
export type AffectedTenantAdministratorsFilter = object;
/** AffectedUserFilter */
export type AffectedUserFilter = object;
/** Alarm */
export interface Alarm {
    /** JSON object with the alarm Id. Specify this field to update the alarm. Referencing non-existing alarm Id will cause error. Omit this field to create new alarm. */
    id?: AlarmId;
    /**
     * Timestamp of the alarm creation, in milliseconds
     * @format int64
     * @example 1634058704567
     */
    createdTime?: number;
    /** JSON object with Tenant Id */
    tenantId?: TenantId;
    /** JSON object with Customer Id */
    customerId?: CustomerId;
    /**
     * representing type of the Alarm
     * @example "High Temperature Alarm"
     */
    name: string;
    /**
     * representing type of the Alarm
     * @example "High Temperature Alarm"
     */
    type: string;
    /** JSON object with alarm originator id */
    originator: EntityId;
    /**
     * Alarm severity
     * @example "CRITICAL"
     */
    severity: "CRITICAL" | "INDETERMINATE" | "MAJOR" | "MINOR" | "WARNING";
    /**
     * Acknowledged
     * @example true
     */
    acknowledged: boolean;
    /**
     * Cleared
     * @example false
     */
    cleared: boolean;
    /** Alarm assignee user id */
    assigneeId?: UserId;
    /**
     * Timestamp of the alarm start time, in milliseconds
     * @format int64
     * @example 1634058704565
     */
    startTs?: number;
    /**
     * Timestamp of the alarm end time(last time update), in milliseconds
     * @format int64
     * @example 1634111163522
     */
    endTs?: number;
    /**
     * Timestamp of the alarm acknowledgement, in milliseconds
     * @format int64
     * @example 1634115221948
     */
    ackTs?: number;
    /**
     * Timestamp of the alarm clearing, in milliseconds
     * @format int64
     * @example 1634114528465
     */
    clearTs?: number;
    /**
     * Timestamp of the alarm assignment, in milliseconds
     * @format int64
     * @example 1634115928465
     */
    assignTs?: number;
    /** JSON object with alarm details */
    details?: JsonNode;
    /**
     * Propagation flag to specify if alarm should be propagated to the owner (tenant or customer) and all parent owners in the customer hierarchy
     * @example true
     */
    propagateToOwnerHierarchy?: boolean;
    /**
     * Propagation flag to specify if alarm should be propagated to parent entities of alarm originator
     * @example true
     */
    propagate?: boolean;
    /**
     * Propagation flag to specify if alarm should be propagated to the tenant entity
     * @example true
     */
    propagateToTenant?: boolean;
    /** JSON array of relation types that should be used for propagation. By default, 'propagateRelationTypes' array is empty which means that the alarm will be propagated based on any relation type to parent entities. This parameter should be used only in case when 'propagate' parameter is set to true, otherwise, 'propagateRelationTypes' array will be ignored. */
    propagateRelationTypes?: (string)[];
    /**
     * Propagation flag to specify if alarm should be propagated to the owner (tenant or customer) of alarm originator
     * @example true
     */
    propagateToOwner?: boolean;
    /**
     * status of the Alarm
     * @example "ACTIVE_UNACK"
     */
    status: "ACTIVE_ACK" | "ACTIVE_UNACK" | "CLEARED_ACK" | "CLEARED_UNACK";
}
/** AlarmAssignee */
export interface AlarmAssignee {
    email?: string;
    firstName?: string;
    id?: UserId;
    lastName?: string;
}
/** AlarmAssignmentNotificationRuleTriggerConfig */
export type AlarmAssignmentNotificationRuleTriggerConfig = (NotificationRuleTriggerConfig & {
    /** @uniqueItems true */
    alarmSeverities?: ("CRITICAL" | "INDETERMINATE" | "MAJOR" | "MINOR" | "WARNING")[];
    /** @uniqueItems true */
    alarmStatuses?: ("ACK" | "ACTIVE" | "ANY" | "CLEARED" | "UNACK")[];
    /** @uniqueItems true */
    alarmTypes?: (string)[];
    /** @uniqueItems true */
    notifyOn?: ("ASSIGNED" | "UNASSIGNED")[];
    triggerType?: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
}) & ({
    /** @uniqueItems true */
    alarmSeverities?: ("CRITICAL" | "INDETERMINATE" | "MAJOR" | "MINOR" | "WARNING")[];
    /** @uniqueItems true */
    alarmStatuses?: ("ACK" | "ACTIVE" | "ANY" | "CLEARED" | "UNACK")[];
    /** @uniqueItems true */
    alarmTypes?: (string)[];
    /** @uniqueItems true */
    notifyOn?: ("ASSIGNED" | "UNASSIGNED")[];
    triggerType?: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
});
/** AlarmComment */
export interface AlarmComment {
    /** JSON object with the alarm comment Id. Specify this field to update the alarm comment. Referencing non-existing alarm Id will cause error. Omit this field to create new alarm. */
    id?: AlarmCommentId;
    /**
     * Timestamp of the alarm comment creation, in milliseconds
     * @format int64
     * @example 1634058704567
     */
    createdTime?: number;
    /** JSON object with Alarm id. */
    alarmId?: EntityId;
    /** JSON object with User id. */
    userId?: UserId;
    /**
     * representing comment text
     * @example "Please take a look"
     */
    name: string;
    /**
     * Defines origination of comment. System type means comment was created by TB. OTHER type means comment was created by user.
     * @example "SYSTEM/OTHER"
     */
    type?: "OTHER" | "SYSTEM";
    /** JSON object with text of comment. */
    comment?: JsonNode;
}
/** AlarmCommentId */
export interface AlarmCommentId {
    /**
     * string
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
}
/** AlarmCommentInfo */
export interface AlarmCommentInfo {
    /** JSON object with the alarm comment Id. Specify this field to update the alarm comment. Referencing non-existing alarm Id will cause error. Omit this field to create new alarm. */
    id?: AlarmCommentId;
    /**
     * Timestamp of the alarm comment creation, in milliseconds
     * @format int64
     * @example 1634058704567
     */
    createdTime?: number;
    /** JSON object with Alarm id. */
    alarmId?: EntityId;
    /** JSON object with User id. */
    userId?: UserId;
    /**
     * representing comment text
     * @example "Please take a look"
     */
    name: string;
    /**
     * Defines origination of comment. System type means comment was created by TB. OTHER type means comment was created by user.
     * @example "SYSTEM/OTHER"
     */
    type?: "OTHER" | "SYSTEM";
    /** JSON object with text of comment. */
    comment?: JsonNode;
    /**
     * User email address
     * @example "johnBrown@gmail.com"
     */
    email?: string;
    /**
     * User first name
     * @example "John"
     */
    firstName?: string;
    /**
     * User last name
     * @example "Brown"
     */
    lastName?: string;
}
/** AlarmCommentNotificationRuleTriggerConfig */
export interface AlarmCommentNotificationRuleTriggerConfig {
    /** @uniqueItems true */
    alarmSeverities?: ("CRITICAL" | "INDETERMINATE" | "MAJOR" | "MINOR" | "WARNING")[];
    /** @uniqueItems true */
    alarmStatuses?: ("ACK" | "ACTIVE" | "ANY" | "CLEARED" | "UNACK")[];
    /** @uniqueItems true */
    alarmTypes?: (string)[];
    notifyOnCommentUpdate?: boolean;
    onlyUserComments?: boolean;
    triggerType?: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
}
/** AlarmCondition */
export interface AlarmCondition {
    /** JSON array of alarm condition filters */
    condition?: (AlarmConditionFilter)[];
    /** JSON object representing alarm condition type */
    spec?: AlarmConditionSpec;
}
/** AlarmConditionFilter */
export interface AlarmConditionFilter {
    /** JSON object for specifying alarm condition by specific key */
    key?: AlarmConditionFilterKey;
    /**
     * String representation of the type of the value
     * @example "NUMERIC"
     */
    valueType?: "BOOLEAN" | "DATE_TIME" | "NUMERIC" | "STRING";
    /** Value used in Constant comparison. For other types, such as TIME_SERIES or ATTRIBUTE, the predicate condition is used */
    value?: object;
    /** JSON object representing filter condition */
    predicate?: KeyFilterPredicate;
}
/** AlarmConditionFilterKey */
export interface AlarmConditionFilterKey {
    /**
     * The key type
     * @example "TIME_SERIES"
     */
    type?: "ATTRIBUTE" | "CONSTANT" | "ENTITY_FIELD" | "TIME_SERIES";
    /**
     * String value representing the key
     * @example "temp"
     */
    key?: string;
}
/** AlarmConditionSpec */
export type AlarmConditionSpec = object;
/** AlarmCountQuery */
export interface AlarmCountQuery {
    assigneeId?: UserId;
    /** @format int64 */
    endTs?: number;
    entityFilter?: EntityFilter;
    keyFilters?: (KeyFilter)[];
    searchPropagatedAlarms?: boolean;
    severityList?: ("CRITICAL" | "INDETERMINATE" | "MAJOR" | "MINOR" | "WARNING")[];
    /** @format int64 */
    startTs?: number;
    statusList?: ("ACK" | "ACTIVE" | "ANY" | "CLEARED" | "UNACK")[];
    /** @format int64 */
    timeWindow?: number;
    typeList?: (string)[];
}
/** AlarmData */
export interface AlarmData {
    entityId?: EntityId;
    latest?: Record<string, object>;
    /** JSON object with the alarm Id. Specify this field to update the alarm. Referencing non-existing alarm Id will cause error. Omit this field to create new alarm. */
    id?: AlarmId;
    /**
     * Timestamp of the alarm creation, in milliseconds
     * @format int64
     * @example 1634058704567
     */
    createdTime?: number;
    /** JSON object with Tenant Id */
    tenantId?: TenantId;
    /** JSON object with Customer Id */
    customerId?: CustomerId;
    /**
     * representing type of the Alarm
     * @example "High Temperature Alarm"
     */
    name: string;
    /**
     * representing type of the Alarm
     * @example "High Temperature Alarm"
     */
    type: string;
    /** JSON object with alarm originator id */
    originator: EntityId;
    /**
     * Alarm severity
     * @example "CRITICAL"
     */
    severity: "CRITICAL" | "INDETERMINATE" | "MAJOR" | "MINOR" | "WARNING";
    /**
     * Acknowledged
     * @example true
     */
    acknowledged: boolean;
    /**
     * Cleared
     * @example false
     */
    cleared: boolean;
    /** Alarm assignee user id */
    assigneeId?: UserId;
    /**
     * Timestamp of the alarm start time, in milliseconds
     * @format int64
     * @example 1634058704565
     */
    startTs?: number;
    /**
     * Timestamp of the alarm end time(last time update), in milliseconds
     * @format int64
     * @example 1634111163522
     */
    endTs?: number;
    /**
     * Timestamp of the alarm acknowledgement, in milliseconds
     * @format int64
     * @example 1634115221948
     */
    ackTs?: number;
    /**
     * Timestamp of the alarm clearing, in milliseconds
     * @format int64
     * @example 1634114528465
     */
    clearTs?: number;
    /**
     * Timestamp of the alarm assignment, in milliseconds
     * @format int64
     * @example 1634115928465
     */
    assignTs?: number;
    /** JSON object with alarm details */
    details?: JsonNode;
    /**
     * Propagation flag to specify if alarm should be propagated to the owner (tenant or customer) and all parent owners in the customer hierarchy
     * @example true
     */
    propagateToOwnerHierarchy?: boolean;
    /**
     * Propagation flag to specify if alarm should be propagated to parent entities of alarm originator
     * @example true
     */
    propagate?: boolean;
    /**
     * Propagation flag to specify if alarm should be propagated to the tenant entity
     * @example true
     */
    propagateToTenant?: boolean;
    /** JSON array of relation types that should be used for propagation. By default, 'propagateRelationTypes' array is empty which means that the alarm will be propagated based on any relation type to parent entities. This parameter should be used only in case when 'propagate' parameter is set to true, otherwise, 'propagateRelationTypes' array will be ignored. */
    propagateRelationTypes?: (string)[];
    /**
     * Propagation flag to specify if alarm should be propagated to the owner (tenant or customer) of alarm originator
     * @example true
     */
    propagateToOwner?: boolean;
    /**
     * Alarm originator name
     * @example "Thermostat"
     */
    originatorName?: string;
    /**
     * Alarm originator label
     * @example "Thermostat label"
     */
    originatorLabel?: string;
    /** Alarm assignee */
    assignee?: AlarmAssignee;
    /**
     * status of the Alarm
     * @example "ACTIVE_UNACK"
     */
    status: "ACTIVE_ACK" | "ACTIVE_UNACK" | "CLEARED_ACK" | "CLEARED_UNACK";
}
/** AlarmDataPageLink */
export interface AlarmDataPageLink {
    assigneeId?: UserId;
    dynamic?: boolean;
    /** @format int64 */
    endTs?: number;
    /** @format int32 */
    page?: number;
    /** @format int32 */
    pageSize?: number;
    searchPropagatedAlarms?: boolean;
    severityList?: ("CRITICAL" | "INDETERMINATE" | "MAJOR" | "MINOR" | "WARNING")[];
    sortOrder?: EntityDataSortOrder;
    /** @format int64 */
    startTs?: number;
    statusList?: ("ACK" | "ACTIVE" | "ANY" | "CLEARED" | "UNACK")[];
    textSearch?: string;
    /** @format int64 */
    timeWindow?: number;
    typeList?: (string)[];
}
/** AlarmDataQuery */
export interface AlarmDataQuery {
    alarmFields?: (EntityKey)[];
    entityFields?: (EntityKey)[];
    entityFilter?: EntityFilter;
    keyFilters?: (KeyFilter)[];
    latestValues?: (EntityKey)[];
    pageLink?: AlarmDataPageLink;
}
/** AlarmId */
export interface AlarmId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "ALARM"
     */
    entityType: "ALARM";
}
/** AlarmInfo */
export interface AlarmInfo {
    /** JSON object with the alarm Id. Specify this field to update the alarm. Referencing non-existing alarm Id will cause error. Omit this field to create new alarm. */
    id?: AlarmId;
    /**
     * Timestamp of the alarm creation, in milliseconds
     * @format int64
     * @example 1634058704567
     */
    createdTime?: number;
    /** JSON object with Tenant Id */
    tenantId?: TenantId;
    /** JSON object with Customer Id */
    customerId?: CustomerId;
    /**
     * representing type of the Alarm
     * @example "High Temperature Alarm"
     */
    name: string;
    /**
     * representing type of the Alarm
     * @example "High Temperature Alarm"
     */
    type: string;
    /** JSON object with alarm originator id */
    originator: EntityId;
    /**
     * Alarm severity
     * @example "CRITICAL"
     */
    severity: "CRITICAL" | "INDETERMINATE" | "MAJOR" | "MINOR" | "WARNING";
    /**
     * Acknowledged
     * @example true
     */
    acknowledged: boolean;
    /**
     * Cleared
     * @example false
     */
    cleared: boolean;
    /** Alarm assignee user id */
    assigneeId?: UserId;
    /**
     * Timestamp of the alarm start time, in milliseconds
     * @format int64
     * @example 1634058704565
     */
    startTs?: number;
    /**
     * Timestamp of the alarm end time(last time update), in milliseconds
     * @format int64
     * @example 1634111163522
     */
    endTs?: number;
    /**
     * Timestamp of the alarm acknowledgement, in milliseconds
     * @format int64
     * @example 1634115221948
     */
    ackTs?: number;
    /**
     * Timestamp of the alarm clearing, in milliseconds
     * @format int64
     * @example 1634114528465
     */
    clearTs?: number;
    /**
     * Timestamp of the alarm assignment, in milliseconds
     * @format int64
     * @example 1634115928465
     */
    assignTs?: number;
    /** JSON object with alarm details */
    details?: JsonNode;
    /**
     * Propagation flag to specify if alarm should be propagated to the owner (tenant or customer) and all parent owners in the customer hierarchy
     * @example true
     */
    propagateToOwnerHierarchy?: boolean;
    /**
     * Propagation flag to specify if alarm should be propagated to parent entities of alarm originator
     * @example true
     */
    propagate?: boolean;
    /**
     * Propagation flag to specify if alarm should be propagated to the tenant entity
     * @example true
     */
    propagateToTenant?: boolean;
    /** JSON array of relation types that should be used for propagation. By default, 'propagateRelationTypes' array is empty which means that the alarm will be propagated based on any relation type to parent entities. This parameter should be used only in case when 'propagate' parameter is set to true, otherwise, 'propagateRelationTypes' array will be ignored. */
    propagateRelationTypes?: (string)[];
    /**
     * Propagation flag to specify if alarm should be propagated to the owner (tenant or customer) of alarm originator
     * @example true
     */
    propagateToOwner?: boolean;
    /**
     * Alarm originator name
     * @example "Thermostat"
     */
    originatorName?: string;
    /**
     * Alarm originator label
     * @example "Thermostat label"
     */
    originatorLabel?: string;
    /** Alarm assignee */
    assignee?: AlarmAssignee;
    /**
     * status of the Alarm
     * @example "ACTIVE_UNACK"
     */
    status: "ACTIVE_ACK" | "ACTIVE_UNACK" | "CLEARED_ACK" | "CLEARED_UNACK";
}
/** AlarmNotificationRuleTriggerConfig */
export type AlarmNotificationRuleTriggerConfig = (NotificationRuleTriggerConfig & {
    /** @uniqueItems true */
    alarmSeverities?: ("CRITICAL" | "INDETERMINATE" | "MAJOR" | "MINOR" | "WARNING")[];
    /** @uniqueItems true */
    alarmTypes?: (string)[];
    clearRule?: ClearRule;
    /** @uniqueItems true */
    notifyOn?: ("ACKNOWLEDGED" | "CLEARED" | "CREATED" | "SEVERITY_CHANGED")[];
    triggerType?: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
}) & ({
    /** @uniqueItems true */
    alarmSeverities?: ("CRITICAL" | "INDETERMINATE" | "MAJOR" | "MINOR" | "WARNING")[];
    /** @uniqueItems true */
    alarmTypes?: (string)[];
    clearRule?: ClearRule;
    /** @uniqueItems true */
    notifyOn?: ("ACKNOWLEDGED" | "CLEARED" | "CREATED" | "SEVERITY_CHANGED")[];
    triggerType?: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
});
/** AlarmRule */
export interface AlarmRule {
    /** JSON object representing the alarm rule condition */
    condition?: AlarmCondition;
    /** JSON object representing time interval during which the rule is active */
    schedule?: AlarmSchedule;
    /** String value representing the additional details for an alarm rule */
    alarmDetails?: string;
    /** JSON object with the dashboard Id representing the reference to alarm details dashboard used by mobile application */
    dashboardId?: DashboardId;
}
/** AlarmSchedule */
export interface AlarmSchedule {
    dynamicValue?: DynamicValueString;
    type?: "ANY_TIME" | "CUSTOM" | "SPECIFIC_TIME";
}
/** AllUsersFilter */
export type AllUsersFilter = object;
/** AllowCreateNewDevicesDeviceProfileProvisionConfiguration */
export interface AllowCreateNewDevicesDeviceProfileProvisionConfiguration {
    provisionDeviceSecret?: string;
}
/** AllowedPermissionsInfo */
export interface AllowedPermissionsInfo {
    /** Owner Id of the user (Tenant or Customer) */
    userOwnerId?: EntityId;
    /** JSON object with merged permission for all generic and group roles assigned to all user groups the user belongs to */
    userPermissions?: MergedUserPermissions;
    /**
     * Static set (vocabulary) of all possibly allowed resources. Static and depends only on the authority of the user
     * @uniqueItems true
     */
    allowedResources?: ("ADMIN_SETTINGS" | "ALARM" | "ALL" | "API_USAGE_STATE" | "ASSET" | "ASSET_GROUP" | "ASSET_PROFILE" | "AUDIT_LOG" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "CUSTOMER_GROUP" | "DASHBOARD" | "DASHBOARD_GROUP" | "DEVICE" | "DEVICE_GROUP" | "DEVICE_PROFILE" | "EDGE" | "EDGE_GROUP" | "ENTITY_VIEW" | "ENTITY_VIEW_GROUP" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "OAUTH2_CONFIGURATION_INFO" | "OAUTH2_CONFIGURATION_TEMPLATE" | "OTA_PACKAGE" | "PROFILE" | "QUEUE" | "ROLE" | "RULE_CHAIN" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "USER_GROUP" | "VERSION_CONTROL" | "WHITE_LABELING" | "WIDGETS_BUNDLE" | "WIDGET_TYPE")[];
    /** Static map (vocabulary) of allowed operations by resource type */
    operationsByResource?: Record<string, (string)[]>;
    /**
     * Static set (vocabulary) of allowed operations for group roles
     * @uniqueItems true
     */
    allowedForGroupRoleOperations?: ("ADD_TO_GROUP" | "ALL" | "ASSIGN_TO_TENANT" | "CHANGE_OWNER" | "CLAIM_DEVICES" | "CREATE" | "DELETE" | "IMPERSONATE" | "READ" | "READ_ATTRIBUTES" | "READ_CREDENTIALS" | "READ_TELEMETRY" | "REMOVE_FROM_GROUP" | "RPC_CALL" | "SHARE_GROUP" | "WRITE" | "WRITE_ATTRIBUTES" | "WRITE_CREDENTIALS" | "WRITE_TELEMETRY")[];
    /**
     * Static set (vocabulary) of allowed operations for group owner
     * @uniqueItems true
     */
    allowedForGroupOwnerOnlyOperations?: ("ADD_TO_GROUP" | "ALL" | "ASSIGN_TO_TENANT" | "CHANGE_OWNER" | "CLAIM_DEVICES" | "CREATE" | "DELETE" | "IMPERSONATE" | "READ" | "READ_ATTRIBUTES" | "READ_CREDENTIALS" | "READ_TELEMETRY" | "REMOVE_FROM_GROUP" | "RPC_CALL" | "SHARE_GROUP" | "WRITE" | "WRITE_ATTRIBUTES" | "WRITE_CREDENTIALS" | "WRITE_TELEMETRY")[];
    /**
     * Static set (vocabulary) of allowed group operations for group owner
     * @uniqueItems true
     */
    allowedForGroupOwnerOnlyGroupOperations?: ("ADD_TO_GROUP" | "ALL" | "ASSIGN_TO_TENANT" | "CHANGE_OWNER" | "CLAIM_DEVICES" | "CREATE" | "DELETE" | "IMPERSONATE" | "READ" | "READ_ATTRIBUTES" | "READ_CREDENTIALS" | "READ_TELEMETRY" | "REMOVE_FROM_GROUP" | "RPC_CALL" | "SHARE_GROUP" | "WRITE" | "WRITE_ATTRIBUTES" | "WRITE_CREDENTIALS" | "WRITE_TELEMETRY")[];
}
/** AnyTimeSchedule */
export interface AnyTimeSchedule {
    dynamicValue?: DynamicValueString;
    type?: "ANY_TIME" | "CUSTOM" | "SPECIFIC_TIME";
}
/** ApiUsageLimitNotificationRuleTriggerConfig */
export type ApiUsageLimitNotificationRuleTriggerConfig = (NotificationRuleTriggerConfig & {
    /** @uniqueItems true */
    apiFeatures?: ("ALARM" | "DB" | "EMAIL" | "JS" | "RE" | "SMS" | "TBEL" | "TRANSPORT")[];
    /** @uniqueItems true */
    notifyOn?: ("DISABLED" | "ENABLED" | "WARNING")[];
    triggerType?: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
}) & ({
    /** @uniqueItems true */
    apiFeatures?: ("ALARM" | "DB" | "EMAIL" | "JS" | "RE" | "SMS" | "TBEL" | "TRANSPORT")[];
    /** @uniqueItems true */
    notifyOn?: ("DISABLED" | "ENABLED" | "WARNING")[];
    triggerType?: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
});
/** ApiUsageStateFilter */
export type ApiUsageStateFilter = (EntityFilter & {
    customerId?: CustomerId;
}) & ({
    customerId?: CustomerId;
});
/** ArrayNode */
export type ArrayNode = object;
/** Asset */
export interface Asset {
    /** JSON object with the asset Id. Specify this field to update the asset. Referencing non-existing asset Id will cause error. Omit this field to create new asset. */
    id?: AssetId;
    /**
     * Timestamp of the asset creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id. */
    tenantId?: TenantId;
    /** JSON object with Customer Id. Use 'assignAssetToCustomer' to change the Customer Id. */
    customerId?: CustomerId;
    /**
     * Unique Asset Name in scope of Tenant
     * @example "Empire State Building"
     */
    name: string;
    /**
     * Asset type
     * @example "Building"
     */
    type?: string;
    /**
     * Label that may be used in widgets
     * @example "NY Building"
     */
    label?: string;
    /** JSON object with Asset Profile Id. */
    assetProfileId?: AssetProfileId;
    /** Additional parameters of the asset */
    additionalInfo?: JsonNode;
    /** JSON object with Customer or Tenant Id */
    ownerId?: EntityId;
}
/** AssetId */
export interface AssetId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "ASSET"
     */
    entityType: "ASSET";
}
/** AssetInfo */
export interface AssetInfo {
    /** JSON object with the asset Id. Specify this field to update the asset. Referencing non-existing asset Id will cause error. Omit this field to create new asset. */
    id?: AssetId;
    /**
     * Timestamp of the asset creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id. */
    tenantId?: TenantId;
    /** JSON object with Customer Id. Use 'assignAssetToCustomer' to change the Customer Id. */
    customerId?: CustomerId;
    /**
     * Unique Asset Name in scope of Tenant
     * @example "Empire State Building"
     */
    name: string;
    /**
     * Asset type
     * @example "Building"
     */
    type?: string;
    /**
     * Label that may be used in widgets
     * @example "NY Building"
     */
    label?: string;
    /** JSON object with Asset Profile Id. */
    assetProfileId?: AssetProfileId;
    /** Additional parameters of the asset */
    additionalInfo?: JsonNode;
    /** JSON object with Customer or Tenant Id */
    ownerId?: EntityId;
    /** Owner name */
    ownerName?: string;
    /** Groups */
    groups?: (EntityInfo)[];
}
/** AssetProfile */
export interface AssetProfile {
    /** JSON object with the asset profile Id. Specify this field to update the asset profile. Referencing non-existing asset profile Id will cause error. Omit this field to create new asset profile. */
    id?: AssetProfileId;
    /**
     * Timestamp of the profile creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id that owns the profile. */
    tenantId?: TenantId;
    /**
     * Unique Asset Profile Name in scope of Tenant.
     * @example "Building"
     */
    name?: string;
    /**
     * Used to mark the default profile. Default profile is used when the asset profile is not specified during asset creation.
     * @example false
     */
    default?: boolean;
    /** Reference to the dashboard. Used in the mobile application to open the default dashboard when user navigates to asset details. */
    defaultDashboardId?: DashboardId;
    /** Reference to the rule chain. If present, the specified rule chain will be used to process all messages related to asset, including asset updates, telemetry, attribute updates, etc. Otherwise, the root rule chain will be used to process those messages. */
    defaultRuleChainId?: RuleChainId;
    /** Rule engine queue name. If present, the specified queue will be used to store all unprocessed messages related to asset, including asset updates, telemetry, attribute updates, etc. Otherwise, the 'Main' queue will be used to store those messages. */
    defaultQueueName?: string;
    /** Asset Profile description.  */
    description?: string;
    /** Either URL or Base64 data of the icon. Used in the mobile application to visualize set of asset profiles in the grid view.  */
    image?: string;
    /** Reference to the edge rule chain. If present, the specified edge rule chain will be used on the edge to process all messages related to asset, including asset updates, telemetry, attribute updates, etc. Otherwise, the edge root rule chain will be used to process those messages. */
    defaultEdgeRuleChainId?: RuleChainId;
}
/** AssetProfileId */
export interface AssetProfileId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "ASSET_PROFILE"
     */
    entityType: "ASSET_PROFILE";
}
/** AssetProfileInfo */
export interface AssetProfileInfo {
    /** JSON object with the entity Id.  */
    id?: EntityId;
    /** Entity Name */
    name?: string;
    /** Either URL or Base64 data of the icon. Used in the mobile application to visualize set of asset profiles in the grid view.  */
    image?: string;
    /** Reference to the dashboard. Used in the mobile application to open the default dashboard when user navigates to asset details. */
    defaultDashboardId?: DashboardId;
    /** Tenant id. */
    tenantId?: TenantId;
}
/** AssetSearchQuery */
export interface AssetSearchQuery {
    /** Type of the relation between root entity and asset (e.g. 'Contains' or 'Manages'). */
    relationType?: string;
    /** Array of asset types to filter the related entities (e.g. 'Building', 'Vehicle'). */
    assetTypes?: (string)[];
    /** Main search parameters. */
    parameters?: RelationsSearchParameters;
}
/** AssetSearchQueryFilter */
export type AssetSearchQueryFilter = (EntityFilter & {
    assetTypes?: (string)[];
    direction?: "FROM" | "TO";
    fetchLastLevelOnly?: boolean;
    /** @format int32 */
    maxLevel?: number;
    relationType?: string;
    rootEntity?: EntityId;
}) & ({
    assetTypes?: (string)[];
    direction?: "FROM" | "TO";
    fetchLastLevelOnly?: boolean;
    /** @format int32 */
    maxLevel?: number;
    relationType?: string;
    rootEntity?: EntityId;
});
/** AssetTypeFilter */
export type AssetTypeFilter = (EntityFilter & {
    assetNameFilter?: string;
    assetTypes?: (string)[];
}) & ({
    assetNameFilter?: string;
    assetTypes?: (string)[];
});
/** AtomicInteger */
export interface AtomicInteger {
    /** @format int32 */
    acquire?: number;
    /** @format int32 */
    andDecrement?: number;
    /** @format int32 */
    andIncrement?: number;
    /** @format int32 */
    opaque?: number;
    /** @format int32 */
    plain?: number;
}
/** AttributeExportData */
export interface AttributeExportData {
    booleanValue?: boolean;
    /** @format double */
    doubleValue?: number;
    jsonValue?: string;
    key?: string;
    /** @format int64 */
    lastUpdateTs?: number;
    /** @format int64 */
    longValue?: number;
    strValue?: string;
}
/** AttributesEntityView */
export interface AttributesEntityView {
    /**
     * List of client-side attribute keys to expose
     * @example "currentConfiguration"
     */
    cs: (string)[];
    /**
     * List of shared attribute keys to expose
     * @example "targetConfiguration"
     */
    sh: (string)[];
    /**
     * List of server-side attribute keys to expose
     * @example "model"
     */
    ss: (string)[];
}
/** AuditLog */
export interface AuditLog {
    /** JSON object with the auditLog Id */
    id?: AuditLogId;
    /**
     * Timestamp of the auditLog creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id */
    tenantId?: TenantId;
    /** JSON object with Customer Id */
    customerId?: CustomerId;
    /** JSON object with Entity id */
    entityId?: EntityId;
    /**
     * Name of the logged entity
     * @example "Thermometer"
     */
    entityName?: string;
    /** JSON object with User id. */
    userId?: UserId;
    /**
     * Unique user name(email) of the user that performed some action on logged entity
     * @example "tenant@thingsboard.org"
     */
    userName?: string;
    /**
     * String represented Action type
     * @example "ADDED"
     */
    actionType?: "ACTIVATED" | "ADDED" | "ADDED_COMMENT" | "ADDED_TO_ENTITY_GROUP" | "ALARM_ACK" | "ALARM_ASSIGNED" | "ALARM_CLEAR" | "ALARM_DELETE" | "ALARM_UNASSIGNED" | "ASSIGNED_FROM_TENANT" | "ASSIGNED_TO_CUSTOMER" | "ASSIGNED_TO_EDGE" | "ASSIGNED_TO_TENANT" | "ATTRIBUTES_DELETED" | "ATTRIBUTES_READ" | "ATTRIBUTES_UPDATED" | "CHANGE_OWNER" | "CREDENTIALS_READ" | "CREDENTIALS_UPDATED" | "DELETED" | "DELETED_COMMENT" | "LOCKOUT" | "LOGIN" | "LOGOUT" | "MADE_PRIVATE" | "MADE_PUBLIC" | "PROVISION_FAILURE" | "PROVISION_SUCCESS" | "RELATIONS_DELETED" | "RELATION_ADD_OR_UPDATE" | "RELATION_DELETED" | "REMOVED_FROM_ENTITY_GROUP" | "REST_API_RULE_ENGINE_CALL" | "RPC_CALL" | "SMS_SENT" | "SUSPENDED" | "TIMESERIES_DELETED" | "TIMESERIES_UPDATED" | "UNASSIGNED_FROM_CUSTOMER" | "UNASSIGNED_FROM_EDGE" | "UPDATED" | "UPDATED_COMMENT";
    /** JsonNode represented action data */
    actionData?: JsonNode;
    /**
     * String represented Action status
     * @example "SUCCESS"
     */
    actionStatus?: "FAILURE" | "SUCCESS";
    /** Failure action details info. An empty string in case of action status type 'SUCCESS', otherwise includes stack trace of the caused exception. */
    actionFailureDetails?: string;
}
/** AuditLogId */
export interface AuditLogId {
    /**
     * string
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
}
/** AutoVersionCreateConfig */
export interface AutoVersionCreateConfig {
    branch?: string;
    saveAttributes?: boolean;
    saveCredentials?: boolean;
    saveGroupEntities?: boolean;
    savePermissions?: boolean;
    saveRelations?: boolean;
}
/** AwsSnsSmsProviderConfiguration */
export type AwsSnsSmsProviderConfiguration = (SmsProviderConfiguration & {
    /** The AWS SNS Access Key ID. */
    accessKeyId?: string;
    /** The AWS SNS Access Key. */
    secretAccessKey?: string;
    /** The AWS region. */
    region?: string;
}) & ({
    /** The AWS SNS Access Key ID. */
    accessKeyId?: string;
    /** The AWS SNS Access Key. */
    secretAccessKey?: string;
    /** The AWS region. */
    region?: string;
});
/** BackupCodeTwoFaAccountConfig */
export interface BackupCodeTwoFaAccountConfig {
    /** @uniqueItems true */
    codes?: (string)[];
    /** @format int32 */
    codesLeft?: number;
    useByDefault?: boolean;
}
/** BackupCodeTwoFaProviderConfig */
export interface BackupCodeTwoFaProviderConfig {
    /** @format int32 */
    codesQuantity?: number;
}
/** BlobEntityId */
export interface BlobEntityId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "BLOB_ENTITY"
     */
    entityType: "BLOB_ENTITY";
}
/** BlobEntityInfo */
export interface BlobEntityInfo {
    /** JSON object with the blob entity Id. Referencing non-existing blob entity Id will cause error */
    id?: BlobEntityId;
    /**
     * Timestamp of the blob entity creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id */
    tenantId?: TenantId;
    /** JSON object with Customer Id */
    customerId?: CustomerId;
    /** JSON object with Customer or Tenant Id */
    ownerId?: EntityId;
    /**
     * blob entity name
     * @example "report-2021-10-29_14:00:00.pdf"
     */
    name?: string;
    /**
     * blob entity type
     * @example "report"
     */
    type?: string;
    /**
     * blob content type
     * @example "application/pdf"
     */
    contentType?: "application/pdf" | "image/jpeg" | "image/png";
    /** Additional parameters of the blob entity */
    additionalInfo?: JsonNode;
}
/** BlobEntityWithCustomerInfo */
export interface BlobEntityWithCustomerInfo {
    /** JSON object with the blob entity Id. Referencing non-existing blob entity Id will cause error */
    id?: BlobEntityId;
    /**
     * Timestamp of the blob entity creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id */
    tenantId?: TenantId;
    /** JSON object with Customer Id */
    customerId?: CustomerId;
    /** JSON object with Customer or Tenant Id */
    ownerId?: EntityId;
    /**
     * blob entity name
     * @example "report-2021-10-29_14:00:00.pdf"
     */
    name?: string;
    /**
     * blob entity type
     * @example "report"
     */
    type?: string;
    /**
     * blob content type
     * @example "application/pdf"
     */
    contentType?: "application/pdf" | "image/jpeg" | "image/png";
    /** Additional parameters of the blob entity */
    additionalInfo?: JsonNode;
    /**
     * Title of the customer
     * @example "Company A"
     */
    customerTitle?: string;
    /** Parameter that specifies if customer is public */
    customerIsPublic?: object;
}
/** BooleanFilterPredicate */
export type BooleanFilterPredicate = (KeyFilterPredicate & {
    operation?: "EQUAL" | "NOT_EQUAL";
    value?: FilterPredicateValueBoolean;
}) & ({
    operation?: "EQUAL" | "NOT_EQUAL";
    value?: FilterPredicateValueBoolean;
});
/** BranchInfo */
export interface BranchInfo {
    default?: boolean;
    name?: string;
}
/** BulkImportRequest */
export interface BulkImportRequest {
    customerId?: CustomerId;
    entityGroupId?: string;
    file?: string;
    mapping?: Mapping;
}
/** BulkImportResult«Asset» */
export interface BulkImportResultAsset {
    created?: AtomicInteger;
    errors?: AtomicInteger;
    errorsList?: (string)[];
    updated?: AtomicInteger;
}
/** BulkImportResult«Device» */
export interface BulkImportResultDevice {
    created?: AtomicInteger;
    errors?: AtomicInteger;
    errorsList?: (string)[];
    updated?: AtomicInteger;
}
/** BulkImportResult«Edge» */
export interface BulkImportResultEdge {
    created?: AtomicInteger;
    errors?: AtomicInteger;
    errorsList?: (string)[];
    updated?: AtomicInteger;
}
/** Button */
export interface Button {
    /** @format uuid */
    dashboardId?: string;
    dashboardState?: string;
    enabled?: boolean;
    link?: string;
    linkType?: "DASHBOARD" | "LINK";
    setEntityIdInState?: boolean;
    text?: string;
}
/** ByteArrayResource */
export interface ByteArrayResource {
    /** @format byte */
    byteArray?: string;
    description?: string;
    /** @format binary */
    file?: File;
    filename?: string;
    inputStream?: InputStream;
    open?: boolean;
    readable?: boolean;
    /** @format uri */
    uri?: string;
    /** @format url */
    url?: string;
}
/** ByteBuffer */
export interface ByteBuffer {
    char?: string;
    direct?: boolean;
    /** @format double */
    double?: number;
    /** @format float */
    float?: number;
    /** @format int32 */
    int?: number;
    /** @format int64 */
    long?: number;
    readOnly?: boolean;
    /** @format int32 */
    short?: number;
}
/** ChangePasswordRequest */
export interface ChangePasswordRequest {
    /**
     * The old password
     * @example "OldPassword"
     */
    currentPassword?: string;
    /**
     * The new password
     * @example "NewPassword"
     */
    newPassword?: string;
}
/** CheckPreProvisionedDevicesDeviceProfileProvisionConfiguration */
export interface CheckPreProvisionedDevicesDeviceProfileProvisionConfiguration {
    provisionDeviceSecret?: string;
}
/** ClaimRequest */
export interface ClaimRequest {
    secretKey?: string;
}
/** ClearRule */
export interface ClearRule {
    /** @uniqueItems true */
    alarmStatuses?: ("ACK" | "ACTIVE" | "ANY" | "CLEARED" | "UNACK")[];
}
/** ClientAttributesQueryingSnmpCommunicationConfig */
export interface ClientAttributesQueryingSnmpCommunicationConfig {
    mappings?: (SnmpMapping)[];
    /** @format int64 */
    queryingFrequencyMs?: number;
    spec?: "CLIENT_ATTRIBUTES_QUERYING" | "SHARED_ATTRIBUTES_SETTING" | "TELEMETRY_QUERYING" | "TO_DEVICE_RPC_REQUEST" | "TO_SERVER_RPC_REQUEST";
}
/** CoapDeviceProfileTransportConfiguration */
export type CoapDeviceProfileTransportConfiguration = (DeviceProfileTransportConfiguration & {
    clientSettings?: PowerSavingConfiguration;
    coapDeviceTypeConfiguration?: CoapDeviceTypeConfiguration;
}) & ({
    clientSettings?: PowerSavingConfiguration;
    coapDeviceTypeConfiguration?: CoapDeviceTypeConfiguration;
});
/** CoapDeviceTransportConfiguration */
export type CoapDeviceTransportConfiguration = (DeviceTransportConfiguration & {
    /** @format int64 */
    edrxCycle?: number;
    /** @format int64 */
    pagingTransmissionWindow?: number;
    powerMode?: "DRX" | "E_DRX" | "PSM";
    /** @format int64 */
    psmActivityTimer?: number;
}) & ({
    /** @format int64 */
    edrxCycle?: number;
    /** @format int64 */
    pagingTransmissionWindow?: number;
    powerMode?: "DRX" | "E_DRX" | "PSM";
    /** @format int64 */
    psmActivityTimer?: number;
});
/** CoapDeviceTypeConfiguration */
export type CoapDeviceTypeConfiguration = object;
/** ColumnMapping */
export interface ColumnMapping {
    key?: string;
    type?: "ACCESS_TOKEN" | "CLOUD_ENDPOINT" | "DESCRIPTION" | "EDGE_LICENSE_KEY" | "IS_GATEWAY" | "LABEL" | "LWM2M_BOOTSTRAP_SERVER_PUBLIC_KEY_OR_ID" | "LWM2M_BOOTSTRAP_SERVER_SECRET_KEY" | "LWM2M_BOOTSTRAP_SERVER_SECURITY_MODE" | "LWM2M_CLIENT_CERT" | "LWM2M_CLIENT_ENDPOINT" | "LWM2M_CLIENT_IDENTITY" | "LWM2M_CLIENT_KEY" | "LWM2M_CLIENT_SECURITY_CONFIG_MODE" | "LWM2M_SERVER_CLIENT_PUBLIC_KEY_OR_ID" | "LWM2M_SERVER_CLIENT_SECRET_KEY" | "LWM2M_SERVER_SECURITY_MODE" | "MQTT_CLIENT_ID" | "MQTT_PASSWORD" | "MQTT_USER_NAME" | "NAME" | "ROUTING_KEY" | "SECRET" | "SERVER_ATTRIBUTE" | "SHARED_ATTRIBUTE" | "SNMP_COMMUNITY_STRING" | "SNMP_HOST" | "SNMP_PORT" | "SNMP_VERSION" | "TIMESERIES" | "TYPE" | "X509";
}
/** ComparisonTsValue */
export interface ComparisonTsValue {
    current?: TsValue;
    previous?: TsValue;
}
/** ComplexFilterPredicate */
export type ComplexFilterPredicate = (KeyFilterPredicate & {
    operation?: "AND" | "OR";
    predicates?: (KeyFilterPredicate)[];
}) & ({
    operation?: "AND" | "OR";
    predicates?: (KeyFilterPredicate)[];
});
/** ComplexVersionCreateRequest */
export type ComplexVersionCreateRequest = (VersionCreateRequest & {
    branch?: string;
    entityTypes?: Record<string, EntityTypeVersionCreateConfig>;
    syncStrategy?: "MERGE" | "OVERWRITE";
    type?: "COMPLEX" | "SINGLE_ENTITY";
    versionName?: string;
}) & ({
    branch?: string;
    entityTypes?: Record<string, EntityTypeVersionCreateConfig>;
    syncStrategy?: "MERGE" | "OVERWRITE";
    type?: "COMPLEX" | "SINGLE_ENTITY";
    versionName?: string;
});
/** ComponentDescriptor */
export interface ComponentDescriptor {
    /** JSON object with the descriptor Id. Specify existing descriptor id to update the descriptor. Referencing non-existing descriptor Id will cause error. Omit this field to create new descriptor. */
    id?: ComponentDescriptorId;
    /**
     * Timestamp of the descriptor creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** Type of the Rule Node */
    type?: "ACTION" | "ANALYTICS" | "ENRICHMENT" | "EXTERNAL" | "FILTER" | "FLOW" | "TRANSFORMATION";
    /**
     * Scope of the Rule Node. Always set to 'TENANT', since no rule chains on the 'SYSTEM' level yet.
     * @example "TENANT"
     */
    scope?: "TENANT";
    /**
     * Clustering mode of the RuleNode. This mode represents the ability to start Rule Node in multiple microservices.
     * @example "ENABLED"
     */
    clusteringMode?: "ENABLED" | "SINGLETON" | "USER_PREFERENCE";
    /**
     * Name of the Rule Node. Taken from the @RuleNode annotation.
     * @example "Custom Rule Node"
     */
    name?: string;
    /**
     * Full name of the Java class that implements the Rule Engine Node interface.
     * @example "com.mycompany.CustomRuleNode"
     */
    clazz?: string;
    /** Complex JSON object that represents the Rule Node configuration. */
    configurationDescriptor?: JsonNode;
    /**
     * Rule node configuration version. By default, this value is 0. If the rule node is a versioned node, this value might be greater than 0.
     * @format int32
     */
    configurationVersion?: number;
    /** Rule Node Actions. Deprecated. Always null. */
    actions?: string;
}
/** ComponentDescriptorId */
export interface ComponentDescriptorId {
    /**
     * string
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
}
/** ContactBased«object» */
export interface ContactBasedObject {
    additionalInfo?: JsonNode;
    address?: string;
    "address2"?: string;
    city?: string;
    country?: string;
    /** @format int64 */
    createdTime?: number;
    email?: string;
    id?: object;
    name?: string;
    phone?: string;
    state?: string;
    zip?: string;
}
/** Converter */
export interface Converter {
    /** JSON object with the Converter Id. Specify this field to update the Converter. Referencing non-existing Converter Id will cause error. Omit this field to create new Converter. */
    id?: ConverterId;
    /**
     * Timestamp of the converter creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id */
    tenantId?: TenantId;
    /**
     * Unique Converter Name in scope of Tenant
     * @example "Http Converter"
     */
    name: string;
    /** The type of the converter to process incoming or outgoing messages */
    type: "DOWNLINK" | "UPLINK";
    /**
     * Boolean flag to enable/disable saving received messages as debug events
     * @example false
     */
    debugMode?: boolean;
    /** JSON object representing converter configuration. It should contain one of two possible fields: 'decoder' or 'encoder'. The former is used when the converter has UPLINK type, the latter is used - when DOWNLINK type. It can contain both 'decoder' and 'encoder' fields, when the correct one is specified for the appropriate converter type, another one can be set to 'null' */
    configuration?: JsonNode;
    /** Additional parameters of the converter */
    additionalInfo?: JsonNode;
    /**
     * Boolean flag that specifies that is regular or edge template converter
     * @example false
     */
    edgeTemplate?: boolean;
}
/** ConverterId */
export interface ConverterId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "CONVERTER"
     */
    entityType: "CONVERTER";
}
/** CustomMenu */
export interface CustomMenu {
    /**
     * List of disabled regular menu items
     * @example "home"
     */
    disabledMenuItems: (string)[];
    /** List of custom menu items */
    menuItems: (CustomMenuItem)[];
}
/** CustomMenuItem */
export interface CustomMenuItem {
    /**
     * Name of the menu item
     * @example "My Custom Menu"
     */
    name: string;
    /**
     * URL of the menu item icon. Overrides 'materialIcon'
     * @example "My Custom Menu"
     */
    iconUrl?: string;
    /**
     * Material icon name. See [Material Icons](https://fonts.google.com/icons?selected=Material+Icons) for examples
     * @example "Info"
     */
    materialIcon?: string;
    /**
     * URL to open in the iframe, when user clicks the menu item
     * @example "https://myexternalurl.com"
     */
    iframeUrl?: string;
    /**
     * Id of the Dashboard to open, when user clicks the menu item
     * @example "https://mycompany.com"
     */
    dashboardId?: string;
    /**
     * Hide the dashboard toolbar
     * @example false
     */
    hideDashboardToolbar?: boolean;
    /**
     * Set the access token of the current user to a new dashboard
     * @example false
     */
    setAccessToken?: boolean;
    /** List of child menu items */
    childMenuItems?: (CustomMenuItem)[];
}
/** CustomTimeSchedule */
export interface CustomTimeSchedule {
    dynamicValue?: DynamicValueString;
    items?: (CustomTimeScheduleItem)[];
    timezone?: string;
    type?: "ANY_TIME" | "CUSTOM" | "SPECIFIC_TIME";
}
/** CustomTimeScheduleItem */
export interface CustomTimeScheduleItem {
    /** @format int32 */
    dayOfWeek?: number;
    enabled?: boolean;
    /** @format int64 */
    endsOn?: number;
    /** @format int64 */
    startsOn?: number;
}
/** CustomTranslation */
export interface CustomTranslation {
    /** Map of locale IDs to stringified json object with custom translations */
    translationMap: Record<string, string>;
}
/** Customer */
export interface Customer {
    /** JSON object with the customer Id. Specify this field to update the customer. Referencing non-existing customer Id will cause error. Omit this field to create new customer. */
    id?: CustomerId;
    /**
     * Timestamp of the customer creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /**
     * Title of the customer
     * @example "Company A"
     */
    title: string;
    /**
     * Name of the customer. Read-only, duplicated from title for backward compatibility
     * @example "Company A"
     */
    name?: string;
    /** JSON object with Tenant Id */
    tenantId?: TenantId;
    /** JSON object with parent Customer Id */
    parentCustomerId?: CustomerId;
    /** JSON object with parent Customer Id */
    customerId?: CustomerId;
    /** JSON object with Customer or Tenant Id */
    ownerId?: EntityId;
    /**
     * Country
     * @example "US"
     */
    country?: string;
    /**
     * State
     * @example "NY"
     */
    state?: string;
    /**
     * City
     * @example "New York"
     */
    city?: string;
    /**
     * Address Line 1
     * @example "42 Broadway Suite 12-400"
     */
    address?: string;
    /** Address Line 2 */
    "address2"?: string;
    /**
     * Zip code
     * @example "10004"
     */
    zip?: string;
    /**
     * Phone number
     * @example "+1(415)777-7777"
     */
    phone?: string;
    /**
     * Email
     * @example "example@company.com"
     */
    email: string;
    /** Additional parameters of the device */
    additionalInfo?: JsonNode;
}
/** CustomerId */
export interface CustomerId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "CUSTOMER"
     */
    entityType: "CUSTOMER";
}
/** CustomerInfo */
export interface CustomerInfo {
    /** JSON object with the customer Id. Specify this field to update the customer. Referencing non-existing customer Id will cause error. Omit this field to create new customer. */
    id?: CustomerId;
    /**
     * Timestamp of the customer creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /**
     * Title of the customer
     * @example "Company A"
     */
    title: string;
    /**
     * Name of the customer. Read-only, duplicated from title for backward compatibility
     * @example "Company A"
     */
    name?: string;
    /** JSON object with Tenant Id */
    tenantId?: TenantId;
    /** JSON object with parent Customer Id */
    parentCustomerId?: CustomerId;
    /** JSON object with parent Customer Id */
    customerId?: CustomerId;
    /** JSON object with Customer or Tenant Id */
    ownerId?: EntityId;
    /**
     * Country
     * @example "US"
     */
    country?: string;
    /**
     * State
     * @example "NY"
     */
    state?: string;
    /**
     * City
     * @example "New York"
     */
    city?: string;
    /**
     * Address Line 1
     * @example "42 Broadway Suite 12-400"
     */
    address?: string;
    /** Address Line 2 */
    "address2"?: string;
    /**
     * Zip code
     * @example "10004"
     */
    zip?: string;
    /**
     * Phone number
     * @example "+1(415)777-7777"
     */
    phone?: string;
    /**
     * Email
     * @example "example@company.com"
     */
    email: string;
    /** Additional parameters of the device */
    additionalInfo?: JsonNode;
    /** Owner name */
    ownerName?: string;
    /** Groups */
    groups?: (EntityInfo)[];
}
/** CustomerUsersFilter */
export type CustomerUsersFilter = (UsersFilter & {
    /** @format uuid */
    customerId: string;
}) & ({
    /** @format uuid */
    customerId?: string;
});
/** Dashboard */
export interface Dashboard {
    /** JSON object with the dashboard Id. Specify existing dashboard Id to update the dashboard. Referencing non-existing dashboard id will cause error. Omit this field to create new dashboard. */
    id?: DashboardId;
    /**
     * Timestamp of the dashboard creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id. Tenant Id of the dashboard can't be changed. */
    tenantId?: TenantId;
    /** JSON object with Customer Id.  */
    customerId?: CustomerId;
    /** JSON object with Customer or Tenant Id */
    ownerId?: EntityId;
    /** Title of the dashboard. */
    title?: string;
    /** Thumbnail picture for rendering of the dashboards in a grid view on mobile devices. */
    image?: string;
    /**
     * List of assigned customers with their info.
     * @uniqueItems true
     */
    assignedCustomers?: (ShortCustomerInfo)[];
    /**
     * Hide dashboard from mobile devices. Useful if the dashboard is not designed for small screens.
     * @example false
     */
    mobileHide?: boolean;
    /**
     * Order on mobile devices. Useful to adjust sorting of the dashboards for mobile applications
     * @format int32
     */
    mobileOrder?: number;
    /** Same as title of the dashboard. Read-only field. Update the 'title' to change the 'name' of the dashboard. */
    name?: string;
    /** JSON object with main configuration of the dashboard: layouts, widgets, aliases, etc. The JSON structure of the dashboard configuration is quite complex. The easiest way to learn it is to export existing dashboard to JSON. */
    configuration?: JsonNode;
}
/** DashboardId */
export interface DashboardId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "DASHBOARD"
     */
    entityType: "DASHBOARD";
}
/** DashboardInfo */
export interface DashboardInfo {
    /** JSON object with the dashboard Id. Specify existing dashboard Id to update the dashboard. Referencing non-existing dashboard id will cause error. Omit this field to create new dashboard. */
    id?: DashboardId;
    /**
     * Timestamp of the dashboard creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id. Tenant Id of the dashboard can't be changed. */
    tenantId?: TenantId;
    /** JSON object with Customer Id.  */
    customerId?: CustomerId;
    /** JSON object with Customer or Tenant Id */
    ownerId?: EntityId;
    /** Title of the dashboard. */
    title?: string;
    /** Thumbnail picture for rendering of the dashboards in a grid view on mobile devices. */
    image?: string;
    /**
     * List of assigned customers with their info.
     * @uniqueItems true
     */
    assignedCustomers?: (ShortCustomerInfo)[];
    /**
     * Hide dashboard from mobile devices. Useful if the dashboard is not designed for small screens.
     * @example false
     */
    mobileHide?: boolean;
    /**
     * Order on mobile devices. Useful to adjust sorting of the dashboards for mobile applications
     * @format int32
     */
    mobileOrder?: number;
    /** Same as title of the dashboard. Read-only field. Update the 'title' to change the 'name' of the dashboard. */
    name?: string;
    /** JSON object with main configuration of the dashboard: layouts, widgets, aliases, etc. The JSON structure of the dashboard configuration is quite complex. The easiest way to learn it is to export existing dashboard to JSON. */
    configuration?: JsonNode;
    /** Owner name */
    ownerName?: string;
    /** Groups */
    groups?: (EntityInfo)[];
}
/** DebugConverterEventFilter */
export type DebugConverterEventFilter = (EventFilter & {
    error?: boolean;
    in?: string;
    metadata?: string;
    notEmpty?: boolean;
    out?: string;
    type?: string;
    /**
     * String value representing the event type
     * @example "STATS"
     */
    eventType: "DEBUG_CONVERTER" | "DEBUG_INTEGRATION" | "DEBUG_RULE_CHAIN" | "DEBUG_RULE_NODE" | "ERROR" | "LC_EVENT" | "RAW_DATA" | "STATS";
    /**
     * String value representing the server name, identifier or ip address where the platform is running
     * @example "ip-172-31-24-152"
     */
    server?: string;
    /**
     * The case insensitive 'contains' filter based on error message
     * @example "not present in the DB"
     */
    errorStr?: string;
}) & ({
    error?: boolean;
    in?: string;
    metadata?: string;
    notEmpty?: boolean;
    out?: string;
    type?: string;
    /**
     * String value representing the event type
     * @example "STATS"
     */
    eventType?: "DEBUG_CONVERTER" | "DEBUG_INTEGRATION" | "DEBUG_RULE_CHAIN" | "DEBUG_RULE_NODE" | "ERROR" | "LC_EVENT" | "RAW_DATA" | "STATS";
    /**
     * String value representing the server name, identifier or ip address where the platform is running
     * @example "ip-172-31-24-152"
     */
    server?: string;
    /**
     * The case insensitive 'contains' filter based on error message
     * @example "not present in the DB"
     */
    errorStr?: string;
});
/** DebugIntegrationEventFilter */
export type DebugIntegrationEventFilter = (EventFilter & {
    error?: boolean;
    message?: string;
    notEmpty?: boolean;
    statusIntegration?: string;
    type?: string;
    /**
     * String value representing the event type
     * @example "STATS"
     */
    eventType: "DEBUG_CONVERTER" | "DEBUG_INTEGRATION" | "DEBUG_RULE_CHAIN" | "DEBUG_RULE_NODE" | "ERROR" | "LC_EVENT" | "RAW_DATA" | "STATS";
    /**
     * String value representing the server name, identifier or ip address where the platform is running
     * @example "ip-172-31-24-152"
     */
    server?: string;
    /**
     * The case insensitive 'contains' filter based on error message
     * @example "not present in the DB"
     */
    errorStr?: string;
}) & ({
    error?: boolean;
    message?: string;
    notEmpty?: boolean;
    statusIntegration?: string;
    type?: string;
    /**
     * String value representing the event type
     * @example "STATS"
     */
    eventType?: "DEBUG_CONVERTER" | "DEBUG_INTEGRATION" | "DEBUG_RULE_CHAIN" | "DEBUG_RULE_NODE" | "ERROR" | "LC_EVENT" | "RAW_DATA" | "STATS";
    /**
     * String value representing the server name, identifier or ip address where the platform is running
     * @example "ip-172-31-24-152"
     */
    server?: string;
    /**
     * The case insensitive 'contains' filter based on error message
     * @example "not present in the DB"
     */
    errorStr?: string;
});
/** DefaultCoapDeviceTypeConfiguration */
export type DefaultCoapDeviceTypeConfiguration = (CoapDeviceTypeConfiguration & {
    transportPayloadTypeConfiguration?: TransportPayloadTypeConfiguration;
}) & ({
    transportPayloadTypeConfiguration?: TransportPayloadTypeConfiguration;
});
/** DefaultDeviceConfiguration */
export type DefaultDeviceConfiguration = (DeviceConfiguration & object);
/** DefaultDeviceProfileConfiguration */
export type DefaultDeviceProfileConfiguration = object;
/** DefaultDeviceProfileTransportConfiguration */
export type DefaultDeviceProfileTransportConfiguration = object;
/** DefaultDeviceTransportConfiguration */
export type DefaultDeviceTransportConfiguration = (DeviceTransportConfiguration & object);
/** DefaultRuleChainCreateRequest */
export interface DefaultRuleChainCreateRequest {
    /**
     * Name of the new rule chain
     * @example "Root Rule Chain"
     */
    name: string;
}
/** DefaultTenantProfileConfiguration */
export interface DefaultTenantProfileConfiguration {
    /** @format int32 */
    alarmsTtlDays?: number;
    cassandraQueryTenantRateLimitsConfiguration?: string;
    customerServerRestLimitsConfiguration?: string;
    /** @format int32 */
    defaultStorageTtlDays?: number;
    integrationMsgsPerDeviceRateLimit?: string;
    integrationMsgsPerTenantRateLimit?: string;
    /** @format int64 */
    maxAssets?: number;
    /** @format int64 */
    maxConverters?: number;
    /** @format int64 */
    maxCreatedAlarms?: number;
    /** @format int64 */
    maxCustomers?: number;
    /** @format int64 */
    maxDPStorageDays?: number;
    /** @format int64 */
    maxDashboards?: number;
    /** @format int64 */
    maxDevices?: number;
    /** @format int64 */
    maxEmails?: number;
    /** @format int64 */
    maxIntegrations?: number;
    /** @format int64 */
    maxJSExecutions?: number;
    /** @format int64 */
    maxOtaPackagesInBytes?: number;
    /** @format int64 */
    maxREExecutions?: number;
    /** @format int64 */
    maxResourceSize?: number;
    /** @format int64 */
    maxResourcesInBytes?: number;
    /** @format int64 */
    maxRuleChains?: number;
    /** @format int32 */
    maxRuleNodeExecutionsPerMessage?: number;
    /** @format int64 */
    maxSchedulerEvents?: number;
    /** @format int64 */
    maxSms?: number;
    /** @format int64 */
    maxTbelExecutions?: number;
    /** @format int64 */
    maxTransportDataPoints?: number;
    /** @format int64 */
    maxTransportMessages?: number;
    /** @format int64 */
    maxUsers?: number;
    /** @format int32 */
    maxWsSessionsPerCustomer?: number;
    /** @format int32 */
    maxWsSessionsPerPublicUser?: number;
    /** @format int32 */
    maxWsSessionsPerRegularUser?: number;
    /** @format int32 */
    maxWsSessionsPerTenant?: number;
    /** @format int64 */
    maxWsSubscriptionsPerCustomer?: number;
    /** @format int64 */
    maxWsSubscriptionsPerPublicUser?: number;
    /** @format int64 */
    maxWsSubscriptionsPerRegularUser?: number;
    /** @format int64 */
    maxWsSubscriptionsPerTenant?: number;
    /** @format int32 */
    queueStatsTtlDays?: number;
    /** @format int32 */
    rpcTtlDays?: number;
    /** @format int32 */
    ruleEngineExceptionsTtlDays?: number;
    smsEnabled?: boolean;
    tenantEntityExportRateLimit?: string;
    tenantEntityImportRateLimit?: string;
    tenantNotificationRequestsPerRuleRateLimit?: string;
    tenantNotificationRequestsRateLimit?: string;
    tenantServerRestLimitsConfiguration?: string;
    transportDeviceMsgRateLimit?: string;
    transportDeviceTelemetryDataPointsRateLimit?: string;
    transportDeviceTelemetryMsgRateLimit?: string;
    transportTenantMsgRateLimit?: string;
    transportTenantTelemetryDataPointsRateLimit?: string;
    transportTenantTelemetryMsgRateLimit?: string;
    /** @format double */
    warnThreshold?: number;
    /** @format int32 */
    wsMsgQueueLimitPerSession?: number;
    wsUpdatesPerSessionRateLimit?: string;
}
/** DeferredResult«EntityDataDiff» */
export interface DeferredResultEntityDataDiff {
    result?: object;
    setOrExpired?: boolean;
}
/** DeferredResult«EntityDataInfo» */
export interface DeferredResultEntityDataInfo {
    result?: object;
    setOrExpired?: boolean;
}
/** DeferredResult«List«BranchInfo»» */
export interface DeferredResultListBranchInfo {
    result?: object;
    setOrExpired?: boolean;
}
/** DeferredResult«List«VersionedEntityInfo»» */
export interface DeferredResultListVersionedEntityInfo {
    result?: object;
    setOrExpired?: boolean;
}
/** DeferredResult«PageData«EntityVersion»» */
export interface DeferredResultPageDataEntityVersion {
    result?: object;
    setOrExpired?: boolean;
}
/** DeferredResult«RepositorySettings» */
export interface DeferredResultRepositorySettings {
    result?: object;
    setOrExpired?: boolean;
}
/** DeferredResult«ResponseEntity» */
export interface DeferredResultResponseEntity {
    result?: object;
    setOrExpired?: boolean;
}
/** DeferredResult«Void» */
export interface DeferredResultVoid {
    result?: object;
    setOrExpired?: boolean;
}
/** DeferredResult«uuid» */
export interface DeferredResultUuid {
    result?: object;
    setOrExpired?: boolean;
}
/** DeliveryMethodNotificationTemplate */
export interface DeliveryMethodNotificationTemplate {
    body?: string;
    enabled?: boolean;
}
/** Device */
export interface Device {
    /** JSON object with the Device Id. Specify this field to update the Device. Referencing non-existing Device Id will cause error. Omit this field to create new Device. */
    id?: DeviceId;
    /**
     * Timestamp of the device creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id. Use 'assignDeviceToTenant' to change the Tenant Id. */
    tenantId?: TenantId;
    /** JSON object with Customer Id. Use 'assignDeviceToCustomer' to change the Customer Id. */
    customerId?: CustomerId;
    /** JSON object with Customer or Tenant Id */
    ownerId?: EntityId;
    /**
     * Unique Device Name in scope of Tenant
     * @example "A4B72CCDFF33"
     */
    name: string;
    /**
     * Device Profile Name
     * @example "Temperature Sensor"
     */
    type?: string;
    /**
     * Label that may be used in widgets
     * @example "Room 234 Sensor"
     */
    label?: string;
    /** JSON object with Device Profile Id. */
    deviceProfileId: DeviceProfileId;
    /** JSON object with content specific to type of transport in the device profile. */
    deviceData?: DeviceData;
    /** JSON object with Ota Package Id. */
    firmwareId?: OtaPackageId;
    /** JSON object with Ota Package Id. */
    softwareId?: OtaPackageId;
    /** Additional parameters of the device */
    additionalInfo?: JsonNode;
}
/** DeviceActivityNotificationRuleTriggerConfig */
export type DeviceActivityNotificationRuleTriggerConfig = (NotificationRuleTriggerConfig & {
    /** @uniqueItems true */
    deviceProfiles?: (string)[];
    /** @uniqueItems true */
    devices?: (string)[];
    /** @uniqueItems true */
    notifyOn?: ("ACTIVE" | "INACTIVE")[];
    triggerType?: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
}) & ({
    /** @uniqueItems true */
    deviceProfiles?: (string)[];
    /** @uniqueItems true */
    devices?: (string)[];
    /** @uniqueItems true */
    notifyOn?: ("ACTIVE" | "INACTIVE")[];
    triggerType?: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
});
/** DeviceConfiguration */
export type DeviceConfiguration = object;
/** DeviceCredentials */
export interface DeviceCredentials {
    /**
     * The Id is automatically generated during device creation. Use 'getDeviceCredentialsByDeviceId' to obtain the id based on device id. Use 'updateDeviceCredentials' to update device credentials.
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: DeviceCredentialsId;
    /**
     * Timestamp of the device credentials creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with the device Id. */
    deviceId: DeviceId;
    /** Type of the credentials */
    credentialsType?: "ACCESS_TOKEN" | "LWM2M_CREDENTIALS" | "MQTT_BASIC" | "X509_CERTIFICATE";
    /**
     * Unique Credentials Id per platform instance. Used to lookup credentials from the database. By default, new access token for your device. Depends on the type of the credentials.
     * @example "Access token or other value that depends on the credentials type"
     */
    credentialsId: string;
    /**
     * Value of the credentials. Null in case of ACCESS_TOKEN credentials type. Base64 value in case of X509_CERTIFICATE. Complex object in case of MQTT_BASIC and LWM2M_CREDENTIALS
     * @example "Null in case of ACCESS_TOKEN. See model definition."
     */
    credentialsValue?: string;
}
/** DeviceCredentialsId */
export interface DeviceCredentialsId {
    /**
     * string
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
}
/** DeviceData */
export interface DeviceData {
    /** Device configuration for device profile type. DEFAULT is only supported value for now */
    configuration?: DeviceConfiguration;
    /** Device transport configuration used to connect the device */
    transportConfiguration?: DeviceTransportConfiguration;
}
/** DeviceExportData */
export type DeviceExportData = (EntityExportDataObject & {
    attributes?: Record<string, (AttributeExportData)[]>;
    credentials?: DeviceCredentials;
    entity?: Device;
    entityType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    relations?: (EntityRelation)[];
}) & ({
    attributes?: Record<string, (AttributeExportData)[]>;
    credentials?: DeviceCredentials;
    entity?: Device;
    entityType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    relations?: (EntityRelation)[];
});
/** DeviceGroupOtaPackage */
export interface DeviceGroupOtaPackage {
    groupId?: EntityGroupId;
    /** @format uuid */
    id?: string;
    otaPackageId?: OtaPackageId;
    otaPackageType?: "FIRMWARE" | "SOFTWARE";
    /** @format int64 */
    otaPackageUpdateTime?: number;
}
/** DeviceId */
export interface DeviceId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "DEVICE"
     */
    entityType: "DEVICE";
}
/** DeviceInfo */
export interface DeviceInfo {
    /** JSON object with the Device Id. Specify this field to update the Device. Referencing non-existing Device Id will cause error. Omit this field to create new Device. */
    id?: DeviceId;
    /**
     * Timestamp of the device creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id. Use 'assignDeviceToTenant' to change the Tenant Id. */
    tenantId?: TenantId;
    /** JSON object with Customer Id. Use 'assignDeviceToCustomer' to change the Customer Id. */
    customerId?: CustomerId;
    /** JSON object with Customer or Tenant Id */
    ownerId?: EntityId;
    /**
     * Unique Device Name in scope of Tenant
     * @example "A4B72CCDFF33"
     */
    name: string;
    /**
     * Device Profile Name
     * @example "Temperature Sensor"
     */
    type?: string;
    /**
     * Label that may be used in widgets
     * @example "Room 234 Sensor"
     */
    label?: string;
    /** JSON object with Device Profile Id. */
    deviceProfileId: DeviceProfileId;
    /** JSON object with content specific to type of transport in the device profile. */
    deviceData?: DeviceData;
    /** JSON object with Ota Package Id. */
    firmwareId?: OtaPackageId;
    /** JSON object with Ota Package Id. */
    softwareId?: OtaPackageId;
    /** Additional parameters of the device */
    additionalInfo?: JsonNode;
    /** Owner name */
    ownerName?: string;
    /** Groups */
    groups?: (EntityInfo)[];
    /**
     * Device active flag.
     * @example false
     */
    active?: boolean;
}
/** DeviceProfile */
export interface DeviceProfile {
    /** JSON object with the device profile Id. Specify this field to update the device profile. Referencing non-existing device profile Id will cause error. Omit this field to create new device profile. */
    id?: DeviceProfileId;
    /**
     * Timestamp of the profile creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id that owns the profile. */
    tenantId?: TenantId;
    /**
     * Unique Device Profile Name in scope of Tenant.
     * @example "Moisture Sensor"
     */
    name?: string;
    /**
     * Used to mark the default profile. Default profile is used when the device profile is not specified during device creation.
     * @example false
     */
    default?: boolean;
    /** Reference to the dashboard. Used in the mobile application to open the default dashboard when user navigates to device details. */
    defaultDashboardId?: DashboardId;
    /** Reference to the rule chain. If present, the specified rule chain will be used to process all messages related to device, including telemetry, attribute updates, etc. Otherwise, the root rule chain will be used to process those messages. */
    defaultRuleChainId?: RuleChainId;
    /** Rule engine queue name. If present, the specified queue will be used to store all unprocessed messages related to device, including telemetry, attribute updates, etc. Otherwise, the 'Main' queue will be used to store those messages. */
    defaultQueueName?: string;
    /** Reference to the firmware OTA package. If present, the specified package will be used as default device firmware.  */
    firmwareId?: OtaPackageId;
    /** Reference to the software OTA package. If present, the specified package will be used as default device software.  */
    softwareId?: OtaPackageId;
    /** Device Profile description.  */
    description?: string;
    /** Either URL or Base64 data of the icon. Used in the mobile application to visualize set of device profiles in the grid view.  */
    image?: string;
    /** Unique provisioning key used by 'Device Provisioning' feature. */
    provisionDeviceKey?: string;
    /** Type of the transport used to connect the device. Default transport supports HTTP, CoAP and MQTT. */
    transportType?: "COAP" | "DEFAULT" | "LWM2M" | "MQTT" | "SNMP";
    /** Provisioning strategy. */
    provisionType?: "ALLOW_CREATE_NEW_DEVICES" | "CHECK_PRE_PROVISIONED_DEVICES" | "DISABLED" | "X509_CERTIFICATE_CHAIN";
    /** Complex JSON object that includes addition device profile configuration (transport, alarm rules, etc). */
    profileData?: DeviceProfileData;
    /** Type of the profile. Always 'DEFAULT' for now. Reserved for future use. */
    type?: "DEFAULT";
    /** Reference to the edge rule chain. If present, the specified edge rule chain will be used on the edge to process all messages related to device, including telemetry, attribute updates, etc. Otherwise, the edge root rule chain will be used to process those messages. */
    defaultEdgeRuleChainId?: RuleChainId;
}
/** DeviceProfileAlarm */
export interface DeviceProfileAlarm {
    /**
     * String value representing the alarm rule id
     * @example "highTemperatureAlarmID"
     */
    id?: string;
    /**
     * String value representing type of the alarm
     * @example "High Temperature Alarm"
     */
    alarmType?: string;
    /** Complex JSON object representing create alarm rules. The unique create alarm rule can be created for each alarm severity type. There can be 5 create alarm rules configured per a single alarm type. See method implementation notes and AlarmRule model for more details */
    createRules?: Record<string, AlarmRule>;
    /** JSON object representing clear alarm rule */
    clearRule?: AlarmRule;
    /**
     * Propagation flag to specify if alarm should be propagated to parent entities of alarm originator
     * @example true
     */
    propagate?: boolean;
    /**
     * Propagation flag to specify if alarm should be propagated to the owner (tenant or customer) of alarm originator
     * @example true
     */
    propagateToOwner?: boolean;
    /**
     * Propagation flag to specify if alarm should be propagated to the owner (tenant or customer) and all parent owners in the customer hierarchy
     * @example true
     */
    propagateToOwnerHierarchy?: boolean;
    /**
     * Propagation flag to specify if alarm should be propagated to the tenant entity
     * @example true
     */
    propagateToTenant?: boolean;
    /** JSON array of relation types that should be used for propagation. By default, 'propagateRelationTypes' array is empty which means that the alarm will be propagated based on any relation type to parent entities. This parameter should be used only in case when 'propagate' parameter is set to true, otherwise, 'propagateRelationTypes' array will be ignored. */
    propagateRelationTypes?: (string)[];
}
/** DeviceProfileConfiguration */
export type DeviceProfileConfiguration = object;
/** DeviceProfileData */
export interface DeviceProfileData {
    /** JSON object of device profile configuration */
    configuration?: DeviceProfileConfiguration;
    /** JSON object of device profile transport configuration */
    transportConfiguration?: DeviceProfileTransportConfiguration;
    /** JSON object of provisioning strategy type per device profile */
    provisionConfiguration?: DeviceProfileProvisionConfiguration;
    /** JSON array of alarm rules configuration per device profile */
    alarms?: (DeviceProfileAlarm)[];
}
/** DeviceProfileId */
export interface DeviceProfileId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "DEVICE_PROFILE"
     */
    entityType: "DEVICE_PROFILE";
}
/** DeviceProfileInfo */
export interface DeviceProfileInfo {
    /** JSON object with the entity Id.  */
    id?: EntityId;
    /** Entity Name */
    name?: string;
    /** Either URL or Base64 data of the icon. Used in the mobile application to visualize set of device profiles in the grid view.  */
    image?: string;
    /** Reference to the dashboard. Used in the mobile application to open the default dashboard when user navigates to device details. */
    defaultDashboardId?: DashboardId;
    /** Type of the profile. Always 'DEFAULT' for now. Reserved for future use. */
    type?: "DEFAULT";
    /** Type of the transport used to connect the device. Default transport supports HTTP, CoAP and MQTT. */
    transportType?: "COAP" | "DEFAULT" | "LWM2M" | "MQTT" | "SNMP";
    /** Tenant id. */
    tenantId?: TenantId;
}
/** DeviceProfileProvisionConfiguration */
export interface DeviceProfileProvisionConfiguration {
    provisionDeviceSecret?: string;
}
/** DeviceProfileTransportConfiguration */
export type DeviceProfileTransportConfiguration = object;
/** DeviceSearchQuery */
export interface DeviceSearchQuery {
    /** Type of the relation between root entity and device (e.g. 'Contains' or 'Manages'). */
    relationType?: string;
    /** Array of device types to filter the related entities (e.g. 'Temperature Sensor', 'Smoke Sensor'). */
    deviceTypes?: (string)[];
    /** Main search parameters. */
    parameters?: RelationsSearchParameters;
}
/** DeviceSearchQueryFilter */
export type DeviceSearchQueryFilter = (EntityFilter & {
    deviceTypes?: (string)[];
    direction?: "FROM" | "TO";
    fetchLastLevelOnly?: boolean;
    /** @format int32 */
    maxLevel?: number;
    relationType?: string;
    rootEntity?: EntityId;
}) & ({
    deviceTypes?: (string)[];
    direction?: "FROM" | "TO";
    fetchLastLevelOnly?: boolean;
    /** @format int32 */
    maxLevel?: number;
    relationType?: string;
    rootEntity?: EntityId;
});
/** DeviceTransportConfiguration */
export type DeviceTransportConfiguration = object;
/** DeviceTypeFilter */
export type DeviceTypeFilter = (EntityFilter & {
    deviceNameFilter?: string;
    deviceTypes?: (string)[];
}) & ({
    deviceNameFilter?: string;
    deviceTypes?: (string)[];
});
/** DisabledDeviceProfileProvisionConfiguration */
export type DisabledDeviceProfileProvisionConfiguration = (DeviceProfileProvisionConfiguration & {
    provisionDeviceSecret?: string;
}) & ({
    provisionDeviceSecret?: string;
});
/** DurationAlarmConditionSpec */
export type DurationAlarmConditionSpec = (AlarmConditionSpec & {
    predicate?: FilterPredicateValueLong;
    unit?: "DAYS" | "HOURS" | "MICROSECONDS" | "MILLISECONDS" | "MINUTES" | "NANOSECONDS" | "SECONDS";
}) & ({
    predicate?: FilterPredicateValueLong;
    unit?: "DAYS" | "HOURS" | "MICROSECONDS" | "MILLISECONDS" | "MINUTES" | "NANOSECONDS" | "SECONDS";
});
/** DynamicValue«boolean» */
export interface DynamicValueBoolean {
    inherit?: boolean;
    sourceAttribute?: string;
    sourceType?: "CURRENT_CUSTOMER" | "CURRENT_DEVICE" | "CURRENT_TENANT" | "CURRENT_USER";
}
/** DynamicValue«double» */
export interface DynamicValueDouble {
    inherit?: boolean;
    sourceAttribute?: string;
    sourceType?: "CURRENT_CUSTOMER" | "CURRENT_DEVICE" | "CURRENT_TENANT" | "CURRENT_USER";
}
/** DynamicValue«int» */
export interface DynamicValueInt {
    inherit?: boolean;
    sourceAttribute?: string;
    sourceType?: "CURRENT_CUSTOMER" | "CURRENT_DEVICE" | "CURRENT_TENANT" | "CURRENT_USER";
}
/** DynamicValue«long» */
export interface DynamicValueLong {
    inherit?: boolean;
    sourceAttribute?: string;
    sourceType?: "CURRENT_CUSTOMER" | "CURRENT_DEVICE" | "CURRENT_TENANT" | "CURRENT_USER";
}
/** DynamicValue«string» */
export interface DynamicValueString {
    inherit?: boolean;
    sourceAttribute?: string;
    sourceType?: "CURRENT_CUSTOMER" | "CURRENT_DEVICE" | "CURRENT_TENANT" | "CURRENT_USER";
}
/** Edge */
export interface Edge {
    additionalInfo?: JsonNode;
    ownerId?: EntityId;
    /** JSON object with the Edge Id. Specify this field to update the Edge. Referencing non-existing Edge Id will cause error. Omit this field to create new Edge. */
    id?: EdgeId;
    /**
     * Timestamp of the edge creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id. Use 'assignDeviceToTenant' to change the Tenant Id. */
    tenantId?: TenantId;
    /** JSON object with Customer Id. Use 'assignEdgeToCustomer' to change the Customer Id. */
    customerId?: CustomerId;
    /** JSON object with Root Rule Chain Id. Use 'setEdgeRootRuleChain' to change the Root Rule Chain Id. */
    rootRuleChainId?: RuleChainId;
    /**
     * Unique Edge Name in scope of Tenant
     * @example "Silo_A_Edge"
     */
    name: string;
    /**
     * Edge type
     * @example "Silos"
     */
    type: string;
    /**
     * Label that may be used in widgets
     * @example "Silo Edge on far field"
     */
    label?: string;
    /** Edge routing key ('username') to authorize on cloud */
    routingKey: string;
    /** Edge secret ('password') to authorize on cloud */
    secret: string;
    /**
     * Edge license key obtained from license portal
     * @example "AgcnI24Z06XC&m6Sxsdgf"
     */
    edgeLicenseKey: string;
    /**
     * Edge uses this cloud URL to activate and periodically check it's license
     * @example "https://thingsboard.cloud"
     */
    cloudEndpoint: string;
}
/** EdgeEvent */
export interface EdgeEvent {
    action?: "ADDED" | "ADDED_TO_ENTITY_GROUP" | "ALARM_ACK" | "ALARM_ASSIGNED" | "ALARM_CLEAR" | "ALARM_UNASSIGNED" | "ASSIGNED_TO_EDGE" | "ATTRIBUTES_DELETED" | "ATTRIBUTES_UPDATED" | "CHANGE_OWNER" | "CREDENTIALS_REQUEST" | "CREDENTIALS_UPDATED" | "DELETED" | "ENTITY_MERGE_REQUEST" | "POST_ATTRIBUTES" | "RELATION_ADD_OR_UPDATE" | "RELATION_DELETED" | "REMOVED_FROM_ENTITY_GROUP" | "RPC_CALL" | "TIMESERIES_UPDATED" | "UNASSIGNED_FROM_EDGE" | "UPDATED";
    body?: JsonNode;
    /** @format int64 */
    createdTime?: number;
    edgeId?: EdgeId;
    /** @format uuid */
    entityGroupId?: string;
    /** @format uuid */
    entityId?: string;
    id?: EdgeEventId;
    /** @format int64 */
    seqId?: number;
    tenantId?: TenantId;
    type?: "ADMIN_SETTINGS" | "ALARM" | "ASSET" | "ASSET_PROFILE" | "CONVERTER" | "CUSTOMER" | "CUSTOM_TRANSLATION" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "LOGIN_WHITE_LABELING" | "MAIL_TEMPLATES" | "OTA_PACKAGE" | "QUEUE" | "RELATION" | "ROLE" | "RULE_CHAIN" | "RULE_CHAIN_METADATA" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WHITE_LABELING" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    uid?: string;
}
/** EdgeEventId */
export interface EdgeEventId {
    /**
     * string
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
}
/** EdgeId */
export interface EdgeId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "EDGE"
     */
    entityType: "EDGE";
}
/** EdgeInfo */
export interface EdgeInfo {
    additionalInfo?: JsonNode;
    ownerId?: EntityId;
    /** JSON object with the Edge Id. Specify this field to update the Edge. Referencing non-existing Edge Id will cause error. Omit this field to create new Edge. */
    id?: EdgeId;
    /**
     * Timestamp of the edge creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id. Use 'assignDeviceToTenant' to change the Tenant Id. */
    tenantId?: TenantId;
    /** JSON object with Customer Id. Use 'assignEdgeToCustomer' to change the Customer Id. */
    customerId?: CustomerId;
    /** JSON object with Root Rule Chain Id. Use 'setEdgeRootRuleChain' to change the Root Rule Chain Id. */
    rootRuleChainId?: RuleChainId;
    /**
     * Unique Edge Name in scope of Tenant
     * @example "Silo_A_Edge"
     */
    name: string;
    /**
     * Edge type
     * @example "Silos"
     */
    type: string;
    /**
     * Label that may be used in widgets
     * @example "Silo Edge on far field"
     */
    label?: string;
    /** Edge routing key ('username') to authorize on cloud */
    routingKey: string;
    /** Edge secret ('password') to authorize on cloud */
    secret: string;
    /**
     * Edge license key obtained from license portal
     * @example "AgcnI24Z06XC&m6Sxsdgf"
     */
    edgeLicenseKey: string;
    /**
     * Edge uses this cloud URL to activate and periodically check it's license
     * @example "https://thingsboard.cloud"
     */
    cloudEndpoint: string;
    /** Owner name */
    ownerName?: string;
    /** Groups */
    groups?: (EntityInfo)[];
}
/** EdgeInstructions */
export interface EdgeInstructions {
    /** Markdown with install/upgrade instructions */
    instructions?: string;
}
/** EdgeSearchQuery */
export interface EdgeSearchQuery {
    /** Type of the relation between root entity and edge (e.g. 'Contains' or 'Manages'). */
    relationType?: string;
    /** Array of edge types to filter the related entities (e.g. 'Silos', 'Stores'). */
    edgeTypes?: (string)[];
    /** Main search parameters. */
    parameters?: RelationsSearchParameters;
}
/** EdgeSearchQueryFilter */
export type EdgeSearchQueryFilter = (EntityFilter & {
    direction?: "FROM" | "TO";
    edgeTypes?: (string)[];
    fetchLastLevelOnly?: boolean;
    /** @format int32 */
    maxLevel?: number;
    relationType?: string;
    rootEntity?: EntityId;
}) & ({
    direction?: "FROM" | "TO";
    edgeTypes?: (string)[];
    fetchLastLevelOnly?: boolean;
    /** @format int32 */
    maxLevel?: number;
    relationType?: string;
    rootEntity?: EntityId;
});
/** EdgeTypeFilter */
export type EdgeTypeFilter = (EntityFilter & {
    edgeNameFilter?: string;
    edgeTypes?: (string)[];
}) & ({
    edgeNameFilter?: string;
    edgeTypes?: (string)[];
});
/** EfentoCoapDeviceTypeConfiguration */
export type EfentoCoapDeviceTypeConfiguration = object;
/** EmailDeliveryMethodNotificationTemplate */
export type EmailDeliveryMethodNotificationTemplate = (DeliveryMethodNotificationTemplate & {
    body?: string;
    enabled?: boolean;
    subject?: string;
}) & ({
    body?: string;
    enabled?: boolean;
    subject?: string;
});
/** EmailTwoFaAccountConfig */
export interface EmailTwoFaAccountConfig {
    email: string;
    useByDefault?: boolean;
}
/** EmailTwoFaProviderConfig */
export type EmailTwoFaProviderConfig = (TwoFaProviderConfig & {
    /** @format int32 */
    verificationCodeLifetime?: number;
}) & ({
    /** @format int32 */
    verificationCodeLifetime?: number;
});
/** EntitiesByGroupNameFilter */
export type EntitiesByGroupNameFilter = (EntityFilter & {
    entityGroupNameFilter?: string;
    groupType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    ownerId?: EntityId;
}) & ({
    entityGroupNameFilter?: string;
    groupType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    ownerId?: EntityId;
});
/** EntitiesLimitNotificationRuleTriggerConfig */
export type EntitiesLimitNotificationRuleTriggerConfig = (NotificationRuleTriggerConfig & {
    /** @uniqueItems true */
    entityTypes?: ("ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE")[];
    /**
     * @format float
     * @max 1
     * @exclusiveMax false
     */
    threshold?: number;
    triggerType?: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
}) & ({
    /** @uniqueItems true */
    entityTypes?: ("ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE")[];
    /**
     * @format float
     * @max 1
     * @exclusiveMax false
     */
    threshold?: number;
    triggerType?: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
});
/** EntityActionNotificationRuleTriggerConfig */
export type EntityActionNotificationRuleTriggerConfig = (NotificationRuleTriggerConfig & {
    created?: boolean;
    deleted?: boolean;
    /** @uniqueItems true */
    entityTypes?: ("ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE")[];
    triggerType?: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
    updated?: boolean;
}) & ({
    created?: boolean;
    deleted?: boolean;
    /** @uniqueItems true */
    entityTypes?: ("ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE")[];
    triggerType?: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
    updated?: boolean;
});
/** EntityCountQuery */
export interface EntityCountQuery {
    entityFilter?: EntityFilter;
    keyFilters?: (KeyFilter)[];
}
/** EntityData */
export interface EntityData {
    aggLatest?: Record<string, ComparisonTsValue>;
    entityId?: EntityId;
    latest?: Record<string, object>;
    readAttrs?: boolean;
    readTs?: boolean;
    timeseries?: Record<string, (TsValue)[]>;
}
/** EntityDataDiff */
export interface EntityDataDiff {
    currentVersion?: EntityExportDataObject;
    otherVersion?: EntityExportDataObject;
}
/** EntityDataInfo */
export interface EntityDataInfo {
    hasAttributes?: boolean;
    hasCredentials?: boolean;
    hasGroupEntities?: boolean;
    hasPermissions?: boolean;
    hasRelations?: boolean;
}
/** EntityDataPageLink */
export interface EntityDataPageLink {
    dynamic?: boolean;
    /** @format int32 */
    page?: number;
    /** @format int32 */
    pageSize?: number;
    sortOrder?: EntityDataSortOrder;
    textSearch?: string;
}
/** EntityDataQuery */
export interface EntityDataQuery {
    entityFields?: (EntityKey)[];
    entityFilter?: EntityFilter;
    keyFilters?: (KeyFilter)[];
    latestValues?: (EntityKey)[];
    pageLink?: EntityDataPageLink;
}
/** EntityDataSortOrder */
export interface EntityDataSortOrder {
    direction?: "ASC" | "DESC";
    key?: EntityKey;
}
/** EntityExportData«object» */
export interface EntityExportDataObject {
    attributes?: Record<string, (AttributeExportData)[]>;
    entity?: object;
    entityType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    relations?: (EntityRelation)[];
}
/** EntityFilter */
export type EntityFilter = object;
/** EntityGroup */
export interface EntityGroup {
    /** JSON object with the EntityGroupId Id. Specify this field to update the Entity Group. Referencing non-existing Entity Group Id will cause error. Omit this field to create new Entity Group. */
    id?: EntityGroupId;
    /**
     * Timestamp of the entity group creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with the owner of the group - Tenant or Customer Id. */
    ownerId?: EntityId;
    /**
     * Name of the entity group
     * @example "Water meters"
     */
    name: string;
    type: "ASSET" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "EDGE" | "ENTITY_VIEW" | "USER";
    /** Arbitrary JSON with additional information about the group */
    additionalInfo?: JsonNode;
    /** JSON with the configuration for UI components: list of columns, settings, actions, etc  */
    configuration?: JsonNode;
    /**
     * Indicates special group 'All' that contains all entities and can't be deleted.
     * @example false
     */
    groupAll?: boolean;
    /**
     * Indicates special edge group 'All' that contains all entities and can't be deleted.
     * @example false
     */
    edgeGroupAll?: boolean;
}
/** EntityGroupExportData */
export type EntityGroupExportData = (EntityExportDataObject & {
    attributes?: Record<string, (AttributeExportData)[]>;
    entity?: EntityGroup;
    entityType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    groupEntities?: boolean;
    permissions?: (GroupPermission)[];
    relations?: (EntityRelation)[];
}) & ({
    attributes?: Record<string, (AttributeExportData)[]>;
    entity?: EntityGroup;
    entityType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    groupEntities?: boolean;
    permissions?: (GroupPermission)[];
    relations?: (EntityRelation)[];
});
/** EntityGroupFilter */
export type EntityGroupFilter = (EntityFilter & {
    entityGroup?: string;
    groupType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
}) & ({
    entityGroup?: string;
    groupType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
});
/** EntityGroupId */
export interface EntityGroupId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "ENTITY_GROUP"
     */
    entityType: "ENTITY_GROUP";
}
/** EntityGroupInfo */
export interface EntityGroupInfo {
    /** JSON object with the EntityGroupId Id. Specify this field to update the Entity Group. Referencing non-existing Entity Group Id will cause error. Omit this field to create new Entity Group. */
    id?: EntityGroupId;
    /**
     * Timestamp of the entity group creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with the owner of the group - Tenant or Customer Id. */
    ownerId?: EntityId;
    /**
     * Name of the entity group
     * @example "Water meters"
     */
    name: string;
    type: "ASSET" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "EDGE" | "ENTITY_VIEW" | "USER";
    /** Arbitrary JSON with additional information about the group */
    additionalInfo?: JsonNode;
    /** JSON with the configuration for UI components: list of columns, settings, actions, etc  */
    configuration?: JsonNode;
    /**
     * Indicates special group 'All' that contains all entities and can't be deleted.
     * @example false
     */
    groupAll?: boolean;
    /**
     * Indicates special edge group 'All' that contains all entities and can't be deleted.
     * @example false
     */
    edgeGroupAll?: boolean;
    /**
     * List of the entity group owners.
     * @uniqueItems true
     */
    ownerIds: (EntityId)[];
}
/** EntityGroupListFilter */
export type EntityGroupListFilter = (EntityFilter & {
    entityGroupList?: (string)[];
    groupType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
}) & ({
    entityGroupList?: (string)[];
    groupType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
});
/** EntityGroupNameFilter */
export type EntityGroupNameFilter = (EntityFilter & {
    entityGroupNameFilter?: string;
    groupType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
}) & ({
    entityGroupNameFilter?: string;
    groupType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
});
/** EntityId */
export interface EntityId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /** @example "DEVICE" */
    entityType: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
}
/** EntityInfo */
export interface EntityInfo {
    /** JSON object with the entity Id.  */
    id?: EntityId;
    /** Entity Name */
    name?: string;
}
/** EntityKey */
export interface EntityKey {
    key?: string;
    type?: "ALARM_FIELD" | "ATTRIBUTE" | "CLIENT_ATTRIBUTE" | "ENTITY_FIELD" | "SERVER_ATTRIBUTE" | "SHARED_ATTRIBUTE" | "TIME_SERIES";
}
/** EntityListFilter */
export type EntityListFilter = (EntityFilter & {
    entityList?: (string)[];
    entityType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
}) & ({
    entityList?: (string)[];
    entityType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
});
/** EntityLoadError */
export interface EntityLoadError {
    message?: string;
    source?: EntityId;
    target?: EntityId;
    type?: string;
}
/** EntityNameFilter */
export type EntityNameFilter = (EntityFilter & {
    entityNameFilter?: string;
    entityType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
}) & ({
    entityNameFilter?: string;
    entityType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
});
/** EntityRelation */
export interface EntityRelation {
    /** JSON object with [from] Entity Id. */
    from?: EntityId;
    /** JSON object with [to] Entity Id. */
    to?: EntityId;
    /**
     * String value of relation type.
     * @example "Contains"
     */
    type?: string;
    /**
     * Represents the type group of the relation.
     * @example "COMMON"
     */
    typeGroup?: "COMMON" | "DASHBOARD" | "EDGE" | "EDGE_AUTO_ASSIGN_RULE_CHAIN" | "FROM_ENTITY_GROUP" | "RULE_CHAIN" | "RULE_NODE";
    /** Additional parameters of the relation */
    additionalInfo?: JsonNode;
}
/** EntityRelationInfo */
export interface EntityRelationInfo {
    /** JSON object with [from] Entity Id. */
    from?: EntityId;
    /** JSON object with [to] Entity Id. */
    to?: EntityId;
    /**
     * String value of relation type.
     * @example "Contains"
     */
    type?: string;
    /**
     * Represents the type group of the relation.
     * @example "COMMON"
     */
    typeGroup?: "COMMON" | "DASHBOARD" | "EDGE" | "EDGE_AUTO_ASSIGN_RULE_CHAIN" | "FROM_ENTITY_GROUP" | "RULE_CHAIN" | "RULE_NODE";
    /** Additional parameters of the relation */
    additionalInfo?: JsonNode;
    /**
     * Name of the entity for [from] direction.
     * @example "A4B72CCDFF33"
     */
    fromName?: string;
    /**
     * Name of the entity for [to] direction.
     * @example "A4B72CCDFF35"
     */
    toName?: string;
}
/** EntityRelationsQuery */
export interface EntityRelationsQuery {
    /** Main filters. */
    filters?: (RelationEntityTypeFilter)[];
    /** Main search parameters. */
    parameters?: RelationsSearchParameters;
}
/** EntitySubtype */
export interface EntitySubtype {
    entityType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    tenantId?: TenantId;
    type?: string;
}
/** EntityTypeFilter */
export type EntityTypeFilter = (EntityFilter & {
    entityType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
}) & ({
    entityType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
});
/** EntityTypeLoadResult */
export interface EntityTypeLoadResult {
    /** @format int32 */
    created?: number;
    /** @format int32 */
    deleted?: number;
    entityType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    /** @format int32 */
    groupsCreated?: number;
    /** @format int32 */
    groupsDeleted?: number;
    /** @format int32 */
    groupsUpdated?: number;
    /** @format int32 */
    updated?: number;
}
/** EntityTypeVersionCreateConfig */
export interface EntityTypeVersionCreateConfig {
    allEntities?: boolean;
    entityIds?: (string)[];
    saveAttributes?: boolean;
    saveCredentials?: boolean;
    saveGroupEntities?: boolean;
    savePermissions?: boolean;
    saveRelations?: boolean;
    syncStrategy?: "MERGE" | "OVERWRITE";
}
/** EntityTypeVersionLoadConfig */
export interface EntityTypeVersionLoadConfig {
    autoGenerateIntegrationKey?: boolean;
    findExistingEntityByName?: boolean;
    loadAttributes?: boolean;
    loadCredentials?: boolean;
    loadGroupEntities?: boolean;
    loadPermissions?: boolean;
    loadRelations?: boolean;
    removeOtherEntities?: boolean;
}
/** EntityTypeVersionLoadRequest */
export type EntityTypeVersionLoadRequest = (VersionLoadRequest & {
    entityTypes?: Record<string, EntityTypeVersionLoadConfig>;
    type?: "ENTITY_TYPE" | "SINGLE_ENTITY";
    versionId?: string;
}) & ({
    entityTypes?: Record<string, EntityTypeVersionLoadConfig>;
    type?: "ENTITY_TYPE" | "SINGLE_ENTITY";
    versionId?: string;
});
/** EntityVersion */
export interface EntityVersion {
    author?: string;
    id?: string;
    name?: string;
    /** @format int64 */
    timestamp?: number;
}
/** EntityView */
export interface EntityView {
    /** JSON object with the Entity View Id. Specify this field to update the Entity View. Referencing non-existing Entity View Id will cause error. Omit this field to create new Entity View. */
    id?: EntityViewId;
    /**
     * Timestamp of the Entity View creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id. */
    tenantId?: TenantId;
    /** JSON object with Customer Id. Use 'assignEntityViewToCustomer' to change the Customer Id. */
    customerId?: CustomerId;
    /**
     * Entity View name
     * @example "A4B72CCDFF33"
     */
    name: string;
    /**
     * Device Profile Name
     * @example "Temperature Sensor"
     */
    type: string;
    /** JSON object with the referenced Entity Id (Device or Asset). */
    entityId?: EntityId;
    /** Set of telemetry and attribute keys to expose via Entity View. */
    keys?: TelemetryEntityView;
    /**
     * Represents the start time of the interval that is used to limit access to target device telemetry. Customer will not be able to see entity telemetry that is outside the specified interval;
     * @format int64
     */
    startTimeMs?: number;
    /**
     * Represents the end time of the interval that is used to limit access to target device telemetry. Customer will not be able to see entity telemetry that is outside the specified interval;
     * @format int64
     */
    endTimeMs?: number;
    /** Additional parameters of the device */
    additionalInfo?: JsonNode;
    /** JSON object with Customer or Tenant Id */
    ownerId?: EntityId;
}
/** EntityViewId */
export interface EntityViewId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "ENTITY_VIEW"
     */
    entityType: "ENTITY_VIEW";
}
/** EntityViewInfo */
export interface EntityViewInfo {
    /** JSON object with the Entity View Id. Specify this field to update the Entity View. Referencing non-existing Entity View Id will cause error. Omit this field to create new Entity View. */
    id?: EntityViewId;
    /**
     * Timestamp of the Entity View creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id. */
    tenantId?: TenantId;
    /** JSON object with Customer Id. Use 'assignEntityViewToCustomer' to change the Customer Id. */
    customerId?: CustomerId;
    /**
     * Entity View name
     * @example "A4B72CCDFF33"
     */
    name: string;
    /**
     * Device Profile Name
     * @example "Temperature Sensor"
     */
    type: string;
    /** JSON object with the referenced Entity Id (Device or Asset). */
    entityId?: EntityId;
    /** Set of telemetry and attribute keys to expose via Entity View. */
    keys?: TelemetryEntityView;
    /**
     * Represents the start time of the interval that is used to limit access to target device telemetry. Customer will not be able to see entity telemetry that is outside the specified interval;
     * @format int64
     */
    startTimeMs?: number;
    /**
     * Represents the end time of the interval that is used to limit access to target device telemetry. Customer will not be able to see entity telemetry that is outside the specified interval;
     * @format int64
     */
    endTimeMs?: number;
    /** Additional parameters of the device */
    additionalInfo?: JsonNode;
    /** Owner name */
    ownerName?: string;
    /** Groups */
    groups?: (EntityInfo)[];
    /** JSON object with Customer or Tenant Id */
    ownerId?: EntityId;
}
/** EntityViewSearchQuery */
export interface EntityViewSearchQuery {
    /** Type of the relation between root entity and device (e.g. 'Contains' or 'Manages'). */
    relationType?: string;
    /** Array of entity view types to filter the related entities (e.g. 'Temperature Sensor', 'Smoke Sensor'). */
    entityViewTypes?: (string)[];
    /** Main search parameters. */
    parameters?: RelationsSearchParameters;
}
/** EntityViewSearchQueryFilter */
export type EntityViewSearchQueryFilter = (EntityFilter & {
    direction?: "FROM" | "TO";
    entityViewTypes?: (string)[];
    fetchLastLevelOnly?: boolean;
    /** @format int32 */
    maxLevel?: number;
    relationType?: string;
    rootEntity?: EntityId;
}) & ({
    direction?: "FROM" | "TO";
    entityViewTypes?: (string)[];
    fetchLastLevelOnly?: boolean;
    /** @format int32 */
    maxLevel?: number;
    relationType?: string;
    rootEntity?: EntityId;
});
/** EntityViewTypeFilter */
export type EntityViewTypeFilter = (EntityFilter & {
    entityViewNameFilter?: string;
    entityViewTypes?: (string)[];
}) & ({
    entityViewNameFilter?: string;
    entityViewTypes?: (string)[];
});
/** ErrorEventFilter */
export type ErrorEventFilter = (EventFilter & {
    notEmpty?: boolean;
    /**
     * String value representing the event type
     * @example "STATS"
     */
    eventType: "DEBUG_CONVERTER" | "DEBUG_INTEGRATION" | "DEBUG_RULE_CHAIN" | "DEBUG_RULE_NODE" | "ERROR" | "LC_EVENT" | "RAW_DATA" | "STATS";
    /**
     * String value representing the server name, identifier or ip address where the platform is running
     * @example "ip-172-31-24-152"
     */
    server?: string;
    /**
     * String value representing the method name when the error happened
     * @example "onClusterEventMsg"
     */
    method?: string;
    /**
     * The case insensitive 'contains' filter based on error message
     * @example "not present in the DB"
     */
    errorStr?: string;
}) & ({
    notEmpty?: boolean;
    /**
     * String value representing the event type
     * @example "STATS"
     */
    eventType?: "DEBUG_CONVERTER" | "DEBUG_INTEGRATION" | "DEBUG_RULE_CHAIN" | "DEBUG_RULE_NODE" | "ERROR" | "LC_EVENT" | "RAW_DATA" | "STATS";
    /**
     * String value representing the server name, identifier or ip address where the platform is running
     * @example "ip-172-31-24-152"
     */
    server?: string;
    /**
     * String value representing the method name when the error happened
     * @example "onClusterEventMsg"
     */
    method?: string;
    /**
     * The case insensitive 'contains' filter based on error message
     * @example "not present in the DB"
     */
    errorStr?: string;
});
/** EscalatedNotificationRuleRecipientsConfig */
export interface EscalatedNotificationRuleRecipientsConfig {
    escalationTable?: Record<string, (string)[]>;
    triggerType: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
}
/** EventFilter */
export interface EventFilter {
    notEmpty?: boolean;
    /**
     * String value representing the event type
     * @example "STATS"
     */
    eventType: "DEBUG_CONVERTER" | "DEBUG_INTEGRATION" | "DEBUG_RULE_CHAIN" | "DEBUG_RULE_NODE" | "ERROR" | "LC_EVENT" | "RAW_DATA" | "STATS";
}
/** EventId */
export interface EventId {
    /**
     * string
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
}
/** EventInfo */
export interface EventInfo {
    id?: EventId;
    /** JSON object with Tenant Id. */
    tenantId?: TenantId;
    /**
     * Event type
     * @example "STATS"
     */
    type?: string;
    /**
     * string
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    uid?: string;
    /** JSON object with Entity Id for which event is created. */
    entityId?: EntityId;
    /** Event body. */
    body?: JsonNode;
    /**
     * Timestamp of the event creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
}
/** ExportableEntity«EntityId» */
export interface ExportableEntityEntityId {
    /** @format int64 */
    createdTime?: number;
    id?: EntityId;
    name?: string;
}
/** Favicon */
export interface Favicon {
    url?: string;
}
/** FeaturesInfo */
export interface FeaturesInfo {
    emailEnabled?: boolean;
    notificationEnabled?: boolean;
    oauthEnabled?: boolean;
    smsEnabled?: boolean;
    twoFaEnabled?: boolean;
    whiteLabelingEnabled?: boolean;
}
/** FilterPredicateValue«boolean» */
export interface FilterPredicateValueBoolean {
    defaultValue?: boolean;
    dynamicValue?: DynamicValueBoolean;
    userValue?: boolean;
}
/** FilterPredicateValue«double» */
export interface FilterPredicateValueDouble {
    /** @format double */
    defaultValue?: number;
    dynamicValue?: DynamicValueDouble;
    /** @format double */
    userValue?: number;
}
/** FilterPredicateValue«int» */
export interface FilterPredicateValueInt {
    /** @format int32 */
    defaultValue?: number;
    dynamicValue?: DynamicValueInt;
    /** @format int32 */
    userValue?: number;
}
/** FilterPredicateValue«long» */
export interface FilterPredicateValueLong {
    /** @format int64 */
    defaultValue?: number;
    dynamicValue?: DynamicValueLong;
    /** @format int64 */
    userValue?: number;
}
/** FilterPredicateValue«string» */
export interface FilterPredicateValueString {
    defaultValue?: string;
    dynamicValue?: DynamicValueString;
    userValue?: string;
}
/** GroupEntityExportData */
export type GroupEntityExportData = (EntityExportDataObject & {
    attributes?: Record<string, (AttributeExportData)[]>;
    entity?: ExportableEntityEntityId;
    entityType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    relations?: (EntityRelation)[];
}) & ({
    attributes?: Record<string, (AttributeExportData)[]>;
    entity?: ExportableEntityEntityId;
    entityType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    relations?: (EntityRelation)[];
});
/** GroupPermission */
export interface GroupPermission {
    public?: boolean;
    /** JSON object with the Group Permission Id. Specify this field to update the Group Permission. Referencing non-existing Group Permission Id will cause error. Omit this field to create new Group Permission. */
    id?: GroupPermissionId;
    /**
     * Timestamp of the group permission creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with the Tenant Id. */
    tenantId?: TenantId;
    /** JSON object with the User Group Id. Represent user group that will have permissions to perform operations against corresponding Entity Group. */
    userGroupId?: EntityGroupId;
    /** JSON object with the Role Id. Represent set of permissions. */
    roleId?: RoleId;
    /** JSON object with the Entity Group Id. Represent entity (device, asset, etc.) group. */
    entityGroupId?: EntityGroupId;
    /** Type of the entities in the group: DEVICE, ASSET, CUSTOMER, etc. */
    entityGroupType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    /** Name of the Group Permissions. Auto-generated */
    name?: string;
}
/** GroupPermissionId */
export interface GroupPermissionId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "GROUP_PERMISSION"
     */
    entityType: "GROUP_PERMISSION";
}
/** GroupPermissionInfo */
export interface GroupPermissionInfo {
    public?: boolean;
    readOnly?: boolean;
    /** JSON object with the Group Permission Id. Specify this field to update the Group Permission. Referencing non-existing Group Permission Id will cause error. Omit this field to create new Group Permission. */
    id?: GroupPermissionId;
    /**
     * Timestamp of the group permission creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with the Tenant Id. */
    tenantId?: TenantId;
    /** JSON object with the User Group Id. Represent user group that will have permissions to perform operations against corresponding Entity Group. */
    userGroupId?: EntityGroupId;
    /** JSON object with the Role Id. Represent set of permissions. */
    roleId?: RoleId;
    /** JSON object with the Entity Group Id. Represent entity (device, asset, etc.) group. */
    entityGroupId?: EntityGroupId;
    /** Type of the entities in the group: DEVICE, ASSET, CUSTOMER, etc. */
    entityGroupType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    /** Name of the Group Permissions. Auto-generated */
    name?: string;
    /** Represent set of permissions. */
    role?: Role;
    /** Entity Group Name. */
    entityGroupName?: string;
    /** Entity Group Owner Id (Tenant or Customer). */
    entityGroupOwnerId?: EntityId;
    /** Name of the entity group owner (Tenant or Customer title). */
    entityGroupOwnerName?: string;
    /** User Group Name. */
    userGroupName?: string;
    /** User Group Owner Id (Tenant or Customer). */
    userGroupOwnerId?: EntityId;
    /** Name of the user group owner (Tenant or Customer title). */
    userGroupOwnerName?: string;
}
/** HasId«object» */
export interface HasIdObject {
    id?: object;
}
/** HomeDashboard */
export interface HomeDashboard {
    /** JSON object with the dashboard Id. Specify existing dashboard Id to update the dashboard. Referencing non-existing dashboard id will cause error. Omit this field to create new dashboard. */
    id?: DashboardId;
    /**
     * Timestamp of the dashboard creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id. Tenant Id of the dashboard can't be changed. */
    tenantId?: TenantId;
    /** JSON object with Customer Id.  */
    customerId?: CustomerId;
    /** JSON object with Customer or Tenant Id */
    ownerId?: EntityId;
    /** Title of the dashboard. */
    title?: string;
    /** Thumbnail picture for rendering of the dashboards in a grid view on mobile devices. */
    image?: string;
    /**
     * List of assigned customers with their info.
     * @uniqueItems true
     */
    assignedCustomers?: (ShortCustomerInfo)[];
    /**
     * Hide dashboard from mobile devices. Useful if the dashboard is not designed for small screens.
     * @example false
     */
    mobileHide?: boolean;
    /**
     * Order on mobile devices. Useful to adjust sorting of the dashboards for mobile applications
     * @format int32
     */
    mobileOrder?: number;
    /** Same as title of the dashboard. Read-only field. Update the 'title' to change the 'name' of the dashboard. */
    name?: string;
    /** JSON object with main configuration of the dashboard: layouts, widgets, aliases, etc. The JSON structure of the dashboard configuration is quite complex. The easiest way to learn it is to export existing dashboard to JSON. */
    configuration?: JsonNode;
    /**
     * Hide dashboard toolbar flag. Useful for rendering dashboards on mobile.
     * @example false
     */
    hideDashboardToolbar?: boolean;
}
/** HomeDashboardInfo */
export interface HomeDashboardInfo {
    /** JSON object with the dashboard Id. */
    dashboardId?: DashboardId;
    /**
     * Hide dashboard toolbar flag. Useful for rendering dashboards on mobile.
     * @example false
     */
    hideDashboardToolbar?: boolean;
}
/** ImageExportData */
export interface ImageExportData {
    data?: string;
    fileName?: string;
    mediaType?: string;
    public?: boolean;
    publicResourceKey?: string;
    resourceKey?: string;
    title?: string;
}
/** InputStream */
export type InputStream = object;
/** Integration */
export interface Integration {
    /** JSON object with the Integration Id. Specify this field to update the Integration. Referencing non-existing Integration Id will cause error. Omit this field to create new Integration. */
    id?: IntegrationId;
    /**
     * Timestamp of the integration creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id */
    tenantId?: TenantId;
    /** JSON object with the Uplink Converter Id */
    defaultConverterId: ConverterId;
    /** JSON object with the Downlink Converter Id */
    downlinkConverterId?: ConverterId;
    /**
     * String value used by HTTP based integrations for the base URL construction and by the remote integrations. Remote integration uses this value along with the 'secret' for kind of security and validation to be able to connect to the platform using Grpc
     * @example "ca1a01b6-4ca1-3da5-54e4-a07090b65644"
     */
    routingKey: string;
    /** The type of the integration */
    type: "APACHE_PULSAR" | "AWS_IOT" | "AWS_KINESIS" | "AWS_SQS" | "AZURE_EVENT_HUB" | "AZURE_IOT_HUB" | "AZURE_SERVICE_BUS" | "CHIRPSTACK" | "COAP" | "CUSTOM" | "HTTP" | "IBM_WATSON_IOT" | "KAFKA" | "KPN" | "LORIOT" | "MQTT" | "OCEANCONNECT" | "OPC_UA" | "PARTICLE" | "PUB_SUB" | "RABBITMQ" | "SIGFOX" | "TCP" | "THINGPARK" | "TMOBILE_IOT_CDP" | "TPE" | "TTI" | "TTN" | "TUYA" | "UDP";
    /**
     * Boolean flag to enable/disable saving received messages as debug events
     * @example false
     */
    debugMode?: boolean;
    /**
     * Boolean flag to enable/disable the integration
     * @example false
     */
    enabled?: boolean;
    /**
     * Boolean flag to enable/disable the integration to be executed remotely. Remote integration is launched in a separate microservice. Local integration is executed by the platform core
     * @example false
     */
    remote?: boolean;
    /**
     * Boolean flag to allow/disallow the integration to create devices or assets that send message and do not exist in the system yet
     * @example false
     */
    allowCreateDevicesOrAssets?: boolean;
    /**
     * String value used by the remote integrations. Remote integration uses this value along with the 'routingKey' for kind of security and validation to be able to connect to the platform using Grpc
     * @example "nl83m1ktpwpwwmww29sm"
     */
    secret?: string;
    /** JSON object representing integration configuration. Each integration type has specific configuration with the connectivity parameters (like 'host' and 'port' for MQTT type or 'baseUrl' for HTTP based type, etc.) and other important parameters dependent on the integration type */
    configuration: JsonNode;
    /** Additional parameters of the integration */
    additionalInfo?: JsonNode;
    /**
     * Integration Name
     * @example "Http Integration"
     */
    name: string;
    /**
     * Boolean flag that specifies that is regular or edge template integration
     * @example false
     */
    edgeTemplate?: boolean;
}
/** IntegrationId */
export interface IntegrationId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "INTEGRATION"
     */
    entityType: "INTEGRATION";
}
/** IntegrationInfo */
export interface IntegrationInfo {
    stats?: ArrayNode;
    status?: ObjectNode;
    /** JSON object with the Integration Id. Specify this field to update the Integration. Referencing non-existing Integration Id will cause error. Omit this field to create new Integration. */
    id?: IntegrationId;
    /**
     * Timestamp of the integration creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id */
    tenantId?: TenantId;
    /** The type of the integration */
    type: "APACHE_PULSAR" | "AWS_IOT" | "AWS_KINESIS" | "AWS_SQS" | "AZURE_EVENT_HUB" | "AZURE_IOT_HUB" | "AZURE_SERVICE_BUS" | "CHIRPSTACK" | "COAP" | "CUSTOM" | "HTTP" | "IBM_WATSON_IOT" | "KAFKA" | "KPN" | "LORIOT" | "MQTT" | "OCEANCONNECT" | "OPC_UA" | "PARTICLE" | "PUB_SUB" | "RABBITMQ" | "SIGFOX" | "TCP" | "THINGPARK" | "TMOBILE_IOT_CDP" | "TPE" | "TTI" | "TTN" | "TUYA" | "UDP";
    /**
     * Boolean flag to enable/disable saving received messages as debug events
     * @example false
     */
    debugMode?: boolean;
    /**
     * Boolean flag to enable/disable the integration
     * @example false
     */
    enabled?: boolean;
    /**
     * Boolean flag to enable/disable the integration to be executed remotely. Remote integration is launched in a separate microservice. Local integration is executed by the platform core
     * @example false
     */
    remote?: boolean;
    /**
     * Boolean flag to allow/disallow the integration to create devices or assets that send message and do not exist in the system yet
     * @example false
     */
    allowCreateDevicesOrAssets?: boolean;
    /**
     * Integration Name
     * @example "Http Integration"
     */
    name: string;
    /**
     * Boolean flag that specifies that is regular or edge template integration
     * @example false
     */
    edgeTemplate?: boolean;
}
/** IntegrationLifecycleEventNotificationRuleTriggerConfig */
export interface IntegrationLifecycleEventNotificationRuleTriggerConfig {
    /** @uniqueItems true */
    integrationTypes?: ("APACHE_PULSAR" | "AWS_IOT" | "AWS_KINESIS" | "AWS_SQS" | "AZURE_EVENT_HUB" | "AZURE_IOT_HUB" | "AZURE_SERVICE_BUS" | "CHIRPSTACK" | "COAP" | "CUSTOM" | "HTTP" | "IBM_WATSON_IOT" | "KAFKA" | "KPN" | "LORIOT" | "MQTT" | "OCEANCONNECT" | "OPC_UA" | "PARTICLE" | "PUB_SUB" | "RABBITMQ" | "SIGFOX" | "TCP" | "THINGPARK" | "TMOBILE_IOT_CDP" | "TPE" | "TTI" | "TTN" | "TUYA" | "UDP")[];
    /** @uniqueItems true */
    integrations?: (string)[];
    /** @uniqueItems true */
    notifyOn?: ("ACTIVATED" | "CREATED" | "DEACTIVATED" | "DELETED" | "FAILED" | "STARTED" | "STOPPED" | "SUSPENDED" | "UPDATED")[];
    onlyOnError?: boolean;
    triggerType?: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
}
/** JWT Pair */
export interface JWTPair {
    scope?: "CUSTOMER_USER" | "PRE_VERIFICATION_TOKEN" | "REFRESH_TOKEN" | "SYS_ADMIN" | "TENANT_ADMIN";
    /**
     * The JWT Refresh Token. Used to get new JWT Access Token if old one has expired.
     * @example "AAB254FF67D.."
     */
    refreshToken?: string;
    /**
     * The JWT Access Token. Used to perform API calls.
     * @example "AAB254FF67D.."
     */
    token?: string;
}
/** JWT Settings */
export interface JWTSettings {
    /**
     * The JWT will expire after seconds.
     * @format int32
     * @example 9000
     */
    tokenExpirationTime?: number;
    /**
     * The JWT can be refreshed during seconds.
     * @format int32
     * @example 604800
     */
    refreshTokenExpTime?: number;
    /**
     * The JWT issuer.
     * @example "thingsboard.io"
     */
    tokenIssuer?: string;
    /**
     * The JWT key is used to sing token. Base64 encoded.
     * @example "cTU4WnNqemI2aU5wbWVjdm1vYXRzanhjNHRUcXliMjE="
     */
    tokenSigningKey?: string;
}
/** JsonNode */
export type JsonNode = object;
/** JsonTransportPayloadConfiguration */
export type JsonTransportPayloadConfiguration = (TransportPayloadTypeConfiguration & object);
/** KeyFilter */
export interface KeyFilter {
    key?: EntityKey;
    predicate?: KeyFilterPredicate;
    valueType?: "BOOLEAN" | "DATE_TIME" | "NUMERIC" | "STRING";
}
/** KeyFilterPredicate */
export type KeyFilterPredicate = object;
/** LastVisitedDashboardInfo */
export interface LastVisitedDashboardInfo {
    /**
     * JSON object with Dashboard id.
     * @format uuid
     */
    id?: string;
    /** Title of the dashboard. */
    title?: string;
    /**
     * Starred flag
     * @example false
     */
    starred?: boolean;
    /**
     * Last visit timestamp
     * @format int64
     */
    lastVisited?: number;
}
/** LicenseUsageInfo */
export interface LicenseUsageInfo {
    /** @format int64 */
    assetsCount?: number;
    /** @format int64 */
    dashboardsCount?: number;
    development?: boolean;
    /** @format int64 */
    devicesCount?: number;
    /** @format int64 */
    integrationsCount?: number;
    /** @format int64 */
    maxAssets?: number;
    /** @format int64 */
    maxDevices?: number;
    plan?: string;
    whiteLabelingEnabled?: boolean;
}
/** LifeCycleEventFilter */
export type LifeCycleEventFilter = (EventFilter & {
    notEmpty?: boolean;
    /**
     * String value representing the event type
     * @example "STATS"
     */
    eventType: "DEBUG_CONVERTER" | "DEBUG_INTEGRATION" | "DEBUG_RULE_CHAIN" | "DEBUG_RULE_NODE" | "ERROR" | "LC_EVENT" | "RAW_DATA" | "STATS";
    /**
     * String value representing the server name, identifier or ip address where the platform is running
     * @example "ip-172-31-24-152"
     */
    server?: string;
    /**
     * String value representing the lifecycle event type
     * @example "STARTED"
     */
    event?: string;
    /** String value representing status of the lifecycle event */
    status?: "Failure" | "Success";
    /**
     * The case insensitive 'contains' filter based on error message
     * @example "not present in the DB"
     */
    errorStr?: string;
}) & ({
    notEmpty?: boolean;
    /**
     * String value representing the event type
     * @example "STATS"
     */
    eventType?: "DEBUG_CONVERTER" | "DEBUG_INTEGRATION" | "DEBUG_RULE_CHAIN" | "DEBUG_RULE_NODE" | "ERROR" | "LC_EVENT" | "RAW_DATA" | "STATS";
    /**
     * String value representing the server name, identifier or ip address where the platform is running
     * @example "ip-172-31-24-152"
     */
    server?: string;
    /**
     * String value representing the lifecycle event type
     * @example "STARTED"
     */
    event?: string;
    /** String value representing status of the lifecycle event */
    status?: "Failure" | "Success";
    /**
     * The case insensitive 'contains' filter based on error message
     * @example "not present in the DB"
     */
    errorStr?: string;
});
/** LoginRequest */
export interface LoginRequest {
    /**
     * User email
     * @example "tenant@thingsboard.org"
     */
    username: string;
    /**
     * User password
     * @example "tenant"
     */
    password: string;
}
/** LoginResponse */
export interface LoginResponse {
    /**
     * JWT token
     * @example "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZW5hbnRAdGhpbmdzYm9hcmQub3JnIi..."
     */
    token: string;
    /**
     * Refresh token
     * @example "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZW5hbnRAdGhpbmdzYm9hcmQub3JnIi..."
     */
    refreshToken: string;
}
/** LoginWhiteLabelingParams */
export interface LoginWhiteLabelingParams {
    /**
     * Logo image URL
     * @example "https://company.com/images/logo.png"
     */
    logoImageUrl?: string;
    /**
     * The height of a logo container. Logo image will be automatically scaled.
     * @format int32
     */
    logoImageHeight?: number;
    /**
     * White-labeled name of the platform
     * @example "My Company IoT Platform"
     */
    appTitle?: string;
    /** JSON object that contains website icon url and type */
    favicon?: Favicon;
    /** Complex JSON that describes structure of the Angular Material Palette. See [theming](https://material.angular.io/guide/theming) for more details */
    paletteSettings?: PaletteSettings;
    /** Base URL for help link */
    helpLinkBaseUrl?: string;
    /** Base URL for the repository with the UI help components (markdown) */
    uiHelpBaseUrl?: string;
    /**
     * Enable or Disable help links
     * @example false
     */
    enableHelpLinks?: boolean;
    /**
     * Enable white-labeling
     * @example false
     */
    whiteLabelingEnabled?: boolean;
    /**
     * Show platform name and version on UI and login screen
     * @example false
     */
    showNameVersion?: boolean;
    /** White-labeled platform name */
    platformName?: string;
    /** White-labeled platform version */
    platformVersion?: string;
    /** Custom CSS content */
    customCss?: string;
    /**
     * Login page background color
     * @example "#d90f0f"
     */
    pageBackgroundColor?: string;
    /**
     * Enable/Disable dark foreground
     * @example false
     */
    darkForeground?: boolean;
    /**
     * Domain name of the login page
     * @example "iot.mycompany.com"
     */
    domainName?: string;
    /**
     * Base URL for the activation link, etc
     * @example "https://iot.mycompany.com"
     */
    baseUrl?: string;
    /**
     * Prohibit use of other URLs. It is recommended to enable this setting
     * @example true
     */
    prohibitDifferentUrl?: boolean;
    /** Id of the settings object that store this parameters */
    adminSettingsId?: string;
    /**
     * Show platform name and version on login page
     * @example false
     */
    showNameBottom?: boolean;
}
/** LwM2MBootstrapServerCredential */
export type LwM2MBootstrapServerCredential = object;
/** LwM2mInstance */
export interface LwM2MInstance {
    /**
     * LwM2M Instance id.
     * @format int32
     * @example 0
     */
    id?: number;
    /** LwM2M Resource observe. */
    resources?: (LwM2MResourceObserve)[];
}
/** LwM2mObject */
export interface LwM2MObject {
    /**
     * LwM2M Object id.
     * @format int32
     * @example 19
     */
    id?: number;
    /**
     * LwM2M Object key id.
     * @example "19_1.0"
     */
    keyId?: string;
    /**
     * LwM2M Object name.
     * @example "BinaryAppDataContainer"
     */
    name?: string;
    /**
     * LwM2M Object multiple.
     * @example true
     */
    multiple?: boolean;
    /**
     * LwM2M Object mandatory.
     * @example false
     */
    mandatory?: boolean;
    /** LwM2M Object instances. */
    instances?: (LwM2MInstance)[];
}
/** LwM2mResourceObserve */
export interface LwM2MResourceObserve {
    /**
     * LwM2M Resource Observe id.
     * @format int32
     * @example 0
     */
    id?: number;
    /**
     * LwM2M Resource Observe name.
     * @example "Data"
     */
    name?: string;
    /**
     * LwM2M Resource Observe observe.
     * @example false
     */
    observe?: boolean;
    /**
     * LwM2M Resource Observe attribute.
     * @example false
     */
    attribute?: boolean;
    /**
     * LwM2M Resource Observe telemetry.
     * @example false
     */
    telemetry?: boolean;
    /**
     * LwM2M Resource Observe key name.
     * @example "data"
     */
    keyName?: string;
}
/** Lwm2mDeviceProfileTransportConfiguration */
export type Lwm2MDeviceProfileTransportConfiguration = (DeviceProfileTransportConfiguration & {
    bootstrap?: (LwM2MBootstrapServerCredential)[];
    bootstrapServerUpdateEnable?: boolean;
    "clientLwM2mSettings"?: OtherConfiguration;
    observeAttr?: TelemetryMappingConfiguration;
}) & ({
    bootstrap?: (LwM2MBootstrapServerCredential)[];
    bootstrapServerUpdateEnable?: boolean;
    "clientLwM2mSettings"?: OtherConfiguration;
    observeAttr?: TelemetryMappingConfiguration;
});
/** Lwm2mDeviceTransportConfiguration */
export type Lwm2MDeviceTransportConfiguration = (DeviceTransportConfiguration & {
    /** @format int64 */
    edrxCycle?: number;
    /** @format int64 */
    pagingTransmissionWindow?: number;
    powerMode?: "DRX" | "E_DRX" | "PSM";
    /** @format int64 */
    psmActivityTimer?: number;
}) & ({
    /** @format int64 */
    edrxCycle?: number;
    /** @format int64 */
    pagingTransmissionWindow?: number;
    powerMode?: "DRX" | "E_DRX" | "PSM";
    /** @format int64 */
    psmActivityTimer?: number;
});
/** Mapping */
export interface Mapping {
    columns?: (ColumnMapping)[];
    delimiter?: string;
    header?: boolean;
    update?: boolean;
}
/** MergedGroupPermissionInfo */
export interface MergedGroupPermissionInfo {
    entityType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    /** @uniqueItems true */
    operations?: ("ADD_TO_GROUP" | "ALL" | "ASSIGN_TO_TENANT" | "CHANGE_OWNER" | "CLAIM_DEVICES" | "CREATE" | "DELETE" | "IMPERSONATE" | "READ" | "READ_ATTRIBUTES" | "READ_CREDENTIALS" | "READ_TELEMETRY" | "REMOVE_FROM_GROUP" | "RPC_CALL" | "SHARE_GROUP" | "WRITE" | "WRITE_ATTRIBUTES" | "WRITE_CREDENTIALS" | "WRITE_TELEMETRY")[];
}
/** MergedGroupTypePermissionInfo */
export interface MergedGroupTypePermissionInfo {
    /**
     * Indicates if generic permission assigned to the user group.
     * @example false
     */
    hasGenericRead?: boolean;
    /** List of Entity Groups in case of group roles are assigned to the user (user group) */
    entityGroupIds?: (EntityGroupId)[];
}
/** MergedUserPermissions */
export interface MergedUserPermissions {
    /** Map of permissions defined using generic roles ('Customer Administrator', etc) */
    genericPermissions?: Record<string, (string)[]>;
    /** Map of permissions defined using group roles ('Read' or 'Write' access to specific entity group, etc) */
    groupPermissions?: Record<string, MergedGroupPermissionInfo>;
    /** Map of read permissions per entity type. Used on the UI to enable/disable certain components. */
    readGroupPermissions?: Record<string, MergedGroupTypePermissionInfo>;
    /** Map of read permissions per resource. Used on the UI to enable/disable certain components. */
    readEntityPermissions?: Record<string, MergedGroupTypePermissionInfo>;
    /** Map of read entity attributes permissions per resource. Used on the UI to enable/disable certain tabs. */
    readAttrPermissions?: Record<string, MergedGroupTypePermissionInfo>;
    /** Map of read entity time-series permissions per resource. Used on the UI to enable/disable certain tabs. */
    readTsPermissions?: Record<string, MergedGroupTypePermissionInfo>;
}
/** MicrosoftTeamsDeliveryMethodNotificationTemplate */
export interface MicrosoftTeamsDeliveryMethodNotificationTemplate {
    body?: string;
    button?: Button;
    enabled?: boolean;
    subject?: string;
    themeColor?: string;
}
/** MicrosoftTeamsNotificationTargetConfig */
export type MicrosoftTeamsNotificationTargetConfig = (NotificationTargetConfig & {
    channelName?: string;
    description?: string;
    email?: string;
    firstName?: string;
    id?: object;
    lastName?: string;
    title?: string;
    webhookUrl: string;
}) & ({
    channelName?: string;
    description?: string;
    email?: string;
    firstName?: string;
    id?: object;
    lastName?: string;
    title?: string;
    webhookUrl?: string;
});
/** MqttDeviceProfileTransportConfiguration */
export interface MqttDeviceProfileTransportConfiguration {
    deviceAttributesSubscribeTopic?: string;
    deviceAttributesTopic?: string;
    deviceTelemetryTopic?: string;
    sendAckOnValidationException?: boolean;
    sparkplug?: boolean;
    /** @uniqueItems true */
    sparkplugAttributesMetricNames?: (string)[];
    transportPayloadTypeConfiguration?: TransportPayloadTypeConfiguration;
}
/** MqttDeviceTransportConfiguration */
export type MqttDeviceTransportConfiguration = (DeviceTransportConfiguration & object);
/** NewPlatformVersionNotificationRuleTriggerConfig */
export interface NewPlatformVersionNotificationRuleTriggerConfig {
    triggerType?: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
}
/** NoSecLwM2MBootstrapServerCredential */
export interface NoSecLwM2MBootstrapServerCredential {
    /**
     * Server short Id. Used as link to associate server Object Instance. This identifier uniquely identifies each LwM2M Server configured for the LwM2M Client. This Resource MUST be set when the Bootstrap-Server Resource has a value of 'false'. The values ID:0 and ID:65535 values MUST NOT be used for identifying the LwM2M Server.
     * @format int32
     * @example 123
     */
    shortServerId?: number;
    /**
     * Is Bootstrap Server or Lwm2m Server. The LwM2M Client MAY be configured to use one or more LwM2M Server Account(s). The LwM2M Client MUST have at most one LwM2M Bootstrap-Server Account. (*) The LwM2M client MUST have at least one LwM2M server account after completing the boot sequence specified.
     * @example false
     */
    bootstrapServerIs?: boolean;
    /**
     * Host for 'No Security' mode
     * @example "0.0.0.0"
     */
    host?: string;
    /**
     * Port for  Lwm2m Server: 'No Security' mode: Lwm2m Server or Bootstrap Server
     * @format int32
     */
    port?: number;
    /**
     * Client Hold Off Time. The number of seconds to wait before initiating a Client Initiated Bootstrap once the LwM2M Client has determined it should initiate this bootstrap mode. (This information is relevant for use with a Bootstrap-Server only.)
     * @format int32
     * @example 1
     */
    clientHoldOffTime?: number;
    /**
     * Server Public Key for 'Security' mode (DTLS): RPK or X509. Format: base64 encoded
     * @example "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEAZ0pSaGKHk/GrDaUDnQZpeEdGwX7m3Ws+U/kiVat
     * +44sgk3c8g0LotfMpLlZJPhPwJ6ipXV+O1r7IZUjBs3LNA=="
     */
    serverPublicKey?: string;
    /**
     * Server Public Key for 'Security' mode (DTLS): X509. Format: base64 encoded
     * @example "MMIICODCCAd6gAwIBAgIUI88U1zowOdrxDK/dOV+36gJxI2MwCgYIKoZIzj0EAwIwejELMAkGA1UEBhMCVUs
     * xEjAQBgNVBAgTCUt5aXYgY2l0eTENMAsGA1UEBxMES3lpdjEUMBIGA1UEChMLVGhpbmdzYm9hcmQxFzAVBgNVBAsMDkRFVkVMT1BFUl9URVNUMRkwFwYDVQQDDBBpbnRlcm1lZGlhdGVfY2EwMB4XDTIyMDEwOTEzMDMwMFoXDTI3MDEwODEzMDMwMFowFDESMBAGA1UEAxM
     * JbG9jYWxob3N0MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEUO3vBo/JTv0eooY7XHiKAIVDoWKFqtrU7C6q8AIKqpLcqhCdW+haFeBOH3PjY6EwaWkY04Bir4oanU0s7tz2uKOBpzCBpDAOBgNVHQ8BAf8EBAMCBaAwEwYDVR0lBAwwCgYIKwYBBQUHAwEwDAYDVR0TAQH/
     * BAIwADAdBgNVHQ4EFgQUEjc3Q4a0TxzP/3x3EV4fHxYUg0YwHwYDVR0jBBgwFoAUuSquGycMU6Q0SYNcbtSkSD3TfH0wLwYDVR0RBCgwJoIVbG9jYWxob3N0LmxvY2FsZG9tYWlugglsb2NhbGhvc3SCAiAtMAoGCCqGSM49BAMCA0gAMEUCIQD7dbZObyUaoDiNbX+9fUNp
     * AWrD7N7XuJUwZ9FcN75R3gIgb2RNjDkHoyUyF1YajwkBk+7XmIXNClmizNJigj908mw="
     */
    serverCertificate?: string;
    /**
     * Bootstrap Server Account Timeout (If the value is set to 0, or if this resource is not instantiated, the Bootstrap-Server Account lifetime is infinite.)
     * @format int32
     * @example 0
     */
    bootstrapServerAccountTimeout?: number;
    /**
     * Specify the lifetime of the registration in seconds.
     * @format int32
     * @example 300
     */
    lifetime?: number;
    /**
     * The default value the LwM2M Client should use for the Minimum Period of an Observation in the absence of this parameter being included in an Observation. If this Resource doesn’t exist, the default value is 0.
     * @format int32
     * @example 1
     */
    defaultMinPeriod?: number;
    /**
     * If true, the LwM2M Client stores “Notify” operations to the LwM2M Server while the LwM2M Server account is disabled or the LwM2M Client is offline. After the LwM2M Server account is enabled or the LwM2M Client is online, the LwM2M Client reports the stored “Notify” operations to the Server. If false, the LwM2M Client discards all the “Notify” operations or temporarily disables the Observe function while the LwM2M Server is disabled or the LwM2M Client is offline. The default value is true.
     * @example true
     */
    notifIfDisabled?: boolean;
    /**
     * This Resource defines the transport binding configured for the LwM2M Client. If the LwM2M Client supports the binding specified in this Resource, the LwM2M Client MUST use that transport for the Current Binding Mode.
     * @example "U"
     */
    binding?: string;
}
/** NodeConnectionInfo */
export interface NodeConnectionInfo {
    /**
     * Index of rule node in the 'nodes' array of the RuleChainMetaData. Indicates the 'from' part of the connection.
     * @format int32
     */
    fromIndex: number;
    /**
     * Index of rule node in the 'nodes' array of the RuleChainMetaData. Indicates the 'to' part of the connection.
     * @format int32
     */
    toIndex: number;
    /** Type of the relation. Typically indicated the result of processing by the 'from' rule node. For example, 'Success' or 'Failure' */
    type: string;
}
/** Notification */
export interface Notification {
    additionalConfig?: JsonNode;
    /** @format int64 */
    createdTime?: number;
    id?: NotificationId;
    info?: NotificationInfo;
    recipientId?: UserId;
    requestId?: NotificationRequestId;
    status?: "READ" | "SENT";
    subject?: string;
    text?: string;
    type?: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "GENERAL" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT" | "RULE_NODE";
}
/** NotificationDeliveryMethodConfig */
export type NotificationDeliveryMethodConfig = object;
/** NotificationId */
export interface NotificationId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "NOTIFICATION"
     */
    entityType: "NOTIFICATION";
}
/** NotificationInfo */
export interface NotificationInfo {
    stateEntityId?: EntityId;
}
/** NotificationPref */
export interface NotificationPref {
    enabled?: boolean;
    enabledDeliveryMethods: Record<string, boolean>;
}
/** NotificationRequest */
export interface NotificationRequest {
    additionalConfig?: NotificationRequestConfig;
    /** @format int64 */
    createdTime?: number;
    id?: NotificationRequestId;
    info?: NotificationInfo;
    originatorEntityId?: EntityId;
    ruleId?: NotificationRuleId;
    stats?: NotificationRequestStats;
    status?: "PROCESSING" | "SCHEDULED" | "SENT";
    targets?: (string)[];
    template?: NotificationTemplate;
    templateId?: NotificationTemplateId;
    tenantId?: TenantId;
}
/** NotificationRequestConfig */
export interface NotificationRequestConfig {
    /** @format int32 */
    sendingDelayInSec?: number;
}
/** NotificationRequestId */
export interface NotificationRequestId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "NOTIFICATION_REQUEST"
     */
    entityType: "NOTIFICATION_REQUEST";
}
/** NotificationRequestInfo */
export interface NotificationRequestInfo {
    additionalConfig?: NotificationRequestConfig;
    /** @format int64 */
    createdTime?: number;
    deliveryMethods?: ("EMAIL" | "MICROSOFT_TEAMS" | "SLACK" | "SMS" | "WEB")[];
    id?: NotificationRequestId;
    info?: NotificationInfo;
    originatorEntityId?: EntityId;
    ruleId?: NotificationRuleId;
    stats?: NotificationRequestStats;
    status?: "PROCESSING" | "SCHEDULED" | "SENT";
    targets?: (string)[];
    template?: NotificationTemplate;
    templateId?: NotificationTemplateId;
    templateName?: string;
    tenantId?: TenantId;
}
/** NotificationRequestPreview */
export interface NotificationRequestPreview {
    processedTemplates?: Record<string, DeliveryMethodNotificationTemplate>;
    recipientsCountByTarget?: Record<string, number>;
    recipientsPreview?: (string)[];
    /** @format int32 */
    totalRecipientsCount?: number;
}
/** NotificationRequestStats */
export interface NotificationRequestStats {
    error?: string;
    errors?: Record<string, object>;
    sent?: Record<string, AtomicInteger>;
}
/** NotificationRule */
export interface NotificationRule {
    additionalConfig?: NotificationRuleConfig;
    /** @format int64 */
    createdTime?: number;
    enabled?: boolean;
    name: string;
    recipientsConfig: NotificationRuleRecipientsConfig;
    templateId: NotificationTemplateId;
    tenantId?: TenantId;
    triggerConfig: NotificationRuleTriggerConfig;
    triggerType: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
}
/** NotificationRuleConfig */
export interface NotificationRuleConfig {
    description?: string;
}
/** NotificationRuleId */
export interface NotificationRuleId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "NOTIFICATION_RULE"
     */
    entityType: "NOTIFICATION_RULE";
}
/** NotificationRuleInfo */
export interface NotificationRuleInfo {
    additionalConfig?: NotificationRuleConfig;
    /** @format int64 */
    createdTime?: number;
    deliveryMethods?: ("EMAIL" | "MICROSOFT_TEAMS" | "SLACK" | "SMS" | "WEB")[];
    enabled?: boolean;
    name: string;
    recipientsConfig: NotificationRuleRecipientsConfig;
    templateId: NotificationTemplateId;
    templateName?: string;
    tenantId?: TenantId;
    triggerConfig: NotificationRuleTriggerConfig;
    triggerType: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
}
/** NotificationRuleRecipientsConfig */
export interface NotificationRuleRecipientsConfig {
    triggerType: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
}
/** NotificationRuleTriggerConfig */
export interface NotificationRuleTriggerConfig {
    triggerType?: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
}
/** NotificationSettings */
export interface NotificationSettings {
    deliveryMethodsConfigs: Record<string, NotificationDeliveryMethodConfig>;
}
/** NotificationTarget */
export interface NotificationTarget {
    configuration: NotificationTargetConfig;
    /** @format int64 */
    createdTime?: number;
    name: string;
    tenantId?: TenantId;
}
/** NotificationTargetConfig */
export interface NotificationTargetConfig {
    description?: string;
}
/** NotificationTemplate */
export interface NotificationTemplate {
    configuration: NotificationTemplateConfig;
    /** @format int64 */
    createdTime?: number;
    name?: string;
    notificationType: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "GENERAL" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT" | "RULE_NODE";
    tenantId?: TenantId;
}
/** NotificationTemplateConfig */
export interface NotificationTemplateConfig {
    deliveryMethodsTemplates?: Record<string, DeliveryMethodNotificationTemplate>;
}
/** NotificationTemplateId */
export interface NotificationTemplateId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "NOTIFICATION_TEMPLATE"
     */
    entityType: "NOTIFICATION_TEMPLATE";
}
/** NumericFilterPredicate */
export type NumericFilterPredicate = (KeyFilterPredicate & {
    operation?: "EQUAL" | "GREATER" | "GREATER_OR_EQUAL" | "LESS" | "LESS_OR_EQUAL" | "NOT_EQUAL";
    value?: FilterPredicateValueDouble;
}) & ({
    operation?: "EQUAL" | "GREATER" | "GREATER_OR_EQUAL" | "LESS" | "LESS_OR_EQUAL" | "NOT_EQUAL";
    value?: FilterPredicateValueDouble;
});
/** OAuth2BasicMapperConfig */
export interface OAuth2BasicMapperConfig {
    /**
     * Whether default dashboard should be open in full screen
     * @example false
     */
    alwaysFullScreen?: boolean;
    /** Customer name pattern. When creating a user on the first OAuth2 log in, if specified, customer name will be used to create or find existing customer in the platform and assign customerId to the user */
    customerNamePattern?: string;
    /** Name of the tenant's dashboard to set as default dashboard for newly created user */
    defaultDashboardName?: string;
    /** Email attribute key of OAuth2 principal attributes. Must be specified for BASIC mapper type and cannot be specified for GITHUB type */
    emailAttributeKey?: string;
    /** First name attribute key */
    firstNameAttributeKey?: string;
    /** Last name attribute key */
    lastNameAttributeKey?: string;
    parentCustomerNamePattern?: string;
    /**
     * Tenant name pattern for CUSTOM naming strategy. OAuth2 attributes in the pattern can be used by enclosing attribute key in '%{' and '}'
     * @example "%{email}"
     */
    tenantNamePattern?: string;
    /** Tenant naming strategy. For DOMAIN type, domain for tenant name will be taken from the email (substring before '@') */
    tenantNameStrategy: "CUSTOM" | "DOMAIN" | "EMAIL";
    userGroupsNamePattern?: (string)[];
}
/** OAuth2ClientInfo */
export interface OAuth2ClientInfo {
    /**
     * Name of the icon, displayed on OAuth2 log in button
     * @example "github-logo"
     */
    icon?: string;
    /**
     * OAuth2 client name
     * @example "GitHub"
     */
    name?: string;
    /**
     * URI for OAuth2 log in. On HTTP GET request to this URI, it redirects to the OAuth2 provider page
     * @example "/oauth2/authorization/8352f191-2b4d-11ec-9ed1-cbf57c026ecc"
     */
    url?: string;
}
/** OAuth2ClientRegistrationTemplate */
export interface OAuth2ClientRegistrationTemplate {
    /** Default access token URI of the OAuth2 provider */
    accessTokenUri?: string;
    additionalInfo?: JsonNode;
    /** Default authorization URI of the OAuth2 provider */
    authorizationUri?: string;
    /** Default client authentication method to use: 'BASIC' or 'POST' */
    clientAuthenticationMethod?: string;
    /** Comment for OAuth2 provider */
    comment?: string;
    /** @format int64 */
    createdTime?: number;
    /** Help link for OAuth2 provider */
    helpLink?: string;
    id?: OAuth2ClientRegistrationTemplateId;
    /** Default JSON Web Key URI of the OAuth2 provider */
    jwkSetUri?: string;
    /** Default log in button icon for OAuth2 provider */
    loginButtonIcon?: string;
    /** Default OAuth2 provider label */
    loginButtonLabel?: string;
    /** Default config for mapping OAuth2 log in response to platform entities */
    mapperConfig?: OAuth2MapperConfig;
    name?: string;
    /** OAuth2 provider identifier (e.g. its name) */
    providerId: string;
    /** Default OAuth scopes that will be requested from OAuth2 platform */
    scope?: (string)[];
    /** Default user info URI of the OAuth2 provider */
    userInfoUri?: string;
    /** Default name of the username attribute in OAuth2 provider log in response */
    userNameAttributeName?: string;
}
/** OAuth2ClientRegistrationTemplateId */
export interface OAuth2ClientRegistrationTemplateId {
    /**
     * string
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
}
/** OAuth2CustomMapperConfig */
export interface OAuth2CustomMapperConfig {
    password?: string;
    sendToken?: boolean;
    url?: string;
    username?: string;
}
/** OAuth2DomainInfo */
export interface OAuth2DomainInfo {
    /** Domain name. Cannot be empty */
    name: string;
    /** Domain scheme. Mixed scheme means than both HTTP and HTTPS are going to be used */
    scheme: "HTTP" | "HTTPS" | "MIXED";
}
/** OAuth2Info */
export interface OAuth2Info {
    /**
     * Whether OAuth2 settings are enabled or not
     * @example false
     */
    enabled?: boolean;
    /** List of configured OAuth2 clients. Cannot contain null values */
    "oauth2ParamsInfos": (OAuth2ParamsInfo)[];
}
/** OAuth2MapperConfig */
export interface OAuth2MapperConfig {
    /**
     * Whether user credentials should be activated when user is created after successful authentication
     * @example false
     */
    activateUser?: boolean;
    /**
     * Whether user should be created if not yet present on the platform after successful authentication
     * @example false
     */
    allowUserCreation?: boolean;
    /** Mapper config for BASIC and GITHUB mapper types */
    basic?: OAuth2BasicMapperConfig;
    /** Mapper config for CUSTOM mapper type */
    custom?: OAuth2CustomMapperConfig;
    /** Type of OAuth2 mapper. Depending on this param, different mapper config fields must be specified */
    type: "APPLE" | "BASIC" | "CUSTOM" | "GITHUB";
}
/** OAuth2MobileInfo */
export interface OAuth2MobileInfo {
    /** Application secret. The length must be at least 16 characters */
    appSecret: string;
    /** Application package name. Cannot be empty */
    pkgName: string;
}
/** OAuth2ParamsInfo */
export interface OAuth2ParamsInfo {
    /** List of OAuth2 provider settings. Cannot be empty */
    clientRegistrations: (OAuth2RegistrationInfo)[];
    /** List of configured domains where OAuth2 platform will redirect a user after successful authentication. Cannot be empty. There have to be only one domain with specific name with scheme type 'MIXED'. Configured domains with the same name must have different scheme types */
    domainInfos: (OAuth2DomainInfo)[];
    /** Mobile applications settings. Application package name must be unique within the list */
    mobileInfos: (OAuth2MobileInfo)[];
}
/** OAuth2RegistrationInfo */
export interface OAuth2RegistrationInfo {
    /** Access token URI of the OAuth2 provider. Cannot be empty */
    accessTokenUri: string;
    /** Additional info of OAuth2 client (e.g. providerName) */
    additionalInfo: JsonNode;
    /** Authorization URI of the OAuth2 provider. Cannot be empty */
    authorizationUri: string;
    /** Client authentication method to use: 'BASIC' or 'POST'. Cannot be empty */
    clientAuthenticationMethod: string;
    /** OAuth2 client ID. Cannot be empty */
    clientId: string;
    /** OAuth2 client secret. Cannot be empty */
    clientSecret: string;
    /** JSON Web Key URI of the OAuth2 provider */
    jwkSetUri?: string;
    /** Log in button icon for OAuth2 provider */
    loginButtonIcon?: string;
    /** OAuth2 provider label. Cannot be empty */
    loginButtonLabel: string;
    /** Config for mapping OAuth2 log in response to platform entities */
    mapperConfig: OAuth2MapperConfig;
    /** List of platforms for which usage of the OAuth2 client is allowed (empty for all allowed) */
    platforms?: ("ANDROID" | "IOS" | "WEB")[];
    /** OAuth scopes that will be requested from OAuth2 platform. Cannot be empty */
    scope: (string)[];
    /** User info URI of the OAuth2 provider */
    userInfoUri?: string;
    /** Name of the username attribute in OAuth2 provider response. Cannot be empty */
    userNameAttributeName?: string;
}
/** ObjectAttributes */
export interface ObjectAttributes {
    /** @format int64 */
    dim?: number;
    /** @format double */
    gt?: number;
    /** @format double */
    lt?: number;
    /** @format int64 */
    pmax?: number;
    /** @format int64 */
    pmin?: number;
    /** @format double */
    st?: number;
    ver?: string;
}
/** ObjectNode */
export type ObjectNode = object;
/** OriginatorEntityOwnerUsersFilter */
export type OriginatorEntityOwnerUsersFilter = object;
/** OtaPackage */
export interface OtaPackage {
    /** JSON object with the ota package Id. Specify existing ota package Id to update the ota package. Referencing non-existing ota package id will cause error. Omit this field to create new ota package. */
    id?: OtaPackageId;
    /**
     * Timestamp of the ota package creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id. Tenant Id of the ota package can't be changed. */
    tenantId?: TenantId;
    /** JSON object with Device Profile Id. Device Profile Id of the ota package can't be changed. */
    deviceProfileId?: DeviceProfileId;
    /**
     * OTA Package type.
     * @example "FIRMWARE"
     */
    type?: "FIRMWARE" | "SOFTWARE";
    /**
     * OTA Package title.
     * @example "fw"
     */
    title?: string;
    /**
     * OTA Package version.
     * @example "1.0"
     */
    version?: string;
    /**
     * OTA Package tag.
     * @example "fw_1.0"
     */
    tag?: string;
    /**
     * OTA Package url.
     * @example "http://thingsboard.org/fw/1"
     */
    url?: string;
    /**
     * Indicates OTA Package 'has data'. Field is returned from DB ('true' if data exists or url is set).  If OTA Package 'has data' is 'false' we can not assign the OTA Package to the Device or Device Profile.
     * @example true
     */
    hasData?: boolean;
    /**
     * OTA Package file name.
     * @example "fw_1.0"
     */
    fileName?: string;
    /**
     * OTA Package content type.
     * @example "APPLICATION_OCTET_STREAM"
     */
    contentType?: string;
    /**
     * OTA Package checksum algorithm.
     * @example "CRC32"
     */
    checksumAlgorithm?: "CRC32" | "MD5" | "MURMUR3_128" | "MURMUR3_32" | "SHA256" | "SHA384" | "SHA512";
    /**
     * OTA Package checksum.
     * @example "0xd87f7e0c"
     */
    checksum?: string;
    /**
     * OTA Package data size.
     * @format int64
     * @example 8
     */
    dataSize?: number;
    /** OTA Package data. */
    data?: ByteBuffer;
    /**
     * OTA Package description.
     * @example "Description for the OTA Package fw_1.0"
     */
    additionalInfo?: JsonNode;
}
/** OtaPackageId */
export interface OtaPackageId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "OTA_PACKAGE"
     */
    entityType: "OTA_PACKAGE";
}
/** OtaPackageInfo */
export interface OtaPackageInfo {
    /** JSON object with the ota package Id. Specify existing ota package Id to update the ota package. Referencing non-existing ota package id will cause error. Omit this field to create new ota package. */
    id?: OtaPackageId;
    /**
     * Timestamp of the ota package creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id. Tenant Id of the ota package can't be changed. */
    tenantId?: TenantId;
    /** JSON object with Device Profile Id. Device Profile Id of the ota package can't be changed. */
    deviceProfileId?: DeviceProfileId;
    /**
     * OTA Package type.
     * @example "FIRMWARE"
     */
    type?: "FIRMWARE" | "SOFTWARE";
    /**
     * OTA Package title.
     * @example "fw"
     */
    title?: string;
    /**
     * OTA Package version.
     * @example "1.0"
     */
    version?: string;
    /**
     * OTA Package tag.
     * @example "fw_1.0"
     */
    tag?: string;
    /**
     * OTA Package url.
     * @example "http://thingsboard.org/fw/1"
     */
    url?: string;
    /**
     * Indicates OTA Package 'has data'. Field is returned from DB ('true' if data exists or url is set).  If OTA Package 'has data' is 'false' we can not assign the OTA Package to the Device or Device Profile.
     * @example true
     */
    hasData?: boolean;
    /**
     * OTA Package file name.
     * @example "fw_1.0"
     */
    fileName?: string;
    /**
     * OTA Package content type.
     * @example "APPLICATION_OCTET_STREAM"
     */
    contentType?: string;
    /**
     * OTA Package checksum algorithm.
     * @example "CRC32"
     */
    checksumAlgorithm?: "CRC32" | "MD5" | "MURMUR3_128" | "MURMUR3_32" | "SHA256" | "SHA384" | "SHA512";
    /**
     * OTA Package checksum.
     * @example "0xd87f7e0c"
     */
    checksum?: string;
    /**
     * OTA Package data size.
     * @format int64
     * @example 8
     */
    dataSize?: number;
    /**
     * OTA Package description.
     * @example "Description for the OTA Package fw_1.0"
     */
    additionalInfo?: JsonNode;
}
/** OtherConfiguration */
export interface OtherConfiguration {
    /** @format int32 */
    clientOnlyObserveAfterConnect?: number;
    /** @format int64 */
    edrxCycle?: number;
    fwUpdateResource?: string;
    /** @format int32 */
    fwUpdateStrategy?: number;
    /** @format int64 */
    pagingTransmissionWindow?: number;
    powerMode?: "DRX" | "E_DRX" | "PSM";
    /** @format int64 */
    psmActivityTimer?: number;
    swUpdateResource?: string;
    /** @format int32 */
    swUpdateStrategy?: number;
}
/** PSKLwM2MBootstrapServerCredential */
export type PSKLwM2MBootstrapServerCredential = (LwM2MBootstrapServerCredential & {
    /**
     * Server short Id. Used as link to associate server Object Instance. This identifier uniquely identifies each LwM2M Server configured for the LwM2M Client. This Resource MUST be set when the Bootstrap-Server Resource has a value of 'false'. The values ID:0 and ID:65535 values MUST NOT be used for identifying the LwM2M Server.
     * @format int32
     * @example 123
     */
    shortServerId?: number;
    /**
     * Is Bootstrap Server or Lwm2m Server. The LwM2M Client MAY be configured to use one or more LwM2M Server Account(s). The LwM2M Client MUST have at most one LwM2M Bootstrap-Server Account. (*) The LwM2M client MUST have at least one LwM2M server account after completing the boot sequence specified.
     * @example false
     */
    bootstrapServerIs?: boolean;
    /**
     * Host for 'No Security' mode
     * @example "0.0.0.0"
     */
    host?: string;
    /**
     * Port for  Lwm2m Server: 'No Security' mode: Lwm2m Server or Bootstrap Server
     * @format int32
     */
    port?: number;
    /**
     * Client Hold Off Time. The number of seconds to wait before initiating a Client Initiated Bootstrap once the LwM2M Client has determined it should initiate this bootstrap mode. (This information is relevant for use with a Bootstrap-Server only.)
     * @format int32
     * @example 1
     */
    clientHoldOffTime?: number;
    /**
     * Server Public Key for 'Security' mode (DTLS): RPK or X509. Format: base64 encoded
     * @example "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEAZ0pSaGKHk/GrDaUDnQZpeEdGwX7m3Ws+U/kiVat
     * +44sgk3c8g0LotfMpLlZJPhPwJ6ipXV+O1r7IZUjBs3LNA=="
     */
    serverPublicKey?: string;
    /**
     * Server Public Key for 'Security' mode (DTLS): X509. Format: base64 encoded
     * @example "MMIICODCCAd6gAwIBAgIUI88U1zowOdrxDK/dOV+36gJxI2MwCgYIKoZIzj0EAwIwejELMAkGA1UEBhMCVUs
     * xEjAQBgNVBAgTCUt5aXYgY2l0eTENMAsGA1UEBxMES3lpdjEUMBIGA1UEChMLVGhpbmdzYm9hcmQxFzAVBgNVBAsMDkRFVkVMT1BFUl9URVNUMRkwFwYDVQQDDBBpbnRlcm1lZGlhdGVfY2EwMB4XDTIyMDEwOTEzMDMwMFoXDTI3MDEwODEzMDMwMFowFDESMBAGA1UEAxM
     * JbG9jYWxob3N0MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEUO3vBo/JTv0eooY7XHiKAIVDoWKFqtrU7C6q8AIKqpLcqhCdW+haFeBOH3PjY6EwaWkY04Bir4oanU0s7tz2uKOBpzCBpDAOBgNVHQ8BAf8EBAMCBaAwEwYDVR0lBAwwCgYIKwYBBQUHAwEwDAYDVR0TAQH/
     * BAIwADAdBgNVHQ4EFgQUEjc3Q4a0TxzP/3x3EV4fHxYUg0YwHwYDVR0jBBgwFoAUuSquGycMU6Q0SYNcbtSkSD3TfH0wLwYDVR0RBCgwJoIVbG9jYWxob3N0LmxvY2FsZG9tYWlugglsb2NhbGhvc3SCAiAtMAoGCCqGSM49BAMCA0gAMEUCIQD7dbZObyUaoDiNbX+9fUNp
     * AWrD7N7XuJUwZ9FcN75R3gIgb2RNjDkHoyUyF1YajwkBk+7XmIXNClmizNJigj908mw="
     */
    serverCertificate?: string;
    /**
     * Bootstrap Server Account Timeout (If the value is set to 0, or if this resource is not instantiated, the Bootstrap-Server Account lifetime is infinite.)
     * @format int32
     * @example 0
     */
    bootstrapServerAccountTimeout?: number;
    /**
     * Specify the lifetime of the registration in seconds.
     * @format int32
     * @example 300
     */
    lifetime?: number;
    /**
     * The default value the LwM2M Client should use for the Minimum Period of an Observation in the absence of this parameter being included in an Observation. If this Resource doesn’t exist, the default value is 0.
     * @format int32
     * @example 1
     */
    defaultMinPeriod?: number;
    /**
     * If true, the LwM2M Client stores “Notify” operations to the LwM2M Server while the LwM2M Server account is disabled or the LwM2M Client is offline. After the LwM2M Server account is enabled or the LwM2M Client is online, the LwM2M Client reports the stored “Notify” operations to the Server. If false, the LwM2M Client discards all the “Notify” operations or temporarily disables the Observe function while the LwM2M Server is disabled or the LwM2M Client is offline. The default value is true.
     * @example true
     */
    notifIfDisabled?: boolean;
    /**
     * This Resource defines the transport binding configured for the LwM2M Client. If the LwM2M Client supports the binding specified in this Resource, the LwM2M Client MUST use that transport for the Current Binding Mode.
     * @example "U"
     */
    binding?: string;
}) & ({
    /**
     * Server short Id. Used as link to associate server Object Instance. This identifier uniquely identifies each LwM2M Server configured for the LwM2M Client. This Resource MUST be set when the Bootstrap-Server Resource has a value of 'false'. The values ID:0 and ID:65535 values MUST NOT be used for identifying the LwM2M Server.
     * @format int32
     * @example 123
     */
    shortServerId?: number;
    /**
     * Is Bootstrap Server or Lwm2m Server. The LwM2M Client MAY be configured to use one or more LwM2M Server Account(s). The LwM2M Client MUST have at most one LwM2M Bootstrap-Server Account. (*) The LwM2M client MUST have at least one LwM2M server account after completing the boot sequence specified.
     * @example false
     */
    bootstrapServerIs?: boolean;
    /**
     * Host for 'No Security' mode
     * @example "0.0.0.0"
     */
    host?: string;
    /**
     * Port for  Lwm2m Server: 'No Security' mode: Lwm2m Server or Bootstrap Server
     * @format int32
     */
    port?: number;
    /**
     * Client Hold Off Time. The number of seconds to wait before initiating a Client Initiated Bootstrap once the LwM2M Client has determined it should initiate this bootstrap mode. (This information is relevant for use with a Bootstrap-Server only.)
     * @format int32
     * @example 1
     */
    clientHoldOffTime?: number;
    /**
     * Server Public Key for 'Security' mode (DTLS): RPK or X509. Format: base64 encoded
     * @example "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEAZ0pSaGKHk/GrDaUDnQZpeEdGwX7m3Ws+U/kiVat
     * +44sgk3c8g0LotfMpLlZJPhPwJ6ipXV+O1r7IZUjBs3LNA=="
     */
    serverPublicKey?: string;
    /**
     * Server Public Key for 'Security' mode (DTLS): X509. Format: base64 encoded
     * @example "MMIICODCCAd6gAwIBAgIUI88U1zowOdrxDK/dOV+36gJxI2MwCgYIKoZIzj0EAwIwejELMAkGA1UEBhMCVUs
     * xEjAQBgNVBAgTCUt5aXYgY2l0eTENMAsGA1UEBxMES3lpdjEUMBIGA1UEChMLVGhpbmdzYm9hcmQxFzAVBgNVBAsMDkRFVkVMT1BFUl9URVNUMRkwFwYDVQQDDBBpbnRlcm1lZGlhdGVfY2EwMB4XDTIyMDEwOTEzMDMwMFoXDTI3MDEwODEzMDMwMFowFDESMBAGA1UEAxM
     * JbG9jYWxob3N0MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEUO3vBo/JTv0eooY7XHiKAIVDoWKFqtrU7C6q8AIKqpLcqhCdW+haFeBOH3PjY6EwaWkY04Bir4oanU0s7tz2uKOBpzCBpDAOBgNVHQ8BAf8EBAMCBaAwEwYDVR0lBAwwCgYIKwYBBQUHAwEwDAYDVR0TAQH/
     * BAIwADAdBgNVHQ4EFgQUEjc3Q4a0TxzP/3x3EV4fHxYUg0YwHwYDVR0jBBgwFoAUuSquGycMU6Q0SYNcbtSkSD3TfH0wLwYDVR0RBCgwJoIVbG9jYWxob3N0LmxvY2FsZG9tYWlugglsb2NhbGhvc3SCAiAtMAoGCCqGSM49BAMCA0gAMEUCIQD7dbZObyUaoDiNbX+9fUNp
     * AWrD7N7XuJUwZ9FcN75R3gIgb2RNjDkHoyUyF1YajwkBk+7XmIXNClmizNJigj908mw="
     */
    serverCertificate?: string;
    /**
     * Bootstrap Server Account Timeout (If the value is set to 0, or if this resource is not instantiated, the Bootstrap-Server Account lifetime is infinite.)
     * @format int32
     * @example 0
     */
    bootstrapServerAccountTimeout?: number;
    /**
     * Specify the lifetime of the registration in seconds.
     * @format int32
     * @example 300
     */
    lifetime?: number;
    /**
     * The default value the LwM2M Client should use for the Minimum Period of an Observation in the absence of this parameter being included in an Observation. If this Resource doesn’t exist, the default value is 0.
     * @format int32
     * @example 1
     */
    defaultMinPeriod?: number;
    /**
     * If true, the LwM2M Client stores “Notify” operations to the LwM2M Server while the LwM2M Server account is disabled or the LwM2M Client is offline. After the LwM2M Server account is enabled or the LwM2M Client is online, the LwM2M Client reports the stored “Notify” operations to the Server. If false, the LwM2M Client discards all the “Notify” operations or temporarily disables the Observe function while the LwM2M Server is disabled or the LwM2M Client is offline. The default value is true.
     * @example true
     */
    notifIfDisabled?: boolean;
    /**
     * This Resource defines the transport binding configured for the LwM2M Client. If the LwM2M Client supports the binding specified in this Resource, the LwM2M Client MUST use that transport for the Current Binding Mode.
     * @example "U"
     */
    binding?: string;
});
/** PageData«AlarmCommentInfo» */
export interface PageDataAlarmCommentInfo {
    /** Array of the entities */
    data?: (AlarmCommentInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«AlarmData» */
export interface PageDataAlarmData {
    /** Array of the entities */
    data?: (AlarmData)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«AlarmInfo» */
export interface PageDataAlarmInfo {
    /** Array of the entities */
    data?: (AlarmInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«AssetInfo» */
export interface PageDataAssetInfo {
    /** Array of the entities */
    data?: (AssetInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«AssetProfileInfo» */
export interface PageDataAssetProfileInfo {
    /** Array of the entities */
    data?: (AssetProfileInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«AssetProfile» */
export interface PageDataAssetProfile {
    /** Array of the entities */
    data?: (AssetProfile)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«Asset» */
export interface PageDataAsset {
    /** Array of the entities */
    data?: (Asset)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«AuditLog» */
export interface PageDataAuditLog {
    /** Array of the entities */
    data?: (AuditLog)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«BlobEntityWithCustomerInfo» */
export interface PageDataBlobEntityWithCustomerInfo {
    /** Array of the entities */
    data?: (BlobEntityWithCustomerInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«ContactBased«object»» */
export interface PageDataContactBasedObject {
    /** Array of the entities */
    data?: (ContactBasedObject)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«Converter» */
export interface PageDataConverter {
    /** Array of the entities */
    data?: (Converter)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«CustomerInfo» */
export interface PageDataCustomerInfo {
    /** Array of the entities */
    data?: (CustomerInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«Customer» */
export interface PageDataCustomer {
    /** Array of the entities */
    data?: (Customer)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«DashboardInfo» */
export interface PageDataDashboardInfo {
    /** Array of the entities */
    data?: (DashboardInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«DeviceInfo» */
export interface PageDataDeviceInfo {
    /** Array of the entities */
    data?: (DeviceInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«DeviceProfileInfo» */
export interface PageDataDeviceProfileInfo {
    /** Array of the entities */
    data?: (DeviceProfileInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«DeviceProfile» */
export interface PageDataDeviceProfile {
    /** Array of the entities */
    data?: (DeviceProfile)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«Device» */
export interface PageDataDevice {
    /** Array of the entities */
    data?: (Device)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«EdgeEvent» */
export interface PageDataEdgeEvent {
    /** Array of the entities */
    data?: (EdgeEvent)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«EdgeInfo» */
export interface PageDataEdgeInfo {
    /** Array of the entities */
    data?: (EdgeInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«Edge» */
export interface PageDataEdge {
    /** Array of the entities */
    data?: (Edge)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«EntityData» */
export interface PageDataEntityData {
    /** Array of the entities */
    data?: (EntityData)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«EntityGroupInfo» */
export interface PageDataEntityGroupInfo {
    /** Array of the entities */
    data?: (EntityGroupInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«EntityInfo» */
export interface PageDataEntityInfo {
    /** Array of the entities */
    data?: (EntityInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«EntitySubtype» */
export interface PageDataEntitySubtype {
    /** Array of the entities */
    data?: (EntitySubtype)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«EntityVersion» */
export interface PageDataEntityVersion {
    /** Array of the entities */
    data?: (EntityVersion)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«EntityViewInfo» */
export interface PageDataEntityViewInfo {
    /** Array of the entities */
    data?: (EntityViewInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«EntityView» */
export interface PageDataEntityView {
    /** Array of the entities */
    data?: (EntityView)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«EventInfo» */
export interface PageDataEventInfo {
    /** Array of the entities */
    data?: (EventInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«IntegrationInfo» */
export interface PageDataIntegrationInfo {
    /** Array of the entities */
    data?: (IntegrationInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«Integration» */
export interface PageDataIntegration {
    /** Array of the entities */
    data?: (Integration)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«NotificationRequestInfo» */
export interface PageDataNotificationRequestInfo {
    /** Array of the entities */
    data?: (NotificationRequestInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«NotificationRuleInfo» */
export interface PageDataNotificationRuleInfo {
    /** Array of the entities */
    data?: (NotificationRuleInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«NotificationTarget» */
export interface PageDataNotificationTarget {
    /** Array of the entities */
    data?: (NotificationTarget)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«NotificationTemplate» */
export interface PageDataNotificationTemplate {
    /** Array of the entities */
    data?: (NotificationTemplate)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«Notification» */
export interface PageDataNotification {
    /** Array of the entities */
    data?: (Notification)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«OtaPackageInfo» */
export interface PageDataOtaPackageInfo {
    /** Array of the entities */
    data?: (OtaPackageInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«Queue» */
export interface PageDataQueue {
    /** Array of the entities */
    data?: (Queue)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«Role» */
export interface PageDataRole {
    /** Array of the entities */
    data?: (Role)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«RuleChain» */
export interface PageDataRuleChain {
    /** Array of the entities */
    data?: (RuleChain)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«SchedulerEventInfo» */
export interface PageDataSchedulerEventInfo {
    /** Array of the entities */
    data?: (SchedulerEventInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«ShortEntityView» */
export interface PageDataShortEntityView {
    /** Array of the entities */
    data?: (ShortEntityView)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«TbResourceInfo» */
export interface PageDataTbResourceInfo {
    /** Array of the entities */
    data?: (TbResourceInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«TenantInfo» */
export interface PageDataTenantInfo {
    /** Array of the entities */
    data?: (TenantInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«TenantProfile» */
export interface PageDataTenantProfile {
    /** Array of the entities */
    data?: (TenantProfile)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«Tenant» */
export interface PageDataTenant {
    /** Array of the entities */
    data?: (Tenant)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«UserEmailInfo» */
export interface PageDataUserEmailInfo {
    /** Array of the entities */
    data?: (UserEmailInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«UserInfo» */
export interface PageDataUserInfo {
    /** Array of the entities */
    data?: (UserInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«User» */
export interface PageDataUser {
    /** Array of the entities */
    data?: (User)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«WidgetTypeInfo» */
export interface PageDataWidgetTypeInfo {
    /** Array of the entities */
    data?: (WidgetTypeInfo)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** PageData«WidgetsBundle» */
export interface PageDataWidgetsBundle {
    /** Array of the entities */
    data?: (WidgetsBundle)[];
    /**
     * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
     * @format int32
     */
    totalPages?: number;
    /**
     * Total number of elements in all available pages
     * @format int64
     */
    totalElements?: number;
    /**
     * 'false' value indicates the end of the result set
     * @example false
     */
    hasNext?: boolean;
}
/** Palette */
export interface Palette {
    /**
     * Name of the pre-defined palette, or 'custom'
     * @example "custom"
     */
    type: string;
    /**
     * Pre-defined palette name that the custom palette extends
     * @example "purple"
     */
    extends?: string;
    /** Mapping of hue identifier number to the rgb(a) color code */
    colors?: Record<string, string>;
}
/** PaletteSettings */
export interface PaletteSettings {
    /** Primary palette JSON */
    primaryPalette: Palette;
    /** Accent palette JSON */
    accentPalette: Palette;
}
/** PlatformTwoFaSettings */
export interface PlatformTwoFaSettings {
    /** @format int32 */
    maxVerificationFailuresBeforeUserLockout?: number;
    /** @format int32 */
    minVerificationCodeSendPeriod: number;
    providers: (TwoFaProviderConfig)[];
    /** @format int32 */
    totalAllowedTimeForVerification: number;
    useSystemTwoFactorAuthSettings?: boolean;
    /** @pattern [1-9]\d*:[1-9]\d* */
    verificationCodeCheckRateLimit?: string;
}
/** PlatformUsersNotificationTargetConfig */
export type PlatformUsersNotificationTargetConfig = (NotificationTargetConfig & {
    description?: string;
    usersFilter: UsersFilter;
}) & ({
    description?: string;
    usersFilter?: UsersFilter;
});
/** PowerSavingConfiguration */
export interface PowerSavingConfiguration {
    /** @format int64 */
    edrxCycle?: number;
    /** @format int64 */
    pagingTransmissionWindow?: number;
    powerMode?: "DRX" | "E_DRX" | "PSM";
    /** @format int64 */
    psmActivityTimer?: number;
}
/** ProcessingStrategy */
export interface ProcessingStrategy {
    /** @format double */
    failurePercentage?: number;
    /** @format int64 */
    maxPauseBetweenRetries?: number;
    /** @format int64 */
    pauseBetweenRetries?: number;
    /** @format int32 */
    retries?: number;
    type?: "RETRY_ALL" | "RETRY_FAILED" | "RETRY_FAILED_AND_TIMED_OUT" | "RETRY_TIMED_OUT" | "SKIP_ALL_FAILURES" | "SKIP_ALL_FAILURES_AND_TIMED_OUT";
}
/** ProtoTransportPayloadConfiguration */
export type ProtoTransportPayloadConfiguration = (TransportPayloadTypeConfiguration & {
    deviceAttributesProtoSchema?: string;
    deviceRpcRequestProtoSchema?: string;
    deviceRpcResponseProtoSchema?: string;
    deviceTelemetryProtoSchema?: string;
    enableCompatibilityWithJsonPayloadFormat?: boolean;
    useJsonPayloadFormatForDefaultDownlinkTopics?: boolean;
}) & ({
    deviceAttributesProtoSchema?: string;
    deviceRpcRequestProtoSchema?: string;
    deviceRpcResponseProtoSchema?: string;
    deviceTelemetryProtoSchema?: string;
    enableCompatibilityWithJsonPayloadFormat?: boolean;
    useJsonPayloadFormatForDefaultDownlinkTopics?: boolean;
});
/** Queue */
export interface Queue {
    additionalInfo?: JsonNode;
    consumerPerPartition?: boolean;
    /** @format int64 */
    createdTime?: number;
    id?: QueueId;
    name?: string;
    /** @format int64 */
    packProcessingTimeout?: number;
    /** @format int32 */
    partitions?: number;
    /** @format int32 */
    pollInterval?: number;
    processingStrategy?: ProcessingStrategy;
    submitStrategy?: SubmitStrategy;
    tenantId?: TenantId;
    topic?: string;
}
/** QueueId */
export interface QueueId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "QUEUE"
     */
    entityType: "QUEUE";
}
/** RPKLwM2MBootstrapServerCredential */
export interface RPKLwM2MBootstrapServerCredential {
    /**
     * Server short Id. Used as link to associate server Object Instance. This identifier uniquely identifies each LwM2M Server configured for the LwM2M Client. This Resource MUST be set when the Bootstrap-Server Resource has a value of 'false'. The values ID:0 and ID:65535 values MUST NOT be used for identifying the LwM2M Server.
     * @format int32
     * @example 123
     */
    shortServerId?: number;
    /**
     * Is Bootstrap Server or Lwm2m Server. The LwM2M Client MAY be configured to use one or more LwM2M Server Account(s). The LwM2M Client MUST have at most one LwM2M Bootstrap-Server Account. (*) The LwM2M client MUST have at least one LwM2M server account after completing the boot sequence specified.
     * @example false
     */
    bootstrapServerIs?: boolean;
    /**
     * Host for 'No Security' mode
     * @example "0.0.0.0"
     */
    host?: string;
    /**
     * Port for  Lwm2m Server: 'No Security' mode: Lwm2m Server or Bootstrap Server
     * @format int32
     */
    port?: number;
    /**
     * Client Hold Off Time. The number of seconds to wait before initiating a Client Initiated Bootstrap once the LwM2M Client has determined it should initiate this bootstrap mode. (This information is relevant for use with a Bootstrap-Server only.)
     * @format int32
     * @example 1
     */
    clientHoldOffTime?: number;
    /**
     * Server Public Key for 'Security' mode (DTLS): RPK or X509. Format: base64 encoded
     * @example "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEAZ0pSaGKHk/GrDaUDnQZpeEdGwX7m3Ws+U/kiVat
     * +44sgk3c8g0LotfMpLlZJPhPwJ6ipXV+O1r7IZUjBs3LNA=="
     */
    serverPublicKey?: string;
    /**
     * Server Public Key for 'Security' mode (DTLS): X509. Format: base64 encoded
     * @example "MMIICODCCAd6gAwIBAgIUI88U1zowOdrxDK/dOV+36gJxI2MwCgYIKoZIzj0EAwIwejELMAkGA1UEBhMCVUs
     * xEjAQBgNVBAgTCUt5aXYgY2l0eTENMAsGA1UEBxMES3lpdjEUMBIGA1UEChMLVGhpbmdzYm9hcmQxFzAVBgNVBAsMDkRFVkVMT1BFUl9URVNUMRkwFwYDVQQDDBBpbnRlcm1lZGlhdGVfY2EwMB4XDTIyMDEwOTEzMDMwMFoXDTI3MDEwODEzMDMwMFowFDESMBAGA1UEAxM
     * JbG9jYWxob3N0MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEUO3vBo/JTv0eooY7XHiKAIVDoWKFqtrU7C6q8AIKqpLcqhCdW+haFeBOH3PjY6EwaWkY04Bir4oanU0s7tz2uKOBpzCBpDAOBgNVHQ8BAf8EBAMCBaAwEwYDVR0lBAwwCgYIKwYBBQUHAwEwDAYDVR0TAQH/
     * BAIwADAdBgNVHQ4EFgQUEjc3Q4a0TxzP/3x3EV4fHxYUg0YwHwYDVR0jBBgwFoAUuSquGycMU6Q0SYNcbtSkSD3TfH0wLwYDVR0RBCgwJoIVbG9jYWxob3N0LmxvY2FsZG9tYWlugglsb2NhbGhvc3SCAiAtMAoGCCqGSM49BAMCA0gAMEUCIQD7dbZObyUaoDiNbX+9fUNp
     * AWrD7N7XuJUwZ9FcN75R3gIgb2RNjDkHoyUyF1YajwkBk+7XmIXNClmizNJigj908mw="
     */
    serverCertificate?: string;
    /**
     * Bootstrap Server Account Timeout (If the value is set to 0, or if this resource is not instantiated, the Bootstrap-Server Account lifetime is infinite.)
     * @format int32
     * @example 0
     */
    bootstrapServerAccountTimeout?: number;
    /**
     * Specify the lifetime of the registration in seconds.
     * @format int32
     * @example 300
     */
    lifetime?: number;
    /**
     * The default value the LwM2M Client should use for the Minimum Period of an Observation in the absence of this parameter being included in an Observation. If this Resource doesn’t exist, the default value is 0.
     * @format int32
     * @example 1
     */
    defaultMinPeriod?: number;
    /**
     * If true, the LwM2M Client stores “Notify” operations to the LwM2M Server while the LwM2M Server account is disabled or the LwM2M Client is offline. After the LwM2M Server account is enabled or the LwM2M Client is online, the LwM2M Client reports the stored “Notify” operations to the Server. If false, the LwM2M Client discards all the “Notify” operations or temporarily disables the Observe function while the LwM2M Server is disabled or the LwM2M Client is offline. The default value is true.
     * @example true
     */
    notifIfDisabled?: boolean;
    /**
     * This Resource defines the transport binding configured for the LwM2M Client. If the LwM2M Client supports the binding specified in this Resource, the LwM2M Client MUST use that transport for the Current Binding Mode.
     * @example "U"
     */
    binding?: string;
}
/** RateLimitsNotificationRuleTriggerConfig */
export interface RateLimitsNotificationRuleTriggerConfig {
    /** @uniqueItems true */
    apis?: ("CASSANDRA_QUERIES" | "ENTITY_EXPORT" | "ENTITY_IMPORT" | "INTEGRATION_MSGS_PER_DEVICE" | "INTEGRATION_MSGS_PER_TENANT" | "NOTIFICATION_REQUESTS" | "NOTIFICATION_REQUESTS_PER_RULE" | "PASSWORD_RESET" | "REPORTS" | "REST_REQUESTS_PER_CUSTOMER" | "REST_REQUESTS_PER_TENANT" | "TRANSPORT_MESSAGES_PER_DEVICE" | "TRANSPORT_MESSAGES_PER_TENANT" | "TWO_FA_VERIFICATION_CODE_CHECK" | "TWO_FA_VERIFICATION_CODE_SEND" | "WS_UPDATES_PER_SESSION")[];
    triggerType?: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
}
/** RawDataEventFilter */
export type RawDataEventFilter = (EventFilter & {
    notEmpty?: boolean;
    /**
     * String value representing the event type
     * @example "STATS"
     */
    eventType: "DEBUG_CONVERTER" | "DEBUG_INTEGRATION" | "DEBUG_RULE_CHAIN" | "DEBUG_RULE_NODE" | "ERROR" | "LC_EVENT" | "RAW_DATA" | "STATS";
    /**
     * String value representing the server name, identifier or ip address where the platform is running
     * @example "ip-172-31-24-152"
     */
    server?: string;
    /**
     * String value representing the uuid
     * @example "STARTED"
     */
    uuid?: string;
    /** String value representing the message type */
    messageType?: string;
    /** String value representing the message */
    message?: string;
}) & ({
    notEmpty?: boolean;
    /**
     * String value representing the event type
     * @example "STATS"
     */
    eventType?: "DEBUG_CONVERTER" | "DEBUG_INTEGRATION" | "DEBUG_RULE_CHAIN" | "DEBUG_RULE_NODE" | "ERROR" | "LC_EVENT" | "RAW_DATA" | "STATS";
    /**
     * String value representing the server name, identifier or ip address where the platform is running
     * @example "ip-172-31-24-152"
     */
    server?: string;
    /**
     * String value representing the uuid
     * @example "STARTED"
     */
    uuid?: string;
    /** String value representing the message type */
    messageType?: string;
    /** String value representing the message */
    message?: string;
});
/** RelationEntityTypeFilter */
export interface RelationEntityTypeFilter {
    /**
     * Type of the relation between root entity and other entity (e.g. 'Contains' or 'Manages').
     * @example "Contains"
     */
    relationType?: string;
    /** Array of entity types to filter the related entities (e.g. 'DEVICE', 'ASSET'). */
    entityTypes?: ("ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE")[];
}
/** RelationsQueryFilter */
export type RelationsQueryFilter = (EntityFilter & {
    direction?: "FROM" | "TO";
    fetchLastLevelOnly?: boolean;
    filters?: (RelationEntityTypeFilter)[];
    /** @format int32 */
    maxLevel?: number;
    multiRoot?: boolean;
    multiRootEntitiesType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    /** @uniqueItems true */
    multiRootEntityIds?: (string)[];
    rootEntity?: EntityId;
}) & ({
    direction?: "FROM" | "TO";
    fetchLastLevelOnly?: boolean;
    filters?: (RelationEntityTypeFilter)[];
    /** @format int32 */
    maxLevel?: number;
    multiRoot?: boolean;
    multiRootEntitiesType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    /** @uniqueItems true */
    multiRootEntityIds?: (string)[];
    rootEntity?: EntityId;
});
/** RelationsSearchParameters */
export interface RelationsSearchParameters {
    /**
     * Root entity id to start search from.
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    rootId?: string;
    /** Type of the root entity. */
    rootType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    /** Type of the root entity. */
    direction?: "FROM" | "TO";
    /** Type of the relation. */
    relationTypeGroup?: "COMMON" | "DASHBOARD" | "EDGE" | "EDGE_AUTO_ASSIGN_RULE_CHAIN" | "FROM_ENTITY_GROUP" | "RULE_CHAIN" | "RULE_NODE";
    /**
     * Maximum level of the search depth.
     * @format int32
     */
    maxLevel?: number;
    /**
     * Fetch entities that match the last level of search. Useful to find Devices that are strictly 'maxLevel' relations away from the root entity.
     * @example false
     */
    fetchLastLevelOnly?: boolean;
}
/** RepeatingAlarmConditionSpec */
export type RepeatingAlarmConditionSpec = (AlarmConditionSpec & {
    predicate?: FilterPredicateValueInt;
}) & ({
    predicate?: FilterPredicateValueInt;
});
/** ReportConfig */
export interface ReportConfig {
    baseUrl?: string;
    dashboardId?: string;
    namePattern?: string;
    state?: string;
    timewindow?: JsonNode;
    timezone?: string;
    type?: string;
    useCurrentUserCredentials?: boolean;
    useDashboardTimewindow?: boolean;
    userId?: string;
}
/** RepositorySettings */
export interface RepositorySettings {
    authMethod?: "PRIVATE_KEY" | "USERNAME_PASSWORD";
    defaultBranch?: string;
    password?: string;
    privateKey?: string;
    privateKeyFileName?: string;
    privateKeyPassword?: string;
    readOnly?: boolean;
    repositoryUri?: string;
    showMergeCommits?: boolean;
    username?: string;
}
/** RepositorySettingsInfo */
export interface RepositorySettingsInfo {
    configured?: boolean;
    readOnly?: boolean;
}
/** ResetPasswordEmailRequest */
export interface ResetPasswordEmailRequest {
    /**
     * The email of the user
     * @example "user@example.com"
     */
    email?: string;
}
/** ResetPasswordRequest */
export interface ResetPasswordRequest {
    /**
     * The reset token to verify
     * @example "AAB254FF67D.."
     */
    resetToken?: string;
    /**
     * The new password to set
     * @example "secret"
     */
    password?: string;
}
/** Resource */
export interface Resource {
    description?: string;
    /** @format binary */
    file?: File;
    filename?: string;
    inputStream?: InputStream;
    open?: boolean;
    readable?: boolean;
    /** @format uri */
    uri?: string;
    /** @format url */
    url?: string;
}
/** ResponseEntity */
export interface ResponseEntity {
    body?: object;
    statusCode?: "ACCEPTED" | "ALREADY_REPORTED" | "BAD_GATEWAY" | "BAD_REQUEST" | "BANDWIDTH_LIMIT_EXCEEDED" | "CHECKPOINT" | "CONFLICT" | "CONTINUE" | "CREATED" | "DESTINATION_LOCKED" | "EXPECTATION_FAILED" | "FAILED_DEPENDENCY" | "FORBIDDEN" | "FOUND" | "GATEWAY_TIMEOUT" | "GONE" | "HTTP_VERSION_NOT_SUPPORTED" | "IM_USED" | "INSUFFICIENT_SPACE_ON_RESOURCE" | "INSUFFICIENT_STORAGE" | "INTERNAL_SERVER_ERROR" | "I_AM_A_TEAPOT" | "LENGTH_REQUIRED" | "LOCKED" | "LOOP_DETECTED" | "METHOD_FAILURE" | "METHOD_NOT_ALLOWED" | "MOVED_PERMANENTLY" | "MOVED_TEMPORARILY" | "MULTIPLE_CHOICES" | "MULTI_STATUS" | "NETWORK_AUTHENTICATION_REQUIRED" | "NON_AUTHORITATIVE_INFORMATION" | "NOT_ACCEPTABLE" | "NOT_EXTENDED" | "NOT_FOUND" | "NOT_IMPLEMENTED" | "NOT_MODIFIED" | "NO_CONTENT" | "OK" | "PARTIAL_CONTENT" | "PAYLOAD_TOO_LARGE" | "PAYMENT_REQUIRED" | "PERMANENT_REDIRECT" | "PRECONDITION_FAILED" | "PRECONDITION_REQUIRED" | "PROCESSING" | "PROXY_AUTHENTICATION_REQUIRED" | "REQUESTED_RANGE_NOT_SATISFIABLE" | "REQUEST_ENTITY_TOO_LARGE" | "REQUEST_HEADER_FIELDS_TOO_LARGE" | "REQUEST_TIMEOUT" | "REQUEST_URI_TOO_LONG" | "RESET_CONTENT" | "SEE_OTHER" | "SERVICE_UNAVAILABLE" | "SWITCHING_PROTOCOLS" | "TEMPORARY_REDIRECT" | "TOO_EARLY" | "TOO_MANY_REQUESTS" | "UNAUTHORIZED" | "UNAVAILABLE_FOR_LEGAL_REASONS" | "UNPROCESSABLE_ENTITY" | "UNSUPPORTED_MEDIA_TYPE" | "UPGRADE_REQUIRED" | "URI_TOO_LONG" | "USE_PROXY" | "VARIANT_ALSO_NEGOTIATES";
    /** @format int32 */
    statusCodeValue?: number;
}
/** Role */
export interface Role {
    /** JSON object with the Role Id. Specify this field to update the Role. Referencing non-existing Role Id will cause error. Omit this field to create new Role. */
    id?: RoleId;
    /**
     * Timestamp of the role creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id. */
    tenantId: TenantId;
    /** JSON object with Customer Id.  */
    customerId?: CustomerId;
    /** JSON object with Customer or Tenant Id */
    ownerId?: EntityId;
    /**
     * Role Name
     * @example "Read-Only"
     */
    name: string;
    /**
     * Type of the role: generic or group
     * @example "GROUP"
     */
    type: "GENERIC" | "GROUP";
    /** JSON object with the set of permissions. Structure is specific for role type */
    permissions?: JsonNode;
    /** Additional parameters of the role */
    additionalInfo?: JsonNode;
}
/** RoleId */
export interface RoleId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "ROLE"
     */
    entityType: "ROLE";
}
/** Rpc */
export interface Rpc {
    /** JSON object with the rpc Id. Referencing non-existing rpc Id will cause error. */
    id?: RpcId;
    /**
     * Timestamp of the rpc creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id. */
    tenantId?: TenantId;
    /** JSON object with Device Id. */
    deviceId?: DeviceId;
    /**
     * Expiration time of the request.
     * @format int64
     */
    expirationTime?: number;
    /** The request body that will be used to send message to device. */
    request?: JsonNode;
    /** The response from the device. */
    response?: JsonNode;
    /** The current status of the RPC call. */
    status?: "DELETED" | "DELIVERED" | "EXPIRED" | "FAILED" | "QUEUED" | "SENT" | "SUCCESSFUL" | "TIMEOUT";
    /** Additional info used in the rule engine to process the updates to the RPC state. */
    additionalInfo?: JsonNode;
}
/** RpcId */
export interface RpcId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "RPC"
     */
    entityType: "RPC";
}
/** RuleChain */
export interface RuleChain {
    additionalInfo?: JsonNode;
    /** JSON object with the Rule Chain Id. Specify this field to update the Rule Chain. Referencing non-existing Rule Chain Id will cause error. Omit this field to create new rule chain. */
    id?: RuleChainId;
    /**
     * Timestamp of the rule chain creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id. */
    tenantId: TenantId;
    /**
     * Rule Chain name
     * @example "Humidity data processing"
     */
    name: string;
    /**
     * Rule Chain type. 'EDGE' rule chains are processing messages on the edge devices only.
     * @example "A4B72CCDFF33"
     */
    type?: "CORE" | "EDGE";
    /** JSON object with Rule Chain Id. Pointer to the first rule node that should receive all messages pushed to this rule chain. */
    firstRuleNodeId?: RuleNodeId;
    /**
     * Indicates root rule chain. The root rule chain process messages from all devices and entities by default. User may configure default rule chain per device profile.
     * @example false
     */
    root?: boolean;
    /**
     * Reserved for future usage.
     * @example false
     */
    debugMode?: boolean;
    /** Reserved for future usage. The actual list of rule nodes and their relations is stored in the database separately. */
    configuration?: JsonNode;
}
/** RuleChainConnectionInfo */
export interface RuleChainConnectionInfo {
    /**
     * Index of rule node in the 'nodes' array of the RuleChainMetaData. Indicates the 'from' part of the connection.
     * @format int32
     */
    fromIndex: number;
    /** JSON object with the Rule Chain Id. */
    targetRuleChainId: RuleChainId;
    /** JSON object with the additional information about the connection. */
    additionalInfo: JsonNode;
    /** Type of the relation. Typically indicated the result of processing by the 'from' rule node. For example, 'Success' or 'Failure' */
    type: string;
}
/** RuleChainData */
export interface RuleChainData {
    /** List of the Rule Chain objects. */
    ruleChains: (RuleChain)[];
    /** List of the Rule Chain metadata objects. */
    metadata: (RuleChainMetaData)[];
}
/** RuleChainDebugEventFilter */
export type RuleChainDebugEventFilter = (EventFilter & {
    error?: boolean;
    notEmpty?: boolean;
    /**
     * String value representing the event type
     * @example "STATS"
     */
    eventType: "DEBUG_CONVERTER" | "DEBUG_INTEGRATION" | "DEBUG_RULE_CHAIN" | "DEBUG_RULE_NODE" | "ERROR" | "LC_EVENT" | "RAW_DATA" | "STATS";
    /**
     * String value representing the server name, identifier or ip address where the platform is running
     * @example "ip-172-31-24-152"
     */
    server?: string;
    /** String value representing the message */
    message?: string;
    /**
     * The case insensitive 'contains' filter based on error message
     * @example "not present in the DB"
     */
    errorStr?: string;
}) & ({
    error?: boolean;
    notEmpty?: boolean;
    /**
     * String value representing the event type
     * @example "STATS"
     */
    eventType?: "DEBUG_CONVERTER" | "DEBUG_INTEGRATION" | "DEBUG_RULE_CHAIN" | "DEBUG_RULE_NODE" | "ERROR" | "LC_EVENT" | "RAW_DATA" | "STATS";
    /**
     * String value representing the server name, identifier or ip address where the platform is running
     * @example "ip-172-31-24-152"
     */
    server?: string;
    /** String value representing the message */
    message?: string;
    /**
     * The case insensitive 'contains' filter based on error message
     * @example "not present in the DB"
     */
    errorStr?: string;
});
/** RuleChainExportData */
export type RuleChainExportData = (EntityExportDataObject & {
    attributes?: Record<string, (AttributeExportData)[]>;
    entity?: RuleChain;
    entityType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    metaData?: RuleChainMetaData;
    relations?: (EntityRelation)[];
}) & ({
    attributes?: Record<string, (AttributeExportData)[]>;
    entity?: RuleChain;
    entityType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    metaData?: RuleChainMetaData;
    relations?: (EntityRelation)[];
});
/** RuleChainId */
export interface RuleChainId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "RULE_CHAIN"
     */
    entityType: "RULE_CHAIN";
}
/** RuleChainImportResult */
export interface RuleChainImportResult {
    error?: string;
    ruleChainId?: RuleChainId;
    ruleChainName?: string;
    updated?: boolean;
}
/** RuleChainMetaData */
export interface RuleChainMetaData {
    /** JSON object with Rule Chain Id. */
    ruleChainId: RuleChainId;
    /**
     * Index of the first rule node in the 'nodes' list
     * @format int32
     */
    firstNodeIndex: number;
    /** List of rule node JSON objects */
    nodes: (RuleNode)[];
    /** List of JSON objects that represent connections between rule nodes */
    connections: (NodeConnectionInfo)[];
    /** List of JSON objects that represent connections between rule nodes and other rule chains. */
    ruleChainConnections: (RuleChainConnectionInfo)[];
}
/** RuleChainOutputLabelsUsage */
export interface RuleChainOutputLabelsUsage {
    /** Rule Chain Id */
    ruleChainId: RuleChainId;
    /** Rule Node Id */
    ruleNodeId: RuleNodeId;
    /** Rule Chain Name */
    ruleChainName: string;
    /** Rule Node Name */
    ruleNodeName: string;
    /**
     * Output labels
     * @uniqueItems true
     */
    labels: (string)[];
}
/** RuleEngineComponentLifecycleEventNotificationRuleTriggerConfig */
export type RuleEngineComponentLifecycleEventNotificationRuleTriggerConfig = (NotificationRuleTriggerConfig & {
    onlyRuleChainLifecycleFailures?: boolean;
    onlyRuleNodeLifecycleFailures?: boolean;
    /** @uniqueItems true */
    ruleChainEvents?: ("ACTIVATED" | "CREATED" | "DEACTIVATED" | "DELETED" | "FAILED" | "STARTED" | "STOPPED" | "SUSPENDED" | "UPDATED")[];
    /** @uniqueItems true */
    ruleChains?: (string)[];
    /** @uniqueItems true */
    ruleNodeEvents?: ("ACTIVATED" | "CREATED" | "DEACTIVATED" | "DELETED" | "FAILED" | "STARTED" | "STOPPED" | "SUSPENDED" | "UPDATED")[];
    trackRuleNodeEvents?: boolean;
    triggerType?: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
}) & ({
    onlyRuleChainLifecycleFailures?: boolean;
    onlyRuleNodeLifecycleFailures?: boolean;
    /** @uniqueItems true */
    ruleChainEvents?: ("ACTIVATED" | "CREATED" | "DEACTIVATED" | "DELETED" | "FAILED" | "STARTED" | "STOPPED" | "SUSPENDED" | "UPDATED")[];
    /** @uniqueItems true */
    ruleChains?: (string)[];
    /** @uniqueItems true */
    ruleNodeEvents?: ("ACTIVATED" | "CREATED" | "DEACTIVATED" | "DELETED" | "FAILED" | "STARTED" | "STOPPED" | "SUSPENDED" | "UPDATED")[];
    trackRuleNodeEvents?: boolean;
    triggerType?: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
});
/** RuleNode */
export interface RuleNode {
    externalId?: RuleNodeId;
    /** JSON object with the Rule Node Id. Specify this field to update the Rule Node. Referencing non-existing Rule Node Id will cause error. Omit this field to create new rule node. */
    id?: RuleNodeId;
    /**
     * Timestamp of the rule node creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with the Rule Chain Id.  */
    ruleChainId?: RuleChainId;
    /**
     * Full Java Class Name of the rule node implementation.
     * @example "com.mycompany.iot.rule.engine.ProcessingNode"
     */
    type?: string;
    /**
     * User defined name of the rule node. Used on UI and for logging.
     * @example "Process sensor reading"
     */
    name?: string;
    /**
     * Enable/disable debug.
     * @example false
     */
    debugMode?: boolean;
    /**
     * Enable/disable singleton mode.
     * @example false
     */
    singletonMode?: boolean;
    /**
     * Version of rule node configuration.
     * @format int32
     * @example 0
     */
    configurationVersion?: number;
    /** JSON with the rule node configuration. Structure depends on the rule node implementation. */
    configuration?: JsonNode;
    /** Additional parameters of the rule node. Contains 'layoutX' and 'layoutY' properties for visualization. */
    additionalInfo?: JsonNode;
}
/** RuleNodeDebugEventFilter */
export type RuleNodeDebugEventFilter = (EventFilter & {
    error?: boolean;
    notEmpty?: boolean;
    /**
     * String value representing the event type
     * @example "STATS"
     */
    eventType: "DEBUG_CONVERTER" | "DEBUG_INTEGRATION" | "DEBUG_RULE_CHAIN" | "DEBUG_RULE_NODE" | "ERROR" | "LC_EVENT" | "RAW_DATA" | "STATS";
    /**
     * String value representing the server name, identifier or ip address where the platform is running
     * @example "ip-172-31-24-152"
     */
    server?: string;
    /** String value representing msg direction type (incoming to entity or outcoming from entity) */
    msgDirectionType?: "IN" | "OUT";
    /**
     * String value representing the entity id in the event body (originator of the message)
     * @example "de9d54a0-2b7a-11ec-a3cc-23386423d98f"
     */
    entityId?: string;
    /**
     * The case insensitive 'contains' filter based on error message
     * @example "not present in the DB"
     */
    errorStr?: string;
    /** String value representing the entity type */
    entityType?: "DEVICE";
    /**
     * String value representing the message id in the rule engine
     * @example "de9d54a0-2b7a-11ec-a3cc-23386423d98f"
     */
    msgId?: string;
    /**
     * String value representing the message type
     * @example "POST_TELEMETRY_REQUEST"
     */
    msgType?: string;
    /**
     * String value representing the type of message routing
     * @example "Success"
     */
    relationType?: string;
    /**
     * The case insensitive 'contains' filter based on data (key and value) for the message.
     * @example "humidity"
     */
    dataSearch?: string;
    /**
     * The case insensitive 'contains' filter based on metadata (key and value) for the message.
     * @example "deviceName"
     */
    metadataSearch?: string;
}) & ({
    error?: boolean;
    notEmpty?: boolean;
    /**
     * String value representing the event type
     * @example "STATS"
     */
    eventType?: "DEBUG_CONVERTER" | "DEBUG_INTEGRATION" | "DEBUG_RULE_CHAIN" | "DEBUG_RULE_NODE" | "ERROR" | "LC_EVENT" | "RAW_DATA" | "STATS";
    /**
     * String value representing the server name, identifier or ip address where the platform is running
     * @example "ip-172-31-24-152"
     */
    server?: string;
    /** String value representing msg direction type (incoming to entity or outcoming from entity) */
    msgDirectionType?: "IN" | "OUT";
    /**
     * String value representing the entity id in the event body (originator of the message)
     * @example "de9d54a0-2b7a-11ec-a3cc-23386423d98f"
     */
    entityId?: string;
    /**
     * The case insensitive 'contains' filter based on error message
     * @example "not present in the DB"
     */
    errorStr?: string;
    /** String value representing the entity type */
    entityType?: "DEVICE";
    /**
     * String value representing the message id in the rule engine
     * @example "de9d54a0-2b7a-11ec-a3cc-23386423d98f"
     */
    msgId?: string;
    /**
     * String value representing the message type
     * @example "POST_TELEMETRY_REQUEST"
     */
    msgType?: string;
    /**
     * String value representing the type of message routing
     * @example "Success"
     */
    relationType?: string;
    /**
     * The case insensitive 'contains' filter based on data (key and value) for the message.
     * @example "humidity"
     */
    dataSearch?: string;
    /**
     * The case insensitive 'contains' filter based on metadata (key and value) for the message.
     * @example "deviceName"
     */
    metadataSearch?: string;
});
/** RuleNodeId */
export interface RuleNodeId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "RULE_NODE"
     */
    entityType: "RULE_NODE";
}
/** SaveDeviceWithCredentialsRequest */
export interface SaveDeviceWithCredentialsRequest {
    /** The JSON with device entity. */
    device: Device;
    /** The JSON with credentials entity. */
    credentials: DeviceCredentials;
}
/** SaveOtaPackageInfoRequest */
export interface SaveOtaPackageInfoRequest {
    /** JSON object with the ota package Id. Specify existing ota package Id to update the ota package. Referencing non-existing ota package id will cause error. Omit this field to create new ota package. */
    id?: OtaPackageId;
    /**
     * Timestamp of the ota package creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id. Tenant Id of the ota package can't be changed. */
    tenantId?: TenantId;
    /** JSON object with Device Profile Id. Device Profile Id of the ota package can't be changed. */
    deviceProfileId?: DeviceProfileId;
    /**
     * OTA Package type.
     * @example "FIRMWARE"
     */
    type?: "FIRMWARE" | "SOFTWARE";
    /**
     * OTA Package title.
     * @example "fw"
     */
    title?: string;
    /**
     * OTA Package version.
     * @example "1.0"
     */
    version?: string;
    /**
     * OTA Package tag.
     * @example "fw_1.0"
     */
    tag?: string;
    /**
     * OTA Package url.
     * @example "http://thingsboard.org/fw/1"
     */
    url?: string;
    /**
     * Indicates OTA Package 'has data'. Field is returned from DB ('true' if data exists or url is set).  If OTA Package 'has data' is 'false' we can not assign the OTA Package to the Device or Device Profile.
     * @example true
     */
    hasData?: boolean;
    /**
     * OTA Package file name.
     * @example "fw_1.0"
     */
    fileName?: string;
    /**
     * OTA Package content type.
     * @example "APPLICATION_OCTET_STREAM"
     */
    contentType?: string;
    /**
     * OTA Package checksum algorithm.
     * @example "CRC32"
     */
    checksumAlgorithm?: "CRC32" | "MD5" | "MURMUR3_128" | "MURMUR3_32" | "SHA256" | "SHA384" | "SHA512";
    /**
     * OTA Package checksum.
     * @example "0xd87f7e0c"
     */
    checksum?: string;
    /**
     * OTA Package data size.
     * @format int64
     * @example 8
     */
    dataSize?: number;
    /**
     * Indicates OTA Package uses url. Should be 'true' if uses url or 'false' if will be used data.
     * @example true
     */
    usesUrl?: boolean;
    /**
     * OTA Package description.
     * @example "Description for the OTA Package fw_1.0"
     */
    additionalInfo?: JsonNode;
}
/** SchedulerEvent */
export interface SchedulerEvent {
    /** JSON object with the scheduler event Id. Specify this field to update the scheduler event. Referencing non-existing scheduler event Id will cause error. Omit this field to create new scheduler event */
    id?: SchedulerEventId;
    /**
     * Timestamp of the scheduler event creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id */
    tenantId?: TenantId;
    /** JSON object with Customer Id */
    customerId?: CustomerId;
    /** JSON object with Originator Id */
    originatorId?: EntityId;
    /** JSON object with Customer or Tenant Id */
    ownerId?: EntityId;
    /**
     * scheduler event name
     * @example "Weekly Dashboard Report"
     */
    name?: string;
    /**
     * scheduler event type
     * @example "generateReport"
     */
    type?: string;
    /** a JSON value with schedule time configuration */
    schedule?: JsonNode;
    /** a JSON value with scheduler event configuration */
    configuration?: JsonNode;
    /** Additional parameters of the scheduler event */
    additionalInfo?: JsonNode;
}
/** SchedulerEventFilter */
export type SchedulerEventFilter = (EntityFilter & {
    eventType?: string;
    originator?: EntityId;
}) & ({
    eventType?: string;
    originator?: EntityId;
});
/** SchedulerEventId */
export interface SchedulerEventId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "SCHEDULER_EVENT"
     */
    entityType: "SCHEDULER_EVENT";
}
/** SchedulerEventInfo */
export interface SchedulerEventInfo {
    /** JSON object with the scheduler event Id. Specify this field to update the scheduler event. Referencing non-existing scheduler event Id will cause error. Omit this field to create new scheduler event */
    id?: SchedulerEventId;
    /**
     * Timestamp of the scheduler event creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id */
    tenantId?: TenantId;
    /** JSON object with Customer Id */
    customerId?: CustomerId;
    /** JSON object with Originator Id */
    originatorId?: EntityId;
    /** JSON object with Customer or Tenant Id */
    ownerId?: EntityId;
    /**
     * scheduler event name
     * @example "Weekly Dashboard Report"
     */
    name?: string;
    /**
     * scheduler event type
     * @example "generateReport"
     */
    type?: string;
    /** a JSON value with schedule time configuration */
    schedule?: JsonNode;
    /** Additional parameters of the scheduler event */
    additionalInfo?: JsonNode;
}
/** SchedulerEventWithCustomerInfo */
export interface SchedulerEventWithCustomerInfo {
    /** JSON object with the scheduler event Id. Specify this field to update the scheduler event. Referencing non-existing scheduler event Id will cause error. Omit this field to create new scheduler event */
    id?: SchedulerEventId;
    /**
     * Timestamp of the scheduler event creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id */
    tenantId?: TenantId;
    /** JSON object with Customer Id */
    customerId?: CustomerId;
    /** JSON object with Originator Id */
    originatorId?: EntityId;
    /** JSON object with Customer or Tenant Id */
    ownerId?: EntityId;
    /**
     * scheduler event name
     * @example "Weekly Dashboard Report"
     */
    name?: string;
    /**
     * scheduler event type
     * @example "generateReport"
     */
    type?: string;
    /** a JSON value with schedule time configuration */
    schedule?: JsonNode;
    /** Additional parameters of the scheduler event */
    additionalInfo?: JsonNode;
    /**
     * Title of the customer
     * @example "Company A"
     */
    customerTitle?: string;
    /** Parameter that specifies if customer is public */
    customerIsPublic?: object;
}
/** SecuritySettings */
export interface SecuritySettings {
    /** The user password policy object. */
    passwordPolicy?: UserPasswordPolicy;
    /**
     * Maximum number of failed login attempts allowed before user account is locked.
     * @format int32
     */
    maxFailedLoginAttempts?: number;
    /** Email to use for notifications about locked users. */
    userLockoutNotificationEmail?: string;
}
/** SelfRegistrationParams */
export interface SelfRegistrationParams {
    adminSettingsId?: string;
    signUpTextMessage?: string;
    captchaSiteKey?: string;
    captchaVersion?: string;
    captchaAction?: string;
    /** @example false */
    showPrivacyPolicy?: boolean;
    /** @example false */
    showTermsOfUse?: boolean;
    domainName?: string;
    captchaSecretKey?: string;
    privacyPolicy?: string;
    termsOfUse?: string;
    notificationEmail?: string;
    /** @example "784f394c-42b6-435a-983c-b7beff2784f9" */
    defaultDashboardId?: string;
    /** @example false */
    defaultDashboardFullscreen?: boolean;
    permissions?: (GroupPermission)[];
    pkgName?: string;
    appSecret?: string;
    appScheme?: string;
    appHost?: string;
}
/** ShareGroupRequest */
export interface ShareGroupRequest {
    /**
     * Indicate that the group should be shared with user group 'All' that belongs to Tenant or Customer (see 'ownerId' property description).
     * @example false
     */
    allUserGroup: boolean;
    /** In case 'allUserGroup' is set to true, this property specifies the owner of the user group 'All'. Either Tenant or Customer Id. */
    ownerId?: EntityId;
    /** In case 'allUserGroup' is set to false, this property specifies the specific user group that the entity group should be shared with. */
    userGroupId?: EntityGroupId;
    /**
     * Used if 'roleIds' property is not present. if the value is 'true', creates role with read-only permissions. If the value is 'false', creates role with write permissions.
     * @example false
     */
    readElseWrite?: boolean;
    /** List of group role Ids that should be used to share the entity group with the user group. If not set, the platform will create new role (see 'readElseWrite' property description) */
    roleIds?: (RoleId)[];
}
/** SharedAttributesSettingSnmpCommunicationConfig */
export type SharedAttributesSettingSnmpCommunicationConfig = (SnmpCommunicationConfig & {
    mappings?: (SnmpMapping)[];
    spec?: "CLIENT_ATTRIBUTES_QUERYING" | "SHARED_ATTRIBUTES_SETTING" | "TELEMETRY_QUERYING" | "TO_DEVICE_RPC_REQUEST" | "TO_SERVER_RPC_REQUEST";
}) & ({
    mappings?: (SnmpMapping)[];
    spec?: "CLIENT_ATTRIBUTES_QUERYING" | "SHARED_ATTRIBUTES_SETTING" | "TELEMETRY_QUERYING" | "TO_DEVICE_RPC_REQUEST" | "TO_SERVER_RPC_REQUEST";
});
/** ShortCustomerInfo */
export interface ShortCustomerInfo {
    public?: boolean;
    /** JSON object with the customer Id. */
    customerId?: CustomerId;
    /** Title of the customer. */
    title?: string;
}
/** ShortEntityView */
export interface ShortEntityView {
    /** Entity Id object */
    id: EntityId;
    /** Name of the entity */
    name: string;
}
/** SignUpRequest */
export interface SignUpRequest {
    /**
     * First Name
     * @example "John"
     */
    firstName?: string;
    /**
     * Last Name
     * @example "Doe"
     */
    lastName?: string;
    /**
     * Email will be used for new user to login
     * @example "john.doe@company.com"
     */
    email?: string;
    /**
     * New User Password
     * @example "secret"
     */
    password?: string;
    /** Response from reCAPTCHA validation */
    recaptchaResponse?: string;
    /** For mobile apps only. Mobile app package name */
    pkgName?: string;
    /** For mobile apps only. Mobile app secret */
    appSecret?: string;
}
/** SignUpSelfRegistrationParams */
export interface SignUpSelfRegistrationParams {
    signUpTextMessage?: string;
    captchaSiteKey?: string;
    captchaVersion?: string;
    captchaAction?: string;
    /** @example false */
    showPrivacyPolicy?: boolean;
    /** @example false */
    showTermsOfUse?: boolean;
}
/** SimpleAlarmConditionSpec */
export type SimpleAlarmConditionSpec = (AlarmConditionSpec & object);
/** SingleEntityFilter */
export type SingleEntityFilter = (EntityFilter & {
    singleEntity?: EntityId;
}) & ({
    singleEntity?: EntityId;
});
/** SingleEntityVersionCreateRequest */
export type SingleEntityVersionCreateRequest = (VersionCreateRequest & {
    branch?: string;
    config?: VersionCreateConfig;
    entityId?: EntityId;
    type?: "COMPLEX" | "SINGLE_ENTITY";
    versionName?: string;
}) & ({
    branch?: string;
    config?: VersionCreateConfig;
    entityId?: EntityId;
    type?: "COMPLEX" | "SINGLE_ENTITY";
    versionName?: string;
});
/** SingleEntityVersionLoadRequest */
export type SingleEntityVersionLoadRequest = (VersionLoadRequest & {
    config?: VersionLoadConfig;
    externalEntityId?: EntityId;
    internalEntityId?: EntityId;
    type?: "ENTITY_TYPE" | "SINGLE_ENTITY";
    versionId?: string;
}) & ({
    config?: VersionLoadConfig;
    externalEntityId?: EntityId;
    internalEntityId?: EntityId;
    type?: "ENTITY_TYPE" | "SINGLE_ENTITY";
    versionId?: string;
});
/** SlackConversation */
export interface SlackConversation {
    email?: string;
    id?: string;
    name?: string;
    title?: string;
    type: "DIRECT" | "PRIVATE_CHANNEL" | "PUBLIC_CHANNEL";
    wholeName?: string;
}
/** SlackDeliveryMethodNotificationTemplate */
export interface SlackDeliveryMethodNotificationTemplate {
    body?: string;
    enabled?: boolean;
}
/** SlackNotificationDeliveryMethodConfig */
export interface SlackNotificationDeliveryMethodConfig {
    botToken?: string;
}
/** SlackNotificationTargetConfig */
export type SlackNotificationTargetConfig = (NotificationTargetConfig & {
    conversation: SlackConversation;
    conversationType?: "DIRECT" | "PRIVATE_CHANNEL" | "PUBLIC_CHANNEL";
    description?: string;
}) & ({
    conversation?: SlackConversation;
    conversationType?: "DIRECT" | "PRIVATE_CHANNEL" | "PUBLIC_CHANNEL";
    description?: string;
});
/** SmppSmsProviderConfiguration */
export type SmppSmsProviderConfiguration = (SmsProviderConfiguration & {
    /** Address range */
    addressRange?: string;
    /** TX - Transmitter, RX - Receiver, TRX - Transciever. By default TX is used */
    bindType?: "RX" | "TRX" | "TX";
    /**
     * 0 - SMSC Default Alphabet (ASCII for short and long code and to GSM for toll-free, used as default)
     * 1 - IA5 (ASCII for short and long code, Latin 9 for toll-free (ISO-8859-9))
     * 2 - Octet Unspecified (8-bit binary)
     * 3 - Latin 1 (ISO-8859-1)
     * 4 - Octet Unspecified (8-bit binary)
     * 5 - JIS (X 0208-1990)
     * 6 - Cyrillic (ISO-8859-5)
     * 7 - Latin/Hebrew (ISO-8859-8)
     * 8 - UCS2/UTF-16 (ISO/IEC-10646)
     * 9 - Pictogram Encoding
     * 10 - Music Codes (ISO-2022-JP)
     * 13 - Extended Kanji JIS (X 0212-1990)
     * 14 - Korean Graphic Character Set (KS C 5601/KS X 1001)
     * @format byte
     */
    codingScheme?: string;
    /**
     * Destination NPI (Numbering Plan Identification). 0 by default.
     * 0 - Unknown
     * 1 - ISDN/telephone numbering plan (E163/E164)
     * 3 - Data numbering plan (X.121)
     * 4 - Telex numbering plan (F.69)
     * 6 - Land Mobile (E.212) =6
     * 8 - National numbering plan
     * 9 - Private numbering plan
     * 10 - ERMES numbering plan (ETSI DE/PS 3 01-3)
     * 13 - Internet (IP)
     * 18 - WAP Client Id (to be defined by WAP Forum)
     * @format byte
     */
    destinationNpi?: string;
    /**
     * Destination TON (Type of Number). 5 by default.
     * 0 - Unknown
     * 1 - International
     * 2 - National
     * 3 - Network Specific
     * 4 - Subscriber Number
     * 5 - Alphanumeric
     * 6 - Abbreviated
     * @format byte
     */
    destinationTon?: string;
    /** SMPP host */
    host: string;
    /** Password */
    password: string;
    /**
     * SMPP port
     * @format int32
     */
    port: number;
    /** SMPP version */
    protocolVersion: "3.3" | "3.4";
    /** Service type */
    serviceType?: string;
    /** Source address */
    sourceAddress?: string;
    /**
     * Source NPI (Numbering Plan Identification). Needed is source address is set. 0 by default.
     * 0 - Unknown
     * 1 - ISDN/telephone numbering plan (E163/E164)
     * 3 - Data numbering plan (X.121)
     * 4 - Telex numbering plan (F.69)
     * 6 - Land Mobile (E.212) =6
     * 8 - National numbering plan
     * 9 - Private numbering plan
     * 10 - ERMES numbering plan (ETSI DE/PS 3 01-3)
     * 13 - Internet (IP)
     * 18 - WAP Client Id (to be defined by WAP Forum)
     * @format byte
     */
    sourceNpi?: string;
    /**
     * Source TON (Type of Number). Needed is source address is set. 5 by default.
     * 0 - Unknown
     * 1 - International
     * 2 - National
     * 3 - Network Specific
     * 4 - Subscriber Number
     * 5 - Alphanumeric
     * 6 - Abbreviated
     * @format byte
     */
    sourceTon?: string;
    /** System ID */
    systemId: string;
    /** System type */
    systemType?: string;
}) & ({
    /** Address range */
    addressRange?: string;
    /** TX - Transmitter, RX - Receiver, TRX - Transciever. By default TX is used */
    bindType?: "RX" | "TRX" | "TX";
    /**
     * 0 - SMSC Default Alphabet (ASCII for short and long code and to GSM for toll-free, used as default)
     * 1 - IA5 (ASCII for short and long code, Latin 9 for toll-free (ISO-8859-9))
     * 2 - Octet Unspecified (8-bit binary)
     * 3 - Latin 1 (ISO-8859-1)
     * 4 - Octet Unspecified (8-bit binary)
     * 5 - JIS (X 0208-1990)
     * 6 - Cyrillic (ISO-8859-5)
     * 7 - Latin/Hebrew (ISO-8859-8)
     * 8 - UCS2/UTF-16 (ISO/IEC-10646)
     * 9 - Pictogram Encoding
     * 10 - Music Codes (ISO-2022-JP)
     * 13 - Extended Kanji JIS (X 0212-1990)
     * 14 - Korean Graphic Character Set (KS C 5601/KS X 1001)
     * @format byte
     */
    codingScheme?: string;
    /**
     * Destination NPI (Numbering Plan Identification). 0 by default.
     * 0 - Unknown
     * 1 - ISDN/telephone numbering plan (E163/E164)
     * 3 - Data numbering plan (X.121)
     * 4 - Telex numbering plan (F.69)
     * 6 - Land Mobile (E.212) =6
     * 8 - National numbering plan
     * 9 - Private numbering plan
     * 10 - ERMES numbering plan (ETSI DE/PS 3 01-3)
     * 13 - Internet (IP)
     * 18 - WAP Client Id (to be defined by WAP Forum)
     * @format byte
     */
    destinationNpi?: string;
    /**
     * Destination TON (Type of Number). 5 by default.
     * 0 - Unknown
     * 1 - International
     * 2 - National
     * 3 - Network Specific
     * 4 - Subscriber Number
     * 5 - Alphanumeric
     * 6 - Abbreviated
     * @format byte
     */
    destinationTon?: string;
    /** SMPP host */
    host?: string;
    /** Password */
    password?: string;
    /**
     * SMPP port
     * @format int32
     */
    port?: number;
    /** SMPP version */
    protocolVersion?: "3.3" | "3.4";
    /** Service type */
    serviceType?: string;
    /** Source address */
    sourceAddress?: string;
    /**
     * Source NPI (Numbering Plan Identification). Needed is source address is set. 0 by default.
     * 0 - Unknown
     * 1 - ISDN/telephone numbering plan (E163/E164)
     * 3 - Data numbering plan (X.121)
     * 4 - Telex numbering plan (F.69)
     * 6 - Land Mobile (E.212) =6
     * 8 - National numbering plan
     * 9 - Private numbering plan
     * 10 - ERMES numbering plan (ETSI DE/PS 3 01-3)
     * 13 - Internet (IP)
     * 18 - WAP Client Id (to be defined by WAP Forum)
     * @format byte
     */
    sourceNpi?: string;
    /**
     * Source TON (Type of Number). Needed is source address is set. 5 by default.
     * 0 - Unknown
     * 1 - International
     * 2 - National
     * 3 - Network Specific
     * 4 - Subscriber Number
     * 5 - Alphanumeric
     * 6 - Abbreviated
     * @format byte
     */
    sourceTon?: string;
    /** System ID */
    systemId?: string;
    /** System type */
    systemType?: string;
});
/** SmsDeliveryMethodNotificationTemplate */
export interface SmsDeliveryMethodNotificationTemplate {
    body?: string;
    enabled?: boolean;
}
/** SmsProviderConfiguration */
export type SmsProviderConfiguration = object;
/** SmsTwoFaAccountConfig */
export type SmsTwoFaAccountConfig = (TwoFaAccountConfig & {
    /** @pattern ^\+[1-9]\d{1,14}$ */
    phoneNumber: string;
    useByDefault?: boolean;
}) & ({
    /** @pattern ^\+[1-9]\d{1,14}$ */
    phoneNumber?: string;
    useByDefault?: boolean;
});
/** SmsTwoFaProviderConfig */
export interface SmsTwoFaProviderConfig {
    /** @pattern .*\$\{code}.* */
    smsVerificationMessageTemplate: string;
    /** @format int32 */
    verificationCodeLifetime?: number;
}
/** SnmpCommunicationConfig */
export interface SnmpCommunicationConfig {
    spec?: "CLIENT_ATTRIBUTES_QUERYING" | "SHARED_ATTRIBUTES_SETTING" | "TELEMETRY_QUERYING" | "TO_DEVICE_RPC_REQUEST" | "TO_SERVER_RPC_REQUEST";
}
/** SnmpDeviceProfileTransportConfiguration */
export type SnmpDeviceProfileTransportConfiguration = (DeviceProfileTransportConfiguration & {
    communicationConfigs?: (SnmpCommunicationConfig)[];
    /** @format int32 */
    retries?: number;
    /** @format int32 */
    timeoutMs?: number;
}) & ({
    communicationConfigs?: (SnmpCommunicationConfig)[];
    /** @format int32 */
    retries?: number;
    /** @format int32 */
    timeoutMs?: number;
});
/** SnmpDeviceTransportConfiguration */
export type SnmpDeviceTransportConfiguration = (DeviceTransportConfiguration & {
    authenticationPassphrase?: string;
    authenticationProtocol?: "MD5" | "SHA_1" | "SHA_224" | "SHA_256" | "SHA_384" | "SHA_512";
    community?: string;
    contextName?: string;
    engineId?: string;
    host?: string;
    /** @format int32 */
    port?: number;
    privacyPassphrase?: string;
    privacyProtocol?: "AES_128" | "AES_192" | "AES_256" | "DES";
    protocolVersion?: "V1" | "V2C" | "V3";
    securityName?: string;
    username?: string;
}) & ({
    authenticationPassphrase?: string;
    authenticationProtocol?: "MD5" | "SHA_1" | "SHA_224" | "SHA_256" | "SHA_384" | "SHA_512";
    community?: string;
    contextName?: string;
    engineId?: string;
    host?: string;
    /** @format int32 */
    port?: number;
    privacyPassphrase?: string;
    privacyProtocol?: "AES_128" | "AES_192" | "AES_256" | "DES";
    protocolVersion?: "V1" | "V2C" | "V3";
    securityName?: string;
    username?: string;
});
/** SnmpMapping */
export interface SnmpMapping {
    dataType?: "BOOLEAN" | "DOUBLE" | "JSON" | "LONG" | "STRING";
    key?: string;
    oid?: string;
}
/** SolutionInstallResponse */
export interface SolutionInstallResponse {
    /** Id of the group that contains main dashboard of the solution */
    dashboardGroupId?: EntityGroupId;
    /** Id of the main dashboard of the solution */
    dashboardId?: DashboardId;
    /** Id of the public customer if solution has public entities */
    publicId?: CustomerId;
    /**
     * Is the main dashboard public
     * @example false
     */
    mainDashboardPublic?: boolean;
    /**
     * Indicates that template was installed successfully
     * @example false
     */
    success?: boolean;
    /** Markdown with solution usage instructions */
    details?: string;
}
/** SpecificTimeSchedule */
export interface SpecificTimeSchedule {
    /** @uniqueItems true */
    daysOfWeek?: (number)[];
    dynamicValue?: DynamicValueString;
    /** @format int64 */
    endsOn?: number;
    /** @format int64 */
    startsOn?: number;
    timezone?: string;
    type?: "ANY_TIME" | "CUSTOM" | "SPECIFIC_TIME";
}
/** StarredDashboardInfo */
export interface StarredDashboardInfo {
    /**
     * JSON object with Dashboard id.
     * @format uuid
     */
    id?: string;
    /** Title of the dashboard. */
    title?: string;
    /**
     * Starred timestamp
     * @format int64
     */
    starredAt?: number;
}
/** StateEntityOwnerFilter */
export type StateEntityOwnerFilter = (EntityFilter & {
    singleEntity?: EntityId;
}) & ({
    singleEntity?: EntityId;
});
/** StatisticsEventFilter */
export type StatisticsEventFilter = (EventFilter & {
    notEmpty?: boolean;
    /**
     * String value representing the event type
     * @example "STATS"
     */
    eventType: "DEBUG_CONVERTER" | "DEBUG_INTEGRATION" | "DEBUG_RULE_CHAIN" | "DEBUG_RULE_NODE" | "ERROR" | "LC_EVENT" | "RAW_DATA" | "STATS";
    /**
     * String value representing the server name, identifier or ip address where the platform is running
     * @example "ip-172-31-24-152"
     */
    server?: string;
    /**
     * The minimum number of successfully processed messages
     * @format int32
     * @example 25
     */
    minMessagesProcessed?: number;
    /**
     * The maximum number of successfully processed messages
     * @format int32
     * @example 250
     */
    maxMessagesProcessed?: number;
    /**
     * The minimum number of errors occurred during messages processing
     * @format int32
     * @example 30
     */
    minErrorsOccurred?: number;
    /**
     * The maximum number of errors occurred during messages processing
     * @format int32
     * @example 300
     */
    maxErrorsOccurred?: number;
}) & ({
    notEmpty?: boolean;
    /**
     * String value representing the event type
     * @example "STATS"
     */
    eventType?: "DEBUG_CONVERTER" | "DEBUG_INTEGRATION" | "DEBUG_RULE_CHAIN" | "DEBUG_RULE_NODE" | "ERROR" | "LC_EVENT" | "RAW_DATA" | "STATS";
    /**
     * String value representing the server name, identifier or ip address where the platform is running
     * @example "ip-172-31-24-152"
     */
    server?: string;
    /**
     * The minimum number of successfully processed messages
     * @format int32
     * @example 25
     */
    minMessagesProcessed?: number;
    /**
     * The maximum number of successfully processed messages
     * @format int32
     * @example 250
     */
    maxMessagesProcessed?: number;
    /**
     * The minimum number of errors occurred during messages processing
     * @format int32
     * @example 30
     */
    minErrorsOccurred?: number;
    /**
     * The maximum number of errors occurred during messages processing
     * @format int32
     * @example 300
     */
    maxErrorsOccurred?: number;
});
/** StringFilterPredicate */
export type StringFilterPredicate = (KeyFilterPredicate & {
    ignoreCase?: boolean;
    operation?: "CONTAINS" | "ENDS_WITH" | "EQUAL" | "IN" | "NOT_CONTAINS" | "NOT_EQUAL" | "NOT_IN" | "STARTS_WITH";
    value?: FilterPredicateValueString;
}) & ({
    ignoreCase?: boolean;
    operation?: "CONTAINS" | "ENDS_WITH" | "EQUAL" | "IN" | "NOT_CONTAINS" | "NOT_EQUAL" | "NOT_IN" | "STARTS_WITH";
    value?: FilterPredicateValueString;
});
/** SubmitStrategy */
export interface SubmitStrategy {
    /** @format int32 */
    batchSize?: number;
    type?: "BATCH" | "BURST" | "SEQUENTIAL" | "SEQUENTIAL_BY_ORIGINATOR" | "SEQUENTIAL_BY_TENANT";
}
/** SystemAdministratorsFilter */
export type SystemAdministratorsFilter = object;
/** SystemInfo */
export interface SystemInfo {
    monolith?: boolean;
    /** System data. */
    systemData?: (SystemInfoData)[];
}
/** SystemInfoData */
export interface SystemInfoData {
    /** Service Id. */
    serviceId?: string;
    /** Service type. */
    serviceType?: string;
    /**
     * CPU usage, in percent.
     * @format int64
     */
    cpuUsage?: number;
    /**
     * Total CPU usage.
     * @format int64
     */
    cpuCount?: number;
    /**
     * Memory usage, in percent.
     * @format int64
     */
    memoryUsage?: number;
    /**
     * Total memory in bytes.
     * @format int64
     */
    totalMemory?: number;
    /**
     * Disk usage, in percent.
     * @format int64
     */
    discUsage?: number;
    /**
     * Total disc space in bytes.
     * @format int64
     */
    totalDiscSpace?: number;
}
/** TbImageDeleteResult */
export interface TbImageDeleteResult {
    references?: Record<string, (HasIdObject)[]>;
    success?: boolean;
    whiteLabelingList?: (WhiteLabeling)[];
}
/** TbResource */
export interface TbResource {
    descriptor?: JsonNode;
    link?: string;
    name?: string;
    preview?: string;
    public?: boolean;
    publicLink?: string;
    publicResourceKey?: string;
    /** JSON object with the Resource Id. Specify this field to update the Resource. Referencing non-existing Resource Id will cause error. Omit this field to create new Resource. */
    id?: TbResourceId;
    /**
     * Timestamp of the resource creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id. Tenant Id of the resource can't be changed. */
    tenantId?: TenantId;
    /** JSON object with Customer Id. Customer Id of the resource can't be changed. */
    customerId?: CustomerId;
    /**
     * Resource title.
     * @example "BinaryAppDataContainer id=19 v1.0"
     */
    title?: string;
    /**
     * Resource type.
     * @example "LWM2M_MODEL"
     */
    resourceType?: "IMAGE" | "JKS" | "JS_MODULE" | "LWM2M_MODEL" | "PKCS_12";
    /**
     * Resource key.
     * @example "19_1.0"
     */
    resourceKey?: string;
    /**
     * Resource etag.
     * @example "33a64df551425fcc55e4d42a148795d9f25f89d4"
     */
    etag?: string;
    /**
     * Resource file name.
     * @example "19.xml"
     */
    fileName?: string;
    /**
     * Resource data.
     * @example "77u/PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLQpGSUxFIElORk9STUFUSU9OCgpPTUEgUGVybWFuZW50IERvY3VtZW50CiAgIEZpbGU6IE9NQS1TVVAtTHdNMk1fQmluYXJ5QXBwRGF0YUNvbnRhaW5lci1WMV8wXzEtMjAxOTAyMjEtQQogICBUeXBlOiB4bWwKClB1YmxpYyBSZWFjaGFibGUgSW5mb3JtYXRpb24KICAgUGF0aDogaHR0cDovL3d3dy5vcGVubW9iaWxlYWxsaWFuY2Uub3JnL3RlY2gvcHJvZmlsZXMKICAgTmFtZTogTHdNMk1fQmluYXJ5QXBwRGF0YUNvbnRhaW5lci12MV8wXzEueG1sCgpOT1JNQVRJVkUgSU5GT1JNQVRJT04KCiAgSW5mb3JtYXRpb24gYWJvdXQgdGhpcyBmaWxlIGNhbiBiZSBmb3VuZCBpbiB0aGUgbGF0ZXN0IHJldmlzaW9uIG9mCgogIE9NQS1UUy1MV00yTV9CaW5hcnlBcHBEYXRhQ29udGFpbmVyLVYxXzBfMQoKICBUaGlzIGlzIGF2YWlsYWJsZSBhdCBodHRwOi8vd3d3Lm9wZW5tb2JpbGVhbGxpYW5jZS5vcmcvCgogIFNlbmQgY29tbWVudHMgdG8gaHR0cHM6Ly9naXRodWIuY29tL09wZW5Nb2JpbGVBbGxpYW5jZS9PTUFfTHdNMk1fZm9yX0RldmVsb3BlcnMvaXNzdWVzCgpDSEFOR0UgSElTVE9SWQoKMTUwNjIwMTggU3RhdHVzIGNoYW5nZWQgdG8gQXBwcm92ZWQgYnkgRE0sIERvYyBSZWYgIyBPTUEtRE0mU0UtMjAxOC0wMDYxLUlOUF9MV00yTV9BUFBEQVRBX1YxXzBfRVJQX2Zvcl9maW5hbF9BcHByb3ZhbAoyMTAyMjAxOSBTdGF0dXMgY2hhbmdlZCB0byBBcHByb3ZlZCBieSBJUFNPLCBEb2MgUmVmICMgT01BLUlQU08tMjAxOS0wMDI1LUlOUF9Md00yTV9PYmplY3RfQXBwX0RhdGFfQ29udGFpbmVyXzFfMF8xX2Zvcl9GaW5hbF9BcHByb3ZhbAoKTEVHQUwgRElTQ0xBSU1FUgoKQ29weXJpZ2h0IDIwMTkgT3BlbiBNb2JpbGUgQWxsaWFuY2UuCgpSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQKbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zCmFyZSBtZXQ6CgoxLiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodApub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuCjIuIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0Cm5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUKZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi4KMy4gTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgY29weXJpZ2h0IGhvbGRlciBub3IgdGhlIG5hbWVzIG9mIGl0cwpjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQKZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLgoKVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUwoiQVMgSVMiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVApMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUwpGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRQpDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULApJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLApCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7CkxPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIKQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUCkxJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOCkFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRQpQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS4KClRoZSBhYm92ZSBsaWNlbnNlIGlzIHVzZWQgYXMgYSBsaWNlbnNlIHVuZGVyIGNvcHlyaWdodCBvbmx5LiBQbGVhc2UKcmVmZXJlbmNlIHRoZSBPTUEgSVBSIFBvbGljeSBmb3IgcGF0ZW50IGxpY2Vuc2luZyB0ZXJtczoKaHR0cHM6Ly93d3cub21hc3BlY3dvcmtzLm9yZy9hYm91dC9pbnRlbGxlY3R1YWwtcHJvcGVydHktcmlnaHRzLwoKLS0+CjxMV00yTSB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIiB4c2k6bm9OYW1lc3BhY2VTY2hlbWFMb2NhdGlvbj0iaHR0cDovL29wZW5tb2JpbGVhbGxpYW5jZS5vcmcvdGVjaC9wcm9maWxlcy9MV00yTS54c2QiPgoJPE9iamVjdCBPYmplY3RUeXBlPSJNT0RlZmluaXRpb24iPgoJCTxOYW1lPkJpbmFyeUFwcERhdGFDb250YWluZXI8L05hbWU+CgkJPERlc2NyaXB0aW9uMT48IVtDREFUQVtUaGlzIEx3TTJNIE9iamVjdHMgcHJvdmlkZXMgdGhlIGFwcGxpY2F0aW9uIHNlcnZpY2UgZGF0YSByZWxhdGVkIHRvIGEgTHdNMk0gU2VydmVyLCBlZy4gV2F0ZXIgbWV0ZXIgZGF0YS4gClRoZXJlIGFyZSBzZXZlcmFsIG1ldGhvZHMgdG8gY3JlYXRlIGluc3RhbmNlIHRvIGluZGljYXRlIHRoZSBtZXNzYWdlIGRpcmVjdGlvbiBiYXNlZCBvbiB0aGUgbmVnb3RpYXRpb24gYmV0d2VlbiBBcHBsaWNhdGlvbiBhbmQgTHdNMk0uIFRoZSBDbGllbnQgYW5kIFNlcnZlciBzaG91bGQgbmVnb3RpYXRlIHRoZSBpbnN0YW5jZShzKSB1c2VkIHRvIGV4Y2hhbmdlIHRoZSBkYXRhLiBGb3IgZXhhbXBsZToKIC0gVXNpbmcgYSBzaW5nbGUgaW5zdGFuY2UgZm9yIGJvdGggZGlyZWN0aW9ucyBjb21tdW5pY2F0aW9uLCBmcm9tIENsaWVudCB0byBTZXJ2ZXIgYW5kIGZyb20gU2VydmVyIHRvIENsaWVudC4KIC0gVXNpbmcgYW4gaW5zdGFuY2UgZm9yIGNvbW11bmljYXRpb24gZnJvbSBDbGllbnQgdG8gU2VydmVyIGFuZCBhbm90aGVyIG9uZSBmb3IgY29tbXVuaWNhdGlvbiBmcm9tIFNlcnZlciB0byBDbGllbnQKIC0gVXNpbmcgc2V2ZXJhbCBpbnN0YW5jZXMKXV0+PC9EZXNjcmlwdGlvbjE+CgkJPE9iamVjdElEPjE5PC9PYmplY3RJRD4KCQk8T2JqZWN0VVJOPnVybjpvbWE6bHdtMm06b21hOjE5PC9PYmplY3RVUk4+CgkJPExXTTJNVmVyc2lvbj4xLjA8L0xXTTJNVmVyc2lvbj4KCQk8T2JqZWN0VmVyc2lvbj4xLjA8L09iamVjdFZlcnNpb24+CgkJPE11bHRpcGxlSW5zdGFuY2VzPk11bHRpcGxlPC9NdWx0aXBsZUluc3RhbmNlcz4KCQk8TWFuZGF0b3J5Pk9wdGlvbmFsPC9NYW5kYXRvcnk+CgkJPFJlc291cmNlcz4KCQkJPEl0ZW0gSUQ9IjAiPjxOYW1lPkRhdGE8L05hbWU+CgkJCQk8T3BlcmF0aW9ucz5SVzwvT3BlcmF0aW9ucz4KCQkJCTxNdWx0aXBsZUluc3RhbmNlcz5NdWx0aXBsZTwvTXVsdGlwbGVJbnN0YW5jZXM+CgkJCQk8TWFuZGF0b3J5Pk1hbmRhdG9yeTwvTWFuZGF0b3J5PgoJCQkJPFR5cGU+T3BhcXVlPC9UeXBlPgoJCQkJPFJhbmdlRW51bWVyYXRpb24gLz4KCQkJCTxVbml0cyAvPgoJCQkJPERlc2NyaXB0aW9uPjwhW0NEQVRBW0luZGljYXRlcyB0aGUgYXBwbGljYXRpb24gZGF0YSBjb250ZW50Ll1dPjwvRGVzY3JpcHRpb24+CgkJCTwvSXRlbT4KCQkJPEl0ZW0gSUQ9IjEiPjxOYW1lPkRhdGEgUHJpb3JpdHk8L05hbWU+CgkJCQk8T3BlcmF0aW9ucz5SVzwvT3BlcmF0aW9ucz4KCQkJCTxNdWx0aXBsZUluc3RhbmNlcz5TaW5nbGU8L011bHRpcGxlSW5zdGFuY2VzPgoJCQkJPE1hbmRhdG9yeT5PcHRpb25hbDwvTWFuZGF0b3J5PgoJCQkJPFR5cGU+SW50ZWdlcjwvVHlwZT4KCQkJCTxSYW5nZUVudW1lcmF0aW9uPjEgYnl0ZXM8L1JhbmdlRW51bWVyYXRpb24+CgkJCQk8VW5pdHMgLz4KCQkJCTxEZXNjcmlwdGlvbj48IVtDREFUQVtJbmRpY2F0ZXMgdGhlIEFwcGxpY2F0aW9uIGRhdGEgcHJpb3JpdHk6CjA6SW1tZWRpYXRlCjE6QmVzdEVmZm9ydAoyOkxhdGVzdAozLTEwMDogUmVzZXJ2ZWQgZm9yIGZ1dHVyZSB1c2UuCjEwMS0yNTQ6IFByb3ByaWV0YXJ5IG1vZGUuXV0+PC9EZXNjcmlwdGlvbj4KCQkJPC9JdGVtPgoJCQk8SXRlbSBJRD0iMiI+PE5hbWU+RGF0YSBDcmVhdGlvbiBUaW1lPC9OYW1lPgoJCQkJPE9wZXJhdGlvbnM+Ulc8L09wZXJhdGlvbnM+CgkJCQk8TXVsdGlwbGVJbnN0YW5jZXM+U2luZ2xlPC9NdWx0aXBsZUluc3RhbmNlcz4KCQkJCTxNYW5kYXRvcnk+T3B0aW9uYWw8L01hbmRhdG9yeT4KCQkJCTxUeXBlPlRpbWU8L1R5cGU+CgkJCQk8UmFuZ2VFbnVtZXJhdGlvbiAvPgoJCQkJPFVuaXRzIC8+CgkJCQk8RGVzY3JpcHRpb24+PCFbQ0RBVEFbSW5kaWNhdGVzIHRoZSBEYXRhIGluc3RhbmNlIGNyZWF0aW9uIHRpbWVzdGFtcC5dXT48L0Rlc2NyaXB0aW9uPgoJCQk8L0l0ZW0+CgkJCTxJdGVtIElEPSIzIj48TmFtZT5EYXRhIERlc2NyaXB0aW9uPC9OYW1lPgoJCQkJPE9wZXJhdGlvbnM+Ulc8L09wZXJhdGlvbnM+CgkJCQk8TXVsdGlwbGVJbnN0YW5jZXM+U2luZ2xlPC9NdWx0aXBsZUluc3RhbmNlcz4KCQkJCTxNYW5kYXRvcnk+T3B0aW9uYWw8L01hbmRhdG9yeT4KCQkJCTxUeXBlPlN0cmluZzwvVHlwZT4KCQkJCTxSYW5nZUVudW1lcmF0aW9uPjMyIGJ5dGVzPC9SYW5nZUVudW1lcmF0aW9uPgoJCQkJPFVuaXRzIC8+CgkJCQk8RGVzY3JpcHRpb24+PCFbQ0RBVEFbSW5kaWNhdGVzIHRoZSBkYXRhIGRlc2NyaXB0aW9uLgplLmcuICJtZXRlciByZWFkaW5nIi5dXT48L0Rlc2NyaXB0aW9uPgoJCQk8L0l0ZW0+CgkJCTxJdGVtIElEPSI0Ij48TmFtZT5EYXRhIEZvcm1hdDwvTmFtZT4KCQkJCTxPcGVyYXRpb25zPlJXPC9PcGVyYXRpb25zPgoJCQkJPE11bHRpcGxlSW5zdGFuY2VzPlNpbmdsZTwvTXVsdGlwbGVJbnN0YW5jZXM+CgkJCQk8TWFuZGF0b3J5Pk9wdGlvbmFsPC9NYW5kYXRvcnk+CgkJCQk8VHlwZT5TdHJpbmc8L1R5cGU+CgkJCQk8UmFuZ2VFbnVtZXJhdGlvbj4zMiBieXRlczwvUmFuZ2VFbnVtZXJhdGlvbj4KCQkJCTxVbml0cyAvPgoJCQkJPERlc2NyaXB0aW9uPjwhW0NEQVRBW0luZGljYXRlcyB0aGUgZm9ybWF0IG9mIHRoZSBBcHBsaWNhdGlvbiBEYXRhLgplLmcuIFlHLU1ldGVyLVdhdGVyLVJlYWRpbmcKVVRGOC1zdHJpbmcKXV0+PC9EZXNjcmlwdGlvbj4KCQkJPC9JdGVtPgoJCQk8SXRlbSBJRD0iNSI+PE5hbWU+QXBwIElEPC9OYW1lPgoJCQkJPE9wZXJhdGlvbnM+Ulc8L09wZXJhdGlvbnM+CgkJCQk8TXVsdGlwbGVJbnN0YW5jZXM+U2luZ2xlPC9NdWx0aXBsZUluc3RhbmNlcz4KCQkJCTxNYW5kYXRvcnk+T3B0aW9uYWw8L01hbmRhdG9yeT4KCQkJCTxUeXBlPkludGVnZXI8L1R5cGU+CgkJCQk8UmFuZ2VFbnVtZXJhdGlvbj4yIGJ5dGVzPC9SYW5nZUVudW1lcmF0aW9uPgoJCQkJPFVuaXRzIC8+CgkJCQk8RGVzY3JpcHRpb24+PCFbQ0RBVEFbSW5kaWNhdGVzIHRoZSBkZXN0aW5hdGlvbiBBcHBsaWNhdGlvbiBJRC5dXT48L0Rlc2NyaXB0aW9uPgoJCQk8L0l0ZW0+PC9SZXNvdXJjZXM+CgkJPERlc2NyaXB0aW9uMj48IVtDREFUQVtdXT48L0Rlc2NyaXB0aW9uMj4KCTwvT2JqZWN0Pgo8L0xXTTJNPgo="
     */
    data?: string;
}
/** TbResourceId */
export interface TbResourceId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "TB_RESOURCE"
     */
    entityType: "TB_RESOURCE";
}
/** TbResourceInfo */
export interface TbResourceInfo {
    descriptor?: JsonNode;
    link?: string;
    name?: string;
    public?: boolean;
    publicLink?: string;
    publicResourceKey?: string;
    /** JSON object with the Resource Id. Specify this field to update the Resource. Referencing non-existing Resource Id will cause error. Omit this field to create new Resource. */
    id?: TbResourceId;
    /**
     * Timestamp of the resource creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id. Tenant Id of the resource can't be changed. */
    tenantId?: TenantId;
    /** JSON object with Customer Id. Customer Id of the resource can't be changed. */
    customerId?: CustomerId;
    /**
     * Resource title.
     * @example "BinaryAppDataContainer id=19 v1.0"
     */
    title?: string;
    /**
     * Resource type.
     * @example "LWM2M_MODEL"
     */
    resourceType?: "IMAGE" | "JKS" | "JS_MODULE" | "LWM2M_MODEL" | "PKCS_12";
    /**
     * Resource key.
     * @example "19_1.0"
     */
    resourceKey?: string;
    /**
     * Resource etag.
     * @example "33a64df551425fcc55e4d42a148795d9f25f89d4"
     */
    etag?: string;
    /**
     * Resource file name.
     * @example "19.xml"
     */
    fileName?: string;
}
/** TelemetryEntityView */
export interface TelemetryEntityView {
    /**
     * List of time-series data keys to expose
     * @example "temperature, humidity"
     */
    timeseries: (string)[];
    /** JSON object with attributes to expose */
    attributes: AttributesEntityView;
}
/** TelemetryMappingConfiguration */
export interface TelemetryMappingConfiguration {
    /** @uniqueItems true */
    attribute?: (string)[];
    "attributeLwm2m"?: Record<string, ObjectAttributes>;
    keyName?: Record<string, string>;
    /** @uniqueItems true */
    observe?: (string)[];
    /** @uniqueItems true */
    telemetry?: (string)[];
}
/** TelemetryQueryingSnmpCommunicationConfig */
export type TelemetryQueryingSnmpCommunicationConfig = (SnmpCommunicationConfig & {
    mappings?: (SnmpMapping)[];
    /** @format int64 */
    queryingFrequencyMs?: number;
    spec?: "CLIENT_ATTRIBUTES_QUERYING" | "SHARED_ATTRIBUTES_SETTING" | "TELEMETRY_QUERYING" | "TO_DEVICE_RPC_REQUEST" | "TO_SERVER_RPC_REQUEST";
}) & ({
    mappings?: (SnmpMapping)[];
    /** @format int64 */
    queryingFrequencyMs?: number;
    spec?: "CLIENT_ATTRIBUTES_QUERYING" | "SHARED_ATTRIBUTES_SETTING" | "TELEMETRY_QUERYING" | "TO_DEVICE_RPC_REQUEST" | "TO_SERVER_RPC_REQUEST";
});
/** Tenant */
export interface Tenant {
    /** JSON object with the tenant Id. Specify this field to update the tenant. Referencing non-existing tenant Id will cause error. Omit this field to create new tenant. */
    id?: TenantId;
    /**
     * Timestamp of the tenant creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /**
     * Title of the tenant
     * @example "Company A"
     */
    title: string;
    /**
     * Name of the tenant. Read-only, duplicated from title for backward compatibility
     * @example "Company A"
     */
    name?: string;
    /**
     * Geo region of the tenant
     * @example "North America"
     */
    region?: string;
    /** JSON object with Tenant Profile Id */
    tenantProfileId?: TenantProfileId;
    /**
     * Country
     * @example "US"
     */
    country?: string;
    /**
     * State
     * @example "NY"
     */
    state?: string;
    /**
     * City
     * @example "New York"
     */
    city?: string;
    /**
     * Address Line 1
     * @example "42 Broadway Suite 12-400"
     */
    address?: string;
    /** Address Line 2 */
    "address2"?: string;
    /**
     * Zip code
     * @example "10004"
     */
    zip?: string;
    /**
     * Phone number
     * @example "+1(415)777-7777"
     */
    phone?: string;
    /**
     * Email
     * @example "example@company.com"
     */
    email: string;
    /** Additional parameters of the device */
    additionalInfo?: JsonNode;
}
/** TenantAdministratorsFilter */
export type TenantAdministratorsFilter = (UsersFilter & {
    /** @uniqueItems true */
    tenantProfilesIds?: (string)[];
    /** @uniqueItems true */
    tenantsIds?: (string)[];
}) & ({
    /** @uniqueItems true */
    tenantProfilesIds?: (string)[];
    /** @uniqueItems true */
    tenantsIds?: (string)[];
});
/** TenantId */
export interface TenantId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "TENANT"
     */
    entityType: "TENANT";
}
/** TenantInfo */
export interface TenantInfo {
    /** JSON object with the tenant Id. Specify this field to update the tenant. Referencing non-existing tenant Id will cause error. Omit this field to create new tenant. */
    id?: TenantId;
    /**
     * Timestamp of the tenant creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /**
     * Title of the tenant
     * @example "Company A"
     */
    title: string;
    /**
     * Name of the tenant. Read-only, duplicated from title for backward compatibility
     * @example "Company A"
     */
    name?: string;
    /**
     * Geo region of the tenant
     * @example "North America"
     */
    region?: string;
    /** JSON object with Tenant Profile Id */
    tenantProfileId?: TenantProfileId;
    /**
     * Country
     * @example "US"
     */
    country?: string;
    /**
     * State
     * @example "NY"
     */
    state?: string;
    /**
     * City
     * @example "New York"
     */
    city?: string;
    /**
     * Address Line 1
     * @example "42 Broadway Suite 12-400"
     */
    address?: string;
    /** Address Line 2 */
    "address2"?: string;
    /**
     * Zip code
     * @example "10004"
     */
    zip?: string;
    /**
     * Phone number
     * @example "+1(415)777-7777"
     */
    phone?: string;
    /**
     * Email
     * @example "example@company.com"
     */
    email: string;
    /** Additional parameters of the device */
    additionalInfo?: JsonNode;
    /**
     * Tenant Profile name
     * @example "Default"
     */
    tenantProfileName?: string;
}
/** TenantProfile */
export interface TenantProfile {
    default?: boolean;
    /** JSON object with the tenant profile Id. Specify this field to update the tenant profile. Referencing non-existing tenant profile Id will cause error. Omit this field to create new tenant profile. */
    id?: TenantProfileId;
    /**
     * Timestamp of the tenant profile creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /**
     * Name of the tenant profile
     * @example "High Priority Tenants"
     */
    name?: string;
    /**
     * Description of the tenant profile
     * @example "Any text"
     */
    description?: string;
    /**
     * If enabled, will push all messages related to this tenant and processed by the rule engine into separate queue. Useful for complex microservices deployments, to isolate processing of the data for specific tenants
     * @example true
     */
    isolatedTbRuleEngine?: boolean;
    /** Complex JSON object that contains profile settings: queue configs, max devices, max assets, rate limits, etc. */
    profileData?: TenantProfileData;
}
/** TenantProfileConfiguration */
export type TenantProfileConfiguration = object;
/** TenantProfileData */
export interface TenantProfileData {
    /** Complex JSON object that contains profile settings: max devices, max assets, rate limits, etc. */
    configuration?: TenantProfileConfiguration;
    /** JSON array of queue configuration per tenant profile */
    queueConfiguration?: (TenantProfileQueueConfiguration)[];
}
/** TenantProfileId */
export interface TenantProfileId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "TENANT_PROFILE"
     */
    entityType: "TENANT_PROFILE";
}
/** TenantProfileQueueConfiguration */
export interface TenantProfileQueueConfiguration {
    additionalInfo?: JsonNode;
    consumerPerPartition?: boolean;
    name?: string;
    /** @format int64 */
    packProcessingTimeout?: number;
    /** @format int32 */
    partitions?: number;
    /** @format int32 */
    pollInterval?: number;
    processingStrategy?: ProcessingStrategy;
    submitStrategy?: SubmitStrategy;
    topic?: string;
}
/** TenantSolutionTemplateDetails */
export interface TenantSolutionTemplateDetails {
    description?: string;
    highlights?: string;
    imageUrls?: (string)[];
    installed?: boolean;
    /**
     * ID of the solution template
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id?: string;
    /**
     * Template Title
     * @example "Smart office"
     */
    title?: string;
    /**
     * Level of the subscription that is required to unlock the template
     * @example "PROTOTYPE"
     */
    level?: "MAKER" | "PROTOTYPE" | "STARTUP";
    /**
     * Timeout for the installation UI to wait while template is installing
     * @format int64
     */
    installTimeoutMs?: number;
    /** What keys to delete during template uninstall */
    tenantTelemetryKeys?: (string)[];
    /** What attributes to delete during template uninstall */
    tenantAttributeKeys?: (string)[];
}
/** TenantSolutionTemplateInfo */
export interface TenantSolutionTemplateInfo {
    /**
     * ID of the solution template
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id?: string;
    /**
     * Template Title
     * @example "Smart office"
     */
    title?: string;
    /**
     * Level of the subscription that is required to unlock the template
     * @example "PROTOTYPE"
     */
    level?: "MAKER" | "PROTOTYPE" | "STARTUP";
    /**
     * Timeout for the installation UI to wait while template is installing
     * @format int64
     */
    installTimeoutMs?: number;
    /** What keys to delete during template uninstall */
    tenantTelemetryKeys?: (string)[];
    /** What attributes to delete during template uninstall */
    tenantAttributeKeys?: (string)[];
    /** URL of the preview image */
    previewImageUrl?: string;
    /** Short description to display on template card */
    shortDescription?: string;
    /**
     * Indicates that template is already installed for the current tenant
     * @example false
     */
    installed?: boolean;
    /** Video preview image URL */
    videoPreviewImageUrl?: string;
    /** Video MP4 URL */
    "previewMp4Url"?: string;
    /** Video WEBM URL */
    previewWebmUrl?: string;
}
/** TenantSolutionTemplateInstructions */
export interface TenantSolutionTemplateInstructions {
    /** Id of the group that contains main dashboard of the solution */
    dashboardGroupId?: EntityGroupId;
    /** Id of the main dashboard of the solution */
    dashboardId?: DashboardId;
    /** Id of the public customer if solution has public entities */
    publicId?: CustomerId;
    /**
     * Is the main dashboard public
     * @example false
     */
    mainDashboardPublic?: boolean;
    /** Markdown with solution usage instructions */
    details?: string;
}
/** TestSmsRequest */
export interface TestSmsRequest {
    /** The SMS provider configuration */
    providerConfiguration?: SmsProviderConfiguration;
    /** The phone number or other identifier to specify as a recipient of the SMS. */
    numberTo?: string;
    /** The test message */
    message?: string;
}
/** ThingsboardCredentialsExpiredResponse */
export interface ThingsboardCredentialsExpiredResponse {
    subscriptionEntry?: "ASSET_COUNT" | "DEVICE_COUNT" | "WHITE_LABELING";
    subscriptionErrorCode?: "FEATURE_DISABLED" | "LIMIT_REACHED" | "UNSUPPORTED_SOLUTION_TEMPLATE_PLAN";
    subscriptionValue?: JsonNode;
    /**
     * HTTP Response Status Code
     * @format int32
     * @example 401
     */
    status?: number;
    /**
     * Error message
     * @example "Authentication failed"
     */
    message?: string;
    /**
     * Platform error code:
     * * `2` - General error (HTTP: 500 - Internal Server Error)
     *
     * * `10` - Authentication failed (HTTP: 401 - Unauthorized)
     *
     * * `11` - JWT token expired (HTTP: 401 - Unauthorized)
     *
     * * `15` - Credentials expired (HTTP: 401 - Unauthorized)
     *
     * * `20` - Permission denied (HTTP: 403 - Forbidden)
     *
     * * `30` - Invalid arguments (HTTP: 400 - Bad Request)
     *
     * * `31` - Bad request params (HTTP: 400 - Bad Request)
     *
     * * `32` - Item not found (HTTP: 404 - Not Found)
     *
     * * `33` - Too many requests (HTTP: 429 - Too Many Requests)
     *
     * * `34` - Too many updates (Too many updates over Websocket session)
     *
     * * `40` - Subscription violation (HTTP: 403 - Forbidden)
     * @example "10"
     */
    errorCode?: object;
    /**
     * Timestamp
     * @format date-time
     */
    timestamp?: string;
    /** Password reset token */
    resetToken?: string;
}
/** ThingsboardErrorResponse */
export interface ThingsboardErrorResponse {
    subscriptionEntry?: "ASSET_COUNT" | "DEVICE_COUNT" | "WHITE_LABELING";
    subscriptionErrorCode?: "FEATURE_DISABLED" | "LIMIT_REACHED" | "UNSUPPORTED_SOLUTION_TEMPLATE_PLAN";
    subscriptionValue?: JsonNode;
    /**
     * HTTP Response Status Code
     * @format int32
     * @example 401
     */
    status?: number;
    /**
     * Error message
     * @example "Authentication failed"
     */
    message?: string;
    /**
     * Platform error code:
     * * `2` - General error (HTTP: 500 - Internal Server Error)
     *
     * * `10` - Authentication failed (HTTP: 401 - Unauthorized)
     *
     * * `11` - JWT token expired (HTTP: 401 - Unauthorized)
     *
     * * `15` - Credentials expired (HTTP: 401 - Unauthorized)
     *
     * * `20` - Permission denied (HTTP: 403 - Forbidden)
     *
     * * `30` - Invalid arguments (HTTP: 400 - Bad Request)
     *
     * * `31` - Bad request params (HTTP: 400 - Bad Request)
     *
     * * `32` - Item not found (HTTP: 404 - Not Found)
     *
     * * `33` - Too many requests (HTTP: 429 - Too Many Requests)
     *
     * * `34` - Too many updates (Too many updates over Websocket session)
     *
     * * `40` - Subscription violation (HTTP: 403 - Forbidden)
     * @example "10"
     */
    errorCode?: object;
    /**
     * Timestamp
     * @format date-time
     */
    timestamp?: string;
}
/** ToDeviceRpcRequestSnmpCommunicationConfig */
export interface ToDeviceRpcRequestSnmpCommunicationConfig {
    mappings?: (SnmpMapping)[];
    spec?: "CLIENT_ATTRIBUTES_QUERYING" | "SHARED_ATTRIBUTES_SETTING" | "TELEMETRY_QUERYING" | "TO_DEVICE_RPC_REQUEST" | "TO_SERVER_RPC_REQUEST";
}
/** ToServerRpcRequestSnmpCommunicationConfig */
export interface ToServerRpcRequestSnmpCommunicationConfig {
    mappings?: (SnmpMapping)[];
    spec?: "CLIENT_ATTRIBUTES_QUERYING" | "SHARED_ATTRIBUTES_SETTING" | "TELEMETRY_QUERYING" | "TO_DEVICE_RPC_REQUEST" | "TO_SERVER_RPC_REQUEST";
}
/** TotpTwoFaAccountConfig */
export interface TotpTwoFaAccountConfig {
    /** @pattern otpauth://totp/(\S+?):(\S+?)\?issuer=(\S+?)&secret=(\w+?) */
    authUrl: string;
    useByDefault?: boolean;
}
/** TotpTwoFaProviderConfig */
export interface TotpTwoFaProviderConfig {
    issuerName: string;
}
/** TransportPayloadTypeConfiguration */
export type TransportPayloadTypeConfiguration = object;
/** TsValue */
export interface TsValue {
    /** @format int64 */
    count?: number;
    /** @format int64 */
    ts?: number;
    value?: string;
}
/** TwilioSmsProviderConfiguration */
export type TwilioSmsProviderConfiguration = (SmsProviderConfiguration & {
    /** Twilio account Sid. */
    accountSid?: string;
    /** Twilio account Token. */
    accountToken?: string;
    /** The number/id of a sender. */
    numberFrom?: string;
}) & ({
    /** Twilio account Sid. */
    accountSid?: string;
    /** Twilio account Token. */
    accountToken?: string;
    /** The number/id of a sender. */
    numberFrom?: string;
});
/** TwoFaAccountConfig */
export interface TwoFaAccountConfig {
    useByDefault?: boolean;
}
/** TwoFaAccountConfigUpdateRequest */
export interface TwoFaAccountConfigUpdateRequest {
    useByDefault?: boolean;
}
/** TwoFaProviderConfig */
export type TwoFaProviderConfig = object;
/** TwoFaProviderInfo */
export interface TwoFaProviderInfo {
    contact?: string;
    default?: boolean;
    /** @format int32 */
    minVerificationCodeSendPeriod?: number;
    type?: "BACKUP_CODE" | "EMAIL" | "SMS" | "TOTP";
}
/** UpdateMessage */
export interface UpdateMessage {
    /**
     * 'True' if new platform update is available.
     * @example false
     */
    updateAvailable?: boolean;
    /** Current ThingsBoard version. */
    currentVersion?: string;
    /** Latest ThingsBoard version. */
    latestVersion?: string;
    /** Upgrade instructions URL. */
    upgradeInstructionsUrl?: string;
    /** Current ThingsBoard version release notes URL. */
    currentVersionReleaseNotesUrl?: string;
    /** Latest ThingsBoard version release notes URL. */
    latestVersionReleaseNotesUrl?: string;
}
/** UsageInfo */
export interface UsageInfo {
    /** @format int64 */
    alarms?: number;
    /** @format int64 */
    assets?: number;
    /** @format int64 */
    customers?: number;
    /** @format int64 */
    dashboards?: number;
    /** @format int64 */
    devices?: number;
    /** @format int64 */
    emails?: number;
    /** @format int64 */
    jsExecutions?: number;
    /** @format int64 */
    maxAlarms?: number;
    /** @format int64 */
    maxAssets?: number;
    /** @format int64 */
    maxCustomers?: number;
    /** @format int64 */
    maxDashboards?: number;
    /** @format int64 */
    maxDevices?: number;
    /** @format int64 */
    maxEmails?: number;
    /** @format int64 */
    maxJsExecutions?: number;
    /** @format int64 */
    maxSms?: number;
    /** @format int64 */
    maxTbelExecutions?: number;
    /** @format int64 */
    maxTransportMessages?: number;
    /** @format int64 */
    maxUsers?: number;
    /** @format int64 */
    sms?: number;
    smsEnabled?: boolean;
    /** @format int64 */
    tbelExecutions?: number;
    /** @format int64 */
    transportMessages?: number;
    /** @format int64 */
    users?: number;
}
/** User */
export interface User {
    /** JSON object with the User Id. Specify this field to update the device. Referencing non-existing User Id will cause error. Omit this field to create new customer. */
    id?: UserId;
    /**
     * Timestamp of the user creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with the Tenant Id. */
    tenantId?: TenantId;
    /** JSON object with the Customer Id. */
    customerId?: CustomerId;
    /**
     * Email of the user
     * @example "user@example.com"
     */
    email: string;
    /**
     * Duplicates the email of the user, readonly
     * @example "user@example.com"
     */
    name?: string;
    /**
     * Authority
     * @example "SYS_ADMIN, TENANT_ADMIN or CUSTOMER_USER"
     */
    authority: "CUSTOMER_USER" | "PRE_VERIFICATION_TOKEN" | "REFRESH_TOKEN" | "SYS_ADMIN" | "TENANT_ADMIN";
    /**
     * First name of the user
     * @example "John"
     */
    firstName?: string;
    /**
     * Last name of the user
     * @example "Doe"
     */
    lastName?: string;
    /**
     * Phone number of the user
     * @example "38012345123"
     */
    phone?: string;
    /** Additional parameters of the user */
    additionalInfo?: JsonNode;
    /** JSON object with Customer or Tenant Id */
    ownerId?: EntityId;
}
/** UserDashboardsInfo */
export interface UserDashboardsInfo {
    /** List of last visited dashboards. */
    last?: (LastVisitedDashboardInfo)[];
    /** List of starred dashboards. */
    starred?: (StarredDashboardInfo)[];
}
/** UserEmailInfo */
export interface UserEmailInfo {
    /** User id */
    id?: UserId;
    /**
     * User email
     * @example "john@gmail.com"
     */
    email?: string;
    /**
     * User first name
     * @example "John"
     */
    firstName?: string;
    /**
     * User last name
     * @example "Brown"
     */
    lastName?: string;
}
/** UserGroupListFilter */
export type UserGroupListFilter = (UsersFilter & {
    groupsIds?: (string)[];
}) & ({
    groupsIds?: (string)[];
});
/** UserId */
export interface UserId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "USER"
     */
    entityType: "USER";
}
/** UserInfo */
export interface UserInfo {
    /** JSON object with the User Id. Specify this field to update the device. Referencing non-existing User Id will cause error. Omit this field to create new customer. */
    id?: UserId;
    /**
     * Timestamp of the user creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with the Tenant Id. */
    tenantId?: TenantId;
    /** JSON object with the Customer Id. */
    customerId?: CustomerId;
    /**
     * Email of the user
     * @example "user@example.com"
     */
    email: string;
    /**
     * Duplicates the email of the user, readonly
     * @example "user@example.com"
     */
    name?: string;
    /**
     * Authority
     * @example "SYS_ADMIN, TENANT_ADMIN or CUSTOMER_USER"
     */
    authority: "CUSTOMER_USER" | "PRE_VERIFICATION_TOKEN" | "REFRESH_TOKEN" | "SYS_ADMIN" | "TENANT_ADMIN";
    /**
     * First name of the user
     * @example "John"
     */
    firstName?: string;
    /**
     * Last name of the user
     * @example "Doe"
     */
    lastName?: string;
    /**
     * Phone number of the user
     * @example "38012345123"
     */
    phone?: string;
    /** Additional parameters of the user */
    additionalInfo?: JsonNode;
    /** JSON object with Customer or Tenant Id */
    ownerId?: EntityId;
    /** Owner name */
    ownerName?: string;
    /** Groups */
    groups?: (EntityInfo)[];
}
/** UserListFilter */
export interface UserListFilter {
    usersIds?: (string)[];
}
/** UserNotificationSettings */
export interface UserNotificationSettings {
    prefs: Record<string, NotificationPref>;
}
/** UserPasswordPolicy */
export interface UserPasswordPolicy {
    /**
     * Allow whitespaces
     * @example false
     */
    allowWhitespaces?: boolean;
    /**
     * Force user to update password if existing one does not pass validation
     * @example false
     */
    forceUserToResetPasswordIfNotValid?: boolean;
    /**
     * Maximum number of symbols in the password.
     * @format int32
     */
    maximumLength?: number;
    /**
     * Minimum number of digits in the password.
     * @format int32
     */
    minimumDigits?: number;
    /**
     * Minimum number of symbols in the password.
     * @format int32
     */
    minimumLength?: number;
    /**
     * Minimum number of lowercase letters in the password.
     * @format int32
     */
    minimumLowercaseLetters?: number;
    /**
     * Minimum number of special in the password.
     * @format int32
     */
    minimumSpecialCharacters?: number;
    /**
     * Minimum number of uppercase letters in the password.
     * @format int32
     */
    minimumUppercaseLetters?: number;
    /**
     * Password expiration period (days). Force expiration of the password.
     * @format int32
     */
    passwordExpirationPeriodDays?: number;
    /**
     * Password reuse frequency (days). Disallow to use the same password for the defined number of days
     * @format int32
     */
    passwordReuseFrequencyDays?: number;
}
/** UserRoleFilter */
export type UserRoleFilter = (UsersFilter & {
    rolesIds?: (string)[];
}) & ({
    rolesIds?: (string)[];
});
/** UsersFilter */
export type UsersFilter = object;
/** VersionCreateConfig */
export interface VersionCreateConfig {
    saveAttributes?: boolean;
    saveCredentials?: boolean;
    saveGroupEntities?: boolean;
    savePermissions?: boolean;
    saveRelations?: boolean;
}
/** VersionCreateRequest */
export interface VersionCreateRequest {
    branch?: string;
    type?: "COMPLEX" | "SINGLE_ENTITY";
    versionName?: string;
}
/** VersionCreationResult */
export interface VersionCreationResult {
    /** @format int32 */
    added?: number;
    done?: boolean;
    error?: string;
    /** @format int32 */
    modified?: number;
    /** @format int32 */
    removed?: number;
    version?: EntityVersion;
}
/** VersionLoadConfig */
export interface VersionLoadConfig {
    autoGenerateIntegrationKey?: boolean;
    loadAttributes?: boolean;
    loadCredentials?: boolean;
    loadGroupEntities?: boolean;
    loadPermissions?: boolean;
    loadRelations?: boolean;
}
/** VersionLoadRequest */
export interface VersionLoadRequest {
    type?: "ENTITY_TYPE" | "SINGLE_ENTITY";
    versionId?: string;
}
/** VersionLoadResult */
export interface VersionLoadResult {
    done?: boolean;
    error?: EntityLoadError;
    result?: (EntityTypeLoadResult)[];
}
/** VersionedEntityInfo */
export interface VersionedEntityInfo {
    externalId?: EntityId;
    path?: string;
}
/** WebDeliveryMethodNotificationTemplate */
export interface WebDeliveryMethodNotificationTemplate {
    additionalConfig?: JsonNode;
    body?: string;
    enabled?: boolean;
    subject?: string;
}
/** WhiteLabeling */
export interface WhiteLabeling {
    customerId?: CustomerId;
    domain?: string;
    settings?: JsonNode;
    tenantId?: TenantId;
    type?: "GENERAL" | "LOGIN" | "MAIL_TEMPLATES";
}
/** WhiteLabelingParams */
export interface WhiteLabelingParams {
    /**
     * Logo image URL
     * @example "https://company.com/images/logo.png"
     */
    logoImageUrl?: string;
    /**
     * The height of a logo container. Logo image will be automatically scaled.
     * @format int32
     */
    logoImageHeight?: number;
    /**
     * White-labeled name of the platform
     * @example "My Company IoT Platform"
     */
    appTitle?: string;
    /** JSON object that contains website icon url and type */
    favicon?: Favicon;
    /** Complex JSON that describes structure of the Angular Material Palette. See [theming](https://material.angular.io/guide/theming) for more details */
    paletteSettings?: PaletteSettings;
    /** Base URL for help link */
    helpLinkBaseUrl?: string;
    /** Base URL for the repository with the UI help components (markdown) */
    uiHelpBaseUrl?: string;
    /**
     * Enable or Disable help links
     * @example false
     */
    enableHelpLinks?: boolean;
    /**
     * Enable white-labeling
     * @example false
     */
    whiteLabelingEnabled?: boolean;
    /**
     * Show platform name and version on UI and login screen
     * @example false
     */
    showNameVersion?: boolean;
    /** White-labeled platform name */
    platformName?: string;
    /** White-labeled platform version */
    platformVersion?: string;
    /** Custom CSS content */
    customCss?: string;
}
/** WidgetType */
export interface WidgetType {
    /** JSON object with the Widget Type Id. Specify this field to update the Widget Type. Referencing non-existing Widget Type Id will cause error. Omit this field to create new Widget Type. */
    id?: WidgetTypeId;
    /**
     * Timestamp of the Widget Type creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id. */
    tenantId?: TenantId;
    /** Unique FQN that is used in dashboards as a reference widget type */
    fqn?: string;
    /** Widget name used in search and UI */
    name?: string;
    /**
     * Whether widget type is deprecated.
     * @example true
     */
    deprecated?: boolean;
    /** Complex JSON object that describes the widget type */
    descriptor?: JsonNode;
}
/** WidgetTypeDetails */
export interface WidgetTypeDetails {
    /**
     * Timestamp of the Widget Type creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id. */
    tenantId?: TenantId;
    /** Unique FQN that is used in dashboards as a reference widget type */
    fqn?: string;
    /** Widget name used in search and UI */
    name?: string;
    /**
     * Whether widget type is deprecated.
     * @example true
     */
    deprecated?: boolean;
    /** Complex JSON object that describes the widget type */
    descriptor?: JsonNode;
    /** Relative or external image URL. Replaced with image data URL (Base64) in case of relative URL and 'inlineImages' option enabled. */
    image?: string;
    /** Description of the widget */
    description?: string;
    /** Tags of the widget type */
    tags?: (string)[];
}
/** WidgetTypeExportData */
export type WidgetTypeExportData = (EntityExportDataObject & {
    attributes?: Record<string, (AttributeExportData)[]>;
    entity?: WidgetTypeDetails;
    entityType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    relations?: (EntityRelation)[];
}) & ({
    attributes?: Record<string, (AttributeExportData)[]>;
    entity?: WidgetTypeDetails;
    entityType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    relations?: (EntityRelation)[];
});
/** WidgetTypeId */
export interface WidgetTypeId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "WIDGET_TYPE"
     */
    entityType: "WIDGET_TYPE";
}
/** WidgetTypeInfo */
export interface WidgetTypeInfo {
    /** JSON object with the Widget Type Id. Specify this field to update the Widget Type. Referencing non-existing Widget Type Id will cause error. Omit this field to create new Widget Type. */
    id?: WidgetTypeId;
    /**
     * Timestamp of the Widget Type creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** JSON object with Tenant Id. */
    tenantId?: TenantId;
    /** Unique FQN that is used in dashboards as a reference widget type */
    fqn?: string;
    /** Widget name used in search and UI */
    name?: string;
    /**
     * Whether widget type is deprecated.
     * @example true
     */
    deprecated?: boolean;
    /** Base64 encoded widget thumbnail */
    image?: string;
    /** Description of the widget type */
    description?: string;
    /** Tags of the widget type */
    tags?: (string)[];
    /** Type of the widget (timeseries, latest, control, alarm or static) */
    widgetType?: string;
}
/** WidgetsBundle */
export interface WidgetsBundle {
    /** JSON object with the Widget Bundle Id. Specify this field to update the Widget Bundle. Referencing non-existing Widget Bundle Id will cause error. Omit this field to create new Widget Bundle. */
    id?: WidgetsBundleId;
    /**
     * Timestamp of the Widget Bundle creation, in milliseconds
     * @format int64
     * @example 1609459200000
     */
    createdTime?: number;
    /** Same as title of the Widget Bundle. Read-only field. Update the 'title' to change the 'name' of the Widget Bundle. */
    name?: string;
    /** JSON object with Tenant Id. */
    tenantId?: TenantId;
    /** Unique alias that is used in widget types as a reference widget bundle */
    alias?: string;
    /** Title used in search and UI */
    title?: string;
    /** Relative or external image URL. Replaced with image data URL (Base64) in case of relative URL and 'inlineImages' option enabled. */
    image?: string;
    /** Description */
    description?: string;
    /**
     * Order
     * @format int32
     */
    order?: number;
}
/** WidgetsBundleExportData */
export type WidgetsBundleExportData = (EntityExportDataObject & {
    attributes?: Record<string, (AttributeExportData)[]>;
    entity?: WidgetsBundle;
    entityType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    fqns?: (string)[];
    relations?: (EntityRelation)[];
    widgets?: (ObjectNode)[];
}) & ({
    attributes?: Record<string, (AttributeExportData)[]>;
    entity?: WidgetsBundle;
    entityType?: "ALARM" | "API_USAGE_STATE" | "ASSET" | "ASSET_PROFILE" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "DEVICE_PROFILE" | "EDGE" | "ENTITY_GROUP" | "ENTITY_VIEW" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "NOTIFICATION_REQUEST" | "NOTIFICATION_RULE" | "NOTIFICATION_TARGET" | "NOTIFICATION_TEMPLATE" | "OTA_PACKAGE" | "QUEUE" | "ROLE" | "RPC" | "RULE_CHAIN" | "RULE_NODE" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "WIDGETS_BUNDLE" | "WIDGET_TYPE";
    fqns?: (string)[];
    relations?: (EntityRelation)[];
    widgets?: (ObjectNode)[];
});
/** WidgetsBundleId */
export interface WidgetsBundleId {
    /**
     * ID of the entity, time-based UUID v1
     * @format uuid
     * @example "784f394c-42b6-435a-983c-b7beff2784f9"
     */
    id: string;
    /**
     * string
     * @example "WIDGETS_BUNDLE"
     */
    entityType: "WIDGETS_BUNDLE";
}
/** X509CertificateChainProvisionConfiguration */
export type X509CertificateChainProvisionConfiguration = (DeviceProfileProvisionConfiguration & {
    "allowCreateNewDevicesByX509Certificate"?: boolean;
    certificateRegExPattern?: string;
    provisionDeviceSecret?: string;
}) & ({
    "allowCreateNewDevicesByX509Certificate"?: boolean;
    certificateRegExPattern?: string;
    provisionDeviceSecret?: string;
});
/** X509LwM2MBootstrapServerCredential */
export interface X509LwM2MBootstrapServerCredential {
    /**
     * Server short Id. Used as link to associate server Object Instance. This identifier uniquely identifies each LwM2M Server configured for the LwM2M Client. This Resource MUST be set when the Bootstrap-Server Resource has a value of 'false'. The values ID:0 and ID:65535 values MUST NOT be used for identifying the LwM2M Server.
     * @format int32
     * @example 123
     */
    shortServerId?: number;
    /**
     * Is Bootstrap Server or Lwm2m Server. The LwM2M Client MAY be configured to use one or more LwM2M Server Account(s). The LwM2M Client MUST have at most one LwM2M Bootstrap-Server Account. (*) The LwM2M client MUST have at least one LwM2M server account after completing the boot sequence specified.
     * @example false
     */
    bootstrapServerIs?: boolean;
    /**
     * Host for 'No Security' mode
     * @example "0.0.0.0"
     */
    host?: string;
    /**
     * Port for  Lwm2m Server: 'No Security' mode: Lwm2m Server or Bootstrap Server
     * @format int32
     */
    port?: number;
    /**
     * Client Hold Off Time. The number of seconds to wait before initiating a Client Initiated Bootstrap once the LwM2M Client has determined it should initiate this bootstrap mode. (This information is relevant for use with a Bootstrap-Server only.)
     * @format int32
     * @example 1
     */
    clientHoldOffTime?: number;
    /**
     * Server Public Key for 'Security' mode (DTLS): RPK or X509. Format: base64 encoded
     * @example "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEAZ0pSaGKHk/GrDaUDnQZpeEdGwX7m3Ws+U/kiVat
     * +44sgk3c8g0LotfMpLlZJPhPwJ6ipXV+O1r7IZUjBs3LNA=="
     */
    serverPublicKey?: string;
    /**
     * Server Public Key for 'Security' mode (DTLS): X509. Format: base64 encoded
     * @example "MMIICODCCAd6gAwIBAgIUI88U1zowOdrxDK/dOV+36gJxI2MwCgYIKoZIzj0EAwIwejELMAkGA1UEBhMCVUs
     * xEjAQBgNVBAgTCUt5aXYgY2l0eTENMAsGA1UEBxMES3lpdjEUMBIGA1UEChMLVGhpbmdzYm9hcmQxFzAVBgNVBAsMDkRFVkVMT1BFUl9URVNUMRkwFwYDVQQDDBBpbnRlcm1lZGlhdGVfY2EwMB4XDTIyMDEwOTEzMDMwMFoXDTI3MDEwODEzMDMwMFowFDESMBAGA1UEAxM
     * JbG9jYWxob3N0MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEUO3vBo/JTv0eooY7XHiKAIVDoWKFqtrU7C6q8AIKqpLcqhCdW+haFeBOH3PjY6EwaWkY04Bir4oanU0s7tz2uKOBpzCBpDAOBgNVHQ8BAf8EBAMCBaAwEwYDVR0lBAwwCgYIKwYBBQUHAwEwDAYDVR0TAQH/
     * BAIwADAdBgNVHQ4EFgQUEjc3Q4a0TxzP/3x3EV4fHxYUg0YwHwYDVR0jBBgwFoAUuSquGycMU6Q0SYNcbtSkSD3TfH0wLwYDVR0RBCgwJoIVbG9jYWxob3N0LmxvY2FsZG9tYWlugglsb2NhbGhvc3SCAiAtMAoGCCqGSM49BAMCA0gAMEUCIQD7dbZObyUaoDiNbX+9fUNp
     * AWrD7N7XuJUwZ9FcN75R3gIgb2RNjDkHoyUyF1YajwkBk+7XmIXNClmizNJigj908mw="
     */
    serverCertificate?: string;
    /**
     * Bootstrap Server Account Timeout (If the value is set to 0, or if this resource is not instantiated, the Bootstrap-Server Account lifetime is infinite.)
     * @format int32
     * @example 0
     */
    bootstrapServerAccountTimeout?: number;
    /**
     * Specify the lifetime of the registration in seconds.
     * @format int32
     * @example 300
     */
    lifetime?: number;
    /**
     * The default value the LwM2M Client should use for the Minimum Period of an Observation in the absence of this parameter being included in an Observation. If this Resource doesn’t exist, the default value is 0.
     * @format int32
     * @example 1
     */
    defaultMinPeriod?: number;
    /**
     * If true, the LwM2M Client stores “Notify” operations to the LwM2M Server while the LwM2M Server account is disabled or the LwM2M Client is offline. After the LwM2M Server account is enabled or the LwM2M Client is online, the LwM2M Client reports the stored “Notify” operations to the Server. If false, the LwM2M Client discards all the “Notify” operations or temporarily disables the Observe function while the LwM2M Server is disabled or the LwM2M Client is offline. The default value is true.
     * @example true
     */
    notifIfDisabled?: boolean;
    /**
     * This Resource defines the transport binding configured for the LwM2M Client. If the LwM2M Client supports the binding specified in this Resource, the LwM2M Client MUST use that transport for the Current Binding Mode.
     * @example "U"
     */
    binding?: string;
}
import type { AxiosInstance, AxiosRequestConfig, ResponseType, AxiosResponse } from "axios";
export type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType;
    /** request body */
    body?: unknown;
}
export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
    securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain"
}
export declare class HttpClient<SecurityDataType = unknown> {
    instance: AxiosInstance;
    private securityData;
    private securityWorker?;
    private secure?;
    private format?;
    constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig;
    protected stringifyFormItem(formItem: unknown): string;
    protected createFormData(input: Record<string, unknown>): FormData;
    request: <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams) => Promise<AxiosResponse<T>>;
}
/**
* @title VX Olympus REST API
* @version 3.6.2PE
* @license Apache License Version 2.0 (https://www.apache.org/licenses/LICENSE-2.0)
* @baseUrl https://portal.vxolympus.com:443
* @contact Viaanix, Inc. <info@viaanix.com> (https://viaanix.com)
*
* VX Olympus IoT platform REST API documentation.
*/
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    api: {
        /**
       * @description Get the auto commit settings object. Available for users with 'TENANT_ADMIN' authority.
       *
       * @tags admin-controller
       * @name GetAutoCommitSettingsUsingGet
       * @summary Get auto commit settings (getAutoCommitSettings)
       * @request GET:/api/admin/autoCommitSettings
       * @secure
       */
        getAutoCommitSettingsUsingGet: (params?: RequestParams) => Promise<AxiosResponse<Record<string, AutoVersionCreateConfig>, any>>;
        /**
       * @description Creates or Updates the auto commit settings object. Available for users with 'TENANT_ADMIN' authority.
       *
       * @tags admin-controller
       * @name SaveAutoCommitSettingsUsingPost
       * @summary Creates or Updates the auto commit settings (saveAutoCommitSettings)
       * @request POST:/api/admin/autoCommitSettings
       * @secure
       */
        saveAutoCommitSettingsUsingPost: (data: Record<string, AutoVersionCreateConfig>, params?: RequestParams) => Promise<AxiosResponse<Record<string, AutoVersionCreateConfig>, any>>;
        /**
       * @description Deletes the auto commit settings. Available for users with 'TENANT_ADMIN' authority.
       *
       * @tags admin-controller
       * @name DeleteAutoCommitSettingsUsingDelete
       * @summary Delete auto commit settings (deleteAutoCommitSettings)
       * @request DELETE:/api/admin/autoCommitSettings
       * @secure
       */
        deleteAutoCommitSettingsUsingDelete: (params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
       * @description Check whether the auto commit settings exists. Available for users with 'TENANT_ADMIN' authority.
       *
       * @tags admin-controller
       * @name AutoCommitSettingsExistsUsingGet
       * @summary Check auto commit settings exists (autoCommitSettingsExists)
       * @request GET:/api/admin/autoCommitSettings/exists
       * @secure
       */
        autoCommitSettingsExistsUsingGet: (params?: RequestParams) => Promise<AxiosResponse<boolean, any>>;
        /**
       * @description Get information about enabled/disabled features. Available for users with 'SYS_ADMIN' authority.
       *
       * @tags admin-controller
       * @name GetFeaturesInfoUsingGet
       * @summary Get features info (getFeaturesInfo)
       * @request GET:/api/admin/featuresInfo
       * @secure
       */
        getFeaturesInfoUsingGet: (params?: RequestParams) => Promise<AxiosResponse<FeaturesInfo, any>>;
        /**
       * @description Get the JWT Settings object that contains JWT token policy, etc. Available for users with 'SYS_ADMIN' authority.
       *
       * @tags admin-controller
       * @name GetJwtSettingsUsingGet
       * @summary Get the JWT Settings object (getJwtSettings)
       * @request GET:/api/admin/jwtSettings
       * @secure
       */
        getJwtSettingsUsingGet: (params?: RequestParams) => Promise<AxiosResponse<JWTSettings, any>>;
        /**
       * @description Updates the JWT Settings object that contains JWT token policy, etc. The tokenSigningKey field is a Base64 encoded string. Available for users with 'SYS_ADMIN' authority.
       *
       * @tags admin-controller
       * @name SaveJwtSettingsUsingPost
       * @summary Update JWT Settings (saveJwtSettings)
       * @request POST:/api/admin/jwtSettings
       * @secure
       */
        saveJwtSettingsUsingPost: (data: JWTSettings, params?: RequestParams) => Promise<AxiosResponse<JWTPair, any>>;
        /**
       * @description Get license usage info. Available for users with 'SYS_ADMIN' authority.
       *
       * @tags admin-controller
       * @name GetLicenseUsageInfoUsingGet
       * @summary Get license usage info (getLicenseUsageInfo)
       * @request GET:/api/admin/licenseUsageInfo
       * @secure
       */
        getLicenseUsageInfoUsingGet: (params?: RequestParams) => Promise<AxiosResponse<LicenseUsageInfo, any>>;
        /**
       * @description After user logged in and provided accessprovider sends authorization code to specified redirect uri.)
       *
       * @tags admin-controller
       * @name GetAuthorizationUrlUsingGet
       * @summary Redirect user to mail provider login page.
       * @request GET:/api/admin/mail/oauth2/authorize
       * @secure
       */
        getAuthorizationUrlUsingGet: (params?: RequestParams) => Promise<AxiosResponse<string, any>>;
        /**
       * No description
       *
       * @tags admin-controller
       * @name CodeProcessingUrlUsingGet
       * @summary codeProcessingUrl
       * @request GET:/api/admin/mail/oauth2/code{?code,state}
       * @secure
       */
        codeProcessingUrlUsingGet: (query: {
            /** code */
            code: string;
            /** state */
            state: string;
        }, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
       * @description Returns the URL enclosed in double quotes. After successful authentication with OAuth2 provider and user consent for requested scope, it makes a redirect to this path so that the platform can do further log in processing and generating access tokens. Available for users with 'SYS_ADMIN' authority.
       *
       * @tags admin-controller
       * @name GetMailProcessingUrlUsingGet
       * @summary Get OAuth2 log in processing URL (getMailProcessingUrl)
       * @request GET:/api/admin/mail/oauth2/loginProcessingUrl
       * @secure
       */
        getMailProcessingUrlUsingGet: (params?: RequestParams) => Promise<AxiosResponse<string, any>>;
        /**
       * @description Get the repository settings object. Available for users with 'TENANT_ADMIN' authority.
       *
       * @tags admin-controller
       * @name GetRepositorySettingsUsingGet
       * @summary Get repository settings (getRepositorySettings)
       * @request GET:/api/admin/repositorySettings
       * @secure
       */
        getRepositorySettingsUsingGet: (params?: RequestParams) => Promise<AxiosResponse<RepositorySettings, any>>;
        /**
       * @description Creates or Updates the repository settings object. Available for users with 'TENANT_ADMIN' authority.
       *
       * @tags admin-controller
       * @name SaveRepositorySettingsUsingPost
       * @summary Creates or Updates the repository settings (saveRepositorySettings)
       * @request POST:/api/admin/repositorySettings
       * @secure
       */
        saveRepositorySettingsUsingPost: (data: RepositorySettings, params?: RequestParams) => Promise<AxiosResponse<DeferredResultRepositorySettings, any>>;
        /**
       * @description Deletes the repository settings. Available for users with 'TENANT_ADMIN' authority.
       *
       * @tags admin-controller
       * @name DeleteRepositorySettingsUsingDelete
       * @summary Delete repository settings (deleteRepositorySettings)
       * @request DELETE:/api/admin/repositorySettings
       * @secure
       */
        deleteRepositorySettingsUsingDelete: (params?: RequestParams) => Promise<AxiosResponse<DeferredResultVoid, any>>;
        /**
       * @description Attempts to check repository access. Available for users with 'TENANT_ADMIN' authority.
       *
       * @tags admin-controller
       * @name CheckRepositoryAccessUsingPost
       * @summary Check repository access (checkRepositoryAccess)
       * @request POST:/api/admin/repositorySettings/checkAccess
       * @secure
       */
        checkRepositoryAccessUsingPost: (data: RepositorySettings, params?: RequestParams) => Promise<AxiosResponse<DeferredResultVoid, any>>;
        /**
       * @description Check whether the repository settings exists. Available for users with 'TENANT_ADMIN' authority.
       *
       * @tags admin-controller
       * @name RepositorySettingsExistsUsingGet
       * @summary Check repository settings exists (repositorySettingsExists)
       * @request GET:/api/admin/repositorySettings/exists
       * @secure
       */
        repositorySettingsExistsUsingGet: (params?: RequestParams) => Promise<AxiosResponse<boolean, any>>;
        /**
       * No description
       *
       * @tags admin-controller
       * @name GetRepositorySettingsInfoUsingGet
       * @summary getRepositorySettingsInfo
       * @request GET:/api/admin/repositorySettings/info
       * @secure
       */
        getRepositorySettingsInfoUsingGet: (params?: RequestParams) => Promise<AxiosResponse<RepositorySettingsInfo, any>>;
        /**
       * @description Get the Security Settings object that contains password policy, etc. Available for users with 'SYS_ADMIN' authority. Security check is performed to verify that the user has 'READ' permission for the 'ADMIN_SETTINGS' (for 'SYS_ADMIN' authority) or 'WHITE_LABELING' (for 'TENANT_ADMIN' authority) resource.
       *
       * @tags admin-controller
       * @name GetSecuritySettingsUsingGet
       * @summary Get the Security Settings object
       * @request GET:/api/admin/securitySettings
       * @secure
       */
        getSecuritySettingsUsingGet: (params?: RequestParams) => Promise<AxiosResponse<SecuritySettings, any>>;
        /**
       * @description Updates the Security Settings object that contains password policy, etc. Available for users with 'SYS_ADMIN' authority. Security check is performed to verify that the user has 'WRITE' permission for the 'ADMIN_SETTINGS' (for 'SYS_ADMIN' authority) or 'WHITE_LABELING' (for 'TENANT_ADMIN' authority) resource.
       *
       * @tags admin-controller
       * @name SaveSecuritySettingsUsingPost
       * @summary Update Security Settings (saveSecuritySettings)
       * @request POST:/api/admin/securitySettings
       * @secure
       */
        saveSecuritySettingsUsingPost: (data: SecuritySettings, params?: RequestParams) => Promise<AxiosResponse<SecuritySettings, any>>;
        /**
       * @description Creates or Updates the Administration Settings. Platform generates random Administration Settings Id during settings creation. The Administration Settings Id will be present in the response. Specify the Administration Settings Id when you would like to update the Administration Settings. Referencing non-existing Administration Settings Id will cause an error. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority. Security check is performed to verify that the user has 'WRITE' permission for the 'ADMIN_SETTINGS' (for 'SYS_ADMIN' authority) or 'WHITE_LABELING' (for 'TENANT_ADMIN' authority) resource.
       *
       * @tags admin-controller
       * @name SaveAdminSettingsUsingPost
       * @summary Get the Administration Settings object using key (getAdminSettings)
       * @request POST:/api/admin/settings
       * @secure
       */
        saveAdminSettingsUsingPost: (data: AdminSettings, params?: RequestParams) => Promise<AxiosResponse<AdminSettings, any>>;
        /**
       * @description Attempts to send test email using Mail Settings provided as a parameter. Email is sent to the address specified in the profile of user who is performing the requestYou may change the 'To' email in the user profile of the System/Tenant Administrator. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority. Security check is performed to verify that the user has 'READ' permission for the 'ADMIN_SETTINGS' (for 'SYS_ADMIN' authority) or 'WHITE_LABELING' (for 'TENANT_ADMIN' authority) resource.
       *
       * @tags admin-controller
       * @name SendTestMailUsingPost
       * @summary Send test email (sendTestMail)
       * @request POST:/api/admin/settings/testMail
       * @secure
       */
        sendTestMailUsingPost: (data: AdminSettings, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
       * @description Attempts to send test sms to the System Administrator User using SMS Settings and phone number provided as a parameters of the request. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority. Security check is performed to verify that the user has 'READ' permission for the 'ADMIN_SETTINGS' (for 'SYS_ADMIN' authority) or 'WHITE_LABELING' (for 'TENANT_ADMIN' authority) resource.
       *
       * @tags admin-controller
       * @name SendTestSmsUsingPost
       * @summary Send test sms (sendTestMail)
       * @request POST:/api/admin/settings/testSms
       * @secure
       */
        sendTestSmsUsingPost: (data: TestSmsRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
       * @description Get the Administration Settings object using specified string key. Referencing non-existing key will cause an error. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority. Security check is performed to verify that the user has 'READ' permission for the 'ADMIN_SETTINGS' (for 'SYS_ADMIN' authority) or 'WHITE_LABELING' (for 'TENANT_ADMIN' authority) resource.
       *
       * @tags admin-controller
       * @name GetAdminSettingsUsingGet
       * @summary Get the Administration Settings object using key (getAdminSettings)
       * @request GET:/api/admin/settings/{key}{?systemByDefault}
       * @secure
       */
        getAdminSettingsUsingGet: (key: string, query?: {
            /** Use system settings if settings are not defined on tenant level. */
            systemByDefault?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<AdminSettings, any>>;
        /**
       * @description Get main information about system. Available for users with 'SYS_ADMIN' authority.
       *
       * @tags admin-controller
       * @name GetSystemInfoUsingGet
       * @summary Get system info (getSystemInfo)
       * @request GET:/api/admin/systemInfo
       * @secure
       */
        getSystemInfoUsingGet: (params?: RequestParams) => Promise<AxiosResponse<SystemInfo, any>>;
        /**
       * @description Check notifications about new platform releases. Available for users with 'SYS_ADMIN' authority.
       *
       * @tags admin-controller
       * @name CheckUpdatesUsingGet
       * @summary Check for new Platform Releases (checkUpdates)
       * @request GET:/api/admin/updates
       * @secure
       */
        checkUpdatesUsingGet: (params?: RequestParams) => Promise<AxiosResponse<UpdateMessage, any>>;
        /**
       * @description Login method used to authenticate user and get JWT token data. Value of the response **token** field can be used as **X-Authorization** header value: `X-Authorization: Bearer $JWT_TOKEN_VALUE`.
       *
       * @tags login-endpoint
       * @name LoginPost
       * @summary Login method to get user JWT token data
       * @request POST:/api/auth/login
       */
        loginPost: (data: LoginRequest, params?: RequestParams) => Promise<AxiosResponse<LoginResponse, any>>;
        /**
       * @description Creates or Updates the Alarm Comment. When creating comment, platform generates Alarm Comment Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created Alarm Comment id will be present in the response. Specify existing Alarm Comment id to update the alarm. Referencing non-existing Alarm Comment Id will cause 'Not Found' error. To create new Alarm comment entity it is enough to specify 'comment' json element with 'text' node, for example: {"comment": { "text": "my comment"}}. If comment type is not specified the default value 'OTHER' will be saved. If 'alarmId' or 'userId' specified in body it will be ignored. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
       *
       * @tags alarm-comment-controller
       * @name SaveAlarmCommentUsingPost
       * @summary Create or update Alarm Comment
       * @request POST:/api/alarm/{alarmId}/comment
       * @secure
       */
        saveAlarmCommentUsingPost: (alarmId: string, data: AlarmComment, params?: RequestParams) => Promise<AxiosResponse<AlarmComment, any>>;
        /**
       * @description Deletes the Alarm comment. Referencing non-existing Alarm comment Id will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
       *
       * @tags alarm-comment-controller
       * @name DeleteAlarmCommentUsingDelete
       * @summary Delete Alarm comment (deleteAlarmComment)
       * @request DELETE:/api/alarm/{alarmId}/comment/{commentId}
       * @secure
       */
        deleteAlarmCommentUsingDelete: (alarmId: string, commentId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
       * @description Returns a page of alarm comments for specified alarm. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
       *
       * @tags alarm-comment-controller
       * @name GetAlarmCommentsUsingGet
       * @summary Get Alarm comments (getAlarmComments)
       * @request GET:/api/alarm/{alarmId}/comment{?page,pageSize,sortOrder,sortProperty}
       * @secure
       */
        getAlarmCommentsUsingGet: (alarmId: string, query: {
            /**
             * Maximum amount of entities in a one page
             * @format int32
             */
            pageSize: number;
            /**
             * Sequence number of page starting from 0
             * @format int32
             */
            page: number;
            /** Property of entity to sort by */
            sortProperty?: "createdTime" | "id";
            /** Sort order. ASC (ASCENDING) or DESC (DESCENDING) */
            sortOrder?: "ASC" | "DESC";
        }, params?: RequestParams) => Promise<AxiosResponse<PageDataAlarmCommentInfo, any>>;
        /**
       * @description Creates or Updates the Alarm. When creating alarm, platform generates Alarm Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created Alarm id will be present in the response. Specify existing Alarm id to update the alarm. Referencing non-existing Alarm Id will cause 'Not Found' error. Platform also deduplicate the alarms based on the entity id of originator and alarm 'type'. For example, if the user or system component create the alarm with the type 'HighTemperature' for device 'Device A' the new active alarm is created. If the user tries to create 'HighTemperature' alarm for the same device again, the previous alarm will be updated (the 'end_ts' will be set to current timestamp). If the user clears the alarm (see 'Clear Alarm(clearAlarm)'), than new alarm with the same type and same device may be created. Remove 'id', 'tenantId' and optionally 'customerId' from the request body example (below) to create new Alarm entity. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
       *
       * @tags alarm-controller
       * @name SaveAlarmUsingPost
       * @summary Create or Update Alarm (saveAlarm)
       * @request POST:/api/alarm
       * @secure
       */
        saveAlarmUsingPost: (data: Alarm, params?: RequestParams) => Promise<AxiosResponse<Alarm, any>>;
        /**
       * @description Search the alarms by originator ('entityType' and entityId') and optional 'status' or 'searchStatus' filters and returns the highest AlarmSeverity(CRITICAL, MAJOR, MINOR, WARNING or INDETERMINATE). Specifying both parameters 'searchStatus' and 'status' at the same time will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
       *
       * @tags alarm-controller
       * @name GetHighestAlarmSeverityUsingGet
       * @summary Get Highest Alarm Severity (getHighestAlarmSeverity)
       * @request GET:/api/alarm/highestSeverity/{entityType}/{entityId}{?assigneeId,searchStatus,status}
       * @secure
       */
        getHighestAlarmSeverityUsingGet: (entityType: string, entityId: string, query?: {
            /** A string value representing one of the AlarmSearchStatus enumeration value */
            searchStatus?: "ACK" | "ACTIVE" | "ANY" | "CLEARED" | "UNACK";
            /** A string value representing one of the AlarmStatus enumeration value */
            status?: "ACTIVE_ACK" | "ACTIVE_UNACK" | "CLEARED_ACK" | "CLEARED_UNACK";
            /** A string value representing the assignee user id. For example, '784f394c-42b6-435a-983c-b7beff2784f9' */
            assigneeId?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<"CRITICAL" | "INDETERMINATE" | "MAJOR" | "MINOR" | "WARNING", any>>;
        /**
       * @description Fetch the Alarm Info object based on the provided Alarm Id. Alarm Info is an extension of the default Alarm object that also contains name of the alarm originator. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
       *
       * @tags alarm-controller
       * @name GetAlarmInfoByIdUsingGet
       * @summary Get Alarm Info (getAlarmInfoById)
       * @request GET:/api/alarm/info/{alarmId}
       * @secure
       */
        getAlarmInfoByIdUsingGet: (alarmId: string, params?: RequestParams) => Promise<AxiosResponse<AlarmInfo, any>>;
        /**
       * @description Returns a set of unique alarm types based on alarms that are either owned by the tenant or assigned to the customer which user is performing the request.
       *
       * @tags alarm-controller
       * @name GetAlarmTypesUsingGet
       * @summary Get Alarm Types (getAlarmTypes)
       * @request GET:/api/alarm/types{?page,pageSize,sortOrder,textSearch}
       * @secure
       */
        getAlarmTypesUsingGet: (query: {
            /**
             * Maximum amount of entities in a one page
             * @format int32
             */
            pageSize: number;
            /**
             * Sequence number of page starting from 0
             * @format int32
             */
            page: number;
            /** The case insensitive 'substring' filter based on of next alarm fields: type, severity or status */
            textSearch?: string;
            /** Sort order. ASC (ASCENDING) or DESC (DESCENDING) */
            sortOrder?: "ASC" | "DESC";
        }, params?: RequestParams) => Promise<AxiosResponse<PageDataEntitySubtype, any>>;
        /**
       * @description Fetch the Alarm object based on the provided Alarm Id. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
       *
       * @tags alarm-controller
       * @name GetAlarmByIdUsingGet
       * @summary Get Alarm (getAlarmById)
       * @request GET:/api/alarm/{alarmId}
       * @secure
       */
        getAlarmByIdUsingGet: (alarmId: string, params?: RequestParams) => Promise<AxiosResponse<Alarm, any>>;
        /**
       * @description Deletes the Alarm. Referencing non-existing Alarm Id will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'DELETE' permission for the entity (entities).
       *
       * @tags alarm-controller
       * @name DeleteAlarmUsingDelete
       * @summary Delete Alarm (deleteAlarm)
       * @request DELETE:/api/alarm/{alarmId}
       * @secure
       */
        deleteAlarmUsingDelete: (alarmId: string, params?: RequestParams) => Promise<AxiosResponse<boolean, any>>;
        /**
       * @description Acknowledge the Alarm. Once acknowledged, the 'ack_ts' field will be set to current timestamp and special rule chain event 'ALARM_ACK' will be generated. Referencing non-existing Alarm Id will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
       *
       * @tags alarm-controller
       * @name AckAlarmUsingPost
       * @summary Acknowledge Alarm (ackAlarm)
       * @request POST:/api/alarm/{alarmId}/ack
       * @secure
       */
        ackAlarmUsingPost: (alarmId: string, params?: RequestParams) => Promise<AxiosResponse<AlarmInfo, any>>;
        /**
       * @description Unassign the Alarm. Once unassigned, the 'assign_ts' field will be set to current timestamp and special rule chain event 'ALARM_UNASSIGNED' will be generated. Referencing non-existing Alarm Id will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
       *
       * @tags alarm-controller
       * @name UnassignAlarmUsingDelete
       * @summary Unassign Alarm (unassignAlarm)
       * @request DELETE:/api/alarm/{alarmId}/assign
       * @secure
       */
        unassignAlarmUsingDelete: (alarmId: string, params?: RequestParams) => Promise<AxiosResponse<Alarm, any>>;
        /**
       * @description Assign the Alarm. Once assigned, the 'assign_ts' field will be set to current timestamp and special rule chain event 'ALARM_ASSIGNED' (or ALARM_REASSIGNED in case of assigning already assigned alarm) will be generated. Referencing non-existing Alarm Id will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
       *
       * @tags alarm-controller
       * @name AssignAlarmUsingPost
       * @summary Assign/Reassign Alarm (assignAlarm)
       * @request POST:/api/alarm/{alarmId}/assign/{assigneeId}
       * @secure
       */
        assignAlarmUsingPost: (alarmId: string, assigneeId: string, params?: RequestParams) => Promise<AxiosResponse<Alarm, any>>;
        /**
       * @description Clear the Alarm. Once cleared, the 'clear_ts' field will be set to current timestamp and special rule chain event 'ALARM_CLEAR' will be generated. Referencing non-existing Alarm Id will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
       *
       * @tags alarm-controller
       * @name ClearAlarmUsingPost
       * @summary Clear Alarm (clearAlarm)
       * @request POST:/api/alarm/{alarmId}/clear
       * @secure
       */
        clearAlarmUsingPost: (alarmId: string, params?: RequestParams) => Promise<AxiosResponse<AlarmInfo, any>>;
        /**
       * @description Returns a page of alarms for the selected entity. Specifying both parameters 'searchStatus' and 'status' at the same time will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
       *
       * @tags alarm-controller
       * @name GetAlarmsUsingGet
       * @summary Get Alarms (getAlarms)
       * @request GET:/api/alarm/{entityType}/{entityId}{?assigneeId,endTime,fetchOriginator,page,pageSize,searchStatus,sortOrder,sortProperty,startTime,status,textSearch}
       * @secure
       */
        getAlarmsUsingGet: (entityType: string, entityId: string, query: {
            /** A string value representing one of the AlarmSearchStatus enumeration value */
            searchStatus?: "ACK" | "ACTIVE" | "ANY" | "CLEARED" | "UNACK";
            /** A string value representing one of the AlarmStatus enumeration value */
            status?: "ACTIVE_ACK" | "ACTIVE_UNACK" | "CLEARED_ACK" | "CLEARED_UNACK";
            /** A string value representing the assignee user id. For example, '784f394c-42b6-435a-983c-b7beff2784f9' */
            assigneeId?: string;
            /**
             * Maximum amount of entities in a one page
             * @format int32
             */
            pageSize: number;
            /**
             * Sequence number of page starting from 0
             * @format int32
             */
            page: number;
            /** The case insensitive 'substring' filter based on of next alarm fields: type, severity or status */
            textSearch?: string;
            /** Property of entity to sort by */
            sortProperty?: "ackTs" | "clearTs" | "createdTime" | "endTs" | "severity" | "startTs" | "status" | "type";
            /** Sort order. ASC (ASCENDING) or DESC (DESCENDING) */
            sortOrder?: "ASC" | "DESC";
            /**
             * The start timestamp in milliseconds of the search time range over the Alarm class field: 'createdTime'.
             * @format int64
             */
            startTime?: number;
            /**
             * The end timestamp in milliseconds of the search time range over the Alarm class field: 'createdTime'.
             * @format int64
             */
            endTime?: number;
            /** A boolean value to specify if the alarm originator name will be filled in the AlarmInfo object  field: 'originatorName' or will returns as null. */
            fetchOriginator?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<PageDataAlarmInfo, any>>;
        /**
       * @description Returns a page of alarms that belongs to the current user owner. If the user has the authority of 'Tenant Administrator', the server returns alarms that belongs to the tenant of current user. If the user has the authority of 'Customer User', the server returns alarms that belongs to the customer of current user. Specifying both parameters 'searchStatus' and 'status' at the same time will cause an error. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
       *
       * @tags alarm-controller
       * @name GetAllAlarmsUsingGet
       * @summary Get All Alarms (getAllAlarms)
       * @request GET:/api/alarms{?assigneeId,endTime,fetchOriginator,page,pageSize,searchStatus,sortOrder,sortProperty,startTime,status,textSearch}
       * @secure
       */
        getAllAlarmsUsingGet: (query: {
            /** A string value representing one of the AlarmSearchStatus enumeration value */
            searchStatus?: "ACK" | "ACTIVE" | "ANY" | "CLEARED" | "UNACK";
            /** A string value representing one of the AlarmStatus enumeration value */
            status?: "ACTIVE_ACK" | "ACTIVE_UNACK" | "CLEARED_ACK" | "CLEARED_UNACK";
            /** A string value representing the assignee user id. For example, '784f394c-42b6-435a-983c-b7beff2784f9' */
            assigneeId?: string;
            /**
             * Maximum amount of entities in a one page
             * @format int32
             */
            pageSize: number;
            /**
             * Sequence number of page starting from 0
             * @format int32
             */
            page: number;
            /** The case insensitive 'substring' filter based on of next alarm fields: type, severity or status */
            textSearch?: string;
            /** Property of entity to sort by */
            sortProperty?: "ackTs" | "clearTs" | "createdTime" | "endTs" | "severity" | "startTs" | "status" | "type";
            /** Sort order. ASC (ASCENDING) or DESC (DESCENDING) */
            sortOrder?: "ASC" | "DESC";
            /**
             * The start timestamp in milliseconds of the search time range over the Alarm class field: 'createdTime'.
             * @format int64
             */
            startTime?: number;
            /**
             * The end timestamp in milliseconds of the search time range over the Alarm class field: 'createdTime'.
             * @format int64
             */
            endTime?: number;
            /** A boolean value to specify if the alarm originator name will be filled in the AlarmInfo object  field: 'originatorName' or will returns as null. */
            fetchOriginator?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<PageDataAlarmInfo, any>>;
        /**
       * @description Returns a page of alarms for the selected entity. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
       *
       * @tags alarm-controller
       * @name GetAlarmsV2UsingGet
       * @summary Get Alarms (getAlarmsV2)
       * @request GET:/api/v2/alarm/{entityType}/{entityId}{?assigneeId,endTime,page,pageSize,severityList,sortOrder,sortProperty,startTime,statusList,textSearch,typeList}
       * @secure
       */
        getAlarmsV2UsingGet: (entityType: string, entityId: string, query: {
            /** A list of string values separated by comma ',' representing one of the AlarmSearchStatus enumeration value */
            statusList?: "ACK" | "ACTIVE" | "ANY" | "CLEARED" | "UNACK";
            /** A list of string values separated by comma ',' representing one of the AlarmSeverity enumeration value */
            severityList?: "CRITICAL" | "INDETERMINATE" | "MAJOR" | "MINOR" | "WARNING";
            /** A list of string values separated by comma ',' representing alarm types */
            typeList?: string;
            /** A string value representing the assignee user id. For example, '784f394c-42b6-435a-983c-b7beff2784f9' */
            assigneeId?: string;
            /**
             * Maximum amount of entities in a one page
             * @format int32
             */
            pageSize: number;
            /**
             * Sequence number of page starting from 0
             * @format int32
             */
            page: number;
            /** The case insensitive 'substring' filter based on of next alarm fields: type, severity or status */
            textSearch?: string;
            /** Property of entity to sort by */
            sortProperty?: "ackTs" | "clearTs" | "createdTime" | "endTs" | "severity" | "startTs" | "status" | "type";
            /** Sort order. ASC (ASCENDING) or DESC (DESCENDING) */
            sortOrder?: "ASC" | "DESC";
            /**
             * The start timestamp in milliseconds of the search time range over the Alarm class field: 'createdTime'.
             * @format int64
             */
            startTime?: number;
            /**
             * The end timestamp in milliseconds of the search time range over the Alarm class field: 'createdTime'.
             * @format int64
             */
            endTime?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<PageDataAlarmInfo, any>>;
        /**
       * @description Returns a page of alarms that belongs to the current user owner. If the user has the authority of 'Tenant Administrator', the server returns alarms that belongs to the tenant of current user. If the user has the authority of 'Customer User', the server returns alarms that belongs to the customer of current user. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
       *
       * @tags alarm-controller
       * @name GetAllAlarmsV2UsingGet
       * @summary Get All Alarms (getAllAlarmsV2)
       * @request GET:/api/v2/alarms{?assigneeId,endTime,page,pageSize,severityList,sortOrder,sortProperty,startTime,statusList,textSearch,typeList}
       * @secure
       */
        getAllAlarmsV2UsingGet: (query: {
            /** A list of string values separated by comma ',' representing one of the AlarmSearchStatus enumeration value */
            statusList?: "ACK" | "ACTIVE" | "ANY" | "CLEARED" | "UNACK";
            /** A list of string values separated by comma ',' representing one of the AlarmSeverity enumeration value */
            severityList?: "CRITICAL" | "INDETERMINATE" | "MAJOR" | "MINOR" | "WARNING";
            /** A list of string values separated by comma ',' representing alarm types */
            typeList?: string;
            /** A string value representing the assignee user id. For example, '784f394c-42b6-435a-983c-b7beff2784f9' */
            assigneeId?: string;
            /**
             * Maximum amount of entities in a one page
             * @format int32
             */
            pageSize: number;
            /**
             * Sequence number of page starting from 0
             * @format int32
             */
            page: number;
            /** The case insensitive 'substring' filter based on of next alarm fields: type, severity or status */
            textSearch?: string;
            /** Property of entity to sort by */
            sortProperty?: "ackTs" | "clearTs" | "createdTime" | "endTs" | "severity" | "startTs" | "status" | "type";
            /** Sort order. ASC (ASCENDING) or DESC (DESCENDING) */
            sortOrder?: "ASC" | "DESC";
            /**
             * The start timestamp in milliseconds of the search time range over the Alarm class field: 'createdTime'.
             * @format int64
             */
            startTime?: number;
            /**
             * The end timestamp in milliseconds of the search time range over the Alarm class field: 'createdTime'.
             * @format int64
             */
            endTime?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<PageDataAlarmInfo, any>>;
        /**
       * @description There's an ability to import the bulk of assets using the only .csv file. Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
       *
       * @tags asset-controller
       * @name ProcessAssetBulkImportUsingPost
       * @summary Import the bulk of assets (processAssetsBulkImport)
       * @request POST:/api/asset/bulk_import
       * @secure
       */
        processAssetBulkImportUsingPost: (data: BulkImportRequest, params?: RequestParams) => Promise<AxiosResponse<BulkImportResultAsset, any>>;
        /**
       * @description Fetch the Asset Info object based on the provided Asset Id. If the user has the authority of 'Tenant Administrator', the server checks that the asset is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the asset is assigned to the same customer.Asset Info is an extension of the default Asset object that contains information about the owner name. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
       *
       * @tags asset-controller
       * @name GetAssetInfoByIdUsingGet
       * @summary Get Asset Info (getAssetInfoById)
       * @request GET:/api/asset/info/{assetId}
       * @secure
       */
        getAssetInfoByIdUsingGet: (assetId: string, params?: RequestParams) => Promise<AxiosResponse<AssetInfo, any>>;
        /**
       * @description Deprecated. See 'getAssetProfileNames' API from Asset Profile Controller instead. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
       *
       * @tags asset-controller
       * @name GetAssetTypesUsingGet
       * @summary Get Asset Types (getAssetTypes)
       * @request GET:/api/asset/types
       * @deprecated
       * @secure
       */
        getAssetTypesUsingGet: (params?: RequestParams) => Promise<AxiosResponse<EntitySubtype[], any>>;
        /**
       * @description Fetch the Asset object based on the provided Asset Id. If the user has the authority of 'Tenant Administrator', the server checks that the asset is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the asset is assigned to the same customer. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
       *
       * @tags asset-controller
       * @name GetAssetByIdUsingGet
       * @summary Get Asset (getAssetById)
       * @request GET:/api/asset/{assetId}
       * @secure
       */
        getAssetByIdUsingGet: (assetId: string, params?: RequestParams) => Promise<AxiosResponse<Asset, any>>;
        /**
       * @description Deletes the asset and all the relations (from and to the asset). Referencing non-existing asset Id will cause an error. Security check is performed to verify that the user has 'DELETE' permission for the entity (entities).
       *
       * @tags asset-controller
       * @name DeleteAssetUsingDelete
       * @summary Delete asset (deleteAsset)
       * @request DELETE:/api/asset/{assetId}
       * @secure
       */
        deleteAssetUsingDelete: (assetId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
       * @description Returns a page of asset info objects owned by the tenant or the customer of a current user. Asset Info is an extension of the default Asset object that contains information about the owner name.  You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
       *
       * @tags asset-controller
       * @name GetAllAssetInfosUsingGet
       * @summary Get All Asset Infos for current user (getAllAssetInfos)
       * @request GET:/api/assetInfos/all{?assetProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}
       * @secure
       */
        getAllAssetInfosUsingGet: (query: {
            /**
             * Maximum amount of entities in a one page
             * @format int32
             */
            pageSize: number;
            /**
             * Sequence number of page starting from 0
             * @format int32
             */
            page: number;
            /** Include customer or sub-customer entities */
            includeCustomers?: boolean;
            /** A string value representing the asset profile id. For example, '784f394c-42b6-435a-983c-b7beff2784f9' */
            assetProfileId?: string;
            /** The case insensitive 'substring' filter based on the asset name. */
            textSearch?: string;
            /** Property of entity to sort by */
            sortProperty?: "createdTime" | "customerTitle" | "label" | "name" | "type";
            /** Sort order. ASC (ASCENDING) or DESC (DESCENDING) */
            sortOrder?: "ASC" | "DESC";
        }, params?: RequestParams) => Promise<AxiosResponse<PageDataAssetInfo, any>>;
        /**
       * @description Returns all assets that are related to the specific entity. The entity id, relation type, asset types, depth of the search, and other query parameters defined using complex 'AssetSearchQuery' object. See 'Model' tab of the Parameters for more info. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
       *
       * @tags asset-controller
       * @name FindByQueryUsingPost
       * @summary Find related assets (findByQuery)
       * @request POST:/api/assets
       * @secure
       */
        findByQueryUsingPost: (data: AssetSearchQuery, params?: RequestParams) => Promise<AxiosResponse<Asset[], any>>;
        /**
       * @description Requested assets must be owned by tenant or assigned to customer which user is performing the request. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
       *
       * @tags asset-controller
       * @name GetAssetsByIdsUsingGet
       * @summary Get Assets By Ids (getAssetsByIds)
       * @request GET:/api/assets{?assetIds}
       * @secure
       */
        getAssetsByIdsUsingGet: (query: {
            /** A list of asset ids, separated by comma ',' */
            assetIds: string;
        }, params?: RequestParams) => Promise<AxiosResponse<Asset[], any>>;
        /**
       * @description Creates or Updates the Asset. When creating asset, platform generates Asset Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created Asset id will be present in the response. Specify existing Asset id to update the asset. Referencing non-existing Asset Id will cause 'Not Found' error. Remove 'id', 'tenantId' and optionally 'customerId' from the request body example (below) to create new Asset entity. Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
       *
       * @tags asset-controller
       * @name SaveAssetUsingPost
       * @summary Create Or Update Asset (saveAsset)
       * @request POST:/api/asset{?entityGroupId,entityGroupIds}
       * @secure
       */
        saveAssetUsingPost: (data: Asset, query?: {
            /** A string value representing the Entity Group Id. For example, '784f394c-42b6-435a-983c-b7beff2784f9'. If specified, the entity will be added to the corresponding entity group. */
            entityGroupId?: string;
            /** A list of string values, separated by comma ',' representing the Entity Group Ids. For example, '784f394c-42b6-435a-983c-b7beff2784f9','a84f394c-42b6-435a-083c-b7beff2784f9'. If specified, the entity will be added to the corresponding entity groups. */
            entityGroupIds?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<Asset, any>>;
        /**
       * @description Returns a page of asset info objects owned by the specified customer. Asset Info is an extension of the default Asset object that contains information about the owner name.  You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
       *
       * @tags asset-controller
       * @name GetCustomerAssetInfosUsingGet
       * @summary Get Customer Asset Infos (getCustomerAssetInfos)
       * @request GET:/api/customer/{customerId}/assetInfos{?assetProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}
       * @secure
       */
        getCustomerAssetInfosUsingGet: (customerId: string, query: {
            /**
             * Maximum amount of entities in a one page
             * @format int32
             */
            pageSize: number;
            /**
             * Sequence number of page starting from 0
             * @format int32
             */
            page: number;
            /** Include customer or sub-customer entities */
            includeCustomers?: boolean;
            /** A string value representing the asset profile id. For example, '784f394c-42b6-435a-983c-b7beff2784f9' */
            assetProfileId?: string;
            /** The case insensitive 'substring' filter based on the asset name. */
            textSearch?: string;
            /** Property of entity to sort by */
            sortProperty?: "createdTime" | "customerTitle" | "label" | "name" | "type";
            /** Sort order. ASC (ASCENDING) or DESC (DESCENDING) */
            sortOrder?: "ASC" | "DESC";
        }, params?: RequestParams) => Promise<AxiosResponse<PageDataAssetInfo, any>>;
        /**
       * @description Returns a page of assets objects owned by customer. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
       *
       * @tags asset-controller
       * @name GetCustomerAssetsUsingGet
       * @summary Get Customer Assets (getCustomerAssets)
       * @request GET:/api/customer/{customerId}/assets{?page,pageSize,sortOrder,sortProperty,textSearch,type}
       * @secure
       */
        getCustomerAssetsUsingGet: (customerId: string, query: {
            /**
             * Maximum amount of entities in a one page
             * @format int32
             */
            pageSize: number;
            /**
             * Sequence number of page starting from 0
             * @format int32
             */
            page: number;
            /** Asset type */
            type?: string;
            /** The case insensitive 'substring' filter based on the asset name. */
            textSearch?: string;
            /** Property of entity to sort by */
            sortProperty?: "createdTime" | "customerTitle" | "label" | "name" | "type";
            /** Sort order. ASC (ASCENDING) or DESC (DESCENDING) */
            sortOrder?: "ASC" | "DESC";
        }, params?: RequestParams) => Promise<AxiosResponse<PageDataAsset, any>>;
        /**
       * @description Returns a page of asset objects that belongs to specified Entity Group Id. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Security check is performed to verify that the user has 'READ' permission for specified group.
       *
       * @tags asset-controller
       * @name GetAssetsByEntityGroupIdUsingGet
       * @summary Get assets by Entity Group Id (getAssetsByEntityGroupId)
       * @request GET:/api/entityGroup/{entityGroupId}/assets{?page,pageSize,sortOrder,sortProperty,textSearch}
       * @secure
       */
        getAssetsByEntityGroupIdUsingGet: (entityGroupId: string, query: {
            /**
             * Maximum amount of entities in a one page
             * @format int32
             * @min 1
             * @exclusiveMin false
             * @exclusiveMax false
             */
            pageSize: number;
            /**
             * Sequence number of page starting from 0
             * @format int32
             * @min 0
             * @exclusiveMin false
             * @exclusiveMax false
             */
            page: number;
            /** The case insensitive 'substring' filter based on the asset name. */
            textSearch?: string;
            /** Property of entity to sort by */
            sortProperty?: "createdTime" | "customerTitle" | "label" | "name" | "type";
            /** Sort order. ASC (ASCENDING) or DESC (DESCENDING) */
            sortOrder?: "ASC" | "DESC";
        }, params?: RequestParams) => Promise<AxiosResponse<PageDataAsset, any>>;
        /**
       * @description Requested asset must be owned by tenant that the user belongs to. Asset name is an unique property of asset. So it can be used to identify the asset. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
       *
       * @tags asset-controller
       * @name GetTenantAssetUsingGet
       * @summary Get Tenant Asset (getTenantAsset)
       * @request GET:/api/tenant/assets{?assetName}
       * @secure
       */
        getTenantAssetUsingGet: (query: {
            /** A string value representing the Asset name. */
            assetName: string;
        }, params?: RequestParams) => Promise<AxiosResponse<Asset, any>>;
        /**
       * @description Returns a page of assets owned by tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
       *
       * @tags asset-controller
       * @name GetTenantAssetsUsingGet
       * @summary Get Tenant Assets (getTenantAssets)
       * @request GET:/api/tenant/assets{?page,pageSize,sortOrder,sortProperty,textSearch,type}
       * @secure
       */
        getTenantAssetsUsingGet: (query: {
            /**
             * Maximum amount of entities in a one page
             * @format int32
             */
            pageSize: number;
            /**
             * Sequence number of page starting from 0
             * @format int32
             */
            page: number;
            /** Asset type */
            type?: string;
            /** The case insensitive 'substring' filter based on the asset name. */
            textSearch?: string;
            /** Property of entity to sort by */
            sortProperty?: "createdTime" | "customerTitle" | "label" | "name" | "type";
            /** Sort order. ASC (ASCENDING) or DESC (DESCENDING) */
            sortOrder?: "ASC" | "DESC";
        }, params?: RequestParams) => Promise<AxiosResponse<PageDataAsset, any>>;
        /**
       * @description Returns a page of assets objects available for the current user. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Asset Info is an extension of the default Asset object that contains information about the owner name. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
       *
       * @tags asset-controller
       * @name GetUserAssetsUsingGet
       * @summary Get Assets (getUserAssets)
       * @request GET:/api/user/assets{?assetProfileId,page,pageSize,sortOrder,sortProperty,textSearch,type}
       * @secure
       */
        getUserAssetsUsingGet: (query: {
            /**
             * Maximum amount of entities in a one page
             * @format int32
             * @min 1
             * @exclusiveMin false
             * @exclusiveMax false
             */
            pageSize: number;
            /**
             * Sequence number of page starting from 0
             * @format int32
             * @min 0
             * @exclusiveMin false
             * @exclusiveMax false
             */
            page: number;
            /** Asset type */
            type?: string;
            /** A string value representing the asset profile id. For example, '784f394c-42b6-435a-983c-b7beff2784f9' */
            assetProfileId?: string;
            /** The case insensitive 'substring' filter based on the asset name. */
            textSearch?: string;
            /** Property of entity to sort by */
            sortProperty?: "createdTime" | "customerTitle" | "label" | "name" | "type";
            /** Sort order. ASC (ASCENDING) or DESC (DESCENDING) */
            sortOrder?: "ASC" | "DESC";
        }, params?: RequestParams) => Promise<AxiosResponse<PageDataAsset, any>>;
        /**
       * @description Create or update the Asset Profile. When creating asset profile, platform generates asset profile id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created asset profile id will be present in the response. Specify existing asset profile id to update the asset profile. Referencing non-existing asset profile Id will cause 'Not Found' error. Asset profile name is unique in the scope of tenant. Only one 'default' asset profile may exist in scope of tenant. Remove 'id', 'tenantId' from the request body example (below) to create new Asset Profile entity. Available for users with 'TENANT_ADMIN' authority.
       *
       * @tags asset-profile-controller
       * @name SaveAssetProfileUsingPost
       * @summary Create Or Update Asset Profile (saveAssetProfile)
       * @request POST:/api/assetProfile
       * @secure
       */
        saveAssetProfileUsingPost: (data: AssetProfile, params?: RequestParams) => Promise<AxiosResponse<AssetProfile, any>>;
        /**
       * @description Returns a set of unique asset profile names owned by the tenant. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
       *
       * @tags asset-profile-controller
       * @name GetAssetProfileNamesUsingGet
       * @summary Get Asset Profile names (getAssetProfileNames)
       * @request GET:/api/assetProfile/names{?activeOnly}
       * @secure
       */
        getAssetProfileNamesUsingGet: (query?: {
            /** Flag indicating whether to retrieve exclusively the names of asset profiles that are referenced by tenant's assets. */
            activeOnly?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<EntityInfo[], any>>;
        /**
       * @description Deletes the asset profile. Referencing non-existing asset profile Id will cause an error. Can't delete the asset profile if it is referenced by existing assets. Available for users with 'TENANT_ADMIN' authority.
       *
       * @tags asset-profile-controller
       * @name DeleteAssetProfileUsingDelete
       * @summary Delete asset profile (deleteAssetProfile)
       * @request DELETE:/api/assetProfile/{assetProfileId}
       * @secure
       */
        deleteAssetProfileUsingDelete: (assetProfileId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
       * @description Marks asset profile as default within a tenant scope. Available for users with 'TENANT_ADMIN' authority.
       *
       * @tags asset-profile-controller
       * @name SetDefaultAssetProfileUsingPost
       * @summary Make Asset Profile Default (setDefaultAssetProfile)
       * @request POST:/api/assetProfile/{assetProfileId}/default
       * @secure
       */
        setDefaultAssetProfileUsingPost: (assetProfileId: string, params?: RequestParams) => Promise<AxiosResponse<AssetProfile, any>>;
        /**
       * @description Fetch the Asset Profile object based on the provided Asset Profile Id. The server checks that the asset profile is owned by the same tenant. Available for users with 'TENANT_ADMIN' authority.
       *
       * @tags asset-profile-controller
       * @name GetAssetProfileByIdUsingGet
       * @summary Get Asset Profile (getAssetProfileById)
       * @request GET:/api/assetProfile/{assetProfileId}{?inlineImages}
       * @secure
       */
        getAssetProfileByIdUsingGet: (assetProfileId: string, query?: {
            /** Inline images as a data URL (Base64) */
            inlineImages?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<AssetProfile, any>>;
        /**
       * @description Fetch the Default Asset Profile Info object. Asset Profile Info is a lightweight object that includes main information about Asset Profile. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
       *
       * @tags asset-profile-controller
       * @name GetDefaultAssetProfileInfoUsingGet
       * @summary Get Default Asset Profile (getDefaultAssetProfileInfo)
       * @request GET:/api/assetProfileInfo/default
       * @secure
       */
        getDefaultAssetProfileInfoUsingGet: (params?: RequestParams) => Promise<AxiosResponse<AssetProfileInfo, any>>;
        /**
       * @description Fetch the Asset Profile Info object based on the provided Asset Profile Id. Asset Profile Info is a lightweight object that includes main information about Asset Profile. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
       *
       * @tags asset-profile-controller
       * @name GetAssetProfileInfoByIdUsingGet
       * @summary Get Asset Profile Info (getAssetProfileInfoById)
       * @request GET:/api/assetProfileInfo/{assetProfileId}
       * @secure
       */
        getAssetProfileInfoByIdUsingGet: (assetProfileId: string, params?: RequestParams) => Promise<AxiosResponse<AssetProfileInfo, any>>;
        /**
       * @description Requested asset profiles must be owned by tenant which is performing the request. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
       *
       * @tags asset-profile-controller
       * @name GetAssetProfilesByIdsUsingGet
       * @summary Get Asset Profiles By Ids (getAssetProfilesByIds)
       * @request GET:/api/assetProfileInfos{?assetProfileIds}
       * @secure
       */
        getAssetProfilesByIdsUsingGet: (query: {
            /** A list of asset profile ids, separated by comma ',' */
            assetProfileIds: string;
        }, params?: RequestParams) => Promise<AxiosResponse<AssetProfileInfo[], any>>;
        /**
       * @description Returns a page of asset profile info objects owned by tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Asset Profile Info is a lightweight object that includes main information about Asset Profile. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
       *
       * @tags asset-profile-controller
       * @name GetAssetProfileInfosUsingGet
       * @summary Get Asset Profile infos (getAssetProfileInfos)
       * @request GET:/api/assetProfileInfos{?page,pageSize,sortOrder,sortProperty,textSearch}
       * @secure
       */
        getAssetProfileInfosUsingGet: (query: {
            /**
             * Maximum amount of entities in a one page
             * @format int32
             */
            pageSize: number;
            /**
             * Sequence number of page starting from 0
             * @format int32
             */
            page: number;
            /** The case insensitive 'substring' filter based on the asset profile name. */
            textSearch?: string;
            /** Property of entity to sort by */
            sortProperty?: "createdTime" | "description" | "isDefault" | "name";
            /** Sort order. ASC (ASCENDING) or DESC (DESCENDING) */
            sortOrder?: "ASC" | "DESC";
        }, params?: RequestParams) => Promise<AxiosResponse<PageDataAssetProfileInfo, any>>;
        /**
       * @description Returns a page of asset profile objects owned by tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' authority.
       *
       * @tags asset-profile-controller
       * @name GetAssetProfilesUsingGet
       * @summary Get Asset Profiles (getAssetProfiles)
       * @request GET:/api/assetProfiles{?page,pageSize,sortOrder,sortProperty,textSearch}
       * @secure
       */
        getAssetProfilesUsingGet: (query: {
            /**
             * Maximum amount of entities in a one page
             * @format int32
             */
            pageSize: number;
            /**
             * Sequence number of page starting from 0
             * @format int32
             */
            page: number;
            /** The case insensitive 'substring' filter based on the asset profile name. */
            textSearch?: string;
            /** Property of entity to sort by */
            sortProperty?: "createdTime" | "description" | "isDefault" | "name";
            /** Sort order. ASC (ASCENDING) or DESC (DESCENDING) */
            sortOrder?: "ASC" | "DESC";
        }, params?: RequestParams) => Promise<AxiosResponse<PageDataAssetProfile, any>>;
        /**
       * @description Returns a page of audit logs related to the targeted customer entities (devices, assets, etc.), and users actions (login, logout, etc.) that belong to this customer. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the audit logs.
       *
       * @tags audit-log-controller
       * @name GetAuditLogsByCustomerIdUsingGet
       * @summary Get audit logs by customer id (getAuditLogsByCustomerId)
       * @request GET:/api/audit/logs/customer/{customerId}{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}
       * @secure
       */
        getAuditLogsByCustomerIdUsingGet: (customerId: string, query: {
            /**
             * Maximum amount of entities in a one page
             * @format int32
             */
            pageSize: number;
            /**
             * Sequence number of page starting from 0
             * @format int32
             */
            page: number;
            /** The case insensitive 'substring' filter based on one of the next properties: entityType, entityName, userName, actionType, actionStatus. */
            textSearch?: string;
            /** Property of audit log to sort by. See the 'Model' tab of the Response Class for more details. Note: entityType sort property is not defined in the AuditLog class, however, it can be used to sort audit logs by types of entities that were logged. */
            sortProperty?: "actionStatus" | "actionType" | "createdTime" | "entityName" | "entityType" | "userName";
            /** Sort order. ASC (ASCENDING) or DESC (DESCENDING) */
            sortOrder?: "ASC" | "DESC";
            /**
             * The start timestamp in milliseconds of the search time range over the AuditLog class field: 'createdTime'.
             * @format int64
             */
            startTime?: number;
            /**
             * The end timestamp in milliseconds of the search time range over the AuditLog class field: 'createdTime'.
             * @format int64
             */
            endTime?: number;
            /** A String value representing comma-separated list of action types. This parameter is optional, but it can be used to filter results to fetch only audit logs of specific action types. For example, 'LOGIN', 'LOGOUT'. See the 'Model' tab of the Response Class for more details. */
            actionTypes?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<PageDataAuditLog, any>>;
        /**
       * @description Returns a page of audit logs related to the actions on the targeted entity. Basically, this API call is used to get the full lifecycle of some specific entity. For example to see when a device was created, updated, assigned to some customer, or even deleted from the system. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the audit logs.
       *
       * @tags audit-log-controller
       * @name GetAuditLogsByEntityIdUsingGet
       * @summary Get audit logs by entity id (getAuditLogsByEntityId)
       * @request GET:/api/audit/logs/entity/{entityType}/{entityId}{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}
       * @secure
       */
        getAuditLogsByEntityIdUsingGet: (entityType: string, entityId: string, query: {
            /**
             * Maximum amount of entities in a one page
             * @format int32
             */
            pageSize: number;
            /**
             * Sequence number of page starting from 0
             * @format int32
             */
            page: number;
            /** The case insensitive 'substring' filter based on one of the next properties: entityType, entityName, userName, actionType, actionStatus. */
            textSearch?: string;
            /** Property of audit log to sort by. See the 'Model' tab of the Response Class for more details. Note: entityType sort property is not defined in the AuditLog class, however, it can be used to sort audit logs by types of entities that were logged. */
            sortProperty?: "actionStatus" | "actionType" | "createdTime" | "entityName" | "entityType" | "userName";
            /** Sort order. ASC (ASCENDING) or DESC (DESCENDING) */
            sortOrder?: "ASC" | "DESC";
            /**
             * The start timestamp in milliseconds of the search time range over the AuditLog class field: 'createdTime'.
             * @format int64
             */
            startTime?: number;
            /**
             * The end timestamp in milliseconds of the search time range over the AuditLog class field: 'createdTime'.
             * @format int64
             */
            endTime?: number;
            /** A String value representing comma-separated list of action types. This parameter is optional, but it can be used to filter results to fetch only audit logs of specific action types. For example, 'LOGIN', 'LOGOUT'. See the 'Model' tab of the Response Class for more details. */
            actionTypes?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<PageDataAuditLog, any>>;
        /**
       * @description Returns a page of audit logs related to the actions of targeted user. For example, RPC call to a particular device, or alarm acknowledgment for a specific device, etc. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the audit logs.
       *
       * @tags audit-log-controller
       * @name GetAuditLogsByUserIdUsingGet
       * @summary Get audit logs by user id (getAuditLogsByUserId)
       * @request GET:/api/audit/logs/user/{userId}{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}
       * @secure
       */
        getAuditLogsByUserIdUsingGet: (userId: string, query: {
            /**
             * Maximum amount of entities in a one page
             * @format int32
             */
            pageSize: number;
            /**
             * Sequence number of page starting from 0
             * @format int32
             */
            page: number;
            /** The case insensitive 'substring' filter based on one of the next properties: entityType, entityName, userName, actionType, actionStatus. */
            textSearch?: string;
            /** Property of audit log to sort by. See the 'Model' tab of the Response Class for more details. Note: entityType sort property is not defined in the AuditLog class, however, it can be used to sort audit logs by types of entities that were logged. */
            sortProperty?: "actionStatus" | "actionType" | "createdTime" | "entityName" | "entityType" | "userName";
            /** Sort order. ASC (ASCENDING) or DESC (DESCENDING) */
            sortOrder?: "ASC" | "DESC";
            /**
             * The start timestamp in milliseconds of the search time range over the AuditLog class field: 'createdTime'.
             * @format int64
             */
            startTime?: number;
            /**
             * The end timestamp in milliseconds of the search time range over the AuditLog class field: 'createdTime'.
             * @format int64
             */
            endTime?: number;
            /** A String value representing comma-separated list of action types. This parameter is optional, but it can be used to filter results to fetch only audit logs of specific action types. For example, 'LOGIN', 'LOGOUT'. See the 'Model' tab of the Response Class for more details. */
            actionTypes?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<PageDataAuditLog, any>>;
        /**
       * @description Returns a page of audit logs related to all entities in the scope of the current user's Tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the audit logs.
       *
       * @tags audit-log-controller
       * @name GetAuditLogsUsingGet
       * @summary Get all audit logs (getAuditLogs)
       * @request GET:/api/audit/logs{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}
       * @secure
       */
        getAuditLogsUsingGet: (query: {
            /**
             * Maximum amount of entities in a one page
             * @format int32
             */
            pageSize: number;
            /**
             * Sequence number of page starting from 0
             * @format int32
             */
            page: number;
            /** The case insensitive 'substring' filter based on one of the next properties: entityType, entityName, userName, actionType, actionStatus. */
            textSearch?: string;
            /** Property of audit log to sort by. See the 'Model' tab of the Response Class for more details. Note: entityType sort property is not defined in the AuditLog class, however, it can be used to sort audit logs by types of entities that were logged. */
            sortProperty?: "actionStatus" | "actionType" | "createdTime" | "entityName" | "entityType" | "userName";
            /** Sort order. ASC (ASCENDING) or DESC (DESCENDING) */
            sortOrder?: "ASC" | "DESC";
            /**
             * The start timestamp in milliseconds of the search time range over the AuditLog class field: 'createdTime'.
             * @format int64
             */
            startTime?: number;
            /**
             * The end timestamp in milliseconds of the search time range over the AuditLog class field: 'createdTime'.
             * @format int64
             */
            endTime?: number;
            /** A String value representing comma-separated list of action types. This parameter is optional, but it can be used to filter results to fetch only audit logs of specific action types. For example, 'LOGIN', 'LOGOUT'. See the 'Model' tab of the Response Class for more details. */
            actionTypes?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<PageDataAuditLog, any>>;
        /**
       * @description Change the password for the User which credentials are used to perform this REST API call. Be aware that previously generated [JWT](https://jwt.io/) tokens will be still valid until they expire.
       *
       * @tags auth-controller
       * @name ChangePasswordUsingPost
       * @summary Change password for current User (changePassword)
       * @request POST:/api/auth/changePassword
       * @secure
       */
        changePasswordUsingPost: (data: ChangePasswordRequest, params?: RequestParams) => Promise<AxiosResponse<object, any>>;
        /**
       * @description Special API call to record the 'logout' of the user to the Audit Logs. Since platform uses [JWT](https://jwt.io/), the actual logout is the procedure of clearing the [JWT](https://jwt.io/) token on the client side.
       *
       * @tags auth-controller
       * @name LogoutUsingPost
       * @summary Logout (logout)
       * @request POST:/api/auth/logout
       * @secure
       */
        logoutUsingPost: (params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
       * @description Get the information about the User which credentials are used to perform this REST API call.
       *
       * @tags auth-controller
       * @name GetUserUsingGet
       * @summary Get current User (getUser)
       * @request GET:/api/auth/user
       * @secure
       */
        getUserUsingGet: (params?: RequestParams) => Promise<AxiosResponse<User, any>>;
        /**
       * @description Checks the activation token and forwards user to 'Create Password' page. If token is valid, returns '303 See Other' (redirect) response code with the correct address of 'Create Password' page and same 'activateToken' specified in the URL parameters. If token is not valid, returns '409 Conflict'.
       *
       * @tags auth-controller
       * @name CheckActivateTokenUsingGet
       * @summary Check Activate User Token (checkActivateToken)
       * @request GET:/api/noauth/activate{?activateToken}
       */
        checkActivateTokenUsingGet: (query: {
            /** The activate token string. */
            activateToken: string;
        }, params?: RequestParams) => Promise<AxiosResponse<string, any>>;
        /**
       * @description Checks the activation token and updates corresponding user password in the database. Now the user may start using his password to login. The response already contains the [JWT](https://jwt.io) activation and refresh tokens, to simplify the user activation flow and avoid asking user to input password again after activation. If token is valid, returns the object that contains [JWT](https://jwt.io/) access and refresh tokens. If token is not valid, returns '404 Bad Request'.
       *
       * @tags auth-controller
       * @name ActivateUserUsingPost
       * @summary Activate User
       * @request POST:/api/noauth/activate{?sendActivationMail}
       */
        activateUserUsingPost: (data: ActivateUserRequest, query?: {
            /** sendActivationMail */
            sendActivationMail?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<JWTPair, any>>;
        /**
       * @description Checks the password reset token and updates the password. If token is valid, returns the object that contains [JWT](https://jwt.io/) access and refresh tokens. If token is not valid, returns '404 Bad Request'.
       *
       * @tags auth-controller
       * @name ResetPasswordUsingPost
       * @summary Reset password (resetPassword)
       * @request POST:/api/noauth/resetPassword
       */
        resetPasswordUsingPost: (data: ResetPasswordRequest, params?: RequestParams) => Promise<AxiosResponse<JWTPair, any>>;
        /**
       * @description Request to send the reset password email if the user with specified email address is present in the database. Always return '200 OK' status for security purposes.
       *
       * @tags auth-controller
       * @name RequestResetPasswordByEmailUsingPost
       * @summary Request reset password email (requestResetPasswordByEmail)
       * @request POST:/api/noauth/resetPasswordByEmail
       */
        requestResetPasswordByEmailUsingPost: (data: ResetPasswordEmailRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
       * @description Checks the password reset token and forwards user to 'Reset Password' page. If token is valid, returns '303 See Other' (redirect) response code with the correct address of 'Reset Password' page and same 'resetToken' specified in the URL parameters. If token is not valid, returns '409 Conflict'.
       *
       * @tags auth-controller
       * @name CheckResetTokenUsingGet
       * @summary Check password reset token (checkResetToken)
       * @request GET:/api/noauth/resetPassword{?resetToken}
       */
        checkResetTokenUsingGet: (query: {
            /** The reset token string. */
            resetToken: string;
        }, params?: RequestParams) => Promise<AxiosResponse<string, any>>;
        /**
       * @description API call to get the password policy for the password validation form(s).
       *
       * @tags auth-controller
       * @name GetUserPasswordPolicyUsingGet
       * @summary Get the current User password policy (getUserPasswordPolicy)
       * @request GET:/api/noauth/userPasswordPolicy
       */
        getUserPasswordPolicyUsingGet: (params?: RequestParams) => Promise<AxiosResponse<UserPasswordPolicy, any>>;
        /**
       * @description Requested blob entities must be owned by tenant or assigned to customer which user is performing the request. The platform uses Blob(binary large object) entities in the reporting feature, in order to store Dashboard states snapshots of different content types in base64 format. BlobEntityInfo represents an object that contains base info about the blob entity(name, type, contentType, etc.). See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
       *
       * @tags blob-entity-controller
       * @name GetBlobEntitiesByIdsUsingGet
       * @summary Get Blob Entities By Ids (getBlobEntitiesByIds)
       * @request GET:/api/blobEntities{?blobEntityIds}
       * @secure
       */
        getBlobEntitiesByIdsUsingGet: (query: {
            /** A list of blob entity ids, separated by comma ',' */
            blobEntityIds: string;
        }, params?: RequestParams) => Promise<AxiosResponse<BlobEntityInfo[], any>>;
        /**
       * @description Returns a page of BlobEntityWithCustomerInfo object that are available for the current user. The platform uses Blob(binary large object) entities in the reporting feature, in order to store Dashboard states snapshots of different content types in base64 format. BlobEntityWithCustomerInfo represents an object that contains base info about the blob entity(name, type, contentType, etc.) and info about the customer(customerTitle, customerIsPublic) of the user that scheduled generation of the dashboard report. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
       *
       * @tags blob-entity-controller
       * @name GetBlobEntitiesUsingGet
       * @summary Get Blob Entities (getBlobEntities)
       * @request GET:/api/blobEntities{?endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch,type}
       * @secure
       */
        getBlobEntitiesUsingGet: (query: {
            /**
             * Maximum amount of entities in a one page
             * @format int32
             */
            pageSize: number;
            /**
             * Sequence number of page starting from 0
             * @format int32
             */
            page: number;
            /** A string value representing the blob entity type. For example, 'report' */
            type?: string;
            /** The case insensitive 'startsWith' filter based on the blob entity name. */
            textSearch?: string;
            /** Property of entity to sort by */
            sortProperty?: "contentType" | "createdTime" | "customerTitle" | "name" | "type";
            /** Sort order. ASC (ASCENDING) or DESC (DESCENDING) */
            sortOrder?: "ASC" | "DESC";
            /**
             * The start timestamp in milliseconds of the search time range over the BlobEntityWithCustomerInfo class field: 'createdTime'.
             * @format int64
             */
            startTime?: number;
            /**
             * The end timestamp in milliseconds of the search time range over the BlobEntityWithCustomerInfo class field: 'createdTime'.
             * @format int64
             */
            endTime?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<PageDataBlobEntityWithCustomerInfo, any>>;
        /**
       * @description Fetch the BlobEntityWithCustomerInfo object based on the provided Blob entity Id. The platform uses Blob(binary large object) entities in the reporting feature, in order to store Dashboard states snapshots of different content types in base64 format. BlobEntityWithCustomerInfo represents an object that contains base info about the blob entity(name, type, contentType, etc.) and info about the customer(customerTitle, customerIsPublic) of the user that scheduled generation of the dashboard report. Referencing non-existing Blob entity Id will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
       *
       * @tags blob-entity-controller
       * @name GetBlobEntityInfoByIdUsingGet
       * @summary Get Blob Entity With Customer Info (getBlobEntityInfoById)
       * @request GET:/api/blobEntity/info/{blobEntityId}
       * @secure
       */
        getBlobEntityInfoByIdUsingGet: (blobEntityId: string, params?: RequestParams) => Promise<AxiosResponse<BlobEntityWithCustomerInfo, any>>;
        /**
       * @description Delete Blob entity based on the provided Blob entity Id. Referencing non-existing Blob entity Id will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'DELETE' permission for the entity (entities).
       *
       * @tags blob-entity-controller
       * @name DeleteBlobEntityUsingDelete
       * @summary Delete Blob Entity (deleteBlobEntity)
       * @request DELETE:/api/blobEntity/{blobEntityId}
       * @secure
       */
        deleteBlobEntityUsingDelete: (blobEntityId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
       * @description Download report file based on the provided Blob entity Id. Referencing non-existing Blob entity Id will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
       *
       * @tags blob-entity-controller
       * @name DownloadBlobEntityUsingGet
       * @summary Download Blob Entity By Id (downloadBlobEntity)
       * @request GET:/api/blobEntity/{blobEntityId}/download
       * @secure
       */
        downloadBlobEntityUsingGet: (blobEntityId: string, params?: RequestParams) => Promise<AxiosResponse<Resource, any>>;
        /**
       * @description Gets the Component Descriptor object using class name from the path parameters. Each Component Descriptor represents configuration of specific rule node (e.g. 'Save Timeseries' or 'Send Email'.). The Component Descriptors are used by the rule chain Web UI to build the configuration forms for the rule nodes. The Component Descriptors are discovered at runtime by scanning the class path and searching for @RuleNode annotation. Once discovered, the up to date list of descriptors is persisted to the database. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
       *
       * @tags component-descriptor-controller
       * @name GetComponentDescriptorByClazzUsingGet
       * @summary Get Component Descriptor (getComponentDescriptorByClazz)
       * @request GET:/api/component/{componentDescriptorClazz}
       * @secure
       */
        getComponentDescriptorByClazzUsingGet: (componentDescriptorClazz: string, params?: RequestParams) => Promise<AxiosResponse<ComponentDescriptor, any>>;
        /**
       * @description Gets the Component Descriptors using rule node type and optional rule chain type request parameters. Each Component Descriptor represents configuration of specific rule node (e.g. 'Save Timeseries' or 'Send Email'.). The Component Descriptors are used by the rule chain Web UI to build the configuration forms for the rule nodes. The Component Descriptors are discovered at runtime by scanning the class path and searching for @RuleNode annotation. Once discovered, the up to date list of descriptors is persisted to the database. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
       *
       * @tags component-descriptor-controller
       * @name GetComponentDescriptorsByTypeUsingGet
       * @summary Get Component Descriptors (getComponentDescriptorsByType)
       * @request GET:/api/components/{componentType}{?ruleChainType}
       * @secure
       */
        getComponentDescriptorsByTypeUsingGet: (componentType: "ACTION" | "ENRICHMENT" | "EXTERNAL" | "FILTER" | "TRANSFORMATION", query?: {
            /** Type of the Rule Chain */
            ruleChainType?: "CORE" | "EDGE";
        }, params?: RequestParams) => Promise<AxiosResponse<ComponentDescriptor[], any>>;
        /**
       * @description Gets the Component Descriptors using coma separated list of rule node types and optional rule chain type request parameters. Each Component Descriptor represents configuration of specific rule node (e.g. 'Save Timeseries' or 'Send Email'.). The Component Descriptors are used by the rule chain Web UI to build the configuration forms for the rule nodes. The Component Descriptors are discovered at runtime by scanning the class path and searching for @RuleNode annotation. Once discovered, the up to date list of descriptors is persisted to the database. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
       *
       * @tags component-descriptor-controller
       * @name GetComponentDescriptorsByTypesUsingGet
       * @summary Get Component Descriptors (getComponentDescriptorsByTypes)
       * @request GET:/api/components{?componentTypes,ruleChainType}
       * @secure
       */
        getComponentDescriptorsByTypesUsingGet: (query: {
            /** List of types of the Rule Nodes, (ENRICHMENT, FILTER, TRANSFORMATION, ACTION or EXTERNAL) */
            componentTypes: string;
            /** Type of the Rule Chain */
            ruleChainType?: "CORE" | "EDGE";
        }, params?: RequestParams) => Promise<AxiosResponse<ComponentDescriptor[], any>>;
        n: any;
        ""(): any;
    };
    converter: any;
}
