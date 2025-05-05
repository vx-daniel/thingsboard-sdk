import type { AxiosResponse } from "axios";
import { HttpClient, RequestParams } from "./http-client";
import { ActivateUserRequest, AdminSettings, Alarm, AlarmComment, AlarmInfo, Asset, AssetInfo, AssetProfile, AssetProfileInfo, AssetSearchQuery, BlobEntityWithCustomerInfo, BulkImportRequest, BulkImportResultAsset, ChangePasswordRequest, ComponentDescriptor, DeferredResultRepositorySettings, DeferredResultVoid, FeaturesInfo, JWTPair, JWTSettings, LicenseUsageInfo, LoginRequest, LoginResponse, PageDataAlarmCommentInfo, PageDataAlarmInfo, PageDataAssetInfo, PageDataAssetProfileInfo, PageDataAssetProfile, PageDataAsset, PageDataAuditLog, PageDataBlobEntityWithCustomerInfo, PageDataEntitySubtype, RepositorySettings, RepositorySettingsInfo, ResetPasswordEmailRequest, ResetPasswordRequest, Resource, SecuritySettings, SystemInfo, TestSmsRequest, UpdateMessage, User, UserPasswordPolicy, GetAutoCommitSettingsUsingGetData, SaveAutoCommitSettingsUsingPostPayload, SaveAutoCommitSettingsUsingPostData, CodeProcessingUrlUsingGetParams, GetAdminSettingsUsingGetParams, GetAlarmCommentsUsingGetParams, GetHighestAlarmSeverityUsingGetParams, GetHighestAlarmSeverityUsingGetData, GetAlarmTypesUsingGetParams, GetAlarmsUsingGetParams, GetAllAlarmsUsingGetParams, GetAlarmsV2UsingGetParams, GetAllAlarmsV2UsingGetParams, GetAssetTypesUsingGetData, GetAllAssetInfosUsingGetParams, FindByQueryUsingPostData, GetAssetsByIdsUsingGetParams, GetAssetsByIdsUsingGetData, SaveAssetUsingPostParams, GetCustomerAssetInfosUsingGetParams, GetCustomerAssetsUsingGetParams, GetAssetsByEntityGroupIdUsingGetParams, GetTenantAssetUsingGetParams, GetTenantAssetsUsingGetParams, GetUserAssetsUsingGetParams, GetAssetProfileNamesUsingGetParams, GetAssetProfileNamesUsingGetData, GetAssetProfileByIdUsingGetParams, GetAssetProfilesByIdsUsingGetParams, GetAssetProfilesByIdsUsingGetData, GetAssetProfileInfosUsingGetParams, GetAssetProfilesUsingGetParams, GetAuditLogsByCustomerIdUsingGetParams, GetAuditLogsByEntityIdUsingGetParams, GetAuditLogsByUserIdUsingGetParams, GetAuditLogsUsingGetParams, CheckActivateTokenUsingGetParams, ActivateUserUsingPostParams, CheckResetTokenUsingGetParams, GetBlobEntitiesByIdsUsingGetParams, GetBlobEntitiesByIdsUsingGetData, GetBlobEntitiesUsingGetParams, GetComponentDescriptorsByTypeUsingGetParams, GetComponentDescriptorsByTypeUsingGetData, GetComponentDescriptorsByTypesUsingGetParams, GetComponentDescriptorsByTypesUsingGetData } from "./data-contracts";
export declare class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
* @description Get the auto commit settings object. Available for users with 'TENANT_ADMIN' authority.
*
* @tags admin-controller
* @name GetAutoCommitSettingsUsingGet
* @summary Get auto commit settings (getAutoCommitSettings)
* @request GET:/api/admin/autoCommitSettings
* @secure
* @response `200` `GetAutoCommitSettingsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getAutoCommitSettingsUsingGet: (params?: RequestParams) => Promise<AxiosResponse<GetAutoCommitSettingsUsingGetData, any>>;
    /**
* @description Creates or Updates the auto commit settings object. Available for users with 'TENANT_ADMIN' authority.
*
* @tags admin-controller
* @name SaveAutoCommitSettingsUsingPost
* @summary Creates or Updates the auto commit settings (saveAutoCommitSettings)
* @request POST:/api/admin/autoCommitSettings
* @secure
* @response `200` `SaveAutoCommitSettingsUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    saveAutoCommitSettingsUsingPost: (data: SaveAutoCommitSettingsUsingPostPayload, params?: RequestParams) => Promise<AxiosResponse<SaveAutoCommitSettingsUsingPostData, any>>;
    /**
* @description Deletes the auto commit settings. Available for users with 'TENANT_ADMIN' authority.
*
* @tags admin-controller
* @name DeleteAutoCommitSettingsUsingDelete
* @summary Delete auto commit settings (deleteAutoCommitSettings)
* @request DELETE:/api/admin/autoCommitSettings
* @secure
* @response `200` `DeleteAutoCommitSettingsUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    deleteAutoCommitSettingsUsingDelete: (params?: RequestParams) => Promise<AxiosResponse<any, any>>;
    /**
* @description Check whether the auto commit settings exists. Available for users with 'TENANT_ADMIN' authority.
*
* @tags admin-controller
* @name AutoCommitSettingsExistsUsingGet
* @summary Check auto commit settings exists (autoCommitSettingsExists)
* @request GET:/api/admin/autoCommitSettings/exists
* @secure
* @response `200` `AutoCommitSettingsExistsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `GetFeaturesInfoUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `GetJwtSettingsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `SaveJwtSettingsUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `GetLicenseUsageInfoUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `GetAuthorizationUrlUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `CodeProcessingUrlUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    codeProcessingUrlUsingGet: (query: CodeProcessingUrlUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<any, any>>;
    /**
* @description Returns the URL enclosed in double quotes. After successful authentication with OAuth2 provider and user consent for requested scope, it makes a redirect to this path so that the platform can do further log in processing and generating access tokens. Available for users with 'SYS_ADMIN' authority.
*
* @tags admin-controller
* @name GetMailProcessingUrlUsingGet
* @summary Get OAuth2 log in processing URL (getMailProcessingUrl)
* @request GET:/api/admin/mail/oauth2/loginProcessingUrl
* @secure
* @response `200` `GetMailProcessingUrlUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `GetRepositorySettingsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `SaveRepositorySettingsUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `DeleteRepositorySettingsUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `CheckRepositoryAccessUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `RepositorySettingsExistsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `GetRepositorySettingsInfoUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `GetSecuritySettingsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `SaveSecuritySettingsUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `SaveAdminSettingsUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `SendTestMailUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    sendTestMailUsingPost: (data: AdminSettings, params?: RequestParams) => Promise<AxiosResponse<any, any>>;
    /**
* @description Attempts to send test sms to the System Administrator User using SMS Settings and phone number provided as a parameters of the request. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority. Security check is performed to verify that the user has 'READ' permission for the 'ADMIN_SETTINGS' (for 'SYS_ADMIN' authority) or 'WHITE_LABELING' (for 'TENANT_ADMIN' authority) resource.
*
* @tags admin-controller
* @name SendTestSmsUsingPost
* @summary Send test sms (sendTestMail)
* @request POST:/api/admin/settings/testSms
* @secure
* @response `200` `SendTestSmsUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    sendTestSmsUsingPost: (data: TestSmsRequest, params?: RequestParams) => Promise<AxiosResponse<any, any>>;
    /**
* @description Get the Administration Settings object using specified string key. Referencing non-existing key will cause an error. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority. Security check is performed to verify that the user has 'READ' permission for the 'ADMIN_SETTINGS' (for 'SYS_ADMIN' authority) or 'WHITE_LABELING' (for 'TENANT_ADMIN' authority) resource.
*
* @tags admin-controller
* @name GetAdminSettingsUsingGet
* @summary Get the Administration Settings object using key (getAdminSettings)
* @request GET:/api/admin/settings/{key}{?systemByDefault}
* @secure
* @response `200` `GetAdminSettingsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getAdminSettingsUsingGet: ({ key, ...query }: GetAdminSettingsUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<AdminSettings, any>>;
    /**
* @description Get main information about system. Available for users with 'SYS_ADMIN' authority.
*
* @tags admin-controller
* @name GetSystemInfoUsingGet
* @summary Get system info (getSystemInfo)
* @request GET:/api/admin/systemInfo
* @secure
* @response `200` `GetSystemInfoUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `CheckUpdatesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    checkUpdatesUsingGet: (params?: RequestParams) => Promise<AxiosResponse<UpdateMessage, any>>;
    /**
* @description Login method used to authenticate user and get JWT token data. Value of the response **token** field can be used as **X-Authorization** header value: `X-Authorization: Bearer $JWT_TOKEN_VALUE`.
*
* @tags login-endpoint
* @name LoginPost
* @summary Login method to get user JWT token data
* @request POST:/api/auth/login
* @response `200` `LoginPostData` OK
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `401` `ThingsboardCredentialsExpiredResponse` Unauthorized (**Expired credentials**)
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
* @response `200` `SaveAlarmCommentUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `DeleteAlarmCommentUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    deleteAlarmCommentUsingDelete: (alarmId: string, commentId: string, params?: RequestParams) => Promise<AxiosResponse<any, any>>;
    /**
* @description Returns a page of alarm comments for specified alarm. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags alarm-comment-controller
* @name GetAlarmCommentsUsingGet
* @summary Get Alarm comments (getAlarmComments)
* @request GET:/api/alarm/{alarmId}/comment{?page,pageSize,sortOrder,sortProperty}
* @secure
* @response `200` `GetAlarmCommentsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getAlarmCommentsUsingGet: ({ alarmId, ...query }: GetAlarmCommentsUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<PageDataAlarmCommentInfo, any>>;
    /**
* @description Creates or Updates the Alarm. When creating alarm, platform generates Alarm Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created Alarm id will be present in the response. Specify existing Alarm id to update the alarm. Referencing non-existing Alarm Id will cause 'Not Found' error. Platform also deduplicate the alarms based on the entity id of originator and alarm 'type'. For example, if the user or system component create the alarm with the type 'HighTemperature' for device 'Device A' the new active alarm is created. If the user tries to create 'HighTemperature' alarm for the same device again, the previous alarm will be updated (the 'end_ts' will be set to current timestamp). If the user clears the alarm (see 'Clear Alarm(clearAlarm)'), than new alarm with the same type and same device may be created. Remove 'id', 'tenantId' and optionally 'customerId' from the request body example (below) to create new Alarm entity. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
*
* @tags alarm-controller
* @name SaveAlarmUsingPost
* @summary Create or Update Alarm (saveAlarm)
* @request POST:/api/alarm
* @secure
* @response `200` `SaveAlarmUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `GetHighestAlarmSeverityUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getHighestAlarmSeverityUsingGet: ({ entityType, entityId, ...query }: GetHighestAlarmSeverityUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<GetHighestAlarmSeverityUsingGetData, any>>;
    /**
* @description Fetch the Alarm Info object based on the provided Alarm Id. Alarm Info is an extension of the default Alarm object that also contains name of the alarm originator. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags alarm-controller
* @name GetAlarmInfoByIdUsingGet
* @summary Get Alarm Info (getAlarmInfoById)
* @request GET:/api/alarm/info/{alarmId}
* @secure
* @response `200` `GetAlarmInfoByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `GetAlarmTypesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getAlarmTypesUsingGet: (query: GetAlarmTypesUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<PageDataEntitySubtype, any>>;
    /**
* @description Fetch the Alarm object based on the provided Alarm Id. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags alarm-controller
* @name GetAlarmByIdUsingGet
* @summary Get Alarm (getAlarmById)
* @request GET:/api/alarm/{alarmId}
* @secure
* @response `200` `GetAlarmByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `DeleteAlarmUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `AckAlarmUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `UnassignAlarmUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `AssignAlarmUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `ClearAlarmUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `GetAlarmsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getAlarmsUsingGet: ({ entityType, entityId, ...query }: GetAlarmsUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<PageDataAlarmInfo, any>>;
    /**
* @description Returns a page of alarms that belongs to the current user owner. If the user has the authority of 'Tenant Administrator', the server returns alarms that belongs to the tenant of current user. If the user has the authority of 'Customer User', the server returns alarms that belongs to the customer of current user. Specifying both parameters 'searchStatus' and 'status' at the same time will cause an error. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags alarm-controller
* @name GetAllAlarmsUsingGet
* @summary Get All Alarms (getAllAlarms)
* @request GET:/api/alarms{?assigneeId,endTime,fetchOriginator,page,pageSize,searchStatus,sortOrder,sortProperty,startTime,status,textSearch}
* @secure
* @response `200` `GetAllAlarmsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getAllAlarmsUsingGet: (query: GetAllAlarmsUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<PageDataAlarmInfo, any>>;
    /**
* @description Returns a page of alarms for the selected entity. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags alarm-controller
* @name GetAlarmsV2UsingGet
* @summary Get Alarms (getAlarmsV2)
* @request GET:/api/v2/alarm/{entityType}/{entityId}{?assigneeId,endTime,page,pageSize,severityList,sortOrder,sortProperty,startTime,statusList,textSearch,typeList}
* @secure
* @response `200` `GetAlarmsV2UsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getAlarmsV2UsingGet: ({ entityType, entityId, ...query }: GetAlarmsV2UsingGetParams, params?: RequestParams) => Promise<AxiosResponse<PageDataAlarmInfo, any>>;
    /**
* @description Returns a page of alarms that belongs to the current user owner. If the user has the authority of 'Tenant Administrator', the server returns alarms that belongs to the tenant of current user. If the user has the authority of 'Customer User', the server returns alarms that belongs to the customer of current user. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags alarm-controller
* @name GetAllAlarmsV2UsingGet
* @summary Get All Alarms (getAllAlarmsV2)
* @request GET:/api/v2/alarms{?assigneeId,endTime,page,pageSize,severityList,sortOrder,sortProperty,startTime,statusList,textSearch,typeList}
* @secure
* @response `200` `GetAllAlarmsV2UsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getAllAlarmsV2UsingGet: (query: GetAllAlarmsV2UsingGetParams, params?: RequestParams) => Promise<AxiosResponse<PageDataAlarmInfo, any>>;
    /**
* @description There's an ability to import the bulk of assets using the only .csv file. Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
*
* @tags asset-controller
* @name ProcessAssetBulkImportUsingPost
* @summary Import the bulk of assets (processAssetsBulkImport)
* @request POST:/api/asset/bulk_import
* @secure
* @response `200` `ProcessAssetBulkImportUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `GetAssetInfoByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `GetAssetTypesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getAssetTypesUsingGet: (params?: RequestParams) => Promise<AxiosResponse<GetAssetTypesUsingGetData, any>>;
    /**
* @description Fetch the Asset object based on the provided Asset Id. If the user has the authority of 'Tenant Administrator', the server checks that the asset is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the asset is assigned to the same customer. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags asset-controller
* @name GetAssetByIdUsingGet
* @summary Get Asset (getAssetById)
* @request GET:/api/asset/{assetId}
* @secure
* @response `200` `GetAssetByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `DeleteAssetUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    deleteAssetUsingDelete: (assetId: string, params?: RequestParams) => Promise<AxiosResponse<any, any>>;
    /**
* @description Returns a page of asset info objects owned by the tenant or the customer of a current user. Asset Info is an extension of the default Asset object that contains information about the owner name.  You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags asset-controller
* @name GetAllAssetInfosUsingGet
* @summary Get All Asset Infos for current user (getAllAssetInfos)
* @request GET:/api/assetInfos/all{?assetProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetAllAssetInfosUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getAllAssetInfosUsingGet: (query: GetAllAssetInfosUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<PageDataAssetInfo, any>>;
    /**
* @description Returns all assets that are related to the specific entity. The entity id, relation type, asset types, depth of the search, and other query parameters defined using complex 'AssetSearchQuery' object. See 'Model' tab of the Parameters for more info. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags asset-controller
* @name FindByQueryUsingPost
* @summary Find related assets (findByQuery)
* @request POST:/api/assets
* @secure
* @response `200` `FindByQueryUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    findByQueryUsingPost: (data: AssetSearchQuery, params?: RequestParams) => Promise<AxiosResponse<FindByQueryUsingPostData, any>>;
    /**
* @description Requested assets must be owned by tenant or assigned to customer which user is performing the request. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags asset-controller
* @name GetAssetsByIdsUsingGet
* @summary Get Assets By Ids (getAssetsByIds)
* @request GET:/api/assets{?assetIds}
* @secure
* @response `200` `GetAssetsByIdsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getAssetsByIdsUsingGet: (query: GetAssetsByIdsUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<GetAssetsByIdsUsingGetData, any>>;
    /**
* @description Creates or Updates the Asset. When creating asset, platform generates Asset Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created Asset id will be present in the response. Specify existing Asset id to update the asset. Referencing non-existing Asset Id will cause 'Not Found' error. Remove 'id', 'tenantId' and optionally 'customerId' from the request body example (below) to create new Asset entity. Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
*
* @tags asset-controller
* @name SaveAssetUsingPost
* @summary Create Or Update Asset (saveAsset)
* @request POST:/api/asset{?entityGroupId,entityGroupIds}
* @secure
* @response `200` `SaveAssetUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    saveAssetUsingPost: (query: SaveAssetUsingPostParams, data: Asset, params?: RequestParams) => Promise<AxiosResponse<Asset, any>>;
    /**
* @description Returns a page of asset info objects owned by the specified customer. Asset Info is an extension of the default Asset object that contains information about the owner name.  You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags asset-controller
* @name GetCustomerAssetInfosUsingGet
* @summary Get Customer Asset Infos (getCustomerAssetInfos)
* @request GET:/api/customer/{customerId}/assetInfos{?assetProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetCustomerAssetInfosUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getCustomerAssetInfosUsingGet: ({ customerId, ...query }: GetCustomerAssetInfosUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<PageDataAssetInfo, any>>;
    /**
* @description Returns a page of assets objects owned by customer. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags asset-controller
* @name GetCustomerAssetsUsingGet
* @summary Get Customer Assets (getCustomerAssets)
* @request GET:/api/customer/{customerId}/assets{?page,pageSize,sortOrder,sortProperty,textSearch,type}
* @secure
* @response `200` `GetCustomerAssetsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getCustomerAssetsUsingGet: ({ customerId, ...query }: GetCustomerAssetsUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<PageDataAsset, any>>;
    /**
* @description Returns a page of asset objects that belongs to specified Entity Group Id. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags asset-controller
* @name GetAssetsByEntityGroupIdUsingGet
* @summary Get assets by Entity Group Id (getAssetsByEntityGroupId)
* @request GET:/api/entityGroup/{entityGroupId}/assets{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetAssetsByEntityGroupIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getAssetsByEntityGroupIdUsingGet: ({ entityGroupId, ...query }: GetAssetsByEntityGroupIdUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<PageDataAsset, any>>;
    /**
* @description Requested asset must be owned by tenant that the user belongs to. Asset name is an unique property of asset. So it can be used to identify the asset. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags asset-controller
* @name GetTenantAssetUsingGet
* @summary Get Tenant Asset (getTenantAsset)
* @request GET:/api/tenant/assets{?assetName}
* @secure
* @response `200` `GetTenantAssetUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getTenantAssetUsingGet: (query: GetTenantAssetUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<Asset, any>>;
    /**
* @description Returns a page of assets owned by tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags asset-controller
* @name GetTenantAssetsUsingGet
* @summary Get Tenant Assets (getTenantAssets)
* @request GET:/api/tenant/assets{?page,pageSize,sortOrder,sortProperty,textSearch,type}
* @secure
* @response `200` `GetTenantAssetsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getTenantAssetsUsingGet: (query: GetTenantAssetsUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<PageDataAsset, any>>;
    /**
* @description Returns a page of assets objects available for the current user. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Asset Info is an extension of the default Asset object that contains information about the owner name. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags asset-controller
* @name GetUserAssetsUsingGet
* @summary Get Assets (getUserAssets)
* @request GET:/api/user/assets{?assetProfileId,page,pageSize,sortOrder,sortProperty,textSearch,type}
* @secure
* @response `200` `GetUserAssetsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getUserAssetsUsingGet: (query: GetUserAssetsUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<PageDataAsset, any>>;
    /**
* @description Create or update the Asset Profile. When creating asset profile, platform generates asset profile id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created asset profile id will be present in the response. Specify existing asset profile id to update the asset profile. Referencing non-existing asset profile Id will cause 'Not Found' error. Asset profile name is unique in the scope of tenant. Only one 'default' asset profile may exist in scope of tenant. Remove 'id', 'tenantId' from the request body example (below) to create new Asset Profile entity. Available for users with 'TENANT_ADMIN' authority.
*
* @tags asset-profile-controller
* @name SaveAssetProfileUsingPost
* @summary Create Or Update Asset Profile (saveAssetProfile)
* @request POST:/api/assetProfile
* @secure
* @response `200` `SaveAssetProfileUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `GetAssetProfileNamesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getAssetProfileNamesUsingGet: (query: GetAssetProfileNamesUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<GetAssetProfileNamesUsingGetData, any>>;
    /**
* @description Deletes the asset profile. Referencing non-existing asset profile Id will cause an error. Can't delete the asset profile if it is referenced by existing assets. Available for users with 'TENANT_ADMIN' authority.
*
* @tags asset-profile-controller
* @name DeleteAssetProfileUsingDelete
* @summary Delete asset profile (deleteAssetProfile)
* @request DELETE:/api/assetProfile/{assetProfileId}
* @secure
* @response `200` `DeleteAssetProfileUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    deleteAssetProfileUsingDelete: (assetProfileId: string, params?: RequestParams) => Promise<AxiosResponse<any, any>>;
    /**
* @description Marks asset profile as default within a tenant scope. Available for users with 'TENANT_ADMIN' authority.
*
* @tags asset-profile-controller
* @name SetDefaultAssetProfileUsingPost
* @summary Make Asset Profile Default (setDefaultAssetProfile)
* @request POST:/api/assetProfile/{assetProfileId}/default
* @secure
* @response `200` `SetDefaultAssetProfileUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `GetAssetProfileByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getAssetProfileByIdUsingGet: ({ assetProfileId, ...query }: GetAssetProfileByIdUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<AssetProfile, any>>;
    /**
* @description Fetch the Default Asset Profile Info object. Asset Profile Info is a lightweight object that includes main information about Asset Profile. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags asset-profile-controller
* @name GetDefaultAssetProfileInfoUsingGet
* @summary Get Default Asset Profile (getDefaultAssetProfileInfo)
* @request GET:/api/assetProfileInfo/default
* @secure
* @response `200` `GetDefaultAssetProfileInfoUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `GetAssetProfileInfoByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `GetAssetProfilesByIdsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getAssetProfilesByIdsUsingGet: (query: GetAssetProfilesByIdsUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<GetAssetProfilesByIdsUsingGetData, any>>;
    /**
* @description Returns a page of asset profile info objects owned by tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Asset Profile Info is a lightweight object that includes main information about Asset Profile. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags asset-profile-controller
* @name GetAssetProfileInfosUsingGet
* @summary Get Asset Profile infos (getAssetProfileInfos)
* @request GET:/api/assetProfileInfos{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetAssetProfileInfosUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getAssetProfileInfosUsingGet: (query: GetAssetProfileInfosUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<PageDataAssetProfileInfo, any>>;
    /**
* @description Returns a page of asset profile objects owned by tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' authority.
*
* @tags asset-profile-controller
* @name GetAssetProfilesUsingGet
* @summary Get Asset Profiles (getAssetProfiles)
* @request GET:/api/assetProfiles{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetAssetProfilesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getAssetProfilesUsingGet: (query: GetAssetProfilesUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<PageDataAssetProfile, any>>;
    /**
* @description Returns a page of audit logs related to the targeted customer entities (devices, assets, etc.), and users actions (login, logout, etc.) that belong to this customer. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the audit logs.
*
* @tags audit-log-controller
* @name GetAuditLogsByCustomerIdUsingGet
* @summary Get audit logs by customer id (getAuditLogsByCustomerId)
* @request GET:/api/audit/logs/customer/{customerId}{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}
* @secure
* @response `200` `GetAuditLogsByCustomerIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getAuditLogsByCustomerIdUsingGet: ({ customerId, ...query }: GetAuditLogsByCustomerIdUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<PageDataAuditLog, any>>;
    /**
* @description Returns a page of audit logs related to the actions on the targeted entity. Basically, this API call is used to get the full lifecycle of some specific entity. For example to see when a device was created, updated, assigned to some customer, or even deleted from the system. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the audit logs.
*
* @tags audit-log-controller
* @name GetAuditLogsByEntityIdUsingGet
* @summary Get audit logs by entity id (getAuditLogsByEntityId)
* @request GET:/api/audit/logs/entity/{entityType}/{entityId}{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}
* @secure
* @response `200` `GetAuditLogsByEntityIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getAuditLogsByEntityIdUsingGet: ({ entityType, entityId, ...query }: GetAuditLogsByEntityIdUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<PageDataAuditLog, any>>;
    /**
* @description Returns a page of audit logs related to the actions of targeted user. For example, RPC call to a particular device, or alarm acknowledgment for a specific device, etc. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the audit logs.
*
* @tags audit-log-controller
* @name GetAuditLogsByUserIdUsingGet
* @summary Get audit logs by user id (getAuditLogsByUserId)
* @request GET:/api/audit/logs/user/{userId}{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}
* @secure
* @response `200` `GetAuditLogsByUserIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getAuditLogsByUserIdUsingGet: ({ userId, ...query }: GetAuditLogsByUserIdUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<PageDataAuditLog, any>>;
    /**
* @description Returns a page of audit logs related to all entities in the scope of the current user's Tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the audit logs.
*
* @tags audit-log-controller
* @name GetAuditLogsUsingGet
* @summary Get all audit logs (getAuditLogs)
* @request GET:/api/audit/logs{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}
* @secure
* @response `200` `GetAuditLogsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getAuditLogsUsingGet: (query: GetAuditLogsUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<PageDataAuditLog, any>>;
    /**
* @description Change the password for the User which credentials are used to perform this REST API call. Be aware that previously generated [JWT](https://jwt.io/) tokens will be still valid until they expire.
*
* @tags auth-controller
* @name ChangePasswordUsingPost
* @summary Change password for current User (changePassword)
* @request POST:/api/auth/changePassword
* @secure
* @response `200` `ChangePasswordUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `LogoutUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    logoutUsingPost: (params?: RequestParams) => Promise<AxiosResponse<any, any>>;
    /**
* @description Get the information about the User which credentials are used to perform this REST API call.
*
* @tags auth-controller
* @name GetUserUsingGet
* @summary Get current User (getUser)
* @request GET:/api/auth/user
* @secure
* @response `200` `GetUserUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getUserUsingGet: (params?: RequestParams) => Promise<AxiosResponse<User, any>>;
    /**
* @description Checks the activation token and forwards user to 'Create Password' page. If token is valid, returns '303 See Other' (redirect) response code with the correct address of 'Create Password' page and same 'activateToken' specified in the URL parameters. If token is not valid, returns '409 Conflict'.
*
* @tags auth-controller
* @name CheckActivateTokenUsingGet
* @summary Check Activate User Token (checkActivateToken)
* @request GET:/api/noauth/activate{?activateToken}
* @response `200` `CheckActivateTokenUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    checkActivateTokenUsingGet: (query: CheckActivateTokenUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<string, any>>;
    /**
* @description Checks the activation token and updates corresponding user password in the database. Now the user may start using his password to login. The response already contains the [JWT](https://jwt.io) activation and refresh tokens, to simplify the user activation flow and avoid asking user to input password again after activation. If token is valid, returns the object that contains [JWT](https://jwt.io/) access and refresh tokens. If token is not valid, returns '404 Bad Request'.
*
* @tags auth-controller
* @name ActivateUserUsingPost
* @summary Activate User
* @request POST:/api/noauth/activate{?sendActivationMail}
* @response `200` `ActivateUserUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    activateUserUsingPost: (query: ActivateUserUsingPostParams, data: ActivateUserRequest, params?: RequestParams) => Promise<AxiosResponse<JWTPair, any>>;
    /**
* @description Checks the password reset token and updates the password. If token is valid, returns the object that contains [JWT](https://jwt.io/) access and refresh tokens. If token is not valid, returns '404 Bad Request'.
*
* @tags auth-controller
* @name ResetPasswordUsingPost
* @summary Reset password (resetPassword)
* @request POST:/api/noauth/resetPassword
* @response `200` `ResetPasswordUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    resetPasswordUsingPost: (data: ResetPasswordRequest, params?: RequestParams) => Promise<AxiosResponse<JWTPair, any>>;
    /**
* @description Request to send the reset password email if the user with specified email address is present in the database. Always return '200 OK' status for security purposes.
*
* @tags auth-controller
* @name RequestResetPasswordByEmailUsingPost
* @summary Request reset password email (requestResetPasswordByEmail)
* @request POST:/api/noauth/resetPasswordByEmail
* @response `200` `RequestResetPasswordByEmailUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    requestResetPasswordByEmailUsingPost: (data: ResetPasswordEmailRequest, params?: RequestParams) => Promise<AxiosResponse<any, any>>;
    /**
* @description Checks the password reset token and forwards user to 'Reset Password' page. If token is valid, returns '303 See Other' (redirect) response code with the correct address of 'Reset Password' page and same 'resetToken' specified in the URL parameters. If token is not valid, returns '409 Conflict'.
*
* @tags auth-controller
* @name CheckResetTokenUsingGet
* @summary Check password reset token (checkResetToken)
* @request GET:/api/noauth/resetPassword{?resetToken}
* @response `200` `CheckResetTokenUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    checkResetTokenUsingGet: (query: CheckResetTokenUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<string, any>>;
    /**
* @description API call to get the password policy for the password validation form(s).
*
* @tags auth-controller
* @name GetUserPasswordPolicyUsingGet
* @summary Get the current User password policy (getUserPasswordPolicy)
* @request GET:/api/noauth/userPasswordPolicy
* @response `200` `GetUserPasswordPolicyUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `GetBlobEntitiesByIdsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getBlobEntitiesByIdsUsingGet: (query: GetBlobEntitiesByIdsUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<GetBlobEntitiesByIdsUsingGetData, any>>;
    /**
* @description Returns a page of BlobEntityWithCustomerInfo object that are available for the current user. The platform uses Blob(binary large object) entities in the reporting feature, in order to store Dashboard states snapshots of different content types in base64 format. BlobEntityWithCustomerInfo represents an object that contains base info about the blob entity(name, type, contentType, etc.) and info about the customer(customerTitle, customerIsPublic) of the user that scheduled generation of the dashboard report. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags blob-entity-controller
* @name GetBlobEntitiesUsingGet
* @summary Get Blob Entities (getBlobEntities)
* @request GET:/api/blobEntities{?endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch,type}
* @secure
* @response `200` `GetBlobEntitiesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getBlobEntitiesUsingGet: (query: GetBlobEntitiesUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<PageDataBlobEntityWithCustomerInfo, any>>;
    /**
* @description Fetch the BlobEntityWithCustomerInfo object based on the provided Blob entity Id. The platform uses Blob(binary large object) entities in the reporting feature, in order to store Dashboard states snapshots of different content types in base64 format. BlobEntityWithCustomerInfo represents an object that contains base info about the blob entity(name, type, contentType, etc.) and info about the customer(customerTitle, customerIsPublic) of the user that scheduled generation of the dashboard report. Referencing non-existing Blob entity Id will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags blob-entity-controller
* @name GetBlobEntityInfoByIdUsingGet
* @summary Get Blob Entity With Customer Info (getBlobEntityInfoById)
* @request GET:/api/blobEntity/info/{blobEntityId}
* @secure
* @response `200` `GetBlobEntityInfoByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `DeleteBlobEntityUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    deleteBlobEntityUsingDelete: (blobEntityId: string, params?: RequestParams) => Promise<AxiosResponse<any, any>>;
    /**
* @description Download report file based on the provided Blob entity Id. Referencing non-existing Blob entity Id will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags blob-entity-controller
* @name DownloadBlobEntityUsingGet
* @summary Download Blob Entity By Id (downloadBlobEntity)
* @request GET:/api/blobEntity/{blobEntityId}/download
* @secure
* @response `200` `DownloadBlobEntityUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `GetComponentDescriptorByClazzUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
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
* @response `200` `GetComponentDescriptorsByTypeUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getComponentDescriptorsByTypeUsingGet: ({ componentType, ...query }: GetComponentDescriptorsByTypeUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<GetComponentDescriptorsByTypeUsingGetData, any>>;
    /**
* @description Gets the Component Descriptors using coma separated list of rule node types and optional rule chain type request parameters. Each Component Descriptor represents configuration of specific rule node (e.g. 'Save Timeseries' or 'Send Email'.). The Component Descriptors are used by the rule chain Web UI to build the configuration forms for the rule nodes. The Component Descriptors are discovered at runtime by scanning the class path and searching for @RuleNode annotation. Once discovered, the up to date list of descriptors is persisted to the database. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags component-descriptor-controller
* @name GetComponentDescriptorsByTypesUsingGet
* @summary Get Component Descriptors (getComponentDescriptorsByTypes)
* @request GET:/api/components{?componentTypes,ruleChainType}
* @secure
* @response `200` `GetComponentDescriptorsByTypesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
    getComponentDescriptorsByTypesUsingGet: (query: GetComponentDescriptorsByTypesUsingGetParams, params?: RequestParams) => Promise<AxiosResponse<GetComponentDescriptorsByTypesUsingGetData, any>>;
    n: any;
    n: any;
    (): any;
    (): any;
    converter: any;
}
