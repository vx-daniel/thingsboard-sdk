"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolutionControllerClient = exports.SignUpControllerClient = exports.SelfRegistrationControllerClient = exports.SchedulerEventControllerClient = exports.RuleEngineControllerClient = exports.RuleChainControllerClient = exports.RpcV2ControllerClient = exports.RpcV1ControllerClient = exports.RoleControllerClient = exports.ReportControllerClient = exports.QueueControllerClient = exports.OwnerControllerClient = exports.OtaPackageControllerClient = exports.OAuth2ControllerClient = exports.OAuth2ConfigTemplateControllerClient = exports.NotificationTemplateControllerClient = exports.NotificationTargetControllerClient = exports.NotificationRuleControllerClient = exports.NotificationControllerClient = exports.MailConfigTemplateControllerClient = exports.IntegrationControllerClient = exports.ImageControllerClient = exports.GroupPermissionControllerClient = exports.EventControllerClient = exports.EntityViewControllerClient = exports.EntityRelationControllerClient = exports.EntityQueryControllerClient = exports.EntityGroupControllerClient = exports.EntitiesVersionControlControllerClient = exports.EdgeEventControllerClient = exports.EdgeControllerClient = exports.DeviceProfileControllerClient = exports.DeviceGroupOtaPackageControllerClient = exports.DeviceControllerClient = exports.DeviceConnectivityControllerClient = exports.DashboardControllerClient = exports.CustomerControllerClient = exports.CustomTranslationControllerClient = exports.CustomMenuControllerClient = exports.ConverterControllerClient = exports.ComponentDescriptorControllerClient = exports.BlobEntityControllerClient = exports.AuthControllerClient = exports.AuditLogControllerClient = exports.AssetProfileControllerClient = exports.AssetControllerClient = exports.AlarmControllerClient = exports.AlarmCommentControllerClient = exports.LoginEndpointClient = exports.AdminControllerClient = void 0;
exports.WidgetsBundleControllerClient = exports.WidgetTypeControllerClient = exports.WhiteLabelingControllerClient = exports.UserPermissionsControllerClient = exports.UserControllerClient = exports.UsageInfoControllerClient = exports.UiSettingsControllerClient = exports.TwoFactorAuthControllerClient = exports.TwoFactorAuthConfigControllerClient = exports.TenantProfileControllerClient = exports.TenantControllerClient = exports.TelemetryControllerClient = exports.TbResourceControllerClient = void 0;
var admin_controller_client_1 = require("./clients/admin-controller.client");
Object.defineProperty(exports, "AdminControllerClient", { enumerable: true, get: function () { return admin_controller_client_1.AdminControllerClient; } });
var login_endpoint_client_1 = require("./clients/login-endpoint.client");
Object.defineProperty(exports, "LoginEndpointClient", { enumerable: true, get: function () { return login_endpoint_client_1.LoginEndpointClient; } });
var alarm_comment_controller_client_1 = require("./clients/alarm-comment-controller.client");
Object.defineProperty(exports, "AlarmCommentControllerClient", { enumerable: true, get: function () { return alarm_comment_controller_client_1.AlarmCommentControllerClient; } });
var alarm_controller_client_1 = require("./clients/alarm-controller.client");
Object.defineProperty(exports, "AlarmControllerClient", { enumerable: true, get: function () { return alarm_controller_client_1.AlarmControllerClient; } });
var asset_controller_client_1 = require("./clients/asset-controller.client");
Object.defineProperty(exports, "AssetControllerClient", { enumerable: true, get: function () { return asset_controller_client_1.AssetControllerClient; } });
var asset_profile_controller_client_1 = require("./clients/asset-profile-controller.client");
Object.defineProperty(exports, "AssetProfileControllerClient", { enumerable: true, get: function () { return asset_profile_controller_client_1.AssetProfileControllerClient; } });
var audit_log_controller_client_1 = require("./clients/audit-log-controller.client");
Object.defineProperty(exports, "AuditLogControllerClient", { enumerable: true, get: function () { return audit_log_controller_client_1.AuditLogControllerClient; } });
var auth_controller_client_1 = require("./clients/auth-controller.client");
Object.defineProperty(exports, "AuthControllerClient", { enumerable: true, get: function () { return auth_controller_client_1.AuthControllerClient; } });
var blob_entity_controller_client_1 = require("./clients/blob-entity-controller.client");
Object.defineProperty(exports, "BlobEntityControllerClient", { enumerable: true, get: function () { return blob_entity_controller_client_1.BlobEntityControllerClient; } });
var component_descriptor_controller_client_1 = require("./clients/component-descriptor-controller.client");
Object.defineProperty(exports, "ComponentDescriptorControllerClient", { enumerable: true, get: function () { return component_descriptor_controller_client_1.ComponentDescriptorControllerClient; } });
var converter_controller_client_1 = require("./clients/converter-controller.client");
Object.defineProperty(exports, "ConverterControllerClient", { enumerable: true, get: function () { return converter_controller_client_1.ConverterControllerClient; } });
var custom_menu_controller_client_1 = require("./clients/custom-menu-controller.client");
Object.defineProperty(exports, "CustomMenuControllerClient", { enumerable: true, get: function () { return custom_menu_controller_client_1.CustomMenuControllerClient; } });
var custom_translation_controller_client_1 = require("./clients/custom-translation-controller.client");
Object.defineProperty(exports, "CustomTranslationControllerClient", { enumerable: true, get: function () { return custom_translation_controller_client_1.CustomTranslationControllerClient; } });
var customer_controller_client_1 = require("./clients/customer-controller.client");
Object.defineProperty(exports, "CustomerControllerClient", { enumerable: true, get: function () { return customer_controller_client_1.CustomerControllerClient; } });
var dashboard_controller_client_1 = require("./clients/dashboard-controller.client");
Object.defineProperty(exports, "DashboardControllerClient", { enumerable: true, get: function () { return dashboard_controller_client_1.DashboardControllerClient; } });
var device_connectivity_controller_client_1 = require("./clients/device-connectivity-controller.client");
Object.defineProperty(exports, "DeviceConnectivityControllerClient", { enumerable: true, get: function () { return device_connectivity_controller_client_1.DeviceConnectivityControllerClient; } });
var device_controller_client_1 = require("./clients/device-controller.client");
Object.defineProperty(exports, "DeviceControllerClient", { enumerable: true, get: function () { return device_controller_client_1.DeviceControllerClient; } });
var device_group_ota_package_controller_client_1 = require("./clients/device-group-ota-package-controller.client");
Object.defineProperty(exports, "DeviceGroupOtaPackageControllerClient", { enumerable: true, get: function () { return device_group_ota_package_controller_client_1.DeviceGroupOtaPackageControllerClient; } });
var device_profile_controller_client_1 = require("./clients/device-profile-controller.client");
Object.defineProperty(exports, "DeviceProfileControllerClient", { enumerable: true, get: function () { return device_profile_controller_client_1.DeviceProfileControllerClient; } });
var edge_controller_client_1 = require("./clients/edge-controller.client");
Object.defineProperty(exports, "EdgeControllerClient", { enumerable: true, get: function () { return edge_controller_client_1.EdgeControllerClient; } });
var edge_event_controller_client_1 = require("./clients/edge-event-controller.client");
Object.defineProperty(exports, "EdgeEventControllerClient", { enumerable: true, get: function () { return edge_event_controller_client_1.EdgeEventControllerClient; } });
var entities_version_control_controller_client_1 = require("./clients/entities-version-control-controller.client");
Object.defineProperty(exports, "EntitiesVersionControlControllerClient", { enumerable: true, get: function () { return entities_version_control_controller_client_1.EntitiesVersionControlControllerClient; } });
var entity_group_controller_client_1 = require("./clients/entity-group-controller.client");
Object.defineProperty(exports, "EntityGroupControllerClient", { enumerable: true, get: function () { return entity_group_controller_client_1.EntityGroupControllerClient; } });
var entity_query_controller_client_1 = require("./clients/entity-query-controller.client");
Object.defineProperty(exports, "EntityQueryControllerClient", { enumerable: true, get: function () { return entity_query_controller_client_1.EntityQueryControllerClient; } });
var entity_relation_controller_client_1 = require("./clients/entity-relation-controller.client");
Object.defineProperty(exports, "EntityRelationControllerClient", { enumerable: true, get: function () { return entity_relation_controller_client_1.EntityRelationControllerClient; } });
var entity_view_controller_client_1 = require("./clients/entity-view-controller.client");
Object.defineProperty(exports, "EntityViewControllerClient", { enumerable: true, get: function () { return entity_view_controller_client_1.EntityViewControllerClient; } });
var event_controller_client_1 = require("./clients/event-controller.client");
Object.defineProperty(exports, "EventControllerClient", { enumerable: true, get: function () { return event_controller_client_1.EventControllerClient; } });
var group_permission_controller_client_1 = require("./clients/group-permission-controller.client");
Object.defineProperty(exports, "GroupPermissionControllerClient", { enumerable: true, get: function () { return group_permission_controller_client_1.GroupPermissionControllerClient; } });
var image_controller_client_1 = require("./clients/image-controller.client");
Object.defineProperty(exports, "ImageControllerClient", { enumerable: true, get: function () { return image_controller_client_1.ImageControllerClient; } });
var integration_controller_client_1 = require("./clients/integration-controller.client");
Object.defineProperty(exports, "IntegrationControllerClient", { enumerable: true, get: function () { return integration_controller_client_1.IntegrationControllerClient; } });
var mail_config_template_controller_client_1 = require("./clients/mail-config-template-controller.client");
Object.defineProperty(exports, "MailConfigTemplateControllerClient", { enumerable: true, get: function () { return mail_config_template_controller_client_1.MailConfigTemplateControllerClient; } });
var notification_controller_client_1 = require("./clients/notification-controller.client");
Object.defineProperty(exports, "NotificationControllerClient", { enumerable: true, get: function () { return notification_controller_client_1.NotificationControllerClient; } });
var notification_rule_controller_client_1 = require("./clients/notification-rule-controller.client");
Object.defineProperty(exports, "NotificationRuleControllerClient", { enumerable: true, get: function () { return notification_rule_controller_client_1.NotificationRuleControllerClient; } });
var notification_target_controller_client_1 = require("./clients/notification-target-controller.client");
Object.defineProperty(exports, "NotificationTargetControllerClient", { enumerable: true, get: function () { return notification_target_controller_client_1.NotificationTargetControllerClient; } });
var notification_template_controller_client_1 = require("./clients/notification-template-controller.client");
Object.defineProperty(exports, "NotificationTemplateControllerClient", { enumerable: true, get: function () { return notification_template_controller_client_1.NotificationTemplateControllerClient; } });
var o_auth_2_config_template_controller_client_1 = require("./clients/o-auth-2-config-template-controller.client");
Object.defineProperty(exports, "OAuth2ConfigTemplateControllerClient", { enumerable: true, get: function () { return o_auth_2_config_template_controller_client_1.OAuth2ConfigTemplateControllerClient; } });
var o_auth_2_controller_client_1 = require("./clients/o-auth-2-controller.client");
Object.defineProperty(exports, "OAuth2ControllerClient", { enumerable: true, get: function () { return o_auth_2_controller_client_1.OAuth2ControllerClient; } });
var ota_package_controller_client_1 = require("./clients/ota-package-controller.client");
Object.defineProperty(exports, "OtaPackageControllerClient", { enumerable: true, get: function () { return ota_package_controller_client_1.OtaPackageControllerClient; } });
var owner_controller_client_1 = require("./clients/owner-controller.client");
Object.defineProperty(exports, "OwnerControllerClient", { enumerable: true, get: function () { return owner_controller_client_1.OwnerControllerClient; } });
var queue_controller_client_1 = require("./clients/queue-controller.client");
Object.defineProperty(exports, "QueueControllerClient", { enumerable: true, get: function () { return queue_controller_client_1.QueueControllerClient; } });
var report_controller_client_1 = require("./clients/report-controller.client");
Object.defineProperty(exports, "ReportControllerClient", { enumerable: true, get: function () { return report_controller_client_1.ReportControllerClient; } });
var role_controller_client_1 = require("./clients/role-controller.client");
Object.defineProperty(exports, "RoleControllerClient", { enumerable: true, get: function () { return role_controller_client_1.RoleControllerClient; } });
var rpc_v_1_controller_client_1 = require("./clients/rpc-v-1-controller.client");
Object.defineProperty(exports, "RpcV1ControllerClient", { enumerable: true, get: function () { return rpc_v_1_controller_client_1.RpcV1ControllerClient; } });
var rpc_v_2_controller_client_1 = require("./clients/rpc-v-2-controller.client");
Object.defineProperty(exports, "RpcV2ControllerClient", { enumerable: true, get: function () { return rpc_v_2_controller_client_1.RpcV2ControllerClient; } });
var rule_chain_controller_client_1 = require("./clients/rule-chain-controller.client");
Object.defineProperty(exports, "RuleChainControllerClient", { enumerable: true, get: function () { return rule_chain_controller_client_1.RuleChainControllerClient; } });
var rule_engine_controller_client_1 = require("./clients/rule-engine-controller.client");
Object.defineProperty(exports, "RuleEngineControllerClient", { enumerable: true, get: function () { return rule_engine_controller_client_1.RuleEngineControllerClient; } });
var scheduler_event_controller_client_1 = require("./clients/scheduler-event-controller.client");
Object.defineProperty(exports, "SchedulerEventControllerClient", { enumerable: true, get: function () { return scheduler_event_controller_client_1.SchedulerEventControllerClient; } });
var self_registration_controller_client_1 = require("./clients/self-registration-controller.client");
Object.defineProperty(exports, "SelfRegistrationControllerClient", { enumerable: true, get: function () { return self_registration_controller_client_1.SelfRegistrationControllerClient; } });
var sign_up_controller_client_1 = require("./clients/sign-up-controller.client");
Object.defineProperty(exports, "SignUpControllerClient", { enumerable: true, get: function () { return sign_up_controller_client_1.SignUpControllerClient; } });
var solution_controller_client_1 = require("./clients/solution-controller.client");
Object.defineProperty(exports, "SolutionControllerClient", { enumerable: true, get: function () { return solution_controller_client_1.SolutionControllerClient; } });
var tb_resource_controller_client_1 = require("./clients/tb-resource-controller.client");
Object.defineProperty(exports, "TbResourceControllerClient", { enumerable: true, get: function () { return tb_resource_controller_client_1.TbResourceControllerClient; } });
var telemetry_controller_client_1 = require("./clients/telemetry-controller.client");
Object.defineProperty(exports, "TelemetryControllerClient", { enumerable: true, get: function () { return telemetry_controller_client_1.TelemetryControllerClient; } });
var tenant_controller_client_1 = require("./clients/tenant-controller.client");
Object.defineProperty(exports, "TenantControllerClient", { enumerable: true, get: function () { return tenant_controller_client_1.TenantControllerClient; } });
var tenant_profile_controller_client_1 = require("./clients/tenant-profile-controller.client");
Object.defineProperty(exports, "TenantProfileControllerClient", { enumerable: true, get: function () { return tenant_profile_controller_client_1.TenantProfileControllerClient; } });
var two_factor_auth_config_controller_client_1 = require("./clients/two-factor-auth-config-controller.client");
Object.defineProperty(exports, "TwoFactorAuthConfigControllerClient", { enumerable: true, get: function () { return two_factor_auth_config_controller_client_1.TwoFactorAuthConfigControllerClient; } });
var two_factor_auth_controller_client_1 = require("./clients/two-factor-auth-controller.client");
Object.defineProperty(exports, "TwoFactorAuthControllerClient", { enumerable: true, get: function () { return two_factor_auth_controller_client_1.TwoFactorAuthControllerClient; } });
var ui_settings_controller_client_1 = require("./clients/ui-settings-controller.client");
Object.defineProperty(exports, "UiSettingsControllerClient", { enumerable: true, get: function () { return ui_settings_controller_client_1.UiSettingsControllerClient; } });
var usage_info_controller_client_1 = require("./clients/usage-info-controller.client");
Object.defineProperty(exports, "UsageInfoControllerClient", { enumerable: true, get: function () { return usage_info_controller_client_1.UsageInfoControllerClient; } });
var user_controller_client_1 = require("./clients/user-controller.client");
Object.defineProperty(exports, "UserControllerClient", { enumerable: true, get: function () { return user_controller_client_1.UserControllerClient; } });
var user_permissions_controller_client_1 = require("./clients/user-permissions-controller.client");
Object.defineProperty(exports, "UserPermissionsControllerClient", { enumerable: true, get: function () { return user_permissions_controller_client_1.UserPermissionsControllerClient; } });
var white_labeling_controller_client_1 = require("./clients/white-labeling-controller.client");
Object.defineProperty(exports, "WhiteLabelingControllerClient", { enumerable: true, get: function () { return white_labeling_controller_client_1.WhiteLabelingControllerClient; } });
var widget_type_controller_client_1 = require("./clients/widget-type-controller.client");
Object.defineProperty(exports, "WidgetTypeControllerClient", { enumerable: true, get: function () { return widget_type_controller_client_1.WidgetTypeControllerClient; } });
var widgets_bundle_controller_client_1 = require("./clients/widgets-bundle-controller.client");
Object.defineProperty(exports, "WidgetsBundleControllerClient", { enumerable: true, get: function () { return widgets_bundle_controller_client_1.WidgetsBundleControllerClient; } });
