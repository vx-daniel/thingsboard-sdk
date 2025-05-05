import { z } from "zod";

export const AccountTwoFaSettingsSchema: z.ZodType<any> = z.lazy(() => AccountTwoFaSettingsSchemaImpl);
export const ActivateUserRequestSchema: z.ZodType<any> = z.lazy(() => ActivateUserRequestSchemaImpl);
export const AdminSettingsSchema: z.ZodType<any> = z.lazy(() => AdminSettingsSchemaImpl);
export const AdminSettingsIdSchema: z.ZodType<any> = z.lazy(() => AdminSettingsIdSchemaImpl);
export const AffectedTenantAdministratorsFilterSchema: z.ZodType<any> = z.lazy(() => AffectedTenantAdministratorsFilterSchemaImpl);
export const AffectedUserFilterSchema: z.ZodType<any> = z.lazy(() => AffectedUserFilterSchemaImpl);
export const AlarmSchema: z.ZodType<any> = z.lazy(() => AlarmSchemaImpl);
export const AlarmAssigneeSchema: z.ZodType<any> = z.lazy(() => AlarmAssigneeSchemaImpl);
export const AlarmAssignmentNotificationRuleTriggerConfigSchema: z.ZodType<any> = z.lazy(() => AlarmAssignmentNotificationRuleTriggerConfigSchemaImpl);
export const AlarmCommentSchema: z.ZodType<any> = z.lazy(() => AlarmCommentSchemaImpl);
export const AlarmCommentIdSchema: z.ZodType<any> = z.lazy(() => AlarmCommentIdSchemaImpl);
export const AlarmCommentInfoSchema: z.ZodType<any> = z.lazy(() => AlarmCommentInfoSchemaImpl);
export const AlarmCommentNotificationRuleTriggerConfigSchema: z.ZodType<any> = z.lazy(() => AlarmCommentNotificationRuleTriggerConfigSchemaImpl);
export const AlarmConditionSchema: z.ZodType<any> = z.lazy(() => AlarmConditionSchemaImpl);
export const AlarmConditionFilterSchema: z.ZodType<any> = z.lazy(() => AlarmConditionFilterSchemaImpl);
export const AlarmConditionFilterKeySchema: z.ZodType<any> = z.lazy(() => AlarmConditionFilterKeySchemaImpl);
export const AlarmConditionSpecSchema: z.ZodType<any> = z.lazy(() => AlarmConditionSpecSchemaImpl);
export const AlarmCountQuerySchema: z.ZodType<any> = z.lazy(() => AlarmCountQuerySchemaImpl);
export const AlarmDataSchema: z.ZodType<any> = z.lazy(() => AlarmDataSchemaImpl);
export const AlarmDataPageLinkSchema: z.ZodType<any> = z.lazy(() => AlarmDataPageLinkSchemaImpl);
export const AlarmDataQuerySchema: z.ZodType<any> = z.lazy(() => AlarmDataQuerySchemaImpl);
export const AlarmIdSchema: z.ZodType<any> = z.lazy(() => AlarmIdSchemaImpl);
export const AlarmInfoSchema: z.ZodType<any> = z.lazy(() => AlarmInfoSchemaImpl);
export const AlarmNotificationRuleTriggerConfigSchema: z.ZodType<any> = z.lazy(() => AlarmNotificationRuleTriggerConfigSchemaImpl);
export const AlarmRuleSchema: z.ZodType<any> = z.lazy(() => AlarmRuleSchemaImpl);
export const AlarmScheduleSchema: z.ZodType<any> = z.lazy(() => AlarmScheduleSchemaImpl);
export const AllUsersFilterSchema: z.ZodType<any> = z.lazy(() => AllUsersFilterSchemaImpl);
export const AllowCreateNewDevicesDeviceProfileProvisionConfigurationSchema: z.ZodType<any> = z.lazy(() => AllowCreateNewDevicesDeviceProfileProvisionConfigurationSchemaImpl);
export const AllowedPermissionsInfoSchema: z.ZodType<any> = z.lazy(() => AllowedPermissionsInfoSchemaImpl);
export const AnyTimeScheduleSchema: z.ZodType<any> = z.lazy(() => AnyTimeScheduleSchemaImpl);
export const ApiUsageLimitNotificationRuleTriggerConfigSchema: z.ZodType<any> = z.lazy(() => ApiUsageLimitNotificationRuleTriggerConfigSchemaImpl);
export const ApiUsageStateFilterSchema: z.ZodType<any> = z.lazy(() => ApiUsageStateFilterSchemaImpl);
export const ArrayNodeSchema: z.ZodType<any> = z.lazy(() => ArrayNodeSchemaImpl);
export const AssetSchema: z.ZodType<any> = z.lazy(() => AssetSchemaImpl);
export const AssetIdSchema: z.ZodType<any> = z.lazy(() => AssetIdSchemaImpl);
export const AssetInfoSchema: z.ZodType<any> = z.lazy(() => AssetInfoSchemaImpl);
export const AssetProfileSchema: z.ZodType<any> = z.lazy(() => AssetProfileSchemaImpl);
export const AssetProfileIdSchema: z.ZodType<any> = z.lazy(() => AssetProfileIdSchemaImpl);
export const AssetProfileInfoSchema: z.ZodType<any> = z.lazy(() => AssetProfileInfoSchemaImpl);
export const AssetSearchQuerySchema: z.ZodType<any> = z.lazy(() => AssetSearchQuerySchemaImpl);
export const AssetSearchQueryFilterSchema: z.ZodType<any> = z.lazy(() => AssetSearchQueryFilterSchemaImpl);
export const AssetTypeFilterSchema: z.ZodType<any> = z.lazy(() => AssetTypeFilterSchemaImpl);
export const AtomicIntegerSchema: z.ZodType<any> = z.lazy(() => AtomicIntegerSchemaImpl);
export const AttributeExportDataSchema: z.ZodType<any> = z.lazy(() => AttributeExportDataSchemaImpl);
export const AttributesEntityViewSchema: z.ZodType<any> = z.lazy(() => AttributesEntityViewSchemaImpl);
export const AuditLogSchema: z.ZodType<any> = z.lazy(() => AuditLogSchemaImpl);
export const AuditLogIdSchema: z.ZodType<any> = z.lazy(() => AuditLogIdSchemaImpl);
export const AutoVersionCreateConfigSchema: z.ZodType<any> = z.lazy(() => AutoVersionCreateConfigSchemaImpl);
export const AwsSnsSmsProviderConfigurationSchema: z.ZodType<any> = z.lazy(() => AwsSnsSmsProviderConfigurationSchemaImpl);
export const BackupCodeTwoFaAccountConfigSchema: z.ZodType<any> = z.lazy(() => BackupCodeTwoFaAccountConfigSchemaImpl);
export const BackupCodeTwoFaProviderConfigSchema: z.ZodType<any> = z.lazy(() => BackupCodeTwoFaProviderConfigSchemaImpl);
export const BlobEntityIdSchema: z.ZodType<any> = z.lazy(() => BlobEntityIdSchemaImpl);
export const BlobEntityInfoSchema: z.ZodType<any> = z.lazy(() => BlobEntityInfoSchemaImpl);
export const BlobEntityWithCustomerInfoSchema: z.ZodType<any> = z.lazy(() => BlobEntityWithCustomerInfoSchemaImpl);
export const BooleanFilterPredicateSchema: z.ZodType<any> = z.lazy(() => BooleanFilterPredicateSchemaImpl);
export const BranchInfoSchema: z.ZodType<any> = z.lazy(() => BranchInfoSchemaImpl);
export const BulkImportRequestSchema: z.ZodType<any> = z.lazy(() => BulkImportRequestSchemaImpl);
export const BulkImportResult_Of_AssetSchema: z.ZodType<any> = z.lazy(() => BulkImportResult_Of_AssetSchemaImpl);
export const BulkImportResult_Of_DeviceSchema: z.ZodType<any> = z.lazy(() => BulkImportResult_Of_DeviceSchemaImpl);
export const BulkImportResult_Of_EdgeSchema: z.ZodType<any> = z.lazy(() => BulkImportResult_Of_EdgeSchemaImpl);
export const ButtonSchema: z.ZodType<any> = z.lazy(() => ButtonSchemaImpl);
export const ByteArrayResourceSchema: z.ZodType<any> = z.lazy(() => ByteArrayResourceSchemaImpl);
export const ByteBufferSchema: z.ZodType<any> = z.lazy(() => ByteBufferSchemaImpl);
export const ChangePasswordRequestSchema: z.ZodType<any> = z.lazy(() => ChangePasswordRequestSchemaImpl);
export const CheckPreProvisionedDevicesDeviceProfileProvisionConfigurationSchema: z.ZodType<any> = z.lazy(() => CheckPreProvisionedDevicesDeviceProfileProvisionConfigurationSchemaImpl);
export const ClaimRequestSchema: z.ZodType<any> = z.lazy(() => ClaimRequestSchemaImpl);
export const ClearRuleSchema: z.ZodType<any> = z.lazy(() => ClearRuleSchemaImpl);
export const ClientAttributesQueryingSnmpCommunicationConfigSchema: z.ZodType<any> = z.lazy(() => ClientAttributesQueryingSnmpCommunicationConfigSchemaImpl);
export const CoapDeviceProfileTransportConfigurationSchema: z.ZodType<any> = z.lazy(() => CoapDeviceProfileTransportConfigurationSchemaImpl);
export const CoapDeviceTransportConfigurationSchema: z.ZodType<any> = z.lazy(() => CoapDeviceTransportConfigurationSchemaImpl);
export const CoapDeviceTypeConfigurationSchema: z.ZodType<any> = z.lazy(() => CoapDeviceTypeConfigurationSchemaImpl);
export const ColumnMappingSchema: z.ZodType<any> = z.lazy(() => ColumnMappingSchemaImpl);
export const ComparisonTsValueSchema: z.ZodType<any> = z.lazy(() => ComparisonTsValueSchemaImpl);
export const ComplexFilterPredicateSchema: z.ZodType<any> = z.lazy(() => ComplexFilterPredicateSchemaImpl);
export const ComplexVersionCreateRequestSchema: z.ZodType<any> = z.lazy(() => ComplexVersionCreateRequestSchemaImpl);
export const ComponentDescriptorSchema: z.ZodType<any> = z.lazy(() => ComponentDescriptorSchemaImpl);
export const ComponentDescriptorIdSchema: z.ZodType<any> = z.lazy(() => ComponentDescriptorIdSchemaImpl);
export const ContactBased_Of_objectSchema: z.ZodType<any> = z.lazy(() => ContactBased_Of_objectSchemaImpl);
export const ConverterSchema: z.ZodType<any> = z.lazy(() => ConverterSchemaImpl);
export const ConverterIdSchema: z.ZodType<any> = z.lazy(() => ConverterIdSchemaImpl);
export const CustomMenuSchema: z.ZodType<any> = z.lazy(() => CustomMenuSchemaImpl);
export const CustomMenuItemSchema: z.ZodType<any> = z.lazy(() => CustomMenuItemSchemaImpl);
export const CustomTimeScheduleSchema: z.ZodType<any> = z.lazy(() => CustomTimeScheduleSchemaImpl);
export const CustomTimeScheduleItemSchema: z.ZodType<any> = z.lazy(() => CustomTimeScheduleItemSchemaImpl);
export const CustomTranslationSchema: z.ZodType<any> = z.lazy(() => CustomTranslationSchemaImpl);
export const CustomerSchema: z.ZodType<any> = z.lazy(() => CustomerSchemaImpl);
export const CustomerIdSchema: z.ZodType<any> = z.lazy(() => CustomerIdSchemaImpl);
export const CustomerInfoSchema: z.ZodType<any> = z.lazy(() => CustomerInfoSchemaImpl);
export const CustomerUsersFilterSchema: z.ZodType<any> = z.lazy(() => CustomerUsersFilterSchemaImpl);
export const DashboardSchema: z.ZodType<any> = z.lazy(() => DashboardSchemaImpl);
export const DashboardIdSchema: z.ZodType<any> = z.lazy(() => DashboardIdSchemaImpl);
export const DashboardInfoSchema: z.ZodType<any> = z.lazy(() => DashboardInfoSchemaImpl);
export const DebugConverterEventFilterSchema: z.ZodType<any> = z.lazy(() => DebugConverterEventFilterSchemaImpl);
export const DebugIntegrationEventFilterSchema: z.ZodType<any> = z.lazy(() => DebugIntegrationEventFilterSchemaImpl);
export const DefaultCoapDeviceTypeConfigurationSchema: z.ZodType<any> = z.lazy(() => DefaultCoapDeviceTypeConfigurationSchemaImpl);
export const DefaultDeviceConfigurationSchema: z.ZodType<any> = z.lazy(() => DefaultDeviceConfigurationSchemaImpl);
export const DefaultDeviceProfileConfigurationSchema: z.ZodType<any> = z.lazy(() => DefaultDeviceProfileConfigurationSchemaImpl);
export const DefaultDeviceProfileTransportConfigurationSchema: z.ZodType<any> = z.lazy(() => DefaultDeviceProfileTransportConfigurationSchemaImpl);
export const DefaultDeviceTransportConfigurationSchema: z.ZodType<any> = z.lazy(() => DefaultDeviceTransportConfigurationSchemaImpl);
export const DefaultRuleChainCreateRequestSchema: z.ZodType<any> = z.lazy(() => DefaultRuleChainCreateRequestSchemaImpl);
export const DefaultTenantProfileConfigurationSchema: z.ZodType<any> = z.lazy(() => DefaultTenantProfileConfigurationSchemaImpl);
export const DeferredResult_Of_EntityDataDiffSchema: z.ZodType<any> = z.lazy(() => DeferredResult_Of_EntityDataDiffSchemaImpl);
export const DeferredResult_Of_EntityDataInfoSchema: z.ZodType<any> = z.lazy(() => DeferredResult_Of_EntityDataInfoSchemaImpl);
export const DeferredResult_Of_List_Of_BranchInfoSchema: z.ZodType<any> = z.lazy(() => DeferredResult_Of_List_Of_BranchInfoSchemaImpl);
export const DeferredResult_Of_List_Of_VersionedEntityInfoSchema: z.ZodType<any> = z.lazy(() => DeferredResult_Of_List_Of_VersionedEntityInfoSchemaImpl);
export const DeferredResult_Of_PageData_Of_EntityVersionSchema: z.ZodType<any> = z.lazy(() => DeferredResult_Of_PageData_Of_EntityVersionSchemaImpl);
export const DeferredResult_Of_RepositorySettingsSchema: z.ZodType<any> = z.lazy(() => DeferredResult_Of_RepositorySettingsSchemaImpl);
export const DeferredResult_Of_ResponseEntitySchema: z.ZodType<any> = z.lazy(() => DeferredResult_Of_ResponseEntitySchemaImpl);
export const DeferredResult_Of_VoidSchema: z.ZodType<any> = z.lazy(() => DeferredResult_Of_VoidSchemaImpl);
export const DeferredResult_Of_uuidSchema: z.ZodType<any> = z.lazy(() => DeferredResult_Of_uuidSchemaImpl);
export const DeliveryMethodNotificationTemplateSchema: z.ZodType<any> = z.lazy(() => DeliveryMethodNotificationTemplateSchemaImpl);
export const DeviceSchema: z.ZodType<any> = z.lazy(() => DeviceSchemaImpl);
export const DeviceActivityNotificationRuleTriggerConfigSchema: z.ZodType<any> = z.lazy(() => DeviceActivityNotificationRuleTriggerConfigSchemaImpl);
export const DeviceConfigurationSchema: z.ZodType<any> = z.lazy(() => DeviceConfigurationSchemaImpl);
export const DeviceCredentialsSchema: z.ZodType<any> = z.lazy(() => DeviceCredentialsSchemaImpl);
export const DeviceCredentialsIdSchema: z.ZodType<any> = z.lazy(() => DeviceCredentialsIdSchemaImpl);
export const DeviceDataSchema: z.ZodType<any> = z.lazy(() => DeviceDataSchemaImpl);
export const DeviceExportDataSchema: z.ZodType<any> = z.lazy(() => DeviceExportDataSchemaImpl);
export const DeviceGroupOtaPackageSchema: z.ZodType<any> = z.lazy(() => DeviceGroupOtaPackageSchemaImpl);
export const DeviceIdSchema: z.ZodType<any> = z.lazy(() => DeviceIdSchemaImpl);
export const DeviceInfoSchema: z.ZodType<any> = z.lazy(() => DeviceInfoSchemaImpl);
export const DeviceProfileSchema: z.ZodType<any> = z.lazy(() => DeviceProfileSchemaImpl);
export const DeviceProfileAlarmSchema: z.ZodType<any> = z.lazy(() => DeviceProfileAlarmSchemaImpl);
export const DeviceProfileConfigurationSchema: z.ZodType<any> = z.lazy(() => DeviceProfileConfigurationSchemaImpl);
export const DeviceProfileDataSchema: z.ZodType<any> = z.lazy(() => DeviceProfileDataSchemaImpl);
export const DeviceProfileIdSchema: z.ZodType<any> = z.lazy(() => DeviceProfileIdSchemaImpl);
export const DeviceProfileInfoSchema: z.ZodType<any> = z.lazy(() => DeviceProfileInfoSchemaImpl);
export const DeviceProfileProvisionConfigurationSchema: z.ZodType<any> = z.lazy(() => DeviceProfileProvisionConfigurationSchemaImpl);
export const DeviceProfileTransportConfigurationSchema: z.ZodType<any> = z.lazy(() => DeviceProfileTransportConfigurationSchemaImpl);
export const DeviceSearchQuerySchema: z.ZodType<any> = z.lazy(() => DeviceSearchQuerySchemaImpl);
export const DeviceSearchQueryFilterSchema: z.ZodType<any> = z.lazy(() => DeviceSearchQueryFilterSchemaImpl);
export const DeviceTransportConfigurationSchema: z.ZodType<any> = z.lazy(() => DeviceTransportConfigurationSchemaImpl);
export const DeviceTypeFilterSchema: z.ZodType<any> = z.lazy(() => DeviceTypeFilterSchemaImpl);
export const DisabledDeviceProfileProvisionConfigurationSchema: z.ZodType<any> = z.lazy(() => DisabledDeviceProfileProvisionConfigurationSchemaImpl);
export const DurationAlarmConditionSpecSchema: z.ZodType<any> = z.lazy(() => DurationAlarmConditionSpecSchemaImpl);
export const DynamicValue_Of_booleanSchema: z.ZodType<any> = z.lazy(() => DynamicValue_Of_booleanSchemaImpl);
export const DynamicValue_Of_doubleSchema: z.ZodType<any> = z.lazy(() => DynamicValue_Of_doubleSchemaImpl);
export const DynamicValue_Of_intSchema: z.ZodType<any> = z.lazy(() => DynamicValue_Of_intSchemaImpl);
export const DynamicValue_Of_longSchema: z.ZodType<any> = z.lazy(() => DynamicValue_Of_longSchemaImpl);
export const DynamicValue_Of_stringSchema: z.ZodType<any> = z.lazy(() => DynamicValue_Of_stringSchemaImpl);
export const EdgeSchema: z.ZodType<any> = z.lazy(() => EdgeSchemaImpl);
export const EdgeEventSchema: z.ZodType<any> = z.lazy(() => EdgeEventSchemaImpl);
export const EdgeEventIdSchema: z.ZodType<any> = z.lazy(() => EdgeEventIdSchemaImpl);
export const EdgeIdSchema: z.ZodType<any> = z.lazy(() => EdgeIdSchemaImpl);
export const EdgeInfoSchema: z.ZodType<any> = z.lazy(() => EdgeInfoSchemaImpl);
export const EdgeInstructionsSchema: z.ZodType<any> = z.lazy(() => EdgeInstructionsSchemaImpl);
export const EdgeSearchQuerySchema: z.ZodType<any> = z.lazy(() => EdgeSearchQuerySchemaImpl);
export const EdgeSearchQueryFilterSchema: z.ZodType<any> = z.lazy(() => EdgeSearchQueryFilterSchemaImpl);
export const EdgeTypeFilterSchema: z.ZodType<any> = z.lazy(() => EdgeTypeFilterSchemaImpl);
export const EfentoCoapDeviceTypeConfigurationSchema: z.ZodType<any> = z.lazy(() => EfentoCoapDeviceTypeConfigurationSchemaImpl);
export const EmailDeliveryMethodNotificationTemplateSchema: z.ZodType<any> = z.lazy(() => EmailDeliveryMethodNotificationTemplateSchemaImpl);
export const EmailTwoFaAccountConfigSchema: z.ZodType<any> = z.lazy(() => EmailTwoFaAccountConfigSchemaImpl);
export const EmailTwoFaProviderConfigSchema: z.ZodType<any> = z.lazy(() => EmailTwoFaProviderConfigSchemaImpl);
export const EntitiesByGroupNameFilterSchema: z.ZodType<any> = z.lazy(() => EntitiesByGroupNameFilterSchemaImpl);
export const EntitiesLimitNotificationRuleTriggerConfigSchema: z.ZodType<any> = z.lazy(() => EntitiesLimitNotificationRuleTriggerConfigSchemaImpl);
export const EntityActionNotificationRuleTriggerConfigSchema: z.ZodType<any> = z.lazy(() => EntityActionNotificationRuleTriggerConfigSchemaImpl);
export const EntityCountQuerySchema: z.ZodType<any> = z.lazy(() => EntityCountQuerySchemaImpl);
export const EntityDataSchema: z.ZodType<any> = z.lazy(() => EntityDataSchemaImpl);
export const EntityDataDiffSchema: z.ZodType<any> = z.lazy(() => EntityDataDiffSchemaImpl);
export const EntityDataInfoSchema: z.ZodType<any> = z.lazy(() => EntityDataInfoSchemaImpl);
export const EntityDataPageLinkSchema: z.ZodType<any> = z.lazy(() => EntityDataPageLinkSchemaImpl);
export const EntityDataQuerySchema: z.ZodType<any> = z.lazy(() => EntityDataQuerySchemaImpl);
export const EntityDataSortOrderSchema: z.ZodType<any> = z.lazy(() => EntityDataSortOrderSchemaImpl);
export const EntityExportData_Of_objectSchema: z.ZodType<any> = z.lazy(() => EntityExportData_Of_objectSchemaImpl);
export const EntityFilterSchema: z.ZodType<any> = z.lazy(() => EntityFilterSchemaImpl);
export const EntityGroupSchema: z.ZodType<any> = z.lazy(() => EntityGroupSchemaImpl);
export const EntityGroupExportDataSchema: z.ZodType<any> = z.lazy(() => EntityGroupExportDataSchemaImpl);
export const EntityGroupFilterSchema: z.ZodType<any> = z.lazy(() => EntityGroupFilterSchemaImpl);
export const EntityGroupIdSchema: z.ZodType<any> = z.lazy(() => EntityGroupIdSchemaImpl);
export const EntityGroupInfoSchema: z.ZodType<any> = z.lazy(() => EntityGroupInfoSchemaImpl);
export const EntityGroupListFilterSchema: z.ZodType<any> = z.lazy(() => EntityGroupListFilterSchemaImpl);
export const EntityGroupNameFilterSchema: z.ZodType<any> = z.lazy(() => EntityGroupNameFilterSchemaImpl);
export const EntityIdSchema: z.ZodType<any> = z.lazy(() => EntityIdSchemaImpl);
export const EntityInfoSchema: z.ZodType<any> = z.lazy(() => EntityInfoSchemaImpl);
export const EntityKeySchema: z.ZodType<any> = z.lazy(() => EntityKeySchemaImpl);
export const EntityListFilterSchema: z.ZodType<any> = z.lazy(() => EntityListFilterSchemaImpl);
export const EntityLoadErrorSchema: z.ZodType<any> = z.lazy(() => EntityLoadErrorSchemaImpl);
export const EntityNameFilterSchema: z.ZodType<any> = z.lazy(() => EntityNameFilterSchemaImpl);
export const EntityRelationSchema: z.ZodType<any> = z.lazy(() => EntityRelationSchemaImpl);
export const EntityRelationInfoSchema: z.ZodType<any> = z.lazy(() => EntityRelationInfoSchemaImpl);
export const EntityRelationsQuerySchema: z.ZodType<any> = z.lazy(() => EntityRelationsQuerySchemaImpl);
export const EntitySubtypeSchema: z.ZodType<any> = z.lazy(() => EntitySubtypeSchemaImpl);
export const EntityTypeFilterSchema: z.ZodType<any> = z.lazy(() => EntityTypeFilterSchemaImpl);
export const EntityTypeLoadResultSchema: z.ZodType<any> = z.lazy(() => EntityTypeLoadResultSchemaImpl);
export const EntityTypeVersionCreateConfigSchema: z.ZodType<any> = z.lazy(() => EntityTypeVersionCreateConfigSchemaImpl);
export const EntityTypeVersionLoadConfigSchema: z.ZodType<any> = z.lazy(() => EntityTypeVersionLoadConfigSchemaImpl);
export const EntityTypeVersionLoadRequestSchema: z.ZodType<any> = z.lazy(() => EntityTypeVersionLoadRequestSchemaImpl);
export const EntityVersionSchema: z.ZodType<any> = z.lazy(() => EntityVersionSchemaImpl);
export const EntityViewSchema: z.ZodType<any> = z.lazy(() => EntityViewSchemaImpl);
export const EntityViewIdSchema: z.ZodType<any> = z.lazy(() => EntityViewIdSchemaImpl);
export const EntityViewInfoSchema: z.ZodType<any> = z.lazy(() => EntityViewInfoSchemaImpl);
export const EntityViewSearchQuerySchema: z.ZodType<any> = z.lazy(() => EntityViewSearchQuerySchemaImpl);
export const EntityViewSearchQueryFilterSchema: z.ZodType<any> = z.lazy(() => EntityViewSearchQueryFilterSchemaImpl);
export const EntityViewTypeFilterSchema: z.ZodType<any> = z.lazy(() => EntityViewTypeFilterSchemaImpl);
export const ErrorEventFilterSchema: z.ZodType<any> = z.lazy(() => ErrorEventFilterSchemaImpl);
export const EscalatedNotificationRuleRecipientsConfigSchema: z.ZodType<any> = z.lazy(() => EscalatedNotificationRuleRecipientsConfigSchemaImpl);
export const EventFilterSchema: z.ZodType<any> = z.lazy(() => EventFilterSchemaImpl);
export const EventIdSchema: z.ZodType<any> = z.lazy(() => EventIdSchemaImpl);
export const EventInfoSchema: z.ZodType<any> = z.lazy(() => EventInfoSchemaImpl);
export const ExportableEntity_Of_EntityIdSchema: z.ZodType<any> = z.lazy(() => ExportableEntity_Of_EntityIdSchemaImpl);
export const FaviconSchema: z.ZodType<any> = z.lazy(() => FaviconSchemaImpl);
export const FeaturesInfoSchema: z.ZodType<any> = z.lazy(() => FeaturesInfoSchemaImpl);
export const FilterPredicateValue_Of_booleanSchema: z.ZodType<any> = z.lazy(() => FilterPredicateValue_Of_booleanSchemaImpl);
export const FilterPredicateValue_Of_doubleSchema: z.ZodType<any> = z.lazy(() => FilterPredicateValue_Of_doubleSchemaImpl);
export const FilterPredicateValue_Of_intSchema: z.ZodType<any> = z.lazy(() => FilterPredicateValue_Of_intSchemaImpl);
export const FilterPredicateValue_Of_longSchema: z.ZodType<any> = z.lazy(() => FilterPredicateValue_Of_longSchemaImpl);
export const FilterPredicateValue_Of_stringSchema: z.ZodType<any> = z.lazy(() => FilterPredicateValue_Of_stringSchemaImpl);
export const GroupEntityExportDataSchema: z.ZodType<any> = z.lazy(() => GroupEntityExportDataSchemaImpl);
export const GroupPermissionSchema: z.ZodType<any> = z.lazy(() => GroupPermissionSchemaImpl);
export const GroupPermissionIdSchema: z.ZodType<any> = z.lazy(() => GroupPermissionIdSchemaImpl);
export const GroupPermissionInfoSchema: z.ZodType<any> = z.lazy(() => GroupPermissionInfoSchemaImpl);
export const HasId_Of_objectSchema: z.ZodType<any> = z.lazy(() => HasId_Of_objectSchemaImpl);
export const HomeDashboardSchema: z.ZodType<any> = z.lazy(() => HomeDashboardSchemaImpl);
export const HomeDashboardInfoSchema: z.ZodType<any> = z.lazy(() => HomeDashboardInfoSchemaImpl);
export const ImageExportDataSchema: z.ZodType<any> = z.lazy(() => ImageExportDataSchemaImpl);
export const InputStreamSchema: z.ZodType<any> = z.lazy(() => InputStreamSchemaImpl);
export const IntegrationSchema: z.ZodType<any> = z.lazy(() => IntegrationSchemaImpl);
export const IntegrationIdSchema: z.ZodType<any> = z.lazy(() => IntegrationIdSchemaImpl);
export const IntegrationInfoSchema: z.ZodType<any> = z.lazy(() => IntegrationInfoSchemaImpl);
export const IntegrationLifecycleEventNotificationRuleTriggerConfigSchema: z.ZodType<any> = z.lazy(() => IntegrationLifecycleEventNotificationRuleTriggerConfigSchemaImpl);
export const JWT_PairSchema: z.ZodType<any> = z.lazy(() => JWT_PairSchemaImpl);
export const JWT_SettingsSchema: z.ZodType<any> = z.lazy(() => JWT_SettingsSchemaImpl);
export const JsonNodeSchema: z.ZodType<any> = z.lazy(() => JsonNodeSchemaImpl);
export const JsonTransportPayloadConfigurationSchema: z.ZodType<any> = z.lazy(() => JsonTransportPayloadConfigurationSchemaImpl);
export const KeyFilterSchema: z.ZodType<any> = z.lazy(() => KeyFilterSchemaImpl);
export const KeyFilterPredicateSchema: z.ZodType<any> = z.lazy(() => KeyFilterPredicateSchemaImpl);
export const LastVisitedDashboardInfoSchema: z.ZodType<any> = z.lazy(() => LastVisitedDashboardInfoSchemaImpl);
export const LicenseUsageInfoSchema: z.ZodType<any> = z.lazy(() => LicenseUsageInfoSchemaImpl);
export const LifeCycleEventFilterSchema: z.ZodType<any> = z.lazy(() => LifeCycleEventFilterSchemaImpl);
export const LoginRequestSchema: z.ZodType<any> = z.lazy(() => LoginRequestSchemaImpl);
export const LoginResponseSchema: z.ZodType<any> = z.lazy(() => LoginResponseSchemaImpl);
export const LoginWhiteLabelingParamsSchema: z.ZodType<any> = z.lazy(() => LoginWhiteLabelingParamsSchemaImpl);
export const LwM2MBootstrapServerCredentialSchema: z.ZodType<any> = z.lazy(() => LwM2MBootstrapServerCredentialSchemaImpl);
export const LwM2mInstanceSchema: z.ZodType<any> = z.lazy(() => LwM2mInstanceSchemaImpl);
export const LwM2mObjectSchema: z.ZodType<any> = z.lazy(() => LwM2mObjectSchemaImpl);
export const LwM2mResourceObserveSchema: z.ZodType<any> = z.lazy(() => LwM2mResourceObserveSchemaImpl);
export const Lwm2mDeviceProfileTransportConfigurationSchema: z.ZodType<any> = z.lazy(() => Lwm2mDeviceProfileTransportConfigurationSchemaImpl);
export const Lwm2mDeviceTransportConfigurationSchema: z.ZodType<any> = z.lazy(() => Lwm2mDeviceTransportConfigurationSchemaImpl);
export const MappingSchema: z.ZodType<any> = z.lazy(() => MappingSchemaImpl);
export const MergedGroupPermissionInfoSchema: z.ZodType<any> = z.lazy(() => MergedGroupPermissionInfoSchemaImpl);
export const MergedGroupTypePermissionInfoSchema: z.ZodType<any> = z.lazy(() => MergedGroupTypePermissionInfoSchemaImpl);
export const MergedUserPermissionsSchema: z.ZodType<any> = z.lazy(() => MergedUserPermissionsSchemaImpl);
export const MicrosoftTeamsDeliveryMethodNotificationTemplateSchema: z.ZodType<any> = z.lazy(() => MicrosoftTeamsDeliveryMethodNotificationTemplateSchemaImpl);
export const MicrosoftTeamsNotificationTargetConfigSchema: z.ZodType<any> = z.lazy(() => MicrosoftTeamsNotificationTargetConfigSchemaImpl);
export const MqttDeviceProfileTransportConfigurationSchema: z.ZodType<any> = z.lazy(() => MqttDeviceProfileTransportConfigurationSchemaImpl);
export const MqttDeviceTransportConfigurationSchema: z.ZodType<any> = z.lazy(() => MqttDeviceTransportConfigurationSchemaImpl);
export const NewPlatformVersionNotificationRuleTriggerConfigSchema: z.ZodType<any> = z.lazy(() => NewPlatformVersionNotificationRuleTriggerConfigSchemaImpl);
export const NoSecLwM2MBootstrapServerCredentialSchema: z.ZodType<any> = z.lazy(() => NoSecLwM2MBootstrapServerCredentialSchemaImpl);
export const NodeConnectionInfoSchema: z.ZodType<any> = z.lazy(() => NodeConnectionInfoSchemaImpl);
export const NotificationSchema: z.ZodType<any> = z.lazy(() => NotificationSchemaImpl);
export const NotificationDeliveryMethodConfigSchema: z.ZodType<any> = z.lazy(() => NotificationDeliveryMethodConfigSchemaImpl);
export const NotificationIdSchema: z.ZodType<any> = z.lazy(() => NotificationIdSchemaImpl);
export const NotificationInfoSchema: z.ZodType<any> = z.lazy(() => NotificationInfoSchemaImpl);
export const NotificationPrefSchema: z.ZodType<any> = z.lazy(() => NotificationPrefSchemaImpl);
export const NotificationRequestSchema: z.ZodType<any> = z.lazy(() => NotificationRequestSchemaImpl);
export const NotificationRequestConfigSchema: z.ZodType<any> = z.lazy(() => NotificationRequestConfigSchemaImpl);
export const NotificationRequestIdSchema: z.ZodType<any> = z.lazy(() => NotificationRequestIdSchemaImpl);
export const NotificationRequestInfoSchema: z.ZodType<any> = z.lazy(() => NotificationRequestInfoSchemaImpl);
export const NotificationRequestPreviewSchema: z.ZodType<any> = z.lazy(() => NotificationRequestPreviewSchemaImpl);
export const NotificationRequestStatsSchema: z.ZodType<any> = z.lazy(() => NotificationRequestStatsSchemaImpl);
export const NotificationRuleSchema: z.ZodType<any> = z.lazy(() => NotificationRuleSchemaImpl);
export const NotificationRuleConfigSchema: z.ZodType<any> = z.lazy(() => NotificationRuleConfigSchemaImpl);
export const NotificationRuleIdSchema: z.ZodType<any> = z.lazy(() => NotificationRuleIdSchemaImpl);
export const NotificationRuleInfoSchema: z.ZodType<any> = z.lazy(() => NotificationRuleInfoSchemaImpl);
export const NotificationRuleRecipientsConfigSchema: z.ZodType<any> = z.lazy(() => NotificationRuleRecipientsConfigSchemaImpl);
export const NotificationRuleTriggerConfigSchema: z.ZodType<any> = z.lazy(() => NotificationRuleTriggerConfigSchemaImpl);
export const NotificationSettingsSchema: z.ZodType<any> = z.lazy(() => NotificationSettingsSchemaImpl);
export const NotificationTargetSchema: z.ZodType<any> = z.lazy(() => NotificationTargetSchemaImpl);
export const NotificationTargetConfigSchema: z.ZodType<any> = z.lazy(() => NotificationTargetConfigSchemaImpl);
export const NotificationTemplateSchema: z.ZodType<any> = z.lazy(() => NotificationTemplateSchemaImpl);
export const NotificationTemplateConfigSchema: z.ZodType<any> = z.lazy(() => NotificationTemplateConfigSchemaImpl);
export const NotificationTemplateIdSchema: z.ZodType<any> = z.lazy(() => NotificationTemplateIdSchemaImpl);
export const NumericFilterPredicateSchema: z.ZodType<any> = z.lazy(() => NumericFilterPredicateSchemaImpl);
export const OAuth2BasicMapperConfigSchema: z.ZodType<any> = z.lazy(() => OAuth2BasicMapperConfigSchemaImpl);
export const OAuth2ClientInfoSchema: z.ZodType<any> = z.lazy(() => OAuth2ClientInfoSchemaImpl);
export const OAuth2ClientRegistrationTemplateSchema: z.ZodType<any> = z.lazy(() => OAuth2ClientRegistrationTemplateSchemaImpl);
export const OAuth2ClientRegistrationTemplateIdSchema: z.ZodType<any> = z.lazy(() => OAuth2ClientRegistrationTemplateIdSchemaImpl);
export const OAuth2CustomMapperConfigSchema: z.ZodType<any> = z.lazy(() => OAuth2CustomMapperConfigSchemaImpl);
export const OAuth2DomainInfoSchema: z.ZodType<any> = z.lazy(() => OAuth2DomainInfoSchemaImpl);
export const OAuth2InfoSchema: z.ZodType<any> = z.lazy(() => OAuth2InfoSchemaImpl);
export const OAuth2MapperConfigSchema: z.ZodType<any> = z.lazy(() => OAuth2MapperConfigSchemaImpl);
export const OAuth2MobileInfoSchema: z.ZodType<any> = z.lazy(() => OAuth2MobileInfoSchemaImpl);
export const OAuth2ParamsInfoSchema: z.ZodType<any> = z.lazy(() => OAuth2ParamsInfoSchemaImpl);
export const OAuth2RegistrationInfoSchema: z.ZodType<any> = z.lazy(() => OAuth2RegistrationInfoSchemaImpl);
export const ObjectAttributesSchema: z.ZodType<any> = z.lazy(() => ObjectAttributesSchemaImpl);
export const ObjectNodeSchema: z.ZodType<any> = z.lazy(() => ObjectNodeSchemaImpl);
export const OriginatorEntityOwnerUsersFilterSchema: z.ZodType<any> = z.lazy(() => OriginatorEntityOwnerUsersFilterSchemaImpl);
export const OtaPackageSchema: z.ZodType<any> = z.lazy(() => OtaPackageSchemaImpl);
export const OtaPackageIdSchema: z.ZodType<any> = z.lazy(() => OtaPackageIdSchemaImpl);
export const OtaPackageInfoSchema: z.ZodType<any> = z.lazy(() => OtaPackageInfoSchemaImpl);
export const OtherConfigurationSchema: z.ZodType<any> = z.lazy(() => OtherConfigurationSchemaImpl);
export const PSKLwM2MBootstrapServerCredentialSchema: z.ZodType<any> = z.lazy(() => PSKLwM2MBootstrapServerCredentialSchemaImpl);
export const PageData_Of_AlarmCommentInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_AlarmCommentInfoSchemaImpl);
export const PageData_Of_AlarmDataSchema: z.ZodType<any> = z.lazy(() => PageData_Of_AlarmDataSchemaImpl);
export const PageData_Of_AlarmInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_AlarmInfoSchemaImpl);
export const PageData_Of_AssetInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_AssetInfoSchemaImpl);
export const PageData_Of_AssetProfileInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_AssetProfileInfoSchemaImpl);
export const PageData_Of_AssetProfileSchema: z.ZodType<any> = z.lazy(() => PageData_Of_AssetProfileSchemaImpl);
export const PageData_Of_AssetSchema: z.ZodType<any> = z.lazy(() => PageData_Of_AssetSchemaImpl);
export const PageData_Of_AuditLogSchema: z.ZodType<any> = z.lazy(() => PageData_Of_AuditLogSchemaImpl);
export const PageData_Of_BlobEntityWithCustomerInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_BlobEntityWithCustomerInfoSchemaImpl);
export const PageData_Of_ContactBased_Of_objectSchema: z.ZodType<any> = z.lazy(() => PageData_Of_ContactBased_Of_objectSchemaImpl);
export const PageData_Of_ConverterSchema: z.ZodType<any> = z.lazy(() => PageData_Of_ConverterSchemaImpl);
export const PageData_Of_CustomerInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_CustomerInfoSchemaImpl);
export const PageData_Of_CustomerSchema: z.ZodType<any> = z.lazy(() => PageData_Of_CustomerSchemaImpl);
export const PageData_Of_DashboardInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_DashboardInfoSchemaImpl);
export const PageData_Of_DeviceInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_DeviceInfoSchemaImpl);
export const PageData_Of_DeviceProfileInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_DeviceProfileInfoSchemaImpl);
export const PageData_Of_DeviceProfileSchema: z.ZodType<any> = z.lazy(() => PageData_Of_DeviceProfileSchemaImpl);
export const PageData_Of_DeviceSchema: z.ZodType<any> = z.lazy(() => PageData_Of_DeviceSchemaImpl);
export const PageData_Of_EdgeEventSchema: z.ZodType<any> = z.lazy(() => PageData_Of_EdgeEventSchemaImpl);
export const PageData_Of_EdgeInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_EdgeInfoSchemaImpl);
export const PageData_Of_EdgeSchema: z.ZodType<any> = z.lazy(() => PageData_Of_EdgeSchemaImpl);
export const PageData_Of_EntityDataSchema: z.ZodType<any> = z.lazy(() => PageData_Of_EntityDataSchemaImpl);
export const PageData_Of_EntityGroupInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_EntityGroupInfoSchemaImpl);
export const PageData_Of_EntityInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_EntityInfoSchemaImpl);
export const PageData_Of_EntitySubtypeSchema: z.ZodType<any> = z.lazy(() => PageData_Of_EntitySubtypeSchemaImpl);
export const PageData_Of_EntityVersionSchema: z.ZodType<any> = z.lazy(() => PageData_Of_EntityVersionSchemaImpl);
export const PageData_Of_EntityViewInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_EntityViewInfoSchemaImpl);
export const PageData_Of_EntityViewSchema: z.ZodType<any> = z.lazy(() => PageData_Of_EntityViewSchemaImpl);
export const PageData_Of_EventInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_EventInfoSchemaImpl);
export const PageData_Of_IntegrationInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_IntegrationInfoSchemaImpl);
export const PageData_Of_IntegrationSchema: z.ZodType<any> = z.lazy(() => PageData_Of_IntegrationSchemaImpl);
export const PageData_Of_NotificationRequestInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_NotificationRequestInfoSchemaImpl);
export const PageData_Of_NotificationRuleInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_NotificationRuleInfoSchemaImpl);
export const PageData_Of_NotificationTargetSchema: z.ZodType<any> = z.lazy(() => PageData_Of_NotificationTargetSchemaImpl);
export const PageData_Of_NotificationTemplateSchema: z.ZodType<any> = z.lazy(() => PageData_Of_NotificationTemplateSchemaImpl);
export const PageData_Of_NotificationSchema: z.ZodType<any> = z.lazy(() => PageData_Of_NotificationSchemaImpl);
export const PageData_Of_OtaPackageInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_OtaPackageInfoSchemaImpl);
export const PageData_Of_QueueSchema: z.ZodType<any> = z.lazy(() => PageData_Of_QueueSchemaImpl);
export const PageData_Of_RoleSchema: z.ZodType<any> = z.lazy(() => PageData_Of_RoleSchemaImpl);
export const PageData_Of_RuleChainSchema: z.ZodType<any> = z.lazy(() => PageData_Of_RuleChainSchemaImpl);
export const PageData_Of_SchedulerEventInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_SchedulerEventInfoSchemaImpl);
export const PageData_Of_ShortEntityViewSchema: z.ZodType<any> = z.lazy(() => PageData_Of_ShortEntityViewSchemaImpl);
export const PageData_Of_TbResourceInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_TbResourceInfoSchemaImpl);
export const PageData_Of_TenantInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_TenantInfoSchemaImpl);
export const PageData_Of_TenantProfileSchema: z.ZodType<any> = z.lazy(() => PageData_Of_TenantProfileSchemaImpl);
export const PageData_Of_TenantSchema: z.ZodType<any> = z.lazy(() => PageData_Of_TenantSchemaImpl);
export const PageData_Of_UserEmailInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_UserEmailInfoSchemaImpl);
export const PageData_Of_UserInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_UserInfoSchemaImpl);
export const PageData_Of_UserSchema: z.ZodType<any> = z.lazy(() => PageData_Of_UserSchemaImpl);
export const PageData_Of_WidgetTypeInfoSchema: z.ZodType<any> = z.lazy(() => PageData_Of_WidgetTypeInfoSchemaImpl);
export const PageData_Of_WidgetsBundleSchema: z.ZodType<any> = z.lazy(() => PageData_Of_WidgetsBundleSchemaImpl);
export const PaletteSchema: z.ZodType<any> = z.lazy(() => PaletteSchemaImpl);
export const PaletteSettingsSchema: z.ZodType<any> = z.lazy(() => PaletteSettingsSchemaImpl);
export const PlatformTwoFaSettingsSchema: z.ZodType<any> = z.lazy(() => PlatformTwoFaSettingsSchemaImpl);
export const PlatformUsersNotificationTargetConfigSchema: z.ZodType<any> = z.lazy(() => PlatformUsersNotificationTargetConfigSchemaImpl);
export const PowerSavingConfigurationSchema: z.ZodType<any> = z.lazy(() => PowerSavingConfigurationSchemaImpl);
export const ProcessingStrategySchema: z.ZodType<any> = z.lazy(() => ProcessingStrategySchemaImpl);
export const ProtoTransportPayloadConfigurationSchema: z.ZodType<any> = z.lazy(() => ProtoTransportPayloadConfigurationSchemaImpl);
export const QueueSchema: z.ZodType<any> = z.lazy(() => QueueSchemaImpl);
export const QueueIdSchema: z.ZodType<any> = z.lazy(() => QueueIdSchemaImpl);
export const RPKLwM2MBootstrapServerCredentialSchema: z.ZodType<any> = z.lazy(() => RPKLwM2MBootstrapServerCredentialSchemaImpl);
export const RateLimitsNotificationRuleTriggerConfigSchema: z.ZodType<any> = z.lazy(() => RateLimitsNotificationRuleTriggerConfigSchemaImpl);
export const RawDataEventFilterSchema: z.ZodType<any> = z.lazy(() => RawDataEventFilterSchemaImpl);
export const RelationEntityTypeFilterSchema: z.ZodType<any> = z.lazy(() => RelationEntityTypeFilterSchemaImpl);
export const RelationsQueryFilterSchema: z.ZodType<any> = z.lazy(() => RelationsQueryFilterSchemaImpl);
export const RelationsSearchParametersSchema: z.ZodType<any> = z.lazy(() => RelationsSearchParametersSchemaImpl);
export const RepeatingAlarmConditionSpecSchema: z.ZodType<any> = z.lazy(() => RepeatingAlarmConditionSpecSchemaImpl);
export const ReportConfigSchema: z.ZodType<any> = z.lazy(() => ReportConfigSchemaImpl);
export const RepositorySettingsSchema: z.ZodType<any> = z.lazy(() => RepositorySettingsSchemaImpl);
export const RepositorySettingsInfoSchema: z.ZodType<any> = z.lazy(() => RepositorySettingsInfoSchemaImpl);
export const ResetPasswordEmailRequestSchema: z.ZodType<any> = z.lazy(() => ResetPasswordEmailRequestSchemaImpl);
export const ResetPasswordRequestSchema: z.ZodType<any> = z.lazy(() => ResetPasswordRequestSchemaImpl);
export const ResourceSchema: z.ZodType<any> = z.lazy(() => ResourceSchemaImpl);
export const ResponseEntitySchema: z.ZodType<any> = z.lazy(() => ResponseEntitySchemaImpl);
export const RoleSchema: z.ZodType<any> = z.lazy(() => RoleSchemaImpl);
export const RoleIdSchema: z.ZodType<any> = z.lazy(() => RoleIdSchemaImpl);
export const RpcSchema: z.ZodType<any> = z.lazy(() => RpcSchemaImpl);
export const RpcIdSchema: z.ZodType<any> = z.lazy(() => RpcIdSchemaImpl);
export const RuleChainSchema: z.ZodType<any> = z.lazy(() => RuleChainSchemaImpl);
export const RuleChainConnectionInfoSchema: z.ZodType<any> = z.lazy(() => RuleChainConnectionInfoSchemaImpl);
export const RuleChainDataSchema: z.ZodType<any> = z.lazy(() => RuleChainDataSchemaImpl);
export const RuleChainDebugEventFilterSchema: z.ZodType<any> = z.lazy(() => RuleChainDebugEventFilterSchemaImpl);
export const RuleChainExportDataSchema: z.ZodType<any> = z.lazy(() => RuleChainExportDataSchemaImpl);
export const RuleChainIdSchema: z.ZodType<any> = z.lazy(() => RuleChainIdSchemaImpl);
export const RuleChainImportResultSchema: z.ZodType<any> = z.lazy(() => RuleChainImportResultSchemaImpl);
export const RuleChainMetaDataSchema: z.ZodType<any> = z.lazy(() => RuleChainMetaDataSchemaImpl);
export const RuleChainOutputLabelsUsageSchema: z.ZodType<any> = z.lazy(() => RuleChainOutputLabelsUsageSchemaImpl);
export const RuleEngineComponentLifecycleEventNotificationRuleTriggerConfigSchema: z.ZodType<any> = z.lazy(() => RuleEngineComponentLifecycleEventNotificationRuleTriggerConfigSchemaImpl);
export const RuleNodeSchema: z.ZodType<any> = z.lazy(() => RuleNodeSchemaImpl);
export const RuleNodeDebugEventFilterSchema: z.ZodType<any> = z.lazy(() => RuleNodeDebugEventFilterSchemaImpl);
export const RuleNodeIdSchema: z.ZodType<any> = z.lazy(() => RuleNodeIdSchemaImpl);
export const SaveDeviceWithCredentialsRequestSchema: z.ZodType<any> = z.lazy(() => SaveDeviceWithCredentialsRequestSchemaImpl);
export const SaveOtaPackageInfoRequestSchema: z.ZodType<any> = z.lazy(() => SaveOtaPackageInfoRequestSchemaImpl);
export const SchedulerEventSchema: z.ZodType<any> = z.lazy(() => SchedulerEventSchemaImpl);
export const SchedulerEventFilterSchema: z.ZodType<any> = z.lazy(() => SchedulerEventFilterSchemaImpl);
export const SchedulerEventIdSchema: z.ZodType<any> = z.lazy(() => SchedulerEventIdSchemaImpl);
export const SchedulerEventInfoSchema: z.ZodType<any> = z.lazy(() => SchedulerEventInfoSchemaImpl);
export const SchedulerEventWithCustomerInfoSchema: z.ZodType<any> = z.lazy(() => SchedulerEventWithCustomerInfoSchemaImpl);
export const SecuritySettingsSchema: z.ZodType<any> = z.lazy(() => SecuritySettingsSchemaImpl);
export const SelfRegistrationParamsSchema: z.ZodType<any> = z.lazy(() => SelfRegistrationParamsSchemaImpl);
export const ShareGroupRequestSchema: z.ZodType<any> = z.lazy(() => ShareGroupRequestSchemaImpl);
export const SharedAttributesSettingSnmpCommunicationConfigSchema: z.ZodType<any> = z.lazy(() => SharedAttributesSettingSnmpCommunicationConfigSchemaImpl);
export const ShortCustomerInfoSchema: z.ZodType<any> = z.lazy(() => ShortCustomerInfoSchemaImpl);
export const ShortEntityViewSchema: z.ZodType<any> = z.lazy(() => ShortEntityViewSchemaImpl);
export const SignUpRequestSchema: z.ZodType<any> = z.lazy(() => SignUpRequestSchemaImpl);
export const SignUpSelfRegistrationParamsSchema: z.ZodType<any> = z.lazy(() => SignUpSelfRegistrationParamsSchemaImpl);
export const SimpleAlarmConditionSpecSchema: z.ZodType<any> = z.lazy(() => SimpleAlarmConditionSpecSchemaImpl);
export const SingleEntityFilterSchema: z.ZodType<any> = z.lazy(() => SingleEntityFilterSchemaImpl);
export const SingleEntityVersionCreateRequestSchema: z.ZodType<any> = z.lazy(() => SingleEntityVersionCreateRequestSchemaImpl);
export const SingleEntityVersionLoadRequestSchema: z.ZodType<any> = z.lazy(() => SingleEntityVersionLoadRequestSchemaImpl);
export const SlackConversationSchema: z.ZodType<any> = z.lazy(() => SlackConversationSchemaImpl);
export const SlackDeliveryMethodNotificationTemplateSchema: z.ZodType<any> = z.lazy(() => SlackDeliveryMethodNotificationTemplateSchemaImpl);
export const SlackNotificationDeliveryMethodConfigSchema: z.ZodType<any> = z.lazy(() => SlackNotificationDeliveryMethodConfigSchemaImpl);
export const SlackNotificationTargetConfigSchema: z.ZodType<any> = z.lazy(() => SlackNotificationTargetConfigSchemaImpl);
export const SmppSmsProviderConfigurationSchema: z.ZodType<any> = z.lazy(() => SmppSmsProviderConfigurationSchemaImpl);
export const SmsDeliveryMethodNotificationTemplateSchema: z.ZodType<any> = z.lazy(() => SmsDeliveryMethodNotificationTemplateSchemaImpl);
export const SmsProviderConfigurationSchema: z.ZodType<any> = z.lazy(() => SmsProviderConfigurationSchemaImpl);
export const SmsTwoFaAccountConfigSchema: z.ZodType<any> = z.lazy(() => SmsTwoFaAccountConfigSchemaImpl);
export const SmsTwoFaProviderConfigSchema: z.ZodType<any> = z.lazy(() => SmsTwoFaProviderConfigSchemaImpl);
export const SnmpCommunicationConfigSchema: z.ZodType<any> = z.lazy(() => SnmpCommunicationConfigSchemaImpl);
export const SnmpDeviceProfileTransportConfigurationSchema: z.ZodType<any> = z.lazy(() => SnmpDeviceProfileTransportConfigurationSchemaImpl);
export const SnmpDeviceTransportConfigurationSchema: z.ZodType<any> = z.lazy(() => SnmpDeviceTransportConfigurationSchemaImpl);
export const SnmpMappingSchema: z.ZodType<any> = z.lazy(() => SnmpMappingSchemaImpl);
export const SolutionInstallResponseSchema: z.ZodType<any> = z.lazy(() => SolutionInstallResponseSchemaImpl);
export const SpecificTimeScheduleSchema: z.ZodType<any> = z.lazy(() => SpecificTimeScheduleSchemaImpl);
export const StarredDashboardInfoSchema: z.ZodType<any> = z.lazy(() => StarredDashboardInfoSchemaImpl);
export const StateEntityOwnerFilterSchema: z.ZodType<any> = z.lazy(() => StateEntityOwnerFilterSchemaImpl);
export const StatisticsEventFilterSchema: z.ZodType<any> = z.lazy(() => StatisticsEventFilterSchemaImpl);
export const StringFilterPredicateSchema: z.ZodType<any> = z.lazy(() => StringFilterPredicateSchemaImpl);
export const SubmitStrategySchema: z.ZodType<any> = z.lazy(() => SubmitStrategySchemaImpl);
export const SystemAdministratorsFilterSchema: z.ZodType<any> = z.lazy(() => SystemAdministratorsFilterSchemaImpl);
export const SystemInfoSchema: z.ZodType<any> = z.lazy(() => SystemInfoSchemaImpl);
export const SystemInfoDataSchema: z.ZodType<any> = z.lazy(() => SystemInfoDataSchemaImpl);
export const TbImageDeleteResultSchema: z.ZodType<any> = z.lazy(() => TbImageDeleteResultSchemaImpl);
export const TbResourceSchema: z.ZodType<any> = z.lazy(() => TbResourceSchemaImpl);
export const TbResourceIdSchema: z.ZodType<any> = z.lazy(() => TbResourceIdSchemaImpl);
export const TbResourceInfoSchema: z.ZodType<any> = z.lazy(() => TbResourceInfoSchemaImpl);
export const TelemetryEntityViewSchema: z.ZodType<any> = z.lazy(() => TelemetryEntityViewSchemaImpl);
export const TelemetryMappingConfigurationSchema: z.ZodType<any> = z.lazy(() => TelemetryMappingConfigurationSchemaImpl);
export const TelemetryQueryingSnmpCommunicationConfigSchema: z.ZodType<any> = z.lazy(() => TelemetryQueryingSnmpCommunicationConfigSchemaImpl);
export const TenantSchema: z.ZodType<any> = z.lazy(() => TenantSchemaImpl);
export const TenantAdministratorsFilterSchema: z.ZodType<any> = z.lazy(() => TenantAdministratorsFilterSchemaImpl);
export const TenantIdSchema: z.ZodType<any> = z.lazy(() => TenantIdSchemaImpl);
export const TenantInfoSchema: z.ZodType<any> = z.lazy(() => TenantInfoSchemaImpl);
export const TenantProfileSchema: z.ZodType<any> = z.lazy(() => TenantProfileSchemaImpl);
export const TenantProfileConfigurationSchema: z.ZodType<any> = z.lazy(() => TenantProfileConfigurationSchemaImpl);
export const TenantProfileDataSchema: z.ZodType<any> = z.lazy(() => TenantProfileDataSchemaImpl);
export const TenantProfileIdSchema: z.ZodType<any> = z.lazy(() => TenantProfileIdSchemaImpl);
export const TenantProfileQueueConfigurationSchema: z.ZodType<any> = z.lazy(() => TenantProfileQueueConfigurationSchemaImpl);
export const TenantSolutionTemplateDetailsSchema: z.ZodType<any> = z.lazy(() => TenantSolutionTemplateDetailsSchemaImpl);
export const TenantSolutionTemplateInfoSchema: z.ZodType<any> = z.lazy(() => TenantSolutionTemplateInfoSchemaImpl);
export const TenantSolutionTemplateInstructionsSchema: z.ZodType<any> = z.lazy(() => TenantSolutionTemplateInstructionsSchemaImpl);
export const TestSmsRequestSchema: z.ZodType<any> = z.lazy(() => TestSmsRequestSchemaImpl);
export const ThingsboardCredentialsExpiredResponseSchema: z.ZodType<any> = z.lazy(() => ThingsboardCredentialsExpiredResponseSchemaImpl);
export const ThingsboardErrorResponseSchema: z.ZodType<any> = z.lazy(() => ThingsboardErrorResponseSchemaImpl);
export const ToDeviceRpcRequestSnmpCommunicationConfigSchema: z.ZodType<any> = z.lazy(() => ToDeviceRpcRequestSnmpCommunicationConfigSchemaImpl);
export const ToServerRpcRequestSnmpCommunicationConfigSchema: z.ZodType<any> = z.lazy(() => ToServerRpcRequestSnmpCommunicationConfigSchemaImpl);
export const TotpTwoFaAccountConfigSchema: z.ZodType<any> = z.lazy(() => TotpTwoFaAccountConfigSchemaImpl);
export const TotpTwoFaProviderConfigSchema: z.ZodType<any> = z.lazy(() => TotpTwoFaProviderConfigSchemaImpl);
export const TransportPayloadTypeConfigurationSchema: z.ZodType<any> = z.lazy(() => TransportPayloadTypeConfigurationSchemaImpl);
export const TsValueSchema: z.ZodType<any> = z.lazy(() => TsValueSchemaImpl);
export const TwilioSmsProviderConfigurationSchema: z.ZodType<any> = z.lazy(() => TwilioSmsProviderConfigurationSchemaImpl);
export const TwoFaAccountConfigSchema: z.ZodType<any> = z.lazy(() => TwoFaAccountConfigSchemaImpl);
export const TwoFaAccountConfigUpdateRequestSchema: z.ZodType<any> = z.lazy(() => TwoFaAccountConfigUpdateRequestSchemaImpl);
export const TwoFaProviderConfigSchema: z.ZodType<any> = z.lazy(() => TwoFaProviderConfigSchemaImpl);
export const TwoFaProviderInfoSchema: z.ZodType<any> = z.lazy(() => TwoFaProviderInfoSchemaImpl);
export const UpdateMessageSchema: z.ZodType<any> = z.lazy(() => UpdateMessageSchemaImpl);
export const UsageInfoSchema: z.ZodType<any> = z.lazy(() => UsageInfoSchemaImpl);
export const UserSchema: z.ZodType<any> = z.lazy(() => UserSchemaImpl);
export const UserDashboardsInfoSchema: z.ZodType<any> = z.lazy(() => UserDashboardsInfoSchemaImpl);
export const UserEmailInfoSchema: z.ZodType<any> = z.lazy(() => UserEmailInfoSchemaImpl);
export const UserGroupListFilterSchema: z.ZodType<any> = z.lazy(() => UserGroupListFilterSchemaImpl);
export const UserIdSchema: z.ZodType<any> = z.lazy(() => UserIdSchemaImpl);
export const UserInfoSchema: z.ZodType<any> = z.lazy(() => UserInfoSchemaImpl);
export const UserListFilterSchema: z.ZodType<any> = z.lazy(() => UserListFilterSchemaImpl);
export const UserNotificationSettingsSchema: z.ZodType<any> = z.lazy(() => UserNotificationSettingsSchemaImpl);
export const UserPasswordPolicySchema: z.ZodType<any> = z.lazy(() => UserPasswordPolicySchemaImpl);
export const UserRoleFilterSchema: z.ZodType<any> = z.lazy(() => UserRoleFilterSchemaImpl);
export const UsersFilterSchema: z.ZodType<any> = z.lazy(() => UsersFilterSchemaImpl);
export const VersionCreateConfigSchema: z.ZodType<any> = z.lazy(() => VersionCreateConfigSchemaImpl);
export const VersionCreateRequestSchema: z.ZodType<any> = z.lazy(() => VersionCreateRequestSchemaImpl);
export const VersionCreationResultSchema: z.ZodType<any> = z.lazy(() => VersionCreationResultSchemaImpl);
export const VersionLoadConfigSchema: z.ZodType<any> = z.lazy(() => VersionLoadConfigSchemaImpl);
export const VersionLoadRequestSchema: z.ZodType<any> = z.lazy(() => VersionLoadRequestSchemaImpl);
export const VersionLoadResultSchema: z.ZodType<any> = z.lazy(() => VersionLoadResultSchemaImpl);
export const VersionedEntityInfoSchema: z.ZodType<any> = z.lazy(() => VersionedEntityInfoSchemaImpl);
export const WebDeliveryMethodNotificationTemplateSchema: z.ZodType<any> = z.lazy(() => WebDeliveryMethodNotificationTemplateSchemaImpl);
export const WhiteLabelingSchema: z.ZodType<any> = z.lazy(() => WhiteLabelingSchemaImpl);
export const WhiteLabelingParamsSchema: z.ZodType<any> = z.lazy(() => WhiteLabelingParamsSchemaImpl);
export const WidgetTypeSchema: z.ZodType<any> = z.lazy(() => WidgetTypeSchemaImpl);
export const WidgetTypeDetailsSchema: z.ZodType<any> = z.lazy(() => WidgetTypeDetailsSchemaImpl);
export const WidgetTypeExportDataSchema: z.ZodType<any> = z.lazy(() => WidgetTypeExportDataSchemaImpl);
export const WidgetTypeIdSchema: z.ZodType<any> = z.lazy(() => WidgetTypeIdSchemaImpl);
export const WidgetTypeInfoSchema: z.ZodType<any> = z.lazy(() => WidgetTypeInfoSchemaImpl);
export const WidgetsBundleSchema: z.ZodType<any> = z.lazy(() => WidgetsBundleSchemaImpl);
export const WidgetsBundleExportDataSchema: z.ZodType<any> = z.lazy(() => WidgetsBundleExportDataSchemaImpl);
export const WidgetsBundleIdSchema: z.ZodType<any> = z.lazy(() => WidgetsBundleIdSchemaImpl);
export const X509CertificateChainProvisionConfigurationSchema: z.ZodType<any> = z.lazy(() => X509CertificateChainProvisionConfigurationSchemaImpl);
export const X509LwM2MBootstrapServerCredentialSchema: z.ZodType<any> = z.lazy(() => X509LwM2MBootstrapServerCredentialSchemaImpl);

