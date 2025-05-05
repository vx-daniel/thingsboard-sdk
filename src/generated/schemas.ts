
import { z } from 'zod';

// Initialize all schemas with empty objects to handle circular dependencies
let AccountTwoFaSettingsSchema = z.object({});
let ActivateUserRequestSchema = z.object({});
let AdminSettingsSchema = z.object({});
let AdminSettingsIdSchema = z.object({});
let AffectedTenantAdministratorsFilterSchema = z.object({});
let AffectedUserFilterSchema = z.object({});
let AlarmSchema = z.object({});
let AlarmAssigneeSchema = z.object({});
let AlarmAssignmentNotificationRuleTriggerConfigSchema = z.lazy(() => z.object({}));
let AlarmCommentSchema = z.object({});
let AlarmCommentIdSchema = z.object({});
let AlarmCommentInfoSchema = z.object({});
let AlarmCommentNotificationRuleTriggerConfigSchema = z.object({});
let AlarmConditionSchema = z.object({});
let AlarmConditionFilterSchema = z.object({});
let AlarmConditionFilterKeySchema = z.object({});
let AlarmConditionSpecSchema = z.object({});
let AlarmCountQuerySchema = z.object({});
let AlarmDataSchema = z.object({});
let AlarmDataPageLinkSchema = z.object({});
let AlarmDataQuerySchema = z.object({});
let AlarmIdSchema = z.object({});
let AlarmInfoSchema = z.object({});
let AlarmNotificationRuleTriggerConfigSchema = z.lazy(() => z.object({}));
let AlarmRuleSchema = z.object({});
let AlarmScheduleSchema = z.object({});
let AllUsersFilterSchema = z.object({});
let AllowCreateNewDevicesDeviceProfileProvisionConfigurationSchema = z.object({});
let AllowedPermissionsInfoSchema = z.object({});
let AnyTimeScheduleSchema = z.object({});
let ApiUsageLimitNotificationRuleTriggerConfigSchema = z.lazy(() => z.object({}));
let ApiUsageStateFilterSchema = z.lazy(() => z.object({}));
let ArrayNodeSchema = z.object({});
let AssetSchema = z.object({});
let AssetIdSchema = z.object({});
let AssetInfoSchema = z.object({});
let AssetProfileSchema = z.object({});
let AssetProfileIdSchema = z.object({});
let AssetProfileInfoSchema = z.object({});
let AssetSearchQuerySchema = z.object({});
let AssetSearchQueryFilterSchema = z.lazy(() => z.object({}));
let AssetTypeFilterSchema = z.lazy(() => z.object({}));
let AtomicIntegerSchema = z.object({});
let AttributeExportDataSchema = z.object({});
let AttributesEntityViewSchema = z.object({});
let AuditLogSchema = z.object({});
let AuditLogIdSchema = z.object({});
let AutoVersionCreateConfigSchema = z.object({});
let AwsSnsSmsProviderConfigurationSchema = z.lazy(() => z.object({}));
let BackupCodeTwoFaAccountConfigSchema = z.object({});
let BackupCodeTwoFaProviderConfigSchema = z.object({});
let BlobEntityIdSchema = z.object({});
let BlobEntityInfoSchema = z.object({});
let BlobEntityWithCustomerInfoSchema = z.object({});
let BooleanFilterPredicateSchema = z.lazy(() => z.object({}));
let BranchInfoSchema = z.object({});
let BulkImportRequestSchema = z.object({});
let BulkImportResult_Of_AssetSchema = z.object({});
let BulkImportResult_Of_DeviceSchema = z.object({});
let BulkImportResult_Of_EdgeSchema = z.object({});
let ButtonSchema = z.object({});
let ByteArrayResourceSchema = z.object({});
let ByteBufferSchema = z.object({});
let ChangePasswordRequestSchema = z.object({});
let CheckPreProvisionedDevicesDeviceProfileProvisionConfigurationSchema = z.object({});
let ClaimRequestSchema = z.object({});
let ClearRuleSchema = z.object({});
let ClientAttributesQueryingSnmpCommunicationConfigSchema = z.object({});
let CoapDeviceProfileTransportConfigurationSchema = z.lazy(() => z.object({}));
let CoapDeviceTransportConfigurationSchema = z.lazy(() => z.object({}));
let CoapDeviceTypeConfigurationSchema = z.object({});
let ColumnMappingSchema = z.object({});
let ComparisonTsValueSchema = z.object({});
let ComplexFilterPredicateSchema = z.lazy(() => z.object({}));
let ComplexVersionCreateRequestSchema = z.lazy(() => z.object({}));
let ComponentDescriptorSchema = z.object({});
let ComponentDescriptorIdSchema = z.object({});
let ContactBased_Of_objectSchema = z.object({});
let ConverterSchema = z.object({});
let ConverterIdSchema = z.object({});
let CustomMenuSchema = z.object({});
let CustomMenuItemSchema = z.object({});
let CustomTimeScheduleSchema = z.object({});
let CustomTimeScheduleItemSchema = z.object({});
let CustomTranslationSchema = z.object({});
let CustomerSchema = z.object({});
let CustomerIdSchema = z.object({});
let CustomerInfoSchema = z.object({});
let CustomerUsersFilterSchema = z.lazy(() => z.object({}));
let DashboardSchema = z.object({});
let DashboardIdSchema = z.object({});
let DashboardInfoSchema = z.object({});
let DebugConverterEventFilterSchema = z.lazy(() => z.object({}));
let DebugIntegrationEventFilterSchema = z.lazy(() => z.object({}));
let DefaultCoapDeviceTypeConfigurationSchema = z.lazy(() => z.object({}));
let DefaultDeviceConfigurationSchema = z.lazy(() => z.object({}));
let DefaultDeviceProfileConfigurationSchema = z.object({});
let DefaultDeviceProfileTransportConfigurationSchema = z.object({});
let DefaultDeviceTransportConfigurationSchema = z.lazy(() => z.object({}));
let DefaultRuleChainCreateRequestSchema = z.object({});
let DefaultTenantProfileConfigurationSchema = z.object({});
let DeferredResult_Of_EntityDataDiffSchema = z.object({});
let DeferredResult_Of_EntityDataInfoSchema = z.object({});
let DeferredResult_Of_List_Of_BranchInfoSchema = z.object({});
let DeferredResult_Of_List_Of_VersionedEntityInfoSchema = z.object({});
let DeferredResult_Of_PageData_Of_EntityVersionSchema = z.object({});
let DeferredResult_Of_RepositorySettingsSchema = z.object({});
let DeferredResult_Of_ResponseEntitySchema = z.object({});
let DeferredResult_Of_VoidSchema = z.object({});
let DeferredResult_Of_uuidSchema = z.object({});
let DeliveryMethodNotificationTemplateSchema = z.object({});
let DeviceSchema = z.object({});
let DeviceActivityNotificationRuleTriggerConfigSchema = z.lazy(() => z.object({}));
let DeviceConfigurationSchema = z.object({});
let DeviceCredentialsSchema = z.object({});
let DeviceCredentialsIdSchema = z.object({});
let DeviceDataSchema = z.object({});
let DeviceExportDataSchema = z.lazy(() => z.object({}));
let DeviceGroupOtaPackageSchema = z.object({});
let DeviceIdSchema = z.object({});
let DeviceInfoSchema = z.object({});
let DeviceProfileSchema = z.object({});
let DeviceProfileAlarmSchema = z.object({});
let DeviceProfileConfigurationSchema = z.object({});
let DeviceProfileDataSchema = z.object({});
let DeviceProfileIdSchema = z.object({});
let DeviceProfileInfoSchema = z.object({});
let DeviceProfileProvisionConfigurationSchema = z.object({});
let DeviceProfileTransportConfigurationSchema = z.object({});
let DeviceSearchQuerySchema = z.object({});
let DeviceSearchQueryFilterSchema = z.lazy(() => z.object({}));
let DeviceTransportConfigurationSchema = z.object({});
let DeviceTypeFilterSchema = z.lazy(() => z.object({}));
let DisabledDeviceProfileProvisionConfigurationSchema = z.lazy(() => z.object({}));
let DurationAlarmConditionSpecSchema = z.lazy(() => z.object({}));
let DynamicValue_Of_booleanSchema = z.object({});
let DynamicValue_Of_doubleSchema = z.object({});
let DynamicValue_Of_intSchema = z.object({});
let DynamicValue_Of_longSchema = z.object({});
let DynamicValue_Of_stringSchema = z.object({});
let EdgeSchema = z.object({});
let EdgeEventSchema = z.object({});
let EdgeEventIdSchema = z.object({});
let EdgeIdSchema = z.object({});
let EdgeInfoSchema = z.object({});
let EdgeInstructionsSchema = z.object({});
let EdgeSearchQuerySchema = z.object({});
let EdgeSearchQueryFilterSchema = z.lazy(() => z.object({}));
let EdgeTypeFilterSchema = z.lazy(() => z.object({}));
let EfentoCoapDeviceTypeConfigurationSchema = z.object({});
let EmailDeliveryMethodNotificationTemplateSchema = z.lazy(() => z.object({}));
let EmailTwoFaAccountConfigSchema = z.object({});
let EmailTwoFaProviderConfigSchema = z.lazy(() => z.object({}));
let EntitiesByGroupNameFilterSchema = z.lazy(() => z.object({}));
let EntitiesLimitNotificationRuleTriggerConfigSchema = z.lazy(() => z.object({}));
let EntityActionNotificationRuleTriggerConfigSchema = z.lazy(() => z.object({}));
let EntityCountQuerySchema = z.object({});
let EntityDataSchema = z.object({});
let EntityDataDiffSchema = z.object({});
let EntityDataInfoSchema = z.object({});
let EntityDataPageLinkSchema = z.object({});
let EntityDataQuerySchema = z.object({});
let EntityDataSortOrderSchema = z.object({});
let EntityExportData_Of_objectSchema = z.object({});
let EntityFilterSchema = z.object({});
let EntityGroupSchema = z.object({});
let EntityGroupExportDataSchema = z.lazy(() => z.object({}));
let EntityGroupFilterSchema = z.lazy(() => z.object({}));
let EntityGroupIdSchema = z.object({});
let EntityGroupInfoSchema = z.object({});
let EntityGroupListFilterSchema = z.lazy(() => z.object({}));
let EntityGroupNameFilterSchema = z.lazy(() => z.object({}));
let EntityIdSchema = z.object({});
let EntityInfoSchema = z.object({});
let EntityKeySchema = z.object({});
let EntityListFilterSchema = z.lazy(() => z.object({}));
let EntityLoadErrorSchema = z.object({});
let EntityNameFilterSchema = z.lazy(() => z.object({}));
let EntityRelationSchema = z.object({});
let EntityRelationInfoSchema = z.object({});
let EntityRelationsQuerySchema = z.object({});
let EntitySubtypeSchema = z.object({});
let EntityTypeFilterSchema = z.lazy(() => z.object({}));
let EntityTypeLoadResultSchema = z.object({});
let EntityTypeVersionCreateConfigSchema = z.object({});
let EntityTypeVersionLoadConfigSchema = z.object({});
let EntityTypeVersionLoadRequestSchema = z.lazy(() => z.object({}));
let EntityVersionSchema = z.object({});
let EntityViewSchema = z.object({});
let EntityViewIdSchema = z.object({});
let EntityViewInfoSchema = z.object({});
let EntityViewSearchQuerySchema = z.object({});
let EntityViewSearchQueryFilterSchema = z.lazy(() => z.object({}));
let EntityViewTypeFilterSchema = z.lazy(() => z.object({}));
let ErrorEventFilterSchema = z.lazy(() => z.object({}));
let EscalatedNotificationRuleRecipientsConfigSchema = z.object({});
let EventFilterSchema = z.object({});
let EventIdSchema = z.object({});
let EventInfoSchema = z.object({});
let ExportableEntity_Of_EntityIdSchema = z.object({});
let FaviconSchema = z.object({});
let FeaturesInfoSchema = z.object({});
let FilterPredicateValue_Of_booleanSchema = z.object({});
let FilterPredicateValue_Of_doubleSchema = z.object({});
let FilterPredicateValue_Of_intSchema = z.object({});
let FilterPredicateValue_Of_longSchema = z.object({});
let FilterPredicateValue_Of_stringSchema = z.object({});
let GroupEntityExportDataSchema = z.lazy(() => z.object({}));
let GroupPermissionSchema = z.object({});
let GroupPermissionIdSchema = z.object({});
let GroupPermissionInfoSchema = z.object({});
let HasId_Of_objectSchema = z.object({});
let HomeDashboardSchema = z.object({});
let HomeDashboardInfoSchema = z.object({});
let ImageExportDataSchema = z.object({});
let InputStreamSchema = z.object({});
let IntegrationSchema = z.object({});
let IntegrationIdSchema = z.object({});
let IntegrationInfoSchema = z.object({});
let IntegrationLifecycleEventNotificationRuleTriggerConfigSchema = z.object({});
let JWT_PairSchema = z.object({});
let JWT_SettingsSchema = z.object({});
let JsonNodeSchema = z.object({});
let JsonTransportPayloadConfigurationSchema = z.lazy(() => z.object({}));
let KeyFilterSchema = z.object({});
let KeyFilterPredicateSchema = z.object({});
let LastVisitedDashboardInfoSchema = z.object({});
let LicenseUsageInfoSchema = z.object({});
let LifeCycleEventFilterSchema = z.lazy(() => z.object({}));
let LoginRequestSchema = z.object({});
let LoginResponseSchema = z.object({});
let LoginWhiteLabelingParamsSchema = z.object({});
let LwM2MBootstrapServerCredentialSchema = z.object({});
let LwM2mInstanceSchema = z.object({});
let LwM2mObjectSchema = z.object({});
let LwM2mResourceObserveSchema = z.object({});
let Lwm2mDeviceProfileTransportConfigurationSchema = z.lazy(() => z.object({}));
let Lwm2mDeviceTransportConfigurationSchema = z.lazy(() => z.object({}));
let MappingSchema = z.object({});
let MergedGroupPermissionInfoSchema = z.object({});
let MergedGroupTypePermissionInfoSchema = z.object({});
let MergedUserPermissionsSchema = z.object({});
let MicrosoftTeamsDeliveryMethodNotificationTemplateSchema = z.object({});
let MicrosoftTeamsNotificationTargetConfigSchema = z.lazy(() => z.object({}));
let MqttDeviceProfileTransportConfigurationSchema = z.object({});
let MqttDeviceTransportConfigurationSchema = z.lazy(() => z.object({}));
let NewPlatformVersionNotificationRuleTriggerConfigSchema = z.object({});
let NoSecLwM2MBootstrapServerCredentialSchema = z.object({});
let NodeConnectionInfoSchema = z.object({});
let NotificationSchema = z.object({});
let NotificationDeliveryMethodConfigSchema = z.object({});
let NotificationIdSchema = z.object({});
let NotificationInfoSchema = z.object({});
let NotificationPrefSchema = z.object({});
let NotificationRequestSchema = z.object({});
let NotificationRequestConfigSchema = z.object({});
let NotificationRequestIdSchema = z.object({});
let NotificationRequestInfoSchema = z.object({});
let NotificationRequestPreviewSchema = z.object({});
let NotificationRequestStatsSchema = z.object({});
let NotificationRuleSchema = z.object({});
let NotificationRuleConfigSchema = z.object({});
let NotificationRuleIdSchema = z.object({});
let NotificationRuleInfoSchema = z.object({});
let NotificationRuleRecipientsConfigSchema = z.object({});
let NotificationRuleTriggerConfigSchema = z.object({});
let NotificationSettingsSchema = z.object({});
let NotificationTargetSchema = z.object({});
let NotificationTargetConfigSchema = z.object({});
let NotificationTemplateSchema = z.object({});
let NotificationTemplateConfigSchema = z.object({});
let NotificationTemplateIdSchema = z.object({});
let NumericFilterPredicateSchema = z.lazy(() => z.object({}));
let OAuth2BasicMapperConfigSchema = z.object({});
let OAuth2ClientInfoSchema = z.object({});
let OAuth2ClientRegistrationTemplateSchema = z.object({});
let OAuth2ClientRegistrationTemplateIdSchema = z.object({});
let OAuth2CustomMapperConfigSchema = z.object({});
let OAuth2DomainInfoSchema = z.object({});
let OAuth2InfoSchema = z.object({});
let OAuth2MapperConfigSchema = z.object({});
let OAuth2MobileInfoSchema = z.object({});
let OAuth2ParamsInfoSchema = z.object({});
let OAuth2RegistrationInfoSchema = z.object({});
let ObjectAttributesSchema = z.object({});
let ObjectNodeSchema = z.object({});
let OriginatorEntityOwnerUsersFilterSchema = z.object({});
let OtaPackageSchema = z.object({});
let OtaPackageIdSchema = z.object({});
let OtaPackageInfoSchema = z.object({});
let OtherConfigurationSchema = z.object({});
let PSKLwM2MBootstrapServerCredentialSchema = z.lazy(() => z.object({}));
let PageData_Of_AlarmCommentInfoSchema = z.object({});
let PageData_Of_AlarmDataSchema = z.object({});
let PageData_Of_AlarmInfoSchema = z.object({});
let PageData_Of_AssetInfoSchema = z.object({});
let PageData_Of_AssetProfileInfoSchema = z.object({});
let PageData_Of_AssetProfileSchema = z.object({});
let PageData_Of_AssetSchema = z.object({});
let PageData_Of_AuditLogSchema = z.object({});
let PageData_Of_BlobEntityWithCustomerInfoSchema = z.object({});
let PageData_Of_ContactBased_Of_objectSchema = z.object({});
let PageData_Of_ConverterSchema = z.object({});
let PageData_Of_CustomerInfoSchema = z.object({});
let PageData_Of_CustomerSchema = z.object({});
let PageData_Of_DashboardInfoSchema = z.object({});
let PageData_Of_DeviceInfoSchema = z.object({});
let PageData_Of_DeviceProfileInfoSchema = z.object({});
let PageData_Of_DeviceProfileSchema = z.object({});
let PageData_Of_DeviceSchema = z.object({});
let PageData_Of_EdgeEventSchema = z.object({});
let PageData_Of_EdgeInfoSchema = z.object({});
let PageData_Of_EdgeSchema = z.object({});
let PageData_Of_EntityDataSchema = z.object({});
let PageData_Of_EntityGroupInfoSchema = z.object({});
let PageData_Of_EntityInfoSchema = z.object({});
let PageData_Of_EntitySubtypeSchema = z.object({});
let PageData_Of_EntityVersionSchema = z.object({});
let PageData_Of_EntityViewInfoSchema = z.object({});
let PageData_Of_EntityViewSchema = z.object({});
let PageData_Of_EventInfoSchema = z.object({});
let PageData_Of_IntegrationInfoSchema = z.object({});
let PageData_Of_IntegrationSchema = z.object({});
let PageData_Of_NotificationRequestInfoSchema = z.object({});
let PageData_Of_NotificationRuleInfoSchema = z.object({});
let PageData_Of_NotificationTargetSchema = z.object({});
let PageData_Of_NotificationTemplateSchema = z.object({});
let PageData_Of_NotificationSchema = z.object({});
let PageData_Of_OtaPackageInfoSchema = z.object({});
let PageData_Of_QueueSchema = z.object({});
let PageData_Of_RoleSchema = z.object({});
let PageData_Of_RuleChainSchema = z.object({});
let PageData_Of_SchedulerEventInfoSchema = z.object({});
let PageData_Of_ShortEntityViewSchema = z.object({});
let PageData_Of_TbResourceInfoSchema = z.object({});
let PageData_Of_TenantInfoSchema = z.object({});
let PageData_Of_TenantProfileSchema = z.object({});
let PageData_Of_TenantSchema = z.object({});
let PageData_Of_UserEmailInfoSchema = z.object({});
let PageData_Of_UserInfoSchema = z.object({});
let PageData_Of_UserSchema = z.object({});
let PageData_Of_WidgetTypeInfoSchema = z.object({});
let PageData_Of_WidgetsBundleSchema = z.object({});
let PaletteSchema = z.object({});
let PaletteSettingsSchema = z.object({});
let PlatformTwoFaSettingsSchema = z.object({});
let PlatformUsersNotificationTargetConfigSchema = z.lazy(() => z.object({}));
let PowerSavingConfigurationSchema = z.object({});
let ProcessingStrategySchema = z.object({});
let ProtoTransportPayloadConfigurationSchema = z.lazy(() => z.object({}));
let QueueSchema = z.object({});
let QueueIdSchema = z.object({});
let RPKLwM2MBootstrapServerCredentialSchema = z.object({});
let RateLimitsNotificationRuleTriggerConfigSchema = z.object({});
let RawDataEventFilterSchema = z.lazy(() => z.object({}));
let RelationEntityTypeFilterSchema = z.object({});
let RelationsQueryFilterSchema = z.lazy(() => z.object({}));
let RelationsSearchParametersSchema = z.object({});
let RepeatingAlarmConditionSpecSchema = z.lazy(() => z.object({}));
let ReportConfigSchema = z.object({});
let RepositorySettingsSchema = z.object({});
let RepositorySettingsInfoSchema = z.object({});
let ResetPasswordEmailRequestSchema = z.object({});
let ResetPasswordRequestSchema = z.object({});
let ResourceSchema = z.object({});
let ResponseEntitySchema = z.object({});
let RoleSchema = z.object({});
let RoleIdSchema = z.object({});
let RpcSchema = z.object({});
let RpcIdSchema = z.object({});
let RuleChainSchema = z.object({});
let RuleChainConnectionInfoSchema = z.object({});
let RuleChainDataSchema = z.object({});
let RuleChainDebugEventFilterSchema = z.lazy(() => z.object({}));
let RuleChainExportDataSchema = z.lazy(() => z.object({}));
let RuleChainIdSchema = z.object({});
let RuleChainImportResultSchema = z.object({});
let RuleChainMetaDataSchema = z.object({});
let RuleChainOutputLabelsUsageSchema = z.object({});
let RuleEngineComponentLifecycleEventNotificationRuleTriggerConfigSchema = z.lazy(() => z.object({}));
let RuleNodeSchema = z.object({});
let RuleNodeDebugEventFilterSchema = z.lazy(() => z.object({}));
let RuleNodeIdSchema = z.object({});
let SaveDeviceWithCredentialsRequestSchema = z.object({});
let SaveOtaPackageInfoRequestSchema = z.object({});
let SchedulerEventSchema = z.object({});
let SchedulerEventFilterSchema = z.lazy(() => z.object({}));
let SchedulerEventIdSchema = z.object({});
let SchedulerEventInfoSchema = z.object({});
let SchedulerEventWithCustomerInfoSchema = z.object({});
let SecuritySettingsSchema = z.object({});
let SelfRegistrationParamsSchema = z.object({});
let ShareGroupRequestSchema = z.object({});
let SharedAttributesSettingSnmpCommunicationConfigSchema = z.lazy(() => z.object({}));
let ShortCustomerInfoSchema = z.object({});
let ShortEntityViewSchema = z.object({});
let SignUpRequestSchema = z.object({});
let SignUpSelfRegistrationParamsSchema = z.object({});
let SimpleAlarmConditionSpecSchema = z.lazy(() => z.object({}));
let SingleEntityFilterSchema = z.lazy(() => z.object({}));
let SingleEntityVersionCreateRequestSchema = z.lazy(() => z.object({}));
let SingleEntityVersionLoadRequestSchema = z.lazy(() => z.object({}));
let SlackConversationSchema = z.object({});
let SlackDeliveryMethodNotificationTemplateSchema = z.object({});
let SlackNotificationDeliveryMethodConfigSchema = z.object({});
let SlackNotificationTargetConfigSchema = z.lazy(() => z.object({}));
let SmppSmsProviderConfigurationSchema = z.lazy(() => z.object({}));
let SmsDeliveryMethodNotificationTemplateSchema = z.object({});
let SmsProviderConfigurationSchema = z.object({});
let SmsTwoFaAccountConfigSchema = z.lazy(() => z.object({}));
let SmsTwoFaProviderConfigSchema = z.object({});
let SnmpCommunicationConfigSchema = z.object({});
let SnmpDeviceProfileTransportConfigurationSchema = z.lazy(() => z.object({}));
let SnmpDeviceTransportConfigurationSchema = z.lazy(() => z.object({}));
let SnmpMappingSchema = z.object({});
let SolutionInstallResponseSchema = z.object({});
let SpecificTimeScheduleSchema = z.object({});
let StarredDashboardInfoSchema = z.object({});
let StateEntityOwnerFilterSchema = z.lazy(() => z.object({}));
let StatisticsEventFilterSchema = z.lazy(() => z.object({}));
let StringFilterPredicateSchema = z.lazy(() => z.object({}));
let SubmitStrategySchema = z.object({});
let SystemAdministratorsFilterSchema = z.object({});
let SystemInfoSchema = z.object({});
let SystemInfoDataSchema = z.object({});
let TbImageDeleteResultSchema = z.object({});
let TbResourceSchema = z.object({});
let TbResourceIdSchema = z.object({});
let TbResourceInfoSchema = z.object({});
let TelemetryEntityViewSchema = z.object({});
let TelemetryMappingConfigurationSchema = z.object({});
let TelemetryQueryingSnmpCommunicationConfigSchema = z.lazy(() => z.object({}));
let TenantSchema = z.object({});
let TenantAdministratorsFilterSchema = z.lazy(() => z.object({}));
let TenantIdSchema = z.object({});
let TenantInfoSchema = z.object({});
let TenantProfileSchema = z.object({});
let TenantProfileConfigurationSchema = z.object({});
let TenantProfileDataSchema = z.object({});
let TenantProfileIdSchema = z.object({});
let TenantProfileQueueConfigurationSchema = z.object({});
let TenantSolutionTemplateDetailsSchema = z.object({});
let TenantSolutionTemplateInfoSchema = z.object({});
let TenantSolutionTemplateInstructionsSchema = z.object({});
let TestSmsRequestSchema = z.object({});
let ThingsboardCredentialsExpiredResponseSchema = z.object({});
let ThingsboardErrorResponseSchema = z.object({});
let ToDeviceRpcRequestSnmpCommunicationConfigSchema = z.object({});
let ToServerRpcRequestSnmpCommunicationConfigSchema = z.object({});
let TotpTwoFaAccountConfigSchema = z.object({});
let TotpTwoFaProviderConfigSchema = z.object({});
let TransportPayloadTypeConfigurationSchema = z.object({});
let TsValueSchema = z.object({});
let TwilioSmsProviderConfigurationSchema = z.lazy(() => z.object({}));
let TwoFaAccountConfigSchema = z.object({});
let TwoFaAccountConfigUpdateRequestSchema = z.object({});
let TwoFaProviderConfigSchema = z.object({});
let TwoFaProviderInfoSchema = z.object({});
let UpdateMessageSchema = z.object({});
let UsageInfoSchema = z.object({});
let UserSchema = z.object({});
let UserDashboardsInfoSchema = z.object({});
let UserEmailInfoSchema = z.object({});
let UserGroupListFilterSchema = z.lazy(() => z.object({}));
let UserIdSchema = z.object({});
let UserInfoSchema = z.object({});
let UserListFilterSchema = z.object({});
let UserNotificationSettingsSchema = z.object({});
let UserPasswordPolicySchema = z.object({});
let UserRoleFilterSchema = z.lazy(() => z.object({}));
let UsersFilterSchema = z.object({});
let VersionCreateConfigSchema = z.object({});
let VersionCreateRequestSchema = z.object({});
let VersionCreationResultSchema = z.object({});
let VersionLoadConfigSchema = z.object({});
let VersionLoadRequestSchema = z.object({});
let VersionLoadResultSchema = z.object({});
let VersionedEntityInfoSchema = z.object({});
let WebDeliveryMethodNotificationTemplateSchema = z.object({});
let WhiteLabelingSchema = z.object({});
let WhiteLabelingParamsSchema = z.object({});
let WidgetTypeSchema = z.object({});
let WidgetTypeDetailsSchema = z.object({});
let WidgetTypeExportDataSchema = z.lazy(() => z.object({}));
let WidgetTypeIdSchema = z.object({});
let WidgetTypeInfoSchema = z.object({});
let WidgetsBundleSchema = z.object({});
let WidgetsBundleExportDataSchema = z.lazy(() => z.object({}));
let WidgetsBundleIdSchema = z.object({});
let X509CertificateChainProvisionConfigurationSchema = z.lazy(() => z.object({}));
let X509LwM2MBootstrapServerCredentialSchema = z.object({});

