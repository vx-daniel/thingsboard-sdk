"use strict";
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const http_client_1 = require("./http-client");
let Api = (() => {
    var _a;
    let _classSuper = http_client_1.HttpClient;
    let _converter_decorators;
    let _converter_initializers = [];
    let _converter_extraInitializers = [];
    return _a = class Api extends _classSuper {
            *() { }
            constructor() {
                super(...arguments);
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
                this.getAutoCommitSettingsUsingGet = (params = {}) => this.request({
                    path: `/api/admin/autoCommitSettings`,
                    method: 'GET',
                    secure: true, format: "json", ...params,
                });
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
                this.saveAutoCommitSettingsUsingPost = (data, params = {}) => this.request({
                    path: `/api/admin/autoCommitSettings`,
                    method: 'POST',
                    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
                });
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
                this.deleteAutoCommitSettingsUsingDelete = (params = {}) => this.request({
                    path: `/api/admin/autoCommitSettings`,
                    method: 'DELETE',
                    secure: true, ...params,
                });
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
                this.autoCommitSettingsExistsUsingGet = (params = {}) => this.request({
                    path: `/api/admin/autoCommitSettings/exists`,
                    method: 'GET',
                    secure: true, format: "json", ...params,
                });
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
                this.getFeaturesInfoUsingGet = (params = {}) => this.request({
                    path: `/api/admin/featuresInfo`,
                    method: 'GET',
                    secure: true, format: "json", ...params,
                });
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
                this.getJwtSettingsUsingGet = (params = {}) => this.request({
                    path: `/api/admin/jwtSettings`,
                    method: 'GET',
                    secure: true, format: "json", ...params,
                });
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
                this.saveJwtSettingsUsingPost = (data, params = {}) => this.request({
                    path: `/api/admin/jwtSettings`,
                    method: 'POST',
                    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
                });
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
                this.getLicenseUsageInfoUsingGet = (params = {}) => this.request({
                    path: `/api/admin/licenseUsageInfo`,
                    method: 'GET',
                    secure: true, format: "json", ...params,
                });
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
                this.getAuthorizationUrlUsingGet = (params = {}) => this.request({
                    path: `/api/admin/mail/oauth2/authorize`,
                    method: 'GET',
                    secure: true, ...params,
                });
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
                this.codeProcessingUrlUsingGet = (query, params = {}) => this.request({
                    path: `/api/admin/mail/oauth2/code`,
                    method: 'GET',
                    query: query, secure: true, ...params,
                });
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
                this.getMailProcessingUrlUsingGet = (params = {}) => this.request({
                    path: `/api/admin/mail/oauth2/loginProcessingUrl`,
                    method: 'GET',
                    secure: true, format: "json", ...params,
                });
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
                this.getRepositorySettingsUsingGet = (params = {}) => this.request({
                    path: `/api/admin/repositorySettings`,
                    method: 'GET',
                    secure: true, format: "json", ...params,
                });
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
                this.saveRepositorySettingsUsingPost = (data, params = {}) => this.request({
                    path: `/api/admin/repositorySettings`,
                    method: 'POST',
                    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
                });
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
                this.deleteRepositorySettingsUsingDelete = (params = {}) => this.request({
                    path: `/api/admin/repositorySettings`,
                    method: 'DELETE',
                    secure: true, format: "json", ...params,
                });
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
                this.checkRepositoryAccessUsingPost = (data, params = {}) => this.request({
                    path: `/api/admin/repositorySettings/checkAccess`,
                    method: 'POST',
                    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
                });
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
                this.repositorySettingsExistsUsingGet = (params = {}) => this.request({
                    path: `/api/admin/repositorySettings/exists`,
                    method: 'GET',
                    secure: true, format: "json", ...params,
                });
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
                this.getRepositorySettingsInfoUsingGet = (params = {}) => this.request({
                    path: `/api/admin/repositorySettings/info`,
                    method: 'GET',
                    secure: true, format: "json", ...params,
                });
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
                this.getSecuritySettingsUsingGet = (params = {}) => this.request({
                    path: `/api/admin/securitySettings`,
                    method: 'GET',
                    secure: true, format: "json", ...params,
                });
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
                this.saveSecuritySettingsUsingPost = (data, params = {}) => this.request({
                    path: `/api/admin/securitySettings`,
                    method: 'POST',
                    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
                });
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
                this.saveAdminSettingsUsingPost = (data, params = {}) => this.request({
                    path: `/api/admin/settings`,
                    method: 'POST',
                    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
                });
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
                this.sendTestMailUsingPost = (data, params = {}) => this.request({
                    path: `/api/admin/settings/testMail`,
                    method: 'POST',
                    body: data, secure: true, type: http_client_1.ContentType.Json, ...params,
                });
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
                this.sendTestSmsUsingPost = (data, params = {}) => this.request({
                    path: `/api/admin/settings/testSms`,
                    method: 'POST',
                    body: data, secure: true, type: http_client_1.ContentType.Json, ...params,
                });
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
                this.getAdminSettingsUsingGet = ({ key, ...query }, params = {}) => this.request({
                    path: `/api/admin/settings/${key}`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.getSystemInfoUsingGet = (params = {}) => this.request({
                    path: `/api/admin/systemInfo`,
                    method: 'GET',
                    secure: true, format: "json", ...params,
                });
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
                this.checkUpdatesUsingGet = (params = {}) => this.request({
                    path: `/api/admin/updates`,
                    method: 'GET',
                    secure: true, format: "json", ...params,
                });
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
                this.loginPost = (data, params = {}) => this.request({
                    path: `/api/auth/login`,
                    method: 'POST',
                    body: data, type: http_client_1.ContentType.Json, format: "json", ...params,
                });
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
                this.saveAlarmCommentUsingPost = (alarmId, data, params = {}) => this.request({
                    path: `/api/alarm/${alarmId}/comment`,
                    method: 'POST',
                    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
                });
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
                this.deleteAlarmCommentUsingDelete = (alarmId, commentId, params = {}) => this.request({
                    path: `/api/alarm/${alarmId}/comment/${commentId}`,
                    method: 'DELETE',
                    secure: true, ...params,
                });
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
                this.getAlarmCommentsUsingGet = ({ alarmId, ...query }, params = {}) => this.request({
                    path: `/api/alarm/${alarmId}/comment`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.saveAlarmUsingPost = (data, params = {}) => this.request({
                    path: `/api/alarm`,
                    method: 'POST',
                    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
                });
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
                this.getHighestAlarmSeverityUsingGet = ({ entityType, entityId, ...query }, params = {}) => this.request({
                    path: `/api/alarm/highestSeverity/${entityType}/${entityId}`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.getAlarmInfoByIdUsingGet = (alarmId, params = {}) => this.request({
                    path: `/api/alarm/info/${alarmId}`,
                    method: 'GET',
                    secure: true, format: "json", ...params,
                });
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
                this.getAlarmTypesUsingGet = (query, params = {}) => this.request({
                    path: `/api/alarm/types`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.getAlarmByIdUsingGet = (alarmId, params = {}) => this.request({
                    path: `/api/alarm/${alarmId}`,
                    method: 'GET',
                    secure: true, format: "json", ...params,
                });
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
                this.deleteAlarmUsingDelete = (alarmId, params = {}) => this.request({
                    path: `/api/alarm/${alarmId}`,
                    method: 'DELETE',
                    secure: true, format: "json", ...params,
                });
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
                this.ackAlarmUsingPost = (alarmId, params = {}) => this.request({
                    path: `/api/alarm/${alarmId}/ack`,
                    method: 'POST',
                    secure: true, format: "json", ...params,
                });
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
                this.unassignAlarmUsingDelete = (alarmId, params = {}) => this.request({
                    path: `/api/alarm/${alarmId}/assign`,
                    method: 'DELETE',
                    secure: true, format: "json", ...params,
                });
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
                this.assignAlarmUsingPost = (alarmId, assigneeId, params = {}) => this.request({
                    path: `/api/alarm/${alarmId}/assign/${assigneeId}`,
                    method: 'POST',
                    secure: true, format: "json", ...params,
                });
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
                this.clearAlarmUsingPost = (alarmId, params = {}) => this.request({
                    path: `/api/alarm/${alarmId}/clear`,
                    method: 'POST',
                    secure: true, format: "json", ...params,
                });
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
                this.getAlarmsUsingGet = ({ entityType, entityId, ...query }, params = {}) => this.request({
                    path: `/api/alarm/${entityType}/${entityId}`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.getAllAlarmsUsingGet = (query, params = {}) => this.request({
                    path: `/api/alarms`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.getAlarmsV2UsingGet = ({ entityType, entityId, ...query }, params = {}) => this.request({
                    path: `/api/v2/alarm/${entityType}/${entityId}`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.getAllAlarmsV2UsingGet = (query, params = {}) => this.request({
                    path: `/api/v2/alarms`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.processAssetBulkImportUsingPost = (data, params = {}) => this.request({
                    path: `/api/asset/bulk_import`,
                    method: 'POST',
                    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
                });
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
                this.getAssetInfoByIdUsingGet = (assetId, params = {}) => this.request({
                    path: `/api/asset/info/${assetId}`,
                    method: 'GET',
                    secure: true, format: "json", ...params,
                });
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
                this.getAssetTypesUsingGet = (params = {}) => this.request({
                    path: `/api/asset/types`,
                    method: 'GET',
                    secure: true, format: "json", ...params,
                });
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
                this.getAssetByIdUsingGet = (assetId, params = {}) => this.request({
                    path: `/api/asset/${assetId}`,
                    method: 'GET',
                    secure: true, format: "json", ...params,
                });
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
                this.deleteAssetUsingDelete = (assetId, params = {}) => this.request({
                    path: `/api/asset/${assetId}`,
                    method: 'DELETE',
                    secure: true, ...params,
                });
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
                this.getAllAssetInfosUsingGet = (query, params = {}) => this.request({
                    path: `/api/assetInfos/all`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.findByQueryUsingPost = (data, params = {}) => this.request({
                    path: `/api/assets`,
                    method: 'POST',
                    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
                });
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
                this.getAssetsByIdsUsingGet = (query, params = {}) => this.request({
                    path: `/api/assets`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.saveAssetUsingPost = (query, data, params = {}) => this.request({
                    path: `/api/asset`,
                    method: 'POST',
                    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
                });
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
                this.getCustomerAssetInfosUsingGet = ({ customerId, ...query }, params = {}) => this.request({
                    path: `/api/customer/${customerId}/assetInfos`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.getCustomerAssetsUsingGet = ({ customerId, ...query }, params = {}) => this.request({
                    path: `/api/customer/${customerId}/assets`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.getAssetsByEntityGroupIdUsingGet = ({ entityGroupId, ...query }, params = {}) => this.request({
                    path: `/api/entityGroup/${entityGroupId}/assets`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.getTenantAssetUsingGet = (query, params = {}) => this.request({
                    path: `/api/tenant/assets`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.getTenantAssetsUsingGet = (query, params = {}) => this.request({
                    path: `/api/tenant/assets`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.getUserAssetsUsingGet = (query, params = {}) => this.request({
                    path: `/api/user/assets`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.saveAssetProfileUsingPost = (data, params = {}) => this.request({
                    path: `/api/assetProfile`,
                    method: 'POST',
                    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
                });
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
                this.getAssetProfileNamesUsingGet = (query, params = {}) => this.request({
                    path: `/api/assetProfile/names`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.deleteAssetProfileUsingDelete = (assetProfileId, params = {}) => this.request({
                    path: `/api/assetProfile/${assetProfileId}`,
                    method: 'DELETE',
                    secure: true, ...params,
                });
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
                this.setDefaultAssetProfileUsingPost = (assetProfileId, params = {}) => this.request({
                    path: `/api/assetProfile/${assetProfileId}/default`,
                    method: 'POST',
                    secure: true, format: "json", ...params,
                });
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
                this.getAssetProfileByIdUsingGet = ({ assetProfileId, ...query }, params = {}) => this.request({
                    path: `/api/assetProfile/${assetProfileId}`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.getDefaultAssetProfileInfoUsingGet = (params = {}) => this.request({
                    path: `/api/assetProfileInfo/default`,
                    method: 'GET',
                    secure: true, format: "json", ...params,
                });
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
                this.getAssetProfileInfoByIdUsingGet = (assetProfileId, params = {}) => this.request({
                    path: `/api/assetProfileInfo/${assetProfileId}`,
                    method: 'GET',
                    secure: true, format: "json", ...params,
                });
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
                this.getAssetProfilesByIdsUsingGet = (query, params = {}) => this.request({
                    path: `/api/assetProfileInfos`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.getAssetProfileInfosUsingGet = (query, params = {}) => this.request({
                    path: `/api/assetProfileInfos`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.getAssetProfilesUsingGet = (query, params = {}) => this.request({
                    path: `/api/assetProfiles`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.getAuditLogsByCustomerIdUsingGet = ({ customerId, ...query }, params = {}) => this.request({
                    path: `/api/audit/logs/customer/${customerId}`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.getAuditLogsByEntityIdUsingGet = ({ entityType, entityId, ...query }, params = {}) => this.request({
                    path: `/api/audit/logs/entity/${entityType}/${entityId}`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.getAuditLogsByUserIdUsingGet = ({ userId, ...query }, params = {}) => this.request({
                    path: `/api/audit/logs/user/${userId}`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.getAuditLogsUsingGet = (query, params = {}) => this.request({
                    path: `/api/audit/logs`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.changePasswordUsingPost = (data, params = {}) => this.request({
                    path: `/api/auth/changePassword`,
                    method: 'POST',
                    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
                });
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
                this.logoutUsingPost = (params = {}) => this.request({
                    path: `/api/auth/logout`,
                    method: 'POST',
                    secure: true, ...params,
                });
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
                this.getUserUsingGet = (params = {}) => this.request({
                    path: `/api/auth/user`,
                    method: 'GET',
                    secure: true, format: "json", ...params,
                });
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
                this.checkActivateTokenUsingGet = (query, params = {}) => this.request({
                    path: `/api/noauth/activate`,
                    method: 'GET',
                    query: query, format: "json", ...params,
                });
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
                this.activateUserUsingPost = (query, data, params = {}) => this.request({
                    path: `/api/noauth/activate`,
                    method: 'POST',
                    query: query, body: data, type: http_client_1.ContentType.Json, format: "json", ...params,
                });
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
                this.resetPasswordUsingPost = (data, params = {}) => this.request({
                    path: `/api/noauth/resetPassword`,
                    method: 'POST',
                    body: data, type: http_client_1.ContentType.Json, format: "json", ...params,
                });
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
                this.requestResetPasswordByEmailUsingPost = (data, params = {}) => this.request({
                    path: `/api/noauth/resetPasswordByEmail`,
                    method: 'POST',
                    body: data, type: http_client_1.ContentType.Json, ...params,
                });
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
                this.checkResetTokenUsingGet = (query, params = {}) => this.request({
                    path: `/api/noauth/resetPassword`,
                    method: 'GET',
                    query: query, format: "json", ...params,
                });
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
                this.getUserPasswordPolicyUsingGet = (params = {}) => this.request({
                    path: `/api/noauth/userPasswordPolicy`,
                    method: 'GET',
                    format: "json", ...params,
                });
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
                this.getBlobEntitiesByIdsUsingGet = (query, params = {}) => this.request({
                    path: `/api/blobEntities`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.getBlobEntitiesUsingGet = (query, params = {}) => this.request({
                    path: `/api/blobEntities`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.getBlobEntityInfoByIdUsingGet = (blobEntityId, params = {}) => this.request({
                    path: `/api/blobEntity/info/${blobEntityId}`,
                    method: 'GET',
                    secure: true, format: "json", ...params,
                });
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
                this.deleteBlobEntityUsingDelete = (blobEntityId, params = {}) => this.request({
                    path: `/api/blobEntity/${blobEntityId}`,
                    method: 'DELETE',
                    secure: true, ...params,
                });
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
                this.downloadBlobEntityUsingGet = (blobEntityId, params = {}) => this.request({
                    path: `/api/blobEntity/${blobEntityId}/download`,
                    method: 'GET',
                    secure: true, format: "json", ...params,
                });
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
                this.getComponentDescriptorByClazzUsingGet = (componentDescriptorClazz, params = {}) => this.request({
                    path: `/api/component/${componentDescriptorClazz}`,
                    method: 'GET',
                    secure: true, format: "json", ...params,
                });
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
                this.getComponentDescriptorsByTypeUsingGet = ({ componentType, ...query }, params = {}) => this.request({
                    path: `/api/components/${componentType}`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
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
                this.getComponentDescriptorsByTypesUsingGet = (query, params = {}) => this.request({
                    path: `/api/components`,
                    method: 'GET',
                    query: query, secure: true, format: "json", ...params,
                });
                this.converter = __runInitializers(this, _converter_initializers, void 0);
                __runInitializers(this, _converter_extraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _converter_decorators = [tags];
            __esDecorate(null, null, _converter_decorators, { kind: "field", name: "converter", static: false, private: false, access: { has: obj => "converter" in obj, get: obj => obj.converter, set: (obj, value) => { obj.converter = value; } }, metadata: _metadata }, _converter_initializers, _converter_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
exports.Api = Api;
-controller
    * ;
SaveConverterUsingPost
    * ;
Create;
Or;
Update;
(0, data_contracts_1.Converter)(saveConverter)
    * ;
POST: /api/converter
    * 
    * ;
OK
    * ;
Bad;
Request
    * ;
Unauthorized
    * ;
Forbidden
    * ;
Not;
Found
    * ;
Too;
Many;
Requests
    * /;
saveConverterUsingPost = (data, params = {}) => this.request({
    path: `/api/converter`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
n;
nvar;
data = {};
n;
n // Process data from incoming message and metadata\n\ndata.tempValue = msg.temp;\ndata.humValue = msg.humidity;\n\ndata.devSerialNumber = metadata['ss_serialNumber'];\n\n// Result object with encoded downlink payload\nvar result = {\n\n    // downlink data content type: JSON, TEXT or BINARY (base64 format)\n    contentType: \"JSON\",\n\n    // downlink data\n    data: JSON.stringify(data),\n\n    // Optional metadata object presented in key/value format\n    metadata: {\n            topic: metadata['deviceType']+'/'+metadata['deviceName']+'/upload'\n    }\n\n};\n\nreturn result;" } ``` * 'metadata' - message metadata pushed from the rule engine; * 'msg' - message data pushed from the rule engine; * 'msgType' - type of the message pushed from the rule engine; * 'integrationMetadata' - integration metadata object; * 'encoder' - string representation of the encoder configuration. ## Response Body Example ```json { "contentType":"JSON", "data":"{\"tempValue\":42,\"humValue\":77}", "metadata":{ "topic":"sensor/Temp Sensor/upload" } } ``` * 'contentType' - downlink data content type; * 'data' - downlink data; * 'metadata' - optional metadata object.
    *
    * ;
converter - controller
    * ;
TestDownLinkConverterUsingPost
    * ;
Test;
converter;
    * ;
POST: /api/converter / testDownLink;
{
    scriptLang;
}
    * 
    * ;
OK
    * ;
Bad;
Request
    * ;
Unauthorized
    * ;
Forbidden
    * ;
Not;
Found
    * ;
Too;
Many;
Requests
    * /;
testDownLinkConverterUsingPost = (query, data, params = {}) => this.request({
    path: `/api/converter/testDownLink`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
n;
n // decode payload to string\nvar payloadStr = decodeToString(payload);\n\n// decode payload to JSON\n// var data = decodeToJson(payload);\n\nvar deviceName = 'Device A';\nvar deviceType = 'thermostat';\nvar customerName = 'customer';\nvar groupName = 'thermostat devices';\nvar manufacturer = 'Example corporation';\n// use assetName and assetType instead of deviceName and deviceType\n// to automatically create assets instead of devices.\n// var assetName = 'Asset A';\n// var assetType = 'building';\n\n// Result object with device/asset attributes/telemetry data\nvar result = {\n// Use deviceName and deviceType or assetName and assetType, but not both.\n   deviceName: deviceName,\n   deviceType: deviceType,\n// assetName: assetName,\n// assetType: assetType,\n   customerName: customerName,\n   groupName: groupName,\n   attributes: {\n       model: 'Model A',\n       serialNumber: 'SN111',\n       integrationName: metadata['integrationName']\n       manufacturer: manufacturer\n   },\n   telemetry: {\n       temperature: 42,\n       humidity: 80,\n       rawData: payloadStr\n   }\n};\n\n/** Helper functions **/\n\nfunction decodeToString(payload) {\n   return String.fromCharCode.apply(String, payload);\n}\n\nfunction decodeToJson(payload) {\n   // covert payload to string.\n   var str = decodeToString(payload);\n\n   // parse string to JSON\n   var data = JSON.parse(str);\n   return data;\n}\n\nreturn result;" } ``` * 'metadata' - integration metadata; * 'payload' - base64 string representation of the data; * 'decoder' - string representation of the decoder configuration. ## Response Body Example ```json { "output":"{\"deviceName\":\"Device A\",\"deviceType\":\"thermostat\",\"customerName\":\"customer\",\"groupName\":\"thermostat devices\",\"attributes\":{\"model\":\"Model A\",\"serialNumber\":\"SN111\"},\"telemetry\":{\"temperature\":42,\"humidity\":80,\"rawData\":\"{\\n    \\\"data\\\": \\\"data\\\"\\n}\"}}", "error":"" } ``` * 'output' - string representation of the output message; * 'error' - string representation of the error message.
    *
    * ;
converter - controller
    * ;
TestUpLinkConverterUsingPost
    * ;
Test;
converter;
    * ;
POST: /api/converter / testUpLink;
{
    scriptLang;
}
    * 
    * ;
OK
    * ;
Bad;
Request
    * ;
Unauthorized
    * ;
Forbidden
    * ;
Not;
Found
    * ;
Too;
Many;
Requests
    * /;
testUpLinkConverterUsingPost = (query, data, params = {}) => this.request({
    path: `/api/converter/testUpLink`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Fetch the Converter object based on the provided Converter Id. The server checks that the converter is owned by the same tenant. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags converter-controller
* @name GetConverterByIdUsingGet
* @summary Get Converter (getConverterById)
* @request GET:/api/converter/{converterId}
* @secure
* @response `200` `GetConverterByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getConverterByIdUsingGet = (converterId, params = {}) => this.request({
    path: `/api/converter/${converterId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Deletes the converter and all the relations (from and to the converter). Referencing non-existing converter Id will cause an error. If the converter is associated with the integration, it will not be allowed for deletion. Security check is performed to verify that the user has 'DELETE' permission for the entity (entities).
*
* @tags converter-controller
* @name DeleteConverterUsingDelete
* @summary Delete converter (deleteConverter)
* @request DELETE:/api/converter/{converterId}
* @secure
* @response `200` `DeleteConverterUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteConverterUsingDelete = (converterId, params = {}) => this.request({
    path: `/api/converter/${converterId}`,
    method: 'DELETE',
    secure: true, ...params,
})
    /**
* @description Returns a JSON object of the latest debug event representing the input message the converter processed. ## Uplink Converter Debug Input Event Example ```json { "inContentType":"JSON", "inContent":"{\"temp\":40}", "inMetadata":"{\"Header:sec-ch-ua\":\"\\\"Chromium\\\";v=\\\"94\\\", \\\"Google Chrome\\\";v=\\\"94\\\", \\\";Not A Brand\\\";v=\\\"99\\\"\",\"Header:user-agent\":\"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36\",\"integrationName\":\"Integration\",\"Header:cookie\":\"GUID=zYSs8hymSwZKv8kHALKY; redirect_to=%2F; JSESSIONID=B0A7C8E481409CE7924E738DB04F62F9\",\"Header:sec-ch-ua-platform\":\"\\\"Linux\\\"\",\"Header:accept\":\"*/ * ;
",\"Header:origin\":\"http://localhost:8080\",\"Header:sec-fetch-site\":\"same-origin\",\"Header:connection\":\"keep-alive\",\"Header:accept-encoding\":\"gzip, deflate, br\",\"Header:content-type\":\"application/json\",\"Header:content-length\":\"16\",\"Header:sec-fetch-mode\":\"cors\",\"Header:sec-ch-ua-mobile\":\"?0\",\"Header:sec-fetch-dest\":\"empty\",\"Header:host\":\"localhost:8080\",\"Header:referer\":\"http://localhost:8080/swagger-ui.html\",\"Header:accept-language\":\"en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7,uk;q=0.6,und;q=0.5\"}";
`` ` * 'inContentType' - content type of the message received by the integration; * 'inContent' - message data received; * 'inMetadata' - integration metadata (e.g. headers). ## Downlink Converter Debug Input Event Example ` ``;
json;
{
    "inContentType";
    "JSON", "inContent";
    "{\"temp\":42,\"humidity\":77}", "inMsgType";
    "POST_TELEMETRY_REQUEST", "inMetadata";
    "{\"data\":\"40\"}", "inIntegrationMetadata";
    "{\"integrationName\":\"Integration\"}";
}
`` ` * 'inContentType' - content type of the message received by the integration; * 'inContent' - content of the message pushed from the rule engine; * 'inMsgType' - type of the message pushed from the rule engine; * 'inMetadata' - content of the message metadata pushed from the rule engine; * 'inIntegrationMetadata' - integration metadata. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
 *
 * @tags converter-controller
 * @name GetLatestConverterDebugInputUsingGet
 * @summary Get latest debug input event (getLatestConverterDebugInput)
 * @request GET:/api/converter/{converterId}/debugIn{?converterType,integrationName,integrationType}
 * @secure
 * @response `;
200 ` `;
(0, data_contracts_1.GetLatestConverterDebugInputUsingGetData) ` OK
 * @response `;
400 ` `;
(0, data_contracts_1.ThingsboardErrorResponse) ` Bad Request
 * @response `;
401 ` `;
(0, data_contracts_1.ThingsboardErrorResponse) ` Unauthorized
 * @response `;
403 ` `;
(0, data_contracts_1.ThingsboardErrorResponse) ` Forbidden
 * @response `;
404 ` `;
(0, data_contracts_1.ThingsboardErrorResponse) ` Not Found
 * @response `;
429 ` `;
(0, data_contracts_1.ThingsboardErrorResponse) ` Too Many Requests
 */
getLatestConverterDebugInputUsingGet = ({ converterId, ...query }: GetLatestConverterDebugInputUsingGetParams, params: RequestParams = {}) =>
    this.request<GetLatestConverterDebugInputUsingGetData, ThingsboardErrorResponse>({
        path: ` / api / converter / $;
{
    converterId;
}
/debugIn`,;
method: 'GET',
    query;
query, secure;
true, format;
"json", ;
params,
;
/**
* @description Requested converters must be owned by tenant which is performing the request. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags converter-controller
* @name GetConvertersByIdsUsingGet
* @summary Get Converters By Ids (getConvertersByIds)
* @request GET:/api/converters{?converterIds}
* @secure
* @response `200` `GetConvertersByIdsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getConvertersByIdsUsingGet = (query, params = {}) => this.request({
    path: `/api/converters`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of converters owned by tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags converter-controller
* @name GetConvertersUsingGet
* @summary Get Converters (getConverters)
* @request GET:/api/converters{?isEdgeTemplate,page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetConvertersUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getConvertersUsingGet = (query, params = {}) => this.request({
    path: `/api/converters`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Fetch the Custom Menu object that corresponds to the authority of the user. The API call is designed to load the custom menu items for edition. So, the result is NOT merged with the parent level configuration. Let's assume there is a custom menu configured on a system level. And there is no custom menu items configured on a tenant level. In such a case, the API call will return empty object for the tenant administrator. Security check is performed to verify that the user has 'READ' permission for the white labeling resource.
*
* @tags custom-menu-controller
* @name GetCurrentCustomMenuUsingGet
* @summary Get Custom Menu configuration (getCustomMenu)
* @request GET:/api/customMenu/currentCustomMenu
* @secure
* @response `200` `GetCurrentCustomMenuUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCurrentCustomMenuUsingGet = (params = {}) => this.request({
    path: `/api/customMenu/currentCustomMenu`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Fetch the Custom Menu object for the end user. The custom menu is configured in the white labeling parameters. If custom menu configuration on the tenant level is present, it overrides the menu configuration of the system level. Similar, if the custom menu configuration on the customer level is present, it overrides the menu configuration of the tenant level.
*
* @tags custom-menu-controller
* @name GetCustomMenuUsingGet
* @summary Get end-user Custom Menu configuration (getCustomMenu)
* @request GET:/api/customMenu/customMenu
* @secure
* @response `200` `GetCustomMenuUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCustomMenuUsingGet = (params = {}) => this.request({
    path: `/api/customMenu/customMenu`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Creates or Updates the Custom Menu configuration. Security check is performed to verify that the user has 'WRITE' permission for the white labeling resource.
*
* @tags custom-menu-controller
* @name SaveCustomMenuUsingPost
* @summary Create Or Update Custom Menu (saveCustomMenu)
* @request POST:/api/customMenu/customMenu
* @secure
* @response `200` `SaveCustomMenuUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveCustomMenuUsingPost = (data, params = {}) => this.request({
    path: `/api/customMenu/customMenu`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Fetch the Custom Translation map that corresponds to the authority of the user. The API call is designed to load the custom translation items for edition. So, the result is NOT merged with the parent level configuration. Let's assume there is a custom translation configured on a system level. And there is no custom translation items configured on a tenant level. In such a case, the API call will return empty object for the tenant administrator. Response example: ```json {"translationMap":{"es_ES":"{\"home\":\"MyHome\"}"}} ``` Security check is performed to verify that the user has 'READ' permission for the white labeling resource.
*
* @tags custom-translation-controller
* @name GetCurrentCustomTranslationUsingGet
* @summary Get Custom Translation configuration (getCurrentCustomTranslation)
* @request GET:/api/customTranslation/currentCustomTranslation
* @secure
* @response `200` `GetCurrentCustomTranslationUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCurrentCustomTranslationUsingGet = (params = {}) => this.request({
    path: `/api/customTranslation/currentCustomTranslation`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Fetch the Custom Translation map for the end user. The custom translation is configured in the white labeling parameters. If custom translation translation is defined on the tenant level, it overrides the custom translation of the system level. Similar, if the custom translation is defined on the customer level, it overrides the translation configuration of the tenant level.
*
* @tags custom-translation-controller
* @name GetCustomTranslationUsingGet
* @summary Get end-user Custom Translation configuration (getCustomTranslation)
* @request GET:/api/customTranslation/customTranslation
* @secure
* @response `200` `GetCustomTranslationUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCustomTranslationUsingGet = (params = {}) => this.request({
    path: `/api/customTranslation/customTranslation`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Creates or Updates the Custom Translation map. Request example: ```json {"translationMap":{"es_ES":"{\"home\":\"MyHome\"}"}} ``` Security check is performed to verify that the user has 'WRITE' permission for the white labeling resource.
*
* @tags custom-translation-controller
* @name SaveCustomTranslationUsingPost
* @summary Create Or Update Custom Translation (saveCustomTranslation)
* @request POST:/api/customTranslation/customTranslation
* @secure
* @response `200` `SaveCustomTranslationUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveCustomTranslationUsingPost = (data, params = {}) => this.request({
    path: `/api/customTranslation/customTranslation`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Get the Customer info object based on the provided Customer Id. If the user has the authority of 'Tenant Administrator', the server checks that the customer is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the user belongs to the customer. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags customer-controller
* @name GetCustomerInfoByIdUsingGet
* @summary Get Customer info (getCustomerInfoById)
* @request GET:/api/customer/info/{customerId}
* @secure
* @response `200` `GetCustomerInfoByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCustomerInfoByIdUsingGet = (customerId, params = {}) => this.request({
    path: `/api/customer/info/${customerId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Get the Customer object based on the provided Customer Id. If the user has the authority of 'Tenant Administrator', the server checks that the customer is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the user belongs to the customer. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags customer-controller
* @name GetCustomerByIdUsingGet
* @summary Get Customer (getCustomerById)
* @request GET:/api/customer/{customerId}
* @secure
* @response `200` `GetCustomerByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCustomerByIdUsingGet = (customerId, params = {}) => this.request({
    path: `/api/customer/${customerId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Deletes the Customer and all customer Users. All assigned Dashboards, Assets, Devices, etc. will be unassigned but not deleted. Referencing non-existing Customer Id will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'DELETE' permission for the entity (entities).
*
* @tags customer-controller
* @name DeleteCustomerUsingDelete
* @summary Delete Customer (deleteCustomer)
* @request DELETE:/api/customer/{customerId}
* @secure
* @response `200` `DeleteCustomerUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteCustomerUsingDelete = (customerId, params = {}) => this.request({
    path: `/api/customer/${customerId}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Returns a page of customer info objects owned by the specified customer. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags customer-controller
* @name GetCustomerCustomerInfosUsingGet
* @summary Get Customer sub-customers Infos (getCustomerCustomerInfos)
* @request GET:/api/customer/{customerId}/customerInfos{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetCustomerCustomerInfosUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCustomerCustomerInfosUsingGet = ({ customerId, ...query }, params = {}) => this.request({
    path: `/api/customer/${customerId}/customerInfos`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Get the short customer object that contains only the title and 'isPublic' flag. If the user has the authority of 'Tenant Administrator', the server checks that the customer is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the user belongs to the customer. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags customer-controller
* @name GetShortCustomerInfoByIdUsingGet
* @summary Get short Customer info (getShortCustomerInfoById)
* @request GET:/api/customer/{customerId}/shortInfo
* @secure
* @response `200` `GetShortCustomerInfoByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getShortCustomerInfoByIdUsingGet = (customerId, params = {}) => this.request({
    path: `/api/customer/${customerId}/shortInfo`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Get the title of the customer. If the user has the authority of 'Tenant Administrator', the server checks that the customer is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the user belongs to the customer. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags customer-controller
* @name GetCustomerTitleByIdUsingGet
* @summary Get Customer Title (getCustomerTitleById)
* @request GET:/api/customer/{customerId}/title
* @secure
* @response `200` `GetCustomerTitleByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCustomerTitleByIdUsingGet = (customerId, params = {}) => this.request({
    path: `/api/customer/${customerId}/title`,
    method: 'GET',
    secure: true, ...params,
});
/**
* @description Returns a page of customer info objects owned by the tenant or the customer of a current user. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags customer-controller
* @name GetAllCustomerInfosUsingGet
* @summary Get All Customer Infos for current user (getAllCustomerInfos)
* @request GET:/api/customerInfos/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetAllCustomerInfosUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getAllCustomerInfosUsingGet = (query, params = {}) => this.request({
    path: `/api/customerInfos/all`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a list of Customer objects based on the provided ids. Filters the list based on the user permissions. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags customer-controller
* @name GetCustomersByIdsUsingGet
* @summary Get customers by Customer Ids (getCustomersByEntityGroupId)
* @request GET:/api/customers{?customerIds}
* @secure
* @response `200` `GetCustomersByIdsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCustomersByIdsUsingGet = (query, params = {}) => this.request({
    path: `/api/customers`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of customers owned by tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags customer-controller
* @name GetCustomersUsingGet
* @summary Get Tenant Customers (getCustomers)
* @request GET:/api/customers{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetCustomersUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCustomersUsingGet = (query, params = {}) => this.request({
    path: `/api/customers`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Creates or Updates the Customer. When creating customer, platform generates Customer Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created Customer Id will be present in the response. Specify existing Customer Id to update the Customer. Referencing non-existing Customer Id will cause 'Not Found' error.Remove 'id', 'tenantId' from the request body example (below) to create new Customer entity. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
*
* @tags customer-controller
* @name SaveCustomerUsingPost
* @summary Create or update Customer (saveCustomer)
* @request POST:/api/customer{?entityGroupId,entityGroupIds}
* @secure
* @response `200` `SaveCustomerUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveCustomerUsingPost = (query, data, params = {}) => this.request({
    path: `/api/customer`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Returns a page of Customer objects that belongs to specified Entity Group Id. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags customer-controller
* @name GetCustomersByEntityGroupIdUsingGet
* @summary Get customers by Entity Group Id (getCustomersByEntityGroupId)
* @request GET:/api/entityGroup/{entityGroupId}/customers{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetCustomersByEntityGroupIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCustomersByEntityGroupIdUsingGet = ({ entityGroupId, ...query }, params = {}) => this.request({
    path: `/api/entityGroup/${entityGroupId}/customers`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Get the Customer using Customer Title. Available for users with 'TENANT_ADMIN' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags customer-controller
* @name GetTenantCustomerUsingGet
* @summary Get Tenant Customer by Customer title (getTenantCustomer)
* @request GET:/api/tenant/customers{?customerTitle}
* @secure
* @response `200` `GetTenantCustomerUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantCustomerUsingGet = (query, params = {}) => this.request({
    path: `/api/tenant/customers`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of customers available for the user. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags customer-controller
* @name GetUserCustomersUsingGet
* @summary Get Customers (getUserCustomers)
* @request GET:/api/user/customers{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetUserCustomersUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getUserCustomersUsingGet = (query, params = {}) => this.request({
    path: `/api/user/customers`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns the home dashboard info object that is configured as 'homeDashboardId' parameter in the 'additionalInfo' of the corresponding customer. Available for users with 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the white labeling resource.
*
* @tags dashboard-controller
* @name GetCustomerHomeDashboardInfoUsingGet
* @summary Get Customer Home Dashboard Info (getCustomerHomeDashboardInfo)
* @request GET:/api/customer/dashboard/home/info
* @secure
* @response `200` `GetCustomerHomeDashboardInfoUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCustomerHomeDashboardInfoUsingGet = (params = {}) => this.request({
    path: `/api/customer/dashboard/home/info`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Update the home dashboard assignment for the current customer. Available for users with 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'WRITE' permission for the white labeling resource.
*
* @tags dashboard-controller
* @name SetCustomerHomeDashboardInfoUsingPost
* @summary Update Customer Home Dashboard Info (setCustomerHomeDashboardInfo)
* @request POST:/api/customer/dashboard/home/info
* @secure
* @response `200` `SetCustomerHomeDashboardInfoUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
setCustomerHomeDashboardInfoUsingPost = (data, params = {}) => this.request({
    path: `/api/customer/dashboard/home/info`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, ...params,
});
/**
* @description Returns a page of dashboard info objects owned by the specified customer. The Dashboard Info object contains lightweight information about the dashboard (e.g. title, image, assigned customers) but does not contain the heavyweight configuration JSON. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags dashboard-controller
* @name GetCustomerDashboardsUsingGet
* @summary Get Customer Dashboards (getCustomerDashboards)
* @request GET:/api/customer/{customerId}/dashboards{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetCustomerDashboardsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCustomerDashboardsUsingGet = ({ customerId, ...query }, params = {}) => this.request({
    path: `/api/customer/${customerId}/dashboards`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns the home dashboard object that is configured as 'homeDashboardId' parameter in the 'additionalInfo' of the User. If 'homeDashboardId' parameter is not set on the User level and the User has authority 'CUSTOMER_USER', check the same parameter for the corresponding Customer. If 'homeDashboardId' parameter is not set on the User and Customer levels then checks the same parameter for the Tenant that owns the user. The Dashboard object is a heavyweight object that contains information about the dashboard (e.g. title, image, assigned customers) and also configuration JSON (e.g. layouts, widgets, entity aliases). Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags dashboard-controller
* @name GetHomeDashboardUsingGet
* @summary Get Home Dashboard (getHomeDashboard)
* @request GET:/api/dashboard/home
* @secure
* @response `200` `GetHomeDashboardUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getHomeDashboardUsingGet = (params = {}) => this.request({
    path: `/api/dashboard/home`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Returns the home dashboard info object that is configured as 'homeDashboardId' parameter in the 'additionalInfo' of the User. If 'homeDashboardId' parameter is not set on the User level and the User has authority 'CUSTOMER_USER', check the same parameter for the corresponding Customer. If 'homeDashboardId' parameter is not set on the User and Customer levels then checks the same parameter for the Tenant that owns the user. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags dashboard-controller
* @name GetHomeDashboardInfoUsingGet
* @summary Get Home Dashboard Info (getHomeDashboardInfo)
* @request GET:/api/dashboard/home/info
* @secure
* @response `200` `GetHomeDashboardInfoUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getHomeDashboardInfoUsingGet = (params = {}) => this.request({
    path: `/api/dashboard/home/info`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Get the information about the dashboard based on 'dashboardId' parameter. The Dashboard Info object contains lightweight information about the dashboard (e.g. title, image, assigned customers) but does not contain the heavyweight configuration JSON.
*
* @tags dashboard-controller
* @name GetDashboardInfoByIdUsingGet
* @summary Get Dashboard Info (getDashboardInfoById)
* @request GET:/api/dashboard/info/{dashboardId}
* @secure
* @response `200` `GetDashboardInfoByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getDashboardInfoByIdUsingGet = (dashboardId, params = {}) => this.request({
    path: `/api/dashboard/info/${dashboardId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Get the maximum number of data points that dashboard may request from the server per in a single subscription command. This value impacts the time window behavior. It impacts 'Max values' parameter in case user selects 'None' as 'Data aggregation function'. It also impacts the 'Grouping interval' in case of any other 'Data aggregation function' is selected. The actual value of the limit is configurable in the system configuration file.
*
* @tags dashboard-controller
* @name GetMaxDatapointsLimitUsingGet
* @summary Get max data points limit (getMaxDatapointsLimit)
* @request GET:/api/dashboard/maxDatapointsLimit
* @secure
* @response `200` `GetMaxDatapointsLimitUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getMaxDatapointsLimitUsingGet = (params = {}) => this.request({
    path: `/api/dashboard/maxDatapointsLimit`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Get the server time (milliseconds since January 1, 1970 UTC). Used to adjust view of the dashboards according to the difference between browser and server time.
*
* @tags dashboard-controller
* @name GetServerTimeUsingGet
* @summary Get server time (getServerTime)
* @request GET:/api/dashboard/serverTime
* @secure
* @response `200` `GetServerTimeUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getServerTimeUsingGet = (params = {}) => this.request({
    path: `/api/dashboard/serverTime`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Delete the Dashboard. Only users with 'TENANT_ADMIN') authority may delete the dashboards. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags dashboard-controller
* @name DeleteDashboardUsingDelete
* @summary Delete the Dashboard (deleteDashboard)
* @request DELETE:/api/dashboard/{dashboardId}
* @secure
* @response `200` `DeleteDashboardUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteDashboardUsingDelete = (dashboardId, params = {}) => this.request({
    path: `/api/dashboard/${dashboardId}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Get the dashboard based on 'dashboardId' parameter. The Dashboard object is a heavyweight object that contains information about the dashboard (e.g. title, image, assigned customers) and also configuration JSON (e.g. layouts, widgets, entity aliases). Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags dashboard-controller
* @name GetDashboardByIdUsingGet
* @summary Get Dashboard (getDashboardById)
* @request GET:/api/dashboard/{dashboardId}{?inlineImages}
* @secure
* @response `200` `GetDashboardByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getDashboardByIdUsingGet = ({ dashboardId, ...query }, params = {}) => this.request({
    path: `/api/dashboard/${dashboardId}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of dashboard info objects owned by the tenant or the customer of a current user. The Dashboard Info object contains lightweight information about the dashboard (e.g. title, image, assigned customers) but does not contain the heavyweight configuration JSON. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags dashboard-controller
* @name GetAllDashboardsUsingGet
* @summary Get All Dashboards for current user (getAllDashboards)
* @request GET:/api/dashboards/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetAllDashboardsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getAllDashboardsUsingGet = (query, params = {}) => this.request({
    path: `/api/dashboards/all`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a list of DashboardInfo objects based on the provided ids. Filters the list based on the user permissions. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags dashboard-controller
* @name GetDashboardsByIdsUsingGet
* @summary Get dashboards by Dashboard Ids (getDashboardsByIds)
* @request GET:/api/dashboards{?dashboardIds}
* @secure
* @response `200` `GetDashboardsByIdsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getDashboardsByIdsUsingGet = (query, params = {}) => this.request({
    path: `/api/dashboards`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Create or update the Dashboard. When creating dashboard, platform generates Dashboard Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created Dashboard id will be present in the response. Specify existing Dashboard id to update the dashboard. Referencing non-existing dashboard Id will cause 'Not Found' error. Only users with 'TENANT_ADMIN') authority may create the dashboards.Remove 'id', 'tenantId' and optionally 'customerId' from the request body example (below) to create new Dashboard entity. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags dashboard-controller
* @name SaveDashboardUsingPost
* @summary Create Or Update Dashboard (saveDashboard)
* @request POST:/api/dashboard{?entityGroupId,entityGroupIds}
* @secure
* @response `200` `SaveDashboardUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveDashboardUsingPost = (query, data, params = {}) => this.request({
    path: `/api/dashboard`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Export the dashboards that belong to specified group id.The Dashboard object is a heavyweight object that contains information about the dashboard (e.g. title, image, assigned customers) and also configuration JSON (e.g. layouts, widgets, entity aliases). Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags dashboard-controller
* @name ExportGroupDashboardsUsingGet
* @summary Export Dashboards (exportGroupDashboards)
* @request GET:/api/entityGroup/{entityGroupId}/dashboards/export{?limit}
* @secure
* @response `200` `ExportGroupDashboardsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
exportGroupDashboardsUsingGet = ({ entityGroupId, ...query }, params = {}) => this.request({
    path: `/api/entityGroup/${entityGroupId}/dashboards/export`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Import the dashboards to specified group.The Dashboard object is a heavyweight object that contains information about the dashboard (e.g. title, image, assigned customers) and also configuration JSON (e.g. layouts, widgets, entity aliases). Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'WRITE' permission for specified group.
*
* @tags dashboard-controller
* @name ImportGroupDashboardsUsingPost
* @summary Import Dashboards (importGroupDashboards)
* @request POST:/api/entityGroup/{entityGroupId}/dashboards/import{?overwrite}
* @secure
* @response `200` `ImportGroupDashboardsUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
importGroupDashboardsUsingPost = ({ entityGroupId, ...query }, data, params = {}) => this.request({
    path: `/api/entityGroup/${entityGroupId}/dashboards/import`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, ...params,
});
/**
* @description Returns a page of Dashboard objects that belongs to specified Entity Group Id. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags dashboard-controller
* @name GetDashboardsByEntityGroupIdUsingGet
* @summary Get dashboards by Entity Group Id (getDashboardsByEntityGroupId)
* @request GET:/api/entityGroup/{entityGroupId}/dashboards{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetDashboardsByEntityGroupIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getDashboardsByEntityGroupIdUsingGet = ({ entityGroupId, ...query }, params = {}) => this.request({
    path: `/api/entityGroup/${entityGroupId}/dashboards`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns the home dashboard info object that is configured as 'homeDashboardId' parameter in the 'additionalInfo' of the corresponding tenant. Available for users with 'TENANT_ADMIN' authority. Security check is performed to verify that the user has 'READ' permission for the white labeling resource.
*
* @tags dashboard-controller
* @name GetTenantHomeDashboardInfoUsingGet
* @summary Get Tenant Home Dashboard Info (getTenantHomeDashboardInfo)
* @request GET:/api/tenant/dashboard/home/info
* @secure
* @response `200` `GetTenantHomeDashboardInfoUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantHomeDashboardInfoUsingGet = (params = {}) => this.request({
    path: `/api/tenant/dashboard/home/info`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Update the home dashboard assignment for the current tenant. Available for users with 'TENANT_ADMIN' authority. Security check is performed to verify that the user has 'WRITE' permission for the white labeling resource.
*
* @tags dashboard-controller
* @name SetTenantHomeDashboardInfoUsingPost
* @summary Update Tenant Home Dashboard Info (getTenantHomeDashboardInfo)
* @request POST:/api/tenant/dashboard/home/info
* @secure
* @response `200` `SetTenantHomeDashboardInfoUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
setTenantHomeDashboardInfoUsingPost = (data, params = {}) => this.request({
    path: `/api/tenant/dashboard/home/info`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, ...params,
});
/**
* @description Returns a page of dashboard info objects owned by the tenant of a current user. The Dashboard Info object contains lightweight information about the dashboard (e.g. title, image, assigned customers) but does not contain the heavyweight configuration JSON. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' authority.
*
* @tags dashboard-controller
* @name GetTenantDashboardsUsingGet
* @summary Get Tenant Dashboards (getTenantDashboards)
* @request GET:/api/tenant/dashboards{?mobile,page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetTenantDashboardsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantDashboardsUsingGet = (query, params = {}) => this.request({
    path: `/api/tenant/dashboards`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of dashboard info objects owned by tenant. The Dashboard Info object contains lightweight information about the dashboard (e.g. title, image, assigned customers) but does not contain the heavyweight configuration JSON. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'SYS_ADMIN' authority.
*
* @tags dashboard-controller
* @name GetTenantDashboardsUsingGet1
* @summary Get Tenant Dashboards by System Administrator (getTenantDashboards)
* @request GET:/api/tenant/{tenantId}/dashboards{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetTenantDashboardsUsingGet1Data` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantDashboardsUsingGet1 = ({ tenantId, ...query }, params = {}) => this.request({
    path: `/api/tenant/${tenantId}/dashboards`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of Dashboard Info objects available for specified or current user. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. The Dashboard Info object contains lightweight information about the dashboard (e.g. title, image, assigned customers) but does not contain the heavyweight configuration JSON. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags dashboard-controller
* @name GetUserDashboardsUsingGet
* @summary Get Dashboards (getUserDashboards)
* @request GET:/api/user/dashboards{?mobile,operation,page,pageSize,sortOrder,sortProperty,textSearch,userId}
* @secure
* @response `200` `GetUserDashboardsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getUserDashboardsUsingGet = (query, params = {}) => this.request({
    path: `/api/user/dashboards`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Download generated docker-compose.yml for gateway.
*
* @tags device-connectivity-controller
* @name DownloadGatewayDockerComposeUsingGet
* @summary Download generated docker-compose.yml file for gateway (downloadGatewayDockerCompose)
* @request GET:/api/device-connectivity/gateway-launch/{deviceId}/docker-compose/download
* @secure
* @response `200` `DownloadGatewayDockerComposeUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
downloadGatewayDockerComposeUsingGet = (deviceId, params = {}) => this.request({
    path: `/api/device-connectivity/gateway-launch/${deviceId}/docker-compose/download`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Fetch the list of commands to publish device telemetry based on device profile If the user has the authority of 'Tenant Administrator', the server checks that the device is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the device is assigned to the same customer. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags device-connectivity-controller
* @name GetDevicePublishTelemetryCommandsUsingGet
* @summary Get commands to publish device telemetry (getDevicePublishTelemetryCommands)
* @request GET:/api/device-connectivity/{deviceId}
* @secure
* @response `200` `GetDevicePublishTelemetryCommandsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getDevicePublishTelemetryCommandsUsingGet = (deviceId, params = {}) => this.request({
    path: `/api/device-connectivity/${deviceId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Download server certificate.
*
* @tags device-connectivity-controller
* @name DownloadServerCertificateUsingGet
* @summary Download server certificate using file path defined in device.connectivity properties (downloadServerCertificate)
* @request GET:/api/device-connectivity/{protocol}/certificate/download
* @secure
* @response `200` `DownloadServerCertificateUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
downloadServerCertificateUsingGet = (protocol, params = {}) => this.request({
    path: `/api/device-connectivity/${protocol}/certificate/download`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Reclaiming means the device will be unassigned from the customer and the device will be available for claiming again. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'CLAIM_DEVICES' permission for the entity (entities).
*
* @tags device-controller
* @name ReClaimDeviceUsingDelete
* @summary Reclaim device (reClaimDevice)
* @request DELETE:/api/customer/device/{deviceName}/claim
* @secure
* @response `200` `ReClaimDeviceUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
reClaimDeviceUsingDelete = (deviceName, params = {}) => this.request({
    path: `/api/customer/device/${deviceName}/claim`,
    method: 'DELETE',
    secure: true, format: "json", ...params,
});
/**
* @description Claiming makes it possible to assign a device to the specific customer using device/server side claiming data (in the form of secret key).To make this happen you have to provide unique device name and optional claiming data (it is needed only for device-side claiming).Once device is claimed, the customer becomes its owner and customer users may access device data as well as control the device. In order to enable claiming devices feature a system parameter security.claim.allowClaimingByDefault should be set to true, otherwise a server-side claimingAllowed attribute with the value true is obligatory for provisioned devices. See official documentation for more details regarding claiming. Available for users with 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'CLAIM_DEVICES' permission for the entity (entities).
*
* @tags device-controller
* @name ClaimDeviceUsingPost
* @summary Claim device (claimDevice)
* @request POST:/api/customer/device/{deviceName}/claim{?subCustomerId}
* @secure
* @response `200` `ClaimDeviceUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
claimDeviceUsingPost = ({ deviceName, ...query }, data, params = {}) => this.request({
    path: `/api/customer/device/${deviceName}/claim`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Returns a page of device info objects owned by the specified customer. Device Info is an extension of the default Device object that contains information about the owner name.  You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags device-controller
* @name GetCustomerDeviceInfosUsingGet
* @summary Get Customer Device Infos (getCustomerDeviceInfos)
* @request GET:/api/customer/{customerId}/deviceInfos{?active,deviceProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetCustomerDeviceInfosUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCustomerDeviceInfosUsingGet = ({ customerId, ...query }, params = {}) => this.request({
    path: `/api/customer/${customerId}/deviceInfos`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of devices objects assigned to customer. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags device-controller
* @name GetCustomerDevicesUsingGet
* @summary Get Customer Devices (getCustomerDevices)
* @request GET:/api/customer/{customerId}/devices{?page,pageSize,sortOrder,sortProperty,textSearch,type}
* @secure
* @response `200` `GetCustomerDevicesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCustomerDevicesUsingGet = ({ customerId, ...query }, params = {}) => this.request({
    path: `/api/customer/${customerId}/devices`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Create or update the Device. When creating device, platform generates Device Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). Requires to provide the Device Credentials object as well as an existing device profile ID or use "default". You may find the example of device with different type of credentials below: - Credentials type: <b>"Access token"</b> with <b>device profile ID</b> below: ```json { "device": { "name":"Name_DeviceWithCredantial_AccessToken", "label":"Label_DeviceWithCredantial_AccessToken", "deviceProfileId":{ "id":"5636aba0-1022-11ee-9631-51fb57f69174", "entityType":"DEVICE_PROFILE" } }, "credentials": { "credentialsType": "ACCESS_TOKEN", "credentialsId": "6hmxew8pmmzng4e3une2" } } ``` - Credentials type: <b>"Access token"</b> with  <b>device profile default</b> below: ```json { "device": { "name":"Name_DeviceWithCredantial_AccessToken_Default", "label":"Label_DeviceWithCredantial_AccessToken_Default", "type": "default" }, "credentials": { "credentialsType": "ACCESS_TOKEN", "credentialsId": "6hmxew8pmmzng4e3une3" } } ``` - Credentials type: <b>"X509"</b> with <b>device profile ID</b> below: Note: <b>credentialsId</b> -  format <b>Sha3Hash</b>, <b>certificateValue</b> - format <b>PEM</b> (with "--BEGIN CERTIFICATE----" and  -"----END CERTIFICATE-"). ```json "device": { "name":"Name_DeviceWithCredantial_X509_Certificate", "label":"Label_DeviceWithCredantial_X509_Certificate", "deviceProfileId":{ "id":"9d9588c0-06c9-11ee-b618-19be30fdeb60", "entityType":"DEVICE_PROFILE" } }, "credentials": { "credentialsType": "X509_CERTIFICATE", "credentialsId": "84f5911765abba1f96bf4165604e9e90338fc6214081a8e623b6ff9669aedb27", "credentialsValue": "-----BEGIN CERTIFICATE----- MIICMTCCAdegAwIBAgIUI9dBuwN6pTtK6uZ03rkiCwV4wEYwCgYIKoZIzj0EAwIwbjELMAkGA1UEBhMCVVMxETAPBgNVBAgMCE5ldyBZb3JrMRowGAYDVQQKDBFUaGluZ3NCb2FyZCwgSW5jLjEwMC4GA1UEAwwnZGV2aWNlQ2VydGlmaWNhdGVAWDUwOVByb3Zpc2lvblN0cmF0ZWd5MB4XDTIzMDMyOTE0NTYxN1oXDTI0MDMyODE0NTYxN1owbjELMAkGA1UEBhMCVVMxETAPBgNVBAgMCE5ldyBZb3JrMRowGAYDVQQKDBFUaGluZ3NCb2FyZCwgSW5jLjEwMC4GA1UEAwwnZGV2aWNlQ2VydGlmaWNhdGVAWDUwOVByb3Zpc2lvblN0cmF0ZWd5MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE9Zo791qKQiGNBm11r4ZGxh+w+ossZL3xc46ufq5QckQHP7zkD2XDAcmP5GvdkM1sBFN9AWaCkQfNnWmfERsOOKNTMFEwHQYDVR0OBBYEFFFc5uyCyglQoZiKhzXzMcQ3BKORMB8GA1UdIwQYMBaAFFFc5uyCyglQoZiKhzXzMcQ3BKORMA8GA1UdEwEB/wQFMAMBAf8wCgYIKoZIzj0EAwIDSAAwRQIhANbA9CuhoOifZMMmqkpuld+65CR+ItKdXeRAhLMZuccuAiB0FSQB34zMutXrZj1g8Gl5OkE7YryFHbei1z0SveHR8g== -----END CERTIFICATE-----" } } ``` - Credentials type: <b>"MQTT_BASIC"</b> with <b>device profile ID</b> below: ```json "device": { "name":"Name_DeviceWithCredantial_MQTT_Basic", "label":"Label_DeviceWithCredantial_MQTT_Basic", "deviceProfileId":{ "id":"9d9588c0-06c9-11ee-b618-19be30fdeb60", "entityType":"DEVICE_PROFILE" } }, "credentials": { "credentialsType": "MQTT_BASIC", "credentialsValue": "{\"clientId\":\"5euh5nzm34bjjh1efmlt\",\"userName\":\"onasd1lgwasmjl7v2v7h\",\"password\":\"b9xtm4ny8kt9zewaga5o\"}" } } ``` - You may find the example of <b>LwM2M</b> device and <b>RPK</b> credentials below: Note: LwM2M device - only existing device profile ID (Transport configuration -> Transport type: "LWM2M". ```json { "device": { "name":"Name_LwRpk00000000", "label":"Label_LwRpk00000000", "deviceProfileId":{ "id":"a660bd50-10ef-11ee-8737-b5634e73c779", "entityType":"DEVICE_PROFILE" } }, "credentials": { "credentialsType": "LWM2M_CREDENTIALS", "credentialsId": "LwRpk00000000", "credentialsValue": "{\"client\":{ \"endpoint\":\"LwRpk00000000\", \"securityConfigClientMode\":\"RPK\", \"key\":\"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEUEBxNl/RcYJNm8mk91CyVXoIJiROYDlXcSSqK6e5bDHwOW4ZiN2lNnXalyF0Jxw8MbAytnDMERXyAja5VEMeVQ==\"   }, \"bootstrap\":{ \"bootstrapServer\":{ \"securityMode\":\"RPK\", \"clientPublicKeyOrId\":\"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEUEBxNl/RcYJNm8mk91CyVXoIJiROYDlXcSSqK6e5bDHwOW4ZiN2lNnXalyF0Jxw8MbAytnDMERXyAja5VEMeVQ==\", \"clientSecretKey\":\"MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgd9GAx7yZW37autew5KZykn4IgRpge/tZSjnudnZJnMahRANCAARQQHE2X9Fxgk2byaT3ULJVeggmJE5gOVdxJKorp7lsMfA5bhmI3aU2ddqXIXQnHDwxsDK2cMwRFfICNrlUQx5V\"}, \"lwm2mServer\":{ \"securityMode\":\"RPK\", \"clientPublicKeyOrId\":\"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEUEBxNl/RcYJNm8mk91CyVXoIJiROYDlXcSSqK6e5bDHwOW4ZiN2lNnXalyF0Jxw8MbAytnDMERXyAja5VEMeVQ==\", \"clientSecretKey\":\"MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgd9GAx7yZW37autew5KZykn4IgRpge/tZSjnudnZJnMahRANCAARQQHE2X9Fxgk2byaT3ULJVeggmJE5gOVdxJKorp7lsMfA5bhmI3aU2ddqXIXQnHDwxsDK2cMwRFfICNrlUQx5V\"}} }" } } ``` Remove 'id', 'tenantId' and optionally 'customerId' from the request body example (below) to create new Device entity. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
*
* @tags device-controller
* @name SaveDeviceWithCredentialsUsingPost
* @summary Create Device (saveDevice) with credentials
* @request POST:/api/device-with-credentials{?entityGroupId,entityGroupIds}
* @secure
* @response `200` `SaveDeviceWithCredentialsUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveDeviceWithCredentialsUsingPost = (query, data, params = {}) => this.request({
    path: `/api/device-with-credentials`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description There's an ability to import the bulk of devices using the only .csv file. Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
*
* @tags device-controller
* @name ProcessDevicesBulkImportUsingPost
* @summary Import the bulk of devices (processDevicesBulkImport)
* @request POST:/api/device/bulk_import
* @secure
* @response `200` `ProcessDevicesBulkImportUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
processDevicesBulkImportUsingPost = (data, params = {}) => this.request({
    path: `/api/device/bulk_import`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description During device creation, platform generates random 'ACCESS_TOKEN' credentials. Use this method to update the device credentials. First use 'getDeviceCredentialsByDeviceId' to get the credentials id and value. Then use current method to update the credentials type and value. It is not possible to create multiple device credentials for the same device. The structure of device credentials id and value is simple for the 'ACCESS_TOKEN' but is much more complex for the 'MQTT_BASIC' or 'LWM2M_CREDENTIALS'. You may find the example of device with different type of credentials below: - Credentials type: <b>"Access token"</b> with <b>device ID</b> and with <b>device ID</b> below: ```json { "id": { "id":"c886a090-168d-11ee-87c9-6f157dbc816a" }, "deviceId": { "id":"c5fb3ac0-168d-11ee-87c9-6f157dbc816a", "entityType":"DEVICE" }, "credentialsType": "ACCESS_TOKEN", "credentialsId": "6hmxew8pmmzng4e3une4" } ``` - Credentials type: <b>"X509"</b> with <b>device profile ID</b> below: Note: <b>credentialsId</b> -  format <b>Sha3Hash</b>, <b>certificateValue</b> - format <b>PEM</b> (with "--BEGIN CERTIFICATE----" and  -"----END CERTIFICATE-"). ```json { "id": { "id":"309bd9c0-14f4-11ee-9fc9-d9b7463abb63" }, "deviceId": { "id":"3092b200-14f4-11ee-9fc9-d9b7463abb63", "entityType":"DEVICE" }, "credentialsType": "X509_CERTIFICATE", "credentialsId": "6b8adb49015500e51a527acd332b51684ab9b49b4ade03a9582a44c455e2e9b6", "credentialsValue": "-----BEGIN CERTIFICATE----- MIICMTCCAdegAwIBAgIUUEKxS9hTz4l+oLUMF0LV6TC/gCIwCgYIKoZIzj0EAwIwbjELMAkGA1UEBhMCVVMxETAPBgNVBAgMCE5ldyBZb3JrMRowGAYDVQQKDBFUaGluZ3NCb2FyZCwgSW5jLjEwMC4GA1UEAwwnZGV2aWNlUHJvZmlsZUNlcnRAWDUwOVByb3Zpc2lvblN0cmF0ZWd5MB4XDTIzMDMyOTE0NTczNloXDTI0MDMyODE0NTczNlowbjELMAkGA1UEBhMCVVMxETAPBgNVBAgMCE5ldyBZb3JrMRowGAYDVQQKDBFUaGluZ3NCb2FyZCwgSW5jLjEwMC4GA1UEAwwnZGV2aWNlUHJvZmlsZUNlcnRAWDUwOVByb3Zpc2lvblN0cmF0ZWd5MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAECMlWO72krDoUL9FQjUmSCetkhaEGJUfQkdSfkLSNa0GyAEIMbfmzI4zITeapunu4rGet3EMyLydQzuQanBicp6NTMFEwHQYDVR0OBBYEFHpZ78tPnztNii4Da/yCw6mhEIL3MB8GA1UdIwQYMBaAFHpZ78tPnztNii4Da/yCw6mhEIL3MA8GA1UdEwEB/wQFMAMBAf8wCgYIKoZIzj0EAwIDSAAwRQIgJ7qyMFqNcwSYkH6o+UlQXzLWfwZbNjVk+aR7foAZNGsCIQDsd7v3WQIGHiArfZeDs1DLEDuV/2h6L+ZNoGNhEKL+1A== -----END CERTIFICATE-----" } ``` - Credentials type: <b>"MQTT_BASIC"</b> with <b>device profile ID</b> below: ```json { "id": { "id":"d877ffb0-14f5-11ee-9fc9-d9b7463abb63" }, "deviceId": { "id":"d875dcd0-14f5-11ee-9fc9-d9b7463abb63", "entityType":"DEVICE" }, "credentialsType": "MQTT_BASIC", "credentialsValue": "{\"clientId\":\"juy03yv4owqxcmqhqtvk\",\"userName\":\"ov19fxca0cyjn7lm7w7u\",\"password\":\"twy94he114dfi9usyk1o\"}" } ``` - You may find the example of <b>LwM2M</b> device and <b>RPK</b> credentials below: Note: LwM2M device - only existing device profile ID (Transport configuration -> Transport type: "LWM2M". ```json { "id": { "id":"e238d4d0-1689-11ee-98c6-1713c1be5a8e" }, "deviceId": { "id":"e232e160-1689-11ee-98c6-1713c1be5a8e", "entityType":"DEVICE" }, "credentialsType": "LWM2M_CREDENTIALS", "credentialsId": "LwRpk00000000", "credentialsValue": "{\"client\":{ \"endpoint\":\"LwRpk00000000\", \"securityConfigClientMode\":\"RPK\", \"key\":\"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEdvBZZ2vQRK9wgDhctj6B1c7bxR3Z0wYg1+YdoYFnVUKWb+rIfTTyYK9tmQJx5Vlb5fxdLnVv1RJOPiwsLIQbAA==\"   }, \"bootstrap\":{ \"bootstrapServer\":{ \"securityMode\":\"RPK\", \"clientPublicKeyOrId\":\"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEUEBxNl/RcYJNm8mk91CyVXoIJiROYDlXcSSqK6e5bDHwOW4ZiN2lNnXalyF0Jxw8MbAytnDMERXyAja5VEMeVQ==\", \"clientSecretKey\":\"MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgd9GAx7yZW37autew5KZykn4IgRpge/tZSjnudnZJnMahRANCAARQQHE2X9Fxgk2byaT3ULJVeggmJE5gOVdxJKorp7lsMfA5bhmI3aU2ddqXIXQnHDwxsDK2cMwRFfICNrlUQx5V\"}, \"lwm2mServer\":{ \"securityMode\":\"RPK\", \"clientPublicKeyOrId\":\"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEUEBxNl/RcYJNm8mk91CyVXoIJiROYDlXcSSqK6e5bDHwOW4ZiN2lNnXalyF0Jxw8MbAytnDMERXyAja5VEMeVQ==\", \"clientSecretKey\":\"MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgd9GAx7yZW37autew5KZykn4IgRpge/tZSjnudnZJnMahRANCAARQQHE2X9Fxgk2byaT3ULJVeggmJE5gOVdxJKorp7lsMfA5bhmI3aU2ddqXIXQnHDwxsDK2cMwRFfICNrlUQx5V\"}} }" } ``` Update to real value: - 'id' (this is id of Device Credentials ->  "Get Device Credentials (getDeviceCredentialsByDeviceId)", - 'deviceId.id' (this is id of Device). Remove 'tenantId' and optionally 'customerId' from the request body example (below) to create new Device entity. Available for users with 'TENANT_ADMIN' authority.
*
* @tags device-controller
* @name UpdateDeviceCredentialsUsingPost
* @summary Update device credentials (updateDeviceCredentials)
* @request POST:/api/device/credentials
* @secure
* @response `200` `UpdateDeviceCredentialsUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
updateDeviceCredentialsUsingPost = (data, params = {}) => this.request({
    path: `/api/device/credentials`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Fetch the Device info object based on the provided Device Id. Device Info is an extension of the default Device object that contains information about the owner name. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags device-controller
* @name GetDeviceInfoByIdUsingGet
* @summary Get Device (getDeviceInfoById)
* @request GET:/api/device/info/{deviceId}
* @secure
* @response `200` `GetDeviceInfoByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getDeviceInfoByIdUsingGet = (deviceId, params = {}) => this.request({
    path: `/api/device/info/${deviceId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Deprecated. See 'getDeviceProfileNames' API from Device Profile Controller instead. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags device-controller
* @name GetDeviceTypesUsingGet
* @summary Get Device Types (getDeviceTypes)
* @request GET:/api/device/types
* @deprecated
* @secure
* @response `200` `GetDeviceTypesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getDeviceTypesUsingGet = (params = {}) => this.request({
    path: `/api/device/types`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Fetch the Device object based on the provided Device Id. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags device-controller
* @name GetDeviceByIdUsingGet
* @summary Get Device (getDeviceById)
* @request GET:/api/device/{deviceId}
* @secure
* @response `200` `GetDeviceByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getDeviceByIdUsingGet = (deviceId, params = {}) => this.request({
    path: `/api/device/${deviceId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Deletes the device, it's credentials and all the relations (from and to the device). Referencing non-existing device Id will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'DELETE' permission for the entity (entities).
*
* @tags device-controller
* @name DeleteDeviceUsingDelete
* @summary Delete device (deleteDevice)
* @request DELETE:/api/device/{deviceId}
* @secure
* @response `200` `DeleteDeviceUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteDeviceUsingDelete = (deviceId, params = {}) => this.request({
    path: `/api/device/${deviceId}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description If during device creation there wasn't specified any credentials, platform generates random 'ACCESS_TOKEN' credentials. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ_CREDENTIALS' permission for the entity (entities).
*
* @tags device-controller
* @name GetDeviceCredentialsByDeviceIdUsingGet
* @summary Get Device Credentials (getDeviceCredentialsByDeviceId)
* @request GET:/api/device/{deviceId}/credentials
* @secure
* @response `200` `GetDeviceCredentialsByDeviceIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getDeviceCredentialsByDeviceIdUsingGet = (deviceId, params = {}) => this.request({
    path: `/api/device/${deviceId}/credentials`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Returns a page of device info objects owned by the tenant or the customer of a current user. Device Info is an extension of the default Device object that contains information about the owner name.  You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags device-controller
* @name GetAllDeviceInfosUsingGet
* @summary Get All Device Infos for current user (getAllDeviceInfos)
* @request GET:/api/deviceInfos/all{?active,deviceProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetAllDeviceInfosUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getAllDeviceInfosUsingGet = (query, params = {}) => this.request({
    path: `/api/deviceInfos/all`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns all devices that are related to the specific entity. The entity id, relation type, device types, depth of the search, and other query parameters defined using complex 'DeviceSearchQuery' object. See 'Model' tab of the Parameters for more info. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags device-controller
* @name FindByQueryUsingPost1
* @summary Find related devices (findByQuery)
* @request POST:/api/devices
* @secure
* @response `200` `FindByQueryUsingPost1Data` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
findByQueryUsingPost1 = (data, params = {}) => this.request({
    path: `/api/devices`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description The platform gives an ability to load OTA (over-the-air) packages to devices. It can be done in two different ways: device scope or device profile scope.In the response you will find the number of devices with specified device profile, but without previously defined device scope OTA package. It can be useful when you want to define number of devices that will be affected with future OTA package Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags device-controller
* @name CountByDeviceProfileAndEmptyOtaPackageUsingGet
* @summary Count devices by device profile  (countByDeviceProfileAndEmptyOtaPackage)
* @request GET:/api/devices/count/{otaPackageType}/{deviceProfileId}
* @secure
* @response `200` `CountByDeviceProfileAndEmptyOtaPackageUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
countByDeviceProfileAndEmptyOtaPackageUsingGet = (otaPackageType, deviceProfileId, params = {}) => this.request({
    path: `/api/devices/count/${otaPackageType}/${deviceProfileId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description The platform gives an ability to load OTA (over-the-air) packages to devices. It can be done in two different ways: device scope or device profile scope.In the response you will find the number of devices with specified device profile, but without previously defined device scope OTA package. It can be useful when you want to define number of devices that will be affected with future OTA package Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags device-controller
* @name CountByDeviceGroupAndEmptyOtaPackageUsingGet
* @summary Count devices by device profile  (countByDeviceProfileAndEmptyOtaPackage)
* @request GET:/api/devices/count/{otaPackageType}/{otaPackageId}/{entityGroupId}
* @secure
* @response `200` `CountByDeviceGroupAndEmptyOtaPackageUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
countByDeviceGroupAndEmptyOtaPackageUsingGet = (otaPackageType, otaPackageId, entityGroupId, params = {}) => this.request({
    path: `/api/devices/count/${otaPackageType}/${otaPackageId}/${entityGroupId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Requested devices must be owned by tenant or assigned to customer which user is performing the request. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags device-controller
* @name GetDevicesByIdsUsingGet
* @summary Get Devices By Ids (getDevicesByIds)
* @request GET:/api/devices{?deviceIds}
* @secure
* @response `200` `GetDevicesByIdsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getDevicesByIdsUsingGet = (query, params = {}) => this.request({
    path: `/api/devices`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Create or update the Device. When creating device, platform generates Device Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). Device credentials are also generated if not provided in the 'accessToken' request parameter. The newly created device id will be present in the response. Specify existing Device id to update the device. Referencing non-existing device Id will cause 'Not Found' error. Device name is unique in the scope of tenant. Use unique identifiers like MAC or IMEI for the device names and non-unique 'label' field for user-friendly visualization purposes.Remove 'id', 'tenantId' and optionally 'customerId' from the request body example (below) to create new Device entity. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
*
* @tags device-controller
* @name SaveDeviceUsingPost
* @summary Create Or Update Device (saveDevice)
* @request POST:/api/device{?accessToken,entityGroupId,entityGroupIds}
* @secure
* @response `200` `SaveDeviceUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveDeviceUsingPost = (query, data, params = {}) => this.request({
    path: `/api/device`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Returns a page of Device objects that belongs to specified Entity Group Id. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags device-controller
* @name GetDevicesByEntityGroupIdUsingGet
* @summary Get devices by Entity Group Id (getDevicesByEntityGroupId)
* @request GET:/api/entityGroup/{entityGroupId}/devices{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetDevicesByEntityGroupIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getDevicesByEntityGroupIdUsingGet = ({ entityGroupId, ...query }, params = {}) => this.request({
    path: `/api/entityGroup/${entityGroupId}/devices`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Requested device must be owned by tenant that the user belongs to. Device name is an unique property of device. So it can be used to identify the device. Available for users with 'TENANT_ADMIN' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags device-controller
* @name GetTenantDeviceUsingGet
* @summary Get Tenant Device (getTenantDevice)
* @request GET:/api/tenant/devices{?deviceName}
* @secure
* @response `200` `GetTenantDeviceUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantDeviceUsingGet = (query, params = {}) => this.request({
    path: `/api/tenant/devices`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of devices owned by tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags device-controller
* @name GetTenantDevicesUsingGet
* @summary Get Tenant Devices (getTenantDevices)
* @request GET:/api/tenant/devices{?page,pageSize,sortOrder,sortProperty,textSearch,type}
* @secure
* @response `200` `GetTenantDevicesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantDevicesUsingGet = (query, params = {}) => this.request({
    path: `/api/tenant/devices`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Creates assignment of the device to tenant. Thereafter tenant will be able to reassign the device to a customer. Available for users with 'TENANT_ADMIN' authority. Security check is performed to verify that the user has 'ASSIGN_TO_TENANT' permission for the entity (entities).
*
* @tags device-controller
* @name AssignDeviceToTenantUsingPost
* @summary Assign device to tenant (assignDeviceToTenant)
* @request POST:/api/tenant/{tenantId}/device/{deviceId}
* @secure
* @response `200` `AssignDeviceToTenantUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
assignDeviceToTenantUsingPost = (tenantId, deviceId, params = {}) => this.request({
    path: `/api/tenant/${tenantId}/device/${deviceId}`,
    method: 'POST',
    secure: true, format: "json", ...params,
});
/**
* @description Returns a page of devices that are available for the current user. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags device-controller
* @name GetUserDevicesUsingGet
* @summary Get Devices (getUserDevices)
* @request GET:/api/user/devices{?page,pageSize,sortOrder,sortProperty,textSearch,type}
* @secure
* @response `200` `GetUserDevicesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getUserDevicesUsingGet = (query, params = {}) => this.request({
    path: `/api/user/devices`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* No description
*
* @tags device-group-ota-package-controller
* @name SaveDeviceGroupOtaPackageUsingPost
* @summary saveDeviceGroupOtaPackage
* @request POST:/api/deviceGroupOtaPackage
* @secure
* @response `200` `SaveDeviceGroupOtaPackageUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveDeviceGroupOtaPackageUsingPost = (data, params = {}) => this.request({
    path: `/api/deviceGroupOtaPackage`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* No description
*
* @tags device-group-ota-package-controller
* @name GetFirmwareByIdUsingGet
* @summary getFirmwareById
* @request GET:/api/deviceGroupOtaPackage/{groupId}/{firmwareType}
* @secure
* @response `200` `GetFirmwareByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getFirmwareByIdUsingGet = (groupId, firmwareType, params = {}) => this.request({
    path: `/api/deviceGroupOtaPackage/${groupId}/${firmwareType}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* No description
*
* @tags device-group-ota-package-controller
* @name DeleteDeviceGroupOtaPackageUsingDelete
* @summary deleteDeviceGroupOtaPackage
* @request DELETE:/api/deviceGroupOtaPackage/{id}
* @secure
* @response `200` `DeleteDeviceGroupOtaPackageUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteDeviceGroupOtaPackageUsingDelete = (id, params = {}) => this.request({
    path: `/api/deviceGroupOtaPackage/${id}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Create or update the Device Profile. When creating device profile, platform generates device profile id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created device profile id will be present in the response. Specify existing device profile id to update the device profile. Referencing non-existing device profile Id will cause 'Not Found' error. Device profile name is unique in the scope of tenant. Only one 'default' device profile may exist in scope of tenant. # Device profile data definition Device profile data object contains alarm rules configuration, device provision strategy and transport type configuration for device connectivity. Let's review some examples. First one is the default device profile data configuration and second one - the custom one. ```json { "alarms":[ ], "configuration":{ "type":"DEFAULT" }, "provisionConfiguration":{ "type":"DISABLED", "provisionDeviceSecret":null }, "transportConfiguration":{ "type":"DEFAULT" } } ``` ```json { "alarms":[ { "id":"2492b935-1226-59e9-8615-17d8978a4f93", "alarmType":"Temperature Alarm", "clearRule":{ "schedule":null, "condition":{ "spec":{ "type":"SIMPLE" }, "condition":[ { "key":{ "key":"temperature", "type":"TIME_SERIES" }, "value":null, "predicate":{ "type":"NUMERIC", "value":{ "userValue":null, "defaultValue":30.0, "dynamicValue":null }, "operation":"LESS" }, "valueType":"NUMERIC" } ] }, "dashboardId":null, "alarmDetails":null }, "propagate":false, "createRules":{ "MAJOR":{ "schedule":{ "type":"SPECIFIC_TIME", "endsOn":64800000, "startsOn":43200000, "timezone":"Europe/Kiev", "daysOfWeek":[ 1, 3, 5 ] }, "condition":{ "spec":{ "type":"DURATION", "unit":"MINUTES", "predicate":{ "userValue":null, "defaultValue":30, "dynamicValue":null } }, "condition":[ { "key":{ "key":"temperature", "type":"TIME_SERIES" }, "value":null, "predicate":{ "type":"COMPLEX", "operation":"OR", "predicates":[ { "type":"NUMERIC", "value":{ "userValue":null, "defaultValue":50.0, "dynamicValue":null }, "operation":"LESS_OR_EQUAL" }, { "type":"NUMERIC", "value":{ "userValue":null, "defaultValue":30.0, "dynamicValue":null }, "operation":"GREATER" } ] }, "valueType":"NUMERIC" } ] }, "dashboardId":null, "alarmDetails":null }, "WARNING":{ "schedule":{ "type":"CUSTOM", "items":[ { "endsOn":0, "enabled":false, "startsOn":0, "dayOfWeek":1 }, { "endsOn":64800000, "enabled":true, "startsOn":43200000, "dayOfWeek":2 }, { "endsOn":0, "enabled":false, "startsOn":0, "dayOfWeek":3 }, { "endsOn":57600000, "enabled":true, "startsOn":36000000, "dayOfWeek":4 }, { "endsOn":0, "enabled":false, "startsOn":0, "dayOfWeek":5 }, { "endsOn":0, "enabled":false, "startsOn":0, "dayOfWeek":6 }, { "endsOn":0, "enabled":false, "startsOn":0, "dayOfWeek":7 } ], "timezone":"Europe/Kiev" }, "condition":{ "spec":{ "type":"REPEATING", "predicate":{ "userValue":null, "defaultValue":5, "dynamicValue":null } }, "condition":[ { "key":{ "key":"tempConstant", "type":"CONSTANT" }, "value":30, "predicate":{ "type":"NUMERIC", "value":{ "userValue":null, "defaultValue":0.0, "dynamicValue":{ "inherit":false, "sourceType":"CURRENT_DEVICE", "sourceAttribute":"tempThreshold" } }, "operation":"EQUAL" }, "valueType":"NUMERIC" } ] }, "dashboardId":null, "alarmDetails":null }, "CRITICAL":{ "schedule":null, "condition":{ "spec":{ "type":"SIMPLE" }, "condition":[ { "key":{ "key":"temperature", "type":"TIME_SERIES" }, "value":null, "predicate":{ "type":"NUMERIC", "value":{ "userValue":null, "defaultValue":50.0, "dynamicValue":null }, "operation":"GREATER" }, "valueType":"NUMERIC" } ] }, "dashboardId":null, "alarmDetails":null } }, "propagateRelationTypes":null } ], "configuration":{ "type":"DEFAULT" }, "provisionConfiguration":{ "type":"ALLOW_CREATE_NEW_DEVICES", "provisionDeviceSecret":"vaxb9hzqdbz3oqukvomg" }, "transportConfiguration":{ "type":"MQTT", "deviceTelemetryTopic":"v1/devices/me/telemetry", "deviceAttributesTopic":"v1/devices/me/attributes", "transportPayloadTypeConfiguration":{ "transportPayloadType":"PROTOBUF", "deviceTelemetryProtoSchema":"syntax =\"proto3\";\npackage telemetry;\n\nmessage SensorDataReading {\n\n  optional double temperature = 1;\n  optional double humidity = 2;\n  InnerObject innerObject = 3;\n\n  message InnerObject {\n    optional string key1 = 1;\n    optional bool key2 = 2;\n    optional double key3 = 3;\n    optional int32 key4 = 4;\n    optional string key5 = 5;\n  }\n}", "deviceAttributesProtoSchema":"syntax =\"proto3\";\npackage attributes;\n\nmessage SensorConfiguration {\n  optional string firmwareVersion = 1;\n  optional string serialNumber = 2;\n}", "deviceRpcRequestProtoSchema":"syntax =\"proto3\";\npackage rpc;\n\nmessage RpcRequestMsg {\n  optional string method = 1;\n  optional int32 requestId = 2;\n  optional string params = 3;\n}", "deviceRpcResponseProtoSchema":"syntax =\"proto3\";\npackage rpc;\n\nmessage RpcResponseMsg {\n  optional string payload = 1;\n}" } } } ``` Let's review some specific objects examples related to the device profile configuration: # Alarm Schedule Alarm Schedule JSON object represents the time interval during which the alarm rule is active. Note, ```json "schedule": null ``` means alarm rule is active all the time. **'daysOfWeek'** field represents Monday as 1, Tuesday as 2 and so on. **'startsOn'** and **'endsOn'** fields represent hours in millis (e.g. 64800000 = 18:00 or 6pm). **'enabled'** flag specifies if item in a custom rule is active for specific day of the week: ## Specific Time Schedule ```json { "schedule":{ "type":"SPECIFIC_TIME", "endsOn":64800000, "startsOn":43200000, "timezone":"Europe/Kiev", "daysOfWeek":[ 1, 3, 5 ] } } ``` ## Custom Schedule ```json { "schedule":{ "type":"CUSTOM", "items":[ { "endsOn":0, "enabled":false, "startsOn":0, "dayOfWeek":1 }, { "endsOn":64800000, "enabled":true, "startsOn":43200000, "dayOfWeek":2 }, { "endsOn":0, "enabled":false, "startsOn":0, "dayOfWeek":3 }, { "endsOn":57600000, "enabled":true, "startsOn":36000000, "dayOfWeek":4 }, { "endsOn":0, "enabled":false, "startsOn":0, "dayOfWeek":5 }, { "endsOn":0, "enabled":false, "startsOn":0, "dayOfWeek":6 }, { "endsOn":0, "enabled":false, "startsOn":0, "dayOfWeek":7 } ], "timezone":"Europe/Kiev" } } ``` # Alarm condition type (**'spec'**) Alarm condition type can be either simple, duration, or repeating. For example, 5 times in a row or during 5 minutes. Note, **'userValue'** field is not used and reserved for future usage, **'dynamicValue'** is used for condition appliance by using the value of the **'sourceAttribute'** or else **'defaultValue'** is used (if **'sourceAttribute'** is absent). **'sourceType'** of the **'sourceAttribute'** can be: * 'CURRENT_DEVICE'; * 'CURRENT_CUSTOMER'; * 'CURRENT_TENANT'. **'sourceAttribute'** can be inherited from the owner if **'inherit'** is set to true (for CURRENT_DEVICE and CURRENT_CUSTOMER). ## Repeating alarm condition ```json { "spec":{ "type":"REPEATING", "predicate":{ "userValue":null, "defaultValue":5, "dynamicValue":{ "inherit":true, "sourceType":"CURRENT_DEVICE", "sourceAttribute":"tempAttr" } } } } ``` ## Duration alarm condition ```json { "spec":{ "type":"DURATION", "unit":"MINUTES", "predicate":{ "userValue":null, "defaultValue":30, "dynamicValue":null } } } ``` **'unit'** can be: * 'SECONDS'; * 'MINUTES'; * 'HOURS'; * 'DAYS'. # Key Filters Key filter objects are created under the **'condition'** array. They allow you to define complex logical expressions over entity field, attribute, latest time-series value or constant. The filter is defined using 'key', 'valueType', 'value' (refers to the value of the 'CONSTANT' alarm filter key type) and 'predicate' objects. Let's review each object: ## Alarm Filter Key Filter Key defines either entity field, attribute, telemetry or constant. It is a JSON object that consists the key name and type. The following filter key types are supported: * 'ATTRIBUTE' - used for attributes values; * 'TIME_SERIES' - used for time-series values; * 'ENTITY_FIELD' - used for accessing entity fields like 'name', 'label', etc. The list of available fields depends on the entity type; * 'CONSTANT' - constant value specified. Let's review the example: ```json { "type": "TIME_SERIES", "key": "temperature" } ``` ## Value Type and Operations Provides a hint about the data type of the entity field that is defined in the filter key. The value type impacts the list of possible operations that you may use in the corresponding predicate. For example, you may use 'STARTS_WITH' or 'END_WITH', but you can't use 'GREATER_OR_EQUAL' for string values.The following filter value types and corresponding predicate operations are supported: * 'STRING' - used to filter any 'String' or 'JSON' values. Operations: EQUAL, NOT_EQUAL, STARTS_WITH, ENDS_WITH, CONTAINS, NOT_CONTAINS; * 'NUMERIC' - used for 'Long' and 'Double' values. Operations: EQUAL, NOT_EQUAL, GREATER, LESS, GREATER_OR_EQUAL, LESS_OR_EQUAL; * 'BOOLEAN' - used for boolean values. Operations: EQUAL, NOT_EQUAL; * 'DATE_TIME' - similar to numeric, transforms value to milliseconds since epoch. Operations: EQUAL, NOT_EQUAL, GREATER, LESS, GREATER_OR_EQUAL, LESS_OR_EQUAL; ## Filter Predicate Filter Predicate defines the logical expression to evaluate. The list of available operations depends on the filter value type, see above. Platform supports 4 predicate types: 'STRING', 'NUMERIC', 'BOOLEAN' and 'COMPLEX'. The last one allows to combine multiple operations over one filter key. Simple predicate example to check 'value < 100': ```json { "operation": "LESS", "value": { "userValue": null, "defaultValue": 100, "dynamicValue": null }, "type": "NUMERIC" } ``` Complex predicate example, to check 'value < 10 or value > 20': ```json { "type": "COMPLEX", "operation": "OR", "predicates": [ { "operation": "LESS", "value": { "userValue": null, "defaultValue": 10, "dynamicValue": null }, "type": "NUMERIC" }, { "operation": "GREATER", "value": { "userValue": null, "defaultValue": 20, "dynamicValue": null }, "type": "NUMERIC" } ] } ``` More complex predicate example, to check 'value < 10 or (value > 50 && value < 60)': ```json { "type": "COMPLEX", "operation": "OR", "predicates": [ { "operation": "LESS", "value": { "userValue": null, "defaultValue": 10, "dynamicValue": null }, "type": "NUMERIC" }, { "type": "COMPLEX", "operation": "AND", "predicates": [ { "operation": "GREATER", "value": { "userValue": null, "defaultValue": 50, "dynamicValue": null }, "type": "NUMERIC" }, { "operation": "LESS", "value": { "userValue": null, "defaultValue": 60, "dynamicValue": null }, "type": "NUMERIC" } ] } ] } ``` You may also want to replace hardcoded values (for example, temperature > 20) with the more dynamic expression (for example, temperature > value of the tenant attribute with key 'temperatureThreshold'). It is possible to use 'dynamicValue' to define attribute of the tenant, customer or device. See example below: ```json { "operation": "GREATER", "value": { "userValue": null, "defaultValue": 0, "dynamicValue": { "inherit": false, "sourceType": "CURRENT_TENANT", "sourceAttribute": "temperatureThreshold" } }, "type": "NUMERIC" } ``` Note that you may use 'CURRENT_DEVICE', 'CURRENT_CUSTOMER' and 'CURRENT_TENANT' as a 'sourceType'. The 'defaultValue' is used when the attribute with such a name is not defined for the chosen source. The 'sourceAttribute' can be inherited from the owner of the specified 'sourceType' if 'inherit' is set to true. # Provision Configuration There are 3 types of device provision configuration for the device profile: * 'DISABLED'; * 'ALLOW_CREATE_NEW_DEVICES'; * 'CHECK_PRE_PROVISIONED_DEVICES'. Please refer to the [docs](https://thingsboard.io/docs/user-guide/device-provisioning/) for more details. # Transport Configuration 5 transport configuration types are available: * 'DEFAULT'; * 'MQTT'; * 'LWM2M'; * 'COAP'; * 'SNMP'. Default type supports basic MQTT, HTTP, CoAP and LwM2M transports. Please refer to the [docs](https://thingsboard.io/docs/user-guide/device-profiles/#transport-configuration) for more details about other types. See another example of COAP transport configuration below: ```json { "type":"COAP", "clientSettings":{ "edrxCycle":null, "powerMode":"DRX", "psmActivityTimer":null, "pagingTransmissionWindow":null }, "coapDeviceTypeConfiguration":{ "coapDeviceType":"DEFAULT", "transportPayloadTypeConfiguration":{ "transportPayloadType":"JSON" } } } ```Remove 'id', 'tenantId' from the request body example (below) to create new Device Profile entity. Available for users with 'TENANT_ADMIN' authority.
*
* @tags device-profile-controller
* @name SaveDeviceProfileUsingPost
* @summary Create Or Update Device Profile (saveDeviceProfile)
* @request POST:/api/deviceProfile
* @secure
* @response `200` `SaveDeviceProfileUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveDeviceProfileUsingPost = (data, params = {}) => this.request({
    path: `/api/deviceProfile`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Get a set of unique attribute keys used by devices that belong to specified profile. If profile is not set returns a list of unique keys among all profiles. The call is used for auto-complete in the UI forms. The implementation limits the number of devices that participate in search to 100 as a trade of between accurate results and time-consuming queries. Available for users with 'TENANT_ADMIN' authority.
*
* @tags device-profile-controller
* @name GetAttributesKeysUsingGet
* @summary Get attribute keys (getAttributesKeys)
* @request GET:/api/deviceProfile/devices/keys/attributes{?deviceProfileId}
* @secure
* @response `200` `GetAttributesKeysUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getAttributesKeysUsingGet = (query, params = {}) => this.request({
    path: `/api/deviceProfile/devices/keys/attributes`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Get a set of unique time-series keys used by devices that belong to specified profile. If profile is not set returns a list of unique keys among all profiles. The call is used for auto-complete in the UI forms. The implementation limits the number of devices that participate in search to 100 as a trade of between accurate results and time-consuming queries. Available for users with 'TENANT_ADMIN' authority.
*
* @tags device-profile-controller
* @name GetTimeseriesKeysUsingGet
* @summary Get time-series keys (getTimeseriesKeys)
* @request GET:/api/deviceProfile/devices/keys/timeseries{?deviceProfileId}
* @secure
* @response `200` `GetTimeseriesKeysUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTimeseriesKeysUsingGet = (query, params = {}) => this.request({
    path: `/api/deviceProfile/devices/keys/timeseries`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a set of unique device profile names owned by the tenant. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags device-profile-controller
* @name GetDeviceProfileNamesUsingGet
* @summary Get Device Profile names (getDeviceProfileNames)
* @request GET:/api/deviceProfile/names{?activeOnly}
* @secure
* @response `200` `GetDeviceProfileNamesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getDeviceProfileNamesUsingGet = (query, params = {}) => this.request({
    path: `/api/deviceProfile/names`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Deletes the device profile. Referencing non-existing device profile Id will cause an error. Can't delete the device profile if it is referenced by existing devices. Available for users with 'TENANT_ADMIN' authority.
*
* @tags device-profile-controller
* @name DeleteDeviceProfileUsingDelete
* @summary Delete device profile (deleteDeviceProfile)
* @request DELETE:/api/deviceProfile/{deviceProfileId}
* @secure
* @response `200` `DeleteDeviceProfileUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteDeviceProfileUsingDelete = (deviceProfileId, params = {}) => this.request({
    path: `/api/deviceProfile/${deviceProfileId}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Marks device profile as default within a tenant scope. Available for users with 'TENANT_ADMIN' authority.
*
* @tags device-profile-controller
* @name SetDefaultDeviceProfileUsingPost
* @summary Make Device Profile Default (setDefaultDeviceProfile)
* @request POST:/api/deviceProfile/{deviceProfileId}/default
* @secure
* @response `200` `SetDefaultDeviceProfileUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
setDefaultDeviceProfileUsingPost = (deviceProfileId, params = {}) => this.request({
    path: `/api/deviceProfile/${deviceProfileId}/default`,
    method: 'POST',
    secure: true, format: "json", ...params,
});
/**
* @description Fetch the Device Profile object based on the provided Device Profile Id. The server checks that the device profile is owned by the same tenant. Available for users with 'TENANT_ADMIN' authority.
*
* @tags device-profile-controller
* @name GetDeviceProfileByIdUsingGet
* @summary Get Device Profile (getDeviceProfileById)
* @request GET:/api/deviceProfile/{deviceProfileId}{?inlineImages}
* @secure
* @response `200` `GetDeviceProfileByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getDeviceProfileByIdUsingGet = ({ deviceProfileId, ...query }, params = {}) => this.request({
    path: `/api/deviceProfile/${deviceProfileId}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Fetch the Default Device Profile Info object. Device Profile Info is a lightweight object that includes main information about Device Profile excluding the heavyweight configuration object. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags device-profile-controller
* @name GetDefaultDeviceProfileInfoUsingGet
* @summary Get Default Device Profile (getDefaultDeviceProfileInfo)
* @request GET:/api/deviceProfileInfo/default
* @secure
* @response `200` `GetDefaultDeviceProfileInfoUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getDefaultDeviceProfileInfoUsingGet = (params = {}) => this.request({
    path: `/api/deviceProfileInfo/default`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Fetch the Device Profile Info object based on the provided Device Profile Id. Device Profile Info is a lightweight object that includes main information about Device Profile excluding the heavyweight configuration object. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags device-profile-controller
* @name GetDeviceProfileInfoByIdUsingGet
* @summary Get Device Profile Info (getDeviceProfileInfoById)
* @request GET:/api/deviceProfileInfo/{deviceProfileId}
* @secure
* @response `200` `GetDeviceProfileInfoByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getDeviceProfileInfoByIdUsingGet = (deviceProfileId, params = {}) => this.request({
    path: `/api/deviceProfileInfo/${deviceProfileId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Requested device profiles must be owned by tenant which is performing the request. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags device-profile-controller
* @name GetDeviceProfilesByIdsUsingGet
* @summary Get Device Profiles By Ids (getDeviceProfilesByIds)
* @request GET:/api/deviceProfileInfos{?deviceProfileIds}
* @secure
* @response `200` `GetDeviceProfilesByIdsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getDeviceProfilesByIdsUsingGet = (query, params = {}) => this.request({
    path: `/api/deviceProfileInfos`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of devices profile info objects owned by tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Device Profile Info is a lightweight object that includes main information about Device Profile excluding the heavyweight configuration object. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags device-profile-controller
* @name GetDeviceProfileInfosUsingGet
* @summary Get Device Profiles for transport type (getDeviceProfileInfos)
* @request GET:/api/deviceProfileInfos{?page,pageSize,sortOrder,sortProperty,textSearch,transportType}
* @secure
* @response `200` `GetDeviceProfileInfosUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getDeviceProfileInfosUsingGet = (query, params = {}) => this.request({
    path: `/api/deviceProfileInfos`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of devices profile objects owned by tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' authority.
*
* @tags device-profile-controller
* @name GetDeviceProfilesUsingGet
* @summary Get Device Profiles (getDeviceProfiles)
* @request GET:/api/deviceProfiles{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetDeviceProfilesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getDeviceProfilesUsingGet = (query, params = {}) => this.request({
    path: `/api/deviceProfiles`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of edge info objects owned by the specified customer. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags edge-controller
* @name GetCustomerEdgeInfosUsingGet
* @summary Get Customer Edge Infos (getCustomerEdgeInfos)
* @request GET:/api/customer/{customerId}/edgeInfos{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch,type}
* @secure
* @response `200` `GetCustomerEdgeInfosUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCustomerEdgeInfosUsingGet = ({ customerId, ...query }, params = {}) => this.request({
    path: `/api/customer/${customerId}/edgeInfos`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of edges objects assigned to customer. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags edge-controller
* @name GetCustomerEdgesUsingGet
* @summary Get Customer Edges (getCustomerEdges)
* @request GET:/api/customer/{customerId}/edges{?page,pageSize,sortOrder,sortProperty,textSearch,type}
* @secure
* @response `200` `GetCustomerEdgesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCustomerEdgesUsingGet = ({ customerId, ...query }, params = {}) => this.request({
    path: `/api/customer/${customerId}/edges`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description There's an ability to import the bulk of edges using the only .csv file. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags edge-controller
* @name ProcessEdgesBulkImportUsingPost
* @summary Import the bulk of edges (processEdgesBulkImport)
* @request POST:/api/edge/bulk_import
* @secure
* @response `200` `ProcessEdgesBulkImportUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
processEdgesBulkImportUsingPost = (data, params = {}) => this.request({
    path: `/api/edge/bulk_import`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Get the Edge info object based on the provided Edge Id. If the user has the authority of 'Tenant Administrator', the server checks that the edge is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the edge is assigned to the same customer. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags edge-controller
* @name GetEdgeInfoByIdUsingGet
* @summary Get Edge Info (getEdgeInfoById)
* @request GET:/api/edge/info/{edgeId}
* @secure
* @response `200` `GetEdgeInfoByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEdgeInfoByIdUsingGet = (edgeId, params = {}) => this.request({
    path: `/api/edge/info/${edgeId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Get an install instructions for provided edge id.If the user has the authority of 'Tenant Administrator', the server checks that the edge is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the edge is assigned to the same customer. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags edge-controller
* @name GetEdgeInstallInstructionsUsingGet
* @summary Get Edge Install Instructions (getEdgeInstallInstructions)
* @request GET:/api/edge/instructions/install/{edgeId}/{method}
* @secure
* @response `200` `GetEdgeInstallInstructionsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEdgeInstallInstructionsUsingGet = (edgeId, method, params = {}) => this.request({
    path: `/api/edge/instructions/install/${edgeId}/${method}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Get an upgrade instructions for provided edge vesion.If the user has the authority of 'Tenant Administrator', the server checks that the edge is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the edge is assigned to the same customer. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags edge-controller
* @name GetEdgeUpgradeInstructionsUsingGet
* @summary Get Edge Upgrade Instructions (getEdgeUpgradeInstructions)
* @request GET:/api/edge/instructions/upgrade/{edgeVersion}/{method}
* @secure
* @response `200` `GetEdgeUpgradeInstructionsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEdgeUpgradeInstructionsUsingGet = (edgeVersion, method, params = {}) => this.request({
    path: `/api/edge/instructions/upgrade/${edgeVersion}/${method}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Returns list of rule chains ids that are not assigned to particular edge, but these rule chains are present in the already assigned rule chains to edge. Available for users with 'TENANT_ADMIN' authority.
*
* @tags edge-controller
* @name FindMissingToRelatedRuleChainsUsingGet
* @summary Find missing rule chains (findMissingToRelatedRuleChains)
* @request GET:/api/edge/missingToRelatedRuleChains/{edgeId}
* @secure
* @response `200` `FindMissingToRelatedRuleChainsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
findMissingToRelatedRuleChainsUsingGet = (edgeId, params = {}) => this.request({
    path: `/api/edge/missingToRelatedRuleChains/${edgeId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Starts synchronization process between edge and cloud. All entities that are assigned to particular edge are going to be send to remote edge service. Available for users with 'TENANT_ADMIN' authority.
*
* @tags edge-controller
* @name SyncEdgeUsingPost
* @summary Sync edge (syncEdge)
* @request POST:/api/edge/sync/{edgeId}
* @secure
* @response `200` `SyncEdgeUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
syncEdgeUsingPost = (edgeId, params = {}) => this.request({
    path: `/api/edge/sync/${edgeId}`,
    method: 'POST',
    secure: true, format: "json", ...params,
});
/**
* @description Returns a set of unique edge types based on edges that are either owned by the tenant or assigned to the customer which user is performing the request. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags edge-controller
* @name GetEdgeTypesUsingGet
* @summary Get Edge Types (getEdgeTypes)
* @request GET:/api/edge/types
* @secure
* @response `200` `GetEdgeTypesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEdgeTypesUsingGet = (params = {}) => this.request({
    path: `/api/edge/types`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Get the Edge object based on the provided Edge Id. If the user has the authority of 'Tenant Administrator', the server checks that the edge is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the edge is assigned to the same customer. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags edge-controller
* @name GetEdgeByIdUsingGet
* @summary Get Edge (getEdgeById)
* @request GET:/api/edge/{edgeId}
* @secure
* @response `200` `GetEdgeByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEdgeByIdUsingGet = (edgeId, params = {}) => this.request({
    path: `/api/edge/${edgeId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Deletes the edge. Referencing non-existing edge Id will cause an error. Available for users with 'TENANT_ADMIN' authority.
*
* @tags edge-controller
* @name DeleteEdgeUsingDelete
* @summary Delete edge (deleteEdge)
* @request DELETE:/api/edge/{edgeId}
* @secure
* @response `200` `DeleteEdgeUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteEdgeUsingDelete = (edgeId, params = {}) => this.request({
    path: `/api/edge/${edgeId}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Returns 'true' if upgrade available for connected edge, 'false' - otherwise.
*
* @tags edge-controller
* @name IsEdgeUpgradeAvailableUsingGet
* @summary Is edge upgrade enabled (isEdgeUpgradeAvailable)
* @request GET:/api/edge/{edgeId}/upgrade/available
* @secure
* @response `200` `IsEdgeUpgradeAvailableUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
isEdgeUpgradeAvailableUsingGet = (edgeId, params = {}) => this.request({
    path: `/api/edge/${edgeId}/upgrade/available`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Change root rule chain of the edge to the new provided rule chain. This operation will send a notification to update root rule chain on remote edge service. Available for users with 'TENANT_ADMIN' authority.
*
* @tags edge-controller
* @name SetEdgeRootRuleChainUsingPost
* @summary Set root rule chain for provided edge (setEdgeRootRuleChain)
* @request POST:/api/edge/{edgeId}/{ruleChainId}/root
* @secure
* @response `200` `SetEdgeRootRuleChainUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
setEdgeRootRuleChainUsingPost = (edgeId, ruleChainId, params = {}) => this.request({
    path: `/api/edge/${edgeId}/${ruleChainId}/root`,
    method: 'POST',
    secure: true, format: "json", ...params,
});
/**
* @description Returns a page of edge info objects owned by the tenant or the customer of a current user. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags edge-controller
* @name GetAllEdgeInfosUsingGet
* @summary Get All Edge Infos for current user (getAllEdgeInfos)
* @request GET:/api/edgeInfos/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch,type}
* @secure
* @response `200` `GetAllEdgeInfosUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getAllEdgeInfosUsingGet = (query, params = {}) => this.request({
    path: `/api/edgeInfos/all`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns all edges that are related to the specific entity. The entity id, relation type, edge types, depth of the search, and other query parameters defined using complex 'EdgeSearchQuery' object. See 'Model' tab of the Parameters for more info. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags edge-controller
* @name FindByQueryUsingPost2
* @summary Find related edges (findByQuery)
* @request POST:/api/edges
* @secure
* @response `200` `FindByQueryUsingPost2Data` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
findByQueryUsingPost2 = (data, params = {}) => this.request({
    path: `/api/edges`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Returns 'true' if edges support enabled on server, 'false' - otherwise.
*
* @tags edge-controller
* @name IsEdgesSupportEnabledUsingGet
* @summary Is edges support enabled (isEdgesSupportEnabled)
* @request GET:/api/edges/enabled
* @secure
* @response `200` `IsEdgesSupportEnabledUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
isEdgesSupportEnabledUsingGet = (params = {}) => this.request({
    path: `/api/edges/enabled`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Requested edges must be owned by tenant or assigned to customer which user is performing the request. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags edge-controller
* @name GetEdgesByIdsUsingGet
* @summary Get Edges By Ids (getEdgesByIds)
* @request GET:/api/edges{?edgeIds}
* @secure
* @response `200` `GetEdgesByIdsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEdgesByIdsUsingGet = (query, params = {}) => this.request({
    path: `/api/edges`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of edges owned by tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' authority.
*
* @tags edge-controller
* @name GetEdgesUsingGet
* @summary Get Tenant Edges (getEdges)
* @request GET:/api/edges{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetEdgesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEdgesUsingGet = (query, params = {}) => this.request({
    path: `/api/edges`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Create or update the Edge. When creating edge, platform generates Edge Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created edge id will be present in the response. Specify existing Edge id to update the edge. Referencing non-existing Edge Id will cause 'Not Found' error. Edge name is unique in the scope of tenant. Use unique identifiers like MAC or IMEI for the edge names and non-unique 'label' field for user-friendly visualization purposes.Remove 'id', 'tenantId' and optionally 'customerId' from the request body example (below) to create new Edge entity.
*
* @tags edge-controller
* @name SaveEdgeUsingPost
* @summary Create Or Update Edge (saveEdge)
* @request POST:/api/edge{?entityGroupId,entityGroupIds}
* @secure
* @response `200` `SaveEdgeUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveEdgeUsingPost = (query, data, params = {}) => this.request({
    path: `/api/edge`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Returns a page of Edge objects that belongs to specified Entity Group Id. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags edge-controller
* @name GetEdgesByEntityGroupIdUsingGet
* @summary Get edges by Entity Group Id (getEdgesByEntityGroupId)
* @request GET:/api/entityGroup/{entityGroupId}/edges{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetEdgesByEntityGroupIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEdgesByEntityGroupIdUsingGet = ({ entityGroupId, ...query }, params = {}) => this.request({
    path: `/api/entityGroup/${entityGroupId}/edges`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Activates edge license on license portal.
*
* @tags edge-controller
* @name ActivateInstanceUsingPost
* @summary Activate edge instance (activateInstance)
* @request POST:/api/license/activateInstance{?licenseSecret,releaseDate}
* @secure
* @response `200` `ActivateInstanceUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
activateInstanceUsingPost = (query, params = {}) => this.request({
    path: `/api/license/activateInstance`,
    method: 'POST',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Checks license request from edge service by forwarding request to license portal.
*
* @tags edge-controller
* @name CheckInstanceUsingPost
* @summary Check edge license (checkInstance)
* @request POST:/api/license/checkInstance
* @secure
* @response `200` `CheckInstanceUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
checkInstanceUsingPost = (data, params = {}) => this.request({
    path: `/api/license/checkInstance`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Requested edge must be owned by tenant or customer that the user belongs to. Edge name is an unique property of edge. So it can be used to identify the edge. Available for users with 'TENANT_ADMIN' authority.
*
* @tags edge-controller
* @name GetTenantEdgeUsingGet
* @summary Get Tenant Edge (getTenantEdge)
* @request GET:/api/tenant/edges{?edgeName}
* @secure
* @response `200` `GetTenantEdgeUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantEdgeUsingGet = (query, params = {}) => this.request({
    path: `/api/tenant/edges`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of edges owned by tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' authority.
*
* @tags edge-controller
* @name GetTenantEdgesUsingGet
* @summary Get Tenant Edges (getTenantEdges)
* @request GET:/api/tenant/edges{?page,pageSize,sortOrder,sortProperty,textSearch,type}
* @secure
* @response `200` `GetTenantEdgesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantEdgesUsingGet = (query, params = {}) => this.request({
    path: `/api/tenant/edges`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of edges available for current user. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags edge-controller
* @name GetUserEdgesUsingGet
* @summary Get Edges (getUserEdges)
* @request GET:/api/user/edges{?page,pageSize,sortOrder,sortProperty,textSearch,type}
* @secure
* @response `200` `GetUserEdgesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getUserEdgesUsingGet = (query, params = {}) => this.request({
    path: `/api/user/edges`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of edge events for the requested edge. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details.
*
* @tags edge-event-controller
* @name GetEdgeEventsUsingGet
* @summary Get Edge Events (getEdgeEvents)
* @request GET:/api/edge/{edgeId}/events{?endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}
* @secure
* @response `200` `GetEdgeEventsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEdgeEventsUsingGet = ({ edgeId, ...query }, params = {}) => this.request({
    path: `/api/edge/${edgeId}/events`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Lists branches available in the remote repository. Response example: ```json [ { "name": "master", "default": true }, { "name": "dev", "default": false }, { "name": "dev-2", "default": false } ] ```
*
* @tags entities-version-control-controller
* @name ListBranchesUsingGet
* @summary List branches (listBranches)
* @request GET:/api/entities/vc/branches
* @secure
* @response `200` `ListBranchesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
listBranchesUsingGet = (params = {}) => this.request({
    path: `/api/entities/vc/branches`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Returns an object with current entity data and the one at a specific version. Entity data structure is the same as stored in a repository. Available for users with 'TENANT_ADMIN' authority.
*
* @tags entities-version-control-controller
* @name CompareEntityDataToVersionUsingGet
* @summary Compare entity data to version (compareEntityDataToVersion)
* @request GET:/api/entities/vc/diff/{entityType}/{internalEntityUuid}{?versionId}
* @secure
* @response `200` `CompareEntityDataToVersionUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
compareEntityDataToVersionUsingGet = ({ entityType, internalEntityUuid, ...query }, params = {}) => this.request({
    path: `/api/entities/vc/diff/${entityType}/${internalEntityUuid}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Loads specific version of remote entities (or single entity) by request. Supported entity types: CUSTOMER, ASSET, RULE_CHAIN, DASHBOARD, DEVICE_PROFILE, DEVICE, ENTITY_VIEW, WIDGETS_BUNDLE, CONVERTER, INTEGRATION, ROLE and USER group. There are multiple types of request. Each of them requires branch name (`branch`) and version id (`versionId`). Request of type `SINGLE_ENTITY` is needed to restore a concrete version of a specific entity. It contains id of a remote entity (`externalEntityId`), internal entity id (`internalEntityId`) and additional configuration (`config`): - `loadRelations` - to update relations list (in case `saveRelations` option was enabled during version creation); - `loadAttributes` - to load entity attributes (if `saveAttributes` config option was enabled); - `loadCredentials` - to update device credentials (if `saveCredentials` option was enabled during version creation); - `loadPermissions` - when loading user group, to update group permission list; - `loadGroupEntities` - when loading an entity group, to load its entities as well; - `autoGenerateIntegrationKey` - if loading integration version, to autogenerate routing key. An example of such request: ```json { "type": "SINGLE_ENTITY", "branch": "dev", "versionId": "b3c28d722d328324c7c15b0b30047b0c40011cf7", "externalEntityId": { "entityType": "DEVICE", "id": "b7944123-d4f4-11ec-847b-0f432358ab48" }, "config": { "loadRelations": false, "loadAttributes": true, "loadCredentials": true } } ``` Another request type (`ENTITY_TYPE`) is needed to load specific version of the whole entity types. It contains a structure with entity types to load and configs for each entity type (`entityTypes`). For each specified entity type, the method will load all remote entities of this type that are present at the version. A config for each entity type contains the same options as in `SINGLE_ENTITY` request type, and additionally contains following options: - `removeOtherEntities` - to remove local entities that are not present on the remote - basically to    overwrite local entity type with the remote one; - `findExistingEntityByName` - when you are loading some remote entities that are not yet present at this tenant,    try to find existing entity by name and update it rather than create new. Here is an example of the request to completely restore version of the whole device entity type: ```json { "type": "ENTITY_TYPE", "branch": "dev", "versionId": "b3c28d722d328324c7c15b0b30047b0c40011cf7", "entityTypes": { "DEVICE": { "removeOtherEntities": true, "findExistingEntityByName": false, "loadRelations": true, "loadAttributes": true, "loadCredentials": true } } } ``` The response will contain generated request UUID that is to be used to check the status of operation via `getVersionLoadRequestStatus`. Available for users with 'TENANT_ADMIN' authority.
*
* @tags entities-version-control-controller
* @name LoadEntitiesVersionUsingPost
* @summary Load entities version (loadEntitiesVersion)
* @request POST:/api/entities/vc/entity
* @secure
* @response `200` `LoadEntitiesVersionUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
loadEntitiesVersionUsingPost = (data, params = {}) => this.request({
    path: `/api/entities/vc/entity`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Returns a list of remote entities of a specific entity type that are available at a concrete version. Each entity item in the result has `externalId` property. Entities order will be the same as in the repository. Available for users with 'TENANT_ADMIN' authority.
*
* @tags entities-version-control-controller
* @name ListEntitiesAtVersionUsingGet
* @summary List entities at version (listEntitiesAtVersion)
* @request GET:/api/entities/vc/entity/{entityType}/{versionId}
* @secure
* @response `200` `ListEntitiesAtVersionUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
listEntitiesAtVersionUsingGet = (entityType, versionId, params = {}) => this.request({
    path: `/api/entities/vc/entity/${entityType}/${versionId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Returns the status of previously made version load request. The structure contains following parameters: - `done` - if the request was successfully processed; - `result` - a list of load results for each entity type: - `created` - created entities count; - `updated` - updated entities count; - `deleted` - removed entities count; - `groupsCreated` - created entity groups count; - `groupsUpdated` - updated entity groups count; - `groupsDeleted` - removed entity groups count. - `error` - if an error occurred during processing, error info: - `type` - error type; - `source` - an external id of remote entity; - `target` - if failed to find referenced entity by external id - this external id; - `message` - error message. An example of successfully processed request status: ```json { "done": true, "result": [ { "entityType": "DEVICE", "created": 10, "updated": 5, "deleted": 5, "groupsCreated": 1, "groupsUpdated": 1, "groupsDeleted": 1 }, { "entityType": "ASSET", "created": 4, "updated": 0, "deleted": 8, "groupsCreated": 1, "groupsUpdated": 0, "groupsDeleted": 2 } ] } ``` Available for users with 'TENANT_ADMIN' authority.
*
* @tags entities-version-control-controller
* @name GetVersionLoadRequestStatusUsingGet
* @summary Get version load request status (getVersionLoadRequestStatus)
* @request GET:/api/entities/vc/entity/{requestId}/status
* @secure
* @response `200` `GetVersionLoadRequestStatusUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getVersionLoadRequestStatusUsingGet = (requestId, params = {}) => this.request({
    path: `/api/entities/vc/entity/${requestId}/status`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Returns a list of all remote entities available in a specific version. Response type is the same as for listAllEntitiesAtVersion API method. Returned entities order will be the same as in the repository. Available for users with 'TENANT_ADMIN' authority.
*
* @tags entities-version-control-controller
* @name ListAllEntitiesAtVersionUsingGet
* @summary List all entities at version (listAllEntitiesAtVersion)
* @request GET:/api/entities/vc/entity/{versionId}
* @secure
* @response `200` `ListAllEntitiesAtVersionUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
listAllEntitiesAtVersionUsingGet = (versionId, params = {}) => this.request({
    path: `/api/entities/vc/entity/${versionId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Retrieves short info about the remote entity by external id at a concrete version. Returned entity data info contains following properties: `hasRelations` (whether stored entity data contains relations), `hasAttributes` (contains attributes), `hasCredentials` (whether stored device data has credentials), `hasPermissions` (user group data contains group permission list) and `hasGroupEntities` (entity group data contains group entities). Available for users with 'TENANT_ADMIN' authority.
*
* @tags entities-version-control-controller
* @name GetEntityDataInfoUsingGet
* @summary Get entity data info (getEntityDataInfo)
* @request GET:/api/entities/vc/info/{versionId}/{entityType}/{externalEntityUuid}{?internalEntityId}
* @secure
* @response `200` `GetEntityDataInfoUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEntityDataInfoUsingGet = ({ versionId, entityType, externalEntityUuid, ...query }, params = {}) => this.request({
    path: `/api/entities/vc/info/${versionId}/${entityType}/${externalEntityUuid}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Creates a new version of entities (or a single entity) by request. Supported entity types: CUSTOMER, ASSET, RULE_CHAIN, DASHBOARD, DEVICE_PROFILE, DEVICE, ENTITY_VIEW, WIDGETS_BUNDLE, CONVERTER, INTEGRATION, ROLE and USER group. There are two available types of request: `SINGLE_ENTITY` and `COMPLEX`. Each of them contains version name (`versionName`) and name of a branch (`branch`) to create version (commit) in. If specified branch does not exists in a remote repo, then new empty branch will be created. Request of the `SINGLE_ENTITY` type has id of an entity (`entityId`) and additional configuration (`config`) which has following options: - `saveRelations` - whether to add inbound and outbound relations of type COMMON to created entity version; - `saveAttributes` - to save attributes of server scope (and also shared scope for devices); - `saveCredentials` - when saving a version of a device, to add its credentials to the version; - `savePermissions` - when saving a user group - to save group permission list; - `saveGroupEntities` - when saving an entity group - to save its entities as well. An example of a `SINGLE_ENTITY` version create request: ```json { "type": "SINGLE_ENTITY", "versionName": "Version 1.0", "branch": "dev", "entityId": { "entityType": "DEVICE", "id": "b79448e0-d4f4-11ec-847b-0f432358ab48" }, "config": { "saveRelations": true, "saveAttributes": true, "saveCredentials": false } } ``` Second request type (`COMPLEX`), additionally to `branch` and `versionName`, contains following properties: - `entityTypes` - a structure with entity types to export and configuration for each entity type;    this configuration has all the options available for `SINGLE_ENTITY` and additionally has these ones: - `allEntities` and `entityIds` - if you want to save the version of all entities of the entity type         then set `allEntities` param to true, otherwise set it to false and specify `entityIds` -         in case entity type is group entity, list of specific entity groups, or if not - list of entities; - `syncStrategy` - synchronization strategy to use for this entity type: when set to `OVERWRITE`         then the list of remote entities of this type will be overwritten by newly added entities. If set to         `MERGE` - existing remote entities of this entity type will not be removed, new entities will just         be added on top (or existing remote entities will be updated). - `syncStrategy` - default synchronization strategy to use when it is not specified for an entity type. Example for this type of request: ```json { "type": "COMPLEX", "versionName": "Devices and profiles: release 2", "branch": "master", "syncStrategy": "OVERWRITE", "entityTypes": { "DEVICE": { "syncStrategy": null, "allEntities": true, "saveRelations": true, "saveAttributes": true, "saveCredentials": true }, "DEVICE_PROFILE": { "syncStrategy": "MERGE", "allEntities": false, "entityIds": [ "b79448e0-d4f4-11ec-847b-0f432358ab48" ], "saveRelations": true } } } ``` Response wil contain generated request UUID, that can be then used to retrieve status of operation via `getVersionCreateRequestStatus`. Available for users with 'TENANT_ADMIN' authority.
*
* @tags entities-version-control-controller
* @name SaveEntitiesVersionUsingPost
* @summary Save entities version (saveEntitiesVersion)
* @request POST:/api/entities/vc/version
* @secure
* @response `200` `SaveEntitiesVersionUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveEntitiesVersionUsingPost = (data, params = {}) => this.request({
    path: `/api/entities/vc/version`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Returns list of versions for a specific entity in a concrete branch. You need to specify external id of an entity to list versions for. This is `externalId` property of an entity, or otherwise if not set - simply id of this entity. If specified branch does not exist - empty page data will be returned. Each version info item has timestamp, id, name and author. Version id can then be used to restore the version. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Response example: ```json { "data": [ { "timestamp": 1655198593000, "id": "fd82625bdd7d6131cf8027b44ee967012ecaf990", "name": "Devices and assets - v2.0", "author": "John Doe <johndoe@gmail.com>" }, { "timestamp": 1655198528000, "id": "682adcffa9c8a2f863af6f00c4850323acbd4219", "name": "Update my device", "author": "John Doe <johndoe@gmail.com>" }, { "timestamp": 1655198280000, "id": "d2a6087c2b30e18cc55e7cdda345a8d0dfb959a4", "name": "Devices and assets - v1.0", "author": "John Doe <johndoe@gmail.com>" } ], "totalPages": 1, "totalElements": 3, "hasNext": false } ``` Available for users with 'TENANT_ADMIN' authority.
*
* @tags entities-version-control-controller
* @name ListEntityVersionsUsingGet
* @summary List entity versions (listEntityVersions)
* @request GET:/api/entities/vc/version/{entityType}/{externalEntityUuid}?sortProperty=timestamp{&branch,internalEntityId,page,pageSize,sortOrder,textSearch}
* @secure
* @response `200` `ListEntityVersionsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
listEntityVersionsUsingGet = ({ entityType, externalEntityUuid, ...query }, params = {}) => this.request({
    path: `/api/entities/vc/version/${entityType}/${externalEntityUuid}?sortProperty=timestamp{&branch,internalEntityId,page,pageSize,sortOrder,textSearch}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns list of versions of an entity type in a branch. This is a collected list of versions that were created for entities of this type in a remote branch. If specified branch does not exist - empty page data will be returned. The response structure is the same as for `listEntityVersions` API method. Available for users with 'TENANT_ADMIN' authority.
*
* @tags entities-version-control-controller
* @name ListEntityTypeVersionsUsingGet
* @summary List entity type versions (listEntityTypeVersions)
* @request GET:/api/entities/vc/version/{entityType}?sortProperty=timestamp{&branch,page,pageSize,sortOrder,textSearch}
* @secure
* @response `200` `ListEntityTypeVersionsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
listEntityTypeVersionsUsingGet = ({ entityType, ...query }, params = {}) => this.request({
    path: `/api/entities/vc/version/${entityType}?sortProperty=timestamp{&branch,page,pageSize,sortOrder,textSearch}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns the status of previously made version create request. This status contains following properties: - `done` - whether request processing is finished; - `version` - created version info: timestamp, version id (commit hash), commit name and commit author; - `added` - count of items that were created in the remote repo; - `modified` - modified items count; - `removed` - removed items count; - `error` - error message, if an error occurred while handling the request. An example of successful status: ```json { "done": true, "added": 10, "modified": 2, "removed": 5, "version": { "timestamp": 1655198528000, "id":"8a834dd389ed80e0759ba8ee338b3f1fd160a114", "name": "My devices v2.0", "author": "John Doe" }, "error": null } ``` Available for users with 'TENANT_ADMIN' authority.
*
* @tags entities-version-control-controller
* @name GetVersionCreateRequestStatusUsingGet
* @summary Get version create request status (getVersionCreateRequestStatus)
* @request GET:/api/entities/vc/version/{requestId}/status
* @secure
* @response `200` `GetVersionCreateRequestStatusUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getVersionCreateRequestStatusUsingGet = (requestId, params = {}) => this.request({
    path: `/api/entities/vc/version/${requestId}/status`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Lists all available versions in a branch for all entity types. If specified branch does not exist - empty page data will be returned. The response format is the same as for `listEntityVersions` API method. Available for users with 'TENANT_ADMIN' authority.
*
* @tags entities-version-control-controller
* @name ListVersionsUsingGet
* @summary List all versions (listVersions)
* @request GET:/api/entities/vc/version?sortProperty=timestamp{&branch,page,pageSize,sortOrder,textSearch}
* @secure
* @response `200` `ListVersionsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
listVersionsUsingGet = (query, params = {}) => this.request({
    path: `/api/entities/vc/version?sortProperty=timestamp{&branch,page,pageSize,sortOrder,textSearch}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Fetch the list of Entity Group Info objects based on the provided Entity Type and assigned to the provided Edge entity. Entity group allows you to group multiple entities of the same entity type (Device, Asset, Customer, User, Dashboard, etc). Entity Group always have an owner - particular Tenant or Customer. Each entity may belong to multiple groups simultaneously.Entity Group Info extends Entity Group object and adds 'ownerIds' - a list of owner ids. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags entity-group-controller
* @name GetAllEdgeEntityGroupsUsingGet
* @summary Get All Edge Entity Groups by entity type (getAllEdgeEntityGroups)
* @request GET:/api/allEntityGroups/edge/{edgeId}/{groupType}
* @secure
* @response `200` `GetAllEdgeEntityGroupsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getAllEdgeEntityGroupsUsingGet = (edgeId, groupType, params = {}) => this.request({
    path: `/api/allEntityGroups/edge/${edgeId}/${groupType}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Creates assignment of an existing entity group to an instance of The Edge. Assignment works in async way - first, notification event pushed to edge service queue on platform. Second, remote edge service will receive a copy of assignment entity group (Edge will receive this instantly, if it's currently connected, or once it's going to be connected to platform). Third, once entity group will be delivered to edge service, edge will request entities of this group to be send to edge. Once entities will be delivered to edge service, they are going to be available for usage on remote edge instance. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
*
* @tags entity-group-controller
* @name AssignEntityGroupToEdgeUsingPost
* @summary Assign entity group to edge (assignEntityGroupToEdge)
* @request POST:/api/edge/{edgeId}/entityGroup/{entityGroupId}/{groupType}
* @secure
* @response `200` `AssignEntityGroupToEdgeUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
assignEntityGroupToEdgeUsingPost = (edgeId, groupType, entityGroupId, params = {}) => this.request({
    path: `/api/edge/${edgeId}/entityGroup/${entityGroupId}/${groupType}`,
    method: 'POST',
    secure: true, format: "json", ...params,
});
/**
* @description Clears assignment of the entity group to the edge. Unassignment works in async way - first, 'unassign' notification event pushed to edge queue on platform. Second, remote edge service will receive an 'unassign' command to remove entity group (Edge will receive this instantly, if it's currently connected, or once it's going to be connected to platform). Third, once 'unassign' command will be delivered to edge service, it's going to remove entity group and entities inside this group locally. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
*
* @tags entity-group-controller
* @name UnassignEntityGroupFromEdgeUsingDelete
* @summary Unassign entity group from edge (unassignEntityGroupFromEdge)
* @request DELETE:/api/edge/{edgeId}/entityGroup/{entityGroupId}/{groupType}
* @secure
* @response `200` `UnassignEntityGroupFromEdgeUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
unassignEntityGroupFromEdgeUsingDelete = (edgeId, groupType, entityGroupId, params = {}) => this.request({
    path: `/api/edge/${edgeId}/entityGroup/${entityGroupId}/${groupType}`,
    method: 'DELETE',
    secure: true, format: "json", ...params,
});
/**
* @description Create or update the Entity Group. When creating Entity Group, platform generates Entity Group Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created Entity Group Id will be present in the response. Specify existing Entity Group Id to update the group. Referencing non-existing Entity Group Id will cause 'Not Found' error.Remove 'id', 'tenantId' and optionally 'ownerId' from the request body example (below) to create new Entity Group entity. Entity group name is unique in the scope of owner and entity type. For example, you can't create two tenant device groups called 'Water meters'. However, you may create device and asset group with the same name. And also you may create groups with the same name for two different customers of the same tenant. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'WRITE' permission for specified group.
*
* @tags entity-group-controller
* @name SaveEntityGroupUsingPost
* @summary Create Or Update Entity Group (saveEntityGroup)
* @request POST:/api/entityGroup
* @secure
* @response `200` `SaveEntityGroupUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveEntityGroupUsingPost = (data, params = {}) => this.request({
    path: `/api/entityGroup`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Fetch reserved group 'All' based on the provided Owner Id and Entity Type. Entity group allows you to group multiple entities of the same entity type (Device, Asset, Customer, User, Dashboard, etc). Entity Group always have an owner - particular Tenant or Customer. Each entity may belong to multiple groups simultaneously.Entity Group Info extends Entity Group object and adds 'ownerIds' - a list of owner ids. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags entity-group-controller
* @name GetEntityGroupAllByOwnerAndTypeUsingGet
* @summary Get special group All by owner and entity type (getEntityGroupsByOwnerAndType)
* @request GET:/api/entityGroup/all/{ownerType}/{ownerId}/{groupType}
* @secure
* @response `200` `GetEntityGroupAllByOwnerAndTypeUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEntityGroupAllByOwnerAndTypeUsingGet = (ownerType, ownerId, groupType, params = {}) => this.request({
    path: `/api/entityGroup/all/${ownerType}/${ownerId}/${groupType}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Fetch the Entity Group object based on the provided Entity Group Id. Entity group allows you to group multiple entities of the same entity type (Device, Asset, Customer, User, Dashboard, etc). Entity Group always have an owner - particular Tenant or Customer. Each entity may belong to multiple groups simultaneously.Entity Group Info extends Entity Group object and adds 'ownerIds' - a list of owner ids. Entity group name is unique in the scope of owner and entity type. For example, you can't create two tenant device groups called 'Water meters'. However, you may create device and asset group with the same name. And also you may create groups with the same name for two different customers of the same tenant. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags entity-group-controller
* @name GetEntityGroupByIdUsingGet
* @summary Get Entity Group Info (getEntityGroupById)
* @request GET:/api/entityGroup/{entityGroupId}
* @secure
* @response `200` `GetEntityGroupByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEntityGroupByIdUsingGet = (entityGroupId, params = {}) => this.request({
    path: `/api/entityGroup/${entityGroupId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Deletes the entity group but does not delete the entities in the group, since they are also present in reserved group 'All'. Referencing non-existing Entity Group Id will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'DELETE' permission for specified group.
*
* @tags entity-group-controller
* @name DeleteEntityGroupUsingDelete
* @summary Delete Entity Group (deleteEntityGroup)
* @request DELETE:/api/entityGroup/{entityGroupId}
* @secure
* @response `200` `DeleteEntityGroupUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteEntityGroupUsingDelete = (entityGroupId, params = {}) => this.request({
    path: `/api/entityGroup/${entityGroupId}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Add entities to the specified entity group. Entity group allows you to group multiple entities of the same entity type (Device, Asset, Customer, User, Dashboard, etc). Entity Group always have an owner - particular Tenant or Customer. Each entity may belong to multiple groups simultaneously. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'ADD_TO_GROUP' permission for specified group.
*
* @tags entity-group-controller
* @name AddEntitiesToEntityGroupUsingPost
* @summary Add entities to the group (addEntitiesToEntityGroup)
* @request POST:/api/entityGroup/{entityGroupId}/addEntities
* @secure
* @response `200` `AddEntitiesToEntityGroupUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
addEntitiesToEntityGroupUsingPost = (entityGroupId, data, params = {}) => this.request({
    path: `/api/entityGroup/${entityGroupId}/addEntities`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, ...params,
});
/**
* @description Removes entities from the specified entity group. Entity group allows you to group multiple entities of the same entity type (Device, Asset, Customer, User, Dashboard, etc). Entity Group always have an owner - particular Tenant or Customer. Each entity may belong to multiple groups simultaneously. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'REMOVE_FROM_GROUP' permission for specified group.
*
* @tags entity-group-controller
* @name RemoveEntitiesFromEntityGroupUsingPost
* @summary Remove entities from the group (removeEntitiesFromEntityGroup)
* @request POST:/api/entityGroup/{entityGroupId}/deleteEntities
* @secure
* @response `200` `RemoveEntitiesFromEntityGroupUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
removeEntitiesFromEntityGroupUsingPost = (entityGroupId, data, params = {}) => this.request({
    path: `/api/entityGroup/${entityGroupId}/deleteEntities`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, ...params,
});
/**
* @description Returns a page of Short Entity View objects that belongs to specified Entity Group Id. Short Entity View object contains the entity id and number of fields (attributes, telemetry, etc). List of those fields is configurable and defined in the group configuration.You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags entity-group-controller
* @name GetEntitiesUsingGet
* @summary Get Group Entities (getEntities)
* @request GET:/api/entityGroup/{entityGroupId}/entities{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetEntitiesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEntitiesUsingGet = ({ entityGroupId, ...query }, params = {}) => this.request({
    path: `/api/entityGroup/${entityGroupId}/entities`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Make the entity group not available for non authorized users. Every group is private by default. This call is useful to hide the group that was previously made public. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'WRITE' permission for specified group.
*
* @tags entity-group-controller
* @name MakeEntityGroupPrivateUsingPost
* @summary Make Entity Group Private (makeEntityGroupPrivate)
* @request POST:/api/entityGroup/{entityGroupId}/makePrivate
* @secure
* @response `200` `MakeEntityGroupPrivateUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
makeEntityGroupPrivateUsingPost = (entityGroupId, params = {}) => this.request({
    path: `/api/entityGroup/${entityGroupId}/makePrivate`,
    method: 'POST',
    secure: true, ...params,
});
/**
* @description Make the entity group available for non authorized users. Useful for public dashboards that will be embedded into the public websites. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'WRITE' permission for specified group.
*
* @tags entity-group-controller
* @name MakeEntityGroupPublicUsingPost
* @summary Make Entity Group Publicly available (makeEntityGroupPublic)
* @request POST:/api/entityGroup/{entityGroupId}/makePublic
* @secure
* @response `200` `MakeEntityGroupPublicUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
makeEntityGroupPublicUsingPost = (entityGroupId, params = {}) => this.request({
    path: `/api/entityGroup/${entityGroupId}/makePublic`,
    method: 'POST',
    secure: true, ...params,
});
/**
* @description Share the entity group with certain user group based on the provided Share Group Request. The request is quite flexible and processing of the request involves multiple security checks using platform RBAC feature. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'WRITE' permission for specified group.
*
* @tags entity-group-controller
* @name ShareEntityGroupUsingPost
* @summary Share the Entity Group (shareEntityGroup)
* @request POST:/api/entityGroup/{entityGroupId}/share
* @secure
* @response `200` `ShareEntityGroupUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
shareEntityGroupUsingPost = (entityGroupId, data, params = {}) => this.request({
    path: `/api/entityGroup/${entityGroupId}/share`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, ...params,
});
/**
* @description Fetch the Short Entity View object based on the group and entity id. Short Entity View object contains the entity id and number of fields (attributes, telemetry, etc). List of those fields is configurable and defined in the group configuration. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags entity-group-controller
* @name GetGroupEntityUsingGet
* @summary Get Group Entity (getGroupEntity)
* @request GET:/api/entityGroup/{entityGroupId}/{entityId}
* @secure
* @response `200` `GetGroupEntityUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getGroupEntityUsingGet = (entityGroupId, entityId, params = {}) => this.request({
    path: `/api/entityGroup/${entityGroupId}/${entityId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Share the entity group with specified user group using specified role. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'WRITE' permission for specified group.
*
* @tags entity-group-controller
* @name ShareEntityGroupToChildOwnerUserGroupUsingPost
* @summary Share the Entity Group with User group (shareEntityGroupToChildOwnerUserGroup)
* @request POST:/api/entityGroup/{entityGroupId}/{userGroupId}/{roleId}/share
* @secure
* @response `200` `ShareEntityGroupToChildOwnerUserGroupUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
shareEntityGroupToChildOwnerUserGroupUsingPost = (entityGroupId, userGroupId, roleId, params = {}) => this.request({
    path: `/api/entityGroup/${entityGroupId}/${userGroupId}/${roleId}/share`,
    method: 'POST',
    secure: true, ...params,
});
/**
* @description Fetch the Entity Group object based on the provided Entity Group Id. Entity group allows you to group multiple entities of the same entity type (Device, Asset, Customer, User, Dashboard, etc). Entity Group always have an owner - particular Tenant or Customer. Each entity may belong to multiple groups simultaneously.Entity Group Info extends Entity Group object and adds 'ownerIds' - a list of owner ids. Entity group name is unique in the scope of owner and entity type. For example, you can't create two tenant device groups called 'Water meters'. However, you may create device and asset group with the same name. And also you may create groups with the same name for two different customers of the same tenant. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags entity-group-controller
* @name GetEntityGroupByOwnerAndNameAndTypeUsingGet
* @summary Get Entity Group by owner, type and name (getEntityGroupByOwnerAndNameAndType)
* @request GET:/api/entityGroup/{ownerType}/{ownerId}/{groupType}/{groupName}
* @secure
* @response `200` `GetEntityGroupByOwnerAndNameAndTypeUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEntityGroupByOwnerAndNameAndTypeUsingGet = (ownerType, ownerId, groupType, groupName, params = {}) => this.request({
    path: `/api/entityGroup/${ownerType}/${ownerId}/${groupType}/${groupName}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Fetch the Entity Group Entity Info object based on the provided Entity Group Id. Entity Info is a lightweight object that contains only id and name of the entity group. Entity group name is unique in the scope of owner and entity type. For example, you can't create two tenant device groups called 'Water meters'. However, you may create device and asset group with the same name. And also you may create groups with the same name for two different customers of the same tenant. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags entity-group-controller
* @name GetEntityGroupEntityInfoByIdUsingGet
* @summary Get Entity Group Entity Info (getEntityGroupEntityInfoById)
* @request GET:/api/entityGroupInfo/{entityGroupId}
* @secure
* @response `200` `GetEntityGroupEntityInfoByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEntityGroupEntityInfoByIdUsingGet = (entityGroupId, params = {}) => this.request({
    path: `/api/entityGroupInfo/${entityGroupId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Returns a page of Shared Entity Group Entity Info objects based on the provided Entity Type and Page Link. Entity Info is a lightweight object that contains only id and name of the entity group. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags entity-group-controller
* @name GetSharedEntityGroupEntityInfosByTypeAndPageLinkUsingGet
* @summary Get Shared Entity Group Entity Infos by entity type and page link (getSharedEntityGroupEntityInfosByTypeAndPageLink)
* @request GET:/api/entityGroupInfos/{groupType}/shared{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetSharedEntityGroupEntityInfosByTypeAndPageLinkUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getSharedEntityGroupEntityInfosByTypeAndPageLinkUsingGet = ({ groupType, ...query }, params = {}) => this.request({
    path: `/api/entityGroupInfos/${groupType}/shared`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of Entity Group Entity Info objects based on the provided Entity Type and Page Link. Entity Info is a lightweight object that contains only id and name of the entity group. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags entity-group-controller
* @name GetEntityGroupEntityInfosByTypeAndPageLinkUsingGet
* @summary Get Entity Group Entity Infos by entity type and page link (getEntityGroupEntityInfosByTypeAndPageLink)
* @request GET:/api/entityGroupInfos/{groupType}{?includeShared,page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetEntityGroupEntityInfosByTypeAndPageLinkUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEntityGroupEntityInfosByTypeAndPageLinkUsingGet = ({ groupType, ...query }, params = {}) => this.request({
    path: `/api/entityGroupInfos/${groupType}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of Entity Group Entity Info objects based on the provided Owner Id and Entity Type and Page Link. Entity Info is a lightweight object that contains only id and name of the entity group. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags entity-group-controller
* @name GetEntityGroupEntityInfosByOwnerAndTypeAndPageLinkUsingGet
* @summary Get Entity Group Entity Infos by owner and entity type and page link (getEntityGroupEntityInfosByOwnerAndTypeAndPageLink)
* @request GET:/api/entityGroupInfos/{ownerType}/{ownerId}/{groupType}{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetEntityGroupEntityInfosByOwnerAndTypeAndPageLinkUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEntityGroupEntityInfosByOwnerAndTypeAndPageLinkUsingGet = ({ ownerType, ownerId, groupType, ...query }, params = {}) => this.request({
    path: `/api/entityGroupInfos/${ownerType}/${ownerId}/${groupType}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of Entity Group Entity Info objects based on the provided Owner Id and Entity Type and Page Link. Entity Info is a lightweight object that contains only id and name of the entity group. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags entity-group-controller
* @name GetEntityGroupEntityInfosHierarchyByOwnerAndTypeAndPageLinkUsingGet
* @summary Get Entity Group Entity Infos for all owners starting from specified than ending with owner of current user (getEntityGroupEntityInfosHierarchyByOwnerAndTypeAndPageLink)
* @request GET:/api/entityGroupInfosHierarchy/{ownerType}/{ownerId}/{groupType}{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetEntityGroupEntityInfosHierarchyByOwnerAndTypeAndPageLinkUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEntityGroupEntityInfosHierarchyByOwnerAndTypeAndPageLinkUsingGet = ({ ownerType, ownerId, groupType, ...query }, params = {}) => this.request({
    path: `/api/entityGroupInfosHierarchy/${ownerType}/${ownerId}/${groupType}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Fetch the list of Entity Group Entity Info objects based on the provided entity group ids list. Entity Info is a lightweight object that contains only id and name of the entity group. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags entity-group-controller
* @name GetEntityGroupEntityInfosByIdsUsingGet
* @summary Get Entity Group Entity Infos by Ids (getEntityGroupEntityInfosByIds)
* @request GET:/api/entityGroupInfos{?entityGroupIds}
* @secure
* @response `200` `GetEntityGroupEntityInfosByIdsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEntityGroupEntityInfosByIdsUsingGet = (query, params = {}) => this.request({
    path: `/api/entityGroupInfos`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of Entity Group Info objects based on the provided Entity Type and assigned to the provided Edge entity. Entity group allows you to group multiple entities of the same entity type (Device, Asset, Customer, User, Dashboard, etc). Entity Group always have an owner - particular Tenant or Customer. Each entity may belong to multiple groups simultaneously.Entity Group Info extends Entity Group object and adds 'ownerIds' - a list of owner ids.You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags entity-group-controller
* @name GetEdgeEntityGroupsUsingGet
* @summary Get Edge Entity Groups by entity type (getEdgeEntityGroups)
* @request GET:/api/entityGroups/edge/{edgeId}/{groupType}{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetEdgeEntityGroupsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEdgeEntityGroupsUsingGet = ({ edgeId, groupType, ...query }, params = {}) => this.request({
    path: `/api/entityGroups/edge/${edgeId}/${groupType}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a list of groups that contain the specified Entity Id. For example, all device groups that contain specific device. The list always contain at least one element - special group 'All'.You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags entity-group-controller
* @name GetEntityGroupsForEntityUsingGet
* @summary Get Entity Groups by Entity Id (getEntityGroupsForEntity)
* @request GET:/api/entityGroups/{entityType}/{entityId}
* @secure
* @response `200` `GetEntityGroupsForEntityUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEntityGroupsForEntityUsingGet = (entityType, entityId, params = {}) => this.request({
    path: `/api/entityGroups/${entityType}/${entityId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Fetch the list of Shared Entity Group Info objects based on the provided Entity Type. Entity group allows you to group multiple entities of the same entity type (Device, Asset, Customer, User, Dashboard, etc). Entity Group always have an owner - particular Tenant or Customer. Each entity may belong to multiple groups simultaneously.Entity Group Info extends Entity Group object and adds 'ownerIds' - a list of owner ids. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags entity-group-controller
* @name GetSharedEntityGroupsByTypeUsingGet
* @summary Get Shared Entity Groups by entity type (getSharedEntityGroupsByType)
* @request GET:/api/entityGroups/{groupType}/shared
* @secure
* @response `200` `GetSharedEntityGroupsByTypeUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getSharedEntityGroupsByTypeUsingGet = (groupType, params = {}) => this.request({
    path: `/api/entityGroups/${groupType}/shared`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Returns a page of Shared Entity Group Info objects based on the provided Entity Type and Page Link. Entity group allows you to group multiple entities of the same entity type (Device, Asset, Customer, User, Dashboard, etc). Entity Group always have an owner - particular Tenant or Customer. Each entity may belong to multiple groups simultaneously.Entity Group Info extends Entity Group object and adds 'ownerIds' - a list of owner ids.You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags entity-group-controller
* @name GetSharedEntityGroupsByTypeAndPageLinkUsingGet
* @summary Get Shared Entity Groups by entity type and page link (getSharedEntityGroupsByTypeAndPageLink)
* @request GET:/api/entityGroups/{groupType}/shared{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetSharedEntityGroupsByTypeAndPageLinkUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getSharedEntityGroupsByTypeAndPageLinkUsingGet = ({ groupType, ...query }, params = {}) => this.request({
    path: `/api/entityGroups/${groupType}/shared`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of Entity Group Info objects based on the provided Entity Type and Page Link. Entity group allows you to group multiple entities of the same entity type (Device, Asset, Customer, User, Dashboard, etc). Entity Group always have an owner - particular Tenant or Customer. Each entity may belong to multiple groups simultaneously.Entity Group Info extends Entity Group object and adds 'ownerIds' - a list of owner ids.You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags entity-group-controller
* @name GetEntityGroupsByTypeAndPageLinkUsingGet
* @summary Get Entity Groups by entity type and page link (getEntityGroupsByTypeAndPageLink)
* @request GET:/api/entityGroups/{groupType}{?includeShared,page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetEntityGroupsByTypeAndPageLinkUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEntityGroupsByTypeAndPageLinkUsingGet = ({ groupType, ...query }, params = {}) => this.request({
    path: `/api/entityGroups/${groupType}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Fetch the list of Entity Group Info objects based on the provided Entity Type. Entity group allows you to group multiple entities of the same entity type (Device, Asset, Customer, User, Dashboard, etc). Entity Group always have an owner - particular Tenant or Customer. Each entity may belong to multiple groups simultaneously.Entity Group Info extends Entity Group object and adds 'ownerIds' - a list of owner ids. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags entity-group-controller
* @name GetEntityGroupsByTypeUsingGet
* @summary Get Entity Groups by entity type (getEntityGroupsByType)
* @request GET:/api/entityGroups/{groupType}{?includeShared}
* @secure
* @response `200` `GetEntityGroupsByTypeUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEntityGroupsByTypeUsingGet = ({ groupType, ...query }, params = {}) => this.request({
    path: `/api/entityGroups/${groupType}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Fetch the list of Entity Group Info objects based on the provided Owner Id and Entity Type. Entity group allows you to group multiple entities of the same entity type (Device, Asset, Customer, User, Dashboard, etc). Entity Group always have an owner - particular Tenant or Customer. Each entity may belong to multiple groups simultaneously.Entity Group Info extends Entity Group object and adds 'ownerIds' - a list of owner ids. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags entity-group-controller
* @name GetEntityGroupsByOwnerAndTypeUsingGet
* @summary Get Entity Groups by owner and entity type (getEntityGroupsByOwnerAndType)
* @request GET:/api/entityGroups/{ownerType}/{ownerId}/{groupType}
* @secure
* @response `200` `GetEntityGroupsByOwnerAndTypeUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEntityGroupsByOwnerAndTypeUsingGet = (ownerType, ownerId, groupType, params = {}) => this.request({
    path: `/api/entityGroups/${ownerType}/${ownerId}/${groupType}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Returns a page of Entity Group objects based on the provided Owner Id and Entity Type and Page Link. Entity group allows you to group multiple entities of the same entity type (Device, Asset, Customer, User, Dashboard, etc). Entity Group always have an owner - particular Tenant or Customer. Each entity may belong to multiple groups simultaneously.You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags entity-group-controller
* @name GetEntityGroupsByOwnerAndTypeAndPageLinkUsingGet
* @summary Get Entity Groups by owner and entity type and page link (getEntityGroupsByOwnerAndTypeAndPageLink)
* @request GET:/api/entityGroups/{ownerType}/{ownerId}/{groupType}{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetEntityGroupsByOwnerAndTypeAndPageLinkUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEntityGroupsByOwnerAndTypeAndPageLinkUsingGet = ({ ownerType, ownerId, groupType, ...query }, params = {}) => this.request({
    path: `/api/entityGroups/${ownerType}/${ownerId}/${groupType}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of Entity Group objects based on the provided Owner Id and Entity Type and Page Link. Entity group allows you to group multiple entities of the same entity type (Device, Asset, Customer, User, Dashboard, etc). Entity Group always have an owner - particular Tenant or Customer. Each entity may belong to multiple groups simultaneously.You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags entity-group-controller
* @name GetEntityGroupsHierarchyByOwnerAndTypeAndPageLinkUsingGet
* @summary Get Entity Groups for all owners starting from specified than ending with owner of current user (getEntityGroupsHierarchyByOwnerAndTypeAndPageLink)
* @request GET:/api/entityGroupsHierarchy/{ownerType}/{ownerId}/{groupType}{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetEntityGroupsHierarchyByOwnerAndTypeAndPageLinkUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEntityGroupsHierarchyByOwnerAndTypeAndPageLinkUsingGet = ({ ownerType, ownerId, groupType, ...query }, params = {}) => this.request({
    path: `/api/entityGroupsHierarchy/${ownerType}/${ownerId}/${groupType}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Fetch the list of Entity Group Info objects based on the provided entity group ids list. Entity group allows you to group multiple entities of the same entity type (Device, Asset, Customer, User, Dashboard, etc). Entity Group always have an owner - particular Tenant or Customer. Each entity may belong to multiple groups simultaneously.Entity Group Info extends Entity Group object and adds 'ownerIds' - a list of owner ids. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags entity-group-controller
* @name GetEntityGroupsByIdsUsingGet
* @summary Get Entity Groups by Ids (getEntityGroupsByIds)
* @request GET:/api/entityGroups{?entityGroupIds}
* @secure
* @response `200` `GetEntityGroupsByIdsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEntityGroupsByIdsUsingGet = (query, params = {}) => this.request({
    path: `/api/entityGroups`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Fetch the owner info (tenant or customer) presented as Entity Info object based on the provided owner Id. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags entity-group-controller
* @name GetOwnerInfoUsingGet
* @summary Get Owner Info (getOwnerInfo)
* @request GET:/api/ownerInfo/{ownerType}/{ownerId}
* @secure
* @response `200` `GetOwnerInfoUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getOwnerInfoUsingGet = (ownerType, ownerId, params = {}) => this.request({
    path: `/api/ownerInfo/${ownerType}/${ownerId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Provides a rage view of Customers that the current user has READ access to. If the current user is Tenant administrator, the result set also contains the tenant. The call is designed for the UI auto-complete component to show tenant and all possible Customers that the user may select to change the owner of the particular entity or entity group. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags entity-group-controller
* @name GetOwnerInfosUsingGet
* @summary Get Owner Infos (getOwnerInfos)
* @request GET:/api/ownerInfos{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetOwnerInfosUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getOwnerInfosUsingGet = (query, params = {}) => this.request({
    path: `/api/ownerInfos`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Provides a rage view of Customers that the current user has READ access to. If the current user is Tenant administrator, the result set also contains the tenant. The call is designed for the UI auto-complete component to show tenant and all possible Customers that the user may select to change the owner of the particular entity or entity group. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags entity-group-controller
* @name GetOwnersUsingGet
* @summary Get Owners (getOwners)
* @request GET:/api/owners{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetOwnersUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getOwnersUsingGet = (query, params = {}) => this.request({
    path: `/api/owners`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns the number of alarms that match the query definition.
*
* @tags entity-query-controller
* @name CountAlarmsByQueryUsingPost
* @summary Count Alarms by Query (countAlarmsByQuery)
* @request POST:/api/alarmsQuery/count
* @secure
* @response `200` `CountAlarmsByQueryUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
countAlarmsByQueryUsingPost = (data, params = {}) => this.request({
    path: `/api/alarmsQuery/count`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description This method description defines how Alarm Data Query extends the Entity Data Query. See method 'Find Entity Data by Query' first to get the info about 'Entity Data Query'. The platform will first search the entities that match the entity and key filters. Then, the platform will use 'Alarm Page Link' to filter the alarms related to those entities. Finally, platform fetch the properties of alarm that are defined in the **'alarmFields'** and combine them with the other entity, attribute and latest time-series fields to return the result. See example of the alarm query below. The query will search first 100 active alarms with type 'Temperature Alarm' or 'Fire Alarm' for any device with current temperature > 0. The query will return combination of the entity fields: name of the device, device model and latest temperature reading and alarms fields: createdTime, type, severity and status: ```json { "entityFilter": { "type": "entityType", "resolveMultiple": true, "entityType": "DEVICE" }, "pageLink": { "page": 0, "pageSize": 100, "textSearch": null, "searchPropagatedAlarms": false, "statusList": [ "ACTIVE" ], "severityList": [ "CRITICAL", "MAJOR" ], "typeList": [ "Temperature Alarm", "Fire Alarm" ], "sortOrder": { "key": { "key": "createdTime", "type": "ALARM_FIELD" }, "direction": "DESC" }, "timeWindow": 86400000 }, "keyFilters": [ { "key": { "type": "TIME_SERIES", "key": "temperature" }, "valueType": "NUMERIC", "predicate": { "operation": "GREATER", "value": { "defaultValue": 0, "dynamicValue": null }, "type": "NUMERIC" } } ], "alarmFields": [ { "type": "ALARM_FIELD", "key": "createdTime" }, { "type": "ALARM_FIELD", "key": "type" }, { "type": "ALARM_FIELD", "key": "severity" }, { "type": "ALARM_FIELD", "key": "status" } ], "entityFields": [ { "type": "ENTITY_FIELD", "key": "name" } ], "latestValues": [ { "type": "ATTRIBUTE", "key": "model" }, { "type": "TIME_SERIES", "key": "temperature" } ] } ```
*
* @tags entity-query-controller
* @name FindAlarmDataByQueryUsingPost
* @summary Find Alarms by Query
* @request POST:/api/alarmsQuery/find
* @secure
* @response `200` `FindAlarmDataByQueryUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
findAlarmDataByQueryUsingPost = (data, params = {}) => this.request({
    path: `/api/alarmsQuery/find`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Allows to run complex queries to search the count of platform entities (devices, assets, customers, etc) based on the combination of main entity filter and multiple key filters. Returns the number of entities that match the query definition. # Query Definition Main **entity filter** is mandatory and defines generic search criteria. For example, "find all devices with profile 'Moisture Sensor'" or "Find all devices related to asset 'Building A'" Optional **key filters** allow to filter results of the entity filter by complex criteria against main entity fields (name, label, type, etc), attributes and telemetry. For example, "temperature > 20 or temperature< 10" or "name starts with 'T', and attribute 'model' is 'T1000', and timeseries field 'batteryLevel' > 40". Let's review the example: ```json { "entityFilter": { "type": "entityType", "entityType": "DEVICE" }, "keyFilters": [ { "key": { "type": "ATTRIBUTE", "key": "active" }, "valueType": "BOOLEAN", "predicate": { "operation": "EQUAL", "value": { "defaultValue": true, "dynamicValue": null }, "type": "BOOLEAN" } } ] } ``` Example mentioned above search all devices which have attribute 'active' set to 'true'. Now let's review available entity filters and key filters syntax: # Entity Filters Entity Filter body depends on the 'type' parameter. Let's review available entity filter types. In fact, they do correspond to available dashboard aliases. ## Single Entity Allows to filter only one entity based on the id. For example, this entity filter selects certain device: ```json { "type": "singleEntity", "singleEntity": { "id": "d521edb0-2a7a-11ec-94eb-213c95f54092", "entityType": "DEVICE" } } ``` ## Group Entities Filter Allows to filter multiple entities of the same type using the entity group type and id. For example, this entity filter selects all devices that belong to the group 'e52b0020-2a7a-11ec-94eb-213c95f54092': ```json { "type": "entityGroup", "groupType": "DEVICE", "entityGroup": "e52b0020-2a7a-11ec-94eb-213c95f54092" } ``` ## Entity List Filter Allows to filter entities of the same type using their ids. For example, this entity filter selects two devices: ```json { "type": "entityList", "entityType": "DEVICE", "entityList": [ "e6501f30-2a7a-11ec-94eb-213c95f54092", "e6657bf0-2a7a-11ec-94eb-213c95f54092" ] } ``` ## Entity Name Filter Allows to filter entities of the same type using the **'starts with'** expression over entity name. For example, this entity filter selects all devices which name starts with 'Air Quality': ```json { "type": "entityName", "entityType": "DEVICE", "entityNameFilter": "Air Quality" } ``` ## Entity Type Filter Allows to filter entities based on their type (CUSTOMER, USER, DASHBOARD, ASSET, DEVICE, etc)For example, this entity filter selects all tenant customers: ```json { "type": "entityType", "entityType": "CUSTOMER" } ``` ## Group List Filter Return multiple groups of the same type using specified ids. For example, this entity filter selects 2 device groups (if they are present in the system) with ids 'e52b0020-2a7a-11ec-94eb-213c95f54092' and 'e52b0020-2a7a-11ec-94eb-213c95f54093': ```json { "type": "entityGroupList", "groupType": "DEVICE", "entityGroupList": ["e52b0020-2a7a-11ec-94eb-213c95f54092", "e52b0020-2a7a-11ec-94eb-213c95f54093"] } ``` ## Group Name Filter Allows to filter entity groups based on their type and the **'starts with'** expression over their name. For example, this entity filter selects all devices which name starts with 'CAT': ```json { "type": "entityGroupName", "groupType": "DEVICE", "entityGroupNameFilter": "CAT" } ``` ## Entities by Group Name Filter Allows to filter entities that belong to group based on the entity type and the group name. Optional parameter 'ownerId' allows you to specify the owner of the group (Tenant or Customer, current user owner by default).For example, this entity filter selects all devices which belong to group 'Water Meters': ```json { "type": "entitiesByGroupName", "groupType": "DEVICE", "entityGroupNameFilter": "Water Meters" } ``` Other example, this entity filter selects all devices which belong to group 'Water Meters' which in turn belongs to (sub-)Customer with id 'e52b0020-2a7a-11ec-94eb-213c95f54093': ```json { "type": "entitiesByGroupName", "ownerId": "e52b0020-2a7a-11ec-94eb-213c95f54093", "groupType": "DEVICE", "entityGroupNameFilter": "Water Meters" } ``` ## Entity owner Filter Allows to fetch owner (Tenant or Customer) of the specified entity. For example, this entity filter selects owner of the device with id 'e52b0020-2a7a-11ec-94eb-213c95f54093': ```json { "type": "stateEntityOwner", "singleEntity": { "id": "d521edb0-2a7a-11ec-94eb-213c95f54092", "entityType": "DEVICE" } } ``` ## Asset Type Filter Allows to filter assets based on their type and the **'starts with'** expression over their name. For example, this entity filter selects all 'charging station' assets which name starts with 'Tesla': ```json { "type": "assetType", "assetType": "charging station", "assetNameFilter": "Tesla" } ``` ## Device Type Filter Allows to filter devices based on their type and the **'starts with'** expression over their name. For example, this entity filter selects all 'Temperature Sensor' devices which name starts with 'ABC': ```json { "type": "deviceType", "deviceType": "Temperature Sensor", "deviceNameFilter": "ABC" } ``` ## Edge Type Filter Allows to filter edge instances based on their type and the **'starts with'** expression over their name. For example, this entity filter selects all 'Factory' edge instances which name starts with 'Nevada': ```json { "type": "edgeType", "edgeType": "Factory", "edgeNameFilter": "Nevada" } ``` ## Entity View Filter Allows to filter entity views based on their type and the **'starts with'** expression over their name. For example, this entity filter selects all 'Concrete Mixer' entity views which name starts with 'CAT': ```json { "type": "entityViewType", "entityViewType": "Concrete Mixer", "entityViewNameFilter": "CAT" } ``` ## Api Usage Filter Allows to query for Api Usage based on optional customer id. If the customer id is not set, returns current tenant API usage.For example, this entity filter selects the 'Api Usage' entity for customer with id 'e6501f30-2a7a-11ec-94eb-213c95f54092': ```json { "type": "apiUsageState", "customerId": { "id": "d521edb0-2a7a-11ec-94eb-213c95f54092", "entityType": "CUSTOMER" } } ``` ## Relations Query Filter Allows to filter entities that are related to the provided root entity. Possible direction values are 'TO' and 'FROM'. The 'maxLevel' defines how many relation levels should the query search 'recursively'. Assuming the 'maxLevel' is > 1, the 'fetchLastLevelOnly' defines either to return all related entities or only entities that are on the last level of relations. The 'filter' object allows you to define the relation type and set of acceptable entity types to search for. The relation query calculates all related entities, even if they are filtered using different relation types, and then extracts only those who match the 'filters'. For example, this entity filter selects all devices and assets which are related to the asset with id 'e51de0c0-2a7a-11ec-94eb-213c95f54092': ```json { "type": "relationsQuery", "rootEntity": { "entityType": "ASSET", "id": "e51de0c0-2a7a-11ec-94eb-213c95f54092" }, "direction": "FROM", "maxLevel": 1, "fetchLastLevelOnly": false, "filters": [ { "relationType": "Contains", "entityTypes": [ "DEVICE", "ASSET" ] } ] } ``` ## Asset Search Query Allows to filter assets that are related to the provided root entity. Filters related assets based on the relation type and set of asset types. Possible direction values are 'TO' and 'FROM'. The 'maxLevel' defines how many relation levels should the query search 'recursively'. Assuming the 'maxLevel' is > 1, the 'fetchLastLevelOnly' defines either to return all related entities or only entities that are on the last level of relations. The 'relationType' defines the type of the relation to search for. The 'assetTypes' defines the type of the asset to search for. The relation query calculates all related entities, even if they are filtered using different relation types, and then extracts only assets that match 'relationType' and 'assetTypes' conditions. For example, this entity filter selects 'charging station' assets which are related to the asset with id 'e51de0c0-2a7a-11ec-94eb-213c95f54092' using 'Contains' relation: ```json { "type": "assetSearchQuery", "rootEntity": { "entityType": "ASSET", "id": "e51de0c0-2a7a-11ec-94eb-213c95f54092" }, "direction": "FROM", "maxLevel": 1, "fetchLastLevelOnly": false, "relationType": "Contains", "assetTypes": [ "charging station" ] } ``` ## Device Search Query Allows to filter devices that are related to the provided root entity. Filters related devices based on the relation type and set of device types. Possible direction values are 'TO' and 'FROM'. The 'maxLevel' defines how many relation levels should the query search 'recursively'. Assuming the 'maxLevel' is > 1, the 'fetchLastLevelOnly' defines either to return all related entities or only entities that are on the last level of relations. The 'relationType' defines the type of the relation to search for. The 'deviceTypes' defines the type of the device to search for. The relation query calculates all related entities, even if they are filtered using different relation types, and then extracts only devices that match 'relationType' and 'deviceTypes' conditions. For example, this entity filter selects 'Charging port' and 'Air Quality Sensor' devices which are related to the asset with id 'e52b0020-2a7a-11ec-94eb-213c95f54092' using 'Contains' relation: ```json { "type": "deviceSearchQuery", "rootEntity": { "entityType": "ASSET", "id": "e52b0020-2a7a-11ec-94eb-213c95f54092" }, "direction": "FROM", "maxLevel": 2, "fetchLastLevelOnly": true, "relationType": "Contains", "deviceTypes": [ "Air Quality Sensor", "Charging port" ] } ``` ## Entity View Query Allows to filter entity views that are related to the provided root entity. Filters related entity views based on the relation type and set of entity view types. Possible direction values are 'TO' and 'FROM'. The 'maxLevel' defines how many relation levels should the query search 'recursively'. Assuming the 'maxLevel' is > 1, the 'fetchLastLevelOnly' defines either to return all related entities or only entities that are on the last level of relations. The 'relationType' defines the type of the relation to search for. The 'entityViewTypes' defines the type of the entity view to search for. The relation query calculates all related entities, even if they are filtered using different relation types, and then extracts only devices that match 'relationType' and 'deviceTypes' conditions. For example, this entity filter selects 'Concrete mixer' entity views which are related to the asset with id 'e52b0020-2a7a-11ec-94eb-213c95f54092' using 'Contains' relation: ```json { "type": "entityViewSearchQuery", "rootEntity": { "entityType": "ASSET", "id": "e52b0020-2a7a-11ec-94eb-213c95f54092" }, "direction": "FROM", "maxLevel": 1, "fetchLastLevelOnly": false, "relationType": "Contains", "entityViewTypes": [ "Concrete mixer" ] } ``` ## Edge Search Query Allows to filter edge instances that are related to the provided root entity. Filters related edge instances based on the relation type and set of edge types. Possible direction values are 'TO' and 'FROM'. The 'maxLevel' defines how many relation levels should the query search 'recursively'. Assuming the 'maxLevel' is > 1, the 'fetchLastLevelOnly' defines either to return all related entities or only entities that are on the last level of relations. The 'relationType' defines the type of the relation to search for. The 'deviceTypes' defines the type of the device to search for. The relation query calculates all related entities, even if they are filtered using different relation types, and then extracts only devices that match 'relationType' and 'deviceTypes' conditions. For example, this entity filter selects 'Factory' edge instances which are related to the asset with id 'e52b0020-2a7a-11ec-94eb-213c95f54092' using 'Contains' relation: ```json { "type": "deviceSearchQuery", "rootEntity": { "entityType": "ASSET", "id": "e52b0020-2a7a-11ec-94eb-213c95f54092" }, "direction": "FROM", "maxLevel": 2, "fetchLastLevelOnly": true, "relationType": "Contains", "edgeTypes": [ "Factory" ] } ``` # Key Filters Key Filter allows you to define complex logical expressions over entity field, attribute or latest time-series value. The filter is defined using 'key', 'valueType' and 'predicate' objects. Single Entity Query may have zero, one or multiple predicates. If multiple filters are defined, they are evaluated using logical 'AND'. The example below checks that temperature of the entity is above 20 degrees: ```json { "key": { "type": "TIME_SERIES", "key": "temperature" }, "valueType": "NUMERIC", "predicate": { "operation": "GREATER", "value": { "defaultValue": 20, "dynamicValue": null }, "type": "NUMERIC" } } ``` Now let's review 'key', 'valueType' and 'predicate' objects in detail. ## Filter Key Filter Key defines either entity field, attribute or telemetry. It is a JSON object that consists the key name and type. The following filter key types are supported: * 'CLIENT_ATTRIBUTE' - used for client attributes; * 'SHARED_ATTRIBUTE' - used for shared attributes; * 'SERVER_ATTRIBUTE' - used for server attributes; * 'ATTRIBUTE' - used for any of the above; * 'TIME_SERIES' - used for time-series values; * 'ENTITY_FIELD' - used for accessing entity fields like 'name', 'label', etc. The list of available fields depends on the entity type; * 'ALARM_FIELD' - similar to entity field, but is used in alarm queries only; Let's review the example: ```json { "type": "TIME_SERIES", "key": "temperature" } ``` ## Value Type and Operations Provides a hint about the data type of the entity field that is defined in the filter key. The value type impacts the list of possible operations that you may use in the corresponding predicate. For example, you may use 'STARTS_WITH' or 'END_WITH', but you can't use 'GREATER_OR_EQUAL' for string values.The following filter value types and corresponding predicate operations are supported: * 'STRING' - used to filter any 'String' or 'JSON' values. Operations: EQUAL, NOT_EQUAL, STARTS_WITH, ENDS_WITH, CONTAINS, NOT_CONTAINS; * 'NUMERIC' - used for 'Long' and 'Double' values. Operations: EQUAL, NOT_EQUAL, GREATER, LESS, GREATER_OR_EQUAL, LESS_OR_EQUAL; * 'BOOLEAN' - used for boolean values. Operations: EQUAL, NOT_EQUAL; * 'DATE_TIME' - similar to numeric, transforms value to milliseconds since epoch. Operations: EQUAL, NOT_EQUAL, GREATER, LESS, GREATER_OR_EQUAL, LESS_OR_EQUAL; ## Filter Predicate Filter Predicate defines the logical expression to evaluate. The list of available operations depends on the filter value type, see above. Platform supports 4 predicate types: 'STRING', 'NUMERIC', 'BOOLEAN' and 'COMPLEX'. The last one allows to combine multiple operations over one filter key. Simple predicate example to check 'value < 100': ```json { "operation": "LESS", "value": { "defaultValue": 100, "dynamicValue": null }, "type": "NUMERIC" } ``` Complex predicate example, to check 'value < 10 or value > 20': ```json { "type": "COMPLEX", "operation": "OR", "predicates": [ { "operation": "LESS", "value": { "defaultValue": 10, "dynamicValue": null }, "type": "NUMERIC" }, { "operation": "GREATER", "value": { "defaultValue": 20, "dynamicValue": null }, "type": "NUMERIC" } ] } ``` More complex predicate example, to check 'value < 10 or (value > 50 && value < 60)': ```json { "type": "COMPLEX", "operation": "OR", "predicates": [ { "operation": "LESS", "value": { "defaultValue": 10, "dynamicValue": null }, "type": "NUMERIC" }, { "type": "COMPLEX", "operation": "AND", "predicates": [ { "operation": "GREATER", "value": { "defaultValue": 50, "dynamicValue": null }, "type": "NUMERIC" }, { "operation": "LESS", "value": { "defaultValue": 60, "dynamicValue": null }, "type": "NUMERIC" } ] } ] } ``` You may also want to replace hardcoded values (for example, temperature > 20) with the more dynamic expression (for example, temperature > 'value of the tenant attribute with key 'temperatureThreshold'). It is possible to use 'dynamicValue' to define attribute of the tenant, customer or user that is performing the API call. See example below: ```json { "operation": "GREATER", "value": { "defaultValue": 0, "dynamicValue": { "sourceType": "CURRENT_USER", "sourceAttribute": "temperatureThreshold" } }, "type": "NUMERIC" } ``` Note that you may use 'CURRENT_USER', 'CURRENT_CUSTOMER' and 'CURRENT_TENANT' as a 'sourceType'. The 'defaultValue' is used when the attribute with such a name is not defined for the chosen source. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags entity-query-controller
* @name CountEntitiesByQueryUsingPost
* @summary Count Entities by Query
* @request POST:/api/entitiesQuery/count
* @secure
* @response `200` `CountEntitiesByQueryUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
countEntitiesByQueryUsingPost = (data, params = {}) => this.request({
    path: `/api/entitiesQuery/count`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Allows to run complex queries over platform entities (devices, assets, customers, etc) based on the combination of main entity filter and multiple key filters. Returns the paginated result of the query that contains requested entity fields and latest values of requested attributes and time-series data. # Query Definition Main **entity filter** is mandatory and defines generic search criteria. For example, "find all devices with profile 'Moisture Sensor'" or "Find all devices related to asset 'Building A'" Optional **key filters** allow to filter results of the **entity filter** by complex criteria against main entity fields (name, label, type, etc), attributes and telemetry. For example, "temperature > 20 or temperature< 10" or "name starts with 'T', and attribute 'model' is 'T1000', and timeseries field 'batteryLevel' > 40". The **entity fields** and **latest values** contains list of entity fields and latest attribute/telemetry fields to fetch for each entity. The **page link** contains information about the page to fetch and the sort ordering. Let's review the example: ```json { "entityFilter": { "type": "entityType", "resolveMultiple": true, "entityType": "DEVICE" }, "keyFilters": [ { "key": { "type": "TIME_SERIES", "key": "temperature" }, "valueType": "NUMERIC", "predicate": { "operation": "GREATER", "value": { "defaultValue": 0, "dynamicValue": { "sourceType": "CURRENT_USER", "sourceAttribute": "temperatureThreshold", "inherit": false } }, "type": "NUMERIC" } } ], "entityFields": [ { "type": "ENTITY_FIELD", "key": "name" }, { "type": "ENTITY_FIELD", "key": "label" }, { "type": "ENTITY_FIELD", "key": "additionalInfo" } ], "latestValues": [ { "type": "ATTRIBUTE", "key": "model" }, { "type": "TIME_SERIES", "key": "temperature" } ], "pageLink": { "page": 0, "pageSize": 10, "sortOrder": { "key": { "key": "name", "type": "ENTITY_FIELD" }, "direction": "ASC" } } } ``` Example mentioned above search all devices which have attribute 'active' set to 'true'. Now let's review available entity filters and key filters syntax: # Entity Filters Entity Filter body depends on the 'type' parameter. Let's review available entity filter types. In fact, they do correspond to available dashboard aliases. ## Single Entity Allows to filter only one entity based on the id. For example, this entity filter selects certain device: ```json { "type": "singleEntity", "singleEntity": { "id": "d521edb0-2a7a-11ec-94eb-213c95f54092", "entityType": "DEVICE" } } ``` ## Group Entities Filter Allows to filter multiple entities of the same type using the entity group type and id. For example, this entity filter selects all devices that belong to the group 'e52b0020-2a7a-11ec-94eb-213c95f54092': ```json { "type": "entityGroup", "groupType": "DEVICE", "entityGroup": "e52b0020-2a7a-11ec-94eb-213c95f54092" } ``` ## Entity List Filter Allows to filter entities of the same type using their ids. For example, this entity filter selects two devices: ```json { "type": "entityList", "entityType": "DEVICE", "entityList": [ "e6501f30-2a7a-11ec-94eb-213c95f54092", "e6657bf0-2a7a-11ec-94eb-213c95f54092" ] } ``` ## Entity Name Filter Allows to filter entities of the same type using the **'starts with'** expression over entity name. For example, this entity filter selects all devices which name starts with 'Air Quality': ```json { "type": "entityName", "entityType": "DEVICE", "entityNameFilter": "Air Quality" } ``` ## Entity Type Filter Allows to filter entities based on their type (CUSTOMER, USER, DASHBOARD, ASSET, DEVICE, etc)For example, this entity filter selects all tenant customers: ```json { "type": "entityType", "entityType": "CUSTOMER" } ``` ## Group List Filter Return multiple groups of the same type using specified ids. For example, this entity filter selects 2 device groups (if they are present in the system) with ids 'e52b0020-2a7a-11ec-94eb-213c95f54092' and 'e52b0020-2a7a-11ec-94eb-213c95f54093': ```json { "type": "entityGroupList", "groupType": "DEVICE", "entityGroupList": ["e52b0020-2a7a-11ec-94eb-213c95f54092", "e52b0020-2a7a-11ec-94eb-213c95f54093"] } ``` ## Group Name Filter Allows to filter entity groups based on their type and the **'starts with'** expression over their name. For example, this entity filter selects all devices which name starts with 'CAT': ```json { "type": "entityGroupName", "groupType": "DEVICE", "entityGroupNameFilter": "CAT" } ``` ## Entities by Group Name Filter Allows to filter entities that belong to group based on the entity type and the group name. Optional parameter 'ownerId' allows you to specify the owner of the group (Tenant or Customer, current user owner by default).For example, this entity filter selects all devices which belong to group 'Water Meters': ```json { "type": "entitiesByGroupName", "groupType": "DEVICE", "entityGroupNameFilter": "Water Meters" } ``` Other example, this entity filter selects all devices which belong to group 'Water Meters' which in turn belongs to (sub-)Customer with id 'e52b0020-2a7a-11ec-94eb-213c95f54093': ```json { "type": "entitiesByGroupName", "ownerId": "e52b0020-2a7a-11ec-94eb-213c95f54093", "groupType": "DEVICE", "entityGroupNameFilter": "Water Meters" } ``` ## Entity owner Filter Allows to fetch owner (Tenant or Customer) of the specified entity. For example, this entity filter selects owner of the device with id 'e52b0020-2a7a-11ec-94eb-213c95f54093': ```json { "type": "stateEntityOwner", "singleEntity": { "id": "d521edb0-2a7a-11ec-94eb-213c95f54092", "entityType": "DEVICE" } } ``` ## Asset Type Filter Allows to filter assets based on their type and the **'starts with'** expression over their name. For example, this entity filter selects all 'charging station' assets which name starts with 'Tesla': ```json { "type": "assetType", "assetType": "charging station", "assetNameFilter": "Tesla" } ``` ## Device Type Filter Allows to filter devices based on their type and the **'starts with'** expression over their name. For example, this entity filter selects all 'Temperature Sensor' devices which name starts with 'ABC': ```json { "type": "deviceType", "deviceType": "Temperature Sensor", "deviceNameFilter": "ABC" } ``` ## Edge Type Filter Allows to filter edge instances based on their type and the **'starts with'** expression over their name. For example, this entity filter selects all 'Factory' edge instances which name starts with 'Nevada': ```json { "type": "edgeType", "edgeType": "Factory", "edgeNameFilter": "Nevada" } ``` ## Entity View Filter Allows to filter entity views based on their type and the **'starts with'** expression over their name. For example, this entity filter selects all 'Concrete Mixer' entity views which name starts with 'CAT': ```json { "type": "entityViewType", "entityViewType": "Concrete Mixer", "entityViewNameFilter": "CAT" } ``` ## Api Usage Filter Allows to query for Api Usage based on optional customer id. If the customer id is not set, returns current tenant API usage.For example, this entity filter selects the 'Api Usage' entity for customer with id 'e6501f30-2a7a-11ec-94eb-213c95f54092': ```json { "type": "apiUsageState", "customerId": { "id": "d521edb0-2a7a-11ec-94eb-213c95f54092", "entityType": "CUSTOMER" } } ``` ## Relations Query Filter Allows to filter entities that are related to the provided root entity. Possible direction values are 'TO' and 'FROM'. The 'maxLevel' defines how many relation levels should the query search 'recursively'. Assuming the 'maxLevel' is > 1, the 'fetchLastLevelOnly' defines either to return all related entities or only entities that are on the last level of relations. The 'filter' object allows you to define the relation type and set of acceptable entity types to search for. The relation query calculates all related entities, even if they are filtered using different relation types, and then extracts only those who match the 'filters'. For example, this entity filter selects all devices and assets which are related to the asset with id 'e51de0c0-2a7a-11ec-94eb-213c95f54092': ```json { "type": "relationsQuery", "rootEntity": { "entityType": "ASSET", "id": "e51de0c0-2a7a-11ec-94eb-213c95f54092" }, "direction": "FROM", "maxLevel": 1, "fetchLastLevelOnly": false, "filters": [ { "relationType": "Contains", "entityTypes": [ "DEVICE", "ASSET" ] } ] } ``` ## Asset Search Query Allows to filter assets that are related to the provided root entity. Filters related assets based on the relation type and set of asset types. Possible direction values are 'TO' and 'FROM'. The 'maxLevel' defines how many relation levels should the query search 'recursively'. Assuming the 'maxLevel' is > 1, the 'fetchLastLevelOnly' defines either to return all related entities or only entities that are on the last level of relations. The 'relationType' defines the type of the relation to search for. The 'assetTypes' defines the type of the asset to search for. The relation query calculates all related entities, even if they are filtered using different relation types, and then extracts only assets that match 'relationType' and 'assetTypes' conditions. For example, this entity filter selects 'charging station' assets which are related to the asset with id 'e51de0c0-2a7a-11ec-94eb-213c95f54092' using 'Contains' relation: ```json { "type": "assetSearchQuery", "rootEntity": { "entityType": "ASSET", "id": "e51de0c0-2a7a-11ec-94eb-213c95f54092" }, "direction": "FROM", "maxLevel": 1, "fetchLastLevelOnly": false, "relationType": "Contains", "assetTypes": [ "charging station" ] } ``` ## Device Search Query Allows to filter devices that are related to the provided root entity. Filters related devices based on the relation type and set of device types. Possible direction values are 'TO' and 'FROM'. The 'maxLevel' defines how many relation levels should the query search 'recursively'. Assuming the 'maxLevel' is > 1, the 'fetchLastLevelOnly' defines either to return all related entities or only entities that are on the last level of relations. The 'relationType' defines the type of the relation to search for. The 'deviceTypes' defines the type of the device to search for. The relation query calculates all related entities, even if they are filtered using different relation types, and then extracts only devices that match 'relationType' and 'deviceTypes' conditions. For example, this entity filter selects 'Charging port' and 'Air Quality Sensor' devices which are related to the asset with id 'e52b0020-2a7a-11ec-94eb-213c95f54092' using 'Contains' relation: ```json { "type": "deviceSearchQuery", "rootEntity": { "entityType": "ASSET", "id": "e52b0020-2a7a-11ec-94eb-213c95f54092" }, "direction": "FROM", "maxLevel": 2, "fetchLastLevelOnly": true, "relationType": "Contains", "deviceTypes": [ "Air Quality Sensor", "Charging port" ] } ``` ## Entity View Query Allows to filter entity views that are related to the provided root entity. Filters related entity views based on the relation type and set of entity view types. Possible direction values are 'TO' and 'FROM'. The 'maxLevel' defines how many relation levels should the query search 'recursively'. Assuming the 'maxLevel' is > 1, the 'fetchLastLevelOnly' defines either to return all related entities or only entities that are on the last level of relations. The 'relationType' defines the type of the relation to search for. The 'entityViewTypes' defines the type of the entity view to search for. The relation query calculates all related entities, even if they are filtered using different relation types, and then extracts only devices that match 'relationType' and 'deviceTypes' conditions. For example, this entity filter selects 'Concrete mixer' entity views which are related to the asset with id 'e52b0020-2a7a-11ec-94eb-213c95f54092' using 'Contains' relation: ```json { "type": "entityViewSearchQuery", "rootEntity": { "entityType": "ASSET", "id": "e52b0020-2a7a-11ec-94eb-213c95f54092" }, "direction": "FROM", "maxLevel": 1, "fetchLastLevelOnly": false, "relationType": "Contains", "entityViewTypes": [ "Concrete mixer" ] } ``` ## Edge Search Query Allows to filter edge instances that are related to the provided root entity. Filters related edge instances based on the relation type and set of edge types. Possible direction values are 'TO' and 'FROM'. The 'maxLevel' defines how many relation levels should the query search 'recursively'. Assuming the 'maxLevel' is > 1, the 'fetchLastLevelOnly' defines either to return all related entities or only entities that are on the last level of relations. The 'relationType' defines the type of the relation to search for. The 'deviceTypes' defines the type of the device to search for. The relation query calculates all related entities, even if they are filtered using different relation types, and then extracts only devices that match 'relationType' and 'deviceTypes' conditions. For example, this entity filter selects 'Factory' edge instances which are related to the asset with id 'e52b0020-2a7a-11ec-94eb-213c95f54092' using 'Contains' relation: ```json { "type": "deviceSearchQuery", "rootEntity": { "entityType": "ASSET", "id": "e52b0020-2a7a-11ec-94eb-213c95f54092" }, "direction": "FROM", "maxLevel": 2, "fetchLastLevelOnly": true, "relationType": "Contains", "edgeTypes": [ "Factory" ] } ``` # Key Filters Key Filter allows you to define complex logical expressions over entity field, attribute or latest time-series value. The filter is defined using 'key', 'valueType' and 'predicate' objects. Single Entity Query may have zero, one or multiple predicates. If multiple filters are defined, they are evaluated using logical 'AND'. The example below checks that temperature of the entity is above 20 degrees: ```json { "key": { "type": "TIME_SERIES", "key": "temperature" }, "valueType": "NUMERIC", "predicate": { "operation": "GREATER", "value": { "defaultValue": 20, "dynamicValue": null }, "type": "NUMERIC" } } ``` Now let's review 'key', 'valueType' and 'predicate' objects in detail. ## Filter Key Filter Key defines either entity field, attribute or telemetry. It is a JSON object that consists the key name and type. The following filter key types are supported: * 'CLIENT_ATTRIBUTE' - used for client attributes; * 'SHARED_ATTRIBUTE' - used for shared attributes; * 'SERVER_ATTRIBUTE' - used for server attributes; * 'ATTRIBUTE' - used for any of the above; * 'TIME_SERIES' - used for time-series values; * 'ENTITY_FIELD' - used for accessing entity fields like 'name', 'label', etc. The list of available fields depends on the entity type; * 'ALARM_FIELD' - similar to entity field, but is used in alarm queries only; Let's review the example: ```json { "type": "TIME_SERIES", "key": "temperature" } ``` ## Value Type and Operations Provides a hint about the data type of the entity field that is defined in the filter key. The value type impacts the list of possible operations that you may use in the corresponding predicate. For example, you may use 'STARTS_WITH' or 'END_WITH', but you can't use 'GREATER_OR_EQUAL' for string values.The following filter value types and corresponding predicate operations are supported: * 'STRING' - used to filter any 'String' or 'JSON' values. Operations: EQUAL, NOT_EQUAL, STARTS_WITH, ENDS_WITH, CONTAINS, NOT_CONTAINS; * 'NUMERIC' - used for 'Long' and 'Double' values. Operations: EQUAL, NOT_EQUAL, GREATER, LESS, GREATER_OR_EQUAL, LESS_OR_EQUAL; * 'BOOLEAN' - used for boolean values. Operations: EQUAL, NOT_EQUAL; * 'DATE_TIME' - similar to numeric, transforms value to milliseconds since epoch. Operations: EQUAL, NOT_EQUAL, GREATER, LESS, GREATER_OR_EQUAL, LESS_OR_EQUAL; ## Filter Predicate Filter Predicate defines the logical expression to evaluate. The list of available operations depends on the filter value type, see above. Platform supports 4 predicate types: 'STRING', 'NUMERIC', 'BOOLEAN' and 'COMPLEX'. The last one allows to combine multiple operations over one filter key. Simple predicate example to check 'value < 100': ```json { "operation": "LESS", "value": { "defaultValue": 100, "dynamicValue": null }, "type": "NUMERIC" } ``` Complex predicate example, to check 'value < 10 or value > 20': ```json { "type": "COMPLEX", "operation": "OR", "predicates": [ { "operation": "LESS", "value": { "defaultValue": 10, "dynamicValue": null }, "type": "NUMERIC" }, { "operation": "GREATER", "value": { "defaultValue": 20, "dynamicValue": null }, "type": "NUMERIC" } ] } ``` More complex predicate example, to check 'value < 10 or (value > 50 && value < 60)': ```json { "type": "COMPLEX", "operation": "OR", "predicates": [ { "operation": "LESS", "value": { "defaultValue": 10, "dynamicValue": null }, "type": "NUMERIC" }, { "type": "COMPLEX", "operation": "AND", "predicates": [ { "operation": "GREATER", "value": { "defaultValue": 50, "dynamicValue": null }, "type": "NUMERIC" }, { "operation": "LESS", "value": { "defaultValue": 60, "dynamicValue": null }, "type": "NUMERIC" } ] } ] } ``` You may also want to replace hardcoded values (for example, temperature > 20) with the more dynamic expression (for example, temperature > 'value of the tenant attribute with key 'temperatureThreshold'). It is possible to use 'dynamicValue' to define attribute of the tenant, customer or user that is performing the API call. See example below: ```json { "operation": "GREATER", "value": { "defaultValue": 0, "dynamicValue": { "sourceType": "CURRENT_USER", "sourceAttribute": "temperatureThreshold" } }, "type": "NUMERIC" } ``` Note that you may use 'CURRENT_USER', 'CURRENT_CUSTOMER' and 'CURRENT_TENANT' as a 'sourceType'. The 'defaultValue' is used when the attribute with such a name is not defined for the chosen source. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags entity-query-controller
* @name FindEntityDataByQueryUsingPost
* @summary Find Entity Data by Query
* @request POST:/api/entitiesQuery/find
* @secure
* @response `200` `FindEntityDataByQueryUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
findEntityDataByQueryUsingPost = (data, params = {}) => this.request({
    path: `/api/entitiesQuery/find`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Uses entity data query (see 'Find Entity Data by Query') to find first 100 entities. Then fetch and return all unique time-series and/or attribute keys. Used mostly for UI hints.
*
* @tags entity-query-controller
* @name FindEntityTimeseriesAndAttributesKeysByQueryUsingPost
* @summary Find Entity Keys by Query
* @request POST:/api/entitiesQuery/find/keys{?attributes,timeseries}
* @secure
* @response `200` `FindEntityTimeseriesAndAttributesKeysByQueryUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
findEntityTimeseriesAndAttributesKeysByQueryUsingPost = (query, data, params = {}) => this.request({
    path: `/api/entitiesQuery/find/keys`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Creates or updates a relation between two entities in the platform. Relations unique key is a combination of from/to entity id and relation type group and relation type. If the user has the authority of 'System Administrator', the server checks that 'from' and 'to' entities are owned by the sysadmin. If the user has the authority of 'Tenant Administrator', the server checks that 'from' and 'to' entities are owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the 'from' and 'to' entities are assigned to the same customer.
*
* @tags entity-relation-controller
* @name SaveRelationUsingPost
* @summary Create Relation (saveRelation)
* @request POST:/api/relation
* @secure
* @response `200` `SaveRelationUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveRelationUsingPost = (data, params = {}) => this.request({
    path: `/api/relation`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, ...params,
});
/**
* @description Returns all entities that are related to the specific entity. The entity id, relation type, entity types, depth of the search, and other query parameters defined using complex 'EntityRelationsQuery' object. See 'Model' tab of the Parameters for more info.
*
* @tags entity-relation-controller
* @name FindByQueryUsingPost3
* @summary Find related entities (findByQuery)
* @request POST:/api/relations
* @secure
* @response `200` `FindByQueryUsingPost3Data` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
findByQueryUsingPost3 = (data, params = {}) => this.request({
    path: `/api/relations`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Returns all entity infos that are related to the specific entity. The entity id, relation type, entity types, depth of the search, and other query parameters defined using complex 'EntityRelationsQuery' object. See 'Model' tab of the Parameters for more info. Relation Info is an extension of the default Relation object that contains information about the 'from' and 'to' entity names.
*
* @tags entity-relation-controller
* @name FindInfoByQueryUsingPost
* @summary Find related entity infos (findInfoByQuery)
* @request POST:/api/relations/info
* @secure
* @response `200` `FindInfoByQueryUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
findInfoByQueryUsingPost = (data, params = {}) => this.request({
    path: `/api/relations/info`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Returns list of relation info objects for the specified entity by the 'from' direction. If the user has the authority of 'System Administrator', the server checks that the entity is owned by the sysadmin. If the user has the authority of 'Tenant Administrator', the server checks that the entity is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the entity is assigned to the same customer. Relation Info is an extension of the default Relation object that contains information about the 'from' and 'to' entity names.
*
* @tags entity-relation-controller
* @name FindInfoByFromUsingGet
* @summary Get List of Relation Infos (findInfoByFrom)
* @request GET:/api/relations/info{?fromId,fromType,relationTypeGroup}
* @secure
* @response `200` `FindInfoByFromUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
findInfoByFromUsingGet = (query, params = {}) => this.request({
    path: `/api/relations/info`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns list of relation info objects for the specified entity by the 'to' direction. If the user has the authority of 'System Administrator', the server checks that the entity is owned by the sysadmin. If the user has the authority of 'Tenant Administrator', the server checks that the entity is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the entity is assigned to the same customer. Relation Info is an extension of the default Relation object that contains information about the 'from' and 'to' entity names.
*
* @tags entity-relation-controller
* @name FindInfoByToUsingGet
* @summary Get List of Relation Infos (findInfoByTo)
* @request GET:/api/relations/info{?relationTypeGroup,toId,toType}
* @secure
* @response `200` `FindInfoByToUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
findInfoByToUsingGet = (query, params = {}) => this.request({
    path: `/api/relations/info`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Deletes all the relations ('from' and 'to' direction) for the specified entity and relation type group: 'COMMON'. If the user has the authority of 'System Administrator', the server checks that the entity is owned by the sysadmin. If the user has the authority of 'Tenant Administrator', the server checks that the entity is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the entity is assigned to the same customer.
*
* @tags entity-relation-controller
* @name DeleteRelationsUsingDelete
* @summary Delete common relations (deleteCommonRelations)
* @request DELETE:/api/relations{?entityId,entityType}
* @secure
* @response `200` `DeleteRelationsUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteRelationsUsingDelete = (query, params = {}) => this.request({
    path: `/api/relations`,
    method: 'DELETE',
    query: query, secure: true, ...params,
});
/**
* @description Returns list of relation objects for the specified entity by the 'from' direction and relation type. If the user has the authority of 'System Administrator', the server checks that the entity is owned by the sysadmin. If the user has the authority of 'Tenant Administrator', the server checks that the entity is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the entity is assigned to the same customer.
*
* @tags entity-relation-controller
* @name FindByFromUsingGet
* @summary Get List of Relations (findByFrom)
* @request GET:/api/relations{?fromId,fromType,relationType,relationTypeGroup}
* @secure
* @response `200` `FindByFromUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
findByFromUsingGet = (query, params = {}) => this.request({
    path: `/api/relations`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns list of relation objects for the specified entity by the 'from' direction. If the user has the authority of 'System Administrator', the server checks that the entity is owned by the sysadmin. If the user has the authority of 'Tenant Administrator', the server checks that the entity is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the entity is assigned to the same customer.
*
* @tags entity-relation-controller
* @name FindByFromUsingGet1
* @summary Get List of Relations (findByFrom)
* @request GET:/api/relations{?fromId,fromType,relationTypeGroup}
* @secure
* @response `200` `FindByFromUsingGet1Data` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
findByFromUsingGet1 = (query, params = {}) => this.request({
    path: `/api/relations`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns list of relation objects for the specified entity by the 'to' direction and relation type. If the user has the authority of 'System Administrator', the server checks that the entity is owned by the sysadmin. If the user has the authority of 'Tenant Administrator', the server checks that the entity is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the entity is assigned to the same customer.
*
* @tags entity-relation-controller
* @name FindByToUsingGet
* @summary Get List of Relations (findByTo)
* @request GET:/api/relations{?relationType,relationTypeGroup,toId,toType}
* @secure
* @response `200` `FindByToUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
findByToUsingGet = (query, params = {}) => this.request({
    path: `/api/relations`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns list of relation objects for the specified entity by the 'to' direction. If the user has the authority of 'System Administrator', the server checks that the entity is owned by the sysadmin. If the user has the authority of 'Tenant Administrator', the server checks that the entity is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the entity is assigned to the same customer.
*
* @tags entity-relation-controller
* @name FindByToUsingGet1
* @summary Get List of Relations (findByTo)
* @request GET:/api/relations{?relationTypeGroup,toId,toType}
* @secure
* @response `200` `FindByToUsingGet1Data` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
findByToUsingGet1 = (query, params = {}) => this.request({
    path: `/api/relations`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns relation object between two specified entities if present. Otherwise throws exception. If the user has the authority of 'System Administrator', the server checks that 'from' and 'to' entities are owned by the sysadmin. If the user has the authority of 'Tenant Administrator', the server checks that 'from' and 'to' entities are owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the 'from' and 'to' entities are assigned to the same customer.
*
* @tags entity-relation-controller
* @name GetRelationUsingGet
* @summary Get Relation (getRelation)
* @request GET:/api/relation{?fromId,fromType,relationType,relationTypeGroup,toId,toType}
* @secure
* @response `200` `GetRelationUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getRelationUsingGet = (query, params = {}) => this.request({
    path: `/api/relation`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Deletes a relation between two entities in the platform. If the user has the authority of 'System Administrator', the server checks that 'from' and 'to' entities are owned by the sysadmin. If the user has the authority of 'Tenant Administrator', the server checks that 'from' and 'to' entities are owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the 'from' and 'to' entities are assigned to the same customer.
*
* @tags entity-relation-controller
* @name DeleteRelationUsingDelete
* @summary Delete Relation (deleteRelation)
* @request DELETE:/api/relation{?fromId,fromType,relationType,relationTypeGroup,toId,toType}
* @secure
* @response `200` `DeleteRelationUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteRelationUsingDelete = (query, params = {}) => this.request({
    path: `/api/relation`,
    method: 'DELETE',
    query: query, secure: true, ...params,
});
/**
* @description Returns a page of entity view info objects owned by the specified customer. Entity Views Info extends the Entity View with owner name. Entity Views limit the degree of exposure of the Device or Asset telemetry and attributes to the Customers. Every Entity View references exactly one entity (device or asset) and defines telemetry and attribute keys that will be visible to the assigned Customer. As a Tenant Administrator you are able to create multiple EVs per Device or Asset and assign them to different Customers.  You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags entity-view-controller
* @name GetCustomerEntityViewInfosUsingGet
* @summary Get Customer Entity View Infos (getCustomerEntityViewInfos)
* @request GET:/api/customer/{customerId}/entityViewInfos{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch,type}
* @secure
* @response `200` `GetCustomerEntityViewInfosUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCustomerEntityViewInfosUsingGet = ({ customerId, ...query }, params = {}) => this.request({
    path: `/api/customer/${customerId}/entityViewInfos`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of Entity View objects assigned to customer. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags entity-view-controller
* @name GetCustomerEntityViewsUsingGet
* @summary Get Customer Entity Views (getCustomerEntityViews)
* @request GET:/api/customer/{customerId}/entityViews{?page,pageSize,sortOrder,sortProperty,textSearch,type}
* @secure
* @response `200` `GetCustomerEntityViewsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCustomerEntityViewsUsingGet = ({ customerId, ...query }, params = {}) => this.request({
    path: `/api/customer/${customerId}/entityViews`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of Entity View objects that belongs to specified Entity View Id. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags entity-view-controller
* @name GetEntityViewsByEntityGroupIdUsingGet
* @summary Get entity views by Entity Group Id (getEntityViewsByEntityGroupId)
* @request GET:/api/entityGroup/{entityGroupId}/entityViews{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetEntityViewsByEntityGroupIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEntityViewsByEntityGroupIdUsingGet = ({ entityGroupId, ...query }, params = {}) => this.request({
    path: `/api/entityGroup/${entityGroupId}/entityViews`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Fetch the Entity View info object based on the provided entity view id. Entity Views Info extends the Entity View with owner name. Entity Views limit the degree of exposure of the Device or Asset telemetry and attributes to the Customers. Every Entity View references exactly one entity (device or asset) and defines telemetry and attribute keys that will be visible to the assigned Customer. As a Tenant Administrator you are able to create multiple EVs per Device or Asset and assign them to different Customers. See the 'Model' tab for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags entity-view-controller
* @name GetEntityViewInfoByIdUsingGet
* @summary Get entity view info (getEntityViewInfoById)
* @request GET:/api/entityView/info/{entityViewId}
* @secure
* @response `200` `GetEntityViewInfoByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEntityViewInfoByIdUsingGet = (entityViewId, params = {}) => this.request({
    path: `/api/entityView/info/${entityViewId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Returns a set of unique entity view types based on entity views that are either owned by the tenant or assigned to the customer which user is performing the request. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags entity-view-controller
* @name GetEntityViewTypesUsingGet
* @summary Get Entity View Types (getEntityViewTypes)
* @request GET:/api/entityView/types
* @secure
* @response `200` `GetEntityViewTypesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEntityViewTypesUsingGet = (params = {}) => this.request({
    path: `/api/entityView/types`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Fetch the EntityView object based on the provided entity view id. Entity Views limit the degree of exposure of the Device or Asset telemetry and attributes to the Customers. Every Entity View references exactly one entity (device or asset) and defines telemetry and attribute keys that will be visible to the assigned Customer. As a Tenant Administrator you are able to create multiple EVs per Device or Asset and assign them to different Customers. See the 'Model' tab for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags entity-view-controller
* @name GetEntityViewByIdUsingGet
* @summary Get entity view (getEntityViewById)
* @request GET:/api/entityView/{entityViewId}
* @secure
* @response `200` `GetEntityViewByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEntityViewByIdUsingGet = (entityViewId, params = {}) => this.request({
    path: `/api/entityView/${entityViewId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Delete the EntityView object based on the provided entity view id. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags entity-view-controller
* @name DeleteEntityViewUsingDelete
* @summary Delete entity view (deleteEntityView)
* @request DELETE:/api/entityView/{entityViewId}
* @secure
* @response `200` `DeleteEntityViewUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteEntityViewUsingDelete = (entityViewId, params = {}) => this.request({
    path: `/api/entityView/${entityViewId}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Returns a page of entity view info objects owned by the tenant or the customer of a current user. Entity Views Info extends the Entity View with owner name. Entity Views limit the degree of exposure of the Device or Asset telemetry and attributes to the Customers. Every Entity View references exactly one entity (device or asset) and defines telemetry and attribute keys that will be visible to the assigned Customer. As a Tenant Administrator you are able to create multiple EVs per Device or Asset and assign them to different Customers.  You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags entity-view-controller
* @name GetAllEntityViewInfosUsingGet
* @summary Get All Entity View Infos for current user (getAllEntityViewInfos)
* @request GET:/api/entityViewInfos/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch,type}
* @secure
* @response `200` `GetAllEntityViewInfosUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getAllEntityViewInfosUsingGet = (query, params = {}) => this.request({
    path: `/api/entityViewInfos/all`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns all entity views that are related to the specific entity. The entity id, relation type, entity view types, depth of the search, and other query parameters defined using complex 'EntityViewSearchQuery' object. See 'Model' tab of the Parameters for more info. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags entity-view-controller
* @name FindByQueryUsingPost4
* @summary Find related entity views (findByQuery)
* @request POST:/api/entityViews
* @secure
* @response `200` `FindByQueryUsingPost4Data` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
findByQueryUsingPost4 = (data, params = {}) => this.request({
    path: `/api/entityViews`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Requested entity views must be owned by tenant or assigned to customer which user is performing the request. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags entity-view-controller
* @name GetEntityViewsByIdsUsingGet
* @summary Get Entity Views By Ids (getEntityViewsByIds)
* @request GET:/api/entityViews{?entityViewIds}
* @secure
* @response `200` `GetEntityViewsByIdsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEntityViewsByIdsUsingGet = (query, params = {}) => this.request({
    path: `/api/entityViews`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Entity Views limit the degree of exposure of the Device or Asset telemetry and attributes to the Customers. Every Entity View references exactly one entity (device or asset) and defines telemetry and attribute keys that will be visible to the assigned Customer. As a Tenant Administrator you are able to create multiple EVs per Device or Asset and assign them to different Customers. See the 'Model' tab for more details.Remove 'id', 'tenantId' and optionally 'customerId' from the request body example (below) to create new Entity View entity. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags entity-view-controller
* @name SaveEntityViewUsingPost
* @summary Save or update entity view (saveEntityView)
* @request POST:/api/entityView{?entityGroupId,entityGroupIds}
* @secure
* @response `200` `SaveEntityViewUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveEntityViewUsingPost = (query, data, params = {}) => this.request({
    path: `/api/entityView`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Fetch the Entity View object based on the tenant id and entity view name. Available for users with 'TENANT_ADMIN' authority.
*
* @tags entity-view-controller
* @name GetTenantEntityViewUsingGet
* @summary Get Entity View by name (getTenantEntityView)
* @request GET:/api/tenant/entityViews{?entityViewName}
* @secure
* @response `200` `GetTenantEntityViewUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantEntityViewUsingGet = (query, params = {}) => this.request({
    path: `/api/tenant/entityViews`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of entity views owned by tenant. Entity Views limit the degree of exposure of the Device or Asset telemetry and attributes to the Customers. Every Entity View references exactly one entity (device or asset) and defines telemetry and attribute keys that will be visible to the assigned Customer. As a Tenant Administrator you are able to create multiple EVs per Device or Asset and assign them to different Customers. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' authority.
*
* @tags entity-view-controller
* @name GetTenantEntityViewsUsingGet
* @summary Get Tenant Entity Views (getTenantEntityViews)
* @request GET:/api/tenant/entityViews{?page,pageSize,sortOrder,sortProperty,textSearch,type}
* @secure
* @response `200` `GetTenantEntityViewsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantEntityViewsUsingGet = (query, params = {}) => this.request({
    path: `/api/tenant/entityViews`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of entity views that are available for the current user. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags entity-view-controller
* @name GetUserEntityViewsUsingGet
* @summary Get Entity Views (getUserEntityViews)
* @request GET:/api/user/entityViews{?page,pageSize,sortOrder,sortProperty,textSearch,type}
* @secure
* @response `200` `GetUserEntityViewsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getUserEntityViewsUsingGet = (query, params = {}) => this.request({
    path: `/api/user/entityViews`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Clears events by filter for specified entity.
*
* @tags event-controller
* @name ClearEventsUsingPost
* @summary Clear Events (clearEvents)
* @request POST:/api/events/{entityType}/{entityId}/clear{?endTime,startTime}
* @secure
* @response `200` `ClearEventsUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
clearEventsUsingPost = ({ entityType, entityId, ...query }, data, params = {}) => this.request({
    path: `/api/events/${entityType}/${entityId}/clear`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, ...params,
});
/**
* @description Returns a page of events for specified entity by specifying event type. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details.
*
* @tags event-controller
* @name GetEventsUsingGet1
* @summary Get Events by type (getEvents)
* @request GET:/api/events/{entityType}/{entityId}/{eventType}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}
* @secure
* @response `200` `GetEventsUsingGet1Data` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEventsUsingGet1 = ({ entityType, entityId, eventType, ...query }, params = {}) => this.request({
    path: `/api/events/${entityType}/${entityId}/${eventType}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of events for specified entity. Deprecated and will be removed in next minor release. The call was deprecated to improve the performance of the system. Current implementation will return 'Lifecycle' events only. Use 'Get events by type' or 'Get events by filter' instead. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details.
*
* @tags event-controller
* @name GetEventsUsingGet
* @summary Get Events (Deprecated)
* @request GET:/api/events/{entityType}/{entityId}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}
* @secure
* @response `200` `GetEventsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEventsUsingGet = ({ entityType, entityId, ...query }, params = {}) => this.request({
    path: `/api/events/${entityType}/${entityId}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of events for the chosen entity by specifying the event filter. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. # Event Filter Definition 5 different eventFilter objects could be set for different event types. The eventType field is required. Others are optional. If some of them are set, the filtering will be applied according to them. See the examples below for all the fields used for each event type filtering. Note, * 'server' - string value representing the server name, identifier or ip address where the platform is running; * 'errorStr' - the case insensitive 'contains' filter based on error message. ## Error Event Filter ```json { "eventType":"ERROR", "server":"ip-172-31-24-152", "method":"onClusterEventMsg", "errorStr":"Error Message" } ``` * 'method' - string value representing the method name when the error happened. ## Lifecycle Event Filter ```json { "eventType":"LC_EVENT", "server":"ip-172-31-24-152", "event":"STARTED", "status":"Success", "errorStr":"Error Message" } ``` * 'event' - string value representing the lifecycle event type; * 'status' - string value representing status of the lifecycle event. ## Statistics Event Filter ```json { "eventType":"STATS", "server":"ip-172-31-24-152", "messagesProcessed":10, "errorsOccurred":5 } ``` * 'messagesProcessed' - the minimum number of successfully processed messages; * 'errorsOccurred' - the minimum number of errors occurred during messages processing. ## Debug Rule Node Event Filter ```json { "eventType":"DEBUG_RULE_NODE", "msgDirectionType":"IN", "server":"ip-172-31-24-152", "dataSearch":"humidity", "metadataSearch":"deviceName", "entityName":"DEVICE", "relationType":"Success", "entityId":"de9d54a0-2b7a-11ec-a3cc-23386423d98f", "msgType":"POST_TELEMETRY_REQUEST", "isError":"false", "errorStr":"Error Message" } ``` ## Debug Rule Chain Event Filter ```json { "eventType":"DEBUG_RULE_CHAIN", "msgDirectionType":"IN", "server":"ip-172-31-24-152", "dataSearch":"humidity", "metadataSearch":"deviceName", "entityName":"DEVICE", "relationType":"Success", "entityId":"de9d54a0-2b7a-11ec-a3cc-23386423d98f", "msgType":"POST_TELEMETRY_REQUEST", "isError":"false", "errorStr":"Error Message" } ``` * 'msgDirectionType' - string value representing msg direction type (incoming to entity or outcoming from entity); * 'dataSearch' - the case insensitive 'contains' filter based on data (key and value) for the message; * 'metadataSearch' - the case insensitive 'contains' filter based on metadata (key and value) for the message; * 'entityName' - string value representing the entity type; * 'relationType' - string value representing the type of message routing; * 'entityId' - string value representing the entity id in the event body (originator of the message); * 'msgType' - string value representing the message type; * 'isError' - boolean value to filter the errors.
*
* @tags event-controller
* @name GetEventsUsingPost
* @summary Get Events by event filter (getEvents)
* @request POST:/api/events/{entityType}/{entityId}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}
* @secure
* @response `200` `GetEventsUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEventsUsingPost = ({ entityType, entityId, ...query }, data, params = {}) => this.request({
    path: `/api/events/${entityType}/${entityId}`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Returns a list of group permission objects that is assigned for the specified Entity Group Id. Group permission entity represents list of allowed operations for certain User Group to perform against certain Entity Group. Basically, this entity wires three other entities: * Role that defines set of allowed operations; * User Group that defines set of users who may perform the operations; * Entity Group that defines set of entities which will be accessible to users; Group Permission Info object extends the Group Permissions with the full information about Role and User and/or Entity Groups. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags group-permission-controller
* @name GetEntityGroupPermissionsUsingGet
* @summary Get group permissions by Entity Group Id (getEntityGroupPermissions)
* @request GET:/api/entityGroup/{entityGroupId}/groupPermissions
* @secure
* @response `200` `GetEntityGroupPermissionsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEntityGroupPermissionsUsingGet = (entityGroupId, params = {}) => this.request({
    path: `/api/entityGroup/${entityGroupId}/groupPermissions`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Creates or Updates the Group Permission. When creating group permission, platform generates Group Permission Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created Group Permission id will be present in the response. Specify existing Group Permission id to update the permission. Referencing non-existing Group Permission Id will cause 'Not Found' error. Group permission entity represents list of allowed operations for certain User Group to perform against certain Entity Group. Basically, this entity wires three other entities: * Role that defines set of allowed operations; * User Group that defines set of users who may perform the operations; * Entity Group that defines set of entities which will be accessible to users; Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
*
* @tags group-permission-controller
* @name SaveGroupPermissionUsingPost
* @summary Create Or Update Group Permission (saveGroupPermission)
* @request POST:/api/groupPermission
* @secure
* @response `200` `SaveGroupPermissionUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveGroupPermissionUsingPost = (data, params = {}) => this.request({
    path: `/api/groupPermission`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Fetch the Group Permission Info object based on the provided Group Permission Id and the flag that controls what additional information to load: User or Entity Group. Group permission entity represents list of allowed operations for certain User Group to perform against certain Entity Group. Basically, this entity wires three other entities: * Role that defines set of allowed operations; * User Group that defines set of users who may perform the operations; * Entity Group that defines set of entities which will be accessible to users; Group Permission Info object extends the Group Permissions with the full information about Role and User and/or Entity Groups.  Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags group-permission-controller
* @name GetGroupPermissionInfoByIdUsingGet
* @summary Get Group Permission Info (getGroupPermissionInfoById)
* @request GET:/api/groupPermission/info/{groupPermissionId}{?isUserGroup}
* @secure
* @response `200` `GetGroupPermissionInfoByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getGroupPermissionInfoByIdUsingGet = ({ groupPermissionId, ...query }, params = {}) => this.request({
    path: `/api/groupPermission/info/${groupPermissionId}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Fetch the Group Permission object based on the provided Group Permission Id. Group permission entity represents list of allowed operations for certain User Group to perform against certain Entity Group. Basically, this entity wires three other entities: * Role that defines set of allowed operations; * User Group that defines set of users who may perform the operations; * Entity Group that defines set of entities which will be accessible to users; Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags group-permission-controller
* @name GetGroupPermissionByIdUsingGet
* @summary Get Group Permission (getGroupPermissionById)
* @request GET:/api/groupPermission/{groupPermissionId}
* @secure
* @response `200` `GetGroupPermissionByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getGroupPermissionByIdUsingGet = (groupPermissionId, params = {}) => this.request({
    path: `/api/groupPermission/${groupPermissionId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Deletes the group permission. Referencing non-existing group permission Id will cause an error. Security check is performed to verify that the user has 'DELETE' permission for the entity (entities).
*
* @tags group-permission-controller
* @name DeleteGroupPermissionUsingDelete
* @summary Delete group permission (deleteGroupPermission)
* @request DELETE:/api/groupPermission/{groupPermissionId}
* @secure
* @response `200` `DeleteGroupPermissionUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteGroupPermissionUsingDelete = (groupPermissionId, params = {}) => this.request({
    path: `/api/groupPermission/${groupPermissionId}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Enrich a list of group permission objects with the information about Role, User and Entity Groups. Group permission entity represents list of allowed operations for certain User Group to perform against certain Entity Group. Basically, this entity wires three other entities: * Role that defines set of allowed operations; * User Group that defines set of users who may perform the operations; * Entity Group that defines set of entities which will be accessible to users; Group Permission Info object extends the Group Permissions with the full information about Role and User and/or Entity Groups. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags group-permission-controller
* @name LoadUserGroupPermissionInfosUsingPost
* @summary Load User Group Permissions (loadUserGroupPermissionInfos)
* @request POST:/api/userGroup/groupPermissions/info
* @secure
* @response `200` `LoadUserGroupPermissionInfosUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
loadUserGroupPermissionInfosUsingPost = (data, params = {}) => this.request({
    path: `/api/userGroup/groupPermissions/info`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Returns a list of group permission objects that belongs to specified User Group Id. Group permission entity represents list of allowed operations for certain User Group to perform against certain Entity Group. Basically, this entity wires three other entities: * Role that defines set of allowed operations; * User Group that defines set of users who may perform the operations; * Entity Group that defines set of entities which will be accessible to users; Group Permission Info object extends the Group Permissions with the full information about Role and User and/or Entity Groups. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags group-permission-controller
* @name GetUserGroupPermissionsUsingGet
* @summary Get group permissions by User Group Id (getUserGroupPermissions)
* @request GET:/api/userGroup/{userGroupId}/groupPermissions
* @secure
* @response `200` `GetUserGroupPermissionsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getUserGroupPermissionsUsingGet = (userGroupId, params = {}) => this.request({
    path: `/api/userGroup/${userGroupId}/groupPermissions`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* No description
*
* @tags image-controller
* @name UploadImageUsingPost
* @summary uploadImage
* @request POST:/api/image
* @secure
* @response `200` `UploadImageUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
uploadImageUsingPost = (data, params = {}) => this.request({
    path: `/api/image`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.FormData, format: "json", ...params,
});
/**
* No description
*
* @tags image-controller
* @name ImportImageUsingPut
* @summary importImage
* @request PUT:/api/image/import
* @secure
* @response `200` `ImportImageUsingPutData` OK
* @response `201` `void` Created
* @response `401` `void` Unauthorized
* @response `403` `void` Forbidden
* @response `404` `void` Not Found
*/
importImageUsingPut = (data, params = {}) => this.request({
    path: `/api/image/import`,
    method: 'PUT',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* No description
*
* @tags image-controller
* @name DownloadPublicImageUsingGet
* @summary downloadPublicImage
* @request GET:/api/images/public/{publicResourceKey}
* @secure
* @response `200` `DownloadPublicImageUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
downloadPublicImageUsingGet = (publicResourceKey, params = {}) => this.request({
    path: `/api/images/public/${publicResourceKey}`,
    method: 'GET',
    secure: true, format: "blob", ...params,
});
/**
* No description
*
* @tags image-controller
* @name DownloadImageUsingGet
* @summary downloadImage
* @request GET:/api/images/{type}/{key}
* @secure
* @response `200` `DownloadImageUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
downloadImageUsingGet = (type, key, params = {}) => this.request({
    path: `/api/images/${type}/${key}`,
    method: 'GET',
    secure: true, format: "blob", ...params,
});
/**
* No description
*
* @tags image-controller
* @name UpdateImageUsingPut
* @summary updateImage
* @request PUT:/api/images/{type}/{key}
* @secure
* @response `200` `UpdateImageUsingPutData` OK
* @response `201` `void` Created
* @response `401` `void` Unauthorized
* @response `403` `void` Forbidden
* @response `404` `void` Not Found
*/
updateImageUsingPut = (type, key, data, params = {}) => this.request({
    path: `/api/images/${type}/${key}`,
    method: 'PUT',
    body: data, secure: true, type: http_client_1.ContentType.FormData, format: "json", ...params,
});
/**
* No description
*
* @tags image-controller
* @name ExportImageUsingGet
* @summary exportImage
* @request GET:/api/images/{type}/{key}/export
* @secure
* @response `200` `ExportImageUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
exportImageUsingGet = (type, key, params = {}) => this.request({
    path: `/api/images/${type}/${key}/export`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* No description
*
* @tags image-controller
* @name GetImageInfoUsingGet
* @summary getImageInfo
* @request GET:/api/images/{type}/{key}/info
* @secure
* @response `200` `GetImageInfoUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getImageInfoUsingGet = (type, key, params = {}) => this.request({
    path: `/api/images/${type}/${key}/info`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* No description
*
* @tags image-controller
* @name UpdateImageInfoUsingPut
* @summary updateImageInfo
* @request PUT:/api/images/{type}/{key}/info
* @secure
* @response `200` `UpdateImageInfoUsingPutData` OK
* @response `201` `void` Created
* @response `401` `void` Unauthorized
* @response `403` `void` Forbidden
* @response `404` `void` Not Found
*/
updateImageInfoUsingPut = (type, key, data, params = {}) => this.request({
    path: `/api/images/${type}/${key}/info`,
    method: 'PUT',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* No description
*
* @tags image-controller
* @name DownloadImagePreviewUsingGet
* @summary downloadImagePreview
* @request GET:/api/images/{type}/{key}/preview
* @secure
* @response `200` `DownloadImagePreviewUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
downloadImagePreviewUsingGet = (type, key, params = {}) => this.request({
    path: `/api/images/${type}/${key}/preview`,
    method: 'GET',
    secure: true, format: "blob", ...params,
});
/**
* No description
*
* @tags image-controller
* @name UpdateImagePublicStatusUsingPut
* @summary updateImagePublicStatus
* @request PUT:/api/images/{type}/{key}/public/{isPublic}
* @secure
* @response `200` `UpdateImagePublicStatusUsingPutData` OK
* @response `201` `void` Created
* @response `401` `void` Unauthorized
* @response `403` `void` Forbidden
* @response `404` `void` Not Found
*/
updateImagePublicStatusUsingPut = (type, key, isPublic, params = {}) => this.request({
    path: `/api/images/${type}/${key}/public/${isPublic}`,
    method: 'PUT',
    secure: true, format: "json", ...params,
});
/**
* No description
*
* @tags image-controller
* @name DeleteImageUsingDelete
* @summary deleteImage
* @request DELETE:/api/images/{type}/{key}{?force}
* @secure
* @response `200` `DeleteImageUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteImageUsingDelete = ({ type, key, ...query }, params = {}) => this.request({
    path: `/api/images/${type}/${key}`,
    method: 'DELETE',
    query: query, secure: true, format: "json", ...params,
});
/**
* No description
*
* @tags image-controller
* @name GetImagesUsingGet
* @summary getImages
* @request GET:/api/images{?includeSystemImages,page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetImagesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getImagesUsingGet = (query, params = {}) => this.request({
    path: `/api/images`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* No description
*
* @tags image-controller
* @name DownloadLoginFaviconUsingGet
* @summary downloadLoginFavicon
* @request GET:/api/noauth/whiteLabel/loginFavicon/{type}/{key}
* @response `200` `DownloadLoginFaviconUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
downloadLoginFaviconUsingGet = (type, key, params = {}) => this.request({
    path: `/api/noauth/whiteLabel/loginFavicon/${type}/${key}`,
    method: 'GET',
    format: "blob", ...params,
});
/**
* No description
*
* @tags image-controller
* @name DownloadLoginLogoUsingGet
* @summary downloadLoginLogo
* @request GET:/api/noauth/whiteLabel/loginLogo/{type}/{key}
* @response `200` `DownloadLoginLogoUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
downloadLoginLogoUsingGet = (type, key, params = {}) => this.request({
    path: `/api/noauth/whiteLabel/loginLogo/${type}/${key}`,
    method: 'GET',
    format: "blob", ...params,
});
/**
* @description Returns list of edge attribute names that are missing in assigned integrations. Available for users with 'TENANT_ADMIN' authority.
*
* @tags integration-controller
* @name FindEdgeMissingAttributesUsingGet
* @summary Find edge missing attributes for assigned integrations (findEdgeMissingAttributes)
* @request GET:/api/edge/integration/{edgeId}/missingAttributes{?integrationIds}
* @secure
* @response `200` `FindEdgeMissingAttributesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
findEdgeMissingAttributesUsingGet = ({ edgeId, ...query }, params = {}) => this.request({
    path: `/api/edge/integration/${edgeId}/missingAttributes`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns list of attribute names of all related edges that are missing in the integration configuration. Available for users with 'TENANT_ADMIN' authority.
*
* @tags integration-controller
* @name FindAllRelatedEdgesMissingAttributesUsingGet
* @summary Find missing attributes for all related edges (findAllRelatedEdgesMissingAttributes)
* @request GET:/api/edge/integration/{integrationId}/allMissingAttributes
* @secure
* @response `200` `FindAllRelatedEdgesMissingAttributesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
findAllRelatedEdgesMissingAttributesUsingGet = (integrationId, params = {}) => this.request({
    path: `/api/edge/integration/${integrationId}/allMissingAttributes`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Creates assignment of an existing integration edge template to an instance of The Edge. Assignment works in async way - first, notification event pushed to edge service queue on platform. Second, remote edge service will receive a copy of assignment integration (Edge will receive this instantly, if it's currently connected, or once it's going to be connected to platform). Third, once integration will be delivered to edge service, it's going to start locally. Only integration edge template can be assigned to edge. Available for users with 'TENANT_ADMIN' authority.
*
* @tags integration-controller
* @name AssignIntegrationToEdgeUsingPost
* @summary Assign integration to edge (assignIntegrationToEdge)
* @request POST:/api/edge/{edgeId}/integration/{integrationId}
* @secure
* @response `200` `AssignIntegrationToEdgeUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
assignIntegrationToEdgeUsingPost = (edgeId, integrationId, params = {}) => this.request({
    path: `/api/edge/${edgeId}/integration/${integrationId}`,
    method: 'POST',
    secure: true, format: "json", ...params,
});
/**
* @description Clears assignment of the integration to the edge. Unassignment works in async way - first, 'unassign' notification event pushed to edge queue on platform. Second, remote edge service will receive an 'unassign' command to remove integration (Edge will receive this instantly, if it's currently connected, or once it's going to be connected to platform). Third, once 'unassign' command will be delivered to edge service, it's going to remove integration locally. Available for users with 'TENANT_ADMIN' authority.
*
* @tags integration-controller
* @name UnassignIntegrationFromEdgeUsingDelete
* @summary Unassign integration from edge (unassignIntegrationFromEdge)
* @request DELETE:/api/edge/{edgeId}/integration/{integrationId}
* @secure
* @response `200` `UnassignIntegrationFromEdgeUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
unassignIntegrationFromEdgeUsingDelete = (edgeId, integrationId, params = {}) => this.request({
    path: `/api/edge/${edgeId}/integration/${integrationId}`,
    method: 'DELETE',
    secure: true, format: "json", ...params,
});
/**
* @description Returns a page of Integrations assigned to the specified edge. The integration object contains information about the Integration, including the heavyweight configuration object. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' authority.
*
* @tags integration-controller
* @name GetEdgeIntegrationInfosUsingGet
* @summary Get Edge Integrations (getEdgeIntegrationInfos)
* @request GET:/api/edge/{edgeId}/integrationInfos{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetEdgeIntegrationInfosUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEdgeIntegrationInfosUsingGet = ({ edgeId, ...query }, params = {}) => this.request({
    path: `/api/edge/${edgeId}/integrationInfos`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of Integrations assigned to the specified edge. The integration object contains information about the Integration, including the heavyweight configuration object. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' authority.
*
* @tags integration-controller
* @name GetEdgeIntegrationsUsingGet
* @summary Get Edge Integrations (getEdgeIntegrations)
* @request GET:/api/edge/{edgeId}/integrations{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetEdgeIntegrationsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEdgeIntegrationsUsingGet = ({ edgeId, ...query }, params = {}) => this.request({
    path: `/api/edge/${edgeId}/integrations`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Create or update the Integration. When creating integration, platform generates Integration Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created integration id will be present in the response. Specify existing Integration id to update the integration. Referencing non-existing integration Id will cause 'Not Found' error. Integration configuration is validated for each type of the integration before it can be created. # Integration Configuration Integration configuration (**'configuration'** field) is the JSON object representing the special configuration per integration type with the connectivity fields and other important parameters dependent on the specific integration type. Let's review the configuration object for the MQTT Integration type below. ```json { "clientConfiguration":{ "host":"broker.hivemq.com", "port":1883, "cleanSession":false, "ssl":false, "connectTimeoutSec":10, "clientId":"", "maxBytesInMessage":32368, "credentials":{ "type":"anonymous" } }, "downlinkTopicPattern":"${topic}", "topicFilters":[ { "filter":"tb/mqtt-integration-tutorial/sensors/+/temperature", "qos":0 } ], "metadata":{ } } ``` Remove 'id', 'tenantId' from the request body example (below) to create new Integration entity. Available for users with 'TENANT_ADMIN' authority.
*
* @tags integration-controller
* @name SaveIntegrationUsingPost
* @summary Create Or Update Integration (saveIntegration)
* @request POST:/api/integration
* @secure
* @response `200` `SaveIntegrationUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveIntegrationUsingPost = (data, params = {}) => this.request({
    path: `/api/integration`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Checks if the connection to the integration is established. Throws an error if the connection is not established. Example: Failed to connect to MQTT broker at host:port.
*
* @tags integration-controller
* @name CheckIntegrationConnectionUsingPost
* @summary Check integration connectivity (checkIntegrationConnection)
* @request POST:/api/integration/check
* @secure
* @response `200` `CheckIntegrationConnectionUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
checkIntegrationConnectionUsingPost = (data, params = {}) => this.request({
    path: `/api/integration/check`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, ...params,
});
/**
* @description Fetch the Integration object based on the provided routing key. The server checks that the integration is owned by the same tenant. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags integration-controller
* @name GetIntegrationByRoutingKeyUsingGet
* @summary Get Integration by Routing Key (getIntegrationByRoutingKey)
* @request GET:/api/integration/routingKey/{routingKey}
* @secure
* @response `200` `GetIntegrationByRoutingKeyUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getIntegrationByRoutingKeyUsingGet = (routingKey, params = {}) => this.request({
    path: `/api/integration/routingKey/${routingKey}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Fetch the Integration object based on the provided Integration Id. The server checks that the integration is owned by the same tenant. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags integration-controller
* @name GetIntegrationByIdUsingGet
* @summary Get Integration (getIntegrationById)
* @request GET:/api/integration/{integrationId}
* @secure
* @response `200` `GetIntegrationByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getIntegrationByIdUsingGet = (integrationId, params = {}) => this.request({
    path: `/api/integration/${integrationId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Deletes the integration and all the relations (from and to the integration). Referencing non-existing integration Id will cause an error. Security check is performed to verify that the user has 'DELETE' permission for the entity (entities).
*
* @tags integration-controller
* @name DeleteIntegrationUsingDelete
* @summary Delete integration (deleteIntegration)
* @request DELETE:/api/integration/{integrationId}
* @secure
* @response `200` `DeleteIntegrationUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteIntegrationUsingDelete = (integrationId, params = {}) => this.request({
    path: `/api/integration/${integrationId}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Returns a page of integration infos owned by tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags integration-controller
* @name GetIntegrationInfosUsingGet
* @summary Get Integration Infos (getIntegrationInfos)
* @request GET:/api/integrationInfos{?isEdgeTemplate,page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetIntegrationInfosUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getIntegrationInfosUsingGet = (query, params = {}) => this.request({
    path: `/api/integrationInfos`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Requested integrations must be owned by tenant which is performing the request. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags integration-controller
* @name GetIntegrationsByIdsUsingGet
* @summary Get Integrations By Ids (getIntegrationsByIds)
* @request GET:/api/integrations{?integrationIds}
* @secure
* @response `200` `GetIntegrationsByIdsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getIntegrationsByIdsUsingGet = (query, params = {}) => this.request({
    path: `/api/integrations`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of integrations owned by tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags integration-controller
* @name GetIntegrationsUsingGet
* @summary Get Integrations (getIntegrations)
* @request GET:/api/integrations{?isEdgeTemplate,page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetIntegrationsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getIntegrationsUsingGet = (query, params = {}) => this.request({
    path: `/api/integrations`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Mail configuration template is set of default smtp settings for mail server that specific provider supports
*
* @tags mail-config-template-controller
* @name GetClientRegistrationTemplatesUsingGet
* @summary Get the list of all OAuth2 client registration templates (getClientRegistrationTemplates)

Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
* @request GET:/api/mail/config/template
* @secure
* @response `200` `GetClientRegistrationTemplatesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getClientRegistrationTemplatesUsingGet = (params = {}) => this.request({
    path: `/api/mail/config/template`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Returns the list of delivery methods that are properly configured and are allowed to be used for sending notifications. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-controller
* @name GetAvailableDeliveryMethodsUsingGet
* @summary Get available delivery methods (getAvailableDeliveryMethods)
* @request GET:/api/notification/deliveryMethods
* @secure
* @response `200` `GetAvailableDeliveryMethodsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getAvailableDeliveryMethodsUsingGet = (params = {}) => this.request({
    path: `/api/notification/deliveryMethods`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Processes notification request. Mandatory request properties are `targets` (list of targets ids to send notification to), and either `templateId` (existing notification template id) or `template` (to send notification without saving the template). Optionally, you can set `sendingDelayInSec` inside the `additionalConfig` field to schedule the notification. For each enabled delivery method in the notification template, there must be a target in the `targets` list that supports this delivery method: if you chose `WEB`, `EMAIL` or `SMS` - there must be at least one target in `targets` of `PLATFORM_USERS` type. For `SLACK` delivery method - you need to chose at least one `SLACK` notification target. Notification request object with `PROCESSING` status will be returned immediately, and the notification sending itself is done asynchronously. After all notifications are sent, the `status` of the request becomes `SENT`. Use `getNotificationRequestById` to see the notification request processing status and some sending stats. Here is an example of notification request to one target using saved template: ```json { "templateId": { "entityType": "NOTIFICATION_TEMPLATE", "id": "6dbc3670-e4dd-11ed-9401-dbcc5dff78be" }, "targets": [ "320e3ed0-d785-11ed-a06c-21dd57dd88ca" ], "additionalConfig": { "sendingDelayInSec": 0 } } ``` Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-controller
* @name CreateNotificationRequestUsingPost
* @summary Create notification request (createNotificationRequest)
* @request POST:/api/notification/request
* @secure
* @response `200` `CreateNotificationRequestUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
createNotificationRequestUsingPost = (data, params = {}) => this.request({
    path: `/api/notification/request`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Returns preview for notification request. `processedTemplates` shows how the notifications for each delivery method will look like for the first recipient of the corresponding notification target. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-controller
* @name GetNotificationRequestPreviewUsingPost
* @summary Get notification request preview (getNotificationRequestPreview)
* @request POST:/api/notification/request/preview{?recipientsPreviewSize}
* @secure
* @response `200` `GetNotificationRequestPreviewUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getNotificationRequestPreviewUsingPost = (query, data, params = {}) => this.request({
    path: `/api/notification/request/preview`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Fetches notification request info by request id. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-controller
* @name GetNotificationRequestByIdUsingGet
* @summary Get notification request by id (getNotificationRequestById)
* @request GET:/api/notification/request/{id}
* @secure
* @response `200` `GetNotificationRequestByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getNotificationRequestByIdUsingGet = (id, params = {}) => this.request({
    path: `/api/notification/request/${id}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Deletes notification request by its id. If the request has status `SENT` - all sent notifications for this request will be deleted. If it is `SCHEDULED`, the request will be cancelled. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-controller
* @name DeleteNotificationRequestUsingDelete
* @summary Delete notification request (deleteNotificationRequest)
* @request DELETE:/api/notification/request/{id}
* @secure
* @response `200` `DeleteNotificationRequestUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteNotificationRequestUsingDelete = (id, params = {}) => this.request({
    path: `/api/notification/request/${id}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Returns the page of notification requests submitted by users of this tenant or sysadmins. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-controller
* @name GetNotificationRequestsUsingGet
* @summary Get notification requests (getNotificationRequests)
* @request GET:/api/notification/requests{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetNotificationRequestsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getNotificationRequestsUsingGet = (query, params = {}) => this.request({
    path: `/api/notification/requests`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Retrieves notification settings for this tenant or sysadmin. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-controller
* @name GetNotificationSettingsUsingGet
* @summary Get notification settings (getNotificationSettings)
* @request GET:/api/notification/settings
* @secure
* @response `200` `GetNotificationSettingsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getNotificationSettingsUsingGet = (params = {}) => this.request({
    path: `/api/notification/settings`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Saves notification settings for this tenant or sysadmin. `deliveryMethodsConfigs` of the settings must be specified. Here is an example of the notification settings with Slack configuration: ```json { "deliveryMethodsConfigs": { "SLACK": { "method": "SLACK", "botToken": "xoxb-...." } } } ``` Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-controller
* @name SaveNotificationSettingsUsingPost
* @summary Save notification settings (saveNotificationSettings)
* @request POST:/api/notification/settings
* @secure
* @response `200` `SaveNotificationSettingsUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveNotificationSettingsUsingPost = (data, params = {}) => this.request({
    path: `/api/notification/settings`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* No description
*
* @tags notification-controller
* @name GetUserNotificationSettingsUsingGet
* @summary getUserNotificationSettings
* @request GET:/api/notification/settings/user
* @secure
* @response `200` `GetUserNotificationSettingsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getUserNotificationSettingsUsingGet = (params = {}) => this.request({
    path: `/api/notification/settings/user`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* No description
*
* @tags notification-controller
* @name SaveUserNotificationSettingsUsingPost
* @summary saveUserNotificationSettings
* @request POST:/api/notification/settings/user
* @secure
* @response `200` `SaveUserNotificationSettingsUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveUserNotificationSettingsUsingPost = (data, params = {}) => this.request({
    path: `/api/notification/settings/user`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Deletes notification by its id. Available for any authorized user.
*
* @tags notification-controller
* @name DeleteNotificationUsingDelete
* @summary Delete notification (deleteNotification)
* @request DELETE:/api/notification/{id}
* @secure
* @response `200` `DeleteNotificationUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteNotificationUsingDelete = (id, params = {}) => this.request({
    path: `/api/notification/${id}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Marks notification as read by its id. Available for any authorized user.
*
* @tags notification-controller
* @name MarkNotificationAsReadUsingPut
* @summary Mark notification as read (markNotificationAsRead)
* @request PUT:/api/notification/{id}/read
* @secure
* @response `200` `MarkNotificationAsReadUsingPutData` OK
* @response `201` `void` Created
* @response `401` `void` Unauthorized
* @response `403` `void` Forbidden
* @response `404` `void` Not Found
*/
markNotificationAsReadUsingPut = (id, params = {}) => this.request({
    path: `/api/notification/${id}/read`,
    method: 'PUT',
    secure: true, ...params,
});
/**
* @description Marks all unread notifications as read. Available for any authorized user.
*
* @tags notification-controller
* @name MarkAllNotificationsAsReadUsingPut
* @summary Mark all notifications as read (markAllNotificationsAsRead)
* @request PUT:/api/notifications/read
* @secure
* @response `200` `MarkAllNotificationsAsReadUsingPutData` OK
* @response `201` `void` Created
* @response `401` `void` Unauthorized
* @response `403` `void` Forbidden
* @response `404` `void` Not Found
*/
markAllNotificationsAsReadUsingPut = (params = {}) => this.request({
    path: `/api/notifications/read`,
    method: 'PUT',
    secure: true, ...params,
});
/**
* @description Returns the page of notifications for current user. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for any authorized user. **WebSocket API**: There are 2 types of subscriptions: one for unread notifications count, another for unread notifications themselves. The URI for opening WS session for notifications: `/api/ws/plugins/notifications`. Subscription command for unread notifications count: ``` { "unreadCountSubCmd": { "cmdId": 1234 } } ``` To subscribe for latest unread notifications: ``` { "unreadSubCmd": { "cmdId": 1234, "limit": 10 } } ``` To unsubscribe from any subscription: ``` { "unsubCmd": { "cmdId": 1234 } } ``` To mark certain notifications as read, use following command: ``` { "markAsReadCmd": { "cmdId": 1234, "notifications": [ "6f860330-7fc2-11ed-b855-7dd3b7d2faa9", "5b6dfee0-8d0d-11ed-b61f-35a57b03dade" ] } } ``` To mark all notifications as read: ``` { "markAllAsReadCmd": { "cmdId": 1234 } } ``` Update structure for unread **notifications count subscription**: ``` { "cmdId": 1234, "totalUnreadCount": 55 } ``` For **notifications subscription**: - full update of latest unread notifications: ``` { "cmdId": 1234, "notifications": [ { "id": { "entityType": "NOTIFICATION", "id": "6f860330-7fc2-11ed-b855-7dd3b7d2faa9" }, ... } ], "totalUnreadCount": 1 } ``` - when new notification arrives or shown notification is updated: ``` { "cmdId": 1234, "update": { "id": { "entityType": "NOTIFICATION", "id": "6f860330-7fc2-11ed-b855-7dd3b7d2faa9" }, # updated notification info, text, subject etc. ... }, "totalUnreadCount": 2 } ``` - when unread notifications count changes: ``` { "cmdId": 1234, "totalUnreadCount": 5 } ```
*
* @tags notification-controller
* @name GetNotificationsUsingGet
* @summary Get notifications (getNotifications)
* @request GET:/api/notifications{?page,pageSize,sortOrder,sortProperty,textSearch,unreadOnly}
* @secure
* @response `200` `GetNotificationsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getNotificationsUsingGet = (query, params = {}) => this.request({
    path: `/api/notifications`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Creates or updates notification rule. Mandatory properties are `name`, `templateId` (of a template with `notificationType` matching to rule's `triggerType`), `triggerType`, `triggerConfig` and `recipientConfig`. Additionally, you may specify rule `description` inside of `additionalConfig`. Trigger type of the rule cannot be changed. Available trigger types for tenant: `ENTITY_ACTION`, `ALARM`, `ALARM_COMMENT`, `ALARM_ASSIGNMENT`, `DEVICE_ACTIVITY`, `RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT`. For sysadmin, there are following trigger types available: `ENTITIES_LIMIT`, `API_USAGE_LIMIT`, `NEW_PLATFORM_VERSION`. Here is an example of notification rule to send notification when a device, asset or customer is created or deleted: ```json { "name": "Entity action", "templateId": { "entityType": "NOTIFICATION_TEMPLATE", "id": "32117320-d785-11ed-a06c-21dd57dd88ca" }, "triggerType": "ENTITY_ACTION", "triggerConfig": { "entityTypes": [ "CUSTOMER", "DEVICE", "ASSET" ], "created": true, "updated": false, "deleted": true, "triggerType": "ENTITY_ACTION" }, "recipientsConfig": { "targets": [ "320f2930-d785-11ed-a06c-21dd57dd88ca" ], "triggerType": "ENTITY_ACTION" }, "additionalConfig": { "description": "Send notification to tenant admins or customer users when a device, asset or customer is created" }, "templateName": "Entity action notification", "deliveryMethods": [ "WEB" ] } ``` Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-rule-controller
* @name SaveNotificationRuleUsingPost
* @summary Save notification rule (saveNotificationRule)
* @request POST:/api/notification/rule
* @secure
* @response `200` `SaveNotificationRuleUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveNotificationRuleUsingPost = (data, params = {}) => this.request({
    path: `/api/notification/rule`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Fetches notification rule info by rule's id. In addition to regular notification rule fields, there are `templateName` and `deliveryMethods` in the response. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-rule-controller
* @name GetNotificationRuleByIdUsingGet
* @summary Get notification rule by id (getNotificationRuleById)
* @request GET:/api/notification/rule/{id}
* @secure
* @response `200` `GetNotificationRuleByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getNotificationRuleByIdUsingGet = (id, params = {}) => this.request({
    path: `/api/notification/rule/${id}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Deletes notification rule by id. Cancels all related scheduled notification requests (e.g. due to escalation table) Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-rule-controller
* @name DeleteNotificationRuleUsingDelete
* @summary Delete notification rule (deleteNotificationRule)
* @request DELETE:/api/notification/rule/{id}
* @secure
* @response `200` `DeleteNotificationRuleUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteNotificationRuleUsingDelete = (id, params = {}) => this.request({
    path: `/api/notification/rule/${id}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Returns the page of notification rules. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-rule-controller
* @name GetNotificationRulesUsingGet
* @summary Get notification rules (getNotificationRules)
* @request GET:/api/notification/rules{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetNotificationRulesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getNotificationRulesUsingGet = (query, params = {}) => this.request({
    path: `/api/notification/rules`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Creates or updates notification target. Available `configuration` types are `PLATFORM_USERS` and `SLACK`. For `PLATFORM_USERS` the `usersFilter` must be specified. For tenant, there are following users filter types available: `USER_LIST`, `CUSTOMER_USERS`, `USER_GROUP_LIST`, `TENANT_ADMINISTRATORS`, `USER_ROLE`, `ALL_USERS`, `ORIGINATOR_ENTITY_OWNER_USERS`, `AFFECTED_USER`. For sysadmin: `TENANT_ADMINISTRATORS`, `AFFECTED_TENANT_ADMINISTRATORS`, `SYSTEM_ADMINISTRATORS`, `ALL_USERS`. Here is an example of tenant-level notification target to send notification to customer's users: ```json { "name": "Users of Customer A", "configuration": { "type": "PLATFORM_USERS", "usersFilter": { "type": "CUSTOMER_USERS", "customerId": "32499a20-d785-11ed-a06c-21dd57dd88ca" }, "description": "Users of Customer A" } } ``` Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-target-controller
* @name SaveNotificationTargetUsingPost
* @summary Save notification target (saveNotificationTarget)
* @request POST:/api/notification/target
* @secure
* @response `200` `SaveNotificationTargetUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveNotificationTargetUsingPost = (data, params = {}) => this.request({
    path: `/api/notification/target`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Returns the page of recipients for such notification target configuration. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-target-controller
* @name GetRecipientsForNotificationTargetConfigUsingPost
* @summary Get recipients for notification target config (getRecipientsForNotificationTargetConfig)
* @request POST:/api/notification/target/recipients{?page,pageSize}
* @secure
* @response `200` `GetRecipientsForNotificationTargetConfigUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getRecipientsForNotificationTargetConfigUsingPost = (query, data, params = {}) => this.request({
    path: `/api/notification/target/recipients`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Fetches notification target by id. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-target-controller
* @name GetNotificationTargetByIdUsingGet
* @summary Get notification target by id (getNotificationTargetById)
* @request GET:/api/notification/target/{id}
* @secure
* @response `200` `GetNotificationTargetByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getNotificationTargetByIdUsingGet = (id, params = {}) => this.request({
    path: `/api/notification/target/${id}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Deletes notification target by its id. This target cannot be referenced by existing scheduled notification requests or any notification rules. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-target-controller
* @name DeleteNotificationTargetByIdUsingDelete
* @summary Delete notification target by id (deleteNotificationTargetById)
* @request DELETE:/api/notification/target/{id}
* @secure
* @response `200` `DeleteNotificationTargetByIdUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteNotificationTargetByIdUsingDelete = (id, params = {}) => this.request({
    path: `/api/notification/target/${id}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Returns the list of notification targets found by provided ids. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-target-controller
* @name GetNotificationTargetsByIdsUsingGet
* @summary Get notification targets by ids (getNotificationTargetsByIds)
* @request GET:/api/notification/targets{?ids}
* @secure
* @response `200` `GetNotificationTargetsByIdsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getNotificationTargetsByIdsUsingGet = (query, params = {}) => this.request({
    path: `/api/notification/targets`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns the page of notification targets filtered by notification type that they can be used for. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-target-controller
* @name GetNotificationTargetsBySupportedNotificationTypeUsingGet
* @summary Get notification targets by supported notification type (getNotificationTargetsBySupportedNotificationType)
* @request GET:/api/notification/targets{?notificationType,page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetNotificationTargetsBySupportedNotificationTypeUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getNotificationTargetsBySupportedNotificationTypeUsingGet = (query, params = {}) => this.request({
    path: `/api/notification/targets`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns the page of notification targets owned by sysadmin or tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-target-controller
* @name GetNotificationTargetsUsingGet
* @summary Get notification targets (getNotificationTargets)
* @request GET:/api/notification/targets{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetNotificationTargetsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getNotificationTargetsUsingGet = (query, params = {}) => this.request({
    path: `/api/notification/targets`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description List available Slack conversations by type. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-template-controller
* @name ListSlackConversationsUsingGet
* @summary List Slack conversations (listSlackConversations)
* @request GET:/api/notification/slack/conversations{?token,type}
* @secure
* @response `200` `ListSlackConversationsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
listSlackConversationsUsingGet = (query, params = {}) => this.request({
    path: `/api/notification/slack/conversations`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Creates or updates notification template. Here is an example of template to send notification via Web, SMS and Slack: ```json { "name": "Greetings", "notificationType": "GENERAL", "configuration": { "deliveryMethodsTemplates": { "WEB": { "enabled": true, "subject": "Greetings", "body": "Hi there, ${recipientTitle}", "additionalConfig": { "icon": { "enabled": true, "icon": "back_hand", "color": "#757575" }, "actionButtonConfig": { "enabled": false } }, "method": "WEB" }, "SMS": { "enabled": true, "body": "Hi there, ${recipientTitle}", "method": "SMS" }, "SLACK": { "enabled": true, "body": "Hi there, @${recipientTitle}", "method": "SLACK" } } } } ``` Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-template-controller
* @name SaveNotificationTemplateUsingPost
* @summary Save notification template (saveNotificationTemplate)
* @request POST:/api/notification/template
* @secure
* @response `200` `SaveNotificationTemplateUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveNotificationTemplateUsingPost = (data, params = {}) => this.request({
    path: `/api/notification/template`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Fetches notification template by id. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-template-controller
* @name GetNotificationTemplateByIdUsingGet
* @summary Get notification template by id (getNotificationTemplateById)
* @request GET:/api/notification/template/{id}
* @secure
* @response `200` `GetNotificationTemplateByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getNotificationTemplateByIdUsingGet = (id, params = {}) => this.request({
    path: `/api/notification/template/${id}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Deletes notification template by its id. This template cannot be referenced by existing scheduled notification requests or any notification rules. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-template-controller
* @name DeleteNotificationTemplateByIdUsingDelete
* @summary Delete notification template by id (deleteNotificationTemplateById
* @request DELETE:/api/notification/template/{id}
* @secure
* @response `200` `DeleteNotificationTemplateByIdUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteNotificationTemplateByIdUsingDelete = (id, params = {}) => this.request({
    path: `/api/notification/template/${id}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Returns the page of notification templates owned by sysadmin or tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags notification-template-controller
* @name GetNotificationTemplatesUsingGet
* @summary Get notification templates (getNotificationTemplates)
* @request GET:/api/notification/templates{?notificationTypes,page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetNotificationTemplatesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getNotificationTemplatesUsingGet = (query, params = {}) => this.request({
    path: `/api/notification/templates`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Client registration template is OAuth2 provider configuration template with default settings for registering new OAuth2 clients
*
* @tags o-auth-2-config-template-controller
* @name GetClientRegistrationTemplatesUsingGet1
* @summary Get the list of all OAuth2 client registration templates (getClientRegistrationTemplates)

Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
* @request GET:/api/oauth2/config/template
* @secure
* @response `200` `GetClientRegistrationTemplatesUsingGet1Data` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getClientRegistrationTemplatesUsingGet1 = (params = {}) => this.request({
    path: `/api/oauth2/config/template`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Client registration template is OAuth2 provider configuration template with default settings for registering new OAuth2 clients
*
* @tags o-auth-2-config-template-controller
* @name SaveClientRegistrationTemplateUsingPost
* @summary Create or update OAuth2 client registration template (saveClientRegistrationTemplate)

Available for users with 'SYS_ADMIN' authority.
* @request POST:/api/oauth2/config/template
* @secure
* @response `200` `SaveClientRegistrationTemplateUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveClientRegistrationTemplateUsingPost = (data, params = {}) => this.request({
    path: `/api/oauth2/config/template`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Client registration template is OAuth2 provider configuration template with default settings for registering new OAuth2 clients
*
* @tags o-auth-2-config-template-controller
* @name DeleteClientRegistrationTemplateUsingDelete
* @summary Delete OAuth2 client registration template by id (deleteClientRegistrationTemplate)

Available for users with 'SYS_ADMIN' authority.
* @request DELETE:/api/oauth2/config/template/{clientRegistrationTemplateId}
* @secure
* @response `200` `DeleteClientRegistrationTemplateUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteClientRegistrationTemplateUsingDelete = (clientRegistrationTemplateId, params = {}) => this.request({
    path: `/api/oauth2/config/template/${clientRegistrationTemplateId}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Get the list of OAuth2 clients to log in with, available for such domain scheme (HTTP or HTTPS) (if x-forwarded-proto request header is present - the scheme is known from it) and domain name and port (port may be known from x-forwarded-port header)
*
* @tags o-auth-2-controller
* @name GetOAuth2ClientsUsingPost
* @summary Get OAuth2 clients (getOAuth2Clients)
* @request POST:/api/noauth/oauth2Clients{?pkgName,platform}
* @response `200` `GetOAuth2ClientsUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getOAuth2ClientsUsingPost = (query, params = {}) => this.request({
    path: `/api/noauth/oauth2Clients`,
    method: 'POST',
    query: query, format: "json", ...params,
});
/**
* @description Available for users with 'SYS_ADMIN' authority.
*
* @tags o-auth-2-controller
* @name GetCurrentOAuth2InfoUsingGet
* @summary Get current OAuth2 settings (getCurrentOAuth2Info)
* @request GET:/api/oauth2/config
* @secure
* @response `200` `GetCurrentOAuth2InfoUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCurrentOAuth2InfoUsingGet = (params = {}) => this.request({
    path: `/api/oauth2/config`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Available for users with 'SYS_ADMIN' authority.
*
* @tags o-auth-2-controller
* @name SaveOAuth2InfoUsingPost
* @summary Save OAuth2 settings (saveOAuth2Info)
* @request POST:/api/oauth2/config
* @secure
* @response `200` `SaveOAuth2InfoUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveOAuth2InfoUsingPost = (data, params = {}) => this.request({
    path: `/api/oauth2/config`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Returns the URL enclosed in double quotes. After successful authentication with OAuth2 provider, it makes a redirect to this path so that the platform can do further log in processing. This URL may be configured as 'security.oauth2.loginProcessingUrl' property in yml configuration file, or as 'SECURITY_OAUTH2_LOGIN_PROCESSING_URL' env variable. By default it is '/login/oauth2/code/' Available for users with 'SYS_ADMIN' authority.
*
* @tags o-auth-2-controller
* @name GetLoginProcessingUrlUsingGet
* @summary Get OAuth2 log in processing URL (getLoginProcessingUrl)
* @request GET:/api/oauth2/loginProcessingUrl
* @secure
* @response `200` `GetLoginProcessingUrlUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getLoginProcessingUrlUsingGet = (params = {}) => this.request({
    path: `/api/oauth2/loginProcessingUrl`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Create or update the OTA Package Info. When creating OTA Package Info, platform generates OTA Package id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created OTA Package id will be present in the response. Specify existing OTA Package id to update the OTA Package Info. Referencing non-existing OTA Package Id will cause 'Not Found' error. OTA Package combination of the title with the version is unique in the scope of tenant. Available for users with 'TENANT_ADMIN' authority.
*
* @tags ota-package-controller
* @name SaveOtaPackageInfoUsingPost
* @summary Create Or Update OTA Package Info (saveOtaPackageInfo)
* @request POST:/api/otaPackage
* @secure
* @response `200` `SaveOtaPackageInfoUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveOtaPackageInfoUsingPost = (data, params = {}) => this.request({
    path: `/api/otaPackage`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Fetch the OTA Package Info object based on the provided OTA Package Id. OTA Package Info is a lightweight object that includes main information about the OTA Package excluding the heavyweight data. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags ota-package-controller
* @name GetOtaPackageInfoByIdUsingGet
* @summary Get OTA Package Info (getOtaPackageInfoById)
* @request GET:/api/otaPackage/info/{otaPackageId}
* @secure
* @response `200` `GetOtaPackageInfoByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getOtaPackageInfoByIdUsingGet = (otaPackageId, params = {}) => this.request({
    path: `/api/otaPackage/info/${otaPackageId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Fetch the OTA Package object based on the provided OTA Package Id. The server checks that the OTA Package is owned by the same tenant. OTA Package is a heavyweight object that includes main information about the OTA Package and also data. Available for users with 'TENANT_ADMIN' authority.
*
* @tags ota-package-controller
* @name GetOtaPackageByIdUsingGet
* @summary Get OTA Package (getOtaPackageById)
* @request GET:/api/otaPackage/{otaPackageId}
* @secure
* @response `200` `GetOtaPackageByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getOtaPackageByIdUsingGet = (otaPackageId, params = {}) => this.request({
    path: `/api/otaPackage/${otaPackageId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Update the OTA Package. Adds the date to the existing OTA Package Info Available for users with 'TENANT_ADMIN' authority.
*
* @tags ota-package-controller
* @name SaveOtaPackageDataUsingPost
* @summary Save OTA Package data (saveOtaPackageData)
* @request POST:/api/otaPackage/{otaPackageId}
* @secure
* @response `200` `SaveOtaPackageDataUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveOtaPackageDataUsingPost = (otaPackageId, data, params = {}) => this.request({
    path: `/api/otaPackage/${otaPackageId}`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.FormData, format: "json", ...params,
});
/**
* @description Deletes the OTA Package. Referencing non-existing OTA Package Id will cause an error. Can't delete the OTA Package if it is referenced by existing devices or device profile. Available for users with 'TENANT_ADMIN' authority.
*
* @tags ota-package-controller
* @name DeleteOtaPackageUsingDelete
* @summary Delete OTA Package (deleteOtaPackage)
* @request DELETE:/api/otaPackage/{otaPackageId}
* @secure
* @response `200` `DeleteOtaPackageUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteOtaPackageUsingDelete = (otaPackageId, params = {}) => this.request({
    path: `/api/otaPackage/${otaPackageId}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Download OTA Package based on the provided OTA Package Id. Available for users with 'TENANT_ADMIN' authority.
*
* @tags ota-package-controller
* @name DownloadOtaPackageUsingGet
* @summary Download OTA Package (downloadOtaPackage)
* @request GET:/api/otaPackage/{otaPackageId}/download
* @secure
* @response `200` `DownloadOtaPackageUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
downloadOtaPackageUsingGet = (otaPackageId, params = {}) => this.request({
    path: `/api/otaPackage/${otaPackageId}/download`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Returns a page of OTA Package Info objects owned by tenant, and by entity group. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. OTA Package Info is a lightweight object that includes main information about the OTA Package excluding the heavyweight data. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags ota-package-controller
* @name GetGroupOtaPackagesUsingGet
* @summary Get group OTA Package Infos (getGroupOtaPackages)
* @request GET:/api/otaPackages/group/{groupId}/{type}{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetGroupOtaPackagesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getGroupOtaPackagesUsingGet = ({ groupId, type, ...query }, params = {}) => this.request({
    path: `/api/otaPackages/group/${groupId}/${type}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of OTA Package Info objects owned by tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. OTA Package Info is a lightweight object that includes main information about the OTA Package excluding the heavyweight data. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags ota-package-controller
* @name GetOtaPackagesUsingGet1
* @summary Get OTA Package Infos (getOtaPackages)
* @request GET:/api/otaPackages/{deviceProfileId}/{type}{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetOtaPackagesUsingGet1Data` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getOtaPackagesUsingGet1 = ({ deviceProfileId, type, ...query }, params = {}) => this.request({
    path: `/api/otaPackages/${deviceProfileId}/${type}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of OTA Package Info objects owned by tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. OTA Package Info is a lightweight object that includes main information about the OTA Package excluding the heavyweight data. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags ota-package-controller
* @name GetOtaPackagesUsingGet
* @summary Get OTA Package Infos (getOtaPackages)
* @request GET:/api/otaPackages{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetOtaPackagesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getOtaPackagesUsingGet = (query, params = {}) => this.request({
    path: `/api/otaPackages`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Tenant/Customer changes Owner to Customer or sub-Customer. Sub-Customer can`t perform this operation! Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags owner-controller
* @name ChangeOwnerToCustomerUsingPost
* @summary Change owner to customer (changeOwnerToCustomer)
* @request POST:/api/owner/CUSTOMER/{ownerId}/{entityType}/{entityId}
* @secure
* @response `200` `ChangeOwnerToCustomerUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
changeOwnerToCustomerUsingPost = (ownerId, entityType, entityId, data, params = {}) => this.request({
    path: `/api/owner/CUSTOMER/${ownerId}/${entityType}/${entityId}`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, ...params,
});
/**
* @description Tenant changes Owner from Customer or sub-Customer to Tenant. Available for users with 'TENANT_ADMIN' authority.
*
* @tags owner-controller
* @name ChangeOwnerToTenantUsingPost
* @summary Change owner to tenant (changeOwnerToTenant)
* @request POST:/api/owner/TENANT/{ownerId}/{entityType}/{entityId}
* @secure
* @response `200` `ChangeOwnerToTenantUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
changeOwnerToTenantUsingPost = (ownerId, entityType, entityId, data, params = {}) => this.request({
    path: `/api/owner/TENANT/${ownerId}/${entityType}/${entityId}`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, ...params,
});
/**
* @description Fetch the Queue object based on the provided Queue name. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags queue-controller
* @name GetQueueByNameUsingGet
* @summary Get Queue (getQueueByName)
* @request GET:/api/queues/name/{queueName}
* @secure
* @response `200` `GetQueueByNameUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getQueueByNameUsingGet = (queueName, params = {}) => this.request({
    path: `/api/queues/name/${queueName}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Fetch the Queue object based on the provided Queue Id. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags queue-controller
* @name GetQueueByIdUsingGet
* @summary Get Queue (getQueueById)
* @request GET:/api/queues/{queueId}
* @secure
* @response `200` `GetQueueByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getQueueByIdUsingGet = (queueId, params = {}) => this.request({
    path: `/api/queues/${queueId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Deletes the Queue. Available for users with 'SYS_ADMIN' authority.
*
* @tags queue-controller
* @name DeleteQueueUsingDelete
* @summary Delete Queue (deleteQueue)
* @request DELETE:/api/queues/{queueId}
* @secure
* @response `200` `DeleteQueueUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteQueueUsingDelete = (queueId, params = {}) => this.request({
    path: `/api/queues/${queueId}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Returns a page of queues registered in the platform. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags queue-controller
* @name GetTenantQueuesByServiceTypeUsingGet
* @summary Get Queues (getTenantQueuesByServiceType)
* @request GET:/api/queues{?page,pageSize,serviceType,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetTenantQueuesByServiceTypeUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantQueuesByServiceTypeUsingGet = (query, params = {}) => this.request({
    path: `/api/queues`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Create or update the Queue. When creating queue, platform generates Queue Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). Specify existing Queue id to update the queue. Referencing non-existing Queue Id will cause 'Not Found' error. Queue name is unique in the scope of sysadmin. Remove 'id', 'tenantId' from the request body example (below) to create new Queue entity. Available for users with 'SYS_ADMIN' authority.
*
* @tags queue-controller
* @name SaveQueueUsingPost
* @summary Create Or Update Queue (saveQueue)
* @request POST:/api/queues{?serviceType}
* @secure
* @response `200` `SaveQueueUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveQueueUsingPost = (query, data, params = {}) => this.request({
    path: `/api/queues`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* No description
*
* @tags report-controller
* @name DownloadTestReportUsingPost
* @summary downloadTestReport
* @request POST:/api/report/test{?reportsServerEndpointUrl}
* @secure
* @response `200` `DownloadTestReportUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
downloadTestReportUsingPost = (query, data, params = {}) => this.request({
    path: `/api/report/test`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* No description
*
* @tags report-controller
* @name DownloadDashboardReportUsingPost
* @summary downloadDashboardReport
* @request POST:/api/report/{dashboardId}/download
* @secure
* @response `200` `DownloadDashboardReportUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
downloadDashboardReportUsingPost = (dashboardId, data, params = {}) => this.request({
    path: `/api/report/${dashboardId}/download`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Creates or Updates the Role. When creating Role, platform generates Role Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created Role id will be present in the response. Specify existing Role id to update the permission. Referencing non-existing Group Permission Id will cause 'Not Found' error. Role Contains a set of permissions. Role has two types. Generic Role may be assigned to the user group and will provide permissions for all entities of a certain type. Group Role may be assigned to both user and entity group and will provides permissions only for the entities that belong to specified entity group. The assignment of the Role to the User Group is done using [Group Permission Controller](/swagger-ui.html#/group-permission-controller). Example of Generic Role with read-only permissions for any resource and all permissions for the 'DEVICE' and 'PROFILE' resources is listed below: ```json { "name": "Read-Only User", "type": "GENERIC", "permissions": { "ALL": [ "READ", "RPC_CALL", "READ_CREDENTIALS", "READ_ATTRIBUTES", "READ_TELEMETRY" ], "DEVICE": [ "ALL" ] "PROFILE": [ "ALL" ] }, "additionalInfo": { "description": "Read-only permissions for everything, Write permissions for devices and own profile." } } ``` Example of Group Role with read-only permissions. Note that the group role has no association with the resources. The type of the resource is taken from the entity group that this role is assigned to: ```json { "name": "Entity Group Read-only User", "type": "GROUP", "permissions": [ "READ", "RPC_CALL", "READ_CREDENTIALS", "READ_ATTRIBUTES", "READ_TELEMETRY" ], "additionalInfo": { "description": "Read-only permissions." } } ``` Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
*
* @tags role-controller
* @name SaveRoleUsingPost
* @summary Create Or Update Role (saveRole)
* @request POST:/api/role
* @secure
* @response `200` `SaveRoleUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveRoleUsingPost = (data, params = {}) => this.request({
    path: `/api/role`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Fetch the Role object based on the provided Role Id. Role Contains a set of permissions. Role has two types. Generic Role may be assigned to the user group and will provide permissions for all entities of a certain type. Group Role may be assigned to both user and entity group and will provides permissions only for the entities that belong to specified entity group. The assignment of the Role to the User Group is done using [Group Permission Controller](/swagger-ui.html#/group-permission-controller). Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags role-controller
* @name GetRoleByIdUsingGet
* @summary Get Role by Id (getRoleById)
* @request GET:/api/role/{roleId}
* @secure
* @response `200` `GetRoleByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getRoleByIdUsingGet = (roleId, params = {}) => this.request({
    path: `/api/role/${roleId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Deletes the role. Referencing non-existing role Id will cause an error. Security check is performed to verify that the user has 'DELETE' permission for the entity (entities).
*
* @tags role-controller
* @name DeleteRoleUsingDelete
* @summary Delete role (deleteRole)
* @request DELETE:/api/role/{roleId}
* @secure
* @response `200` `DeleteRoleUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteRoleUsingDelete = (roleId, params = {}) => this.request({
    path: `/api/role/${roleId}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Returns a page of roles that are available for the current user. Role Contains a set of permissions. Role has two types. Generic Role may be assigned to the user group and will provide permissions for all entities of a certain type. Group Role may be assigned to both user and entity group and will provides permissions only for the entities that belong to specified entity group. The assignment of the Role to the User Group is done using [Group Permission Controller](/swagger-ui.html#/group-permission-controller).You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags role-controller
* @name GetRolesUsingGet
* @summary Get Roles (getRoles)
* @request GET:/api/roles{?page,pageSize,sortOrder,sortProperty,textSearch,type}
* @secure
* @response `200` `GetRolesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getRolesUsingGet = (query, params = {}) => this.request({
    path: `/api/roles`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns the list of rows based on their ids. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags role-controller
* @name GetRolesByIdsUsingGet
* @summary Get Roles By Ids (getRolesByIds)
* @request GET:/api/roles{?roleIds}
* @secure
* @response `200` `GetRolesByIdsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getRolesByIdsUsingGet = (query, params = {}) => this.request({
    path: `/api/roles`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Deprecated. See 'Rpc V 2 Controller' instead. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags rpc-v-1-controller
* @name HandleOneWayDeviceRpcRequestUsingPost
* @summary Send one-way RPC request (handleOneWayDeviceRPCRequest)
* @request POST:/api/plugins/rpc/oneway/{deviceId}
* @secure
* @response `200` `HandleOneWayDeviceRpcRequestUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
handleOneWayDeviceRpcRequestUsingPost = (deviceId, data, params = {}) => this.request({
    path: `/api/plugins/rpc/oneway/${deviceId}`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Deprecated. See 'Rpc V 2 Controller' instead. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags rpc-v-1-controller
* @name HandleTwoWayDeviceRpcRequestUsingPost
* @summary Send two-way RPC request (handleTwoWayDeviceRPCRequest)
* @request POST:/api/plugins/rpc/twoway/{deviceId}
* @secure
* @response `200` `HandleTwoWayDeviceRpcRequestUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
handleTwoWayDeviceRpcRequestUsingPost = (deviceId, data, params = {}) => this.request({
    path: `/api/plugins/rpc/twoway/${deviceId}`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Sends the one-way remote-procedure call (RPC) request to device. Sends the one-way remote-procedure call (RPC) request to device. The RPC call is A JSON that contains the method name ('method'), parameters ('params') and multiple optional fields. See example below. We will review the properties of the RPC call one-by-one below. ```json { "method": "setGpio", "params": { "pin": 7, "value": 1 }, "persistent": false, "timeout": 5000 } ``` ### Server-side RPC structure The body of server-side RPC request consists of multiple fields: * **method** - mandatory, name of the method to distinct the RPC calls. For example, "getCurrentTime" or "getWeatherForecast". The value of the parameter is a string. * **params** - mandatory, parameters used for processing of the request. The value is a JSON. Leave empty JSON "{}" if no parameters needed. * **timeout** - optional, value of the processing timeout in milliseconds. The default value is 10000 (10 seconds). The minimum value is 5000 (5 seconds). * **expirationTime** - optional, value of the epoch time (in milliseconds, UTC timezone). Overrides **timeout** if present. * **persistent** - optional, indicates persistent RPC. The default value is "false". * **retries** - optional, defines how many times persistent RPC will be re-sent in case of failures on the network and/or device side. * **additionalInfo** - optional, defines metadata for the persistent RPC that will be added to the persistent RPC events. ### RPC Result In case of persistent RPC, the result of this call is 'rpcId' UUID. In case of lightweight RPC, the result of this call is either 200 OK if the message was sent to device, or 504 Gateway Timeout if device is offline. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags rpc-v-2-controller
* @name HandleOneWayDeviceRpcRequestUsingPost1
* @summary Send one-way RPC request
* @request POST:/api/rpc/oneway/{deviceId}
* @secure
* @response `200` `HandleOneWayDeviceRpcRequestUsingPost1Data` Persistent RPC request was saved to the database or lightweight RPC request was sent to the device.
* @response `400` `ThingsboardErrorResponse` Invalid structure of the request.
* @response `401` `ThingsboardErrorResponse` User is not authorized to send the RPC request. Most likely, User belongs to different Customer or Tenant.
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
* @response `504` `void` Timeout to process the RPC call. Most likely, device is offline.
*/
handleOneWayDeviceRpcRequestUsingPost1 = (deviceId, data, params = {}) => this.request({
    path: `/api/rpc/oneway/${deviceId}`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Allows to query RPC calls for specific device using pagination. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags rpc-v-2-controller
* @name GetPersistedRpcByDeviceUsingGet
* @summary Get persistent RPC requests
* @request GET:/api/rpc/persistent/device/{deviceId}{?page,pageSize,rpcStatus,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetPersistedRpcByDeviceUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getPersistedRpcByDeviceUsingGet = ({ deviceId, ...query }, params = {}) => this.request({
    path: `/api/rpc/persistent/device/${deviceId}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Get information about the status of the RPC call. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags rpc-v-2-controller
* @name GetPersistedRpcUsingGet
* @summary Get persistent RPC request
* @request GET:/api/rpc/persistent/{rpcId}
* @secure
* @response `200` `GetPersistedRpcUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getPersistedRpcUsingGet = (rpcId, params = {}) => this.request({
    path: `/api/rpc/persistent/${rpcId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Deletes the persistent RPC request. Available for users with 'TENANT_ADMIN' authority.
*
* @tags rpc-v-2-controller
* @name DeleteRpcUsingDelete
* @summary Delete persistent RPC
* @request DELETE:/api/rpc/persistent/{rpcId}
* @secure
* @response `200` `DeleteRpcUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteRpcUsingDelete = (rpcId, params = {}) => this.request({
    path: `/api/rpc/persistent/${rpcId}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Sends the two-way remote-procedure call (RPC) request to device. Sends the one-way remote-procedure call (RPC) request to device. The RPC call is A JSON that contains the method name ('method'), parameters ('params') and multiple optional fields. See example below. We will review the properties of the RPC call one-by-one below. ```json { "method": "setGpio", "params": { "pin": 7, "value": 1 }, "persistent": false, "timeout": 5000 } ``` ### Server-side RPC structure The body of server-side RPC request consists of multiple fields: * **method** - mandatory, name of the method to distinct the RPC calls. For example, "getCurrentTime" or "getWeatherForecast". The value of the parameter is a string. * **params** - mandatory, parameters used for processing of the request. The value is a JSON. Leave empty JSON "{}" if no parameters needed. * **timeout** - optional, value of the processing timeout in milliseconds. The default value is 10000 (10 seconds). The minimum value is 5000 (5 seconds). * **expirationTime** - optional, value of the epoch time (in milliseconds, UTC timezone). Overrides **timeout** if present. * **persistent** - optional, indicates persistent RPC. The default value is "false". * **retries** - optional, defines how many times persistent RPC will be re-sent in case of failures on the network and/or device side. * **additionalInfo** - optional, defines metadata for the persistent RPC that will be added to the persistent RPC events. ### RPC Result In case of persistent RPC, the result of this call is 'rpcId' UUID. In case of lightweight RPC, the result of this call is the response from device, or 504 Gateway Timeout if device is offline. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags rpc-v-2-controller
* @name HandleTwoWayDeviceRpcRequestUsingPost1
* @summary Send two-way RPC request
* @request POST:/api/rpc/twoway/{deviceId}
* @secure
* @response `200` `HandleTwoWayDeviceRpcRequestUsingPost1Data` Persistent RPC request was saved to the database or lightweight RPC response received.
* @response `400` `ThingsboardErrorResponse` Invalid structure of the request.
* @response `401` `ThingsboardErrorResponse` User is not authorized to send the RPC request. Most likely, User belongs to different Customer or Tenant.
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
* @response `504` `void` Timeout to process the RPC call. Most likely, device is offline.
*/
handleTwoWayDeviceRpcRequestUsingPost1 = (deviceId, data, params = {}) => this.request({
    path: `/api/rpc/twoway/${deviceId}`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Creates assignment of an existing rule chain to an instance of The Edge. Assignment works in async way - first, notification event pushed to edge service queue on platform. Second, remote edge service will receive a copy of assignment rule chain (Edge will receive this instantly, if it's currently connected, or once it's going to be connected to platform). Third, once rule chain will be delivered to edge service, it's going to start processing messages locally. Only rule chain with type 'EDGE' can be assigned to edge. Available for users with 'TENANT_ADMIN' authority.
*
* @tags rule-chain-controller
* @name AssignRuleChainToEdgeUsingPost
* @summary Assign rule chain to edge (assignRuleChainToEdge)
* @request POST:/api/edge/{edgeId}/ruleChain/{ruleChainId}
* @secure
* @response `200` `AssignRuleChainToEdgeUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
assignRuleChainToEdgeUsingPost = (edgeId, ruleChainId, params = {}) => this.request({
    path: `/api/edge/${edgeId}/ruleChain/${ruleChainId}`,
    method: 'POST',
    secure: true, format: "json", ...params,
});
/**
* @description Clears assignment of the rule chain to the edge. Unassignment works in async way - first, 'unassign' notification event pushed to edge queue on platform. Second, remote edge service will receive an 'unassign' command to remove rule chain (Edge will receive this instantly, if it's currently connected, or once it's going to be connected to platform). Third, once 'unassign' command will be delivered to edge service, it's going to remove rule chain locally. Available for users with 'TENANT_ADMIN' authority.
*
* @tags rule-chain-controller
* @name UnassignRuleChainFromEdgeUsingDelete
* @summary Unassign rule chain from edge (unassignRuleChainFromEdge)
* @request DELETE:/api/edge/{edgeId}/ruleChain/{ruleChainId}
* @secure
* @response `200` `UnassignRuleChainFromEdgeUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
unassignRuleChainFromEdgeUsingDelete = (edgeId, ruleChainId, params = {}) => this.request({
    path: `/api/edge/${edgeId}/ruleChain/${ruleChainId}`,
    method: 'DELETE',
    secure: true, format: "json", ...params,
});
/**
* @description Returns a page of Rule Chains assigned to the specified edge. The rule chain object is lightweight and contains general information about the rule chain. List of rule nodes and their connection is stored in a separate 'metadata' object.You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' authority.
*
* @tags rule-chain-controller
* @name GetEdgeRuleChainsUsingGet
* @summary Get Edge Rule Chains (getEdgeRuleChains)
* @request GET:/api/edge/{edgeId}/ruleChains{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetEdgeRuleChainsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEdgeRuleChainsUsingGet = ({ edgeId, ...query }, params = {}) => this.request({
    path: `/api/edge/${edgeId}/ruleChains`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Create or update the Rule Chain. When creating Rule Chain, platform generates Rule Chain Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created Rule Chain Id will be present in the response. Specify existing Rule Chain id to update the rule chain. Referencing non-existing rule chain Id will cause 'Not Found' error. The rule chain object is lightweight and contains general information about the rule chain. List of rule nodes and their connection is stored in a separate 'metadata' object.Remove 'id', 'tenantId' from the request body example (below) to create new Rule Chain entity. Available for users with 'TENANT_ADMIN' authority.
*
* @tags rule-chain-controller
* @name SaveRuleChainUsingPost1
* @summary Create Or Update Rule Chain (saveRuleChain)
* @request POST:/api/ruleChain
* @secure
* @response `200` `SaveRuleChainUsingPost1Data` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveRuleChainUsingPost1 = (data, params = {}) => this.request({
    path: `/api/ruleChain`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Returns a list of Rule Chains that will be assigned to a newly created edge. The rule chain object is lightweight and contains general information about the rule chain. List of rule nodes and their connection is stored in a separate 'metadata' object. Available for users with 'TENANT_ADMIN' authority.
*
* @tags rule-chain-controller
* @name GetAutoAssignToEdgeRuleChainsUsingGet
* @summary Get Auto Assign To Edge Rule Chains (getAutoAssignToEdgeRuleChains)
* @request GET:/api/ruleChain/autoAssignToEdgeRuleChains
* @secure
* @response `200` `GetAutoAssignToEdgeRuleChainsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getAutoAssignToEdgeRuleChainsUsingGet = (params = {}) => this.request({
    path: `/api/ruleChain/autoAssignToEdgeRuleChains`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Create rule chain from template, based on the specified name in the request. Creates the rule chain based on the template that is used to create root rule chain. Available for users with 'TENANT_ADMIN' authority.
*
* @tags rule-chain-controller
* @name SaveRuleChainUsingPost
* @summary Create Default Rule Chain
* @request POST:/api/ruleChain/device/default
* @secure
* @response `200` `SaveRuleChainUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveRuleChainUsingPost = (data, params = {}) => this.request({
    path: `/api/ruleChain/device/default`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Updates the rule chain metadata. The metadata object contains information about the rule nodes and their connections. Available for users with 'TENANT_ADMIN' authority.
*
* @tags rule-chain-controller
* @name SaveRuleChainMetaDataUsingPost
* @summary Update Rule Chain Metadata
* @request POST:/api/ruleChain/metadata{?updateRelated}
* @secure
* @response `200` `SaveRuleChainMetaDataUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveRuleChainMetaDataUsingPost = (query, data, params = {}) => this.request({
    path: `/api/ruleChain/metadata`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Returns 'True' if the TBEL script execution is enabled Available for users with 'TENANT_ADMIN' authority.
*
* @tags rule-chain-controller
* @name IsTbelEnabledUsingGet
* @summary Is TBEL script executor enabled
* @request GET:/api/ruleChain/tbelEnabled
* @secure
* @response `200` `IsTbelEnabledUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
isTbelEnabledUsingGet = (params = {}) => this.request({
    path: `/api/ruleChain/tbelEnabled`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Execute the Script function and return the result. The format of request: ```json { "script": "Your Function as String", "scriptType": "One of: update, generate, filter, switch, json, string", "argNames": ["msg", "metadata", "type"], "msg": "{\"temperature\": 42}", "metadata": { "deviceName": "Device A", "deviceType": "Thermometer" }, "msgType": "POST_TELEMETRY_REQUEST" } ``` Expected result JSON contains "output" and "error". Available for users with 'TENANT_ADMIN' authority.
*
* @tags rule-chain-controller
* @name TestScriptUsingPost
* @summary Test Script function
* @request POST:/api/ruleChain/testScript{?scriptLang}
* @secure
* @response `200` `TestScriptUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
testScriptUsingPost = (query, data, params = {}) => this.request({
    path: `/api/ruleChain/testScript`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Fetch the Rule Chain object based on the provided Rule Chain Id. The rule chain object is lightweight and contains general information about the rule chain. List of rule nodes and their connection is stored in a separate 'metadata' object. Available for users with 'TENANT_ADMIN' authority.
*
* @tags rule-chain-controller
* @name GetRuleChainByIdUsingGet
* @summary Get Rule Chain (getRuleChainById)
* @request GET:/api/ruleChain/{ruleChainId}
* @secure
* @response `200` `GetRuleChainByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getRuleChainByIdUsingGet = (ruleChainId, params = {}) => this.request({
    path: `/api/ruleChain/${ruleChainId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Deletes the rule chain. Referencing non-existing rule chain Id will cause an error. Referencing rule chain that is used in the device profiles will cause an error. Available for users with 'TENANT_ADMIN' authority.
*
* @tags rule-chain-controller
* @name DeleteRuleChainUsingDelete
* @summary Delete rule chain (deleteRuleChain)
* @request DELETE:/api/ruleChain/{ruleChainId}
* @secure
* @response `200` `DeleteRuleChainUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteRuleChainUsingDelete = (ruleChainId, params = {}) => this.request({
    path: `/api/ruleChain/${ruleChainId}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Makes the rule chain to be automatically assigned for any new edge that will be created. Does not assign this rule chain for already created edges. Available for users with 'TENANT_ADMIN' authority.
*
* @tags rule-chain-controller
* @name SetAutoAssignToEdgeRuleChainUsingPost
* @summary Set Auto Assign To Edge Rule Chain (setAutoAssignToEdgeRuleChain)
* @request POST:/api/ruleChain/{ruleChainId}/autoAssignToEdge
* @secure
* @response `200` `SetAutoAssignToEdgeRuleChainUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
setAutoAssignToEdgeRuleChainUsingPost = (ruleChainId, params = {}) => this.request({
    path: `/api/ruleChain/${ruleChainId}/autoAssignToEdge`,
    method: 'POST',
    secure: true, format: "json", ...params,
});
/**
* @description Removes the rule chain from the list of rule chains that are going to be automatically assigned for any new edge that will be created. Does not unassign this rule chain for already assigned edges. Available for users with 'TENANT_ADMIN' authority.
*
* @tags rule-chain-controller
* @name UnsetAutoAssignToEdgeRuleChainUsingDelete
* @summary Unset Auto Assign To Edge Rule Chain (unsetAutoAssignToEdgeRuleChain)
* @request DELETE:/api/ruleChain/{ruleChainId}/autoAssignToEdge
* @secure
* @response `200` `UnsetAutoAssignToEdgeRuleChainUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
unsetAutoAssignToEdgeRuleChainUsingDelete = (ruleChainId, params = {}) => this.request({
    path: `/api/ruleChain/${ruleChainId}/autoAssignToEdge`,
    method: 'DELETE',
    secure: true, format: "json", ...params,
});
/**
* @description Makes the rule chain to be root rule chain for any new edge that will be created. Does not update root rule chain for already created edges. Available for users with 'TENANT_ADMIN' authority.
*
* @tags rule-chain-controller
* @name SetEdgeTemplateRootRuleChainUsingPost
* @summary Set Edge Template Root Rule Chain (setEdgeTemplateRootRuleChain)
* @request POST:/api/ruleChain/{ruleChainId}/edgeTemplateRoot
* @secure
* @response `200` `SetEdgeTemplateRootRuleChainUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
setEdgeTemplateRootRuleChainUsingPost = (ruleChainId, params = {}) => this.request({
    path: `/api/ruleChain/${ruleChainId}/edgeTemplateRoot`,
    method: 'POST',
    secure: true, format: "json", ...params,
});
/**
* @description Fetch the Rule Chain Metadata object based on the provided Rule Chain Id. The metadata object contains information about the rule nodes and their connections. Available for users with 'TENANT_ADMIN' authority.
*
* @tags rule-chain-controller
* @name GetRuleChainMetaDataUsingGet
* @summary Get Rule Chain (getRuleChainById)
* @request GET:/api/ruleChain/{ruleChainId}/metadata
* @secure
* @response `200` `GetRuleChainMetaDataUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getRuleChainMetaDataUsingGet = (ruleChainId, params = {}) => this.request({
    path: `/api/ruleChain/${ruleChainId}/metadata`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Fetch the unique labels for the "output" Rule Nodes that belong to the Rule Chain based on the provided Rule Chain Id. The rule chain object is lightweight and contains general information about the rule chain. List of rule nodes and their connection is stored in a separate 'metadata' object. Available for users with 'TENANT_ADMIN' authority.
*
* @tags rule-chain-controller
* @name GetRuleChainOutputLabelsUsingGet
* @summary Get Rule Chain output labels (getRuleChainOutputLabels)
* @request GET:/api/ruleChain/{ruleChainId}/output/labels
* @secure
* @response `200` `GetRuleChainOutputLabelsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getRuleChainOutputLabelsUsingGet = (ruleChainId, params = {}) => this.request({
    path: `/api/ruleChain/${ruleChainId}/output/labels`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Fetch the list of rule chains and the relation types (labels) they use to process output of the current rule chain based on the provided Rule Chain Id. The rule chain object is lightweight and contains general information about the rule chain. List of rule nodes and their connection is stored in a separate 'metadata' object. Available for users with 'TENANT_ADMIN' authority.
*
* @tags rule-chain-controller
* @name GetRuleChainOutputLabelsUsageUsingGet
* @summary Get output labels usage (getRuleChainOutputLabelsUsage)
* @request GET:/api/ruleChain/{ruleChainId}/output/labels/usage
* @secure
* @response `200` `GetRuleChainOutputLabelsUsageUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getRuleChainOutputLabelsUsageUsingGet = (ruleChainId, params = {}) => this.request({
    path: `/api/ruleChain/${ruleChainId}/output/labels/usage`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Makes the rule chain to be root rule chain. Updates previous root rule chain as well. Available for users with 'TENANT_ADMIN' authority.
*
* @tags rule-chain-controller
* @name SetRootRuleChainUsingPost
* @summary Set Root Rule Chain (setRootRuleChain)
* @request POST:/api/ruleChain/{ruleChainId}/root
* @secure
* @response `200` `SetRootRuleChainUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
setRootRuleChainUsingPost = (ruleChainId, params = {}) => this.request({
    path: `/api/ruleChain/${ruleChainId}/root`,
    method: 'POST',
    secure: true, format: "json", ...params,
});
/**
* @description Exports all tenant rule chains as one JSON. Available for users with 'TENANT_ADMIN' authority.
*
* @tags rule-chain-controller
* @name ExportRuleChainsUsingGet
* @summary Export Rule Chains
* @request GET:/api/ruleChains/export{?limit}
* @secure
* @response `200` `ExportRuleChainsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
exportRuleChainsUsingGet = (query, params = {}) => this.request({
    path: `/api/ruleChains/export`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Imports all tenant rule chains as one JSON. Available for users with 'TENANT_ADMIN' authority.
*
* @tags rule-chain-controller
* @name ImportRuleChainsUsingPost
* @summary Import Rule Chains
* @request POST:/api/ruleChains/import{?overwrite}
* @secure
* @response `200` `ImportRuleChainsUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
importRuleChainsUsingPost = (query, data, params = {}) => this.request({
    path: `/api/ruleChains/import`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Returns a page of Rule Chains owned by tenant. The rule chain object is lightweight and contains general information about the rule chain. List of rule nodes and their connection is stored in a separate 'metadata' object.You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' authority.
*
* @tags rule-chain-controller
* @name GetRuleChainsUsingGet
* @summary Get Rule Chains (getRuleChains)
* @request GET:/api/ruleChains{?page,pageSize,sortOrder,sortProperty,textSearch,type}
* @secure
* @response `200` `GetRuleChainsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getRuleChainsUsingGet = (query, params = {}) => this.request({
    path: `/api/ruleChains`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Gets the input message from the debug events for specified Rule Chain Id. Referencing non-existing rule chain Id will cause an error. Available for users with 'TENANT_ADMIN' authority.
*
* @tags rule-chain-controller
* @name GetLatestRuleNodeDebugInputUsingGet
* @summary Get latest input message (getLatestRuleNodeDebugInput)
* @request GET:/api/ruleNode/{ruleNodeId}/debugIn
* @secure
* @response `200` `GetLatestRuleNodeDebugInputUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getLatestRuleNodeDebugInputUsingGet = (ruleNodeId, params = {}) => this.request({
    path: `/api/ruleNode/${ruleNodeId}/debugIn`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Creates the Message with type 'REST_API_REQUEST' and payload taken from the request body. Uses current User Id ( the one which credentials is used to perform the request) as the Rule Engine message originator. This method allows you to extend the regular platform API with the power of Rule Engine. You may use default and custom rule nodes to handle the message. The generated message contains two important metadata fields: * **'serviceId'** to identify the platform server that received the request; * **'requestUUID'** to identify the request and route possible response from the Rule Engine; Use **'rest call reply'** rule node to push the reply from rule engine back as a REST API call response. The default timeout of the request processing is 10 seconds. Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
*
* @tags rule-engine-controller
* @name HandleRuleEngineRequestUsingPost3
* @summary Push user message to the rule engine (handleRuleEngineRequest)
* @request POST:/api/rule-engine/
* @secure
* @response `200` `HandleRuleEngineRequestUsingPost3Data` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
handleRuleEngineRequestUsingPost3 = (data, params = {}) => this.request({
    path: `/api/rule-engine/`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Creates the Message with type 'REST_API_REQUEST' and payload taken from the request body. Uses specified Entity Id as the Rule Engine message originator. This method allows you to extend the regular platform API with the power of Rule Engine. You may use default and custom rule nodes to handle the message. The generated message contains two important metadata fields: * **'serviceId'** to identify the platform server that received the request; * **'requestUUID'** to identify the request and route possible response from the Rule Engine; Use **'rest call reply'** rule node to push the reply from rule engine back as a REST API call response. The default timeout of the request processing is 10 seconds. Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
*
* @tags rule-engine-controller
* @name HandleRuleEngineRequestUsingPost2
* @summary Push entity message to the rule engine (handleRuleEngineRequest)
* @request POST:/api/rule-engine/{entityType}/{entityId}
* @secure
* @response `200` `HandleRuleEngineRequestUsingPost2Data` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
handleRuleEngineRequestUsingPost2 = (entityType, entityId, data, params = {}) => this.request({
    path: `/api/rule-engine/${entityType}/${entityId}`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Creates the Message with type 'REST_API_REQUEST' and payload taken from the request body. Uses specified Entity Id as the Rule Engine message originator. This method allows you to extend the regular platform API with the power of Rule Engine. You may use default and custom rule nodes to handle the message. The generated message contains two important metadata fields: * **'serviceId'** to identify the platform server that received the request; * **'requestUUID'** to identify the request and route possible response from the Rule Engine; Use **'rest call reply'** rule node to push the reply from rule engine back as a REST API call response. If request sent for Device/Device Profile or Asset/Asset Profile entity, specified queue will be used instead of the queue selected in the device or asset profile. The platform expects the timeout value in milliseconds. Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
*
* @tags rule-engine-controller
* @name HandleRuleEngineRequestUsingPost1
* @summary Push entity message with timeout and specified queue to the rule engine (handleRuleEngineRequest)
* @request POST:/api/rule-engine/{entityType}/{entityId}/{queueName}/{timeout}
* @secure
* @response `200` `HandleRuleEngineRequestUsingPost1Data` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
handleRuleEngineRequestUsingPost1 = (entityType, entityId, queueName, timeout, data, params = {}) => this.request({
    path: `/api/rule-engine/${entityType}/${entityId}/${queueName}/${timeout}`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Creates the Message with type 'REST_API_REQUEST' and payload taken from the request body. Uses specified Entity Id as the Rule Engine message originator. This method allows you to extend the regular platform API with the power of Rule Engine. You may use default and custom rule nodes to handle the message. The generated message contains two important metadata fields: * **'serviceId'** to identify the platform server that received the request; * **'requestUUID'** to identify the request and route possible response from the Rule Engine; Use **'rest call reply'** rule node to push the reply from rule engine back as a REST API call response. The platform expects the timeout value in milliseconds. Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
*
* @tags rule-engine-controller
* @name HandleRuleEngineRequestUsingPost
* @summary Push entity message with timeout to the rule engine (handleRuleEngineRequest)
* @request POST:/api/rule-engine/{entityType}/{entityId}/{timeout}
* @secure
* @response `200` `HandleRuleEngineRequestUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
handleRuleEngineRequestUsingPost = (entityType, entityId, timeout, data, params = {}) => this.request({
    path: `/api/rule-engine/${entityType}/${entityId}/${timeout}`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Fetch the list of Scheduler Event Info objects based on the provided Edge entity. Scheduler Event extends Scheduler Event Info object and adds 'configuration' - a JSON structure of scheduler event configuration. See the 'Model' tab of the Response Class for more details. Scheduler Events allows you to schedule various types of events with flexible schedule configuration. Scheduler fires configured scheduler events according to their schedule. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags scheduler-event-controller
* @name GetAllSchedulerEventsUsingGet
* @summary Get All Edge Scheduler Events (getAllSchedulerEvents)
* @request GET:/api/edge/{edgeId}/allSchedulerEvents
* @secure
* @response `200` `GetAllSchedulerEventsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getAllSchedulerEventsUsingGet = (edgeId, params = {}) => this.request({
    path: `/api/edge/${edgeId}/allSchedulerEvents`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Creates assignment of an existing scheduler event to an instance of The Edge. Assignment works in async way - first, notification event pushed to edge service queue on platform. Second, remote edge service will receive a copy of assignment scheduler event (Edge will receive this instantly, if it's currently connected, or once it's going to be connected to platform). Third, once scheduler event will be delivered to edge service, it is going to be available for usage on remote edge instance. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
*
* @tags scheduler-event-controller
* @name AssignSchedulerEventToEdgeUsingPost
* @summary Assign scheduler event to edge (assignSchedulerEventToEdge)
* @request POST:/api/edge/{edgeId}/schedulerEvent/{schedulerEventId}
* @secure
* @response `200` `AssignSchedulerEventToEdgeUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
assignSchedulerEventToEdgeUsingPost = (edgeId, schedulerEventId, params = {}) => this.request({
    path: `/api/edge/${edgeId}/schedulerEvent/${schedulerEventId}`,
    method: 'POST',
    secure: true, format: "json", ...params,
});
/**
* @description Clears assignment of the scheduler event to the edge. Unassignment works in async way - first, 'unassign' notification event pushed to edge queue on platform. Second, remote edge service will receive an 'unassign' command to remove entity group (Edge will receive this instantly, if it's currently connected, or once it's going to be connected to platform). Third, once 'unassign' command will be delivered to edge service, it's going to remove entity group and entities inside this group locally. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
*
* @tags scheduler-event-controller
* @name UnassignSchedulerEventFromEdgeUsingDelete
* @summary Unassign scheduler event from edge (unassignSchedulerEventFromEdge)
* @request DELETE:/api/edge/{edgeId}/schedulerEvent/{schedulerEventId}
* @secure
* @response `200` `UnassignSchedulerEventFromEdgeUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
unassignSchedulerEventFromEdgeUsingDelete = (edgeId, schedulerEventId, params = {}) => this.request({
    path: `/api/edge/${edgeId}/schedulerEvent/${schedulerEventId}`,
    method: 'DELETE',
    secure: true, format: "json", ...params,
});
/**
* @description Returns a page of  Scheduler Events Info objects based on the provided Edge entity. Scheduler Event extends Scheduler Event Info object and adds 'configuration' - a JSON structure of scheduler event configuration. See the 'Model' tab of the Response Class for more details. Scheduler Events allows you to schedule various types of events with flexible schedule configuration. Scheduler fires configured scheduler events according to their schedule. See the 'Model' tab of the Response Class for more details. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags scheduler-event-controller
* @name GetEdgeSchedulerEventsUsingGet
* @summary Get Edge Scheduler Events (getEdgeSchedulerEvents)
* @request GET:/api/edge/{edgeId}/schedulerEvents{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetEdgeSchedulerEventsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getEdgeSchedulerEventsUsingGet = ({ edgeId, ...query }, params = {}) => this.request({
    path: `/api/edge/${edgeId}/schedulerEvents`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Creates or Updates scheduler event. Scheduler Event extends Scheduler Event Info object and adds 'configuration' - a JSON structure of scheduler event configuration. See the 'Model' tab of the Response Class for more details. When creating scheduler event, platform generates scheduler event Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created scheduler event id will be present in the response. Specify existing scheduler event id to update the scheduler event. Referencing non-existing scheduler event Id will cause 'Not Found' error. Remove 'id', 'tenantId' and optionally 'customerId' from the request body example (below) to create new Scheduler Event entity. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags scheduler-event-controller
* @name SaveSchedulerEventUsingPost
* @summary Save Scheduler Event (saveSchedulerEvent)
* @request POST:/api/schedulerEvent
* @secure
* @response `200` `SaveSchedulerEventUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveSchedulerEventUsingPost = (data, params = {}) => this.request({
    path: `/api/schedulerEvent`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Fetch the SchedulerEventWithCustomerInfo object based on the provided scheduler event Id. Scheduler Event With Customer Info extends Scheduler Event Info object and adds 'customerTitle' - a String value representing the title of the customer which user created a Scheduler Event and 'customerIsPublic' - a boolean parameter that specifies if customer is public. See the 'Model' tab of the Response Class for more details. Referencing non-existing Scheduler Event Id will cause 'Not Found' error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags scheduler-event-controller
* @name GetSchedulerEventInfoByIdUsingGet
* @summary Get Scheduler Event With Customer Info (getSchedulerEventInfoById)
* @request GET:/api/schedulerEvent/info/{schedulerEventId}
* @secure
* @response `200` `GetSchedulerEventInfoByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getSchedulerEventInfoByIdUsingGet = (schedulerEventId, params = {}) => this.request({
    path: `/api/schedulerEvent/info/${schedulerEventId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Fetch the SchedulerEvent object based on the provided scheduler event Id. Scheduler Event extends Scheduler Event Info object and adds 'configuration' - a JSON structure of scheduler event configuration. See the 'Model' tab of the Response Class for more details. Referencing non-existing Scheduler Event Id will cause 'Not Found' error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags scheduler-event-controller
* @name GetSchedulerEventByIdUsingGet
* @summary Get Scheduler Event (getSchedulerEventById)
* @request GET:/api/schedulerEvent/{schedulerEventId}
* @secure
* @response `200` `GetSchedulerEventByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getSchedulerEventByIdUsingGet = (schedulerEventId, params = {}) => this.request({
    path: `/api/schedulerEvent/${schedulerEventId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Deletes the scheduler event. Referencing non-existing Scheduler Event Id will cause 'Not Found' error. Security check is performed to verify that the user has 'DELETE' permission for the entity (entities).
*
* @tags scheduler-event-controller
* @name DeleteSchedulerEventUsingDelete
* @summary Delete Scheduler Event (deleteSchedulerEvent)
* @request DELETE:/api/schedulerEvent/{schedulerEventId}
* @secure
* @response `200` `DeleteSchedulerEventUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteSchedulerEventUsingDelete = (schedulerEventId, params = {}) => this.request({
    path: `/api/schedulerEvent/${schedulerEventId}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Requested scheduler events must be owned by tenant or assigned to customer which user is performing the request. Scheduler Events allows you to schedule various types of events with flexible schedule configuration. Scheduler fires configured scheduler events according to their schedule. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags scheduler-event-controller
* @name GetSchedulerEventsByIdsUsingGet
* @summary Get Scheduler Events By Ids (getSchedulerEventsByIds)
* @request GET:/api/schedulerEvents{?schedulerEventIds}
* @secure
* @response `200` `GetSchedulerEventsByIdsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getSchedulerEventsByIdsUsingGet = (query, params = {}) => this.request({
    path: `/api/schedulerEvents`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Requested scheduler events must be owned by tenant or assigned to customer which user is performing the request. Scheduler Event With Customer Info extends Scheduler Event Info object and adds 'customerTitle' - a String value representing the title of the customer which user created a Scheduler Event and 'customerIsPublic' - a boolean parameter that specifies if customer is public. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags scheduler-event-controller
* @name GetSchedulerEventsUsingGet
* @summary Get Scheduler Events By Type (getSchedulerEvents)
* @request GET:/api/schedulerEvents{?type}
* @secure
* @response `200` `GetSchedulerEventsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getSchedulerEventsUsingGet = (query, params = {}) => this.request({
    path: `/api/schedulerEvents`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Fetch the Privacy Policy based on the domain name from the request. Available for non-authorized users.
*
* @tags self-registration-controller
* @name GetPrivacyPolicyUsingGet
* @summary Get Privacy Policy for Self Registration form (getPrivacyPolicy)
* @request GET:/api/noauth/selfRegistration/privacyPolicy
* @response `200` `GetPrivacyPolicyUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getPrivacyPolicyUsingGet = (params = {}) => this.request({
    path: `/api/noauth/selfRegistration/privacyPolicy`,
    method: 'GET',
    format: "json", ...params,
});
/**
* @description Fetch the Self Registration parameters based on the domain name from the request. Available for non-authorized users. Contains the information to customize the sign-up form.
*
* @tags self-registration-controller
* @name GetSignUpSelfRegistrationParamsUsingGet
* @summary Get Self Registration form parameters without authentication (getSignUpSelfRegistrationParams)
* @request GET:/api/noauth/selfRegistration/signUpSelfRegistrationParams{?pkgName}
* @response `200` `GetSignUpSelfRegistrationParamsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getSignUpSelfRegistrationParamsUsingGet = (query, params = {}) => this.request({
    path: `/api/noauth/selfRegistration/signUpSelfRegistrationParams`,
    method: 'GET',
    query: query, format: "json", ...params,
});
/**
* @description Fetch the Terms of Use based on the domain name from the request. Available for non-authorized users.
*
* @tags self-registration-controller
* @name GetTermsOfUseUsingGet
* @summary Get Terms of Use for Self Registration form (getTermsOfUse)
* @request GET:/api/noauth/selfRegistration/termsOfUse
* @response `200` `GetTermsOfUseUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTermsOfUseUsingGet = (params = {}) => this.request({
    path: `/api/noauth/selfRegistration/termsOfUse`,
    method: 'GET',
    format: "json", ...params,
});
/**
* @description Fetch the Self Registration parameters object for the tenant of the current user. Available for users with 'TENANT_ADMIN' authority. Security check is performed to verify that the user has 'READ' permission for the white labeling resource.
*
* @tags self-registration-controller
* @name GetSelfRegistrationParamsUsingGet
* @summary Get Self Registration parameters (getSelfRegistrationParams)
* @request GET:/api/selfRegistration/selfRegistrationParams
* @secure
* @response `200` `GetSelfRegistrationParamsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getSelfRegistrationParamsUsingGet = (params = {}) => this.request({
    path: `/api/selfRegistration/selfRegistrationParams`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Creates or Updates the Self Registration parameters. When creating, platform generates Admin Settings Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created Admin Settings Id will be present in the response. Specify existing Admin Settings Id to update the Self Registration parameters. Referencing non-existing Admin Settings Id will cause 'Not Found' error. Self Registration allows users to signup for using the platform and automatically create a Customer account for them. You may configure default dashboard and user roles that will be assigned for this Customer. This allows you to build out-of-the-box solutions for customers. Ability to white-label the login and main pages helps to brand the platform. Available for users with 'TENANT_ADMIN' authority. Security check is performed to verify that the user has 'WRITE' permission for the white labeling resource.
*
* @tags self-registration-controller
* @name SaveSelfRegistrationParamsUsingPost
* @summary Create Or Update Self Registration parameters (saveSelfRegistrationParams)
* @request POST:/api/selfRegistration/selfRegistrationParams
* @secure
* @response `200` `SaveSelfRegistrationParamsUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveSelfRegistrationParamsUsingPost = (data, params = {}) => this.request({
    path: `/api/selfRegistration/selfRegistrationParams`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* No description
*
* @tags self-registration-controller
* @name DeleteSelfRegistrationParamsUsingDelete
* @summary deleteSelfRegistrationParams
* @request DELETE:/api/selfRegistration/selfRegistrationParams/{domainName}
* @secure
* @response `200` `DeleteSelfRegistrationParamsUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteSelfRegistrationParamsUsingDelete = (domainName, params = {}) => this.request({
    path: `/api/selfRegistration/selfRegistrationParams/${domainName}`,
    method: 'DELETE',
    secure: true, format: "json", ...params,
});
/**
* @description Activate the user using code(link) from the activation email and return the JWT Token. Sends the notification and email about user activation. Checks that user was not activated yet.
*
* @tags sign-up-controller
* @name ActivateUserByEmailCodeUsingPost
* @summary Activate and login using code from Email (activateUserByEmailCode)
* @request POST:/api/noauth/activateByEmailCode{?emailCode,pkgName}
* @response `200` `ActivateUserByEmailCodeUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
activateUserByEmailCodeUsingPost = (query, params = {}) => this.request({
    path: `/api/noauth/activateByEmailCode`,
    method: 'POST',
    query: query, format: "json", ...params,
});
/**
* @description Activate the user using code(link) from the activation email. Validates the code an redirects according to the signup flow. Checks that user was not activated yet.
*
* @tags sign-up-controller
* @name ActivateEmailUsingGet
* @summary Activate User using code from Email (activateEmail)
* @request GET:/api/noauth/activateEmail{?emailCode,pkgName}
* @response `200` `ActivateEmailUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
activateEmailUsingGet = (query, params = {}) => this.request({
    path: `/api/noauth/activateEmail`,
    method: 'GET',
    query: query, format: "json", ...params,
});
/**
* @description This method generates redirect to the special link that is handled by mobile application. Useful for email verification flow on mobile app.
*
* @tags sign-up-controller
* @name MobileLoginUsingGet
* @summary Mobile Login redirect (mobileLogin)
* @request GET:/api/noauth/login{?pkgName}
* @response `200` `MobileLoginUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
mobileLoginUsingGet = (query, params = {}) => this.request({
    path: `/api/noauth/login`,
    method: 'GET',
    query: query, format: "json", ...params,
});
/**
* @description Request to resend the activation email for the user. Checks that user was not activated yet.
*
* @tags sign-up-controller
* @name ResendEmailActivationUsingPost
* @summary Resend Activation Email (resendEmailActivation)
* @request POST:/api/noauth/resendEmailActivation{?email,pkgName}
* @response `200` `ResendEmailActivationUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
resendEmailActivationUsingPost = (query, params = {}) => this.request({
    path: `/api/noauth/resendEmailActivation`,
    method: 'POST',
    query: query, ...params,
});
/**
* @description Process user sign up request. Creates the Customer and corresponding User based on self Registration parameters for the domain. See [Self Registration Controller](/swagger-ui.html#/self-registration-controller) for more details.  The result is either 'SUCCESS' or 'INACTIVE_USER_EXISTS'. If Success, the user will receive an email with instruction to activate the account. The content of the email is customizable via the mail templates.
*
* @tags sign-up-controller
* @name SignUpUsingPost
* @summary User Sign Up (signUp)
* @request POST:/api/noauth/signup
* @response `200` `SignUpUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
signUpUsingPost = (data, params = {}) => this.request({
    path: `/api/noauth/signup`,
    method: 'POST',
    body: data, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Accept privacy policy by the current user.
*
* @tags sign-up-controller
* @name AcceptPrivacyPolicyUsingPost
* @summary Accept privacy policy (acceptPrivacyPolicy)
* @request POST:/api/signup/acceptPrivacyPolicy
* @secure
* @response `200` `AcceptPrivacyPolicyUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
acceptPrivacyPolicyUsingPost = (params = {}) => this.request({
    path: `/api/signup/acceptPrivacyPolicy`,
    method: 'POST',
    secure: true, format: "json", ...params,
});
/**
* @description Accept Terms of Use by the current user.
*
* @tags sign-up-controller
* @name AcceptTermsOfUseUsingPost
* @summary Accept Terms of Use (acceptTermsOfUse)
* @request POST:/api/signup/acceptTermsOfUse
* @secure
* @response `200` `AcceptTermsOfUseUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
acceptTermsOfUseUsingPost = (params = {}) => this.request({
    path: `/api/signup/acceptTermsOfUse`,
    method: 'POST',
    secure: true, format: "json", ...params,
});
/**
* @description Checks that current user accepted the privacy policy.
*
* @tags sign-up-controller
* @name PrivacyPolicyAcceptedUsingGet
* @summary Check privacy policy (privacyPolicyAccepted)
* @request GET:/api/signup/privacyPolicyAccepted
* @secure
* @response `200` `PrivacyPolicyAcceptedUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
privacyPolicyAcceptedUsingGet = (params = {}) => this.request({
    path: `/api/signup/privacyPolicyAccepted`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Checks that current user accepted the privacy policy.
*
* @tags sign-up-controller
* @name TermsOfUseAcceptedUsingGet
* @summary Check Terms Of User (termsOfUseAccepted)
* @request GET:/api/signup/termsOfUseAccepted
* @secure
* @response `200` `TermsOfUseAcceptedUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
termsOfUseAcceptedUsingGet = (params = {}) => this.request({
    path: `/api/signup/termsOfUseAccepted`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Get a solution template details based on the provided id Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags solution-controller
* @name GetSolutionTemplateDetailsUsingGet
* @summary Get Solution template details (getSolutionTemplateDetails)
* @request GET:/api/solutions/templates/details/{solutionTemplateId}
* @secure
* @response `200` `GetSolutionTemplateDetailsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getSolutionTemplateDetailsUsingGet = (solutionTemplateId, params = {}) => this.request({
    path: `/api/solutions/templates/details/${solutionTemplateId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Get a list of solution template descriptors Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags solution-controller
* @name GetSolutionTemplateInfosUsingGet
* @summary Get Solution templates (getSolutionTemplateInfos)
* @request GET:/api/solutions/templates/infos
* @secure
* @response `200` `GetSolutionTemplateInfosUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getSolutionTemplateInfosUsingGet = (params = {}) => this.request({
    path: `/api/solutions/templates/infos`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Get a solution template instructions based on the provided id Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags solution-controller
* @name GetSolutionTemplateInstructionsUsingGet
* @summary Get Solution Template Instructions (getSolutionTemplateInstructions)
* @request GET:/api/solutions/templates/instructions/{solutionTemplateId}
* @secure
* @response `200` `GetSolutionTemplateInstructionsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getSolutionTemplateInstructionsUsingGet = (solutionTemplateId, params = {}) => this.request({
    path: `/api/solutions/templates/instructions/${solutionTemplateId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Uninstall solution template based on the provided id Security check is performed to verify that the user has 'DELETE' permission for the entity (entities).
*
* @tags solution-controller
* @name UninstallSolutionTemplateUsingDelete
* @summary Uninstall Solution Template (uninstallSolutionTemplate)
* @request DELETE:/api/solutions/templates/{solutionTemplateId}/delete
* @secure
* @response `200` `UninstallSolutionTemplateUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
uninstallSolutionTemplateUsingDelete = (solutionTemplateId, params = {}) => this.request({
    path: `/api/solutions/templates/${solutionTemplateId}/delete`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Install solution template based on the provided id Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
*
* @tags solution-controller
* @name InstallSolutionTemplateUsingPost
* @summary Install Solution Template (installSolutionTemplate)
* @request POST:/api/solutions/templates/{solutionTemplateId}/install
* @secure
* @response `200` `InstallSolutionTemplateUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
installSolutionTemplateUsingPost = (solutionTemplateId, params = {}) => this.request({
    path: `/api/solutions/templates/${solutionTemplateId}/install`,
    method: 'POST',
    secure: true, format: "json", ...params,
});
/**
* @description Create or update the Resource. When creating the Resource, platform generates Resource id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created Resource id will be present in the response. Specify existing Resource id to update the Resource. Referencing non-existing Resource Id will cause 'Not Found' error. Resource combination of the title with the key is unique in the scope of tenant. Remove 'id', 'tenantId' from the request body example (below) to create new Resource entity. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags tb-resource-controller
* @name SaveResourceUsingPost
* @summary Create Or Update Resource (saveResource)
* @request POST:/api/resource
* @secure
* @response `200` `SaveResourceUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveResourceUsingPost = (data, params = {}) => this.request({
    path: `/api/resource`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Fetch the Resource Info object based on the provided Resource Id. Resource Info is a lightweight object that includes main information about the Resource excluding the heavyweight data. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags tb-resource-controller
* @name GetResourceInfoByIdUsingGet
* @summary Get Resource Info (getResourceInfoById)
* @request GET:/api/resource/info/{resourceId}
* @secure
* @response `200` `GetResourceInfoByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getResourceInfoByIdUsingGet = (resourceId, params = {}) => this.request({
    path: `/api/resource/info/${resourceId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Download Resource based on the provided Resource Id or return 304 status code if resource was not changed. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags tb-resource-controller
* @name DownloadJksResourceIfChangedUsingGet
* @summary Download JKS Resource (downloadJksResourceIfChanged)
* @request GET:/api/resource/jks/{resourceId}/download
* @secure
* @response `200` `DownloadJksResourceIfChangedUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
downloadJksResourceIfChangedUsingGet = (resourceId, params = {}) => this.request({
    path: `/api/resource/jks/${resourceId}/download`,
    method: 'GET',
    secure: true, ...params,
});
/**
* @description Download Resource based on the provided Resource Id or return 304 status code if resource was not changed. Available for any authorized user.
*
* @tags tb-resource-controller
* @name DownloadJsResourceIfChangedUsingGet
* @summary Download JS Resource (downloadJsResourceIfChanged)
* @request GET:/api/resource/js/{resourceId}/download
* @secure
* @response `200` `DownloadJsResourceIfChangedUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
downloadJsResourceIfChangedUsingGet = (resourceId, params = {}) => this.request({
    path: `/api/resource/js/${resourceId}/download`,
    method: 'GET',
    secure: true, ...params,
});
/**
* @description Returns a page of LwM2M objects parsed from Resources with type 'LWM2M_MODEL' owned by tenant or sysadmin. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. LwM2M Object is a object that includes information about the LwM2M model which can be used in transport configuration for the LwM2M device profile. Available for users with 'TENANT_ADMIN' authority.
*
* @tags tb-resource-controller
* @name GetLwm2MListObjectsPageUsingGet
* @summary Get LwM2M Objects (getLwm2mListObjectsPage)
* @request GET:/api/resource/lwm2m/page{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetLwm2MListObjectsPageUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getLwm2MListObjectsPageUsingGet = (query, params = {}) => this.request({
    path: `/api/resource/lwm2m/page`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Download Resource based on the provided Resource Id or return 304 status code if resource was not changed. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags tb-resource-controller
* @name DownloadLwm2MResourceIfChangedUsingGet
* @summary Download LWM2M Resource (downloadLwm2mResourceIfChanged)
* @request GET:/api/resource/lwm2m/{resourceId}/download
* @secure
* @response `200` `DownloadLwm2MResourceIfChangedUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
downloadLwm2MResourceIfChangedUsingGet = (resourceId, params = {}) => this.request({
    path: `/api/resource/lwm2m/${resourceId}/download`,
    method: 'GET',
    secure: true, ...params,
});
/**
* @description Returns a page of LwM2M objects parsed from Resources with type 'LWM2M_MODEL' owned by tenant or sysadmin. You can specify parameters to filter the results. LwM2M Object is a object that includes information about the LwM2M model which can be used in transport configuration for the LwM2M device profile. Available for users with 'TENANT_ADMIN' authority.
*
* @tags tb-resource-controller
* @name GetLwm2MListObjectsUsingGet
* @summary Get LwM2M Objects (getLwm2mListObjects)
* @request GET:/api/resource/lwm2m{?objectIds,sortOrder,sortProperty}
* @secure
* @response `200` `GetLwm2MListObjectsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getLwm2MListObjectsUsingGet = (query, params = {}) => this.request({
    path: `/api/resource/lwm2m`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Download Resource based on the provided Resource Id or return 304 status code if resource was not changed. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags tb-resource-controller
* @name DownloadPkcs12ResourceIfChangedUsingGet
* @summary Download PKCS_12 Resource (downloadPkcs12ResourceIfChanged)
* @request GET:/api/resource/pkcs12/{resourceId}/download
* @secure
* @response `200` `DownloadPkcs12ResourceIfChangedUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
downloadPkcs12ResourceIfChangedUsingGet = (resourceId, params = {}) => this.request({
    path: `/api/resource/pkcs12/${resourceId}/download`,
    method: 'GET',
    secure: true, ...params,
});
/**
* @description Returns a page of Resource Info objects owned by tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Resource Info is a lightweight object that includes main information about the Resource excluding the heavyweight data. Available for users with 'TENANT_ADMIN' authority.
*
* @tags tb-resource-controller
* @name GetTenantResourcesUsingGet
* @summary Get All Resource Infos (getAllResources)
* @request GET:/api/resource/tenant{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetTenantResourcesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantResourcesUsingGet = (query, params = {}) => this.request({
    path: `/api/resource/tenant`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Deletes the Resource. Referencing non-existing Resource Id will cause an error. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags tb-resource-controller
* @name DeleteResourceUsingDelete
* @summary Delete Resource (deleteResource)
* @request DELETE:/api/resource/{resourceId}
* @secure
* @response `200` `DeleteResourceUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteResourceUsingDelete = (resourceId, params = {}) => this.request({
    path: `/api/resource/${resourceId}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Download Resource based on the provided Resource Id. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags tb-resource-controller
* @name DownloadResourceUsingGet
* @summary Download Resource (downloadResource)
* @request GET:/api/resource/{resourceId}/download
* @secure
* @response `200` `DownloadResourceUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
downloadResourceUsingGet = (resourceId, params = {}) => this.request({
    path: `/api/resource/${resourceId}/download`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Returns a page of Resource Info objects owned by tenant or sysadmin. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Resource Info is a lightweight object that includes main information about the Resource excluding the heavyweight data. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags tb-resource-controller
* @name GetResourcesUsingGet
* @summary Get Resource Infos (getResources)
* @request GET:/api/resource{?page,pageSize,resourceType,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetResourcesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getResourcesUsingGet = (query, params = {}) => this.request({
    path: `/api/resource`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Creates or updates the device attributes based on device id and specified attribute scope. The request payload is a JSON object with key-value format of attributes to create or update. For example: ```json { "stringKey":"value1", "booleanKey":true, "doubleKey":42.0, "longKey":73, "jsonKey": { "someNumber": 42, "someArray": [1,2,3], "someNestedObject": {"key": "value"} } } ``` Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags telemetry-controller
* @name SaveDeviceAttributesUsingPost
* @summary Save device attributes (saveDeviceAttributes)
* @request POST:/api/plugins/telemetry/{deviceId}/{scope}
* @secure
* @response `200` `SaveDeviceAttributesUsingPostData` Attribute from the request was created or updated. Platform creates an audit log event about device attributes updates with action type 'ATTRIBUTES_UPDATED', and also sends event msg to the rule engine with msg type 'ATTRIBUTES_UPDATED'.
* @response `400` `ThingsboardErrorResponse` Invalid structure of the request or invalid attributes scope provided.
* @response `401` `ThingsboardErrorResponse` User is not authorized to save device attributes for selected device. Most likely, User belongs to different Customer or Tenant.
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
* @response `500` `void` The exception was thrown during processing the request. Platform creates an audit log event about device attributes updates with action type 'ATTRIBUTES_UPDATED' that includes an error stacktrace.
*/
saveDeviceAttributesUsingPost = (deviceId, scope, data, params = {}) => this.request({
    path: `/api/plugins/telemetry/${deviceId}/${scope}`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Delete device attributes using provided Device Id, scope and a list of keys. Referencing a non-existing Device Id will cause an error Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags telemetry-controller
* @name DeleteDeviceAttributesUsingDelete
* @summary Delete device attributes (deleteDeviceAttributes)
* @request DELETE:/api/plugins/telemetry/{deviceId}/{scope}{?keys}
* @secure
* @response `200` `DeleteDeviceAttributesUsingDeleteData` Device attributes was removed for the selected keys in the request. Platform creates an audit log event about device attributes removal with action type 'ATTRIBUTES_DELETED'.
* @response `400` `ThingsboardErrorResponse` Platform returns a bad request in case if keys or scope are not specified.
* @response `401` `ThingsboardErrorResponse` User is not authorized to delete device attributes for selected entity. Most likely, User belongs to different Customer or Tenant.
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
* @response `500` `void` The exception was thrown during processing the request. Platform creates an audit log event about device attributes removal with action type 'ATTRIBUTES_DELETED' that includes an error stacktrace.
*/
deleteDeviceAttributesUsingDelete = ({ deviceId, scope, ...query }, params = {}) => this.request({
    path: `/api/plugins/telemetry/${deviceId}/${scope}`,
    method: 'DELETE',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Creates or updates the entity attributes based on Entity Id and the specified attribute scope.  List of possible attribute scopes depends on the entity type: * SERVER_SCOPE - supported for all entity types; * SHARED_SCOPE - supported for devices. The request payload is a JSON object with key-value format of attributes to create or update. For example: ```json { "stringKey":"value1", "booleanKey":true, "doubleKey":42.0, "longKey":73, "jsonKey": { "someNumber": 42, "someArray": [1,2,3], "someNestedObject": {"key": "value"} } } ``` Referencing a non-existing entity Id or invalid entity type will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags telemetry-controller
* @name SaveEntityAttributesV2UsingPost
* @summary Save entity attributes (saveEntityAttributesV2)
* @request POST:/api/plugins/telemetry/{entityType}/{entityId}/attributes/{scope}
* @secure
* @response `200` `SaveEntityAttributesV2UsingPostData` Attribute from the request was created or updated. Platform creates an audit log event about entity attributes updates with action type 'ATTRIBUTES_UPDATED', and also sends event msg to the rule engine with msg type 'ATTRIBUTES_UPDATED'.
* @response `400` `ThingsboardErrorResponse` Invalid structure of the request or invalid attributes scope provided.
* @response `401` `ThingsboardErrorResponse` User is not authorized to save entity attributes for selected entity. Most likely, User belongs to different Customer or Tenant.
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
* @response `500` `void` The exception was thrown during processing the request. Platform creates an audit log event about entity attributes updates with action type 'ATTRIBUTES_UPDATED' that includes an error stacktrace.
*/
saveEntityAttributesV2UsingPost = (entityType, entityId, scope, data, params = {}) => this.request({
    path: `/api/plugins/telemetry/${entityType}/${entityId}/attributes/${scope}`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Returns a set of unique attribute key names for the selected entity. The response will include merged key names set for all attribute scopes: * SERVER_SCOPE - supported for all entity types; * CLIENT_SCOPE - supported for devices; * SHARED_SCOPE - supported for devices. Referencing a non-existing entity Id or invalid entity type will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags telemetry-controller
* @name GetAttributeKeysUsingGet
* @summary Get all attribute keys (getAttributeKeys)
* @request GET:/api/plugins/telemetry/{entityType}/{entityId}/keys/attributes
* @secure
* @response `200` `GetAttributeKeysUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getAttributeKeysUsingGet = (entityType, entityId, params = {}) => this.request({
    path: `/api/plugins/telemetry/${entityType}/${entityId}/keys/attributes`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Returns a set of unique attribute key names for the selected entity and attributes scope: * SERVER_SCOPE - supported for all entity types; * CLIENT_SCOPE - supported for devices; * SHARED_SCOPE - supported for devices. Referencing a non-existing entity Id or invalid entity type will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags telemetry-controller
* @name GetAttributeKeysByScopeUsingGet
* @summary Get all attribute keys by scope (getAttributeKeysByScope)
* @request GET:/api/plugins/telemetry/{entityType}/{entityId}/keys/attributes/{scope}
* @secure
* @response `200` `GetAttributeKeysByScopeUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getAttributeKeysByScopeUsingGet = (entityType, entityId, scope, params = {}) => this.request({
    path: `/api/plugins/telemetry/${entityType}/${entityId}/keys/attributes/${scope}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Returns a set of unique time-series key names for the selected entity. Referencing a non-existing entity Id or invalid entity type will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags telemetry-controller
* @name GetTimeseriesKeysUsingGet1
* @summary Get time-series keys (getTimeseriesKeys)
* @request GET:/api/plugins/telemetry/{entityType}/{entityId}/keys/timeseries
* @secure
* @response `200` `GetTimeseriesKeysUsingGet1Data` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTimeseriesKeysUsingGet1 = (entityType, entityId, params = {}) => this.request({
    path: `/api/plugins/telemetry/${entityType}/${entityId}/keys/timeseries`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Delete time-series for selected entity based on entity id, entity type and keys. Use 'deleteAllDataForKeys' to delete all time-series data. Use 'startTs' and 'endTs' to specify time-range instead.  Use 'deleteLatest' to delete latest value (stored in separate table for performance) if the value's timestamp matches the time-range.  Use 'rewriteLatestIfDeleted' to rewrite latest value (stored in separate table for performance) if the value's timestamp matches the time-range and 'deleteLatest' param is true. The replacement value will be fetched from the 'time-series' table, and its timestamp will be the most recent one before the defined time-range. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags telemetry-controller
* @name DeleteEntityTimeseriesUsingDelete
* @summary Delete entity time-series data (deleteEntityTimeseries)
* @request DELETE:/api/plugins/telemetry/{entityType}/{entityId}/timeseries/delete{?deleteAllDataForKeys,deleteLatest,endTs,keys,rewriteLatestIfDeleted,startTs}
* @secure
* @response `200` `DeleteEntityTimeseriesUsingDeleteData` Timeseries for the selected keys in the request was removed. Platform creates an audit log event about entity timeseries removal with action type 'TIMESERIES_DELETED'.
* @response `400` `ThingsboardErrorResponse` Platform returns a bad request in case if keys list is empty or start and end timestamp values is empty when deleteAllDataForKeys is set to false.
* @response `401` `ThingsboardErrorResponse` User is not authorized to delete entity timeseries for selected entity. Most likely, User belongs to different Customer or Tenant.
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
* @response `500` `void` The exception was thrown during processing the request. Platform creates an audit log event about entity timeseries removal with action type 'TIMESERIES_DELETED' that includes an error stacktrace.
*/
deleteEntityTimeseriesUsingDelete = ({ entityType, entityId, ...query }, params = {}) => this.request({
    path: `/api/plugins/telemetry/${entityType}/${entityId}/timeseries/delete`,
    method: 'DELETE',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Creates or updates the entity time-series data based on the Entity Id and request payload.The request payload is a JSON document with three possible formats: Simple format without timestamp. In such a case, current server time will be used: ```json {"temperature": 26} ``` Single JSON object with timestamp: ```json {"ts":1634712287000,"values":{"temperature":26, "humidity":87}} ``` JSON array with timestamps: ```json [{"ts":1634712287000,"values":{"temperature":26, "humidity":87}}, {"ts":1634712588000,"values":{"temperature":25, "humidity":88}}] ``` The scope parameter is not used in the API call implementation but should be specified whatever value because it is used as a path variable. The ttl parameter takes affect only in case of Cassandra DB.Referencing a non-existing entity Id or invalid entity type will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags telemetry-controller
* @name SaveEntityTelemetryWithTtlUsingPost
* @summary Save or update time-series data with TTL (saveEntityTelemetryWithTTL)
* @request POST:/api/plugins/telemetry/{entityType}/{entityId}/timeseries/{scope}/{ttl}?scope=ANY
* @secure
* @response `200` `SaveEntityTelemetryWithTtlUsingPostData` Timeseries from the request was created or updated. Platform creates an audit log event about entity timeseries updates with action type 'TIMESERIES_UPDATED'.
* @response `400` `ThingsboardErrorResponse` Invalid structure of the request
* @response `401` `ThingsboardErrorResponse` User is not authorized to save entity timeseries for selected entity. Most likely, User belongs to different Customer or Tenant.
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
* @response `500` `void` The exception was thrown during processing the request. Platform creates an audit log event about entity timeseries updates with action type 'TIMESERIES_UPDATED' that includes an error stacktrace.
*/
saveEntityTelemetryWithTtlUsingPost = (entityType, entityId, scope, ttl, data, params = {}) => this.request({
    path: `/api/plugins/telemetry/${entityType}/${entityId}/timeseries/${scope}/${ttl}?scope=ANY`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Creates or updates the entity time-series data based on the Entity Id and request payload.The request payload is a JSON document with three possible formats: Simple format without timestamp. In such a case, current server time will be used: ```json {"temperature": 26} ``` Single JSON object with timestamp: ```json {"ts":1634712287000,"values":{"temperature":26, "humidity":87}} ``` JSON array with timestamps: ```json [{"ts":1634712287000,"values":{"temperature":26, "humidity":87}}, {"ts":1634712588000,"values":{"temperature":25, "humidity":88}}] ``` The scope parameter is not used in the API call implementation but should be specified whatever value because it is used as a path variable. Referencing a non-existing entity Id or invalid entity type will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags telemetry-controller
* @name SaveEntityTelemetryUsingPost
* @summary Save or update time-series data (saveEntityTelemetry)
* @request POST:/api/plugins/telemetry/{entityType}/{entityId}/timeseries/{scope}?scope=ANY
* @secure
* @response `200` `SaveEntityTelemetryUsingPostData` Timeseries from the request was created or updated. Platform creates an audit log event about entity timeseries updates with action type 'TIMESERIES_UPDATED'.
* @response `400` `ThingsboardErrorResponse` Invalid structure of the request
* @response `401` `ThingsboardErrorResponse` User is not authorized to save entity timeseries for selected entity. Most likely, User belongs to different Customer or Tenant.
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
* @response `500` `void` The exception was thrown during processing the request. Platform creates an audit log event about entity timeseries updates with action type 'TIMESERIES_UPDATED' that includes an error stacktrace.
*/
saveEntityTelemetryUsingPost = (entityType, entityId, scope, data, params = {}) => this.request({
    path: `/api/plugins/telemetry/${entityType}/${entityId}/timeseries/${scope}?scope=ANY`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Returns all attributes of a specified scope that belong to specified entity. List of possible attribute scopes depends on the entity type: * SERVER_SCOPE - supported for all entity types; * SHARED_SCOPE - supported for devices; * CLIENT_SCOPE - supported for devices. Use optional 'keys' parameter to return specific attributes. Example of the result: ```json [ {"key": "stringAttributeKey", "value": "value", "lastUpdateTs": 1609459200000}, {"key": "booleanAttributeKey", "value": false, "lastUpdateTs": 1609459200001}, {"key": "doubleAttributeKey", "value": 42.2, "lastUpdateTs": 1609459200002}, {"key": "longKeyExample", "value": 73, "lastUpdateTs": 1609459200003}, {"key": "jsonKeyExample", "value": { "someNumber": 42, "someArray": [1,2,3], "someNestedObject": {"key": "value"} }, "lastUpdateTs": 1609459200004 } ] ``` Referencing a non-existing entity Id or invalid entity type will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags telemetry-controller
* @name GetAttributesByScopeUsingGet
* @summary Get attributes by scope (getAttributesByScope)
* @request GET:/api/plugins/telemetry/{entityType}/{entityId}/values/attributes/{scope}{?keys}
* @secure
* @response `200` `GetAttributesByScopeUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getAttributesByScopeUsingGet = ({ entityType, entityId, scope, ...query }, params = {}) => this.request({
    path: `/api/plugins/telemetry/${entityType}/${entityId}/values/attributes/${scope}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns all attributes that belong to specified entity. Use optional 'keys' parameter to return specific attributes. Example of the result: ```json [ {"key": "stringAttributeKey", "value": "value", "lastUpdateTs": 1609459200000}, {"key": "booleanAttributeKey", "value": false, "lastUpdateTs": 1609459200001}, {"key": "doubleAttributeKey", "value": 42.2, "lastUpdateTs": 1609459200002}, {"key": "longKeyExample", "value": 73, "lastUpdateTs": 1609459200003}, {"key": "jsonKeyExample", "value": { "someNumber": 42, "someArray": [1,2,3], "someNestedObject": {"key": "value"} }, "lastUpdateTs": 1609459200004 } ] ``` Referencing a non-existing entity Id or invalid entity type will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags telemetry-controller
* @name GetAttributesUsingGet
* @summary Get attributes (getAttributes)
* @request GET:/api/plugins/telemetry/{entityType}/{entityId}/values/attributes{?keys}
* @secure
* @response `200` `GetAttributesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getAttributesUsingGet = ({ entityType, entityId, ...query }, params = {}) => this.request({
    path: `/api/plugins/telemetry/${entityType}/${entityId}/values/attributes`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a range of time-series values for specified entity. Returns not aggregated data by default. Use aggregation function ('agg') and aggregation interval ('interval') to enable aggregation of the results on the database / server side. The aggregation is generally more efficient then fetching all records. ```json { "temperature": [ { "value": 36.7, "ts": 1609459200000 }, { "value": 36.6, "ts": 1609459201000 } ] } ``` Referencing a non-existing entity Id or invalid entity type will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags telemetry-controller
* @name GetTimeseriesUsingGet
* @summary Get time-series data (getTimeseries)
* @request GET:/api/plugins/telemetry/{entityType}/{entityId}/values/timeseries{?agg,endTs,interval,keys,limit,orderBy,startTs,useStrictDataTypes}
* @secure
* @response `200` `GetTimeseriesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTimeseriesUsingGet = ({ entityType, entityId, ...query }, params = {}) => this.request({
    path: `/api/plugins/telemetry/${entityType}/${entityId}/values/timeseries`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns all time-series that belong to specified entity. Use optional 'keys' parameter to return specific time-series. The result is a JSON object. The format of the values depends on the 'useStrictDataTypes' parameter. By default, all time-series values are converted to strings: ```json { "stringTsKey": [{ "value": "value", "ts": 1609459200000}], "booleanTsKey": [{ "value": "false", "ts": 1609459200000}], "doubleTsKey": [{ "value": "42.2", "ts": 1609459200000}], "longTsKey": [{ "value": "73", "ts": 1609459200000}], "jsonTsKey": [{ "value": "{\"someNumber\": 42,\"someArray\": [1,2,3],\"someNestedObject\": {\"key\": \"value\"}}", "ts": 1609459200000}] } ``` However, it is possible to request the values without conversion ('useStrictDataTypes'=true): ```json { "stringTsKey": [{ "value": "value", "ts": 1609459200000}], "booleanTsKey": [{ "value": false, "ts": 1609459200000}], "doubleTsKey": [{ "value": 42.2, "ts": 1609459200000}], "longTsKey": [{ "value": 73, "ts": 1609459200000}], "jsonTsKey": [{ "value": { "someNumber": 42, "someArray": [1,2,3], "someNestedObject": {"key": "value"} }, "ts": 1609459200000}] } ``` Referencing a non-existing entity Id or invalid entity type will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags telemetry-controller
* @name GetLatestTimeseriesUsingGet
* @summary Get latest time-series value (getLatestTimeseries)
* @request GET:/api/plugins/telemetry/{entityType}/{entityId}/values/timeseries{?keys,useStrictDataTypes}
* @secure
* @response `200` `GetLatestTimeseriesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getLatestTimeseriesUsingGet = ({ entityType, entityId, ...query }, params = {}) => this.request({
    path: `/api/plugins/telemetry/${entityType}/${entityId}/values/timeseries`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Creates or updates the entity attributes based on Entity Id and the specified attribute scope.  List of possible attribute scopes depends on the entity type: * SERVER_SCOPE - supported for all entity types; * SHARED_SCOPE - supported for devices. The request payload is a JSON object with key-value format of attributes to create or update. For example: ```json { "stringKey":"value1", "booleanKey":true, "doubleKey":42.0, "longKey":73, "jsonKey": { "someNumber": 42, "someArray": [1,2,3], "someNestedObject": {"key": "value"} } } ``` Referencing a non-existing entity Id or invalid entity type will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags telemetry-controller
* @name SaveEntityAttributesV1UsingPost
* @summary Save entity attributes (saveEntityAttributesV1)
* @request POST:/api/plugins/telemetry/{entityType}/{entityId}/{scope}
* @secure
* @response `200` `SaveEntityAttributesV1UsingPostData` Attribute from the request was created or updated. Platform creates an audit log event about entity attributes updates with action type 'ATTRIBUTES_UPDATED', and also sends event msg to the rule engine with msg type 'ATTRIBUTES_UPDATED'.
* @response `400` `ThingsboardErrorResponse` Invalid structure of the request or invalid attributes scope provided.
* @response `401` `ThingsboardErrorResponse` User is not authorized to save entity attributes for selected entity. Most likely, User belongs to different Customer or Tenant.
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
* @response `500` `void` The exception was thrown during processing the request. Platform creates an audit log event about entity attributes updates with action type 'ATTRIBUTES_UPDATED' that includes an error stacktrace.
*/
saveEntityAttributesV1UsingPost = (entityType, entityId, scope, data, params = {}) => this.request({
    path: `/api/plugins/telemetry/${entityType}/${entityId}/${scope}`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Delete entity attributes using provided Entity Id, scope and a list of keys. Referencing a non-existing entity Id or invalid entity type will cause an error. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags telemetry-controller
* @name DeleteEntityAttributesUsingDelete
* @summary Delete entity attributes (deleteEntityAttributes)
* @request DELETE:/api/plugins/telemetry/{entityType}/{entityId}/{scope}{?keys}
* @secure
* @response `200` `DeleteEntityAttributesUsingDeleteData` Entity attributes was removed for the selected keys in the request. Platform creates an audit log event about entity attributes removal with action type 'ATTRIBUTES_DELETED'.
* @response `400` `ThingsboardErrorResponse` Platform returns a bad request in case if keys or scope are not specified.
* @response `401` `ThingsboardErrorResponse` User is not authorized to delete entity attributes for selected entity. Most likely, User belongs to different Customer or Tenant.
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
* @response `500` `void` The exception was thrown during processing the request. Platform creates an audit log event about entity attributes removal with action type 'ATTRIBUTES_DELETED' that includes an error stacktrace.
*/
deleteEntityAttributesUsingDelete = ({ entityType, entityId, scope, ...query }, params = {}) => this.request({
    path: `/api/plugins/telemetry/${entityType}/${entityId}/${scope}`,
    method: 'DELETE',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Create or update the Tenant. When creating tenant, platform generates Tenant Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). Default Rule Chain and Device profile are also generated for the new tenants automatically. The newly created Tenant Id will be present in the response. Specify existing Tenant Id id to update the Tenant. Referencing non-existing Tenant Id will cause 'Not Found' error.Remove 'id', 'tenantId' from the request body example (below) to create new Tenant entity. Available for users with 'SYS_ADMIN' authority.
*
* @tags tenant-controller
* @name SaveTenantUsingPost
* @summary Create Or update Tenant (saveTenant)
* @request POST:/api/tenant
* @secure
* @response `200` `SaveTenantUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveTenantUsingPost = (data, params = {}) => this.request({
    path: `/api/tenant`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Fetch the Tenant Info object based on the provided Tenant Id. The Tenant Info object extends regular Tenant object and includes Tenant Profile name. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags tenant-controller
* @name GetTenantInfoByIdUsingGet
* @summary Get Tenant Info (getTenantInfoById)
* @request GET:/api/tenant/info/{tenantId}
* @secure
* @response `200` `GetTenantInfoByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantInfoByIdUsingGet = (tenantId, params = {}) => this.request({
    path: `/api/tenant/info/${tenantId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Fetch the Tenant object based on the provided Tenant Id. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags tenant-controller
* @name GetTenantByIdUsingGet
* @summary Get Tenant (getTenantById)
* @request GET:/api/tenant/{tenantId}
* @secure
* @response `200` `GetTenantByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantByIdUsingGet = (tenantId, params = {}) => this.request({
    path: `/api/tenant/${tenantId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Deletes the tenant, it's customers, rule chains, devices and all other related entities. Referencing non-existing tenant Id will cause an error. Available for users with 'SYS_ADMIN' authority.
*
* @tags tenant-controller
* @name DeleteTenantUsingDelete
* @summary Delete Tenant (deleteTenant)
* @request DELETE:/api/tenant/{tenantId}
* @secure
* @response `200` `DeleteTenantUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteTenantUsingDelete = (tenantId, params = {}) => this.request({
    path: `/api/tenant/${tenantId}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Returns a page of tenant info objects registered in the platform. The Tenant Info object extends regular Tenant object and includes Tenant Profile name. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'SYS_ADMIN' authority.
*
* @tags tenant-controller
* @name GetTenantInfosUsingGet
* @summary Get Tenants Info (getTenants)
* @request GET:/api/tenantInfos{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetTenantInfosUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantInfosUsingGet = (query, params = {}) => this.request({
    path: `/api/tenantInfos`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of tenants registered in the platform. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'SYS_ADMIN' authority.
*
* @tags tenant-controller
* @name GetTenantsUsingGet
* @summary Get Tenants (getTenants)
* @request GET:/api/tenants{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetTenantsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantsUsingGet = (query, params = {}) => this.request({
    path: `/api/tenants`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* No description
*
* @tags tenant-controller
* @name GetTenantsByIdsUsingGet
* @summary getTenantsByIds
* @request GET:/api/tenants{?tenantIds}
* @secure
* @response `200` `GetTenantsByIdsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantsByIdsUsingGet = (query, params = {}) => this.request({
    path: `/api/tenants`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Create or update the Tenant Profile. When creating tenant profile, platform generates Tenant Profile Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created Tenant Profile Id will be present in the response. Specify existing Tenant Profile Id id to update the Tenant Profile. Referencing non-existing Tenant Profile Id will cause 'Not Found' error. Update of the tenant profile configuration will cause immediate recalculation of API limits for all affected Tenants. The **'profileData'** object is the part of Tenant Profile that defines API limits and Rate limits. You have an ability to define maximum number of devices ('maxDevice'), assets ('maxAssets') and other entities. You may also define maximum number of messages to be processed per month ('maxTransportMessages', 'maxREExecutions', etc). The '*RateLimit' defines the rate limits using simple syntax. For example, '1000:1,20000:60' means up to 1000 events per second but no more than 20000 event per minute. Let's review the example of tenant profile data below: ```json { "name": "Default", "description": "Default tenant profile", "isolatedTbRuleEngine": false, "profileData": { "configuration": { "type": "DEFAULT", "maxDevices": 0, "maxAssets": 0, "maxCustomers": 0, "maxUsers": 0, "maxDashboards": 0, "maxRuleChains": 0, "maxResourcesInBytes": 0, "maxOtaPackagesInBytes": 0, "maxResourceSize": 0, "transportTenantMsgRateLimit": "1000:1,20000:60", "transportTenantTelemetryMsgRateLimit": "1000:1,20000:60", "transportTenantTelemetryDataPointsRateLimit": "1000:1,20000:60", "transportDeviceMsgRateLimit": "20:1,600:60", "transportDeviceTelemetryMsgRateLimit": "20:1,600:60", "transportDeviceTelemetryDataPointsRateLimit": "20:1,600:60", "maxTransportMessages": 10000000, "maxTransportDataPoints": 10000000, "maxREExecutions": 4000000, "maxJSExecutions": 5000000, "maxDPStorageDays": 0, "maxRuleNodeExecutionsPerMessage": 50, "maxEmails": 0, "maxSms": 0, "maxCreatedAlarms": 1000, "defaultStorageTtlDays": 0, "alarmsTtlDays": 0, "rpcTtlDays": 0, "queueStatsTtlDays": 0, "ruleEngineExceptionsTtlDays": 0, "warnThreshold": 0 } }, "default": true } ```Remove 'id', from the request body example (below) to create new Tenant Profile entity. Available for users with 'SYS_ADMIN' authority.
*
* @tags tenant-profile-controller
* @name SaveTenantProfileUsingPost
* @summary Create Or update Tenant Profile (saveTenantProfile)
* @request POST:/api/tenantProfile
* @secure
* @response `200` `SaveTenantProfileUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveTenantProfileUsingPost = (data, params = {}) => this.request({
    path: `/api/tenantProfile`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Fetch the Tenant Profile object based on the provided Tenant Profile Id. Available for users with 'SYS_ADMIN' authority.
*
* @tags tenant-profile-controller
* @name GetTenantProfileByIdUsingGet
* @summary Get Tenant Profile (getTenantProfileById)
* @request GET:/api/tenantProfile/{tenantProfileId}
* @secure
* @response `200` `GetTenantProfileByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantProfileByIdUsingGet = (tenantProfileId, params = {}) => this.request({
    path: `/api/tenantProfile/${tenantProfileId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Deletes the tenant profile. Referencing non-existing tenant profile Id will cause an error. Referencing profile that is used by the tenants will cause an error. Available for users with 'SYS_ADMIN' authority.
*
* @tags tenant-profile-controller
* @name DeleteTenantProfileUsingDelete
* @summary Delete Tenant Profile (deleteTenantProfile)
* @request DELETE:/api/tenantProfile/{tenantProfileId}
* @secure
* @response `200` `DeleteTenantProfileUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteTenantProfileUsingDelete = (tenantProfileId, params = {}) => this.request({
    path: `/api/tenantProfile/${tenantProfileId}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Makes specified tenant profile to be default. Referencing non-existing tenant profile Id will cause an error. Available for users with 'SYS_ADMIN' authority.
*
* @tags tenant-profile-controller
* @name SetDefaultTenantProfileUsingPost
* @summary Make tenant profile default (setDefaultTenantProfile)
* @request POST:/api/tenantProfile/{tenantProfileId}/default
* @secure
* @response `200` `SetDefaultTenantProfileUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
setDefaultTenantProfileUsingPost = (tenantProfileId, params = {}) => this.request({
    path: `/api/tenantProfile/${tenantProfileId}/default`,
    method: 'POST',
    secure: true, format: "json", ...params,
});
/**
* @description Fetch the default Tenant Profile Info object based. Tenant Profile Info is a lightweight object that contains only id and name of the profile. Available for users with 'SYS_ADMIN' authority.
*
* @tags tenant-profile-controller
* @name GetDefaultTenantProfileInfoUsingGet
* @summary Get default Tenant Profile Info (getDefaultTenantProfileInfo)
* @request GET:/api/tenantProfileInfo/default
* @secure
* @response `200` `GetDefaultTenantProfileInfoUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getDefaultTenantProfileInfoUsingGet = (params = {}) => this.request({
    path: `/api/tenantProfileInfo/default`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Fetch the Tenant Profile Info object based on the provided Tenant Profile Id. Tenant Profile Info is a lightweight object that contains only id and name of the profile. Available for users with 'SYS_ADMIN' authority.
*
* @tags tenant-profile-controller
* @name GetTenantProfileInfoByIdUsingGet
* @summary Get Tenant Profile Info (getTenantProfileInfoById)
* @request GET:/api/tenantProfileInfo/{tenantProfileId}
* @secure
* @response `200` `GetTenantProfileInfoByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantProfileInfoByIdUsingGet = (tenantProfileId, params = {}) => this.request({
    path: `/api/tenantProfileInfo/${tenantProfileId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Returns a page of tenant profile info objects registered in the platform. Tenant Profile Info is a lightweight object that contains only id and name of the profile. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'SYS_ADMIN' authority.
*
* @tags tenant-profile-controller
* @name GetTenantProfileInfosUsingGet
* @summary Get Tenant Profiles Info (getTenantProfileInfos)
* @request GET:/api/tenantProfileInfos{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetTenantProfileInfosUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantProfileInfosUsingGet = (query, params = {}) => this.request({
    path: `/api/tenantProfileInfos`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* No description
*
* @tags tenant-profile-controller
* @name GetTenantProfilesByIdsUsingGet
* @summary getTenantProfilesByIds
* @request GET:/api/tenantProfiles{?ids}
* @secure
* @response `200` `GetTenantProfilesByIdsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantProfilesByIdsUsingGet = (query, params = {}) => this.request({
    path: `/api/tenantProfiles`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of tenant profiles registered in the platform. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'SYS_ADMIN' authority.
*
* @tags tenant-profile-controller
* @name GetTenantProfilesUsingGet
* @summary Get Tenant Profiles (getTenantProfiles)
* @request GET:/api/tenantProfiles{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetTenantProfilesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantProfilesUsingGet = (query, params = {}) => this.request({
    path: `/api/tenantProfiles`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Generate new 2FA account config template for specified provider type. For TOTP, this will return a corresponding account config template with a generated OTP auth URL (with new random secret key for each API call) that can be then converted to a QR code to scan with an authenticator app. Example: ``` { "providerType": "TOTP", "useByDefault": false, "authUrl": "otpauth://totp/TB%202FA:tenant@thingsboard.org?issuer=TB+2FA&secret=PNJDNWJVAK4ZTUYT7RFGPQLXA7XGU7PX" } ``` For EMAIL, the generated config will contain email from user's account: ``` { "providerType": "EMAIL", "useByDefault": false, "email": "tenant@thingsboard.org" } ``` For SMS 2FA this method will just return a config with empty/default values as there is nothing to generate/preset: ``` { "providerType": "SMS", "useByDefault": false, "phoneNumber": null } ``` Will throw an error (Bad Request) if the provider is not configured for usage. Available for any authorized user.
*
* @tags two-factor-auth-config-controller
* @name GenerateTwoFaAccountConfigUsingPost
* @summary Generate 2FA account config (generateTwoFaAccountConfig)
* @request POST:/api/2fa/account/config/generate{?providerType}
* @secure
* @response `200` `GenerateTwoFaAccountConfigUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
generateTwoFaAccountConfigUsingPost = (query, params = {}) => this.request({
    path: `/api/2fa/account/config/generate`,
    method: 'POST',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Submit 2FA account config to prepare for a future verification. Basically, this method will send a verification code for a given account config, if this has sense for a chosen 2FA provider. This code is needed to then verify and save the account config. Example of EMAIL 2FA account config: ``` { "providerType": "EMAIL", "useByDefault": true, "email": "separate-email-for-2fa@thingsboard.org" } ``` Example of SMS 2FA account config: ``` { "providerType": "SMS", "useByDefault": false, "phoneNumber": "+38012312321" } ``` For TOTP this method does nothing. Will throw an error (Bad Request) if submitted account config is not valid, or if the provider is not configured for usage. Available for any authorized user.
*
* @tags two-factor-auth-config-controller
* @name SubmitTwoFaAccountConfigUsingPost
* @summary Submit 2FA account config (submitTwoFaAccountConfig)
* @request POST:/api/2fa/account/config/submit
* @secure
* @response `200` `SubmitTwoFaAccountConfigUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
submitTwoFaAccountConfigUsingPost = (data, params = {}) => this.request({
    path: `/api/2fa/account/config/submit`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, ...params,
});
/**
* @description Update config for a given provider type. Update request example: ``` { "useByDefault": true } ``` Returns whole account's 2FA settings object. Available for any authorized user.
*
* @tags two-factor-auth-config-controller
* @name UpdateTwoFaAccountConfigUsingPut
* @summary Update 2FA account config (updateTwoFaAccountConfig)
* @request PUT:/api/2fa/account/config{?providerType}
* @secure
* @response `200` `UpdateTwoFaAccountConfigUsingPutData` OK
* @response `201` `void` Created
* @response `401` `void` Unauthorized
* @response `403` `void` Forbidden
* @response `404` `void` Not Found
*/
updateTwoFaAccountConfigUsingPut = (query, data, params = {}) => this.request({
    path: `/api/2fa/account/config`,
    method: 'PUT',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Delete 2FA config for a given 2FA provider type. Returns whole account's 2FA settings object. Available for any authorized user.
*
* @tags two-factor-auth-config-controller
* @name DeleteTwoFaAccountConfigUsingDelete
* @summary Delete 2FA account config (deleteTwoFaAccountConfig)
* @request DELETE:/api/2fa/account/config{?providerType}
* @secure
* @response `200` `DeleteTwoFaAccountConfigUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteTwoFaAccountConfigUsingDelete = (query, params = {}) => this.request({
    path: `/api/2fa/account/config`,
    method: 'DELETE',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Checks the verification code for submitted config, and if it is correct, saves the provided account config. Returns whole account's 2FA settings object. Will throw an error (Bad Request) if the provider is not configured for usage. Available for any authorized user.
*
* @tags two-factor-auth-config-controller
* @name VerifyAndSaveTwoFaAccountConfigUsingPost
* @summary Verify and save 2FA account config (verifyAndSaveTwoFaAccountConfig)
* @request POST:/api/2fa/account/config{?verificationCode}
* @secure
* @response `200` `VerifyAndSaveTwoFaAccountConfigUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
verifyAndSaveTwoFaAccountConfigUsingPost = (query, data, params = {}) => this.request({
    path: `/api/2fa/account/config`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Get user's account 2FA configuration. Configuration contains configs for different 2FA providers. Example: ``` { "configs": { "EMAIL": { "providerType": "EMAIL", "useByDefault": true, "email": "tenant@thingsboard.org" }, "TOTP": { "providerType": "TOTP", "useByDefault": false, "authUrl": "otpauth://totp/TB%202FA:tenant@thingsboard.org?issuer=TB+2FA&secret=P6Z2TLYTASOGP6LCJZAD24ETT5DACNNX" }, "SMS": { "providerType": "SMS", "useByDefault": false, "phoneNumber": "+380501253652" } } } ``` Available for any authorized user.
*
* @tags two-factor-auth-config-controller
* @name GetAccountTwoFaSettingsUsingGet
* @summary Get account 2FA settings (getAccountTwoFaSettings)
* @request GET:/api/2fa/account/settings
* @secure
* @response `200` `GetAccountTwoFaSettingsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getAccountTwoFaSettingsUsingGet = (params = {}) => this.request({
    path: `/api/2fa/account/settings`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Get the list of provider types available for user to use (the ones configured by tenant or sysadmin). Example of response: ``` [ "TOTP", "EMAIL", "SMS" ] ``` Available for any authorized user.
*
* @tags two-factor-auth-config-controller
* @name GetAvailableTwoFaProvidersUsingGet
* @summary Get available 2FA providers (getAvailableTwoFaProviders)
* @request GET:/api/2fa/providers
* @secure
* @response `200` `GetAvailableTwoFaProvidersUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getAvailableTwoFaProvidersUsingGet = (params = {}) => this.request({
    path: `/api/2fa/providers`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Get platform settings for 2FA. The settings are described for savePlatformTwoFaSettings API method. If 2FA is not configured, then an empty response will be returned. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags two-factor-auth-config-controller
* @name GetPlatformTwoFaSettingsUsingGet
* @summary Get platform 2FA settings (getPlatformTwoFaSettings)
* @request GET:/api/2fa/settings
* @secure
* @response `200` `GetPlatformTwoFaSettingsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getPlatformTwoFaSettingsUsingGet = (params = {}) => this.request({
    path: `/api/2fa/settings`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Save 2FA settings for platform. The settings have following properties: - `useSystemTwoFactorAuthSettings` - option for tenant admins to use 2FA settings configured by sysadmin. If this param is set to true, then the settings will not be validated for constraints (if it is a tenant admin; for sysadmin this param is ignored). - `providers` - the list of 2FA providers' configs. Users will only be allowed to use 2FA providers from this list. - `minVerificationCodeSendPeriod` - minimal period in seconds to wait after verification code send request to send next request. - `verificationCodeCheckRateLimit` - rate limit configuration for verification code checking. The format is standard: 'amountOfRequests:periodInSeconds'. The value of '1:60' would limit verification code checking requests to one per minute. - `maxVerificationFailuresBeforeUserLockout` - maximum number of verification failures before a user gets disabled. - `totalAllowedTimeForVerification` - total amount of time in seconds allotted for verification. Basically, this property sets a lifetime for pre-verification token. If not set, default value of 30 minutes is used. TOTP 2FA provider config has following settings: - `issuerName` - issuer name that will be displayed in an authenticator app near a username. Must not be blank. For SMS 2FA provider: - `smsVerificationMessageTemplate` - verification message template.  Available template variables are ${code} and ${userEmail}. It must not be blank and must contain verification code variable. - `verificationCodeLifetime` - verification code lifetime in seconds. Required to be positive. For EMAIL provider type: - `verificationCodeLifetime` - the same as for SMS. Example of the settings: ``` { "useSystemTwoFactorAuthSettings": false, "providers": [ { "providerType": "TOTP", "issuerName": "TB" }, { "providerType": "EMAIL", "verificationCodeLifetime": 60 }, { "providerType": "SMS", "verificationCodeLifetime": 60, "smsVerificationMessageTemplate": "Here is your verification code: ${code}" } ], "minVerificationCodeSendPeriod": 60, "verificationCodeCheckRateLimit": "3:900", "maxVerificationFailuresBeforeUserLockout": 10, "totalAllowedTimeForVerification": 600 } ``` Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags two-factor-auth-config-controller
* @name SavePlatformTwoFaSettingsUsingPost
* @summary Save platform 2FA settings (savePlatformTwoFaSettings)
* @request POST:/api/2fa/settings
* @secure
* @response `200` `SavePlatformTwoFaSettingsUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
savePlatformTwoFaSettingsUsingPost = (data, params = {}) => this.request({
    path: `/api/2fa/settings`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Get the list of 2FA provider infos available for user to use. Example: ``` [ { "type": "EMAIL", "default": true, "contact": "ab*****ko@gmail.com" }, { "type": "TOTP", "default": false, "contact": null }, { "type": "SMS", "default": false, "contact": "+38********12" } ] ```
*
* @tags two-factor-auth-controller
* @name GetAvailableTwoFaProvidersUsingGet1
* @summary Get available 2FA providers (getAvailableTwoFaProviders)
* @request GET:/api/auth/2fa/providers
* @secure
* @response `200` `GetAvailableTwoFaProvidersUsingGet1Data` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getAvailableTwoFaProvidersUsingGet1 = (params = {}) => this.request({
    path: `/api/auth/2fa/providers`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Checks 2FA verification code, and if it is correct the method returns a regular access and refresh token pair. The API method is rate limited (using rate limit config from TwoFactorAuthSettings), and also will block a user after X unsuccessful verification attempts if such behavior is configured (in TwoFactorAuthSettings). Will return a Bad Request error if provider is not configured for usage, and Too Many Requests error if rate limits are exceeded.
*
* @tags two-factor-auth-controller
* @name CheckTwoFaVerificationCodeUsingPost
* @summary Check 2FA verification code (checkTwoFaVerificationCode)
* @request POST:/api/auth/2fa/verification/check{?providerType,verificationCode}
* @secure
* @response `200` `CheckTwoFaVerificationCodeUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
checkTwoFaVerificationCodeUsingPost = (query, params = {}) => this.request({
    path: `/api/auth/2fa/verification/check`,
    method: 'POST',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Request 2FA verification code. To make a request to this endpoint, you need an access token with the scope of PRE_VERIFICATION_TOKEN, which is issued on username/password auth if 2FA is enabled. The API method is rate limited (using rate limit config from TwoFactorAuthSettings). Will return a Bad Request error if provider is not configured for usage, and Too Many Requests error if rate limits are exceeded.
*
* @tags two-factor-auth-controller
* @name RequestTwoFaVerificationCodeUsingPost
* @summary Request 2FA verification code (requestTwoFaVerificationCode)
* @request POST:/api/auth/2fa/verification/send{?providerType}
* @secure
* @response `200` `RequestTwoFaVerificationCodeUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
requestTwoFaVerificationCodeUsingPost = (query, params = {}) => this.request({
    path: `/api/auth/2fa/verification/send`,
    method: 'POST',
    query: query, secure: true, ...params,
});
/**
* @description Get UI help base url used to fetch help assets. The actual value of the base url is configurable in the system configuration file.
*
* @tags ui-settings-controller
* @name GetHelpBaseUrlUsingGet
* @summary Get UI help base url (getHelpBaseUrl)
* @request GET:/api/uiSettings/helpBaseUrl
* @secure
* @response `200` `GetHelpBaseUrlUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getHelpBaseUrlUsingGet = (params = {}) => this.request({
    path: `/api/uiSettings/helpBaseUrl`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* No description
*
* @tags usage-info-controller
* @name GetTenantUsageInfoUsingGet
* @summary getTenantUsageInfo
* @request GET:/api/usage
* @secure
* @response `200` `GetTenantUsageInfoUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantUsageInfoUsingGet = (params = {}) => this.request({
    path: `/api/usage`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Returns a page of users for the current tenant with authority 'CUSTOMER_USER'. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags user-controller
* @name GetAllCustomerUsersUsingGet
* @summary Get Customer Users (getCustomerUsers)
* @request GET:/api/customer/users{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetAllCustomerUsersUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getAllCustomerUsersUsingGet = (query, params = {}) => this.request({
    path: `/api/customer/users`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of user info objects owned by the specified customer. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags user-controller
* @name GetCustomerUserInfosUsingGet
* @summary Get Customer user Infos (getCustomerUserInfos)
* @request GET:/api/customer/{customerId}/userInfos{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetCustomerUserInfosUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCustomerUserInfosUsingGet = ({ customerId, ...query }, params = {}) => this.request({
    path: `/api/customer/${customerId}/userInfos`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of users owned by customer. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags user-controller
* @name GetCustomerUsersUsingGet
* @summary Get Customer Users (getCustomerUsers)
* @request GET:/api/customer/{customerId}/users{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetCustomerUsersUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCustomerUsersUsingGet = ({ customerId, ...query }, params = {}) => this.request({
    path: `/api/customer/${customerId}/users`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of user objects that belongs to specified Entity Group Id. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Security check is performed to verify that the user has 'READ' permission for specified group.
*
* @tags user-controller
* @name GetUsersByEntityGroupIdUsingGet
* @summary Get users by Entity Group Id (getUsersByEntityGroupId)
* @request GET:/api/entityGroup/{entityGroupId}/users{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetUsersByEntityGroupIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getUsersByEntityGroupIdUsingGet = ({ entityGroupId, ...query }, params = {}) => this.request({
    path: `/api/entityGroup/${entityGroupId}/users`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of users owned by tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'SYS_ADMIN' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags user-controller
* @name GetTenantAdminsUsingGet
* @summary Get Tenant Users (getTenantAdmins)
* @request GET:/api/tenant/{tenantId}/users{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetTenantAdminsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getTenantAdminsUsingGet = ({ tenantId, ...query }, params = {}) => this.request({
    path: `/api/tenant/${tenantId}/users`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Fetch the list of last visited and starred dashboards. Both lists are limited to 10 items. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags user-controller
* @name GetUserDashboardsInfoUsingGet
* @summary Get information about last visited and starred dashboards (getLastVisitedDashboards)
* @request GET:/api/user/dashboards
* @secure
* @response `200` `GetUserDashboardsInfoUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getUserDashboardsInfoUsingGet = (params = {}) => this.request({
    path: `/api/user/dashboards`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Report action of User over the dashboard. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags user-controller
* @name ReportUserDashboardActionUsingGet
* @summary Report action of User over the dashboard (reportUserDashboardAction)
* @request GET:/api/user/dashboards/{dashboardId}/{action}
* @secure
* @response `200` `ReportUserDashboardActionUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
reportUserDashboardActionUsingGet = (dashboardId, action, params = {}) => this.request({
    path: `/api/user/dashboards/${dashboardId}/${action}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Fetch the User info object based on the provided User Id. If the user has the authority of 'SYS_ADMIN', the server does not perform additional checks. If the user has the authority of 'TENANT_ADMIN', the server checks that the requested user is owned by the same tenant. If the user has the authority of 'CUSTOMER_USER', the server checks that the requested user is owned by the same customer. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags user-controller
* @name GetUserInfoByIdUsingGet
* @summary Get User info (getUserInfoById)
* @request GET:/api/user/info/{userId}
* @secure
* @response `200` `GetUserInfoByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getUserInfoByIdUsingGet = (userId, params = {}) => this.request({
    path: `/api/user/info/${userId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Force send the activation email to the user. Useful to resend the email if user has accidentally deleted it. Security check is performed to verify that the user has 'DELETE' permission for the entity (entities).
*
* @tags user-controller
* @name SendActivationEmailUsingPost
* @summary Send or re-send the activation email
* @request POST:/api/user/sendActivationMail{?email}
* @secure
* @response `200` `SendActivationEmailUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
sendActivationEmailUsingPost = (query, params = {}) => this.request({
    path: `/api/user/sendActivationMail`,
    method: 'POST',
    query: query, secure: true, ...params,
});
/**
* @description Fetch the User settings based on authorized user.
*
* @tags user-controller
* @name GetUserSettingsUsingGet
* @summary Get user settings (getUserSettings)
* @request GET:/api/user/settings
* @secure
* @response `200` `GetUserSettingsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getUserSettingsUsingGet = (params = {}) => this.request({
    path: `/api/user/settings`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Update user settings for authorized user. Only specified json elements will be updated.Example: you have such settings: {A:5, B:{C:10, D:20}}. Updating it with {B:{C:10, D:30}} will result in{A:5, B:{C:10, D:30}}. The same could be achieved by putting {B.D:30}
*
* @tags user-controller
* @name PutUserSettingsUsingPut
* @summary Update user settings (saveUserSettings)
* @request PUT:/api/user/settings
* @secure
* @response `200` `PutUserSettingsUsingPutData` OK
* @response `201` `void` Created
* @response `401` `void` Unauthorized
* @response `403` `void` Forbidden
* @response `404` `void` Not Found
*/
putUserSettingsUsingPut = (data, params = {}) => this.request({
    path: `/api/user/settings`,
    method: 'PUT',
    body: data, secure: true, type: http_client_1.ContentType.Json, ...params,
});
/**
* @description Save user settings represented in json format for authorized user.
*
* @tags user-controller
* @name SaveUserSettingsUsingPost
* @summary Save user settings (saveUserSettings)
* @request POST:/api/user/settings
* @secure
* @response `200` `SaveUserSettingsUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveUserSettingsUsingPost = (data, params = {}) => this.request({
    path: `/api/user/settings`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Delete user settings by specifying list of json element xpaths. Example: to delete B and C element in { "A": {"B": 5}, "C": 15} send A.B,C in jsonPaths request parameter
*
* @tags user-controller
* @name DeleteUserSettingsUsingDelete1
* @summary Delete user settings (deleteUserSettings)
* @request DELETE:/api/user/settings/{paths}
* @secure
* @response `200` `DeleteUserSettingsUsingDelete1Data` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteUserSettingsUsingDelete1 = (paths, params = {}) => this.request({
    path: `/api/user/settings/${paths}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Fetch the User settings based on authorized user.
*
* @tags user-controller
* @name GetUserSettingsUsingGet1
* @summary Get user settings (getUserSettings)
* @request GET:/api/user/settings/{type}
* @secure
* @response `200` `GetUserSettingsUsingGet1Data` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getUserSettingsUsingGet1 = (type, params = {}) => this.request({
    path: `/api/user/settings/${type}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Update user settings for authorized user. Only specified json elements will be updated.Example: you have such settings: {A:5, B:{C:10, D:20}}. Updating it with {B:{C:10, D:30}} will result in{A:5, B:{C:10, D:30}}. The same could be achieved by putting {B.D:30}
*
* @tags user-controller
* @name PutUserSettingsUsingPut1
* @summary Update user settings (saveUserSettings)
* @request PUT:/api/user/settings/{type}
* @secure
* @response `200` `PutUserSettingsUsingPut1Data` OK
* @response `201` `void` Created
* @response `401` `void` Unauthorized
* @response `403` `void` Forbidden
* @response `404` `void` Not Found
*/
putUserSettingsUsingPut1 = (type, data, params = {}) => this.request({
    path: `/api/user/settings/${type}`,
    method: 'PUT',
    body: data, secure: true, type: http_client_1.ContentType.Json, ...params,
});
/**
* @description Delete user settings by specifying list of json element xpaths. Example: to delete B and C element in { "A": {"B": 5}, "C": 15} send A.B,C in jsonPaths request parameter
*
* @tags user-controller
* @name DeleteUserSettingsUsingDelete
* @summary Delete user settings (deleteUserSettings)
* @request DELETE:/api/user/settings/{type}/{paths}
* @secure
* @response `200` `DeleteUserSettingsUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteUserSettingsUsingDelete = (paths, type, params = {}) => this.request({
    path: `/api/user/settings/${type}/${paths}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Checks that the system is configured to allow administrators to impersonate themself as other users. If the user who performs the request has the authority of 'SYS_ADMIN', it is possible to login as any tenant administrator. If the user who performs the request has the authority of 'TENANT_ADMIN', it is possible to login as any customer user. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags user-controller
* @name IsUserTokenAccessEnabledUsingGet
* @summary Check Token Access Enabled (isUserTokenAccessEnabled)
* @request GET:/api/user/tokenAccessEnabled
* @secure
* @response `200` `IsUserTokenAccessEnabledUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
isUserTokenAccessEnabledUsingGet = (params = {}) => this.request({
    path: `/api/user/tokenAccessEnabled`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Returns a page of user objects available for the current user. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags user-controller
* @name GetUserUsersUsingGet
* @summary Get Users (getUsers)
* @request GET:/api/user/users{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetUserUsersUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getUserUsersUsingGet = (query, params = {}) => this.request({
    path: `/api/user/users`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Fetch the User object based on the provided User Id. If the user has the authority of 'SYS_ADMIN', the server does not perform additional checks. If the user has the authority of 'TENANT_ADMIN', the server checks that the requested user is owned by the same tenant. If the user has the authority of 'CUSTOMER_USER', the server checks that the requested user is owned by the same customer. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags user-controller
* @name GetUserByIdUsingGet
* @summary Get User (getUserById)
* @request GET:/api/user/{userId}
* @secure
* @response `200` `GetUserByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getUserByIdUsingGet = (userId, params = {}) => this.request({
    path: `/api/user/${userId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Deletes the User, it's credentials and all the relations (from and to the User). Referencing non-existing User Id will cause an error. Security check is performed to verify that the user has 'DELETE' permission for the entity (entities).
*
* @tags user-controller
* @name DeleteUserUsingDelete
* @summary Delete User (deleteUser)
* @request DELETE:/api/user/{userId}
* @secure
* @response `200` `DeleteUserUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteUserUsingDelete = (userId, params = {}) => this.request({
    path: `/api/user/${userId}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Get the activation link for the user. The base url for activation link is configurable in the general settings of system administrator. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags user-controller
* @name GetActivationLinkUsingGet
* @summary Get the activation link (getActivationLink)
* @request GET:/api/user/{userId}/activationLink
* @secure
* @response `200` `GetActivationLinkUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getActivationLinkUsingGet = (userId, params = {}) => this.request({
    path: `/api/user/${userId}/activationLink`,
    method: 'GET',
    secure: true, ...params,
});
/**
* @description Returns the token of the User based on the provided User Id. If the user who performs the request has the authority of 'SYS_ADMIN', it is possible to get the token of any tenant administrator. If the user who performs the request has the authority of 'TENANT_ADMIN', it is possible to get the token of any customer user that belongs to the same tenant.
*
* @tags user-controller
* @name GetUserTokenUsingGet
* @summary Get User Token (getUserToken)
* @request GET:/api/user/{userId}/token
* @secure
* @response `200` `GetUserTokenUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getUserTokenUsingGet = (userId, params = {}) => this.request({
    path: `/api/user/${userId}/token`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Enables or Disables user credentials. Useful when you would like to block user account without deleting it. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
*
* @tags user-controller
* @name SetUserCredentialsEnabledUsingPost
* @summary Enable/Disable User credentials (setUserCredentialsEnabled)
* @request POST:/api/user/{userId}/userCredentialsEnabled{?userCredentialsEnabled}
* @secure
* @response `200` `SetUserCredentialsEnabledUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
setUserCredentialsEnabledUsingPost = ({ userId, ...query }, params = {}) => this.request({
    path: `/api/user/${userId}/userCredentialsEnabled`,
    method: 'POST',
    query: query, secure: true, ...params,
});
/**
* @description Returns a page of user info objects owned by the tenant or the customer of a current user. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags user-controller
* @name GetAllUserInfosUsingGet
* @summary Get All User Infos for current user (getAllUserInfos)
* @request GET:/api/userInfos/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetAllUserInfosUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getAllUserInfosUsingGet = (query, params = {}) => this.request({
    path: `/api/userInfos/all`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns page of user data objects that can be assigned to provided alarmId. Search is been executed by email, firstName and lastName fields. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags user-controller
* @name GetUsersForAssignUsingGet
* @summary Get usersForAssign (getUsersForAssign)
* @request GET:/api/users/assign/{alarmId}{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `GetUsersForAssignUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getUsersForAssignUsingGet = ({ alarmId, ...query }, params = {}) => this.request({
    path: `/api/users/assign/${alarmId}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns page of user data objects. Search is been executed by email, firstName and lastName fields. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags user-controller
* @name FindUsersByQueryUsingGet
* @summary Find users by query (findUsersByQuery)
* @request GET:/api/users/info{?page,pageSize,sortOrder,sortProperty,textSearch}
* @secure
* @response `200` `FindUsersByQueryUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
findUsersByQueryUsingGet = (query, params = {}) => this.request({
    path: `/api/users/info`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Requested users must be owned by tenant or assigned to customer which user is performing the request. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags user-controller
* @name GetUsersByIdsUsingGet
* @summary Get Users By Ids (getUsersByIds)
* @request GET:/api/users{?userIds}
* @secure
* @response `200` `GetUsersByIdsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getUsersByIdsUsingGet = (query, params = {}) => this.request({
    path: `/api/users`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Create or update the User. When creating user, platform generates User Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created User Id will be present in the response. Specify existing User Id to update the device. Referencing non-existing User Id will cause 'Not Found' error. Device email is unique for entire platform setup. Remove 'id', 'tenantId' and optionally 'customerId' from the request body example (below) to create new User entity. Security check is performed to verify that the user has 'WRITE' permission for the entity (entities).
*
* @tags user-controller
* @name SaveUserUsingPost
* @summary Save Or update User (saveUser)
* @request POST:/api/user{?entityGroupId,entityGroupIds,sendActivationMail}
* @secure
* @response `200` `SaveUserUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveUserUsingPost = (query, data, params = {}) => this.request({
    path: `/api/user`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Returns a complex object that describes: * all possible (both granted and not granted) permissions for the authority of the user (Tenant or Customer); * all granted permissions for the user; The result impacts UI behavior and hides certain UI elements if user has no permissions to invoke the related operations. Nevertheless, all API calls check the permissions each time they are executed on the server side.You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags user-permissions-controller
* @name GetAllowedPermissionsUsingGet
* @summary Get Permissions (getAllowedPermissions)
* @request GET:/api/permissions/allowedPermissions
* @secure
* @response `200` `GetAllowedPermissionsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getAllowedPermissionsUsingGet = (params = {}) => this.request({
    path: `/api/permissions/allowedPermissions`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Returns login white-labeling parameters based on the hostname from request.
*
* @tags white-labeling-controller
* @name GetLoginWhiteLabelParamsUsingGet
* @summary Get Login White Labeling parameters
* @request GET:/api/noauth/whiteLabel/loginWhiteLabelParams
* @response `200` `GetLoginWhiteLabelParamsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getLoginWhiteLabelParamsUsingGet = (params = {}) => this.request({
    path: `/api/noauth/whiteLabel/loginWhiteLabelParams`,
    method: 'GET',
    format: "json", ...params,
});
/**
* @description Fetch the Login  White Labeling configuration that corresponds to the authority of the user. The API call is designed to load the Login White Labeling configuration for edition. So, the result is NOT merged with the parent level White Labeling configuration. Let's assume there is a custom White Labeling  configured on a system level. And there is no custom White Labeling  items configured on a tenant level. In such a case, the API call will return default object for the tenant administrator. Security check is performed to verify that the user has 'READ' permission for the white labeling resource.
*
* @tags white-labeling-controller
* @name GetCurrentLoginWhiteLabelParamsUsingGet
* @summary Get Login White Labeling configuration (getCurrentWhiteLabelParams)
* @request GET:/api/whiteLabel/currentLoginWhiteLabelParams{?customerId}
* @secure
* @response `200` `GetCurrentLoginWhiteLabelParamsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCurrentLoginWhiteLabelParamsUsingGet = (query, params = {}) => this.request({
    path: `/api/whiteLabel/currentLoginWhiteLabelParams`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Fetch the White Labeling configuration that corresponds to the authority of the user. The API call is designed to load the White Labeling configuration for edition. So, the result is NOT merged with the parent level White Labeling configuration. Let's assume there is a custom White Labeling  configured on a system level. And there is no custom White Labeling  items configured on a tenant level. In such a case, the API call will return default object for the tenant administrator. Security check is performed to verify that the user has 'READ' permission for the white labeling resource.
*
* @tags white-labeling-controller
* @name GetCurrentWhiteLabelParamsUsingGet
* @summary Get White Labeling configuration (getCurrentWhiteLabelParams)
* @request GET:/api/whiteLabel/currentWhiteLabelParams{?customerId}
* @secure
* @response `200` `GetCurrentWhiteLabelParamsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getCurrentWhiteLabelParamsUsingGet = (query, params = {}) => this.request({
    path: `/api/whiteLabel/currentWhiteLabelParams`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Check if the White Labeling is enabled for the customers of the current tenant Security check is performed to verify that the user has 'WRITE' permission for the white labeling resource. Available for users with 'TENANT_ADMIN' authority.
*
* @tags white-labeling-controller
* @name IsCustomerWhiteLabelingAllowedUsingGet
* @summary Check Customer White Labeling Allowed
* @request GET:/api/whiteLabel/isCustomerWhiteLabelingAllowed
* @secure
* @response `200` `IsCustomerWhiteLabelingAllowedUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
isCustomerWhiteLabelingAllowedUsingGet = (params = {}) => this.request({
    path: `/api/whiteLabel/isCustomerWhiteLabelingAllowed`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Check if the White Labeling is enabled for the current user owner (tenant or customer) Security check is performed to verify that the user has 'WRITE' permission for the white labeling resource. Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
*
* @tags white-labeling-controller
* @name IsWhiteLabelingAllowedUsingGet
* @summary Check White Labeling Allowed
* @request GET:/api/whiteLabel/isWhiteLabelingAllowed
* @secure
* @response `200` `IsWhiteLabelingAllowedUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
isWhiteLabelingAllowedUsingGet = (params = {}) => this.request({
    path: `/api/whiteLabel/isWhiteLabelingAllowed`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Creates or Updates the White Labeling configuration. Security check is performed to verify that the user has 'WRITE' permission for the white labeling resource.
*
* @tags white-labeling-controller
* @name SaveLoginWhiteLabelParamsUsingPost
* @summary Create Or Update Login White Labeling configuration (saveWhiteLabelParams)
* @request POST:/api/whiteLabel/loginWhiteLabelParams{?customerId}
* @secure
* @response `200` `SaveLoginWhiteLabelParamsUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveLoginWhiteLabelParamsUsingPost = (query, data, params = {}) => this.request({
    path: `/api/whiteLabel/loginWhiteLabelParams`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Creates or Updates the Mail templates settings. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority. Security check is performed to verify that the user has 'WRITE' permission for the white labeling resource.
*
* @tags white-labeling-controller
* @name SaveMailTemplatesUsingPost
* @summary Save the Mail templates settings (saveMailTemplates)
* @request POST:/api/whiteLabel/mailTemplates
* @secure
* @response `200` `SaveMailTemplatesUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveMailTemplatesUsingPost = (data, params = {}) => this.request({
    path: `/api/whiteLabel/mailTemplates`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Fetch Mail template settings. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority. Security check is performed to verify that the user has 'READ' permission for the white labeling resource.
*
* @tags white-labeling-controller
* @name GetMailTemplatesUsingGet
* @summary Get the Mail templates settings (getMailTemplates)
* @request GET:/api/whiteLabel/mailTemplates{?systemByDefault}
* @secure
* @response `200` `GetMailTemplatesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getMailTemplatesUsingGet = (query, params = {}) => this.request({
    path: `/api/whiteLabel/mailTemplates`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Merge the White Labeling configuration with the parent configuration and return the result. Security check is performed to verify that the user has 'WRITE' permission for the white labeling resource.
*
* @tags white-labeling-controller
* @name PreviewWhiteLabelParamsUsingPost
* @summary Preview Login White Labeling configuration (saveWhiteLabelParams)
* @request POST:/api/whiteLabel/previewWhiteLabelParams
* @secure
* @response `200` `PreviewWhiteLabelParamsUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
previewWhiteLabelParamsUsingPost = (data, params = {}) => this.request({
    path: `/api/whiteLabel/previewWhiteLabelParams`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Returns white-labeling parameters for the current user.
*
* @tags white-labeling-controller
* @name GetWhiteLabelParamsUsingGet
* @summary Get White Labeling parameters
* @request GET:/api/whiteLabel/whiteLabelParams
* @secure
* @response `200` `GetWhiteLabelParamsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getWhiteLabelParamsUsingGet = (params = {}) => this.request({
    path: `/api/whiteLabel/whiteLabelParams`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Creates or Updates the White Labeling configuration. Security check is performed to verify that the user has 'WRITE' permission for the white labeling resource.
*
* @tags white-labeling-controller
* @name SaveWhiteLabelParamsUsingPost
* @summary Create Or Update White Labeling configuration (saveWhiteLabelParams)
* @request POST:/api/whiteLabel/whiteLabelParams{?customerId}
* @secure
* @response `200` `SaveWhiteLabelParamsUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveWhiteLabelParamsUsingPost = (query, data, params = {}) => this.request({
    path: `/api/whiteLabel/whiteLabelParams`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Deletes the  Widget Type. Referencing non-existing Widget Type Id will cause an error. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags widget-type-controller
* @name DeleteWidgetTypeUsingDelete
* @summary Delete widget type (deleteWidgetType)
* @request DELETE:/api/widgetType/{widgetTypeId}
* @secure
* @response `200` `DeleteWidgetTypeUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteWidgetTypeUsingDelete = (widgetTypeId, params = {}) => this.request({
    path: `/api/widgetType/${widgetTypeId}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Get the Widget Type Details based on the provided Widget Type Id. Widget Type Details extend Widget Type and add image and description properties. Those properties are useful to edit the Widget Type but they are not required for Dashboard rendering. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags widget-type-controller
* @name GetWidgetTypeByIdUsingGet
* @summary Get Widget Type Details (getWidgetTypeById)
* @request GET:/api/widgetType/{widgetTypeId}{?inlineImages}
* @secure
* @response `200` `GetWidgetTypeByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getWidgetTypeByIdUsingGet = ({ widgetTypeId, ...query }, params = {}) => this.request({
    path: `/api/widgetType/${widgetTypeId}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns an array of Widget Type fqns that belong to specified Widget Bundle. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags widget-type-controller
* @name GetBundleWidgetTypeFqnsUsingGet
* @summary Get all Widget type fqns for specified Bundle (getBundleWidgetTypeFqns)
* @request GET:/api/widgetTypeFqns{?widgetsBundleId}
* @secure
* @response `200` `GetBundleWidgetTypeFqnsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getBundleWidgetTypeFqnsUsingGet = (query, params = {}) => this.request({
    path: `/api/widgetTypeFqns`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Get the Widget Type Info based on the provided Widget Type Id. Widget Type Details extend Widget Type and add image and description properties. Those properties are useful to edit the Widget Type but they are not required for Dashboard rendering. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags widget-type-controller
* @name GetWidgetTypeInfoByIdUsingGet
* @summary Get Widget Type Info (getWidgetTypeInfoById)
* @request GET:/api/widgetTypeInfo/{widgetTypeId}
* @secure
* @response `200` `GetWidgetTypeInfoByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getWidgetTypeInfoByIdUsingGet = (widgetTypeId, params = {}) => this.request({
    path: `/api/widgetTypeInfo/${widgetTypeId}`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Returns an array of Widget Type Details objects that belong to specified Widget Bundle.Widget Type Details extend Widget Type and add image and description properties. Those properties are useful to edit the Widget Type but they are not required for Dashboard rendering. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags widget-type-controller
* @name GetBundleWidgetTypesDetailsByBundleAliasUsingGet
* @summary Get all Widget types details for specified Bundle (getBundleWidgetTypesDetailsByBundleAlias) (Deprecated)
* @request GET:/api/widgetTypesDetails{?bundleAlias,isSystem}
* @secure
* @response `200` `GetBundleWidgetTypesDetailsByBundleAliasUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getBundleWidgetTypesDetailsByBundleAliasUsingGet = (query, params = {}) => this.request({
    path: `/api/widgetTypesDetails`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns an array of Widget Type Details objects that belong to specified Widget Bundle.Widget Type Details extend Widget Type and add image and description properties. Those properties are useful to edit the Widget Type but they are not required for Dashboard rendering. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags widget-type-controller
* @name GetBundleWidgetTypesDetailsUsingGet
* @summary Get all Widget types details for specified Bundle (getBundleWidgetTypes)
* @request GET:/api/widgetTypesDetails{?inlineImages,widgetsBundleId}
* @secure
* @response `200` `GetBundleWidgetTypesDetailsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getBundleWidgetTypesDetailsUsingGet = (query, params = {}) => this.request({
    path: `/api/widgetTypesDetails`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Get the Widget Type Info objects based on the provided parameters. Widget Type Info is a lightweight object that represents Widget Type but does not contain the heavyweight widget descriptor JSON Available for any authorized user.
*
* @tags widget-type-controller
* @name GetBundleWidgetTypesInfosByBundleAliasUsingGet
* @summary Get Widget Type Info objects (getBundleWidgetTypesInfosByBundleAlias) (Deprecated)
* @request GET:/api/widgetTypesInfos{?bundleAlias,isSystem}
* @secure
* @response `200` `GetBundleWidgetTypesInfosByBundleAliasUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getBundleWidgetTypesInfosByBundleAliasUsingGet = (query, params = {}) => this.request({
    path: `/api/widgetTypesInfos`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Get the Widget Type Info objects based on the provided parameters. Widget Type Info is a lightweight object that represents Widget Type but does not contain the heavyweight widget descriptor JSON Available for any authorized user.
*
* @tags widget-type-controller
* @name GetBundleWidgetTypesInfosUsingGet
* @summary Get Widget Type Info objects (getBundleWidgetTypesInfos)
* @request GET:/api/widgetTypesInfos{?deprecatedFilter,fullSearch,page,pageSize,sortOrder,sortProperty,textSearch,widgetTypeList,widgetsBundleId}
* @secure
* @response `200` `GetBundleWidgetTypesInfosUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getBundleWidgetTypesInfosUsingGet = (query, params = {}) => this.request({
    path: `/api/widgetTypesInfos`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns an array of Widget Type objects that belong to specified Widget Bundle.Widget Type represents the template for widget creation. Widget Type and Widget are similar to class and object in OOP theory. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags widget-type-controller
* @name GetBundleWidgetTypesByBundleAliasUsingGet
* @summary Get all Widget types for specified Bundle (getBundleWidgetTypesByBundleAlias) (Deprecated)
* @request GET:/api/widgetTypes{?bundleAlias,isSystem}
* @secure
* @response `200` `GetBundleWidgetTypesByBundleAliasUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getBundleWidgetTypesByBundleAliasUsingGet = (query, params = {}) => this.request({
    path: `/api/widgetTypes`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns a page of Widget Type objects available for current user. Widget Type represents the template for widget creation. Widget Type and Widget are similar to class and object in OOP theory. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for any authorized user.
*
* @tags widget-type-controller
* @name GetWidgetTypesUsingGet
* @summary Get Widget Types (getWidgetTypes)
* @request GET:/api/widgetTypes{?deprecatedFilter,fullSearch,page,pageSize,sortOrder,sortProperty,tenantOnly,textSearch,widgetTypeList}
* @secure
* @response `200` `GetWidgetTypesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getWidgetTypesUsingGet = (query, params = {}) => this.request({
    path: `/api/widgetTypes`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns an array of Widget Type objects that belong to specified Widget Bundle.Widget Type represents the template for widget creation. Widget Type and Widget are similar to class and object in OOP theory. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags widget-type-controller
* @name GetBundleWidgetTypesUsingGet
* @summary Get all Widget types for specified Bundle (getBundleWidgetTypes)
* @request GET:/api/widgetTypes{?widgetsBundleId}
* @secure
* @response `200` `GetBundleWidgetTypesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getBundleWidgetTypesUsingGet = (query, params = {}) => this.request({
    path: `/api/widgetTypes`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Get the Widget Type based on the provided parameters. Widget Type represents the template for widget creation. Widget Type and Widget are similar to class and object in OOP theory. Available for any authorized user.
*
* @tags widget-type-controller
* @name GetWidgetTypeByBundleAliasAndTypeAliasUsingGet
* @summary Get Widget Type (getWidgetTypeByBundleAliasAndTypeAlias) (Deprecated)
* @request GET:/api/widgetType{?alias,bundleAlias,isSystem}
* @secure
* @response `200` `GetWidgetTypeByBundleAliasAndTypeAliasUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getWidgetTypeByBundleAliasAndTypeAliasUsingGet = (query, params = {}) => this.request({
    path: `/api/widgetType`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Get the Widget Type by FQN. Widget Type represents the template for widget creation. Widget Type and Widget are similar to class and object in OOP theory. Available for any authorized user.
*
* @tags widget-type-controller
* @name GetWidgetTypeUsingGet
* @summary Get Widget Type (getWidgetType)
* @request GET:/api/widgetType{?fqn}
* @secure
* @response `200` `GetWidgetTypeUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getWidgetTypeUsingGet = (query, params = {}) => this.request({
    path: `/api/widgetType`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Create or update the Widget Type. Widget Type represents the template for widget creation. Widget Type and Widget are similar to class and object in OOP theory. When creating the Widget Type, platform generates Widget Type Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created Widget Type Id will be present in the response. Specify existing Widget Type id to update the Widget Type. Referencing non-existing Widget Type Id will cause 'Not Found' error. Widget Type fqn is unique in the scope of System or Tenant. Special Tenant Id '13814000-1dd2-11b2-8080-808080808080' is automatically used if the create request is sent by user with 'SYS_ADMIN' authority.Remove 'id', 'tenantId' rom the request body example (below) to create new Widget Type entity. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags widget-type-controller
* @name SaveWidgetTypeUsingPost
* @summary Create Or Update Widget Type (saveWidgetType)
* @request POST:/api/widgetType{?updateExistingByFqn}
* @secure
* @response `200` `SaveWidgetTypeUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveWidgetTypeUsingPost = (query, data, params = {}) => this.request({
    path: `/api/widgetType`,
    method: 'POST',
    query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Create or update the Widget Bundle. Widget Bundle represents a group(bundle) of widgets. Widgets are grouped into bundle by type or use case.  When creating the bundle, platform generates Widget Bundle Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created Widget Bundle Id will be present in the response. Specify existing Widget Bundle id to update the Widget Bundle. Referencing non-existing Widget Bundle Id will cause 'Not Found' error. Widget Bundle alias is unique in the scope of tenant. Special Tenant Id '13814000-1dd2-11b2-8080-808080808080' is automatically used if the create bundle request is sent by user with 'SYS_ADMIN' authority.Remove 'id', 'tenantId' from the request body example (below) to create new Widgets Bundle entity. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags widgets-bundle-controller
* @name SaveWidgetsBundleUsingPost
* @summary Create Or Update Widget Bundle (saveWidgetsBundle)
* @request POST:/api/widgetsBundle
* @secure
* @response `200` `SaveWidgetsBundleUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
saveWidgetsBundleUsingPost = (data, params = {}) => this.request({
    path: `/api/widgetsBundle`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, format: "json", ...params,
});
/**
* @description Deletes the widget bundle. Referencing non-existing Widget Bundle Id will cause an error. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags widgets-bundle-controller
* @name DeleteWidgetsBundleUsingDelete
* @summary Delete widgets bundle (deleteWidgetsBundle)
* @request DELETE:/api/widgetsBundle/{widgetsBundleId}
* @secure
* @response `200` `DeleteWidgetsBundleUsingDeleteData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
deleteWidgetsBundleUsingDelete = (widgetsBundleId, params = {}) => this.request({
    path: `/api/widgetsBundle/${widgetsBundleId}`,
    method: 'DELETE',
    secure: true, ...params,
});
/**
* @description Updates widgets bundle widgets list from widget type FQNs list. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags widgets-bundle-controller
* @name UpdateWidgetsBundleWidgetFqnsUsingPost
* @summary Update widgets bundle widgets list from widget type FQNs list (updateWidgetsBundleWidgetFqns)
* @request POST:/api/widgetsBundle/{widgetsBundleId}/widgetTypeFqns
* @secure
* @response `200` `UpdateWidgetsBundleWidgetFqnsUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
updateWidgetsBundleWidgetFqnsUsingPost = (widgetsBundleId, data, params = {}) => this.request({
    path: `/api/widgetsBundle/${widgetsBundleId}/widgetTypeFqns`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, ...params,
});
/**
* @description Updates widgets bundle widgets list. Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
*
* @tags widgets-bundle-controller
* @name UpdateWidgetsBundleWidgetTypesUsingPost
* @summary Update widgets bundle widgets types list (updateWidgetsBundleWidgetTypes)
* @request POST:/api/widgetsBundle/{widgetsBundleId}/widgetTypes
* @secure
* @response `200` `UpdateWidgetsBundleWidgetTypesUsingPostData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
updateWidgetsBundleWidgetTypesUsingPost = (widgetsBundleId, data, params = {}) => this.request({
    path: `/api/widgetsBundle/${widgetsBundleId}/widgetTypes`,
    method: 'POST',
    body: data, secure: true, type: http_client_1.ContentType.Json, ...params,
});
/**
* @description Get the Widget Bundle based on the provided Widget Bundle Id. Widget Bundle represents a group(bundle) of widgets. Widgets are grouped into bundle by type or use case. Available for any authorized user.
*
* @tags widgets-bundle-controller
* @name GetWidgetsBundleByIdUsingGet
* @summary Get Widget Bundle (getWidgetsBundleById)
* @request GET:/api/widgetsBundle/{widgetsBundleId}{?inlineImages}
* @secure
* @response `200` `GetWidgetsBundleByIdUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getWidgetsBundleByIdUsingGet = ({ widgetsBundleId, ...query }, params = {}) => this.request({
    path: `/api/widgetsBundle/${widgetsBundleId}`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Returns an array of Widget Bundle objects that are available for current user.Widget Bundle represents a group(bundle) of widgets. Widgets are grouped into bundle by type or use case. Available for any authorized user.
*
* @tags widgets-bundle-controller
* @name GetWidgetsBundlesUsingGet
* @summary Get all Widget Bundles (getWidgetsBundles)
* @request GET:/api/widgetsBundles
* @secure
* @response `200` `GetWidgetsBundlesUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getWidgetsBundlesUsingGet = (params = {}) => this.request({
    path: `/api/widgetsBundles`,
    method: 'GET',
    secure: true, format: "json", ...params,
});
/**
* @description Returns a page of Widget Bundle objects available for current user. Widget Bundle represents a group(bundle) of widgets. Widgets are grouped into bundle by type or use case.  You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. Available for any authorized user.
*
* @tags widgets-bundle-controller
* @name GetWidgetsBundlesUsingGet1
* @summary Get Widget Bundles (getWidgetsBundles)
* @request GET:/api/widgetsBundles{?fullSearch,page,pageSize,sortOrder,sortProperty,tenantOnly,textSearch}
* @secure
* @response `200` `GetWidgetsBundlesUsingGet1Data` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getWidgetsBundlesUsingGet1 = (query, params = {}) => this.request({
    path: `/api/widgetsBundles`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
/**
* @description Requested widgets bundles must be system level or owned by tenant of the user which is performing the request. Security check is performed to verify that the user has 'READ' permission for the entity (entities).
*
* @tags widgets-bundle-controller
* @name GetWidgetsBundlesByIdsUsingGet
* @summary Get Widgets Bundles By Ids (getWidgetsBundlesByIds)
* @request GET:/api/widgetsBundles{?widgetsBundleIds}
* @secure
* @response `200` `GetWidgetsBundlesByIdsUsingGetData` OK
* @response `400` `ThingsboardErrorResponse` Bad Request
* @response `401` `ThingsboardErrorResponse` Unauthorized
* @response `403` `ThingsboardErrorResponse` Forbidden
* @response `404` `ThingsboardErrorResponse` Not Found
* @response `429` `ThingsboardErrorResponse` Too Many Requests
*/
getWidgetsBundlesByIdsUsingGet = (query, params = {}) => this.request({
    path: `/api/widgetsBundles`,
    method: 'GET',
    query: query, secure: true, format: "json", ...params,
});