const AccountTwoFaSettingsSchemaImpl = z.object({
  "configs": z.object({

}).optional()
});
export type AccountTwoFaSettings = z.infer<typeof AccountTwoFaSettingsSchema>;

const ActivateUserRequestSchemaImpl = z.object({
  "activateToken": z.string().optional(),
  "password": z.string().optional()
});
export type ActivateUserRequest = z.infer<typeof ActivateUserRequestSchema>;

const AdminSettingsSchemaImpl = z.object({
  "id": AdminSettingsIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "key": z.string().optional(),
  "jsonValue": JsonNodeSchema.optional()
});
export type AdminSettings = z.infer<typeof AdminSettingsSchema>;

const AdminSettingsIdSchemaImpl = z.object({
  "id": z.string()
});
export type AdminSettingsId = z.infer<typeof AdminSettingsIdSchema>;

const AffectedTenantAdministratorsFilterSchemaImpl = z.object({

});
export type AffectedTenantAdministratorsFilter = z.infer<typeof AffectedTenantAdministratorsFilterSchema>;

const AffectedUserFilterSchemaImpl = z.object({

});
export type AffectedUserFilter = z.infer<typeof AffectedUserFilterSchema>;

const AlarmSchemaImpl = z.object({
  "id": AlarmIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "name": z.string(),
  "type": z.string(),
  "originator": EntityIdSchema,
  "severity": z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"]),
  "acknowledged": z.boolean(),
  "cleared": z.boolean(),
  "assigneeId": UserIdSchema.optional(),
  "startTs": z.number().optional(),
  "endTs": z.number().optional(),
  "ackTs": z.number().optional(),
  "clearTs": z.number().optional(),
  "assignTs": z.number().optional(),
  "details": JsonNodeSchema.optional(),
  "propagateToOwnerHierarchy": z.boolean().optional(),
  "propagate": z.boolean().optional(),
  "propagateToTenant": z.boolean().optional(),
  "propagateRelationTypes": z.array(z.string()).optional(),
  "propagateToOwner": z.boolean().optional(),
  "status": z.enum(["ACTIVE_ACK", "ACTIVE_UNACK", "CLEARED_ACK", "CLEARED_UNACK"])
});
export type Alarm = z.infer<typeof AlarmSchema>;