// Now define the actual schema contents

X509LwM2MBootstrapServerCredentialSchema = z.object({
  "shortServerId": z.number(),
  "bootstrapServerIs": z.boolean(),
  "host": z.string(),
  "port": z.number(),
  "clientHoldOffTime": z.number(),
  "serverPublicKey": z.string(),
  "serverCertificate": z.string(),
  "bootstrapServerAccountTimeout": z.number(),
  "lifetime": z.number(),
  "defaultMinPeriod": z.number(),
  "notifIfDisabled": z.boolean(),
  "binding": z.string()
});
export type X509LwM2MBootstrapServerCredential = z.infer<typeof X509LwM2MBootstrapServerCredentialSchema>;
export { X509LwM2MBootstrapServerCredentialSchema };
  

X509CertificateChainProvisionConfigurationSchema = z.lazy(() => z.object({}));
export type X509CertificateChainProvisionConfiguration = z.infer<typeof X509CertificateChainProvisionConfigurationSchema>;
export { X509CertificateChainProvisionConfigurationSchema };
  

WidgetsBundleExportDataSchema = z.lazy(() => z.object({}));
export type WidgetsBundleExportData = z.infer<typeof WidgetsBundleExportDataSchema>;
export { WidgetsBundleExportDataSchema };
  

WidgetTypeExportDataSchema = z.lazy(() => z.object({}));
export type WidgetTypeExportData = z.infer<typeof WidgetTypeExportDataSchema>;
export { WidgetTypeExportDataSchema };
  

WidgetTypeDetailsSchema = z.object({
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "fqn": z.string(),
  "name": z.string(),
  "deprecated": z.boolean(),
  "descriptor": JsonNodeSchema,
  "image": z.string(),
  "description": z.string(),
  "tags": z.array(z.string())
});
export type WidgetTypeDetails = z.infer<typeof WidgetTypeDetailsSchema>;
export { WidgetTypeDetailsSchema };
  

WidgetTypeSchema = z.object({
  "id": WidgetTypeIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "fqn": z.string(),
  "name": z.string(),
  "deprecated": z.boolean(),
  "descriptor": JsonNodeSchema
});
export type WidgetType = z.infer<typeof WidgetTypeSchema>;
export { WidgetTypeSchema };
  

WhiteLabelingParamsSchema = z.object({
  "logoImageUrl": z.string(),
  "logoImageHeight": z.number(),
  "appTitle": z.string(),
  "favicon": FaviconSchema,
  "paletteSettings": PaletteSettingsSchema,
  "helpLinkBaseUrl": z.string(),
  "uiHelpBaseUrl": z.string(),
  "enableHelpLinks": z.boolean(),
  "whiteLabelingEnabled": z.boolean(),
  "showNameVersion": z.boolean(),
  "platformName": z.string(),
  "platformVersion": z.string(),
  "customCss": z.string()
});
export type WhiteLabelingParams = z.infer<typeof WhiteLabelingParamsSchema>;
export { WhiteLabelingParamsSchema };
  

WebDeliveryMethodNotificationTemplateSchema = z.object({
  "additionalConfig": JsonNodeSchema,
  "body": z.string(),
  "enabled": z.boolean(),
  "subject": z.string()
});
export type WebDeliveryMethodNotificationTemplate = z.infer<typeof WebDeliveryMethodNotificationTemplateSchema>;
export { WebDeliveryMethodNotificationTemplateSchema };
  

VersionedEntityInfoSchema = z.object({
  "externalId": EntityIdSchema,
  "path": z.string()
});
export type VersionedEntityInfo = z.infer<typeof VersionedEntityInfoSchema>;
export { VersionedEntityInfoSchema };
  

VersionLoadResultSchema = z.object({
  "done": z.boolean(),
  "error": EntityLoadErrorSchema,
  "result": z.array(EntityTypeLoadResultSchema)
});
export type VersionLoadResult = z.infer<typeof VersionLoadResultSchema>;
export { VersionLoadResultSchema };
  

VersionLoadRequestSchema = z.object({
  "type": z.enum(["ENTITY_TYPE", "SINGLE_ENTITY"]),
  "versionId": z.string()
});
export type VersionLoadRequest = z.infer<typeof VersionLoadRequestSchema>;
export { VersionLoadRequestSchema };
  

VersionLoadConfigSchema = z.object({
  "autoGenerateIntegrationKey": z.boolean(),
  "loadAttributes": z.boolean(),
  "loadCredentials": z.boolean(),
  "loadGroupEntities": z.boolean(),
  "loadPermissions": z.boolean(),
  "loadRelations": z.boolean()
});
export type VersionLoadConfig = z.infer<typeof VersionLoadConfigSchema>;
export { VersionLoadConfigSchema };
  

VersionCreationResultSchema = z.object({
  "added": z.number(),
  "done": z.boolean(),
  "error": z.string(),
  "modified": z.number(),
  "removed": z.number(),
  "version": EntityVersionSchema
});
export type VersionCreationResult = z.infer<typeof VersionCreationResultSchema>;
export { VersionCreationResultSchema };
  

VersionCreateRequestSchema = z.object({
  "branch": z.string(),
  "type": z.enum(["COMPLEX", "SINGLE_ENTITY"]),
  "versionName": z.string()
});
export type VersionCreateRequest = z.infer<typeof VersionCreateRequestSchema>;
export { VersionCreateRequestSchema };
  

VersionCreateConfigSchema = z.object({
  "saveAttributes": z.boolean(),
  "saveCredentials": z.boolean(),
  "saveGroupEntities": z.boolean(),
  "savePermissions": z.boolean(),
  "saveRelations": z.boolean()
});
export type VersionCreateConfig = z.infer<typeof VersionCreateConfigSchema>;
export { VersionCreateConfigSchema };
  

UsersFilterSchema = z.object({});
export type UsersFilter = z.infer<typeof UsersFilterSchema>;
export { UsersFilterSchema };
  

UserRoleFilterSchema = z.lazy(() => z.object({}));
export type UserRoleFilter = z.infer<typeof UserRoleFilterSchema>;
export { UserRoleFilterSchema };
  

UserNotificationSettingsSchema = z.object({
  "prefs": z.record(z.string(), NotificationPrefSchema)
});
export type UserNotificationSettings = z.infer<typeof UserNotificationSettingsSchema>;
export { UserNotificationSettingsSchema };
  

UserListFilterSchema = z.object({
  "usersIds": z.array(z.string())
});
export type UserListFilter = z.infer<typeof UserListFilterSchema>;
export { UserListFilterSchema };
  

UserGroupListFilterSchema = z.lazy(() => z.object({}));
export type UserGroupListFilter = z.infer<typeof UserGroupListFilterSchema>;
export { UserGroupListFilterSchema };
  

UserDashboardsInfoSchema = z.object({
  "last": z.array(LastVisitedDashboardInfoSchema),
  "starred": z.array(StarredDashboardInfoSchema)
});
export type UserDashboardsInfo = z.infer<typeof UserDashboardsInfoSchema>;
export { UserDashboardsInfoSchema };
  

UsageInfoSchema = z.object({
  "alarms": z.number(),
  "assets": z.number(),
  "customers": z.number(),
  "dashboards": z.number(),
  "devices": z.number(),
  "emails": z.number(),
  "jsExecutions": z.number(),
  "maxAlarms": z.number(),
  "maxAssets": z.number(),
  "maxCustomers": z.number(),
  "maxDashboards": z.number(),
  "maxDevices": z.number(),
  "maxEmails": z.number(),
  "maxJsExecutions": z.number(),
  "maxSms": z.number(),
  "maxTbelExecutions": z.number(),
  "maxTransportMessages": z.number(),
  "maxUsers": z.number(),
  "sms": z.number(),
  "smsEnabled": z.boolean(),
  "tbelExecutions": z.number(),
  "transportMessages": z.number(),
  "users": z.number()
});
export type UsageInfo = z.infer<typeof UsageInfoSchema>;
export { UsageInfoSchema };
  

UpdateMessageSchema = z.object({
  "updateAvailable": z.boolean(),
  "currentVersion": z.string(),
  "latestVersion": z.string(),
  "upgradeInstructionsUrl": z.string(),
  "currentVersionReleaseNotesUrl": z.string(),
  "latestVersionReleaseNotesUrl": z.string()
});
export type UpdateMessage = z.infer<typeof UpdateMessageSchema>;
export { UpdateMessageSchema };
  

TwoFaProviderInfoSchema = z.object({
  "contact": z.string(),
  "default": z.boolean(),
  "minVerificationCodeSendPeriod": z.number(),
  "type": z.enum(["BACKUP_CODE", "EMAIL", "SMS", "TOTP"])
});
export type TwoFaProviderInfo = z.infer<typeof TwoFaProviderInfoSchema>;
export { TwoFaProviderInfoSchema };
  

TwoFaAccountConfigUpdateRequestSchema = z.object({
  "useByDefault": z.boolean()
});
export type TwoFaAccountConfigUpdateRequest = z.infer<typeof TwoFaAccountConfigUpdateRequestSchema>;
export { TwoFaAccountConfigUpdateRequestSchema };
  

TwilioSmsProviderConfigurationSchema = z.lazy(() => z.object({}));
export type TwilioSmsProviderConfiguration = z.infer<typeof TwilioSmsProviderConfigurationSchema>;
export { TwilioSmsProviderConfigurationSchema };
  

TotpTwoFaProviderConfigSchema = z.object({
  "issuerName": z.string()
});
export type TotpTwoFaProviderConfig = z.infer<typeof TotpTwoFaProviderConfigSchema>;
export { TotpTwoFaProviderConfigSchema };
  

TotpTwoFaAccountConfigSchema = z.object({
  "authUrl": z.string(),
  "useByDefault": z.boolean()
});
export type TotpTwoFaAccountConfig = z.infer<typeof TotpTwoFaAccountConfigSchema>;
export { TotpTwoFaAccountConfigSchema };
  

ToServerRpcRequestSnmpCommunicationConfigSchema = z.object({
  "mappings": z.array(SnmpMappingSchema),
  "spec": z.enum(["CLIENT_ATTRIBUTES_QUERYING", "SHARED_ATTRIBUTES_SETTING", "TELEMETRY_QUERYING", "TO_DEVICE_RPC_REQUEST", "TO_SERVER_RPC_REQUEST"])
});
export type ToServerRpcRequestSnmpCommunicationConfig = z.infer<typeof ToServerRpcRequestSnmpCommunicationConfigSchema>;
export { ToServerRpcRequestSnmpCommunicationConfigSchema };
  

ToDeviceRpcRequestSnmpCommunicationConfigSchema = z.object({
  "mappings": z.array(SnmpMappingSchema),
  "spec": z.enum(["CLIENT_ATTRIBUTES_QUERYING", "SHARED_ATTRIBUTES_SETTING", "TELEMETRY_QUERYING", "TO_DEVICE_RPC_REQUEST", "TO_SERVER_RPC_REQUEST"])
});
export type ToDeviceRpcRequestSnmpCommunicationConfig = z.infer<typeof ToDeviceRpcRequestSnmpCommunicationConfigSchema>;
export { ToDeviceRpcRequestSnmpCommunicationConfigSchema };
  

ThingsboardErrorResponseSchema = z.object({
  "subscriptionEntry": z.enum(["ASSET_COUNT", "DEVICE_COUNT", "WHITE_LABELING"]),
  "subscriptionErrorCode": z.enum(["FEATURE_DISABLED", "LIMIT_REACHED", "UNSUPPORTED_SOLUTION_TEMPLATE_PLAN"]),
  "subscriptionValue": JsonNodeSchema,
  "status": z.number(),
  "message": z.string(),
  "errorCode": z.object({}),
  "timestamp": z.string()
});
export type ThingsboardErrorResponse = z.infer<typeof ThingsboardErrorResponseSchema>;
export { ThingsboardErrorResponseSchema };
  

ThingsboardCredentialsExpiredResponseSchema = z.object({
  "subscriptionEntry": z.enum(["ASSET_COUNT", "DEVICE_COUNT", "WHITE_LABELING"]),
  "subscriptionErrorCode": z.enum(["FEATURE_DISABLED", "LIMIT_REACHED", "UNSUPPORTED_SOLUTION_TEMPLATE_PLAN"]),
  "subscriptionValue": JsonNodeSchema,
  "status": z.number(),
  "message": z.string(),
  "errorCode": z.object({}),
  "timestamp": z.string(),
  "resetToken": z.string()
});
export type ThingsboardCredentialsExpiredResponse = z.infer<typeof ThingsboardCredentialsExpiredResponseSchema>;
export { ThingsboardCredentialsExpiredResponseSchema };
  

TestSmsRequestSchema = z.object({
  "providerConfiguration": SmsProviderConfigurationSchema,
  "numberTo": z.string(),
  "message": z.string()
});
export type TestSmsRequest = z.infer<typeof TestSmsRequestSchema>;
export { TestSmsRequestSchema };
  

TenantSolutionTemplateInstructionsSchema = z.object({
  "dashboardGroupId": EntityGroupIdSchema,
  "dashboardId": DashboardIdSchema,
  "publicId": CustomerIdSchema,
  "mainDashboardPublic": z.boolean(),
  "details": z.string()
});
export type TenantSolutionTemplateInstructions = z.infer<typeof TenantSolutionTemplateInstructionsSchema>;
export { TenantSolutionTemplateInstructionsSchema };
  

TenantSolutionTemplateInfoSchema = z.object({
  "id": z.string(),
  "title": z.string(),
  "level": z.enum(["MAKER", "PROTOTYPE", "STARTUP"]),
  "installTimeoutMs": z.number(),
  "tenantTelemetryKeys": z.array(z.string()),
  "tenantAttributeKeys": z.array(z.string()),
  "previewImageUrl": z.string(),
  "shortDescription": z.string(),
  "installed": z.boolean(),
  "videoPreviewImageUrl": z.string(),
  "previewMp4Url": z.string(),
  "previewWebmUrl": z.string()
});
export type TenantSolutionTemplateInfo = z.infer<typeof TenantSolutionTemplateInfoSchema>;
export { TenantSolutionTemplateInfoSchema };
  

TenantSolutionTemplateDetailsSchema = z.object({
  "description": z.string(),
  "highlights": z.string(),
  "imageUrls": z.array(z.string()),
  "installed": z.boolean(),
  "id": z.string(),
  "title": z.string(),
  "level": z.enum(["MAKER", "PROTOTYPE", "STARTUP"]),
  "installTimeoutMs": z.number(),
  "tenantTelemetryKeys": z.array(z.string()),
  "tenantAttributeKeys": z.array(z.string())
});
export type TenantSolutionTemplateDetails = z.infer<typeof TenantSolutionTemplateDetailsSchema>;
export { TenantSolutionTemplateDetailsSchema };
  

TenantAdministratorsFilterSchema = z.lazy(() => z.object({}));
export type TenantAdministratorsFilter = z.infer<typeof TenantAdministratorsFilterSchema>;
export { TenantAdministratorsFilterSchema };
  

TelemetryQueryingSnmpCommunicationConfigSchema = z.lazy(() => z.object({}));
export type TelemetryQueryingSnmpCommunicationConfig = z.infer<typeof TelemetryQueryingSnmpCommunicationConfigSchema>;
export { TelemetryQueryingSnmpCommunicationConfigSchema };
  

TelemetryMappingConfigurationSchema = z.object({
  "attribute": z.array(z.string()),
  "attributeLwm2m": z.record(z.string(), ObjectAttributesSchema),
  "keyName": z.record(z.string(), z.string()),
  "observe": z.array(z.string()),
  "telemetry": z.array(z.string())
});
export type TelemetryMappingConfiguration = z.infer<typeof TelemetryMappingConfigurationSchema>;
export { TelemetryMappingConfigurationSchema };
  

TbResourceSchema = z.object({
  "descriptor": JsonNodeSchema,
  "link": z.string(),
  "name": z.string(),
  "preview": z.string(),
  "public": z.boolean(),
  "publicLink": z.string(),
  "publicResourceKey": z.string(),
  "id": TbResourceIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "title": z.string(),
  "resourceType": z.enum(["IMAGE", "JKS", "JS_MODULE", "LWM2M_MODEL", "PKCS_12"]),
  "resourceKey": z.string(),
  "etag": z.string(),
  "fileName": z.string(),
  "data": z.string()
});
export type TbResource = z.infer<typeof TbResourceSchema>;
export { TbResourceSchema };
  

TbImageDeleteResultSchema = z.object({
  "references": z.record(z.string(), z.array(HasId_Of_objectSchema)),
  "success": z.boolean(),
  "whiteLabelingList": z.array(WhiteLabelingSchema)
});
export type TbImageDeleteResult = z.infer<typeof TbImageDeleteResultSchema>;
export { TbImageDeleteResultSchema };
  

WhiteLabelingSchema = z.object({
  "customerId": CustomerIdSchema,
  "domain": z.string(),
  "settings": JsonNodeSchema,
  "tenantId": TenantIdSchema,
  "type": z.enum(["GENERAL", "LOGIN", "MAIL_TEMPLATES"])
});
export type WhiteLabeling = z.infer<typeof WhiteLabelingSchema>;
export { WhiteLabelingSchema };
  

SystemInfoSchema = z.object({
  "monolith": z.boolean(),
  "systemData": z.array(SystemInfoDataSchema)
});
export type SystemInfo = z.infer<typeof SystemInfoSchema>;
export { SystemInfoSchema };
  

SystemInfoDataSchema = z.object({
  "serviceId": z.string(),
  "serviceType": z.string(),
  "cpuUsage": z.number(),
  "cpuCount": z.number(),
  "memoryUsage": z.number(),
  "totalMemory": z.number(),
  "discUsage": z.number(),
  "totalDiscSpace": z.number()
});
export type SystemInfoData = z.infer<typeof SystemInfoDataSchema>;
export { SystemInfoDataSchema };
  

SystemAdministratorsFilterSchema = z.object({});
export type SystemAdministratorsFilter = z.infer<typeof SystemAdministratorsFilterSchema>;
export { SystemAdministratorsFilterSchema };
  

StringFilterPredicateSchema = z.lazy(() => z.object({}));
export type StringFilterPredicate = z.infer<typeof StringFilterPredicateSchema>;
export { StringFilterPredicateSchema };
  

StatisticsEventFilterSchema = z.lazy(() => z.object({}));
export type StatisticsEventFilter = z.infer<typeof StatisticsEventFilterSchema>;
export { StatisticsEventFilterSchema };
  

StateEntityOwnerFilterSchema = z.lazy(() => z.object({}));
export type StateEntityOwnerFilter = z.infer<typeof StateEntityOwnerFilterSchema>;
export { StateEntityOwnerFilterSchema };
  

StarredDashboardInfoSchema = z.object({
  "id": z.string(),
  "title": z.string(),
  "starredAt": z.number()
});
export type StarredDashboardInfo = z.infer<typeof StarredDashboardInfoSchema>;
export { StarredDashboardInfoSchema };
  

SpecificTimeScheduleSchema = z.object({
  "daysOfWeek": z.array(z.number()),
  "dynamicValue": DynamicValue_Of_stringSchema,
  "endsOn": z.number(),
  "startsOn": z.number(),
  "timezone": z.string(),
  "type": z.enum(["ANY_TIME", "CUSTOM", "SPECIFIC_TIME"])
});
export type SpecificTimeSchedule = z.infer<typeof SpecificTimeScheduleSchema>;
export { SpecificTimeScheduleSchema };
  

SolutionInstallResponseSchema = z.object({
  "dashboardGroupId": EntityGroupIdSchema,
  "dashboardId": DashboardIdSchema,
  "publicId": CustomerIdSchema,
  "mainDashboardPublic": z.boolean(),
  "success": z.boolean(),
  "details": z.string()
});
export type SolutionInstallResponse = z.infer<typeof SolutionInstallResponseSchema>;
export { SolutionInstallResponseSchema };
  

SnmpDeviceTransportConfigurationSchema = z.lazy(() => z.object({}));
export type SnmpDeviceTransportConfiguration = z.infer<typeof SnmpDeviceTransportConfigurationSchema>;
export { SnmpDeviceTransportConfigurationSchema };
  

SnmpDeviceProfileTransportConfigurationSchema = z.lazy(() => z.object({}));
export type SnmpDeviceProfileTransportConfiguration = z.infer<typeof SnmpDeviceProfileTransportConfigurationSchema>;
export { SnmpDeviceProfileTransportConfigurationSchema };
  

SnmpCommunicationConfigSchema = z.object({
  "spec": z.enum(["CLIENT_ATTRIBUTES_QUERYING", "SHARED_ATTRIBUTES_SETTING", "TELEMETRY_QUERYING", "TO_DEVICE_RPC_REQUEST", "TO_SERVER_RPC_REQUEST"])
});
export type SnmpCommunicationConfig = z.infer<typeof SnmpCommunicationConfigSchema>;
export { SnmpCommunicationConfigSchema };
  

SmsTwoFaProviderConfigSchema = z.object({
  "smsVerificationMessageTemplate": z.string(),
  "verificationCodeLifetime": z.number()
});
export type SmsTwoFaProviderConfig = z.infer<typeof SmsTwoFaProviderConfigSchema>;
export { SmsTwoFaProviderConfigSchema };
  

SmsTwoFaAccountConfigSchema = z.lazy(() => z.object({}));
export type SmsTwoFaAccountConfig = z.infer<typeof SmsTwoFaAccountConfigSchema>;
export { SmsTwoFaAccountConfigSchema };
  

SmsProviderConfigurationSchema = z.object({});
export type SmsProviderConfiguration = z.infer<typeof SmsProviderConfigurationSchema>;
export { SmsProviderConfigurationSchema };
  

SmsDeliveryMethodNotificationTemplateSchema = z.object({
  "body": z.string(),
  "enabled": z.boolean()
});
export type SmsDeliveryMethodNotificationTemplate = z.infer<typeof SmsDeliveryMethodNotificationTemplateSchema>;
export { SmsDeliveryMethodNotificationTemplateSchema };
  

SmppSmsProviderConfigurationSchema = z.lazy(() => z.object({}));
export type SmppSmsProviderConfiguration = z.infer<typeof SmppSmsProviderConfigurationSchema>;
export { SmppSmsProviderConfigurationSchema };
  

SlackNotificationTargetConfigSchema = z.lazy(() => z.object({}));
export type SlackNotificationTargetConfig = z.infer<typeof SlackNotificationTargetConfigSchema>;
export { SlackNotificationTargetConfigSchema };
  

SlackNotificationDeliveryMethodConfigSchema = z.object({
  "botToken": z.string()
});
export type SlackNotificationDeliveryMethodConfig = z.infer<typeof SlackNotificationDeliveryMethodConfigSchema>;
export { SlackNotificationDeliveryMethodConfigSchema };
  

SlackDeliveryMethodNotificationTemplateSchema = z.object({
  "body": z.string(),
  "enabled": z.boolean()
});
export type SlackDeliveryMethodNotificationTemplate = z.infer<typeof SlackDeliveryMethodNotificationTemplateSchema>;
export { SlackDeliveryMethodNotificationTemplateSchema };
  

SlackConversationSchema = z.object({
  "email": z.string(),
  "id": z.string(),
  "name": z.string(),
  "title": z.string(),
  "type": z.enum(["DIRECT", "PRIVATE_CHANNEL", "PUBLIC_CHANNEL"]),
  "wholeName": z.string()
});
export type SlackConversation = z.infer<typeof SlackConversationSchema>;
export { SlackConversationSchema };
  

SingleEntityVersionLoadRequestSchema = z.lazy(() => z.object({}));
export type SingleEntityVersionLoadRequest = z.infer<typeof SingleEntityVersionLoadRequestSchema>;
export { SingleEntityVersionLoadRequestSchema };
  

SingleEntityVersionCreateRequestSchema = z.lazy(() => z.object({}));
export type SingleEntityVersionCreateRequest = z.infer<typeof SingleEntityVersionCreateRequestSchema>;
export { SingleEntityVersionCreateRequestSchema };
  

SingleEntityFilterSchema = z.lazy(() => z.object({}));
export type SingleEntityFilter = z.infer<typeof SingleEntityFilterSchema>;
export { SingleEntityFilterSchema };
  

SimpleAlarmConditionSpecSchema = z.lazy(() => z.object({}));
export type SimpleAlarmConditionSpec = z.infer<typeof SimpleAlarmConditionSpecSchema>;
export { SimpleAlarmConditionSpecSchema };
  

SignUpSelfRegistrationParamsSchema = z.object({
  "signUpTextMessage": z.string(),
  "captchaSiteKey": z.string(),
  "captchaVersion": z.string(),
  "captchaAction": z.string(),
  "showPrivacyPolicy": z.boolean(),
  "showTermsOfUse": z.boolean()
});
export type SignUpSelfRegistrationParams = z.infer<typeof SignUpSelfRegistrationParamsSchema>;
export { SignUpSelfRegistrationParamsSchema };
  

