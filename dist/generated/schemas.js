"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackupCodeTwoFaAccountConfigSchema = exports.AwsSnsSmsProviderConfigurationSchema = exports.AutoVersionCreateConfigSchema = exports.AuditLogIdSchema = exports.AuditLogSchema = exports.AttributesEntityViewSchema = exports.AttributeExportDataSchema = exports.AtomicIntegerSchema = exports.AssetTypeFilterSchema = exports.AssetSearchQueryFilterSchema = exports.AssetSearchQuerySchema = exports.AssetProfileInfoSchema = exports.AssetProfileIdSchema = exports.AssetProfileSchema = exports.AssetInfoSchema = exports.AssetIdSchema = exports.AssetSchema = exports.ArrayNodeSchema = exports.ApiUsageStateFilterSchema = exports.ApiUsageLimitNotificationRuleTriggerConfigSchema = exports.AnyTimeScheduleSchema = exports.AllowedPermissionsInfoSchema = exports.AllowCreateNewDevicesDeviceProfileProvisionConfigurationSchema = exports.AllUsersFilterSchema = exports.AlarmScheduleSchema = exports.AlarmRuleSchema = exports.AlarmNotificationRuleTriggerConfigSchema = exports.AlarmInfoSchema = exports.AlarmIdSchema = exports.AlarmDataQuerySchema = exports.AlarmDataPageLinkSchema = exports.AlarmDataSchema = exports.AlarmCountQuerySchema = exports.AlarmConditionSpecSchema = exports.AlarmConditionFilterKeySchema = exports.AlarmConditionFilterSchema = exports.AlarmConditionSchema = exports.AlarmCommentNotificationRuleTriggerConfigSchema = exports.AlarmCommentInfoSchema = exports.AlarmCommentIdSchema = exports.AlarmCommentSchema = exports.AlarmAssignmentNotificationRuleTriggerConfigSchema = exports.AlarmAssigneeSchema = exports.AlarmSchema = exports.AffectedUserFilterSchema = exports.AffectedTenantAdministratorsFilterSchema = exports.AdminSettingsIdSchema = exports.AdminSettingsSchema = exports.ActivateUserRequestSchema = exports.AccountTwoFaSettingsSchema = void 0;
exports.DefaultRuleChainCreateRequestSchema = exports.DefaultDeviceTransportConfigurationSchema = exports.DefaultDeviceProfileTransportConfigurationSchema = exports.DefaultDeviceProfileConfigurationSchema = exports.DefaultDeviceConfigurationSchema = exports.DefaultCoapDeviceTypeConfigurationSchema = exports.DebugIntegrationEventFilterSchema = exports.DebugConverterEventFilterSchema = exports.DashboardInfoSchema = exports.DashboardIdSchema = exports.DashboardSchema = exports.CustomerUsersFilterSchema = exports.CustomerInfoSchema = exports.CustomerIdSchema = exports.CustomerSchema = exports.CustomTranslationSchema = exports.CustomTimeScheduleItemSchema = exports.CustomTimeScheduleSchema = exports.CustomMenuItemSchema = exports.CustomMenuSchema = exports.ConverterIdSchema = exports.ConverterSchema = exports.ContactBased_Of_objectSchema = exports.ComponentDescriptorIdSchema = exports.ComponentDescriptorSchema = exports.ComplexVersionCreateRequestSchema = exports.ComplexFilterPredicateSchema = exports.ComparisonTsValueSchema = exports.ColumnMappingSchema = exports.CoapDeviceTypeConfigurationSchema = exports.CoapDeviceTransportConfigurationSchema = exports.CoapDeviceProfileTransportConfigurationSchema = exports.ClientAttributesQueryingSnmpCommunicationConfigSchema = exports.ClearRuleSchema = exports.ClaimRequestSchema = exports.CheckPreProvisionedDevicesDeviceProfileProvisionConfigurationSchema = exports.ChangePasswordRequestSchema = exports.ByteBufferSchema = exports.ByteArrayResourceSchema = exports.ButtonSchema = exports.BulkImportResult_Of_EdgeSchema = exports.BulkImportResult_Of_DeviceSchema = exports.BulkImportResult_Of_AssetSchema = exports.BulkImportRequestSchema = exports.BranchInfoSchema = exports.BooleanFilterPredicateSchema = exports.BlobEntityWithCustomerInfoSchema = exports.BlobEntityInfoSchema = exports.BlobEntityIdSchema = exports.BackupCodeTwoFaProviderConfigSchema = void 0;
exports.EfentoCoapDeviceTypeConfigurationSchema = exports.EdgeTypeFilterSchema = exports.EdgeSearchQueryFilterSchema = exports.EdgeSearchQuerySchema = exports.EdgeInstructionsSchema = exports.EdgeInfoSchema = exports.EdgeIdSchema = exports.EdgeEventIdSchema = exports.EdgeEventSchema = exports.EdgeSchema = exports.DynamicValue_Of_stringSchema = exports.DynamicValue_Of_longSchema = exports.DynamicValue_Of_intSchema = exports.DynamicValue_Of_doubleSchema = exports.DynamicValue_Of_booleanSchema = exports.DurationAlarmConditionSpecSchema = exports.DisabledDeviceProfileProvisionConfigurationSchema = exports.DeviceTypeFilterSchema = exports.DeviceTransportConfigurationSchema = exports.DeviceSearchQueryFilterSchema = exports.DeviceSearchQuerySchema = exports.DeviceProfileTransportConfigurationSchema = exports.DeviceProfileProvisionConfigurationSchema = exports.DeviceProfileInfoSchema = exports.DeviceProfileIdSchema = exports.DeviceProfileDataSchema = exports.DeviceProfileConfigurationSchema = exports.DeviceProfileAlarmSchema = exports.DeviceProfileSchema = exports.DeviceInfoSchema = exports.DeviceIdSchema = exports.DeviceGroupOtaPackageSchema = exports.DeviceExportDataSchema = exports.DeviceDataSchema = exports.DeviceCredentialsIdSchema = exports.DeviceCredentialsSchema = exports.DeviceConfigurationSchema = exports.DeviceActivityNotificationRuleTriggerConfigSchema = exports.DeviceSchema = exports.DeliveryMethodNotificationTemplateSchema = exports.DeferredResult_Of_uuidSchema = exports.DeferredResult_Of_VoidSchema = exports.DeferredResult_Of_ResponseEntitySchema = exports.DeferredResult_Of_RepositorySettingsSchema = exports.DeferredResult_Of_PageData_Of_EntityVersionSchema = exports.DeferredResult_Of_List_Of_VersionedEntityInfoSchema = exports.DeferredResult_Of_List_Of_BranchInfoSchema = exports.DeferredResult_Of_EntityDataInfoSchema = exports.DeferredResult_Of_EntityDataDiffSchema = exports.DefaultTenantProfileConfigurationSchema = void 0;
exports.ExportableEntity_Of_EntityIdSchema = exports.EventInfoSchema = exports.EventIdSchema = exports.EventFilterSchema = exports.EscalatedNotificationRuleRecipientsConfigSchema = exports.ErrorEventFilterSchema = exports.EntityViewTypeFilterSchema = exports.EntityViewSearchQueryFilterSchema = exports.EntityViewSearchQuerySchema = exports.EntityViewInfoSchema = exports.EntityViewIdSchema = exports.EntityViewSchema = exports.EntityVersionSchema = exports.EntityTypeVersionLoadRequestSchema = exports.EntityTypeVersionLoadConfigSchema = exports.EntityTypeVersionCreateConfigSchema = exports.EntityTypeLoadResultSchema = exports.EntityTypeFilterSchema = exports.EntitySubtypeSchema = exports.EntityRelationsQuerySchema = exports.EntityRelationInfoSchema = exports.EntityRelationSchema = exports.EntityNameFilterSchema = exports.EntityLoadErrorSchema = exports.EntityListFilterSchema = exports.EntityKeySchema = exports.EntityInfoSchema = exports.EntityIdSchema = exports.EntityGroupNameFilterSchema = exports.EntityGroupListFilterSchema = exports.EntityGroupInfoSchema = exports.EntityGroupIdSchema = exports.EntityGroupFilterSchema = exports.EntityGroupExportDataSchema = exports.EntityGroupSchema = exports.EntityFilterSchema = exports.EntityExportData_Of_objectSchema = exports.EntityDataSortOrderSchema = exports.EntityDataQuerySchema = exports.EntityDataPageLinkSchema = exports.EntityDataInfoSchema = exports.EntityDataDiffSchema = exports.EntityDataSchema = exports.EntityCountQuerySchema = exports.EntityActionNotificationRuleTriggerConfigSchema = exports.EntitiesLimitNotificationRuleTriggerConfigSchema = exports.EntitiesByGroupNameFilterSchema = exports.EmailTwoFaProviderConfigSchema = exports.EmailTwoFaAccountConfigSchema = exports.EmailDeliveryMethodNotificationTemplateSchema = void 0;
exports.NotificationSchema = exports.NodeConnectionInfoSchema = exports.NoSecLwM2MBootstrapServerCredentialSchema = exports.NewPlatformVersionNotificationRuleTriggerConfigSchema = exports.MqttDeviceTransportConfigurationSchema = exports.MqttDeviceProfileTransportConfigurationSchema = exports.MicrosoftTeamsNotificationTargetConfigSchema = exports.MicrosoftTeamsDeliveryMethodNotificationTemplateSchema = exports.MergedUserPermissionsSchema = exports.MergedGroupTypePermissionInfoSchema = exports.MergedGroupPermissionInfoSchema = exports.MappingSchema = exports.Lwm2mDeviceTransportConfigurationSchema = exports.Lwm2mDeviceProfileTransportConfigurationSchema = exports.LwM2mResourceObserveSchema = exports.LwM2mObjectSchema = exports.LwM2mInstanceSchema = exports.LwM2MBootstrapServerCredentialSchema = exports.LoginWhiteLabelingParamsSchema = exports.LoginResponseSchema = exports.LoginRequestSchema = exports.LifeCycleEventFilterSchema = exports.LicenseUsageInfoSchema = exports.LastVisitedDashboardInfoSchema = exports.KeyFilterPredicateSchema = exports.KeyFilterSchema = exports.JsonTransportPayloadConfigurationSchema = exports.JsonNodeSchema = exports.JWT_SettingsSchema = exports.JWT_PairSchema = exports.IntegrationLifecycleEventNotificationRuleTriggerConfigSchema = exports.IntegrationInfoSchema = exports.IntegrationIdSchema = exports.IntegrationSchema = exports.InputStreamSchema = exports.ImageExportDataSchema = exports.HomeDashboardInfoSchema = exports.HomeDashboardSchema = exports.HasId_Of_objectSchema = exports.GroupPermissionInfoSchema = exports.GroupPermissionIdSchema = exports.GroupPermissionSchema = exports.GroupEntityExportDataSchema = exports.FilterPredicateValue_Of_stringSchema = exports.FilterPredicateValue_Of_longSchema = exports.FilterPredicateValue_Of_intSchema = exports.FilterPredicateValue_Of_doubleSchema = exports.FilterPredicateValue_Of_booleanSchema = exports.FeaturesInfoSchema = exports.FaviconSchema = void 0;
exports.PageData_Of_AuditLogSchema = exports.PageData_Of_AssetSchema = exports.PageData_Of_AssetProfileSchema = exports.PageData_Of_AssetProfileInfoSchema = exports.PageData_Of_AssetInfoSchema = exports.PageData_Of_AlarmInfoSchema = exports.PageData_Of_AlarmDataSchema = exports.PageData_Of_AlarmCommentInfoSchema = exports.PSKLwM2MBootstrapServerCredentialSchema = exports.OtherConfigurationSchema = exports.OtaPackageInfoSchema = exports.OtaPackageIdSchema = exports.OtaPackageSchema = exports.OriginatorEntityOwnerUsersFilterSchema = exports.ObjectNodeSchema = exports.ObjectAttributesSchema = exports.OAuth2RegistrationInfoSchema = exports.OAuth2ParamsInfoSchema = exports.OAuth2MobileInfoSchema = exports.OAuth2MapperConfigSchema = exports.OAuth2InfoSchema = exports.OAuth2DomainInfoSchema = exports.OAuth2CustomMapperConfigSchema = exports.OAuth2ClientRegistrationTemplateIdSchema = exports.OAuth2ClientRegistrationTemplateSchema = exports.OAuth2ClientInfoSchema = exports.OAuth2BasicMapperConfigSchema = exports.NumericFilterPredicateSchema = exports.NotificationTemplateIdSchema = exports.NotificationTemplateConfigSchema = exports.NotificationTemplateSchema = exports.NotificationTargetConfigSchema = exports.NotificationTargetSchema = exports.NotificationSettingsSchema = exports.NotificationRuleTriggerConfigSchema = exports.NotificationRuleRecipientsConfigSchema = exports.NotificationRuleInfoSchema = exports.NotificationRuleIdSchema = exports.NotificationRuleConfigSchema = exports.NotificationRuleSchema = exports.NotificationRequestStatsSchema = exports.NotificationRequestPreviewSchema = exports.NotificationRequestInfoSchema = exports.NotificationRequestIdSchema = exports.NotificationRequestConfigSchema = exports.NotificationRequestSchema = exports.NotificationPrefSchema = exports.NotificationInfoSchema = exports.NotificationIdSchema = exports.NotificationDeliveryMethodConfigSchema = void 0;
exports.ProtoTransportPayloadConfigurationSchema = exports.ProcessingStrategySchema = exports.PowerSavingConfigurationSchema = exports.PlatformUsersNotificationTargetConfigSchema = exports.PlatformTwoFaSettingsSchema = exports.PaletteSettingsSchema = exports.PaletteSchema = exports.PageData_Of_WidgetsBundleSchema = exports.PageData_Of_WidgetTypeInfoSchema = exports.PageData_Of_UserSchema = exports.PageData_Of_UserInfoSchema = exports.PageData_Of_UserEmailInfoSchema = exports.PageData_Of_TenantSchema = exports.PageData_Of_TenantProfileSchema = exports.PageData_Of_TenantInfoSchema = exports.PageData_Of_TbResourceInfoSchema = exports.PageData_Of_ShortEntityViewSchema = exports.PageData_Of_SchedulerEventInfoSchema = exports.PageData_Of_RuleChainSchema = exports.PageData_Of_RoleSchema = exports.PageData_Of_QueueSchema = exports.PageData_Of_OtaPackageInfoSchema = exports.PageData_Of_NotificationSchema = exports.PageData_Of_NotificationTemplateSchema = exports.PageData_Of_NotificationTargetSchema = exports.PageData_Of_NotificationRuleInfoSchema = exports.PageData_Of_NotificationRequestInfoSchema = exports.PageData_Of_IntegrationSchema = exports.PageData_Of_IntegrationInfoSchema = exports.PageData_Of_EventInfoSchema = exports.PageData_Of_EntityViewSchema = exports.PageData_Of_EntityViewInfoSchema = exports.PageData_Of_EntityVersionSchema = exports.PageData_Of_EntitySubtypeSchema = exports.PageData_Of_EntityInfoSchema = exports.PageData_Of_EntityGroupInfoSchema = exports.PageData_Of_EntityDataSchema = exports.PageData_Of_EdgeSchema = exports.PageData_Of_EdgeInfoSchema = exports.PageData_Of_EdgeEventSchema = exports.PageData_Of_DeviceSchema = exports.PageData_Of_DeviceProfileSchema = exports.PageData_Of_DeviceProfileInfoSchema = exports.PageData_Of_DeviceInfoSchema = exports.PageData_Of_DashboardInfoSchema = exports.PageData_Of_CustomerSchema = exports.PageData_Of_CustomerInfoSchema = exports.PageData_Of_ConverterSchema = exports.PageData_Of_ContactBased_Of_objectSchema = exports.PageData_Of_BlobEntityWithCustomerInfoSchema = void 0;
exports.SingleEntityFilterSchema = exports.SimpleAlarmConditionSpecSchema = exports.SignUpSelfRegistrationParamsSchema = exports.SignUpRequestSchema = exports.ShortEntityViewSchema = exports.ShortCustomerInfoSchema = exports.SharedAttributesSettingSnmpCommunicationConfigSchema = exports.ShareGroupRequestSchema = exports.SelfRegistrationParamsSchema = exports.SecuritySettingsSchema = exports.SchedulerEventWithCustomerInfoSchema = exports.SchedulerEventInfoSchema = exports.SchedulerEventIdSchema = exports.SchedulerEventFilterSchema = exports.SchedulerEventSchema = exports.SaveOtaPackageInfoRequestSchema = exports.SaveDeviceWithCredentialsRequestSchema = exports.RuleNodeIdSchema = exports.RuleNodeDebugEventFilterSchema = exports.RuleNodeSchema = exports.RuleEngineComponentLifecycleEventNotificationRuleTriggerConfigSchema = exports.RuleChainOutputLabelsUsageSchema = exports.RuleChainMetaDataSchema = exports.RuleChainImportResultSchema = exports.RuleChainIdSchema = exports.RuleChainExportDataSchema = exports.RuleChainDebugEventFilterSchema = exports.RuleChainDataSchema = exports.RuleChainConnectionInfoSchema = exports.RuleChainSchema = exports.RpcIdSchema = exports.RpcSchema = exports.RoleIdSchema = exports.RoleSchema = exports.ResponseEntitySchema = exports.ResourceSchema = exports.ResetPasswordRequestSchema = exports.ResetPasswordEmailRequestSchema = exports.RepositorySettingsInfoSchema = exports.RepositorySettingsSchema = exports.ReportConfigSchema = exports.RepeatingAlarmConditionSpecSchema = exports.RelationsSearchParametersSchema = exports.RelationsQueryFilterSchema = exports.RelationEntityTypeFilterSchema = exports.RawDataEventFilterSchema = exports.RateLimitsNotificationRuleTriggerConfigSchema = exports.RPKLwM2MBootstrapServerCredentialSchema = exports.QueueIdSchema = exports.QueueSchema = void 0;
exports.TotpTwoFaAccountConfigSchema = exports.ToServerRpcRequestSnmpCommunicationConfigSchema = exports.ToDeviceRpcRequestSnmpCommunicationConfigSchema = exports.ThingsboardErrorResponseSchema = exports.ThingsboardCredentialsExpiredResponseSchema = exports.TestSmsRequestSchema = exports.TenantSolutionTemplateInstructionsSchema = exports.TenantSolutionTemplateInfoSchema = exports.TenantSolutionTemplateDetailsSchema = exports.TenantProfileQueueConfigurationSchema = exports.TenantProfileIdSchema = exports.TenantProfileDataSchema = exports.TenantProfileConfigurationSchema = exports.TenantProfileSchema = exports.TenantInfoSchema = exports.TenantIdSchema = exports.TenantAdministratorsFilterSchema = exports.TenantSchema = exports.TelemetryQueryingSnmpCommunicationConfigSchema = exports.TelemetryMappingConfigurationSchema = exports.TelemetryEntityViewSchema = exports.TbResourceInfoSchema = exports.TbResourceIdSchema = exports.TbResourceSchema = exports.TbImageDeleteResultSchema = exports.SystemInfoDataSchema = exports.SystemInfoSchema = exports.SystemAdministratorsFilterSchema = exports.SubmitStrategySchema = exports.StringFilterPredicateSchema = exports.StatisticsEventFilterSchema = exports.StateEntityOwnerFilterSchema = exports.StarredDashboardInfoSchema = exports.SpecificTimeScheduleSchema = exports.SolutionInstallResponseSchema = exports.SnmpMappingSchema = exports.SnmpDeviceTransportConfigurationSchema = exports.SnmpDeviceProfileTransportConfigurationSchema = exports.SnmpCommunicationConfigSchema = exports.SmsTwoFaProviderConfigSchema = exports.SmsTwoFaAccountConfigSchema = exports.SmsProviderConfigurationSchema = exports.SmsDeliveryMethodNotificationTemplateSchema = exports.SmppSmsProviderConfigurationSchema = exports.SlackNotificationTargetConfigSchema = exports.SlackNotificationDeliveryMethodConfigSchema = exports.SlackDeliveryMethodNotificationTemplateSchema = exports.SlackConversationSchema = exports.SingleEntityVersionLoadRequestSchema = exports.SingleEntityVersionCreateRequestSchema = void 0;
exports.X509LwM2MBootstrapServerCredentialSchema = exports.X509CertificateChainProvisionConfigurationSchema = exports.WidgetsBundleIdSchema = exports.WidgetsBundleExportDataSchema = exports.WidgetsBundleSchema = exports.WidgetTypeInfoSchema = exports.WidgetTypeIdSchema = exports.WidgetTypeExportDataSchema = exports.WidgetTypeDetailsSchema = exports.WidgetTypeSchema = exports.WhiteLabelingParamsSchema = exports.WhiteLabelingSchema = exports.WebDeliveryMethodNotificationTemplateSchema = exports.VersionedEntityInfoSchema = exports.VersionLoadResultSchema = exports.VersionLoadRequestSchema = exports.VersionLoadConfigSchema = exports.VersionCreationResultSchema = exports.VersionCreateRequestSchema = exports.VersionCreateConfigSchema = exports.UsersFilterSchema = exports.UserRoleFilterSchema = exports.UserPasswordPolicySchema = exports.UserNotificationSettingsSchema = exports.UserListFilterSchema = exports.UserInfoSchema = exports.UserIdSchema = exports.UserGroupListFilterSchema = exports.UserEmailInfoSchema = exports.UserDashboardsInfoSchema = exports.UserSchema = exports.UsageInfoSchema = exports.UpdateMessageSchema = exports.TwoFaProviderInfoSchema = exports.TwoFaProviderConfigSchema = exports.TwoFaAccountConfigUpdateRequestSchema = exports.TwoFaAccountConfigSchema = exports.TwilioSmsProviderConfigurationSchema = exports.TsValueSchema = exports.TransportPayloadTypeConfigurationSchema = exports.TotpTwoFaProviderConfigSchema = void 0;
const zod_1 = require("zod");
exports.AccountTwoFaSettingsSchema = zod_1.z.lazy(() => AccountTwoFaSettingsSchemaImpl);
exports.ActivateUserRequestSchema = zod_1.z.lazy(() => ActivateUserRequestSchemaImpl);
exports.AdminSettingsSchema = zod_1.z.lazy(() => AdminSettingsSchemaImpl);
exports.AdminSettingsIdSchema = zod_1.z.lazy(() => AdminSettingsIdSchemaImpl);
exports.AffectedTenantAdministratorsFilterSchema = zod_1.z.lazy(() => AffectedTenantAdministratorsFilterSchemaImpl);
exports.AffectedUserFilterSchema = zod_1.z.lazy(() => AffectedUserFilterSchemaImpl);
exports.AlarmSchema = zod_1.z.lazy(() => AlarmSchemaImpl);
exports.AlarmAssigneeSchema = zod_1.z.lazy(() => AlarmAssigneeSchemaImpl);
exports.AlarmAssignmentNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => AlarmAssignmentNotificationRuleTriggerConfigSchemaImpl);
exports.AlarmCommentSchema = zod_1.z.lazy(() => AlarmCommentSchemaImpl);
exports.AlarmCommentIdSchema = zod_1.z.lazy(() => AlarmCommentIdSchemaImpl);
exports.AlarmCommentInfoSchema = zod_1.z.lazy(() => AlarmCommentInfoSchemaImpl);
exports.AlarmCommentNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => AlarmCommentNotificationRuleTriggerConfigSchemaImpl);
exports.AlarmConditionSchema = zod_1.z.lazy(() => AlarmConditionSchemaImpl);
exports.AlarmConditionFilterSchema = zod_1.z.lazy(() => AlarmConditionFilterSchemaImpl);
exports.AlarmConditionFilterKeySchema = zod_1.z.lazy(() => AlarmConditionFilterKeySchemaImpl);
exports.AlarmConditionSpecSchema = zod_1.z.lazy(() => AlarmConditionSpecSchemaImpl);
exports.AlarmCountQuerySchema = zod_1.z.lazy(() => AlarmCountQuerySchemaImpl);
exports.AlarmDataSchema = zod_1.z.lazy(() => AlarmDataSchemaImpl);
exports.AlarmDataPageLinkSchema = zod_1.z.lazy(() => AlarmDataPageLinkSchemaImpl);
exports.AlarmDataQuerySchema = zod_1.z.lazy(() => AlarmDataQuerySchemaImpl);
exports.AlarmIdSchema = zod_1.z.lazy(() => AlarmIdSchemaImpl);
exports.AlarmInfoSchema = zod_1.z.lazy(() => AlarmInfoSchemaImpl);
exports.AlarmNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => AlarmNotificationRuleTriggerConfigSchemaImpl);
exports.AlarmRuleSchema = zod_1.z.lazy(() => AlarmRuleSchemaImpl);
exports.AlarmScheduleSchema = zod_1.z.lazy(() => AlarmScheduleSchemaImpl);
exports.AllUsersFilterSchema = zod_1.z.lazy(() => AllUsersFilterSchemaImpl);
exports.AllowCreateNewDevicesDeviceProfileProvisionConfigurationSchema = zod_1.z.lazy(() => AllowCreateNewDevicesDeviceProfileProvisionConfigurationSchemaImpl);
exports.AllowedPermissionsInfoSchema = zod_1.z.lazy(() => AllowedPermissionsInfoSchemaImpl);
exports.AnyTimeScheduleSchema = zod_1.z.lazy(() => AnyTimeScheduleSchemaImpl);
exports.ApiUsageLimitNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => ApiUsageLimitNotificationRuleTriggerConfigSchemaImpl);
exports.ApiUsageStateFilterSchema = zod_1.z.lazy(() => ApiUsageStateFilterSchemaImpl);
exports.ArrayNodeSchema = zod_1.z.lazy(() => ArrayNodeSchemaImpl);
exports.AssetSchema = zod_1.z.lazy(() => AssetSchemaImpl);
exports.AssetIdSchema = zod_1.z.lazy(() => AssetIdSchemaImpl);
exports.AssetInfoSchema = zod_1.z.lazy(() => AssetInfoSchemaImpl);
exports.AssetProfileSchema = zod_1.z.lazy(() => AssetProfileSchemaImpl);
exports.AssetProfileIdSchema = zod_1.z.lazy(() => AssetProfileIdSchemaImpl);
exports.AssetProfileInfoSchema = zod_1.z.lazy(() => AssetProfileInfoSchemaImpl);
exports.AssetSearchQuerySchema = zod_1.z.lazy(() => AssetSearchQuerySchemaImpl);
exports.AssetSearchQueryFilterSchema = zod_1.z.lazy(() => AssetSearchQueryFilterSchemaImpl);
exports.AssetTypeFilterSchema = zod_1.z.lazy(() => AssetTypeFilterSchemaImpl);
exports.AtomicIntegerSchema = zod_1.z.lazy(() => AtomicIntegerSchemaImpl);
exports.AttributeExportDataSchema = zod_1.z.lazy(() => AttributeExportDataSchemaImpl);
exports.AttributesEntityViewSchema = zod_1.z.lazy(() => AttributesEntityViewSchemaImpl);
exports.AuditLogSchema = zod_1.z.lazy(() => AuditLogSchemaImpl);
exports.AuditLogIdSchema = zod_1.z.lazy(() => AuditLogIdSchemaImpl);
exports.AutoVersionCreateConfigSchema = zod_1.z.lazy(() => AutoVersionCreateConfigSchemaImpl);
exports.AwsSnsSmsProviderConfigurationSchema = zod_1.z.lazy(() => AwsSnsSmsProviderConfigurationSchemaImpl);
exports.BackupCodeTwoFaAccountConfigSchema = zod_1.z.lazy(() => BackupCodeTwoFaAccountConfigSchemaImpl);
exports.BackupCodeTwoFaProviderConfigSchema = zod_1.z.lazy(() => BackupCodeTwoFaProviderConfigSchemaImpl);
exports.BlobEntityIdSchema = zod_1.z.lazy(() => BlobEntityIdSchemaImpl);
exports.BlobEntityInfoSchema = zod_1.z.lazy(() => BlobEntityInfoSchemaImpl);
exports.BlobEntityWithCustomerInfoSchema = zod_1.z.lazy(() => BlobEntityWithCustomerInfoSchemaImpl);
exports.BooleanFilterPredicateSchema = zod_1.z.lazy(() => BooleanFilterPredicateSchemaImpl);
exports.BranchInfoSchema = zod_1.z.lazy(() => BranchInfoSchemaImpl);
exports.BulkImportRequestSchema = zod_1.z.lazy(() => BulkImportRequestSchemaImpl);
exports.BulkImportResult_Of_AssetSchema = zod_1.z.lazy(() => BulkImportResult_Of_AssetSchemaImpl);
exports.BulkImportResult_Of_DeviceSchema = zod_1.z.lazy(() => BulkImportResult_Of_DeviceSchemaImpl);
exports.BulkImportResult_Of_EdgeSchema = zod_1.z.lazy(() => BulkImportResult_Of_EdgeSchemaImpl);
exports.ButtonSchema = zod_1.z.lazy(() => ButtonSchemaImpl);
exports.ByteArrayResourceSchema = zod_1.z.lazy(() => ByteArrayResourceSchemaImpl);
exports.ByteBufferSchema = zod_1.z.lazy(() => ByteBufferSchemaImpl);
exports.ChangePasswordRequestSchema = zod_1.z.lazy(() => ChangePasswordRequestSchemaImpl);
exports.CheckPreProvisionedDevicesDeviceProfileProvisionConfigurationSchema = zod_1.z.lazy(() => CheckPreProvisionedDevicesDeviceProfileProvisionConfigurationSchemaImpl);
exports.ClaimRequestSchema = zod_1.z.lazy(() => ClaimRequestSchemaImpl);
exports.ClearRuleSchema = zod_1.z.lazy(() => ClearRuleSchemaImpl);
exports.ClientAttributesQueryingSnmpCommunicationConfigSchema = zod_1.z.lazy(() => ClientAttributesQueryingSnmpCommunicationConfigSchemaImpl);
exports.CoapDeviceProfileTransportConfigurationSchema = zod_1.z.lazy(() => CoapDeviceProfileTransportConfigurationSchemaImpl);
exports.CoapDeviceTransportConfigurationSchema = zod_1.z.lazy(() => CoapDeviceTransportConfigurationSchemaImpl);
exports.CoapDeviceTypeConfigurationSchema = zod_1.z.lazy(() => CoapDeviceTypeConfigurationSchemaImpl);
exports.ColumnMappingSchema = zod_1.z.lazy(() => ColumnMappingSchemaImpl);
exports.ComparisonTsValueSchema = zod_1.z.lazy(() => ComparisonTsValueSchemaImpl);
exports.ComplexFilterPredicateSchema = zod_1.z.lazy(() => ComplexFilterPredicateSchemaImpl);
exports.ComplexVersionCreateRequestSchema = zod_1.z.lazy(() => ComplexVersionCreateRequestSchemaImpl);
exports.ComponentDescriptorSchema = zod_1.z.lazy(() => ComponentDescriptorSchemaImpl);
exports.ComponentDescriptorIdSchema = zod_1.z.lazy(() => ComponentDescriptorIdSchemaImpl);
exports.ContactBased_Of_objectSchema = zod_1.z.lazy(() => ContactBased_Of_objectSchemaImpl);
exports.ConverterSchema = zod_1.z.lazy(() => ConverterSchemaImpl);
exports.ConverterIdSchema = zod_1.z.lazy(() => ConverterIdSchemaImpl);
exports.CustomMenuSchema = zod_1.z.lazy(() => CustomMenuSchemaImpl);
exports.CustomMenuItemSchema = zod_1.z.lazy(() => CustomMenuItemSchemaImpl);
exports.CustomTimeScheduleSchema = zod_1.z.lazy(() => CustomTimeScheduleSchemaImpl);
exports.CustomTimeScheduleItemSchema = zod_1.z.lazy(() => CustomTimeScheduleItemSchemaImpl);
exports.CustomTranslationSchema = zod_1.z.lazy(() => CustomTranslationSchemaImpl);
exports.CustomerSchema = zod_1.z.lazy(() => CustomerSchemaImpl);
exports.CustomerIdSchema = zod_1.z.lazy(() => CustomerIdSchemaImpl);
exports.CustomerInfoSchema = zod_1.z.lazy(() => CustomerInfoSchemaImpl);
exports.CustomerUsersFilterSchema = zod_1.z.lazy(() => CustomerUsersFilterSchemaImpl);
exports.DashboardSchema = zod_1.z.lazy(() => DashboardSchemaImpl);
exports.DashboardIdSchema = zod_1.z.lazy(() => DashboardIdSchemaImpl);
exports.DashboardInfoSchema = zod_1.z.lazy(() => DashboardInfoSchemaImpl);
exports.DebugConverterEventFilterSchema = zod_1.z.lazy(() => DebugConverterEventFilterSchemaImpl);
exports.DebugIntegrationEventFilterSchema = zod_1.z.lazy(() => DebugIntegrationEventFilterSchemaImpl);
exports.DefaultCoapDeviceTypeConfigurationSchema = zod_1.z.lazy(() => DefaultCoapDeviceTypeConfigurationSchemaImpl);
exports.DefaultDeviceConfigurationSchema = zod_1.z.lazy(() => DefaultDeviceConfigurationSchemaImpl);
exports.DefaultDeviceProfileConfigurationSchema = zod_1.z.lazy(() => DefaultDeviceProfileConfigurationSchemaImpl);
exports.DefaultDeviceProfileTransportConfigurationSchema = zod_1.z.lazy(() => DefaultDeviceProfileTransportConfigurationSchemaImpl);
exports.DefaultDeviceTransportConfigurationSchema = zod_1.z.lazy(() => DefaultDeviceTransportConfigurationSchemaImpl);
exports.DefaultRuleChainCreateRequestSchema = zod_1.z.lazy(() => DefaultRuleChainCreateRequestSchemaImpl);
exports.DefaultTenantProfileConfigurationSchema = zod_1.z.lazy(() => DefaultTenantProfileConfigurationSchemaImpl);
exports.DeferredResult_Of_EntityDataDiffSchema = zod_1.z.lazy(() => DeferredResult_Of_EntityDataDiffSchemaImpl);
exports.DeferredResult_Of_EntityDataInfoSchema = zod_1.z.lazy(() => DeferredResult_Of_EntityDataInfoSchemaImpl);
exports.DeferredResult_Of_List_Of_BranchInfoSchema = zod_1.z.lazy(() => DeferredResult_Of_List_Of_BranchInfoSchemaImpl);
exports.DeferredResult_Of_List_Of_VersionedEntityInfoSchema = zod_1.z.lazy(() => DeferredResult_Of_List_Of_VersionedEntityInfoSchemaImpl);
exports.DeferredResult_Of_PageData_Of_EntityVersionSchema = zod_1.z.lazy(() => DeferredResult_Of_PageData_Of_EntityVersionSchemaImpl);
exports.DeferredResult_Of_RepositorySettingsSchema = zod_1.z.lazy(() => DeferredResult_Of_RepositorySettingsSchemaImpl);
exports.DeferredResult_Of_ResponseEntitySchema = zod_1.z.lazy(() => DeferredResult_Of_ResponseEntitySchemaImpl);
exports.DeferredResult_Of_VoidSchema = zod_1.z.lazy(() => DeferredResult_Of_VoidSchemaImpl);
exports.DeferredResult_Of_uuidSchema = zod_1.z.lazy(() => DeferredResult_Of_uuidSchemaImpl);
exports.DeliveryMethodNotificationTemplateSchema = zod_1.z.lazy(() => DeliveryMethodNotificationTemplateSchemaImpl);
exports.DeviceSchema = zod_1.z.lazy(() => DeviceSchemaImpl);
exports.DeviceActivityNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => DeviceActivityNotificationRuleTriggerConfigSchemaImpl);
exports.DeviceConfigurationSchema = zod_1.z.lazy(() => DeviceConfigurationSchemaImpl);
exports.DeviceCredentialsSchema = zod_1.z.lazy(() => DeviceCredentialsSchemaImpl);
exports.DeviceCredentialsIdSchema = zod_1.z.lazy(() => DeviceCredentialsIdSchemaImpl);
exports.DeviceDataSchema = zod_1.z.lazy(() => DeviceDataSchemaImpl);
exports.DeviceExportDataSchema = zod_1.z.lazy(() => DeviceExportDataSchemaImpl);
exports.DeviceGroupOtaPackageSchema = zod_1.z.lazy(() => DeviceGroupOtaPackageSchemaImpl);
exports.DeviceIdSchema = zod_1.z.lazy(() => DeviceIdSchemaImpl);
exports.DeviceInfoSchema = zod_1.z.lazy(() => DeviceInfoSchemaImpl);
exports.DeviceProfileSchema = zod_1.z.lazy(() => DeviceProfileSchemaImpl);
exports.DeviceProfileAlarmSchema = zod_1.z.lazy(() => DeviceProfileAlarmSchemaImpl);
exports.DeviceProfileConfigurationSchema = zod_1.z.lazy(() => DeviceProfileConfigurationSchemaImpl);
exports.DeviceProfileDataSchema = zod_1.z.lazy(() => DeviceProfileDataSchemaImpl);
exports.DeviceProfileIdSchema = zod_1.z.lazy(() => DeviceProfileIdSchemaImpl);
exports.DeviceProfileInfoSchema = zod_1.z.lazy(() => DeviceProfileInfoSchemaImpl);
exports.DeviceProfileProvisionConfigurationSchema = zod_1.z.lazy(() => DeviceProfileProvisionConfigurationSchemaImpl);
exports.DeviceProfileTransportConfigurationSchema = zod_1.z.lazy(() => DeviceProfileTransportConfigurationSchemaImpl);
exports.DeviceSearchQuerySchema = zod_1.z.lazy(() => DeviceSearchQuerySchemaImpl);
exports.DeviceSearchQueryFilterSchema = zod_1.z.lazy(() => DeviceSearchQueryFilterSchemaImpl);
exports.DeviceTransportConfigurationSchema = zod_1.z.lazy(() => DeviceTransportConfigurationSchemaImpl);
exports.DeviceTypeFilterSchema = zod_1.z.lazy(() => DeviceTypeFilterSchemaImpl);
exports.DisabledDeviceProfileProvisionConfigurationSchema = zod_1.z.lazy(() => DisabledDeviceProfileProvisionConfigurationSchemaImpl);
exports.DurationAlarmConditionSpecSchema = zod_1.z.lazy(() => DurationAlarmConditionSpecSchemaImpl);
exports.DynamicValue_Of_booleanSchema = zod_1.z.lazy(() => DynamicValue_Of_booleanSchemaImpl);
exports.DynamicValue_Of_doubleSchema = zod_1.z.lazy(() => DynamicValue_Of_doubleSchemaImpl);
exports.DynamicValue_Of_intSchema = zod_1.z.lazy(() => DynamicValue_Of_intSchemaImpl);
exports.DynamicValue_Of_longSchema = zod_1.z.lazy(() => DynamicValue_Of_longSchemaImpl);
exports.DynamicValue_Of_stringSchema = zod_1.z.lazy(() => DynamicValue_Of_stringSchemaImpl);
exports.EdgeSchema = zod_1.z.lazy(() => EdgeSchemaImpl);
exports.EdgeEventSchema = zod_1.z.lazy(() => EdgeEventSchemaImpl);
exports.EdgeEventIdSchema = zod_1.z.lazy(() => EdgeEventIdSchemaImpl);
exports.EdgeIdSchema = zod_1.z.lazy(() => EdgeIdSchemaImpl);
exports.EdgeInfoSchema = zod_1.z.lazy(() => EdgeInfoSchemaImpl);
exports.EdgeInstructionsSchema = zod_1.z.lazy(() => EdgeInstructionsSchemaImpl);
exports.EdgeSearchQuerySchema = zod_1.z.lazy(() => EdgeSearchQuerySchemaImpl);
exports.EdgeSearchQueryFilterSchema = zod_1.z.lazy(() => EdgeSearchQueryFilterSchemaImpl);
exports.EdgeTypeFilterSchema = zod_1.z.lazy(() => EdgeTypeFilterSchemaImpl);
exports.EfentoCoapDeviceTypeConfigurationSchema = zod_1.z.lazy(() => EfentoCoapDeviceTypeConfigurationSchemaImpl);
exports.EmailDeliveryMethodNotificationTemplateSchema = zod_1.z.lazy(() => EmailDeliveryMethodNotificationTemplateSchemaImpl);
exports.EmailTwoFaAccountConfigSchema = zod_1.z.lazy(() => EmailTwoFaAccountConfigSchemaImpl);
exports.EmailTwoFaProviderConfigSchema = zod_1.z.lazy(() => EmailTwoFaProviderConfigSchemaImpl);
exports.EntitiesByGroupNameFilterSchema = zod_1.z.lazy(() => EntitiesByGroupNameFilterSchemaImpl);
exports.EntitiesLimitNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => EntitiesLimitNotificationRuleTriggerConfigSchemaImpl);
exports.EntityActionNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => EntityActionNotificationRuleTriggerConfigSchemaImpl);
exports.EntityCountQuerySchema = zod_1.z.lazy(() => EntityCountQuerySchemaImpl);
exports.EntityDataSchema = zod_1.z.lazy(() => EntityDataSchemaImpl);
exports.EntityDataDiffSchema = zod_1.z.lazy(() => EntityDataDiffSchemaImpl);
exports.EntityDataInfoSchema = zod_1.z.lazy(() => EntityDataInfoSchemaImpl);
exports.EntityDataPageLinkSchema = zod_1.z.lazy(() => EntityDataPageLinkSchemaImpl);
exports.EntityDataQuerySchema = zod_1.z.lazy(() => EntityDataQuerySchemaImpl);
exports.EntityDataSortOrderSchema = zod_1.z.lazy(() => EntityDataSortOrderSchemaImpl);
exports.EntityExportData_Of_objectSchema = zod_1.z.lazy(() => EntityExportData_Of_objectSchemaImpl);
exports.EntityFilterSchema = zod_1.z.lazy(() => EntityFilterSchemaImpl);
exports.EntityGroupSchema = zod_1.z.lazy(() => EntityGroupSchemaImpl);
exports.EntityGroupExportDataSchema = zod_1.z.lazy(() => EntityGroupExportDataSchemaImpl);
exports.EntityGroupFilterSchema = zod_1.z.lazy(() => EntityGroupFilterSchemaImpl);
exports.EntityGroupIdSchema = zod_1.z.lazy(() => EntityGroupIdSchemaImpl);
exports.EntityGroupInfoSchema = zod_1.z.lazy(() => EntityGroupInfoSchemaImpl);
exports.EntityGroupListFilterSchema = zod_1.z.lazy(() => EntityGroupListFilterSchemaImpl);
exports.EntityGroupNameFilterSchema = zod_1.z.lazy(() => EntityGroupNameFilterSchemaImpl);
exports.EntityIdSchema = zod_1.z.lazy(() => EntityIdSchemaImpl);
exports.EntityInfoSchema = zod_1.z.lazy(() => EntityInfoSchemaImpl);
exports.EntityKeySchema = zod_1.z.lazy(() => EntityKeySchemaImpl);
exports.EntityListFilterSchema = zod_1.z.lazy(() => EntityListFilterSchemaImpl);
exports.EntityLoadErrorSchema = zod_1.z.lazy(() => EntityLoadErrorSchemaImpl);
exports.EntityNameFilterSchema = zod_1.z.lazy(() => EntityNameFilterSchemaImpl);
exports.EntityRelationSchema = zod_1.z.lazy(() => EntityRelationSchemaImpl);
exports.EntityRelationInfoSchema = zod_1.z.lazy(() => EntityRelationInfoSchemaImpl);
exports.EntityRelationsQuerySchema = zod_1.z.lazy(() => EntityRelationsQuerySchemaImpl);
exports.EntitySubtypeSchema = zod_1.z.lazy(() => EntitySubtypeSchemaImpl);
exports.EntityTypeFilterSchema = zod_1.z.lazy(() => EntityTypeFilterSchemaImpl);
exports.EntityTypeLoadResultSchema = zod_1.z.lazy(() => EntityTypeLoadResultSchemaImpl);
exports.EntityTypeVersionCreateConfigSchema = zod_1.z.lazy(() => EntityTypeVersionCreateConfigSchemaImpl);
exports.EntityTypeVersionLoadConfigSchema = zod_1.z.lazy(() => EntityTypeVersionLoadConfigSchemaImpl);
exports.EntityTypeVersionLoadRequestSchema = zod_1.z.lazy(() => EntityTypeVersionLoadRequestSchemaImpl);
exports.EntityVersionSchema = zod_1.z.lazy(() => EntityVersionSchemaImpl);
exports.EntityViewSchema = zod_1.z.lazy(() => EntityViewSchemaImpl);
exports.EntityViewIdSchema = zod_1.z.lazy(() => EntityViewIdSchemaImpl);
exports.EntityViewInfoSchema = zod_1.z.lazy(() => EntityViewInfoSchemaImpl);
exports.EntityViewSearchQuerySchema = zod_1.z.lazy(() => EntityViewSearchQuerySchemaImpl);
exports.EntityViewSearchQueryFilterSchema = zod_1.z.lazy(() => EntityViewSearchQueryFilterSchemaImpl);
exports.EntityViewTypeFilterSchema = zod_1.z.lazy(() => EntityViewTypeFilterSchemaImpl);
exports.ErrorEventFilterSchema = zod_1.z.lazy(() => ErrorEventFilterSchemaImpl);
exports.EscalatedNotificationRuleRecipientsConfigSchema = zod_1.z.lazy(() => EscalatedNotificationRuleRecipientsConfigSchemaImpl);
exports.EventFilterSchema = zod_1.z.lazy(() => EventFilterSchemaImpl);
exports.EventIdSchema = zod_1.z.lazy(() => EventIdSchemaImpl);
exports.EventInfoSchema = zod_1.z.lazy(() => EventInfoSchemaImpl);
exports.ExportableEntity_Of_EntityIdSchema = zod_1.z.lazy(() => ExportableEntity_Of_EntityIdSchemaImpl);
exports.FaviconSchema = zod_1.z.lazy(() => FaviconSchemaImpl);
exports.FeaturesInfoSchema = zod_1.z.lazy(() => FeaturesInfoSchemaImpl);
exports.FilterPredicateValue_Of_booleanSchema = zod_1.z.lazy(() => FilterPredicateValue_Of_booleanSchemaImpl);
exports.FilterPredicateValue_Of_doubleSchema = zod_1.z.lazy(() => FilterPredicateValue_Of_doubleSchemaImpl);
exports.FilterPredicateValue_Of_intSchema = zod_1.z.lazy(() => FilterPredicateValue_Of_intSchemaImpl);
exports.FilterPredicateValue_Of_longSchema = zod_1.z.lazy(() => FilterPredicateValue_Of_longSchemaImpl);
exports.FilterPredicateValue_Of_stringSchema = zod_1.z.lazy(() => FilterPredicateValue_Of_stringSchemaImpl);
exports.GroupEntityExportDataSchema = zod_1.z.lazy(() => GroupEntityExportDataSchemaImpl);
exports.GroupPermissionSchema = zod_1.z.lazy(() => GroupPermissionSchemaImpl);
exports.GroupPermissionIdSchema = zod_1.z.lazy(() => GroupPermissionIdSchemaImpl);
exports.GroupPermissionInfoSchema = zod_1.z.lazy(() => GroupPermissionInfoSchemaImpl);
exports.HasId_Of_objectSchema = zod_1.z.lazy(() => HasId_Of_objectSchemaImpl);
exports.HomeDashboardSchema = zod_1.z.lazy(() => HomeDashboardSchemaImpl);
exports.HomeDashboardInfoSchema = zod_1.z.lazy(() => HomeDashboardInfoSchemaImpl);
exports.ImageExportDataSchema = zod_1.z.lazy(() => ImageExportDataSchemaImpl);
exports.InputStreamSchema = zod_1.z.lazy(() => InputStreamSchemaImpl);
exports.IntegrationSchema = zod_1.z.lazy(() => IntegrationSchemaImpl);
exports.IntegrationIdSchema = zod_1.z.lazy(() => IntegrationIdSchemaImpl);
exports.IntegrationInfoSchema = zod_1.z.lazy(() => IntegrationInfoSchemaImpl);
exports.IntegrationLifecycleEventNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => IntegrationLifecycleEventNotificationRuleTriggerConfigSchemaImpl);
exports.JWT_PairSchema = zod_1.z.lazy(() => JWT_PairSchemaImpl);
exports.JWT_SettingsSchema = zod_1.z.lazy(() => JWT_SettingsSchemaImpl);
exports.JsonNodeSchema = zod_1.z.lazy(() => JsonNodeSchemaImpl);
exports.JsonTransportPayloadConfigurationSchema = zod_1.z.lazy(() => JsonTransportPayloadConfigurationSchemaImpl);
exports.KeyFilterSchema = zod_1.z.lazy(() => KeyFilterSchemaImpl);
exports.KeyFilterPredicateSchema = zod_1.z.lazy(() => KeyFilterPredicateSchemaImpl);
exports.LastVisitedDashboardInfoSchema = zod_1.z.lazy(() => LastVisitedDashboardInfoSchemaImpl);
exports.LicenseUsageInfoSchema = zod_1.z.lazy(() => LicenseUsageInfoSchemaImpl);
exports.LifeCycleEventFilterSchema = zod_1.z.lazy(() => LifeCycleEventFilterSchemaImpl);
exports.LoginRequestSchema = zod_1.z.lazy(() => LoginRequestSchemaImpl);
exports.LoginResponseSchema = zod_1.z.lazy(() => LoginResponseSchemaImpl);
exports.LoginWhiteLabelingParamsSchema = zod_1.z.lazy(() => LoginWhiteLabelingParamsSchemaImpl);
exports.LwM2MBootstrapServerCredentialSchema = zod_1.z.lazy(() => LwM2MBootstrapServerCredentialSchemaImpl);
exports.LwM2mInstanceSchema = zod_1.z.lazy(() => LwM2mInstanceSchemaImpl);
exports.LwM2mObjectSchema = zod_1.z.lazy(() => LwM2mObjectSchemaImpl);
exports.LwM2mResourceObserveSchema = zod_1.z.lazy(() => LwM2mResourceObserveSchemaImpl);
exports.Lwm2mDeviceProfileTransportConfigurationSchema = zod_1.z.lazy(() => Lwm2mDeviceProfileTransportConfigurationSchemaImpl);
exports.Lwm2mDeviceTransportConfigurationSchema = zod_1.z.lazy(() => Lwm2mDeviceTransportConfigurationSchemaImpl);
exports.MappingSchema = zod_1.z.lazy(() => MappingSchemaImpl);
exports.MergedGroupPermissionInfoSchema = zod_1.z.lazy(() => MergedGroupPermissionInfoSchemaImpl);
exports.MergedGroupTypePermissionInfoSchema = zod_1.z.lazy(() => MergedGroupTypePermissionInfoSchemaImpl);
exports.MergedUserPermissionsSchema = zod_1.z.lazy(() => MergedUserPermissionsSchemaImpl);
exports.MicrosoftTeamsDeliveryMethodNotificationTemplateSchema = zod_1.z.lazy(() => MicrosoftTeamsDeliveryMethodNotificationTemplateSchemaImpl);
exports.MicrosoftTeamsNotificationTargetConfigSchema = zod_1.z.lazy(() => MicrosoftTeamsNotificationTargetConfigSchemaImpl);
exports.MqttDeviceProfileTransportConfigurationSchema = zod_1.z.lazy(() => MqttDeviceProfileTransportConfigurationSchemaImpl);
exports.MqttDeviceTransportConfigurationSchema = zod_1.z.lazy(() => MqttDeviceTransportConfigurationSchemaImpl);
exports.NewPlatformVersionNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => NewPlatformVersionNotificationRuleTriggerConfigSchemaImpl);
exports.NoSecLwM2MBootstrapServerCredentialSchema = zod_1.z.lazy(() => NoSecLwM2MBootstrapServerCredentialSchemaImpl);
exports.NodeConnectionInfoSchema = zod_1.z.lazy(() => NodeConnectionInfoSchemaImpl);
exports.NotificationSchema = zod_1.z.lazy(() => NotificationSchemaImpl);
exports.NotificationDeliveryMethodConfigSchema = zod_1.z.lazy(() => NotificationDeliveryMethodConfigSchemaImpl);
exports.NotificationIdSchema = zod_1.z.lazy(() => NotificationIdSchemaImpl);
exports.NotificationInfoSchema = zod_1.z.lazy(() => NotificationInfoSchemaImpl);
exports.NotificationPrefSchema = zod_1.z.lazy(() => NotificationPrefSchemaImpl);
exports.NotificationRequestSchema = zod_1.z.lazy(() => NotificationRequestSchemaImpl);
exports.NotificationRequestConfigSchema = zod_1.z.lazy(() => NotificationRequestConfigSchemaImpl);
exports.NotificationRequestIdSchema = zod_1.z.lazy(() => NotificationRequestIdSchemaImpl);
exports.NotificationRequestInfoSchema = zod_1.z.lazy(() => NotificationRequestInfoSchemaImpl);
exports.NotificationRequestPreviewSchema = zod_1.z.lazy(() => NotificationRequestPreviewSchemaImpl);
exports.NotificationRequestStatsSchema = zod_1.z.lazy(() => NotificationRequestStatsSchemaImpl);
exports.NotificationRuleSchema = zod_1.z.lazy(() => NotificationRuleSchemaImpl);
exports.NotificationRuleConfigSchema = zod_1.z.lazy(() => NotificationRuleConfigSchemaImpl);
exports.NotificationRuleIdSchema = zod_1.z.lazy(() => NotificationRuleIdSchemaImpl);
exports.NotificationRuleInfoSchema = zod_1.z.lazy(() => NotificationRuleInfoSchemaImpl);
exports.NotificationRuleRecipientsConfigSchema = zod_1.z.lazy(() => NotificationRuleRecipientsConfigSchemaImpl);
exports.NotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => NotificationRuleTriggerConfigSchemaImpl);
exports.NotificationSettingsSchema = zod_1.z.lazy(() => NotificationSettingsSchemaImpl);
exports.NotificationTargetSchema = zod_1.z.lazy(() => NotificationTargetSchemaImpl);
exports.NotificationTargetConfigSchema = zod_1.z.lazy(() => NotificationTargetConfigSchemaImpl);
exports.NotificationTemplateSchema = zod_1.z.lazy(() => NotificationTemplateSchemaImpl);
exports.NotificationTemplateConfigSchema = zod_1.z.lazy(() => NotificationTemplateConfigSchemaImpl);
exports.NotificationTemplateIdSchema = zod_1.z.lazy(() => NotificationTemplateIdSchemaImpl);
exports.NumericFilterPredicateSchema = zod_1.z.lazy(() => NumericFilterPredicateSchemaImpl);
exports.OAuth2BasicMapperConfigSchema = zod_1.z.lazy(() => OAuth2BasicMapperConfigSchemaImpl);
exports.OAuth2ClientInfoSchema = zod_1.z.lazy(() => OAuth2ClientInfoSchemaImpl);
exports.OAuth2ClientRegistrationTemplateSchema = zod_1.z.lazy(() => OAuth2ClientRegistrationTemplateSchemaImpl);
exports.OAuth2ClientRegistrationTemplateIdSchema = zod_1.z.lazy(() => OAuth2ClientRegistrationTemplateIdSchemaImpl);
exports.OAuth2CustomMapperConfigSchema = zod_1.z.lazy(() => OAuth2CustomMapperConfigSchemaImpl);
exports.OAuth2DomainInfoSchema = zod_1.z.lazy(() => OAuth2DomainInfoSchemaImpl);
exports.OAuth2InfoSchema = zod_1.z.lazy(() => OAuth2InfoSchemaImpl);
exports.OAuth2MapperConfigSchema = zod_1.z.lazy(() => OAuth2MapperConfigSchemaImpl);
exports.OAuth2MobileInfoSchema = zod_1.z.lazy(() => OAuth2MobileInfoSchemaImpl);
exports.OAuth2ParamsInfoSchema = zod_1.z.lazy(() => OAuth2ParamsInfoSchemaImpl);
exports.OAuth2RegistrationInfoSchema = zod_1.z.lazy(() => OAuth2RegistrationInfoSchemaImpl);
exports.ObjectAttributesSchema = zod_1.z.lazy(() => ObjectAttributesSchemaImpl);
exports.ObjectNodeSchema = zod_1.z.lazy(() => ObjectNodeSchemaImpl);
exports.OriginatorEntityOwnerUsersFilterSchema = zod_1.z.lazy(() => OriginatorEntityOwnerUsersFilterSchemaImpl);
exports.OtaPackageSchema = zod_1.z.lazy(() => OtaPackageSchemaImpl);
exports.OtaPackageIdSchema = zod_1.z.lazy(() => OtaPackageIdSchemaImpl);
exports.OtaPackageInfoSchema = zod_1.z.lazy(() => OtaPackageInfoSchemaImpl);
exports.OtherConfigurationSchema = zod_1.z.lazy(() => OtherConfigurationSchemaImpl);
exports.PSKLwM2MBootstrapServerCredentialSchema = zod_1.z.lazy(() => PSKLwM2MBootstrapServerCredentialSchemaImpl);
exports.PageData_Of_AlarmCommentInfoSchema = zod_1.z.lazy(() => PageData_Of_AlarmCommentInfoSchemaImpl);
exports.PageData_Of_AlarmDataSchema = zod_1.z.lazy(() => PageData_Of_AlarmDataSchemaImpl);
exports.PageData_Of_AlarmInfoSchema = zod_1.z.lazy(() => PageData_Of_AlarmInfoSchemaImpl);
exports.PageData_Of_AssetInfoSchema = zod_1.z.lazy(() => PageData_Of_AssetInfoSchemaImpl);
exports.PageData_Of_AssetProfileInfoSchema = zod_1.z.lazy(() => PageData_Of_AssetProfileInfoSchemaImpl);
exports.PageData_Of_AssetProfileSchema = zod_1.z.lazy(() => PageData_Of_AssetProfileSchemaImpl);
exports.PageData_Of_AssetSchema = zod_1.z.lazy(() => PageData_Of_AssetSchemaImpl);
exports.PageData_Of_AuditLogSchema = zod_1.z.lazy(() => PageData_Of_AuditLogSchemaImpl);
exports.PageData_Of_BlobEntityWithCustomerInfoSchema = zod_1.z.lazy(() => PageData_Of_BlobEntityWithCustomerInfoSchemaImpl);
exports.PageData_Of_ContactBased_Of_objectSchema = zod_1.z.lazy(() => PageData_Of_ContactBased_Of_objectSchemaImpl);
exports.PageData_Of_ConverterSchema = zod_1.z.lazy(() => PageData_Of_ConverterSchemaImpl);
exports.PageData_Of_CustomerInfoSchema = zod_1.z.lazy(() => PageData_Of_CustomerInfoSchemaImpl);
exports.PageData_Of_CustomerSchema = zod_1.z.lazy(() => PageData_Of_CustomerSchemaImpl);
exports.PageData_Of_DashboardInfoSchema = zod_1.z.lazy(() => PageData_Of_DashboardInfoSchemaImpl);
exports.PageData_Of_DeviceInfoSchema = zod_1.z.lazy(() => PageData_Of_DeviceInfoSchemaImpl);
exports.PageData_Of_DeviceProfileInfoSchema = zod_1.z.lazy(() => PageData_Of_DeviceProfileInfoSchemaImpl);
exports.PageData_Of_DeviceProfileSchema = zod_1.z.lazy(() => PageData_Of_DeviceProfileSchemaImpl);
exports.PageData_Of_DeviceSchema = zod_1.z.lazy(() => PageData_Of_DeviceSchemaImpl);
exports.PageData_Of_EdgeEventSchema = zod_1.z.lazy(() => PageData_Of_EdgeEventSchemaImpl);
exports.PageData_Of_EdgeInfoSchema = zod_1.z.lazy(() => PageData_Of_EdgeInfoSchemaImpl);
exports.PageData_Of_EdgeSchema = zod_1.z.lazy(() => PageData_Of_EdgeSchemaImpl);
exports.PageData_Of_EntityDataSchema = zod_1.z.lazy(() => PageData_Of_EntityDataSchemaImpl);
exports.PageData_Of_EntityGroupInfoSchema = zod_1.z.lazy(() => PageData_Of_EntityGroupInfoSchemaImpl);
exports.PageData_Of_EntityInfoSchema = zod_1.z.lazy(() => PageData_Of_EntityInfoSchemaImpl);
exports.PageData_Of_EntitySubtypeSchema = zod_1.z.lazy(() => PageData_Of_EntitySubtypeSchemaImpl);
exports.PageData_Of_EntityVersionSchema = zod_1.z.lazy(() => PageData_Of_EntityVersionSchemaImpl);
exports.PageData_Of_EntityViewInfoSchema = zod_1.z.lazy(() => PageData_Of_EntityViewInfoSchemaImpl);
exports.PageData_Of_EntityViewSchema = zod_1.z.lazy(() => PageData_Of_EntityViewSchemaImpl);
exports.PageData_Of_EventInfoSchema = zod_1.z.lazy(() => PageData_Of_EventInfoSchemaImpl);
exports.PageData_Of_IntegrationInfoSchema = zod_1.z.lazy(() => PageData_Of_IntegrationInfoSchemaImpl);
exports.PageData_Of_IntegrationSchema = zod_1.z.lazy(() => PageData_Of_IntegrationSchemaImpl);
exports.PageData_Of_NotificationRequestInfoSchema = zod_1.z.lazy(() => PageData_Of_NotificationRequestInfoSchemaImpl);
exports.PageData_Of_NotificationRuleInfoSchema = zod_1.z.lazy(() => PageData_Of_NotificationRuleInfoSchemaImpl);
exports.PageData_Of_NotificationTargetSchema = zod_1.z.lazy(() => PageData_Of_NotificationTargetSchemaImpl);
exports.PageData_Of_NotificationTemplateSchema = zod_1.z.lazy(() => PageData_Of_NotificationTemplateSchemaImpl);
exports.PageData_Of_NotificationSchema = zod_1.z.lazy(() => PageData_Of_NotificationSchemaImpl);
exports.PageData_Of_OtaPackageInfoSchema = zod_1.z.lazy(() => PageData_Of_OtaPackageInfoSchemaImpl);
exports.PageData_Of_QueueSchema = zod_1.z.lazy(() => PageData_Of_QueueSchemaImpl);
exports.PageData_Of_RoleSchema = zod_1.z.lazy(() => PageData_Of_RoleSchemaImpl);
exports.PageData_Of_RuleChainSchema = zod_1.z.lazy(() => PageData_Of_RuleChainSchemaImpl);
exports.PageData_Of_SchedulerEventInfoSchema = zod_1.z.lazy(() => PageData_Of_SchedulerEventInfoSchemaImpl);
exports.PageData_Of_ShortEntityViewSchema = zod_1.z.lazy(() => PageData_Of_ShortEntityViewSchemaImpl);
exports.PageData_Of_TbResourceInfoSchema = zod_1.z.lazy(() => PageData_Of_TbResourceInfoSchemaImpl);
exports.PageData_Of_TenantInfoSchema = zod_1.z.lazy(() => PageData_Of_TenantInfoSchemaImpl);
exports.PageData_Of_TenantProfileSchema = zod_1.z.lazy(() => PageData_Of_TenantProfileSchemaImpl);
exports.PageData_Of_TenantSchema = zod_1.z.lazy(() => PageData_Of_TenantSchemaImpl);
exports.PageData_Of_UserEmailInfoSchema = zod_1.z.lazy(() => PageData_Of_UserEmailInfoSchemaImpl);
exports.PageData_Of_UserInfoSchema = zod_1.z.lazy(() => PageData_Of_UserInfoSchemaImpl);
exports.PageData_Of_UserSchema = zod_1.z.lazy(() => PageData_Of_UserSchemaImpl);
exports.PageData_Of_WidgetTypeInfoSchema = zod_1.z.lazy(() => PageData_Of_WidgetTypeInfoSchemaImpl);
exports.PageData_Of_WidgetsBundleSchema = zod_1.z.lazy(() => PageData_Of_WidgetsBundleSchemaImpl);
exports.PaletteSchema = zod_1.z.lazy(() => PaletteSchemaImpl);
exports.PaletteSettingsSchema = zod_1.z.lazy(() => PaletteSettingsSchemaImpl);
exports.PlatformTwoFaSettingsSchema = zod_1.z.lazy(() => PlatformTwoFaSettingsSchemaImpl);
exports.PlatformUsersNotificationTargetConfigSchema = zod_1.z.lazy(() => PlatformUsersNotificationTargetConfigSchemaImpl);
exports.PowerSavingConfigurationSchema = zod_1.z.lazy(() => PowerSavingConfigurationSchemaImpl);
exports.ProcessingStrategySchema = zod_1.z.lazy(() => ProcessingStrategySchemaImpl);
exports.ProtoTransportPayloadConfigurationSchema = zod_1.z.lazy(() => ProtoTransportPayloadConfigurationSchemaImpl);
exports.QueueSchema = zod_1.z.lazy(() => QueueSchemaImpl);
exports.QueueIdSchema = zod_1.z.lazy(() => QueueIdSchemaImpl);
exports.RPKLwM2MBootstrapServerCredentialSchema = zod_1.z.lazy(() => RPKLwM2MBootstrapServerCredentialSchemaImpl);
exports.RateLimitsNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => RateLimitsNotificationRuleTriggerConfigSchemaImpl);
exports.RawDataEventFilterSchema = zod_1.z.lazy(() => RawDataEventFilterSchemaImpl);
exports.RelationEntityTypeFilterSchema = zod_1.z.lazy(() => RelationEntityTypeFilterSchemaImpl);
exports.RelationsQueryFilterSchema = zod_1.z.lazy(() => RelationsQueryFilterSchemaImpl);
exports.RelationsSearchParametersSchema = zod_1.z.lazy(() => RelationsSearchParametersSchemaImpl);
exports.RepeatingAlarmConditionSpecSchema = zod_1.z.lazy(() => RepeatingAlarmConditionSpecSchemaImpl);
exports.ReportConfigSchema = zod_1.z.lazy(() => ReportConfigSchemaImpl);
exports.RepositorySettingsSchema = zod_1.z.lazy(() => RepositorySettingsSchemaImpl);
exports.RepositorySettingsInfoSchema = zod_1.z.lazy(() => RepositorySettingsInfoSchemaImpl);
exports.ResetPasswordEmailRequestSchema = zod_1.z.lazy(() => ResetPasswordEmailRequestSchemaImpl);
exports.ResetPasswordRequestSchema = zod_1.z.lazy(() => ResetPasswordRequestSchemaImpl);
exports.ResourceSchema = zod_1.z.lazy(() => ResourceSchemaImpl);
exports.ResponseEntitySchema = zod_1.z.lazy(() => ResponseEntitySchemaImpl);
exports.RoleSchema = zod_1.z.lazy(() => RoleSchemaImpl);
exports.RoleIdSchema = zod_1.z.lazy(() => RoleIdSchemaImpl);
exports.RpcSchema = zod_1.z.lazy(() => RpcSchemaImpl);
exports.RpcIdSchema = zod_1.z.lazy(() => RpcIdSchemaImpl);
exports.RuleChainSchema = zod_1.z.lazy(() => RuleChainSchemaImpl);
exports.RuleChainConnectionInfoSchema = zod_1.z.lazy(() => RuleChainConnectionInfoSchemaImpl);
exports.RuleChainDataSchema = zod_1.z.lazy(() => RuleChainDataSchemaImpl);
exports.RuleChainDebugEventFilterSchema = zod_1.z.lazy(() => RuleChainDebugEventFilterSchemaImpl);
exports.RuleChainExportDataSchema = zod_1.z.lazy(() => RuleChainExportDataSchemaImpl);
exports.RuleChainIdSchema = zod_1.z.lazy(() => RuleChainIdSchemaImpl);
exports.RuleChainImportResultSchema = zod_1.z.lazy(() => RuleChainImportResultSchemaImpl);
exports.RuleChainMetaDataSchema = zod_1.z.lazy(() => RuleChainMetaDataSchemaImpl);
exports.RuleChainOutputLabelsUsageSchema = zod_1.z.lazy(() => RuleChainOutputLabelsUsageSchemaImpl);
exports.RuleEngineComponentLifecycleEventNotificationRuleTriggerConfigSchema = zod_1.z.lazy(() => RuleEngineComponentLifecycleEventNotificationRuleTriggerConfigSchemaImpl);
exports.RuleNodeSchema = zod_1.z.lazy(() => RuleNodeSchemaImpl);
exports.RuleNodeDebugEventFilterSchema = zod_1.z.lazy(() => RuleNodeDebugEventFilterSchemaImpl);
exports.RuleNodeIdSchema = zod_1.z.lazy(() => RuleNodeIdSchemaImpl);
exports.SaveDeviceWithCredentialsRequestSchema = zod_1.z.lazy(() => SaveDeviceWithCredentialsRequestSchemaImpl);
exports.SaveOtaPackageInfoRequestSchema = zod_1.z.lazy(() => SaveOtaPackageInfoRequestSchemaImpl);
exports.SchedulerEventSchema = zod_1.z.lazy(() => SchedulerEventSchemaImpl);
exports.SchedulerEventFilterSchema = zod_1.z.lazy(() => SchedulerEventFilterSchemaImpl);
exports.SchedulerEventIdSchema = zod_1.z.lazy(() => SchedulerEventIdSchemaImpl);
exports.SchedulerEventInfoSchema = zod_1.z.lazy(() => SchedulerEventInfoSchemaImpl);
exports.SchedulerEventWithCustomerInfoSchema = zod_1.z.lazy(() => SchedulerEventWithCustomerInfoSchemaImpl);
exports.SecuritySettingsSchema = zod_1.z.lazy(() => SecuritySettingsSchemaImpl);
exports.SelfRegistrationParamsSchema = zod_1.z.lazy(() => SelfRegistrationParamsSchemaImpl);
exports.ShareGroupRequestSchema = zod_1.z.lazy(() => ShareGroupRequestSchemaImpl);
exports.SharedAttributesSettingSnmpCommunicationConfigSchema = zod_1.z.lazy(() => SharedAttributesSettingSnmpCommunicationConfigSchemaImpl);
exports.ShortCustomerInfoSchema = zod_1.z.lazy(() => ShortCustomerInfoSchemaImpl);
exports.ShortEntityViewSchema = zod_1.z.lazy(() => ShortEntityViewSchemaImpl);
exports.SignUpRequestSchema = zod_1.z.lazy(() => SignUpRequestSchemaImpl);
exports.SignUpSelfRegistrationParamsSchema = zod_1.z.lazy(() => SignUpSelfRegistrationParamsSchemaImpl);
exports.SimpleAlarmConditionSpecSchema = zod_1.z.lazy(() => SimpleAlarmConditionSpecSchemaImpl);
exports.SingleEntityFilterSchema = zod_1.z.lazy(() => SingleEntityFilterSchemaImpl);
exports.SingleEntityVersionCreateRequestSchema = zod_1.z.lazy(() => SingleEntityVersionCreateRequestSchemaImpl);
exports.SingleEntityVersionLoadRequestSchema = zod_1.z.lazy(() => SingleEntityVersionLoadRequestSchemaImpl);
exports.SlackConversationSchema = zod_1.z.lazy(() => SlackConversationSchemaImpl);
exports.SlackDeliveryMethodNotificationTemplateSchema = zod_1.z.lazy(() => SlackDeliveryMethodNotificationTemplateSchemaImpl);
exports.SlackNotificationDeliveryMethodConfigSchema = zod_1.z.lazy(() => SlackNotificationDeliveryMethodConfigSchemaImpl);
exports.SlackNotificationTargetConfigSchema = zod_1.z.lazy(() => SlackNotificationTargetConfigSchemaImpl);
exports.SmppSmsProviderConfigurationSchema = zod_1.z.lazy(() => SmppSmsProviderConfigurationSchemaImpl);
exports.SmsDeliveryMethodNotificationTemplateSchema = zod_1.z.lazy(() => SmsDeliveryMethodNotificationTemplateSchemaImpl);
exports.SmsProviderConfigurationSchema = zod_1.z.lazy(() => SmsProviderConfigurationSchemaImpl);
exports.SmsTwoFaAccountConfigSchema = zod_1.z.lazy(() => SmsTwoFaAccountConfigSchemaImpl);
exports.SmsTwoFaProviderConfigSchema = zod_1.z.lazy(() => SmsTwoFaProviderConfigSchemaImpl);
exports.SnmpCommunicationConfigSchema = zod_1.z.lazy(() => SnmpCommunicationConfigSchemaImpl);
exports.SnmpDeviceProfileTransportConfigurationSchema = zod_1.z.lazy(() => SnmpDeviceProfileTransportConfigurationSchemaImpl);
exports.SnmpDeviceTransportConfigurationSchema = zod_1.z.lazy(() => SnmpDeviceTransportConfigurationSchemaImpl);
exports.SnmpMappingSchema = zod_1.z.lazy(() => SnmpMappingSchemaImpl);
exports.SolutionInstallResponseSchema = zod_1.z.lazy(() => SolutionInstallResponseSchemaImpl);
exports.SpecificTimeScheduleSchema = zod_1.z.lazy(() => SpecificTimeScheduleSchemaImpl);
exports.StarredDashboardInfoSchema = zod_1.z.lazy(() => StarredDashboardInfoSchemaImpl);
exports.StateEntityOwnerFilterSchema = zod_1.z.lazy(() => StateEntityOwnerFilterSchemaImpl);
exports.StatisticsEventFilterSchema = zod_1.z.lazy(() => StatisticsEventFilterSchemaImpl);
exports.StringFilterPredicateSchema = zod_1.z.lazy(() => StringFilterPredicateSchemaImpl);
exports.SubmitStrategySchema = zod_1.z.lazy(() => SubmitStrategySchemaImpl);
exports.SystemAdministratorsFilterSchema = zod_1.z.lazy(() => SystemAdministratorsFilterSchemaImpl);
exports.SystemInfoSchema = zod_1.z.lazy(() => SystemInfoSchemaImpl);
exports.SystemInfoDataSchema = zod_1.z.lazy(() => SystemInfoDataSchemaImpl);
exports.TbImageDeleteResultSchema = zod_1.z.lazy(() => TbImageDeleteResultSchemaImpl);
exports.TbResourceSchema = zod_1.z.lazy(() => TbResourceSchemaImpl);
exports.TbResourceIdSchema = zod_1.z.lazy(() => TbResourceIdSchemaImpl);
exports.TbResourceInfoSchema = zod_1.z.lazy(() => TbResourceInfoSchemaImpl);
exports.TelemetryEntityViewSchema = zod_1.z.lazy(() => TelemetryEntityViewSchemaImpl);
exports.TelemetryMappingConfigurationSchema = zod_1.z.lazy(() => TelemetryMappingConfigurationSchemaImpl);
exports.TelemetryQueryingSnmpCommunicationConfigSchema = zod_1.z.lazy(() => TelemetryQueryingSnmpCommunicationConfigSchemaImpl);
exports.TenantSchema = zod_1.z.lazy(() => TenantSchemaImpl);
exports.TenantAdministratorsFilterSchema = zod_1.z.lazy(() => TenantAdministratorsFilterSchemaImpl);
exports.TenantIdSchema = zod_1.z.lazy(() => TenantIdSchemaImpl);
exports.TenantInfoSchema = zod_1.z.lazy(() => TenantInfoSchemaImpl);
exports.TenantProfileSchema = zod_1.z.lazy(() => TenantProfileSchemaImpl);
exports.TenantProfileConfigurationSchema = zod_1.z.lazy(() => TenantProfileConfigurationSchemaImpl);
exports.TenantProfileDataSchema = zod_1.z.lazy(() => TenantProfileDataSchemaImpl);
exports.TenantProfileIdSchema = zod_1.z.lazy(() => TenantProfileIdSchemaImpl);
exports.TenantProfileQueueConfigurationSchema = zod_1.z.lazy(() => TenantProfileQueueConfigurationSchemaImpl);
exports.TenantSolutionTemplateDetailsSchema = zod_1.z.lazy(() => TenantSolutionTemplateDetailsSchemaImpl);
exports.TenantSolutionTemplateInfoSchema = zod_1.z.lazy(() => TenantSolutionTemplateInfoSchemaImpl);
exports.TenantSolutionTemplateInstructionsSchema = zod_1.z.lazy(() => TenantSolutionTemplateInstructionsSchemaImpl);
exports.TestSmsRequestSchema = zod_1.z.lazy(() => TestSmsRequestSchemaImpl);
exports.ThingsboardCredentialsExpiredResponseSchema = zod_1.z.lazy(() => ThingsboardCredentialsExpiredResponseSchemaImpl);
exports.ThingsboardErrorResponseSchema = zod_1.z.lazy(() => ThingsboardErrorResponseSchemaImpl);
exports.ToDeviceRpcRequestSnmpCommunicationConfigSchema = zod_1.z.lazy(() => ToDeviceRpcRequestSnmpCommunicationConfigSchemaImpl);
exports.ToServerRpcRequestSnmpCommunicationConfigSchema = zod_1.z.lazy(() => ToServerRpcRequestSnmpCommunicationConfigSchemaImpl);
exports.TotpTwoFaAccountConfigSchema = zod_1.z.lazy(() => TotpTwoFaAccountConfigSchemaImpl);
exports.TotpTwoFaProviderConfigSchema = zod_1.z.lazy(() => TotpTwoFaProviderConfigSchemaImpl);
exports.TransportPayloadTypeConfigurationSchema = zod_1.z.lazy(() => TransportPayloadTypeConfigurationSchemaImpl);
exports.TsValueSchema = zod_1.z.lazy(() => TsValueSchemaImpl);
exports.TwilioSmsProviderConfigurationSchema = zod_1.z.lazy(() => TwilioSmsProviderConfigurationSchemaImpl);
exports.TwoFaAccountConfigSchema = zod_1.z.lazy(() => TwoFaAccountConfigSchemaImpl);
exports.TwoFaAccountConfigUpdateRequestSchema = zod_1.z.lazy(() => TwoFaAccountConfigUpdateRequestSchemaImpl);
exports.TwoFaProviderConfigSchema = zod_1.z.lazy(() => TwoFaProviderConfigSchemaImpl);
exports.TwoFaProviderInfoSchema = zod_1.z.lazy(() => TwoFaProviderInfoSchemaImpl);
exports.UpdateMessageSchema = zod_1.z.lazy(() => UpdateMessageSchemaImpl);
exports.UsageInfoSchema = zod_1.z.lazy(() => UsageInfoSchemaImpl);
exports.UserSchema = zod_1.z.lazy(() => UserSchemaImpl);
exports.UserDashboardsInfoSchema = zod_1.z.lazy(() => UserDashboardsInfoSchemaImpl);
exports.UserEmailInfoSchema = zod_1.z.lazy(() => UserEmailInfoSchemaImpl);
exports.UserGroupListFilterSchema = zod_1.z.lazy(() => UserGroupListFilterSchemaImpl);
exports.UserIdSchema = zod_1.z.lazy(() => UserIdSchemaImpl);
exports.UserInfoSchema = zod_1.z.lazy(() => UserInfoSchemaImpl);
exports.UserListFilterSchema = zod_1.z.lazy(() => UserListFilterSchemaImpl);
exports.UserNotificationSettingsSchema = zod_1.z.lazy(() => UserNotificationSettingsSchemaImpl);
exports.UserPasswordPolicySchema = zod_1.z.lazy(() => UserPasswordPolicySchemaImpl);
exports.UserRoleFilterSchema = zod_1.z.lazy(() => UserRoleFilterSchemaImpl);
exports.UsersFilterSchema = zod_1.z.lazy(() => UsersFilterSchemaImpl);
exports.VersionCreateConfigSchema = zod_1.z.lazy(() => VersionCreateConfigSchemaImpl);
exports.VersionCreateRequestSchema = zod_1.z.lazy(() => VersionCreateRequestSchemaImpl);
exports.VersionCreationResultSchema = zod_1.z.lazy(() => VersionCreationResultSchemaImpl);
exports.VersionLoadConfigSchema = zod_1.z.lazy(() => VersionLoadConfigSchemaImpl);
exports.VersionLoadRequestSchema = zod_1.z.lazy(() => VersionLoadRequestSchemaImpl);
exports.VersionLoadResultSchema = zod_1.z.lazy(() => VersionLoadResultSchemaImpl);
exports.VersionedEntityInfoSchema = zod_1.z.lazy(() => VersionedEntityInfoSchemaImpl);
exports.WebDeliveryMethodNotificationTemplateSchema = zod_1.z.lazy(() => WebDeliveryMethodNotificationTemplateSchemaImpl);
exports.WhiteLabelingSchema = zod_1.z.lazy(() => WhiteLabelingSchemaImpl);
exports.WhiteLabelingParamsSchema = zod_1.z.lazy(() => WhiteLabelingParamsSchemaImpl);
exports.WidgetTypeSchema = zod_1.z.lazy(() => WidgetTypeSchemaImpl);
exports.WidgetTypeDetailsSchema = zod_1.z.lazy(() => WidgetTypeDetailsSchemaImpl);
exports.WidgetTypeExportDataSchema = zod_1.z.lazy(() => WidgetTypeExportDataSchemaImpl);
exports.WidgetTypeIdSchema = zod_1.z.lazy(() => WidgetTypeIdSchemaImpl);
exports.WidgetTypeInfoSchema = zod_1.z.lazy(() => WidgetTypeInfoSchemaImpl);
exports.WidgetsBundleSchema = zod_1.z.lazy(() => WidgetsBundleSchemaImpl);
exports.WidgetsBundleExportDataSchema = zod_1.z.lazy(() => WidgetsBundleExportDataSchemaImpl);
exports.WidgetsBundleIdSchema = zod_1.z.lazy(() => WidgetsBundleIdSchemaImpl);
exports.X509CertificateChainProvisionConfigurationSchema = zod_1.z.lazy(() => X509CertificateChainProvisionConfigurationSchemaImpl);
exports.X509LwM2MBootstrapServerCredentialSchema = zod_1.z.lazy(() => X509LwM2MBootstrapServerCredentialSchemaImpl);
const AccountTwoFaSettingsSchemaImpl = zod_1.z.object({
    "configs": zod_1.z.object({}).optional()
});
const ActivateUserRequestSchemaImpl = zod_1.z.object({
    "activateToken": zod_1.z.string().optional(),
    "password": zod_1.z.string().optional()
});
const AdminSettingsSchemaImpl = zod_1.z.object({
    "id": exports.AdminSettingsIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "key": zod_1.z.string().optional(),
    "jsonValue": exports.JsonNodeSchema.optional()
});
const AdminSettingsIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string()
});
const AffectedTenantAdministratorsFilterSchemaImpl = zod_1.z.object({});
const AffectedUserFilterSchemaImpl = zod_1.z.object({});
const AlarmSchemaImpl = zod_1.z.object({
    "id": exports.AlarmIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "name": zod_1.z.string(),
    "type": zod_1.z.string(),
    "originator": exports.EntityIdSchema,
    "severity": zod_1.z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"]),
    "acknowledged": zod_1.z.boolean(),
    "cleared": zod_1.z.boolean(),
    "assigneeId": exports.UserIdSchema.optional(),
    "startTs": zod_1.z.number().optional(),
    "endTs": zod_1.z.number().optional(),
    "ackTs": zod_1.z.number().optional(),
    "clearTs": zod_1.z.number().optional(),
    "assignTs": zod_1.z.number().optional(),
    "details": exports.JsonNodeSchema.optional(),
    "propagateToOwnerHierarchy": zod_1.z.boolean().optional(),
    "propagate": zod_1.z.boolean().optional(),
    "propagateToTenant": zod_1.z.boolean().optional(),
    "propagateRelationTypes": zod_1.z.array(zod_1.z.string()).optional(),
    "propagateToOwner": zod_1.z.boolean().optional(),
    "status": zod_1.z.enum(["ACTIVE_ACK", "ACTIVE_UNACK", "CLEARED_ACK", "CLEARED_UNACK"])
});
const AlarmAssigneeSchemaImpl = zod_1.z.object({
    "email": zod_1.z.string().optional(),
    "firstName": zod_1.z.string().optional(),
    "id": exports.UserIdSchema.optional(),
    "lastName": zod_1.z.string().optional()
});
const AlarmAssignmentNotificationRuleTriggerConfigSchemaImpl = zod_1.z.object({
    "alarmSeverities": zod_1.z.array(zod_1.z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"])).optional(),
    "alarmStatuses": zod_1.z.array(zod_1.z.enum(["ACK", "ACTIVE", "ANY", "CLEARED", "UNACK"])).optional(),
    "alarmTypes": zod_1.z.array(zod_1.z.string()).optional(),
    "notifyOn": zod_1.z.array(zod_1.z.enum(["ASSIGNED", "UNASSIGNED"])).optional(),
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional()
});
const AlarmCommentSchemaImpl = zod_1.z.object({
    "id": exports.AlarmCommentIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "alarmId": exports.EntityIdSchema.optional(),
    "userId": exports.UserIdSchema.optional(),
    "name": zod_1.z.string(),
    "type": zod_1.z.enum(["OTHER", "SYSTEM"]).optional(),
    "comment": exports.JsonNodeSchema.optional()
});
const AlarmCommentIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string()
});
const AlarmCommentInfoSchemaImpl = zod_1.z.object({
    "id": exports.AlarmCommentIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "alarmId": exports.EntityIdSchema.optional(),
    "userId": exports.UserIdSchema.optional(),
    "name": zod_1.z.string(),
    "type": zod_1.z.enum(["OTHER", "SYSTEM"]).optional(),
    "comment": exports.JsonNodeSchema.optional(),
    "email": zod_1.z.string().optional(),
    "firstName": zod_1.z.string().optional(),
    "lastName": zod_1.z.string().optional()
});
const AlarmCommentNotificationRuleTriggerConfigSchemaImpl = zod_1.z.object({
    "alarmSeverities": zod_1.z.array(zod_1.z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"])).optional(),
    "alarmStatuses": zod_1.z.array(zod_1.z.enum(["ACK", "ACTIVE", "ANY", "CLEARED", "UNACK"])).optional(),
    "alarmTypes": zod_1.z.array(zod_1.z.string()).optional(),
    "notifyOnCommentUpdate": zod_1.z.boolean().optional(),
    "onlyUserComments": zod_1.z.boolean().optional(),
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional()
});
const AlarmConditionSchemaImpl = zod_1.z.object({
    "condition": zod_1.z.array(exports.AlarmConditionFilterSchema).optional(),
    "spec": exports.AlarmConditionSpecSchema.optional()
});
const AlarmConditionFilterSchemaImpl = zod_1.z.object({
    "key": exports.AlarmConditionFilterKeySchema.optional(),
    "valueType": zod_1.z.enum(["BOOLEAN", "DATE_TIME", "NUMERIC", "STRING"]).optional(),
    "value": zod_1.z.object({}).optional(),
    "predicate": exports.KeyFilterPredicateSchema.optional()
});
const AlarmConditionFilterKeySchemaImpl = zod_1.z.object({
    "type": zod_1.z.enum(["ATTRIBUTE", "CONSTANT", "ENTITY_FIELD", "TIME_SERIES"]).optional(),
    "key": zod_1.z.string().optional()
});
const AlarmConditionSpecSchemaImpl = zod_1.z.object({});
const AlarmCountQuerySchemaImpl = zod_1.z.object({
    "assigneeId": exports.UserIdSchema.optional(),
    "endTs": zod_1.z.number().optional(),
    "entityFilter": exports.EntityFilterSchema.optional(),
    "keyFilters": zod_1.z.array(exports.KeyFilterSchema).optional(),
    "searchPropagatedAlarms": zod_1.z.boolean().optional(),
    "severityList": zod_1.z.array(zod_1.z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"])).optional(),
    "startTs": zod_1.z.number().optional(),
    "statusList": zod_1.z.array(zod_1.z.enum(["ACK", "ACTIVE", "ANY", "CLEARED", "UNACK"])).optional(),
    "timeWindow": zod_1.z.number().optional(),
    "typeList": zod_1.z.array(zod_1.z.string()).optional()
});
const AlarmDataSchemaImpl = zod_1.z.object({
    "entityId": exports.EntityIdSchema.optional(),
    "latest": zod_1.z.object({}).optional(),
    "id": exports.AlarmIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "name": zod_1.z.string(),
    "type": zod_1.z.string(),
    "originator": exports.EntityIdSchema,
    "severity": zod_1.z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"]),
    "acknowledged": zod_1.z.boolean(),
    "cleared": zod_1.z.boolean(),
    "assigneeId": exports.UserIdSchema.optional(),
    "startTs": zod_1.z.number().optional(),
    "endTs": zod_1.z.number().optional(),
    "ackTs": zod_1.z.number().optional(),
    "clearTs": zod_1.z.number().optional(),
    "assignTs": zod_1.z.number().optional(),
    "details": exports.JsonNodeSchema.optional(),
    "propagateToOwnerHierarchy": zod_1.z.boolean().optional(),
    "propagate": zod_1.z.boolean().optional(),
    "propagateToTenant": zod_1.z.boolean().optional(),
    "propagateRelationTypes": zod_1.z.array(zod_1.z.string()).optional(),
    "propagateToOwner": zod_1.z.boolean().optional(),
    "originatorName": zod_1.z.string().optional(),
    "originatorLabel": zod_1.z.string().optional(),
    "assignee": exports.AlarmAssigneeSchema.optional(),
    "status": zod_1.z.enum(["ACTIVE_ACK", "ACTIVE_UNACK", "CLEARED_ACK", "CLEARED_UNACK"])
});
const AlarmDataPageLinkSchemaImpl = zod_1.z.object({
    "assigneeId": exports.UserIdSchema.optional(),
    "dynamic": zod_1.z.boolean().optional(),
    "endTs": zod_1.z.number().optional(),
    "page": zod_1.z.number().optional(),
    "pageSize": zod_1.z.number().optional(),
    "searchPropagatedAlarms": zod_1.z.boolean().optional(),
    "severityList": zod_1.z.array(zod_1.z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"])).optional(),
    "sortOrder": exports.EntityDataSortOrderSchema.optional(),
    "startTs": zod_1.z.number().optional(),
    "statusList": zod_1.z.array(zod_1.z.enum(["ACK", "ACTIVE", "ANY", "CLEARED", "UNACK"])).optional(),
    "textSearch": zod_1.z.string().optional(),
    "timeWindow": zod_1.z.number().optional(),
    "typeList": zod_1.z.array(zod_1.z.string()).optional()
});
const AlarmDataQuerySchemaImpl = zod_1.z.object({
    "alarmFields": zod_1.z.array(exports.EntityKeySchema).optional(),
    "entityFields": zod_1.z.array(exports.EntityKeySchema).optional(),
    "entityFilter": exports.EntityFilterSchema.optional(),
    "keyFilters": zod_1.z.array(exports.KeyFilterSchema).optional(),
    "latestValues": zod_1.z.array(exports.EntityKeySchema).optional(),
    "pageLink": exports.AlarmDataPageLinkSchema.optional()
});
const AlarmIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["ALARM"])
});
const AlarmInfoSchemaImpl = zod_1.z.object({
    "id": exports.AlarmIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "name": zod_1.z.string(),
    "type": zod_1.z.string(),
    "originator": exports.EntityIdSchema,
    "severity": zod_1.z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"]),
    "acknowledged": zod_1.z.boolean(),
    "cleared": zod_1.z.boolean(),
    "assigneeId": exports.UserIdSchema.optional(),
    "startTs": zod_1.z.number().optional(),
    "endTs": zod_1.z.number().optional(),
    "ackTs": zod_1.z.number().optional(),
    "clearTs": zod_1.z.number().optional(),
    "assignTs": zod_1.z.number().optional(),
    "details": exports.JsonNodeSchema.optional(),
    "propagateToOwnerHierarchy": zod_1.z.boolean().optional(),
    "propagate": zod_1.z.boolean().optional(),
    "propagateToTenant": zod_1.z.boolean().optional(),
    "propagateRelationTypes": zod_1.z.array(zod_1.z.string()).optional(),
    "propagateToOwner": zod_1.z.boolean().optional(),
    "originatorName": zod_1.z.string().optional(),
    "originatorLabel": zod_1.z.string().optional(),
    "assignee": exports.AlarmAssigneeSchema.optional(),
    "status": zod_1.z.enum(["ACTIVE_ACK", "ACTIVE_UNACK", "CLEARED_ACK", "CLEARED_UNACK"])
});
const AlarmNotificationRuleTriggerConfigSchemaImpl = zod_1.z.object({
    "alarmSeverities": zod_1.z.array(zod_1.z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"])).optional(),
    "alarmTypes": zod_1.z.array(zod_1.z.string()).optional(),
    "clearRule": exports.ClearRuleSchema.optional(),
    "notifyOn": zod_1.z.array(zod_1.z.enum(["ACKNOWLEDGED", "CLEARED", "CREATED", "SEVERITY_CHANGED"])).optional(),
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional()
});
const AlarmRuleSchemaImpl = zod_1.z.object({
    "condition": exports.AlarmConditionSchema.optional(),
    "schedule": exports.AlarmScheduleSchema.optional(),
    "alarmDetails": zod_1.z.string().optional(),
    "dashboardId": exports.DashboardIdSchema.optional()
});
const AlarmScheduleSchemaImpl = zod_1.z.object({
    "dynamicValue": exports.DynamicValue_Of_stringSchema.optional(),
    "type": zod_1.z.enum(["ANY_TIME", "CUSTOM", "SPECIFIC_TIME"]).optional()
});
const AllUsersFilterSchemaImpl = zod_1.z.object({});
const AllowCreateNewDevicesDeviceProfileProvisionConfigurationSchemaImpl = zod_1.z.object({
    "provisionDeviceSecret": zod_1.z.string().optional()
});
const AllowedPermissionsInfoSchemaImpl = zod_1.z.object({
    "userOwnerId": exports.EntityIdSchema.optional(),
    "userPermissions": exports.MergedUserPermissionsSchema.optional(),
    "allowedResources": zod_1.z.array(zod_1.z.enum(["ADMIN_SETTINGS", "ALARM", "ALL", "API_USAGE_STATE", "ASSET", "ASSET_GROUP", "ASSET_PROFILE", "AUDIT_LOG", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "CUSTOMER_GROUP", "DASHBOARD", "DASHBOARD_GROUP", "DEVICE", "DEVICE_GROUP", "DEVICE_PROFILE", "EDGE", "EDGE_GROUP", "ENTITY_VIEW", "ENTITY_VIEW_GROUP", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "OAUTH2_CONFIGURATION_INFO", "OAUTH2_CONFIGURATION_TEMPLATE", "OTA_PACKAGE", "PROFILE", "QUEUE", "ROLE", "RULE_CHAIN", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "USER_GROUP", "VERSION_CONTROL", "WHITE_LABELING", "WIDGETS_BUNDLE", "WIDGET_TYPE"])).optional(),
    "operationsByResource": zod_1.z.object({}).optional(),
    "allowedForGroupRoleOperations": zod_1.z.array(zod_1.z.enum(["ADD_TO_GROUP", "ALL", "ASSIGN_TO_TENANT", "CHANGE_OWNER", "CLAIM_DEVICES", "CREATE", "DELETE", "IMPERSONATE", "READ", "READ_ATTRIBUTES", "READ_CREDENTIALS", "READ_TELEMETRY", "REMOVE_FROM_GROUP", "RPC_CALL", "SHARE_GROUP", "WRITE", "WRITE_ATTRIBUTES", "WRITE_CREDENTIALS", "WRITE_TELEMETRY"])).optional(),
    "allowedForGroupOwnerOnlyOperations": zod_1.z.array(zod_1.z.enum(["ADD_TO_GROUP", "ALL", "ASSIGN_TO_TENANT", "CHANGE_OWNER", "CLAIM_DEVICES", "CREATE", "DELETE", "IMPERSONATE", "READ", "READ_ATTRIBUTES", "READ_CREDENTIALS", "READ_TELEMETRY", "REMOVE_FROM_GROUP", "RPC_CALL", "SHARE_GROUP", "WRITE", "WRITE_ATTRIBUTES", "WRITE_CREDENTIALS", "WRITE_TELEMETRY"])).optional(),
    "allowedForGroupOwnerOnlyGroupOperations": zod_1.z.array(zod_1.z.enum(["ADD_TO_GROUP", "ALL", "ASSIGN_TO_TENANT", "CHANGE_OWNER", "CLAIM_DEVICES", "CREATE", "DELETE", "IMPERSONATE", "READ", "READ_ATTRIBUTES", "READ_CREDENTIALS", "READ_TELEMETRY", "REMOVE_FROM_GROUP", "RPC_CALL", "SHARE_GROUP", "WRITE", "WRITE_ATTRIBUTES", "WRITE_CREDENTIALS", "WRITE_TELEMETRY"])).optional()
});
const AnyTimeScheduleSchemaImpl = zod_1.z.object({
    "dynamicValue": exports.DynamicValue_Of_stringSchema.optional(),
    "type": zod_1.z.enum(["ANY_TIME", "CUSTOM", "SPECIFIC_TIME"]).optional()
});
const ApiUsageLimitNotificationRuleTriggerConfigSchemaImpl = zod_1.z.object({
    "apiFeatures": zod_1.z.array(zod_1.z.enum(["ALARM", "DB", "EMAIL", "JS", "RE", "SMS", "TBEL", "TRANSPORT"])).optional(),
    "notifyOn": zod_1.z.array(zod_1.z.enum(["DISABLED", "ENABLED", "WARNING"])).optional(),
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional()
});
const ApiUsageStateFilterSchemaImpl = zod_1.z.object({
    "customerId": exports.CustomerIdSchema.optional()
});
const ArrayNodeSchemaImpl = zod_1.z.object({});
const AssetSchemaImpl = zod_1.z.object({
    "id": exports.AssetIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "name": zod_1.z.string(),
    "type": zod_1.z.string().optional(),
    "label": zod_1.z.string().optional(),
    "assetProfileId": exports.AssetProfileIdSchema.optional(),
    "additionalInfo": exports.JsonNodeSchema.optional(),
    "ownerId": exports.EntityIdSchema.optional()
});
const AssetIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["ASSET"])
});
const AssetInfoSchemaImpl = zod_1.z.object({
    "id": exports.AssetIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "name": zod_1.z.string(),
    "type": zod_1.z.string().optional(),
    "label": zod_1.z.string().optional(),
    "assetProfileId": exports.AssetProfileIdSchema.optional(),
    "additionalInfo": exports.JsonNodeSchema.optional(),
    "ownerId": exports.EntityIdSchema.optional(),
    "ownerName": zod_1.z.string().optional(),
    "groups": zod_1.z.array(exports.EntityInfoSchema).optional()
});
const AssetProfileSchemaImpl = zod_1.z.object({
    "id": exports.AssetProfileIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "name": zod_1.z.string().optional(),
    "default": zod_1.z.boolean().optional(),
    "defaultDashboardId": exports.DashboardIdSchema.optional(),
    "defaultRuleChainId": exports.RuleChainIdSchema.optional(),
    "defaultQueueName": zod_1.z.string().optional(),
    "description": zod_1.z.string().optional(),
    "image": zod_1.z.string().optional(),
    "defaultEdgeRuleChainId": exports.RuleChainIdSchema.optional()
});
const AssetProfileIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["ASSET_PROFILE"])
});
const AssetProfileInfoSchemaImpl = zod_1.z.object({
    "id": exports.EntityIdSchema.optional(),
    "name": zod_1.z.string().optional(),
    "image": zod_1.z.string().optional(),
    "defaultDashboardId": exports.DashboardIdSchema.optional(),
    "tenantId": exports.TenantIdSchema.optional()
});
const AssetSearchQuerySchemaImpl = zod_1.z.object({
    "relationType": zod_1.z.string().optional(),
    "assetTypes": zod_1.z.array(zod_1.z.string()).optional(),
    "parameters": exports.RelationsSearchParametersSchema.optional()
});
const AssetSearchQueryFilterSchemaImpl = zod_1.z.object({
    "assetTypes": zod_1.z.array(zod_1.z.string()).optional(),
    "direction": zod_1.z.enum(["FROM", "TO"]).optional(),
    "fetchLastLevelOnly": zod_1.z.boolean().optional(),
    "maxLevel": zod_1.z.number().optional(),
    "relationType": zod_1.z.string().optional(),
    "rootEntity": exports.EntityIdSchema.optional()
});
const AssetTypeFilterSchemaImpl = zod_1.z.object({
    "assetNameFilter": zod_1.z.string().optional(),
    "assetTypes": zod_1.z.array(zod_1.z.string()).optional()
});
const AtomicIntegerSchemaImpl = zod_1.z.object({
    "acquire": zod_1.z.number().optional(),
    "andDecrement": zod_1.z.number().optional(),
    "andIncrement": zod_1.z.number().optional(),
    "opaque": zod_1.z.number().optional(),
    "plain": zod_1.z.number().optional()
});
const AttributeExportDataSchemaImpl = zod_1.z.object({
    "booleanValue": zod_1.z.boolean().optional(),
    "doubleValue": zod_1.z.number().optional(),
    "jsonValue": zod_1.z.string().optional(),
    "key": zod_1.z.string().optional(),
    "lastUpdateTs": zod_1.z.number().optional(),
    "longValue": zod_1.z.number().optional(),
    "strValue": zod_1.z.string().optional()
});
const AttributesEntityViewSchemaImpl = zod_1.z.object({
    "cs": zod_1.z.array(zod_1.z.string()),
    "sh": zod_1.z.array(zod_1.z.string()),
    "ss": zod_1.z.array(zod_1.z.string())
});
const AuditLogSchemaImpl = zod_1.z.object({
    "id": exports.AuditLogIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "entityId": exports.EntityIdSchema.optional(),
    "entityName": zod_1.z.string().optional(),
    "userId": exports.UserIdSchema.optional(),
    "userName": zod_1.z.string().optional(),
    "actionType": zod_1.z.enum(["ACTIVATED", "ADDED", "ADDED_COMMENT", "ADDED_TO_ENTITY_GROUP", "ALARM_ACK", "ALARM_ASSIGNED", "ALARM_CLEAR", "ALARM_DELETE", "ALARM_UNASSIGNED", "ASSIGNED_FROM_TENANT", "ASSIGNED_TO_CUSTOMER", "ASSIGNED_TO_EDGE", "ASSIGNED_TO_TENANT", "ATTRIBUTES_DELETED", "ATTRIBUTES_READ", "ATTRIBUTES_UPDATED", "CHANGE_OWNER", "CREDENTIALS_READ", "CREDENTIALS_UPDATED", "DELETED", "DELETED_COMMENT", "LOCKOUT", "LOGIN", "LOGOUT", "MADE_PRIVATE", "MADE_PUBLIC", "PROVISION_FAILURE", "PROVISION_SUCCESS", "RELATIONS_DELETED", "RELATION_ADD_OR_UPDATE", "RELATION_DELETED", "REMOVED_FROM_ENTITY_GROUP", "REST_API_RULE_ENGINE_CALL", "RPC_CALL", "SMS_SENT", "SUSPENDED", "TIMESERIES_DELETED", "TIMESERIES_UPDATED", "UNASSIGNED_FROM_CUSTOMER", "UNASSIGNED_FROM_EDGE", "UPDATED", "UPDATED_COMMENT"]).optional(),
    "actionData": exports.JsonNodeSchema.optional(),
    "actionStatus": zod_1.z.enum(["FAILURE", "SUCCESS"]).optional(),
    "actionFailureDetails": zod_1.z.string().optional()
});
const AuditLogIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string()
});
const AutoVersionCreateConfigSchemaImpl = zod_1.z.object({
    "branch": zod_1.z.string().optional(),
    "saveAttributes": zod_1.z.boolean().optional(),
    "saveCredentials": zod_1.z.boolean().optional(),
    "saveGroupEntities": zod_1.z.boolean().optional(),
    "savePermissions": zod_1.z.boolean().optional(),
    "saveRelations": zod_1.z.boolean().optional()
});
const AwsSnsSmsProviderConfigurationSchemaImpl = zod_1.z.object({
    "accessKeyId": zod_1.z.string().optional(),
    "secretAccessKey": zod_1.z.string().optional(),
    "region": zod_1.z.string().optional()
});
const BackupCodeTwoFaAccountConfigSchemaImpl = zod_1.z.object({
    "codes": zod_1.z.array(zod_1.z.string()).optional(),
    "codesLeft": zod_1.z.number().optional(),
    "useByDefault": zod_1.z.boolean().optional()
});
const BackupCodeTwoFaProviderConfigSchemaImpl = zod_1.z.object({
    "codesQuantity": zod_1.z.number().optional()
});
const BlobEntityIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["BLOB_ENTITY"])
});
const BlobEntityInfoSchemaImpl = zod_1.z.object({
    "id": exports.BlobEntityIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "ownerId": exports.EntityIdSchema.optional(),
    "name": zod_1.z.string().optional(),
    "type": zod_1.z.string().optional(),
    "contentType": zod_1.z.enum(["application/pdf", "image/jpeg", "image/png"]).optional(),
    "additionalInfo": exports.JsonNodeSchema.optional()
});
const BlobEntityWithCustomerInfoSchemaImpl = zod_1.z.object({
    "id": exports.BlobEntityIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "ownerId": exports.EntityIdSchema.optional(),
    "name": zod_1.z.string().optional(),
    "type": zod_1.z.string().optional(),
    "contentType": zod_1.z.enum(["application/pdf", "image/jpeg", "image/png"]).optional(),
    "additionalInfo": exports.JsonNodeSchema.optional(),
    "customerTitle": zod_1.z.string().optional(),
    "customerIsPublic": zod_1.z.object({}).optional()
});
const BooleanFilterPredicateSchemaImpl = zod_1.z.object({
    "operation": zod_1.z.enum(["EQUAL", "NOT_EQUAL"]).optional(),
    "value": exports.FilterPredicateValue_Of_booleanSchema.optional()
});
const BranchInfoSchemaImpl = zod_1.z.object({
    "default": zod_1.z.boolean().optional(),
    "name": zod_1.z.string().optional()
});
const BulkImportRequestSchemaImpl = zod_1.z.object({
    "customerId": exports.CustomerIdSchema.optional(),
    "entityGroupId": zod_1.z.string().optional(),
    "file": zod_1.z.string().optional(),
    "mapping": exports.MappingSchema.optional()
});
const BulkImportResult_Of_AssetSchemaImpl = zod_1.z.object({
    "created": exports.AtomicIntegerSchema.optional(),
    "errors": exports.AtomicIntegerSchema.optional(),
    "errorsList": zod_1.z.array(zod_1.z.string()).optional(),
    "updated": exports.AtomicIntegerSchema.optional()
});
const BulkImportResult_Of_DeviceSchemaImpl = zod_1.z.object({
    "created": exports.AtomicIntegerSchema.optional(),
    "errors": exports.AtomicIntegerSchema.optional(),
    "errorsList": zod_1.z.array(zod_1.z.string()).optional(),
    "updated": exports.AtomicIntegerSchema.optional()
});
const BulkImportResult_Of_EdgeSchemaImpl = zod_1.z.object({
    "created": exports.AtomicIntegerSchema.optional(),
    "errors": exports.AtomicIntegerSchema.optional(),
    "errorsList": zod_1.z.array(zod_1.z.string()).optional(),
    "updated": exports.AtomicIntegerSchema.optional()
});
const ButtonSchemaImpl = zod_1.z.object({
    "dashboardId": zod_1.z.string().optional(),
    "dashboardState": zod_1.z.string().optional(),
    "enabled": zod_1.z.boolean().optional(),
    "link": zod_1.z.string().optional(),
    "linkType": zod_1.z.enum(["DASHBOARD", "LINK"]).optional(),
    "setEntityIdInState": zod_1.z.boolean().optional(),
    "text": zod_1.z.string().optional()
});
const ByteArrayResourceSchemaImpl = zod_1.z.object({
    "byteArray": zod_1.z.string().optional(),
    "description": zod_1.z.string().optional(),
    "file": zod_1.z.string().optional(),
    "filename": zod_1.z.string().optional(),
    "inputStream": exports.InputStreamSchema.optional(),
    "open": zod_1.z.boolean().optional(),
    "readable": zod_1.z.boolean().optional(),
    "uri": zod_1.z.string().optional(),
    "url": zod_1.z.string().optional()
});
const ByteBufferSchemaImpl = zod_1.z.object({
    "char": zod_1.z.string().optional(),
    "direct": zod_1.z.boolean().optional(),
    "double": zod_1.z.number().optional(),
    "float": zod_1.z.number().optional(),
    "int": zod_1.z.number().optional(),
    "long": zod_1.z.number().optional(),
    "readOnly": zod_1.z.boolean().optional(),
    "short": zod_1.z.number().optional()
});
const ChangePasswordRequestSchemaImpl = zod_1.z.object({
    "currentPassword": zod_1.z.string().optional(),
    "newPassword": zod_1.z.string().optional()
});
const CheckPreProvisionedDevicesDeviceProfileProvisionConfigurationSchemaImpl = zod_1.z.object({
    "provisionDeviceSecret": zod_1.z.string().optional()
});
const ClaimRequestSchemaImpl = zod_1.z.object({
    "secretKey": zod_1.z.string().optional()
});
const ClearRuleSchemaImpl = zod_1.z.object({
    "alarmStatuses": zod_1.z.array(zod_1.z.enum(["ACK", "ACTIVE", "ANY", "CLEARED", "UNACK"])).optional()
});
const ClientAttributesQueryingSnmpCommunicationConfigSchemaImpl = zod_1.z.object({
    "mappings": zod_1.z.array(exports.SnmpMappingSchema).optional(),
    "queryingFrequencyMs": zod_1.z.number().optional(),
    "spec": zod_1.z.enum(["CLIENT_ATTRIBUTES_QUERYING", "SHARED_ATTRIBUTES_SETTING", "TELEMETRY_QUERYING", "TO_DEVICE_RPC_REQUEST", "TO_SERVER_RPC_REQUEST"]).optional()
});
const CoapDeviceProfileTransportConfigurationSchemaImpl = zod_1.z.object({
    "clientSettings": exports.PowerSavingConfigurationSchema.optional(),
    "coapDeviceTypeConfiguration": exports.CoapDeviceTypeConfigurationSchema.optional()
});
const CoapDeviceTransportConfigurationSchemaImpl = zod_1.z.object({
    "edrxCycle": zod_1.z.number().optional(),
    "pagingTransmissionWindow": zod_1.z.number().optional(),
    "powerMode": zod_1.z.enum(["DRX", "E_DRX", "PSM"]).optional(),
    "psmActivityTimer": zod_1.z.number().optional()
});
const CoapDeviceTypeConfigurationSchemaImpl = zod_1.z.object({});
const ColumnMappingSchemaImpl = zod_1.z.object({
    "key": zod_1.z.string().optional(),
    "type": zod_1.z.enum(["ACCESS_TOKEN", "CLOUD_ENDPOINT", "DESCRIPTION", "EDGE_LICENSE_KEY", "IS_GATEWAY", "LABEL", "LWM2M_BOOTSTRAP_SERVER_PUBLIC_KEY_OR_ID", "LWM2M_BOOTSTRAP_SERVER_SECRET_KEY", "LWM2M_BOOTSTRAP_SERVER_SECURITY_MODE", "LWM2M_CLIENT_CERT", "LWM2M_CLIENT_ENDPOINT", "LWM2M_CLIENT_IDENTITY", "LWM2M_CLIENT_KEY", "LWM2M_CLIENT_SECURITY_CONFIG_MODE", "LWM2M_SERVER_CLIENT_PUBLIC_KEY_OR_ID", "LWM2M_SERVER_CLIENT_SECRET_KEY", "LWM2M_SERVER_SECURITY_MODE", "MQTT_CLIENT_ID", "MQTT_PASSWORD", "MQTT_USER_NAME", "NAME", "ROUTING_KEY", "SECRET", "SERVER_ATTRIBUTE", "SHARED_ATTRIBUTE", "SNMP_COMMUNITY_STRING", "SNMP_HOST", "SNMP_PORT", "SNMP_VERSION", "TIMESERIES", "TYPE", "X509"]).optional()
});
const ComparisonTsValueSchemaImpl = zod_1.z.object({
    "current": exports.TsValueSchema.optional(),
    "previous": exports.TsValueSchema.optional()
});
const ComplexFilterPredicateSchemaImpl = zod_1.z.object({
    "operation": zod_1.z.enum(["AND", "OR"]).optional(),
    "predicates": zod_1.z.array(exports.KeyFilterPredicateSchema).optional()
});
const ComplexVersionCreateRequestSchemaImpl = zod_1.z.object({
    "branch": zod_1.z.string().optional(),
    "entityTypes": zod_1.z.object({}).optional(),
    "syncStrategy": zod_1.z.enum(["MERGE", "OVERWRITE"]).optional(),
    "type": zod_1.z.enum(["COMPLEX", "SINGLE_ENTITY"]).optional(),
    "versionName": zod_1.z.string().optional()
});
const ComponentDescriptorSchemaImpl = zod_1.z.object({
    "id": exports.ComponentDescriptorIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "type": zod_1.z.enum(["ACTION", "ANALYTICS", "ENRICHMENT", "EXTERNAL", "FILTER", "FLOW", "TRANSFORMATION"]).optional(),
    "scope": zod_1.z.enum(["TENANT"]).optional(),
    "clusteringMode": zod_1.z.enum(["ENABLED", "SINGLETON", "USER_PREFERENCE"]).optional(),
    "name": zod_1.z.string().optional(),
    "clazz": zod_1.z.string().optional(),
    "configurationDescriptor": exports.JsonNodeSchema.optional(),
    "configurationVersion": zod_1.z.number().optional(),
    "actions": zod_1.z.string().optional()
});
const ComponentDescriptorIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string()
});
const ContactBased_Of_objectSchemaImpl = zod_1.z.object({
    "additionalInfo": exports.JsonNodeSchema.optional(),
    "address": zod_1.z.string().optional(),
    "address2": zod_1.z.string().optional(),
    "city": zod_1.z.string().optional(),
    "country": zod_1.z.string().optional(),
    "createdTime": zod_1.z.number().optional(),
    "email": zod_1.z.string().optional(),
    "id": zod_1.z.object({}).optional(),
    "name": zod_1.z.string().optional(),
    "phone": zod_1.z.string().optional(),
    "state": zod_1.z.string().optional(),
    "zip": zod_1.z.string().optional()
});
const ConverterSchemaImpl = zod_1.z.object({
    "id": exports.ConverterIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "name": zod_1.z.string(),
    "type": zod_1.z.enum(["DOWNLINK", "UPLINK"]),
    "debugMode": zod_1.z.boolean().optional(),
    "configuration": exports.JsonNodeSchema.optional(),
    "additionalInfo": exports.JsonNodeSchema.optional(),
    "edgeTemplate": zod_1.z.boolean().optional()
});
const ConverterIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["CONVERTER"])
});
const CustomMenuSchemaImpl = zod_1.z.object({
    "disabledMenuItems": zod_1.z.array(zod_1.z.string()),
    "menuItems": zod_1.z.array(exports.CustomMenuItemSchema)
});
const CustomMenuItemSchemaImpl = zod_1.z.object({
    "name": zod_1.z.string(),
    "iconUrl": zod_1.z.string().optional(),
    "materialIcon": zod_1.z.string().optional(),
    "iframeUrl": zod_1.z.string().optional(),
    "dashboardId": zod_1.z.string().optional(),
    "hideDashboardToolbar": zod_1.z.boolean().optional(),
    "setAccessToken": zod_1.z.boolean().optional(),
    "childMenuItems": zod_1.z.array(exports.CustomMenuItemSchema).optional()
});
const CustomTimeScheduleSchemaImpl = zod_1.z.object({
    "dynamicValue": exports.DynamicValue_Of_stringSchema.optional(),
    "items": zod_1.z.array(exports.CustomTimeScheduleItemSchema).optional(),
    "timezone": zod_1.z.string().optional(),
    "type": zod_1.z.enum(["ANY_TIME", "CUSTOM", "SPECIFIC_TIME"]).optional()
});
const CustomTimeScheduleItemSchemaImpl = zod_1.z.object({
    "dayOfWeek": zod_1.z.number().optional(),
    "enabled": zod_1.z.boolean().optional(),
    "endsOn": zod_1.z.number().optional(),
    "startsOn": zod_1.z.number().optional()
});
const CustomTranslationSchemaImpl = zod_1.z.object({
    "translationMap": zod_1.z.object({})
});
const CustomerSchemaImpl = zod_1.z.object({
    "id": exports.CustomerIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "title": zod_1.z.string(),
    "name": zod_1.z.string().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "parentCustomerId": exports.CustomerIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "ownerId": exports.EntityIdSchema.optional(),
    "country": zod_1.z.string().optional(),
    "state": zod_1.z.string().optional(),
    "city": zod_1.z.string().optional(),
    "address": zod_1.z.string().optional(),
    "address2": zod_1.z.string().optional(),
    "zip": zod_1.z.string().optional(),
    "phone": zod_1.z.string().optional(),
    "email": zod_1.z.string(),
    "additionalInfo": exports.JsonNodeSchema.optional()
});
const CustomerIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["CUSTOMER"])
});
const CustomerInfoSchemaImpl = zod_1.z.object({
    "id": exports.CustomerIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "title": zod_1.z.string(),
    "name": zod_1.z.string().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "parentCustomerId": exports.CustomerIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "ownerId": exports.EntityIdSchema.optional(),
    "country": zod_1.z.string().optional(),
    "state": zod_1.z.string().optional(),
    "city": zod_1.z.string().optional(),
    "address": zod_1.z.string().optional(),
    "address2": zod_1.z.string().optional(),
    "zip": zod_1.z.string().optional(),
    "phone": zod_1.z.string().optional(),
    "email": zod_1.z.string(),
    "additionalInfo": exports.JsonNodeSchema.optional(),
    "ownerName": zod_1.z.string().optional(),
    "groups": zod_1.z.array(exports.EntityInfoSchema).optional()
});
const CustomerUsersFilterSchemaImpl = zod_1.z.object({
    "customerId": zod_1.z.string().optional()
});
const DashboardSchemaImpl = zod_1.z.object({
    "id": exports.DashboardIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "ownerId": exports.EntityIdSchema.optional(),
    "title": zod_1.z.string().optional(),
    "image": zod_1.z.string().optional(),
    "assignedCustomers": zod_1.z.array(exports.ShortCustomerInfoSchema).optional(),
    "mobileHide": zod_1.z.boolean().optional(),
    "mobileOrder": zod_1.z.number().optional(),
    "name": zod_1.z.string().optional(),
    "configuration": exports.JsonNodeSchema.optional()
});
const DashboardIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["DASHBOARD"])
});
const DashboardInfoSchemaImpl = zod_1.z.object({
    "id": exports.DashboardIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "ownerId": exports.EntityIdSchema.optional(),
    "title": zod_1.z.string().optional(),
    "image": zod_1.z.string().optional(),
    "assignedCustomers": zod_1.z.array(exports.ShortCustomerInfoSchema).optional(),
    "mobileHide": zod_1.z.boolean().optional(),
    "mobileOrder": zod_1.z.number().optional(),
    "name": zod_1.z.string().optional(),
    "configuration": exports.JsonNodeSchema.optional(),
    "ownerName": zod_1.z.string().optional(),
    "groups": zod_1.z.array(exports.EntityInfoSchema).optional()
});
const DebugConverterEventFilterSchemaImpl = zod_1.z.object({
    "error": zod_1.z.boolean().optional(),
    "in": zod_1.z.string().optional(),
    "metadata": zod_1.z.string().optional(),
    "notEmpty": zod_1.z.boolean().optional(),
    "out": zod_1.z.string().optional(),
    "type": zod_1.z.string().optional(),
    "eventType": zod_1.z.enum(["DEBUG_CONVERTER", "DEBUG_INTEGRATION", "DEBUG_RULE_CHAIN", "DEBUG_RULE_NODE", "ERROR", "LC_EVENT", "RAW_DATA", "STATS"]).optional(),
    "server": zod_1.z.string().optional(),
    "errorStr": zod_1.z.string().optional()
});
const DebugIntegrationEventFilterSchemaImpl = zod_1.z.object({
    "error": zod_1.z.boolean().optional(),
    "message": zod_1.z.string().optional(),
    "notEmpty": zod_1.z.boolean().optional(),
    "statusIntegration": zod_1.z.string().optional(),
    "type": zod_1.z.string().optional(),
    "eventType": zod_1.z.enum(["DEBUG_CONVERTER", "DEBUG_INTEGRATION", "DEBUG_RULE_CHAIN", "DEBUG_RULE_NODE", "ERROR", "LC_EVENT", "RAW_DATA", "STATS"]).optional(),
    "server": zod_1.z.string().optional(),
    "errorStr": zod_1.z.string().optional()
});
const DefaultCoapDeviceTypeConfigurationSchemaImpl = zod_1.z.object({
    "transportPayloadTypeConfiguration": exports.TransportPayloadTypeConfigurationSchema.optional()
});
const DefaultDeviceConfigurationSchemaImpl = zod_1.z.any();
const DefaultDeviceProfileConfigurationSchemaImpl = zod_1.z.object({});
const DefaultDeviceProfileTransportConfigurationSchemaImpl = zod_1.z.object({});
const DefaultDeviceTransportConfigurationSchemaImpl = zod_1.z.any();
const DefaultRuleChainCreateRequestSchemaImpl = zod_1.z.object({
    "name": zod_1.z.string()
});
const DefaultTenantProfileConfigurationSchemaImpl = zod_1.z.object({
    "alarmsTtlDays": zod_1.z.number().optional(),
    "cassandraQueryTenantRateLimitsConfiguration": zod_1.z.string().optional(),
    "customerServerRestLimitsConfiguration": zod_1.z.string().optional(),
    "defaultStorageTtlDays": zod_1.z.number().optional(),
    "integrationMsgsPerDeviceRateLimit": zod_1.z.string().optional(),
    "integrationMsgsPerTenantRateLimit": zod_1.z.string().optional(),
    "maxAssets": zod_1.z.number().optional(),
    "maxConverters": zod_1.z.number().optional(),
    "maxCreatedAlarms": zod_1.z.number().optional(),
    "maxCustomers": zod_1.z.number().optional(),
    "maxDPStorageDays": zod_1.z.number().optional(),
    "maxDashboards": zod_1.z.number().optional(),
    "maxDevices": zod_1.z.number().optional(),
    "maxEmails": zod_1.z.number().optional(),
    "maxIntegrations": zod_1.z.number().optional(),
    "maxJSExecutions": zod_1.z.number().optional(),
    "maxOtaPackagesInBytes": zod_1.z.number().optional(),
    "maxREExecutions": zod_1.z.number().optional(),
    "maxResourceSize": zod_1.z.number().optional(),
    "maxResourcesInBytes": zod_1.z.number().optional(),
    "maxRuleChains": zod_1.z.number().optional(),
    "maxRuleNodeExecutionsPerMessage": zod_1.z.number().optional(),
    "maxSchedulerEvents": zod_1.z.number().optional(),
    "maxSms": zod_1.z.number().optional(),
    "maxTbelExecutions": zod_1.z.number().optional(),
    "maxTransportDataPoints": zod_1.z.number().optional(),
    "maxTransportMessages": zod_1.z.number().optional(),
    "maxUsers": zod_1.z.number().optional(),
    "maxWsSessionsPerCustomer": zod_1.z.number().optional(),
    "maxWsSessionsPerPublicUser": zod_1.z.number().optional(),
    "maxWsSessionsPerRegularUser": zod_1.z.number().optional(),
    "maxWsSessionsPerTenant": zod_1.z.number().optional(),
    "maxWsSubscriptionsPerCustomer": zod_1.z.number().optional(),
    "maxWsSubscriptionsPerPublicUser": zod_1.z.number().optional(),
    "maxWsSubscriptionsPerRegularUser": zod_1.z.number().optional(),
    "maxWsSubscriptionsPerTenant": zod_1.z.number().optional(),
    "queueStatsTtlDays": zod_1.z.number().optional(),
    "rpcTtlDays": zod_1.z.number().optional(),
    "ruleEngineExceptionsTtlDays": zod_1.z.number().optional(),
    "smsEnabled": zod_1.z.boolean().optional(),
    "tenantEntityExportRateLimit": zod_1.z.string().optional(),
    "tenantEntityImportRateLimit": zod_1.z.string().optional(),
    "tenantNotificationRequestsPerRuleRateLimit": zod_1.z.string().optional(),
    "tenantNotificationRequestsRateLimit": zod_1.z.string().optional(),
    "tenantServerRestLimitsConfiguration": zod_1.z.string().optional(),
    "transportDeviceMsgRateLimit": zod_1.z.string().optional(),
    "transportDeviceTelemetryDataPointsRateLimit": zod_1.z.string().optional(),
    "transportDeviceTelemetryMsgRateLimit": zod_1.z.string().optional(),
    "transportTenantMsgRateLimit": zod_1.z.string().optional(),
    "transportTenantTelemetryDataPointsRateLimit": zod_1.z.string().optional(),
    "transportTenantTelemetryMsgRateLimit": zod_1.z.string().optional(),
    "warnThreshold": zod_1.z.number().optional(),
    "wsMsgQueueLimitPerSession": zod_1.z.number().optional(),
    "wsUpdatesPerSessionRateLimit": zod_1.z.string().optional()
});
const DeferredResult_Of_EntityDataDiffSchemaImpl = zod_1.z.object({
    "result": zod_1.z.object({}).optional(),
    "setOrExpired": zod_1.z.boolean().optional()
});
const DeferredResult_Of_EntityDataInfoSchemaImpl = zod_1.z.object({
    "result": zod_1.z.object({}).optional(),
    "setOrExpired": zod_1.z.boolean().optional()
});
const DeferredResult_Of_List_Of_BranchInfoSchemaImpl = zod_1.z.object({
    "result": zod_1.z.object({}).optional(),
    "setOrExpired": zod_1.z.boolean().optional()
});
const DeferredResult_Of_List_Of_VersionedEntityInfoSchemaImpl = zod_1.z.object({
    "result": zod_1.z.object({}).optional(),
    "setOrExpired": zod_1.z.boolean().optional()
});
const DeferredResult_Of_PageData_Of_EntityVersionSchemaImpl = zod_1.z.object({
    "result": zod_1.z.object({}).optional(),
    "setOrExpired": zod_1.z.boolean().optional()
});
const DeferredResult_Of_RepositorySettingsSchemaImpl = zod_1.z.object({
    "result": zod_1.z.object({}).optional(),
    "setOrExpired": zod_1.z.boolean().optional()
});
const DeferredResult_Of_ResponseEntitySchemaImpl = zod_1.z.object({
    "result": zod_1.z.object({}).optional(),
    "setOrExpired": zod_1.z.boolean().optional()
});
const DeferredResult_Of_VoidSchemaImpl = zod_1.z.object({
    "result": zod_1.z.object({}).optional(),
    "setOrExpired": zod_1.z.boolean().optional()
});
const DeferredResult_Of_uuidSchemaImpl = zod_1.z.object({
    "result": zod_1.z.object({}).optional(),
    "setOrExpired": zod_1.z.boolean().optional()
});
const DeliveryMethodNotificationTemplateSchemaImpl = zod_1.z.object({
    "body": zod_1.z.string().optional(),
    "enabled": zod_1.z.boolean().optional()
});
const DeviceSchemaImpl = zod_1.z.object({
    "id": exports.DeviceIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "ownerId": exports.EntityIdSchema.optional(),
    "name": zod_1.z.string(),
    "type": zod_1.z.string().optional(),
    "label": zod_1.z.string().optional(),
    "deviceProfileId": exports.DeviceProfileIdSchema,
    "deviceData": exports.DeviceDataSchema.optional(),
    "firmwareId": exports.OtaPackageIdSchema.optional(),
    "softwareId": exports.OtaPackageIdSchema.optional(),
    "additionalInfo": exports.JsonNodeSchema.optional()
});
const DeviceActivityNotificationRuleTriggerConfigSchemaImpl = zod_1.z.object({
    "deviceProfiles": zod_1.z.array(zod_1.z.string()).optional(),
    "devices": zod_1.z.array(zod_1.z.string()).optional(),
    "notifyOn": zod_1.z.array(zod_1.z.enum(["ACTIVE", "INACTIVE"])).optional(),
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional()
});
const DeviceConfigurationSchemaImpl = zod_1.z.object({});
const DeviceCredentialsSchemaImpl = zod_1.z.object({
    "id": exports.DeviceCredentialsIdSchema,
    "createdTime": zod_1.z.number().optional(),
    "deviceId": exports.DeviceIdSchema,
    "credentialsType": zod_1.z.enum(["ACCESS_TOKEN", "LWM2M_CREDENTIALS", "MQTT_BASIC", "X509_CERTIFICATE"]).optional(),
    "credentialsId": zod_1.z.string(),
    "credentialsValue": zod_1.z.string().optional()
});
const DeviceCredentialsIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string()
});
const DeviceDataSchemaImpl = zod_1.z.object({
    "configuration": exports.DeviceConfigurationSchema.optional(),
    "transportConfiguration": exports.DeviceTransportConfigurationSchema.optional()
});
const DeviceExportDataSchemaImpl = zod_1.z.object({
    "attributes": zod_1.z.object({}).optional(),
    "credentials": exports.DeviceCredentialsSchema.optional(),
    "entity": exports.DeviceSchema.optional(),
    "entityType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
    "relations": zod_1.z.array(exports.EntityRelationSchema).optional()
});
const DeviceGroupOtaPackageSchemaImpl = zod_1.z.object({
    "groupId": exports.EntityGroupIdSchema.optional(),
    "id": zod_1.z.string().optional(),
    "otaPackageId": exports.OtaPackageIdSchema.optional(),
    "otaPackageType": zod_1.z.enum(["FIRMWARE", "SOFTWARE"]).optional(),
    "otaPackageUpdateTime": zod_1.z.number().optional()
});
const DeviceIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["DEVICE"])
});
const DeviceInfoSchemaImpl = zod_1.z.object({
    "id": exports.DeviceIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "ownerId": exports.EntityIdSchema.optional(),
    "name": zod_1.z.string(),
    "type": zod_1.z.string().optional(),
    "label": zod_1.z.string().optional(),
    "deviceProfileId": exports.DeviceProfileIdSchema,
    "deviceData": exports.DeviceDataSchema.optional(),
    "firmwareId": exports.OtaPackageIdSchema.optional(),
    "softwareId": exports.OtaPackageIdSchema.optional(),
    "additionalInfo": exports.JsonNodeSchema.optional(),
    "ownerName": zod_1.z.string().optional(),
    "groups": zod_1.z.array(exports.EntityInfoSchema).optional(),
    "active": zod_1.z.boolean().optional()
});
const DeviceProfileSchemaImpl = zod_1.z.object({
    "id": exports.DeviceProfileIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "name": zod_1.z.string().optional(),
    "default": zod_1.z.boolean().optional(),
    "defaultDashboardId": exports.DashboardIdSchema.optional(),
    "defaultRuleChainId": exports.RuleChainIdSchema.optional(),
    "defaultQueueName": zod_1.z.string().optional(),
    "firmwareId": exports.OtaPackageIdSchema.optional(),
    "softwareId": exports.OtaPackageIdSchema.optional(),
    "description": zod_1.z.string().optional(),
    "image": zod_1.z.string().optional(),
    "provisionDeviceKey": zod_1.z.string().optional(),
    "transportType": zod_1.z.enum(["COAP", "DEFAULT", "LWM2M", "MQTT", "SNMP"]).optional(),
    "provisionType": zod_1.z.enum(["ALLOW_CREATE_NEW_DEVICES", "CHECK_PRE_PROVISIONED_DEVICES", "DISABLED", "X509_CERTIFICATE_CHAIN"]).optional(),
    "profileData": exports.DeviceProfileDataSchema.optional(),
    "type": zod_1.z.enum(["DEFAULT"]).optional(),
    "defaultEdgeRuleChainId": exports.RuleChainIdSchema.optional()
});
const DeviceProfileAlarmSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string().optional(),
    "alarmType": zod_1.z.string().optional(),
    "createRules": zod_1.z.object({}).optional(),
    "clearRule": exports.AlarmRuleSchema.optional(),
    "propagate": zod_1.z.boolean().optional(),
    "propagateToOwner": zod_1.z.boolean().optional(),
    "propagateToOwnerHierarchy": zod_1.z.boolean().optional(),
    "propagateToTenant": zod_1.z.boolean().optional(),
    "propagateRelationTypes": zod_1.z.array(zod_1.z.string()).optional()
});
const DeviceProfileConfigurationSchemaImpl = zod_1.z.object({});
const DeviceProfileDataSchemaImpl = zod_1.z.object({
    "configuration": exports.DeviceProfileConfigurationSchema.optional(),
    "transportConfiguration": exports.DeviceProfileTransportConfigurationSchema.optional(),
    "provisionConfiguration": exports.DeviceProfileProvisionConfigurationSchema.optional(),
    "alarms": zod_1.z.array(exports.DeviceProfileAlarmSchema).optional()
});
const DeviceProfileIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["DEVICE_PROFILE"])
});
const DeviceProfileInfoSchemaImpl = zod_1.z.object({
    "id": exports.EntityIdSchema.optional(),
    "name": zod_1.z.string().optional(),
    "image": zod_1.z.string().optional(),
    "defaultDashboardId": exports.DashboardIdSchema.optional(),
    "type": zod_1.z.enum(["DEFAULT"]).optional(),
    "transportType": zod_1.z.enum(["COAP", "DEFAULT", "LWM2M", "MQTT", "SNMP"]).optional(),
    "tenantId": exports.TenantIdSchema.optional()
});
const DeviceProfileProvisionConfigurationSchemaImpl = zod_1.z.object({
    "provisionDeviceSecret": zod_1.z.string().optional()
});
const DeviceProfileTransportConfigurationSchemaImpl = zod_1.z.object({});
const DeviceSearchQuerySchemaImpl = zod_1.z.object({
    "relationType": zod_1.z.string().optional(),
    "deviceTypes": zod_1.z.array(zod_1.z.string()).optional(),
    "parameters": exports.RelationsSearchParametersSchema.optional()
});
const DeviceSearchQueryFilterSchemaImpl = zod_1.z.object({
    "deviceTypes": zod_1.z.array(zod_1.z.string()).optional(),
    "direction": zod_1.z.enum(["FROM", "TO"]).optional(),
    "fetchLastLevelOnly": zod_1.z.boolean().optional(),
    "maxLevel": zod_1.z.number().optional(),
    "relationType": zod_1.z.string().optional(),
    "rootEntity": exports.EntityIdSchema.optional()
});
const DeviceTransportConfigurationSchemaImpl = zod_1.z.object({});
const DeviceTypeFilterSchemaImpl = zod_1.z.object({
    "deviceNameFilter": zod_1.z.string().optional(),
    "deviceTypes": zod_1.z.array(zod_1.z.string()).optional()
});
const DisabledDeviceProfileProvisionConfigurationSchemaImpl = zod_1.z.object({
    "provisionDeviceSecret": zod_1.z.string().optional()
});
const DurationAlarmConditionSpecSchemaImpl = zod_1.z.object({
    "predicate": exports.FilterPredicateValue_Of_longSchema.optional(),
    "unit": zod_1.z.enum(["DAYS", "HOURS", "MICROSECONDS", "MILLISECONDS", "MINUTES", "NANOSECONDS", "SECONDS"]).optional()
});
const DynamicValue_Of_booleanSchemaImpl = zod_1.z.object({
    "inherit": zod_1.z.boolean().optional(),
    "sourceAttribute": zod_1.z.string().optional(),
    "sourceType": zod_1.z.enum(["CURRENT_CUSTOMER", "CURRENT_DEVICE", "CURRENT_TENANT", "CURRENT_USER"]).optional()
});
const DynamicValue_Of_doubleSchemaImpl = zod_1.z.object({
    "inherit": zod_1.z.boolean().optional(),
    "sourceAttribute": zod_1.z.string().optional(),
    "sourceType": zod_1.z.enum(["CURRENT_CUSTOMER", "CURRENT_DEVICE", "CURRENT_TENANT", "CURRENT_USER"]).optional()
});
const DynamicValue_Of_intSchemaImpl = zod_1.z.object({
    "inherit": zod_1.z.boolean().optional(),
    "sourceAttribute": zod_1.z.string().optional(),
    "sourceType": zod_1.z.enum(["CURRENT_CUSTOMER", "CURRENT_DEVICE", "CURRENT_TENANT", "CURRENT_USER"]).optional()
});
const DynamicValue_Of_longSchemaImpl = zod_1.z.object({
    "inherit": zod_1.z.boolean().optional(),
    "sourceAttribute": zod_1.z.string().optional(),
    "sourceType": zod_1.z.enum(["CURRENT_CUSTOMER", "CURRENT_DEVICE", "CURRENT_TENANT", "CURRENT_USER"]).optional()
});
const DynamicValue_Of_stringSchemaImpl = zod_1.z.object({
    "inherit": zod_1.z.boolean().optional(),
    "sourceAttribute": zod_1.z.string().optional(),
    "sourceType": zod_1.z.enum(["CURRENT_CUSTOMER", "CURRENT_DEVICE", "CURRENT_TENANT", "CURRENT_USER"]).optional()
});
const EdgeSchemaImpl = zod_1.z.object({
    "additionalInfo": exports.JsonNodeSchema.optional(),
    "ownerId": exports.EntityIdSchema.optional(),
    "id": exports.EdgeIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "rootRuleChainId": exports.RuleChainIdSchema.optional(),
    "name": zod_1.z.string(),
    "type": zod_1.z.string(),
    "label": zod_1.z.string().optional(),
    "routingKey": zod_1.z.string(),
    "secret": zod_1.z.string(),
    "edgeLicenseKey": zod_1.z.string(),
    "cloudEndpoint": zod_1.z.string()
});
const EdgeEventSchemaImpl = zod_1.z.object({
    "action": zod_1.z.enum(["ADDED", "ADDED_TO_ENTITY_GROUP", "ALARM_ACK", "ALARM_ASSIGNED", "ALARM_CLEAR", "ALARM_UNASSIGNED", "ASSIGNED_TO_EDGE", "ATTRIBUTES_DELETED", "ATTRIBUTES_UPDATED", "CHANGE_OWNER", "CREDENTIALS_REQUEST", "CREDENTIALS_UPDATED", "DELETED", "ENTITY_MERGE_REQUEST", "POST_ATTRIBUTES", "RELATION_ADD_OR_UPDATE", "RELATION_DELETED", "REMOVED_FROM_ENTITY_GROUP", "RPC_CALL", "TIMESERIES_UPDATED", "UNASSIGNED_FROM_EDGE", "UPDATED"]).optional(),
    "body": exports.JsonNodeSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "edgeId": exports.EdgeIdSchema.optional(),
    "entityGroupId": zod_1.z.string().optional(),
    "entityId": zod_1.z.string().optional(),
    "id": exports.EdgeEventIdSchema.optional(),
    "seqId": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "type": zod_1.z.enum(["ADMIN_SETTINGS", "ALARM", "ASSET", "ASSET_PROFILE", "CONVERTER", "CUSTOMER", "CUSTOM_TRANSLATION", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "LOGIN_WHITE_LABELING", "MAIL_TEMPLATES", "OTA_PACKAGE", "QUEUE", "RELATION", "ROLE", "RULE_CHAIN", "RULE_CHAIN_METADATA", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WHITE_LABELING", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
    "uid": zod_1.z.string().optional()
});
const EdgeEventIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string()
});
const EdgeIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["EDGE"])
});
const EdgeInfoSchemaImpl = zod_1.z.object({
    "additionalInfo": exports.JsonNodeSchema.optional(),
    "ownerId": exports.EntityIdSchema.optional(),
    "id": exports.EdgeIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "rootRuleChainId": exports.RuleChainIdSchema.optional(),
    "name": zod_1.z.string(),
    "type": zod_1.z.string(),
    "label": zod_1.z.string().optional(),
    "routingKey": zod_1.z.string(),
    "secret": zod_1.z.string(),
    "edgeLicenseKey": zod_1.z.string(),
    "cloudEndpoint": zod_1.z.string(),
    "ownerName": zod_1.z.string().optional(),
    "groups": zod_1.z.array(exports.EntityInfoSchema).optional()
});
const EdgeInstructionsSchemaImpl = zod_1.z.object({
    "instructions": zod_1.z.string().optional()
});
const EdgeSearchQuerySchemaImpl = zod_1.z.object({
    "relationType": zod_1.z.string().optional(),
    "edgeTypes": zod_1.z.array(zod_1.z.string()).optional(),
    "parameters": exports.RelationsSearchParametersSchema.optional()
});
const EdgeSearchQueryFilterSchemaImpl = zod_1.z.object({
    "direction": zod_1.z.enum(["FROM", "TO"]).optional(),
    "edgeTypes": zod_1.z.array(zod_1.z.string()).optional(),
    "fetchLastLevelOnly": zod_1.z.boolean().optional(),
    "maxLevel": zod_1.z.number().optional(),
    "relationType": zod_1.z.string().optional(),
    "rootEntity": exports.EntityIdSchema.optional()
});
const EdgeTypeFilterSchemaImpl = zod_1.z.object({
    "edgeNameFilter": zod_1.z.string().optional(),
    "edgeTypes": zod_1.z.array(zod_1.z.string()).optional()
});
const EfentoCoapDeviceTypeConfigurationSchemaImpl = zod_1.z.object({});
const EmailDeliveryMethodNotificationTemplateSchemaImpl = zod_1.z.object({
    "body": zod_1.z.string().optional(),
    "enabled": zod_1.z.boolean().optional(),
    "subject": zod_1.z.string().optional()
});
const EmailTwoFaAccountConfigSchemaImpl = zod_1.z.object({
    "email": zod_1.z.string(),
    "useByDefault": zod_1.z.boolean().optional()
});
const EmailTwoFaProviderConfigSchemaImpl = zod_1.z.object({
    "verificationCodeLifetime": zod_1.z.number().optional()
});
const EntitiesByGroupNameFilterSchemaImpl = zod_1.z.object({
    "entityGroupNameFilter": zod_1.z.string().optional(),
    "groupType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
    "ownerId": exports.EntityIdSchema.optional()
});
const EntitiesLimitNotificationRuleTriggerConfigSchemaImpl = zod_1.z.object({
    "entityTypes": zod_1.z.array(zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"])).optional(),
    "threshold": zod_1.z.number().optional(),
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional()
});
const EntityActionNotificationRuleTriggerConfigSchemaImpl = zod_1.z.object({
    "created": zod_1.z.boolean().optional(),
    "deleted": zod_1.z.boolean().optional(),
    "entityTypes": zod_1.z.array(zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"])).optional(),
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional(),
    "updated": zod_1.z.boolean().optional()
});
const EntityCountQuerySchemaImpl = zod_1.z.object({
    "entityFilter": exports.EntityFilterSchema.optional(),
    "keyFilters": zod_1.z.array(exports.KeyFilterSchema).optional()
});
const EntityDataSchemaImpl = zod_1.z.object({
    "aggLatest": zod_1.z.object({}).optional(),
    "entityId": exports.EntityIdSchema.optional(),
    "latest": zod_1.z.object({}).optional(),
    "readAttrs": zod_1.z.boolean().optional(),
    "readTs": zod_1.z.boolean().optional(),
    "timeseries": zod_1.z.object({}).optional()
});
const EntityDataDiffSchemaImpl = zod_1.z.object({
    "currentVersion": exports.EntityExportData_Of_objectSchema.optional(),
    "otherVersion": exports.EntityExportData_Of_objectSchema.optional()
});
const EntityDataInfoSchemaImpl = zod_1.z.object({
    "hasAttributes": zod_1.z.boolean().optional(),
    "hasCredentials": zod_1.z.boolean().optional(),
    "hasGroupEntities": zod_1.z.boolean().optional(),
    "hasPermissions": zod_1.z.boolean().optional(),
    "hasRelations": zod_1.z.boolean().optional()
});
const EntityDataPageLinkSchemaImpl = zod_1.z.object({
    "dynamic": zod_1.z.boolean().optional(),
    "page": zod_1.z.number().optional(),
    "pageSize": zod_1.z.number().optional(),
    "sortOrder": exports.EntityDataSortOrderSchema.optional(),
    "textSearch": zod_1.z.string().optional()
});
const EntityDataQuerySchemaImpl = zod_1.z.object({
    "entityFields": zod_1.z.array(exports.EntityKeySchema).optional(),
    "entityFilter": exports.EntityFilterSchema.optional(),
    "keyFilters": zod_1.z.array(exports.KeyFilterSchema).optional(),
    "latestValues": zod_1.z.array(exports.EntityKeySchema).optional(),
    "pageLink": exports.EntityDataPageLinkSchema.optional()
});
const EntityDataSortOrderSchemaImpl = zod_1.z.object({
    "direction": zod_1.z.enum(["ASC", "DESC"]).optional(),
    "key": exports.EntityKeySchema.optional()
});
const EntityExportData_Of_objectSchemaImpl = zod_1.z.object({
    "attributes": zod_1.z.object({}).optional(),
    "entity": zod_1.z.object({}).optional(),
    "entityType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
    "relations": zod_1.z.array(exports.EntityRelationSchema).optional()
});
const EntityFilterSchemaImpl = zod_1.z.object({});
const EntityGroupSchemaImpl = zod_1.z.object({
    "id": exports.EntityGroupIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "ownerId": exports.EntityIdSchema.optional(),
    "name": zod_1.z.string(),
    "type": zod_1.z.enum(["ASSET", "CUSTOMER", "DASHBOARD", "DEVICE", "EDGE", "ENTITY_VIEW", "USER"]),
    "additionalInfo": exports.JsonNodeSchema.optional(),
    "configuration": exports.JsonNodeSchema.optional(),
    "groupAll": zod_1.z.boolean().optional(),
    "edgeGroupAll": zod_1.z.boolean().optional()
});
const EntityGroupExportDataSchemaImpl = zod_1.z.object({
    "attributes": zod_1.z.object({}).optional(),
    "entity": exports.EntityGroupSchema.optional(),
    "entityType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
    "groupEntities": zod_1.z.boolean().optional(),
    "permissions": zod_1.z.array(exports.GroupPermissionSchema).optional(),
    "relations": zod_1.z.array(exports.EntityRelationSchema).optional()
});
const EntityGroupFilterSchemaImpl = zod_1.z.object({
    "entityGroup": zod_1.z.string().optional(),
    "groupType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional()
});
const EntityGroupIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["ENTITY_GROUP"])
});
const EntityGroupInfoSchemaImpl = zod_1.z.object({
    "id": exports.EntityGroupIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "ownerId": exports.EntityIdSchema.optional(),
    "name": zod_1.z.string(),
    "type": zod_1.z.enum(["ASSET", "CUSTOMER", "DASHBOARD", "DEVICE", "EDGE", "ENTITY_VIEW", "USER"]),
    "additionalInfo": exports.JsonNodeSchema.optional(),
    "configuration": exports.JsonNodeSchema.optional(),
    "groupAll": zod_1.z.boolean().optional(),
    "edgeGroupAll": zod_1.z.boolean().optional(),
    "ownerIds": zod_1.z.array(exports.EntityIdSchema)
});
const EntityGroupListFilterSchemaImpl = zod_1.z.object({
    "entityGroupList": zod_1.z.array(zod_1.z.string()).optional(),
    "groupType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional()
});
const EntityGroupNameFilterSchemaImpl = zod_1.z.object({
    "entityGroupNameFilter": zod_1.z.string().optional(),
    "groupType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional()
});
const EntityIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"])
});
const EntityInfoSchemaImpl = zod_1.z.object({
    "id": exports.EntityIdSchema.optional(),
    "name": zod_1.z.string().optional()
});
const EntityKeySchemaImpl = zod_1.z.object({
    "key": zod_1.z.string().optional(),
    "type": zod_1.z.enum(["ALARM_FIELD", "ATTRIBUTE", "CLIENT_ATTRIBUTE", "ENTITY_FIELD", "SERVER_ATTRIBUTE", "SHARED_ATTRIBUTE", "TIME_SERIES"]).optional()
});
const EntityListFilterSchemaImpl = zod_1.z.object({
    "entityList": zod_1.z.array(zod_1.z.string()).optional(),
    "entityType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional()
});
const EntityLoadErrorSchemaImpl = zod_1.z.object({
    "message": zod_1.z.string().optional(),
    "source": exports.EntityIdSchema.optional(),
    "target": exports.EntityIdSchema.optional(),
    "type": zod_1.z.string().optional()
});
const EntityNameFilterSchemaImpl = zod_1.z.object({
    "entityNameFilter": zod_1.z.string().optional(),
    "entityType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional()
});
const EntityRelationSchemaImpl = zod_1.z.object({
    "from": exports.EntityIdSchema.optional(),
    "to": exports.EntityIdSchema.optional(),
    "type": zod_1.z.string().optional(),
    "typeGroup": zod_1.z.enum(["COMMON", "DASHBOARD", "EDGE", "EDGE_AUTO_ASSIGN_RULE_CHAIN", "FROM_ENTITY_GROUP", "RULE_CHAIN", "RULE_NODE"]).optional(),
    "additionalInfo": exports.JsonNodeSchema.optional()
});
const EntityRelationInfoSchemaImpl = zod_1.z.object({
    "from": exports.EntityIdSchema.optional(),
    "to": exports.EntityIdSchema.optional(),
    "type": zod_1.z.string().optional(),
    "typeGroup": zod_1.z.enum(["COMMON", "DASHBOARD", "EDGE", "EDGE_AUTO_ASSIGN_RULE_CHAIN", "FROM_ENTITY_GROUP", "RULE_CHAIN", "RULE_NODE"]).optional(),
    "additionalInfo": exports.JsonNodeSchema.optional(),
    "fromName": zod_1.z.string().optional(),
    "toName": zod_1.z.string().optional()
});
const EntityRelationsQuerySchemaImpl = zod_1.z.object({
    "filters": zod_1.z.array(exports.RelationEntityTypeFilterSchema).optional(),
    "parameters": exports.RelationsSearchParametersSchema.optional()
});
const EntitySubtypeSchemaImpl = zod_1.z.object({
    "entityType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "type": zod_1.z.string().optional()
});
const EntityTypeFilterSchemaImpl = zod_1.z.object({
    "entityType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional()
});
const EntityTypeLoadResultSchemaImpl = zod_1.z.object({
    "created": zod_1.z.number().optional(),
    "deleted": zod_1.z.number().optional(),
    "entityType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
    "groupsCreated": zod_1.z.number().optional(),
    "groupsDeleted": zod_1.z.number().optional(),
    "groupsUpdated": zod_1.z.number().optional(),
    "updated": zod_1.z.number().optional()
});
const EntityTypeVersionCreateConfigSchemaImpl = zod_1.z.object({
    "allEntities": zod_1.z.boolean().optional(),
    "entityIds": zod_1.z.array(zod_1.z.string()).optional(),
    "saveAttributes": zod_1.z.boolean().optional(),
    "saveCredentials": zod_1.z.boolean().optional(),
    "saveGroupEntities": zod_1.z.boolean().optional(),
    "savePermissions": zod_1.z.boolean().optional(),
    "saveRelations": zod_1.z.boolean().optional(),
    "syncStrategy": zod_1.z.enum(["MERGE", "OVERWRITE"]).optional()
});
const EntityTypeVersionLoadConfigSchemaImpl = zod_1.z.object({
    "autoGenerateIntegrationKey": zod_1.z.boolean().optional(),
    "findExistingEntityByName": zod_1.z.boolean().optional(),
    "loadAttributes": zod_1.z.boolean().optional(),
    "loadCredentials": zod_1.z.boolean().optional(),
    "loadGroupEntities": zod_1.z.boolean().optional(),
    "loadPermissions": zod_1.z.boolean().optional(),
    "loadRelations": zod_1.z.boolean().optional(),
    "removeOtherEntities": zod_1.z.boolean().optional()
});
const EntityTypeVersionLoadRequestSchemaImpl = zod_1.z.object({
    "entityTypes": zod_1.z.object({}).optional(),
    "type": zod_1.z.enum(["ENTITY_TYPE", "SINGLE_ENTITY"]).optional(),
    "versionId": zod_1.z.string().optional()
});
const EntityVersionSchemaImpl = zod_1.z.object({
    "author": zod_1.z.string().optional(),
    "id": zod_1.z.string().optional(),
    "name": zod_1.z.string().optional(),
    "timestamp": zod_1.z.number().optional()
});
const EntityViewSchemaImpl = zod_1.z.object({
    "id": exports.EntityViewIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "name": zod_1.z.string(),
    "type": zod_1.z.string(),
    "entityId": exports.EntityIdSchema.optional(),
    "keys": exports.TelemetryEntityViewSchema.optional(),
    "startTimeMs": zod_1.z.number().optional(),
    "endTimeMs": zod_1.z.number().optional(),
    "additionalInfo": exports.JsonNodeSchema.optional(),
    "ownerId": exports.EntityIdSchema.optional()
});
const EntityViewIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["ENTITY_VIEW"])
});
const EntityViewInfoSchemaImpl = zod_1.z.object({
    "id": exports.EntityViewIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "name": zod_1.z.string(),
    "type": zod_1.z.string(),
    "entityId": exports.EntityIdSchema.optional(),
    "keys": exports.TelemetryEntityViewSchema.optional(),
    "startTimeMs": zod_1.z.number().optional(),
    "endTimeMs": zod_1.z.number().optional(),
    "additionalInfo": exports.JsonNodeSchema.optional(),
    "ownerName": zod_1.z.string().optional(),
    "groups": zod_1.z.array(exports.EntityInfoSchema).optional(),
    "ownerId": exports.EntityIdSchema.optional()
});
const EntityViewSearchQuerySchemaImpl = zod_1.z.object({
    "relationType": zod_1.z.string().optional(),
    "entityViewTypes": zod_1.z.array(zod_1.z.string()).optional(),
    "parameters": exports.RelationsSearchParametersSchema.optional()
});
const EntityViewSearchQueryFilterSchemaImpl = zod_1.z.object({
    "direction": zod_1.z.enum(["FROM", "TO"]).optional(),
    "entityViewTypes": zod_1.z.array(zod_1.z.string()).optional(),
    "fetchLastLevelOnly": zod_1.z.boolean().optional(),
    "maxLevel": zod_1.z.number().optional(),
    "relationType": zod_1.z.string().optional(),
    "rootEntity": exports.EntityIdSchema.optional()
});
const EntityViewTypeFilterSchemaImpl = zod_1.z.object({
    "entityViewNameFilter": zod_1.z.string().optional(),
    "entityViewTypes": zod_1.z.array(zod_1.z.string()).optional()
});
const ErrorEventFilterSchemaImpl = zod_1.z.object({
    "notEmpty": zod_1.z.boolean().optional(),
    "eventType": zod_1.z.enum(["DEBUG_CONVERTER", "DEBUG_INTEGRATION", "DEBUG_RULE_CHAIN", "DEBUG_RULE_NODE", "ERROR", "LC_EVENT", "RAW_DATA", "STATS"]).optional(),
    "server": zod_1.z.string().optional(),
    "method": zod_1.z.string().optional(),
    "errorStr": zod_1.z.string().optional()
});
const EscalatedNotificationRuleRecipientsConfigSchemaImpl = zod_1.z.object({
    "escalationTable": zod_1.z.object({}).optional(),
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
const EventFilterSchemaImpl = zod_1.z.object({
    "notEmpty": zod_1.z.boolean().optional(),
    "eventType": zod_1.z.enum(["DEBUG_CONVERTER", "DEBUG_INTEGRATION", "DEBUG_RULE_CHAIN", "DEBUG_RULE_NODE", "ERROR", "LC_EVENT", "RAW_DATA", "STATS"])
});
const EventIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string()
});
const EventInfoSchemaImpl = zod_1.z.object({
    "id": exports.EventIdSchema.optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "type": zod_1.z.string().optional(),
    "uid": zod_1.z.string().optional(),
    "entityId": exports.EntityIdSchema.optional(),
    "body": exports.JsonNodeSchema.optional(),
    "createdTime": zod_1.z.number().optional()
});
const ExportableEntity_Of_EntityIdSchemaImpl = zod_1.z.object({
    "createdTime": zod_1.z.number().optional(),
    "id": exports.EntityIdSchema.optional(),
    "name": zod_1.z.string().optional()
});
const FaviconSchemaImpl = zod_1.z.object({
    "url": zod_1.z.string().optional()
});
const FeaturesInfoSchemaImpl = zod_1.z.object({
    "emailEnabled": zod_1.z.boolean().optional(),
    "notificationEnabled": zod_1.z.boolean().optional(),
    "oauthEnabled": zod_1.z.boolean().optional(),
    "smsEnabled": zod_1.z.boolean().optional(),
    "twoFaEnabled": zod_1.z.boolean().optional(),
    "whiteLabelingEnabled": zod_1.z.boolean().optional()
});
const FilterPredicateValue_Of_booleanSchemaImpl = zod_1.z.object({
    "defaultValue": zod_1.z.boolean().optional(),
    "dynamicValue": exports.DynamicValue_Of_booleanSchema.optional(),
    "userValue": zod_1.z.boolean().optional()
});
const FilterPredicateValue_Of_doubleSchemaImpl = zod_1.z.object({
    "defaultValue": zod_1.z.number().optional(),
    "dynamicValue": exports.DynamicValue_Of_doubleSchema.optional(),
    "userValue": zod_1.z.number().optional()
});
const FilterPredicateValue_Of_intSchemaImpl = zod_1.z.object({
    "defaultValue": zod_1.z.number().optional(),
    "dynamicValue": exports.DynamicValue_Of_intSchema.optional(),
    "userValue": zod_1.z.number().optional()
});
const FilterPredicateValue_Of_longSchemaImpl = zod_1.z.object({
    "defaultValue": zod_1.z.number().optional(),
    "dynamicValue": exports.DynamicValue_Of_longSchema.optional(),
    "userValue": zod_1.z.number().optional()
});
const FilterPredicateValue_Of_stringSchemaImpl = zod_1.z.object({
    "defaultValue": zod_1.z.string().optional(),
    "dynamicValue": exports.DynamicValue_Of_stringSchema.optional(),
    "userValue": zod_1.z.string().optional()
});
const GroupEntityExportDataSchemaImpl = zod_1.z.object({
    "attributes": zod_1.z.object({}).optional(),
    "entity": exports.ExportableEntity_Of_EntityIdSchema.optional(),
    "entityType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
    "relations": zod_1.z.array(exports.EntityRelationSchema).optional()
});
const GroupPermissionSchemaImpl = zod_1.z.object({
    "public": zod_1.z.boolean().optional(),
    "id": exports.GroupPermissionIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "userGroupId": exports.EntityGroupIdSchema.optional(),
    "roleId": exports.RoleIdSchema.optional(),
    "entityGroupId": exports.EntityGroupIdSchema.optional(),
    "entityGroupType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
    "name": zod_1.z.string().optional()
});
const GroupPermissionIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["GROUP_PERMISSION"])
});
const GroupPermissionInfoSchemaImpl = zod_1.z.object({
    "public": zod_1.z.boolean().optional(),
    "readOnly": zod_1.z.boolean().optional(),
    "id": exports.GroupPermissionIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "userGroupId": exports.EntityGroupIdSchema.optional(),
    "roleId": exports.RoleIdSchema.optional(),
    "entityGroupId": exports.EntityGroupIdSchema.optional(),
    "entityGroupType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
    "name": zod_1.z.string().optional(),
    "role": exports.RoleSchema.optional(),
    "entityGroupName": zod_1.z.string().optional(),
    "entityGroupOwnerId": exports.EntityIdSchema.optional(),
    "entityGroupOwnerName": zod_1.z.string().optional(),
    "userGroupName": zod_1.z.string().optional(),
    "userGroupOwnerId": exports.EntityIdSchema.optional(),
    "userGroupOwnerName": zod_1.z.string().optional()
});
const HasId_Of_objectSchemaImpl = zod_1.z.object({
    "id": zod_1.z.object({}).optional()
});
const HomeDashboardSchemaImpl = zod_1.z.object({
    "id": exports.DashboardIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "ownerId": exports.EntityIdSchema.optional(),
    "title": zod_1.z.string().optional(),
    "image": zod_1.z.string().optional(),
    "assignedCustomers": zod_1.z.array(exports.ShortCustomerInfoSchema).optional(),
    "mobileHide": zod_1.z.boolean().optional(),
    "mobileOrder": zod_1.z.number().optional(),
    "name": zod_1.z.string().optional(),
    "configuration": exports.JsonNodeSchema.optional(),
    "hideDashboardToolbar": zod_1.z.boolean().optional()
});
const HomeDashboardInfoSchemaImpl = zod_1.z.object({
    "dashboardId": exports.DashboardIdSchema.optional(),
    "hideDashboardToolbar": zod_1.z.boolean().optional()
});
const ImageExportDataSchemaImpl = zod_1.z.object({
    "data": zod_1.z.string().optional(),
    "fileName": zod_1.z.string().optional(),
    "mediaType": zod_1.z.string().optional(),
    "public": zod_1.z.boolean().optional(),
    "publicResourceKey": zod_1.z.string().optional(),
    "resourceKey": zod_1.z.string().optional(),
    "title": zod_1.z.string().optional()
});
const InputStreamSchemaImpl = zod_1.z.object({});
const IntegrationSchemaImpl = zod_1.z.object({
    "id": exports.IntegrationIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "defaultConverterId": exports.ConverterIdSchema,
    "downlinkConverterId": exports.ConverterIdSchema.optional(),
    "routingKey": zod_1.z.string(),
    "type": zod_1.z.enum(["APACHE_PULSAR", "AWS_IOT", "AWS_KINESIS", "AWS_SQS", "AZURE_EVENT_HUB", "AZURE_IOT_HUB", "AZURE_SERVICE_BUS", "CHIRPSTACK", "COAP", "CUSTOM", "HTTP", "IBM_WATSON_IOT", "KAFKA", "KPN", "LORIOT", "MQTT", "OCEANCONNECT", "OPC_UA", "PARTICLE", "PUB_SUB", "RABBITMQ", "SIGFOX", "TCP", "THINGPARK", "TMOBILE_IOT_CDP", "TPE", "TTI", "TTN", "TUYA", "UDP"]),
    "debugMode": zod_1.z.boolean().optional(),
    "enabled": zod_1.z.boolean().optional(),
    "remote": zod_1.z.boolean().optional(),
    "allowCreateDevicesOrAssets": zod_1.z.boolean().optional(),
    "secret": zod_1.z.string().optional(),
    "configuration": exports.JsonNodeSchema,
    "additionalInfo": exports.JsonNodeSchema.optional(),
    "name": zod_1.z.string(),
    "edgeTemplate": zod_1.z.boolean().optional()
});
const IntegrationIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["INTEGRATION"])
});
const IntegrationInfoSchemaImpl = zod_1.z.object({
    "stats": exports.ArrayNodeSchema.optional(),
    "status": exports.ObjectNodeSchema.optional(),
    "id": exports.IntegrationIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "type": zod_1.z.enum(["APACHE_PULSAR", "AWS_IOT", "AWS_KINESIS", "AWS_SQS", "AZURE_EVENT_HUB", "AZURE_IOT_HUB", "AZURE_SERVICE_BUS", "CHIRPSTACK", "COAP", "CUSTOM", "HTTP", "IBM_WATSON_IOT", "KAFKA", "KPN", "LORIOT", "MQTT", "OCEANCONNECT", "OPC_UA", "PARTICLE", "PUB_SUB", "RABBITMQ", "SIGFOX", "TCP", "THINGPARK", "TMOBILE_IOT_CDP", "TPE", "TTI", "TTN", "TUYA", "UDP"]),
    "debugMode": zod_1.z.boolean().optional(),
    "enabled": zod_1.z.boolean().optional(),
    "remote": zod_1.z.boolean().optional(),
    "allowCreateDevicesOrAssets": zod_1.z.boolean().optional(),
    "name": zod_1.z.string(),
    "edgeTemplate": zod_1.z.boolean().optional()
});
const IntegrationLifecycleEventNotificationRuleTriggerConfigSchemaImpl = zod_1.z.object({
    "integrationTypes": zod_1.z.array(zod_1.z.enum(["APACHE_PULSAR", "AWS_IOT", "AWS_KINESIS", "AWS_SQS", "AZURE_EVENT_HUB", "AZURE_IOT_HUB", "AZURE_SERVICE_BUS", "CHIRPSTACK", "COAP", "CUSTOM", "HTTP", "IBM_WATSON_IOT", "KAFKA", "KPN", "LORIOT", "MQTT", "OCEANCONNECT", "OPC_UA", "PARTICLE", "PUB_SUB", "RABBITMQ", "SIGFOX", "TCP", "THINGPARK", "TMOBILE_IOT_CDP", "TPE", "TTI", "TTN", "TUYA", "UDP"])).optional(),
    "integrations": zod_1.z.array(zod_1.z.string()).optional(),
    "notifyOn": zod_1.z.array(zod_1.z.enum(["ACTIVATED", "CREATED", "DEACTIVATED", "DELETED", "FAILED", "STARTED", "STOPPED", "SUSPENDED", "UPDATED"])).optional(),
    "onlyOnError": zod_1.z.boolean().optional(),
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional()
});
const JWT_PairSchemaImpl = zod_1.z.object({
    "scope": zod_1.z.enum(["CUSTOMER_USER", "PRE_VERIFICATION_TOKEN", "REFRESH_TOKEN", "SYS_ADMIN", "TENANT_ADMIN"]).optional(),
    "refreshToken": zod_1.z.string().optional(),
    "token": zod_1.z.string().optional()
});
const JWT_SettingsSchemaImpl = zod_1.z.object({
    "tokenExpirationTime": zod_1.z.number().optional(),
    "refreshTokenExpTime": zod_1.z.number().optional(),
    "tokenIssuer": zod_1.z.string().optional(),
    "tokenSigningKey": zod_1.z.string().optional()
});
const JsonNodeSchemaImpl = zod_1.z.object({});
const JsonTransportPayloadConfigurationSchemaImpl = zod_1.z.any();
const KeyFilterSchemaImpl = zod_1.z.object({
    "key": exports.EntityKeySchema.optional(),
    "predicate": exports.KeyFilterPredicateSchema.optional(),
    "valueType": zod_1.z.enum(["BOOLEAN", "DATE_TIME", "NUMERIC", "STRING"]).optional()
});
const KeyFilterPredicateSchemaImpl = zod_1.z.object({});
const LastVisitedDashboardInfoSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string().optional(),
    "title": zod_1.z.string().optional(),
    "starred": zod_1.z.boolean().optional(),
    "lastVisited": zod_1.z.number().optional()
});
const LicenseUsageInfoSchemaImpl = zod_1.z.object({
    "assetsCount": zod_1.z.number().optional(),
    "dashboardsCount": zod_1.z.number().optional(),
    "development": zod_1.z.boolean().optional(),
    "devicesCount": zod_1.z.number().optional(),
    "integrationsCount": zod_1.z.number().optional(),
    "maxAssets": zod_1.z.number().optional(),
    "maxDevices": zod_1.z.number().optional(),
    "plan": zod_1.z.string().optional(),
    "whiteLabelingEnabled": zod_1.z.boolean().optional()
});
const LifeCycleEventFilterSchemaImpl = zod_1.z.object({
    "notEmpty": zod_1.z.boolean().optional(),
    "eventType": zod_1.z.enum(["DEBUG_CONVERTER", "DEBUG_INTEGRATION", "DEBUG_RULE_CHAIN", "DEBUG_RULE_NODE", "ERROR", "LC_EVENT", "RAW_DATA", "STATS"]).optional(),
    "server": zod_1.z.string().optional(),
    "event": zod_1.z.string().optional(),
    "status": zod_1.z.enum(["Failure", "Success"]).optional(),
    "errorStr": zod_1.z.string().optional()
});
const LoginRequestSchemaImpl = zod_1.z.object({
    "username": zod_1.z.string(),
    "password": zod_1.z.string()
});
const LoginResponseSchemaImpl = zod_1.z.object({
    "token": zod_1.z.string(),
    "refreshToken": zod_1.z.string()
});
const LoginWhiteLabelingParamsSchemaImpl = zod_1.z.object({
    "logoImageUrl": zod_1.z.string().optional(),
    "logoImageHeight": zod_1.z.number().optional(),
    "appTitle": zod_1.z.string().optional(),
    "favicon": exports.FaviconSchema.optional(),
    "paletteSettings": exports.PaletteSettingsSchema.optional(),
    "helpLinkBaseUrl": zod_1.z.string().optional(),
    "uiHelpBaseUrl": zod_1.z.string().optional(),
    "enableHelpLinks": zod_1.z.boolean().optional(),
    "whiteLabelingEnabled": zod_1.z.boolean().optional(),
    "showNameVersion": zod_1.z.boolean().optional(),
    "platformName": zod_1.z.string().optional(),
    "platformVersion": zod_1.z.string().optional(),
    "customCss": zod_1.z.string().optional(),
    "pageBackgroundColor": zod_1.z.string().optional(),
    "darkForeground": zod_1.z.boolean().optional(),
    "domainName": zod_1.z.string().optional(),
    "baseUrl": zod_1.z.string().optional(),
    "prohibitDifferentUrl": zod_1.z.boolean().optional(),
    "adminSettingsId": zod_1.z.string().optional(),
    "showNameBottom": zod_1.z.boolean().optional()
});
const LwM2MBootstrapServerCredentialSchemaImpl = zod_1.z.object({});
const LwM2mInstanceSchemaImpl = zod_1.z.object({
    "id": zod_1.z.number().optional(),
    "resources": zod_1.z.array(exports.LwM2mResourceObserveSchema).optional()
});
const LwM2mObjectSchemaImpl = zod_1.z.object({
    "id": zod_1.z.number().optional(),
    "keyId": zod_1.z.string().optional(),
    "name": zod_1.z.string().optional(),
    "multiple": zod_1.z.boolean().optional(),
    "mandatory": zod_1.z.boolean().optional(),
    "instances": zod_1.z.array(exports.LwM2mInstanceSchema).optional()
});
const LwM2mResourceObserveSchemaImpl = zod_1.z.object({
    "id": zod_1.z.number().optional(),
    "name": zod_1.z.string().optional(),
    "observe": zod_1.z.boolean().optional(),
    "attribute": zod_1.z.boolean().optional(),
    "telemetry": zod_1.z.boolean().optional(),
    "keyName": zod_1.z.string().optional()
});
const Lwm2mDeviceProfileTransportConfigurationSchemaImpl = zod_1.z.object({
    "bootstrap": zod_1.z.array(exports.LwM2MBootstrapServerCredentialSchema).optional(),
    "bootstrapServerUpdateEnable": zod_1.z.boolean().optional(),
    "clientLwM2mSettings": exports.OtherConfigurationSchema.optional(),
    "observeAttr": exports.TelemetryMappingConfigurationSchema.optional()
});
const Lwm2mDeviceTransportConfigurationSchemaImpl = zod_1.z.object({
    "edrxCycle": zod_1.z.number().optional(),
    "pagingTransmissionWindow": zod_1.z.number().optional(),
    "powerMode": zod_1.z.enum(["DRX", "E_DRX", "PSM"]).optional(),
    "psmActivityTimer": zod_1.z.number().optional()
});
const MappingSchemaImpl = zod_1.z.object({
    "columns": zod_1.z.array(exports.ColumnMappingSchema).optional(),
    "delimiter": zod_1.z.string().optional(),
    "header": zod_1.z.boolean().optional(),
    "update": zod_1.z.boolean().optional()
});
const MergedGroupPermissionInfoSchemaImpl = zod_1.z.object({
    "entityType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
    "operations": zod_1.z.array(zod_1.z.enum(["ADD_TO_GROUP", "ALL", "ASSIGN_TO_TENANT", "CHANGE_OWNER", "CLAIM_DEVICES", "CREATE", "DELETE", "IMPERSONATE", "READ", "READ_ATTRIBUTES", "READ_CREDENTIALS", "READ_TELEMETRY", "REMOVE_FROM_GROUP", "RPC_CALL", "SHARE_GROUP", "WRITE", "WRITE_ATTRIBUTES", "WRITE_CREDENTIALS", "WRITE_TELEMETRY"])).optional()
});
const MergedGroupTypePermissionInfoSchemaImpl = zod_1.z.object({
    "hasGenericRead": zod_1.z.boolean().optional(),
    "entityGroupIds": zod_1.z.array(exports.EntityGroupIdSchema).optional()
});
const MergedUserPermissionsSchemaImpl = zod_1.z.object({
    "genericPermissions": zod_1.z.object({}).optional(),
    "groupPermissions": zod_1.z.object({}).optional(),
    "readGroupPermissions": zod_1.z.object({}).optional(),
    "readEntityPermissions": zod_1.z.object({}).optional(),
    "readAttrPermissions": zod_1.z.object({}).optional(),
    "readTsPermissions": zod_1.z.object({}).optional()
});
const MicrosoftTeamsDeliveryMethodNotificationTemplateSchemaImpl = zod_1.z.object({
    "body": zod_1.z.string().optional(),
    "button": exports.ButtonSchema.optional(),
    "enabled": zod_1.z.boolean().optional(),
    "subject": zod_1.z.string().optional(),
    "themeColor": zod_1.z.string().optional()
});
const MicrosoftTeamsNotificationTargetConfigSchemaImpl = zod_1.z.object({
    "channelName": zod_1.z.string().optional(),
    "description": zod_1.z.string().optional(),
    "email": zod_1.z.string().optional(),
    "firstName": zod_1.z.string().optional(),
    "id": zod_1.z.object({}).optional(),
    "lastName": zod_1.z.string().optional(),
    "title": zod_1.z.string().optional(),
    "webhookUrl": zod_1.z.string().optional()
});
const MqttDeviceProfileTransportConfigurationSchemaImpl = zod_1.z.object({
    "deviceAttributesSubscribeTopic": zod_1.z.string().optional(),
    "deviceAttributesTopic": zod_1.z.string().optional(),
    "deviceTelemetryTopic": zod_1.z.string().optional(),
    "sendAckOnValidationException": zod_1.z.boolean().optional(),
    "sparkplug": zod_1.z.boolean().optional(),
    "sparkplugAttributesMetricNames": zod_1.z.array(zod_1.z.string()).optional(),
    "transportPayloadTypeConfiguration": exports.TransportPayloadTypeConfigurationSchema.optional()
});
const MqttDeviceTransportConfigurationSchemaImpl = zod_1.z.any();
const NewPlatformVersionNotificationRuleTriggerConfigSchemaImpl = zod_1.z.object({
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional()
});
const NoSecLwM2MBootstrapServerCredentialSchemaImpl = zod_1.z.object({
    "shortServerId": zod_1.z.number().optional(),
    "bootstrapServerIs": zod_1.z.boolean().optional(),
    "host": zod_1.z.string().optional(),
    "port": zod_1.z.number().optional(),
    "clientHoldOffTime": zod_1.z.number().optional(),
    "serverPublicKey": zod_1.z.string().optional(),
    "serverCertificate": zod_1.z.string().optional(),
    "bootstrapServerAccountTimeout": zod_1.z.number().optional(),
    "lifetime": zod_1.z.number().optional(),
    "defaultMinPeriod": zod_1.z.number().optional(),
    "notifIfDisabled": zod_1.z.boolean().optional(),
    "binding": zod_1.z.string().optional()
});
const NodeConnectionInfoSchemaImpl = zod_1.z.object({
    "fromIndex": zod_1.z.number(),
    "toIndex": zod_1.z.number(),
    "type": zod_1.z.string()
});
const NotificationSchemaImpl = zod_1.z.object({
    "additionalConfig": exports.JsonNodeSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "id": exports.NotificationIdSchema.optional(),
    "info": exports.NotificationInfoSchema.optional(),
    "recipientId": exports.UserIdSchema.optional(),
    "requestId": exports.NotificationRequestIdSchema.optional(),
    "status": zod_1.z.enum(["READ", "SENT"]).optional(),
    "subject": zod_1.z.string().optional(),
    "text": zod_1.z.string().optional(),
    "type": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "GENERAL", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT", "RULE_NODE"]).optional()
});
const NotificationDeliveryMethodConfigSchemaImpl = zod_1.z.object({});
const NotificationIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["NOTIFICATION"])
});
const NotificationInfoSchemaImpl = zod_1.z.object({
    "stateEntityId": exports.EntityIdSchema.optional()
});
const NotificationPrefSchemaImpl = zod_1.z.object({
    "enabled": zod_1.z.boolean().optional(),
    "enabledDeliveryMethods": zod_1.z.object({})
});
const NotificationRequestSchemaImpl = zod_1.z.object({
    "additionalConfig": exports.NotificationRequestConfigSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "id": exports.NotificationRequestIdSchema.optional(),
    "info": exports.NotificationInfoSchema.optional(),
    "originatorEntityId": exports.EntityIdSchema.optional(),
    "ruleId": exports.NotificationRuleIdSchema.optional(),
    "stats": exports.NotificationRequestStatsSchema.optional(),
    "status": zod_1.z.enum(["PROCESSING", "SCHEDULED", "SENT"]).optional(),
    "targets": zod_1.z.array(zod_1.z.string()).optional(),
    "template": exports.NotificationTemplateSchema.optional(),
    "templateId": exports.NotificationTemplateIdSchema.optional(),
    "tenantId": exports.TenantIdSchema.optional()
});
const NotificationRequestConfigSchemaImpl = zod_1.z.object({
    "sendingDelayInSec": zod_1.z.number().optional()
});
const NotificationRequestIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["NOTIFICATION_REQUEST"])
});
const NotificationRequestInfoSchemaImpl = zod_1.z.object({
    "additionalConfig": exports.NotificationRequestConfigSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "deliveryMethods": zod_1.z.array(zod_1.z.enum(["EMAIL", "MICROSOFT_TEAMS", "SLACK", "SMS", "WEB"])).optional(),
    "id": exports.NotificationRequestIdSchema.optional(),
    "info": exports.NotificationInfoSchema.optional(),
    "originatorEntityId": exports.EntityIdSchema.optional(),
    "ruleId": exports.NotificationRuleIdSchema.optional(),
    "stats": exports.NotificationRequestStatsSchema.optional(),
    "status": zod_1.z.enum(["PROCESSING", "SCHEDULED", "SENT"]).optional(),
    "targets": zod_1.z.array(zod_1.z.string()).optional(),
    "template": exports.NotificationTemplateSchema.optional(),
    "templateId": exports.NotificationTemplateIdSchema.optional(),
    "templateName": zod_1.z.string().optional(),
    "tenantId": exports.TenantIdSchema.optional()
});
const NotificationRequestPreviewSchemaImpl = zod_1.z.object({
    "processedTemplates": zod_1.z.object({}).optional(),
    "recipientsCountByTarget": zod_1.z.object({}).optional(),
    "recipientsPreview": zod_1.z.array(zod_1.z.string()).optional(),
    "totalRecipientsCount": zod_1.z.number().optional()
});
const NotificationRequestStatsSchemaImpl = zod_1.z.object({
    "error": zod_1.z.string().optional(),
    "errors": zod_1.z.object({}).optional(),
    "sent": zod_1.z.object({}).optional()
});
const NotificationRuleSchemaImpl = zod_1.z.object({
    "additionalConfig": exports.NotificationRuleConfigSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "enabled": zod_1.z.boolean().optional(),
    "name": zod_1.z.string(),
    "recipientsConfig": exports.NotificationRuleRecipientsConfigSchema,
    "templateId": exports.NotificationTemplateIdSchema,
    "tenantId": exports.TenantIdSchema.optional(),
    "triggerConfig": exports.NotificationRuleTriggerConfigSchema,
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
const NotificationRuleConfigSchemaImpl = zod_1.z.object({
    "description": zod_1.z.string().optional()
});
const NotificationRuleIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["NOTIFICATION_RULE"])
});
const NotificationRuleInfoSchemaImpl = zod_1.z.object({
    "additionalConfig": exports.NotificationRuleConfigSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "deliveryMethods": zod_1.z.array(zod_1.z.enum(["EMAIL", "MICROSOFT_TEAMS", "SLACK", "SMS", "WEB"])).optional(),
    "enabled": zod_1.z.boolean().optional(),
    "name": zod_1.z.string(),
    "recipientsConfig": exports.NotificationRuleRecipientsConfigSchema,
    "templateId": exports.NotificationTemplateIdSchema,
    "templateName": zod_1.z.string().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "triggerConfig": exports.NotificationRuleTriggerConfigSchema,
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
const NotificationRuleRecipientsConfigSchemaImpl = zod_1.z.object({
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
const NotificationRuleTriggerConfigSchemaImpl = zod_1.z.object({
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional()
});
const NotificationSettingsSchemaImpl = zod_1.z.object({
    "deliveryMethodsConfigs": zod_1.z.object({})
});
const NotificationTargetSchemaImpl = zod_1.z.object({
    "configuration": exports.NotificationTargetConfigSchema,
    "createdTime": zod_1.z.number().optional(),
    "name": zod_1.z.string(),
    "tenantId": exports.TenantIdSchema.optional()
});
const NotificationTargetConfigSchemaImpl = zod_1.z.object({
    "description": zod_1.z.string().optional()
});
const NotificationTemplateSchemaImpl = zod_1.z.object({
    "configuration": exports.NotificationTemplateConfigSchema,
    "createdTime": zod_1.z.number().optional(),
    "name": zod_1.z.string().optional(),
    "notificationType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "GENERAL", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT", "RULE_NODE"]),
    "tenantId": exports.TenantIdSchema.optional()
});
const NotificationTemplateConfigSchemaImpl = zod_1.z.object({
    "deliveryMethodsTemplates": zod_1.z.object({}).optional()
});
const NotificationTemplateIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["NOTIFICATION_TEMPLATE"])
});
const NumericFilterPredicateSchemaImpl = zod_1.z.object({
    "operation": zod_1.z.enum(["EQUAL", "GREATER", "GREATER_OR_EQUAL", "LESS", "LESS_OR_EQUAL", "NOT_EQUAL"]).optional(),
    "value": exports.FilterPredicateValue_Of_doubleSchema.optional()
});
const OAuth2BasicMapperConfigSchemaImpl = zod_1.z.object({
    "alwaysFullScreen": zod_1.z.boolean().optional(),
    "customerNamePattern": zod_1.z.string().optional(),
    "defaultDashboardName": zod_1.z.string().optional(),
    "emailAttributeKey": zod_1.z.string().optional(),
    "firstNameAttributeKey": zod_1.z.string().optional(),
    "lastNameAttributeKey": zod_1.z.string().optional(),
    "parentCustomerNamePattern": zod_1.z.string().optional(),
    "tenantNamePattern": zod_1.z.string().optional(),
    "tenantNameStrategy": zod_1.z.enum(["CUSTOM", "DOMAIN", "EMAIL"]),
    "userGroupsNamePattern": zod_1.z.array(zod_1.z.string()).optional()
});
const OAuth2ClientInfoSchemaImpl = zod_1.z.object({
    "icon": zod_1.z.string().optional(),
    "name": zod_1.z.string().optional(),
    "url": zod_1.z.string().optional()
});
const OAuth2ClientRegistrationTemplateSchemaImpl = zod_1.z.object({
    "accessTokenUri": zod_1.z.string().optional(),
    "additionalInfo": exports.JsonNodeSchema.optional(),
    "authorizationUri": zod_1.z.string().optional(),
    "clientAuthenticationMethod": zod_1.z.string().optional(),
    "comment": zod_1.z.string().optional(),
    "createdTime": zod_1.z.number().optional(),
    "helpLink": zod_1.z.string().optional(),
    "id": exports.OAuth2ClientRegistrationTemplateIdSchema.optional(),
    "jwkSetUri": zod_1.z.string().optional(),
    "loginButtonIcon": zod_1.z.string().optional(),
    "loginButtonLabel": zod_1.z.string().optional(),
    "mapperConfig": exports.OAuth2MapperConfigSchema.optional(),
    "name": zod_1.z.string().optional(),
    "providerId": zod_1.z.string(),
    "scope": zod_1.z.array(zod_1.z.string()).optional(),
    "userInfoUri": zod_1.z.string().optional(),
    "userNameAttributeName": zod_1.z.string().optional()
});
const OAuth2ClientRegistrationTemplateIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string()
});
const OAuth2CustomMapperConfigSchemaImpl = zod_1.z.object({
    "password": zod_1.z.string().optional(),
    "sendToken": zod_1.z.boolean().optional(),
    "url": zod_1.z.string().optional(),
    "username": zod_1.z.string().optional()
});
const OAuth2DomainInfoSchemaImpl = zod_1.z.object({
    "name": zod_1.z.string(),
    "scheme": zod_1.z.enum(["HTTP", "HTTPS", "MIXED"])
});
const OAuth2InfoSchemaImpl = zod_1.z.object({
    "enabled": zod_1.z.boolean().optional(),
    "oauth2ParamsInfos": zod_1.z.array(exports.OAuth2ParamsInfoSchema)
});
const OAuth2MapperConfigSchemaImpl = zod_1.z.object({
    "activateUser": zod_1.z.boolean().optional(),
    "allowUserCreation": zod_1.z.boolean().optional(),
    "basic": exports.OAuth2BasicMapperConfigSchema.optional(),
    "custom": exports.OAuth2CustomMapperConfigSchema.optional(),
    "type": zod_1.z.enum(["APPLE", "BASIC", "CUSTOM", "GITHUB"])
});
const OAuth2MobileInfoSchemaImpl = zod_1.z.object({
    "appSecret": zod_1.z.string(),
    "pkgName": zod_1.z.string()
});
const OAuth2ParamsInfoSchemaImpl = zod_1.z.object({
    "clientRegistrations": zod_1.z.array(exports.OAuth2RegistrationInfoSchema),
    "domainInfos": zod_1.z.array(exports.OAuth2DomainInfoSchema),
    "mobileInfos": zod_1.z.array(exports.OAuth2MobileInfoSchema)
});
const OAuth2RegistrationInfoSchemaImpl = zod_1.z.object({
    "accessTokenUri": zod_1.z.string(),
    "additionalInfo": exports.JsonNodeSchema,
    "authorizationUri": zod_1.z.string(),
    "clientAuthenticationMethod": zod_1.z.string(),
    "clientId": zod_1.z.string(),
    "clientSecret": zod_1.z.string(),
    "jwkSetUri": zod_1.z.string().optional(),
    "loginButtonIcon": zod_1.z.string().optional(),
    "loginButtonLabel": zod_1.z.string(),
    "mapperConfig": exports.OAuth2MapperConfigSchema,
    "platforms": zod_1.z.array(zod_1.z.enum(["ANDROID", "IOS", "WEB"])).optional(),
    "scope": zod_1.z.array(zod_1.z.string()),
    "userInfoUri": zod_1.z.string().optional(),
    "userNameAttributeName": zod_1.z.string().optional()
});
const ObjectAttributesSchemaImpl = zod_1.z.object({
    "dim": zod_1.z.number().optional(),
    "gt": zod_1.z.number().optional(),
    "lt": zod_1.z.number().optional(),
    "pmax": zod_1.z.number().optional(),
    "pmin": zod_1.z.number().optional(),
    "st": zod_1.z.number().optional(),
    "ver": zod_1.z.string().optional()
});
const ObjectNodeSchemaImpl = zod_1.z.object({});
const OriginatorEntityOwnerUsersFilterSchemaImpl = zod_1.z.object({});
const OtaPackageSchemaImpl = zod_1.z.object({
    "id": exports.OtaPackageIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "deviceProfileId": exports.DeviceProfileIdSchema.optional(),
    "type": zod_1.z.enum(["FIRMWARE", "SOFTWARE"]).optional(),
    "title": zod_1.z.string().optional(),
    "version": zod_1.z.string().optional(),
    "tag": zod_1.z.string().optional(),
    "url": zod_1.z.string().optional(),
    "hasData": zod_1.z.boolean().optional(),
    "fileName": zod_1.z.string().optional(),
    "contentType": zod_1.z.string().optional(),
    "checksumAlgorithm": zod_1.z.enum(["CRC32", "MD5", "MURMUR3_128", "MURMUR3_32", "SHA256", "SHA384", "SHA512"]).optional(),
    "checksum": zod_1.z.string().optional(),
    "dataSize": zod_1.z.number().optional(),
    "data": exports.ByteBufferSchema.optional(),
    "additionalInfo": exports.JsonNodeSchema.optional()
});
const OtaPackageIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["OTA_PACKAGE"])
});
const OtaPackageInfoSchemaImpl = zod_1.z.object({
    "id": exports.OtaPackageIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "deviceProfileId": exports.DeviceProfileIdSchema.optional(),
    "type": zod_1.z.enum(["FIRMWARE", "SOFTWARE"]).optional(),
    "title": zod_1.z.string().optional(),
    "version": zod_1.z.string().optional(),
    "tag": zod_1.z.string().optional(),
    "url": zod_1.z.string().optional(),
    "hasData": zod_1.z.boolean().optional(),
    "fileName": zod_1.z.string().optional(),
    "contentType": zod_1.z.string().optional(),
    "checksumAlgorithm": zod_1.z.enum(["CRC32", "MD5", "MURMUR3_128", "MURMUR3_32", "SHA256", "SHA384", "SHA512"]).optional(),
    "checksum": zod_1.z.string().optional(),
    "dataSize": zod_1.z.number().optional(),
    "additionalInfo": exports.JsonNodeSchema.optional()
});
const OtherConfigurationSchemaImpl = zod_1.z.object({
    "clientOnlyObserveAfterConnect": zod_1.z.number().optional(),
    "edrxCycle": zod_1.z.number().optional(),
    "fwUpdateResource": zod_1.z.string().optional(),
    "fwUpdateStrategy": zod_1.z.number().optional(),
    "pagingTransmissionWindow": zod_1.z.number().optional(),
    "powerMode": zod_1.z.enum(["DRX", "E_DRX", "PSM"]).optional(),
    "psmActivityTimer": zod_1.z.number().optional(),
    "swUpdateResource": zod_1.z.string().optional(),
    "swUpdateStrategy": zod_1.z.number().optional()
});
const PSKLwM2MBootstrapServerCredentialSchemaImpl = zod_1.z.object({
    "shortServerId": zod_1.z.number().optional(),
    "bootstrapServerIs": zod_1.z.boolean().optional(),
    "host": zod_1.z.string().optional(),
    "port": zod_1.z.number().optional(),
    "clientHoldOffTime": zod_1.z.number().optional(),
    "serverPublicKey": zod_1.z.string().optional(),
    "serverCertificate": zod_1.z.string().optional(),
    "bootstrapServerAccountTimeout": zod_1.z.number().optional(),
    "lifetime": zod_1.z.number().optional(),
    "defaultMinPeriod": zod_1.z.number().optional(),
    "notifIfDisabled": zod_1.z.boolean().optional(),
    "binding": zod_1.z.string().optional()
});
const PageData_Of_AlarmCommentInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.AlarmCommentInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_AlarmDataSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.AlarmDataSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_AlarmInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.AlarmInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_AssetInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.AssetInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_AssetProfileInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.AssetProfileInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_AssetProfileSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.AssetProfileSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_AssetSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.AssetSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_AuditLogSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.AuditLogSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_BlobEntityWithCustomerInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.BlobEntityWithCustomerInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_ContactBased_Of_objectSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.ContactBased_Of_objectSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_ConverterSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.ConverterSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_CustomerInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.CustomerInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_CustomerSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.CustomerSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_DashboardInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.DashboardInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_DeviceInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.DeviceInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_DeviceProfileInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.DeviceProfileInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_DeviceProfileSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.DeviceProfileSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_DeviceSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.DeviceSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_EdgeEventSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.EdgeEventSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_EdgeInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.EdgeInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_EdgeSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.EdgeSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_EntityDataSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.EntityDataSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_EntityGroupInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.EntityGroupInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_EntityInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.EntityInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_EntitySubtypeSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.EntitySubtypeSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_EntityVersionSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.EntityVersionSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_EntityViewInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.EntityViewInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_EntityViewSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.EntityViewSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_EventInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.EventInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_IntegrationInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.IntegrationInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_IntegrationSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.IntegrationSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_NotificationRequestInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.NotificationRequestInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_NotificationRuleInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.NotificationRuleInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_NotificationTargetSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.NotificationTargetSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_NotificationTemplateSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.NotificationTemplateSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_NotificationSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.NotificationSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_OtaPackageInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.OtaPackageInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_QueueSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.QueueSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_RoleSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.RoleSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_RuleChainSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.RuleChainSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_SchedulerEventInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.SchedulerEventInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_ShortEntityViewSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.ShortEntityViewSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_TbResourceInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.TbResourceInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_TenantInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.TenantInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_TenantProfileSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.TenantProfileSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_TenantSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.TenantSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_UserEmailInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.UserEmailInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_UserInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.UserInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_UserSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.UserSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_WidgetTypeInfoSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.WidgetTypeInfoSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PageData_Of_WidgetsBundleSchemaImpl = zod_1.z.object({
    "data": zod_1.z.array(exports.WidgetsBundleSchema).optional(),
    "totalPages": zod_1.z.number().optional(),
    "totalElements": zod_1.z.number().optional(),
    "hasNext": zod_1.z.boolean().optional()
});
const PaletteSchemaImpl = zod_1.z.object({
    "type": zod_1.z.string(),
    "extends": zod_1.z.string().optional(),
    "colors": zod_1.z.object({}).optional()
});
const PaletteSettingsSchemaImpl = zod_1.z.object({
    "primaryPalette": exports.PaletteSchema,
    "accentPalette": exports.PaletteSchema
});
const PlatformTwoFaSettingsSchemaImpl = zod_1.z.object({
    "maxVerificationFailuresBeforeUserLockout": zod_1.z.number().optional(),
    "minVerificationCodeSendPeriod": zod_1.z.number(),
    "providers": zod_1.z.array(exports.TwoFaProviderConfigSchema),
    "totalAllowedTimeForVerification": zod_1.z.number(),
    "useSystemTwoFactorAuthSettings": zod_1.z.boolean().optional(),
    "verificationCodeCheckRateLimit": zod_1.z.string().optional()
});
const PlatformUsersNotificationTargetConfigSchemaImpl = zod_1.z.object({
    "description": zod_1.z.string().optional(),
    "usersFilter": exports.UsersFilterSchema.optional()
});
const PowerSavingConfigurationSchemaImpl = zod_1.z.object({
    "edrxCycle": zod_1.z.number().optional(),
    "pagingTransmissionWindow": zod_1.z.number().optional(),
    "powerMode": zod_1.z.enum(["DRX", "E_DRX", "PSM"]).optional(),
    "psmActivityTimer": zod_1.z.number().optional()
});
const ProcessingStrategySchemaImpl = zod_1.z.object({
    "failurePercentage": zod_1.z.number().optional(),
    "maxPauseBetweenRetries": zod_1.z.number().optional(),
    "pauseBetweenRetries": zod_1.z.number().optional(),
    "retries": zod_1.z.number().optional(),
    "type": zod_1.z.enum(["RETRY_ALL", "RETRY_FAILED", "RETRY_FAILED_AND_TIMED_OUT", "RETRY_TIMED_OUT", "SKIP_ALL_FAILURES", "SKIP_ALL_FAILURES_AND_TIMED_OUT"]).optional()
});
const ProtoTransportPayloadConfigurationSchemaImpl = zod_1.z.object({
    "deviceAttributesProtoSchema": zod_1.z.string().optional(),
    "deviceRpcRequestProtoSchema": zod_1.z.string().optional(),
    "deviceRpcResponseProtoSchema": zod_1.z.string().optional(),
    "deviceTelemetryProtoSchema": zod_1.z.string().optional(),
    "enableCompatibilityWithJsonPayloadFormat": zod_1.z.boolean().optional(),
    "useJsonPayloadFormatForDefaultDownlinkTopics": zod_1.z.boolean().optional()
});
const QueueSchemaImpl = zod_1.z.object({
    "additionalInfo": exports.JsonNodeSchema.optional(),
    "consumerPerPartition": zod_1.z.boolean().optional(),
    "createdTime": zod_1.z.number().optional(),
    "id": exports.QueueIdSchema.optional(),
    "name": zod_1.z.string().optional(),
    "packProcessingTimeout": zod_1.z.number().optional(),
    "partitions": zod_1.z.number().optional(),
    "pollInterval": zod_1.z.number().optional(),
    "processingStrategy": exports.ProcessingStrategySchema.optional(),
    "submitStrategy": exports.SubmitStrategySchema.optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "topic": zod_1.z.string().optional()
});
const QueueIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["QUEUE"])
});
const RPKLwM2MBootstrapServerCredentialSchemaImpl = zod_1.z.object({
    "shortServerId": zod_1.z.number().optional(),
    "bootstrapServerIs": zod_1.z.boolean().optional(),
    "host": zod_1.z.string().optional(),
    "port": zod_1.z.number().optional(),
    "clientHoldOffTime": zod_1.z.number().optional(),
    "serverPublicKey": zod_1.z.string().optional(),
    "serverCertificate": zod_1.z.string().optional(),
    "bootstrapServerAccountTimeout": zod_1.z.number().optional(),
    "lifetime": zod_1.z.number().optional(),
    "defaultMinPeriod": zod_1.z.number().optional(),
    "notifIfDisabled": zod_1.z.boolean().optional(),
    "binding": zod_1.z.string().optional()
});
const RateLimitsNotificationRuleTriggerConfigSchemaImpl = zod_1.z.object({
    "apis": zod_1.z.array(zod_1.z.enum(["CASSANDRA_QUERIES", "ENTITY_EXPORT", "ENTITY_IMPORT", "INTEGRATION_MSGS_PER_DEVICE", "INTEGRATION_MSGS_PER_TENANT", "NOTIFICATION_REQUESTS", "NOTIFICATION_REQUESTS_PER_RULE", "PASSWORD_RESET", "REPORTS", "REST_REQUESTS_PER_CUSTOMER", "REST_REQUESTS_PER_TENANT", "TRANSPORT_MESSAGES_PER_DEVICE", "TRANSPORT_MESSAGES_PER_TENANT", "TWO_FA_VERIFICATION_CODE_CHECK", "TWO_FA_VERIFICATION_CODE_SEND", "WS_UPDATES_PER_SESSION"])).optional(),
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional()
});
const RawDataEventFilterSchemaImpl = zod_1.z.object({
    "notEmpty": zod_1.z.boolean().optional(),
    "eventType": zod_1.z.enum(["DEBUG_CONVERTER", "DEBUG_INTEGRATION", "DEBUG_RULE_CHAIN", "DEBUG_RULE_NODE", "ERROR", "LC_EVENT", "RAW_DATA", "STATS"]).optional(),
    "server": zod_1.z.string().optional(),
    "uuid": zod_1.z.string().optional(),
    "messageType": zod_1.z.string().optional(),
    "message": zod_1.z.string().optional()
});
const RelationEntityTypeFilterSchemaImpl = zod_1.z.object({
    "relationType": zod_1.z.string().optional(),
    "entityTypes": zod_1.z.array(zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"])).optional()
});
const RelationsQueryFilterSchemaImpl = zod_1.z.object({
    "direction": zod_1.z.enum(["FROM", "TO"]).optional(),
    "fetchLastLevelOnly": zod_1.z.boolean().optional(),
    "filters": zod_1.z.array(exports.RelationEntityTypeFilterSchema).optional(),
    "maxLevel": zod_1.z.number().optional(),
    "multiRoot": zod_1.z.boolean().optional(),
    "multiRootEntitiesType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
    "multiRootEntityIds": zod_1.z.array(zod_1.z.string()).optional(),
    "rootEntity": exports.EntityIdSchema.optional()
});
const RelationsSearchParametersSchemaImpl = zod_1.z.object({
    "rootId": zod_1.z.string().optional(),
    "rootType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
    "direction": zod_1.z.enum(["FROM", "TO"]).optional(),
    "relationTypeGroup": zod_1.z.enum(["COMMON", "DASHBOARD", "EDGE", "EDGE_AUTO_ASSIGN_RULE_CHAIN", "FROM_ENTITY_GROUP", "RULE_CHAIN", "RULE_NODE"]).optional(),
    "maxLevel": zod_1.z.number().optional(),
    "fetchLastLevelOnly": zod_1.z.boolean().optional()
});
const RepeatingAlarmConditionSpecSchemaImpl = zod_1.z.object({
    "predicate": exports.FilterPredicateValue_Of_intSchema.optional()
});
const ReportConfigSchemaImpl = zod_1.z.object({
    "baseUrl": zod_1.z.string().optional(),
    "dashboardId": zod_1.z.string().optional(),
    "namePattern": zod_1.z.string().optional(),
    "state": zod_1.z.string().optional(),
    "timewindow": exports.JsonNodeSchema.optional(),
    "timezone": zod_1.z.string().optional(),
    "type": zod_1.z.string().optional(),
    "useCurrentUserCredentials": zod_1.z.boolean().optional(),
    "useDashboardTimewindow": zod_1.z.boolean().optional(),
    "userId": zod_1.z.string().optional()
});
const RepositorySettingsSchemaImpl = zod_1.z.object({
    "authMethod": zod_1.z.enum(["PRIVATE_KEY", "USERNAME_PASSWORD"]).optional(),
    "defaultBranch": zod_1.z.string().optional(),
    "password": zod_1.z.string().optional(),
    "privateKey": zod_1.z.string().optional(),
    "privateKeyFileName": zod_1.z.string().optional(),
    "privateKeyPassword": zod_1.z.string().optional(),
    "readOnly": zod_1.z.boolean().optional(),
    "repositoryUri": zod_1.z.string().optional(),
    "showMergeCommits": zod_1.z.boolean().optional(),
    "username": zod_1.z.string().optional()
});
const RepositorySettingsInfoSchemaImpl = zod_1.z.object({
    "configured": zod_1.z.boolean().optional(),
    "readOnly": zod_1.z.boolean().optional()
});
const ResetPasswordEmailRequestSchemaImpl = zod_1.z.object({
    "email": zod_1.z.string().optional()
});
const ResetPasswordRequestSchemaImpl = zod_1.z.object({
    "resetToken": zod_1.z.string().optional(),
    "password": zod_1.z.string().optional()
});
const ResourceSchemaImpl = zod_1.z.object({
    "description": zod_1.z.string().optional(),
    "file": zod_1.z.string().optional(),
    "filename": zod_1.z.string().optional(),
    "inputStream": exports.InputStreamSchema.optional(),
    "open": zod_1.z.boolean().optional(),
    "readable": zod_1.z.boolean().optional(),
    "uri": zod_1.z.string().optional(),
    "url": zod_1.z.string().optional()
});
const ResponseEntitySchemaImpl = zod_1.z.object({
    "body": zod_1.z.object({}).optional(),
    "statusCode": zod_1.z.enum(["ACCEPTED", "ALREADY_REPORTED", "BAD_GATEWAY", "BAD_REQUEST", "BANDWIDTH_LIMIT_EXCEEDED", "CHECKPOINT", "CONFLICT", "CONTINUE", "CREATED", "DESTINATION_LOCKED", "EXPECTATION_FAILED", "FAILED_DEPENDENCY", "FORBIDDEN", "FOUND", "GATEWAY_TIMEOUT", "GONE", "HTTP_VERSION_NOT_SUPPORTED", "IM_USED", "INSUFFICIENT_SPACE_ON_RESOURCE", "INSUFFICIENT_STORAGE", "INTERNAL_SERVER_ERROR", "I_AM_A_TEAPOT", "LENGTH_REQUIRED", "LOCKED", "LOOP_DETECTED", "METHOD_FAILURE", "METHOD_NOT_ALLOWED", "MOVED_PERMANENTLY", "MOVED_TEMPORARILY", "MULTIPLE_CHOICES", "MULTI_STATUS", "NETWORK_AUTHENTICATION_REQUIRED", "NON_AUTHORITATIVE_INFORMATION", "NOT_ACCEPTABLE", "NOT_EXTENDED", "NOT_FOUND", "NOT_IMPLEMENTED", "NOT_MODIFIED", "NO_CONTENT", "OK", "PARTIAL_CONTENT", "PAYLOAD_TOO_LARGE", "PAYMENT_REQUIRED", "PERMANENT_REDIRECT", "PRECONDITION_FAILED", "PRECONDITION_REQUIRED", "PROCESSING", "PROXY_AUTHENTICATION_REQUIRED", "REQUESTED_RANGE_NOT_SATISFIABLE", "REQUEST_ENTITY_TOO_LARGE", "REQUEST_HEADER_FIELDS_TOO_LARGE", "REQUEST_TIMEOUT", "REQUEST_URI_TOO_LONG", "RESET_CONTENT", "SEE_OTHER", "SERVICE_UNAVAILABLE", "SWITCHING_PROTOCOLS", "TEMPORARY_REDIRECT", "TOO_EARLY", "TOO_MANY_REQUESTS", "UNAUTHORIZED", "UNAVAILABLE_FOR_LEGAL_REASONS", "UNPROCESSABLE_ENTITY", "UNSUPPORTED_MEDIA_TYPE", "UPGRADE_REQUIRED", "URI_TOO_LONG", "USE_PROXY", "VARIANT_ALSO_NEGOTIATES"]).optional(),
    "statusCodeValue": zod_1.z.number().optional()
});
const RoleSchemaImpl = zod_1.z.object({
    "id": exports.RoleIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema,
    "customerId": exports.CustomerIdSchema.optional(),
    "ownerId": exports.EntityIdSchema.optional(),
    "name": zod_1.z.string(),
    "type": zod_1.z.enum(["GENERIC", "GROUP"]),
    "permissions": exports.JsonNodeSchema.optional(),
    "additionalInfo": exports.JsonNodeSchema.optional()
});
const RoleIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["ROLE"])
});
const RpcSchemaImpl = zod_1.z.object({
    "id": exports.RpcIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "deviceId": exports.DeviceIdSchema.optional(),
    "expirationTime": zod_1.z.number().optional(),
    "request": exports.JsonNodeSchema.optional(),
    "response": exports.JsonNodeSchema.optional(),
    "status": zod_1.z.enum(["DELETED", "DELIVERED", "EXPIRED", "FAILED", "QUEUED", "SENT", "SUCCESSFUL", "TIMEOUT"]).optional(),
    "additionalInfo": exports.JsonNodeSchema.optional()
});
const RpcIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["RPC"])
});
const RuleChainSchemaImpl = zod_1.z.object({
    "additionalInfo": exports.JsonNodeSchema.optional(),
    "id": exports.RuleChainIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema,
    "name": zod_1.z.string(),
    "type": zod_1.z.enum(["CORE", "EDGE"]).optional(),
    "firstRuleNodeId": exports.RuleNodeIdSchema.optional(),
    "root": zod_1.z.boolean().optional(),
    "debugMode": zod_1.z.boolean().optional(),
    "configuration": exports.JsonNodeSchema.optional()
});
const RuleChainConnectionInfoSchemaImpl = zod_1.z.object({
    "fromIndex": zod_1.z.number(),
    "targetRuleChainId": exports.RuleChainIdSchema,
    "additionalInfo": exports.JsonNodeSchema,
    "type": zod_1.z.string()
});
const RuleChainDataSchemaImpl = zod_1.z.object({
    "ruleChains": zod_1.z.array(exports.RuleChainSchema),
    "metadata": zod_1.z.array(exports.RuleChainMetaDataSchema)
});
const RuleChainDebugEventFilterSchemaImpl = zod_1.z.object({
    "error": zod_1.z.boolean().optional(),
    "notEmpty": zod_1.z.boolean().optional(),
    "eventType": zod_1.z.enum(["DEBUG_CONVERTER", "DEBUG_INTEGRATION", "DEBUG_RULE_CHAIN", "DEBUG_RULE_NODE", "ERROR", "LC_EVENT", "RAW_DATA", "STATS"]).optional(),
    "server": zod_1.z.string().optional(),
    "message": zod_1.z.string().optional(),
    "errorStr": zod_1.z.string().optional()
});
const RuleChainExportDataSchemaImpl = zod_1.z.object({
    "attributes": zod_1.z.object({}).optional(),
    "entity": exports.RuleChainSchema.optional(),
    "entityType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
    "metaData": exports.RuleChainMetaDataSchema.optional(),
    "relations": zod_1.z.array(exports.EntityRelationSchema).optional()
});
const RuleChainIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["RULE_CHAIN"])
});
const RuleChainImportResultSchemaImpl = zod_1.z.object({
    "error": zod_1.z.string().optional(),
    "ruleChainId": exports.RuleChainIdSchema.optional(),
    "ruleChainName": zod_1.z.string().optional(),
    "updated": zod_1.z.boolean().optional()
});
const RuleChainMetaDataSchemaImpl = zod_1.z.object({
    "ruleChainId": exports.RuleChainIdSchema,
    "firstNodeIndex": zod_1.z.number(),
    "nodes": zod_1.z.array(exports.RuleNodeSchema),
    "connections": zod_1.z.array(exports.NodeConnectionInfoSchema),
    "ruleChainConnections": zod_1.z.array(exports.RuleChainConnectionInfoSchema)
});
const RuleChainOutputLabelsUsageSchemaImpl = zod_1.z.object({
    "ruleChainId": exports.RuleChainIdSchema,
    "ruleNodeId": exports.RuleNodeIdSchema,
    "ruleChainName": zod_1.z.string(),
    "ruleNodeName": zod_1.z.string(),
    "labels": zod_1.z.array(zod_1.z.string())
});
const RuleEngineComponentLifecycleEventNotificationRuleTriggerConfigSchemaImpl = zod_1.z.object({
    "onlyRuleChainLifecycleFailures": zod_1.z.boolean().optional(),
    "onlyRuleNodeLifecycleFailures": zod_1.z.boolean().optional(),
    "ruleChainEvents": zod_1.z.array(zod_1.z.enum(["ACTIVATED", "CREATED", "DEACTIVATED", "DELETED", "FAILED", "STARTED", "STOPPED", "SUSPENDED", "UPDATED"])).optional(),
    "ruleChains": zod_1.z.array(zod_1.z.string()).optional(),
    "ruleNodeEvents": zod_1.z.array(zod_1.z.enum(["ACTIVATED", "CREATED", "DEACTIVATED", "DELETED", "FAILED", "STARTED", "STOPPED", "SUSPENDED", "UPDATED"])).optional(),
    "trackRuleNodeEvents": zod_1.z.boolean().optional(),
    "triggerType": zod_1.z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional()
});
const RuleNodeSchemaImpl = zod_1.z.object({
    "externalId": exports.RuleNodeIdSchema.optional(),
    "id": exports.RuleNodeIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "ruleChainId": exports.RuleChainIdSchema.optional(),
    "type": zod_1.z.string().optional(),
    "name": zod_1.z.string().optional(),
    "debugMode": zod_1.z.boolean().optional(),
    "singletonMode": zod_1.z.boolean().optional(),
    "configurationVersion": zod_1.z.number().optional(),
    "configuration": exports.JsonNodeSchema.optional(),
    "additionalInfo": exports.JsonNodeSchema.optional()
});
const RuleNodeDebugEventFilterSchemaImpl = zod_1.z.object({
    "error": zod_1.z.boolean().optional(),
    "notEmpty": zod_1.z.boolean().optional(),
    "eventType": zod_1.z.enum(["DEBUG_CONVERTER", "DEBUG_INTEGRATION", "DEBUG_RULE_CHAIN", "DEBUG_RULE_NODE", "ERROR", "LC_EVENT", "RAW_DATA", "STATS"]).optional(),
    "server": zod_1.z.string().optional(),
    "msgDirectionType": zod_1.z.enum(["IN", "OUT"]).optional(),
    "entityId": zod_1.z.string().optional(),
    "errorStr": zod_1.z.string().optional(),
    "entityType": zod_1.z.enum(["DEVICE"]).optional(),
    "msgId": zod_1.z.string().optional(),
    "msgType": zod_1.z.string().optional(),
    "relationType": zod_1.z.string().optional(),
    "dataSearch": zod_1.z.string().optional(),
    "metadataSearch": zod_1.z.string().optional()
});
const RuleNodeIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["RULE_NODE"])
});
const SaveDeviceWithCredentialsRequestSchemaImpl = zod_1.z.object({
    "device": exports.DeviceSchema,
    "credentials": exports.DeviceCredentialsSchema
});
const SaveOtaPackageInfoRequestSchemaImpl = zod_1.z.object({
    "id": exports.OtaPackageIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "deviceProfileId": exports.DeviceProfileIdSchema.optional(),
    "type": zod_1.z.enum(["FIRMWARE", "SOFTWARE"]).optional(),
    "title": zod_1.z.string().optional(),
    "version": zod_1.z.string().optional(),
    "tag": zod_1.z.string().optional(),
    "url": zod_1.z.string().optional(),
    "hasData": zod_1.z.boolean().optional(),
    "fileName": zod_1.z.string().optional(),
    "contentType": zod_1.z.string().optional(),
    "checksumAlgorithm": zod_1.z.enum(["CRC32", "MD5", "MURMUR3_128", "MURMUR3_32", "SHA256", "SHA384", "SHA512"]).optional(),
    "checksum": zod_1.z.string().optional(),
    "dataSize": zod_1.z.number().optional(),
    "usesUrl": zod_1.z.boolean().optional(),
    "additionalInfo": exports.JsonNodeSchema.optional()
});
const SchedulerEventSchemaImpl = zod_1.z.object({
    "id": exports.SchedulerEventIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "originatorId": exports.EntityIdSchema.optional(),
    "ownerId": exports.EntityIdSchema.optional(),
    "name": zod_1.z.string().optional(),
    "type": zod_1.z.string().optional(),
    "schedule": exports.JsonNodeSchema.optional(),
    "configuration": exports.JsonNodeSchema.optional(),
    "additionalInfo": exports.JsonNodeSchema.optional()
});
const SchedulerEventFilterSchemaImpl = zod_1.z.object({
    "eventType": zod_1.z.string().optional(),
    "originator": exports.EntityIdSchema.optional()
});
const SchedulerEventIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["SCHEDULER_EVENT"])
});
const SchedulerEventInfoSchemaImpl = zod_1.z.object({
    "id": exports.SchedulerEventIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "originatorId": exports.EntityIdSchema.optional(),
    "ownerId": exports.EntityIdSchema.optional(),
    "name": zod_1.z.string().optional(),
    "type": zod_1.z.string().optional(),
    "schedule": exports.JsonNodeSchema.optional(),
    "additionalInfo": exports.JsonNodeSchema.optional()
});
const SchedulerEventWithCustomerInfoSchemaImpl = zod_1.z.object({
    "id": exports.SchedulerEventIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "originatorId": exports.EntityIdSchema.optional(),
    "ownerId": exports.EntityIdSchema.optional(),
    "name": zod_1.z.string().optional(),
    "type": zod_1.z.string().optional(),
    "schedule": exports.JsonNodeSchema.optional(),
    "additionalInfo": exports.JsonNodeSchema.optional(),
    "customerTitle": zod_1.z.string().optional(),
    "customerIsPublic": zod_1.z.object({}).optional()
});
const SecuritySettingsSchemaImpl = zod_1.z.object({
    "passwordPolicy": exports.UserPasswordPolicySchema.optional(),
    "maxFailedLoginAttempts": zod_1.z.number().optional(),
    "userLockoutNotificationEmail": zod_1.z.string().optional()
});
const SelfRegistrationParamsSchemaImpl = zod_1.z.object({
    "adminSettingsId": zod_1.z.string().optional(),
    "signUpTextMessage": zod_1.z.string().optional(),
    "captchaSiteKey": zod_1.z.string().optional(),
    "captchaVersion": zod_1.z.string().optional(),
    "captchaAction": zod_1.z.string().optional(),
    "showPrivacyPolicy": zod_1.z.boolean().optional(),
    "showTermsOfUse": zod_1.z.boolean().optional(),
    "domainName": zod_1.z.string().optional(),
    "captchaSecretKey": zod_1.z.string().optional(),
    "privacyPolicy": zod_1.z.string().optional(),
    "termsOfUse": zod_1.z.string().optional(),
    "notificationEmail": zod_1.z.string().optional(),
    "defaultDashboardId": zod_1.z.string().optional(),
    "defaultDashboardFullscreen": zod_1.z.boolean().optional(),
    "permissions": zod_1.z.array(exports.GroupPermissionSchema).optional(),
    "pkgName": zod_1.z.string().optional(),
    "appSecret": zod_1.z.string().optional(),
    "appScheme": zod_1.z.string().optional(),
    "appHost": zod_1.z.string().optional()
});
const ShareGroupRequestSchemaImpl = zod_1.z.object({
    "allUserGroup": zod_1.z.boolean(),
    "ownerId": exports.EntityIdSchema.optional(),
    "userGroupId": exports.EntityGroupIdSchema.optional(),
    "readElseWrite": zod_1.z.boolean().optional(),
    "roleIds": zod_1.z.array(exports.RoleIdSchema).optional()
});
const SharedAttributesSettingSnmpCommunicationConfigSchemaImpl = zod_1.z.object({
    "mappings": zod_1.z.array(exports.SnmpMappingSchema).optional(),
    "spec": zod_1.z.enum(["CLIENT_ATTRIBUTES_QUERYING", "SHARED_ATTRIBUTES_SETTING", "TELEMETRY_QUERYING", "TO_DEVICE_RPC_REQUEST", "TO_SERVER_RPC_REQUEST"]).optional()
});
const ShortCustomerInfoSchemaImpl = zod_1.z.object({
    "public": zod_1.z.boolean().optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "title": zod_1.z.string().optional()
});
const ShortEntityViewSchemaImpl = zod_1.z.object({
    "id": exports.EntityIdSchema,
    "name": zod_1.z.string()
});
const SignUpRequestSchemaImpl = zod_1.z.object({
    "firstName": zod_1.z.string().optional(),
    "lastName": zod_1.z.string().optional(),
    "email": zod_1.z.string().optional(),
    "password": zod_1.z.string().optional(),
    "recaptchaResponse": zod_1.z.string().optional(),
    "pkgName": zod_1.z.string().optional(),
    "appSecret": zod_1.z.string().optional()
});
const SignUpSelfRegistrationParamsSchemaImpl = zod_1.z.object({
    "signUpTextMessage": zod_1.z.string().optional(),
    "captchaSiteKey": zod_1.z.string().optional(),
    "captchaVersion": zod_1.z.string().optional(),
    "captchaAction": zod_1.z.string().optional(),
    "showPrivacyPolicy": zod_1.z.boolean().optional(),
    "showTermsOfUse": zod_1.z.boolean().optional()
});
const SimpleAlarmConditionSpecSchemaImpl = zod_1.z.any();
const SingleEntityFilterSchemaImpl = zod_1.z.object({
    "singleEntity": exports.EntityIdSchema.optional()
});
const SingleEntityVersionCreateRequestSchemaImpl = zod_1.z.object({
    "branch": zod_1.z.string().optional(),
    "config": exports.VersionCreateConfigSchema.optional(),
    "entityId": exports.EntityIdSchema.optional(),
    "type": zod_1.z.enum(["COMPLEX", "SINGLE_ENTITY"]).optional(),
    "versionName": zod_1.z.string().optional()
});
const SingleEntityVersionLoadRequestSchemaImpl = zod_1.z.object({
    "config": exports.VersionLoadConfigSchema.optional(),
    "externalEntityId": exports.EntityIdSchema.optional(),
    "internalEntityId": exports.EntityIdSchema.optional(),
    "type": zod_1.z.enum(["ENTITY_TYPE", "SINGLE_ENTITY"]).optional(),
    "versionId": zod_1.z.string().optional()
});
const SlackConversationSchemaImpl = zod_1.z.object({
    "email": zod_1.z.string().optional(),
    "id": zod_1.z.string().optional(),
    "name": zod_1.z.string().optional(),
    "title": zod_1.z.string().optional(),
    "type": zod_1.z.enum(["DIRECT", "PRIVATE_CHANNEL", "PUBLIC_CHANNEL"]),
    "wholeName": zod_1.z.string().optional()
});
const SlackDeliveryMethodNotificationTemplateSchemaImpl = zod_1.z.object({
    "body": zod_1.z.string().optional(),
    "enabled": zod_1.z.boolean().optional()
});
const SlackNotificationDeliveryMethodConfigSchemaImpl = zod_1.z.object({
    "botToken": zod_1.z.string().optional()
});
const SlackNotificationTargetConfigSchemaImpl = zod_1.z.object({
    "conversation": exports.SlackConversationSchema.optional(),
    "conversationType": zod_1.z.enum(["DIRECT", "PRIVATE_CHANNEL", "PUBLIC_CHANNEL"]).optional(),
    "description": zod_1.z.string().optional()
});
const SmppSmsProviderConfigurationSchemaImpl = zod_1.z.object({
    "addressRange": zod_1.z.string().optional(),
    "bindType": zod_1.z.enum(["RX", "TRX", "TX"]).optional(),
    "codingScheme": zod_1.z.string().optional(),
    "destinationNpi": zod_1.z.string().optional(),
    "destinationTon": zod_1.z.string().optional(),
    "host": zod_1.z.string().optional(),
    "password": zod_1.z.string().optional(),
    "port": zod_1.z.number().optional(),
    "protocolVersion": zod_1.z.enum(["3.3", "3.4"]).optional(),
    "serviceType": zod_1.z.string().optional(),
    "sourceAddress": zod_1.z.string().optional(),
    "sourceNpi": zod_1.z.string().optional(),
    "sourceTon": zod_1.z.string().optional(),
    "systemId": zod_1.z.string().optional(),
    "systemType": zod_1.z.string().optional()
});
const SmsDeliveryMethodNotificationTemplateSchemaImpl = zod_1.z.object({
    "body": zod_1.z.string().optional(),
    "enabled": zod_1.z.boolean().optional()
});
const SmsProviderConfigurationSchemaImpl = zod_1.z.object({});
const SmsTwoFaAccountConfigSchemaImpl = zod_1.z.object({
    "phoneNumber": zod_1.z.string().optional(),
    "useByDefault": zod_1.z.boolean().optional()
});
const SmsTwoFaProviderConfigSchemaImpl = zod_1.z.object({
    "smsVerificationMessageTemplate": zod_1.z.string(),
    "verificationCodeLifetime": zod_1.z.number().optional()
});
const SnmpCommunicationConfigSchemaImpl = zod_1.z.object({
    "spec": zod_1.z.enum(["CLIENT_ATTRIBUTES_QUERYING", "SHARED_ATTRIBUTES_SETTING", "TELEMETRY_QUERYING", "TO_DEVICE_RPC_REQUEST", "TO_SERVER_RPC_REQUEST"]).optional()
});
const SnmpDeviceProfileTransportConfigurationSchemaImpl = zod_1.z.object({
    "communicationConfigs": zod_1.z.array(exports.SnmpCommunicationConfigSchema).optional(),
    "retries": zod_1.z.number().optional(),
    "timeoutMs": zod_1.z.number().optional()
});
const SnmpDeviceTransportConfigurationSchemaImpl = zod_1.z.object({
    "authenticationPassphrase": zod_1.z.string().optional(),
    "authenticationProtocol": zod_1.z.enum(["MD5", "SHA_1", "SHA_224", "SHA_256", "SHA_384", "SHA_512"]).optional(),
    "community": zod_1.z.string().optional(),
    "contextName": zod_1.z.string().optional(),
    "engineId": zod_1.z.string().optional(),
    "host": zod_1.z.string().optional(),
    "port": zod_1.z.number().optional(),
    "privacyPassphrase": zod_1.z.string().optional(),
    "privacyProtocol": zod_1.z.enum(["AES_128", "AES_192", "AES_256", "DES"]).optional(),
    "protocolVersion": zod_1.z.enum(["V1", "V2C", "V3"]).optional(),
    "securityName": zod_1.z.string().optional(),
    "username": zod_1.z.string().optional()
});
const SnmpMappingSchemaImpl = zod_1.z.object({
    "dataType": zod_1.z.enum(["BOOLEAN", "DOUBLE", "JSON", "LONG", "STRING"]).optional(),
    "key": zod_1.z.string().optional(),
    "oid": zod_1.z.string().optional()
});
const SolutionInstallResponseSchemaImpl = zod_1.z.object({
    "dashboardGroupId": exports.EntityGroupIdSchema.optional(),
    "dashboardId": exports.DashboardIdSchema.optional(),
    "publicId": exports.CustomerIdSchema.optional(),
    "mainDashboardPublic": zod_1.z.boolean().optional(),
    "success": zod_1.z.boolean().optional(),
    "details": zod_1.z.string().optional()
});
const SpecificTimeScheduleSchemaImpl = zod_1.z.object({
    "daysOfWeek": zod_1.z.array(zod_1.z.number()).optional(),
    "dynamicValue": exports.DynamicValue_Of_stringSchema.optional(),
    "endsOn": zod_1.z.number().optional(),
    "startsOn": zod_1.z.number().optional(),
    "timezone": zod_1.z.string().optional(),
    "type": zod_1.z.enum(["ANY_TIME", "CUSTOM", "SPECIFIC_TIME"]).optional()
});
const StarredDashboardInfoSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string().optional(),
    "title": zod_1.z.string().optional(),
    "starredAt": zod_1.z.number().optional()
});
const StateEntityOwnerFilterSchemaImpl = zod_1.z.object({
    "singleEntity": exports.EntityIdSchema.optional()
});
const StatisticsEventFilterSchemaImpl = zod_1.z.object({
    "notEmpty": zod_1.z.boolean().optional(),
    "eventType": zod_1.z.enum(["DEBUG_CONVERTER", "DEBUG_INTEGRATION", "DEBUG_RULE_CHAIN", "DEBUG_RULE_NODE", "ERROR", "LC_EVENT", "RAW_DATA", "STATS"]).optional(),
    "server": zod_1.z.string().optional(),
    "minMessagesProcessed": zod_1.z.number().optional(),
    "maxMessagesProcessed": zod_1.z.number().optional(),
    "minErrorsOccurred": zod_1.z.number().optional(),
    "maxErrorsOccurred": zod_1.z.number().optional()
});
const StringFilterPredicateSchemaImpl = zod_1.z.object({
    "ignoreCase": zod_1.z.boolean().optional(),
    "operation": zod_1.z.enum(["CONTAINS", "ENDS_WITH", "EQUAL", "IN", "NOT_CONTAINS", "NOT_EQUAL", "NOT_IN", "STARTS_WITH"]).optional(),
    "value": exports.FilterPredicateValue_Of_stringSchema.optional()
});
const SubmitStrategySchemaImpl = zod_1.z.object({
    "batchSize": zod_1.z.number().optional(),
    "type": zod_1.z.enum(["BATCH", "BURST", "SEQUENTIAL", "SEQUENTIAL_BY_ORIGINATOR", "SEQUENTIAL_BY_TENANT"]).optional()
});
const SystemAdministratorsFilterSchemaImpl = zod_1.z.object({});
const SystemInfoSchemaImpl = zod_1.z.object({
    "monolith": zod_1.z.boolean().optional(),
    "systemData": zod_1.z.array(exports.SystemInfoDataSchema).optional()
});
const SystemInfoDataSchemaImpl = zod_1.z.object({
    "serviceId": zod_1.z.string().optional(),
    "serviceType": zod_1.z.string().optional(),
    "cpuUsage": zod_1.z.number().optional(),
    "cpuCount": zod_1.z.number().optional(),
    "memoryUsage": zod_1.z.number().optional(),
    "totalMemory": zod_1.z.number().optional(),
    "discUsage": zod_1.z.number().optional(),
    "totalDiscSpace": zod_1.z.number().optional()
});
const TbImageDeleteResultSchemaImpl = zod_1.z.object({
    "references": zod_1.z.object({}).optional(),
    "success": zod_1.z.boolean().optional(),
    "whiteLabelingList": zod_1.z.array(exports.WhiteLabelingSchema).optional()
});
const TbResourceSchemaImpl = zod_1.z.object({
    "descriptor": exports.JsonNodeSchema.optional(),
    "link": zod_1.z.string().optional(),
    "name": zod_1.z.string().optional(),
    "preview": zod_1.z.string().optional(),
    "public": zod_1.z.boolean().optional(),
    "publicLink": zod_1.z.string().optional(),
    "publicResourceKey": zod_1.z.string().optional(),
    "id": exports.TbResourceIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "title": zod_1.z.string().optional(),
    "resourceType": zod_1.z.enum(["IMAGE", "JKS", "JS_MODULE", "LWM2M_MODEL", "PKCS_12"]).optional(),
    "resourceKey": zod_1.z.string().optional(),
    "etag": zod_1.z.string().optional(),
    "fileName": zod_1.z.string().optional(),
    "data": zod_1.z.string().optional()
});
const TbResourceIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["TB_RESOURCE"])
});
const TbResourceInfoSchemaImpl = zod_1.z.object({
    "descriptor": exports.JsonNodeSchema.optional(),
    "link": zod_1.z.string().optional(),
    "name": zod_1.z.string().optional(),
    "public": zod_1.z.boolean().optional(),
    "publicLink": zod_1.z.string().optional(),
    "publicResourceKey": zod_1.z.string().optional(),
    "id": exports.TbResourceIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "title": zod_1.z.string().optional(),
    "resourceType": zod_1.z.enum(["IMAGE", "JKS", "JS_MODULE", "LWM2M_MODEL", "PKCS_12"]).optional(),
    "resourceKey": zod_1.z.string().optional(),
    "etag": zod_1.z.string().optional(),
    "fileName": zod_1.z.string().optional()
});
const TelemetryEntityViewSchemaImpl = zod_1.z.object({
    "timeseries": zod_1.z.array(zod_1.z.string()),
    "attributes": exports.AttributesEntityViewSchema
});
const TelemetryMappingConfigurationSchemaImpl = zod_1.z.object({
    "attribute": zod_1.z.array(zod_1.z.string()).optional(),
    "attributeLwm2m": zod_1.z.object({}).optional(),
    "keyName": zod_1.z.object({}).optional(),
    "observe": zod_1.z.array(zod_1.z.string()).optional(),
    "telemetry": zod_1.z.array(zod_1.z.string()).optional()
});
const TelemetryQueryingSnmpCommunicationConfigSchemaImpl = zod_1.z.object({
    "mappings": zod_1.z.array(exports.SnmpMappingSchema).optional(),
    "queryingFrequencyMs": zod_1.z.number().optional(),
    "spec": zod_1.z.enum(["CLIENT_ATTRIBUTES_QUERYING", "SHARED_ATTRIBUTES_SETTING", "TELEMETRY_QUERYING", "TO_DEVICE_RPC_REQUEST", "TO_SERVER_RPC_REQUEST"]).optional()
});
const TenantSchemaImpl = zod_1.z.object({
    "id": exports.TenantIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "title": zod_1.z.string(),
    "name": zod_1.z.string().optional(),
    "region": zod_1.z.string().optional(),
    "tenantProfileId": exports.TenantProfileIdSchema.optional(),
    "country": zod_1.z.string().optional(),
    "state": zod_1.z.string().optional(),
    "city": zod_1.z.string().optional(),
    "address": zod_1.z.string().optional(),
    "address2": zod_1.z.string().optional(),
    "zip": zod_1.z.string().optional(),
    "phone": zod_1.z.string().optional(),
    "email": zod_1.z.string(),
    "additionalInfo": exports.JsonNodeSchema.optional()
});
const TenantAdministratorsFilterSchemaImpl = zod_1.z.object({
    "tenantProfilesIds": zod_1.z.array(zod_1.z.string()).optional(),
    "tenantsIds": zod_1.z.array(zod_1.z.string()).optional()
});
const TenantIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["TENANT"])
});
const TenantInfoSchemaImpl = zod_1.z.object({
    "id": exports.TenantIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "title": zod_1.z.string(),
    "name": zod_1.z.string().optional(),
    "region": zod_1.z.string().optional(),
    "tenantProfileId": exports.TenantProfileIdSchema.optional(),
    "country": zod_1.z.string().optional(),
    "state": zod_1.z.string().optional(),
    "city": zod_1.z.string().optional(),
    "address": zod_1.z.string().optional(),
    "address2": zod_1.z.string().optional(),
    "zip": zod_1.z.string().optional(),
    "phone": zod_1.z.string().optional(),
    "email": zod_1.z.string(),
    "additionalInfo": exports.JsonNodeSchema.optional(),
    "tenantProfileName": zod_1.z.string().optional()
});
const TenantProfileSchemaImpl = zod_1.z.object({
    "default": zod_1.z.boolean().optional(),
    "id": exports.TenantProfileIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "name": zod_1.z.string().optional(),
    "description": zod_1.z.string().optional(),
    "isolatedTbRuleEngine": zod_1.z.boolean().optional(),
    "profileData": exports.TenantProfileDataSchema.optional()
});
const TenantProfileConfigurationSchemaImpl = zod_1.z.object({});
const TenantProfileDataSchemaImpl = zod_1.z.object({
    "configuration": exports.TenantProfileConfigurationSchema.optional(),
    "queueConfiguration": zod_1.z.array(exports.TenantProfileQueueConfigurationSchema).optional()
});
const TenantProfileIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["TENANT_PROFILE"])
});
const TenantProfileQueueConfigurationSchemaImpl = zod_1.z.object({
    "additionalInfo": exports.JsonNodeSchema.optional(),
    "consumerPerPartition": zod_1.z.boolean().optional(),
    "name": zod_1.z.string().optional(),
    "packProcessingTimeout": zod_1.z.number().optional(),
    "partitions": zod_1.z.number().optional(),
    "pollInterval": zod_1.z.number().optional(),
    "processingStrategy": exports.ProcessingStrategySchema.optional(),
    "submitStrategy": exports.SubmitStrategySchema.optional(),
    "topic": zod_1.z.string().optional()
});
const TenantSolutionTemplateDetailsSchemaImpl = zod_1.z.object({
    "description": zod_1.z.string().optional(),
    "highlights": zod_1.z.string().optional(),
    "imageUrls": zod_1.z.array(zod_1.z.string()).optional(),
    "installed": zod_1.z.boolean().optional(),
    "id": zod_1.z.string().optional(),
    "title": zod_1.z.string().optional(),
    "level": zod_1.z.enum(["MAKER", "PROTOTYPE", "STARTUP"]).optional(),
    "installTimeoutMs": zod_1.z.number().optional(),
    "tenantTelemetryKeys": zod_1.z.array(zod_1.z.string()).optional(),
    "tenantAttributeKeys": zod_1.z.array(zod_1.z.string()).optional()
});
const TenantSolutionTemplateInfoSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string().optional(),
    "title": zod_1.z.string().optional(),
    "level": zod_1.z.enum(["MAKER", "PROTOTYPE", "STARTUP"]).optional(),
    "installTimeoutMs": zod_1.z.number().optional(),
    "tenantTelemetryKeys": zod_1.z.array(zod_1.z.string()).optional(),
    "tenantAttributeKeys": zod_1.z.array(zod_1.z.string()).optional(),
    "previewImageUrl": zod_1.z.string().optional(),
    "shortDescription": zod_1.z.string().optional(),
    "installed": zod_1.z.boolean().optional(),
    "videoPreviewImageUrl": zod_1.z.string().optional(),
    "previewMp4Url": zod_1.z.string().optional(),
    "previewWebmUrl": zod_1.z.string().optional()
});
const TenantSolutionTemplateInstructionsSchemaImpl = zod_1.z.object({
    "dashboardGroupId": exports.EntityGroupIdSchema.optional(),
    "dashboardId": exports.DashboardIdSchema.optional(),
    "publicId": exports.CustomerIdSchema.optional(),
    "mainDashboardPublic": zod_1.z.boolean().optional(),
    "details": zod_1.z.string().optional()
});
const TestSmsRequestSchemaImpl = zod_1.z.object({
    "providerConfiguration": exports.SmsProviderConfigurationSchema.optional(),
    "numberTo": zod_1.z.string().optional(),
    "message": zod_1.z.string().optional()
});
const ThingsboardCredentialsExpiredResponseSchemaImpl = zod_1.z.object({
    "subscriptionEntry": zod_1.z.enum(["ASSET_COUNT", "DEVICE_COUNT", "WHITE_LABELING"]).optional(),
    "subscriptionErrorCode": zod_1.z.enum(["FEATURE_DISABLED", "LIMIT_REACHED", "UNSUPPORTED_SOLUTION_TEMPLATE_PLAN"]).optional(),
    "subscriptionValue": exports.JsonNodeSchema.optional(),
    "status": zod_1.z.number().optional(),
    "message": zod_1.z.string().optional(),
    "errorCode": zod_1.z.object({}).optional(),
    "timestamp": zod_1.z.string().optional(),
    "resetToken": zod_1.z.string().optional()
});
const ThingsboardErrorResponseSchemaImpl = zod_1.z.object({
    "subscriptionEntry": zod_1.z.enum(["ASSET_COUNT", "DEVICE_COUNT", "WHITE_LABELING"]).optional(),
    "subscriptionErrorCode": zod_1.z.enum(["FEATURE_DISABLED", "LIMIT_REACHED", "UNSUPPORTED_SOLUTION_TEMPLATE_PLAN"]).optional(),
    "subscriptionValue": exports.JsonNodeSchema.optional(),
    "status": zod_1.z.number().optional(),
    "message": zod_1.z.string().optional(),
    "errorCode": zod_1.z.object({}).optional(),
    "timestamp": zod_1.z.string().optional()
});
const ToDeviceRpcRequestSnmpCommunicationConfigSchemaImpl = zod_1.z.object({
    "mappings": zod_1.z.array(exports.SnmpMappingSchema).optional(),
    "spec": zod_1.z.enum(["CLIENT_ATTRIBUTES_QUERYING", "SHARED_ATTRIBUTES_SETTING", "TELEMETRY_QUERYING", "TO_DEVICE_RPC_REQUEST", "TO_SERVER_RPC_REQUEST"]).optional()
});
const ToServerRpcRequestSnmpCommunicationConfigSchemaImpl = zod_1.z.object({
    "mappings": zod_1.z.array(exports.SnmpMappingSchema).optional(),
    "spec": zod_1.z.enum(["CLIENT_ATTRIBUTES_QUERYING", "SHARED_ATTRIBUTES_SETTING", "TELEMETRY_QUERYING", "TO_DEVICE_RPC_REQUEST", "TO_SERVER_RPC_REQUEST"]).optional()
});
const TotpTwoFaAccountConfigSchemaImpl = zod_1.z.object({
    "authUrl": zod_1.z.string(),
    "useByDefault": zod_1.z.boolean().optional()
});
const TotpTwoFaProviderConfigSchemaImpl = zod_1.z.object({
    "issuerName": zod_1.z.string()
});
const TransportPayloadTypeConfigurationSchemaImpl = zod_1.z.object({});
const TsValueSchemaImpl = zod_1.z.object({
    "count": zod_1.z.number().optional(),
    "ts": zod_1.z.number().optional(),
    "value": zod_1.z.string().optional()
});
const TwilioSmsProviderConfigurationSchemaImpl = zod_1.z.object({
    "accountSid": zod_1.z.string().optional(),
    "accountToken": zod_1.z.string().optional(),
    "numberFrom": zod_1.z.string().optional()
});
const TwoFaAccountConfigSchemaImpl = zod_1.z.object({
    "useByDefault": zod_1.z.boolean().optional()
});
const TwoFaAccountConfigUpdateRequestSchemaImpl = zod_1.z.object({
    "useByDefault": zod_1.z.boolean().optional()
});
const TwoFaProviderConfigSchemaImpl = zod_1.z.object({});
const TwoFaProviderInfoSchemaImpl = zod_1.z.object({
    "contact": zod_1.z.string().optional(),
    "default": zod_1.z.boolean().optional(),
    "minVerificationCodeSendPeriod": zod_1.z.number().optional(),
    "type": zod_1.z.enum(["BACKUP_CODE", "EMAIL", "SMS", "TOTP"]).optional()
});
const UpdateMessageSchemaImpl = zod_1.z.object({
    "updateAvailable": zod_1.z.boolean().optional(),
    "currentVersion": zod_1.z.string().optional(),
    "latestVersion": zod_1.z.string().optional(),
    "upgradeInstructionsUrl": zod_1.z.string().optional(),
    "currentVersionReleaseNotesUrl": zod_1.z.string().optional(),
    "latestVersionReleaseNotesUrl": zod_1.z.string().optional()
});
const UsageInfoSchemaImpl = zod_1.z.object({
    "alarms": zod_1.z.number().optional(),
    "assets": zod_1.z.number().optional(),
    "customers": zod_1.z.number().optional(),
    "dashboards": zod_1.z.number().optional(),
    "devices": zod_1.z.number().optional(),
    "emails": zod_1.z.number().optional(),
    "jsExecutions": zod_1.z.number().optional(),
    "maxAlarms": zod_1.z.number().optional(),
    "maxAssets": zod_1.z.number().optional(),
    "maxCustomers": zod_1.z.number().optional(),
    "maxDashboards": zod_1.z.number().optional(),
    "maxDevices": zod_1.z.number().optional(),
    "maxEmails": zod_1.z.number().optional(),
    "maxJsExecutions": zod_1.z.number().optional(),
    "maxSms": zod_1.z.number().optional(),
    "maxTbelExecutions": zod_1.z.number().optional(),
    "maxTransportMessages": zod_1.z.number().optional(),
    "maxUsers": zod_1.z.number().optional(),
    "sms": zod_1.z.number().optional(),
    "smsEnabled": zod_1.z.boolean().optional(),
    "tbelExecutions": zod_1.z.number().optional(),
    "transportMessages": zod_1.z.number().optional(),
    "users": zod_1.z.number().optional()
});
const UserSchemaImpl = zod_1.z.object({
    "id": exports.UserIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "email": zod_1.z.string(),
    "name": zod_1.z.string().optional(),
    "authority": zod_1.z.enum(["CUSTOMER_USER", "PRE_VERIFICATION_TOKEN", "REFRESH_TOKEN", "SYS_ADMIN", "TENANT_ADMIN"]),
    "firstName": zod_1.z.string().optional(),
    "lastName": zod_1.z.string().optional(),
    "phone": zod_1.z.string().optional(),
    "additionalInfo": exports.JsonNodeSchema.optional(),
    "ownerId": exports.EntityIdSchema.optional()
});
const UserDashboardsInfoSchemaImpl = zod_1.z.object({
    "last": zod_1.z.array(exports.LastVisitedDashboardInfoSchema).optional(),
    "starred": zod_1.z.array(exports.StarredDashboardInfoSchema).optional()
});
const UserEmailInfoSchemaImpl = zod_1.z.object({
    "id": exports.UserIdSchema.optional(),
    "email": zod_1.z.string().optional(),
    "firstName": zod_1.z.string().optional(),
    "lastName": zod_1.z.string().optional()
});
const UserGroupListFilterSchemaImpl = zod_1.z.object({
    "groupsIds": zod_1.z.array(zod_1.z.string()).optional()
});
const UserIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["USER"])
});
const UserInfoSchemaImpl = zod_1.z.object({
    "id": exports.UserIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "customerId": exports.CustomerIdSchema.optional(),
    "email": zod_1.z.string(),
    "name": zod_1.z.string().optional(),
    "authority": zod_1.z.enum(["CUSTOMER_USER", "PRE_VERIFICATION_TOKEN", "REFRESH_TOKEN", "SYS_ADMIN", "TENANT_ADMIN"]),
    "firstName": zod_1.z.string().optional(),
    "lastName": zod_1.z.string().optional(),
    "phone": zod_1.z.string().optional(),
    "additionalInfo": exports.JsonNodeSchema.optional(),
    "ownerId": exports.EntityIdSchema.optional(),
    "ownerName": zod_1.z.string().optional(),
    "groups": zod_1.z.array(exports.EntityInfoSchema).optional()
});
const UserListFilterSchemaImpl = zod_1.z.object({
    "usersIds": zod_1.z.array(zod_1.z.string()).optional()
});
const UserNotificationSettingsSchemaImpl = zod_1.z.object({
    "prefs": zod_1.z.object({})
});
const UserPasswordPolicySchemaImpl = zod_1.z.object({
    "allowWhitespaces": zod_1.z.boolean().optional(),
    "forceUserToResetPasswordIfNotValid": zod_1.z.boolean().optional(),
    "maximumLength": zod_1.z.number().optional(),
    "minimumDigits": zod_1.z.number().optional(),
    "minimumLength": zod_1.z.number().optional(),
    "minimumLowercaseLetters": zod_1.z.number().optional(),
    "minimumSpecialCharacters": zod_1.z.number().optional(),
    "minimumUppercaseLetters": zod_1.z.number().optional(),
    "passwordExpirationPeriodDays": zod_1.z.number().optional(),
    "passwordReuseFrequencyDays": zod_1.z.number().optional()
});
const UserRoleFilterSchemaImpl = zod_1.z.object({
    "rolesIds": zod_1.z.array(zod_1.z.string()).optional()
});
const UsersFilterSchemaImpl = zod_1.z.object({});
const VersionCreateConfigSchemaImpl = zod_1.z.object({
    "saveAttributes": zod_1.z.boolean().optional(),
    "saveCredentials": zod_1.z.boolean().optional(),
    "saveGroupEntities": zod_1.z.boolean().optional(),
    "savePermissions": zod_1.z.boolean().optional(),
    "saveRelations": zod_1.z.boolean().optional()
});
const VersionCreateRequestSchemaImpl = zod_1.z.object({
    "branch": zod_1.z.string().optional(),
    "type": zod_1.z.enum(["COMPLEX", "SINGLE_ENTITY"]).optional(),
    "versionName": zod_1.z.string().optional()
});
const VersionCreationResultSchemaImpl = zod_1.z.object({
    "added": zod_1.z.number().optional(),
    "done": zod_1.z.boolean().optional(),
    "error": zod_1.z.string().optional(),
    "modified": zod_1.z.number().optional(),
    "removed": zod_1.z.number().optional(),
    "version": exports.EntityVersionSchema.optional()
});
const VersionLoadConfigSchemaImpl = zod_1.z.object({
    "autoGenerateIntegrationKey": zod_1.z.boolean().optional(),
    "loadAttributes": zod_1.z.boolean().optional(),
    "loadCredentials": zod_1.z.boolean().optional(),
    "loadGroupEntities": zod_1.z.boolean().optional(),
    "loadPermissions": zod_1.z.boolean().optional(),
    "loadRelations": zod_1.z.boolean().optional()
});
const VersionLoadRequestSchemaImpl = zod_1.z.object({
    "type": zod_1.z.enum(["ENTITY_TYPE", "SINGLE_ENTITY"]).optional(),
    "versionId": zod_1.z.string().optional()
});
const VersionLoadResultSchemaImpl = zod_1.z.object({
    "done": zod_1.z.boolean().optional(),
    "error": exports.EntityLoadErrorSchema.optional(),
    "result": zod_1.z.array(exports.EntityTypeLoadResultSchema).optional()
});
const VersionedEntityInfoSchemaImpl = zod_1.z.object({
    "externalId": exports.EntityIdSchema.optional(),
    "path": zod_1.z.string().optional()
});
const WebDeliveryMethodNotificationTemplateSchemaImpl = zod_1.z.object({
    "additionalConfig": exports.JsonNodeSchema.optional(),
    "body": zod_1.z.string().optional(),
    "enabled": zod_1.z.boolean().optional(),
    "subject": zod_1.z.string().optional()
});
const WhiteLabelingSchemaImpl = zod_1.z.object({
    "customerId": exports.CustomerIdSchema.optional(),
    "domain": zod_1.z.string().optional(),
    "settings": exports.JsonNodeSchema.optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "type": zod_1.z.enum(["GENERAL", "LOGIN", "MAIL_TEMPLATES"]).optional()
});
const WhiteLabelingParamsSchemaImpl = zod_1.z.object({
    "logoImageUrl": zod_1.z.string().optional(),
    "logoImageHeight": zod_1.z.number().optional(),
    "appTitle": zod_1.z.string().optional(),
    "favicon": exports.FaviconSchema.optional(),
    "paletteSettings": exports.PaletteSettingsSchema.optional(),
    "helpLinkBaseUrl": zod_1.z.string().optional(),
    "uiHelpBaseUrl": zod_1.z.string().optional(),
    "enableHelpLinks": zod_1.z.boolean().optional(),
    "whiteLabelingEnabled": zod_1.z.boolean().optional(),
    "showNameVersion": zod_1.z.boolean().optional(),
    "platformName": zod_1.z.string().optional(),
    "platformVersion": zod_1.z.string().optional(),
    "customCss": zod_1.z.string().optional()
});
const WidgetTypeSchemaImpl = zod_1.z.object({
    "id": exports.WidgetTypeIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "fqn": zod_1.z.string().optional(),
    "name": zod_1.z.string().optional(),
    "deprecated": zod_1.z.boolean().optional(),
    "descriptor": exports.JsonNodeSchema.optional()
});
const WidgetTypeDetailsSchemaImpl = zod_1.z.object({
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "fqn": zod_1.z.string().optional(),
    "name": zod_1.z.string().optional(),
    "deprecated": zod_1.z.boolean().optional(),
    "descriptor": exports.JsonNodeSchema.optional(),
    "image": zod_1.z.string().optional(),
    "description": zod_1.z.string().optional(),
    "tags": zod_1.z.array(zod_1.z.string()).optional()
});
const WidgetTypeExportDataSchemaImpl = zod_1.z.object({
    "attributes": zod_1.z.object({}).optional(),
    "entity": exports.WidgetTypeDetailsSchema.optional(),
    "entityType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
    "relations": zod_1.z.array(exports.EntityRelationSchema).optional()
});
const WidgetTypeIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["WIDGET_TYPE"])
});
const WidgetTypeInfoSchemaImpl = zod_1.z.object({
    "id": exports.WidgetTypeIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "fqn": zod_1.z.string().optional(),
    "name": zod_1.z.string().optional(),
    "deprecated": zod_1.z.boolean().optional(),
    "image": zod_1.z.string().optional(),
    "description": zod_1.z.string().optional(),
    "tags": zod_1.z.array(zod_1.z.string()).optional(),
    "widgetType": zod_1.z.string().optional()
});
const WidgetsBundleSchemaImpl = zod_1.z.object({
    "id": exports.WidgetsBundleIdSchema.optional(),
    "createdTime": zod_1.z.number().optional(),
    "name": zod_1.z.string().optional(),
    "tenantId": exports.TenantIdSchema.optional(),
    "alias": zod_1.z.string().optional(),
    "title": zod_1.z.string().optional(),
    "image": zod_1.z.string().optional(),
    "description": zod_1.z.string().optional(),
    "order": zod_1.z.number().optional()
});
const WidgetsBundleExportDataSchemaImpl = zod_1.z.object({
    "attributes": zod_1.z.object({}).optional(),
    "entity": exports.WidgetsBundleSchema.optional(),
    "entityType": zod_1.z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
    "fqns": zod_1.z.array(zod_1.z.string()).optional(),
    "relations": zod_1.z.array(exports.EntityRelationSchema).optional(),
    "widgets": zod_1.z.array(exports.ObjectNodeSchema).optional()
});
const WidgetsBundleIdSchemaImpl = zod_1.z.object({
    "id": zod_1.z.string(),
    "entityType": zod_1.z.enum(["WIDGETS_BUNDLE"])
});
const X509CertificateChainProvisionConfigurationSchemaImpl = zod_1.z.object({
    "allowCreateNewDevicesByX509Certificate": zod_1.z.boolean().optional(),
    "certificateRegExPattern": zod_1.z.string().optional(),
    "provisionDeviceSecret": zod_1.z.string().optional()
});
const X509LwM2MBootstrapServerCredentialSchemaImpl = zod_1.z.object({
    "shortServerId": zod_1.z.number().optional(),
    "bootstrapServerIs": zod_1.z.boolean().optional(),
    "host": zod_1.z.string().optional(),
    "port": zod_1.z.number().optional(),
    "clientHoldOffTime": zod_1.z.number().optional(),
    "serverPublicKey": zod_1.z.string().optional(),
    "serverCertificate": zod_1.z.string().optional(),
    "bootstrapServerAccountTimeout": zod_1.z.number().optional(),
    "lifetime": zod_1.z.number().optional(),
    "defaultMinPeriod": zod_1.z.number().optional(),
    "notifIfDisabled": zod_1.z.boolean().optional(),
    "binding": zod_1.z.string().optional()
});