const AlarmAssigneeSchemaImpl = z.object({
  "email": z.string().optional(),
  "firstName": z.string().optional(),
  "id": UserIdSchema.optional(),
  "lastName": z.string().optional()
});
export type AlarmAssignee = z.infer<typeof AlarmAssigneeSchema>;

const AlarmAssignmentNotificationRuleTriggerConfigSchemaImpl = z.object({
  "alarmSeverities": z.array(z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"])).optional(),
  "alarmStatuses": z.array(z.enum(["ACK", "ACTIVE", "ANY", "CLEARED", "UNACK"])).optional(),
  "alarmTypes": z.array(z.string()).optional(),
  "notifyOn": z.array(z.enum(["ASSIGNED", "UNASSIGNED"])).optional(),
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional()
});
export type AlarmAssignmentNotificationRuleTriggerConfig = z.infer<typeof AlarmAssignmentNotificationRuleTriggerConfigSchema>;

const AlarmCommentSchemaImpl = z.object({
  "id": AlarmCommentIdSchema.optional(),
  "createdTime": z.number().optional(),
  "alarmId": EntityIdSchema.optional(),
  "userId": UserIdSchema.optional(),
  "name": z.string(),
  "type": z.enum(["OTHER", "SYSTEM"]).optional(),
  "comment": JsonNodeSchema.optional()
});
export type AlarmComment = z.infer<typeof AlarmCommentSchema>;

const AlarmCommentIdSchemaImpl = z.object({
  "id": z.string()
});
export type AlarmCommentId = z.infer<typeof AlarmCommentIdSchema>;

const AlarmCommentInfoSchemaImpl = z.object({
  "id": AlarmCommentIdSchema.optional(),
  "createdTime": z.number().optional(),
  "alarmId": EntityIdSchema.optional(),
  "userId": UserIdSchema.optional(),
  "name": z.string(),
  "type": z.enum(["OTHER", "SYSTEM"]).optional(),
  "comment": JsonNodeSchema.optional(),
  "email": z.string().optional(),
  "firstName": z.string().optional(),
  "lastName": z.string().optional()
});
export type AlarmCommentInfo = z.infer<typeof AlarmCommentInfoSchema>;

const AlarmCommentNotificationRuleTriggerConfigSchemaImpl = z.object({
  "alarmSeverities": z.array(z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"])).optional(),
  "alarmStatuses": z.array(z.enum(["ACK", "ACTIVE", "ANY", "CLEARED", "UNACK"])).optional(),
  "alarmTypes": z.array(z.string()).optional(),
  "notifyOnCommentUpdate": z.boolean().optional(),
  "onlyUserComments": z.boolean().optional(),
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional()
});
export type AlarmCommentNotificationRuleTriggerConfig = z.infer<typeof AlarmCommentNotificationRuleTriggerConfigSchema>;

const AlarmConditionSchemaImpl = z.object({
  "condition": z.array(AlarmConditionFilterSchema).optional(),
  "spec": AlarmConditionSpecSchema.optional()
});
export type AlarmCondition = z.infer<typeof AlarmConditionSchema>;

const AlarmConditionFilterSchemaImpl = z.object({
  "key": AlarmConditionFilterKeySchema.optional(),
  "valueType": z.enum(["BOOLEAN", "DATE_TIME", "NUMERIC", "STRING"]).optional(),
  "value": z.object({

}).optional(),
  "predicate": KeyFilterPredicateSchema.optional()
});
export type AlarmConditionFilter = z.infer<typeof AlarmConditionFilterSchema>;

const AlarmConditionFilterKeySchemaImpl = z.object({
  "type": z.enum(["ATTRIBUTE", "CONSTANT", "ENTITY_FIELD", "TIME_SERIES"]).optional(),
  "key": z.string().optional()
});
export type AlarmConditionFilterKey = z.infer<typeof AlarmConditionFilterKeySchema>;

const AlarmConditionSpecSchemaImpl = z.object({

});
export type AlarmConditionSpec = z.infer<typeof AlarmConditionSpecSchema>;

const AlarmCountQuerySchemaImpl = z.object({
  "assigneeId": UserIdSchema.optional(),
  "endTs": z.number().optional(),
  "entityFilter": EntityFilterSchema.optional(),
  "keyFilters": z.array(KeyFilterSchema).optional(),
  "searchPropagatedAlarms": z.boolean().optional(),
  "severityList": z.array(z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"])).optional(),
  "startTs": z.number().optional(),
  "statusList": z.array(z.enum(["ACK", "ACTIVE", "ANY", "CLEARED", "UNACK"])).optional(),
  "timeWindow": z.number().optional(),
  "typeList": z.array(z.string()).optional()
});
export type AlarmCountQuery = z.infer<typeof AlarmCountQuerySchema>;

const AlarmDataSchemaImpl = z.object({
  "entityId": EntityIdSchema.optional(),
  "latest": z.object({

}).optional(),
  "id": AlarmIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "name": z.string(),
  "type": z.string(),
  "originator": EntityIdSchema,
  "severity": z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"]),
  "acknowledged": z.boolean(),
  "cleared": z.boolean(),
  "assigneeId": UserIdSchema.optional(),
  "startTs": z.number().optional(),
  "endTs": z.number().optional(),
  "ackTs": z.number().optional(),
  "clearTs": z.number().optional(),
  "assignTs": z.number().optional(),
  "details": JsonNodeSchema.optional(),
  "propagateToOwnerHierarchy": z.boolean().optional(),
  "propagate": z.boolean().optional(),
  "propagateToTenant": z.boolean().optional(),
  "propagateRelationTypes": z.array(z.string()).optional(),
  "propagateToOwner": z.boolean().optional(),
  "originatorName": z.string().optional(),
  "originatorLabel": z.string().optional(),
  "assignee": AlarmAssigneeSchema.optional(),
  "status": z.enum(["ACTIVE_ACK", "ACTIVE_UNACK", "CLEARED_ACK", "CLEARED_UNACK"])
});
export type AlarmData = z.infer<typeof AlarmDataSchema>;

const AlarmDataPageLinkSchemaImpl = z.object({
  "assigneeId": UserIdSchema.optional(),
  "dynamic": z.boolean().optional(),
  "endTs": z.number().optional(),
  "page": z.number().optional(),
  "pageSize": z.number().optional(),
  "searchPropagatedAlarms": z.boolean().optional(),
  "severityList": z.array(z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"])).optional(),
  "sortOrder": EntityDataSortOrderSchema.optional(),
  "startTs": z.number().optional(),
  "statusList": z.array(z.enum(["ACK", "ACTIVE", "ANY", "CLEARED", "UNACK"])).optional(),
  "textSearch": z.string().optional(),
  "timeWindow": z.number().optional(),
  "typeList": z.array(z.string()).optional()
});
export type AlarmDataPageLink = z.infer<typeof AlarmDataPageLinkSchema>;

const AlarmDataQuerySchemaImpl = z.object({
  "alarmFields": z.array(EntityKeySchema).optional(),
  "entityFields": z.array(EntityKeySchema).optional(),
  "entityFilter": EntityFilterSchema.optional(),
  "keyFilters": z.array(KeyFilterSchema).optional(),
  "latestValues": z.array(EntityKeySchema).optional(),
  "pageLink": AlarmDataPageLinkSchema.optional()
});
export type AlarmDataQuery = z.infer<typeof AlarmDataQuerySchema>;

const AlarmIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["ALARM"])
});
export type AlarmId = z.infer<typeof AlarmIdSchema>;

const AlarmInfoSchemaImpl = z.object({
  "id": AlarmIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "name": z.string(),
  "type": z.string(),
  "originator": EntityIdSchema,
  "severity": z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"]),
  "acknowledged": z.boolean(),
  "cleared": z.boolean(),
  "assigneeId": UserIdSchema.optional(),
  "startTs": z.number().optional(),
  "endTs": z.number().optional(),
  "ackTs": z.number().optional(),
  "clearTs": z.number().optional(),
  "assignTs": z.number().optional(),
  "details": JsonNodeSchema.optional(),
  "propagateToOwnerHierarchy": z.boolean().optional(),
  "propagate": z.boolean().optional(),
  "propagateToTenant": z.boolean().optional(),
  "propagateRelationTypes": z.array(z.string()).optional(),
  "propagateToOwner": z.boolean().optional(),
  "originatorName": z.string().optional(),
  "originatorLabel": z.string().optional(),
  "assignee": AlarmAssigneeSchema.optional(),
  "status": z.enum(["ACTIVE_ACK", "ACTIVE_UNACK", "CLEARED_ACK", "CLEARED_UNACK"])
});
export type AlarmInfo = z.infer<typeof AlarmInfoSchema>;

const AlarmNotificationRuleTriggerConfigSchemaImpl = z.object({
  "alarmSeverities": z.array(z.enum(["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"])).optional(),
  "alarmTypes": z.array(z.string()).optional(),
  "clearRule": ClearRuleSchema.optional(),
  "notifyOn": z.array(z.enum(["ACKNOWLEDGED", "CLEARED", "CREATED", "SEVERITY_CHANGED"])).optional(),
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional()
});
export type AlarmNotificationRuleTriggerConfig = z.infer<typeof AlarmNotificationRuleTriggerConfigSchema>;

const AlarmRuleSchemaImpl = z.object({
  "condition": AlarmConditionSchema.optional(),
  "schedule": AlarmScheduleSchema.optional(),
  "alarmDetails": z.string().optional(),
  "dashboardId": DashboardIdSchema.optional()
});
export type AlarmRule = z.infer<typeof AlarmRuleSchema>;

const AlarmScheduleSchemaImpl = z.object({
  "dynamicValue": DynamicValue_Of_stringSchema.optional(),
  "type": z.enum(["ANY_TIME", "CUSTOM", "SPECIFIC_TIME"]).optional()
});
export type AlarmSchedule = z.infer<typeof AlarmScheduleSchema>;

const AllUsersFilterSchemaImpl = z.object({

});
export type AllUsersFilter = z.infer<typeof AllUsersFilterSchema>;

const AllowCreateNewDevicesDeviceProfileProvisionConfigurationSchemaImpl = z.object({
  "provisionDeviceSecret": z.string().optional()
});
export type AllowCreateNewDevicesDeviceProfileProvisionConfiguration = z.infer<typeof AllowCreateNewDevicesDeviceProfileProvisionConfigurationSchema>;

const AllowedPermissionsInfoSchemaImpl = z.object({
  "userOwnerId": EntityIdSchema.optional(),
  "userPermissions": MergedUserPermissionsSchema.optional(),
  "allowedResources": z.array(z.enum(["ADMIN_SETTINGS", "ALARM", "ALL", "API_USAGE_STATE", "ASSET", "ASSET_GROUP", "ASSET_PROFILE", "AUDIT_LOG", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "CUSTOMER_GROUP", "DASHBOARD", "DASHBOARD_GROUP", "DEVICE", "DEVICE_GROUP", "DEVICE_PROFILE", "EDGE", "EDGE_GROUP", "ENTITY_VIEW", "ENTITY_VIEW_GROUP", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "OAUTH2_CONFIGURATION_INFO", "OAUTH2_CONFIGURATION_TEMPLATE", "OTA_PACKAGE", "PROFILE", "QUEUE", "ROLE", "RULE_CHAIN", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "USER_GROUP", "VERSION_CONTROL", "WHITE_LABELING", "WIDGETS_BUNDLE", "WIDGET_TYPE"])).optional(),
  "operationsByResource": z.object({

}).optional(),
  "allowedForGroupRoleOperations": z.array(z.enum(["ADD_TO_GROUP", "ALL", "ASSIGN_TO_TENANT", "CHANGE_OWNER", "CLAIM_DEVICES", "CREATE", "DELETE", "IMPERSONATE", "READ", "READ_ATTRIBUTES", "READ_CREDENTIALS", "READ_TELEMETRY", "REMOVE_FROM_GROUP", "RPC_CALL", "SHARE_GROUP", "WRITE", "WRITE_ATTRIBUTES", "WRITE_CREDENTIALS", "WRITE_TELEMETRY"])).optional(),
  "allowedForGroupOwnerOnlyOperations": z.array(z.enum(["ADD_TO_GROUP", "ALL", "ASSIGN_TO_TENANT", "CHANGE_OWNER", "CLAIM_DEVICES", "CREATE", "DELETE", "IMPERSONATE", "READ", "READ_ATTRIBUTES", "READ_CREDENTIALS", "READ_TELEMETRY", "REMOVE_FROM_GROUP", "RPC_CALL", "SHARE_GROUP", "WRITE", "WRITE_ATTRIBUTES", "WRITE_CREDENTIALS", "WRITE_TELEMETRY"])).optional(),
  "allowedForGroupOwnerOnlyGroupOperations": z.array(z.enum(["ADD_TO_GROUP", "ALL", "ASSIGN_TO_TENANT", "CHANGE_OWNER", "CLAIM_DEVICES", "CREATE", "DELETE", "IMPERSONATE", "READ", "READ_ATTRIBUTES", "READ_CREDENTIALS", "READ_TELEMETRY", "REMOVE_FROM_GROUP", "RPC_CALL", "SHARE_GROUP", "WRITE", "WRITE_ATTRIBUTES", "WRITE_CREDENTIALS", "WRITE_TELEMETRY"])).optional()
});
export type AllowedPermissionsInfo = z.infer<typeof AllowedPermissionsInfoSchema>;

const AnyTimeScheduleSchemaImpl = z.object({
  "dynamicValue": DynamicValue_Of_stringSchema.optional(),
  "type": z.enum(["ANY_TIME", "CUSTOM", "SPECIFIC_TIME"]).optional()
});
export type AnyTimeSchedule = z.infer<typeof AnyTimeScheduleSchema>;

const ApiUsageLimitNotificationRuleTriggerConfigSchemaImpl = z.object({
  "apiFeatures": z.array(z.enum(["ALARM", "DB", "EMAIL", "JS", "RE", "SMS", "TBEL", "TRANSPORT"])).optional(),
  "notifyOn": z.array(z.enum(["DISABLED", "ENABLED", "WARNING"])).optional(),
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional()
});
export type ApiUsageLimitNotificationRuleTriggerConfig = z.infer<typeof ApiUsageLimitNotificationRuleTriggerConfigSchema>;

const ApiUsageStateFilterSchemaImpl = z.object({
  "customerId": CustomerIdSchema.optional()
});
export type ApiUsageStateFilter = z.infer<typeof ApiUsageStateFilterSchema>;

const ArrayNodeSchemaImpl = z.object({

});
export type ArrayNode = z.infer<typeof ArrayNodeSchema>;

const AssetSchemaImpl = z.object({
  "id": AssetIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "name": z.string(),
  "type": z.string().optional(),
  "label": z.string().optional(),
  "assetProfileId": AssetProfileIdSchema.optional(),
  "additionalInfo": JsonNodeSchema.optional(),
  "ownerId": EntityIdSchema.optional()
});
export type Asset = z.infer<typeof AssetSchema>;

const AssetIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["ASSET"])
});
export type AssetId = z.infer<typeof AssetIdSchema>;

const AssetInfoSchemaImpl = z.object({
  "id": AssetIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "name": z.string(),
  "type": z.string().optional(),
  "label": z.string().optional(),
  "assetProfileId": AssetProfileIdSchema.optional(),
  "additionalInfo": JsonNodeSchema.optional(),
  "ownerId": EntityIdSchema.optional(),
  "ownerName": z.string().optional(),
  "groups": z.array(EntityInfoSchema).optional()
});
export type AssetInfo = z.infer<typeof AssetInfoSchema>;

const AssetProfileSchemaImpl = z.object({
  "id": AssetProfileIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "name": z.string().optional(),
  "default": z.boolean().optional(),
  "defaultDashboardId": DashboardIdSchema.optional(),
  "defaultRuleChainId": RuleChainIdSchema.optional(),
  "defaultQueueName": z.string().optional(),
  "description": z.string().optional(),
  "image": z.string().optional(),
  "defaultEdgeRuleChainId": RuleChainIdSchema.optional()
});
export type AssetProfile = z.infer<typeof AssetProfileSchema>;

const AssetProfileIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["ASSET_PROFILE"])
});
export type AssetProfileId = z.infer<typeof AssetProfileIdSchema>;

const AssetProfileInfoSchemaImpl = z.object({
  "id": EntityIdSchema.optional(),
  "name": z.string().optional(),
  "image": z.string().optional(),
  "defaultDashboardId": DashboardIdSchema.optional(),
  "tenantId": TenantIdSchema.optional()
});
export type AssetProfileInfo = z.infer<typeof AssetProfileInfoSchema>;

const AssetSearchQuerySchemaImpl = z.object({
  "relationType": z.string().optional(),
  "assetTypes": z.array(z.string()).optional(),
  "parameters": RelationsSearchParametersSchema.optional()
});
export type AssetSearchQuery = z.infer<typeof AssetSearchQuerySchema>;

const AssetSearchQueryFilterSchemaImpl = z.object({
  "assetTypes": z.array(z.string()).optional(),
  "direction": z.enum(["FROM", "TO"]).optional(),
  "fetchLastLevelOnly": z.boolean().optional(),
  "maxLevel": z.number().optional(),
  "relationType": z.string().optional(),
  "rootEntity": EntityIdSchema.optional()
});
export type AssetSearchQueryFilter = z.infer<typeof AssetSearchQueryFilterSchema>;

const AssetTypeFilterSchemaImpl = z.object({
  "assetNameFilter": z.string().optional(),
  "assetTypes": z.array(z.string()).optional()
});
export type AssetTypeFilter = z.infer<typeof AssetTypeFilterSchema>;

const AtomicIntegerSchemaImpl = z.object({
  "acquire": z.number().optional(),
  "andDecrement": z.number().optional(),
  "andIncrement": z.number().optional(),
  "opaque": z.number().optional(),
  "plain": z.number().optional()
});
export type AtomicInteger = z.infer<typeof AtomicIntegerSchema>;

const AttributeExportDataSchemaImpl = z.object({
  "booleanValue": z.boolean().optional(),
  "doubleValue": z.number().optional(),
  "jsonValue": z.string().optional(),
  "key": z.string().optional(),
  "lastUpdateTs": z.number().optional(),
  "longValue": z.number().optional(),
  "strValue": z.string().optional()
});
export type AttributeExportData = z.infer<typeof AttributeExportDataSchema>;

const AttributesEntityViewSchemaImpl = z.object({
  "cs": z.array(z.string()),
  "sh": z.array(z.string()),
  "ss": z.array(z.string())
});
export type AttributesEntityView = z.infer<typeof AttributesEntityViewSchema>;

const AuditLogSchemaImpl = z.object({
  "id": AuditLogIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "entityId": EntityIdSchema.optional(),
  "entityName": z.string().optional(),
  "userId": UserIdSchema.optional(),
  "userName": z.string().optional(),
  "actionType": z.enum(["ACTIVATED", "ADDED", "ADDED_COMMENT", "ADDED_TO_ENTITY_GROUP", "ALARM_ACK", "ALARM_ASSIGNED", "ALARM_CLEAR", "ALARM_DELETE", "ALARM_UNASSIGNED", "ASSIGNED_FROM_TENANT", "ASSIGNED_TO_CUSTOMER", "ASSIGNED_TO_EDGE", "ASSIGNED_TO_TENANT", "ATTRIBUTES_DELETED", "ATTRIBUTES_READ", "ATTRIBUTES_UPDATED", "CHANGE_OWNER", "CREDENTIALS_READ", "CREDENTIALS_UPDATED", "DELETED", "DELETED_COMMENT", "LOCKOUT", "LOGIN", "LOGOUT", "MADE_PRIVATE", "MADE_PUBLIC", "PROVISION_FAILURE", "PROVISION_SUCCESS", "RELATIONS_DELETED", "RELATION_ADD_OR_UPDATE", "RELATION_DELETED", "REMOVED_FROM_ENTITY_GROUP", "REST_API_RULE_ENGINE_CALL", "RPC_CALL", "SMS_SENT", "SUSPENDED", "TIMESERIES_DELETED", "TIMESERIES_UPDATED", "UNASSIGNED_FROM_CUSTOMER", "UNASSIGNED_FROM_EDGE", "UPDATED", "UPDATED_COMMENT"]).optional(),
  "actionData": JsonNodeSchema.optional(),
  "actionStatus": z.enum(["FAILURE", "SUCCESS"]).optional(),
  "actionFailureDetails": z.string().optional()
});
export type AuditLog = z.infer<typeof AuditLogSchema>;

const AuditLogIdSchemaImpl = z.object({
  "id": z.string()
});
export type AuditLogId = z.infer<typeof AuditLogIdSchema>;

const AutoVersionCreateConfigSchemaImpl = z.object({
  "branch": z.string().optional(),
  "saveAttributes": z.boolean().optional(),
  "saveCredentials": z.boolean().optional(),
  "saveGroupEntities": z.boolean().optional(),
  "savePermissions": z.boolean().optional(),
  "saveRelations": z.boolean().optional()
});
export type AutoVersionCreateConfig = z.infer<typeof AutoVersionCreateConfigSchema>;

const AwsSnsSmsProviderConfigurationSchemaImpl = z.object({
  "accessKeyId": z.string().optional(),
  "secretAccessKey": z.string().optional(),
  "region": z.string().optional()
});
export type AwsSnsSmsProviderConfiguration = z.infer<typeof AwsSnsSmsProviderConfigurationSchema>;

const BackupCodeTwoFaAccountConfigSchemaImpl = z.object({
  "codes": z.array(z.string()).optional(),
  "codesLeft": z.number().optional(),
  "useByDefault": z.boolean().optional()
});
export type BackupCodeTwoFaAccountConfig = z.infer<typeof BackupCodeTwoFaAccountConfigSchema>;

const BackupCodeTwoFaProviderConfigSchemaImpl = z.object({
  "codesQuantity": z.number().optional()
});
export type BackupCodeTwoFaProviderConfig = z.infer<typeof BackupCodeTwoFaProviderConfigSchema>;

const BlobEntityIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["BLOB_ENTITY"])
});
export type BlobEntityId = z.infer<typeof BlobEntityIdSchema>;

const BlobEntityInfoSchemaImpl = z.object({
  "id": BlobEntityIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "ownerId": EntityIdSchema.optional(),
  "name": z.string().optional(),
  "type": z.string().optional(),
  "contentType": z.enum(["application/pdf", "image/jpeg", "image/png"]).optional(),
  "additionalInfo": JsonNodeSchema.optional()
});
export type BlobEntityInfo = z.infer<typeof BlobEntityInfoSchema>;

const BlobEntityWithCustomerInfoSchemaImpl = z.object({
  "id": BlobEntityIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "ownerId": EntityIdSchema.optional(),
  "name": z.string().optional(),
  "type": z.string().optional(),
  "contentType": z.enum(["application/pdf", "image/jpeg", "image/png"]).optional(),
  "additionalInfo": JsonNodeSchema.optional(),
  "customerTitle": z.string().optional(),
  "customerIsPublic": z.object({

}).optional()
});
export type BlobEntityWithCustomerInfo = z.infer<typeof BlobEntityWithCustomerInfoSchema>;

const BooleanFilterPredicateSchemaImpl = z.object({
  "operation": z.enum(["EQUAL", "NOT_EQUAL"]).optional(),
  "value": FilterPredicateValue_Of_booleanSchema.optional()
});
export type BooleanFilterPredicate = z.infer<typeof BooleanFilterPredicateSchema>;

const BranchInfoSchemaImpl = z.object({
  "default": z.boolean().optional(),
  "name": z.string().optional()
});
export type BranchInfo = z.infer<typeof BranchInfoSchema>;

const BulkImportRequestSchemaImpl = z.object({
  "customerId": CustomerIdSchema.optional(),
  "entityGroupId": z.string().optional(),
  "file": z.string().optional(),
  "mapping": MappingSchema.optional()
});
export type BulkImportRequest = z.infer<typeof BulkImportRequestSchema>;

const BulkImportResult_Of_AssetSchemaImpl = z.object({
  "created": AtomicIntegerSchema.optional(),
  "errors": AtomicIntegerSchema.optional(),
  "errorsList": z.array(z.string()).optional(),
  "updated": AtomicIntegerSchema.optional()
});
export type BulkImportResult_Of_Asset = z.infer<typeof BulkImportResult_Of_AssetSchema>;

const BulkImportResult_Of_DeviceSchemaImpl = z.object({
  "created": AtomicIntegerSchema.optional(),
  "errors": AtomicIntegerSchema.optional(),
  "errorsList": z.array(z.string()).optional(),
  "updated": AtomicIntegerSchema.optional()
});
export type BulkImportResult_Of_Device = z.infer<typeof BulkImportResult_Of_DeviceSchema>;

const BulkImportResult_Of_EdgeSchemaImpl = z.object({
  "created": AtomicIntegerSchema.optional(),
  "errors": AtomicIntegerSchema.optional(),
  "errorsList": z.array(z.string()).optional(),
  "updated": AtomicIntegerSchema.optional()
});
export type BulkImportResult_Of_Edge = z.infer<typeof BulkImportResult_Of_EdgeSchema>;

const ButtonSchemaImpl = z.object({
  "dashboardId": z.string().optional(),
  "dashboardState": z.string().optional(),
  "enabled": z.boolean().optional(),
  "link": z.string().optional(),
  "linkType": z.enum(["DASHBOARD", "LINK"]).optional(),
  "setEntityIdInState": z.boolean().optional(),
  "text": z.string().optional()
});
export type Button = z.infer<typeof ButtonSchema>;

const ByteArrayResourceSchemaImpl = z.object({
  "byteArray": z.string().optional(),
  "description": z.string().optional(),
  "file": z.string().optional(),
  "filename": z.string().optional(),
  "inputStream": InputStreamSchema.optional(),
  "open": z.boolean().optional(),
  "readable": z.boolean().optional(),
  "uri": z.string().optional(),
  "url": z.string().optional()
});
export type ByteArrayResource = z.infer<typeof ByteArrayResourceSchema>;

const ByteBufferSchemaImpl = z.object({
  "char": z.string().optional(),
  "direct": z.boolean().optional(),
  "double": z.number().optional(),
  "float": z.number().optional(),
  "int": z.number().optional(),
  "long": z.number().optional(),
  "readOnly": z.boolean().optional(),
  "short": z.number().optional()
});
export type ByteBuffer = z.infer<typeof ByteBufferSchema>;

const ChangePasswordRequestSchemaImpl = z.object({
  "currentPassword": z.string().optional(),
  "newPassword": z.string().optional()
});
export type ChangePasswordRequest = z.infer<typeof ChangePasswordRequestSchema>;

const CheckPreProvisionedDevicesDeviceProfileProvisionConfigurationSchemaImpl = z.object({
  "provisionDeviceSecret": z.string().optional()
});
export type CheckPreProvisionedDevicesDeviceProfileProvisionConfiguration = z.infer<typeof CheckPreProvisionedDevicesDeviceProfileProvisionConfigurationSchema>;

const ClaimRequestSchemaImpl = z.object({
  "secretKey": z.string().optional()
});
export type ClaimRequest = z.infer<typeof ClaimRequestSchema>;

const ClearRuleSchemaImpl = z.object({
  "alarmStatuses": z.array(z.enum(["ACK", "ACTIVE", "ANY", "CLEARED", "UNACK"])).optional()
});
export type ClearRule = z.infer<typeof ClearRuleSchema>;

const ClientAttributesQueryingSnmpCommunicationConfigSchemaImpl = z.object({
  "mappings": z.array(SnmpMappingSchema).optional(),
  "queryingFrequencyMs": z.number().optional(),
  "spec": z.enum(["CLIENT_ATTRIBUTES_QUERYING", "SHARED_ATTRIBUTES_SETTING", "TELEMETRY_QUERYING", "TO_DEVICE_RPC_REQUEST", "TO_SERVER_RPC_REQUEST"]).optional()
});
export type ClientAttributesQueryingSnmpCommunicationConfig = z.infer<typeof ClientAttributesQueryingSnmpCommunicationConfigSchema>;

const CoapDeviceProfileTransportConfigurationSchemaImpl = z.object({
  "clientSettings": PowerSavingConfigurationSchema.optional(),
  "coapDeviceTypeConfiguration": CoapDeviceTypeConfigurationSchema.optional()
});
export type CoapDeviceProfileTransportConfiguration = z.infer<typeof CoapDeviceProfileTransportConfigurationSchema>;

const CoapDeviceTransportConfigurationSchemaImpl = z.object({
  "edrxCycle": z.number().optional(),
  "pagingTransmissionWindow": z.number().optional(),
  "powerMode": z.enum(["DRX", "E_DRX", "PSM"]).optional(),
  "psmActivityTimer": z.number().optional()
});
export type CoapDeviceTransportConfiguration = z.infer<typeof CoapDeviceTransportConfigurationSchema>;

const CoapDeviceTypeConfigurationSchemaImpl = z.object({

});
export type CoapDeviceTypeConfiguration = z.infer<typeof CoapDeviceTypeConfigurationSchema>;

const ColumnMappingSchemaImpl = z.object({
  "key": z.string().optional(),
  "type": z.enum(["ACCESS_TOKEN", "CLOUD_ENDPOINT", "DESCRIPTION", "EDGE_LICENSE_KEY", "IS_GATEWAY", "LABEL", "LWM2M_BOOTSTRAP_SERVER_PUBLIC_KEY_OR_ID", "LWM2M_BOOTSTRAP_SERVER_SECRET_KEY", "LWM2M_BOOTSTRAP_SERVER_SECURITY_MODE", "LWM2M_CLIENT_CERT", "LWM2M_CLIENT_ENDPOINT", "LWM2M_CLIENT_IDENTITY", "LWM2M_CLIENT_KEY", "LWM2M_CLIENT_SECURITY_CONFIG_MODE", "LWM2M_SERVER_CLIENT_PUBLIC_KEY_OR_ID", "LWM2M_SERVER_CLIENT_SECRET_KEY", "LWM2M_SERVER_SECURITY_MODE", "MQTT_CLIENT_ID", "MQTT_PASSWORD", "MQTT_USER_NAME", "NAME", "ROUTING_KEY", "SECRET", "SERVER_ATTRIBUTE", "SHARED_ATTRIBUTE", "SNMP_COMMUNITY_STRING", "SNMP_HOST", "SNMP_PORT", "SNMP_VERSION", "TIMESERIES", "TYPE", "X509"]).optional()
});
export type ColumnMapping = z.infer<typeof ColumnMappingSchema>;

const ComparisonTsValueSchemaImpl = z.object({
  "current": TsValueSchema.optional(),
  "previous": TsValueSchema.optional()
});
export type ComparisonTsValue = z.infer<typeof ComparisonTsValueSchema>;

const ComplexFilterPredicateSchemaImpl = z.object({
  "operation": z.enum(["AND", "OR"]).optional(),
  "predicates": z.array(KeyFilterPredicateSchema).optional()
});
export type ComplexFilterPredicate = z.infer<typeof ComplexFilterPredicateSchema>;