SignUpRequestSchema = z.object({
  "firstName": z.string(),
  "lastName": z.string(),
  "email": z.string(),
  "password": z.string(),
  "recaptchaResponse": z.string(),
  "pkgName": z.string(),
  "appSecret": z.string()
});
export type SignUpRequest = z.infer<typeof SignUpRequestSchema>;
export { SignUpRequestSchema };
  

SharedAttributesSettingSnmpCommunicationConfigSchema = z.lazy(() => z.object({}));
export type SharedAttributesSettingSnmpCommunicationConfig = z.infer<typeof SharedAttributesSettingSnmpCommunicationConfigSchema>;
export { SharedAttributesSettingSnmpCommunicationConfigSchema };
  

ShareGroupRequestSchema = z.object({
  "allUserGroup": z.boolean(),
  "ownerId": EntityIdSchema,
  "userGroupId": EntityGroupIdSchema,
  "readElseWrite": z.boolean(),
  "roleIds": z.array(RoleIdSchema)
});
export type ShareGroupRequest = z.infer<typeof ShareGroupRequestSchema>;
export { ShareGroupRequestSchema };
  

SelfRegistrationParamsSchema = z.object({
  "adminSettingsId": z.string(),
  "signUpTextMessage": z.string(),
  "captchaSiteKey": z.string(),
  "captchaVersion": z.string(),
  "captchaAction": z.string(),
  "showPrivacyPolicy": z.boolean(),
  "showTermsOfUse": z.boolean(),
  "domainName": z.string(),
  "captchaSecretKey": z.string(),
  "privacyPolicy": z.string(),
  "termsOfUse": z.string(),
  "notificationEmail": z.string(),
  "defaultDashboardId": z.string(),
  "defaultDashboardFullscreen": z.boolean(),
  "permissions": z.array(GroupPermissionSchema),
  "pkgName": z.string(),
  "appSecret": z.string(),
  "appScheme": z.string(),
  "appHost": z.string()
});
export type SelfRegistrationParams = z.infer<typeof SelfRegistrationParamsSchema>;
export { SelfRegistrationParamsSchema };
  

SecuritySettingsSchema = z.object({
  "passwordPolicy": UserPasswordPolicySchema,
  "maxFailedLoginAttempts": z.number(),
  "userLockoutNotificationEmail": z.string()
});
export type SecuritySettings = z.infer<typeof SecuritySettingsSchema>;
export { SecuritySettingsSchema };
  

UserPasswordPolicySchema = z.object({
  "allowWhitespaces": z.boolean(),
  "forceUserToResetPasswordIfNotValid": z.boolean(),
  "maximumLength": z.number(),
  "minimumDigits": z.number(),
  "minimumLength": z.number(),
  "minimumLowercaseLetters": z.number(),
  "minimumSpecialCharacters": z.number(),
  "minimumUppercaseLetters": z.number(),
  "passwordExpirationPeriodDays": z.number(),
  "passwordReuseFrequencyDays": z.number()
});
export type UserPasswordPolicy = z.infer<typeof UserPasswordPolicySchema>;
export { UserPasswordPolicySchema };
  

SchedulerEventWithCustomerInfoSchema = z.object({
  "id": SchedulerEventIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "originatorId": EntityIdSchema,
  "ownerId": EntityIdSchema,
  "name": z.string(),
  "type": z.string(),
  "schedule": JsonNodeSchema,
  "additionalInfo": JsonNodeSchema,
  "customerTitle": z.string(),
  "customerIsPublic": z.object({})
});
export type SchedulerEventWithCustomerInfo = z.infer<typeof SchedulerEventWithCustomerInfoSchema>;
export { SchedulerEventWithCustomerInfoSchema };
  

SchedulerEventFilterSchema = z.lazy(() => z.object({}));
export type SchedulerEventFilter = z.infer<typeof SchedulerEventFilterSchema>;
export { SchedulerEventFilterSchema };
  

SchedulerEventSchema = z.object({
  "id": SchedulerEventIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "originatorId": EntityIdSchema,
  "ownerId": EntityIdSchema,
  "name": z.string(),
  "type": z.string(),
  "schedule": JsonNodeSchema,
  "configuration": JsonNodeSchema,
  "additionalInfo": JsonNodeSchema
});
export type SchedulerEvent = z.infer<typeof SchedulerEventSchema>;
export { SchedulerEventSchema };
  

SaveOtaPackageInfoRequestSchema = z.object({
  "id": OtaPackageIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "deviceProfileId": DeviceProfileIdSchema,
  "type": z.enum(["FIRMWARE", "SOFTWARE"]),
  "title": z.string(),
  "version": z.string(),
  "tag": z.string(),
  "url": z.string(),
  "hasData": z.boolean(),
  "fileName": z.string(),
  "contentType": z.string(),
  "checksumAlgorithm": z.enum(["CRC32", "MD5", "MURMUR3_128", "MURMUR3_32", "SHA256", "SHA384", "SHA512"]),
  "checksum": z.string(),
  "dataSize": z.number(),
  "usesUrl": z.boolean(),
  "additionalInfo": JsonNodeSchema
});
export type SaveOtaPackageInfoRequest = z.infer<typeof SaveOtaPackageInfoRequestSchema>;
export { SaveOtaPackageInfoRequestSchema };
  

SaveDeviceWithCredentialsRequestSchema = z.object({
  "device": DeviceSchema,
  "credentials": DeviceCredentialsSchema
});
export type SaveDeviceWithCredentialsRequest = z.infer<typeof SaveDeviceWithCredentialsRequestSchema>;
export { SaveDeviceWithCredentialsRequestSchema };
  

RuleNodeDebugEventFilterSchema = z.lazy(() => z.object({}));
export type RuleNodeDebugEventFilter = z.infer<typeof RuleNodeDebugEventFilterSchema>;
export { RuleNodeDebugEventFilterSchema };
  

RuleEngineComponentLifecycleEventNotificationRuleTriggerConfigSchema = z.lazy(() => z.object({}));
export type RuleEngineComponentLifecycleEventNotificationRuleTriggerConfig = z.infer<typeof RuleEngineComponentLifecycleEventNotificationRuleTriggerConfigSchema>;
export { RuleEngineComponentLifecycleEventNotificationRuleTriggerConfigSchema };
  

RuleChainOutputLabelsUsageSchema = z.object({
  "ruleChainId": RuleChainIdSchema,
  "ruleNodeId": RuleNodeIdSchema,
  "ruleChainName": z.string(),
  "ruleNodeName": z.string(),
  "labels": z.array(z.string())
});
export type RuleChainOutputLabelsUsage = z.infer<typeof RuleChainOutputLabelsUsageSchema>;
export { RuleChainOutputLabelsUsageSchema };
  

RuleChainImportResultSchema = z.object({
  "error": z.string(),
  "ruleChainId": RuleChainIdSchema,
  "ruleChainName": z.string(),
  "updated": z.boolean()
});
export type RuleChainImportResult = z.infer<typeof RuleChainImportResultSchema>;
export { RuleChainImportResultSchema };
  

RuleChainExportDataSchema = z.lazy(() => z.object({}));
export type RuleChainExportData = z.infer<typeof RuleChainExportDataSchema>;
export { RuleChainExportDataSchema };
  

RuleChainDebugEventFilterSchema = z.lazy(() => z.object({}));
export type RuleChainDebugEventFilter = z.infer<typeof RuleChainDebugEventFilterSchema>;
export { RuleChainDebugEventFilterSchema };
  

RuleChainDataSchema = z.object({
  "ruleChains": z.array(RuleChainSchema),
  "metadata": z.array(RuleChainMetaDataSchema)
});
export type RuleChainData = z.infer<typeof RuleChainDataSchema>;
export { RuleChainDataSchema };
  

RuleChainMetaDataSchema = z.object({
  "ruleChainId": RuleChainIdSchema,
  "firstNodeIndex": z.number(),
  "nodes": z.array(RuleNodeSchema),
  "connections": z.array(NodeConnectionInfoSchema),
  "ruleChainConnections": z.array(RuleChainConnectionInfoSchema)
});
export type RuleChainMetaData = z.infer<typeof RuleChainMetaDataSchema>;
export { RuleChainMetaDataSchema };
  

RuleNodeSchema = z.object({
  "externalId": RuleNodeIdSchema,
  "id": RuleNodeIdSchema,
  "createdTime": z.number(),
  "ruleChainId": RuleChainIdSchema,
  "type": z.string(),
  "name": z.string(),
  "debugMode": z.boolean(),
  "singletonMode": z.boolean(),
  "configurationVersion": z.number(),
  "configuration": JsonNodeSchema,
  "additionalInfo": JsonNodeSchema
});
export type RuleNode = z.infer<typeof RuleNodeSchema>;
export { RuleNodeSchema };
  

RuleChainConnectionInfoSchema = z.object({
  "fromIndex": z.number(),
  "targetRuleChainId": RuleChainIdSchema,
  "additionalInfo": JsonNodeSchema,
  "type": z.string()
});
export type RuleChainConnectionInfo = z.infer<typeof RuleChainConnectionInfoSchema>;
export { RuleChainConnectionInfoSchema };
  

RpcSchema = z.object({
  "id": RpcIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "deviceId": DeviceIdSchema,
  "expirationTime": z.number(),
  "request": JsonNodeSchema,
  "response": JsonNodeSchema,
  "status": z.enum(["DELETED", "DELIVERED", "EXPIRED", "FAILED", "QUEUED", "SENT", "SUCCESSFUL", "TIMEOUT"]),
  "additionalInfo": JsonNodeSchema
});
export type Rpc = z.infer<typeof RpcSchema>;
export { RpcSchema };
  

RpcIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["RPC"])
});
export type RpcId = z.infer<typeof RpcIdSchema>;
export { RpcIdSchema };
  

ResponseEntitySchema = z.object({
  "body": z.object({}),
  "statusCode": z.enum(["ACCEPTED", "ALREADY_REPORTED", "BAD_GATEWAY", "BAD_REQUEST", "BANDWIDTH_LIMIT_EXCEEDED", "CHECKPOINT", "CONFLICT", "CONTINUE", "CREATED", "DESTINATION_LOCKED", "EXPECTATION_FAILED", "FAILED_DEPENDENCY", "FORBIDDEN", "FOUND", "GATEWAY_TIMEOUT", "GONE", "HTTP_VERSION_NOT_SUPPORTED", "IM_USED", "INSUFFICIENT_SPACE_ON_RESOURCE", "INSUFFICIENT_STORAGE", "INTERNAL_SERVER_ERROR", "I_AM_A_TEAPOT", "LENGTH_REQUIRED", "LOCKED", "LOOP_DETECTED", "METHOD_FAILURE", "METHOD_NOT_ALLOWED", "MOVED_PERMANENTLY", "MOVED_TEMPORARILY", "MULTIPLE_CHOICES", "MULTI_STATUS", "NETWORK_AUTHENTICATION_REQUIRED", "NON_AUTHORITATIVE_INFORMATION", "NOT_ACCEPTABLE", "NOT_EXTENDED", "NOT_FOUND", "NOT_IMPLEMENTED", "NOT_MODIFIED", "NO_CONTENT", "OK", "PARTIAL_CONTENT", "PAYLOAD_TOO_LARGE", "PAYMENT_REQUIRED", "PERMANENT_REDIRECT", "PRECONDITION_FAILED", "PRECONDITION_REQUIRED", "PROCESSING", "PROXY_AUTHENTICATION_REQUIRED", "REQUESTED_RANGE_NOT_SATISFIABLE", "REQUEST_ENTITY_TOO_LARGE", "REQUEST_HEADER_FIELDS_TOO_LARGE", "REQUEST_TIMEOUT", "REQUEST_URI_TOO_LONG", "RESET_CONTENT", "SEE_OTHER", "SERVICE_UNAVAILABLE", "SWITCHING_PROTOCOLS", "TEMPORARY_REDIRECT", "TOO_EARLY", "TOO_MANY_REQUESTS", "UNAUTHORIZED", "UNAVAILABLE_FOR_LEGAL_REASONS", "UNPROCESSABLE_ENTITY", "UNSUPPORTED_MEDIA_TYPE", "UPGRADE_REQUIRED", "URI_TOO_LONG", "USE_PROXY", "VARIANT_ALSO_NEGOTIATES"]),
  "statusCodeValue": z.number()
});
export type ResponseEntity = z.infer<typeof ResponseEntitySchema>;
export { ResponseEntitySchema };
  

ResourceSchema = z.object({
  "description": z.string(),
  "file": z.string(),
  "filename": z.string(),
  "inputStream": InputStreamSchema,
  "open": z.boolean(),
  "readable": z.boolean(),
  "uri": z.string(),
  "url": z.string()
});
export type Resource = z.infer<typeof ResourceSchema>;
export { ResourceSchema };
  

ResetPasswordRequestSchema = z.object({
  "resetToken": z.string(),
  "password": z.string()
});
export type ResetPasswordRequest = z.infer<typeof ResetPasswordRequestSchema>;
export { ResetPasswordRequestSchema };
  

ResetPasswordEmailRequestSchema = z.object({
  "email": z.string()
});
export type ResetPasswordEmailRequest = z.infer<typeof ResetPasswordEmailRequestSchema>;
export { ResetPasswordEmailRequestSchema };
  

RepositorySettingsInfoSchema = z.object({
  "configured": z.boolean(),
  "readOnly": z.boolean()
});
export type RepositorySettingsInfo = z.infer<typeof RepositorySettingsInfoSchema>;
export { RepositorySettingsInfoSchema };
  

RepositorySettingsSchema = z.object({
  "authMethod": z.enum(["PRIVATE_KEY", "USERNAME_PASSWORD"]),
  "defaultBranch": z.string(),
  "password": z.string(),
  "privateKey": z.string(),
  "privateKeyFileName": z.string(),
  "privateKeyPassword": z.string(),
  "readOnly": z.boolean(),
  "repositoryUri": z.string(),
  "showMergeCommits": z.boolean(),
  "username": z.string()
});
export type RepositorySettings = z.infer<typeof RepositorySettingsSchema>;
export { RepositorySettingsSchema };
  

ReportConfigSchema = z.object({
  "baseUrl": z.string(),
  "dashboardId": z.string(),
  "namePattern": z.string(),
  "state": z.string(),
  "timewindow": JsonNodeSchema,
  "timezone": z.string(),
  "type": z.string(),
  "useCurrentUserCredentials": z.boolean(),
  "useDashboardTimewindow": z.boolean(),
  "userId": z.string()
});
export type ReportConfig = z.infer<typeof ReportConfigSchema>;
export { ReportConfigSchema };
  

RepeatingAlarmConditionSpecSchema = z.lazy(() => z.object({}));
export type RepeatingAlarmConditionSpec = z.infer<typeof RepeatingAlarmConditionSpecSchema>;
export { RepeatingAlarmConditionSpecSchema };
  

RelationsQueryFilterSchema = z.lazy(() => z.object({}));
export type RelationsQueryFilter = z.infer<typeof RelationsQueryFilterSchema>;
export { RelationsQueryFilterSchema };
  

RawDataEventFilterSchema = z.lazy(() => z.object({}));
export type RawDataEventFilter = z.infer<typeof RawDataEventFilterSchema>;
export { RawDataEventFilterSchema };
  

