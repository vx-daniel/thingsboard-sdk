"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecificTimeScheduleSchema = exports.StarredDashboardInfoSchema = exports.StateEntityOwnerFilterSchema = exports.StatisticsEventFilterSchema = exports.StringFilterPredicateSchema = exports.SystemAdministratorsFilterSchema = exports.SystemInfoDataSchema = exports.SystemInfoSchema = exports.WhiteLabelingSchema = exports.TbImageDeleteResultSchema = exports.TbResourceSchema = exports.TelemetryMappingConfigurationSchema = exports.TelemetryQueryingSnmpCommunicationConfigSchema = exports.TenantAdministratorsFilterSchema = exports.TenantSolutionTemplateDetailsSchema = exports.TenantSolutionTemplateInfoSchema = exports.TenantSolutionTemplateInstructionsSchema = exports.TestSmsRequestSchema = exports.ThingsboardCredentialsExpiredResponseSchema = exports.ThingsboardErrorResponseSchema = exports.ToDeviceRpcRequestSnmpCommunicationConfigSchema = exports.ToServerRpcRequestSnmpCommunicationConfigSchema = exports.TotpTwoFaAccountConfigSchema = exports.TotpTwoFaProviderConfigSchema = exports.TwilioSmsProviderConfigurationSchema = exports.TwoFaAccountConfigUpdateRequestSchema = exports.TwoFaProviderInfoSchema = exports.UpdateMessageSchema = exports.UsageInfoSchema = exports.UserDashboardsInfoSchema = exports.UserGroupListFilterSchema = exports.UserListFilterSchema = exports.UserNotificationSettingsSchema = exports.UserRoleFilterSchema = exports.UsersFilterSchema = exports.VersionCreateConfigSchema = exports.VersionCreateRequestSchema = exports.VersionCreationResultSchema = exports.VersionLoadConfigSchema = exports.VersionLoadRequestSchema = exports.VersionLoadResultSchema = exports.VersionedEntityInfoSchema = exports.WebDeliveryMethodNotificationTemplateSchema = exports.WhiteLabelingParamsSchema = exports.WidgetTypeSchema = exports.WidgetTypeDetailsSchema = exports.WidgetTypeExportDataSchema = exports.WidgetsBundleExportDataSchema = exports.X509CertificateChainProvisionConfigurationSchema = exports.X509LwM2MBootstrapServerCredentialSchema = void 0;
exports.RelationsQueryFilterSchema = exports.RepeatingAlarmConditionSpecSchema = exports.ReportConfigSchema = exports.RepositorySettingsSchema = exports.RepositorySettingsInfoSchema = exports.ResetPasswordEmailRequestSchema = exports.ResetPasswordRequestSchema = exports.ResourceSchema = exports.ResponseEntitySchema = exports.RpcIdSchema = exports.RpcSchema = exports.RuleChainConnectionInfoSchema = exports.RuleNodeSchema = exports.RuleChainMetaDataSchema = exports.RuleChainDataSchema = exports.RuleChainDebugEventFilterSchema = exports.RuleChainExportDataSchema = exports.RuleChainImportResultSchema = exports.RuleChainOutputLabelsUsageSchema = exports.RuleEngineComponentLifecycleEventNotificationRuleTriggerConfigSchema = exports.RuleNodeDebugEventFilterSchema = exports.SaveDeviceWithCredentialsRequestSchema = exports.SaveOtaPackageInfoRequestSchema = exports.SchedulerEventSchema = exports.SchedulerEventFilterSchema = exports.SchedulerEventWithCustomerInfoSchema = exports.UserPasswordPolicySchema = exports.SecuritySettingsSchema = exports.SelfRegistrationParamsSchema = exports.ShareGroupRequestSchema = exports.SharedAttributesSettingSnmpCommunicationConfigSchema = exports.SignUpRequestSchema = exports.SignUpSelfRegistrationParamsSchema = exports.SimpleAlarmConditionSpecSchema = exports.SingleEntityFilterSchema = exports.SingleEntityVersionCreateRequestSchema = exports.SingleEntityVersionLoadRequestSchema = exports.SlackConversationSchema = exports.SlackDeliveryMethodNotificationTemplateSchema = exports.SlackNotificationDeliveryMethodConfigSchema = exports.SlackNotificationTargetConfigSchema = exports.SmppSmsProviderConfigurationSchema = exports.SmsDeliveryMethodNotificationTemplateSchema = exports.SmsProviderConfigurationSchema = exports.SmsTwoFaAccountConfigSchema = exports.SmsTwoFaProviderConfigSchema = exports.SnmpCommunicationConfigSchema = exports.SnmpDeviceProfileTransportConfigurationSchema = exports.SnmpDeviceTransportConfigurationSchema = exports.SolutionInstallResponseSchema = void 0;
exports.PageData_Of_NotificationTemplateSchema = exports.PageData_Of_NotificationSchema = exports.PageData_Of_OtaPackageInfoSchema = exports.QueueIdSchema = exports.ProcessingStrategySchema = exports.SubmitStrategySchema = exports.QueueSchema = exports.PageData_Of_QueueSchema = exports.PageData_Of_RoleSchema = exports.RuleNodeIdSchema = exports.RuleChainSchema = exports.PageData_Of_RuleChainSchema = exports.SchedulerEventIdSchema = exports.SchedulerEventInfoSchema = exports.PageData_Of_SchedulerEventInfoSchema = exports.ShortEntityViewSchema = exports.PageData_Of_ShortEntityViewSchema = exports.TbResourceIdSchema = exports.TbResourceInfoSchema = exports.PageData_Of_TbResourceInfoSchema = exports.TenantProfileIdSchema = exports.TenantInfoSchema = exports.PageData_Of_TenantInfoSchema = exports.TenantProfileConfigurationSchema = exports.TenantProfileQueueConfigurationSchema = exports.TenantProfileDataSchema = exports.TenantProfileSchema = exports.PageData_Of_TenantProfileSchema = exports.TenantSchema = exports.PageData_Of_TenantSchema = exports.UserEmailInfoSchema = exports.PageData_Of_UserEmailInfoSchema = exports.UserInfoSchema = exports.PageData_Of_UserInfoSchema = exports.UserSchema = exports.PageData_Of_UserSchema = exports.WidgetTypeIdSchema = exports.WidgetTypeInfoSchema = exports.PageData_Of_WidgetTypeInfoSchema = exports.WidgetsBundleIdSchema = exports.WidgetsBundleSchema = exports.PageData_Of_WidgetsBundleSchema = exports.TwoFaProviderConfigSchema = exports.PlatformTwoFaSettingsSchema = exports.PlatformUsersNotificationTargetConfigSchema = exports.PowerSavingConfigurationSchema = exports.ProtoTransportPayloadConfigurationSchema = exports.RPKLwM2MBootstrapServerCredentialSchema = exports.RateLimitsNotificationRuleTriggerConfigSchema = exports.RawDataEventFilterSchema = void 0;
exports.OAuth2ClientInfoSchema = exports.OAuth2ClientRegistrationTemplateIdSchema = exports.OAuth2CustomMapperConfigSchema = exports.OAuth2MapperConfigSchema = exports.OAuth2ClientRegistrationTemplateSchema = exports.OAuth2DomainInfoSchema = exports.OAuth2RegistrationInfoSchema = exports.OAuth2MobileInfoSchema = exports.OAuth2ParamsInfoSchema = exports.OAuth2InfoSchema = exports.ObjectAttributesSchema = exports.OriginatorEntityOwnerUsersFilterSchema = exports.OtaPackageSchema = exports.OtaPackageInfoSchema = exports.OtherConfigurationSchema = exports.PSKLwM2MBootstrapServerCredentialSchema = exports.PageData_Of_AlarmCommentInfoSchema = exports.PageData_Of_AlarmDataSchema = exports.PageData_Of_AlarmInfoSchema = exports.PageData_Of_AssetInfoSchema = exports.PageData_Of_AssetProfileInfoSchema = exports.PageData_Of_AssetProfileSchema = exports.PageData_Of_AssetSchema = exports.PageData_Of_AuditLogSchema = exports.PageData_Of_BlobEntityWithCustomerInfoSchema = exports.PageData_Of_ContactBased_Of_objectSchema = exports.PageData_Of_ConverterSchema = exports.PageData_Of_CustomerInfoSchema = exports.PageData_Of_CustomerSchema = exports.PageData_Of_DashboardInfoSchema = exports.PageData_Of_DeviceInfoSchema = exports.PageData_Of_DeviceProfileInfoSchema = exports.PageData_Of_DeviceProfileSchema = exports.PageData_Of_DeviceSchema = exports.PageData_Of_EdgeEventSchema = exports.PageData_Of_EdgeInfoSchema = exports.PageData_Of_EdgeSchema = exports.PageData_Of_EntityDataSchema = exports.PageData_Of_EntityGroupInfoSchema = exports.PageData_Of_EntityInfoSchema = exports.PageData_Of_EntitySubtypeSchema = exports.PageData_Of_EntityVersionSchema = exports.PageData_Of_EntityViewInfoSchema = exports.PageData_Of_EntityViewSchema = exports.PageData_Of_EventInfoSchema = exports.PageData_Of_IntegrationInfoSchema = exports.PageData_Of_IntegrationSchema = exports.PageData_Of_NotificationRequestInfoSchema = exports.PageData_Of_NotificationRuleInfoSchema = exports.PageData_Of_NotificationTargetSchema = void 0;
exports.JWT_PairSchema = exports.JWT_SettingsSchema = exports.JsonTransportPayloadConfigurationSchema = exports.LastVisitedDashboardInfoSchema = exports.LicenseUsageInfoSchema = exports.LifeCycleEventFilterSchema = exports.LoginRequestSchema = exports.LoginResponseSchema = exports.PaletteSchema = exports.PaletteSettingsSchema = exports.LoginWhiteLabelingParamsSchema = exports.LwM2MBootstrapServerCredentialSchema = exports.LwM2mResourceObserveSchema = exports.LwM2mInstanceSchema = exports.LwM2mObjectSchema = exports.Lwm2mDeviceProfileTransportConfigurationSchema = exports.Lwm2mDeviceTransportConfigurationSchema = exports.MicrosoftTeamsDeliveryMethodNotificationTemplateSchema = exports.MicrosoftTeamsNotificationTargetConfigSchema = exports.TransportPayloadTypeConfigurationSchema = exports.MqttDeviceProfileTransportConfigurationSchema = exports.MqttDeviceTransportConfigurationSchema = exports.NewPlatformVersionNotificationRuleTriggerConfigSchema = exports.NoSecLwM2MBootstrapServerCredentialSchema = exports.NodeConnectionInfoSchema = exports.NotificationIdSchema = exports.NotificationInfoSchema = exports.NotificationRequestIdSchema = exports.NotificationSchema = exports.NotificationDeliveryMethodConfigSchema = exports.NotificationPrefSchema = exports.NotificationRequestConfigSchema = exports.NotificationRuleIdSchema = exports.NotificationRequestStatsSchema = exports.NotificationTemplateConfigSchema = exports.NotificationTemplateSchema = exports.NotificationTemplateIdSchema = exports.NotificationRequestSchema = exports.NotificationRequestInfoSchema = exports.NotificationRequestPreviewSchema = exports.NotificationRuleConfigSchema = exports.NotificationRuleRecipientsConfigSchema = exports.NotificationRuleTriggerConfigSchema = exports.NotificationRuleSchema = exports.NotificationRuleInfoSchema = exports.NotificationSettingsSchema = exports.NotificationTargetConfigSchema = exports.NotificationTargetSchema = exports.NumericFilterPredicateSchema = exports.OAuth2BasicMapperConfigSchema = void 0;
exports.EntityGroupListFilterSchema = exports.EntityGroupNameFilterSchema = exports.EntityListFilterSchema = exports.EntityLoadErrorSchema = exports.EntityNameFilterSchema = exports.EntityRelationInfoSchema = exports.RelationEntityTypeFilterSchema = exports.EntityRelationsQuerySchema = exports.EntitySubtypeSchema = exports.EntityTypeFilterSchema = exports.EntityTypeLoadResultSchema = exports.EntityTypeVersionCreateConfigSchema = exports.EntityTypeVersionLoadConfigSchema = exports.EntityTypeVersionLoadRequestSchema = exports.EntityVersionSchema = exports.EntityViewIdSchema = exports.TelemetryEntityViewSchema = exports.EntityViewSchema = exports.EntityViewInfoSchema = exports.EntityViewSearchQuerySchema = exports.EntityViewSearchQueryFilterSchema = exports.EntityViewTypeFilterSchema = exports.ErrorEventFilterSchema = exports.EscalatedNotificationRuleRecipientsConfigSchema = exports.EventFilterSchema = exports.EventIdSchema = exports.EventInfoSchema = exports.ExportableEntity_Of_EntityIdSchema = exports.FaviconSchema = exports.FeaturesInfoSchema = exports.FilterPredicateValue_Of_booleanSchema = exports.FilterPredicateValue_Of_doubleSchema = exports.FilterPredicateValue_Of_intSchema = exports.FilterPredicateValue_Of_longSchema = exports.FilterPredicateValue_Of_stringSchema = exports.GroupEntityExportDataSchema = exports.GroupPermissionIdSchema = exports.RoleIdSchema = exports.GroupPermissionSchema = exports.RoleSchema = exports.GroupPermissionInfoSchema = exports.HasId_Of_objectSchema = exports.HomeDashboardSchema = exports.HomeDashboardInfoSchema = exports.ImageExportDataSchema = exports.IntegrationIdSchema = exports.IntegrationSchema = exports.ObjectNodeSchema = exports.IntegrationInfoSchema = exports.IntegrationLifecycleEventNotificationRuleTriggerConfigSchema = void 0;
exports.DeviceActivityNotificationRuleTriggerConfigSchema = exports.DeviceCredentialsIdSchema = exports.DeviceCredentialsSchema = exports.DeviceExportDataSchema = exports.DeviceGroupOtaPackageSchema = exports.DeviceInfoSchema = exports.DeviceProfileConfigurationSchema = exports.DeviceProfileTransportConfigurationSchema = exports.DeviceProfileProvisionConfigurationSchema = exports.DeviceProfileAlarmSchema = exports.DeviceProfileDataSchema = exports.DeviceProfileSchema = exports.DeviceProfileInfoSchema = exports.DeviceSearchQuerySchema = exports.DeviceSearchQueryFilterSchema = exports.DeviceTypeFilterSchema = exports.DisabledDeviceProfileProvisionConfigurationSchema = exports.DurationAlarmConditionSpecSchema = exports.DynamicValue_Of_booleanSchema = exports.DynamicValue_Of_doubleSchema = exports.DynamicValue_Of_intSchema = exports.DynamicValue_Of_longSchema = exports.EdgeIdSchema = exports.EdgeSchema = exports.EdgeEventIdSchema = exports.EdgeEventSchema = exports.EdgeInfoSchema = exports.EdgeInstructionsSchema = exports.EdgeSearchQuerySchema = exports.EdgeSearchQueryFilterSchema = exports.EdgeTypeFilterSchema = exports.EfentoCoapDeviceTypeConfigurationSchema = exports.EmailDeliveryMethodNotificationTemplateSchema = exports.EmailTwoFaAccountConfigSchema = exports.EmailTwoFaProviderConfigSchema = exports.EntitiesByGroupNameFilterSchema = exports.EntitiesLimitNotificationRuleTriggerConfigSchema = exports.EntityActionNotificationRuleTriggerConfigSchema = exports.EntityCountQuerySchema = exports.EntityDataSchema = exports.EntityRelationSchema = exports.EntityExportData_Of_objectSchema = exports.EntityDataDiffSchema = exports.EntityDataInfoSchema = exports.EntityDataPageLinkSchema = exports.EntityDataQuerySchema = exports.EntityGroupSchema = exports.EntityGroupExportDataSchema = exports.EntityGroupFilterSchema = exports.EntityGroupInfoSchema = void 0;
exports.ClientAttributesQueryingSnmpCommunicationConfigSchema = exports.CoapDeviceProfileTransportConfigurationSchema = exports.CoapDeviceTransportConfigurationSchema = exports.CoapDeviceTypeConfigurationSchema = exports.TsValueSchema = exports.ComparisonTsValueSchema = exports.ComplexFilterPredicateSchema = exports.ComplexVersionCreateRequestSchema = exports.ComponentDescriptorIdSchema = exports.ComponentDescriptorSchema = exports.ContactBased_Of_objectSchema = exports.ConverterIdSchema = exports.ConverterSchema = exports.CustomMenuItemSchema = exports.CustomMenuSchema = exports.CustomTimeScheduleItemSchema = exports.CustomTimeScheduleSchema = exports.CustomTranslationSchema = exports.CustomerSchema = exports.CustomerInfoSchema = exports.CustomerUsersFilterSchema = exports.ShortCustomerInfoSchema = exports.DashboardSchema = exports.DashboardInfoSchema = exports.DebugConverterEventFilterSchema = exports.DebugIntegrationEventFilterSchema = exports.DefaultCoapDeviceTypeConfigurationSchema = exports.DefaultDeviceConfigurationSchema = exports.DefaultDeviceProfileConfigurationSchema = exports.DefaultDeviceProfileTransportConfigurationSchema = exports.DefaultDeviceTransportConfigurationSchema = exports.DefaultRuleChainCreateRequestSchema = exports.DefaultTenantProfileConfigurationSchema = exports.DeferredResult_Of_EntityDataDiffSchema = exports.DeferredResult_Of_EntityDataInfoSchema = exports.DeferredResult_Of_List_Of_BranchInfoSchema = exports.DeferredResult_Of_List_Of_VersionedEntityInfoSchema = exports.DeferredResult_Of_PageData_Of_EntityVersionSchema = exports.DeferredResult_Of_RepositorySettingsSchema = exports.DeferredResult_Of_ResponseEntitySchema = exports.DeferredResult_Of_VoidSchema = exports.DeferredResult_Of_uuidSchema = exports.DeliveryMethodNotificationTemplateSchema = exports.DeviceIdSchema = exports.DeviceProfileIdSchema = exports.DeviceConfigurationSchema = exports.DeviceTransportConfigurationSchema = exports.DeviceDataSchema = exports.OtaPackageIdSchema = exports.DeviceSchema = void 0;
exports.MergedGroupPermissionInfoSchema = exports.EntityGroupIdSchema = exports.MergedGroupTypePermissionInfoSchema = exports.MergedUserPermissionsSchema = exports.AllowedPermissionsInfoSchema = exports.AnyTimeScheduleSchema = exports.ApiUsageLimitNotificationRuleTriggerConfigSchema = exports.ApiUsageStateFilterSchema = exports.ArrayNodeSchema = exports.AssetIdSchema = exports.AssetProfileIdSchema = exports.AssetSchema = exports.EntityInfoSchema = exports.AssetInfoSchema = exports.RuleChainIdSchema = exports.AssetProfileSchema = exports.AssetProfileInfoSchema = exports.RelationsSearchParametersSchema = exports.AssetSearchQuerySchema = exports.AssetSearchQueryFilterSchema = exports.AssetTypeFilterSchema = exports.AtomicIntegerSchema = exports.AttributeExportDataSchema = exports.AttributesEntityViewSchema = exports.AuditLogIdSchema = exports.AuditLogSchema = exports.AutoVersionCreateConfigSchema = exports.AwsSnsSmsProviderConfigurationSchema = exports.BackupCodeTwoFaAccountConfigSchema = exports.BackupCodeTwoFaProviderConfigSchema = exports.BlobEntityIdSchema = exports.BlobEntityInfoSchema = exports.BlobEntityWithCustomerInfoSchema = exports.BooleanFilterPredicateSchema = exports.BranchInfoSchema = exports.ColumnMappingSchema = exports.MappingSchema = exports.BulkImportRequestSchema = exports.BulkImportResult_Of_AssetSchema = exports.BulkImportResult_Of_DeviceSchema = exports.BulkImportResult_Of_EdgeSchema = exports.ButtonSchema = exports.InputStreamSchema = exports.ByteArrayResourceSchema = exports.ByteBufferSchema = exports.ChangePasswordRequestSchema = exports.CheckPreProvisionedDevicesDeviceProfileProvisionConfigurationSchema = exports.ClaimRequestSchema = exports.ClearRuleSchema = exports.SnmpMappingSchema = void 0;
exports.TwoFaAccountConfigSchema = exports.AccountTwoFaSettingsSchema = exports.ActivateUserRequestSchema = exports.AdminSettingsIdSchema = exports.TenantIdSchema = exports.JsonNodeSchema = exports.AdminSettingsSchema = exports.AffectedTenantAdministratorsFilterSchema = exports.AffectedUserFilterSchema = exports.AlarmIdSchema = exports.CustomerIdSchema = exports.EntityIdSchema = exports.UserIdSchema = exports.AlarmSchema = exports.AlarmAssigneeSchema = exports.AlarmAssignmentNotificationRuleTriggerConfigSchema = exports.AlarmCommentIdSchema = exports.AlarmCommentSchema = exports.AlarmCommentInfoSchema = exports.AlarmCommentNotificationRuleTriggerConfigSchema = exports.AlarmConditionFilterKeySchema = exports.KeyFilterPredicateSchema = exports.AlarmConditionFilterSchema = exports.AlarmConditionSpecSchema = exports.AlarmConditionSchema = exports.EntityFilterSchema = exports.EntityKeySchema = exports.KeyFilterSchema = exports.AlarmCountQuerySchema = exports.AlarmDataSchema = exports.EntityDataSortOrderSchema = exports.AlarmDataPageLinkSchema = exports.AlarmDataQuerySchema = exports.AlarmInfoSchema = exports.AlarmNotificationRuleTriggerConfigSchema = exports.DynamicValue_Of_stringSchema = exports.AlarmScheduleSchema = exports.DashboardIdSchema = exports.AlarmRuleSchema = exports.AllUsersFilterSchema = exports.AllowCreateNewDevicesDeviceProfileProvisionConfigurationSchema = void 0;
const zod_1 = require("zod");
// Initialize all schemas with empty objects to handle circular dependencies
let AccountTwoFaSettingsSchema = zod_1.z.object({});
exports.AccountTwoFaSettingsSchema = AccountTwoFaSettingsSchema;
let ActivateUserRequestSchema = zod_1.z.object({});
exports.ActivateUserRequestSchema = ActivateUserRequestSchema;
let AdminSettingsSchema = zod_1.z.object({});
exports.AdminSettingsSchema = AdminSettingsSchema;
let AdminSettingsIdSchema = zod_1.z.object({});
exports.AdminSettingsIdSchema = AdminSettingsIdSchema;
let AffectedTenantAdministratorsFilterSchema = zod_1.z.object({});
exports.AffectedTenantAdministratorsFilterSchema = AffectedTenantAdministratorsFilterSchema;
let AffectedUserFilterSchema = zod_1.z.object({});
exports.AffectedUserFilterSchema = AffectedUserFilterSchema;
let AlarmSchema = zod_1.z.object({});
exports.AlarmSchema = AlarmSchema;
let AlarmAssigneeSchema = zod_1.z.object({});
exports.AlarmAssigneeSchema = AlarmAssigneeSchema;
let AlarmAssignmentNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.AlarmAssignmentNotificationRuleTriggerConfigSchema = AlarmAssignmentNotificationRuleTriggerConfigSchema;
let AlarmCommentSchema = zod_1.z.object({});
exports.AlarmCommentSchema = AlarmCommentSchema;
let AlarmCommentIdSchema = zod_1.z.object({});
exports.AlarmCommentIdSchema = AlarmCommentIdSchema;
let AlarmCommentInfoSchema = zod_1.z.object({});
exports.AlarmCommentInfoSchema = AlarmCommentInfoSchema;
let AlarmCommentNotificationRuleTriggerConfigSchema = zod_1.z.object({});
exports.AlarmCommentNotificationRuleTriggerConfigSchema = AlarmCommentNotificationRuleTriggerConfigSchema;
let AlarmConditionSchema = zod_1.z.object({});
exports.AlarmConditionSchema = AlarmConditionSchema;
let AlarmConditionFilterSchema = zod_1.z.object({});
exports.AlarmConditionFilterSchema = AlarmConditionFilterSchema;
let AlarmConditionFilterKeySchema = zod_1.z.object({});
exports.AlarmConditionFilterKeySchema = AlarmConditionFilterKeySchema;
let AlarmConditionSpecSchema = zod_1.z.object({});
exports.AlarmConditionSpecSchema = AlarmConditionSpecSchema;
let AlarmCountQuerySchema = zod_1.z.object({});
exports.AlarmCountQuerySchema = AlarmCountQuerySchema;
let AlarmDataSchema = zod_1.z.object({});
exports.AlarmDataSchema = AlarmDataSchema;
let AlarmDataPageLinkSchema = zod_1.z.object({});
exports.AlarmDataPageLinkSchema = AlarmDataPageLinkSchema;
let AlarmDataQuerySchema = zod_1.z.object({});
exports.AlarmDataQuerySchema = AlarmDataQuerySchema;
let AlarmIdSchema = zod_1.z.object({});
exports.AlarmIdSchema = AlarmIdSchema;
let AlarmInfoSchema = zod_1.z.object({});
exports.AlarmInfoSchema = AlarmInfoSchema;
let AlarmNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.AlarmNotificationRuleTriggerConfigSchema = AlarmNotificationRuleTriggerConfigSchema;
let AlarmRuleSchema = zod_1.z.object({});
exports.AlarmRuleSchema = AlarmRuleSchema;
let AlarmScheduleSchema = zod_1.z.object({});
exports.AlarmScheduleSchema = AlarmScheduleSchema;
let AllUsersFilterSchema = zod_1.z.object({});
exports.AllUsersFilterSchema = AllUsersFilterSchema;
let AllowCreateNewDevicesDeviceProfileProvisionConfigurationSchema = zod_1.z.object({});
exports.AllowCreateNewDevicesDeviceProfileProvisionConfigurationSchema = AllowCreateNewDevicesDeviceProfileProvisionConfigurationSchema;
let AllowedPermissionsInfoSchema = zod_1.z.object({});
exports.AllowedPermissionsInfoSchema = AllowedPermissionsInfoSchema;
let AnyTimeScheduleSchema = zod_1.z.object({});
exports.AnyTimeScheduleSchema = AnyTimeScheduleSchema;
let ApiUsageLimitNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.ApiUsageLimitNotificationRuleTriggerConfigSchema = ApiUsageLimitNotificationRuleTriggerConfigSchema;
let ApiUsageStateFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.ApiUsageStateFilterSchema = ApiUsageStateFilterSchema;
let ArrayNodeSchema = zod_1.z.object({});
exports.ArrayNodeSchema = ArrayNodeSchema;
let AssetSchema = zod_1.z.object({});
exports.AssetSchema = AssetSchema;
let AssetIdSchema = zod_1.z.object({});
exports.AssetIdSchema = AssetIdSchema;
let AssetInfoSchema = zod_1.z.object({});
exports.AssetInfoSchema = AssetInfoSchema;
let AssetProfileSchema = zod_1.z.object({});
exports.AssetProfileSchema = AssetProfileSchema;
let AssetProfileIdSchema = zod_1.z.object({});
exports.AssetProfileIdSchema = AssetProfileIdSchema;
let AssetProfileInfoSchema = zod_1.z.object({});
exports.AssetProfileInfoSchema = AssetProfileInfoSchema;
let AssetSearchQuerySchema = zod_1.z.object({});
exports.AssetSearchQuerySchema = AssetSearchQuerySchema;
let AssetSearchQueryFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.AssetSearchQueryFilterSchema = AssetSearchQueryFilterSchema;
let AssetTypeFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.AssetTypeFilterSchema = AssetTypeFilterSchema;
let AtomicIntegerSchema = zod_1.z.object({});
exports.AtomicIntegerSchema = AtomicIntegerSchema;
let AttributeExportDataSchema = zod_1.z.object({});
exports.AttributeExportDataSchema = AttributeExportDataSchema;
let AttributesEntityViewSchema = zod_1.z.object({});
exports.AttributesEntityViewSchema = AttributesEntityViewSchema;
let AuditLogSchema = zod_1.z.object({});
exports.AuditLogSchema = AuditLogSchema;
let AuditLogIdSchema = zod_1.z.object({});
exports.AuditLogIdSchema = AuditLogIdSchema;
let AutoVersionCreateConfigSchema = zod_1.z.object({});
exports.AutoVersionCreateConfigSchema = AutoVersionCreateConfigSchema;
let AwsSnsSmsProviderConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.AwsSnsSmsProviderConfigurationSchema = AwsSnsSmsProviderConfigurationSchema;
let BackupCodeTwoFaAccountConfigSchema = zod_1.z.object({});
exports.BackupCodeTwoFaAccountConfigSchema = BackupCodeTwoFaAccountConfigSchema;
let BackupCodeTwoFaProviderConfigSchema = zod_1.z.object({});
exports.BackupCodeTwoFaProviderConfigSchema = BackupCodeTwoFaProviderConfigSchema;
let BlobEntityIdSchema = zod_1.z.object({});
exports.BlobEntityIdSchema = BlobEntityIdSchema;
let BlobEntityInfoSchema = zod_1.z.object({});
exports.BlobEntityInfoSchema = BlobEntityInfoSchema;
let BlobEntityWithCustomerInfoSchema = zod_1.z.object({});
exports.BlobEntityWithCustomerInfoSchema = BlobEntityWithCustomerInfoSchema;
let BooleanFilterPredicateSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.BooleanFilterPredicateSchema = BooleanFilterPredicateSchema;
let BranchInfoSchema = zod_1.z.object({});
exports.BranchInfoSchema = BranchInfoSchema;
let BulkImportRequestSchema = zod_1.z.object({});
exports.BulkImportRequestSchema = BulkImportRequestSchema;
let BulkImportResult_Of_AssetSchema = zod_1.z.object({});
exports.BulkImportResult_Of_AssetSchema = BulkImportResult_Of_AssetSchema;
let BulkImportResult_Of_DeviceSchema = zod_1.z.object({});
exports.BulkImportResult_Of_DeviceSchema = BulkImportResult_Of_DeviceSchema;
let BulkImportResult_Of_EdgeSchema = zod_1.z.object({});
exports.BulkImportResult_Of_EdgeSchema = BulkImportResult_Of_EdgeSchema;
let ButtonSchema = zod_1.z.object({});
exports.ButtonSchema = ButtonSchema;
let ByteArrayResourceSchema = zod_1.z.object({});
exports.ByteArrayResourceSchema = ByteArrayResourceSchema;
let ByteBufferSchema = zod_1.z.object({});
exports.ByteBufferSchema = ByteBufferSchema;
let ChangePasswordRequestSchema = zod_1.z.object({});
exports.ChangePasswordRequestSchema = ChangePasswordRequestSchema;
let CheckPreProvisionedDevicesDeviceProfileProvisionConfigurationSchema = zod_1.z.object({});
exports.CheckPreProvisionedDevicesDeviceProfileProvisionConfigurationSchema = CheckPreProvisionedDevicesDeviceProfileProvisionConfigurationSchema;
let ClaimRequestSchema = zod_1.z.object({});
exports.ClaimRequestSchema = ClaimRequestSchema;
let ClearRuleSchema = zod_1.z.object({});
exports.ClearRuleSchema = ClearRuleSchema;
let ClientAttributesQueryingSnmpCommunicationConfigSchema = zod_1.z.object({});
exports.ClientAttributesQueryingSnmpCommunicationConfigSchema = ClientAttributesQueryingSnmpCommunicationConfigSchema;
let CoapDeviceProfileTransportConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.CoapDeviceProfileTransportConfigurationSchema = CoapDeviceProfileTransportConfigurationSchema;
let CoapDeviceTransportConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.CoapDeviceTransportConfigurationSchema = CoapDeviceTransportConfigurationSchema;
let CoapDeviceTypeConfigurationSchema = zod_1.z.object({});
exports.CoapDeviceTypeConfigurationSchema = CoapDeviceTypeConfigurationSchema;
let ColumnMappingSchema = zod_1.z.object({});
exports.ColumnMappingSchema = ColumnMappingSchema;
let ComparisonTsValueSchema = zod_1.z.object({});
exports.ComparisonTsValueSchema = ComparisonTsValueSchema;
let ComplexFilterPredicateSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.ComplexFilterPredicateSchema = ComplexFilterPredicateSchema;
let ComplexVersionCreateRequestSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.ComplexVersionCreateRequestSchema = ComplexVersionCreateRequestSchema;
let ComponentDescriptorSchema = zod_1.z.object({});
exports.ComponentDescriptorSchema = ComponentDescriptorSchema;
let ComponentDescriptorIdSchema = zod_1.z.object({});
exports.ComponentDescriptorIdSchema = ComponentDescriptorIdSchema;
let ContactBased_Of_objectSchema = zod_1.z.object({});
exports.ContactBased_Of_objectSchema = ContactBased_Of_objectSchema;
let ConverterSchema = zod_1.z.object({});
exports.ConverterSchema = ConverterSchema;
let ConverterIdSchema = zod_1.z.object({});
exports.ConverterIdSchema = ConverterIdSchema;
let CustomMenuSchema = zod_1.z.object({});
exports.CustomMenuSchema = CustomMenuSchema;
let CustomMenuItemSchema = zod_1.z.object({});
exports.CustomMenuItemSchema = CustomMenuItemSchema;
let CustomTimeScheduleSchema = zod_1.z.object({});
exports.CustomTimeScheduleSchema = CustomTimeScheduleSchema;
let CustomTimeScheduleItemSchema = zod_1.z.object({});
exports.CustomTimeScheduleItemSchema = CustomTimeScheduleItemSchema;
let CustomTranslationSchema = zod_1.z.object({});
exports.CustomTranslationSchema = CustomTranslationSchema;
let CustomerSchema = zod_1.z.object({});
exports.CustomerSchema = CustomerSchema;
let CustomerIdSchema = zod_1.z.object({});
exports.CustomerIdSchema = CustomerIdSchema;
let CustomerInfoSchema = zod_1.z.object({});
exports.CustomerInfoSchema = CustomerInfoSchema;
let CustomerUsersFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.CustomerUsersFilterSchema = CustomerUsersFilterSchema;
let DashboardSchema = zod_1.z.object({});
exports.DashboardSchema = DashboardSchema;
let DashboardIdSchema = zod_1.z.object({});
exports.DashboardIdSchema = DashboardIdSchema;
let DashboardInfoSchema = zod_1.z.object({});
exports.DashboardInfoSchema = DashboardInfoSchema;
let DebugConverterEventFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.DebugConverterEventFilterSchema = DebugConverterEventFilterSchema;
let DebugIntegrationEventFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.DebugIntegrationEventFilterSchema = DebugIntegrationEventFilterSchema;
let DefaultCoapDeviceTypeConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.DefaultCoapDeviceTypeConfigurationSchema = DefaultCoapDeviceTypeConfigurationSchema;
let DefaultDeviceConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.DefaultDeviceConfigurationSchema = DefaultDeviceConfigurationSchema;
let DefaultDeviceProfileConfigurationSchema = zod_1.z.object({});
exports.DefaultDeviceProfileConfigurationSchema = DefaultDeviceProfileConfigurationSchema;
let DefaultDeviceProfileTransportConfigurationSchema = zod_1.z.object({});
exports.DefaultDeviceProfileTransportConfigurationSchema = DefaultDeviceProfileTransportConfigurationSchema;
let DefaultDeviceTransportConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.DefaultDeviceTransportConfigurationSchema = DefaultDeviceTransportConfigurationSchema;
let DefaultRuleChainCreateRequestSchema = zod_1.z.object({});
exports.DefaultRuleChainCreateRequestSchema = DefaultRuleChainCreateRequestSchema;
let DefaultTenantProfileConfigurationSchema = zod_1.z.object({});
exports.DefaultTenantProfileConfigurationSchema = DefaultTenantProfileConfigurationSchema;
let DeferredResult_Of_EntityDataDiffSchema = zod_1.z.object({});
exports.DeferredResult_Of_EntityDataDiffSchema = DeferredResult_Of_EntityDataDiffSchema;
let DeferredResult_Of_EntityDataInfoSchema = zod_1.z.object({});
exports.DeferredResult_Of_EntityDataInfoSchema = DeferredResult_Of_EntityDataInfoSchema;
let DeferredResult_Of_List_Of_BranchInfoSchema = zod_1.z.object({});
exports.DeferredResult_Of_List_Of_BranchInfoSchema = DeferredResult_Of_List_Of_BranchInfoSchema;
let DeferredResult_Of_List_Of_VersionedEntityInfoSchema = zod_1.z.object({});
exports.DeferredResult_Of_List_Of_VersionedEntityInfoSchema = DeferredResult_Of_List_Of_VersionedEntityInfoSchema;
let DeferredResult_Of_PageData_Of_EntityVersionSchema = zod_1.z.object({});
exports.DeferredResult_Of_PageData_Of_EntityVersionSchema = DeferredResult_Of_PageData_Of_EntityVersionSchema;
let DeferredResult_Of_RepositorySettingsSchema = zod_1.z.object({});
exports.DeferredResult_Of_RepositorySettingsSchema = DeferredResult_Of_RepositorySettingsSchema;
let DeferredResult_Of_ResponseEntitySchema = zod_1.z.object({});
exports.DeferredResult_Of_ResponseEntitySchema = DeferredResult_Of_ResponseEntitySchema;
let DeferredResult_Of_VoidSchema = zod_1.z.object({});
exports.DeferredResult_Of_VoidSchema = DeferredResult_Of_VoidSchema;
let DeferredResult_Of_uuidSchema = zod_1.z.object({});
exports.DeferredResult_Of_uuidSchema = DeferredResult_Of_uuidSchema;
let DeliveryMethodNotificationTemplateSchema = zod_1.z.object({});
exports.DeliveryMethodNotificationTemplateSchema = DeliveryMethodNotificationTemplateSchema;
let DeviceSchema = zod_1.z.object({});
exports.DeviceSchema = DeviceSchema;
let DeviceActivityNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.DeviceActivityNotificationRuleTriggerConfigSchema = DeviceActivityNotificationRuleTriggerConfigSchema;
let DeviceConfigurationSchema = zod_1.z.object({});
exports.DeviceConfigurationSchema = DeviceConfigurationSchema;
let DeviceCredentialsSchema = zod_1.z.object({});
exports.DeviceCredentialsSchema = DeviceCredentialsSchema;
let DeviceCredentialsIdSchema = zod_1.z.object({});
exports.DeviceCredentialsIdSchema = DeviceCredentialsIdSchema;
let DeviceDataSchema = zod_1.z.object({});
exports.DeviceDataSchema = DeviceDataSchema;
let DeviceExportDataSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.DeviceExportDataSchema = DeviceExportDataSchema;
let DeviceGroupOtaPackageSchema = zod_1.z.object({});
exports.DeviceGroupOtaPackageSchema = DeviceGroupOtaPackageSchema;
let DeviceIdSchema = zod_1.z.object({});
exports.DeviceIdSchema = DeviceIdSchema;
let DeviceInfoSchema = zod_1.z.object({});
exports.DeviceInfoSchema = DeviceInfoSchema;
let DeviceProfileSchema = zod_1.z.object({});
exports.DeviceProfileSchema = DeviceProfileSchema;
let DeviceProfileAlarmSchema = zod_1.z.object({});
exports.DeviceProfileAlarmSchema = DeviceProfileAlarmSchema;
let DeviceProfileConfigurationSchema = zod_1.z.object({});
exports.DeviceProfileConfigurationSchema = DeviceProfileConfigurationSchema;
let DeviceProfileDataSchema = zod_1.z.object({});
exports.DeviceProfileDataSchema = DeviceProfileDataSchema;
let DeviceProfileIdSchema = zod_1.z.object({});
exports.DeviceProfileIdSchema = DeviceProfileIdSchema;
let DeviceProfileInfoSchema = zod_1.z.object({});
exports.DeviceProfileInfoSchema = DeviceProfileInfoSchema;
let DeviceProfileProvisionConfigurationSchema = zod_1.z.object({});
exports.DeviceProfileProvisionConfigurationSchema = DeviceProfileProvisionConfigurationSchema;
let DeviceProfileTransportConfigurationSchema = zod_1.z.object({});
exports.DeviceProfileTransportConfigurationSchema = DeviceProfileTransportConfigurationSchema;
let DeviceSearchQuerySchema = zod_1.z.object({});
exports.DeviceSearchQuerySchema = DeviceSearchQuerySchema;
let DeviceSearchQueryFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.DeviceSearchQueryFilterSchema = DeviceSearchQueryFilterSchema;
let DeviceTransportConfigurationSchema = zod_1.z.object({});
exports.DeviceTransportConfigurationSchema = DeviceTransportConfigurationSchema;
let DeviceTypeFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.DeviceTypeFilterSchema = DeviceTypeFilterSchema;
let DisabledDeviceProfileProvisionConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.DisabledDeviceProfileProvisionConfigurationSchema = DisabledDeviceProfileProvisionConfigurationSchema;
let DurationAlarmConditionSpecSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.DurationAlarmConditionSpecSchema = DurationAlarmConditionSpecSchema;
let DynamicValue_Of_booleanSchema = zod_1.z.object({});
exports.DynamicValue_Of_booleanSchema = DynamicValue_Of_booleanSchema;
let DynamicValue_Of_doubleSchema = zod_1.z.object({});
exports.DynamicValue_Of_doubleSchema = DynamicValue_Of_doubleSchema;
let DynamicValue_Of_intSchema = zod_1.z.object({});
exports.DynamicValue_Of_intSchema = DynamicValue_Of_intSchema;
let DynamicValue_Of_longSchema = zod_1.z.object({});
exports.DynamicValue_Of_longSchema = DynamicValue_Of_longSchema;
let DynamicValue_Of_stringSchema = zod_1.z.object({});
exports.DynamicValue_Of_stringSchema = DynamicValue_Of_stringSchema;
let EdgeSchema = zod_1.z.object({});
exports.EdgeSchema = EdgeSchema;
let EdgeEventSchema = zod_1.z.object({});
exports.EdgeEventSchema = EdgeEventSchema;
let EdgeEventIdSchema = zod_1.z.object({});
exports.EdgeEventIdSchema = EdgeEventIdSchema;
let EdgeIdSchema = zod_1.z.object({});
exports.EdgeIdSchema = EdgeIdSchema;
let EdgeInfoSchema = zod_1.z.object({});
exports.EdgeInfoSchema = EdgeInfoSchema;
let EdgeInstructionsSchema = zod_1.z.object({});
exports.EdgeInstructionsSchema = EdgeInstructionsSchema;
let EdgeSearchQuerySchema = zod_1.z.object({});
exports.EdgeSearchQuerySchema = EdgeSearchQuerySchema;
let EdgeSearchQueryFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EdgeSearchQueryFilterSchema = EdgeSearchQueryFilterSchema;
let EdgeTypeFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EdgeTypeFilterSchema = EdgeTypeFilterSchema;
let EfentoCoapDeviceTypeConfigurationSchema = zod_1.z.object({});
exports.EfentoCoapDeviceTypeConfigurationSchema = EfentoCoapDeviceTypeConfigurationSchema;
let EmailDeliveryMethodNotificationTemplateSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EmailDeliveryMethodNotificationTemplateSchema = EmailDeliveryMethodNotificationTemplateSchema;
let EmailTwoFaAccountConfigSchema = zod_1.z.object({});
exports.EmailTwoFaAccountConfigSchema = EmailTwoFaAccountConfigSchema;
let EmailTwoFaProviderConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EmailTwoFaProviderConfigSchema = EmailTwoFaProviderConfigSchema;
let EntitiesByGroupNameFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntitiesByGroupNameFilterSchema = EntitiesByGroupNameFilterSchema;
let EntitiesLimitNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntitiesLimitNotificationRuleTriggerConfigSchema = EntitiesLimitNotificationRuleTriggerConfigSchema;
let EntityActionNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntityActionNotificationRuleTriggerConfigSchema = EntityActionNotificationRuleTriggerConfigSchema;
let EntityCountQuerySchema = zod_1.z.object({});
exports.EntityCountQuerySchema = EntityCountQuerySchema;
let EntityDataSchema = zod_1.z.object({});
exports.EntityDataSchema = EntityDataSchema;
let EntityDataDiffSchema = zod_1.z.object({});
exports.EntityDataDiffSchema = EntityDataDiffSchema;
let EntityDataInfoSchema = zod_1.z.object({});
exports.EntityDataInfoSchema = EntityDataInfoSchema;
let EntityDataPageLinkSchema = zod_1.z.object({});
exports.EntityDataPageLinkSchema = EntityDataPageLinkSchema;
let EntityDataQuerySchema = zod_1.z.object({});
exports.EntityDataQuerySchema = EntityDataQuerySchema;
let EntityDataSortOrderSchema = zod_1.z.object({});
exports.EntityDataSortOrderSchema = EntityDataSortOrderSchema;
let EntityExportData_Of_objectSchema = zod_1.z.object({});
exports.EntityExportData_Of_objectSchema = EntityExportData_Of_objectSchema;
let EntityFilterSchema = zod_1.z.object({});
exports.EntityFilterSchema = EntityFilterSchema;
let EntityGroupSchema = zod_1.z.object({});
exports.EntityGroupSchema = EntityGroupSchema;
let EntityGroupExportDataSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntityGroupExportDataSchema = EntityGroupExportDataSchema;
let EntityGroupFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntityGroupFilterSchema = EntityGroupFilterSchema;
let EntityGroupIdSchema = zod_1.z.object({});
exports.EntityGroupIdSchema = EntityGroupIdSchema;
let EntityGroupInfoSchema = zod_1.z.object({});
exports.EntityGroupInfoSchema = EntityGroupInfoSchema;
let EntityGroupListFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntityGroupListFilterSchema = EntityGroupListFilterSchema;
let EntityGroupNameFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntityGroupNameFilterSchema = EntityGroupNameFilterSchema;
let EntityIdSchema = zod_1.z.object({});
exports.EntityIdSchema = EntityIdSchema;
let EntityInfoSchema = zod_1.z.object({});
exports.EntityInfoSchema = EntityInfoSchema;
let EntityKeySchema = zod_1.z.object({});
exports.EntityKeySchema = EntityKeySchema;
let EntityListFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntityListFilterSchema = EntityListFilterSchema;
let EntityLoadErrorSchema = zod_1.z.object({});
exports.EntityLoadErrorSchema = EntityLoadErrorSchema;
let EntityNameFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntityNameFilterSchema = EntityNameFilterSchema;
let EntityRelationSchema = zod_1.z.object({});
exports.EntityRelationSchema = EntityRelationSchema;
let EntityRelationInfoSchema = zod_1.z.object({});
exports.EntityRelationInfoSchema = EntityRelationInfoSchema;
let EntityRelationsQuerySchema = zod_1.z.object({});
exports.EntityRelationsQuerySchema = EntityRelationsQuerySchema;
let EntitySubtypeSchema = zod_1.z.object({});
exports.EntitySubtypeSchema = EntitySubtypeSchema;
let EntityTypeFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntityTypeFilterSchema = EntityTypeFilterSchema;
let EntityTypeLoadResultSchema = zod_1.z.object({});
exports.EntityTypeLoadResultSchema = EntityTypeLoadResultSchema;
let EntityTypeVersionCreateConfigSchema = zod_1.z.object({});
exports.EntityTypeVersionCreateConfigSchema = EntityTypeVersionCreateConfigSchema;
let EntityTypeVersionLoadConfigSchema = zod_1.z.object({});
exports.EntityTypeVersionLoadConfigSchema = EntityTypeVersionLoadConfigSchema;
let EntityTypeVersionLoadRequestSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntityTypeVersionLoadRequestSchema = EntityTypeVersionLoadRequestSchema;
let EntityVersionSchema = zod_1.z.object({});
exports.EntityVersionSchema = EntityVersionSchema;
let EntityViewSchema = zod_1.z.object({});
exports.EntityViewSchema = EntityViewSchema;
let EntityViewIdSchema = zod_1.z.object({});
exports.EntityViewIdSchema = EntityViewIdSchema;
let EntityViewInfoSchema = zod_1.z.object({});
exports.EntityViewInfoSchema = EntityViewInfoSchema;
let EntityViewSearchQuerySchema = zod_1.z.object({});
exports.EntityViewSearchQuerySchema = EntityViewSearchQuerySchema;
let EntityViewSearchQueryFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntityViewSearchQueryFilterSchema = EntityViewSearchQueryFilterSchema;
let EntityViewTypeFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntityViewTypeFilterSchema = EntityViewTypeFilterSchema;
let ErrorEventFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.ErrorEventFilterSchema = ErrorEventFilterSchema;
let EscalatedNotificationRuleRecipientsConfigSchema = zod_1.z.object({});
exports.EscalatedNotificationRuleRecipientsConfigSchema = EscalatedNotificationRuleRecipientsConfigSchema;
let EventFilterSchema = zod_1.z.object({});
exports.EventFilterSchema = EventFilterSchema;
let EventIdSchema = zod_1.z.object({});
exports.EventIdSchema = EventIdSchema;
let EventInfoSchema = zod_1.z.object({});
exports.EventInfoSchema = EventInfoSchema;
let ExportableEntity_Of_EntityIdSchema = zod_1.z.object({});
exports.ExportableEntity_Of_EntityIdSchema = ExportableEntity_Of_EntityIdSchema;
let FaviconSchema = zod_1.z.object({});
exports.FaviconSchema = FaviconSchema;
let FeaturesInfoSchema = zod_1.z.object({});
exports.FeaturesInfoSchema = FeaturesInfoSchema;
let FilterPredicateValue_Of_booleanSchema = zod_1.z.object({});
exports.FilterPredicateValue_Of_booleanSchema = FilterPredicateValue_Of_booleanSchema;
let FilterPredicateValue_Of_doubleSchema = zod_1.z.object({});
exports.FilterPredicateValue_Of_doubleSchema = FilterPredicateValue_Of_doubleSchema;
let FilterPredicateValue_Of_intSchema = zod_1.z.object({});
exports.FilterPredicateValue_Of_intSchema = FilterPredicateValue_Of_intSchema;
let FilterPredicateValue_Of_longSchema = zod_1.z.object({});
exports.FilterPredicateValue_Of_longSchema = FilterPredicateValue_Of_longSchema;
let FilterPredicateValue_Of_stringSchema = zod_1.z.object({});
exports.FilterPredicateValue_Of_stringSchema = FilterPredicateValue_Of_stringSchema;
let GroupEntityExportDataSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.GroupEntityExportDataSchema = GroupEntityExportDataSchema;
let GroupPermissionSchema = zod_1.z.object({});
exports.GroupPermissionSchema = GroupPermissionSchema;
let GroupPermissionIdSchema = zod_1.z.object({});
exports.GroupPermissionIdSchema = GroupPermissionIdSchema;
let GroupPermissionInfoSchema = zod_1.z.object({});
exports.GroupPermissionInfoSchema = GroupPermissionInfoSchema;
let HasId_Of_objectSchema = zod_1.z.object({});
exports.HasId_Of_objectSchema = HasId_Of_objectSchema;
let HomeDashboardSchema = zod_1.z.object({});
exports.HomeDashboardSchema = HomeDashboardSchema;
let HomeDashboardInfoSchema = zod_1.z.object({});
exports.HomeDashboardInfoSchema = HomeDashboardInfoSchema;
let ImageExportDataSchema = zod_1.z.object({});
exports.ImageExportDataSchema = ImageExportDataSchema;
let InputStreamSchema = zod_1.z.object({});
exports.InputStreamSchema = InputStreamSchema;
let IntegrationSchema = zod_1.z.object({});
exports.IntegrationSchema = IntegrationSchema;
let IntegrationIdSchema = zod_1.z.object({});
exports.IntegrationIdSchema = IntegrationIdSchema;
let IntegrationInfoSchema = zod_1.z.object({});
exports.IntegrationInfoSchema = IntegrationInfoSchema;
let IntegrationLifecycleEventNotificationRuleTriggerConfigSchema = zod_1.z.object({});
exports.IntegrationLifecycleEventNotificationRuleTriggerConfigSchema = IntegrationLifecycleEventNotificationRuleTriggerConfigSchema;
let JWT_PairSchema = zod_1.z.object({});
exports.JWT_PairSchema = JWT_PairSchema;
let JWT_SettingsSchema = zod_1.z.object({});
exports.JWT_SettingsSchema = JWT_SettingsSchema;
let JsonNodeSchema = zod_1.z.object({});
exports.JsonNodeSchema = JsonNodeSchema;
let JsonTransportPayloadConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.JsonTransportPayloadConfigurationSchema = JsonTransportPayloadConfigurationSchema;
let KeyFilterSchema = zod_1.z.object({});
exports.KeyFilterSchema = KeyFilterSchema;
let KeyFilterPredicateSchema = zod_1.z.object({});
exports.KeyFilterPredicateSchema = KeyFilterPredicateSchema;
let LastVisitedDashboardInfoSchema = zod_1.z.object({});
exports.LastVisitedDashboardInfoSchema = LastVisitedDashboardInfoSchema;
let LicenseUsageInfoSchema = zod_1.z.object({});
exports.LicenseUsageInfoSchema = LicenseUsageInfoSchema;
let LifeCycleEventFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.LifeCycleEventFilterSchema = LifeCycleEventFilterSchema;
let LoginRequestSchema = zod_1.z.object({});
exports.LoginRequestSchema = LoginRequestSchema;
let LoginResponseSchema = zod_1.z.object({});
exports.LoginResponseSchema = LoginResponseSchema;
let LoginWhiteLabelingParamsSchema = zod_1.z.object({});
exports.LoginWhiteLabelingParamsSchema = LoginWhiteLabelingParamsSchema;
let LwM2MBootstrapServerCredentialSchema = zod_1.z.object({});
exports.LwM2MBootstrapServerCredentialSchema = LwM2MBootstrapServerCredentialSchema;
let LwM2mInstanceSchema = zod_1.z.object({});
exports.LwM2mInstanceSchema = LwM2mInstanceSchema;
let LwM2mObjectSchema = zod_1.z.object({});
exports.LwM2mObjectSchema = LwM2mObjectSchema;
let LwM2mResourceObserveSchema = zod_1.z.object({});
exports.LwM2mResourceObserveSchema = LwM2mResourceObserveSchema;
let Lwm2mDeviceProfileTransportConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.Lwm2mDeviceProfileTransportConfigurationSchema = Lwm2mDeviceProfileTransportConfigurationSchema;
let Lwm2mDeviceTransportConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.Lwm2mDeviceTransportConfigurationSchema = Lwm2mDeviceTransportConfigurationSchema;
let MappingSchema = zod_1.z.object({});
exports.MappingSchema = MappingSchema;
let MergedGroupPermissionInfoSchema = zod_1.z.object({});
exports.MergedGroupPermissionInfoSchema = MergedGroupPermissionInfoSchema;
let MergedGroupTypePermissionInfoSchema = zod_1.z.object({});
exports.MergedGroupTypePermissionInfoSchema = MergedGroupTypePermissionInfoSchema;
let MergedUserPermissionsSchema = zod_1.z.object({});
exports.MergedUserPermissionsSchema = MergedUserPermissionsSchema;
let MicrosoftTeamsDeliveryMethodNotificationTemplateSchema = zod_1.z.object({});
exports.MicrosoftTeamsDeliveryMethodNotificationTemplateSchema = MicrosoftTeamsDeliveryMethodNotificationTemplateSchema;
let MicrosoftTeamsNotificationTargetConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.MicrosoftTeamsNotificationTargetConfigSchema = MicrosoftTeamsNotificationTargetConfigSchema;
let MqttDeviceProfileTransportConfigurationSchema = zod_1.z.object({});
exports.MqttDeviceProfileTransportConfigurationSchema = MqttDeviceProfileTransportConfigurationSchema;
let MqttDeviceTransportConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.MqttDeviceTransportConfigurationSchema = MqttDeviceTransportConfigurationSchema;
let NewPlatformVersionNotificationRuleTriggerConfigSchema = zod_1.z.object({});
exports.NewPlatformVersionNotificationRuleTriggerConfigSchema = NewPlatformVersionNotificationRuleTriggerConfigSchema;
let NoSecLwM2MBootstrapServerCredentialSchema = zod_1.z.object({});
exports.NoSecLwM2MBootstrapServerCredentialSchema = NoSecLwM2MBootstrapServerCredentialSchema;
let NodeConnectionInfoSchema = zod_1.z.object({});
exports.NodeConnectionInfoSchema = NodeConnectionInfoSchema;
let NotificationSchema = zod_1.z.object({});
exports.NotificationSchema = NotificationSchema;
let NotificationDeliveryMethodConfigSchema = zod_1.z.object({});
exports.NotificationDeliveryMethodConfigSchema = NotificationDeliveryMethodConfigSchema;
let NotificationIdSchema = zod_1.z.object({});
exports.NotificationIdSchema = NotificationIdSchema;
let NotificationInfoSchema = zod_1.z.object({});
exports.NotificationInfoSchema = NotificationInfoSchema;
let NotificationPrefSchema = zod_1.z.object({});
exports.NotificationPrefSchema = NotificationPrefSchema;
let NotificationRequestSchema = zod_1.z.object({});
exports.NotificationRequestSchema = NotificationRequestSchema;
let NotificationRequestConfigSchema = zod_1.z.object({});
exports.NotificationRequestConfigSchema = NotificationRequestConfigSchema;
let NotificationRequestIdSchema = zod_1.z.object({});
exports.NotificationRequestIdSchema = NotificationRequestIdSchema;
let NotificationRequestInfoSchema = zod_1.z.object({});
exports.NotificationRequestInfoSchema = NotificationRequestInfoSchema;
let NotificationRequestPreviewSchema = zod_1.z.object({});
exports.NotificationRequestPreviewSchema = NotificationRequestPreviewSchema;
let NotificationRequestStatsSchema = zod_1.z.object({});
exports.NotificationRequestStatsSchema = NotificationRequestStatsSchema;
let NotificationRuleSchema = zod_1.z.object({});
exports.NotificationRuleSchema = NotificationRuleSchema;
let NotificationRuleConfigSchema = zod_1.z.object({});
exports.NotificationRuleConfigSchema = NotificationRuleConfigSchema;
let NotificationRuleIdSchema = zod_1.z.object({});
exports.NotificationRuleIdSchema = NotificationRuleIdSchema;
let NotificationRuleInfoSchema = zod_1.z.object({});
exports.NotificationRuleInfoSchema = NotificationRuleInfoSchema;
let NotificationRuleRecipientsConfigSchema = zod_1.z.object({});
exports.NotificationRuleRecipientsConfigSchema = NotificationRuleRecipientsConfigSchema;
let NotificationRuleTriggerConfigSchema = zod_1.z.object({});
exports.NotificationRuleTriggerConfigSchema = NotificationRuleTriggerConfigSchema;
let NotificationSettingsSchema = zod_1.z.object({});
exports.NotificationSettingsSchema = NotificationSettingsSchema;
let NotificationTargetSchema = zod_1.z.object({});
exports.NotificationTargetSchema = NotificationTargetSchema;
let NotificationTargetConfigSchema = zod_1.z.object({});
exports.NotificationTargetConfigSchema = NotificationTargetConfigSchema;
let NotificationTemplateSchema = zod_1.z.object({});
exports.NotificationTemplateSchema = NotificationTemplateSchema;
let NotificationTemplateConfigSchema = zod_1.z.object({});
exports.NotificationTemplateConfigSchema = NotificationTemplateConfigSchema;
let NotificationTemplateIdSchema = zod_1.z.object({});
exports.NotificationTemplateIdSchema = NotificationTemplateIdSchema;
let NumericFilterPredicateSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.NumericFilterPredicateSchema = NumericFilterPredicateSchema;
let OAuth2BasicMapperConfigSchema = zod_1.z.object({});
exports.OAuth2BasicMapperConfigSchema = OAuth2BasicMapperConfigSchema;
let OAuth2ClientInfoSchema = zod_1.z.object({});
exports.OAuth2ClientInfoSchema = OAuth2ClientInfoSchema;
let OAuth2ClientRegistrationTemplateSchema = zod_1.z.object({});
exports.OAuth2ClientRegistrationTemplateSchema = OAuth2ClientRegistrationTemplateSchema;
let OAuth2ClientRegistrationTemplateIdSchema = zod_1.z.object({});
exports.OAuth2ClientRegistrationTemplateIdSchema = OAuth2ClientRegistrationTemplateIdSchema;
let OAuth2CustomMapperConfigSchema = zod_1.z.object({});
exports.OAuth2CustomMapperConfigSchema = OAuth2CustomMapperConfigSchema;
let OAuth2DomainInfoSchema = zod_1.z.object({});
exports.OAuth2DomainInfoSchema = OAuth2DomainInfoSchema;
let OAuth2InfoSchema = zod_1.z.object({});
exports.OAuth2InfoSchema = OAuth2InfoSchema;
let OAuth2MapperConfigSchema = zod_1.z.object({});
exports.OAuth2MapperConfigSchema = OAuth2MapperConfigSchema;
let OAuth2MobileInfoSchema = zod_1.z.object({});
exports.OAuth2MobileInfoSchema = OAuth2MobileInfoSchema;
let OAuth2ParamsInfoSchema = zod_1.z.object({});
exports.OAuth2ParamsInfoSchema = OAuth2ParamsInfoSchema;
let OAuth2RegistrationInfoSchema = zod_1.z.object({});
exports.OAuth2RegistrationInfoSchema = OAuth2RegistrationInfoSchema;
let ObjectAttributesSchema = zod_1.z.object({});
exports.ObjectAttributesSchema = ObjectAttributesSchema;
let ObjectNodeSchema = zod_1.z.object({});
exports.ObjectNodeSchema = ObjectNodeSchema;
let OriginatorEntityOwnerUsersFilterSchema = zod_1.z.object({});
exports.OriginatorEntityOwnerUsersFilterSchema = OriginatorEntityOwnerUsersFilterSchema;
let OtaPackageSchema = zod_1.z.object({});
exports.OtaPackageSchema = OtaPackageSchema;
let OtaPackageIdSchema = zod_1.z.object({});
exports.OtaPackageIdSchema = OtaPackageIdSchema;
let OtaPackageInfoSchema = zod_1.z.object({});
exports.OtaPackageInfoSchema = OtaPackageInfoSchema;
let OtherConfigurationSchema = zod_1.z.object({});
exports.OtherConfigurationSchema = OtherConfigurationSchema;
let PSKLwM2MBootstrapServerCredentialSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.PSKLwM2MBootstrapServerCredentialSchema = PSKLwM2MBootstrapServerCredentialSchema;
let PageData_Of_AlarmCommentInfoSchema = zod_1.z.object({});
exports.PageData_Of_AlarmCommentInfoSchema = PageData_Of_AlarmCommentInfoSchema;
let PageData_Of_AlarmDataSchema = zod_1.z.object({});
exports.PageData_Of_AlarmDataSchema = PageData_Of_AlarmDataSchema;
let PageData_Of_AlarmInfoSchema = zod_1.z.object({});
exports.PageData_Of_AlarmInfoSchema = PageData_Of_AlarmInfoSchema;
let PageData_Of_AssetInfoSchema = zod_1.z.object({});
exports.PageData_Of_AssetInfoSchema = PageData_Of_AssetInfoSchema;
let PageData_Of_AssetProfileInfoSchema = zod_1.z.object({});
exports.PageData_Of_AssetProfileInfoSchema = PageData_Of_AssetProfileInfoSchema;
let PageData_Of_AssetProfileSchema = zod_1.z.object({});
exports.PageData_Of_AssetProfileSchema = PageData_Of_AssetProfileSchema;
let PageData_Of_AssetSchema = zod_1.z.object({});
exports.PageData_Of_AssetSchema = PageData_Of_AssetSchema;
let PageData_Of_AuditLogSchema = zod_1.z.object({});
exports.PageData_Of_AuditLogSchema = PageData_Of_AuditLogSchema;
let PageData_Of_BlobEntityWithCustomerInfoSchema = zod_1.z.object({});
exports.PageData_Of_BlobEntityWithCustomerInfoSchema = PageData_Of_BlobEntityWithCustomerInfoSchema;
let PageData_Of_ContactBased_Of_objectSchema = zod_1.z.object({});
exports.PageData_Of_ContactBased_Of_objectSchema = PageData_Of_ContactBased_Of_objectSchema;
let PageData_Of_ConverterSchema = zod_1.z.object({});
exports.PageData_Of_ConverterSchema = PageData_Of_ConverterSchema;
let PageData_Of_CustomerInfoSchema = zod_1.z.object({});
exports.PageData_Of_CustomerInfoSchema = PageData_Of_CustomerInfoSchema;
let PageData_Of_CustomerSchema = zod_1.z.object({});
exports.PageData_Of_CustomerSchema = PageData_Of_CustomerSchema;
let PageData_Of_DashboardInfoSchema = zod_1.z.object({});
exports.PageData_Of_DashboardInfoSchema = PageData_Of_DashboardInfoSchema;
let PageData_Of_DeviceInfoSchema = zod_1.z.object({});
exports.PageData_Of_DeviceInfoSchema = PageData_Of_DeviceInfoSchema;
let PageData_Of_DeviceProfileInfoSchema = zod_1.z.object({});
exports.PageData_Of_DeviceProfileInfoSchema = PageData_Of_DeviceProfileInfoSchema;
let PageData_Of_DeviceProfileSchema = zod_1.z.object({});
exports.PageData_Of_DeviceProfileSchema = PageData_Of_DeviceProfileSchema;
let PageData_Of_DeviceSchema = zod_1.z.object({});
exports.PageData_Of_DeviceSchema = PageData_Of_DeviceSchema;
let PageData_Of_EdgeEventSchema = zod_1.z.object({});
exports.PageData_Of_EdgeEventSchema = PageData_Of_EdgeEventSchema;
let PageData_Of_EdgeInfoSchema = zod_1.z.object({});
exports.PageData_Of_EdgeInfoSchema = PageData_Of_EdgeInfoSchema;
let PageData_Of_EdgeSchema = zod_1.z.object({});
exports.PageData_Of_EdgeSchema = PageData_Of_EdgeSchema;
let PageData_Of_EntityDataSchema = zod_1.z.object({});
exports.PageData_Of_EntityDataSchema = PageData_Of_EntityDataSchema;
let PageData_Of_EntityGroupInfoSchema = zod_1.z.object({});
exports.PageData_Of_EntityGroupInfoSchema = PageData_Of_EntityGroupInfoSchema;
let PageData_Of_EntityInfoSchema = zod_1.z.object({});
exports.PageData_Of_EntityInfoSchema = PageData_Of_EntityInfoSchema;
let PageData_Of_EntitySubtypeSchema = zod_1.z.object({});
exports.PageData_Of_EntitySubtypeSchema = PageData_Of_EntitySubtypeSchema;
let PageData_Of_EntityVersionSchema = zod_1.z.object({});
exports.PageData_Of_EntityVersionSchema = PageData_Of_EntityVersionSchema;
let PageData_Of_EntityViewInfoSchema = zod_1.z.object({});
exports.PageData_Of_EntityViewInfoSchema = PageData_Of_EntityViewInfoSchema;
let PageData_Of_EntityViewSchema = zod_1.z.object({});
exports.PageData_Of_EntityViewSchema = PageData_Of_EntityViewSchema;
let PageData_Of_EventInfoSchema = zod_1.z.object({});
exports.PageData_Of_EventInfoSchema = PageData_Of_EventInfoSchema;
let PageData_Of_IntegrationInfoSchema = zod_1.z.object({});
exports.PageData_Of_IntegrationInfoSchema = PageData_Of_IntegrationInfoSchema;
let PageData_Of_IntegrationSchema = zod_1.z.object({});
exports.PageData_Of_IntegrationSchema = PageData_Of_IntegrationSchema;
let PageData_Of_NotificationRequestInfoSchema = zod_1.z.object({});
exports.PageData_Of_NotificationRequestInfoSchema = PageData_Of_NotificationRequestInfoSchema;
let PageData_Of_NotificationRuleInfoSchema = zod_1.z.object({});
exports.PageData_Of_NotificationRuleInfoSchema = PageData_Of_NotificationRuleInfoSchema;
let PageData_Of_NotificationTargetSchema = zod_1.z.object({});
exports.PageData_Of_NotificationTargetSchema = PageData_Of_NotificationTargetSchema;
let PageData_Of_NotificationTemplateSchema = zod_1.z.object({});
exports.PageData_Of_NotificationTemplateSchema = PageData_Of_NotificationTemplateSchema;
let PageData_Of_NotificationSchema = zod_1.z.object({});
exports.PageData_Of_NotificationSchema = PageData_Of_NotificationSchema;
let PageData_Of_OtaPackageInfoSchema = zod_1.z.object({});
exports.PageData_Of_OtaPackageInfoSchema = PageData_Of_OtaPackageInfoSchema;
let PageData_Of_QueueSchema = zod_1.z.object({});
exports.PageData_Of_QueueSchema = PageData_Of_QueueSchema;
let PageData_Of_RoleSchema = zod_1.z.object({});
exports.PageData_Of_RoleSchema = PageData_Of_RoleSchema;
let PageData_Of_RuleChainSchema = zod_1.z.object({});
exports.PageData_Of_RuleChainSchema = PageData_Of_RuleChainSchema;
let PageData_Of_SchedulerEventInfoSchema = zod_1.z.object({});
exports.PageData_Of_SchedulerEventInfoSchema = PageData_Of_SchedulerEventInfoSchema;
let PageData_Of_ShortEntityViewSchema = zod_1.z.object({});
exports.PageData_Of_ShortEntityViewSchema = PageData_Of_ShortEntityViewSchema;
let PageData_Of_TbResourceInfoSchema = zod_1.z.object({});
exports.PageData_Of_TbResourceInfoSchema = PageData_Of_TbResourceInfoSchema;
let PageData_Of_TenantInfoSchema = zod_1.z.object({});
exports.PageData_Of_TenantInfoSchema = PageData_Of_TenantInfoSchema;
let PageData_Of_TenantProfileSchema = zod_1.z.object({});
exports.PageData_Of_TenantProfileSchema = PageData_Of_TenantProfileSchema;
let PageData_Of_TenantSchema = zod_1.z.object({});
exports.PageData_Of_TenantSchema = PageData_Of_TenantSchema;
let PageData_Of_UserEmailInfoSchema = zod_1.z.object({});
exports.PageData_Of_UserEmailInfoSchema = PageData_Of_UserEmailInfoSchema;
let PageData_Of_UserInfoSchema = zod_1.z.object({});
exports.PageData_Of_UserInfoSchema = PageData_Of_UserInfoSchema;
let PageData_Of_UserSchema = zod_1.z.object({});
exports.PageData_Of_UserSchema = PageData_Of_UserSchema;
let PageData_Of_WidgetTypeInfoSchema = zod_1.z.object({});
exports.PageData_Of_WidgetTypeInfoSchema = PageData_Of_WidgetTypeInfoSchema;
let PageData_Of_WidgetsBundleSchema = zod_1.z.object({});
exports.PageData_Of_WidgetsBundleSchema = PageData_Of_WidgetsBundleSchema;
let PaletteSchema = zod_1.z.object({});
exports.PaletteSchema = PaletteSchema;
let PaletteSettingsSchema = zod_1.z.object({});
exports.PaletteSettingsSchema = PaletteSettingsSchema;
let PlatformTwoFaSettingsSchema = zod_1.z.object({});
exports.PlatformTwoFaSettingsSchema = PlatformTwoFaSettingsSchema;
let PlatformUsersNotificationTargetConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.PlatformUsersNotificationTargetConfigSchema = PlatformUsersNotificationTargetConfigSchema;
let PowerSavingConfigurationSchema = zod_1.z.object({});
exports.PowerSavingConfigurationSchema = PowerSavingConfigurationSchema;
let ProcessingStrategySchema = zod_1.z.object({});
exports.ProcessingStrategySchema = ProcessingStrategySchema;
let ProtoTransportPayloadConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.ProtoTransportPayloadConfigurationSchema = ProtoTransportPayloadConfigurationSchema;
let QueueSchema = zod_1.z.object({});
exports.QueueSchema = QueueSchema;
let QueueIdSchema = zod_1.z.object({});
exports.QueueIdSchema = QueueIdSchema;
let RPKLwM2MBootstrapServerCredentialSchema = zod_1.z.object({});
exports.RPKLwM2MBootstrapServerCredentialSchema = RPKLwM2MBootstrapServerCredentialSchema;
let RateLimitsNotificationRuleTriggerConfigSchema = zod_1.z.object({});
exports.RateLimitsNotificationRuleTriggerConfigSchema = RateLimitsNotificationRuleTriggerConfigSchema;
let RawDataEventFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.RawDataEventFilterSchema = RawDataEventFilterSchema;
let RelationEntityTypeFilterSchema = zod_1.z.object({});
exports.RelationEntityTypeFilterSchema = RelationEntityTypeFilterSchema;
let RelationsQueryFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.RelationsQueryFilterSchema = RelationsQueryFilterSchema;
let RelationsSearchParametersSchema = zod_1.z.object({});
exports.RelationsSearchParametersSchema = RelationsSearchParametersSchema;
let RepeatingAlarmConditionSpecSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.RepeatingAlarmConditionSpecSchema = RepeatingAlarmConditionSpecSchema;
let ReportConfigSchema = zod_1.z.object({});
exports.ReportConfigSchema = ReportConfigSchema;
let RepositorySettingsSchema = zod_1.z.object({});
exports.RepositorySettingsSchema = RepositorySettingsSchema;
let RepositorySettingsInfoSchema = zod_1.z.object({});
exports.RepositorySettingsInfoSchema = RepositorySettingsInfoSchema;
let ResetPasswordEmailRequestSchema = zod_1.z.object({});
exports.ResetPasswordEmailRequestSchema = ResetPasswordEmailRequestSchema;
let ResetPasswordRequestSchema = zod_1.z.object({});
exports.ResetPasswordRequestSchema = ResetPasswordRequestSchema;
let ResourceSchema = zod_1.z.object({});
exports.ResourceSchema = ResourceSchema;
let ResponseEntitySchema = zod_1.z.object({});
exports.ResponseEntitySchema = ResponseEntitySchema;
let RoleSchema = zod_1.z.object({});
exports.RoleSchema = RoleSchema;
let RoleIdSchema = zod_1.z.object({});
exports.RoleIdSchema = RoleIdSchema;
let RpcSchema = zod_1.z.object({});
exports.RpcSchema = RpcSchema;
let RpcIdSchema = zod_1.z.object({});
exports.RpcIdSchema = RpcIdSchema;
let RuleChainSchema = zod_1.z.object({});
exports.RuleChainSchema = RuleChainSchema;
let RuleChainConnectionInfoSchema = zod_1.z.object({});
exports.RuleChainConnectionInfoSchema = RuleChainConnectionInfoSchema;
let RuleChainDataSchema = zod_1.z.object({});
exports.RuleChainDataSchema = RuleChainDataSchema;
let RuleChainDebugEventFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.RuleChainDebugEventFilterSchema = RuleChainDebugEventFilterSchema;
let RuleChainExportDataSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.RuleChainExportDataSchema = RuleChainExportDataSchema;
let RuleChainIdSchema = zod_1.z.object({});
exports.RuleChainIdSchema = RuleChainIdSchema;
let RuleChainImportResultSchema = zod_1.z.object({});
exports.RuleChainImportResultSchema = RuleChainImportResultSchema;
let RuleChainMetaDataSchema = zod_1.z.object({});
exports.RuleChainMetaDataSchema = RuleChainMetaDataSchema;
let RuleChainOutputLabelsUsageSchema = zod_1.z.object({});
exports.RuleChainOutputLabelsUsageSchema = RuleChainOutputLabelsUsageSchema;
let RuleEngineComponentLifecycleEventNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.RuleEngineComponentLifecycleEventNotificationRuleTriggerConfigSchema = RuleEngineComponentLifecycleEventNotificationRuleTriggerConfigSchema;
let RuleNodeSchema = zod_1.z.object({});
exports.RuleNodeSchema = RuleNodeSchema;
let RuleNodeDebugEventFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.RuleNodeDebugEventFilterSchema = RuleNodeDebugEventFilterSchema;
let RuleNodeIdSchema = zod_1.z.object({});
exports.RuleNodeIdSchema = RuleNodeIdSchema;
let SaveDeviceWithCredentialsRequestSchema = zod_1.z.object({});
exports.SaveDeviceWithCredentialsRequestSchema = SaveDeviceWithCredentialsRequestSchema;
let SaveOtaPackageInfoRequestSchema = zod_1.z.object({});
exports.SaveOtaPackageInfoRequestSchema = SaveOtaPackageInfoRequestSchema;
let SchedulerEventSchema = zod_1.z.object({});
exports.SchedulerEventSchema = SchedulerEventSchema;
let SchedulerEventFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.SchedulerEventFilterSchema = SchedulerEventFilterSchema;
let SchedulerEventIdSchema = zod_1.z.object({});
exports.SchedulerEventIdSchema = SchedulerEventIdSchema;
let SchedulerEventInfoSchema = zod_1.z.object({});
exports.SchedulerEventInfoSchema = SchedulerEventInfoSchema;
let SchedulerEventWithCustomerInfoSchema = zod_1.z.object({});
exports.SchedulerEventWithCustomerInfoSchema = SchedulerEventWithCustomerInfoSchema;
let SecuritySettingsSchema = zod_1.z.object({});
exports.SecuritySettingsSchema = SecuritySettingsSchema;
let SelfRegistrationParamsSchema = zod_1.z.object({});
exports.SelfRegistrationParamsSchema = SelfRegistrationParamsSchema;
let ShareGroupRequestSchema = zod_1.z.object({});
exports.ShareGroupRequestSchema = ShareGroupRequestSchema;
let SharedAttributesSettingSnmpCommunicationConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.SharedAttributesSettingSnmpCommunicationConfigSchema = SharedAttributesSettingSnmpCommunicationConfigSchema;
let ShortCustomerInfoSchema = zod_1.z.object({});
exports.ShortCustomerInfoSchema = ShortCustomerInfoSchema;
let ShortEntityViewSchema = zod_1.z.object({});
exports.ShortEntityViewSchema = ShortEntityViewSchema;
let SignUpRequestSchema = zod_1.z.object({});
exports.SignUpRequestSchema = SignUpRequestSchema;
let SignUpSelfRegistrationParamsSchema = zod_1.z.object({});
exports.SignUpSelfRegistrationParamsSchema = SignUpSelfRegistrationParamsSchema;
let SimpleAlarmConditionSpecSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.SimpleAlarmConditionSpecSchema = SimpleAlarmConditionSpecSchema;
let SingleEntityFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.SingleEntityFilterSchema = SingleEntityFilterSchema;
let SingleEntityVersionCreateRequestSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.SingleEntityVersionCreateRequestSchema = SingleEntityVersionCreateRequestSchema;
let SingleEntityVersionLoadRequestSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.SingleEntityVersionLoadRequestSchema = SingleEntityVersionLoadRequestSchema;
let SlackConversationSchema = zod_1.z.object({});
exports.SlackConversationSchema = SlackConversationSchema;
let SlackDeliveryMethodNotificationTemplateSchema = zod_1.z.object({});
exports.SlackDeliveryMethodNotificationTemplateSchema = SlackDeliveryMethodNotificationTemplateSchema;
let SlackNotificationDeliveryMethodConfigSchema = zod_1.z.object({});
exports.SlackNotificationDeliveryMethodConfigSchema = SlackNotificationDeliveryMethodConfigSchema;
let SlackNotificationTargetConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.SlackNotificationTargetConfigSchema = SlackNotificationTargetConfigSchema;
let SmppSmsProviderConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.SmppSmsProviderConfigurationSchema = SmppSmsProviderConfigurationSchema;
let SmsDeliveryMethodNotificationTemplateSchema = zod_1.z.object({});
exports.SmsDeliveryMethodNotificationTemplateSchema = SmsDeliveryMethodNotificationTemplateSchema;
let SmsProviderConfigurationSchema = zod_1.z.object({});
exports.SmsProviderConfigurationSchema = SmsProviderConfigurationSchema;
let SmsTwoFaAccountConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.SmsTwoFaAccountConfigSchema = SmsTwoFaAccountConfigSchema;
let SmsTwoFaProviderConfigSchema = zod_1.z.object({});
exports.SmsTwoFaProviderConfigSchema = SmsTwoFaProviderConfigSchema;
let SnmpCommunicationConfigSchema = zod_1.z.object({});
exports.SnmpCommunicationConfigSchema = SnmpCommunicationConfigSchema;
let SnmpDeviceProfileTransportConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.SnmpDeviceProfileTransportConfigurationSchema = SnmpDeviceProfileTransportConfigurationSchema;
let SnmpDeviceTransportConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.SnmpDeviceTransportConfigurationSchema = SnmpDeviceTransportConfigurationSchema;
let SnmpMappingSchema = zod_1.z.object({});
exports.SnmpMappingSchema = SnmpMappingSchema;
let SolutionInstallResponseSchema = zod_1.z.object({});
exports.SolutionInstallResponseSchema = SolutionInstallResponseSchema;
let SpecificTimeScheduleSchema = zod_1.z.object({});
exports.SpecificTimeScheduleSchema = SpecificTimeScheduleSchema;
let StarredDashboardInfoSchema = zod_1.z.object({});
exports.StarredDashboardInfoSchema = StarredDashboardInfoSchema;
let StateEntityOwnerFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.StateEntityOwnerFilterSchema = StateEntityOwnerFilterSchema;
let StatisticsEventFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.StatisticsEventFilterSchema = StatisticsEventFilterSchema;
let StringFilterPredicateSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.StringFilterPredicateSchema = StringFilterPredicateSchema;
let SubmitStrategySchema = zod_1.z.object({});
exports.SubmitStrategySchema = SubmitStrategySchema;
let SystemAdministratorsFilterSchema = zod_1.z.object({});
exports.SystemAdministratorsFilterSchema = SystemAdministratorsFilterSchema;
let SystemInfoSchema = zod_1.z.object({});
exports.SystemInfoSchema = SystemInfoSchema;
let SystemInfoDataSchema = zod_1.z.object({});
exports.SystemInfoDataSchema = SystemInfoDataSchema;
let TbImageDeleteResultSchema = zod_1.z.object({});
exports.TbImageDeleteResultSchema = TbImageDeleteResultSchema;
let TbResourceSchema = zod_1.z.object({});
exports.TbResourceSchema = TbResourceSchema;
let TbResourceIdSchema = zod_1.z.object({});
exports.TbResourceIdSchema = TbResourceIdSchema;
let TbResourceInfoSchema = zod_1.z.object({});
exports.TbResourceInfoSchema = TbResourceInfoSchema;
let TelemetryEntityViewSchema = zod_1.z.object({});
exports.TelemetryEntityViewSchema = TelemetryEntityViewSchema;
let TelemetryMappingConfigurationSchema = zod_1.z.object({});
exports.TelemetryMappingConfigurationSchema = TelemetryMappingConfigurationSchema;
let TelemetryQueryingSnmpCommunicationConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.TelemetryQueryingSnmpCommunicationConfigSchema = TelemetryQueryingSnmpCommunicationConfigSchema;
let TenantSchema = zod_1.z.object({});
exports.TenantSchema = TenantSchema;
let TenantAdministratorsFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.TenantAdministratorsFilterSchema = TenantAdministratorsFilterSchema;
let TenantIdSchema = zod_1.z.object({});
exports.TenantIdSchema = TenantIdSchema;
let TenantInfoSchema = zod_1.z.object({});
exports.TenantInfoSchema = TenantInfoSchema;
let TenantProfileSchema = zod_1.z.object({});
exports.TenantProfileSchema = TenantProfileSchema;
let TenantProfileConfigurationSchema = zod_1.z.object({});
exports.TenantProfileConfigurationSchema = TenantProfileConfigurationSchema;
let TenantProfileDataSchema = zod_1.z.object({});
exports.TenantProfileDataSchema = TenantProfileDataSchema;
let TenantProfileIdSchema = zod_1.z.object({});
exports.TenantProfileIdSchema = TenantProfileIdSchema;
let TenantProfileQueueConfigurationSchema = zod_1.z.object({});
exports.TenantProfileQueueConfigurationSchema = TenantProfileQueueConfigurationSchema;
let TenantSolutionTemplateDetailsSchema = zod_1.z.object({});
exports.TenantSolutionTemplateDetailsSchema = TenantSolutionTemplateDetailsSchema;
let TenantSolutionTemplateInfoSchema = zod_1.z.object({});
exports.TenantSolutionTemplateInfoSchema = TenantSolutionTemplateInfoSchema;
let TenantSolutionTemplateInstructionsSchema = zod_1.z.object({});
exports.TenantSolutionTemplateInstructionsSchema = TenantSolutionTemplateInstructionsSchema;
let TestSmsRequestSchema = zod_1.z.object({});
exports.TestSmsRequestSchema = TestSmsRequestSchema;
let ThingsboardCredentialsExpiredResponseSchema = zod_1.z.object({});
exports.ThingsboardCredentialsExpiredResponseSchema = ThingsboardCredentialsExpiredResponseSchema;
let ThingsboardErrorResponseSchema = zod_1.z.object({});
exports.ThingsboardErrorResponseSchema = ThingsboardErrorResponseSchema;
let ToDeviceRpcRequestSnmpCommunicationConfigSchema = zod_1.z.object({});
exports.ToDeviceRpcRequestSnmpCommunicationConfigSchema = ToDeviceRpcRequestSnmpCommunicationConfigSchema;
let ToServerRpcRequestSnmpCommunicationConfigSchema = zod_1.z.object({});
exports.ToServerRpcRequestSnmpCommunicationConfigSchema = ToServerRpcRequestSnmpCommunicationConfigSchema;
let TotpTwoFaAccountConfigSchema = zod_1.z.object({});
exports.TotpTwoFaAccountConfigSchema = TotpTwoFaAccountConfigSchema;
let TotpTwoFaProviderConfigSchema = zod_1.z.object({});
exports.TotpTwoFaProviderConfigSchema = TotpTwoFaProviderConfigSchema;
let TransportPayloadTypeConfigurationSchema = zod_1.z.object({});
exports.TransportPayloadTypeConfigurationSchema = TransportPayloadTypeConfigurationSchema;
let TsValueSchema = zod_1.z.object({});
exports.TsValueSchema = TsValueSchema;
let TwilioSmsProviderConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.TwilioSmsProviderConfigurationSchema = TwilioSmsProviderConfigurationSchema;
let TwoFaAccountConfigSchema = zod_1.z.object({});
exports.TwoFaAccountConfigSchema = TwoFaAccountConfigSchema;
let TwoFaAccountConfigUpdateRequestSchema = zod_1.z.object({});
exports.TwoFaAccountConfigUpdateRequestSchema = TwoFaAccountConfigUpdateRequestSchema;
let TwoFaProviderConfigSchema = zod_1.z.object({});
exports.TwoFaProviderConfigSchema = TwoFaProviderConfigSchema;
let TwoFaProviderInfoSchema = zod_1.z.object({});
exports.TwoFaProviderInfoSchema = TwoFaProviderInfoSchema;
let UpdateMessageSchema = zod_1.z.object({});
exports.UpdateMessageSchema = UpdateMessageSchema;
let UsageInfoSchema = zod_1.z.object({});
exports.UsageInfoSchema = UsageInfoSchema;
let UserSchema = zod_1.z.object({});
exports.UserSchema = UserSchema;
let UserDashboardsInfoSchema = zod_1.z.object({});
exports.UserDashboardsInfoSchema = UserDashboardsInfoSchema;
let UserEmailInfoSchema = zod_1.z.object({});
exports.UserEmailInfoSchema = UserEmailInfoSchema;
let UserGroupListFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.UserGroupListFilterSchema = UserGroupListFilterSchema;
let UserIdSchema = zod_1.z.object({});
exports.UserIdSchema = UserIdSchema;
let UserInfoSchema = zod_1.z.object({});
exports.UserInfoSchema = UserInfoSchema;
let UserListFilterSchema = zod_1.z.object({});
exports.UserListFilterSchema = UserListFilterSchema;
let UserNotificationSettingsSchema = zod_1.z.object({});
exports.UserNotificationSettingsSchema = UserNotificationSettingsSchema;
let UserPasswordPolicySchema = zod_1.z.object({});
exports.UserPasswordPolicySchema = UserPasswordPolicySchema;
let UserRoleFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.UserRoleFilterSchema = UserRoleFilterSchema;
let UsersFilterSchema = zod_1.z.object({});
exports.UsersFilterSchema = UsersFilterSchema;
let VersionCreateConfigSchema = zod_1.z.object({});
exports.VersionCreateConfigSchema = VersionCreateConfigSchema;
let VersionCreateRequestSchema = zod_1.z.object({});
exports.VersionCreateRequestSchema = VersionCreateRequestSchema;
let VersionCreationResultSchema = zod_1.z.object({});
exports.VersionCreationResultSchema = VersionCreationResultSchema;
let VersionLoadConfigSchema = zod_1.z.object({});
exports.VersionLoadConfigSchema = VersionLoadConfigSchema;
let VersionLoadRequestSchema = zod_1.z.object({});
exports.VersionLoadRequestSchema = VersionLoadRequestSchema;
let VersionLoadResultSchema = zod_1.z.object({});
exports.VersionLoadResultSchema = VersionLoadResultSchema;
let VersionedEntityInfoSchema = zod_1.z.object({});
exports.VersionedEntityInfoSchema = VersionedEntityInfoSchema;
let WebDeliveryMethodNotificationTemplateSchema = zod_1.z.object({});
exports.WebDeliveryMethodNotificationTemplateSchema = WebDeliveryMethodNotificationTemplateSchema;
let WhiteLabelingSchema = zod_1.z.object({});
exports.WhiteLabelingSchema = WhiteLabelingSchema;
let WhiteLabelingParamsSchema = zod_1.z.object({});
exports.WhiteLabelingParamsSchema = WhiteLabelingParamsSchema;
let WidgetTypeSchema = zod_1.z.object({});
exports.WidgetTypeSchema = WidgetTypeSchema;
let WidgetTypeDetailsSchema = zod_1.z.object({});
exports.WidgetTypeDetailsSchema = WidgetTypeDetailsSchema;
let WidgetTypeExportDataSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.WidgetTypeExportDataSchema = WidgetTypeExportDataSchema;
let WidgetTypeIdSchema = zod_1.z.object({});
exports.WidgetTypeIdSchema = WidgetTypeIdSchema;
let WidgetTypeInfoSchema = zod_1.z.object({});
exports.WidgetTypeInfoSchema = WidgetTypeInfoSchema;
let WidgetsBundleSchema = zod_1.z.object({});
exports.WidgetsBundleSchema = WidgetsBundleSchema;
let WidgetsBundleExportDataSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.WidgetsBundleExportDataSchema = WidgetsBundleExportDataSchema;
let WidgetsBundleIdSchema = zod_1.z.object({});
exports.WidgetsBundleIdSchema = WidgetsBundleIdSchema;
let X509CertificateChainProvisionConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.X509CertificateChainProvisionConfigurationSchema = X509CertificateChainProvisionConfigurationSchema;
let X509LwM2MBootstrapServerCredentialSchema = zod_1.z.object({});
exports.X509LwM2MBootstrapServerCredentialSchema = X509LwM2MBootstrapServerCredentialSchema;
// Now define the actual schema contents
exports.X509LwM2MBootstrapServerCredentialSchema = X509LwM2MBootstrapServerCredentialSchema = zod_1.z.object({
    "shortServerId": zod_1.z.number(),
    "bootstrapServerIs": zod_1.z.boolean(),
    "host": zod_1.z.string(),
    "port": zod_1.z.number(),
    "clientHoldOffTime": zod_1.z.number(),
    "serverPublicKey": zod_1.z.string(),
    "serverCertificate": zod_1.z.string(),
    "bootstrapServerAccountTimeout": zod_1.z.number(),
    "lifetime": zod_1.z.number(),
    "defaultMinPeriod": zod_1.z.number(),
    "notifIfDisabled": zod_1.z.boolean(),
    "binding": zod_1.z.string()
});
exports.X509CertificateChainProvisionConfigurationSchema = X509CertificateChainProvisionConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.WidgetsBundleExportDataSchema = WidgetsBundleExportDataSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.WidgetTypeExportDataSchema = WidgetTypeExportDataSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.WidgetTypeDetailsSchema = WidgetTypeDetailsSchema = zod_1.z.object({
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "fqn": zod_1.z.string(),
    "name": zod_1.z.string(),
    "deprecated": zod_1.z.boolean(),
    "descriptor": JsonNodeSchema,
    "image": zod_1.z.string(),
    "description": zod_1.z.string(),
    "tags": zod_1.z.array(zod_1.z.string())
});
exports.WidgetTypeSchema = WidgetTypeSchema = zod_1.z.object({
    "id": WidgetTypeIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "fqn": zod_1.z.string(),
    "name": zod_1.z.string(),
    "deprecated": zod_1.z.boolean(),
    "descriptor": JsonNodeSchema
});
exports.WhiteLabelingParamsSchema = WhiteLabelingParamsSchema = zod_1.z.object({
    "logoImageUrl": zod_1.z.string(),
    "logoImageHeight": zod_1.z.number(),
    "appTitle": zod_1.z.string(),
    "favicon": FaviconSchema,
    "paletteSettings": PaletteSettingsSchema,
    "helpLinkBaseUrl": zod_1.z.string(),
    "uiHelpBaseUrl": zod_1.z.string(),
    "enableHelpLinks": zod_1.z.boolean(),
    "whiteLabelingEnabled": zod_1.z.boolean(),
    "showNameVersion": zod_1.z.boolean(),
    "platformName": zod_1.z.string(),
    "platformVersion": zod_1.z.string(),
    "customCss": zod_1.z.string()
});
exports.WebDeliveryMethodNotificationTemplateSchema = WebDeliveryMethodNotificationTemplateSchema = zod_1.z.object({
    "additionalConfig": JsonNodeSchema,
    "body": zod_1.z.string(),
    "enabled": zod_1.z.boolean(),
    "subject": zod_1.z.string()
});
exports.VersionedEntityInfoSchema = VersionedEntityInfoSchema = zod_1.z.object({
    "externalId": EntityIdSchema,
    "path": zod_1.z.string()
});
exports.VersionLoadResultSchema = VersionLoadResultSchema = zod_1.z.object({
    "done": zod_1.z.boolean(),
    "error": EntityLoadErrorSchema,
    "result": zod_1.z.array(EntityTypeLoadResultSchema)
});
exports.VersionLoadRequestSchema = VersionLoadRequestSchema = zod_1.z.object({
    "type": zod_1.z.enum(["ENTITY_TYPE", "SINGLE_ENTITY"]),
    "versionId": zod_1.z.string()
});
exports.VersionLoadConfigSchema = VersionLoadConfigSchema = zod_1.z.object({
    "autoGenerateIntegrationKey": zod_1.z.boolean(),
    "loadAttributes": zod_1.z.boolean(),
    "loadCredentials": zod_1.z.boolean(),
    "loadGroupEntities": zod_1.z.boolean(),
    "loadPermissions": zod_1.z.boolean(),
    "loadRelations": zod_1.z.boolean()
});
exports.VersionCreationResultSchema = VersionCreationResultSchema = zod_1.z.object({
    "added": zod_1.z.number(),
    "done": zod_1.z.boolean(),
    "error": zod_1.z.string(),
    "modified": zod_1.z.number(),
    "removed": zod_1.z.number(),
    "version": EntityVersionSchema
});
exports.VersionCreateRequestSchema = VersionCreateRequestSchema = zod_1.z.object({
    "branch": zod_1.z.string(),
    "type": zod_1.z.enum(["COMPLEX", "SINGLE_ENTITY"]),
    "versionName": zod_1.z.string()
});
exports.VersionCreateConfigSchema = VersionCreateConfigSchema = zod_1.z.object({
    "saveAttributes": zod_1.z.boolean(),
    "saveCredentials": zod_1.z.boolean(),
    "saveGroupEntities": zod_1.z.boolean(),
    "savePermissions": zod_1.z.boolean(),
    "saveRelations": zod_1.z.boolean()
});
exports.UsersFilterSchema = UsersFilterSchema = zod_1.z.object({});
exports.UserRoleFilterSchema = UserRoleFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.UserNotificationSettingsSchema = UserNotificationSettingsSchema = zod_1.z.object({
    "prefs": zod_1.z.record(zod_1.z.string(), NotificationPrefSchema)
});
exports.UserListFilterSchema = UserListFilterSchema = zod_1.z.object({
    "usersIds": zod_1.z.array(zod_1.z.string())
});
exports.UserGroupListFilterSchema = UserGroupListFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.UserDashboardsInfoSchema = UserDashboardsInfoSchema = zod_1.z.object({
    "last": zod_1.z.array(LastVisitedDashboardInfoSchema),
    "starred": zod_1.z.array(StarredDashboardInfoSchema)
});
exports.UsageInfoSchema = UsageInfoSchema = zod_1.z.object({
    "alarms": zod_1.z.number(),
    "assets": zod_1.z.number(),
    "customers": zod_1.z.number(),
    "dashboards": zod_1.z.number(),
    "devices": zod_1.z.number(),
    "emails": zod_1.z.number(),
    "jsExecutions": zod_1.z.number(),
    "maxAlarms": zod_1.z.number(),
    "maxAssets": zod_1.z.number(),
    "maxCustomers": zod_1.z.number(),
    "maxDashboards": zod_1.z.number(),
    "maxDevices": zod_1.z.number(),
    "maxEmails": zod_1.z.number(),
    "maxJsExecutions": zod_1.z.number(),
    "maxSms": zod_1.z.number(),
    "maxTbelExecutions": zod_1.z.number(),
    "maxTransportMessages": zod_1.z.number(),
    "maxUsers": zod_1.z.number(),
    "sms": zod_1.z.number(),
    "smsEnabled": zod_1.z.boolean(),
    "tbelExecutions": zod_1.z.number(),
    "transportMessages": zod_1.z.number(),
    "users": zod_1.z.number()
});
exports.UpdateMessageSchema = UpdateMessageSchema = zod_1.z.object({
    "updateAvailable": zod_1.z.boolean(),
    "currentVersion": zod_1.z.string(),
    "latestVersion": zod_1.z.string(),
    "upgradeInstructionsUrl": zod_1.z.string(),
    "currentVersionReleaseNotesUrl": zod_1.z.string(),
    "latestVersionReleaseNotesUrl": zod_1.z.string()
});
exports.TwoFaProviderInfoSchema = TwoFaProviderInfoSchema = zod_1.z.object({
    "contact": zod_1.z.string(),
    "default": zod_1.z.boolean(),
    "minVerificationCodeSendPeriod": zod_1.z.number(),
    "type": zod_1.z.enum(["BACKUP_CODE", "EMAIL", "SMS", "TOTP"])
});
exports.TwoFaAccountConfigUpdateRequestSchema = TwoFaAccountConfigUpdateRequestSchema = zod_1.z.object({
    "useByDefault": zod_1.z.boolean()
});
exports.TwilioSmsProviderConfigurationSchema = TwilioSmsProviderConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.TotpTwoFaProviderConfigSchema = TotpTwoFaProviderConfigSchema = zod_1.z.object({
    "issuerName": zod_1.z.string()
});
exports.TotpTwoFaAccountConfigSchema = TotpTwoFaAccountConfigSchema = zod_1.z.object({
    "authUrl": zod_1.z.string(),
    "useByDefault": zod_1.z.boolean()
});
exports.ToServerRpcRequestSnmpCommunicationConfigSchema = ToServerRpcRequestSnmpCommunicationConfigSchema = zod_1.z.object({
    "mappings": zod_1.z.array(SnmpMappingSchema),
    "spec": zod_1.z.enum(["CLIENT_ATTRIBUTES_QUERYING", "SHARED_ATTRIBUTES_SETTING", "TELEMETRY_QUERYING", "TO_DEVICE_RPC_REQUEST", "TO_SERVER_RPC_REQUEST"])
});
exports.ToDeviceRpcRequestSnmpCommunicationConfigSchema = ToDeviceRpcRequestSnmpCommunicationConfigSchema = zod_1.z.object({
    "mappings": zod_1.z.array(SnmpMappingSchema),
    "spec": zod_1.z.enum(["CLIENT_ATTRIBUTES_QUERYING", "SHARED_ATTRIBUTES_SETTING", "TELEMETRY_QUERYING", "TO_DEVICE_RPC_REQUEST", "TO_SERVER_RPC_REQUEST"])
});
exports.ThingsboardErrorResponseSchema = ThingsboardErrorResponseSchema = zod_1.z.object({
    "subscriptionEntry": zod_1.z.enum(["ASSET_COUNT", "DEVICE_COUNT", "WHITE_LABELING"]),
    "subscriptionErrorCode": zod_1.z.enum(["FEATURE_DISABLED", "LIMIT_REACHED", "UNSUPPORTED_SOLUTION_TEMPLATE_PLAN"]),
    "subscriptionValue": JsonNodeSchema,
    "status": zod_1.z.number(),
    "message": zod_1.z.string(),
    "errorCode": zod_1.z.object({}),
    "timestamp": zod_1.z.string()
});
exports.ThingsboardCredentialsExpiredResponseSchema = ThingsboardCredentialsExpiredResponseSchema = zod_1.z.object({
    "subscriptionEntry": zod_1.z.enum(["ASSET_COUNT", "DEVICE_COUNT", "WHITE_LABELING"]),
    "subscriptionErrorCode": zod_1.z.enum(["FEATURE_DISABLED", "LIMIT_REACHED", "UNSUPPORTED_SOLUTION_TEMPLATE_PLAN"]),
    "subscriptionValue": JsonNodeSchema,
    "status": zod_1.z.number(),
    "message": zod_1.z.string(),
    "errorCode": zod_1.z.object({}),
    "timestamp": zod_1.z.string(),
    "resetToken": zod_1.z.string()
});
exports.TestSmsRequestSchema = TestSmsRequestSchema = zod_1.z.object({
    "providerConfiguration": SmsProviderConfigurationSchema,
    "numberTo": zod_1.z.string(),
    "message": zod_1.z.string()
});
exports.TenantSolutionTemplateInstructionsSchema = TenantSolutionTemplateInstructionsSchema = zod_1.z.object({
    "dashboardGroupId": EntityGroupIdSchema,
    "dashboardId": DashboardIdSchema,
    "publicId": CustomerIdSchema,
    "mainDashboardPublic": zod_1.z.boolean(),
    "details": zod_1.z.string()
});
exports.TenantSolutionTemplateInfoSchema = TenantSolutionTemplateInfoSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "title": zod_1.z.string(),
    "level": zod_1.z.enum(["MAKER", "PROTOTYPE", "STARTUP"]),
    "installTimeoutMs": zod_1.z.number(),
    "tenantTelemetryKeys": zod_1.z.array(zod_1.z.string()),
    "tenantAttributeKeys": zod_1.z.array(zod_1.z.string()),
    "previewImageUrl": zod_1.z.string(),
    "shortDescription": zod_1.z.string(),
    "installed": zod_1.z.boolean(),
    "videoPreviewImageUrl": zod_1.z.string(),
    "previewMp4Url": zod_1.z.string(),
    "previewWebmUrl": zod_1.z.string()
});
exports.TenantSolutionTemplateDetailsSchema = TenantSolutionTemplateDetailsSchema = zod_1.z.object({
    "description": zod_1.z.string(),
    "highlights": zod_1.z.string(),
    "imageUrls": zod_1.z.array(zod_1.z.string()),
    "installed": zod_1.z.boolean(),
    "id": zod_1.z.string(),
    "title": zod_1.z.string(),
    "level": zod_1.z.enum(["MAKER", "PROTOTYPE", "STARTUP"]),
    "installTimeoutMs": zod_1.z.number(),
    "tenantTelemetryKeys": zod_1.z.array(zod_1.z.string()),
    "tenantAttributeKeys": zod_1.z.array(zod_1.z.string())
});
exports.TenantAdministratorsFilterSchema = TenantAdministratorsFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.TelemetryQueryingSnmpCommunicationConfigSchema = TelemetryQueryingSnmpCommunicationConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.TelemetryMappingConfigurationSchema = TelemetryMappingConfigurationSchema = zod_1.z.object({
    "attribute": zod_1.z.array(zod_1.z.string()),
    "attributeLwm2m": zod_1.z.record(zod_1.z.string(), ObjectAttributesSchema),
    "keyName": zod_1.z.record(zod_1.z.string(), zod_1.z.string()),
    "observe": zod_1.z.array(zod_1.z.string()),
    "telemetry": zod_1.z.array(zod_1.z.string())
});
exports.TbResourceSchema = TbResourceSchema = zod_1.z.object({
    "descriptor": JsonNodeSchema,
    "link": zod_1.z.string(),
    "name": zod_1.z.string(),
    "preview": zod_1.z.string(),
    "public": zod_1.z.boolean(),
    "publicLink": zod_1.z.string(),
    "publicResourceKey": zod_1.z.string(),
    "id": TbResourceIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "title": zod_1.z.string(),
    "resourceType": zod_1.z.enum(["IMAGE", "JKS", "JS_MODULE", "LWM2M_MODEL", "PKCS_12"]),
    "resourceKey": zod_1.z.string(),
    "etag": zod_1.z.string(),
    "fileName": zod_1.z.string(),
    "data": zod_1.z.string()
});
exports.TbImageDeleteResultSchema = TbImageDeleteResultSchema = zod_1.z.object({
    "references": zod_1.z.record(zod_1.z.string(), zod_1.z.array(HasId_Of_objectSchema)),
    "success": zod_1.z.boolean(),
    "whiteLabelingList": zod_1.z.array(WhiteLabelingSchema)
});
exports.WhiteLabelingSchema = WhiteLabelingSchema = zod_1.z.object({
    "customerId": CustomerIdSchema,
    "domain": zod_1.z.string(),
    "settings": JsonNodeSchema,
    "tenantId": TenantIdSchema,
    "type": zod_1.z.enum(["GENERAL", "LOGIN", "MAIL_TEMPLATES"])
});
exports.SystemInfoSchema = SystemInfoSchema = zod_1.z.object({
    "monolith": zod_1.z.boolean(),
    "systemData": zod_1.z.array(SystemInfoDataSchema)
});
exports.SystemInfoDataSchema = SystemInfoDataSchema = zod_1.z.object({
    "serviceId": zod_1.z.string(),
    "serviceType": zod_1.z.string(),
    "cpuUsage": zod_1.z.number(),
    "cpuCount": zod_1.z.number(),
    "memoryUsage": zod_1.z.number(),
    "totalMemory": zod_1.z.number(),
    "discUsage": zod_1.z.number(),
    "totalDiscSpace": zod_1.z.number()
});
exports.SystemAdministratorsFilterSchema = SystemAdministratorsFilterSchema = zod_1.z.object({});
exports.StringFilterPredicateSchema = StringFilterPredicateSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.StatisticsEventFilterSchema = StatisticsEventFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.StateEntityOwnerFilterSchema = StateEntityOwnerFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.StarredDashboardInfoSchema = StarredDashboardInfoSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "title": zod_1.z.string(),
    "starredAt": zod_1.z.number()
});
exports.SpecificTimeScheduleSchema = SpecificTimeScheduleSchema = zod_1.z.object({
    "daysOfWeek": zod_1.z.array(zod_1.z.number()),
    "dynamicValue": DynamicValue_Of_stringSchema,
    "endsOn": zod_1.z.number(),
    "startsOn": zod_1.z.number(),
    "timezone": zod_1.z.string(),
    "type": zod_1.z.enum(["ANY_TIME", "CUSTOM", "SPECIFIC_TIME"])
});
exports.SolutionInstallResponseSchema = SolutionInstallResponseSchema = zod_1.z.object({
    "dashboardGroupId": EntityGroupIdSchema,
    "dashboardId": DashboardIdSchema,
    "publicId": CustomerIdSchema,
    "mainDashboardPublic": zod_1.z.boolean(),
    "success": zod_1.z.boolean(),
    "details": zod_1.z.string()
});
exports.SnmpDeviceTransportConfigurationSchema = SnmpDeviceTransportConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.SnmpDeviceProfileTransportConfigurationSchema = SnmpDeviceProfileTransportConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.SnmpCommunicationConfigSchema = SnmpCommunicationConfigSchema = zod_1.z.object({
    "spec": zod_1.z.enum(["CLIENT_ATTRIBUTES_QUERYING", "SHARED_ATTRIBUTES_SETTING", "TELEMETRY_QUERYING", "TO_DEVICE_RPC_REQUEST", "TO_SERVER_RPC_REQUEST"])
});
exports.SmsTwoFaProviderConfigSchema = SmsTwoFaProviderConfigSchema = zod_1.z.object({
    "smsVerificationMessageTemplate": zod_1.z.string(),
    "verificationCodeLifetime": zod_1.z.number()
});
exports.SmsTwoFaAccountConfigSchema = SmsTwoFaAccountConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.SmsProviderConfigurationSchema = SmsProviderConfigurationSchema = zod_1.z.object({});
exports.SmsDeliveryMethodNotificationTemplateSchema = SmsDeliveryMethodNotificationTemplateSchema = zod_1.z.object({
    "body": zod_1.z.string(),
    "enabled": zod_1.z.boolean()
});
exports.SmppSmsProviderConfigurationSchema = SmppSmsProviderConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.SlackNotificationTargetConfigSchema = SlackNotificationTargetConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.SlackNotificationDeliveryMethodConfigSchema = SlackNotificationDeliveryMethodConfigSchema = zod_1.z.object({
    "botToken": zod_1.z.string()
});
exports.SlackDeliveryMethodNotificationTemplateSchema = SlackDeliveryMethodNotificationTemplateSchema = zod_1.z.object({
    "body": zod_1.z.string(),
    "enabled": zod_1.z.boolean()
});
exports.SlackConversationSchema = SlackConversationSchema = zod_1.z.object({
    "email": zod_1.z.string(),
    "id": zod_1.z.string(),
    "name": zod_1.z.string(),
    "title": zod_1.z.string(),
    "type": zod_1.z.enum(["DIRECT", "PRIVATE_CHANNEL", "PUBLIC_CHANNEL"]),
    "wholeName": zod_1.z.string()
});
exports.SingleEntityVersionLoadRequestSchema = SingleEntityVersionLoadRequestSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.SingleEntityVersionCreateRequestSchema = SingleEntityVersionCreateRequestSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.SingleEntityFilterSchema = SingleEntityFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.SimpleAlarmConditionSpecSchema = SimpleAlarmConditionSpecSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.SignUpSelfRegistrationParamsSchema = SignUpSelfRegistrationParamsSchema = zod_1.z.object({
    "signUpTextMessage": zod_1.z.string(),
    "captchaSiteKey": zod_1.z.string(),
    "captchaVersion": zod_1.z.string(),
    "captchaAction": zod_1.z.string(),
    "showPrivacyPolicy": zod_1.z.boolean(),
    "showTermsOfUse": zod_1.z.boolean()
});
exports.SignUpRequestSchema = SignUpRequestSchema = zod_1.z.object({
    "firstName": zod_1.z.string(),
    "lastName": zod_1.z.string(),
    "email": zod_1.z.string(),
    "password": zod_1.z.string(),
    "recaptchaResponse": zod_1.z.string(),
    "pkgName": zod_1.z.string(),
    "appSecret": zod_1.z.string()
});
exports.SharedAttributesSettingSnmpCommunicationConfigSchema = SharedAttributesSettingSnmpCommunicationConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.ShareGroupRequestSchema = ShareGroupRequestSchema = zod_1.z.object({
    "allUserGroup": zod_1.z.boolean(),
    "ownerId": EntityIdSchema,
    "userGroupId": EntityGroupIdSchema,
    "readElseWrite": zod_1.z.boolean(),
    "roleIds": zod_1.z.array(RoleIdSchema)
});
exports.SelfRegistrationParamsSchema = SelfRegistrationParamsSchema = zod_1.z.object({
    "adminSettingsId": zod_1.z.string(),
    "signUpTextMessage": zod_1.z.string(),
    "captchaSiteKey": zod_1.z.string(),
    "captchaVersion": zod_1.z.string(),
    "captchaAction": zod_1.z.string(),
    "showPrivacyPolicy": zod_1.z.boolean(),
    "showTermsOfUse": zod_1.z.boolean(),
    "domainName": zod_1.z.string(),
    "captchaSecretKey": zod_1.z.string(),
    "privacyPolicy": zod_1.z.string(),
    "termsOfUse": zod_1.z.string(),
    "notificationEmail": zod_1.z.string(),
    "defaultDashboardId": zod_1.z.string(),
    "defaultDashboardFullscreen": zod_1.z.boolean(),
    "permissions": zod_1.z.array(GroupPermissionSchema),
    "pkgName": zod_1.z.string(),
    "appSecret": zod_1.z.string(),
    "appScheme": zod_1.z.string(),
    "appHost": zod_1.z.string()
});
exports.SecuritySettingsSchema = SecuritySettingsSchema = zod_1.z.object({
    "passwordPolicy": UserPasswordPolicySchema,
    "maxFailedLoginAttempts": zod_1.z.number(),
    "userLockoutNotificationEmail": zod_1.z.string()
});
exports.UserPasswordPolicySchema = UserPasswordPolicySchema = zod_1.z.object({
    "allowWhitespaces": zod_1.z.boolean(),
    "forceUserToResetPasswordIfNotValid": zod_1.z.boolean(),
    "maximumLength": zod_1.z.number(),
    "minimumDigits": zod_1.z.number(),
    "minimumLength": zod_1.z.number(),
    "minimumLowercaseLetters": zod_1.z.number(),
    "minimumSpecialCharacters": zod_1.z.number(),
    "minimumUppercaseLetters": zod_1.z.number(),
    "passwordExpirationPeriodDays": zod_1.z.number(),
    "passwordReuseFrequencyDays": zod_1.z.number()
});
exports.SchedulerEventWithCustomerInfoSchema = SchedulerEventWithCustomerInfoSchema = zod_1.z.object({
    "id": SchedulerEventIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "originatorId": EntityIdSchema,
    "ownerId": EntityIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.string(),
    "schedule": JsonNodeSchema,
    "additionalInfo": JsonNodeSchema,
    "customerTitle": zod_1.z.string(),
    "customerIsPublic": zod_1.z.object({})
});
exports.SchedulerEventFilterSchema = SchedulerEventFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.SchedulerEventSchema = SchedulerEventSchema = zod_1.z.object({
    "id": SchedulerEventIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "originatorId": EntityIdSchema,
    "ownerId": EntityIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.string(),
    "schedule": JsonNodeSchema,
    "configuration": JsonNodeSchema,
    "additionalInfo": JsonNodeSchema
});
exports.SaveOtaPackageInfoRequestSchema = SaveOtaPackageInfoRequestSchema = zod_1.z.object({
    "id": OtaPackageIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "deviceProfileId": DeviceProfileIdSchema,
    "type": zod_1.z.enum(["FIRMWARE", "SOFTWARE"]),
    "title": zod_1.z.string(),
    "version": zod_1.z.string(),
    "tag": zod_1.z.string(),
    "url": zod_1.z.string(),
    "hasData": zod_1.z.boolean(),
    "fileName": zod_1.z.string(),
    "contentType": zod_1.z.string(),
    "checksumAlgorithm": zod_1.z.enum(["CRC32", "MD5", "MURMUR3_128", "MURMUR3_32", "SHA256", "SHA384", "SHA512"]),
    "checksum": zod_1.z.string(),
    "dataSize": zod_1.z.number(),
    "usesUrl": zod_1.z.boolean(),
    "additionalInfo": JsonNodeSchema
});
exports.SaveDeviceWithCredentialsRequestSchema = SaveDeviceWithCredentialsRequestSchema = zod_1.z.object({
    "device": DeviceSchema,
    "credentials": DeviceCredentialsSchema
});
exports.RuleNodeDebugEventFilterSchema = RuleNodeDebugEventFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.RuleEngineComponentLifecycleEventNotificationRuleTriggerConfigSchema = RuleEngineComponentLifecycleEventNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.RuleChainOutputLabelsUsageSchema = RuleChainOutputLabelsUsageSchema = zod_1.z.object({
    "ruleChainId": RuleChainIdSchema,
    "ruleNodeId": RuleNodeIdSchema,
    "ruleChainName": zod_1.z.string(),
    "ruleNodeName": zod_1.z.string(),
    "labels": zod_1.z.array(zod_1.z.string())
});
exports.RuleChainImportResultSchema = RuleChainImportResultSchema = zod_1.z.object({
    "error": zod_1.z.string(),
    "ruleChainId": RuleChainIdSchema,
    "ruleChainName": zod_1.z.string(),
    "updated": zod_1.z.boolean()
});
exports.RuleChainExportDataSchema = RuleChainExportDataSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.RuleChainDebugEventFilterSchema = RuleChainDebugEventFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.RuleChainDataSchema = RuleChainDataSchema = zod_1.z.object({
    "ruleChains": zod_1.z.array(RuleChainSchema),
    "metadata": zod_1.z.array(RuleChainMetaDataSchema)
});
exports.RuleChainMetaDataSchema = RuleChainMetaDataSchema = zod_1.z.object({
    "ruleChainId": RuleChainIdSchema,
    "firstNodeIndex": zod_1.z.number(),
    "nodes": zod_1.z.array(RuleNodeSchema),
    "connections": zod_1.z.array(NodeConnectionInfoSchema),
    "ruleChainConnections": zod_1.z.array(RuleChainConnectionInfoSchema)
});
exports.RuleNodeSchema = RuleNodeSchema = zod_1.z.object({
    "externalId": RuleNodeIdSchema,
    "id": RuleNodeIdSchema,
    "createdTime": zod_1.z.number(),
    "ruleChainId": RuleChainIdSchema,
    "type": zod_1.z.string(),
    "name": zod_1.z.string(),
    "debugMode": zod_1.z.boolean(),
    "singletonMode": zod_1.z.boolean(),
    "configurationVersion": zod_1.z.number(),
    "configuration": JsonNodeSchema,
    "additionalInfo": JsonNodeSchema
});
exports.RuleChainConnectionInfoSchema = RuleChainConnectionInfoSchema = zod_1.z.object({
    "fromIndex": zod_1.z.number(),
    "targetRuleChainId": RuleChainIdSchema,
    "additionalInfo": JsonNodeSchema,
    "type": zod_1.z.string()
});
exports.RpcSchema = RpcSchema = zod_1.z.object({
    "id": RpcIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "deviceId": DeviceIdSchema,
    "expirationTime": zod_1.z.number(),
    "request": JsonNodeSchema,
    "response": JsonNodeSchema,
    "status": zod_1.z.enum(["DELETED", "DELIVERED", "EXPIRED", "FAILED", "QUEUED", "SENT", "SUCCESSFUL", "TIMEOUT"]),
    "additionalInfo": JsonNodeSchema
});
exports.RpcIdSchema = RpcIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["RPC"])
});
exports.ResponseEntitySchema = ResponseEntitySchema = zod_1.z.object({
    "body": zod_1.z.object({}),
    "statusCode": zod_1.z.enum(["ACCEPTED", "ALREADY_REPORTED", "BAD_GATEWAY", "BAD_REQUEST", "BANDWIDTH_LIMIT_EXCEEDED", "CHECKPOINT", "CONFLICT", "CONTINUE", "CREATED", "DESTINATION_LOCKED", "EXPECTATION_FAILED", "FAILED_DEPENDENCY", "FORBIDDEN", "FOUND", "GATEWAY_TIMEOUT", "GONE", "HTTP_VERSION_NOT_SUPPORTED", "IM_USED", "INSUFFICIENT_SPACE_ON_RESOURCE", "INSUFFICIENT_STORAGE", "INTERNAL_SERVER_ERROR", "I_AM_A_TEAPOT", "LENGTH_REQUIRED", "LOCKED", "LOOP_DETECTED", "METHOD_FAILURE", "METHOD_NOT_ALLOWED", "MOVED_PERMANENTLY", "MOVED_TEMPORARILY", "MULTIPLE_CHOICES", "MULTI_STATUS", "NETWORK_AUTHENTICATION_REQUIRED", "NON_AUTHORITATIVE_INFORMATION", "NOT_ACCEPTABLE", "NOT_EXTENDED", "NOT_FOUND", "NOT_IMPLEMENTED", "NOT_MODIFIED", "NO_CONTENT", "OK", "PARTIAL_CONTENT", "PAYLOAD_TOO_LARGE", "PAYMENT_REQUIRED", "PERMANENT_REDIRECT", "PRECONDITION_FAILED", "PRECONDITION_REQUIRED", "PROCESSING", "PROXY_AUTHENTICATION_REQUIRED", "REQUESTED_RANGE_NOT_SATISFIABLE", "REQUEST_ENTITY_TOO_LARGE", "REQUEST_HEADER_FIELDS_TOO_LARGE", "REQUEST_TIMEOUT", "REQUEST_URI_TOO_LONG", "RESET_CONTENT", "SEE_OTHER", "SERVICE_UNAVAILABLE", "SWITCHING_PROTOCOLS", "TEMPORARY_REDIRECT", "TOO_EARLY", "TOO_MANY_REQUESTS", "UNAUTHORIZED", "UNAVAILABLE_FOR_LEGAL_REASONS", "UNPROCESSABLE_ENTITY", "UNSUPPORTED_MEDIA_TYPE", "UPGRADE_REQUIRED", "URI_TOO_LONG", "USE_PROXY", "VARIANT_ALSO_NEGOTIATES"]),
    "statusCodeValue": zod_1.z.number()
});
exports.ResourceSchema = ResourceSchema = zod_1.z.object({
    "description": zod_1.z.string(),
    "file": zod_1.z.string(),
    "filename": zod_1.z.string(),
    "inputStream": InputStreamSchema,
    "open": zod_1.z.boolean(),
    "readable": zod_1.z.boolean(),
    "uri": zod_1.z.string(),
    "url": zod_1.z.string()
});
exports.ResetPasswordRequestSchema = ResetPasswordRequestSchema = zod_1.z.object({
    "resetToken": zod_1.z.string(),
    "password": zod_1.z.string()
});
exports.ResetPasswordEmailRequestSchema = ResetPasswordEmailRequestSchema = zod_1.z.object({
    "email": zod_1.z.string()
});
exports.RepositorySettingsInfoSchema = RepositorySettingsInfoSchema = zod_1.z.object({
    "configured": zod_1.z.boolean(),
    "readOnly": zod_1.z.boolean()
});
exports.RepositorySettingsSchema = RepositorySettingsSchema = zod_1.z.object({
    "authMethod": zod_1.z.enum(["PRIVATE_KEY", "USERNAME_PASSWORD"]),
    "defaultBranch": zod_1.z.string(),
    "password": zod_1.z.string(),
    "privateKey": zod_1.z.string(),
    "privateKeyFileName": zod_1.z.string(),
    "privateKeyPassword": zod_1.z.string(),
    "readOnly": zod_1.z.boolean(),
    "repositoryUri": zod_1.z.string(),
    "showMergeCommits": zod_1.z.boolean(),
    "username": zod_1.z.string()
});
exports.ReportConfigSchema = ReportConfigSchema = zod_1.z.object({
    "baseUrl": zod_1.z.string(),
    "dashboardId": zod_1.z.string(),
    "namePattern": zod_1.z.string(),
    "state": zod_1.z.string(),
    "timewindow": JsonNodeSchema,
    "timezone": zod_1.z.string(),
    "type": zod_1.z.string(),
    "useCurrentUserCredentials": zod_1.z.boolean(),
    "useDashboardTimewindow": zod_1.z.boolean(),
    "userId": zod_1.z.string()
});
exports.RepeatingAlarmConditionSpecSchema = RepeatingAlarmConditionSpecSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.RelationsQueryFilterSchema = RelationsQueryFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.RawDataEventFilterSchema = RawDataEventFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.RateLimitsNotificationRuleTriggerConfigSchema = RateLimitsNotificationRuleTriggerConfigSchema = zod_1.z.object({
    "apis": zod_1.z.array(zod_1.z.enum(["CASSANDRA_QUERIES", "ENTITY_EXPORT", "ENTITY_IMPORT", "INTEGRATION_MSGS_PER_DEVICE", "INTEGRATION_MSGS_PER_TENANT", "NOTIFICATION_REQUESTS", "NOTIFICATION_REQUESTS_PER_RULE", "PASSWORD_RESET", "REPORTS", "REST_REQUESTS_PER_CUSTOMER", "REST_REQUESTS_PER_TENANT", "TRANSPORT_MESSAGES_PER_DEVICE", "TRANSPORT_MESSAGES_PER_TENANT", "TWO_FA_VERIFICATION_CODE_CHECK", "TWO_FA_VERIFICATION_CODE_SEND", "WS_UPDATES_PER_SESSION"])),
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
exports.RPKLwM2MBootstrapServerCredentialSchema = RPKLwM2MBootstrapServerCredentialSchema = zod_1.z.object({
    "shortServerId": zod_1.z.number(),
    "bootstrapServerIs": zod_1.z.boolean(),
    "host": zod_1.z.string(),
    "port": zod_1.z.number(),
    "clientHoldOffTime": zod_1.z.number(),
    "serverPublicKey": zod_1.z.string(),
    "serverCertificate": zod_1.z.string(),
    "bootstrapServerAccountTimeout": zod_1.z.number(),
    "lifetime": zod_1.z.number(),
    "defaultMinPeriod": zod_1.z.number(),
    "notifIfDisabled": zod_1.z.boolean(),
    "binding": zod_1.z.string()
});
exports.ProtoTransportPayloadConfigurationSchema = ProtoTransportPayloadConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.PowerSavingConfigurationSchema = PowerSavingConfigurationSchema = zod_1.z.object({
    "edrxCycle": zod_1.z.number(),
    "pagingTransmissionWindow": zod_1.z.number(),
    "powerMode": zod_1.z.enum(["DRX", "E_DRX", "PSM"]),
    "psmActivityTimer": zod_1.z.number()
});
exports.PlatformUsersNotificationTargetConfigSchema = PlatformUsersNotificationTargetConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.PlatformTwoFaSettingsSchema = PlatformTwoFaSettingsSchema = zod_1.z.object({
    "maxVerificationFailuresBeforeUserLockout": zod_1.z.number(),
    "minVerificationCodeSendPeriod": zod_1.z.number(),
    "providers": zod_1.z.array(TwoFaProviderConfigSchema),
    "totalAllowedTimeForVerification": zod_1.z.number(),
    "useSystemTwoFactorAuthSettings": zod_1.z.boolean(),
    "verificationCodeCheckRateLimit": zod_1.z.string()
});
exports.TwoFaProviderConfigSchema = TwoFaProviderConfigSchema = zod_1.z.object({});
exports.PageData_Of_WidgetsBundleSchema = PageData_Of_WidgetsBundleSchema = zod_1.z.object({
    "data": zod_1.z.array(WidgetsBundleSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.WidgetsBundleSchema = WidgetsBundleSchema = zod_1.z.object({
    "id": WidgetsBundleIdSchema,
    "createdTime": zod_1.z.number(),
    "name": zod_1.z.string(),
    "tenantId": TenantIdSchema,
    "alias": zod_1.z.string(),
    "title": zod_1.z.string(),
    "image": zod_1.z.string(),
    "description": zod_1.z.string(),
    "order": zod_1.z.number()
});
exports.WidgetsBundleIdSchema = WidgetsBundleIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["WIDGETS_BUNDLE"])
});
exports.PageData_Of_WidgetTypeInfoSchema = PageData_Of_WidgetTypeInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(WidgetTypeInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.WidgetTypeInfoSchema = WidgetTypeInfoSchema = zod_1.z.object({
    "id": WidgetTypeIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "fqn": zod_1.z.string(),
    "name": zod_1.z.string(),
    "deprecated": zod_1.z.boolean(),
    "image": zod_1.z.string(),
    "description": zod_1.z.string(),
    "tags": zod_1.z.array(zod_1.z.string()),
    "widgetType": zod_1.z.string()
});
exports.WidgetTypeIdSchema = WidgetTypeIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["WIDGET_TYPE"])
});
exports.PageData_Of_UserSchema = PageData_Of_UserSchema = zod_1.z.object({
    "data": zod_1.z.array(UserSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.UserSchema = UserSchema = zod_1.z.object({
    "id": UserIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "email": zod_1.z.string(),
    "name": zod_1.z.string(),
    "authority": zod_1.z.enum(["CUSTOMER_USER", "PRE_VERIFICATION_TOKEN", "REFRESH_TOKEN", "SYS_ADMIN", "TENANT_ADMIN"]),
    "firstName": zod_1.z.string(),
    "lastName": zod_1.z.string(),
    "phone": zod_1.z.string(),
    "additionalInfo": JsonNodeSchema,
    "ownerId": EntityIdSchema
});
exports.PageData_Of_UserInfoSchema = PageData_Of_UserInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(UserInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.UserInfoSchema = UserInfoSchema = zod_1.z.object({
    "id": UserIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "email": zod_1.z.string(),
    "name": zod_1.z.string(),
    "authority": zod_1.z.enum(["CUSTOMER_USER", "PRE_VERIFICATION_TOKEN", "REFRESH_TOKEN", "SYS_ADMIN", "TENANT_ADMIN"]),
    "firstName": zod_1.z.string(),
    "lastName": zod_1.z.string(),
    "phone": zod_1.z.string(),
    "additionalInfo": JsonNodeSchema,
    "ownerId": EntityIdSchema,
    "ownerName": zod_1.z.string(),
    "groups": zod_1.z.array(EntityInfoSchema)
});
exports.PageData_Of_UserEmailInfoSchema = PageData_Of_UserEmailInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(UserEmailInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.UserEmailInfoSchema = UserEmailInfoSchema = zod_1.z.object({
    "id": UserIdSchema,
    "email": zod_1.z.string(),
    "firstName": zod_1.z.string(),
    "lastName": zod_1.z.string()
});
exports.PageData_Of_TenantSchema = PageData_Of_TenantSchema = zod_1.z.object({
    "data": zod_1.z.array(TenantSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.TenantSchema = TenantSchema = zod_1.z.object({
    "id": TenantIdSchema,
    "createdTime": zod_1.z.number(),
    "title": zod_1.z.string(),
    "name": zod_1.z.string(),
    "region": zod_1.z.string(),
    "tenantProfileId": TenantProfileIdSchema,
    "country": zod_1.z.string(),
    "state": zod_1.z.string(),
    "city": zod_1.z.string(),
    "address": zod_1.z.string(),
    "address2": zod_1.z.string(),
    "zip": zod_1.z.string(),
    "phone": zod_1.z.string(),
    "email": zod_1.z.string(),
    "additionalInfo": JsonNodeSchema
});
exports.PageData_Of_TenantProfileSchema = PageData_Of_TenantProfileSchema = zod_1.z.object({
    "data": zod_1.z.array(TenantProfileSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.TenantProfileSchema = TenantProfileSchema = zod_1.z.object({
    "default": zod_1.z.boolean(),
    "id": TenantProfileIdSchema,
    "createdTime": zod_1.z.number(),
    "name": zod_1.z.string(),
    "description": zod_1.z.string(),
    "isolatedTbRuleEngine": zod_1.z.boolean(),
    "profileData": TenantProfileDataSchema
});
exports.TenantProfileDataSchema = TenantProfileDataSchema = zod_1.z.object({
    "configuration": TenantProfileConfigurationSchema,
    "queueConfiguration": zod_1.z.array(TenantProfileQueueConfigurationSchema)
});
exports.TenantProfileQueueConfigurationSchema = TenantProfileQueueConfigurationSchema = zod_1.z.object({
    "additionalInfo": JsonNodeSchema,
    "consumerPerPartition": zod_1.z.boolean(),
    "name": zod_1.z.string(),
    "packProcessingTimeout": zod_1.z.number(),
    "partitions": zod_1.z.number(),
    "pollInterval": zod_1.z.number(),
    "processingStrategy": ProcessingStrategySchema,
    "submitStrategy": SubmitStrategySchema,
    "topic": zod_1.z.string()
});
exports.TenantProfileConfigurationSchema = TenantProfileConfigurationSchema = zod_1.z.object({});
exports.PageData_Of_TenantInfoSchema = PageData_Of_TenantInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(TenantInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.TenantInfoSchema = TenantInfoSchema = zod_1.z.object({
    "id": TenantIdSchema,
    "createdTime": zod_1.z.number(),
    "title": zod_1.z.string(),
    "name": zod_1.z.string(),
    "region": zod_1.z.string(),
    "tenantProfileId": TenantProfileIdSchema,
    "country": zod_1.z.string(),
    "state": zod_1.z.string(),
    "city": zod_1.z.string(),
    "address": zod_1.z.string(),
    "address2": zod_1.z.string(),
    "zip": zod_1.z.string(),
    "phone": zod_1.z.string(),
    "email": zod_1.z.string(),
    "additionalInfo": JsonNodeSchema,
    "tenantProfileName": zod_1.z.string()
});
exports.TenantProfileIdSchema = TenantProfileIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["TENANT_PROFILE"])
});
exports.PageData_Of_TbResourceInfoSchema = PageData_Of_TbResourceInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(TbResourceInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.TbResourceInfoSchema = TbResourceInfoSchema = zod_1.z.object({
    "descriptor": JsonNodeSchema,
    "link": zod_1.z.string(),
    "name": zod_1.z.string(),
    "public": zod_1.z.boolean(),
    "publicLink": zod_1.z.string(),
    "publicResourceKey": zod_1.z.string(),
    "id": TbResourceIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "title": zod_1.z.string(),
    "resourceType": zod_1.z.enum(["IMAGE", "JKS", "JS_MODULE", "LWM2M_MODEL", "PKCS_12"]),
    "resourceKey": zod_1.z.string(),
    "etag": zod_1.z.string(),
    "fileName": zod_1.z.string()
});
exports.TbResourceIdSchema = TbResourceIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["TB_RESOURCE"])
});
exports.PageData_Of_ShortEntityViewSchema = PageData_Of_ShortEntityViewSchema = zod_1.z.object({
    "data": zod_1.z.array(ShortEntityViewSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.ShortEntityViewSchema = ShortEntityViewSchema = zod_1.z.object({
    "id": EntityIdSchema,
    "name": zod_1.z.string()
});
exports.PageData_Of_SchedulerEventInfoSchema = PageData_Of_SchedulerEventInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(SchedulerEventInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.SchedulerEventInfoSchema = SchedulerEventInfoSchema = zod_1.z.object({
    "id": SchedulerEventIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "originatorId": EntityIdSchema,
    "ownerId": EntityIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.string(),
    "schedule": JsonNodeSchema,
    "additionalInfo": JsonNodeSchema
});
exports.SchedulerEventIdSchema = SchedulerEventIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["SCHEDULER_EVENT"])
});
exports.PageData_Of_RuleChainSchema = PageData_Of_RuleChainSchema = zod_1.z.object({
    "data": zod_1.z.array(RuleChainSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.RuleChainSchema = RuleChainSchema = zod_1.z.object({
    "additionalInfo": JsonNodeSchema,
    "id": RuleChainIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.enum(["CORE", "EDGE"]),
    "firstRuleNodeId": RuleNodeIdSchema,
    "root": zod_1.z.boolean(),
    "debugMode": zod_1.z.boolean(),
    "configuration": JsonNodeSchema
});
exports.RuleNodeIdSchema = RuleNodeIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["RULE_NODE"])
});
exports.PageData_Of_RoleSchema = PageData_Of_RoleSchema = zod_1.z.object({
    "data": zod_1.z.array(RoleSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_QueueSchema = PageData_Of_QueueSchema = zod_1.z.object({
    "data": zod_1.z.array(QueueSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.QueueSchema = QueueSchema = zod_1.z.object({
    "additionalInfo": JsonNodeSchema,
    "consumerPerPartition": zod_1.z.boolean(),
    "createdTime": zod_1.z.number(),
    "id": QueueIdSchema,
    "name": zod_1.z.string(),
    "packProcessingTimeout": zod_1.z.number(),
    "partitions": zod_1.z.number(),
    "pollInterval": zod_1.z.number(),
    "processingStrategy": ProcessingStrategySchema,
    "submitStrategy": SubmitStrategySchema,
    "tenantId": TenantIdSchema,
    "topic": zod_1.z.string()
});
exports.SubmitStrategySchema = SubmitStrategySchema = zod_1.z.object({
    "batchSize": zod_1.z.number(),
    "type": zod_1.z.enum(["BATCH", "BURST", "SEQUENTIAL", "SEQUENTIAL_BY_ORIGINATOR", "SEQUENTIAL_BY_TENANT"])
});
exports.ProcessingStrategySchema = ProcessingStrategySchema = zod_1.z.object({
    "failurePercentage": zod_1.z.number(),
    "maxPauseBetweenRetries": zod_1.z.number(),
    "pauseBetweenRetries": zod_1.z.number(),
    "retries": zod_1.z.number(),
    "type": zod_1.z.enum(["RETRY_ALL", "RETRY_FAILED", "RETRY_FAILED_AND_TIMED_OUT", "RETRY_TIMED_OUT", "SKIP_ALL_FAILURES", "SKIP_ALL_FAILURES_AND_TIMED_OUT"])
});
exports.QueueIdSchema = QueueIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["QUEUE"])
});
exports.PageData_Of_OtaPackageInfoSchema = PageData_Of_OtaPackageInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(OtaPackageInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_NotificationSchema = PageData_Of_NotificationSchema = zod_1.z.object({
    "data": zod_1.z.array(NotificationSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_NotificationTemplateSchema = PageData_Of_NotificationTemplateSchema = zod_1.z.object({
    "data": zod_1.z.array(NotificationTemplateSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_NotificationTargetSchema = PageData_Of_NotificationTargetSchema = zod_1.z.object({
    "data": zod_1.z.array(NotificationTargetSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_NotificationRuleInfoSchema = PageData_Of_NotificationRuleInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(NotificationRuleInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_NotificationRequestInfoSchema = PageData_Of_NotificationRequestInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(NotificationRequestInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_IntegrationSchema = PageData_Of_IntegrationSchema = zod_1.z.object({
    "data": zod_1.z.array(IntegrationSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_IntegrationInfoSchema = PageData_Of_IntegrationInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(IntegrationInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_EventInfoSchema = PageData_Of_EventInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(EventInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_EntityViewSchema = PageData_Of_EntityViewSchema = zod_1.z.object({
    "data": zod_1.z.array(EntityViewSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_EntityViewInfoSchema = PageData_Of_EntityViewInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(EntityViewInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_EntityVersionSchema = PageData_Of_EntityVersionSchema = zod_1.z.object({
    "data": zod_1.z.array(EntityVersionSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_EntitySubtypeSchema = PageData_Of_EntitySubtypeSchema = zod_1.z.object({
    "data": zod_1.z.array(EntitySubtypeSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_EntityInfoSchema = PageData_Of_EntityInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(EntityInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_EntityGroupInfoSchema = PageData_Of_EntityGroupInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(EntityGroupInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_EntityDataSchema = PageData_Of_EntityDataSchema = zod_1.z.object({
    "data": zod_1.z.array(EntityDataSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_EdgeSchema = PageData_Of_EdgeSchema = zod_1.z.object({
    "data": zod_1.z.array(EdgeSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_EdgeInfoSchema = PageData_Of_EdgeInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(EdgeInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_EdgeEventSchema = PageData_Of_EdgeEventSchema = zod_1.z.object({
    "data": zod_1.z.array(EdgeEventSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_DeviceSchema = PageData_Of_DeviceSchema = zod_1.z.object({
    "data": zod_1.z.array(DeviceSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_DeviceProfileSchema = PageData_Of_DeviceProfileSchema = zod_1.z.object({
    "data": zod_1.z.array(DeviceProfileSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_DeviceProfileInfoSchema = PageData_Of_DeviceProfileInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(DeviceProfileInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_DeviceInfoSchema = PageData_Of_DeviceInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(DeviceInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_DashboardInfoSchema = PageData_Of_DashboardInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(DashboardInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_CustomerSchema = PageData_Of_CustomerSchema = zod_1.z.object({
    "data": zod_1.z.array(CustomerSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_CustomerInfoSchema = PageData_Of_CustomerInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(CustomerInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_ConverterSchema = PageData_Of_ConverterSchema = zod_1.z.object({
    "data": zod_1.z.array(ConverterSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_ContactBased_Of_objectSchema = PageData_Of_ContactBased_Of_objectSchema = zod_1.z.object({
    "data": zod_1.z.array(ContactBased_Of_objectSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_BlobEntityWithCustomerInfoSchema = PageData_Of_BlobEntityWithCustomerInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(BlobEntityWithCustomerInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_AuditLogSchema = PageData_Of_AuditLogSchema = zod_1.z.object({
    "data": zod_1.z.array(AuditLogSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_AssetSchema = PageData_Of_AssetSchema = zod_1.z.object({
    "data": zod_1.z.array(AssetSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_AssetProfileSchema = PageData_Of_AssetProfileSchema = zod_1.z.object({
    "data": zod_1.z.array(AssetProfileSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_AssetProfileInfoSchema = PageData_Of_AssetProfileInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(AssetProfileInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_AssetInfoSchema = PageData_Of_AssetInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(AssetInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_AlarmInfoSchema = PageData_Of_AlarmInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(AlarmInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_AlarmDataSchema = PageData_Of_AlarmDataSchema = zod_1.z.object({
    "data": zod_1.z.array(AlarmDataSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PageData_Of_AlarmCommentInfoSchema = PageData_Of_AlarmCommentInfoSchema = zod_1.z.object({
    "data": zod_1.z.array(AlarmCommentInfoSchema),
    "totalPages": zod_1.z.number(),
    "totalElements": zod_1.z.number(),
    "hasNext": zod_1.z.boolean()
});
exports.PSKLwM2MBootstrapServerCredentialSchema = PSKLwM2MBootstrapServerCredentialSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.OtherConfigurationSchema = OtherConfigurationSchema = zod_1.z.object({
    "clientOnlyObserveAfterConnect": zod_1.z.number(),
    "edrxCycle": zod_1.z.number(),
    "fwUpdateResource": zod_1.z.string(),
    "fwUpdateStrategy": zod_1.z.number(),
    "pagingTransmissionWindow": zod_1.z.number(),
    "powerMode": zod_1.z.enum(["DRX", "E_DRX", "PSM"]),
    "psmActivityTimer": zod_1.z.number(),
    "swUpdateResource": zod_1.z.string(),
    "swUpdateStrategy": zod_1.z.number()
});
exports.OtaPackageInfoSchema = OtaPackageInfoSchema = zod_1.z.object({
    "id": OtaPackageIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "deviceProfileId": DeviceProfileIdSchema,
    "type": zod_1.z.enum(["FIRMWARE", "SOFTWARE"]),
    "title": zod_1.z.string(),
    "version": zod_1.z.string(),
    "tag": zod_1.z.string(),
    "url": zod_1.z.string(),
    "hasData": zod_1.z.boolean(),
    "fileName": zod_1.z.string(),
    "contentType": zod_1.z.string(),
    "checksumAlgorithm": zod_1.z.enum(["CRC32", "MD5", "MURMUR3_128", "MURMUR3_32", "SHA256", "SHA384", "SHA512"]),
    "checksum": zod_1.z.string(),
    "dataSize": zod_1.z.number(),
    "additionalInfo": JsonNodeSchema
});
exports.OtaPackageSchema = OtaPackageSchema = zod_1.z.object({
    "id": OtaPackageIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "deviceProfileId": DeviceProfileIdSchema,
    "type": zod_1.z.enum(["FIRMWARE", "SOFTWARE"]),
    "title": zod_1.z.string(),
    "version": zod_1.z.string(),
    "tag": zod_1.z.string(),
    "url": zod_1.z.string(),
    "hasData": zod_1.z.boolean(),
    "fileName": zod_1.z.string(),
    "contentType": zod_1.z.string(),
    "checksumAlgorithm": zod_1.z.enum(["CRC32", "MD5", "MURMUR3_128", "MURMUR3_32", "SHA256", "SHA384", "SHA512"]),
    "checksum": zod_1.z.string(),
    "dataSize": zod_1.z.number(),
    "data": ByteBufferSchema,
    "additionalInfo": JsonNodeSchema
});
exports.OriginatorEntityOwnerUsersFilterSchema = OriginatorEntityOwnerUsersFilterSchema = zod_1.z.object({});
exports.ObjectAttributesSchema = ObjectAttributesSchema = zod_1.z.object({
    "dim": zod_1.z.number(),
    "gt": zod_1.z.number(),
    "lt": zod_1.z.number(),
    "pmax": zod_1.z.number(),
    "pmin": zod_1.z.number(),
    "st": zod_1.z.number(),
    "ver": zod_1.z.string()
});
exports.OAuth2InfoSchema = OAuth2InfoSchema = zod_1.z.object({
    "enabled": zod_1.z.boolean(),
    "oauth2ParamsInfos": zod_1.z.array(OAuth2ParamsInfoSchema)
});
exports.OAuth2ParamsInfoSchema = OAuth2ParamsInfoSchema = zod_1.z.object({
    "clientRegistrations": zod_1.z.array(OAuth2RegistrationInfoSchema),
    "domainInfos": zod_1.z.array(OAuth2DomainInfoSchema),
    "mobileInfos": zod_1.z.array(OAuth2MobileInfoSchema)
});
exports.OAuth2MobileInfoSchema = OAuth2MobileInfoSchema = zod_1.z.object({
    "appSecret": zod_1.z.string(),
    "pkgName": zod_1.z.string()
});
exports.OAuth2RegistrationInfoSchema = OAuth2RegistrationInfoSchema = zod_1.z.object({
    "accessTokenUri": zod_1.z.string(),
    "additionalInfo": JsonNodeSchema,
    "authorizationUri": zod_1.z.string(),
    "clientAuthenticationMethod": zod_1.z.string(),
    "clientId": zod_1.z.string(),
    "clientSecret": zod_1.z.string(),
    "jwkSetUri": zod_1.z.string(),
    "loginButtonIcon": zod_1.z.string(),
    "loginButtonLabel": zod_1.z.string(),
    "mapperConfig": OAuth2MapperConfigSchema,
    "platforms": zod_1.z.array(zod_1.z.enum(["ANDROID", "IOS", "WEB"])),
    "scope": zod_1.z.array(zod_1.z.string()),
    "userInfoUri": zod_1.z.string(),
    "userNameAttributeName": zod_1.z.string()
});
exports.OAuth2DomainInfoSchema = OAuth2DomainInfoSchema = zod_1.z.object({
    "name": zod_1.z.string(),
    "scheme": zod_1.z.enum(["HTTP", "HTTPS", "MIXED"])
});
exports.OAuth2ClientRegistrationTemplateSchema = OAuth2ClientRegistrationTemplateSchema = zod_1.z.object({
    "accessTokenUri": zod_1.z.string(),
    "additionalInfo": JsonNodeSchema,
    "authorizationUri": zod_1.z.string(),
    "clientAuthenticationMethod": zod_1.z.string(),
    "comment": zod_1.z.string(),
    "createdTime": zod_1.z.number(),
    "helpLink": zod_1.z.string(),
    "id": OAuth2ClientRegistrationTemplateIdSchema,
    "jwkSetUri": zod_1.z.string(),
    "loginButtonIcon": zod_1.z.string(),
    "loginButtonLabel": zod_1.z.string(),
    "mapperConfig": OAuth2MapperConfigSchema,
    "name": zod_1.z.string(),
    "providerId": zod_1.z.string(),
    "scope": zod_1.z.array(zod_1.z.string()),
    "userInfoUri": zod_1.z.string(),
    "userNameAttributeName": zod_1.z.string()
});
exports.OAuth2MapperConfigSchema = OAuth2MapperConfigSchema = zod_1.z.object({
    "activateUser": zod_1.z.boolean(),
    "allowUserCreation": zod_1.z.boolean(),
    "basic": OAuth2BasicMapperConfigSchema,
    "custom": OAuth2CustomMapperConfigSchema,
    "type": zod_1.z.enum(["APPLE", "BASIC", "CUSTOM", "GITHUB"])
});
exports.OAuth2CustomMapperConfigSchema = OAuth2CustomMapperConfigSchema = zod_1.z.object({
    "password": zod_1.z.string(),
    "sendToken": zod_1.z.boolean(),
    "url": zod_1.z.string(),
    "username": zod_1.z.string()
});
exports.OAuth2ClientRegistrationTemplateIdSchema = OAuth2ClientRegistrationTemplateIdSchema = zod_1.z.object({
    "id": zod_1.z.string()
});
exports.OAuth2ClientInfoSchema = OAuth2ClientInfoSchema = zod_1.z.object({
    "icon": zod_1.z.string(),
    "name": zod_1.z.string(),
    "url": zod_1.z.string()
});
exports.OAuth2BasicMapperConfigSchema = OAuth2BasicMapperConfigSchema = zod_1.z.object({
    "alwaysFullScreen": zod_1.z.boolean(),
    "customerNamePattern": zod_1.z.string(),
    "defaultDashboardName": zod_1.z.string(),
    "emailAttributeKey": zod_1.z.string(),
    "firstNameAttributeKey": zod_1.z.string(),
    "lastNameAttributeKey": zod_1.z.string(),
    "parentCustomerNamePattern": zod_1.z.string(),
    "tenantNamePattern": zod_1.z.string(),
    "tenantNameStrategy": zod_1.z.enum(["CUSTOM", "DOMAIN", "EMAIL"]),
    "userGroupsNamePattern": zod_1.z.array(zod_1.z.string())
});
exports.NumericFilterPredicateSchema = NumericFilterPredicateSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.NotificationTargetSchema = NotificationTargetSchema = zod_1.z.object({
    "configuration": NotificationTargetConfigSchema,
    "createdTime": zod_1.z.number(),
    "name": zod_1.z.string(),
    "tenantId": TenantIdSchema
});
exports.NotificationTargetConfigSchema = NotificationTargetConfigSchema = zod_1.z.object({
    "description": zod_1.z.string()
});
exports.NotificationSettingsSchema = NotificationSettingsSchema = zod_1.z.object({
    "deliveryMethodsConfigs": zod_1.z.record(zod_1.z.string(), NotificationDeliveryMethodConfigSchema)
});
exports.NotificationRuleInfoSchema = NotificationRuleInfoSchema = zod_1.z.object({
    "additionalConfig": NotificationRuleConfigSchema,
    "createdTime": zod_1.z.number(),
    "deliveryMethods": zod_1.z.array(zod_1.z.enum(["EMAIL", "MICROSOFT_TEAMS", "SLACK", "SMS", "WEB"])),
    "enabled": zod_1.z.boolean(),
    "name": zod_1.z.string(),
    "recipientsConfig": NotificationRuleRecipientsConfigSchema,
    "templateId": NotificationTemplateIdSchema,
    "templateName": zod_1.z.string(),
    "tenantId": TenantIdSchema,
    "triggerConfig": NotificationRuleTriggerConfigSchema,
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
exports.NotificationRuleSchema = NotificationRuleSchema = zod_1.z.object({
    "additionalConfig": NotificationRuleConfigSchema,
    "createdTime": zod_1.z.number(),
    "enabled": zod_1.z.boolean(),
    "name": zod_1.z.string(),
    "recipientsConfig": NotificationRuleRecipientsConfigSchema,
    "templateId": NotificationTemplateIdSchema,
    "tenantId": TenantIdSchema,
    "triggerConfig": NotificationRuleTriggerConfigSchema,
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
exports.NotificationRuleTriggerConfigSchema = NotificationRuleTriggerConfigSchema = zod_1.z.object({
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
exports.NotificationRuleRecipientsConfigSchema = NotificationRuleRecipientsConfigSchema = zod_1.z.object({
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
exports.NotificationRuleConfigSchema = NotificationRuleConfigSchema = zod_1.z.object({
    "description": zod_1.z.string()
});
exports.NotificationRequestPreviewSchema = NotificationRequestPreviewSchema = zod_1.z.object({
    "processedTemplates": zod_1.z.record(zod_1.z.string(), DeliveryMethodNotificationTemplateSchema),
    "recipientsCountByTarget": zod_1.z.record(zod_1.z.string(), zod_1.z.number()),
    "recipientsPreview": zod_1.z.array(zod_1.z.string()),
    "totalRecipientsCount": zod_1.z.number()
});
exports.NotificationRequestInfoSchema = NotificationRequestInfoSchema = zod_1.z.object({
    "additionalConfig": NotificationRequestConfigSchema,
    "createdTime": zod_1.z.number(),
    "deliveryMethods": zod_1.z.array(zod_1.z.enum(["EMAIL", "MICROSOFT_TEAMS", "SLACK", "SMS", "WEB"])),
    "id": NotificationRequestIdSchema,
    "info": NotificationInfoSchema,
    "originatorEntityId": EntityIdSchema,
    "ruleId": NotificationRuleIdSchema,
    "stats": NotificationRequestStatsSchema,
    "status": zod_1.z.enum(["PROCESSING", "SCHEDULED", "SENT"]),
    "targets": zod_1.z.array(zod_1.z.string()),
    "template": NotificationTemplateSchema,
    "templateId": NotificationTemplateIdSchema,
    "templateName": zod_1.z.string(),
    "tenantId": TenantIdSchema
});
exports.NotificationRequestSchema = NotificationRequestSchema = zod_1.z.object({
    "additionalConfig": NotificationRequestConfigSchema,
    "createdTime": zod_1.z.number(),
    "id": NotificationRequestIdSchema,
    "info": NotificationInfoSchema,
    "originatorEntityId": EntityIdSchema,
    "ruleId": NotificationRuleIdSchema,
    "stats": NotificationRequestStatsSchema,
    "status": zod_1.z.enum(["PROCESSING", "SCHEDULED", "SENT"]),
    "targets": zod_1.z.array(zod_1.z.string()),
    "template": NotificationTemplateSchema,
    "templateId": NotificationTemplateIdSchema,
    "tenantId": TenantIdSchema
});
exports.NotificationTemplateIdSchema = NotificationTemplateIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["NOTIFICATION_TEMPLATE"])
});
exports.NotificationTemplateSchema = NotificationTemplateSchema = zod_1.z.object({
    "configuration": NotificationTemplateConfigSchema,
    "createdTime": zod_1.z.number(),
    "name": zod_1.z.string(),
    "notificationType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "GENERAL", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT", "RULE_NODE"]),
    "tenantId": TenantIdSchema
});
exports.NotificationTemplateConfigSchema = NotificationTemplateConfigSchema = zod_1.z.object({
    "deliveryMethodsTemplates": zod_1.z.record(zod_1.z.string(), DeliveryMethodNotificationTemplateSchema)
});
exports.NotificationRequestStatsSchema = NotificationRequestStatsSchema = zod_1.z.object({
    "error": zod_1.z.string(),
    "errors": zod_1.z.record(zod_1.z.string(), zod_1.z.object({})),
    "sent": zod_1.z.record(zod_1.z.string(), AtomicIntegerSchema)
});
exports.NotificationRuleIdSchema = NotificationRuleIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["NOTIFICATION_RULE"])
});
exports.NotificationRequestConfigSchema = NotificationRequestConfigSchema = zod_1.z.object({
    "sendingDelayInSec": zod_1.z.number()
});
exports.NotificationPrefSchema = NotificationPrefSchema = zod_1.z.object({
    "enabled": zod_1.z.boolean(),
    "enabledDeliveryMethods": zod_1.z.record(zod_1.z.string(), zod_1.z.boolean())
});
exports.NotificationDeliveryMethodConfigSchema = NotificationDeliveryMethodConfigSchema = zod_1.z.object({});
exports.NotificationSchema = NotificationSchema = zod_1.z.object({
    "additionalConfig": JsonNodeSchema,
    "createdTime": zod_1.z.number(),
    "id": NotificationIdSchema,
    "info": NotificationInfoSchema,
    "recipientId": UserIdSchema,
    "requestId": NotificationRequestIdSchema,
    "status": zod_1.z.enum(["READ", "SENT"]),
    "subject": zod_1.z.string(),
    "text": zod_1.z.string(),
    "type": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "GENERAL", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT", "RULE_NODE"])
});
exports.NotificationRequestIdSchema = NotificationRequestIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["NOTIFICATION_REQUEST"])
});
exports.NotificationInfoSchema = NotificationInfoSchema = zod_1.z.object({
    "stateEntityId": EntityIdSchema
});
exports.NotificationIdSchema = NotificationIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["NOTIFICATION"])
});
exports.NodeConnectionInfoSchema = NodeConnectionInfoSchema = zod_1.z.object({
    "fromIndex": zod_1.z.number(),
    "toIndex": zod_1.z.number(),
    "type": zod_1.z.string()
});
exports.NoSecLwM2MBootstrapServerCredentialSchema = NoSecLwM2MBootstrapServerCredentialSchema = zod_1.z.object({
    "shortServerId": zod_1.z.number(),
    "bootstrapServerIs": zod_1.z.boolean(),
    "host": zod_1.z.string(),
    "port": zod_1.z.number(),
    "clientHoldOffTime": zod_1.z.number(),
    "serverPublicKey": zod_1.z.string(),
    "serverCertificate": zod_1.z.string(),
    "bootstrapServerAccountTimeout": zod_1.z.number(),
    "lifetime": zod_1.z.number(),
    "defaultMinPeriod": zod_1.z.number(),
    "notifIfDisabled": zod_1.z.boolean(),
    "binding": zod_1.z.string()
});
exports.NewPlatformVersionNotificationRuleTriggerConfigSchema = NewPlatformVersionNotificationRuleTriggerConfigSchema = zod_1.z.object({
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
exports.MqttDeviceTransportConfigurationSchema = MqttDeviceTransportConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.MqttDeviceProfileTransportConfigurationSchema = MqttDeviceProfileTransportConfigurationSchema = zod_1.z.object({
    "deviceAttributesSubscribeTopic": zod_1.z.string(),
    "deviceAttributesTopic": zod_1.z.string(),
    "deviceTelemetryTopic": zod_1.z.string(),
    "sendAckOnValidationException": zod_1.z.boolean(),
    "sparkplug": zod_1.z.boolean(),
    "sparkplugAttributesMetricNames": zod_1.z.array(zod_1.z.string()),
    "transportPayloadTypeConfiguration": TransportPayloadTypeConfigurationSchema
});
exports.TransportPayloadTypeConfigurationSchema = TransportPayloadTypeConfigurationSchema = zod_1.z.object({});
exports.MicrosoftTeamsNotificationTargetConfigSchema = MicrosoftTeamsNotificationTargetConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.MicrosoftTeamsDeliveryMethodNotificationTemplateSchema = MicrosoftTeamsDeliveryMethodNotificationTemplateSchema = zod_1.z.object({
    "body": zod_1.z.string(),
    "button": ButtonSchema,
    "enabled": zod_1.z.boolean(),
    "subject": zod_1.z.string(),
    "themeColor": zod_1.z.string()
});
exports.Lwm2mDeviceTransportConfigurationSchema = Lwm2mDeviceTransportConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.Lwm2mDeviceProfileTransportConfigurationSchema = Lwm2mDeviceProfileTransportConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.LwM2mObjectSchema = LwM2mObjectSchema = zod_1.z.object({
    "id": zod_1.z.number(),
    "keyId": zod_1.z.string(),
    "name": zod_1.z.string(),
    "multiple": zod_1.z.boolean(),
    "mandatory": zod_1.z.boolean(),
    "instances": zod_1.z.array(LwM2mInstanceSchema)
});
exports.LwM2mInstanceSchema = LwM2mInstanceSchema = zod_1.z.object({
    "id": zod_1.z.number(),
    "resources": zod_1.z.array(LwM2mResourceObserveSchema)
});
exports.LwM2mResourceObserveSchema = LwM2mResourceObserveSchema = zod_1.z.object({
    "id": zod_1.z.number(),
    "name": zod_1.z.string(),
    "observe": zod_1.z.boolean(),
    "attribute": zod_1.z.boolean(),
    "telemetry": zod_1.z.boolean(),
    "keyName": zod_1.z.string()
});
exports.LwM2MBootstrapServerCredentialSchema = LwM2MBootstrapServerCredentialSchema = zod_1.z.object({});
exports.LoginWhiteLabelingParamsSchema = LoginWhiteLabelingParamsSchema = zod_1.z.object({
    "logoImageUrl": zod_1.z.string(),
    "logoImageHeight": zod_1.z.number(),
    "appTitle": zod_1.z.string(),
    "favicon": FaviconSchema,
    "paletteSettings": PaletteSettingsSchema,
    "helpLinkBaseUrl": zod_1.z.string(),
    "uiHelpBaseUrl": zod_1.z.string(),
    "enableHelpLinks": zod_1.z.boolean(),
    "whiteLabelingEnabled": zod_1.z.boolean(),
    "showNameVersion": zod_1.z.boolean(),
    "platformName": zod_1.z.string(),
    "platformVersion": zod_1.z.string(),
    "customCss": zod_1.z.string(),
    "pageBackgroundColor": zod_1.z.string(),
    "darkForeground": zod_1.z.boolean(),
    "domainName": zod_1.z.string(),
    "baseUrl": zod_1.z.string(),
    "prohibitDifferentUrl": zod_1.z.boolean(),
    "adminSettingsId": zod_1.z.string(),
    "showNameBottom": zod_1.z.boolean()
});
exports.PaletteSettingsSchema = PaletteSettingsSchema = zod_1.z.object({
    "primaryPalette": PaletteSchema,
    "accentPalette": PaletteSchema
});
exports.PaletteSchema = PaletteSchema = zod_1.z.object({
    "type": zod_1.z.string(),
    "extends": zod_1.z.string(),
    "colors": zod_1.z.record(zod_1.z.string(), zod_1.z.string())
});
exports.LoginResponseSchema = LoginResponseSchema = zod_1.z.object({
    "token": zod_1.z.string(),
    "refreshToken": zod_1.z.string()
});
exports.LoginRequestSchema = LoginRequestSchema = zod_1.z.object({
    "username": zod_1.z.string(),
    "password": zod_1.z.string()
});
exports.LifeCycleEventFilterSchema = LifeCycleEventFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.LicenseUsageInfoSchema = LicenseUsageInfoSchema = zod_1.z.object({
    "assetsCount": zod_1.z.number(),
    "dashboardsCount": zod_1.z.number(),
    "development": zod_1.z.boolean(),
    "devicesCount": zod_1.z.number(),
    "integrationsCount": zod_1.z.number(),
    "maxAssets": zod_1.z.number(),
    "maxDevices": zod_1.z.number(),
    "plan": zod_1.z.string(),
    "whiteLabelingEnabled": zod_1.z.boolean()
});
exports.LastVisitedDashboardInfoSchema = LastVisitedDashboardInfoSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "title": zod_1.z.string(),
    "starred": zod_1.z.boolean(),
    "lastVisited": zod_1.z.number()
});
exports.JsonTransportPayloadConfigurationSchema = JsonTransportPayloadConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.JWT_SettingsSchema = JWT_SettingsSchema = zod_1.z.object({
    "tokenExpirationTime": zod_1.z.number(),
    "refreshTokenExpTime": zod_1.z.number(),
    "tokenIssuer": zod_1.z.string(),
    "tokenSigningKey": zod_1.z.string()
});
exports.JWT_PairSchema = JWT_PairSchema = zod_1.z.object({
    "scope": zod_1.z.enum(["CUSTOMER_USER", "PRE_VERIFICATION_TOKEN", "REFRESH_TOKEN", "SYS_ADMIN", "TENANT_ADMIN"]),
    "refreshToken": zod_1.z.string(),
    "token": zod_1.z.string()
});
exports.IntegrationLifecycleEventNotificationRuleTriggerConfigSchema = IntegrationLifecycleEventNotificationRuleTriggerConfigSchema = zod_1.z.object({
    "integrationTypes": zod_1.z.array(zod_1.z.enum(["APACHE_PULSAR", "AWS_IOT", "AWS_KINESIS", "AWS_SQS", "AZURE_EVENT_HUB", "AZURE_IOT_HUB", "AZURE_SERVICE_BUS", "CHIRPSTACK", "COAP", "CUSTOM", "HTTP", "IBM_WATSON_IOT", "KAFKA", "KPN", "LORIOT", "MQTT", "OCEANCONNECT", "OPC_UA", "PARTICLE", "PUB_SUB", "RABBITMQ", "SIGFOX", "TCP", "THINGPARK", "TMOBILE_IOT_CDP", "TPE", "TTI", "TTN", "TUYA", "UDP"])),
    "integrations": zod_1.z.array(zod_1.z.string()),
    "notifyOn": zod_1.z.array(zod_1.z.enum(["ACTIVATED", "CREATED", "DEACTIVATED", "DELETED", "FAILED", "STARTED", "STOPPED", "SUSPENDED", "UPDATED"])),
    "onlyOnError": zod_1.z.boolean(),
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
exports.IntegrationInfoSchema = IntegrationInfoSchema = zod_1.z.object({
    "stats": ArrayNodeSchema,
    "status": ObjectNodeSchema,
    "id": IntegrationIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "type": zod_1.z.enum(["APACHE_PULSAR", "AWS_IOT", "AWS_KINESIS", "AWS_SQS", "AZURE_EVENT_HUB", "AZURE_IOT_HUB", "AZURE_SERVICE_BUS", "CHIRPSTACK", "COAP", "CUSTOM", "HTTP", "IBM_WATSON_IOT", "KAFKA", "KPN", "LORIOT", "MQTT", "OCEANCONNECT", "OPC_UA", "PARTICLE", "PUB_SUB", "RABBITMQ", "SIGFOX", "TCP", "THINGPARK", "TMOBILE_IOT_CDP", "TPE", "TTI", "TTN", "TUYA", "UDP"]),
    "debugMode": zod_1.z.boolean(),
    "enabled": zod_1.z.boolean(),
    "remote": zod_1.z.boolean(),
    "allowCreateDevicesOrAssets": zod_1.z.boolean(),
    "name": zod_1.z.string(),
    "edgeTemplate": zod_1.z.boolean()
});
exports.ObjectNodeSchema = ObjectNodeSchema = zod_1.z.object({});
exports.IntegrationSchema = IntegrationSchema = zod_1.z.object({
    "id": IntegrationIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "defaultConverterId": ConverterIdSchema,
    "downlinkConverterId": ConverterIdSchema,
    "routingKey": zod_1.z.string(),
    "type": zod_1.z.enum(["APACHE_PULSAR", "AWS_IOT", "AWS_KINESIS", "AWS_SQS", "AZURE_EVENT_HUB", "AZURE_IOT_HUB", "AZURE_SERVICE_BUS", "CHIRPSTACK", "COAP", "CUSTOM", "HTTP", "IBM_WATSON_IOT", "KAFKA", "KPN", "LORIOT", "MQTT", "OCEANCONNECT", "OPC_UA", "PARTICLE", "PUB_SUB", "RABBITMQ", "SIGFOX", "TCP", "THINGPARK", "TMOBILE_IOT_CDP", "TPE", "TTI", "TTN", "TUYA", "UDP"]),
    "debugMode": zod_1.z.boolean(),
    "enabled": zod_1.z.boolean(),
    "remote": zod_1.z.boolean(),
    "allowCreateDevicesOrAssets": zod_1.z.boolean(),
    "secret": zod_1.z.string(),
    "configuration": JsonNodeSchema,
    "additionalInfo": JsonNodeSchema,
    "name": zod_1.z.string(),
    "edgeTemplate": zod_1.z.boolean()
});
exports.IntegrationIdSchema = IntegrationIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["INTEGRATION"])
});
exports.ImageExportDataSchema = ImageExportDataSchema = zod_1.z.object({
    "data": zod_1.z.string(),
    "fileName": zod_1.z.string(),
    "mediaType": zod_1.z.string(),
    "public": zod_1.z.boolean(),
    "publicResourceKey": zod_1.z.string(),
    "resourceKey": zod_1.z.string(),
    "title": zod_1.z.string()
});
exports.HomeDashboardInfoSchema = HomeDashboardInfoSchema = zod_1.z.object({
    "dashboardId": DashboardIdSchema,
    "hideDashboardToolbar": zod_1.z.boolean()
});
exports.HomeDashboardSchema = HomeDashboardSchema = zod_1.z.object({
    "id": DashboardIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "ownerId": EntityIdSchema,
    "title": zod_1.z.string(),
    "image": zod_1.z.string(),
    "assignedCustomers": zod_1.z.array(ShortCustomerInfoSchema),
    "mobileHide": zod_1.z.boolean(),
    "mobileOrder": zod_1.z.number(),
    "name": zod_1.z.string(),
    "configuration": JsonNodeSchema,
    "hideDashboardToolbar": zod_1.z.boolean()
});
exports.HasId_Of_objectSchema = HasId_Of_objectSchema = zod_1.z.object({
    "id": zod_1.z.object({})
});
exports.GroupPermissionInfoSchema = GroupPermissionInfoSchema = zod_1.z.object({
    "public": zod_1.z.boolean(),
    "readOnly": zod_1.z.boolean(),
    "id": GroupPermissionIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "userGroupId": EntityGroupIdSchema,
    "roleId": RoleIdSchema,
    "entityGroupId": EntityGroupIdSchema,
    "entityGroupType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]),
    "name": zod_1.z.string(),
    "role": RoleSchema,
    "entityGroupName": zod_1.z.string(),
    "entityGroupOwnerId": EntityIdSchema,
    "entityGroupOwnerName": zod_1.z.string(),
    "userGroupName": zod_1.z.string(),
    "userGroupOwnerId": EntityIdSchema,
    "userGroupOwnerName": zod_1.z.string()
});
exports.RoleSchema = RoleSchema = zod_1.z.object({
    "id": RoleIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "ownerId": EntityIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.enum(["GENERIC", "GROUP"]),
    "permissions": JsonNodeSchema,
    "additionalInfo": JsonNodeSchema
});
exports.GroupPermissionSchema = GroupPermissionSchema = zod_1.z.object({
    "public": zod_1.z.boolean(),
    "id": GroupPermissionIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "userGroupId": EntityGroupIdSchema,
    "roleId": RoleIdSchema,
    "entityGroupId": EntityGroupIdSchema,
    "entityGroupType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]),
    "name": zod_1.z.string()
});
exports.RoleIdSchema = RoleIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["ROLE"])
});
exports.GroupPermissionIdSchema = GroupPermissionIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["GROUP_PERMISSION"])
});
exports.GroupEntityExportDataSchema = GroupEntityExportDataSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.FilterPredicateValue_Of_stringSchema = FilterPredicateValue_Of_stringSchema = zod_1.z.object({
    "defaultValue": zod_1.z.string(),
    "dynamicValue": DynamicValue_Of_stringSchema,
    "userValue": zod_1.z.string()
});
exports.FilterPredicateValue_Of_longSchema = FilterPredicateValue_Of_longSchema = zod_1.z.object({
    "defaultValue": zod_1.z.number(),
    "dynamicValue": DynamicValue_Of_longSchema,
    "userValue": zod_1.z.number()
});
exports.FilterPredicateValue_Of_intSchema = FilterPredicateValue_Of_intSchema = zod_1.z.object({
    "defaultValue": zod_1.z.number(),
    "dynamicValue": DynamicValue_Of_intSchema,
    "userValue": zod_1.z.number()
});
exports.FilterPredicateValue_Of_doubleSchema = FilterPredicateValue_Of_doubleSchema = zod_1.z.object({
    "defaultValue": zod_1.z.number(),
    "dynamicValue": DynamicValue_Of_doubleSchema,
    "userValue": zod_1.z.number()
});
exports.FilterPredicateValue_Of_booleanSchema = FilterPredicateValue_Of_booleanSchema = zod_1.z.object({
    "defaultValue": zod_1.z.boolean(),
    "dynamicValue": DynamicValue_Of_booleanSchema,
    "userValue": zod_1.z.boolean()
});
exports.FeaturesInfoSchema = FeaturesInfoSchema = zod_1.z.object({
    "emailEnabled": zod_1.z.boolean(),
    "notificationEnabled": zod_1.z.boolean(),
    "oauthEnabled": zod_1.z.boolean(),
    "smsEnabled": zod_1.z.boolean(),
    "twoFaEnabled": zod_1.z.boolean(),
    "whiteLabelingEnabled": zod_1.z.boolean()
});
exports.FaviconSchema = FaviconSchema = zod_1.z.object({
    "url": zod_1.z.string()
});
exports.ExportableEntity_Of_EntityIdSchema = ExportableEntity_Of_EntityIdSchema = zod_1.z.object({
    "createdTime": zod_1.z.number(),
    "id": EntityIdSchema,
    "name": zod_1.z.string()
});
exports.EventInfoSchema = EventInfoSchema = zod_1.z.object({
    "id": EventIdSchema,
    "tenantId": TenantIdSchema,
    "type": zod_1.z.string(),
    "uid": zod_1.z.string(),
    "entityId": EntityIdSchema,
    "body": JsonNodeSchema,
    "createdTime": zod_1.z.number()
});
exports.EventIdSchema = EventIdSchema = zod_1.z.object({
    "id": zod_1.z.string()
});
exports.EventFilterSchema = EventFilterSchema = zod_1.z.object({
    "notEmpty": zod_1.z.boolean(),
    "eventType": zod_1.z.enum(["DEBUG_CONVERTER", "DEBUG_INTEGRATION", "DEBUG_RULE_CHAIN", "DEBUG_RULE_NODE", "ERROR", "LC_EVENT", "RAW_DATA", "STATS"])
});
exports.EscalatedNotificationRuleRecipientsConfigSchema = EscalatedNotificationRuleRecipientsConfigSchema = zod_1.z.object({
    "escalationTable": zod_1.z.record(zod_1.z.string(), zod_1.z.array(zod_1.z.string())),
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
exports.ErrorEventFilterSchema = ErrorEventFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntityViewTypeFilterSchema = EntityViewTypeFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntityViewSearchQueryFilterSchema = EntityViewSearchQueryFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntityViewSearchQuerySchema = EntityViewSearchQuerySchema = zod_1.z.object({
    "relationType": zod_1.z.string(),
    "entityViewTypes": zod_1.z.array(zod_1.z.string()),
    "parameters": RelationsSearchParametersSchema
});
exports.EntityViewInfoSchema = EntityViewInfoSchema = zod_1.z.object({
    "id": EntityViewIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.string(),
    "entityId": EntityIdSchema,
    "keys": TelemetryEntityViewSchema,
    "startTimeMs": zod_1.z.number(),
    "endTimeMs": zod_1.z.number(),
    "additionalInfo": JsonNodeSchema,
    "ownerName": zod_1.z.string(),
    "groups": zod_1.z.array(EntityInfoSchema),
    "ownerId": EntityIdSchema
});
exports.EntityViewSchema = EntityViewSchema = zod_1.z.object({
    "id": EntityViewIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.string(),
    "entityId": EntityIdSchema,
    "keys": TelemetryEntityViewSchema,
    "startTimeMs": zod_1.z.number(),
    "endTimeMs": zod_1.z.number(),
    "additionalInfo": JsonNodeSchema,
    "ownerId": EntityIdSchema
});
exports.TelemetryEntityViewSchema = TelemetryEntityViewSchema = zod_1.z.object({
    "timeseries": zod_1.z.array(zod_1.z.string()),
    "attributes": AttributesEntityViewSchema
});
exports.EntityViewIdSchema = EntityViewIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["ENTITY_VIEW"])
});
exports.EntityVersionSchema = EntityVersionSchema = zod_1.z.object({
    "author": zod_1.z.string(),
    "id": zod_1.z.string(),
    "name": zod_1.z.string(),
    "timestamp": zod_1.z.number()
});
exports.EntityTypeVersionLoadRequestSchema = EntityTypeVersionLoadRequestSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntityTypeVersionLoadConfigSchema = EntityTypeVersionLoadConfigSchema = zod_1.z.object({
    "autoGenerateIntegrationKey": zod_1.z.boolean(),
    "findExistingEntityByName": zod_1.z.boolean(),
    "loadAttributes": zod_1.z.boolean(),
    "loadCredentials": zod_1.z.boolean(),
    "loadGroupEntities": zod_1.z.boolean(),
    "loadPermissions": zod_1.z.boolean(),
    "loadRelations": zod_1.z.boolean(),
    "removeOtherEntities": zod_1.z.boolean()
});
exports.EntityTypeVersionCreateConfigSchema = EntityTypeVersionCreateConfigSchema = zod_1.z.object({
    "allEntities": zod_1.z.boolean(),
    "entityIds": zod_1.z.array(zod_1.z.string()),
    "saveAttributes": zod_1.z.boolean(),
    "saveCredentials": zod_1.z.boolean(),
    "saveGroupEntities": zod_1.z.boolean(),
    "savePermissions": zod_1.z.boolean(),
    "saveRelations": zod_1.z.boolean(),
    "syncStrategy": zod_1.z.enum(["MERGE", "OVERWRITE"])
});
exports.EntityTypeLoadResultSchema = EntityTypeLoadResultSchema = zod_1.z.object({
    "created": zod_1.z.number(),
    "deleted": zod_1.z.number(),
    "entityType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]),
    "groupsCreated": zod_1.z.number(),
    "groupsDeleted": zod_1.z.number(),
    "groupsUpdated": zod_1.z.number(),
    "updated": zod_1.z.number()
});
exports.EntityTypeFilterSchema = EntityTypeFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntitySubtypeSchema = EntitySubtypeSchema = zod_1.z.object({
    "entityType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]),
    "tenantId": TenantIdSchema,
    "type": zod_1.z.string()
});
exports.EntityRelationsQuerySchema = EntityRelationsQuerySchema = zod_1.z.object({
    "filters": zod_1.z.array(RelationEntityTypeFilterSchema),
    "parameters": RelationsSearchParametersSchema
});
exports.RelationEntityTypeFilterSchema = RelationEntityTypeFilterSchema = zod_1.z.object({
    "relationType": zod_1.z.string(),
    "entityTypes": zod_1.z.array(zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]))
});
exports.EntityRelationInfoSchema = EntityRelationInfoSchema = zod_1.z.object({
    "from": EntityIdSchema,
    "to": EntityIdSchema,
    "type": zod_1.z.string(),
    "typeGroup": zod_1.z.enum(["COMMON", "DASHBOARD", "EDGE", "EDGE_AUTO_ASSIGN_RULE_CHAIN", "FROM_ENTITY_GROUP", "RULE_CHAIN", "RULE_NODE"]),
    "additionalInfo": JsonNodeSchema,
    "fromName": zod_1.z.string(),
    "toName": zod_1.z.string()
});
exports.EntityNameFilterSchema = EntityNameFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntityLoadErrorSchema = EntityLoadErrorSchema = zod_1.z.object({
    "message": zod_1.z.string(),
    "source": EntityIdSchema,
    "target": EntityIdSchema,
    "type": zod_1.z.string()
});
exports.EntityListFilterSchema = EntityListFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntityGroupNameFilterSchema = EntityGroupNameFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntityGroupListFilterSchema = EntityGroupListFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntityGroupInfoSchema = EntityGroupInfoSchema = zod_1.z.object({
    "id": EntityGroupIdSchema,
    "createdTime": zod_1.z.number(),
    "ownerId": EntityIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.enum(["ASSET", "CUSTOMER", "DASHBOARD", "DEVICE", "EDGE", "ENTITY_VIEW", "USER"]),
    "additionalInfo": JsonNodeSchema,
    "configuration": JsonNodeSchema,
    "groupAll": zod_1.z.boolean(),
    "edgeGroupAll": zod_1.z.boolean(),
    "ownerIds": zod_1.z.array(EntityIdSchema)
});
exports.EntityGroupFilterSchema = EntityGroupFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntityGroupExportDataSchema = EntityGroupExportDataSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntityGroupSchema = EntityGroupSchema = zod_1.z.object({
    "id": EntityGroupIdSchema,
    "createdTime": zod_1.z.number(),
    "ownerId": EntityIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.enum(["ASSET", "CUSTOMER", "DASHBOARD", "DEVICE", "EDGE", "ENTITY_VIEW", "USER"]),
    "additionalInfo": JsonNodeSchema,
    "configuration": JsonNodeSchema,
    "groupAll": zod_1.z.boolean(),
    "edgeGroupAll": zod_1.z.boolean()
});
exports.EntityDataQuerySchema = EntityDataQuerySchema = zod_1.z.object({
    "entityFields": zod_1.z.array(EntityKeySchema),
    "entityFilter": EntityFilterSchema,
    "keyFilters": zod_1.z.array(KeyFilterSchema),
    "latestValues": zod_1.z.array(EntityKeySchema),
    "pageLink": EntityDataPageLinkSchema
});
exports.EntityDataPageLinkSchema = EntityDataPageLinkSchema = zod_1.z.object({
    "dynamic": zod_1.z.boolean(),
    "page": zod_1.z.number(),
    "pageSize": zod_1.z.number(),
    "sortOrder": EntityDataSortOrderSchema,
    "textSearch": zod_1.z.string()
});
exports.EntityDataInfoSchema = EntityDataInfoSchema = zod_1.z.object({
    "hasAttributes": zod_1.z.boolean(),
    "hasCredentials": zod_1.z.boolean(),
    "hasGroupEntities": zod_1.z.boolean(),
    "hasPermissions": zod_1.z.boolean(),
    "hasRelations": zod_1.z.boolean()
});
exports.EntityDataDiffSchema = EntityDataDiffSchema = zod_1.z.object({
    "currentVersion": EntityExportData_Of_objectSchema,
    "otherVersion": EntityExportData_Of_objectSchema
});
exports.EntityExportData_Of_objectSchema = EntityExportData_Of_objectSchema = zod_1.z.object({
    "attributes": zod_1.z.record(zod_1.z.string(), zod_1.z.array(AttributeExportDataSchema)),
    "entity": zod_1.z.object({}),
    "entityType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]),
    "relations": zod_1.z.array(EntityRelationSchema)
});
exports.EntityRelationSchema = EntityRelationSchema = zod_1.z.object({
    "from": EntityIdSchema,
    "to": EntityIdSchema,
    "type": zod_1.z.string(),
    "typeGroup": zod_1.z.enum(["COMMON", "DASHBOARD", "EDGE", "EDGE_AUTO_ASSIGN_RULE_CHAIN", "FROM_ENTITY_GROUP", "RULE_CHAIN", "RULE_NODE"]),
    "additionalInfo": JsonNodeSchema
});
exports.EntityDataSchema = EntityDataSchema = zod_1.z.object({
    "aggLatest": zod_1.z.record(zod_1.z.string(), ComparisonTsValueSchema),
    "entityId": EntityIdSchema,
    "latest": zod_1.z.record(zod_1.z.string(), zod_1.z.object({})),
    "readAttrs": zod_1.z.boolean(),
    "readTs": zod_1.z.boolean(),
    "timeseries": zod_1.z.record(zod_1.z.string(), zod_1.z.array(TsValueSchema))
});
exports.EntityCountQuerySchema = EntityCountQuerySchema = zod_1.z.object({
    "entityFilter": EntityFilterSchema,
    "keyFilters": zod_1.z.array(KeyFilterSchema)
});
exports.EntityActionNotificationRuleTriggerConfigSchema = EntityActionNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntitiesLimitNotificationRuleTriggerConfigSchema = EntitiesLimitNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EntitiesByGroupNameFilterSchema = EntitiesByGroupNameFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EmailTwoFaProviderConfigSchema = EmailTwoFaProviderConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EmailTwoFaAccountConfigSchema = EmailTwoFaAccountConfigSchema = zod_1.z.object({
    "email": zod_1.z.string(),
    "useByDefault": zod_1.z.boolean()
});
exports.EmailDeliveryMethodNotificationTemplateSchema = EmailDeliveryMethodNotificationTemplateSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EfentoCoapDeviceTypeConfigurationSchema = EfentoCoapDeviceTypeConfigurationSchema = zod_1.z.object({});
exports.EdgeTypeFilterSchema = EdgeTypeFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EdgeSearchQueryFilterSchema = EdgeSearchQueryFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.EdgeSearchQuerySchema = EdgeSearchQuerySchema = zod_1.z.object({
    "relationType": zod_1.z.string(),
    "edgeTypes": zod_1.z.array(zod_1.z.string()),
    "parameters": RelationsSearchParametersSchema
});
exports.EdgeInstructionsSchema = EdgeInstructionsSchema = zod_1.z.object({
    "instructions": zod_1.z.string()
});
exports.EdgeInfoSchema = EdgeInfoSchema = zod_1.z.object({
    "additionalInfo": JsonNodeSchema,
    "ownerId": EntityIdSchema,
    "id": EdgeIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "rootRuleChainId": RuleChainIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.string(),
    "label": zod_1.z.string(),
    "routingKey": zod_1.z.string(),
    "secret": zod_1.z.string(),
    "edgeLicenseKey": zod_1.z.string(),
    "cloudEndpoint": zod_1.z.string(),
    "ownerName": zod_1.z.string(),
    "groups": zod_1.z.array(EntityInfoSchema)
});
exports.EdgeEventSchema = EdgeEventSchema = zod_1.z.object({
    "action": zod_1.z.enum(["ADDED", "ADDED_TO_ENTITY_GROUP", "ALARM_ACK", "ALARM_ASSIGNED", "ALARM_CLEAR", "ALARM_UNASSIGNED", "ASSIGNED_TO_EDGE", "ATTRIBUTES_DELETED", "ATTRIBUTES_UPDATED", "CHANGE_OWNER", "CREDENTIALS_REQUEST", "CREDENTIALS_UPDATED", "DELETED", "ENTITY_MERGE_REQUEST", "POST_ATTRIBUTES", "RELATION_ADD_OR_UPDATE", "RELATION_DELETED", "REMOVED_FROM_ENTITY_GROUP", "RPC_CALL", "TIMESERIES_UPDATED", "UNASSIGNED_FROM_EDGE", "UPDATED"]),
    "body": JsonNodeSchema,
    "createdTime": zod_1.z.number(),
    "edgeId": EdgeIdSchema,
    "entityGroupId": zod_1.z.string(),
    "entityId": zod_1.z.string(),
    "id": EdgeEventIdSchema,
    "seqId": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "type": zod_1.z.enum(["ADMIN_SETTINGS", "ALARM", "ASSET", "ASSET_PROFILE", "CONVERTER", "CUSTOMER", "CUSTOM_TRANSLATION", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "LOGIN_WHITE_LABELING", "MAIL_TEMPLATES", "OTA_PACKAGE", "QUEUE", "RELATION", "ROLE", "RULE_CHAIN", "RULE_CHAIN_METADATA", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WHITE_LABELING", "WIDGETS_BUNDLE", "WIDGET_TYPE"]),
    "uid": zod_1.z.string()
});
exports.EdgeEventIdSchema = EdgeEventIdSchema = zod_1.z.object({
    "id": zod_1.z.string()
});
exports.EdgeSchema = EdgeSchema = zod_1.z.object({
    "additionalInfo": JsonNodeSchema,
    "ownerId": EntityIdSchema,
    "id": EdgeIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "rootRuleChainId": RuleChainIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.string(),
    "label": zod_1.z.string(),
    "routingKey": zod_1.z.string(),
    "secret": zod_1.z.string(),
    "edgeLicenseKey": zod_1.z.string(),
    "cloudEndpoint": zod_1.z.string()
});
exports.EdgeIdSchema = EdgeIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["EDGE"])
});
exports.DynamicValue_Of_longSchema = DynamicValue_Of_longSchema = zod_1.z.object({
    "inherit": zod_1.z.boolean(),
    "sourceAttribute": zod_1.z.string(),
    "sourceType": zod_1.z.enum(["CURRENT_CUSTOMER", "CURRENT_DEVICE", "CURRENT_TENANT", "CURRENT_USER"])
});
exports.DynamicValue_Of_intSchema = DynamicValue_Of_intSchema = zod_1.z.object({
    "inherit": zod_1.z.boolean(),
    "sourceAttribute": zod_1.z.string(),
    "sourceType": zod_1.z.enum(["CURRENT_CUSTOMER", "CURRENT_DEVICE", "CURRENT_TENANT", "CURRENT_USER"])
});
exports.DynamicValue_Of_doubleSchema = DynamicValue_Of_doubleSchema = zod_1.z.object({
    "inherit": zod_1.z.boolean(),
    "sourceAttribute": zod_1.z.string(),
    "sourceType": zod_1.z.enum(["CURRENT_CUSTOMER", "CURRENT_DEVICE", "CURRENT_TENANT", "CURRENT_USER"])
});
exports.DynamicValue_Of_booleanSchema = DynamicValue_Of_booleanSchema = zod_1.z.object({
    "inherit": zod_1.z.boolean(),
    "sourceAttribute": zod_1.z.string(),
    "sourceType": zod_1.z.enum(["CURRENT_CUSTOMER", "CURRENT_DEVICE", "CURRENT_TENANT", "CURRENT_USER"])
});
exports.DurationAlarmConditionSpecSchema = DurationAlarmConditionSpecSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.DisabledDeviceProfileProvisionConfigurationSchema = DisabledDeviceProfileProvisionConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.DeviceTypeFilterSchema = DeviceTypeFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.DeviceSearchQueryFilterSchema = DeviceSearchQueryFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.DeviceSearchQuerySchema = DeviceSearchQuerySchema = zod_1.z.object({
    "relationType": zod_1.z.string(),
    "deviceTypes": zod_1.z.array(zod_1.z.string()),
    "parameters": RelationsSearchParametersSchema
});
exports.DeviceProfileInfoSchema = DeviceProfileInfoSchema = zod_1.z.object({
    "id": EntityIdSchema,
    "name": zod_1.z.string(),
    "image": zod_1.z.string(),
    "defaultDashboardId": DashboardIdSchema,
    "type": zod_1.z.enum(["DEFAULT"]),
    "transportType": zod_1.z.enum(["COAP", "DEFAULT", "LWM2M", "MQTT", "SNMP"]),
    "tenantId": TenantIdSchema
});
exports.DeviceProfileSchema = DeviceProfileSchema = zod_1.z.object({
    "id": DeviceProfileIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "name": zod_1.z.string(),
    "default": zod_1.z.boolean(),
    "defaultDashboardId": DashboardIdSchema,
    "defaultRuleChainId": RuleChainIdSchema,
    "defaultQueueName": zod_1.z.string(),
    "firmwareId": OtaPackageIdSchema,
    "softwareId": OtaPackageIdSchema,
    "description": zod_1.z.string(),
    "image": zod_1.z.string(),
    "provisionDeviceKey": zod_1.z.string(),
    "transportType": zod_1.z.enum(["COAP", "DEFAULT", "LWM2M", "MQTT", "SNMP"]),
    "provisionType": zod_1.z.enum(["ALLOW_CREATE_NEW_DEVICES", "CHECK_PRE_PROVISIONED_DEVICES", "DISABLED", "X509_CERTIFICATE_CHAIN"]),
    "profileData": DeviceProfileDataSchema,
    "type": zod_1.z.enum(["DEFAULT"]),
    "defaultEdgeRuleChainId": RuleChainIdSchema
});
exports.DeviceProfileDataSchema = DeviceProfileDataSchema = zod_1.z.object({
    "configuration": DeviceProfileConfigurationSchema,
    "transportConfiguration": DeviceProfileTransportConfigurationSchema,
    "provisionConfiguration": DeviceProfileProvisionConfigurationSchema,
    "alarms": zod_1.z.array(DeviceProfileAlarmSchema)
});
exports.DeviceProfileAlarmSchema = DeviceProfileAlarmSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "alarmType": zod_1.z.string(),
    "createRules": zod_1.z.record(zod_1.z.string(), AlarmRuleSchema),
    "clearRule": AlarmRuleSchema,
    "propagate": zod_1.z.boolean(),
    "propagateToOwner": zod_1.z.boolean(),
    "propagateToOwnerHierarchy": zod_1.z.boolean(),
    "propagateToTenant": zod_1.z.boolean(),
    "propagateRelationTypes": zod_1.z.array(zod_1.z.string())
});
exports.DeviceProfileProvisionConfigurationSchema = DeviceProfileProvisionConfigurationSchema = zod_1.z.object({
    "provisionDeviceSecret": zod_1.z.string()
});
exports.DeviceProfileTransportConfigurationSchema = DeviceProfileTransportConfigurationSchema = zod_1.z.object({});
exports.DeviceProfileConfigurationSchema = DeviceProfileConfigurationSchema = zod_1.z.object({});
exports.DeviceInfoSchema = DeviceInfoSchema = zod_1.z.object({
    "id": DeviceIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "ownerId": EntityIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.string(),
    "label": zod_1.z.string(),
    "deviceProfileId": DeviceProfileIdSchema,
    "deviceData": DeviceDataSchema,
    "firmwareId": OtaPackageIdSchema,
    "softwareId": OtaPackageIdSchema,
    "additionalInfo": JsonNodeSchema,
    "ownerName": zod_1.z.string(),
    "groups": zod_1.z.array(EntityInfoSchema),
    "active": zod_1.z.boolean()
});
exports.DeviceGroupOtaPackageSchema = DeviceGroupOtaPackageSchema = zod_1.z.object({
    "groupId": EntityGroupIdSchema,
    "id": zod_1.z.string(),
    "otaPackageId": OtaPackageIdSchema,
    "otaPackageType": zod_1.z.enum(["FIRMWARE", "SOFTWARE"]),
    "otaPackageUpdateTime": zod_1.z.number()
});
exports.DeviceExportDataSchema = DeviceExportDataSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.DeviceCredentialsSchema = DeviceCredentialsSchema = zod_1.z.object({
    "id": DeviceCredentialsIdSchema,
    "createdTime": zod_1.z.number(),
    "deviceId": DeviceIdSchema,
    "credentialsType": zod_1.z.enum(["ACCESS_TOKEN", "LWM2M_CREDENTIALS", "MQTT_BASIC", "X509_CERTIFICATE"]),
    "credentialsId": zod_1.z.string(),
    "credentialsValue": zod_1.z.string()
});
exports.DeviceCredentialsIdSchema = DeviceCredentialsIdSchema = zod_1.z.object({
    "id": zod_1.z.string()
});
exports.DeviceActivityNotificationRuleTriggerConfigSchema = DeviceActivityNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.DeviceSchema = DeviceSchema = zod_1.z.object({
    "id": DeviceIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "ownerId": EntityIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.string(),
    "label": zod_1.z.string(),
    "deviceProfileId": DeviceProfileIdSchema,
    "deviceData": DeviceDataSchema,
    "firmwareId": OtaPackageIdSchema,
    "softwareId": OtaPackageIdSchema,
    "additionalInfo": JsonNodeSchema
});
exports.OtaPackageIdSchema = OtaPackageIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["OTA_PACKAGE"])
});
exports.DeviceDataSchema = DeviceDataSchema = zod_1.z.object({
    "configuration": DeviceConfigurationSchema,
    "transportConfiguration": DeviceTransportConfigurationSchema
});
exports.DeviceTransportConfigurationSchema = DeviceTransportConfigurationSchema = zod_1.z.object({});
exports.DeviceConfigurationSchema = DeviceConfigurationSchema = zod_1.z.object({});
exports.DeviceProfileIdSchema = DeviceProfileIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["DEVICE_PROFILE"])
});
exports.DeviceIdSchema = DeviceIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["DEVICE"])
});
exports.DeliveryMethodNotificationTemplateSchema = DeliveryMethodNotificationTemplateSchema = zod_1.z.object({
    "body": zod_1.z.string(),
    "enabled": zod_1.z.boolean()
});
exports.DeferredResult_Of_uuidSchema = DeferredResult_Of_uuidSchema = zod_1.z.object({
    "result": zod_1.z.object({}),
    "setOrExpired": zod_1.z.boolean()
});
exports.DeferredResult_Of_VoidSchema = DeferredResult_Of_VoidSchema = zod_1.z.object({
    "result": zod_1.z.object({}),
    "setOrExpired": zod_1.z.boolean()
});
exports.DeferredResult_Of_ResponseEntitySchema = DeferredResult_Of_ResponseEntitySchema = zod_1.z.object({
    "result": zod_1.z.object({}),
    "setOrExpired": zod_1.z.boolean()
});
exports.DeferredResult_Of_RepositorySettingsSchema = DeferredResult_Of_RepositorySettingsSchema = zod_1.z.object({
    "result": zod_1.z.object({}),
    "setOrExpired": zod_1.z.boolean()
});
exports.DeferredResult_Of_PageData_Of_EntityVersionSchema = DeferredResult_Of_PageData_Of_EntityVersionSchema = zod_1.z.object({
    "result": zod_1.z.object({}),
    "setOrExpired": zod_1.z.boolean()
});
exports.DeferredResult_Of_List_Of_VersionedEntityInfoSchema = DeferredResult_Of_List_Of_VersionedEntityInfoSchema = zod_1.z.object({
    "result": zod_1.z.object({}),
    "setOrExpired": zod_1.z.boolean()
});
exports.DeferredResult_Of_List_Of_BranchInfoSchema = DeferredResult_Of_List_Of_BranchInfoSchema = zod_1.z.object({
    "result": zod_1.z.object({}),
    "setOrExpired": zod_1.z.boolean()
});
exports.DeferredResult_Of_EntityDataInfoSchema = DeferredResult_Of_EntityDataInfoSchema = zod_1.z.object({
    "result": zod_1.z.object({}),
    "setOrExpired": zod_1.z.boolean()
});
exports.DeferredResult_Of_EntityDataDiffSchema = DeferredResult_Of_EntityDataDiffSchema = zod_1.z.object({
    "result": zod_1.z.object({}),
    "setOrExpired": zod_1.z.boolean()
});
exports.DefaultTenantProfileConfigurationSchema = DefaultTenantProfileConfigurationSchema = zod_1.z.object({
    "alarmsTtlDays": zod_1.z.number(),
    "cassandraQueryTenantRateLimitsConfiguration": zod_1.z.string(),
    "customerServerRestLimitsConfiguration": zod_1.z.string(),
    "defaultStorageTtlDays": zod_1.z.number(),
    "integrationMsgsPerDeviceRateLimit": zod_1.z.string(),
    "integrationMsgsPerTenantRateLimit": zod_1.z.string(),
    "maxAssets": zod_1.z.number(),
    "maxConverters": zod_1.z.number(),
    "maxCreatedAlarms": zod_1.z.number(),
    "maxCustomers": zod_1.z.number(),
    "maxDPStorageDays": zod_1.z.number(),
    "maxDashboards": zod_1.z.number(),
    "maxDevices": zod_1.z.number(),
    "maxEmails": zod_1.z.number(),
    "maxIntegrations": zod_1.z.number(),
    "maxJSExecutions": zod_1.z.number(),
    "maxOtaPackagesInBytes": zod_1.z.number(),
    "maxREExecutions": zod_1.z.number(),
    "maxResourceSize": zod_1.z.number(),
    "maxResourcesInBytes": zod_1.z.number(),
    "maxRuleChains": zod_1.z.number(),
    "maxRuleNodeExecutionsPerMessage": zod_1.z.number(),
    "maxSchedulerEvents": zod_1.z.number(),
    "maxSms": zod_1.z.number(),
    "maxTbelExecutions": zod_1.z.number(),
    "maxTransportDataPoints": zod_1.z.number(),
    "maxTransportMessages": zod_1.z.number(),
    "maxUsers": zod_1.z.number(),
    "maxWsSessionsPerCustomer": zod_1.z.number(),
    "maxWsSessionsPerPublicUser": zod_1.z.number(),
    "maxWsSessionsPerRegularUser": zod_1.z.number(),
    "maxWsSessionsPerTenant": zod_1.z.number(),
    "maxWsSubscriptionsPerCustomer": zod_1.z.number(),
    "maxWsSubscriptionsPerPublicUser": zod_1.z.number(),
    "maxWsSubscriptionsPerRegularUser": zod_1.z.number(),
    "maxWsSubscriptionsPerTenant": zod_1.z.number(),
    "queueStatsTtlDays": zod_1.z.number(),
    "rpcTtlDays": zod_1.z.number(),
    "ruleEngineExceptionsTtlDays": zod_1.z.number(),
    "smsEnabled": zod_1.z.boolean(),
    "tenantEntityExportRateLimit": zod_1.z.string(),
    "tenantEntityImportRateLimit": zod_1.z.string(),
    "tenantNotificationRequestsPerRuleRateLimit": zod_1.z.string(),
    "tenantNotificationRequestsRateLimit": zod_1.z.string(),
    "tenantServerRestLimitsConfiguration": zod_1.z.string(),
    "transportDeviceMsgRateLimit": zod_1.z.string(),
    "transportDeviceTelemetryDataPointsRateLimit": zod_1.z.string(),
    "transportDeviceTelemetryMsgRateLimit": zod_1.z.string(),
    "transportTenantMsgRateLimit": zod_1.z.string(),
    "transportTenantTelemetryDataPointsRateLimit": zod_1.z.string(),
    "transportTenantTelemetryMsgRateLimit": zod_1.z.string(),
    "warnThreshold": zod_1.z.number(),
    "wsMsgQueueLimitPerSession": zod_1.z.number(),
    "wsUpdatesPerSessionRateLimit": zod_1.z.string()
});
exports.DefaultRuleChainCreateRequestSchema = DefaultRuleChainCreateRequestSchema = zod_1.z.object({
    "name": zod_1.z.string()
});
exports.DefaultDeviceTransportConfigurationSchema = DefaultDeviceTransportConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.DefaultDeviceProfileTransportConfigurationSchema = DefaultDeviceProfileTransportConfigurationSchema = zod_1.z.object({});
exports.DefaultDeviceProfileConfigurationSchema = DefaultDeviceProfileConfigurationSchema = zod_1.z.object({});
exports.DefaultDeviceConfigurationSchema = DefaultDeviceConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.DefaultCoapDeviceTypeConfigurationSchema = DefaultCoapDeviceTypeConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.DebugIntegrationEventFilterSchema = DebugIntegrationEventFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.DebugConverterEventFilterSchema = DebugConverterEventFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.DashboardInfoSchema = DashboardInfoSchema = zod_1.z.object({
    "id": DashboardIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "ownerId": EntityIdSchema,
    "title": zod_1.z.string(),
    "image": zod_1.z.string(),
    "assignedCustomers": zod_1.z.array(ShortCustomerInfoSchema),
    "mobileHide": zod_1.z.boolean(),
    "mobileOrder": zod_1.z.number(),
    "name": zod_1.z.string(),
    "configuration": JsonNodeSchema,
    "ownerName": zod_1.z.string(),
    "groups": zod_1.z.array(EntityInfoSchema)
});
exports.DashboardSchema = DashboardSchema = zod_1.z.object({
    "id": DashboardIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "ownerId": EntityIdSchema,
    "title": zod_1.z.string(),
    "image": zod_1.z.string(),
    "assignedCustomers": zod_1.z.array(ShortCustomerInfoSchema),
    "mobileHide": zod_1.z.boolean(),
    "mobileOrder": zod_1.z.number(),
    "name": zod_1.z.string(),
    "configuration": JsonNodeSchema
});
exports.ShortCustomerInfoSchema = ShortCustomerInfoSchema = zod_1.z.object({
    "public": zod_1.z.boolean(),
    "customerId": CustomerIdSchema,
    "title": zod_1.z.string()
});
exports.CustomerUsersFilterSchema = CustomerUsersFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.CustomerInfoSchema = CustomerInfoSchema = zod_1.z.object({
    "id": CustomerIdSchema,
    "createdTime": zod_1.z.number(),
    "title": zod_1.z.string(),
    "name": zod_1.z.string(),
    "tenantId": TenantIdSchema,
    "parentCustomerId": CustomerIdSchema,
    "customerId": CustomerIdSchema,
    "ownerId": EntityIdSchema,
    "country": zod_1.z.string(),
    "state": zod_1.z.string(),
    "city": zod_1.z.string(),
    "address": zod_1.z.string(),
    "address2": zod_1.z.string(),
    "zip": zod_1.z.string(),
    "phone": zod_1.z.string(),
    "email": zod_1.z.string(),
    "additionalInfo": JsonNodeSchema,
    "ownerName": zod_1.z.string(),
    "groups": zod_1.z.array(EntityInfoSchema)
});
exports.CustomerSchema = CustomerSchema = zod_1.z.object({
    "id": CustomerIdSchema,
    "createdTime": zod_1.z.number(),
    "title": zod_1.z.string(),
    "name": zod_1.z.string(),
    "tenantId": TenantIdSchema,
    "parentCustomerId": CustomerIdSchema,
    "customerId": CustomerIdSchema,
    "ownerId": EntityIdSchema,
    "country": zod_1.z.string(),
    "state": zod_1.z.string(),
    "city": zod_1.z.string(),
    "address": zod_1.z.string(),
    "address2": zod_1.z.string(),
    "zip": zod_1.z.string(),
    "phone": zod_1.z.string(),
    "email": zod_1.z.string(),
    "additionalInfo": JsonNodeSchema
});
exports.CustomTranslationSchema = CustomTranslationSchema = zod_1.z.object({
    "translationMap": zod_1.z.record(zod_1.z.string(), zod_1.z.string())
});
exports.CustomTimeScheduleSchema = CustomTimeScheduleSchema = zod_1.z.object({
    "dynamicValue": DynamicValue_Of_stringSchema,
    "items": zod_1.z.array(CustomTimeScheduleItemSchema),
    "timezone": zod_1.z.string(),
    "type": zod_1.z.enum(["ANY_TIME", "CUSTOM", "SPECIFIC_TIME"])
});
exports.CustomTimeScheduleItemSchema = CustomTimeScheduleItemSchema = zod_1.z.object({
    "dayOfWeek": zod_1.z.number(),
    "enabled": zod_1.z.boolean(),
    "endsOn": zod_1.z.number(),
    "startsOn": zod_1.z.number()
});
exports.CustomMenuSchema = CustomMenuSchema = zod_1.z.object({
    "disabledMenuItems": zod_1.z.array(zod_1.z.string()),
    "menuItems": zod_1.z.array(CustomMenuItemSchema)
});
exports.CustomMenuItemSchema = CustomMenuItemSchema = zod_1.z.object({
    "name": zod_1.z.string(),
    "iconUrl": zod_1.z.string(),
    "materialIcon": zod_1.z.string(),
    "iframeUrl": zod_1.z.string(),
    "dashboardId": zod_1.z.string(),
    "hideDashboardToolbar": zod_1.z.boolean(),
    "setAccessToken": zod_1.z.boolean(),
    "childMenuItems": zod_1.z.array(CustomMenuItemSchema)
});
exports.ConverterSchema = ConverterSchema = zod_1.z.object({
    "id": ConverterIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.enum(["DOWNLINK", "UPLINK"]),
    "debugMode": zod_1.z.boolean(),
    "configuration": JsonNodeSchema,
    "additionalInfo": JsonNodeSchema,
    "edgeTemplate": zod_1.z.boolean()
});
exports.ConverterIdSchema = ConverterIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["CONVERTER"])
});
exports.ContactBased_Of_objectSchema = ContactBased_Of_objectSchema = zod_1.z.object({
    "additionalInfo": JsonNodeSchema,
    "address": zod_1.z.string(),
    "address2": zod_1.z.string(),
    "city": zod_1.z.string(),
    "country": zod_1.z.string(),
    "createdTime": zod_1.z.number(),
    "email": zod_1.z.string(),
    "id": zod_1.z.object({}),
    "name": zod_1.z.string(),
    "phone": zod_1.z.string(),
    "state": zod_1.z.string(),
    "zip": zod_1.z.string()
});
exports.ComponentDescriptorSchema = ComponentDescriptorSchema = zod_1.z.object({
    "id": ComponentDescriptorIdSchema,
    "createdTime": zod_1.z.number(),
    "type": zod_1.z.enum(["ACTION", "ANALYTICS", "ENRICHMENT", "EXTERNAL", "FILTER", "FLOW", "TRANSFORMATION"]),
    "scope": zod_1.z.enum(["TENANT"]),
    "clusteringMode": zod_1.z.enum(["ENABLED", "SINGLETON", "USER_PREFERENCE"]),
    "name": zod_1.z.string(),
    "clazz": zod_1.z.string(),
    "configurationDescriptor": JsonNodeSchema,
    "configurationVersion": zod_1.z.number(),
    "actions": zod_1.z.string()
});
exports.ComponentDescriptorIdSchema = ComponentDescriptorIdSchema = zod_1.z.object({
    "id": zod_1.z.string()
});
exports.ComplexVersionCreateRequestSchema = ComplexVersionCreateRequestSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.ComplexFilterPredicateSchema = ComplexFilterPredicateSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.ComparisonTsValueSchema = ComparisonTsValueSchema = zod_1.z.object({
    "current": TsValueSchema,
    "previous": TsValueSchema
});
exports.TsValueSchema = TsValueSchema = zod_1.z.object({
    "count": zod_1.z.number(),
    "ts": zod_1.z.number(),
    "value": zod_1.z.string()
});
exports.CoapDeviceTypeConfigurationSchema = CoapDeviceTypeConfigurationSchema = zod_1.z.object({});
exports.CoapDeviceTransportConfigurationSchema = CoapDeviceTransportConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.CoapDeviceProfileTransportConfigurationSchema = CoapDeviceProfileTransportConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.ClientAttributesQueryingSnmpCommunicationConfigSchema = ClientAttributesQueryingSnmpCommunicationConfigSchema = zod_1.z.object({
    "mappings": zod_1.z.array(SnmpMappingSchema),
    "queryingFrequencyMs": zod_1.z.number(),
    "spec": zod_1.z.enum(["CLIENT_ATTRIBUTES_QUERYING", "SHARED_ATTRIBUTES_SETTING", "TELEMETRY_QUERYING", "TO_DEVICE_RPC_REQUEST", "TO_SERVER_RPC_REQUEST"])
});
exports.SnmpMappingSchema = SnmpMappingSchema = zod_1.z.object({
    "dataType": zod_1.z.enum(["BOOLEAN", "DOUBLE", "JSON", "LONG", "STRING"]),
    "key": zod_1.z.string(),
    "oid": zod_1.z.string()
});
exports.ClearRuleSchema = ClearRuleSchema = zod_1.z.object({
    "alarmStatuses": zod_1.z.array(zod_1.z.enum(["ACK", "ACTIVE", "ANY", "CLEARED", "UNACK"]))
});
exports.ClaimRequestSchema = ClaimRequestSchema = zod_1.z.object({
    "secretKey": zod_1.z.string()
});
exports.CheckPreProvisionedDevicesDeviceProfileProvisionConfigurationSchema = CheckPreProvisionedDevicesDeviceProfileProvisionConfigurationSchema = zod_1.z.object({
    "provisionDeviceSecret": zod_1.z.string()
});
exports.ChangePasswordRequestSchema = ChangePasswordRequestSchema = zod_1.z.object({
    "currentPassword": zod_1.z.string(),
    "newPassword": zod_1.z.string()
});
exports.ByteBufferSchema = ByteBufferSchema = zod_1.z.object({
    "char": zod_1.z.string(),
    "direct": zod_1.z.boolean(),
    "double": zod_1.z.number(),
    "float": zod_1.z.number(),
    "int": zod_1.z.number(),
    "long": zod_1.z.number(),
    "readOnly": zod_1.z.boolean(),
    "short": zod_1.z.number()
});
exports.ByteArrayResourceSchema = ByteArrayResourceSchema = zod_1.z.object({
    "byteArray": zod_1.z.string(),
    "description": zod_1.z.string(),
    "file": zod_1.z.string(),
    "filename": zod_1.z.string(),
    "inputStream": InputStreamSchema,
    "open": zod_1.z.boolean(),
    "readable": zod_1.z.boolean(),
    "uri": zod_1.z.string(),
    "url": zod_1.z.string()
});
exports.InputStreamSchema = InputStreamSchema = zod_1.z.object({});
exports.ButtonSchema = ButtonSchema = zod_1.z.object({
    "dashboardId": zod_1.z.string(),
    "dashboardState": zod_1.z.string(),
    "enabled": zod_1.z.boolean(),
    "link": zod_1.z.string(),
    "linkType": zod_1.z.enum(["DASHBOARD", "LINK"]),
    "setEntityIdInState": zod_1.z.boolean(),
    "text": zod_1.z.string()
});
exports.BulkImportResult_Of_EdgeSchema = BulkImportResult_Of_EdgeSchema = zod_1.z.object({
    "created": AtomicIntegerSchema,
    "errors": AtomicIntegerSchema,
    "errorsList": zod_1.z.array(zod_1.z.string()),
    "updated": AtomicIntegerSchema
});
exports.BulkImportResult_Of_DeviceSchema = BulkImportResult_Of_DeviceSchema = zod_1.z.object({
    "created": AtomicIntegerSchema,
    "errors": AtomicIntegerSchema,
    "errorsList": zod_1.z.array(zod_1.z.string()),
    "updated": AtomicIntegerSchema
});
exports.BulkImportResult_Of_AssetSchema = BulkImportResult_Of_AssetSchema = zod_1.z.object({
    "created": AtomicIntegerSchema,
    "errors": AtomicIntegerSchema,
    "errorsList": zod_1.z.array(zod_1.z.string()),
    "updated": AtomicIntegerSchema
});
exports.BulkImportRequestSchema = BulkImportRequestSchema = zod_1.z.object({
    "customerId": CustomerIdSchema,
    "entityGroupId": zod_1.z.string(),
    "file": zod_1.z.string(),
    "mapping": MappingSchema
});
exports.MappingSchema = MappingSchema = zod_1.z.object({
    "columns": zod_1.z.array(ColumnMappingSchema),
    "delimiter": zod_1.z.string(),
    "header": zod_1.z.boolean(),
    "update": zod_1.z.boolean()
});
exports.ColumnMappingSchema = ColumnMappingSchema = zod_1.z.object({
    "key": zod_1.z.string(),
    "type": zod_1.z.enum(["ACCESS_TOKEN", "CLOUD_ENDPOINT", "DESCRIPTION", "EDGE_LICENSE_KEY", "IS_GATEWAY", "LABEL", "LWM2M_BOOTSTRAP_SERVER_PUBLIC_KEY_OR_ID", "LWM2M_BOOTSTRAP_SERVER_SECRET_KEY", "LWM2M_BOOTSTRAP_SERVER_SECURITY_MODE", "LWM2M_CLIENT_CERT", "LWM2M_CLIENT_ENDPOINT", "LWM2M_CLIENT_IDENTITY", "LWM2M_CLIENT_KEY", "LWM2M_CLIENT_SECURITY_CONFIG_MODE", "LWM2M_SERVER_CLIENT_PUBLIC_KEY_OR_ID", "LWM2M_SERVER_CLIENT_SECRET_KEY", "LWM2M_SERVER_SECURITY_MODE", "MQTT_CLIENT_ID", "MQTT_PASSWORD", "MQTT_USER_NAME", "NAME", "ROUTING_KEY", "SECRET", "SERVER_ATTRIBUTE", "SHARED_ATTRIBUTE", "SNMP_COMMUNITY_STRING", "SNMP_HOST", "SNMP_PORT", "SNMP_VERSION", "TIMESERIES", "TYPE", "X509"])
});
exports.BranchInfoSchema = BranchInfoSchema = zod_1.z.object({
    "default": zod_1.z.boolean(),
    "name": zod_1.z.string()
});
exports.BooleanFilterPredicateSchema = BooleanFilterPredicateSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.BlobEntityWithCustomerInfoSchema = BlobEntityWithCustomerInfoSchema = zod_1.z.object({
    "id": BlobEntityIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "ownerId": EntityIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.string(),
    "contentType": zod_1.z.enum(["application/pdf", "image/jpeg", "image/png"]),
    "additionalInfo": JsonNodeSchema,
    "customerTitle": zod_1.z.string(),
    "customerIsPublic": zod_1.z.object({})
});
exports.BlobEntityInfoSchema = BlobEntityInfoSchema = zod_1.z.object({
    "id": BlobEntityIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "ownerId": EntityIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.string(),
    "contentType": zod_1.z.enum(["application/pdf", "image/jpeg", "image/png"]),
    "additionalInfo": JsonNodeSchema
});
exports.BlobEntityIdSchema = BlobEntityIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["BLOB_ENTITY"])
});
exports.BackupCodeTwoFaProviderConfigSchema = BackupCodeTwoFaProviderConfigSchema = zod_1.z.object({
    "codesQuantity": zod_1.z.number()
});
exports.BackupCodeTwoFaAccountConfigSchema = BackupCodeTwoFaAccountConfigSchema = zod_1.z.object({
    "codes": zod_1.z.array(zod_1.z.string()),
    "codesLeft": zod_1.z.number(),
    "useByDefault": zod_1.z.boolean()
});
exports.AwsSnsSmsProviderConfigurationSchema = AwsSnsSmsProviderConfigurationSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.AutoVersionCreateConfigSchema = AutoVersionCreateConfigSchema = zod_1.z.object({
    "branch": zod_1.z.string(),
    "saveAttributes": zod_1.z.boolean(),
    "saveCredentials": zod_1.z.boolean(),
    "saveGroupEntities": zod_1.z.boolean(),
    "savePermissions": zod_1.z.boolean(),
    "saveRelations": zod_1.z.boolean()
});
exports.AuditLogSchema = AuditLogSchema = zod_1.z.object({
    "id": AuditLogIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "entityId": EntityIdSchema,
    "entityName": zod_1.z.string(),
    "userId": UserIdSchema,
    "userName": zod_1.z.string(),
    "actionType": zod_1.z.enum(["ACTIVATED", "ADDED", "ADDED_COMMENT", "ADDED_TO_ENTITY_GROUP", "ALARM_ACK", "ALARM_ASSIGNED", "ALARM_CLEAR", "ALARM_DELETE", "ALARM_UNASSIGNED", "ASSIGNED_FROM_TENANT", "ASSIGNED_TO_CUSTOMER", "ASSIGNED_TO_EDGE", "ASSIGNED_TO_TENANT", "ATTRIBUTES_DELETED", "ATTRIBUTES_READ", "ATTRIBUTES_UPDATED", "CHANGE_OWNER", "CREDENTIALS_READ", "CREDENTIALS_UPDATED", "DELETED", "DELETED_COMMENT", "LOCKOUT", "LOGIN", "LOGOUT", "MADE_PRIVATE", "MADE_PUBLIC", "PROVISION_FAILURE", "PROVISION_SUCCESS", "RELATIONS_DELETED", "RELATION_ADD_OR_UPDATE", "RELATION_DELETED", "REMOVED_FROM_ENTITY_GROUP", "REST_API_RULE_ENGINE_CALL", "RPC_CALL", "SMS_SENT", "SUSPENDED", "TIMESERIES_DELETED", "TIMESERIES_UPDATED", "UNASSIGNED_FROM_CUSTOMER", "UNASSIGNED_FROM_EDGE", "UPDATED", "UPDATED_COMMENT"]),
    "actionData": JsonNodeSchema,
    "actionStatus": zod_1.z.enum(["FAILURE", "SUCCESS"]),
    "actionFailureDetails": zod_1.z.string()
});
exports.AuditLogIdSchema = AuditLogIdSchema = zod_1.z.object({
    "id": zod_1.z.string()
});
exports.AttributesEntityViewSchema = AttributesEntityViewSchema = zod_1.z.object({
    "cs": zod_1.z.array(zod_1.z.string()),
    "sh": zod_1.z.array(zod_1.z.string()),
    "ss": zod_1.z.array(zod_1.z.string())
});
exports.AttributeExportDataSchema = AttributeExportDataSchema = zod_1.z.object({
    "booleanValue": zod_1.z.boolean(),
    "doubleValue": zod_1.z.number(),
    "jsonValue": zod_1.z.string(),
    "key": zod_1.z.string(),
    "lastUpdateTs": zod_1.z.number(),
    "longValue": zod_1.z.number(),
    "strValue": zod_1.z.string()
});
exports.AtomicIntegerSchema = AtomicIntegerSchema = zod_1.z.object({
    "acquire": zod_1.z.number(),
    "andDecrement": zod_1.z.number(),
    "andIncrement": zod_1.z.number(),
    "opaque": zod_1.z.number(),
    "plain": zod_1.z.number()
});
exports.AssetTypeFilterSchema = AssetTypeFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.AssetSearchQueryFilterSchema = AssetSearchQueryFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.AssetSearchQuerySchema = AssetSearchQuerySchema = zod_1.z.object({
    "relationType": zod_1.z.string(),
    "assetTypes": zod_1.z.array(zod_1.z.string()),
    "parameters": RelationsSearchParametersSchema
});
exports.RelationsSearchParametersSchema = RelationsSearchParametersSchema = zod_1.z.object({
    "rootId": zod_1.z.string(),
    "rootType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]),
    "direction": zod_1.z.enum(["FROM", "TO"]),
    "relationTypeGroup": zod_1.z.enum(["COMMON", "DASHBOARD", "EDGE", "EDGE_AUTO_ASSIGN_RULE_CHAIN", "FROM_ENTITY_GROUP", "RULE_CHAIN", "RULE_NODE"]),
    "maxLevel": zod_1.z.number(),
    "fetchLastLevelOnly": zod_1.z.boolean()
});
exports.AssetProfileInfoSchema = AssetProfileInfoSchema = zod_1.z.object({
    "id": EntityIdSchema,
    "name": zod_1.z.string(),
    "image": zod_1.z.string(),
    "defaultDashboardId": DashboardIdSchema,
    "tenantId": TenantIdSchema
});
exports.AssetProfileSchema = AssetProfileSchema = zod_1.z.object({
    "id": AssetProfileIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "name": zod_1.z.string(),
    "default": zod_1.z.boolean(),
    "defaultDashboardId": DashboardIdSchema,
    "defaultRuleChainId": RuleChainIdSchema,
    "defaultQueueName": zod_1.z.string(),
    "description": zod_1.z.string(),
    "image": zod_1.z.string(),
    "defaultEdgeRuleChainId": RuleChainIdSchema
});
exports.RuleChainIdSchema = RuleChainIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["RULE_CHAIN"])
});
exports.AssetInfoSchema = AssetInfoSchema = zod_1.z.object({
    "id": AssetIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.string(),
    "label": zod_1.z.string(),
    "assetProfileId": AssetProfileIdSchema,
    "additionalInfo": JsonNodeSchema,
    "ownerId": EntityIdSchema,
    "ownerName": zod_1.z.string(),
    "groups": zod_1.z.array(EntityInfoSchema)
});
exports.EntityInfoSchema = EntityInfoSchema = zod_1.z.object({
    "id": EntityIdSchema,
    "name": zod_1.z.string()
});
exports.AssetSchema = AssetSchema = zod_1.z.object({
    "id": AssetIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.string(),
    "label": zod_1.z.string(),
    "assetProfileId": AssetProfileIdSchema,
    "additionalInfo": JsonNodeSchema,
    "ownerId": EntityIdSchema
});
exports.AssetProfileIdSchema = AssetProfileIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["ASSET_PROFILE"])
});
exports.AssetIdSchema = AssetIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["ASSET"])
});
exports.ArrayNodeSchema = ArrayNodeSchema = zod_1.z.object({});
exports.ApiUsageStateFilterSchema = ApiUsageStateFilterSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.ApiUsageLimitNotificationRuleTriggerConfigSchema = ApiUsageLimitNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.AnyTimeScheduleSchema = AnyTimeScheduleSchema = zod_1.z.object({
    "dynamicValue": DynamicValue_Of_stringSchema,
    "type": zod_1.z.enum(["ANY_TIME", "CUSTOM", "SPECIFIC_TIME"])
});
exports.AllowedPermissionsInfoSchema = AllowedPermissionsInfoSchema = zod_1.z.object({
    "userOwnerId": EntityIdSchema,
    "userPermissions": MergedUserPermissionsSchema,
    "allowedResources": zod_1.z.array(zod_1.z.enum(["ADMIN_SETTINGS", "ALARM", "ALL", "API_USAGE_STATE", "ASSET", "ASSET_GROUP", "ASSET_PROFILE", "AUDIT_LOG", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "CUSTOMER_GROUP", "DASHBOARD", "DASHBOARD_GROUP", "DEVICE", "DEVICE_GROUP", "DEVICE_PROFILE", "EDGE", "EDGE_GROUP", "ENTITY_VIEW", "ENTITY_VIEW_GROUP", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "OAUTH2_CONFIGURATION_INFO", "OAUTH2_CONFIGURATION_TEMPLATE", "OTA_PACKAGE", "PROFILE", "QUEUE", "ROLE", "RULE_CHAIN", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "USER_GROUP", "VERSION_CONTROL", "WHITE_LABELING", "WIDGETS_BUNDLE", "WIDGET_TYPE"])),
    "operationsByResource": zod_1.z.record(zod_1.z.string(), zod_1.z.array(zod_1.z.string())),
    "allowedForGroupRoleOperations": zod_1.z.array(zod_1.z.enum(["ADD_TO_GROUP", "ALL", "ASSIGN_TO_TENANT", "CHANGE_OWNER", "CLAIM_DEVICES", "CREATE", "DELETE", "IMPERSONATE", "READ", "READ_ATTRIBUTES", "READ_CREDENTIALS", "READ_TELEMETRY", "REMOVE_FROM_GROUP", "RPC_CALL", "SHARE_GROUP", "WRITE", "WRITE_ATTRIBUTES", "WRITE_CREDENTIALS", "WRITE_TELEMETRY"])),
    "allowedForGroupOwnerOnlyOperations": zod_1.z.array(zod_1.z.enum(["ADD_TO_GROUP", "ALL", "ASSIGN_TO_TENANT", "CHANGE_OWNER", "CLAIM_DEVICES", "CREATE", "DELETE", "IMPERSONATE", "READ", "READ_ATTRIBUTES", "READ_CREDENTIALS", "READ_TELEMETRY", "REMOVE_FROM_GROUP", "RPC_CALL", "SHARE_GROUP", "WRITE", "WRITE_ATTRIBUTES", "WRITE_CREDENTIALS", "WRITE_TELEMETRY"])),
    "allowedForGroupOwnerOnlyGroupOperations": zod_1.z.array(zod_1.z.enum(["ADD_TO_GROUP", "ALL", "ASSIGN_TO_TENANT", "CHANGE_OWNER", "CLAIM_DEVICES", "CREATE", "DELETE", "IMPERSONATE", "READ", "READ_ATTRIBUTES", "READ_CREDENTIALS", "READ_TELEMETRY", "REMOVE_FROM_GROUP", "RPC_CALL", "SHARE_GROUP", "WRITE", "WRITE_ATTRIBUTES", "WRITE_CREDENTIALS", "WRITE_TELEMETRY"]))
});
exports.MergedUserPermissionsSchema = MergedUserPermissionsSchema = zod_1.z.object({
    "genericPermissions": zod_1.z.record(zod_1.z.string(), zod_1.z.array(zod_1.z.string())),
    "groupPermissions": zod_1.z.record(zod_1.z.string(), MergedGroupPermissionInfoSchema),
    "readGroupPermissions": zod_1.z.record(zod_1.z.string(), MergedGroupTypePermissionInfoSchema),
    "readEntityPermissions": zod_1.z.record(zod_1.z.string(), MergedGroupTypePermissionInfoSchema),
    "readAttrPermissions": zod_1.z.record(zod_1.z.string(), MergedGroupTypePermissionInfoSchema),
    "readTsPermissions": zod_1.z.record(zod_1.z.string(), MergedGroupTypePermissionInfoSchema)
});
exports.MergedGroupTypePermissionInfoSchema = MergedGroupTypePermissionInfoSchema = zod_1.z.object({
    "hasGenericRead": zod_1.z.boolean(),
    "entityGroupIds": zod_1.z.array(EntityGroupIdSchema)
});
exports.EntityGroupIdSchema = EntityGroupIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["ENTITY_GROUP"])
});
exports.MergedGroupPermissionInfoSchema = MergedGroupPermissionInfoSchema = zod_1.z.object({
    "entityType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]),
    "operations": zod_1.z.array(zod_1.z.enum(["ADD_TO_GROUP", "ALL", "ASSIGN_TO_TENANT", "CHANGE_OWNER", "CLAIM_DEVICES", "CREATE", "DELETE", "IMPERSONATE", "READ", "READ_ATTRIBUTES", "READ_CREDENTIALS", "READ_TELEMETRY", "REMOVE_FROM_GROUP", "RPC_CALL", "SHARE_GROUP", "WRITE", "WRITE_ATTRIBUTES", "WRITE_CREDENTIALS", "WRITE_TELEMETRY"]))
});
exports.AllowCreateNewDevicesDeviceProfileProvisionConfigurationSchema = AllowCreateNewDevicesDeviceProfileProvisionConfigurationSchema = zod_1.z.object({
    "provisionDeviceSecret": zod_1.z.string()
});
exports.AllUsersFilterSchema = AllUsersFilterSchema = zod_1.z.object({});
exports.AlarmRuleSchema = AlarmRuleSchema = zod_1.z.object({
    "condition": AlarmConditionSchema,
    "schedule": AlarmScheduleSchema,
    "alarmDetails": zod_1.z.string(),
    "dashboardId": DashboardIdSchema
});
exports.DashboardIdSchema = DashboardIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["DASHBOARD"])
});
exports.AlarmScheduleSchema = AlarmScheduleSchema = zod_1.z.object({
    "dynamicValue": DynamicValue_Of_stringSchema,
    "type": zod_1.z.enum(["ANY_TIME", "CUSTOM", "SPECIFIC_TIME"])
});
exports.DynamicValue_Of_stringSchema = DynamicValue_Of_stringSchema = zod_1.z.object({
    "inherit": zod_1.z.boolean(),
    "sourceAttribute": zod_1.z.string(),
    "sourceType": zod_1.z.enum(["CURRENT_CUSTOMER", "CURRENT_DEVICE", "CURRENT_TENANT", "CURRENT_USER"])
});
exports.AlarmNotificationRuleTriggerConfigSchema = AlarmNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.AlarmInfoSchema = AlarmInfoSchema = zod_1.z.object({
    "id": AlarmIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.string(),
    "originator": EntityIdSchema,
    "severity": zod_1.z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"]),
    "acknowledged": zod_1.z.boolean(),
    "cleared": zod_1.z.boolean(),
    "assigneeId": UserIdSchema,
    "startTs": zod_1.z.number(),
    "endTs": zod_1.z.number(),
    "ackTs": zod_1.z.number(),
    "clearTs": zod_1.z.number(),
    "assignTs": zod_1.z.number(),
    "details": JsonNodeSchema,
    "propagateToOwnerHierarchy": zod_1.z.boolean(),
    "propagate": zod_1.z.boolean(),
    "propagateToTenant": zod_1.z.boolean(),
    "propagateRelationTypes": zod_1.z.array(zod_1.z.string()),
    "propagateToOwner": zod_1.z.boolean(),
    "originatorName": zod_1.z.string(),
    "originatorLabel": zod_1.z.string(),
    "assignee": AlarmAssigneeSchema,
    "status": zod_1.z.enum(["ACTIVE_ACK", "ACTIVE_UNACK", "CLEARED_ACK", "CLEARED_UNACK"])
});
exports.AlarmDataQuerySchema = AlarmDataQuerySchema = zod_1.z.object({
    "alarmFields": zod_1.z.array(EntityKeySchema),
    "entityFields": zod_1.z.array(EntityKeySchema),
    "entityFilter": EntityFilterSchema,
    "keyFilters": zod_1.z.array(KeyFilterSchema),
    "latestValues": zod_1.z.array(EntityKeySchema),
    "pageLink": AlarmDataPageLinkSchema
});
exports.AlarmDataPageLinkSchema = AlarmDataPageLinkSchema = zod_1.z.object({
    "assigneeId": UserIdSchema,
    "dynamic": zod_1.z.boolean(),
    "endTs": zod_1.z.number(),
    "page": zod_1.z.number(),
    "pageSize": zod_1.z.number(),
    "searchPropagatedAlarms": zod_1.z.boolean(),
    "severityList": zod_1.z.array(zod_1.z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"])),
    "sortOrder": EntityDataSortOrderSchema,
    "startTs": zod_1.z.number(),
    "statusList": zod_1.z.array(zod_1.z.enum(["ACK", "ACTIVE", "ANY", "CLEARED", "UNACK"])),
    "textSearch": zod_1.z.string(),
    "timeWindow": zod_1.z.number(),
    "typeList": zod_1.z.array(zod_1.z.string())
});
exports.EntityDataSortOrderSchema = EntityDataSortOrderSchema = zod_1.z.object({
    "direction": zod_1.z.enum(["ASC", "DESC"]),
    "key": EntityKeySchema
});
exports.AlarmDataSchema = AlarmDataSchema = zod_1.z.object({
    "entityId": EntityIdSchema,
    "latest": zod_1.z.record(zod_1.z.string(), zod_1.z.object({})),
    "id": AlarmIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.string(),
    "originator": EntityIdSchema,
    "severity": zod_1.z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"]),
    "acknowledged": zod_1.z.boolean(),
    "cleared": zod_1.z.boolean(),
    "assigneeId": UserIdSchema,
    "startTs": zod_1.z.number(),
    "endTs": zod_1.z.number(),
    "ackTs": zod_1.z.number(),
    "clearTs": zod_1.z.number(),
    "assignTs": zod_1.z.number(),
    "details": JsonNodeSchema,
    "propagateToOwnerHierarchy": zod_1.z.boolean(),
    "propagate": zod_1.z.boolean(),
    "propagateToTenant": zod_1.z.boolean(),
    "propagateRelationTypes": zod_1.z.array(zod_1.z.string()),
    "propagateToOwner": zod_1.z.boolean(),
    "originatorName": zod_1.z.string(),
    "originatorLabel": zod_1.z.string(),
    "assignee": AlarmAssigneeSchema,
    "status": zod_1.z.enum(["ACTIVE_ACK", "ACTIVE_UNACK", "CLEARED_ACK", "CLEARED_UNACK"])
});
exports.AlarmCountQuerySchema = AlarmCountQuerySchema = zod_1.z.object({
    "assigneeId": UserIdSchema,
    "endTs": zod_1.z.number(),
    "entityFilter": EntityFilterSchema,
    "keyFilters": zod_1.z.array(KeyFilterSchema),
    "searchPropagatedAlarms": zod_1.z.boolean(),
    "severityList": zod_1.z.array(zod_1.z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"])),
    "startTs": zod_1.z.number(),
    "statusList": zod_1.z.array(zod_1.z.enum(["ACK", "ACTIVE", "ANY", "CLEARED", "UNACK"])),
    "timeWindow": zod_1.z.number(),
    "typeList": zod_1.z.array(zod_1.z.string())
});
exports.KeyFilterSchema = KeyFilterSchema = zod_1.z.object({
    "key": EntityKeySchema,
    "predicate": KeyFilterPredicateSchema,
    "valueType": zod_1.z.enum(["BOOLEAN", "DATE_TIME", "NUMERIC", "STRING"])
});
exports.EntityKeySchema = EntityKeySchema = zod_1.z.object({
    "key": zod_1.z.string(),
    "type": zod_1.z.enum(["ALARM_FIELD", "ATTRIBUTE", "CLIENT_ATTRIBUTE", "ENTITY_FIELD", "SERVER_ATTRIBUTE", "SHARED_ATTRIBUTE", "TIME_SERIES"])
});
exports.EntityFilterSchema = EntityFilterSchema = zod_1.z.object({});
exports.AlarmConditionSchema = AlarmConditionSchema = zod_1.z.object({
    "condition": zod_1.z.array(AlarmConditionFilterSchema),
    "spec": AlarmConditionSpecSchema
});
exports.AlarmConditionSpecSchema = AlarmConditionSpecSchema = zod_1.z.object({});
exports.AlarmConditionFilterSchema = AlarmConditionFilterSchema = zod_1.z.object({
    "key": AlarmConditionFilterKeySchema,
    "valueType": zod_1.z.enum(["BOOLEAN", "DATE_TIME", "NUMERIC", "STRING"]),
    "value": zod_1.z.object({}),
    "predicate": KeyFilterPredicateSchema
});
exports.KeyFilterPredicateSchema = KeyFilterPredicateSchema = zod_1.z.object({});
exports.AlarmConditionFilterKeySchema = AlarmConditionFilterKeySchema = zod_1.z.object({
    "type": zod_1.z.enum(["ATTRIBUTE", "CONSTANT", "ENTITY_FIELD", "TIME_SERIES"]),
    "key": zod_1.z.string()
});
exports.AlarmCommentNotificationRuleTriggerConfigSchema = AlarmCommentNotificationRuleTriggerConfigSchema = zod_1.z.object({
    "alarmSeverities": zod_1.z.array(zod_1.z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"])),
    "alarmStatuses": zod_1.z.array(zod_1.z.enum(["ACK", "ACTIVE", "ANY", "CLEARED", "UNACK"])),
    "alarmTypes": zod_1.z.array(zod_1.z.string()),
    "notifyOnCommentUpdate": zod_1.z.boolean(),
    "onlyUserComments": zod_1.z.boolean(),
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
exports.AlarmCommentInfoSchema = AlarmCommentInfoSchema = zod_1.z.object({
    "id": AlarmCommentIdSchema,
    "createdTime": zod_1.z.number(),
    "alarmId": EntityIdSchema,
    "userId": UserIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.enum(["OTHER", "SYSTEM"]),
    "comment": JsonNodeSchema,
    "email": zod_1.z.string(),
    "firstName": zod_1.z.string(),
    "lastName": zod_1.z.string()
});
exports.AlarmCommentSchema = AlarmCommentSchema = zod_1.z.object({
    "id": AlarmCommentIdSchema,
    "createdTime": zod_1.z.number(),
    "alarmId": EntityIdSchema,
    "userId": UserIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.enum(["OTHER", "SYSTEM"]),
    "comment": JsonNodeSchema
});
exports.AlarmCommentIdSchema = AlarmCommentIdSchema = zod_1.z.object({
    "id": zod_1.z.string()
});
exports.AlarmAssignmentNotificationRuleTriggerConfigSchema = AlarmAssignmentNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => zod_1.z.object({}));
exports.AlarmAssigneeSchema = AlarmAssigneeSchema = zod_1.z.object({
    "email": zod_1.z.string(),
    "firstName": zod_1.z.string(),
    "id": UserIdSchema,
    "lastName": zod_1.z.string()
});
exports.AlarmSchema = AlarmSchema = zod_1.z.object({
    "id": AlarmIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "customerId": CustomerIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.string(),
    "originator": EntityIdSchema,
    "severity": zod_1.z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"]),
    "acknowledged": zod_1.z.boolean(),
    "cleared": zod_1.z.boolean(),
    "assigneeId": UserIdSchema,
    "startTs": zod_1.z.number(),
    "endTs": zod_1.z.number(),
    "ackTs": zod_1.z.number(),
    "clearTs": zod_1.z.number(),
    "assignTs": zod_1.z.number(),
    "details": JsonNodeSchema,
    "propagateToOwnerHierarchy": zod_1.z.boolean(),
    "propagate": zod_1.z.boolean(),
    "propagateToTenant": zod_1.z.boolean(),
    "propagateRelationTypes": zod_1.z.array(zod_1.z.string()),
    "propagateToOwner": zod_1.z.boolean(),
    "status": zod_1.z.enum(["ACTIVE_ACK", "ACTIVE_UNACK", "CLEARED_ACK", "CLEARED_UNACK"])
});
exports.UserIdSchema = UserIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["USER"])
});
exports.EntityIdSchema = EntityIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"])
});
exports.CustomerIdSchema = CustomerIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["CUSTOMER"])
});
exports.AlarmIdSchema = AlarmIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["ALARM"])
});
exports.AffectedUserFilterSchema = AffectedUserFilterSchema = zod_1.z.object({});
exports.AffectedTenantAdministratorsFilterSchema = AffectedTenantAdministratorsFilterSchema = zod_1.z.object({});
exports.AdminSettingsSchema = AdminSettingsSchema = zod_1.z.object({
    "id": AdminSettingsIdSchema,
    "createdTime": zod_1.z.number(),
    "tenantId": TenantIdSchema,
    "key": zod_1.z.string(),
    "jsonValue": JsonNodeSchema
});
exports.JsonNodeSchema = JsonNodeSchema = zod_1.z.object({});
exports.TenantIdSchema = TenantIdSchema = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["TENANT"])
});
exports.AdminSettingsIdSchema = AdminSettingsIdSchema = zod_1.z.object({
    "id": zod_1.z.string()
});
exports.ActivateUserRequestSchema = ActivateUserRequestSchema = zod_1.z.object({
    "activateToken": zod_1.z.string(),
    "password": zod_1.z.string()
});
exports.AccountTwoFaSettingsSchema = AccountTwoFaSettingsSchema = zod_1.z.object({
    "configs": zod_1.z.record(zod_1.z.string(), TwoFaAccountConfigSchema)
});
exports.TwoFaAccountConfigSchema = TwoFaAccountConfigSchema = zod_1.z.object({
    "useByDefault": zod_1.z.boolean()
});