const ComplexVersionCreateRequestSchemaImpl = z.object({
  "branch": z.string().optional(),
  "entityTypes": z.object({

}).optional(),
  "syncStrategy": z.enum(["MERGE", "OVERWRITE"]).optional(),
  "type": z.enum(["COMPLEX", "SINGLE_ENTITY"]).optional(),
  "versionName": z.string().optional()
});
export type ComplexVersionCreateRequest = z.infer<typeof ComplexVersionCreateRequestSchema>;

const ComponentDescriptorSchemaImpl = z.object({
  "id": ComponentDescriptorIdSchema.optional(),
  "createdTime": z.number().optional(),
  "type": z.enum(["ACTION", "ANALYTICS", "ENRICHMENT", "EXTERNAL", "FILTER", "FLOW", "TRANSFORMATION"]).optional(),
  "scope": z.enum(["TENANT"]).optional(),
  "clusteringMode": z.enum(["ENABLED", "SINGLETON", "USER_PREFERENCE"]).optional(),
  "name": z.string().optional(),
  "clazz": z.string().optional(),
  "configurationDescriptor": JsonNodeSchema.optional(),
  "configurationVersion": z.number().optional(),
  "actions": z.string().optional()
});
export type ComponentDescriptor = z.infer<typeof ComponentDescriptorSchema>;

const ComponentDescriptorIdSchemaImpl = z.object({
  "id": z.string()
});
export type ComponentDescriptorId = z.infer<typeof ComponentDescriptorIdSchema>;

const ContactBased_Of_objectSchemaImpl = z.object({
  "additionalInfo": JsonNodeSchema.optional(),
  "address": z.string().optional(),
  "address2": z.string().optional(),
  "city": z.string().optional(),
  "country": z.string().optional(),
  "createdTime": z.number().optional(),
  "email": z.string().optional(),
  "id": z.object({

}).optional(),
  "name": z.string().optional(),
  "phone": z.string().optional(),
  "state": z.string().optional(),
  "zip": z.string().optional()
});
export type ContactBased_Of_object = z.infer<typeof ContactBased_Of_objectSchema>;

const ConverterSchemaImpl = z.object({
  "id": ConverterIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "name": z.string(),
  "type": z.enum(["DOWNLINK", "UPLINK"]),
  "debugMode": z.boolean().optional(),
  "configuration": JsonNodeSchema.optional(),
  "additionalInfo": JsonNodeSchema.optional(),
  "edgeTemplate": z.boolean().optional()
});
export type Converter = z.infer<typeof ConverterSchema>;

const ConverterIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["CONVERTER"])
});
export type ConverterId = z.infer<typeof ConverterIdSchema>;

const CustomMenuSchemaImpl = z.object({
  "disabledMenuItems": z.array(z.string()),
  "menuItems": z.array(CustomMenuItemSchema)
});
export type CustomMenu = z.infer<typeof CustomMenuSchema>;

const CustomMenuItemSchemaImpl = z.object({
  "name": z.string(),
  "iconUrl": z.string().optional(),
  "materialIcon": z.string().optional(),
  "iframeUrl": z.string().optional(),
  "dashboardId": z.string().optional(),
  "hideDashboardToolbar": z.boolean().optional(),
  "setAccessToken": z.boolean().optional(),
  "childMenuItems": z.array(CustomMenuItemSchema).optional()
});
export type CustomMenuItem = z.infer<typeof CustomMenuItemSchema>;

const CustomTimeScheduleSchemaImpl = z.object({
  "dynamicValue": DynamicValue_Of_stringSchema.optional(),
  "items": z.array(CustomTimeScheduleItemSchema).optional(),
  "timezone": z.string().optional(),
  "type": z.enum(["ANY_TIME", "CUSTOM", "SPECIFIC_TIME"]).optional()
});
export type CustomTimeSchedule = z.infer<typeof CustomTimeScheduleSchema>;

const CustomTimeScheduleItemSchemaImpl = z.object({
  "dayOfWeek": z.number().optional(),
  "enabled": z.boolean().optional(),
  "endsOn": z.number().optional(),
  "startsOn": z.number().optional()
});
export type CustomTimeScheduleItem = z.infer<typeof CustomTimeScheduleItemSchema>;

const CustomTranslationSchemaImpl = z.object({
  "translationMap": z.object({

})
});
export type CustomTranslation = z.infer<typeof CustomTranslationSchema>;

const CustomerSchemaImpl = z.object({
  "id": CustomerIdSchema.optional(),
  "createdTime": z.number().optional(),
  "title": z.string(),
  "name": z.string().optional(),
  "tenantId": TenantIdSchema.optional(),
  "parentCustomerId": CustomerIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "ownerId": EntityIdSchema.optional(),
  "country": z.string().optional(),
  "state": z.string().optional(),
  "city": z.string().optional(),
  "address": z.string().optional(),
  "address2": z.string().optional(),
  "zip": z.string().optional(),
  "phone": z.string().optional(),
  "email": z.string(),
  "additionalInfo": JsonNodeSchema.optional()
});
export type Customer = z.infer<typeof CustomerSchema>;

const CustomerIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["CUSTOMER"])
});
export type CustomerId = z.infer<typeof CustomerIdSchema>;

const CustomerInfoSchemaImpl = z.object({
  "id": CustomerIdSchema.optional(),
  "createdTime": z.number().optional(),
  "title": z.string(),
  "name": z.string().optional(),
  "tenantId": TenantIdSchema.optional(),
  "parentCustomerId": CustomerIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "ownerId": EntityIdSchema.optional(),
  "country": z.string().optional(),
  "state": z.string().optional(),
  "city": z.string().optional(),
  "address": z.string().optional(),
  "address2": z.string().optional(),
  "zip": z.string().optional(),
  "phone": z.string().optional(),
  "email": z.string(),
  "additionalInfo": JsonNodeSchema.optional(),
  "ownerName": z.string().optional(),
  "groups": z.array(EntityInfoSchema).optional()
});
export type CustomerInfo = z.infer<typeof CustomerInfoSchema>;

const CustomerUsersFilterSchemaImpl = z.object({
  "customerId": z.string().optional()
});
export type CustomerUsersFilter = z.infer<typeof CustomerUsersFilterSchema>;

const DashboardSchemaImpl = z.object({
  "id": DashboardIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "ownerId": EntityIdSchema.optional(),
  "title": z.string().optional(),
  "image": z.string().optional(),
  "assignedCustomers": z.array(ShortCustomerInfoSchema).optional(),
  "mobileHide": z.boolean().optional(),
  "mobileOrder": z.number().optional(),
  "name": z.string().optional(),
  "configuration": JsonNodeSchema.optional()
});
export type Dashboard = z.infer<typeof DashboardSchema>;

const DashboardIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["DASHBOARD"])
});
export type DashboardId = z.infer<typeof DashboardIdSchema>;

const DashboardInfoSchemaImpl = z.object({
  "id": DashboardIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "ownerId": EntityIdSchema.optional(),
  "title": z.string().optional(),
  "image": z.string().optional(),
  "assignedCustomers": z.array(ShortCustomerInfoSchema).optional(),
  "mobileHide": z.boolean().optional(),
  "mobileOrder": z.number().optional(),
  "name": z.string().optional(),
  "configuration": JsonNodeSchema.optional(),
  "ownerName": z.string().optional(),
  "groups": z.array(EntityInfoSchema).optional()
});
export type DashboardInfo = z.infer<typeof DashboardInfoSchema>;

const DebugConverterEventFilterSchemaImpl = z.object({
  "error": z.boolean().optional(),
  "in": z.string().optional(),
  "metadata": z.string().optional(),
  "notEmpty": z.boolean().optional(),
  "out": z.string().optional(),
  "type": z.string().optional(),
  "eventType": z.enum(["DEBUG_CONVERTER", "DEBUG_INTEGRATION", "DEBUG_RULE_CHAIN", "DEBUG_RULE_NODE", "ERROR", "LC_EVENT", "RAW_DATA", "STATS"]).optional(),
  "server": z.string().optional(),
  "errorStr": z.string().optional()
});
export type DebugConverterEventFilter = z.infer<typeof DebugConverterEventFilterSchema>;

const DebugIntegrationEventFilterSchemaImpl = z.object({
  "error": z.boolean().optional(),
  "message": z.string().optional(),
  "notEmpty": z.boolean().optional(),
  "statusIntegration": z.string().optional(),
  "type": z.string().optional(),
  "eventType": z.enum(["DEBUG_CONVERTER", "DEBUG_INTEGRATION", "DEBUG_RULE_CHAIN", "DEBUG_RULE_NODE", "ERROR", "LC_EVENT", "RAW_DATA", "STATS"]).optional(),
  "server": z.string().optional(),
  "errorStr": z.string().optional()
});
export type DebugIntegrationEventFilter = z.infer<typeof DebugIntegrationEventFilterSchema>;

const DefaultCoapDeviceTypeConfigurationSchemaImpl = z.object({
  "transportPayloadTypeConfiguration": TransportPayloadTypeConfigurationSchema.optional()
});
export type DefaultCoapDeviceTypeConfiguration = z.infer<typeof DefaultCoapDeviceTypeConfigurationSchema>;

const DefaultDeviceConfigurationSchemaImpl = z.any();
export type DefaultDeviceConfiguration = z.infer<typeof DefaultDeviceConfigurationSchema>;

const DefaultDeviceProfileConfigurationSchemaImpl = z.object({

});
export type DefaultDeviceProfileConfiguration = z.infer<typeof DefaultDeviceProfileConfigurationSchema>;

const DefaultDeviceProfileTransportConfigurationSchemaImpl = z.object({

});
export type DefaultDeviceProfileTransportConfiguration = z.infer<typeof DefaultDeviceProfileTransportConfigurationSchema>;

const DefaultDeviceTransportConfigurationSchemaImpl = z.any();
export type DefaultDeviceTransportConfiguration = z.infer<typeof DefaultDeviceTransportConfigurationSchema>;

const DefaultRuleChainCreateRequestSchemaImpl = z.object({
  "name": z.string()
});
export type DefaultRuleChainCreateRequest = z.infer<typeof DefaultRuleChainCreateRequestSchema>;

const DefaultTenantProfileConfigurationSchemaImpl = z.object({
  "alarmsTtlDays": z.number().optional(),
  "cassandraQueryTenantRateLimitsConfiguration": z.string().optional(),
  "customerServerRestLimitsConfiguration": z.string().optional(),
  "defaultStorageTtlDays": z.number().optional(),
  "integrationMsgsPerDeviceRateLimit": z.string().optional(),
  "integrationMsgsPerTenantRateLimit": z.string().optional(),
  "maxAssets": z.number().optional(),
  "maxConverters": z.number().optional(),
  "maxCreatedAlarms": z.number().optional(),
  "maxCustomers": z.number().optional(),
  "maxDPStorageDays": z.number().optional(),
  "maxDashboards": z.number().optional(),
  "maxDevices": z.number().optional(),
  "maxEmails": z.number().optional(),
  "maxIntegrations": z.number().optional(),
  "maxJSExecutions": z.number().optional(),
  "maxOtaPackagesInBytes": z.number().optional(),
  "maxREExecutions": z.number().optional(),
  "maxResourceSize": z.number().optional(),
  "maxResourcesInBytes": z.number().optional(),
  "maxRuleChains": z.number().optional(),
  "maxRuleNodeExecutionsPerMessage": z.number().optional(),
  "maxSchedulerEvents": z.number().optional(),
  "maxSms": z.number().optional(),
  "maxTbelExecutions": z.number().optional(),
  "maxTransportDataPoints": z.number().optional(),
  "maxTransportMessages": z.number().optional(),
  "maxUsers": z.number().optional(),
  "maxWsSessionsPerCustomer": z.number().optional(),
  "maxWsSessionsPerPublicUser": z.number().optional(),
  "maxWsSessionsPerRegularUser": z.number().optional(),
  "maxWsSessionsPerTenant": z.number().optional(),
  "maxWsSubscriptionsPerCustomer": z.number().optional(),
  "maxWsSubscriptionsPerPublicUser": z.number().optional(),
  "maxWsSubscriptionsPerRegularUser": z.number().optional(),
  "maxWsSubscriptionsPerTenant": z.number().optional(),
  "queueStatsTtlDays": z.number().optional(),
  "rpcTtlDays": z.number().optional(),
  "ruleEngineExceptionsTtlDays": z.number().optional(),
  "smsEnabled": z.boolean().optional(),
  "tenantEntityExportRateLimit": z.string().optional(),
  "tenantEntityImportRateLimit": z.string().optional(),
  "tenantNotificationRequestsPerRuleRateLimit": z.string().optional(),
  "tenantNotificationRequestsRateLimit": z.string().optional(),
  "tenantServerRestLimitsConfiguration": z.string().optional(),
  "transportDeviceMsgRateLimit": z.string().optional(),
  "transportDeviceTelemetryDataPointsRateLimit": z.string().optional(),
  "transportDeviceTelemetryMsgRateLimit": z.string().optional(),
  "transportTenantMsgRateLimit": z.string().optional(),
  "transportTenantTelemetryDataPointsRateLimit": z.string().optional(),
  "transportTenantTelemetryMsgRateLimit": z.string().optional(),
  "warnThreshold": z.number().optional(),
  "wsMsgQueueLimitPerSession": z.number().optional(),
  "wsUpdatesPerSessionRateLimit": z.string().optional()
});
export type DefaultTenantProfileConfiguration = z.infer<typeof DefaultTenantProfileConfigurationSchema>;

const DeferredResult_Of_EntityDataDiffSchemaImpl = z.object({
  "result": z.object({

}).optional(),
  "setOrExpired": z.boolean().optional()
});
export type DeferredResult_Of_EntityDataDiff = z.infer<typeof DeferredResult_Of_EntityDataDiffSchema>;

const DeferredResult_Of_EntityDataInfoSchemaImpl = z.object({
  "result": z.object({

}).optional(),
  "setOrExpired": z.boolean().optional()
});
export type DeferredResult_Of_EntityDataInfo = z.infer<typeof DeferredResult_Of_EntityDataInfoSchema>;

const DeferredResult_Of_List_Of_BranchInfoSchemaImpl = z.object({
  "result": z.object({

}).optional(),
  "setOrExpired": z.boolean().optional()
});
export type DeferredResult_Of_List_Of_BranchInfo = z.infer<typeof DeferredResult_Of_List_Of_BranchInfoSchema>;

const DeferredResult_Of_List_Of_VersionedEntityInfoSchemaImpl = z.object({
  "result": z.object({

}).optional(),
  "setOrExpired": z.boolean().optional()
});
export type DeferredResult_Of_List_Of_VersionedEntityInfo = z.infer<typeof DeferredResult_Of_List_Of_VersionedEntityInfoSchema>;

const DeferredResult_Of_PageData_Of_EntityVersionSchemaImpl = z.object({
  "result": z.object({

}).optional(),
  "setOrExpired": z.boolean().optional()
});
export type DeferredResult_Of_PageData_Of_EntityVersion = z.infer<typeof DeferredResult_Of_PageData_Of_EntityVersionSchema>;

const DeferredResult_Of_RepositorySettingsSchemaImpl = z.object({
  "result": z.object({

}).optional(),
  "setOrExpired": z.boolean().optional()
});
export type DeferredResult_Of_RepositorySettings = z.infer<typeof DeferredResult_Of_RepositorySettingsSchema>;

const DeferredResult_Of_ResponseEntitySchemaImpl = z.object({
  "result": z.object({

}).optional(),
  "setOrExpired": z.boolean().optional()
});
export type DeferredResult_Of_ResponseEntity = z.infer<typeof DeferredResult_Of_ResponseEntitySchema>;

const DeferredResult_Of_VoidSchemaImpl = z.object({
  "result": z.object({

}).optional(),
  "setOrExpired": z.boolean().optional()
});
export type DeferredResult_Of_Void = z.infer<typeof DeferredResult_Of_VoidSchema>;

const DeferredResult_Of_uuidSchemaImpl = z.object({
  "result": z.object({

}).optional(),
  "setOrExpired": z.boolean().optional()
});
export type DeferredResult_Of_uuid = z.infer<typeof DeferredResult_Of_uuidSchema>;

const DeliveryMethodNotificationTemplateSchemaImpl = z.object({
  "body": z.string().optional(),
  "enabled": z.boolean().optional()
});
export type DeliveryMethodNotificationTemplate = z.infer<typeof DeliveryMethodNotificationTemplateSchema>;

const DeviceSchemaImpl = z.object({
  "id": DeviceIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "ownerId": EntityIdSchema.optional(),
  "name": z.string(),
  "type": z.string().optional(),
  "label": z.string().optional(),
  "deviceProfileId": DeviceProfileIdSchema,
  "deviceData": DeviceDataSchema.optional(),
  "firmwareId": OtaPackageIdSchema.optional(),
  "softwareId": OtaPackageIdSchema.optional(),
  "additionalInfo": JsonNodeSchema.optional()
});
export type Device = z.infer<typeof DeviceSchema>;

const DeviceActivityNotificationRuleTriggerConfigSchemaImpl = z.object({
  "deviceProfiles": z.array(z.string()).optional(),
  "devices": z.array(z.string()).optional(),
  "notifyOn": z.array(z.enum(["ACTIVE", "INACTIVE"])).optional(),
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional()
});
export type DeviceActivityNotificationRuleTriggerConfig = z.infer<typeof DeviceActivityNotificationRuleTriggerConfigSchema>;

const DeviceConfigurationSchemaImpl = z.object({

});
export type DeviceConfiguration = z.infer<typeof DeviceConfigurationSchema>;

const DeviceCredentialsSchemaImpl = z.object({
  "id": DeviceCredentialsIdSchema,
  "createdTime": z.number().optional(),
  "deviceId": DeviceIdSchema,
  "credentialsType": z.enum(["ACCESS_TOKEN", "LWM2M_CREDENTIALS", "MQTT_BASIC", "X509_CERTIFICATE"]).optional(),
  "credentialsId": z.string(),
  "credentialsValue": z.string().optional()
});
export type DeviceCredentials = z.infer<typeof DeviceCredentialsSchema>;

const DeviceCredentialsIdSchemaImpl = z.object({
  "id": z.string()
});
export type DeviceCredentialsId = z.infer<typeof DeviceCredentialsIdSchema>;

const DeviceDataSchemaImpl = z.object({
  "configuration": DeviceConfigurationSchema.optional(),
  "transportConfiguration": DeviceTransportConfigurationSchema.optional()
});
export type DeviceData = z.infer<typeof DeviceDataSchema>;

const DeviceExportDataSchemaImpl = z.object({
  "attributes": z.object({

}).optional(),
  "credentials": DeviceCredentialsSchema.optional(),
  "entity": DeviceSchema.optional(),
  "entityType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
  "relations": z.array(EntityRelationSchema).optional()
});
export type DeviceExportData = z.infer<typeof DeviceExportDataSchema>;

const DeviceGroupOtaPackageSchemaImpl = z.object({
  "groupId": EntityGroupIdSchema.optional(),
  "id": z.string().optional(),
  "otaPackageId": OtaPackageIdSchema.optional(),
  "otaPackageType": z.enum(["FIRMWARE", "SOFTWARE"]).optional(),
  "otaPackageUpdateTime": z.number().optional()
});
export type DeviceGroupOtaPackage = z.infer<typeof DeviceGroupOtaPackageSchema>;

const DeviceIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["DEVICE"])
});
export type DeviceId = z.infer<typeof DeviceIdSchema>;

const DeviceInfoSchemaImpl = z.object({
  "id": DeviceIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "ownerId": EntityIdSchema.optional(),
  "name": z.string(),
  "type": z.string().optional(),
  "label": z.string().optional(),
  "deviceProfileId": DeviceProfileIdSchema,
  "deviceData": DeviceDataSchema.optional(),
  "firmwareId": OtaPackageIdSchema.optional(),
  "softwareId": OtaPackageIdSchema.optional(),
  "additionalInfo": JsonNodeSchema.optional(),
  "ownerName": z.string().optional(),
  "groups": z.array(EntityInfoSchema).optional(),
  "active": z.boolean().optional()
});
export type DeviceInfo = z.infer<typeof DeviceInfoSchema>;

const DeviceProfileSchemaImpl = z.object({
  "id": DeviceProfileIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "name": z.string().optional(),
  "default": z.boolean().optional(),
  "defaultDashboardId": DashboardIdSchema.optional(),
  "defaultRuleChainId": RuleChainIdSchema.optional(),
  "defaultQueueName": z.string().optional(),
  "firmwareId": OtaPackageIdSchema.optional(),
  "softwareId": OtaPackageIdSchema.optional(),
  "description": z.string().optional(),
  "image": z.string().optional(),
  "provisionDeviceKey": z.string().optional(),
  "transportType": z.enum(["COAP", "DEFAULT", "LWM2M", "MQTT", "SNMP"]).optional(),
  "provisionType": z.enum(["ALLOW_CREATE_NEW_DEVICES", "CHECK_PRE_PROVISIONED_DEVICES", "DISABLED", "X509_CERTIFICATE_CHAIN"]).optional(),
  "profileData": DeviceProfileDataSchema.optional(),
  "type": z.enum(["DEFAULT"]).optional(),
  "defaultEdgeRuleChainId": RuleChainIdSchema.optional()
});
export type DeviceProfile = z.infer<typeof DeviceProfileSchema>;

const DeviceProfileAlarmSchemaImpl = z.object({
  "id": z.string().optional(),
  "alarmType": z.string().optional(),
  "createRules": z.object({

}).optional(),
  "clearRule": AlarmRuleSchema.optional(),
  "propagate": z.boolean().optional(),
  "propagateToOwner": z.boolean().optional(),
  "propagateToOwnerHierarchy": z.boolean().optional(),
  "propagateToTenant": z.boolean().optional(),
  "propagateRelationTypes": z.array(z.string()).optional()
});
export type DeviceProfileAlarm = z.infer<typeof DeviceProfileAlarmSchema>;

const DeviceProfileConfigurationSchemaImpl = z.object({

});
export type DeviceProfileConfiguration = z.infer<typeof DeviceProfileConfigurationSchema>;

const DeviceProfileDataSchemaImpl = z.object({
  "configuration": DeviceProfileConfigurationSchema.optional(),
  "transportConfiguration": DeviceProfileTransportConfigurationSchema.optional(),
  "provisionConfiguration": DeviceProfileProvisionConfigurationSchema.optional(),
  "alarms": z.array(DeviceProfileAlarmSchema).optional()
});
export type DeviceProfileData = z.infer<typeof DeviceProfileDataSchema>;

const DeviceProfileIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["DEVICE_PROFILE"])
});
export type DeviceProfileId = z.infer<typeof DeviceProfileIdSchema>;

const DeviceProfileInfoSchemaImpl = z.object({
  "id": EntityIdSchema.optional(),
  "name": z.string().optional(),
  "image": z.string().optional(),
  "defaultDashboardId": DashboardIdSchema.optional(),
  "type": z.enum(["DEFAULT"]).optional(),
  "transportType": z.enum(["COAP", "DEFAULT", "LWM2M", "MQTT", "SNMP"]).optional(),
  "tenantId": TenantIdSchema.optional()
});
export type DeviceProfileInfo = z.infer<typeof DeviceProfileInfoSchema>;

const DeviceProfileProvisionConfigurationSchemaImpl = z.object({
  "provisionDeviceSecret": z.string().optional()
});
export type DeviceProfileProvisionConfiguration = z.infer<typeof DeviceProfileProvisionConfigurationSchema>;

const DeviceProfileTransportConfigurationSchemaImpl = z.object({

});
export type DeviceProfileTransportConfiguration = z.infer<typeof DeviceProfileTransportConfigurationSchema>;

const DeviceSearchQuerySchemaImpl = z.object({
  "relationType": z.string().optional(),
  "deviceTypes": z.array(z.string()).optional(),
  "parameters": RelationsSearchParametersSchema.optional()
});
export type DeviceSearchQuery = z.infer<typeof DeviceSearchQuerySchema>;

const DeviceSearchQueryFilterSchemaImpl = z.object({
  "deviceTypes": z.array(z.string()).optional(),
  "direction": z.enum(["FROM", "TO"]).optional(),
  "fetchLastLevelOnly": z.boolean().optional(),
  "maxLevel": z.number().optional(),
  "relationType": z.string().optional(),
  "rootEntity": EntityIdSchema.optional()
});
export type DeviceSearchQueryFilter = z.infer<typeof DeviceSearchQueryFilterSchema>;

const DeviceTransportConfigurationSchemaImpl = z.object({

});
export type DeviceTransportConfiguration = z.infer<typeof DeviceTransportConfigurationSchema>;

const DeviceTypeFilterSchemaImpl = z.object({
  "deviceNameFilter": z.string().optional(),
  "deviceTypes": z.array(z.string()).optional()
});
export type DeviceTypeFilter = z.infer<typeof DeviceTypeFilterSchema>;

const DisabledDeviceProfileProvisionConfigurationSchemaImpl = z.object({
  "provisionDeviceSecret": z.string().optional()
});
export type DisabledDeviceProfileProvisionConfiguration = z.infer<typeof DisabledDeviceProfileProvisionConfigurationSchema>;

const DurationAlarmConditionSpecSchemaImpl = z.object({
  "predicate": FilterPredicateValue_Of_longSchema.optional(),
  "unit": z.enum(["DAYS", "HOURS", "MICROSECONDS", "MILLISECONDS", "MINUTES", "NANOSECONDS", "SECONDS"]).optional()
});
export type DurationAlarmConditionSpec = z.infer<typeof DurationAlarmConditionSpecSchema>;

const DynamicValue_Of_booleanSchemaImpl = z.object({
  "inherit": z.boolean().optional(),
  "sourceAttribute": z.string().optional(),
  "sourceType": z.enum(["CURRENT_CUSTOMER", "CURRENT_DEVICE", "CURRENT_TENANT", "CURRENT_USER"]).optional()
});
export type DynamicValue_Of_boolean = z.infer<typeof DynamicValue_Of_booleanSchema>;

const DynamicValue_Of_doubleSchemaImpl = z.object({
  "inherit": z.boolean().optional(),
  "sourceAttribute": z.string().optional(),
  "sourceType": z.enum(["CURRENT_CUSTOMER", "CURRENT_DEVICE", "CURRENT_TENANT", "CURRENT_USER"]).optional()
});
export type DynamicValue_Of_double = z.infer<typeof DynamicValue_Of_doubleSchema>;

const DynamicValue_Of_intSchemaImpl = z.object({
  "inherit": z.boolean().optional(),
  "sourceAttribute": z.string().optional(),
  "sourceType": z.enum(["CURRENT_CUSTOMER", "CURRENT_DEVICE", "CURRENT_TENANT", "CURRENT_USER"]).optional()
});
export type DynamicValue_Of_int = z.infer<typeof DynamicValue_Of_intSchema>;

const DynamicValue_Of_longSchemaImpl = z.object({
  "inherit": z.boolean().optional(),
  "sourceAttribute": z.string().optional(),
  "sourceType": z.enum(["CURRENT_CUSTOMER", "CURRENT_DEVICE", "CURRENT_TENANT", "CURRENT_USER"]).optional()
});
export type DynamicValue_Of_long = z.infer<typeof DynamicValue_Of_longSchema>;

const DynamicValue_Of_stringSchemaImpl = z.object({
  "inherit": z.boolean().optional(),
  "sourceAttribute": z.string().optional(),
  "sourceType": z.enum(["CURRENT_CUSTOMER", "CURRENT_DEVICE", "CURRENT_TENANT", "CURRENT_USER"]).optional()
});
export type DynamicValue_Of_string = z.infer<typeof DynamicValue_Of_stringSchema>;

const EdgeSchemaImpl = z.object({
  "additionalInfo": JsonNodeSchema.optional(),
  "ownerId": EntityIdSchema.optional(),
  "id": EdgeIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "rootRuleChainId": RuleChainIdSchema.optional(),
  "name": z.string(),
  "type": z.string(),
  "label": z.string().optional(),
  "routingKey": z.string(),
  "secret": z.string(),
  "edgeLicenseKey": z.string(),
  "cloudEndpoint": z.string()
});
export type Edge = z.infer<typeof EdgeSchema>;

const EdgeEventSchemaImpl = z.object({
  "action": z.enum(["ADDED", "ADDED_TO_ENTITY_GROUP", "ALARM_ACK", "ALARM_ASSIGNED", "ALARM_CLEAR", "ALARM_UNASSIGNED", "ASSIGNED_TO_EDGE", "ATTRIBUTES_DELETED", "ATTRIBUTES_UPDATED", "CHANGE_OWNER", "CREDENTIALS_REQUEST", "CREDENTIALS_UPDATED", "DELETED", "ENTITY_MERGE_REQUEST", "POST_ATTRIBUTES", "RELATION_ADD_OR_UPDATE", "RELATION_DELETED", "REMOVED_FROM_ENTITY_GROUP", "RPC_CALL", "TIMESERIES_UPDATED", "UNASSIGNED_FROM_EDGE", "UPDATED"]).optional(),
  "body": JsonNodeSchema.optional(),
  "createdTime": z.number().optional(),
  "edgeId": EdgeIdSchema.optional(),
  "entityGroupId": z.string().optional(),
  "entityId": z.string().optional(),
  "id": EdgeEventIdSchema.optional(),
  "seqId": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "type": z.enum(["ADMIN_SETTINGS", "ALARM", "ASSET", "ASSET_PROFILE", "CONVERTER", "CUSTOMER", "CUSTOM_TRANSLATION", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "LOGIN_WHITE_LABELING", "MAIL_TEMPLATES", "OTA_PACKAGE", "QUEUE", "RELATION", "ROLE", "RULE_CHAIN", "RULE_CHAIN_METADATA", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WHITE_LABELING", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
  "uid": z.string().optional()
});
export type EdgeEvent = z.infer<typeof EdgeEventSchema>;

const EdgeEventIdSchemaImpl = z.object({
  "id": z.string()
});
export type EdgeEventId = z.infer<typeof EdgeEventIdSchema>;

const EdgeIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["EDGE"])
});
export type EdgeId = z.infer<typeof EdgeIdSchema>;

const EdgeInfoSchemaImpl = z.object({
  "additionalInfo": JsonNodeSchema.optional(),
  "ownerId": EntityIdSchema.optional(),
  "id": EdgeIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "rootRuleChainId": RuleChainIdSchema.optional(),
  "name": z.string(),
  "type": z.string(),
  "label": z.string().optional(),
  "routingKey": z.string(),
  "secret": z.string(),
  "edgeLicenseKey": z.string(),
  "cloudEndpoint": z.string(),
  "ownerName": z.string().optional(),
  "groups": z.array(EntityInfoSchema).optional()
});
export type EdgeInfo = z.infer<typeof EdgeInfoSchema>;

const EdgeInstructionsSchemaImpl = z.object({
  "instructions": z.string().optional()
});
export type EdgeInstructions = z.infer<typeof EdgeInstructionsSchema>;

const EdgeSearchQuerySchemaImpl = z.object({
  "relationType": z.string().optional(),
  "edgeTypes": z.array(z.string()).optional(),
  "parameters": RelationsSearchParametersSchema.optional()
});
export type EdgeSearchQuery = z.infer<typeof EdgeSearchQuerySchema>;

const EdgeSearchQueryFilterSchemaImpl = z.object({
  "direction": z.enum(["FROM", "TO"]).optional(),
  "edgeTypes": z.array(z.string()).optional(),
  "fetchLastLevelOnly": z.boolean().optional(),
  "maxLevel": z.number().optional(),
  "relationType": z.string().optional(),
  "rootEntity": EntityIdSchema.optional()
});
export type EdgeSearchQueryFilter = z.infer<typeof EdgeSearchQueryFilterSchema>;

const EdgeTypeFilterSchemaImpl = z.object({
  "edgeNameFilter": z.string().optional(),
  "edgeTypes": z.array(z.string()).optional()
});
export type EdgeTypeFilter = z.infer<typeof EdgeTypeFilterSchema>;

const EfentoCoapDeviceTypeConfigurationSchemaImpl = z.object({

});
export type EfentoCoapDeviceTypeConfiguration = z.infer<typeof EfentoCoapDeviceTypeConfigurationSchema>;

const EmailDeliveryMethodNotificationTemplateSchemaImpl = z.object({
  "body": z.string().optional(),
  "enabled": z.boolean().optional(),
  "subject": z.string().optional()
});
export type EmailDeliveryMethodNotificationTemplate = z.infer<typeof EmailDeliveryMethodNotificationTemplateSchema>;