RateLimitsNotificationRuleTriggerConfigSchema = z.object({
  "apis": z.array(z.enum(["CASSANDRA_QUERIES", "ENTITY_EXPORT", "ENTITY_IMPORT", "INTEGRATION_MSGS_PER_DEVICE", "INTEGRATION_MSGS_PER_TENANT", "NOTIFICATION_REQUESTS", "NOTIFICATION_REQUESTS_PER_RULE", "PASSWORD_RESET", "REPORTS", "REST_REQUESTS_PER_CUSTOMER", "REST_REQUESTS_PER_TENANT", "TRANSPORT_MESSAGES_PER_DEVICE", "TRANSPORT_MESSAGES_PER_TENANT", "TWO_FA_VERIFICATION_CODE_CHECK", "TWO_FA_VERIFICATION_CODE_SEND", "WS_UPDATES_PER_SESSION"])),
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
export type RateLimitsNotificationRuleTriggerConfig = z.infer<typeof RateLimitsNotificationRuleTriggerConfigSchema>;
export { RateLimitsNotificationRuleTriggerConfigSchema };
  

RPKLwM2MBootstrapServerCredentialSchema = z.object({
  "shortServerId": z.number(),
  "bootstrapServerIs": z.boolean(),
  "host": z.string(),
  "port": z.number(),
  "clientHoldOffTime": z.number(),
  "serverPublicKey": z.string(),
  "serverCertificate": z.string(),
  "bootstrapServerAccountTimeout": z.number(),
  "lifetime": z.number(),
  "defaultMinPeriod": z.number(),
  "notifIfDisabled": z.boolean(),
  "binding": z.string()
});
export type RPKLwM2MBootstrapServerCredential = z.infer<typeof RPKLwM2MBootstrapServerCredentialSchema>;
export { RPKLwM2MBootstrapServerCredentialSchema };
  

ProtoTransportPayloadConfigurationSchema = z.lazy(() => z.object({}));
export type ProtoTransportPayloadConfiguration = z.infer<typeof ProtoTransportPayloadConfigurationSchema>;
export { ProtoTransportPayloadConfigurationSchema };
  

PowerSavingConfigurationSchema = z.object({
  "edrxCycle": z.number(),
  "pagingTransmissionWindow": z.number(),
  "powerMode": z.enum(["DRX", "E_DRX", "PSM"]),
  "psmActivityTimer": z.number()
});
export type PowerSavingConfiguration = z.infer<typeof PowerSavingConfigurationSchema>;
export { PowerSavingConfigurationSchema };
  

PlatformUsersNotificationTargetConfigSchema = z.lazy(() => z.object({}));
export type PlatformUsersNotificationTargetConfig = z.infer<typeof PlatformUsersNotificationTargetConfigSchema>;
export { PlatformUsersNotificationTargetConfigSchema };
  

PlatformTwoFaSettingsSchema = z.object({
  "maxVerificationFailuresBeforeUserLockout": z.number(),
  "minVerificationCodeSendPeriod": z.number(),
  "providers": z.array(TwoFaProviderConfigSchema),
  "totalAllowedTimeForVerification": z.number(),
  "useSystemTwoFactorAuthSettings": z.boolean(),
  "verificationCodeCheckRateLimit": z.string()
});
export type PlatformTwoFaSettings = z.infer<typeof PlatformTwoFaSettingsSchema>;
export { PlatformTwoFaSettingsSchema };
  

TwoFaProviderConfigSchema = z.object({});
export type TwoFaProviderConfig = z.infer<typeof TwoFaProviderConfigSchema>;
export { TwoFaProviderConfigSchema };
  

PageData_Of_WidgetsBundleSchema = z.object({
  "data": z.array(WidgetsBundleSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_WidgetsBundle = z.infer<typeof PageData_Of_WidgetsBundleSchema>;
export { PageData_Of_WidgetsBundleSchema };
  

WidgetsBundleSchema = z.object({
  "id": WidgetsBundleIdSchema,
  "createdTime": z.number(),
  "name": z.string(),
  "tenantId": TenantIdSchema,
  "alias": z.string(),
  "title": z.string(),
  "image": z.string(),
  "description": z.string(),
  "order": z.number()
});
export type WidgetsBundle = z.infer<typeof WidgetsBundleSchema>;
export { WidgetsBundleSchema };
  

WidgetsBundleIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["WIDGETS_BUNDLE"])
});
export type WidgetsBundleId = z.infer<typeof WidgetsBundleIdSchema>;
export { WidgetsBundleIdSchema };
  

PageData_Of_WidgetTypeInfoSchema = z.object({
  "data": z.array(WidgetTypeInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_WidgetTypeInfo = z.infer<typeof PageData_Of_WidgetTypeInfoSchema>;
export { PageData_Of_WidgetTypeInfoSchema };
  

WidgetTypeInfoSchema = z.object({
  "id": WidgetTypeIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "fqn": z.string(),
  "name": z.string(),
  "deprecated": z.boolean(),
  "image": z.string(),
  "description": z.string(),
  "tags": z.array(z.string()),
  "widgetType": z.string()
});
export type WidgetTypeInfo = z.infer<typeof WidgetTypeInfoSchema>;
export { WidgetTypeInfoSchema };
  

WidgetTypeIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["WIDGET_TYPE"])
});
export type WidgetTypeId = z.infer<typeof WidgetTypeIdSchema>;
export { WidgetTypeIdSchema };
  

PageData_Of_UserSchema = z.object({
  "data": z.array(UserSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_User = z.infer<typeof PageData_Of_UserSchema>;
export { PageData_Of_UserSchema };
  

UserSchema = z.object({
  "id": UserIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "email": z.string(),
  "name": z.string(),
  "authority": z.enum(["CUSTOMER_USER", "PRE_VERIFICATION_TOKEN", "REFRESH_TOKEN", "SYS_ADMIN", "TENANT_ADMIN"]),
  "firstName": z.string(),
  "lastName": z.string(),
  "phone": z.string(),
  "additionalInfo": JsonNodeSchema,
  "ownerId": EntityIdSchema
});
export type User = z.infer<typeof UserSchema>;
export { UserSchema };
  

PageData_Of_UserInfoSchema = z.object({
  "data": z.array(UserInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_UserInfo = z.infer<typeof PageData_Of_UserInfoSchema>;
export { PageData_Of_UserInfoSchema };
  

UserInfoSchema = z.object({
  "id": UserIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "email": z.string(),
  "name": z.string(),
  "authority": z.enum(["CUSTOMER_USER", "PRE_VERIFICATION_TOKEN", "REFRESH_TOKEN", "SYS_ADMIN", "TENANT_ADMIN"]),
  "firstName": z.string(),
  "lastName": z.string(),
  "phone": z.string(),
  "additionalInfo": JsonNodeSchema,
  "ownerId": EntityIdSchema,
  "ownerName": z.string(),
  "groups": z.array(EntityInfoSchema)
});
export type UserInfo = z.infer<typeof UserInfoSchema>;
export { UserInfoSchema };
  

PageData_Of_UserEmailInfoSchema = z.object({
  "data": z.array(UserEmailInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_UserEmailInfo = z.infer<typeof PageData_Of_UserEmailInfoSchema>;
export { PageData_Of_UserEmailInfoSchema };
  

UserEmailInfoSchema = z.object({
  "id": UserIdSchema,
  "email": z.string(),
  "firstName": z.string(),
  "lastName": z.string()
});
export type UserEmailInfo = z.infer<typeof UserEmailInfoSchema>;
export { UserEmailInfoSchema };
  

PageData_Of_TenantSchema = z.object({
  "data": z.array(TenantSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_Tenant = z.infer<typeof PageData_Of_TenantSchema>;
export { PageData_Of_TenantSchema };
  

TenantSchema = z.object({
  "id": TenantIdSchema,
  "createdTime": z.number(),
  "title": z.string(),
  "name": z.string(),
  "region": z.string(),
  "tenantProfileId": TenantProfileIdSchema,
  "country": z.string(),
  "state": z.string(),
  "city": z.string(),
  "address": z.string(),
  "address2": z.string(),
  "zip": z.string(),
  "phone": z.string(),
  "email": z.string(),
  "additionalInfo": JsonNodeSchema
});
export type Tenant = z.infer<typeof TenantSchema>;
export { TenantSchema };
  

PageData_Of_TenantProfileSchema = z.object({
  "data": z.array(TenantProfileSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_TenantProfile = z.infer<typeof PageData_Of_TenantProfileSchema>;
export { PageData_Of_TenantProfileSchema };
  

TenantProfileSchema = z.object({
  "default": z.boolean(),
  "id": TenantProfileIdSchema,
  "createdTime": z.number(),
  "name": z.string(),
  "description": z.string(),
  "isolatedTbRuleEngine": z.boolean(),
  "profileData": TenantProfileDataSchema
});
export type TenantProfile = z.infer<typeof TenantProfileSchema>;
export { TenantProfileSchema };
  

TenantProfileDataSchema = z.object({
  "configuration": TenantProfileConfigurationSchema,
  "queueConfiguration": z.array(TenantProfileQueueConfigurationSchema)
});
export type TenantProfileData = z.infer<typeof TenantProfileDataSchema>;
export { TenantProfileDataSchema };
  

TenantProfileQueueConfigurationSchema = z.object({
  "additionalInfo": JsonNodeSchema,
  "consumerPerPartition": z.boolean(),
  "name": z.string(),
  "packProcessingTimeout": z.number(),
  "partitions": z.number(),
  "pollInterval": z.number(),
  "processingStrategy": ProcessingStrategySchema,
  "submitStrategy": SubmitStrategySchema,
  "topic": z.string()
});
export type TenantProfileQueueConfiguration = z.infer<typeof TenantProfileQueueConfigurationSchema>;
export { TenantProfileQueueConfigurationSchema };
  

TenantProfileConfigurationSchema = z.object({});
export type TenantProfileConfiguration = z.infer<typeof TenantProfileConfigurationSchema>;
export { TenantProfileConfigurationSchema };
  

PageData_Of_TenantInfoSchema = z.object({
  "data": z.array(TenantInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_TenantInfo = z.infer<typeof PageData_Of_TenantInfoSchema>;
export { PageData_Of_TenantInfoSchema };
  

TenantInfoSchema = z.object({
  "id": TenantIdSchema,
  "createdTime": z.number(),
  "title": z.string(),
  "name": z.string(),
  "region": z.string(),
  "tenantProfileId": TenantProfileIdSchema,
  "country": z.string(),
  "state": z.string(),
  "city": z.string(),
  "address": z.string(),
  "address2": z.string(),
  "zip": z.string(),
  "phone": z.string(),
  "email": z.string(),
  "additionalInfo": JsonNodeSchema,
  "tenantProfileName": z.string()
});
export type TenantInfo = z.infer<typeof TenantInfoSchema>;
export { TenantInfoSchema };
  

TenantProfileIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["TENANT_PROFILE"])
});
export type TenantProfileId = z.infer<typeof TenantProfileIdSchema>;
export { TenantProfileIdSchema };
  

PageData_Of_TbResourceInfoSchema = z.object({
  "data": z.array(TbResourceInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_TbResourceInfo = z.infer<typeof PageData_Of_TbResourceInfoSchema>;
export { PageData_Of_TbResourceInfoSchema };
  

TbResourceInfoSchema = z.object({
  "descriptor": JsonNodeSchema,
  "link": z.string(),
  "name": z.string(),
  "public": z.boolean(),
  "publicLink": z.string(),
  "publicResourceKey": z.string(),
  "id": TbResourceIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "title": z.string(),
  "resourceType": z.enum(["IMAGE", "JKS", "JS_MODULE", "LWM2M_MODEL", "PKCS_12"]),
  "resourceKey": z.string(),
  "etag": z.string(),
  "fileName": z.string()
});
export type TbResourceInfo = z.infer<typeof TbResourceInfoSchema>;
export { TbResourceInfoSchema };
  

TbResourceIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["TB_RESOURCE"])
});
export type TbResourceId = z.infer<typeof TbResourceIdSchema>;
export { TbResourceIdSchema };
  

PageData_Of_ShortEntityViewSchema = z.object({
  "data": z.array(ShortEntityViewSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_ShortEntityView = z.infer<typeof PageData_Of_ShortEntityViewSchema>;
export { PageData_Of_ShortEntityViewSchema };
  

ShortEntityViewSchema = z.object({
  "id": EntityIdSchema,
  "name": z.string()
});
export type ShortEntityView = z.infer<typeof ShortEntityViewSchema>;
export { ShortEntityViewSchema };
  

PageData_Of_SchedulerEventInfoSchema = z.object({
  "data": z.array(SchedulerEventInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_SchedulerEventInfo = z.infer<typeof PageData_Of_SchedulerEventInfoSchema>;
export { PageData_Of_SchedulerEventInfoSchema };
  

SchedulerEventInfoSchema = z.object({
  "id": SchedulerEventIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "originatorId": EntityIdSchema,
  "ownerId": EntityIdSchema,
  "name": z.string(),
  "type": z.string(),
  "schedule": JsonNodeSchema,
  "additionalInfo": JsonNodeSchema
});
export type SchedulerEventInfo = z.infer<typeof SchedulerEventInfoSchema>;
export { SchedulerEventInfoSchema };
  

SchedulerEventIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["SCHEDULER_EVENT"])
});
export type SchedulerEventId = z.infer<typeof SchedulerEventIdSchema>;
export { SchedulerEventIdSchema };
  

PageData_Of_RuleChainSchema = z.object({
  "data": z.array(RuleChainSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_RuleChain = z.infer<typeof PageData_Of_RuleChainSchema>;
export { PageData_Of_RuleChainSchema };
  

RuleChainSchema = z.object({
  "additionalInfo": JsonNodeSchema,
  "id": RuleChainIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "name": z.string(),
  "type": z.enum(["CORE", "EDGE"]),
  "firstRuleNodeId": RuleNodeIdSchema,
  "root": z.boolean(),
  "debugMode": z.boolean(),
  "configuration": JsonNodeSchema
});
export type RuleChain = z.infer<typeof RuleChainSchema>;
export { RuleChainSchema };
  

RuleNodeIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["RULE_NODE"])
});
export type RuleNodeId = z.infer<typeof RuleNodeIdSchema>;
export { RuleNodeIdSchema };
  

PageData_Of_RoleSchema = z.object({
  "data": z.array(RoleSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_Role = z.infer<typeof PageData_Of_RoleSchema>;
export { PageData_Of_RoleSchema };
  

PageData_Of_QueueSchema = z.object({
  "data": z.array(QueueSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_Queue = z.infer<typeof PageData_Of_QueueSchema>;
export { PageData_Of_QueueSchema };
  

QueueSchema = z.object({
  "additionalInfo": JsonNodeSchema,
  "consumerPerPartition": z.boolean(),
  "createdTime": z.number(),
  "id": QueueIdSchema,
  "name": z.string(),
  "packProcessingTimeout": z.number(),
  "partitions": z.number(),
  "pollInterval": z.number(),
  "processingStrategy": ProcessingStrategySchema,
  "submitStrategy": SubmitStrategySchema,
  "tenantId": TenantIdSchema,
  "topic": z.string()
});
export type Queue = z.infer<typeof QueueSchema>;
export { QueueSchema };
  

SubmitStrategySchema = z.object({
  "batchSize": z.number(),
  "type": z.enum(["BATCH", "BURST", "SEQUENTIAL", "SEQUENTIAL_BY_ORIGINATOR", "SEQUENTIAL_BY_TENANT"])
});
export type SubmitStrategy = z.infer<typeof SubmitStrategySchema>;
export { SubmitStrategySchema };
  

ProcessingStrategySchema = z.object({
  "failurePercentage": z.number(),
  "maxPauseBetweenRetries": z.number(),
  "pauseBetweenRetries": z.number(),
  "retries": z.number(),
  "type": z.enum(["RETRY_ALL", "RETRY_FAILED", "RETRY_FAILED_AND_TIMED_OUT", "RETRY_TIMED_OUT", "SKIP_ALL_FAILURES", "SKIP_ALL_FAILURES_AND_TIMED_OUT"])
});
export type ProcessingStrategy = z.infer<typeof ProcessingStrategySchema>;
export { ProcessingStrategySchema };
  

QueueIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["QUEUE"])
});
export type QueueId = z.infer<typeof QueueIdSchema>;
export { QueueIdSchema };
  

PageData_Of_OtaPackageInfoSchema = z.object({
  "data": z.array(OtaPackageInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_OtaPackageInfo = z.infer<typeof PageData_Of_OtaPackageInfoSchema>;
export { PageData_Of_OtaPackageInfoSchema };
  

PageData_Of_NotificationSchema = z.object({
  "data": z.array(NotificationSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_Notification = z.infer<typeof PageData_Of_NotificationSchema>;
export { PageData_Of_NotificationSchema };
  

PageData_Of_NotificationTemplateSchema = z.object({
  "data": z.array(NotificationTemplateSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_NotificationTemplate = z.infer<typeof PageData_Of_NotificationTemplateSchema>;
export { PageData_Of_NotificationTemplateSchema };
  

PageData_Of_NotificationTargetSchema = z.object({
  "data": z.array(NotificationTargetSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_NotificationTarget = z.infer<typeof PageData_Of_NotificationTargetSchema>;
export { PageData_Of_NotificationTargetSchema };
  

PageData_Of_NotificationRuleInfoSchema = z.object({
  "data": z.array(NotificationRuleInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_NotificationRuleInfo = z.infer<typeof PageData_Of_NotificationRuleInfoSchema>;
export { PageData_Of_NotificationRuleInfoSchema };
  

PageData_Of_NotificationRequestInfoSchema = z.object({
  "data": z.array(NotificationRequestInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_NotificationRequestInfo = z.infer<typeof PageData_Of_NotificationRequestInfoSchema>;
export { PageData_Of_NotificationRequestInfoSchema };
  

PageData_Of_IntegrationSchema = z.object({
  "data": z.array(IntegrationSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_Integration = z.infer<typeof PageData_Of_IntegrationSchema>;
export { PageData_Of_IntegrationSchema };
  

PageData_Of_IntegrationInfoSchema = z.object({
  "data": z.array(IntegrationInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_IntegrationInfo = z.infer<typeof PageData_Of_IntegrationInfoSchema>;
export { PageData_Of_IntegrationInfoSchema };
  

PageData_Of_EventInfoSchema = z.object({
  "data": z.array(EventInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_EventInfo = z.infer<typeof PageData_Of_EventInfoSchema>;
export { PageData_Of_EventInfoSchema };
  

PageData_Of_EntityViewSchema = z.object({
  "data": z.array(EntityViewSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_EntityView = z.infer<typeof PageData_Of_EntityViewSchema>;
export { PageData_Of_EntityViewSchema };
  

PageData_Of_EntityViewInfoSchema = z.object({
  "data": z.array(EntityViewInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_EntityViewInfo = z.infer<typeof PageData_Of_EntityViewInfoSchema>;
export { PageData_Of_EntityViewInfoSchema };
  

PageData_Of_EntityVersionSchema = z.object({
  "data": z.array(EntityVersionSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_EntityVersion = z.infer<typeof PageData_Of_EntityVersionSchema>;
export { PageData_Of_EntityVersionSchema };
  

PageData_Of_EntitySubtypeSchema = z.object({
  "data": z.array(EntitySubtypeSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_EntitySubtype = z.infer<typeof PageData_Of_EntitySubtypeSchema>;
export { PageData_Of_EntitySubtypeSchema };
  

PageData_Of_EntityInfoSchema = z.object({
  "data": z.array(EntityInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_EntityInfo = z.infer<typeof PageData_Of_EntityInfoSchema>;
export { PageData_Of_EntityInfoSchema };
  

PageData_Of_EntityGroupInfoSchema = z.object({
  "data": z.array(EntityGroupInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_EntityGroupInfo = z.infer<typeof PageData_Of_EntityGroupInfoSchema>;
export { PageData_Of_EntityGroupInfoSchema };
  

PageData_Of_EntityDataSchema = z.object({
  "data": z.array(EntityDataSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_EntityData = z.infer<typeof PageData_Of_EntityDataSchema>;
export { PageData_Of_EntityDataSchema };
  

PageData_Of_EdgeSchema = z.object({
  "data": z.array(EdgeSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_Edge = z.infer<typeof PageData_Of_EdgeSchema>;
export { PageData_Of_EdgeSchema };
  

PageData_Of_EdgeInfoSchema = z.object({
  "data": z.array(EdgeInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_EdgeInfo = z.infer<typeof PageData_Of_EdgeInfoSchema>;
export { PageData_Of_EdgeInfoSchema };
  

PageData_Of_EdgeEventSchema = z.object({
  "data": z.array(EdgeEventSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_EdgeEvent = z.infer<typeof PageData_Of_EdgeEventSchema>;
export { PageData_Of_EdgeEventSchema };
  

PageData_Of_DeviceSchema = z.object({
  "data": z.array(DeviceSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_Device = z.infer<typeof PageData_Of_DeviceSchema>;
export { PageData_Of_DeviceSchema };
  

PageData_Of_DeviceProfileSchema = z.object({
  "data": z.array(DeviceProfileSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_DeviceProfile = z.infer<typeof PageData_Of_DeviceProfileSchema>;
export { PageData_Of_DeviceProfileSchema };
  

PageData_Of_DeviceProfileInfoSchema = z.object({
  "data": z.array(DeviceProfileInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_DeviceProfileInfo = z.infer<typeof PageData_Of_DeviceProfileInfoSchema>;
export { PageData_Of_DeviceProfileInfoSchema };
  

PageData_Of_DeviceInfoSchema = z.object({
  "data": z.array(DeviceInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_DeviceInfo = z.infer<typeof PageData_Of_DeviceInfoSchema>;
export { PageData_Of_DeviceInfoSchema };
  

PageData_Of_DashboardInfoSchema = z.object({
  "data": z.array(DashboardInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_DashboardInfo = z.infer<typeof PageData_Of_DashboardInfoSchema>;
export { PageData_Of_DashboardInfoSchema };
  

PageData_Of_CustomerSchema = z.object({
  "data": z.array(CustomerSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_Customer = z.infer<typeof PageData_Of_CustomerSchema>;
export { PageData_Of_CustomerSchema };
  

PageData_Of_CustomerInfoSchema = z.object({
  "data": z.array(CustomerInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_CustomerInfo = z.infer<typeof PageData_Of_CustomerInfoSchema>;
export { PageData_Of_CustomerInfoSchema };
  

PageData_Of_ConverterSchema = z.object({
  "data": z.array(ConverterSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_Converter = z.infer<typeof PageData_Of_ConverterSchema>;
export { PageData_Of_ConverterSchema };
  

PageData_Of_ContactBased_Of_objectSchema = z.object({
  "data": z.array(ContactBased_Of_objectSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_ContactBased_Of_object = z.infer<typeof PageData_Of_ContactBased_Of_objectSchema>;
export { PageData_Of_ContactBased_Of_objectSchema };
  

PageData_Of_BlobEntityWithCustomerInfoSchema = z.object({
  "data": z.array(BlobEntityWithCustomerInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_BlobEntityWithCustomerInfo = z.infer<typeof PageData_Of_BlobEntityWithCustomerInfoSchema>;
export { PageData_Of_BlobEntityWithCustomerInfoSchema };
  

PageData_Of_AuditLogSchema = z.object({
  "data": z.array(AuditLogSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_AuditLog = z.infer<typeof PageData_Of_AuditLogSchema>;
export { PageData_Of_AuditLogSchema };
  

PageData_Of_AssetSchema = z.object({
  "data": z.array(AssetSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_Asset = z.infer<typeof PageData_Of_AssetSchema>;
export { PageData_Of_AssetSchema };
  

PageData_Of_AssetProfileSchema = z.object({
  "data": z.array(AssetProfileSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_AssetProfile = z.infer<typeof PageData_Of_AssetProfileSchema>;
export { PageData_Of_AssetProfileSchema };
  

PageData_Of_AssetProfileInfoSchema = z.object({
  "data": z.array(AssetProfileInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_AssetProfileInfo = z.infer<typeof PageData_Of_AssetProfileInfoSchema>;
export { PageData_Of_AssetProfileInfoSchema };
  

PageData_Of_AssetInfoSchema = z.object({
  "data": z.array(AssetInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_AssetInfo = z.infer<typeof PageData_Of_AssetInfoSchema>;
export { PageData_Of_AssetInfoSchema };
  

PageData_Of_AlarmInfoSchema = z.object({
  "data": z.array(AlarmInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_AlarmInfo = z.infer<typeof PageData_Of_AlarmInfoSchema>;
export { PageData_Of_AlarmInfoSchema };
  

PageData_Of_AlarmDataSchema = z.object({
  "data": z.array(AlarmDataSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_AlarmData = z.infer<typeof PageData_Of_AlarmDataSchema>;
export { PageData_Of_AlarmDataSchema };
  

PageData_Of_AlarmCommentInfoSchema = z.object({
  "data": z.array(AlarmCommentInfoSchema),
  "totalPages": z.number(),
  "totalElements": z.number(),
  "hasNext": z.boolean()
});
export type PageData_Of_AlarmCommentInfo = z.infer<typeof PageData_Of_AlarmCommentInfoSchema>;
export { PageData_Of_AlarmCommentInfoSchema };
  

PSKLwM2MBootstrapServerCredentialSchema = z.lazy(() => z.object({}));
export type PSKLwM2MBootstrapServerCredential = z.infer<typeof PSKLwM2MBootstrapServerCredentialSchema>;
export { PSKLwM2MBootstrapServerCredentialSchema };
  

OtherConfigurationSchema = z.object({
  "clientOnlyObserveAfterConnect": z.number(),
  "edrxCycle": z.number(),
  "fwUpdateResource": z.string(),
  "fwUpdateStrategy": z.number(),
  "pagingTransmissionWindow": z.number(),
  "powerMode": z.enum(["DRX", "E_DRX", "PSM"]),
  "psmActivityTimer": z.number(),
  "swUpdateResource": z.string(),
  "swUpdateStrategy": z.number()
});
export type OtherConfiguration = z.infer<typeof OtherConfigurationSchema>;
export { OtherConfigurationSchema };
  

OtaPackageInfoSchema = z.object({
  "id": OtaPackageIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "deviceProfileId": DeviceProfileIdSchema,
  "type": z.enum(["FIRMWARE", "SOFTWARE"]),
  "title": z.string(),
  "version": z.string(),
  "tag": z.string(),
  "url": z.string(),
  "hasData": z.boolean(),
  "fileName": z.string(),
  "contentType": z.string(),
  "checksumAlgorithm": z.enum(["CRC32", "MD5", "MURMUR3_128", "MURMUR3_32", "SHA256", "SHA384", "SHA512"]),
  "checksum": z.string(),
  "dataSize": z.number(),
  "additionalInfo": JsonNodeSchema
});
export type OtaPackageInfo = z.infer<typeof OtaPackageInfoSchema>;
export { OtaPackageInfoSchema };
  

OtaPackageSchema = z.object({
  "id": OtaPackageIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "deviceProfileId": DeviceProfileIdSchema,
  "type": z.enum(["FIRMWARE", "SOFTWARE"]),
  "title": z.string(),
  "version": z.string(),
  "tag": z.string(),
  "url": z.string(),
  "hasData": z.boolean(),
  "fileName": z.string(),
  "contentType": z.string(),
  "checksumAlgorithm": z.enum(["CRC32", "MD5", "MURMUR3_128", "MURMUR3_32", "SHA256", "SHA384", "SHA512"]),
  "checksum": z.string(),
  "dataSize": z.number(),
  "data": ByteBufferSchema,
  "additionalInfo": JsonNodeSchema
});
export type OtaPackage = z.infer<typeof OtaPackageSchema>;
export { OtaPackageSchema };
  

OriginatorEntityOwnerUsersFilterSchema = z.object({});
export type OriginatorEntityOwnerUsersFilter = z.infer<typeof OriginatorEntityOwnerUsersFilterSchema>;
export { OriginatorEntityOwnerUsersFilterSchema };
  

ObjectAttributesSchema = z.object({
  "dim": z.number(),
  "gt": z.number(),
  "lt": z.number(),
  "pmax": z.number(),
  "pmin": z.number(),
  "st": z.number(),
  "ver": z.string()
});
export type ObjectAttributes = z.infer<typeof ObjectAttributesSchema>;
export { ObjectAttributesSchema };
  

OAuth2InfoSchema = z.object({
  "enabled": z.boolean(),
  "oauth2ParamsInfos": z.array(OAuth2ParamsInfoSchema)
});
export type OAuth2Info = z.infer<typeof OAuth2InfoSchema>;
export { OAuth2InfoSchema };
  

OAuth2ParamsInfoSchema = z.object({
  "clientRegistrations": z.array(OAuth2RegistrationInfoSchema),
  "domainInfos": z.array(OAuth2DomainInfoSchema),
  "mobileInfos": z.array(OAuth2MobileInfoSchema)
});
export type OAuth2ParamsInfo = z.infer<typeof OAuth2ParamsInfoSchema>;
export { OAuth2ParamsInfoSchema };
  

OAuth2MobileInfoSchema = z.object({
  "appSecret": z.string(),
  "pkgName": z.string()
});
export type OAuth2MobileInfo = z.infer<typeof OAuth2MobileInfoSchema>;
export { OAuth2MobileInfoSchema };
  

OAuth2RegistrationInfoSchema = z.object({
  "accessTokenUri": z.string(),
  "additionalInfo": JsonNodeSchema,
  "authorizationUri": z.string(),
  "clientAuthenticationMethod": z.string(),
  "clientId": z.string(),
  "clientSecret": z.string(),
  "jwkSetUri": z.string(),
  "loginButtonIcon": z.string(),
  "loginButtonLabel": z.string(),
  "mapperConfig": OAuth2MapperConfigSchema,
  "platforms": z.array(z.enum(["ANDROID", "IOS", "WEB"])),
  "scope": z.array(z.string()),
  "userInfoUri": z.string(),
  "userNameAttributeName": z.string()
});
export type OAuth2RegistrationInfo = z.infer<typeof OAuth2RegistrationInfoSchema>;
export { OAuth2RegistrationInfoSchema };
  

OAuth2DomainInfoSchema = z.object({
  "name": z.string(),
  "scheme": z.enum(["HTTP", "HTTPS", "MIXED"])
});
export type OAuth2DomainInfo = z.infer<typeof OAuth2DomainInfoSchema>;
export { OAuth2DomainInfoSchema };
  

OAuth2ClientRegistrationTemplateSchema = z.object({
  "accessTokenUri": z.string(),
  "additionalInfo": JsonNodeSchema,
  "authorizationUri": z.string(),
  "clientAuthenticationMethod": z.string(),
  "comment": z.string(),
  "createdTime": z.number(),
  "helpLink": z.string(),
  "id": OAuth2ClientRegistrationTemplateIdSchema,
  "jwkSetUri": z.string(),
  "loginButtonIcon": z.string(),
  "loginButtonLabel": z.string(),
  "mapperConfig": OAuth2MapperConfigSchema,
  "name": z.string(),
  "providerId": z.string(),
  "scope": z.array(z.string()),
  "userInfoUri": z.string(),
  "userNameAttributeName": z.string()
});
export type OAuth2ClientRegistrationTemplate = z.infer<typeof OAuth2ClientRegistrationTemplateSchema>;
export { OAuth2ClientRegistrationTemplateSchema };
  

OAuth2MapperConfigSchema = z.object({
  "activateUser": z.boolean(),
  "allowUserCreation": z.boolean(),
  "basic": OAuth2BasicMapperConfigSchema,
  "custom": OAuth2CustomMapperConfigSchema,
  "type": z.enum(["APPLE", "BASIC", "CUSTOM", "GITHUB"])
});
export type OAuth2MapperConfig = z.infer<typeof OAuth2MapperConfigSchema>;
export { OAuth2MapperConfigSchema };
  

OAuth2CustomMapperConfigSchema = z.object({
  "password": z.string(),
  "sendToken": z.boolean(),
  "url": z.string(),
  "username": z.string()
});
export type OAuth2CustomMapperConfig = z.infer<typeof OAuth2CustomMapperConfigSchema>;
export { OAuth2CustomMapperConfigSchema };
  

OAuth2ClientRegistrationTemplateIdSchema = z.object({
  "id": z.string()
});
export type OAuth2ClientRegistrationTemplateId = z.infer<typeof OAuth2ClientRegistrationTemplateIdSchema>;
export { OAuth2ClientRegistrationTemplateIdSchema };
  

OAuth2ClientInfoSchema = z.object({
  "icon": z.string(),
  "name": z.string(),
  "url": z.string()
});
export type OAuth2ClientInfo = z.infer<typeof OAuth2ClientInfoSchema>;
export { OAuth2ClientInfoSchema };
  

OAuth2BasicMapperConfigSchema = z.object({
  "alwaysFullScreen": z.boolean(),
  "customerNamePattern": z.string(),
  "defaultDashboardName": z.string(),
  "emailAttributeKey": z.string(),
  "firstNameAttributeKey": z.string(),
  "lastNameAttributeKey": z.string(),
  "parentCustomerNamePattern": z.string(),
  "tenantNamePattern": z.string(),
  "tenantNameStrategy": z.enum(["CUSTOM", "DOMAIN", "EMAIL"]),
  "userGroupsNamePattern": z.array(z.string())
});
export type OAuth2BasicMapperConfig = z.infer<typeof OAuth2BasicMapperConfigSchema>;
export { OAuth2BasicMapperConfigSchema };
  

NumericFilterPredicateSchema = z.lazy(() => z.object({}));
export type NumericFilterPredicate = z.infer<typeof NumericFilterPredicateSchema>;
export { NumericFilterPredicateSchema };
  

NotificationTargetSchema = z.object({
  "configuration": NotificationTargetConfigSchema,
  "createdTime": z.number(),
  "name": z.string(),
  "tenantId": TenantIdSchema
});
export type NotificationTarget = z.infer<typeof NotificationTargetSchema>;
export { NotificationTargetSchema };
  

NotificationTargetConfigSchema = z.object({
  "description": z.string()
});
export type NotificationTargetConfig = z.infer<typeof NotificationTargetConfigSchema>;
export { NotificationTargetConfigSchema };
  

NotificationSettingsSchema = z.object({
  "deliveryMethodsConfigs": z.record(z.string(), NotificationDeliveryMethodConfigSchema)
});
export type NotificationSettings = z.infer<typeof NotificationSettingsSchema>;
export { NotificationSettingsSchema };
  

NotificationRuleInfoSchema = z.object({
  "additionalConfig": NotificationRuleConfigSchema,
  "createdTime": z.number(),
  "deliveryMethods": z.array(z.enum(["EMAIL", "MICROSOFT_TEAMS", "SLACK", "SMS", "WEB"])),
  "enabled": z.boolean(),
  "name": z.string(),
  "recipientsConfig": NotificationRuleRecipientsConfigSchema,
  "templateId": NotificationTemplateIdSchema,
  "templateName": z.string(),
  "tenantId": TenantIdSchema,
  "triggerConfig": NotificationRuleTriggerConfigSchema,
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
export type NotificationRuleInfo = z.infer<typeof NotificationRuleInfoSchema>;
export { NotificationRuleInfoSchema };
  

NotificationRuleSchema = z.object({
  "additionalConfig": NotificationRuleConfigSchema,
  "createdTime": z.number(),
  "enabled": z.boolean(),
  "name": z.string(),
  "recipientsConfig": NotificationRuleRecipientsConfigSchema,
  "templateId": NotificationTemplateIdSchema,
  "tenantId": TenantIdSchema,
  "triggerConfig": NotificationRuleTriggerConfigSchema,
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
export type NotificationRule = z.infer<typeof NotificationRuleSchema>;
export { NotificationRuleSchema };
  

NotificationRuleTriggerConfigSchema = z.object({
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
export type NotificationRuleTriggerConfig = z.infer<typeof NotificationRuleTriggerConfigSchema>;
export { NotificationRuleTriggerConfigSchema };
  

NotificationRuleRecipientsConfigSchema = z.object({
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
export type NotificationRuleRecipientsConfig = z.infer<typeof NotificationRuleRecipientsConfigSchema>;
export { NotificationRuleRecipientsConfigSchema };
  

NotificationRuleConfigSchema = z.object({
  "description": z.string()
});
export type NotificationRuleConfig = z.infer<typeof NotificationRuleConfigSchema>;
export { NotificationRuleConfigSchema };
  

NotificationRequestPreviewSchema = z.object({
  "processedTemplates": z.record(z.string(), DeliveryMethodNotificationTemplateSchema),
  "recipientsCountByTarget": z.record(z.string(), z.number()),
  "recipientsPreview": z.array(z.string()),
  "totalRecipientsCount": z.number()
});
export type NotificationRequestPreview = z.infer<typeof NotificationRequestPreviewSchema>;
export { NotificationRequestPreviewSchema };
  

NotificationRequestInfoSchema = z.object({
  "additionalConfig": NotificationRequestConfigSchema,
  "createdTime": z.number(),
  "deliveryMethods": z.array(z.enum(["EMAIL", "MICROSOFT_TEAMS", "SLACK", "SMS", "WEB"])),
  "id": NotificationRequestIdSchema,
  "info": NotificationInfoSchema,
  "originatorEntityId": EntityIdSchema,
  "ruleId": NotificationRuleIdSchema,
  "stats": NotificationRequestStatsSchema,
  "status": z.enum(["PROCESSING", "SCHEDULED", "SENT"]),
  "targets": z.array(z.string()),
  "template": NotificationTemplateSchema,
  "templateId": NotificationTemplateIdSchema,
  "templateName": z.string(),
  "tenantId": TenantIdSchema
});
export type NotificationRequestInfo = z.infer<typeof NotificationRequestInfoSchema>;
export { NotificationRequestInfoSchema };
  

NotificationRequestSchema = z.object({
  "additionalConfig": NotificationRequestConfigSchema,
  "createdTime": z.number(),
  "id": NotificationRequestIdSchema,
  "info": NotificationInfoSchema,
  "originatorEntityId": EntityIdSchema,
  "ruleId": NotificationRuleIdSchema,
  "stats": NotificationRequestStatsSchema,
  "status": z.enum(["PROCESSING", "SCHEDULED", "SENT"]),
  "targets": z.array(z.string()),
  "template": NotificationTemplateSchema,
  "templateId": NotificationTemplateIdSchema,
  "tenantId": TenantIdSchema
});
export type NotificationRequest = z.infer<typeof NotificationRequestSchema>;
export { NotificationRequestSchema };
  

NotificationTemplateIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["NOTIFICATION_TEMPLATE"])
});
export type NotificationTemplateId = z.infer<typeof NotificationTemplateIdSchema>;
export { NotificationTemplateIdSchema };
  

NotificationTemplateSchema = z.object({
  "configuration": NotificationTemplateConfigSchema,
  "createdTime": z.number(),
  "name": z.string(),
  "notificationType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "GENERAL", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT", "RULE_NODE"]),
  "tenantId": TenantIdSchema
});
export type NotificationTemplate = z.infer<typeof NotificationTemplateSchema>;
export { NotificationTemplateSchema };
  

NotificationTemplateConfigSchema = z.object({
  "deliveryMethodsTemplates": z.record(z.string(), DeliveryMethodNotificationTemplateSchema)
});
export type NotificationTemplateConfig = z.infer<typeof NotificationTemplateConfigSchema>;
export { NotificationTemplateConfigSchema };
  

NotificationRequestStatsSchema = z.object({
  "error": z.string(),
  "errors": z.record(z.string(), z.object({})),
  "sent": z.record(z.string(), AtomicIntegerSchema)
});
export type NotificationRequestStats = z.infer<typeof NotificationRequestStatsSchema>;
export { NotificationRequestStatsSchema };
  

NotificationRuleIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["NOTIFICATION_RULE"])
});
export type NotificationRuleId = z.infer<typeof NotificationRuleIdSchema>;
export { NotificationRuleIdSchema };
  

NotificationRequestConfigSchema = z.object({
  "sendingDelayInSec": z.number()
});
export type NotificationRequestConfig = z.infer<typeof NotificationRequestConfigSchema>;
export { NotificationRequestConfigSchema };
  

NotificationPrefSchema = z.object({
  "enabled": z.boolean(),
  "enabledDeliveryMethods": z.record(z.string(), z.boolean())
});
export type NotificationPref = z.infer<typeof NotificationPrefSchema>;
export { NotificationPrefSchema };
  

NotificationDeliveryMethodConfigSchema = z.object({});
export type NotificationDeliveryMethodConfig = z.infer<typeof NotificationDeliveryMethodConfigSchema>;
export { NotificationDeliveryMethodConfigSchema };
  

NotificationSchema = z.object({
  "additionalConfig": JsonNodeSchema,
  "createdTime": z.number(),
  "id": NotificationIdSchema,
  "info": NotificationInfoSchema,
  "recipientId": UserIdSchema,
  "requestId": NotificationRequestIdSchema,
  "status": z.enum(["READ", "SENT"]),
  "subject": z.string(),
  "text": z.string(),
  "type": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "GENERAL", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT", "RULE_NODE"])
});
export type Notification = z.infer<typeof NotificationSchema>;
export { NotificationSchema };
  

NotificationRequestIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["NOTIFICATION_REQUEST"])
});
export type NotificationRequestId = z.infer<typeof NotificationRequestIdSchema>;
export { NotificationRequestIdSchema };
  

NotificationInfoSchema = z.object({
  "stateEntityId": EntityIdSchema
});
export type NotificationInfo = z.infer<typeof NotificationInfoSchema>;
export { NotificationInfoSchema };
  

NotificationIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["NOTIFICATION"])
});
export type NotificationId = z.infer<typeof NotificationIdSchema>;
export { NotificationIdSchema };
  

NodeConnectionInfoSchema = z.object({
  "fromIndex": z.number(),
  "toIndex": z.number(),
  "type": z.string()
});
export type NodeConnectionInfo = z.infer<typeof NodeConnectionInfoSchema>;
export { NodeConnectionInfoSchema };
  

NoSecLwM2MBootstrapServerCredentialSchema = z.object({
  "shortServerId": z.number(),
  "bootstrapServerIs": z.boolean(),
  "host": z.string(),
  "port": z.number(),
  "clientHoldOffTime": z.number(),
  "serverPublicKey": z.string(),
  "serverCertificate": z.string(),
  "bootstrapServerAccountTimeout": z.number(),
  "lifetime": z.number(),
  "defaultMinPeriod": z.number(),
  "notifIfDisabled": z.boolean(),
  "binding": z.string()
});
export type NoSecLwM2MBootstrapServerCredential = z.infer<typeof NoSecLwM2MBootstrapServerCredentialSchema>;
export { NoSecLwM2MBootstrapServerCredentialSchema };
  

NewPlatformVersionNotificationRuleTriggerConfigSchema = z.object({
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
export type NewPlatformVersionNotificationRuleTriggerConfig = z.infer<typeof NewPlatformVersionNotificationRuleTriggerConfigSchema>;
export { NewPlatformVersionNotificationRuleTriggerConfigSchema };
  

MqttDeviceTransportConfigurationSchema = z.lazy(() => z.object({}));
export type MqttDeviceTransportConfiguration = z.infer<typeof MqttDeviceTransportConfigurationSchema>;
export { MqttDeviceTransportConfigurationSchema };
  

MqttDeviceProfileTransportConfigurationSchema = z.object({
  "deviceAttributesSubscribeTopic": z.string(),
  "deviceAttributesTopic": z.string(),
  "deviceTelemetryTopic": z.string(),
  "sendAckOnValidationException": z.boolean(),
  "sparkplug": z.boolean(),
  "sparkplugAttributesMetricNames": z.array(z.string()),
  "transportPayloadTypeConfiguration": TransportPayloadTypeConfigurationSchema
});
export type MqttDeviceProfileTransportConfiguration = z.infer<typeof MqttDeviceProfileTransportConfigurationSchema>;
export { MqttDeviceProfileTransportConfigurationSchema };
  

TransportPayloadTypeConfigurationSchema = z.object({});
export type TransportPayloadTypeConfiguration = z.infer<typeof TransportPayloadTypeConfigurationSchema>;
export { TransportPayloadTypeConfigurationSchema };
  

MicrosoftTeamsNotificationTargetConfigSchema = z.lazy(() => z.object({}));
export type MicrosoftTeamsNotificationTargetConfig = z.infer<typeof MicrosoftTeamsNotificationTargetConfigSchema>;
export { MicrosoftTeamsNotificationTargetConfigSchema };
  

MicrosoftTeamsDeliveryMethodNotificationTemplateSchema = z.object({
  "body": z.string(),
  "button": ButtonSchema,
  "enabled": z.boolean(),
  "subject": z.string(),
  "themeColor": z.string()
});
export type MicrosoftTeamsDeliveryMethodNotificationTemplate = z.infer<typeof MicrosoftTeamsDeliveryMethodNotificationTemplateSchema>;
export { MicrosoftTeamsDeliveryMethodNotificationTemplateSchema };
  

Lwm2mDeviceTransportConfigurationSchema = z.lazy(() => z.object({}));
export type Lwm2mDeviceTransportConfiguration = z.infer<typeof Lwm2mDeviceTransportConfigurationSchema>;
export { Lwm2mDeviceTransportConfigurationSchema };
  

Lwm2mDeviceProfileTransportConfigurationSchema = z.lazy(() => z.object({}));
export type Lwm2mDeviceProfileTransportConfiguration = z.infer<typeof Lwm2mDeviceProfileTransportConfigurationSchema>;
export { Lwm2mDeviceProfileTransportConfigurationSchema };
  

LwM2mObjectSchema = z.object({
  "id": z.number(),
  "keyId": z.string(),
  "name": z.string(),
  "multiple": z.boolean(),
  "mandatory": z.boolean(),
  "instances": z.array(LwM2mInstanceSchema)
});
export type LwM2mObject = z.infer<typeof LwM2mObjectSchema>;
export { LwM2mObjectSchema };
  

LwM2mInstanceSchema = z.object({
  "id": z.number(),
  "resources": z.array(LwM2mResourceObserveSchema)
});
export type LwM2mInstance = z.infer<typeof LwM2mInstanceSchema>;
export { LwM2mInstanceSchema };
  

LwM2mResourceObserveSchema = z.object({
  "id": z.number(),
  "name": z.string(),
  "observe": z.boolean(),
  "attribute": z.boolean(),
  "telemetry": z.boolean(),
  "keyName": z.string()
});
export type LwM2mResourceObserve = z.infer<typeof LwM2mResourceObserveSchema>;
export { LwM2mResourceObserveSchema };
  

LwM2MBootstrapServerCredentialSchema = z.object({});
export type LwM2MBootstrapServerCredential = z.infer<typeof LwM2MBootstrapServerCredentialSchema>;
export { LwM2MBootstrapServerCredentialSchema };
  

LoginWhiteLabelingParamsSchema = z.object({
  "logoImageUrl": z.string(),
  "logoImageHeight": z.number(),
  "appTitle": z.string(),
  "favicon": FaviconSchema,
  "paletteSettings": PaletteSettingsSchema,
  "helpLinkBaseUrl": z.string(),
  "uiHelpBaseUrl": z.string(),
  "enableHelpLinks": z.boolean(),
  "whiteLabelingEnabled": z.boolean(),
  "showNameVersion": z.boolean(),
  "platformName": z.string(),
  "platformVersion": z.string(),
  "customCss": z.string(),
  "pageBackgroundColor": z.string(),
  "darkForeground": z.boolean(),
  "domainName": z.string(),
  "baseUrl": z.string(),
  "prohibitDifferentUrl": z.boolean(),
  "adminSettingsId": z.string(),
  "showNameBottom": z.boolean()
});
export type LoginWhiteLabelingParams = z.infer<typeof LoginWhiteLabelingParamsSchema>;
export { LoginWhiteLabelingParamsSchema };
  

PaletteSettingsSchema = z.object({
  "primaryPalette": PaletteSchema,
  "accentPalette": PaletteSchema
});
export type PaletteSettings = z.infer<typeof PaletteSettingsSchema>;
export { PaletteSettingsSchema };
  

PaletteSchema = z.object({
  "type": z.string(),
  "extends": z.string(),
  "colors": z.record(z.string(), z.string())
});
export type Palette = z.infer<typeof PaletteSchema>;
export { PaletteSchema };
  

LoginResponseSchema = z.object({
  "token": z.string(),
  "refreshToken": z.string()
});
export type LoginResponse = z.infer<typeof LoginResponseSchema>;
export { LoginResponseSchema };
  

LoginRequestSchema = z.object({
  "username": z.string(),
  "password": z.string()
});
export type LoginRequest = z.infer<typeof LoginRequestSchema>;
export { LoginRequestSchema };
  

LifeCycleEventFilterSchema = z.lazy(() => z.object({}));
export type LifeCycleEventFilter = z.infer<typeof LifeCycleEventFilterSchema>;
export { LifeCycleEventFilterSchema };
  

LicenseUsageInfoSchema = z.object({
  "assetsCount": z.number(),
  "dashboardsCount": z.number(),
  "development": z.boolean(),
  "devicesCount": z.number(),
  "integrationsCount": z.number(),
  "maxAssets": z.number(),
  "maxDevices": z.number(),
  "plan": z.string(),
  "whiteLabelingEnabled": z.boolean()
});
export type LicenseUsageInfo = z.infer<typeof LicenseUsageInfoSchema>;
export { LicenseUsageInfoSchema };
  

LastVisitedDashboardInfoSchema = z.object({
  "id": z.string(),
  "title": z.string(),
  "starred": z.boolean(),
  "lastVisited": z.number()
});
export type LastVisitedDashboardInfo = z.infer<typeof LastVisitedDashboardInfoSchema>;
export { LastVisitedDashboardInfoSchema };
  

JsonTransportPayloadConfigurationSchema = z.lazy(() => z.object({}));
export type JsonTransportPayloadConfiguration = z.infer<typeof JsonTransportPayloadConfigurationSchema>;
export { JsonTransportPayloadConfigurationSchema };
  

JWT_SettingsSchema = z.object({
  "tokenExpirationTime": z.number(),
  "refreshTokenExpTime": z.number(),
  "tokenIssuer": z.string(),
  "tokenSigningKey": z.string()
});
export type JWT_Settings = z.infer<typeof JWT_SettingsSchema>;
export { JWT_SettingsSchema };
  

JWT_PairSchema = z.object({
  "scope": z.enum(["CUSTOMER_USER", "PRE_VERIFICATION_TOKEN", "REFRESH_TOKEN", "SYS_ADMIN", "TENANT_ADMIN"]),
  "refreshToken": z.string(),
  "token": z.string()
});
export type JWT_Pair = z.infer<typeof JWT_PairSchema>;
export { JWT_PairSchema };
  

IntegrationLifecycleEventNotificationRuleTriggerConfigSchema = z.object({
  "integrationTypes": z.array(z.enum(["APACHE_PULSAR", "AWS_IOT", "AWS_KINESIS", "AWS_SQS", "AZURE_EVENT_HUB", "AZURE_IOT_HUB", "AZURE_SERVICE_BUS", "CHIRPSTACK", "COAP", "CUSTOM", "HTTP", "IBM_WATSON_IOT", "KAFKA", "KPN", "LORIOT", "MQTT", "OCEANCONNECT", "OPC_UA", "PARTICLE", "PUB_SUB", "RABBITMQ", "SIGFOX", "TCP", "THINGPARK", "TMOBILE_IOT_CDP", "TPE", "TTI", "TTN", "TUYA", "UDP"])),
  "integrations": z.array(z.string()),
  "notifyOn": z.array(z.enum(["ACTIVATED", "CREATED", "DEACTIVATED", "DELETED", "FAILED", "STARTED", "STOPPED", "SUSPENDED", "UPDATED"])),
  "onlyOnError": z.boolean(),
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
export type IntegrationLifecycleEventNotificationRuleTriggerConfig = z.infer<typeof IntegrationLifecycleEventNotificationRuleTriggerConfigSchema>;
export { IntegrationLifecycleEventNotificationRuleTriggerConfigSchema };
  

IntegrationInfoSchema = z.object({
  "stats": ArrayNodeSchema,
  "status": ObjectNodeSchema,
  "id": IntegrationIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "type": z.enum(["APACHE_PULSAR", "AWS_IOT", "AWS_KINESIS", "AWS_SQS", "AZURE_EVENT_HUB", "AZURE_IOT_HUB", "AZURE_SERVICE_BUS", "CHIRPSTACK", "COAP", "CUSTOM", "HTTP", "IBM_WATSON_IOT", "KAFKA", "KPN", "LORIOT", "MQTT", "OCEANCONNECT", "OPC_UA", "PARTICLE", "PUB_SUB", "RABBITMQ", "SIGFOX", "TCP", "THINGPARK", "TMOBILE_IOT_CDP", "TPE", "TTI", "TTN", "TUYA", "UDP"]),
  "debugMode": z.boolean(),
  "enabled": z.boolean(),
  "remote": z.boolean(),
  "allowCreateDevicesOrAssets": z.boolean(),
  "name": z.string(),
  "edgeTemplate": z.boolean()
});
export type IntegrationInfo = z.infer<typeof IntegrationInfoSchema>;
export { IntegrationInfoSchema };
  

ObjectNodeSchema = z.object({});
export type ObjectNode = z.infer<typeof ObjectNodeSchema>;
export { ObjectNodeSchema };
  

IntegrationSchema = z.object({
  "id": IntegrationIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "defaultConverterId": ConverterIdSchema,
  "downlinkConverterId": ConverterIdSchema,
  "routingKey": z.string(),
  "type": z.enum(["APACHE_PULSAR", "AWS_IOT", "AWS_KINESIS", "AWS_SQS", "AZURE_EVENT_HUB", "AZURE_IOT_HUB", "AZURE_SERVICE_BUS", "CHIRPSTACK", "COAP", "CUSTOM", "HTTP", "IBM_WATSON_IOT", "KAFKA", "KPN", "LORIOT", "MQTT", "OCEANCONNECT", "OPC_UA", "PARTICLE", "PUB_SUB", "RABBITMQ", "SIGFOX", "TCP", "THINGPARK", "TMOBILE_IOT_CDP", "TPE", "TTI", "TTN", "TUYA", "UDP"]),
  "debugMode": z.boolean(),
  "enabled": z.boolean(),
  "remote": z.boolean(),
  "allowCreateDevicesOrAssets": z.boolean(),
  "secret": z.string(),
  "configuration": JsonNodeSchema,
  "additionalInfo": JsonNodeSchema,
  "name": z.string(),
  "edgeTemplate": z.boolean()
});
export type Integration = z.infer<typeof IntegrationSchema>;
export { IntegrationSchema };
  

IntegrationIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["INTEGRATION"])
});
export type IntegrationId = z.infer<typeof IntegrationIdSchema>;
export { IntegrationIdSchema };
  

ImageExportDataSchema = z.object({
  "data": z.string(),
  "fileName": z.string(),
  "mediaType": z.string(),
  "public": z.boolean(),
  "publicResourceKey": z.string(),
  "resourceKey": z.string(),
  "title": z.string()
});
export type ImageExportData = z.infer<typeof ImageExportDataSchema>;
export { ImageExportDataSchema };
  

HomeDashboardInfoSchema = z.object({
  "dashboardId": DashboardIdSchema,
  "hideDashboardToolbar": z.boolean()
});
export type HomeDashboardInfo = z.infer<typeof HomeDashboardInfoSchema>;
export { HomeDashboardInfoSchema };
  

HomeDashboardSchema = z.object({
  "id": DashboardIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "ownerId": EntityIdSchema,
  "title": z.string(),
  "image": z.string(),
  "assignedCustomers": z.array(ShortCustomerInfoSchema),
  "mobileHide": z.boolean(),
  "mobileOrder": z.number(),
  "name": z.string(),
  "configuration": JsonNodeSchema,
  "hideDashboardToolbar": z.boolean()
});
export type HomeDashboard = z.infer<typeof HomeDashboardSchema>;
export { HomeDashboardSchema };
  

HasId_Of_objectSchema = z.object({
  "id": z.object({})
});
export type HasId_Of_object = z.infer<typeof HasId_Of_objectSchema>;
export { HasId_Of_objectSchema };
  

GroupPermissionInfoSchema = z.object({
  "public": z.boolean(),
  "readOnly": z.boolean(),
  "id": GroupPermissionIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "userGroupId": EntityGroupIdSchema,
  "roleId": RoleIdSchema,
  "entityGroupId": EntityGroupIdSchema,
  "entityGroupType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]),
  "name": z.string(),
  "role": RoleSchema,
  "entityGroupName": z.string(),
  "entityGroupOwnerId": EntityIdSchema,
  "entityGroupOwnerName": z.string(),
  "userGroupName": z.string(),
  "userGroupOwnerId": EntityIdSchema,
  "userGroupOwnerName": z.string()
});
export type GroupPermissionInfo = z.infer<typeof GroupPermissionInfoSchema>;
export { GroupPermissionInfoSchema };
  

RoleSchema = z.object({
  "id": RoleIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "ownerId": EntityIdSchema,
  "name": z.string(),
  "type": z.enum(["GENERIC", "GROUP"]),
  "permissions": JsonNodeSchema,
  "additionalInfo": JsonNodeSchema
});
export type Role = z.infer<typeof RoleSchema>;
export { RoleSchema };
  

GroupPermissionSchema = z.object({
  "public": z.boolean(),
  "id": GroupPermissionIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "userGroupId": EntityGroupIdSchema,
  "roleId": RoleIdSchema,
  "entityGroupId": EntityGroupIdSchema,
  "entityGroupType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]),
  "name": z.string()
});
export type GroupPermission = z.infer<typeof GroupPermissionSchema>;
export { GroupPermissionSchema };
  

RoleIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["ROLE"])
});
export type RoleId = z.infer<typeof RoleIdSchema>;
export { RoleIdSchema };
  

GroupPermissionIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["GROUP_PERMISSION"])
});
export type GroupPermissionId = z.infer<typeof GroupPermissionIdSchema>;
export { GroupPermissionIdSchema };
  

GroupEntityExportDataSchema = z.lazy(() => z.object({}));
export type GroupEntityExportData = z.infer<typeof GroupEntityExportDataSchema>;
export { GroupEntityExportDataSchema };
  

FilterPredicateValue_Of_stringSchema = z.object({
  "defaultValue": z.string(),
  "dynamicValue": DynamicValue_Of_stringSchema,
  "userValue": z.string()
});
export type FilterPredicateValue_Of_string = z.infer<typeof FilterPredicateValue_Of_stringSchema>;
export { FilterPredicateValue_Of_stringSchema };
  

FilterPredicateValue_Of_longSchema = z.object({
  "defaultValue": z.number(),
  "dynamicValue": DynamicValue_Of_longSchema,
  "userValue": z.number()
});
export type FilterPredicateValue_Of_long = z.infer<typeof FilterPredicateValue_Of_longSchema>;
export { FilterPredicateValue_Of_longSchema };
  

FilterPredicateValue_Of_intSchema = z.object({
  "defaultValue": z.number(),
  "dynamicValue": DynamicValue_Of_intSchema,
  "userValue": z.number()
});
export type FilterPredicateValue_Of_int = z.infer<typeof FilterPredicateValue_Of_intSchema>;
export { FilterPredicateValue_Of_intSchema };
  

FilterPredicateValue_Of_doubleSchema = z.object({
  "defaultValue": z.number(),
  "dynamicValue": DynamicValue_Of_doubleSchema,
  "userValue": z.number()
});
export type FilterPredicateValue_Of_double = z.infer<typeof FilterPredicateValue_Of_doubleSchema>;
export { FilterPredicateValue_Of_doubleSchema };
  

FilterPredicateValue_Of_booleanSchema = z.object({
  "defaultValue": z.boolean(),
  "dynamicValue": DynamicValue_Of_booleanSchema,
  "userValue": z.boolean()
});
export type FilterPredicateValue_Of_boolean = z.infer<typeof FilterPredicateValue_Of_booleanSchema>;
export { FilterPredicateValue_Of_booleanSchema };
  

FeaturesInfoSchema = z.object({
  "emailEnabled": z.boolean(),
  "notificationEnabled": z.boolean(),
  "oauthEnabled": z.boolean(),
  "smsEnabled": z.boolean(),
  "twoFaEnabled": z.boolean(),
  "whiteLabelingEnabled": z.boolean()
});
export type FeaturesInfo = z.infer<typeof FeaturesInfoSchema>;
export { FeaturesInfoSchema };
  

FaviconSchema = z.object({
  "url": z.string()
});
export type Favicon = z.infer<typeof FaviconSchema>;
export { FaviconSchema };
  

ExportableEntity_Of_EntityIdSchema = z.object({
  "createdTime": z.number(),
  "id": EntityIdSchema,
  "name": z.string()
});
export type ExportableEntity_Of_EntityId = z.infer<typeof ExportableEntity_Of_EntityIdSchema>;
export { ExportableEntity_Of_EntityIdSchema };
  

EventInfoSchema = z.object({
  "id": EventIdSchema,
  "tenantId": TenantIdSchema,
  "type": z.string(),
  "uid": z.string(),
  "entityId": EntityIdSchema,
  "body": JsonNodeSchema,
  "createdTime": z.number()
});
export type EventInfo = z.infer<typeof EventInfoSchema>;
export { EventInfoSchema };
  

EventIdSchema = z.object({
  "id": z.string()
});
export type EventId = z.infer<typeof EventIdSchema>;
export { EventIdSchema };
  

EventFilterSchema = z.object({
  "notEmpty": z.boolean(),
  "eventType": z.enum(["DEBUG_CONVERTER", "DEBUG_INTEGRATION", "DEBUG_RULE_CHAIN", "DEBUG_RULE_NODE", "ERROR", "LC_EVENT", "RAW_DATA", "STATS"])
});
export type EventFilter = z.infer<typeof EventFilterSchema>;
export { EventFilterSchema };
  

EscalatedNotificationRuleRecipientsConfigSchema = z.object({
  "escalationTable": z.record(z.string(), z.array(z.string())),
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
export type EscalatedNotificationRuleRecipientsConfig = z.infer<typeof EscalatedNotificationRuleRecipientsConfigSchema>;
export { EscalatedNotificationRuleRecipientsConfigSchema };
  

ErrorEventFilterSchema = z.lazy(() => z.object({}));
export type ErrorEventFilter = z.infer<typeof ErrorEventFilterSchema>;
export { ErrorEventFilterSchema };
  

EntityViewTypeFilterSchema = z.lazy(() => z.object({}));
export type EntityViewTypeFilter = z.infer<typeof EntityViewTypeFilterSchema>;
export { EntityViewTypeFilterSchema };
  

EntityViewSearchQueryFilterSchema = z.lazy(() => z.object({}));
export type EntityViewSearchQueryFilter = z.infer<typeof EntityViewSearchQueryFilterSchema>;
export { EntityViewSearchQueryFilterSchema };
  

EntityViewSearchQuerySchema = z.object({
  "relationType": z.string(),
  "entityViewTypes": z.array(z.string()),
  "parameters": RelationsSearchParametersSchema
});
export type EntityViewSearchQuery = z.infer<typeof EntityViewSearchQuerySchema>;
export { EntityViewSearchQuerySchema };
  

EntityViewInfoSchema = z.object({
  "id": EntityViewIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "name": z.string(),
  "type": z.string(),
  "entityId": EntityIdSchema,
  "keys": TelemetryEntityViewSchema,
  "startTimeMs": z.number(),
  "endTimeMs": z.number(),
  "additionalInfo": JsonNodeSchema,
  "ownerName": z.string(),
  "groups": z.array(EntityInfoSchema),
  "ownerId": EntityIdSchema
});
export type EntityViewInfo = z.infer<typeof EntityViewInfoSchema>;
export { EntityViewInfoSchema };
  

EntityViewSchema = z.object({
  "id": EntityViewIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "name": z.string(),
  "type": z.string(),
  "entityId": EntityIdSchema,
  "keys": TelemetryEntityViewSchema,
  "startTimeMs": z.number(),
  "endTimeMs": z.number(),
  "additionalInfo": JsonNodeSchema,
  "ownerId": EntityIdSchema
});
export type EntityView = z.infer<typeof EntityViewSchema>;
export { EntityViewSchema };
  

TelemetryEntityViewSchema = z.object({
  "timeseries": z.array(z.string()),
  "attributes": AttributesEntityViewSchema
});
export type TelemetryEntityView = z.infer<typeof TelemetryEntityViewSchema>;
export { TelemetryEntityViewSchema };
  

EntityViewIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["ENTITY_VIEW"])
});
export type EntityViewId = z.infer<typeof EntityViewIdSchema>;
export { EntityViewIdSchema };
  

EntityVersionSchema = z.object({
  "author": z.string(),
  "id": z.string(),
  "name": z.string(),
  "timestamp": z.number()
});
export type EntityVersion = z.infer<typeof EntityVersionSchema>;
export { EntityVersionSchema };
  

EntityTypeVersionLoadRequestSchema = z.lazy(() => z.object({}));
export type EntityTypeVersionLoadRequest = z.infer<typeof EntityTypeVersionLoadRequestSchema>;
export { EntityTypeVersionLoadRequestSchema };
  

EntityTypeVersionLoadConfigSchema = z.object({
  "autoGenerateIntegrationKey": z.boolean(),
  "findExistingEntityByName": z.boolean(),
  "loadAttributes": z.boolean(),
  "loadCredentials": z.boolean(),
  "loadGroupEntities": z.boolean(),
  "loadPermissions": z.boolean(),
  "loadRelations": z.boolean(),
  "removeOtherEntities": z.boolean()
});
export type EntityTypeVersionLoadConfig = z.infer<typeof EntityTypeVersionLoadConfigSchema>;
export { EntityTypeVersionLoadConfigSchema };
  

EntityTypeVersionCreateConfigSchema = z.object({
  "allEntities": z.boolean(),
  "entityIds": z.array(z.string()),
  "saveAttributes": z.boolean(),
  "saveCredentials": z.boolean(),
  "saveGroupEntities": z.boolean(),
  "savePermissions": z.boolean(),
  "saveRelations": z.boolean(),
  "syncStrategy": z.enum(["MERGE", "OVERWRITE"])
});
export type EntityTypeVersionCreateConfig = z.infer<typeof EntityTypeVersionCreateConfigSchema>;
export { EntityTypeVersionCreateConfigSchema };
  

EntityTypeLoadResultSchema = z.object({
  "created": z.number(),
  "deleted": z.number(),
  "entityType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]),
  "groupsCreated": z.number(),
  "groupsDeleted": z.number(),
  "groupsUpdated": z.number(),
  "updated": z.number()
});
export type EntityTypeLoadResult = z.infer<typeof EntityTypeLoadResultSchema>;
export { EntityTypeLoadResultSchema };
  

EntityTypeFilterSchema = z.lazy(() => z.object({}));
export type EntityTypeFilter = z.infer<typeof EntityTypeFilterSchema>;
export { EntityTypeFilterSchema };
  

EntitySubtypeSchema = z.object({
  "entityType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]),
  "tenantId": TenantIdSchema,
  "type": z.string()
});
export type EntitySubtype = z.infer<typeof EntitySubtypeSchema>;
export { EntitySubtypeSchema };
  

EntityRelationsQuerySchema = z.object({
  "filters": z.array(RelationEntityTypeFilterSchema),
  "parameters": RelationsSearchParametersSchema
});
export type EntityRelationsQuery = z.infer<typeof EntityRelationsQuerySchema>;
export { EntityRelationsQuerySchema };
  

RelationEntityTypeFilterSchema = z.object({
  "relationType": z.string(),
  "entityTypes": z.array(z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]))
});
export type RelationEntityTypeFilter = z.infer<typeof RelationEntityTypeFilterSchema>;
export { RelationEntityTypeFilterSchema };
  

EntityRelationInfoSchema = z.object({
  "from": EntityIdSchema,
  "to": EntityIdSchema,
  "type": z.string(),
  "typeGroup": z.enum(["COMMON", "DASHBOARD", "EDGE", "EDGE_AUTO_ASSIGN_RULE_CHAIN", "FROM_ENTITY_GROUP", "RULE_CHAIN", "RULE_NODE"]),
  "additionalInfo": JsonNodeSchema,
  "fromName": z.string(),
  "toName": z.string()
});
export type EntityRelationInfo = z.infer<typeof EntityRelationInfoSchema>;
export { EntityRelationInfoSchema };
  

EntityNameFilterSchema = z.lazy(() => z.object({}));
export type EntityNameFilter = z.infer<typeof EntityNameFilterSchema>;
export { EntityNameFilterSchema };
  

EntityLoadErrorSchema = z.object({
  "message": z.string(),
  "source": EntityIdSchema,
  "target": EntityIdSchema,
  "type": z.string()
});
export type EntityLoadError = z.infer<typeof EntityLoadErrorSchema>;
export { EntityLoadErrorSchema };
  

EntityListFilterSchema = z.lazy(() => z.object({}));
export type EntityListFilter = z.infer<typeof EntityListFilterSchema>;
export { EntityListFilterSchema };
  

EntityGroupNameFilterSchema = z.lazy(() => z.object({}));
export type EntityGroupNameFilter = z.infer<typeof EntityGroupNameFilterSchema>;
export { EntityGroupNameFilterSchema };
  

EntityGroupListFilterSchema = z.lazy(() => z.object({}));
export type EntityGroupListFilter = z.infer<typeof EntityGroupListFilterSchema>;
export { EntityGroupListFilterSchema };
  

EntityGroupInfoSchema = z.object({
  "id": EntityGroupIdSchema,
  "createdTime": z.number(),
  "ownerId": EntityIdSchema,
  "name": z.string(),
  "type": z.enum(["ASSET", "CUSTOMER", "DASHBOARD", "DEVICE", "EDGE", "ENTITY_VIEW", "USER"]),
  "additionalInfo": JsonNodeSchema,
  "configuration": JsonNodeSchema,
  "groupAll": z.boolean(),
  "edgeGroupAll": z.boolean(),
  "ownerIds": z.array(EntityIdSchema)
});
export type EntityGroupInfo = z.infer<typeof EntityGroupInfoSchema>;
export { EntityGroupInfoSchema };
  

EntityGroupFilterSchema = z.lazy(() => z.object({}));
export type EntityGroupFilter = z.infer<typeof EntityGroupFilterSchema>;
export { EntityGroupFilterSchema };
  

EntityGroupExportDataSchema = z.lazy(() => z.object({}));
export type EntityGroupExportData = z.infer<typeof EntityGroupExportDataSchema>;
export { EntityGroupExportDataSchema };
  

EntityGroupSchema = z.object({
  "id": EntityGroupIdSchema,
  "createdTime": z.number(),
  "ownerId": EntityIdSchema,
  "name": z.string(),
  "type": z.enum(["ASSET", "CUSTOMER", "DASHBOARD", "DEVICE", "EDGE", "ENTITY_VIEW", "USER"]),
  "additionalInfo": JsonNodeSchema,
  "configuration": JsonNodeSchema,
  "groupAll": z.boolean(),
  "edgeGroupAll": z.boolean()
});
export type EntityGroup = z.infer<typeof EntityGroupSchema>;
export { EntityGroupSchema };
  

EntityDataQuerySchema = z.object({
  "entityFields": z.array(EntityKeySchema),
  "entityFilter": EntityFilterSchema,
  "keyFilters": z.array(KeyFilterSchema),
  "latestValues": z.array(EntityKeySchema),
  "pageLink": EntityDataPageLinkSchema
});
export type EntityDataQuery = z.infer<typeof EntityDataQuerySchema>;
export { EntityDataQuerySchema };
  

EntityDataPageLinkSchema = z.object({
  "dynamic": z.boolean(),
  "page": z.number(),
  "pageSize": z.number(),
  "sortOrder": EntityDataSortOrderSchema,
  "textSearch": z.string()
});
export type EntityDataPageLink = z.infer<typeof EntityDataPageLinkSchema>;
export { EntityDataPageLinkSchema };
  

EntityDataInfoSchema = z.object({
  "hasAttributes": z.boolean(),
  "hasCredentials": z.boolean(),
  "hasGroupEntities": z.boolean(),
  "hasPermissions": z.boolean(),
  "hasRelations": z.boolean()
});
export type EntityDataInfo = z.infer<typeof EntityDataInfoSchema>;
export { EntityDataInfoSchema };
  

EntityDataDiffSchema = z.object({
  "currentVersion": EntityExportData_Of_objectSchema,
  "otherVersion": EntityExportData_Of_objectSchema
});
export type EntityDataDiff = z.infer<typeof EntityDataDiffSchema>;
export { EntityDataDiffSchema };
  

EntityExportData_Of_objectSchema = z.object({
  "attributes": z.record(z.string(), z.array(AttributeExportDataSchema)),
  "entity": z.object({}),
  "entityType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]),
  "relations": z.array(EntityRelationSchema)
});
export type EntityExportData_Of_object = z.infer<typeof EntityExportData_Of_objectSchema>;
export { EntityExportData_Of_objectSchema };
  

EntityRelationSchema = z.object({
  "from": EntityIdSchema,
  "to": EntityIdSchema,
  "type": z.string(),
  "typeGroup": z.enum(["COMMON", "DASHBOARD", "EDGE", "EDGE_AUTO_ASSIGN_RULE_CHAIN", "FROM_ENTITY_GROUP", "RULE_CHAIN", "RULE_NODE"]),
  "additionalInfo": JsonNodeSchema
});
export type EntityRelation = z.infer<typeof EntityRelationSchema>;
export { EntityRelationSchema };
  

EntityDataSchema = z.object({
  "aggLatest": z.record(z.string(), ComparisonTsValueSchema),
  "entityId": EntityIdSchema,
  "latest": z.record(z.string(), z.object({})),
  "readAttrs": z.boolean(),
  "readTs": z.boolean(),
  "timeseries": z.record(z.string(), z.array(TsValueSchema))
});
export type EntityData = z.infer<typeof EntityDataSchema>;
export { EntityDataSchema };
  

EntityCountQuerySchema = z.object({
  "entityFilter": EntityFilterSchema,
  "keyFilters": z.array(KeyFilterSchema)
});
export type EntityCountQuery = z.infer<typeof EntityCountQuerySchema>;
export { EntityCountQuerySchema };
  

EntityActionNotificationRuleTriggerConfigSchema = z.lazy(() => z.object({}));
export type EntityActionNotificationRuleTriggerConfig = z.infer<typeof EntityActionNotificationRuleTriggerConfigSchema>;
export { EntityActionNotificationRuleTriggerConfigSchema };
  

EntitiesLimitNotificationRuleTriggerConfigSchema = z.lazy(() => z.object({}));
export type EntitiesLimitNotificationRuleTriggerConfig = z.infer<typeof EntitiesLimitNotificationRuleTriggerConfigSchema>;
export { EntitiesLimitNotificationRuleTriggerConfigSchema };
  

EntitiesByGroupNameFilterSchema = z.lazy(() => z.object({}));
export type EntitiesByGroupNameFilter = z.infer<typeof EntitiesByGroupNameFilterSchema>;
export { EntitiesByGroupNameFilterSchema };
  

EmailTwoFaProviderConfigSchema = z.lazy(() => z.object({}));
export type EmailTwoFaProviderConfig = z.infer<typeof EmailTwoFaProviderConfigSchema>;
export { EmailTwoFaProviderConfigSchema };
  

EmailTwoFaAccountConfigSchema = z.object({
  "email": z.string(),
  "useByDefault": z.boolean()
});
export type EmailTwoFaAccountConfig = z.infer<typeof EmailTwoFaAccountConfigSchema>;
export { EmailTwoFaAccountConfigSchema };
  

EmailDeliveryMethodNotificationTemplateSchema = z.lazy(() => z.object({}));
export type EmailDeliveryMethodNotificationTemplate = z.infer<typeof EmailDeliveryMethodNotificationTemplateSchema>;
export { EmailDeliveryMethodNotificationTemplateSchema };
  

EfentoCoapDeviceTypeConfigurationSchema = z.object({});
export type EfentoCoapDeviceTypeConfiguration = z.infer<typeof EfentoCoapDeviceTypeConfigurationSchema>;
export { EfentoCoapDeviceTypeConfigurationSchema };
  

EdgeTypeFilterSchema = z.lazy(() => z.object({}));
export type EdgeTypeFilter = z.infer<typeof EdgeTypeFilterSchema>;
export { EdgeTypeFilterSchema };
  

EdgeSearchQueryFilterSchema = z.lazy(() => z.object({}));
export type EdgeSearchQueryFilter = z.infer<typeof EdgeSearchQueryFilterSchema>;
export { EdgeSearchQueryFilterSchema };
  

EdgeSearchQuerySchema = z.object({
  "relationType": z.string(),
  "edgeTypes": z.array(z.string()),
  "parameters": RelationsSearchParametersSchema
});
export type EdgeSearchQuery = z.infer<typeof EdgeSearchQuerySchema>;
export { EdgeSearchQuerySchema };
  

EdgeInstructionsSchema = z.object({
  "instructions": z.string()
});
export type EdgeInstructions = z.infer<typeof EdgeInstructionsSchema>;
export { EdgeInstructionsSchema };
  

EdgeInfoSchema = z.object({
  "additionalInfo": JsonNodeSchema,
  "ownerId": EntityIdSchema,
  "id": EdgeIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "rootRuleChainId": RuleChainIdSchema,
  "name": z.string(),
  "type": z.string(),
  "label": z.string(),
  "routingKey": z.string(),
  "secret": z.string(),
  "edgeLicenseKey": z.string(),
  "cloudEndpoint": z.string(),
  "ownerName": z.string(),
  "groups": z.array(EntityInfoSchema)
});
export type EdgeInfo = z.infer<typeof EdgeInfoSchema>;
export { EdgeInfoSchema };
  

EdgeEventSchema = z.object({
  "action": z.enum(["ADDED", "ADDED_TO_ENTITY_GROUP", "ALARM_ACK", "ALARM_ASSIGNED", "ALARM_CLEAR", "ALARM_UNASSIGNED", "ASSIGNED_TO_EDGE", "ATTRIBUTES_DELETED", "ATTRIBUTES_UPDATED", "CHANGE_OWNER", "CREDENTIALS_REQUEST", "CREDENTIALS_UPDATED", "DELETED", "ENTITY_MERGE_REQUEST", "POST_ATTRIBUTES", "RELATION_ADD_OR_UPDATE", "RELATION_DELETED", "REMOVED_FROM_ENTITY_GROUP", "RPC_CALL", "TIMESERIES_UPDATED", "UNASSIGNED_FROM_EDGE", "UPDATED"]),
  "body": JsonNodeSchema,
  "createdTime": z.number(),
  "edgeId": EdgeIdSchema,
  "entityGroupId": z.string(),
  "entityId": z.string(),
  "id": EdgeEventIdSchema,
  "seqId": z.number(),
  "tenantId": TenantIdSchema,
  "type": z.enum(["ADMIN_SETTINGS", "ALARM", "ASSET", "ASSET_PROFILE", "CONVERTER", "CUSTOMER", "CUSTOM_TRANSLATION", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "LOGIN_WHITE_LABELING", "MAIL_TEMPLATES", "OTA_PACKAGE", "QUEUE", "RELATION", "ROLE", "RULE_CHAIN", "RULE_CHAIN_METADATA", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WHITE_LABELING", "WIDGETS_BUNDLE", "WIDGET_TYPE"]),
  "uid": z.string()
});
export type EdgeEvent = z.infer<typeof EdgeEventSchema>;
export { EdgeEventSchema };
  

EdgeEventIdSchema = z.object({
  "id": z.string()
});
export type EdgeEventId = z.infer<typeof EdgeEventIdSchema>;
export { EdgeEventIdSchema };
  

EdgeSchema = z.object({
  "additionalInfo": JsonNodeSchema,
  "ownerId": EntityIdSchema,
  "id": EdgeIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "rootRuleChainId": RuleChainIdSchema,
  "name": z.string(),
  "type": z.string(),
  "label": z.string(),
  "routingKey": z.string(),
  "secret": z.string(),
  "edgeLicenseKey": z.string(),
  "cloudEndpoint": z.string()
});
export type Edge = z.infer<typeof EdgeSchema>;
export { EdgeSchema };
  

EdgeIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["EDGE"])
});
export type EdgeId = z.infer<typeof EdgeIdSchema>;
export { EdgeIdSchema };
  

DynamicValue_Of_longSchema = z.object({
  "inherit": z.boolean(),
  "sourceAttribute": z.string(),
  "sourceType": z.enum(["CURRENT_CUSTOMER", "CURRENT_DEVICE", "CURRENT_TENANT", "CURRENT_USER"])
});
export type DynamicValue_Of_long = z.infer<typeof DynamicValue_Of_longSchema>;
export { DynamicValue_Of_longSchema };
  

DynamicValue_Of_intSchema = z.object({
  "inherit": z.boolean(),
  "sourceAttribute": z.string(),
  "sourceType": z.enum(["CURRENT_CUSTOMER", "CURRENT_DEVICE", "CURRENT_TENANT", "CURRENT_USER"])
});
export type DynamicValue_Of_int = z.infer<typeof DynamicValue_Of_intSchema>;
export { DynamicValue_Of_intSchema };
  

DynamicValue_Of_doubleSchema = z.object({
  "inherit": z.boolean(),
  "sourceAttribute": z.string(),
  "sourceType": z.enum(["CURRENT_CUSTOMER", "CURRENT_DEVICE", "CURRENT_TENANT", "CURRENT_USER"])
});
export type DynamicValue_Of_double = z.infer<typeof DynamicValue_Of_doubleSchema>;
export { DynamicValue_Of_doubleSchema };
  

DynamicValue_Of_booleanSchema = z.object({
  "inherit": z.boolean(),
  "sourceAttribute": z.string(),
  "sourceType": z.enum(["CURRENT_CUSTOMER", "CURRENT_DEVICE", "CURRENT_TENANT", "CURRENT_USER"])
});
export type DynamicValue_Of_boolean = z.infer<typeof DynamicValue_Of_booleanSchema>;
export { DynamicValue_Of_booleanSchema };
  

DurationAlarmConditionSpecSchema = z.lazy(() => z.object({}));
export type DurationAlarmConditionSpec = z.infer<typeof DurationAlarmConditionSpecSchema>;
export { DurationAlarmConditionSpecSchema };
  

DisabledDeviceProfileProvisionConfigurationSchema = z.lazy(() => z.object({}));
export type DisabledDeviceProfileProvisionConfiguration = z.infer<typeof DisabledDeviceProfileProvisionConfigurationSchema>;
export { DisabledDeviceProfileProvisionConfigurationSchema };
  

DeviceTypeFilterSchema = z.lazy(() => z.object({}));
export type DeviceTypeFilter = z.infer<typeof DeviceTypeFilterSchema>;
export { DeviceTypeFilterSchema };
  

DeviceSearchQueryFilterSchema = z.lazy(() => z.object({}));
export type DeviceSearchQueryFilter = z.infer<typeof DeviceSearchQueryFilterSchema>;
export { DeviceSearchQueryFilterSchema };
  

DeviceSearchQuerySchema = z.object({
  "relationType": z.string(),
  "deviceTypes": z.array(z.string()),
  "parameters": RelationsSearchParametersSchema
});
export type DeviceSearchQuery = z.infer<typeof DeviceSearchQuerySchema>;
export { DeviceSearchQuerySchema };
  

DeviceProfileInfoSchema = z.object({
  "id": EntityIdSchema,
  "name": z.string(),
  "image": z.string(),
  "defaultDashboardId": DashboardIdSchema,
  "type": z.enum(["DEFAULT"]),
  "transportType": z.enum(["COAP", "DEFAULT", "LWM2M", "MQTT", "SNMP"]),
  "tenantId": TenantIdSchema
});
export type DeviceProfileInfo = z.infer<typeof DeviceProfileInfoSchema>;
export { DeviceProfileInfoSchema };
  

DeviceProfileSchema = z.object({
  "id": DeviceProfileIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "name": z.string(),
  "default": z.boolean(),
  "defaultDashboardId": DashboardIdSchema,
  "defaultRuleChainId": RuleChainIdSchema,
  "defaultQueueName": z.string(),
  "firmwareId": OtaPackageIdSchema,
  "softwareId": OtaPackageIdSchema,
  "description": z.string(),
  "image": z.string(),
  "provisionDeviceKey": z.string(),
  "transportType": z.enum(["COAP", "DEFAULT", "LWM2M", "MQTT", "SNMP"]),
  "provisionType": z.enum(["ALLOW_CREATE_NEW_DEVICES", "CHECK_PRE_PROVISIONED_DEVICES", "DISABLED", "X509_CERTIFICATE_CHAIN"]),
  "profileData": DeviceProfileDataSchema,
  "type": z.enum(["DEFAULT"]),
  "defaultEdgeRuleChainId": RuleChainIdSchema
});
export type DeviceProfile = z.infer<typeof DeviceProfileSchema>;
export { DeviceProfileSchema };
  

DeviceProfileDataSchema = z.object({
  "configuration": DeviceProfileConfigurationSchema,
  "transportConfiguration": DeviceProfileTransportConfigurationSchema,
  "provisionConfiguration": DeviceProfileProvisionConfigurationSchema,
  "alarms": z.array(DeviceProfileAlarmSchema)
});
export type DeviceProfileData = z.infer<typeof DeviceProfileDataSchema>;
export { DeviceProfileDataSchema };
  

DeviceProfileAlarmSchema = z.object({
  "id": z.string(),
  "alarmType": z.string(),
  "createRules": z.record(z.string(), AlarmRuleSchema),
  "clearRule": AlarmRuleSchema,
  "propagate": z.boolean(),
  "propagateToOwner": z.boolean(),
  "propagateToOwnerHierarchy": z.boolean(),
  "propagateToTenant": z.boolean(),
  "propagateRelationTypes": z.array(z.string())
});
export type DeviceProfileAlarm = z.infer<typeof DeviceProfileAlarmSchema>;
export { DeviceProfileAlarmSchema };
  

DeviceProfileProvisionConfigurationSchema = z.object({
  "provisionDeviceSecret": z.string()
});
export type DeviceProfileProvisionConfiguration = z.infer<typeof DeviceProfileProvisionConfigurationSchema>;
export { DeviceProfileProvisionConfigurationSchema };
  

DeviceProfileTransportConfigurationSchema = z.object({});
export type DeviceProfileTransportConfiguration = z.infer<typeof DeviceProfileTransportConfigurationSchema>;
export { DeviceProfileTransportConfigurationSchema };
  

DeviceProfileConfigurationSchema = z.object({});
export type DeviceProfileConfiguration = z.infer<typeof DeviceProfileConfigurationSchema>;
export { DeviceProfileConfigurationSchema };
  

DeviceInfoSchema = z.object({
  "id": DeviceIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "ownerId": EntityIdSchema,
  "name": z.string(),
  "type": z.string(),
  "label": z.string(),
  "deviceProfileId": DeviceProfileIdSchema,
  "deviceData": DeviceDataSchema,
  "firmwareId": OtaPackageIdSchema,
  "softwareId": OtaPackageIdSchema,
  "additionalInfo": JsonNodeSchema,
  "ownerName": z.string(),
  "groups": z.array(EntityInfoSchema),
  "active": z.boolean()
});
export type DeviceInfo = z.infer<typeof DeviceInfoSchema>;
export { DeviceInfoSchema };
  

DeviceGroupOtaPackageSchema = z.object({
  "groupId": EntityGroupIdSchema,
  "id": z.string(),
  "otaPackageId": OtaPackageIdSchema,
  "otaPackageType": z.enum(["FIRMWARE", "SOFTWARE"]),
  "otaPackageUpdateTime": z.number()
});
export type DeviceGroupOtaPackage = z.infer<typeof DeviceGroupOtaPackageSchema>;
export { DeviceGroupOtaPackageSchema };
  

DeviceExportDataSchema = z.lazy(() => z.object({}));
export type DeviceExportData = z.infer<typeof DeviceExportDataSchema>;
export { DeviceExportDataSchema };
  

DeviceCredentialsSchema = z.object({
  "id": DeviceCredentialsIdSchema,
  "createdTime": z.number(),
  "deviceId": DeviceIdSchema,
  "credentialsType": z.enum(["ACCESS_TOKEN", "LWM2M_CREDENTIALS", "MQTT_BASIC", "X509_CERTIFICATE"]),
  "credentialsId": z.string(),
  "credentialsValue": z.string()
});
export type DeviceCredentials = z.infer<typeof DeviceCredentialsSchema>;
export { DeviceCredentialsSchema };
  

DeviceCredentialsIdSchema = z.object({
  "id": z.string()
});
export type DeviceCredentialsId = z.infer<typeof DeviceCredentialsIdSchema>;
export { DeviceCredentialsIdSchema };
  

DeviceActivityNotificationRuleTriggerConfigSchema = z.lazy(() => z.object({}));
export type DeviceActivityNotificationRuleTriggerConfig = z.infer<typeof DeviceActivityNotificationRuleTriggerConfigSchema>;
export { DeviceActivityNotificationRuleTriggerConfigSchema };
  

DeviceSchema = z.object({
  "id": DeviceIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "ownerId": EntityIdSchema,
  "name": z.string(),
  "type": z.string(),
  "label": z.string(),
  "deviceProfileId": DeviceProfileIdSchema,
  "deviceData": DeviceDataSchema,
  "firmwareId": OtaPackageIdSchema,
  "softwareId": OtaPackageIdSchema,
  "additionalInfo": JsonNodeSchema
});
export type Device = z.infer<typeof DeviceSchema>;
export { DeviceSchema };
  

OtaPackageIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["OTA_PACKAGE"])
});
export type OtaPackageId = z.infer<typeof OtaPackageIdSchema>;
export { OtaPackageIdSchema };
  

DeviceDataSchema = z.object({
  "configuration": DeviceConfigurationSchema,
  "transportConfiguration": DeviceTransportConfigurationSchema
});
export type DeviceData = z.infer<typeof DeviceDataSchema>;
export { DeviceDataSchema };
  

DeviceTransportConfigurationSchema = z.object({});
export type DeviceTransportConfiguration = z.infer<typeof DeviceTransportConfigurationSchema>;
export { DeviceTransportConfigurationSchema };
  

DeviceConfigurationSchema = z.object({});
export type DeviceConfiguration = z.infer<typeof DeviceConfigurationSchema>;
export { DeviceConfigurationSchema };
  

DeviceProfileIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["DEVICE_PROFILE"])
});
export type DeviceProfileId = z.infer<typeof DeviceProfileIdSchema>;
export { DeviceProfileIdSchema };
  

DeviceIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["DEVICE"])
});
export type DeviceId = z.infer<typeof DeviceIdSchema>;
export { DeviceIdSchema };
  

DeliveryMethodNotificationTemplateSchema = z.object({
  "body": z.string(),
  "enabled": z.boolean()
});
export type DeliveryMethodNotificationTemplate = z.infer<typeof DeliveryMethodNotificationTemplateSchema>;
export { DeliveryMethodNotificationTemplateSchema };
  

DeferredResult_Of_uuidSchema = z.object({
  "result": z.object({}),
  "setOrExpired": z.boolean()
});
export type DeferredResult_Of_uuid = z.infer<typeof DeferredResult_Of_uuidSchema>;
export { DeferredResult_Of_uuidSchema };
  

DeferredResult_Of_VoidSchema = z.object({
  "result": z.object({}),
  "setOrExpired": z.boolean()
});
export type DeferredResult_Of_Void = z.infer<typeof DeferredResult_Of_VoidSchema>;
export { DeferredResult_Of_VoidSchema };
  

DeferredResult_Of_ResponseEntitySchema = z.object({
  "result": z.object({}),
  "setOrExpired": z.boolean()
});
export type DeferredResult_Of_ResponseEntity = z.infer<typeof DeferredResult_Of_ResponseEntitySchema>;
export { DeferredResult_Of_ResponseEntitySchema };
  

DeferredResult_Of_RepositorySettingsSchema = z.object({
  "result": z.object({}),
  "setOrExpired": z.boolean()
});
export type DeferredResult_Of_RepositorySettings = z.infer<typeof DeferredResult_Of_RepositorySettingsSchema>;
export { DeferredResult_Of_RepositorySettingsSchema };
  

DeferredResult_Of_PageData_Of_EntityVersionSchema = z.object({
  "result": z.object({}),
  "setOrExpired": z.boolean()
});
export type DeferredResult_Of_PageData_Of_EntityVersion = z.infer<typeof DeferredResult_Of_PageData_Of_EntityVersionSchema>;
export { DeferredResult_Of_PageData_Of_EntityVersionSchema };
  

DeferredResult_Of_List_Of_VersionedEntityInfoSchema = z.object({
  "result": z.object({}),
  "setOrExpired": z.boolean()
});
export type DeferredResult_Of_List_Of_VersionedEntityInfo = z.infer<typeof DeferredResult_Of_List_Of_VersionedEntityInfoSchema>;
export { DeferredResult_Of_List_Of_VersionedEntityInfoSchema };
  

DeferredResult_Of_List_Of_BranchInfoSchema = z.object({
  "result": z.object({}),
  "setOrExpired": z.boolean()
});
export type DeferredResult_Of_List_Of_BranchInfo = z.infer<typeof DeferredResult_Of_List_Of_BranchInfoSchema>;
export { DeferredResult_Of_List_Of_BranchInfoSchema };
  

DeferredResult_Of_EntityDataInfoSchema = z.object({
  "result": z.object({}),
  "setOrExpired": z.boolean()
});
export type DeferredResult_Of_EntityDataInfo = z.infer<typeof DeferredResult_Of_EntityDataInfoSchema>;
export { DeferredResult_Of_EntityDataInfoSchema };
  

DeferredResult_Of_EntityDataDiffSchema = z.object({
  "result": z.object({}),
  "setOrExpired": z.boolean()
});
export type DeferredResult_Of_EntityDataDiff = z.infer<typeof DeferredResult_Of_EntityDataDiffSchema>;
export { DeferredResult_Of_EntityDataDiffSchema };
  

DefaultTenantProfileConfigurationSchema = z.object({
  "alarmsTtlDays": z.number(),
  "cassandraQueryTenantRateLimitsConfiguration": z.string(),
  "customerServerRestLimitsConfiguration": z.string(),
  "defaultStorageTtlDays": z.number(),
  "integrationMsgsPerDeviceRateLimit": z.string(),
  "integrationMsgsPerTenantRateLimit": z.string(),
  "maxAssets": z.number(),
  "maxConverters": z.number(),
  "maxCreatedAlarms": z.number(),
  "maxCustomers": z.number(),
  "maxDPStorageDays": z.number(),
  "maxDashboards": z.number(),
  "maxDevices": z.number(),
  "maxEmails": z.number(),
  "maxIntegrations": z.number(),
  "maxJSExecutions": z.number(),
  "maxOtaPackagesInBytes": z.number(),
  "maxREExecutions": z.number(),
  "maxResourceSize": z.number(),
  "maxResourcesInBytes": z.number(),
  "maxRuleChains": z.number(),
  "maxRuleNodeExecutionsPerMessage": z.number(),
  "maxSchedulerEvents": z.number(),
  "maxSms": z.number(),
  "maxTbelExecutions": z.number(),
  "maxTransportDataPoints": z.number(),
  "maxTransportMessages": z.number(),
  "maxUsers": z.number(),
  "maxWsSessionsPerCustomer": z.number(),
  "maxWsSessionsPerPublicUser": z.number(),
  "maxWsSessionsPerRegularUser": z.number(),
  "maxWsSessionsPerTenant": z.number(),
  "maxWsSubscriptionsPerCustomer": z.number(),
  "maxWsSubscriptionsPerPublicUser": z.number(),
  "maxWsSubscriptionsPerRegularUser": z.number(),
  "maxWsSubscriptionsPerTenant": z.number(),
  "queueStatsTtlDays": z.number(),
  "rpcTtlDays": z.number(),
  "ruleEngineExceptionsTtlDays": z.number(),
  "smsEnabled": z.boolean(),
  "tenantEntityExportRateLimit": z.string(),
  "tenantEntityImportRateLimit": z.string(),
  "tenantNotificationRequestsPerRuleRateLimit": z.string(),
  "tenantNotificationRequestsRateLimit": z.string(),
  "tenantServerRestLimitsConfiguration": z.string(),
  "transportDeviceMsgRateLimit": z.string(),
  "transportDeviceTelemetryDataPointsRateLimit": z.string(),
  "transportDeviceTelemetryMsgRateLimit": z.string(),
  "transportTenantMsgRateLimit": z.string(),
  "transportTenantTelemetryDataPointsRateLimit": z.string(),
  "transportTenantTelemetryMsgRateLimit": z.string(),
  "warnThreshold": z.number(),
  "wsMsgQueueLimitPerSession": z.number(),
  "wsUpdatesPerSessionRateLimit": z.string()
});
export type DefaultTenantProfileConfiguration = z.infer<typeof DefaultTenantProfileConfigurationSchema>;
export { DefaultTenantProfileConfigurationSchema };
  

DefaultRuleChainCreateRequestSchema = z.object({
  "name": z.string()
});
export type DefaultRuleChainCreateRequest = z.infer<typeof DefaultRuleChainCreateRequestSchema>;
export { DefaultRuleChainCreateRequestSchema };
  

DefaultDeviceTransportConfigurationSchema = z.lazy(() => z.object({}));
export type DefaultDeviceTransportConfiguration = z.infer<typeof DefaultDeviceTransportConfigurationSchema>;
export { DefaultDeviceTransportConfigurationSchema };
  

DefaultDeviceProfileTransportConfigurationSchema = z.object({});
export type DefaultDeviceProfileTransportConfiguration = z.infer<typeof DefaultDeviceProfileTransportConfigurationSchema>;
export { DefaultDeviceProfileTransportConfigurationSchema };
  

DefaultDeviceProfileConfigurationSchema = z.object({});
export type DefaultDeviceProfileConfiguration = z.infer<typeof DefaultDeviceProfileConfigurationSchema>;
export { DefaultDeviceProfileConfigurationSchema };
  

DefaultDeviceConfigurationSchema = z.lazy(() => z.object({}));
export type DefaultDeviceConfiguration = z.infer<typeof DefaultDeviceConfigurationSchema>;
export { DefaultDeviceConfigurationSchema };
  

DefaultCoapDeviceTypeConfigurationSchema = z.lazy(() => z.object({}));
export type DefaultCoapDeviceTypeConfiguration = z.infer<typeof DefaultCoapDeviceTypeConfigurationSchema>;
export { DefaultCoapDeviceTypeConfigurationSchema };
  

DebugIntegrationEventFilterSchema = z.lazy(() => z.object({}));
export type DebugIntegrationEventFilter = z.infer<typeof DebugIntegrationEventFilterSchema>;
export { DebugIntegrationEventFilterSchema };
  

DebugConverterEventFilterSchema = z.lazy(() => z.object({}));
export type DebugConverterEventFilter = z.infer<typeof DebugConverterEventFilterSchema>;
export { DebugConverterEventFilterSchema };
  

DashboardInfoSchema = z.object({
  "id": DashboardIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "ownerId": EntityIdSchema,
  "title": z.string(),
  "image": z.string(),
  "assignedCustomers": z.array(ShortCustomerInfoSchema),
  "mobileHide": z.boolean(),
  "mobileOrder": z.number(),
  "name": z.string(),
  "configuration": JsonNodeSchema,
  "ownerName": z.string(),
  "groups": z.array(EntityInfoSchema)
});
export type DashboardInfo = z.infer<typeof DashboardInfoSchema>;
export { DashboardInfoSchema };
  

DashboardSchema = z.object({
  "id": DashboardIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "ownerId": EntityIdSchema,
  "title": z.string(),
  "image": z.string(),
  "assignedCustomers": z.array(ShortCustomerInfoSchema),
  "mobileHide": z.boolean(),
  "mobileOrder": z.number(),
  "name": z.string(),
  "configuration": JsonNodeSchema
});
export type Dashboard = z.infer<typeof DashboardSchema>;
export { DashboardSchema };
  

ShortCustomerInfoSchema = z.object({
  "public": z.boolean(),
  "customerId": CustomerIdSchema,
  "title": z.string()
});
export type ShortCustomerInfo = z.infer<typeof ShortCustomerInfoSchema>;
export { ShortCustomerInfoSchema };
  

CustomerUsersFilterSchema = z.lazy(() => z.object({}));
export type CustomerUsersFilter = z.infer<typeof CustomerUsersFilterSchema>;
export { CustomerUsersFilterSchema };
  

CustomerInfoSchema = z.object({
  "id": CustomerIdSchema,
  "createdTime": z.number(),
  "title": z.string(),
  "name": z.string(),
  "tenantId": TenantIdSchema,
  "parentCustomerId": CustomerIdSchema,
  "customerId": CustomerIdSchema,
  "ownerId": EntityIdSchema,
  "country": z.string(),
  "state": z.string(),
  "city": z.string(),
  "address": z.string(),
  "address2": z.string(),
  "zip": z.string(),
  "phone": z.string(),
  "email": z.string(),
  "additionalInfo": JsonNodeSchema,
  "ownerName": z.string(),
  "groups": z.array(EntityInfoSchema)
});
export type CustomerInfo = z.infer<typeof CustomerInfoSchema>;
export { CustomerInfoSchema };
  

CustomerSchema = z.object({
  "id": CustomerIdSchema,
  "createdTime": z.number(),
  "title": z.string(),
  "name": z.string(),
  "tenantId": TenantIdSchema,
  "parentCustomerId": CustomerIdSchema,
  "customerId": CustomerIdSchema,
  "ownerId": EntityIdSchema,
  "country": z.string(),
  "state": z.string(),
  "city": z.string(),
  "address": z.string(),
  "address2": z.string(),
  "zip": z.string(),
  "phone": z.string(),
  "email": z.string(),
  "additionalInfo": JsonNodeSchema
});
export type Customer = z.infer<typeof CustomerSchema>;
export { CustomerSchema };
  

CustomTranslationSchema = z.object({
  "translationMap": z.record(z.string(), z.string())
});
export type CustomTranslation = z.infer<typeof CustomTranslationSchema>;
export { CustomTranslationSchema };
  

CustomTimeScheduleSchema = z.object({
  "dynamicValue": DynamicValue_Of_stringSchema,
  "items": z.array(CustomTimeScheduleItemSchema),
  "timezone": z.string(),
  "type": z.enum(["ANY_TIME", "CUSTOM", "SPECIFIC_TIME"])
});
export type CustomTimeSchedule = z.infer<typeof CustomTimeScheduleSchema>;
export { CustomTimeScheduleSchema };
  

CustomTimeScheduleItemSchema = z.object({
  "dayOfWeek": z.number(),
  "enabled": z.boolean(),
  "endsOn": z.number(),
  "startsOn": z.number()
});
export type CustomTimeScheduleItem = z.infer<typeof CustomTimeScheduleItemSchema>;
export { CustomTimeScheduleItemSchema };
  

CustomMenuSchema = z.object({
  "disabledMenuItems": z.array(z.string()),
  "menuItems": z.array(CustomMenuItemSchema)
});
export type CustomMenu = z.infer<typeof CustomMenuSchema>;
export { CustomMenuSchema };
  

CustomMenuItemSchema = z.object({
  "name": z.string(),
  "iconUrl": z.string(),
  "materialIcon": z.string(),
  "iframeUrl": z.string(),
  "dashboardId": z.string(),
  "hideDashboardToolbar": z.boolean(),
  "setAccessToken": z.boolean(),
  "childMenuItems": z.array(CustomMenuItemSchema)
});
export type CustomMenuItem = z.infer<typeof CustomMenuItemSchema>;
export { CustomMenuItemSchema };
  

ConverterSchema = z.object({
  "id": ConverterIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "name": z.string(),
  "type": z.enum(["DOWNLINK", "UPLINK"]),
  "debugMode": z.boolean(),
  "configuration": JsonNodeSchema,
  "additionalInfo": JsonNodeSchema,
  "edgeTemplate": z.boolean()
});
export type Converter = z.infer<typeof ConverterSchema>;
export { ConverterSchema };
  

ConverterIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["CONVERTER"])
});
export type ConverterId = z.infer<typeof ConverterIdSchema>;
export { ConverterIdSchema };
  

ContactBased_Of_objectSchema = z.object({
  "additionalInfo": JsonNodeSchema,
  "address": z.string(),
  "address2": z.string(),
  "city": z.string(),
  "country": z.string(),
  "createdTime": z.number(),
  "email": z.string(),
  "id": z.object({}),
  "name": z.string(),
  "phone": z.string(),
  "state": z.string(),
  "zip": z.string()
});
export type ContactBased_Of_object = z.infer<typeof ContactBased_Of_objectSchema>;
export { ContactBased_Of_objectSchema };
  

ComponentDescriptorSchema = z.object({
  "id": ComponentDescriptorIdSchema,
  "createdTime": z.number(),
  "type": z.enum(["ACTION", "ANALYTICS", "ENRICHMENT", "EXTERNAL", "FILTER", "FLOW", "TRANSFORMATION"]),
  "scope": z.enum(["TENANT"]),
  "clusteringMode": z.enum(["ENABLED", "SINGLETON", "USER_PREFERENCE"]),
  "name": z.string(),
  "clazz": z.string(),
  "configurationDescriptor": JsonNodeSchema,
  "configurationVersion": z.number(),
  "actions": z.string()
});
export type ComponentDescriptor = z.infer<typeof ComponentDescriptorSchema>;
export { ComponentDescriptorSchema };
  

ComponentDescriptorIdSchema = z.object({
  "id": z.string()
});
export type ComponentDescriptorId = z.infer<typeof ComponentDescriptorIdSchema>;
export { ComponentDescriptorIdSchema };
  

ComplexVersionCreateRequestSchema = z.lazy(() => z.object({}));
export type ComplexVersionCreateRequest = z.infer<typeof ComplexVersionCreateRequestSchema>;
export { ComplexVersionCreateRequestSchema };
  

ComplexFilterPredicateSchema = z.lazy(() => z.object({}));
export type ComplexFilterPredicate = z.infer<typeof ComplexFilterPredicateSchema>;
export { ComplexFilterPredicateSchema };
  

ComparisonTsValueSchema = z.object({
  "current": TsValueSchema,
  "previous": TsValueSchema
});
export type ComparisonTsValue = z.infer<typeof ComparisonTsValueSchema>;
export { ComparisonTsValueSchema };
  

TsValueSchema = z.object({
  "count": z.number(),
  "ts": z.number(),
  "value": z.string()
});
export type TsValue = z.infer<typeof TsValueSchema>;
export { TsValueSchema };
  

CoapDeviceTypeConfigurationSchema = z.object({});
export type CoapDeviceTypeConfiguration = z.infer<typeof CoapDeviceTypeConfigurationSchema>;
export { CoapDeviceTypeConfigurationSchema };
  

CoapDeviceTransportConfigurationSchema = z.lazy(() => z.object({}));
export type CoapDeviceTransportConfiguration = z.infer<typeof CoapDeviceTransportConfigurationSchema>;
export { CoapDeviceTransportConfigurationSchema };
  

CoapDeviceProfileTransportConfigurationSchema = z.lazy(() => z.object({}));
export type CoapDeviceProfileTransportConfiguration = z.infer<typeof CoapDeviceProfileTransportConfigurationSchema>;
export { CoapDeviceProfileTransportConfigurationSchema };
  

ClientAttributesQueryingSnmpCommunicationConfigSchema = z.object({
  "mappings": z.array(SnmpMappingSchema),
  "queryingFrequencyMs": z.number(),
  "spec": z.enum(["CLIENT_ATTRIBUTES_QUERYING", "SHARED_ATTRIBUTES_SETTING", "TELEMETRY_QUERYING", "TO_DEVICE_RPC_REQUEST", "TO_SERVER_RPC_REQUEST"])
});
export type ClientAttributesQueryingSnmpCommunicationConfig = z.infer<typeof ClientAttributesQueryingSnmpCommunicationConfigSchema>;
export { ClientAttributesQueryingSnmpCommunicationConfigSchema };
  

SnmpMappingSchema = z.object({
  "dataType": z.enum(["BOOLEAN", "DOUBLE", "JSON", "LONG", "STRING"]),
  "key": z.string(),
  "oid": z.string()
});
export type SnmpMapping = z.infer<typeof SnmpMappingSchema>;
export { SnmpMappingSchema };
  

ClearRuleSchema = z.object({
  "alarmStatuses": z.array(z.enum(["ACK", "ACTIVE", "ANY", "CLEARED", "UNACK"]))
});
export type ClearRule = z.infer<typeof ClearRuleSchema>;
export { ClearRuleSchema };
  

ClaimRequestSchema = z.object({
  "secretKey": z.string()
});
export type ClaimRequest = z.infer<typeof ClaimRequestSchema>;
export { ClaimRequestSchema };
  

CheckPreProvisionedDevicesDeviceProfileProvisionConfigurationSchema = z.object({
  "provisionDeviceSecret": z.string()
});
export type CheckPreProvisionedDevicesDeviceProfileProvisionConfiguration = z.infer<typeof CheckPreProvisionedDevicesDeviceProfileProvisionConfigurationSchema>;
export { CheckPreProvisionedDevicesDeviceProfileProvisionConfigurationSchema };
  

ChangePasswordRequestSchema = z.object({
  "currentPassword": z.string(),
  "newPassword": z.string()
});
export type ChangePasswordRequest = z.infer<typeof ChangePasswordRequestSchema>;
export { ChangePasswordRequestSchema };
  

ByteBufferSchema = z.object({
  "char": z.string(),
  "direct": z.boolean(),
  "double": z.number(),
  "float": z.number(),
  "int": z.number(),
  "long": z.number(),
  "readOnly": z.boolean(),
  "short": z.number()
});
export type ByteBuffer = z.infer<typeof ByteBufferSchema>;
export { ByteBufferSchema };
  

ByteArrayResourceSchema = z.object({
  "byteArray": z.string(),
  "description": z.string(),
  "file": z.string(),
  "filename": z.string(),
  "inputStream": InputStreamSchema,
  "open": z.boolean(),
  "readable": z.boolean(),
  "uri": z.string(),
  "url": z.string()
});
export type ByteArrayResource = z.infer<typeof ByteArrayResourceSchema>;
export { ByteArrayResourceSchema };
  

InputStreamSchema = z.object({});
export type InputStream = z.infer<typeof InputStreamSchema>;
export { InputStreamSchema };
  

ButtonSchema = z.object({
  "dashboardId": z.string(),
  "dashboardState": z.string(),
  "enabled": z.boolean(),
  "link": z.string(),
  "linkType": z.enum(["DASHBOARD", "LINK"]),
  "setEntityIdInState": z.boolean(),
  "text": z.string()
});
export type Button = z.infer<typeof ButtonSchema>;
export { ButtonSchema };
  

BulkImportResult_Of_EdgeSchema = z.object({
  "created": AtomicIntegerSchema,
  "errors": AtomicIntegerSchema,
  "errorsList": z.array(z.string()),
  "updated": AtomicIntegerSchema
});
export type BulkImportResult_Of_Edge = z.infer<typeof BulkImportResult_Of_EdgeSchema>;
export { BulkImportResult_Of_EdgeSchema };
  

BulkImportResult_Of_DeviceSchema = z.object({
  "created": AtomicIntegerSchema,
  "errors": AtomicIntegerSchema,
  "errorsList": z.array(z.string()),
  "updated": AtomicIntegerSchema
});
export type BulkImportResult_Of_Device = z.infer<typeof BulkImportResult_Of_DeviceSchema>;
export { BulkImportResult_Of_DeviceSchema };
  

BulkImportResult_Of_AssetSchema = z.object({
  "created": AtomicIntegerSchema,
  "errors": AtomicIntegerSchema,
  "errorsList": z.array(z.string()),
  "updated": AtomicIntegerSchema
});
export type BulkImportResult_Of_Asset = z.infer<typeof BulkImportResult_Of_AssetSchema>;
export { BulkImportResult_Of_AssetSchema };
  

BulkImportRequestSchema = z.object({
  "customerId": CustomerIdSchema,
  "entityGroupId": z.string(),
  "file": z.string(),
  "mapping": MappingSchema
});
export type BulkImportRequest = z.infer<typeof BulkImportRequestSchema>;
export { BulkImportRequestSchema };
  

MappingSchema = z.object({
  "columns": z.array(ColumnMappingSchema),
  "delimiter": z.string(),
  "header": z.boolean(),
  "update": z.boolean()
});
export type Mapping = z.infer<typeof MappingSchema>;
export { MappingSchema };
  

ColumnMappingSchema = z.object({
  "key": z.string(),
  "type": z.enum(["ACCESS_TOKEN", "CLOUD_ENDPOINT", "DESCRIPTION", "EDGE_LICENSE_KEY", "IS_GATEWAY", "LABEL", "LWM2M_BOOTSTRAP_SERVER_PUBLIC_KEY_OR_ID", "LWM2M_BOOTSTRAP_SERVER_SECRET_KEY", "LWM2M_BOOTSTRAP_SERVER_SECURITY_MODE", "LWM2M_CLIENT_CERT", "LWM2M_CLIENT_ENDPOINT", "LWM2M_CLIENT_IDENTITY", "LWM2M_CLIENT_KEY", "LWM2M_CLIENT_SECURITY_CONFIG_MODE", "LWM2M_SERVER_CLIENT_PUBLIC_KEY_OR_ID", "LWM2M_SERVER_CLIENT_SECRET_KEY", "LWM2M_SERVER_SECURITY_MODE", "MQTT_CLIENT_ID", "MQTT_PASSWORD", "MQTT_USER_NAME", "NAME", "ROUTING_KEY", "SECRET", "SERVER_ATTRIBUTE", "SHARED_ATTRIBUTE", "SNMP_COMMUNITY_STRING", "SNMP_HOST", "SNMP_PORT", "SNMP_VERSION", "TIMESERIES", "TYPE", "X509"])
});
export type ColumnMapping = z.infer<typeof ColumnMappingSchema>;
export { ColumnMappingSchema };
  

BranchInfoSchema = z.object({
  "default": z.boolean(),
  "name": z.string()
});
export type BranchInfo = z.infer<typeof BranchInfoSchema>;
export { BranchInfoSchema };
  

BooleanFilterPredicateSchema = z.lazy(() => z.object({}));
export type BooleanFilterPredicate = z.infer<typeof BooleanFilterPredicateSchema>;
export { BooleanFilterPredicateSchema };
  

BlobEntityWithCustomerInfoSchema = z.object({
  "id": BlobEntityIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "ownerId": EntityIdSchema,
  "name": z.string(),
  "type": z.string(),
  "contentType": z.enum(["application/pdf", "image/jpeg", "image/png"]),
  "additionalInfo": JsonNodeSchema,
  "customerTitle": z.string(),
  "customerIsPublic": z.object({})
});
export type BlobEntityWithCustomerInfo = z.infer<typeof BlobEntityWithCustomerInfoSchema>;
export { BlobEntityWithCustomerInfoSchema };
  

BlobEntityInfoSchema = z.object({
  "id": BlobEntityIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "ownerId": EntityIdSchema,
  "name": z.string(),
  "type": z.string(),
  "contentType": z.enum(["application/pdf", "image/jpeg", "image/png"]),
  "additionalInfo": JsonNodeSchema
});
export type BlobEntityInfo = z.infer<typeof BlobEntityInfoSchema>;
export { BlobEntityInfoSchema };
  

BlobEntityIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["BLOB_ENTITY"])
});
export type BlobEntityId = z.infer<typeof BlobEntityIdSchema>;
export { BlobEntityIdSchema };
  

BackupCodeTwoFaProviderConfigSchema = z.object({
  "codesQuantity": z.number()
});
export type BackupCodeTwoFaProviderConfig = z.infer<typeof BackupCodeTwoFaProviderConfigSchema>;
export { BackupCodeTwoFaProviderConfigSchema };
  

BackupCodeTwoFaAccountConfigSchema = z.object({
  "codes": z.array(z.string()),
  "codesLeft": z.number(),
  "useByDefault": z.boolean()
});
export type BackupCodeTwoFaAccountConfig = z.infer<typeof BackupCodeTwoFaAccountConfigSchema>;
export { BackupCodeTwoFaAccountConfigSchema };
  

AwsSnsSmsProviderConfigurationSchema = z.lazy(() => z.object({}));
export type AwsSnsSmsProviderConfiguration = z.infer<typeof AwsSnsSmsProviderConfigurationSchema>;
export { AwsSnsSmsProviderConfigurationSchema };
  

AutoVersionCreateConfigSchema = z.object({
  "branch": z.string(),
  "saveAttributes": z.boolean(),
  "saveCredentials": z.boolean(),
  "saveGroupEntities": z.boolean(),
  "savePermissions": z.boolean(),
  "saveRelations": z.boolean()
});
export type AutoVersionCreateConfig = z.infer<typeof AutoVersionCreateConfigSchema>;
export { AutoVersionCreateConfigSchema };
  

AuditLogSchema = z.object({
  "id": AuditLogIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "entityId": EntityIdSchema,
  "entityName": z.string(),
  "userId": UserIdSchema,
  "userName": z.string(),
  "actionType": z.enum(["ACTIVATED", "ADDED", "ADDED_COMMENT", "ADDED_TO_ENTITY_GROUP", "ALARM_ACK", "ALARM_ASSIGNED", "ALARM_CLEAR", "ALARM_DELETE", "ALARM_UNASSIGNED", "ASSIGNED_FROM_TENANT", "ASSIGNED_TO_CUSTOMER", "ASSIGNED_TO_EDGE", "ASSIGNED_TO_TENANT", "ATTRIBUTES_DELETED", "ATTRIBUTES_READ", "ATTRIBUTES_UPDATED", "CHANGE_OWNER", "CREDENTIALS_READ", "CREDENTIALS_UPDATED", "DELETED", "DELETED_COMMENT", "LOCKOUT", "LOGIN", "LOGOUT", "MADE_PRIVATE", "MADE_PUBLIC", "PROVISION_FAILURE", "PROVISION_SUCCESS", "RELATIONS_DELETED", "RELATION_ADD_OR_UPDATE", "RELATION_DELETED", "REMOVED_FROM_ENTITY_GROUP", "REST_API_RULE_ENGINE_CALL", "RPC_CALL", "SMS_SENT", "SUSPENDED", "TIMESERIES_DELETED", "TIMESERIES_UPDATED", "UNASSIGNED_FROM_CUSTOMER", "UNASSIGNED_FROM_EDGE", "UPDATED", "UPDATED_COMMENT"]),
  "actionData": JsonNodeSchema,
  "actionStatus": z.enum(["FAILURE", "SUCCESS"]),
  "actionFailureDetails": z.string()
});
export type AuditLog = z.infer<typeof AuditLogSchema>;
export { AuditLogSchema };
  

AuditLogIdSchema = z.object({
  "id": z.string()
});
export type AuditLogId = z.infer<typeof AuditLogIdSchema>;
export { AuditLogIdSchema };
  

AttributesEntityViewSchema = z.object({
  "cs": z.array(z.string()),
  "sh": z.array(z.string()),
  "ss": z.array(z.string())
});
export type AttributesEntityView = z.infer<typeof AttributesEntityViewSchema>;
export { AttributesEntityViewSchema };
  

AttributeExportDataSchema = z.object({
  "booleanValue": z.boolean(),
  "doubleValue": z.number(),
  "jsonValue": z.string(),
  "key": z.string(),
  "lastUpdateTs": z.number(),
  "longValue": z.number(),
  "strValue": z.string()
});
export type AttributeExportData = z.infer<typeof AttributeExportDataSchema>;
export { AttributeExportDataSchema };
  

AtomicIntegerSchema = z.object({
  "acquire": z.number(),
  "andDecrement": z.number(),
  "andIncrement": z.number(),
  "opaque": z.number(),
  "plain": z.number()
});
export type AtomicInteger = z.infer<typeof AtomicIntegerSchema>;
export { AtomicIntegerSchema };
  

AssetTypeFilterSchema = z.lazy(() => z.object({}));
export type AssetTypeFilter = z.infer<typeof AssetTypeFilterSchema>;
export { AssetTypeFilterSchema };
  

AssetSearchQueryFilterSchema = z.lazy(() => z.object({}));
export type AssetSearchQueryFilter = z.infer<typeof AssetSearchQueryFilterSchema>;
export { AssetSearchQueryFilterSchema };
  

AssetSearchQuerySchema = z.object({
  "relationType": z.string(),
  "assetTypes": z.array(z.string()),
  "parameters": RelationsSearchParametersSchema
});
export type AssetSearchQuery = z.infer<typeof AssetSearchQuerySchema>;
export { AssetSearchQuerySchema };
  

RelationsSearchParametersSchema = z.object({
  "rootId": z.string(),
  "rootType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]),
  "direction": z.enum(["FROM", "TO"]),
  "relationTypeGroup": z.enum(["COMMON", "DASHBOARD", "EDGE", "EDGE_AUTO_ASSIGN_RULE_CHAIN", "FROM_ENTITY_GROUP", "RULE_CHAIN", "RULE_NODE"]),
  "maxLevel": z.number(),
  "fetchLastLevelOnly": z.boolean()
});
export type RelationsSearchParameters = z.infer<typeof RelationsSearchParametersSchema>;
export { RelationsSearchParametersSchema };
  

AssetProfileInfoSchema = z.object({
  "id": EntityIdSchema,
  "name": z.string(),
  "image": z.string(),
  "defaultDashboardId": DashboardIdSchema,
  "tenantId": TenantIdSchema
});
export type AssetProfileInfo = z.infer<typeof AssetProfileInfoSchema>;
export { AssetProfileInfoSchema };
  

AssetProfileSchema = z.object({
  "id": AssetProfileIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "name": z.string(),
  "default": z.boolean(),
  "defaultDashboardId": DashboardIdSchema,
  "defaultRuleChainId": RuleChainIdSchema,
  "defaultQueueName": z.string(),
  "description": z.string(),
  "image": z.string(),
  "defaultEdgeRuleChainId": RuleChainIdSchema
});
export type AssetProfile = z.infer<typeof AssetProfileSchema>;
export { AssetProfileSchema };
  

RuleChainIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["RULE_CHAIN"])
});
export type RuleChainId = z.infer<typeof RuleChainIdSchema>;
export { RuleChainIdSchema };
  

AssetInfoSchema = z.object({
  "id": AssetIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "name": z.string(),
  "type": z.string(),
  "label": z.string(),
  "assetProfileId": AssetProfileIdSchema,
  "additionalInfo": JsonNodeSchema,
  "ownerId": EntityIdSchema,
  "ownerName": z.string(),
  "groups": z.array(EntityInfoSchema)
});
export type AssetInfo = z.infer<typeof AssetInfoSchema>;
export { AssetInfoSchema };
  

EntityInfoSchema = z.object({
  "id": EntityIdSchema,
  "name": z.string()
});
export type EntityInfo = z.infer<typeof EntityInfoSchema>;
export { EntityInfoSchema };
  

AssetSchema = z.object({
  "id": AssetIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "name": z.string(),
  "type": z.string(),
  "label": z.string(),
  "assetProfileId": AssetProfileIdSchema,
  "additionalInfo": JsonNodeSchema,
  "ownerId": EntityIdSchema
});
export type Asset = z.infer<typeof AssetSchema>;
export { AssetSchema };
  

AssetProfileIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["ASSET_PROFILE"])
});
export type AssetProfileId = z.infer<typeof AssetProfileIdSchema>;
export { AssetProfileIdSchema };
  

AssetIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["ASSET"])
});
export type AssetId = z.infer<typeof AssetIdSchema>;
export { AssetIdSchema };
  

ArrayNodeSchema = z.object({});
export type ArrayNode = z.infer<typeof ArrayNodeSchema>;
export { ArrayNodeSchema };
  

ApiUsageStateFilterSchema = z.lazy(() => z.object({}));
export type ApiUsageStateFilter = z.infer<typeof ApiUsageStateFilterSchema>;
export { ApiUsageStateFilterSchema };
  

ApiUsageLimitNotificationRuleTriggerConfigSchema = z.lazy(() => z.object({}));
export type ApiUsageLimitNotificationRuleTriggerConfig = z.infer<typeof ApiUsageLimitNotificationRuleTriggerConfigSchema>;
export { ApiUsageLimitNotificationRuleTriggerConfigSchema };
  

AnyTimeScheduleSchema = z.object({
  "dynamicValue": DynamicValue_Of_stringSchema,
  "type": z.enum(["ANY_TIME", "CUSTOM", "SPECIFIC_TIME"])
});
export type AnyTimeSchedule = z.infer<typeof AnyTimeScheduleSchema>;
export { AnyTimeScheduleSchema };
  

AllowedPermissionsInfoSchema = z.object({
  "userOwnerId": EntityIdSchema,
  "userPermissions": MergedUserPermissionsSchema,
  "allowedResources": z.array(z.enum(["ADMIN_SETTINGS", "ALARM", "ALL", "API_USAGE_STATE", "ASSET", "ASSET_GROUP", "ASSET_PROFILE", "AUDIT_LOG", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "CUSTOMER_GROUP", "DASHBOARD", "DASHBOARD_GROUP", "DEVICE", "DEVICE_GROUP", "DEVICE_PROFILE", "EDGE", "EDGE_GROUP", "ENTITY_VIEW", "ENTITY_VIEW_GROUP", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "OAUTH2_CONFIGURATION_INFO", "OAUTH2_CONFIGURATION_TEMPLATE", "OTA_PACKAGE", "PROFILE", "QUEUE", "ROLE", "RULE_CHAIN", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "USER_GROUP", "VERSION_CONTROL", "WHITE_LABELING", "WIDGETS_BUNDLE", "WIDGET_TYPE"])),
  "operationsByResource": z.record(z.string(), z.array(z.string())),
  "allowedForGroupRoleOperations": z.array(z.enum(["ADD_TO_GROUP", "ALL", "ASSIGN_TO_TENANT", "CHANGE_OWNER", "CLAIM_DEVICES", "CREATE", "DELETE", "IMPERSONATE", "READ", "READ_ATTRIBUTES", "READ_CREDENTIALS", "READ_TELEMETRY", "REMOVE_FROM_GROUP", "RPC_CALL", "SHARE_GROUP", "WRITE", "WRITE_ATTRIBUTES", "WRITE_CREDENTIALS", "WRITE_TELEMETRY"])),
  "allowedForGroupOwnerOnlyOperations": z.array(z.enum(["ADD_TO_GROUP", "ALL", "ASSIGN_TO_TENANT", "CHANGE_OWNER", "CLAIM_DEVICES", "CREATE", "DELETE", "IMPERSONATE", "READ", "READ_ATTRIBUTES", "READ_CREDENTIALS", "READ_TELEMETRY", "REMOVE_FROM_GROUP", "RPC_CALL", "SHARE_GROUP", "WRITE", "WRITE_ATTRIBUTES", "WRITE_CREDENTIALS", "WRITE_TELEMETRY"])),
  "allowedForGroupOwnerOnlyGroupOperations": z.array(z.enum(["ADD_TO_GROUP", "ALL", "ASSIGN_TO_TENANT", "CHANGE_OWNER", "CLAIM_DEVICES", "CREATE", "DELETE", "IMPERSONATE", "READ", "READ_ATTRIBUTES", "READ_CREDENTIALS", "READ_TELEMETRY", "REMOVE_FROM_GROUP", "RPC_CALL", "SHARE_GROUP", "WRITE", "WRITE_ATTRIBUTES", "WRITE_CREDENTIALS", "WRITE_TELEMETRY"]))
});
export type AllowedPermissionsInfo = z.infer<typeof AllowedPermissionsInfoSchema>;
export { AllowedPermissionsInfoSchema };
  

MergedUserPermissionsSchema = z.object({
  "genericPermissions": z.record(z.string(), z.array(z.string())),
  "groupPermissions": z.record(z.string(), MergedGroupPermissionInfoSchema),
  "readGroupPermissions": z.record(z.string(), MergedGroupTypePermissionInfoSchema),
  "readEntityPermissions": z.record(z.string(), MergedGroupTypePermissionInfoSchema),
  "readAttrPermissions": z.record(z.string(), MergedGroupTypePermissionInfoSchema),
  "readTsPermissions": z.record(z.string(), MergedGroupTypePermissionInfoSchema)
});
export type MergedUserPermissions = z.infer<typeof MergedUserPermissionsSchema>;
export { MergedUserPermissionsSchema };
  

MergedGroupTypePermissionInfoSchema = z.object({
  "hasGenericRead": z.boolean(),
  "entityGroupIds": z.array(EntityGroupIdSchema)
});
export type MergedGroupTypePermissionInfo = z.infer<typeof MergedGroupTypePermissionInfoSchema>;
export { MergedGroupTypePermissionInfoSchema };
  

EntityGroupIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["ENTITY_GROUP"])
});
export type EntityGroupId = z.infer<typeof EntityGroupIdSchema>;
export { EntityGroupIdSchema };
  

MergedGroupPermissionInfoSchema = z.object({
  "entityType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]),
  "operations": z.array(z.enum(["ADD_TO_GROUP", "ALL", "ASSIGN_TO_TENANT", "CHANGE_OWNER", "CLAIM_DEVICES", "CREATE", "DELETE", "IMPERSONATE", "READ", "READ_ATTRIBUTES", "READ_CREDENTIALS", "READ_TELEMETRY", "REMOVE_FROM_GROUP", "RPC_CALL", "SHARE_GROUP", "WRITE", "WRITE_ATTRIBUTES", "WRITE_CREDENTIALS", "WRITE_TELEMETRY"]))
});
export type MergedGroupPermissionInfo = z.infer<typeof MergedGroupPermissionInfoSchema>;
export { MergedGroupPermissionInfoSchema };
  

AllowCreateNewDevicesDeviceProfileProvisionConfigurationSchema = z.object({
  "provisionDeviceSecret": z.string()
});
export type AllowCreateNewDevicesDeviceProfileProvisionConfiguration = z.infer<typeof AllowCreateNewDevicesDeviceProfileProvisionConfigurationSchema>;
export { AllowCreateNewDevicesDeviceProfileProvisionConfigurationSchema };
  

AllUsersFilterSchema = z.object({});
export type AllUsersFilter = z.infer<typeof AllUsersFilterSchema>;
export { AllUsersFilterSchema };
  

AlarmRuleSchema = z.object({
  "condition": AlarmConditionSchema,
  "schedule": AlarmScheduleSchema,
  "alarmDetails": z.string(),
  "dashboardId": DashboardIdSchema
});
export type AlarmRule = z.infer<typeof AlarmRuleSchema>;
export { AlarmRuleSchema };
  

DashboardIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["DASHBOARD"])
});
export type DashboardId = z.infer<typeof DashboardIdSchema>;
export { DashboardIdSchema };
  

AlarmScheduleSchema = z.object({
  "dynamicValue": DynamicValue_Of_stringSchema,
  "type": z.enum(["ANY_TIME", "CUSTOM", "SPECIFIC_TIME"])
});
export type AlarmSchedule = z.infer<typeof AlarmScheduleSchema>;
export { AlarmScheduleSchema };
  

DynamicValue_Of_stringSchema = z.object({
  "inherit": z.boolean(),
  "sourceAttribute": z.string(),
  "sourceType": z.enum(["CURRENT_CUSTOMER", "CURRENT_DEVICE", "CURRENT_TENANT", "CURRENT_USER"])
});
export type DynamicValue_Of_string = z.infer<typeof DynamicValue_Of_stringSchema>;
export { DynamicValue_Of_stringSchema };
  

AlarmNotificationRuleTriggerConfigSchema = z.lazy(() => z.object({}));
export type AlarmNotificationRuleTriggerConfig = z.infer<typeof AlarmNotificationRuleTriggerConfigSchema>;
export { AlarmNotificationRuleTriggerConfigSchema };
  

AlarmInfoSchema = z.object({
  "id": AlarmIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "name": z.string(),
  "type": z.string(),
  "originator": EntityIdSchema,
  "severity": z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"]),
  "acknowledged": z.boolean(),
  "cleared": z.boolean(),
  "assigneeId": UserIdSchema,
  "startTs": z.number(),
  "endTs": z.number(),
  "ackTs": z.number(),
  "clearTs": z.number(),
  "assignTs": z.number(),
  "details": JsonNodeSchema,
  "propagateToOwnerHierarchy": z.boolean(),
  "propagate": z.boolean(),
  "propagateToTenant": z.boolean(),
  "propagateRelationTypes": z.array(z.string()),
  "propagateToOwner": z.boolean(),
  "originatorName": z.string(),
  "originatorLabel": z.string(),
  "assignee": AlarmAssigneeSchema,
  "status": z.enum(["ACTIVE_ACK", "ACTIVE_UNACK", "CLEARED_ACK", "CLEARED_UNACK"])
});
export type AlarmInfo = z.infer<typeof AlarmInfoSchema>;
export { AlarmInfoSchema };
  

AlarmDataQuerySchema = z.object({
  "alarmFields": z.array(EntityKeySchema),
  "entityFields": z.array(EntityKeySchema),
  "entityFilter": EntityFilterSchema,
  "keyFilters": z.array(KeyFilterSchema),
  "latestValues": z.array(EntityKeySchema),
  "pageLink": AlarmDataPageLinkSchema
});
export type AlarmDataQuery = z.infer<typeof AlarmDataQuerySchema>;
export { AlarmDataQuerySchema };
  

AlarmDataPageLinkSchema = z.object({
  "assigneeId": UserIdSchema,
  "dynamic": z.boolean(),
  "endTs": z.number(),
  "page": z.number(),
  "pageSize": z.number(),
  "searchPropagatedAlarms": z.boolean(),
  "severityList": z.array(z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"])),
  "sortOrder": EntityDataSortOrderSchema,
  "startTs": z.number(),
  "statusList": z.array(z.enum(["ACK", "ACTIVE", "ANY", "CLEARED", "UNACK"])),
  "textSearch": z.string(),
  "timeWindow": z.number(),
  "typeList": z.array(z.string())
});
export type AlarmDataPageLink = z.infer<typeof AlarmDataPageLinkSchema>;
export { AlarmDataPageLinkSchema };
  

EntityDataSortOrderSchema = z.object({
  "direction": z.enum(["ASC", "DESC"]),
  "key": EntityKeySchema
});
export type EntityDataSortOrder = z.infer<typeof EntityDataSortOrderSchema>;
export { EntityDataSortOrderSchema };
  

AlarmDataSchema = z.object({
  "entityId": EntityIdSchema,
  "latest": z.record(z.string(), z.object({})),
  "id": AlarmIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "name": z.string(),
  "type": z.string(),
  "originator": EntityIdSchema,
  "severity": z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"]),
  "acknowledged": z.boolean(),
  "cleared": z.boolean(),
  "assigneeId": UserIdSchema,
  "startTs": z.number(),
  "endTs": z.number(),
  "ackTs": z.number(),
  "clearTs": z.number(),
  "assignTs": z.number(),
  "details": JsonNodeSchema,
  "propagateToOwnerHierarchy": z.boolean(),
  "propagate": z.boolean(),
  "propagateToTenant": z.boolean(),
  "propagateRelationTypes": z.array(z.string()),
  "propagateToOwner": z.boolean(),
  "originatorName": z.string(),
  "originatorLabel": z.string(),
  "assignee": AlarmAssigneeSchema,
  "status": z.enum(["ACTIVE_ACK", "ACTIVE_UNACK", "CLEARED_ACK", "CLEARED_UNACK"])
});
export type AlarmData = z.infer<typeof AlarmDataSchema>;
export { AlarmDataSchema };
  

AlarmCountQuerySchema = z.object({
  "assigneeId": UserIdSchema,
  "endTs": z.number(),
  "entityFilter": EntityFilterSchema,
  "keyFilters": z.array(KeyFilterSchema),
  "searchPropagatedAlarms": z.boolean(),
  "severityList": z.array(z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"])),
  "startTs": z.number(),
  "statusList": z.array(z.enum(["ACK", "ACTIVE", "ANY", "CLEARED", "UNACK"])),
  "timeWindow": z.number(),
  "typeList": z.array(z.string())
});
export type AlarmCountQuery = z.infer<typeof AlarmCountQuerySchema>;
export { AlarmCountQuerySchema };
  

KeyFilterSchema = z.object({
  "key": EntityKeySchema,
  "predicate": KeyFilterPredicateSchema,
  "valueType": z.enum(["BOOLEAN", "DATE_TIME", "NUMERIC", "STRING"])
});
export type KeyFilter = z.infer<typeof KeyFilterSchema>;
export { KeyFilterSchema };
  

EntityKeySchema = z.object({
  "key": z.string(),
  "type": z.enum(["ALARM_FIELD", "ATTRIBUTE", "CLIENT_ATTRIBUTE", "ENTITY_FIELD", "SERVER_ATTRIBUTE", "SHARED_ATTRIBUTE", "TIME_SERIES"])
});
export type EntityKey = z.infer<typeof EntityKeySchema>;
export { EntityKeySchema };
  

EntityFilterSchema = z.object({});
export type EntityFilter = z.infer<typeof EntityFilterSchema>;
export { EntityFilterSchema };
  

AlarmConditionSchema = z.object({
  "condition": z.array(AlarmConditionFilterSchema),
  "spec": AlarmConditionSpecSchema
});
export type AlarmCondition = z.infer<typeof AlarmConditionSchema>;
export { AlarmConditionSchema };
  

AlarmConditionSpecSchema = z.object({});
export type AlarmConditionSpec = z.infer<typeof AlarmConditionSpecSchema>;
export { AlarmConditionSpecSchema };
  

AlarmConditionFilterSchema = z.object({
  "key": AlarmConditionFilterKeySchema,
  "valueType": z.enum(["BOOLEAN", "DATE_TIME", "NUMERIC", "STRING"]),
  "value": z.object({}),
  "predicate": KeyFilterPredicateSchema
});
export type AlarmConditionFilter = z.infer<typeof AlarmConditionFilterSchema>;
export { AlarmConditionFilterSchema };
  

KeyFilterPredicateSchema = z.object({});
export type KeyFilterPredicate = z.infer<typeof KeyFilterPredicateSchema>;
export { KeyFilterPredicateSchema };
  

AlarmConditionFilterKeySchema = z.object({
  "type": z.enum(["ATTRIBUTE", "CONSTANT", "ENTITY_FIELD", "TIME_SERIES"]),
  "key": z.string()
});
export type AlarmConditionFilterKey = z.infer<typeof AlarmConditionFilterKeySchema>;
export { AlarmConditionFilterKeySchema };
  

AlarmCommentNotificationRuleTriggerConfigSchema = z.object({
  "alarmSeverities": z.array(z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"])),
  "alarmStatuses": z.array(z.enum(["ACK", "ACTIVE", "ANY", "CLEARED", "UNACK"])),
  "alarmTypes": z.array(z.string()),
  "notifyOnCommentUpdate": z.boolean(),
  "onlyUserComments": z.boolean(),
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
export type AlarmCommentNotificationRuleTriggerConfig = z.infer<typeof AlarmCommentNotificationRuleTriggerConfigSchema>;
export { AlarmCommentNotificationRuleTriggerConfigSchema };
  

AlarmCommentInfoSchema = z.object({
  "id": AlarmCommentIdSchema,
  "createdTime": z.number(),
  "alarmId": EntityIdSchema,
  "userId": UserIdSchema,
  "name": z.string(),
  "type": z.enum(["OTHER", "SYSTEM"]),
  "comment": JsonNodeSchema,
  "email": z.string(),
  "firstName": z.string(),
  "lastName": z.string()
});
export type AlarmCommentInfo = z.infer<typeof AlarmCommentInfoSchema>;
export { AlarmCommentInfoSchema };
  

AlarmCommentSchema = z.object({
  "id": AlarmCommentIdSchema,
  "createdTime": z.number(),
  "alarmId": EntityIdSchema,
  "userId": UserIdSchema,
  "name": z.string(),
  "type": z.enum(["OTHER", "SYSTEM"]),
  "comment": JsonNodeSchema
});
export type AlarmComment = z.infer<typeof AlarmCommentSchema>;
export { AlarmCommentSchema };
  

AlarmCommentIdSchema = z.object({
  "id": z.string()
});
export type AlarmCommentId = z.infer<typeof AlarmCommentIdSchema>;
export { AlarmCommentIdSchema };
  

AlarmAssignmentNotificationRuleTriggerConfigSchema = z.lazy(() => z.object({}));
export type AlarmAssignmentNotificationRuleTriggerConfig = z.infer<typeof AlarmAssignmentNotificationRuleTriggerConfigSchema>;
export { AlarmAssignmentNotificationRuleTriggerConfigSchema };
  

AlarmAssigneeSchema = z.object({
  "email": z.string(),
  "firstName": z.string(),
  "id": UserIdSchema,
  "lastName": z.string()
});
export type AlarmAssignee = z.infer<typeof AlarmAssigneeSchema>;
export { AlarmAssigneeSchema };
  

AlarmSchema = z.object({
  "id": AlarmIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema,
  "name": z.string(),
  "type": z.string(),
  "originator": EntityIdSchema,
  "severity": z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"]),
  "acknowledged": z.boolean(),
  "cleared": z.boolean(),
  "assigneeId": UserIdSchema,
  "startTs": z.number(),
  "endTs": z.number(),
  "ackTs": z.number(),
  "clearTs": z.number(),
  "assignTs": z.number(),
  "details": JsonNodeSchema,
  "propagateToOwnerHierarchy": z.boolean(),
  "propagate": z.boolean(),
  "propagateToTenant": z.boolean(),
  "propagateRelationTypes": z.array(z.string()),
  "propagateToOwner": z.boolean(),
  "status": z.enum(["ACTIVE_ACK", "ACTIVE_UNACK", "CLEARED_ACK", "CLEARED_UNACK"])
});
export type Alarm = z.infer<typeof AlarmSchema>;
export { AlarmSchema };
  

UserIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["USER"])
});
export type UserId = z.infer<typeof UserIdSchema>;
export { UserIdSchema };
  

EntityIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"])
});
export type EntityId = z.infer<typeof EntityIdSchema>;
export { EntityIdSchema };
  

CustomerIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["CUSTOMER"])
});
export type CustomerId = z.infer<typeof CustomerIdSchema>;
export { CustomerIdSchema };
  

AlarmIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["ALARM"])
});
export type AlarmId = z.infer<typeof AlarmIdSchema>;
export { AlarmIdSchema };
  

AffectedUserFilterSchema = z.object({});
export type AffectedUserFilter = z.infer<typeof AffectedUserFilterSchema>;
export { AffectedUserFilterSchema };
  

AffectedTenantAdministratorsFilterSchema = z.object({});
export type AffectedTenantAdministratorsFilter = z.infer<typeof AffectedTenantAdministratorsFilterSchema>;
export { AffectedTenantAdministratorsFilterSchema };
  

AdminSettingsSchema = z.object({
  "id": AdminSettingsIdSchema,
  "createdTime": z.number(),
  "tenantId": TenantIdSchema,
  "key": z.string(),
  "jsonValue": JsonNodeSchema
});
export type AdminSettings = z.infer<typeof AdminSettingsSchema>;
export { AdminSettingsSchema };
  

JsonNodeSchema = z.object({});
export type JsonNode = z.infer<typeof JsonNodeSchema>;
export { JsonNodeSchema };
  

TenantIdSchema = z.object({
  "id": z.string(),
  "entityType": z.enum(["TENANT"])
});
export type TenantId = z.infer<typeof TenantIdSchema>;
export { TenantIdSchema };
  

AdminSettingsIdSchema = z.object({
  "id": z.string()
});
export type AdminSettingsId = z.infer<typeof AdminSettingsIdSchema>;
export { AdminSettingsIdSchema };
  

ActivateUserRequestSchema = z.object({
  "activateToken": z.string(),
  "password": z.string()
});
export type ActivateUserRequest = z.infer<typeof ActivateUserRequestSchema>;
export { ActivateUserRequestSchema };
  

AccountTwoFaSettingsSchema = z.object({
  "configs": z.record(z.string(), TwoFaAccountConfigSchema)
});
export type AccountTwoFaSettings = z.infer<typeof AccountTwoFaSettingsSchema>;
export { AccountTwoFaSettingsSchema };
  

TwoFaAccountConfigSchema = z.object({
  "useByDefault": z.boolean()
});
export type TwoFaAccountConfig = z.infer<typeof TwoFaAccountConfigSchema>;
export { TwoFaAccountConfigSchema };
  