const EmailTwoFaAccountConfigSchemaImpl = z.object({
  "email": z.string(),
  "useByDefault": z.boolean().optional()
});
export type EmailTwoFaAccountConfig = z.infer<typeof EmailTwoFaAccountConfigSchema>;

const EmailTwoFaProviderConfigSchemaImpl = z.object({
  "verificationCodeLifetime": z.number().optional()
});
export type EmailTwoFaProviderConfig = z.infer<typeof EmailTwoFaProviderConfigSchema>;

const EntitiesByGroupNameFilterSchemaImpl = z.object({
  "entityGroupNameFilter": z.string().optional(),
  "groupType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
  "ownerId": EntityIdSchema.optional()
});
export type EntitiesByGroupNameFilter = z.infer<typeof EntitiesByGroupNameFilterSchema>;

const EntitiesLimitNotificationRuleTriggerConfigSchemaImpl = z.object({
  "entityTypes": z.array(z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"])).optional(),
  "threshold": z.number().optional(),
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional()
});
export type EntitiesLimitNotificationRuleTriggerConfig = z.infer<typeof EntitiesLimitNotificationRuleTriggerConfigSchema>;

const EntityActionNotificationRuleTriggerConfigSchemaImpl = z.object({
  "created": z.boolean().optional(),
  "deleted": z.boolean().optional(),
  "entityTypes": z.array(z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"])).optional(),
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional(),
  "updated": z.boolean().optional()
});
export type EntityActionNotificationRuleTriggerConfig = z.infer<typeof EntityActionNotificationRuleTriggerConfigSchema>;

const EntityCountQuerySchemaImpl = z.object({
  "entityFilter": EntityFilterSchema.optional(),
  "keyFilters": z.array(KeyFilterSchema).optional()
});
export type EntityCountQuery = z.infer<typeof EntityCountQuerySchema>;

const EntityDataSchemaImpl = z.object({
  "aggLatest": z.object({

}).optional(),
  "entityId": EntityIdSchema.optional(),
  "latest": z.object({

}).optional(),
  "readAttrs": z.boolean().optional(),
  "readTs": z.boolean().optional(),
  "timeseries": z.object({

}).optional()
});
export type EntityData = z.infer<typeof EntityDataSchema>;

const EntityDataDiffSchemaImpl = z.object({
  "currentVersion": EntityExportData_Of_objectSchema.optional(),
  "otherVersion": EntityExportData_Of_objectSchema.optional()
});
export type EntityDataDiff = z.infer<typeof EntityDataDiffSchema>;

const EntityDataInfoSchemaImpl = z.object({
  "hasAttributes": z.boolean().optional(),
  "hasCredentials": z.boolean().optional(),
  "hasGroupEntities": z.boolean().optional(),
  "hasPermissions": z.boolean().optional(),
  "hasRelations": z.boolean().optional()
});
export type EntityDataInfo = z.infer<typeof EntityDataInfoSchema>;

const EntityDataPageLinkSchemaImpl = z.object({
  "dynamic": z.boolean().optional(),
  "page": z.number().optional(),
  "pageSize": z.number().optional(),
  "sortOrder": EntityDataSortOrderSchema.optional(),
  "textSearch": z.string().optional()
});
export type EntityDataPageLink = z.infer<typeof EntityDataPageLinkSchema>;

const EntityDataQuerySchemaImpl = z.object({
  "entityFields": z.array(EntityKeySchema).optional(),
  "entityFilter": EntityFilterSchema.optional(),
  "keyFilters": z.array(KeyFilterSchema).optional(),
  "latestValues": z.array(EntityKeySchema).optional(),
  "pageLink": EntityDataPageLinkSchema.optional()
});
export type EntityDataQuery = z.infer<typeof EntityDataQuerySchema>;

const EntityDataSortOrderSchemaImpl = z.object({
  "direction": z.enum(["ASC", "DESC"]).optional(),
  "key": EntityKeySchema.optional()
});
export type EntityDataSortOrder = z.infer<typeof EntityDataSortOrderSchema>;

const EntityExportData_Of_objectSchemaImpl = z.object({
  "attributes": z.object({

}).optional(),
  "entity": z.object({

}).optional(),
  "entityType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
  "relations": z.array(EntityRelationSchema).optional()
});
export type EntityExportData_Of_object = z.infer<typeof EntityExportData_Of_objectSchema>;

const EntityFilterSchemaImpl = z.object({

});
export type EntityFilter = z.infer<typeof EntityFilterSchema>;

const EntityGroupSchemaImpl = z.object({
  "id": EntityGroupIdSchema.optional(),
  "createdTime": z.number().optional(),
  "ownerId": EntityIdSchema.optional(),
  "name": z.string(),
  "type": z.enum(["ASSET", "CUSTOMER", "DASHBOARD", "DEVICE", "EDGE", "ENTITY_VIEW", "USER"]),
  "additionalInfo": JsonNodeSchema.optional(),
  "configuration": JsonNodeSchema.optional(),
  "groupAll": z.boolean().optional(),
  "edgeGroupAll": z.boolean().optional()
});
export type EntityGroup = z.infer<typeof EntityGroupSchema>;

const EntityGroupExportDataSchemaImpl = z.object({
  "attributes": z.object({

}).optional(),
  "entity": EntityGroupSchema.optional(),
  "entityType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
  "groupEntities": z.boolean().optional(),
  "permissions": z.array(GroupPermissionSchema).optional(),
  "relations": z.array(EntityRelationSchema).optional()
});
export type EntityGroupExportData = z.infer<typeof EntityGroupExportDataSchema>;

const EntityGroupFilterSchemaImpl = z.object({
  "entityGroup": z.string().optional(),
  "groupType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional()
});
export type EntityGroupFilter = z.infer<typeof EntityGroupFilterSchema>;

const EntityGroupIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["ENTITY_GROUP"])
});
export type EntityGroupId = z.infer<typeof EntityGroupIdSchema>;

const EntityGroupInfoSchemaImpl = z.object({
  "id": EntityGroupIdSchema.optional(),
  "createdTime": z.number().optional(),
  "ownerId": EntityIdSchema.optional(),
  "name": z.string(),
  "type": z.enum(["ASSET", "CUSTOMER", "DASHBOARD", "DEVICE", "EDGE", "ENTITY_VIEW", "USER"]),
  "additionalInfo": JsonNodeSchema.optional(),
  "configuration": JsonNodeSchema.optional(),
  "groupAll": z.boolean().optional(),
  "edgeGroupAll": z.boolean().optional(),
  "ownerIds": z.array(EntityIdSchema)
});
export type EntityGroupInfo = z.infer<typeof EntityGroupInfoSchema>;

const EntityGroupListFilterSchemaImpl = z.object({
  "entityGroupList": z.array(z.string()).optional(),
  "groupType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional()
});
export type EntityGroupListFilter = z.infer<typeof EntityGroupListFilterSchema>;

const EntityGroupNameFilterSchemaImpl = z.object({
  "entityGroupNameFilter": z.string().optional(),
  "groupType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional()
});
export type EntityGroupNameFilter = z.infer<typeof EntityGroupNameFilterSchema>;

const EntityIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"])
});
export type EntityId = z.infer<typeof EntityIdSchema>;

const EntityInfoSchemaImpl = z.object({
  "id": EntityIdSchema.optional(),
  "name": z.string().optional()
});
export type EntityInfo = z.infer<typeof EntityInfoSchema>;

const EntityKeySchemaImpl = z.object({
  "key": z.string().optional(),
  "type": z.enum(["ALARM_FIELD", "ATTRIBUTE", "CLIENT_ATTRIBUTE", "ENTITY_FIELD", "SERVER_ATTRIBUTE", "SHARED_ATTRIBUTE", "TIME_SERIES"]).optional()
});
export type EntityKey = z.infer<typeof EntityKeySchema>;

const EntityListFilterSchemaImpl = z.object({
  "entityList": z.array(z.string()).optional(),
  "entityType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional()
});
export type EntityListFilter = z.infer<typeof EntityListFilterSchema>;

const EntityLoadErrorSchemaImpl = z.object({
  "message": z.string().optional(),
  "source": EntityIdSchema.optional(),
  "target": EntityIdSchema.optional(),
  "type": z.string().optional()
});
export type EntityLoadError = z.infer<typeof EntityLoadErrorSchema>;

const EntityNameFilterSchemaImpl = z.object({
  "entityNameFilter": z.string().optional(),
  "entityType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional()
});
export type EntityNameFilter = z.infer<typeof EntityNameFilterSchema>;

const EntityRelationSchemaImpl = z.object({
  "from": EntityIdSchema.optional(),
  "to": EntityIdSchema.optional(),
  "type": z.string().optional(),
  "typeGroup": z.enum(["COMMON", "DASHBOARD", "EDGE", "EDGE_AUTO_ASSIGN_RULE_CHAIN", "FROM_ENTITY_GROUP", "RULE_CHAIN", "RULE_NODE"]).optional(),
  "additionalInfo": JsonNodeSchema.optional()
});
export type EntityRelation = z.infer<typeof EntityRelationSchema>;

const EntityRelationInfoSchemaImpl = z.object({
  "from": EntityIdSchema.optional(),
  "to": EntityIdSchema.optional(),
  "type": z.string().optional(),
  "typeGroup": z.enum(["COMMON", "DASHBOARD", "EDGE", "EDGE_AUTO_ASSIGN_RULE_CHAIN", "FROM_ENTITY_GROUP", "RULE_CHAIN", "RULE_NODE"]).optional(),
  "additionalInfo": JsonNodeSchema.optional(),
  "fromName": z.string().optional(),
  "toName": z.string().optional()
});
export type EntityRelationInfo = z.infer<typeof EntityRelationInfoSchema>;

const EntityRelationsQuerySchemaImpl = z.object({
  "filters": z.array(RelationEntityTypeFilterSchema).optional(),
  "parameters": RelationsSearchParametersSchema.optional()
});
export type EntityRelationsQuery = z.infer<typeof EntityRelationsQuerySchema>;

const EntitySubtypeSchemaImpl = z.object({
  "entityType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
  "tenantId": TenantIdSchema.optional(),
  "type": z.string().optional()
});
export type EntitySubtype = z.infer<typeof EntitySubtypeSchema>;

const EntityTypeFilterSchemaImpl = z.object({
  "entityType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional()
});
export type EntityTypeFilter = z.infer<typeof EntityTypeFilterSchema>;

const EntityTypeLoadResultSchemaImpl = z.object({
  "created": z.number().optional(),
  "deleted": z.number().optional(),
  "entityType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
  "groupsCreated": z.number().optional(),
  "groupsDeleted": z.number().optional(),
  "groupsUpdated": z.number().optional(),
  "updated": z.number().optional()
});
export type EntityTypeLoadResult = z.infer<typeof EntityTypeLoadResultSchema>;

const EntityTypeVersionCreateConfigSchemaImpl = z.object({
  "allEntities": z.boolean().optional(),
  "entityIds": z.array(z.string()).optional(),
  "saveAttributes": z.boolean().optional(),
  "saveCredentials": z.boolean().optional(),
  "saveGroupEntities": z.boolean().optional(),
  "savePermissions": z.boolean().optional(),
  "saveRelations": z.boolean().optional(),
  "syncStrategy": z.enum(["MERGE", "OVERWRITE"]).optional()
});
export type EntityTypeVersionCreateConfig = z.infer<typeof EntityTypeVersionCreateConfigSchema>;

const EntityTypeVersionLoadConfigSchemaImpl = z.object({
  "autoGenerateIntegrationKey": z.boolean().optional(),
  "findExistingEntityByName": z.boolean().optional(),
  "loadAttributes": z.boolean().optional(),
  "loadCredentials": z.boolean().optional(),
  "loadGroupEntities": z.boolean().optional(),
  "loadPermissions": z.boolean().optional(),
  "loadRelations": z.boolean().optional(),
  "removeOtherEntities": z.boolean().optional()
});
export type EntityTypeVersionLoadConfig = z.infer<typeof EntityTypeVersionLoadConfigSchema>;

const EntityTypeVersionLoadRequestSchemaImpl = z.object({
  "entityTypes": z.object({

}).optional(),
  "type": z.enum(["ENTITY_TYPE", "SINGLE_ENTITY"]).optional(),
  "versionId": z.string().optional()
});
export type EntityTypeVersionLoadRequest = z.infer<typeof EntityTypeVersionLoadRequestSchema>;

const EntityVersionSchemaImpl = z.object({
  "author": z.string().optional(),
  "id": z.string().optional(),
  "name": z.string().optional(),
  "timestamp": z.number().optional()
});
export type EntityVersion = z.infer<typeof EntityVersionSchema>;

const EntityViewSchemaImpl = z.object({
  "id": EntityViewIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "name": z.string(),
  "type": z.string(),
  "entityId": EntityIdSchema.optional(),
  "keys": TelemetryEntityViewSchema.optional(),
  "startTimeMs": z.number().optional(),
  "endTimeMs": z.number().optional(),
  "additionalInfo": JsonNodeSchema.optional(),
  "ownerId": EntityIdSchema.optional()
});
export type EntityView = z.infer<typeof EntityViewSchema>;

const EntityViewIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["ENTITY_VIEW"])
});
export type EntityViewId = z.infer<typeof EntityViewIdSchema>;

const EntityViewInfoSchemaImpl = z.object({
  "id": EntityViewIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "name": z.string(),
  "type": z.string(),
  "entityId": EntityIdSchema.optional(),
  "keys": TelemetryEntityViewSchema.optional(),
  "startTimeMs": z.number().optional(),
  "endTimeMs": z.number().optional(),
  "additionalInfo": JsonNodeSchema.optional(),
  "ownerName": z.string().optional(),
  "groups": z.array(EntityInfoSchema).optional(),
  "ownerId": EntityIdSchema.optional()
});
export type EntityViewInfo = z.infer<typeof EntityViewInfoSchema>;

const EntityViewSearchQuerySchemaImpl = z.object({
  "relationType": z.string().optional(),
  "entityViewTypes": z.array(z.string()).optional(),
  "parameters": RelationsSearchParametersSchema.optional()
});
export type EntityViewSearchQuery = z.infer<typeof EntityViewSearchQuerySchema>;

const EntityViewSearchQueryFilterSchemaImpl = z.object({
  "direction": z.enum(["FROM", "TO"]).optional(),
  "entityViewTypes": z.array(z.string()).optional(),
  "fetchLastLevelOnly": z.boolean().optional(),
  "maxLevel": z.number().optional(),
  "relationType": z.string().optional(),
  "rootEntity": EntityIdSchema.optional()
});
export type EntityViewSearchQueryFilter = z.infer<typeof EntityViewSearchQueryFilterSchema>;

const EntityViewTypeFilterSchemaImpl = z.object({
  "entityViewNameFilter": z.string().optional(),
  "entityViewTypes": z.array(z.string()).optional()
});
export type EntityViewTypeFilter = z.infer<typeof EntityViewTypeFilterSchema>;

const ErrorEventFilterSchemaImpl = z.object({
  "notEmpty": z.boolean().optional(),
  "eventType": z.enum(["DEBUG_CONVERTER", "DEBUG_INTEGRATION", "DEBUG_RULE_CHAIN", "DEBUG_RULE_NODE", "ERROR", "LC_EVENT", "RAW_DATA", "STATS"]).optional(),
  "server": z.string().optional(),
  "method": z.string().optional(),
  "errorStr": z.string().optional()
});
export type ErrorEventFilter = z.infer<typeof ErrorEventFilterSchema>;

const EscalatedNotificationRuleRecipientsConfigSchemaImpl = z.object({
  "escalationTable": z.object({

}).optional(),
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
export type EscalatedNotificationRuleRecipientsConfig = z.infer<typeof EscalatedNotificationRuleRecipientsConfigSchema>;

const EventFilterSchemaImpl = z.object({
  "notEmpty": z.boolean().optional(),
  "eventType": z.enum(["DEBUG_CONVERTER", "DEBUG_INTEGRATION", "DEBUG_RULE_CHAIN", "DEBUG_RULE_NODE", "ERROR", "LC_EVENT", "RAW_DATA", "STATS"])
});
export type EventFilter = z.infer<typeof EventFilterSchema>;

const EventIdSchemaImpl = z.object({
  "id": z.string()
});
export type EventId = z.infer<typeof EventIdSchema>;

const EventInfoSchemaImpl = z.object({
  "id": EventIdSchema.optional(),
  "tenantId": TenantIdSchema.optional(),
  "type": z.string().optional(),
  "uid": z.string().optional(),
  "entityId": EntityIdSchema.optional(),
  "body": JsonNodeSchema.optional(),
  "createdTime": z.number().optional()
});
export type EventInfo = z.infer<typeof EventInfoSchema>;

const ExportableEntity_Of_EntityIdSchemaImpl = z.object({
  "createdTime": z.number().optional(),
  "id": EntityIdSchema.optional(),
  "name": z.string().optional()
});
export type ExportableEntity_Of_EntityId = z.infer<typeof ExportableEntity_Of_EntityIdSchema>;

const FaviconSchemaImpl = z.object({
  "url": z.string().optional()
});
export type Favicon = z.infer<typeof FaviconSchema>;

const FeaturesInfoSchemaImpl = z.object({
  "emailEnabled": z.boolean().optional(),
  "notificationEnabled": z.boolean().optional(),
  "oauthEnabled": z.boolean().optional(),
  "smsEnabled": z.boolean().optional(),
  "twoFaEnabled": z.boolean().optional(),
  "whiteLabelingEnabled": z.boolean().optional()
});
export type FeaturesInfo = z.infer<typeof FeaturesInfoSchema>;

const FilterPredicateValue_Of_booleanSchemaImpl = z.object({
  "defaultValue": z.boolean().optional(),
  "dynamicValue": DynamicValue_Of_booleanSchema.optional(),
  "userValue": z.boolean().optional()
});
export type FilterPredicateValue_Of_boolean = z.infer<typeof FilterPredicateValue_Of_booleanSchema>;

const FilterPredicateValue_Of_doubleSchemaImpl = z.object({
  "defaultValue": z.number().optional(),
  "dynamicValue": DynamicValue_Of_doubleSchema.optional(),
  "userValue": z.number().optional()
});
export type FilterPredicateValue_Of_double = z.infer<typeof FilterPredicateValue_Of_doubleSchema>;

const FilterPredicateValue_Of_intSchemaImpl = z.object({
  "defaultValue": z.number().optional(),
  "dynamicValue": DynamicValue_Of_intSchema.optional(),
  "userValue": z.number().optional()
});
export type FilterPredicateValue_Of_int = z.infer<typeof FilterPredicateValue_Of_intSchema>;

const FilterPredicateValue_Of_longSchemaImpl = z.object({
  "defaultValue": z.number().optional(),
  "dynamicValue": DynamicValue_Of_longSchema.optional(),
  "userValue": z.number().optional()
});
export type FilterPredicateValue_Of_long = z.infer<typeof FilterPredicateValue_Of_longSchema>;

const FilterPredicateValue_Of_stringSchemaImpl = z.object({
  "defaultValue": z.string().optional(),
  "dynamicValue": DynamicValue_Of_stringSchema.optional(),
  "userValue": z.string().optional()
});
export type FilterPredicateValue_Of_string = z.infer<typeof FilterPredicateValue_Of_stringSchema>;

const GroupEntityExportDataSchemaImpl = z.object({
  "attributes": z.object({

}).optional(),
  "entity": ExportableEntity_Of_EntityIdSchema.optional(),
  "entityType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
  "relations": z.array(EntityRelationSchema).optional()
});
export type GroupEntityExportData = z.infer<typeof GroupEntityExportDataSchema>;

const GroupPermissionSchemaImpl = z.object({
  "public": z.boolean().optional(),
  "id": GroupPermissionIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "userGroupId": EntityGroupIdSchema.optional(),
  "roleId": RoleIdSchema.optional(),
  "entityGroupId": EntityGroupIdSchema.optional(),
  "entityGroupType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
  "name": z.string().optional()
});
export type GroupPermission = z.infer<typeof GroupPermissionSchema>;

const GroupPermissionIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["GROUP_PERMISSION"])
});
export type GroupPermissionId = z.infer<typeof GroupPermissionIdSchema>;

const GroupPermissionInfoSchemaImpl = z.object({
  "public": z.boolean().optional(),
  "readOnly": z.boolean().optional(),
  "id": GroupPermissionIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "userGroupId": EntityGroupIdSchema.optional(),
  "roleId": RoleIdSchema.optional(),
  "entityGroupId": EntityGroupIdSchema.optional(),
  "entityGroupType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
  "name": z.string().optional(),
  "role": RoleSchema.optional(),
  "entityGroupName": z.string().optional(),
  "entityGroupOwnerId": EntityIdSchema.optional(),
  "entityGroupOwnerName": z.string().optional(),
  "userGroupName": z.string().optional(),
  "userGroupOwnerId": EntityIdSchema.optional(),
  "userGroupOwnerName": z.string().optional()
});
export type GroupPermissionInfo = z.infer<typeof GroupPermissionInfoSchema>;

const HasId_Of_objectSchemaImpl = z.object({
  "id": z.object({

}).optional()
});
export type HasId_Of_object = z.infer<typeof HasId_Of_objectSchema>;

const HomeDashboardSchemaImpl = z.object({
  "id": DashboardIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "ownerId": EntityIdSchema.optional(),
  "title": z.string().optional(),
  "image": z.string().optional(),
  "assignedCustomers": z.array(ShortCustomerInfoSchema).optional(),
  "mobileHide": z.boolean().optional(),
  "mobileOrder": z.number().optional(),
  "name": z.string().optional(),
  "configuration": JsonNodeSchema.optional(),
  "hideDashboardToolbar": z.boolean().optional()
});
export type HomeDashboard = z.infer<typeof HomeDashboardSchema>;

const HomeDashboardInfoSchemaImpl = z.object({
  "dashboardId": DashboardIdSchema.optional(),
  "hideDashboardToolbar": z.boolean().optional()
});
export type HomeDashboardInfo = z.infer<typeof HomeDashboardInfoSchema>;

const ImageExportDataSchemaImpl = z.object({
  "data": z.string().optional(),
  "fileName": z.string().optional(),
  "mediaType": z.string().optional(),
  "public": z.boolean().optional(),
  "publicResourceKey": z.string().optional(),
  "resourceKey": z.string().optional(),
  "title": z.string().optional()
});
export type ImageExportData = z.infer<typeof ImageExportDataSchema>;

const InputStreamSchemaImpl = z.object({

});
export type InputStream = z.infer<typeof InputStreamSchema>;

const IntegrationSchemaImpl = z.object({
  "id": IntegrationIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "defaultConverterId": ConverterIdSchema,
  "downlinkConverterId": ConverterIdSchema.optional(),
  "routingKey": z.string(),
  "type": z.enum(["APACHE_PULSAR", "AWS_IOT", "AWS_KINESIS", "AWS_SQS", "AZURE_EVENT_HUB", "AZURE_IOT_HUB", "AZURE_SERVICE_BUS", "CHIRPSTACK", "COAP", "CUSTOM", "HTTP", "IBM_WATSON_IOT", "KAFKA", "KPN", "LORIOT", "MQTT", "OCEANCONNECT", "OPC_UA", "PARTICLE", "PUB_SUB", "RABBITMQ", "SIGFOX", "TCP", "THINGPARK", "TMOBILE_IOT_CDP", "TPE", "TTI", "TTN", "TUYA", "UDP"]),
  "debugMode": z.boolean().optional(),
  "enabled": z.boolean().optional(),
  "remote": z.boolean().optional(),
  "allowCreateDevicesOrAssets": z.boolean().optional(),
  "secret": z.string().optional(),
  "configuration": JsonNodeSchema,
  "additionalInfo": JsonNodeSchema.optional(),
  "name": z.string(),
  "edgeTemplate": z.boolean().optional()
});
export type Integration = z.infer<typeof IntegrationSchema>;

const IntegrationIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["INTEGRATION"])
});
export type IntegrationId = z.infer<typeof IntegrationIdSchema>;

const IntegrationInfoSchemaImpl = z.object({
  "stats": ArrayNodeSchema.optional(),
  "status": ObjectNodeSchema.optional(),
  "id": IntegrationIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "type": z.enum(["APACHE_PULSAR", "AWS_IOT", "AWS_KINESIS", "AWS_SQS", "AZURE_EVENT_HUB", "AZURE_IOT_HUB", "AZURE_SERVICE_BUS", "CHIRPSTACK", "COAP", "CUSTOM", "HTTP", "IBM_WATSON_IOT", "KAFKA", "KPN", "LORIOT", "MQTT", "OCEANCONNECT", "OPC_UA", "PARTICLE", "PUB_SUB", "RABBITMQ", "SIGFOX", "TCP", "THINGPARK", "TMOBILE_IOT_CDP", "TPE", "TTI", "TTN", "TUYA", "UDP"]),
  "debugMode": z.boolean().optional(),
  "enabled": z.boolean().optional(),
  "remote": z.boolean().optional(),
  "allowCreateDevicesOrAssets": z.boolean().optional(),
  "name": z.string(),
  "edgeTemplate": z.boolean().optional()
});
export type IntegrationInfo = z.infer<typeof IntegrationInfoSchema>;

const IntegrationLifecycleEventNotificationRuleTriggerConfigSchemaImpl = z.object({
  "integrationTypes": z.array(z.enum(["APACHE_PULSAR", "AWS_IOT", "AWS_KINESIS", "AWS_SQS", "AZURE_EVENT_HUB", "AZURE_IOT_HUB", "AZURE_SERVICE_BUS", "CHIRPSTACK", "COAP", "CUSTOM", "HTTP", "IBM_WATSON_IOT", "KAFKA", "KPN", "LORIOT", "MQTT", "OCEANCONNECT", "OPC_UA", "PARTICLE", "PUB_SUB", "RABBITMQ", "SIGFOX", "TCP", "THINGPARK", "TMOBILE_IOT_CDP", "TPE", "TTI", "TTN", "TUYA", "UDP"])).optional(),
  "integrations": z.array(z.string()).optional(),
  "notifyOn": z.array(z.enum(["ACTIVATED", "CREATED", "DEACTIVATED", "DELETED", "FAILED", "STARTED", "STOPPED", "SUSPENDED", "UPDATED"])).optional(),
  "onlyOnError": z.boolean().optional(),
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional()
});
export type IntegrationLifecycleEventNotificationRuleTriggerConfig = z.infer<typeof IntegrationLifecycleEventNotificationRuleTriggerConfigSchema>;

const JWT_PairSchemaImpl = z.object({
  "scope": z.enum(["CUSTOMER_USER", "PRE_VERIFICATION_TOKEN", "REFRESH_TOKEN", "SYS_ADMIN", "TENANT_ADMIN"]).optional(),
  "refreshToken": z.string().optional(),
  "token": z.string().optional()
});
export type JWT_Pair = z.infer<typeof JWT_PairSchema>;

const JWT_SettingsSchemaImpl = z.object({
  "tokenExpirationTime": z.number().optional(),
  "refreshTokenExpTime": z.number().optional(),
  "tokenIssuer": z.string().optional(),
  "tokenSigningKey": z.string().optional()
});
export type JWT_Settings = z.infer<typeof JWT_SettingsSchema>;

const JsonNodeSchemaImpl = z.object({

});
export type JsonNode = z.infer<typeof JsonNodeSchema>;

const JsonTransportPayloadConfigurationSchemaImpl = z.any();
export type JsonTransportPayloadConfiguration = z.infer<typeof JsonTransportPayloadConfigurationSchema>;

const KeyFilterSchemaImpl = z.object({
  "key": EntityKeySchema.optional(),
  "predicate": KeyFilterPredicateSchema.optional(),
  "valueType": z.enum(["BOOLEAN", "DATE_TIME", "NUMERIC", "STRING"]).optional()
});
export type KeyFilter = z.infer<typeof KeyFilterSchema>;

const KeyFilterPredicateSchemaImpl = z.object({

});
export type KeyFilterPredicate = z.infer<typeof KeyFilterPredicateSchema>;

const LastVisitedDashboardInfoSchemaImpl = z.object({
  "id": z.string().optional(),
  "title": z.string().optional(),
  "starred": z.boolean().optional(),
  "lastVisited": z.number().optional()
});
export type LastVisitedDashboardInfo = z.infer<typeof LastVisitedDashboardInfoSchema>;

const LicenseUsageInfoSchemaImpl = z.object({
  "assetsCount": z.number().optional(),
  "dashboardsCount": z.number().optional(),
  "development": z.boolean().optional(),
  "devicesCount": z.number().optional(),
  "integrationsCount": z.number().optional(),
  "maxAssets": z.number().optional(),
  "maxDevices": z.number().optional(),
  "plan": z.string().optional(),
  "whiteLabelingEnabled": z.boolean().optional()
});
export type LicenseUsageInfo = z.infer<typeof LicenseUsageInfoSchema>;

const LifeCycleEventFilterSchemaImpl = z.object({
  "notEmpty": z.boolean().optional(),
  "eventType": z.enum(["DEBUG_CONVERTER", "DEBUG_INTEGRATION", "DEBUG_RULE_CHAIN", "DEBUG_RULE_NODE", "ERROR", "LC_EVENT", "RAW_DATA", "STATS"]).optional(),
  "server": z.string().optional(),
  "event": z.string().optional(),
  "status": z.enum(["Failure", "Success"]).optional(),
  "errorStr": z.string().optional()
});
export type LifeCycleEventFilter = z.infer<typeof LifeCycleEventFilterSchema>;

const LoginRequestSchemaImpl = z.object({
  "username": z.string(),
  "password": z.string()
});
export type LoginRequest = z.infer<typeof LoginRequestSchema>;

const LoginResponseSchemaImpl = z.object({
  "token": z.string(),
  "refreshToken": z.string()
});
export type LoginResponse = z.infer<typeof LoginResponseSchema>;

const LoginWhiteLabelingParamsSchemaImpl = z.object({
  "logoImageUrl": z.string().optional(),
  "logoImageHeight": z.number().optional(),
  "appTitle": z.string().optional(),
  "favicon": FaviconSchema.optional(),
  "paletteSettings": PaletteSettingsSchema.optional(),
  "helpLinkBaseUrl": z.string().optional(),
  "uiHelpBaseUrl": z.string().optional(),
  "enableHelpLinks": z.boolean().optional(),
  "whiteLabelingEnabled": z.boolean().optional(),
  "showNameVersion": z.boolean().optional(),
  "platformName": z.string().optional(),
  "platformVersion": z.string().optional(),
  "customCss": z.string().optional(),
  "pageBackgroundColor": z.string().optional(),
  "darkForeground": z.boolean().optional(),
  "domainName": z.string().optional(),
  "baseUrl": z.string().optional(),
  "prohibitDifferentUrl": z.boolean().optional(),
  "adminSettingsId": z.string().optional(),
  "showNameBottom": z.boolean().optional()
});
export type LoginWhiteLabelingParams = z.infer<typeof LoginWhiteLabelingParamsSchema>;

const LwM2MBootstrapServerCredentialSchemaImpl = z.object({

});
export type LwM2MBootstrapServerCredential = z.infer<typeof LwM2MBootstrapServerCredentialSchema>;

const LwM2mInstanceSchemaImpl = z.object({
  "id": z.number().optional(),
  "resources": z.array(LwM2mResourceObserveSchema).optional()
});
export type LwM2mInstance = z.infer<typeof LwM2mInstanceSchema>;

const LwM2mObjectSchemaImpl = z.object({
  "id": z.number().optional(),
  "keyId": z.string().optional(),
  "name": z.string().optional(),
  "multiple": z.boolean().optional(),
  "mandatory": z.boolean().optional(),
  "instances": z.array(LwM2mInstanceSchema).optional()
});
export type LwM2mObject = z.infer<typeof LwM2mObjectSchema>;

const LwM2mResourceObserveSchemaImpl = z.object({
  "id": z.number().optional(),
  "name": z.string().optional(),
  "observe": z.boolean().optional(),
  "attribute": z.boolean().optional(),
  "telemetry": z.boolean().optional(),
  "keyName": z.string().optional()
});
export type LwM2mResourceObserve = z.infer<typeof LwM2mResourceObserveSchema>;

const Lwm2mDeviceProfileTransportConfigurationSchemaImpl = z.object({
  "bootstrap": z.array(LwM2MBootstrapServerCredentialSchema).optional(),
  "bootstrapServerUpdateEnable": z.boolean().optional(),
  "clientLwM2mSettings": OtherConfigurationSchema.optional(),
  "observeAttr": TelemetryMappingConfigurationSchema.optional()
});
export type Lwm2mDeviceProfileTransportConfiguration = z.infer<typeof Lwm2mDeviceProfileTransportConfigurationSchema>;

const Lwm2mDeviceTransportConfigurationSchemaImpl = z.object({
  "edrxCycle": z.number().optional(),
  "pagingTransmissionWindow": z.number().optional(),
  "powerMode": z.enum(["DRX", "E_DRX", "PSM"]).optional(),
  "psmActivityTimer": z.number().optional()
});
export type Lwm2mDeviceTransportConfiguration = z.infer<typeof Lwm2mDeviceTransportConfigurationSchema>;

const MappingSchemaImpl = z.object({
  "columns": z.array(ColumnMappingSchema).optional(),
  "delimiter": z.string().optional(),
  "header": z.boolean().optional(),
  "update": z.boolean().optional()
});
export type Mapping = z.infer<typeof MappingSchema>;

const MergedGroupPermissionInfoSchemaImpl = z.object({
  "entityType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
  "operations": z.array(z.enum(["ADD_TO_GROUP", "ALL", "ASSIGN_TO_TENANT", "CHANGE_OWNER", "CLAIM_DEVICES", "CREATE", "DELETE", "IMPERSONATE", "READ", "READ_ATTRIBUTES", "READ_CREDENTIALS", "READ_TELEMETRY", "REMOVE_FROM_GROUP", "RPC_CALL", "SHARE_GROUP", "WRITE", "WRITE_ATTRIBUTES", "WRITE_CREDENTIALS", "WRITE_TELEMETRY"])).optional()
});
export type MergedGroupPermissionInfo = z.infer<typeof MergedGroupPermissionInfoSchema>;

const MergedGroupTypePermissionInfoSchemaImpl = z.object({
  "hasGenericRead": z.boolean().optional(),
  "entityGroupIds": z.array(EntityGroupIdSchema).optional()
});
export type MergedGroupTypePermissionInfo = z.infer<typeof MergedGroupTypePermissionInfoSchema>;

const MergedUserPermissionsSchemaImpl = z.object({
  "genericPermissions": z.object({

}).optional(),
  "groupPermissions": z.object({

}).optional(),
  "readGroupPermissions": z.object({

}).optional(),
  "readEntityPermissions": z.object({

}).optional(),
  "readAttrPermissions": z.object({

}).optional(),
  "readTsPermissions": z.object({

}).optional()
});
export type MergedUserPermissions = z.infer<typeof MergedUserPermissionsSchema>;

const MicrosoftTeamsDeliveryMethodNotificationTemplateSchemaImpl = z.object({
  "body": z.string().optional(),
  "button": ButtonSchema.optional(),
  "enabled": z.boolean().optional(),
  "subject": z.string().optional(),
  "themeColor": z.string().optional()
});
export type MicrosoftTeamsDeliveryMethodNotificationTemplate = z.infer<typeof MicrosoftTeamsDeliveryMethodNotificationTemplateSchema>;

const MicrosoftTeamsNotificationTargetConfigSchemaImpl = z.object({
  "channelName": z.string().optional(),
  "description": z.string().optional(),
  "email": z.string().optional(),
  "firstName": z.string().optional(),
  "id": z.object({

}).optional(),
  "lastName": z.string().optional(),
  "title": z.string().optional(),
  "webhookUrl": z.string().optional()
});
export type MicrosoftTeamsNotificationTargetConfig = z.infer<typeof MicrosoftTeamsNotificationTargetConfigSchema>;

const MqttDeviceProfileTransportConfigurationSchemaImpl = z.object({
  "deviceAttributesSubscribeTopic": z.string().optional(),
  "deviceAttributesTopic": z.string().optional(),
  "deviceTelemetryTopic": z.string().optional(),
  "sendAckOnValidationException": z.boolean().optional(),
  "sparkplug": z.boolean().optional(),
  "sparkplugAttributesMetricNames": z.array(z.string()).optional(),
  "transportPayloadTypeConfiguration": TransportPayloadTypeConfigurationSchema.optional()
});
export type MqttDeviceProfileTransportConfiguration = z.infer<typeof MqttDeviceProfileTransportConfigurationSchema>;

const MqttDeviceTransportConfigurationSchemaImpl = z.any();
export type MqttDeviceTransportConfiguration = z.infer<typeof MqttDeviceTransportConfigurationSchema>;

const NewPlatformVersionNotificationRuleTriggerConfigSchemaImpl = z.object({
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional()
});
export type NewPlatformVersionNotificationRuleTriggerConfig = z.infer<typeof NewPlatformVersionNotificationRuleTriggerConfigSchema>;

const NoSecLwM2MBootstrapServerCredentialSchemaImpl = z.object({
  "shortServerId": z.number().optional(),
  "bootstrapServerIs": z.boolean().optional(),
  "host": z.string().optional(),
  "port": z.number().optional(),
  "clientHoldOffTime": z.number().optional(),
  "serverPublicKey": z.string().optional(),
  "serverCertificate": z.string().optional(),
  "bootstrapServerAccountTimeout": z.number().optional(),
  "lifetime": z.number().optional(),
  "defaultMinPeriod": z.number().optional(),
  "notifIfDisabled": z.boolean().optional(),
  "binding": z.string().optional()
});
export type NoSecLwM2MBootstrapServerCredential = z.infer<typeof NoSecLwM2MBootstrapServerCredentialSchema>;

const NodeConnectionInfoSchemaImpl = z.object({
  "fromIndex": z.number(),
  "toIndex": z.number(),
  "type": z.string()
});
export type NodeConnectionInfo = z.infer<typeof NodeConnectionInfoSchema>;

const NotificationSchemaImpl = z.object({
  "additionalConfig": JsonNodeSchema.optional(),
  "createdTime": z.number().optional(),
  "id": NotificationIdSchema.optional(),
  "info": NotificationInfoSchema.optional(),
  "recipientId": UserIdSchema.optional(),
  "requestId": NotificationRequestIdSchema.optional(),
  "status": z.enum(["READ", "SENT"]).optional(),
  "subject": z.string().optional(),
  "text": z.string().optional(),
  "type": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "GENERAL", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT", "RULE_NODE"]).optional()
});
export type Notification = z.infer<typeof NotificationSchema>;

const NotificationDeliveryMethodConfigSchemaImpl = z.object({

});
export type NotificationDeliveryMethodConfig = z.infer<typeof NotificationDeliveryMethodConfigSchema>;

const NotificationIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["NOTIFICATION"])
});
export type NotificationId = z.infer<typeof NotificationIdSchema>;

const NotificationInfoSchemaImpl = z.object({
  "stateEntityId": EntityIdSchema.optional()
});
export type NotificationInfo = z.infer<typeof NotificationInfoSchema>;

const NotificationPrefSchemaImpl = z.object({
  "enabled": z.boolean().optional(),
  "enabledDeliveryMethods": z.object({

})
});
export type NotificationPref = z.infer<typeof NotificationPrefSchema>;

const NotificationRequestSchemaImpl = z.object({
  "additionalConfig": NotificationRequestConfigSchema.optional(),
  "createdTime": z.number().optional(),
  "id": NotificationRequestIdSchema.optional(),
  "info": NotificationInfoSchema.optional(),
  "originatorEntityId": EntityIdSchema.optional(),
  "ruleId": NotificationRuleIdSchema.optional(),
  "stats": NotificationRequestStatsSchema.optional(),
  "status": z.enum(["PROCESSING", "SCHEDULED", "SENT"]).optional(),
  "targets": z.array(z.string()).optional(),
  "template": NotificationTemplateSchema.optional(),
  "templateId": NotificationTemplateIdSchema.optional(),
  "tenantId": TenantIdSchema.optional()
});
export type NotificationRequest = z.infer<typeof NotificationRequestSchema>;

const NotificationRequestConfigSchemaImpl = z.object({
  "sendingDelayInSec": z.number().optional()
});
export type NotificationRequestConfig = z.infer<typeof NotificationRequestConfigSchema>;

const NotificationRequestIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["NOTIFICATION_REQUEST"])
});
export type NotificationRequestId = z.infer<typeof NotificationRequestIdSchema>;

const NotificationRequestInfoSchemaImpl = z.object({
  "additionalConfig": NotificationRequestConfigSchema.optional(),
  "createdTime": z.number().optional(),
  "deliveryMethods": z.array(z.enum(["EMAIL", "MICROSOFT_TEAMS", "SLACK", "SMS", "WEB"])).optional(),
  "id": NotificationRequestIdSchema.optional(),
  "info": NotificationInfoSchema.optional(),
  "originatorEntityId": EntityIdSchema.optional(),
  "ruleId": NotificationRuleIdSchema.optional(),
  "stats": NotificationRequestStatsSchema.optional(),
  "status": z.enum(["PROCESSING", "SCHEDULED", "SENT"]).optional(),
  "targets": z.array(z.string()).optional(),
  "template": NotificationTemplateSchema.optional(),
  "templateId": NotificationTemplateIdSchema.optional(),
  "templateName": z.string().optional(),
  "tenantId": TenantIdSchema.optional()
});
export type NotificationRequestInfo = z.infer<typeof NotificationRequestInfoSchema>;

const NotificationRequestPreviewSchemaImpl = z.object({
  "processedTemplates": z.object({

}).optional(),
  "recipientsCountByTarget": z.object({

}).optional(),
  "recipientsPreview": z.array(z.string()).optional(),
  "totalRecipientsCount": z.number().optional()
});
export type NotificationRequestPreview = z.infer<typeof NotificationRequestPreviewSchema>;

const NotificationRequestStatsSchemaImpl = z.object({
  "error": z.string().optional(),
  "errors": z.object({

}).optional(),
  "sent": z.object({

}).optional()
});
export type NotificationRequestStats = z.infer<typeof NotificationRequestStatsSchema>;

const NotificationRuleSchemaImpl = z.object({
  "additionalConfig": NotificationRuleConfigSchema.optional(),
  "createdTime": z.number().optional(),
  "enabled": z.boolean().optional(),
  "name": z.string(),
  "recipientsConfig": NotificationRuleRecipientsConfigSchema,
  "templateId": NotificationTemplateIdSchema,
  "tenantId": TenantIdSchema.optional(),
  "triggerConfig": NotificationRuleTriggerConfigSchema,
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
export type NotificationRule = z.infer<typeof NotificationRuleSchema>;

const NotificationRuleConfigSchemaImpl = z.object({
  "description": z.string().optional()
});
export type NotificationRuleConfig = z.infer<typeof NotificationRuleConfigSchema>;

const NotificationRuleIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["NOTIFICATION_RULE"])
});
export type NotificationRuleId = z.infer<typeof NotificationRuleIdSchema>;

const NotificationRuleInfoSchemaImpl = z.object({
  "additionalConfig": NotificationRuleConfigSchema.optional(),
  "createdTime": z.number().optional(),
  "deliveryMethods": z.array(z.enum(["EMAIL", "MICROSOFT_TEAMS", "SLACK", "SMS", "WEB"])).optional(),
  "enabled": z.boolean().optional(),
  "name": z.string(),
  "recipientsConfig": NotificationRuleRecipientsConfigSchema,
  "templateId": NotificationTemplateIdSchema,
  "templateName": z.string().optional(),
  "tenantId": TenantIdSchema.optional(),
  "triggerConfig": NotificationRuleTriggerConfigSchema,
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
export type NotificationRuleInfo = z.infer<typeof NotificationRuleInfoSchema>;

const NotificationRuleRecipientsConfigSchemaImpl = z.object({
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"])
});
export type NotificationRuleRecipientsConfig = z.infer<typeof NotificationRuleRecipientsConfigSchema>;

const NotificationRuleTriggerConfigSchemaImpl = z.object({
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional()
});
export type NotificationRuleTriggerConfig = z.infer<typeof NotificationRuleTriggerConfigSchema>;

const NotificationSettingsSchemaImpl = z.object({
  "deliveryMethodsConfigs": z.object({

})
});
export type NotificationSettings = z.infer<typeof NotificationSettingsSchema>;

const NotificationTargetSchemaImpl = z.object({
  "configuration": NotificationTargetConfigSchema,
  "createdTime": z.number().optional(),
  "name": z.string(),
  "tenantId": TenantIdSchema.optional()
});
export type NotificationTarget = z.infer<typeof NotificationTargetSchema>;

const NotificationTargetConfigSchemaImpl = z.object({
  "description": z.string().optional()
});
export type NotificationTargetConfig = z.infer<typeof NotificationTargetConfigSchema>;

const NotificationTemplateSchemaImpl = z.object({
  "configuration": NotificationTemplateConfigSchema,
  "createdTime": z.number().optional(),
  "name": z.string().optional(),
  "notificationType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "GENERAL", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT", "RULE_NODE"]),
  "tenantId": TenantIdSchema.optional()
});
export type NotificationTemplate = z.infer<typeof NotificationTemplateSchema>;

const NotificationTemplateConfigSchemaImpl = z.object({
  "deliveryMethodsTemplates": z.object({

}).optional()
});
export type NotificationTemplateConfig = z.infer<typeof NotificationTemplateConfigSchema>;

const NotificationTemplateIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["NOTIFICATION_TEMPLATE"])
});
export type NotificationTemplateId = z.infer<typeof NotificationTemplateIdSchema>;

const NumericFilterPredicateSchemaImpl = z.object({
  "operation": z.enum(["EQUAL", "GREATER", "GREATER_OR_EQUAL", "LESS", "LESS_OR_EQUAL", "NOT_EQUAL"]).optional(),
  "value": FilterPredicateValue_Of_doubleSchema.optional()
});
export type NumericFilterPredicate = z.infer<typeof NumericFilterPredicateSchema>;

const OAuth2BasicMapperConfigSchemaImpl = z.object({
  "alwaysFullScreen": z.boolean().optional(),
  "customerNamePattern": z.string().optional(),
  "defaultDashboardName": z.string().optional(),
  "emailAttributeKey": z.string().optional(),
  "firstNameAttributeKey": z.string().optional(),
  "lastNameAttributeKey": z.string().optional(),
  "parentCustomerNamePattern": z.string().optional(),
  "tenantNamePattern": z.string().optional(),
  "tenantNameStrategy": z.enum(["CUSTOM", "DOMAIN", "EMAIL"]),
  "userGroupsNamePattern": z.array(z.string()).optional()
});
export type OAuth2BasicMapperConfig = z.infer<typeof OAuth2BasicMapperConfigSchema>;

const OAuth2ClientInfoSchemaImpl = z.object({
  "icon": z.string().optional(),
  "name": z.string().optional(),
  "url": z.string().optional()
});
export type OAuth2ClientInfo = z.infer<typeof OAuth2ClientInfoSchema>;

const OAuth2ClientRegistrationTemplateSchemaImpl = z.object({
  "accessTokenUri": z.string().optional(),
  "additionalInfo": JsonNodeSchema.optional(),
  "authorizationUri": z.string().optional(),
  "clientAuthenticationMethod": z.string().optional(),
  "comment": z.string().optional(),
  "createdTime": z.number().optional(),
  "helpLink": z.string().optional(),
  "id": OAuth2ClientRegistrationTemplateIdSchema.optional(),
  "jwkSetUri": z.string().optional(),
  "loginButtonIcon": z.string().optional(),
  "loginButtonLabel": z.string().optional(),
  "mapperConfig": OAuth2MapperConfigSchema.optional(),
  "name": z.string().optional(),
  "providerId": z.string(),
  "scope": z.array(z.string()).optional(),
  "userInfoUri": z.string().optional(),
  "userNameAttributeName": z.string().optional()
});
export type OAuth2ClientRegistrationTemplate = z.infer<typeof OAuth2ClientRegistrationTemplateSchema>;

const OAuth2ClientRegistrationTemplateIdSchemaImpl = z.object({
  "id": z.string()
});
export type OAuth2ClientRegistrationTemplateId = z.infer<typeof OAuth2ClientRegistrationTemplateIdSchema>;

const OAuth2CustomMapperConfigSchemaImpl = z.object({
  "password": z.string().optional(),
  "sendToken": z.boolean().optional(),
  "url": z.string().optional(),
  "username": z.string().optional()
});
export type OAuth2CustomMapperConfig = z.infer<typeof OAuth2CustomMapperConfigSchema>;

const OAuth2DomainInfoSchemaImpl = z.object({
  "name": z.string(),
  "scheme": z.enum(["HTTP", "HTTPS", "MIXED"])
});
export type OAuth2DomainInfo = z.infer<typeof OAuth2DomainInfoSchema>;

const OAuth2InfoSchemaImpl = z.object({
  "enabled": z.boolean().optional(),
  "oauth2ParamsInfos": z.array(OAuth2ParamsInfoSchema)
});
export type OAuth2Info = z.infer<typeof OAuth2InfoSchema>;

const OAuth2MapperConfigSchemaImpl = z.object({
  "activateUser": z.boolean().optional(),
  "allowUserCreation": z.boolean().optional(),
  "basic": OAuth2BasicMapperConfigSchema.optional(),
  "custom": OAuth2CustomMapperConfigSchema.optional(),
  "type": z.enum(["APPLE", "BASIC", "CUSTOM", "GITHUB"])
});
export type OAuth2MapperConfig = z.infer<typeof OAuth2MapperConfigSchema>;

const OAuth2MobileInfoSchemaImpl = z.object({
  "appSecret": z.string(),
  "pkgName": z.string()
});
export type OAuth2MobileInfo = z.infer<typeof OAuth2MobileInfoSchema>;

const OAuth2ParamsInfoSchemaImpl = z.object({
  "clientRegistrations": z.array(OAuth2RegistrationInfoSchema),
  "domainInfos": z.array(OAuth2DomainInfoSchema),
  "mobileInfos": z.array(OAuth2MobileInfoSchema)
});
export type OAuth2ParamsInfo = z.infer<typeof OAuth2ParamsInfoSchema>;

const OAuth2RegistrationInfoSchemaImpl = z.object({
  "accessTokenUri": z.string(),
  "additionalInfo": JsonNodeSchema,
  "authorizationUri": z.string(),
  "clientAuthenticationMethod": z.string(),
  "clientId": z.string(),
  "clientSecret": z.string(),
  "jwkSetUri": z.string().optional(),
  "loginButtonIcon": z.string().optional(),
  "loginButtonLabel": z.string(),
  "mapperConfig": OAuth2MapperConfigSchema,
  "platforms": z.array(z.enum(["ANDROID", "IOS", "WEB"])).optional(),
  "scope": z.array(z.string()),
  "userInfoUri": z.string().optional(),
  "userNameAttributeName": z.string().optional()
});
export type OAuth2RegistrationInfo = z.infer<typeof OAuth2RegistrationInfoSchema>;

const ObjectAttributesSchemaImpl = z.object({
  "dim": z.number().optional(),
  "gt": z.number().optional(),
  "lt": z.number().optional(),
  "pmax": z.number().optional(),
  "pmin": z.number().optional(),
  "st": z.number().optional(),
  "ver": z.string().optional()
});
export type ObjectAttributes = z.infer<typeof ObjectAttributesSchema>;

const ObjectNodeSchemaImpl = z.object({

});
export type ObjectNode = z.infer<typeof ObjectNodeSchema>;

const OriginatorEntityOwnerUsersFilterSchemaImpl = z.object({

});
export type OriginatorEntityOwnerUsersFilter = z.infer<typeof OriginatorEntityOwnerUsersFilterSchema>;

const OtaPackageSchemaImpl = z.object({
  "id": OtaPackageIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "deviceProfileId": DeviceProfileIdSchema.optional(),
  "type": z.enum(["FIRMWARE", "SOFTWARE"]).optional(),
  "title": z.string().optional(),
  "version": z.string().optional(),
  "tag": z.string().optional(),
  "url": z.string().optional(),
  "hasData": z.boolean().optional(),
  "fileName": z.string().optional(),
  "contentType": z.string().optional(),
  "checksumAlgorithm": z.enum(["CRC32", "MD5", "MURMUR3_128", "MURMUR3_32", "SHA256", "SHA384", "SHA512"]).optional(),
  "checksum": z.string().optional(),
  "dataSize": z.number().optional(),
  "data": ByteBufferSchema.optional(),
  "additionalInfo": JsonNodeSchema.optional()
});
export type OtaPackage = z.infer<typeof OtaPackageSchema>;

const OtaPackageIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["OTA_PACKAGE"])
});
export type OtaPackageId = z.infer<typeof OtaPackageIdSchema>;

const OtaPackageInfoSchemaImpl = z.object({
  "id": OtaPackageIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "deviceProfileId": DeviceProfileIdSchema.optional(),
  "type": z.enum(["FIRMWARE", "SOFTWARE"]).optional(),
  "title": z.string().optional(),
  "version": z.string().optional(),
  "tag": z.string().optional(),
  "url": z.string().optional(),
  "hasData": z.boolean().optional(),
  "fileName": z.string().optional(),
  "contentType": z.string().optional(),
  "checksumAlgorithm": z.enum(["CRC32", "MD5", "MURMUR3_128", "MURMUR3_32", "SHA256", "SHA384", "SHA512"]).optional(),
  "checksum": z.string().optional(),
  "dataSize": z.number().optional(),
  "additionalInfo": JsonNodeSchema.optional()
});
export type OtaPackageInfo = z.infer<typeof OtaPackageInfoSchema>;

const OtherConfigurationSchemaImpl = z.object({
  "clientOnlyObserveAfterConnect": z.number().optional(),
  "edrxCycle": z.number().optional(),
  "fwUpdateResource": z.string().optional(),
  "fwUpdateStrategy": z.number().optional(),
  "pagingTransmissionWindow": z.number().optional(),
  "powerMode": z.enum(["DRX", "E_DRX", "PSM"]).optional(),
  "psmActivityTimer": z.number().optional(),
  "swUpdateResource": z.string().optional(),
  "swUpdateStrategy": z.number().optional()
});
export type OtherConfiguration = z.infer<typeof OtherConfigurationSchema>;

const PSKLwM2MBootstrapServerCredentialSchemaImpl = z.object({
  "shortServerId": z.number().optional(),
  "bootstrapServerIs": z.boolean().optional(),
  "host": z.string().optional(),
  "port": z.number().optional(),
  "clientHoldOffTime": z.number().optional(),
  "serverPublicKey": z.string().optional(),
  "serverCertificate": z.string().optional(),
  "bootstrapServerAccountTimeout": z.number().optional(),
  "lifetime": z.number().optional(),
  "defaultMinPeriod": z.number().optional(),
  "notifIfDisabled": z.boolean().optional(),
  "binding": z.string().optional()
});
export type PSKLwM2MBootstrapServerCredential = z.infer<typeof PSKLwM2MBootstrapServerCredentialSchema>;

const PageData_Of_AlarmCommentInfoSchemaImpl = z.object({
  "data": z.array(AlarmCommentInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_AlarmCommentInfo = z.infer<typeof PageData_Of_AlarmCommentInfoSchema>;

const PageData_Of_AlarmDataSchemaImpl = z.object({
  "data": z.array(AlarmDataSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_AlarmData = z.infer<typeof PageData_Of_AlarmDataSchema>;

const PageData_Of_AlarmInfoSchemaImpl = z.object({
  "data": z.array(AlarmInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_AlarmInfo = z.infer<typeof PageData_Of_AlarmInfoSchema>;

const PageData_Of_AssetInfoSchemaImpl = z.object({
  "data": z.array(AssetInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_AssetInfo = z.infer<typeof PageData_Of_AssetInfoSchema>;

const PageData_Of_AssetProfileInfoSchemaImpl = z.object({
  "data": z.array(AssetProfileInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_AssetProfileInfo = z.infer<typeof PageData_Of_AssetProfileInfoSchema>;

const PageData_Of_AssetProfileSchemaImpl = z.object({
  "data": z.array(AssetProfileSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_AssetProfile = z.infer<typeof PageData_Of_AssetProfileSchema>;

const PageData_Of_AssetSchemaImpl = z.object({
  "data": z.array(AssetSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_Asset = z.infer<typeof PageData_Of_AssetSchema>;

const PageData_Of_AuditLogSchemaImpl = z.object({
  "data": z.array(AuditLogSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_AuditLog = z.infer<typeof PageData_Of_AuditLogSchema>;

const PageData_Of_BlobEntityWithCustomerInfoSchemaImpl = z.object({
  "data": z.array(BlobEntityWithCustomerInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_BlobEntityWithCustomerInfo = z.infer<typeof PageData_Of_BlobEntityWithCustomerInfoSchema>;

const PageData_Of_ContactBased_Of_objectSchemaImpl = z.object({
  "data": z.array(ContactBased_Of_objectSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_ContactBased_Of_object = z.infer<typeof PageData_Of_ContactBased_Of_objectSchema>;

const PageData_Of_ConverterSchemaImpl = z.object({
  "data": z.array(ConverterSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_Converter = z.infer<typeof PageData_Of_ConverterSchema>;

const PageData_Of_CustomerInfoSchemaImpl = z.object({
  "data": z.array(CustomerInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_CustomerInfo = z.infer<typeof PageData_Of_CustomerInfoSchema>;

const PageData_Of_CustomerSchemaImpl = z.object({
  "data": z.array(CustomerSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_Customer = z.infer<typeof PageData_Of_CustomerSchema>;

const PageData_Of_DashboardInfoSchemaImpl = z.object({
  "data": z.array(DashboardInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_DashboardInfo = z.infer<typeof PageData_Of_DashboardInfoSchema>;

const PageData_Of_DeviceInfoSchemaImpl = z.object({
  "data": z.array(DeviceInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_DeviceInfo = z.infer<typeof PageData_Of_DeviceInfoSchema>;

const PageData_Of_DeviceProfileInfoSchemaImpl = z.object({
  "data": z.array(DeviceProfileInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_DeviceProfileInfo = z.infer<typeof PageData_Of_DeviceProfileInfoSchema>;

const PageData_Of_DeviceProfileSchemaImpl = z.object({
  "data": z.array(DeviceProfileSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_DeviceProfile = z.infer<typeof PageData_Of_DeviceProfileSchema>;

const PageData_Of_DeviceSchemaImpl = z.object({
  "data": z.array(DeviceSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_Device = z.infer<typeof PageData_Of_DeviceSchema>;

const PageData_Of_EdgeEventSchemaImpl = z.object({
  "data": z.array(EdgeEventSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_EdgeEvent = z.infer<typeof PageData_Of_EdgeEventSchema>;

const PageData_Of_EdgeInfoSchemaImpl = z.object({
  "data": z.array(EdgeInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_EdgeInfo = z.infer<typeof PageData_Of_EdgeInfoSchema>;

const PageData_Of_EdgeSchemaImpl = z.object({
  "data": z.array(EdgeSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_Edge = z.infer<typeof PageData_Of_EdgeSchema>;

const PageData_Of_EntityDataSchemaImpl = z.object({
  "data": z.array(EntityDataSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_EntityData = z.infer<typeof PageData_Of_EntityDataSchema>;

const PageData_Of_EntityGroupInfoSchemaImpl = z.object({
  "data": z.array(EntityGroupInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_EntityGroupInfo = z.infer<typeof PageData_Of_EntityGroupInfoSchema>;

const PageData_Of_EntityInfoSchemaImpl = z.object({
  "data": z.array(EntityInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_EntityInfo = z.infer<typeof PageData_Of_EntityInfoSchema>;

const PageData_Of_EntitySubtypeSchemaImpl = z.object({
  "data": z.array(EntitySubtypeSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_EntitySubtype = z.infer<typeof PageData_Of_EntitySubtypeSchema>;

const PageData_Of_EntityVersionSchemaImpl = z.object({
  "data": z.array(EntityVersionSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_EntityVersion = z.infer<typeof PageData_Of_EntityVersionSchema>;

const PageData_Of_EntityViewInfoSchemaImpl = z.object({
  "data": z.array(EntityViewInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_EntityViewInfo = z.infer<typeof PageData_Of_EntityViewInfoSchema>;

const PageData_Of_EntityViewSchemaImpl = z.object({
  "data": z.array(EntityViewSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_EntityView = z.infer<typeof PageData_Of_EntityViewSchema>;

const PageData_Of_EventInfoSchemaImpl = z.object({
  "data": z.array(EventInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_EventInfo = z.infer<typeof PageData_Of_EventInfoSchema>;

const PageData_Of_IntegrationInfoSchemaImpl = z.object({
  "data": z.array(IntegrationInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_IntegrationInfo = z.infer<typeof PageData_Of_IntegrationInfoSchema>;

const PageData_Of_IntegrationSchemaImpl = z.object({
  "data": z.array(IntegrationSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_Integration = z.infer<typeof PageData_Of_IntegrationSchema>;

const PageData_Of_NotificationRequestInfoSchemaImpl = z.object({
  "data": z.array(NotificationRequestInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_NotificationRequestInfo = z.infer<typeof PageData_Of_NotificationRequestInfoSchema>;

const PageData_Of_NotificationRuleInfoSchemaImpl = z.object({
  "data": z.array(NotificationRuleInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_NotificationRuleInfo = z.infer<typeof PageData_Of_NotificationRuleInfoSchema>;

const PageData_Of_NotificationTargetSchemaImpl = z.object({
  "data": z.array(NotificationTargetSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_NotificationTarget = z.infer<typeof PageData_Of_NotificationTargetSchema>;

const PageData_Of_NotificationTemplateSchemaImpl = z.object({
  "data": z.array(NotificationTemplateSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_NotificationTemplate = z.infer<typeof PageData_Of_NotificationTemplateSchema>;

const PageData_Of_NotificationSchemaImpl = z.object({
  "data": z.array(NotificationSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_Notification = z.infer<typeof PageData_Of_NotificationSchema>;

const PageData_Of_OtaPackageInfoSchemaImpl = z.object({
  "data": z.array(OtaPackageInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_OtaPackageInfo = z.infer<typeof PageData_Of_OtaPackageInfoSchema>;

const PageData_Of_QueueSchemaImpl = z.object({
  "data": z.array(QueueSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_Queue = z.infer<typeof PageData_Of_QueueSchema>;

const PageData_Of_RoleSchemaImpl = z.object({
  "data": z.array(RoleSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_Role = z.infer<typeof PageData_Of_RoleSchema>;

const PageData_Of_RuleChainSchemaImpl = z.object({
  "data": z.array(RuleChainSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_RuleChain = z.infer<typeof PageData_Of_RuleChainSchema>;

const PageData_Of_SchedulerEventInfoSchemaImpl = z.object({
  "data": z.array(SchedulerEventInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_SchedulerEventInfo = z.infer<typeof PageData_Of_SchedulerEventInfoSchema>;

const PageData_Of_ShortEntityViewSchemaImpl = z.object({
  "data": z.array(ShortEntityViewSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_ShortEntityView = z.infer<typeof PageData_Of_ShortEntityViewSchema>;

const PageData_Of_TbResourceInfoSchemaImpl = z.object({
  "data": z.array(TbResourceInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_TbResourceInfo = z.infer<typeof PageData_Of_TbResourceInfoSchema>;

const PageData_Of_TenantInfoSchemaImpl = z.object({
  "data": z.array(TenantInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_TenantInfo = z.infer<typeof PageData_Of_TenantInfoSchema>;

const PageData_Of_TenantProfileSchemaImpl = z.object({
  "data": z.array(TenantProfileSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_TenantProfile = z.infer<typeof PageData_Of_TenantProfileSchema>;

const PageData_Of_TenantSchemaImpl = z.object({
  "data": z.array(TenantSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_Tenant = z.infer<typeof PageData_Of_TenantSchema>;

const PageData_Of_UserEmailInfoSchemaImpl = z.object({
  "data": z.array(UserEmailInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_UserEmailInfo = z.infer<typeof PageData_Of_UserEmailInfoSchema>;

const PageData_Of_UserInfoSchemaImpl = z.object({
  "data": z.array(UserInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_UserInfo = z.infer<typeof PageData_Of_UserInfoSchema>;

const PageData_Of_UserSchemaImpl = z.object({
  "data": z.array(UserSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_User = z.infer<typeof PageData_Of_UserSchema>;

const PageData_Of_WidgetTypeInfoSchemaImpl = z.object({
  "data": z.array(WidgetTypeInfoSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_WidgetTypeInfo = z.infer<typeof PageData_Of_WidgetTypeInfoSchema>;

const PageData_Of_WidgetsBundleSchemaImpl = z.object({
  "data": z.array(WidgetsBundleSchema).optional(),
  "totalPages": z.number().optional(),
  "totalElements": z.number().optional(),
  "hasNext": z.boolean().optional()
});
export type PageData_Of_WidgetsBundle = z.infer<typeof PageData_Of_WidgetsBundleSchema>;

const PaletteSchemaImpl = z.object({
  "type": z.string(),
  "extends": z.string().optional(),
  "colors": z.object({

}).optional()
});
export type Palette = z.infer<typeof PaletteSchema>;

const PaletteSettingsSchemaImpl = z.object({
  "primaryPalette": PaletteSchema,
  "accentPalette": PaletteSchema
});
export type PaletteSettings = z.infer<typeof PaletteSettingsSchema>;

const PlatformTwoFaSettingsSchemaImpl = z.object({
  "maxVerificationFailuresBeforeUserLockout": z.number().optional(),
  "minVerificationCodeSendPeriod": z.number(),
  "providers": z.array(TwoFaProviderConfigSchema),
  "totalAllowedTimeForVerification": z.number(),
  "useSystemTwoFactorAuthSettings": z.boolean().optional(),
  "verificationCodeCheckRateLimit": z.string().optional()
});
export type PlatformTwoFaSettings = z.infer<typeof PlatformTwoFaSettingsSchema>;

const PlatformUsersNotificationTargetConfigSchemaImpl = z.object({
  "description": z.string().optional(),
  "usersFilter": UsersFilterSchema.optional()
});
export type PlatformUsersNotificationTargetConfig = z.infer<typeof PlatformUsersNotificationTargetConfigSchema>;

const PowerSavingConfigurationSchemaImpl = z.object({
  "edrxCycle": z.number().optional(),
  "pagingTransmissionWindow": z.number().optional(),
  "powerMode": z.enum(["DRX", "E_DRX", "PSM"]).optional(),
  "psmActivityTimer": z.number().optional()
});
export type PowerSavingConfiguration = z.infer<typeof PowerSavingConfigurationSchema>;

const ProcessingStrategySchemaImpl = z.object({
  "failurePercentage": z.number().optional(),
  "maxPauseBetweenRetries": z.number().optional(),
  "pauseBetweenRetries": z.number().optional(),
  "retries": z.number().optional(),
  "type": z.enum(["RETRY_ALL", "RETRY_FAILED", "RETRY_FAILED_AND_TIMED_OUT", "RETRY_TIMED_OUT", "SKIP_ALL_FAILURES", "SKIP_ALL_FAILURES_AND_TIMED_OUT"]).optional()
});
export type ProcessingStrategy = z.infer<typeof ProcessingStrategySchema>;

const ProtoTransportPayloadConfigurationSchemaImpl = z.object({
  "deviceAttributesProtoSchema": z.string().optional(),
  "deviceRpcRequestProtoSchema": z.string().optional(),
  "deviceRpcResponseProtoSchema": z.string().optional(),
  "deviceTelemetryProtoSchema": z.string().optional(),
  "enableCompatibilityWithJsonPayloadFormat": z.boolean().optional(),
  "useJsonPayloadFormatForDefaultDownlinkTopics": z.boolean().optional()
});
export type ProtoTransportPayloadConfiguration = z.infer<typeof ProtoTransportPayloadConfigurationSchema>;

const QueueSchemaImpl = z.object({
  "additionalInfo": JsonNodeSchema.optional(),
  "consumerPerPartition": z.boolean().optional(),
  "createdTime": z.number().optional(),
  "id": QueueIdSchema.optional(),
  "name": z.string().optional(),
  "packProcessingTimeout": z.number().optional(),
  "partitions": z.number().optional(),
  "pollInterval": z.number().optional(),
  "processingStrategy": ProcessingStrategySchema.optional(),
  "submitStrategy": SubmitStrategySchema.optional(),
  "tenantId": TenantIdSchema.optional(),
  "topic": z.string().optional()
});
export type Queue = z.infer<typeof QueueSchema>;

const QueueIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["QUEUE"])
});
export type QueueId = z.infer<typeof QueueIdSchema>;

const RPKLwM2MBootstrapServerCredentialSchemaImpl = z.object({
  "shortServerId": z.number().optional(),
  "bootstrapServerIs": z.boolean().optional(),
  "host": z.string().optional(),
  "port": z.number().optional(),
  "clientHoldOffTime": z.number().optional(),
  "serverPublicKey": z.string().optional(),
  "serverCertificate": z.string().optional(),
  "bootstrapServerAccountTimeout": z.number().optional(),
  "lifetime": z.number().optional(),
  "defaultMinPeriod": z.number().optional(),
  "notifIfDisabled": z.boolean().optional(),
  "binding": z.string().optional()
});
export type RPKLwM2MBootstrapServerCredential = z.infer<typeof RPKLwM2MBootstrapServerCredentialSchema>;

const RateLimitsNotificationRuleTriggerConfigSchemaImpl = z.object({
  "apis": z.array(z.enum(["CASSANDRA_QUERIES", "ENTITY_EXPORT", "ENTITY_IMPORT", "INTEGRATION_MSGS_PER_DEVICE", "INTEGRATION_MSGS_PER_TENANT", "NOTIFICATION_REQUESTS", "NOTIFICATION_REQUESTS_PER_RULE", "PASSWORD_RESET", "REPORTS", "REST_REQUESTS_PER_CUSTOMER", "REST_REQUESTS_PER_TENANT", "TRANSPORT_MESSAGES_PER_DEVICE", "TRANSPORT_MESSAGES_PER_TENANT", "TWO_FA_VERIFICATION_CODE_CHECK", "TWO_FA_VERIFICATION_CODE_SEND", "WS_UPDATES_PER_SESSION"])).optional(),
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional()
});
export type RateLimitsNotificationRuleTriggerConfig = z.infer<typeof RateLimitsNotificationRuleTriggerConfigSchema>;

const RawDataEventFilterSchemaImpl = z.object({
  "notEmpty": z.boolean().optional(),
  "eventType": z.enum(["DEBUG_CONVERTER", "DEBUG_INTEGRATION", "DEBUG_RULE_CHAIN", "DEBUG_RULE_NODE", "ERROR", "LC_EVENT", "RAW_DATA", "STATS"]).optional(),
  "server": z.string().optional(),
  "uuid": z.string().optional(),
  "messageType": z.string().optional(),
  "message": z.string().optional()
});
export type RawDataEventFilter = z.infer<typeof RawDataEventFilterSchema>;

const RelationEntityTypeFilterSchemaImpl = z.object({
  "relationType": z.string().optional(),
  "entityTypes": z.array(z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"])).optional()
});
export type RelationEntityTypeFilter = z.infer<typeof RelationEntityTypeFilterSchema>;

const RelationsQueryFilterSchemaImpl = z.object({
  "direction": z.enum(["FROM", "TO"]).optional(),
  "fetchLastLevelOnly": z.boolean().optional(),
  "filters": z.array(RelationEntityTypeFilterSchema).optional(),
  "maxLevel": z.number().optional(),
  "multiRoot": z.boolean().optional(),
  "multiRootEntitiesType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
  "multiRootEntityIds": z.array(z.string()).optional(),
  "rootEntity": EntityIdSchema.optional()
});
export type RelationsQueryFilter = z.infer<typeof RelationsQueryFilterSchema>;

const RelationsSearchParametersSchemaImpl = z.object({
  "rootId": z.string().optional(),
  "rootType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
  "direction": z.enum(["FROM", "TO"]).optional(),
  "relationTypeGroup": z.enum(["COMMON", "DASHBOARD", "EDGE", "EDGE_AUTO_ASSIGN_RULE_CHAIN", "FROM_ENTITY_GROUP", "RULE_CHAIN", "RULE_NODE"]).optional(),
  "maxLevel": z.number().optional(),
  "fetchLastLevelOnly": z.boolean().optional()
});
export type RelationsSearchParameters = z.infer<typeof RelationsSearchParametersSchema>;

const RepeatingAlarmConditionSpecSchemaImpl = z.object({
  "predicate": FilterPredicateValue_Of_intSchema.optional()
});
export type RepeatingAlarmConditionSpec = z.infer<typeof RepeatingAlarmConditionSpecSchema>;

const ReportConfigSchemaImpl = z.object({
  "baseUrl": z.string().optional(),
  "dashboardId": z.string().optional(),
  "namePattern": z.string().optional(),
  "state": z.string().optional(),
  "timewindow": JsonNodeSchema.optional(),
  "timezone": z.string().optional(),
  "type": z.string().optional(),
  "useCurrentUserCredentials": z.boolean().optional(),
  "useDashboardTimewindow": z.boolean().optional(),
  "userId": z.string().optional()
});
export type ReportConfig = z.infer<typeof ReportConfigSchema>;

const RepositorySettingsSchemaImpl = z.object({
  "authMethod": z.enum(["PRIVATE_KEY", "USERNAME_PASSWORD"]).optional(),
  "defaultBranch": z.string().optional(),
  "password": z.string().optional(),
  "privateKey": z.string().optional(),
  "privateKeyFileName": z.string().optional(),
  "privateKeyPassword": z.string().optional(),
  "readOnly": z.boolean().optional(),
  "repositoryUri": z.string().optional(),
  "showMergeCommits": z.boolean().optional(),
  "username": z.string().optional()
});
export type RepositorySettings = z.infer<typeof RepositorySettingsSchema>;

const RepositorySettingsInfoSchemaImpl = z.object({
  "configured": z.boolean().optional(),
  "readOnly": z.boolean().optional()
});
export type RepositorySettingsInfo = z.infer<typeof RepositorySettingsInfoSchema>;

const ResetPasswordEmailRequestSchemaImpl = z.object({
  "email": z.string().optional()
});
export type ResetPasswordEmailRequest = z.infer<typeof ResetPasswordEmailRequestSchema>;

const ResetPasswordRequestSchemaImpl = z.object({
  "resetToken": z.string().optional(),
  "password": z.string().optional()
});
export type ResetPasswordRequest = z.infer<typeof ResetPasswordRequestSchema>;

const ResourceSchemaImpl = z.object({
  "description": z.string().optional(),
  "file": z.string().optional(),
  "filename": z.string().optional(),
  "inputStream": InputStreamSchema.optional(),
  "open": z.boolean().optional(),
  "readable": z.boolean().optional(),
  "uri": z.string().optional(),
  "url": z.string().optional()
});
export type Resource = z.infer<typeof ResourceSchema>;

const ResponseEntitySchemaImpl = z.object({
  "body": z.object({

}).optional(),
  "statusCode": z.enum(["ACCEPTED", "ALREADY_REPORTED", "BAD_GATEWAY", "BAD_REQUEST", "BANDWIDTH_LIMIT_EXCEEDED", "CHECKPOINT", "CONFLICT", "CONTINUE", "CREATED", "DESTINATION_LOCKED", "EXPECTATION_FAILED", "FAILED_DEPENDENCY", "FORBIDDEN", "FOUND", "GATEWAY_TIMEOUT", "GONE", "HTTP_VERSION_NOT_SUPPORTED", "IM_USED", "INSUFFICIENT_SPACE_ON_RESOURCE", "INSUFFICIENT_STORAGE", "INTERNAL_SERVER_ERROR", "I_AM_A_TEAPOT", "LENGTH_REQUIRED", "LOCKED", "LOOP_DETECTED", "METHOD_FAILURE", "METHOD_NOT_ALLOWED", "MOVED_PERMANENTLY", "MOVED_TEMPORARILY", "MULTIPLE_CHOICES", "MULTI_STATUS", "NETWORK_AUTHENTICATION_REQUIRED", "NON_AUTHORITATIVE_INFORMATION", "NOT_ACCEPTABLE", "NOT_EXTENDED", "NOT_FOUND", "NOT_IMPLEMENTED", "NOT_MODIFIED", "NO_CONTENT", "OK", "PARTIAL_CONTENT", "PAYLOAD_TOO_LARGE", "PAYMENT_REQUIRED", "PERMANENT_REDIRECT", "PRECONDITION_FAILED", "PRECONDITION_REQUIRED", "PROCESSING", "PROXY_AUTHENTICATION_REQUIRED", "REQUESTED_RANGE_NOT_SATISFIABLE", "REQUEST_ENTITY_TOO_LARGE", "REQUEST_HEADER_FIELDS_TOO_LARGE", "REQUEST_TIMEOUT", "REQUEST_URI_TOO_LONG", "RESET_CONTENT", "SEE_OTHER", "SERVICE_UNAVAILABLE", "SWITCHING_PROTOCOLS", "TEMPORARY_REDIRECT", "TOO_EARLY", "TOO_MANY_REQUESTS", "UNAUTHORIZED", "UNAVAILABLE_FOR_LEGAL_REASONS", "UNPROCESSABLE_ENTITY", "UNSUPPORTED_MEDIA_TYPE", "UPGRADE_REQUIRED", "URI_TOO_LONG", "USE_PROXY", "VARIANT_ALSO_NEGOTIATES"]).optional(),
  "statusCodeValue": z.number().optional()
});
export type ResponseEntity = z.infer<typeof ResponseEntitySchema>;

const RoleSchemaImpl = z.object({
  "id": RoleIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema,
  "customerId": CustomerIdSchema.optional(),
  "ownerId": EntityIdSchema.optional(),
  "name": z.string(),
  "type": z.enum(["GENERIC", "GROUP"]),
  "permissions": JsonNodeSchema.optional(),
  "additionalInfo": JsonNodeSchema.optional()
});
export type Role = z.infer<typeof RoleSchema>;

const RoleIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["ROLE"])
});
export type RoleId = z.infer<typeof RoleIdSchema>;

const RpcSchemaImpl = z.object({
  "id": RpcIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "deviceId": DeviceIdSchema.optional(),
  "expirationTime": z.number().optional(),
  "request": JsonNodeSchema.optional(),
  "response": JsonNodeSchema.optional(),
  "status": z.enum(["DELETED", "DELIVERED", "EXPIRED", "FAILED", "QUEUED", "SENT", "SUCCESSFUL", "TIMEOUT"]).optional(),
  "additionalInfo": JsonNodeSchema.optional()
});
export type Rpc = z.infer<typeof RpcSchema>;

const RpcIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["RPC"])
});
export type RpcId = z.infer<typeof RpcIdSchema>;

const RuleChainSchemaImpl = z.object({
  "additionalInfo": JsonNodeSchema.optional(),
  "id": RuleChainIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema,
  "name": z.string(),
  "type": z.enum(["CORE", "EDGE"]).optional(),
  "firstRuleNodeId": RuleNodeIdSchema.optional(),
  "root": z.boolean().optional(),
  "debugMode": z.boolean().optional(),
  "configuration": JsonNodeSchema.optional()
});
export type RuleChain = z.infer<typeof RuleChainSchema>;

const RuleChainConnectionInfoSchemaImpl = z.object({
  "fromIndex": z.number(),
  "targetRuleChainId": RuleChainIdSchema,
  "additionalInfo": JsonNodeSchema,
  "type": z.string()
});
export type RuleChainConnectionInfo = z.infer<typeof RuleChainConnectionInfoSchema>;

const RuleChainDataSchemaImpl = z.object({
  "ruleChains": z.array(RuleChainSchema),
  "metadata": z.array(RuleChainMetaDataSchema)
});
export type RuleChainData = z.infer<typeof RuleChainDataSchema>;

const RuleChainDebugEventFilterSchemaImpl = z.object({
  "error": z.boolean().optional(),
  "notEmpty": z.boolean().optional(),
  "eventType": z.enum(["DEBUG_CONVERTER", "DEBUG_INTEGRATION", "DEBUG_RULE_CHAIN", "DEBUG_RULE_NODE", "ERROR", "LC_EVENT", "RAW_DATA", "STATS"]).optional(),
  "server": z.string().optional(),
  "message": z.string().optional(),
  "errorStr": z.string().optional()
});
export type RuleChainDebugEventFilter = z.infer<typeof RuleChainDebugEventFilterSchema>;

const RuleChainExportDataSchemaImpl = z.object({
  "attributes": z.object({

}).optional(),
  "entity": RuleChainSchema.optional(),
  "entityType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
  "metaData": RuleChainMetaDataSchema.optional(),
  "relations": z.array(EntityRelationSchema).optional()
});
export type RuleChainExportData = z.infer<typeof RuleChainExportDataSchema>;

const RuleChainIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["RULE_CHAIN"])
});
export type RuleChainId = z.infer<typeof RuleChainIdSchema>;

const RuleChainImportResultSchemaImpl = z.object({
  "error": z.string().optional(),
  "ruleChainId": RuleChainIdSchema.optional(),
  "ruleChainName": z.string().optional(),
  "updated": z.boolean().optional()
});
export type RuleChainImportResult = z.infer<typeof RuleChainImportResultSchema>;

const RuleChainMetaDataSchemaImpl = z.object({
  "ruleChainId": RuleChainIdSchema,
  "firstNodeIndex": z.number(),
  "nodes": z.array(RuleNodeSchema),
  "connections": z.array(NodeConnectionInfoSchema),
  "ruleChainConnections": z.array(RuleChainConnectionInfoSchema)
});
export type RuleChainMetaData = z.infer<typeof RuleChainMetaDataSchema>;

const RuleChainOutputLabelsUsageSchemaImpl = z.object({
  "ruleChainId": RuleChainIdSchema,
  "ruleNodeId": RuleNodeIdSchema,
  "ruleChainName": z.string(),
  "ruleNodeName": z.string(),
  "labels": z.array(z.string())
});
export type RuleChainOutputLabelsUsage = z.infer<typeof RuleChainOutputLabelsUsageSchema>;

const RuleEngineComponentLifecycleEventNotificationRuleTriggerConfigSchemaImpl = z.object({
  "onlyRuleChainLifecycleFailures": z.boolean().optional(),
  "onlyRuleNodeLifecycleFailures": z.boolean().optional(),
  "ruleChainEvents": z.array(z.enum(["ACTIVATED", "CREATED", "DEACTIVATED", "DELETED", "FAILED", "STARTED", "STOPPED", "SUSPENDED", "UPDATED"])).optional(),
  "ruleChains": z.array(z.string()).optional(),
  "ruleNodeEvents": z.array(z.enum(["ACTIVATED", "CREATED", "DEACTIVATED", "DELETED", "FAILED", "STARTED", "STOPPED", "SUSPENDED", "UPDATED"])).optional(),
  "trackRuleNodeEvents": z.boolean().optional(),
  "triggerType": z.enum(["ALARM", "ALARM_ASSIGNMENT", "ALARM_COMMENT", "API_USAGE_LIMIT", "DEVICE_ACTIVITY", "ENTITIES_LIMIT", "ENTITY_ACTION", "INTEGRATION_LIFECYCLE_EVENT", "NEW_PLATFORM_VERSION", "RATE_LIMITS", "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT"]).optional()
});
export type RuleEngineComponentLifecycleEventNotificationRuleTriggerConfig = z.infer<typeof RuleEngineComponentLifecycleEventNotificationRuleTriggerConfigSchema>;

const RuleNodeSchemaImpl = z.object({
  "externalId": RuleNodeIdSchema.optional(),
  "id": RuleNodeIdSchema.optional(),
  "createdTime": z.number().optional(),
  "ruleChainId": RuleChainIdSchema.optional(),
  "type": z.string().optional(),
  "name": z.string().optional(),
  "debugMode": z.boolean().optional(),
  "singletonMode": z.boolean().optional(),
  "configurationVersion": z.number().optional(),
  "configuration": JsonNodeSchema.optional(),
  "additionalInfo": JsonNodeSchema.optional()
});
export type RuleNode = z.infer<typeof RuleNodeSchema>;

const RuleNodeDebugEventFilterSchemaImpl = z.object({
  "error": z.boolean().optional(),
  "notEmpty": z.boolean().optional(),
  "eventType": z.enum(["DEBUG_CONVERTER", "DEBUG_INTEGRATION", "DEBUG_RULE_CHAIN", "DEBUG_RULE_NODE", "ERROR", "LC_EVENT", "RAW_DATA", "STATS"]).optional(),
  "server": z.string().optional(),
  "msgDirectionType": z.enum(["IN", "OUT"]).optional(),
  "entityId": z.string().optional(),
  "errorStr": z.string().optional(),
  "entityType": z.enum(["DEVICE"]).optional(),
  "msgId": z.string().optional(),
  "msgType": z.string().optional(),
  "relationType": z.string().optional(),
  "dataSearch": z.string().optional(),
  "metadataSearch": z.string().optional()
});
export type RuleNodeDebugEventFilter = z.infer<typeof RuleNodeDebugEventFilterSchema>;

const RuleNodeIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["RULE_NODE"])
});
export type RuleNodeId = z.infer<typeof RuleNodeIdSchema>;

const SaveDeviceWithCredentialsRequestSchemaImpl = z.object({
  "device": DeviceSchema,
  "credentials": DeviceCredentialsSchema
});
export type SaveDeviceWithCredentialsRequest = z.infer<typeof SaveDeviceWithCredentialsRequestSchema>;

const SaveOtaPackageInfoRequestSchemaImpl = z.object({
  "id": OtaPackageIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "deviceProfileId": DeviceProfileIdSchema.optional(),
  "type": z.enum(["FIRMWARE", "SOFTWARE"]).optional(),
  "title": z.string().optional(),
  "version": z.string().optional(),
  "tag": z.string().optional(),
  "url": z.string().optional(),
  "hasData": z.boolean().optional(),
  "fileName": z.string().optional(),
  "contentType": z.string().optional(),
  "checksumAlgorithm": z.enum(["CRC32", "MD5", "MURMUR3_128", "MURMUR3_32", "SHA256", "SHA384", "SHA512"]).optional(),
  "checksum": z.string().optional(),
  "dataSize": z.number().optional(),
  "usesUrl": z.boolean().optional(),
  "additionalInfo": JsonNodeSchema.optional()
});
export type SaveOtaPackageInfoRequest = z.infer<typeof SaveOtaPackageInfoRequestSchema>;

const SchedulerEventSchemaImpl = z.object({
  "id": SchedulerEventIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "originatorId": EntityIdSchema.optional(),
  "ownerId": EntityIdSchema.optional(),
  "name": z.string().optional(),
  "type": z.string().optional(),
  "schedule": JsonNodeSchema.optional(),
  "configuration": JsonNodeSchema.optional(),
  "additionalInfo": JsonNodeSchema.optional()
});
export type SchedulerEvent = z.infer<typeof SchedulerEventSchema>;

const SchedulerEventFilterSchemaImpl = z.object({
  "eventType": z.string().optional(),
  "originator": EntityIdSchema.optional()
});
export type SchedulerEventFilter = z.infer<typeof SchedulerEventFilterSchema>;

const SchedulerEventIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["SCHEDULER_EVENT"])
});
export type SchedulerEventId = z.infer<typeof SchedulerEventIdSchema>;

const SchedulerEventInfoSchemaImpl = z.object({
  "id": SchedulerEventIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "originatorId": EntityIdSchema.optional(),
  "ownerId": EntityIdSchema.optional(),
  "name": z.string().optional(),
  "type": z.string().optional(),
  "schedule": JsonNodeSchema.optional(),
  "additionalInfo": JsonNodeSchema.optional()
});
export type SchedulerEventInfo = z.infer<typeof SchedulerEventInfoSchema>;

const SchedulerEventWithCustomerInfoSchemaImpl = z.object({
  "id": SchedulerEventIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "originatorId": EntityIdSchema.optional(),
  "ownerId": EntityIdSchema.optional(),
  "name": z.string().optional(),
  "type": z.string().optional(),
  "schedule": JsonNodeSchema.optional(),
  "additionalInfo": JsonNodeSchema.optional(),
  "customerTitle": z.string().optional(),
  "customerIsPublic": z.object({

}).optional()
});
export type SchedulerEventWithCustomerInfo = z.infer<typeof SchedulerEventWithCustomerInfoSchema>;

const SecuritySettingsSchemaImpl = z.object({
  "passwordPolicy": UserPasswordPolicySchema.optional(),
  "maxFailedLoginAttempts": z.number().optional(),
  "userLockoutNotificationEmail": z.string().optional()
});
export type SecuritySettings = z.infer<typeof SecuritySettingsSchema>;

const SelfRegistrationParamsSchemaImpl = z.object({
  "adminSettingsId": z.string().optional(),
  "signUpTextMessage": z.string().optional(),
  "captchaSiteKey": z.string().optional(),
  "captchaVersion": z.string().optional(),
  "captchaAction": z.string().optional(),
  "showPrivacyPolicy": z.boolean().optional(),
  "showTermsOfUse": z.boolean().optional(),
  "domainName": z.string().optional(),
  "captchaSecretKey": z.string().optional(),
  "privacyPolicy": z.string().optional(),
  "termsOfUse": z.string().optional(),
  "notificationEmail": z.string().optional(),
  "defaultDashboardId": z.string().optional(),
  "defaultDashboardFullscreen": z.boolean().optional(),
  "permissions": z.array(GroupPermissionSchema).optional(),
  "pkgName": z.string().optional(),
  "appSecret": z.string().optional(),
  "appScheme": z.string().optional(),
  "appHost": z.string().optional()
});
export type SelfRegistrationParams = z.infer<typeof SelfRegistrationParamsSchema>;

const ShareGroupRequestSchemaImpl = z.object({
  "allUserGroup": z.boolean(),
  "ownerId": EntityIdSchema.optional(),
  "userGroupId": EntityGroupIdSchema.optional(),
  "readElseWrite": z.boolean().optional(),
  "roleIds": z.array(RoleIdSchema).optional()
});
export type ShareGroupRequest = z.infer<typeof ShareGroupRequestSchema>;

const SharedAttributesSettingSnmpCommunicationConfigSchemaImpl = z.object({
  "mappings": z.array(SnmpMappingSchema).optional(),
  "spec": z.enum(["CLIENT_ATTRIBUTES_QUERYING", "SHARED_ATTRIBUTES_SETTING", "TELEMETRY_QUERYING", "TO_DEVICE_RPC_REQUEST", "TO_SERVER_RPC_REQUEST"]).optional()
});
export type SharedAttributesSettingSnmpCommunicationConfig = z.infer<typeof SharedAttributesSettingSnmpCommunicationConfigSchema>;

const ShortCustomerInfoSchemaImpl = z.object({
  "public": z.boolean().optional(),
  "customerId": CustomerIdSchema.optional(),
  "title": z.string().optional()
});
export type ShortCustomerInfo = z.infer<typeof ShortCustomerInfoSchema>;

const ShortEntityViewSchemaImpl = z.object({
  "id": EntityIdSchema,
  "name": z.string()
});
export type ShortEntityView = z.infer<typeof ShortEntityViewSchema>;

const SignUpRequestSchemaImpl = z.object({
  "firstName": z.string().optional(),
  "lastName": z.string().optional(),
  "email": z.string().optional(),
  "password": z.string().optional(),
  "recaptchaResponse": z.string().optional(),
  "pkgName": z.string().optional(),
  "appSecret": z.string().optional()
});
export type SignUpRequest = z.infer<typeof SignUpRequestSchema>;

const SignUpSelfRegistrationParamsSchemaImpl = z.object({
  "signUpTextMessage": z.string().optional(),
  "captchaSiteKey": z.string().optional(),
  "captchaVersion": z.string().optional(),
  "captchaAction": z.string().optional(),
  "showPrivacyPolicy": z.boolean().optional(),
  "showTermsOfUse": z.boolean().optional()
});
export type SignUpSelfRegistrationParams = z.infer<typeof SignUpSelfRegistrationParamsSchema>;

const SimpleAlarmConditionSpecSchemaImpl = z.any();
export type SimpleAlarmConditionSpec = z.infer<typeof SimpleAlarmConditionSpecSchema>;

const SingleEntityFilterSchemaImpl = z.object({
  "singleEntity": EntityIdSchema.optional()
});
export type SingleEntityFilter = z.infer<typeof SingleEntityFilterSchema>;

const SingleEntityVersionCreateRequestSchemaImpl = z.object({
  "branch": z.string().optional(),
  "config": VersionCreateConfigSchema.optional(),
  "entityId": EntityIdSchema.optional(),
  "type": z.enum(["COMPLEX", "SINGLE_ENTITY"]).optional(),
  "versionName": z.string().optional()
});
export type SingleEntityVersionCreateRequest = z.infer<typeof SingleEntityVersionCreateRequestSchema>;

const SingleEntityVersionLoadRequestSchemaImpl = z.object({
  "config": VersionLoadConfigSchema.optional(),
  "externalEntityId": EntityIdSchema.optional(),
  "internalEntityId": EntityIdSchema.optional(),
  "type": z.enum(["ENTITY_TYPE", "SINGLE_ENTITY"]).optional(),
  "versionId": z.string().optional()
});
export type SingleEntityVersionLoadRequest = z.infer<typeof SingleEntityVersionLoadRequestSchema>;

const SlackConversationSchemaImpl = z.object({
  "email": z.string().optional(),
  "id": z.string().optional(),
  "name": z.string().optional(),
  "title": z.string().optional(),
  "type": z.enum(["DIRECT", "PRIVATE_CHANNEL", "PUBLIC_CHANNEL"]),
  "wholeName": z.string().optional()
});
export type SlackConversation = z.infer<typeof SlackConversationSchema>;

const SlackDeliveryMethodNotificationTemplateSchemaImpl = z.object({
  "body": z.string().optional(),
  "enabled": z.boolean().optional()
});
export type SlackDeliveryMethodNotificationTemplate = z.infer<typeof SlackDeliveryMethodNotificationTemplateSchema>;

const SlackNotificationDeliveryMethodConfigSchemaImpl = z.object({
  "botToken": z.string().optional()
});
export type SlackNotificationDeliveryMethodConfig = z.infer<typeof SlackNotificationDeliveryMethodConfigSchema>;

const SlackNotificationTargetConfigSchemaImpl = z.object({
  "conversation": SlackConversationSchema.optional(),
  "conversationType": z.enum(["DIRECT", "PRIVATE_CHANNEL", "PUBLIC_CHANNEL"]).optional(),
  "description": z.string().optional()
});
export type SlackNotificationTargetConfig = z.infer<typeof SlackNotificationTargetConfigSchema>;

const SmppSmsProviderConfigurationSchemaImpl = z.object({
  "addressRange": z.string().optional(),
  "bindType": z.enum(["RX", "TRX", "TX"]).optional(),
  "codingScheme": z.string().optional(),
  "destinationNpi": z.string().optional(),
  "destinationTon": z.string().optional(),
  "host": z.string().optional(),
  "password": z.string().optional(),
  "port": z.number().optional(),
  "protocolVersion": z.enum(["3.3", "3.4"]).optional(),
  "serviceType": z.string().optional(),
  "sourceAddress": z.string().optional(),
  "sourceNpi": z.string().optional(),
  "sourceTon": z.string().optional(),
  "systemId": z.string().optional(),
  "systemType": z.string().optional()
});
export type SmppSmsProviderConfiguration = z.infer<typeof SmppSmsProviderConfigurationSchema>;

const SmsDeliveryMethodNotificationTemplateSchemaImpl = z.object({
  "body": z.string().optional(),
  "enabled": z.boolean().optional()
});
export type SmsDeliveryMethodNotificationTemplate = z.infer<typeof SmsDeliveryMethodNotificationTemplateSchema>;

const SmsProviderConfigurationSchemaImpl = z.object({

});
export type SmsProviderConfiguration = z.infer<typeof SmsProviderConfigurationSchema>;

const SmsTwoFaAccountConfigSchemaImpl = z.object({
  "phoneNumber": z.string().optional(),
  "useByDefault": z.boolean().optional()
});
export type SmsTwoFaAccountConfig = z.infer<typeof SmsTwoFaAccountConfigSchema>;

const SmsTwoFaProviderConfigSchemaImpl = z.object({
  "smsVerificationMessageTemplate": z.string(),
  "verificationCodeLifetime": z.number().optional()
});
export type SmsTwoFaProviderConfig = z.infer<typeof SmsTwoFaProviderConfigSchema>;

const SnmpCommunicationConfigSchemaImpl = z.object({
  "spec": z.enum(["CLIENT_ATTRIBUTES_QUERYING", "SHARED_ATTRIBUTES_SETTING", "TELEMETRY_QUERYING", "TO_DEVICE_RPC_REQUEST", "TO_SERVER_RPC_REQUEST"]).optional()
});
export type SnmpCommunicationConfig = z.infer<typeof SnmpCommunicationConfigSchema>;

const SnmpDeviceProfileTransportConfigurationSchemaImpl = z.object({
  "communicationConfigs": z.array(SnmpCommunicationConfigSchema).optional(),
  "retries": z.number().optional(),
  "timeoutMs": z.number().optional()
});
export type SnmpDeviceProfileTransportConfiguration = z.infer<typeof SnmpDeviceProfileTransportConfigurationSchema>;

const SnmpDeviceTransportConfigurationSchemaImpl = z.object({
  "authenticationPassphrase": z.string().optional(),
  "authenticationProtocol": z.enum(["MD5", "SHA_1", "SHA_224", "SHA_256", "SHA_384", "SHA_512"]).optional(),
  "community": z.string().optional(),
  "contextName": z.string().optional(),
  "engineId": z.string().optional(),
  "host": z.string().optional(),
  "port": z.number().optional(),
  "privacyPassphrase": z.string().optional(),
  "privacyProtocol": z.enum(["AES_128", "AES_192", "AES_256", "DES"]).optional(),
  "protocolVersion": z.enum(["V1", "V2C", "V3"]).optional(),
  "securityName": z.string().optional(),
  "username": z.string().optional()
});
export type SnmpDeviceTransportConfiguration = z.infer<typeof SnmpDeviceTransportConfigurationSchema>;

const SnmpMappingSchemaImpl = z.object({
  "dataType": z.enum(["BOOLEAN", "DOUBLE", "JSON", "LONG", "STRING"]).optional(),
  "key": z.string().optional(),
  "oid": z.string().optional()
});
export type SnmpMapping = z.infer<typeof SnmpMappingSchema>;

const SolutionInstallResponseSchemaImpl = z.object({
  "dashboardGroupId": EntityGroupIdSchema.optional(),
  "dashboardId": DashboardIdSchema.optional(),
  "publicId": CustomerIdSchema.optional(),
  "mainDashboardPublic": z.boolean().optional(),
  "success": z.boolean().optional(),
  "details": z.string().optional()
});
export type SolutionInstallResponse = z.infer<typeof SolutionInstallResponseSchema>;

const SpecificTimeScheduleSchemaImpl = z.object({
  "daysOfWeek": z.array(z.number()).optional(),
  "dynamicValue": DynamicValue_Of_stringSchema.optional(),
  "endsOn": z.number().optional(),
  "startsOn": z.number().optional(),
  "timezone": z.string().optional(),
  "type": z.enum(["ANY_TIME", "CUSTOM", "SPECIFIC_TIME"]).optional()
});
export type SpecificTimeSchedule = z.infer<typeof SpecificTimeScheduleSchema>;

const StarredDashboardInfoSchemaImpl = z.object({
  "id": z.string().optional(),
  "title": z.string().optional(),
  "starredAt": z.number().optional()
});
export type StarredDashboardInfo = z.infer<typeof StarredDashboardInfoSchema>;

const StateEntityOwnerFilterSchemaImpl = z.object({
  "singleEntity": EntityIdSchema.optional()
});
export type StateEntityOwnerFilter = z.infer<typeof StateEntityOwnerFilterSchema>;

const StatisticsEventFilterSchemaImpl = z.object({
  "notEmpty": z.boolean().optional(),
  "eventType": z.enum(["DEBUG_CONVERTER", "DEBUG_INTEGRATION", "DEBUG_RULE_CHAIN", "DEBUG_RULE_NODE", "ERROR", "LC_EVENT", "RAW_DATA", "STATS"]).optional(),
  "server": z.string().optional(),
  "minMessagesProcessed": z.number().optional(),
  "maxMessagesProcessed": z.number().optional(),
  "minErrorsOccurred": z.number().optional(),
  "maxErrorsOccurred": z.number().optional()
});
export type StatisticsEventFilter = z.infer<typeof StatisticsEventFilterSchema>;

const StringFilterPredicateSchemaImpl = z.object({
  "ignoreCase": z.boolean().optional(),
  "operation": z.enum(["CONTAINS", "ENDS_WITH", "EQUAL", "IN", "NOT_CONTAINS", "NOT_EQUAL", "NOT_IN", "STARTS_WITH"]).optional(),
  "value": FilterPredicateValue_Of_stringSchema.optional()
});
export type StringFilterPredicate = z.infer<typeof StringFilterPredicateSchema>;

const SubmitStrategySchemaImpl = z.object({
  "batchSize": z.number().optional(),
  "type": z.enum(["BATCH", "BURST", "SEQUENTIAL", "SEQUENTIAL_BY_ORIGINATOR", "SEQUENTIAL_BY_TENANT"]).optional()
});
export type SubmitStrategy = z.infer<typeof SubmitStrategySchema>;

const SystemAdministratorsFilterSchemaImpl = z.object({

});
export type SystemAdministratorsFilter = z.infer<typeof SystemAdministratorsFilterSchema>;

const SystemInfoSchemaImpl = z.object({
  "monolith": z.boolean().optional(),
  "systemData": z.array(SystemInfoDataSchema).optional()
});
export type SystemInfo = z.infer<typeof SystemInfoSchema>;

const SystemInfoDataSchemaImpl = z.object({
  "serviceId": z.string().optional(),
  "serviceType": z.string().optional(),
  "cpuUsage": z.number().optional(),
  "cpuCount": z.number().optional(),
  "memoryUsage": z.number().optional(),
  "totalMemory": z.number().optional(),
  "discUsage": z.number().optional(),
  "totalDiscSpace": z.number().optional()
});
export type SystemInfoData = z.infer<typeof SystemInfoDataSchema>;

const TbImageDeleteResultSchemaImpl = z.object({
  "references": z.object({

}).optional(),
  "success": z.boolean().optional(),
  "whiteLabelingList": z.array(WhiteLabelingSchema).optional()
});
export type TbImageDeleteResult = z.infer<typeof TbImageDeleteResultSchema>;

const TbResourceSchemaImpl = z.object({
  "descriptor": JsonNodeSchema.optional(),
  "link": z.string().optional(),
  "name": z.string().optional(),
  "preview": z.string().optional(),
  "public": z.boolean().optional(),
  "publicLink": z.string().optional(),
  "publicResourceKey": z.string().optional(),
  "id": TbResourceIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "title": z.string().optional(),
  "resourceType": z.enum(["IMAGE", "JKS", "JS_MODULE", "LWM2M_MODEL", "PKCS_12"]).optional(),
  "resourceKey": z.string().optional(),
  "etag": z.string().optional(),
  "fileName": z.string().optional(),
  "data": z.string().optional()
});
export type TbResource = z.infer<typeof TbResourceSchema>;

const TbResourceIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["TB_RESOURCE"])
});
export type TbResourceId = z.infer<typeof TbResourceIdSchema>;

const TbResourceInfoSchemaImpl = z.object({
  "descriptor": JsonNodeSchema.optional(),
  "link": z.string().optional(),
  "name": z.string().optional(),
  "public": z.boolean().optional(),
  "publicLink": z.string().optional(),
  "publicResourceKey": z.string().optional(),
  "id": TbResourceIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "title": z.string().optional(),
  "resourceType": z.enum(["IMAGE", "JKS", "JS_MODULE", "LWM2M_MODEL", "PKCS_12"]).optional(),
  "resourceKey": z.string().optional(),
  "etag": z.string().optional(),
  "fileName": z.string().optional()
});
export type TbResourceInfo = z.infer<typeof TbResourceInfoSchema>;

const TelemetryEntityViewSchemaImpl = z.object({
  "timeseries": z.array(z.string()),
  "attributes": AttributesEntityViewSchema
});
export type TelemetryEntityView = z.infer<typeof TelemetryEntityViewSchema>;

const TelemetryMappingConfigurationSchemaImpl = z.object({
  "attribute": z.array(z.string()).optional(),
  "attributeLwm2m": z.object({

}).optional(),
  "keyName": z.object({

}).optional(),
  "observe": z.array(z.string()).optional(),
  "telemetry": z.array(z.string()).optional()
});
export type TelemetryMappingConfiguration = z.infer<typeof TelemetryMappingConfigurationSchema>;

const TelemetryQueryingSnmpCommunicationConfigSchemaImpl = z.object({
  "mappings": z.array(SnmpMappingSchema).optional(),
  "queryingFrequencyMs": z.number().optional(),
  "spec": z.enum(["CLIENT_ATTRIBUTES_QUERYING", "SHARED_ATTRIBUTES_SETTING", "TELEMETRY_QUERYING", "TO_DEVICE_RPC_REQUEST", "TO_SERVER_RPC_REQUEST"]).optional()
});
export type TelemetryQueryingSnmpCommunicationConfig = z.infer<typeof TelemetryQueryingSnmpCommunicationConfigSchema>;

const TenantSchemaImpl = z.object({
  "id": TenantIdSchema.optional(),
  "createdTime": z.number().optional(),
  "title": z.string(),
  "name": z.string().optional(),
  "region": z.string().optional(),
  "tenantProfileId": TenantProfileIdSchema.optional(),
  "country": z.string().optional(),
  "state": z.string().optional(),
  "city": z.string().optional(),
  "address": z.string().optional(),
  "address2": z.string().optional(),
  "zip": z.string().optional(),
  "phone": z.string().optional(),
  "email": z.string(),
  "additionalInfo": JsonNodeSchema.optional()
});
export type Tenant = z.infer<typeof TenantSchema>;

const TenantAdministratorsFilterSchemaImpl = z.object({
  "tenantProfilesIds": z.array(z.string()).optional(),
  "tenantsIds": z.array(z.string()).optional()
});
export type TenantAdministratorsFilter = z.infer<typeof TenantAdministratorsFilterSchema>;

const TenantIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["TENANT"])
});
export type TenantId = z.infer<typeof TenantIdSchema>;

const TenantInfoSchemaImpl = z.object({
  "id": TenantIdSchema.optional(),
  "createdTime": z.number().optional(),
  "title": z.string(),
  "name": z.string().optional(),
  "region": z.string().optional(),
  "tenantProfileId": TenantProfileIdSchema.optional(),
  "country": z.string().optional(),
  "state": z.string().optional(),
  "city": z.string().optional(),
  "address": z.string().optional(),
  "address2": z.string().optional(),
  "zip": z.string().optional(),
  "phone": z.string().optional(),
  "email": z.string(),
  "additionalInfo": JsonNodeSchema.optional(),
  "tenantProfileName": z.string().optional()
});
export type TenantInfo = z.infer<typeof TenantInfoSchema>;

const TenantProfileSchemaImpl = z.object({
  "default": z.boolean().optional(),
  "id": TenantProfileIdSchema.optional(),
  "createdTime": z.number().optional(),
  "name": z.string().optional(),
  "description": z.string().optional(),
  "isolatedTbRuleEngine": z.boolean().optional(),
  "profileData": TenantProfileDataSchema.optional()
});
export type TenantProfile = z.infer<typeof TenantProfileSchema>;

const TenantProfileConfigurationSchemaImpl = z.object({

});
export type TenantProfileConfiguration = z.infer<typeof TenantProfileConfigurationSchema>;

const TenantProfileDataSchemaImpl = z.object({
  "configuration": TenantProfileConfigurationSchema.optional(),
  "queueConfiguration": z.array(TenantProfileQueueConfigurationSchema).optional()
});
export type TenantProfileData = z.infer<typeof TenantProfileDataSchema>;

const TenantProfileIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["TENANT_PROFILE"])
});
export type TenantProfileId = z.infer<typeof TenantProfileIdSchema>;

const TenantProfileQueueConfigurationSchemaImpl = z.object({
  "additionalInfo": JsonNodeSchema.optional(),
  "consumerPerPartition": z.boolean().optional(),
  "name": z.string().optional(),
  "packProcessingTimeout": z.number().optional(),
  "partitions": z.number().optional(),
  "pollInterval": z.number().optional(),
  "processingStrategy": ProcessingStrategySchema.optional(),
  "submitStrategy": SubmitStrategySchema.optional(),
  "topic": z.string().optional()
});
export type TenantProfileQueueConfiguration = z.infer<typeof TenantProfileQueueConfigurationSchema>;

const TenantSolutionTemplateDetailsSchemaImpl = z.object({
  "description": z.string().optional(),
  "highlights": z.string().optional(),
  "imageUrls": z.array(z.string()).optional(),
  "installed": z.boolean().optional(),
  "id": z.string().optional(),
  "title": z.string().optional(),
  "level": z.enum(["MAKER", "PROTOTYPE", "STARTUP"]).optional(),
  "installTimeoutMs": z.number().optional(),
  "tenantTelemetryKeys": z.array(z.string()).optional(),
  "tenantAttributeKeys": z.array(z.string()).optional()
});
export type TenantSolutionTemplateDetails = z.infer<typeof TenantSolutionTemplateDetailsSchema>;

const TenantSolutionTemplateInfoSchemaImpl = z.object({
  "id": z.string().optional(),
  "title": z.string().optional(),
  "level": z.enum(["MAKER", "PROTOTYPE", "STARTUP"]).optional(),
  "installTimeoutMs": z.number().optional(),
  "tenantTelemetryKeys": z.array(z.string()).optional(),
  "tenantAttributeKeys": z.array(z.string()).optional(),
  "previewImageUrl": z.string().optional(),
  "shortDescription": z.string().optional(),
  "installed": z.boolean().optional(),
  "videoPreviewImageUrl": z.string().optional(),
  "previewMp4Url": z.string().optional(),
  "previewWebmUrl": z.string().optional()
});
export type TenantSolutionTemplateInfo = z.infer<typeof TenantSolutionTemplateInfoSchema>;

const TenantSolutionTemplateInstructionsSchemaImpl = z.object({
  "dashboardGroupId": EntityGroupIdSchema.optional(),
  "dashboardId": DashboardIdSchema.optional(),
  "publicId": CustomerIdSchema.optional(),
  "mainDashboardPublic": z.boolean().optional(),
  "details": z.string().optional()
});
export type TenantSolutionTemplateInstructions = z.infer<typeof TenantSolutionTemplateInstructionsSchema>;

const TestSmsRequestSchemaImpl = z.object({
  "providerConfiguration": SmsProviderConfigurationSchema.optional(),
  "numberTo": z.string().optional(),
  "message": z.string().optional()
});
export type TestSmsRequest = z.infer<typeof TestSmsRequestSchema>;

const ThingsboardCredentialsExpiredResponseSchemaImpl = z.object({
  "subscriptionEntry": z.enum(["ASSET_COUNT", "DEVICE_COUNT", "WHITE_LABELING"]).optional(),
  "subscriptionErrorCode": z.enum(["FEATURE_DISABLED", "LIMIT_REACHED", "UNSUPPORTED_SOLUTION_TEMPLATE_PLAN"]).optional(),
  "subscriptionValue": JsonNodeSchema.optional(),
  "status": z.number().optional(),
  "message": z.string().optional(),
  "errorCode": z.object({

}).optional(),
  "timestamp": z.string().optional(),
  "resetToken": z.string().optional()
});
export type ThingsboardCredentialsExpiredResponse = z.infer<typeof ThingsboardCredentialsExpiredResponseSchema>;

const ThingsboardErrorResponseSchemaImpl = z.object({
  "subscriptionEntry": z.enum(["ASSET_COUNT", "DEVICE_COUNT", "WHITE_LABELING"]).optional(),
  "subscriptionErrorCode": z.enum(["FEATURE_DISABLED", "LIMIT_REACHED", "UNSUPPORTED_SOLUTION_TEMPLATE_PLAN"]).optional(),
  "subscriptionValue": JsonNodeSchema.optional(),
  "status": z.number().optional(),
  "message": z.string().optional(),
  "errorCode": z.object({

}).optional(),
  "timestamp": z.string().optional()
});
export type ThingsboardErrorResponse = z.infer<typeof ThingsboardErrorResponseSchema>;

const ToDeviceRpcRequestSnmpCommunicationConfigSchemaImpl = z.object({
  "mappings": z.array(SnmpMappingSchema).optional(),
  "spec": z.enum(["CLIENT_ATTRIBUTES_QUERYING", "SHARED_ATTRIBUTES_SETTING", "TELEMETRY_QUERYING", "TO_DEVICE_RPC_REQUEST", "TO_SERVER_RPC_REQUEST"]).optional()
});
export type ToDeviceRpcRequestSnmpCommunicationConfig = z.infer<typeof ToDeviceRpcRequestSnmpCommunicationConfigSchema>;

const ToServerRpcRequestSnmpCommunicationConfigSchemaImpl = z.object({
  "mappings": z.array(SnmpMappingSchema).optional(),
  "spec": z.enum(["CLIENT_ATTRIBUTES_QUERYING", "SHARED_ATTRIBUTES_SETTING", "TELEMETRY_QUERYING", "TO_DEVICE_RPC_REQUEST", "TO_SERVER_RPC_REQUEST"]).optional()
});
export type ToServerRpcRequestSnmpCommunicationConfig = z.infer<typeof ToServerRpcRequestSnmpCommunicationConfigSchema>;

const TotpTwoFaAccountConfigSchemaImpl = z.object({
  "authUrl": z.string(),
  "useByDefault": z.boolean().optional()
});
export type TotpTwoFaAccountConfig = z.infer<typeof TotpTwoFaAccountConfigSchema>;

const TotpTwoFaProviderConfigSchemaImpl = z.object({
  "issuerName": z.string()
});
export type TotpTwoFaProviderConfig = z.infer<typeof TotpTwoFaProviderConfigSchema>;

const TransportPayloadTypeConfigurationSchemaImpl = z.object({

});
export type TransportPayloadTypeConfiguration = z.infer<typeof TransportPayloadTypeConfigurationSchema>;

const TsValueSchemaImpl = z.object({
  "count": z.number().optional(),
  "ts": z.number().optional(),
  "value": z.string().optional()
});
export type TsValue = z.infer<typeof TsValueSchema>;

const TwilioSmsProviderConfigurationSchemaImpl = z.object({
  "accountSid": z.string().optional(),
  "accountToken": z.string().optional(),
  "numberFrom": z.string().optional()
});
export type TwilioSmsProviderConfiguration = z.infer<typeof TwilioSmsProviderConfigurationSchema>;

const TwoFaAccountConfigSchemaImpl = z.object({
  "useByDefault": z.boolean().optional()
});
export type TwoFaAccountConfig = z.infer<typeof TwoFaAccountConfigSchema>;

const TwoFaAccountConfigUpdateRequestSchemaImpl = z.object({
  "useByDefault": z.boolean().optional()
});
export type TwoFaAccountConfigUpdateRequest = z.infer<typeof TwoFaAccountConfigUpdateRequestSchema>;

const TwoFaProviderConfigSchemaImpl = z.object({

});
export type TwoFaProviderConfig = z.infer<typeof TwoFaProviderConfigSchema>;

const TwoFaProviderInfoSchemaImpl = z.object({
  "contact": z.string().optional(),
  "default": z.boolean().optional(),
  "minVerificationCodeSendPeriod": z.number().optional(),
  "type": z.enum(["BACKUP_CODE", "EMAIL", "SMS", "TOTP"]).optional()
});
export type TwoFaProviderInfo = z.infer<typeof TwoFaProviderInfoSchema>;

const UpdateMessageSchemaImpl = z.object({
  "updateAvailable": z.boolean().optional(),
  "currentVersion": z.string().optional(),
  "latestVersion": z.string().optional(),
  "upgradeInstructionsUrl": z.string().optional(),
  "currentVersionReleaseNotesUrl": z.string().optional(),
  "latestVersionReleaseNotesUrl": z.string().optional()
});
export type UpdateMessage = z.infer<typeof UpdateMessageSchema>;

const UsageInfoSchemaImpl = z.object({
  "alarms": z.number().optional(),
  "assets": z.number().optional(),
  "customers": z.number().optional(),
  "dashboards": z.number().optional(),
  "devices": z.number().optional(),
  "emails": z.number().optional(),
  "jsExecutions": z.number().optional(),
  "maxAlarms": z.number().optional(),
  "maxAssets": z.number().optional(),
  "maxCustomers": z.number().optional(),
  "maxDashboards": z.number().optional(),
  "maxDevices": z.number().optional(),
  "maxEmails": z.number().optional(),
  "maxJsExecutions": z.number().optional(),
  "maxSms": z.number().optional(),
  "maxTbelExecutions": z.number().optional(),
  "maxTransportMessages": z.number().optional(),
  "maxUsers": z.number().optional(),
  "sms": z.number().optional(),
  "smsEnabled": z.boolean().optional(),
  "tbelExecutions": z.number().optional(),
  "transportMessages": z.number().optional(),
  "users": z.number().optional()
});
export type UsageInfo = z.infer<typeof UsageInfoSchema>;

const UserSchemaImpl = z.object({
  "id": UserIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "email": z.string(),
  "name": z.string().optional(),
  "authority": z.enum(["CUSTOMER_USER", "PRE_VERIFICATION_TOKEN", "REFRESH_TOKEN", "SYS_ADMIN", "TENANT_ADMIN"]),
  "firstName": z.string().optional(),
  "lastName": z.string().optional(),
  "phone": z.string().optional(),
  "additionalInfo": JsonNodeSchema.optional(),
  "ownerId": EntityIdSchema.optional()
});
export type User = z.infer<typeof UserSchema>;

const UserDashboardsInfoSchemaImpl = z.object({
  "last": z.array(LastVisitedDashboardInfoSchema).optional(),
  "starred": z.array(StarredDashboardInfoSchema).optional()
});
export type UserDashboardsInfo = z.infer<typeof UserDashboardsInfoSchema>;

const UserEmailInfoSchemaImpl = z.object({
  "id": UserIdSchema.optional(),
  "email": z.string().optional(),
  "firstName": z.string().optional(),
  "lastName": z.string().optional()
});
export type UserEmailInfo = z.infer<typeof UserEmailInfoSchema>;

const UserGroupListFilterSchemaImpl = z.object({
  "groupsIds": z.array(z.string()).optional()
});
export type UserGroupListFilter = z.infer<typeof UserGroupListFilterSchema>;

const UserIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["USER"])
});
export type UserId = z.infer<typeof UserIdSchema>;

const UserInfoSchemaImpl = z.object({
  "id": UserIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "customerId": CustomerIdSchema.optional(),
  "email": z.string(),
  "name": z.string().optional(),
  "authority": z.enum(["CUSTOMER_USER", "PRE_VERIFICATION_TOKEN", "REFRESH_TOKEN", "SYS_ADMIN", "TENANT_ADMIN"]),
  "firstName": z.string().optional(),
  "lastName": z.string().optional(),
  "phone": z.string().optional(),
  "additionalInfo": JsonNodeSchema.optional(),
  "ownerId": EntityIdSchema.optional(),
  "ownerName": z.string().optional(),
  "groups": z.array(EntityInfoSchema).optional()
});
export type UserInfo = z.infer<typeof UserInfoSchema>;

const UserListFilterSchemaImpl = z.object({
  "usersIds": z.array(z.string()).optional()
});
export type UserListFilter = z.infer<typeof UserListFilterSchema>;

const UserNotificationSettingsSchemaImpl = z.object({
  "prefs": z.object({

})
});
export type UserNotificationSettings = z.infer<typeof UserNotificationSettingsSchema>;

const UserPasswordPolicySchemaImpl = z.object({
  "allowWhitespaces": z.boolean().optional(),
  "forceUserToResetPasswordIfNotValid": z.boolean().optional(),
  "maximumLength": z.number().optional(),
  "minimumDigits": z.number().optional(),
  "minimumLength": z.number().optional(),
  "minimumLowercaseLetters": z.number().optional(),
  "minimumSpecialCharacters": z.number().optional(),
  "minimumUppercaseLetters": z.number().optional(),
  "passwordExpirationPeriodDays": z.number().optional(),
  "passwordReuseFrequencyDays": z.number().optional()
});
export type UserPasswordPolicy = z.infer<typeof UserPasswordPolicySchema>;

const UserRoleFilterSchemaImpl = z.object({
  "rolesIds": z.array(z.string()).optional()
});
export type UserRoleFilter = z.infer<typeof UserRoleFilterSchema>;

const UsersFilterSchemaImpl = z.object({

});
export type UsersFilter = z.infer<typeof UsersFilterSchema>;

const VersionCreateConfigSchemaImpl = z.object({
  "saveAttributes": z.boolean().optional(),
  "saveCredentials": z.boolean().optional(),
  "saveGroupEntities": z.boolean().optional(),
  "savePermissions": z.boolean().optional(),
  "saveRelations": z.boolean().optional()
});
export type VersionCreateConfig = z.infer<typeof VersionCreateConfigSchema>;

const VersionCreateRequestSchemaImpl = z.object({
  "branch": z.string().optional(),
  "type": z.enum(["COMPLEX", "SINGLE_ENTITY"]).optional(),
  "versionName": z.string().optional()
});
export type VersionCreateRequest = z.infer<typeof VersionCreateRequestSchema>;

const VersionCreationResultSchemaImpl = z.object({
  "added": z.number().optional(),
  "done": z.boolean().optional(),
  "error": z.string().optional(),
  "modified": z.number().optional(),
  "removed": z.number().optional(),
  "version": EntityVersionSchema.optional()
});
export type VersionCreationResult = z.infer<typeof VersionCreationResultSchema>;

const VersionLoadConfigSchemaImpl = z.object({
  "autoGenerateIntegrationKey": z.boolean().optional(),
  "loadAttributes": z.boolean().optional(),
  "loadCredentials": z.boolean().optional(),
  "loadGroupEntities": z.boolean().optional(),
  "loadPermissions": z.boolean().optional(),
  "loadRelations": z.boolean().optional()
});
export type VersionLoadConfig = z.infer<typeof VersionLoadConfigSchema>;

const VersionLoadRequestSchemaImpl = z.object({
  "type": z.enum(["ENTITY_TYPE", "SINGLE_ENTITY"]).optional(),
  "versionId": z.string().optional()
});
export type VersionLoadRequest = z.infer<typeof VersionLoadRequestSchema>;

const VersionLoadResultSchemaImpl = z.object({
  "done": z.boolean().optional(),
  "error": EntityLoadErrorSchema.optional(),
  "result": z.array(EntityTypeLoadResultSchema).optional()
});
export type VersionLoadResult = z.infer<typeof VersionLoadResultSchema>;

const VersionedEntityInfoSchemaImpl = z.object({
  "externalId": EntityIdSchema.optional(),
  "path": z.string().optional()
});
export type VersionedEntityInfo = z.infer<typeof VersionedEntityInfoSchema>;

const WebDeliveryMethodNotificationTemplateSchemaImpl = z.object({
  "additionalConfig": JsonNodeSchema.optional(),
  "body": z.string().optional(),
  "enabled": z.boolean().optional(),
  "subject": z.string().optional()
});
export type WebDeliveryMethodNotificationTemplate = z.infer<typeof WebDeliveryMethodNotificationTemplateSchema>;

const WhiteLabelingSchemaImpl = z.object({
  "customerId": CustomerIdSchema.optional(),
  "domain": z.string().optional(),
  "settings": JsonNodeSchema.optional(),
  "tenantId": TenantIdSchema.optional(),
  "type": z.enum(["GENERAL", "LOGIN", "MAIL_TEMPLATES"]).optional()
});
export type WhiteLabeling = z.infer<typeof WhiteLabelingSchema>;

const WhiteLabelingParamsSchemaImpl = z.object({
  "logoImageUrl": z.string().optional(),
  "logoImageHeight": z.number().optional(),
  "appTitle": z.string().optional(),
  "favicon": FaviconSchema.optional(),
  "paletteSettings": PaletteSettingsSchema.optional(),
  "helpLinkBaseUrl": z.string().optional(),
  "uiHelpBaseUrl": z.string().optional(),
  "enableHelpLinks": z.boolean().optional(),
  "whiteLabelingEnabled": z.boolean().optional(),
  "showNameVersion": z.boolean().optional(),
  "platformName": z.string().optional(),
  "platformVersion": z.string().optional(),
  "customCss": z.string().optional()
});
export type WhiteLabelingParams = z.infer<typeof WhiteLabelingParamsSchema>;

const WidgetTypeSchemaImpl = z.object({
  "id": WidgetTypeIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "fqn": z.string().optional(),
  "name": z.string().optional(),
  "deprecated": z.boolean().optional(),
  "descriptor": JsonNodeSchema.optional()
});
export type WidgetType = z.infer<typeof WidgetTypeSchema>;

const WidgetTypeDetailsSchemaImpl = z.object({
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "fqn": z.string().optional(),
  "name": z.string().optional(),
  "deprecated": z.boolean().optional(),
  "descriptor": JsonNodeSchema.optional(),
  "image": z.string().optional(),
  "description": z.string().optional(),
  "tags": z.array(z.string()).optional()
});
export type WidgetTypeDetails = z.infer<typeof WidgetTypeDetailsSchema>;

const WidgetTypeExportDataSchemaImpl = z.object({
  "attributes": z.object({

}).optional(),
  "entity": WidgetTypeDetailsSchema.optional(),
  "entityType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
  "relations": z.array(EntityRelationSchema).optional()
});
export type WidgetTypeExportData = z.infer<typeof WidgetTypeExportDataSchema>;

const WidgetTypeIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["WIDGET_TYPE"])
});
export type WidgetTypeId = z.infer<typeof WidgetTypeIdSchema>;

const WidgetTypeInfoSchemaImpl = z.object({
  "id": WidgetTypeIdSchema.optional(),
  "createdTime": z.number().optional(),
  "tenantId": TenantIdSchema.optional(),
  "fqn": z.string().optional(),
  "name": z.string().optional(),
  "deprecated": z.boolean().optional(),
  "image": z.string().optional(),
  "description": z.string().optional(),
  "tags": z.array(z.string()).optional(),
  "widgetType": z.string().optional()
});
export type WidgetTypeInfo = z.infer<typeof WidgetTypeInfoSchema>;

const WidgetsBundleSchemaImpl = z.object({
  "id": WidgetsBundleIdSchema.optional(),
  "createdTime": z.number().optional(),
  "name": z.string().optional(),
  "tenantId": TenantIdSchema.optional(),
  "alias": z.string().optional(),
  "title": z.string().optional(),
  "image": z.string().optional(),
  "description": z.string().optional(),
  "order": z.number().optional()
});
export type WidgetsBundle = z.infer<typeof WidgetsBundleSchema>;

const WidgetsBundleExportDataSchemaImpl = z.object({
  "attributes": z.object({

}).optional(),
  "entity": WidgetsBundleSchema.optional(),
  "entityType": z.enum(["ALARM", "API_USAGE_STATE", "ASSET", "ASSET_PROFILE", "BLOB_ENTITY", "CONVERTER", "CUSTOMER", "DASHBOARD", "DEVICE", "DEVICE_PROFILE", "EDGE", "ENTITY_GROUP", "ENTITY_VIEW", "GROUP_PERMISSION", "INTEGRATION", "NOTIFICATION", "NOTIFICATION_REQUEST", "NOTIFICATION_RULE", "NOTIFICATION_TARGET", "NOTIFICATION_TEMPLATE", "OTA_PACKAGE", "QUEUE", "ROLE", "RPC", "RULE_CHAIN", "RULE_NODE", "SCHEDULER_EVENT", "TB_RESOURCE", "TENANT", "TENANT_PROFILE", "USER", "WIDGETS_BUNDLE", "WIDGET_TYPE"]).optional(),
  "fqns": z.array(z.string()).optional(),
  "relations": z.array(EntityRelationSchema).optional(),
  "widgets": z.array(ObjectNodeSchema).optional()
});
export type WidgetsBundleExportData = z.infer<typeof WidgetsBundleExportDataSchema>;

const WidgetsBundleIdSchemaImpl = z.object({
  "id": z.string(),
  "entityType": z.enum(["WIDGETS_BUNDLE"])
});
export type WidgetsBundleId = z.infer<typeof WidgetsBundleIdSchema>;

const X509CertificateChainProvisionConfigurationSchemaImpl = z.object({
  "allowCreateNewDevicesByX509Certificate": z.boolean().optional(),
  "certificateRegExPattern": z.string().optional(),
  "provisionDeviceSecret": z.string().optional()
});
export type X509CertificateChainProvisionConfiguration = z.infer<typeof X509CertificateChainProvisionConfigurationSchema>;

const X509LwM2MBootstrapServerCredentialSchemaImpl = z.object({
  "shortServerId": z.number().optional(),
  "bootstrapServerIs": z.boolean().optional(),
  "host": z.string().optional(),
  "port": z.number().optional(),
  "clientHoldOffTime": z.number().optional(),
  "serverPublicKey": z.string().optional(),
  "serverCertificate": z.string().optional(),
  "bootstrapServerAccountTimeout": z.number().optional(),
  "lifetime": z.number().optional(),
  "defaultMinPeriod": z.number().optional(),
  "notifIfDisabled": z.boolean().optional(),
  "binding": z.string().optional()
});
export type X509LwM2MBootstrapServerCredential = z.infer<typeof X509LwM2MBootstrapServerCredentialSchema>;
