"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VXOlympusClient = void 0;
const base_client_1 = require("../base-client");
const schemas = __importStar(require("./schemas"));
class VXOlympusClient extends base_client_1.BaseVXOlympusClient {
    constructor(baseURL, token) {
        super(baseURL, token);
    }
    async getAutoCommitSettingsUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/admin/autoCommitSettings`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async saveAutoCommitSettingsUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/admin/autoCommitSettings`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async deleteAutoCommitSettingsUsingDELETE(options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/admin/autoCommitSettings`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async autoCommitSettingsExistsUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/admin/autoCommitSettings/exists`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getFeaturesInfoUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/admin/featuresInfo`
        };
        const response = await this.client.request(config);
        return schemas.FeaturesInfoSchema.parse(response.data);
    }
    async getJwtSettingsUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/admin/jwtSettings`
        };
        const response = await this.client.request(config);
        return schemas.JWT_SettingsSchema.parse(response.data);
    }
    async saveJwtSettingsUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/admin/jwtSettings`,
            data
        };
        const response = await this.client.request(config);
        return schemas.JWT_PairSchema.parse(response.data);
    }
    async getLicenseUsageInfoUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/admin/licenseUsageInfo`
        };
        const response = await this.client.request(config);
        return schemas.LicenseUsageInfoSchema.parse(response.data);
    }
    async getAuthorizationUrlUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/admin/mail/oauth2/authorize`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async codeProcessingUrlUsingGET(code, state, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/admin/mail/oauth2/code{?code,state}`,
            params: {
                code: code,
                state: state
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getMailProcessingUrlUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/admin/mail/oauth2/loginProcessingUrl`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getRepositorySettingsUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/admin/repositorySettings`
        };
        const response = await this.client.request(config);
        return schemas.RepositorySettingsSchema.parse(response.data);
    }
    async saveRepositorySettingsUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/admin/repositorySettings`,
            data
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_RepositorySettingsSchema.parse(response.data);
    }
    async deleteRepositorySettingsUsingDELETE(options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/admin/repositorySettings`
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_VoidSchema.parse(response.data);
    }
    async checkRepositoryAccessUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/admin/repositorySettings/checkAccess`,
            data
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_VoidSchema.parse(response.data);
    }
    async repositorySettingsExistsUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/admin/repositorySettings/exists`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getRepositorySettingsInfoUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/admin/repositorySettings/info`
        };
        const response = await this.client.request(config);
        return schemas.RepositorySettingsInfoSchema.parse(response.data);
    }
    async getSecuritySettingsUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/admin/securitySettings`
        };
        const response = await this.client.request(config);
        return schemas.SecuritySettingsSchema.parse(response.data);
    }
    async saveSecuritySettingsUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/admin/securitySettings`,
            data
        };
        const response = await this.client.request(config);
        return schemas.SecuritySettingsSchema.parse(response.data);
    }
    async saveAdminSettingsUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/admin/settings`,
            data
        };
        const response = await this.client.request(config);
        return schemas.AdminSettingsSchema.parse(response.data);
    }
    async sendTestMailUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/admin/settings/testMail`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async sendTestSmsUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/admin/settings/testSms`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getAdminSettingsUsingGET(key, systemByDefault, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/admin/settings/${key}{?systemByDefault}`,
            params: {
                systemByDefault: systemByDefault
            }
        };
        const response = await this.client.request(config);
        return schemas.AdminSettingsSchema.parse(response.data);
    }
    async getSystemInfoUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/admin/systemInfo`
        };
        const response = await this.client.request(config);
        return schemas.SystemInfoSchema.parse(response.data);
    }
    async checkUpdatesUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/admin/updates`
        };
        const response = await this.client.request(config);
        return schemas.UpdateMessageSchema.parse(response.data);
    }
    async loginPost(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/auth/login`,
            data
        };
        const response = await this.client.request(config);
        return schemas.LoginResponseSchema.parse(response.data);
    }
    async saveAlarmCommentUsingPOST(alarmId, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/alarm/${alarmId}/comment`,
            data
        };
        const response = await this.client.request(config);
        return schemas.AlarmCommentSchema.parse(response.data);
    }
    async deleteAlarmCommentUsingDELETE(alarmId, commentId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/alarm/${alarmId}/comment/${commentId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getAlarmCommentsUsingGET(alarmId, pageSize, page, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/alarm/${alarmId}/comment{?page,pageSize,sortOrder,sortProperty}`,
            params: {
                pageSize: pageSize,
                page: page,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_AlarmCommentInfoSchema.parse(response.data);
    }
    async saveAlarmUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/alarm`,
            data
        };
        const response = await this.client.request(config);
        return schemas.AlarmSchema.parse(response.data);
    }
    async getHighestAlarmSeverityUsingGET(entityType, entityId, searchStatus, status, assigneeId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/alarm/highestSeverity/${entityType}/${entityId}{?assigneeId,searchStatus,status}`,
            params: {
                searchStatus: searchStatus,
                status: status,
                assigneeId: assigneeId
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getAlarmInfoByIdUsingGET(alarmId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/alarm/info/${alarmId}`
        };
        const response = await this.client.request(config);
        return schemas.AlarmInfoSchema.parse(response.data);
    }
    async getAlarmTypesUsingGET(pageSize, page, textSearch, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/alarm/types{?page,pageSize,sortOrder,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EntitySubtypeSchema.parse(response.data);
    }
    async getAlarmByIdUsingGET(alarmId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/alarm/${alarmId}`
        };
        const response = await this.client.request(config);
        return schemas.AlarmSchema.parse(response.data);
    }
    async deleteAlarmUsingDELETE(alarmId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/alarm/${alarmId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async ackAlarmUsingPOST(alarmId, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/alarm/${alarmId}/ack`
        };
        const response = await this.client.request(config);
        return schemas.AlarmInfoSchema.parse(response.data);
    }
    async unassignAlarmUsingDELETE(alarmId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/alarm/${alarmId}/assign`
        };
        const response = await this.client.request(config);
        return schemas.AlarmSchema.parse(response.data);
    }
    async assignAlarmUsingPOST(alarmId, assigneeId, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/alarm/${alarmId}/assign/${assigneeId}`
        };
        const response = await this.client.request(config);
        return schemas.AlarmSchema.parse(response.data);
    }
    async clearAlarmUsingPOST(alarmId, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/alarm/${alarmId}/clear`
        };
        const response = await this.client.request(config);
        return schemas.AlarmInfoSchema.parse(response.data);
    }
    async getAlarmsUsingGET(entityType, entityId, searchStatus, status, assigneeId, pageSize, page, textSearch, sortProperty, sortOrder, startTime, endTime, fetchOriginator, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/alarm/${entityType}/${entityId}{?assigneeId,endTime,fetchOriginator,page,pageSize,searchStatus,sortOrder,sortProperty,startTime,status,textSearch}`,
            params: {
                searchStatus: searchStatus,
                status: status,
                assigneeId: assigneeId,
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder,
                startTime: startTime,
                endTime: endTime,
                fetchOriginator: fetchOriginator
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_AlarmInfoSchema.parse(response.data);
    }
    async getAllAlarmsUsingGET(searchStatus, status, assigneeId, pageSize, page, textSearch, sortProperty, sortOrder, startTime, endTime, fetchOriginator, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/alarms{?assigneeId,endTime,fetchOriginator,page,pageSize,searchStatus,sortOrder,sortProperty,startTime,status,textSearch}`,
            params: {
                searchStatus: searchStatus,
                status: status,
                assigneeId: assigneeId,
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder,
                startTime: startTime,
                endTime: endTime,
                fetchOriginator: fetchOriginator
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_AlarmInfoSchema.parse(response.data);
    }
    async getAlarmsV2UsingGET(entityType, entityId, statusList, severityList, typeList, assigneeId, pageSize, page, textSearch, sortProperty, sortOrder, startTime, endTime, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/v2/alarm/${entityType}/${entityId}{?assigneeId,endTime,page,pageSize,severityList,sortOrder,sortProperty,startTime,statusList,textSearch,typeList}`,
            params: {
                statusList: statusList,
                severityList: severityList,
                typeList: typeList,
                assigneeId: assigneeId,
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder,
                startTime: startTime,
                endTime: endTime
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_AlarmInfoSchema.parse(response.data);
    }
    async getAllAlarmsV2UsingGET(statusList, severityList, typeList, assigneeId, pageSize, page, textSearch, sortProperty, sortOrder, startTime, endTime, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/v2/alarms{?assigneeId,endTime,page,pageSize,severityList,sortOrder,sortProperty,startTime,statusList,textSearch,typeList}`,
            params: {
                statusList: statusList,
                severityList: severityList,
                typeList: typeList,
                assigneeId: assigneeId,
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder,
                startTime: startTime,
                endTime: endTime
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_AlarmInfoSchema.parse(response.data);
    }
    async processAssetBulkImportUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/asset/bulk_import`,
            data
        };
        const response = await this.client.request(config);
        return schemas.BulkImportResult_Of_AssetSchema.parse(response.data);
    }
    async getAssetInfoByIdUsingGET(assetId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/asset/info/${assetId}`
        };
        const response = await this.client.request(config);
        return schemas.AssetInfoSchema.parse(response.data);
    }
    async getAssetTypesUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/asset/types`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getAssetByIdUsingGET(assetId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/asset/${assetId}`
        };
        const response = await this.client.request(config);
        return schemas.AssetSchema.parse(response.data);
    }
    async deleteAssetUsingDELETE(assetId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/asset/${assetId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getAllAssetInfosUsingGET(pageSize, page, includeCustomers, assetProfileId, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/assetInfos/all{?assetProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                includeCustomers: includeCustomers,
                assetProfileId: assetProfileId,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_AssetInfoSchema.parse(response.data);
    }
    async findByQueryUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/assets`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getAssetsByIdsUsingGET(assetIds, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/assets{?assetIds}`,
            params: {
                assetIds: assetIds
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async saveAssetUsingPOST(entityGroupId, entityGroupIds, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/asset{?entityGroupId,entityGroupIds}`,
            params: {
                entityGroupId: entityGroupId,
                entityGroupIds: entityGroupIds
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.AssetSchema.parse(response.data);
    }
    async getCustomerAssetInfosUsingGET(customerId, pageSize, page, includeCustomers, assetProfileId, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customer/${customerId}/assetInfos{?assetProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                includeCustomers: includeCustomers,
                assetProfileId: assetProfileId,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_AssetInfoSchema.parse(response.data);
    }
    async getCustomerAssetsUsingGET(customerId, pageSize, page, type, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customer/${customerId}/assets{?page,pageSize,sortOrder,sortProperty,textSearch,type}`,
            params: {
                pageSize: pageSize,
                page: page,
                type: type,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_AssetSchema.parse(response.data);
    }
    async getAssetsByEntityGroupIdUsingGET(entityGroupId, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroup/${entityGroupId}/assets{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_AssetSchema.parse(response.data);
    }
    async getTenantAssetUsingGET(assetName, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenant/assets{?assetName}`,
            params: {
                assetName: assetName
            }
        };
        const response = await this.client.request(config);
        return schemas.AssetSchema.parse(response.data);
    }
    async getTenantAssetsUsingGET(pageSize, page, type, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenant/assets{?page,pageSize,sortOrder,sortProperty,textSearch,type}`,
            params: {
                pageSize: pageSize,
                page: page,
                type: type,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_AssetSchema.parse(response.data);
    }
    async getUserAssetsUsingGET(pageSize, page, type, assetProfileId, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/user/assets{?assetProfileId,page,pageSize,sortOrder,sortProperty,textSearch,type}`,
            params: {
                pageSize: pageSize,
                page: page,
                type: type,
                assetProfileId: assetProfileId,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_AssetSchema.parse(response.data);
    }
    async saveAssetProfileUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/assetProfile`,
            data
        };
        const response = await this.client.request(config);
        return schemas.AssetProfileSchema.parse(response.data);
    }
    async getAssetProfileNamesUsingGET(activeOnly, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/assetProfile/names{?activeOnly}`,
            params: {
                activeOnly: activeOnly
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async deleteAssetProfileUsingDELETE(assetProfileId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/assetProfile/${assetProfileId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async setDefaultAssetProfileUsingPOST(assetProfileId, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/assetProfile/${assetProfileId}/default`
        };
        const response = await this.client.request(config);
        return schemas.AssetProfileSchema.parse(response.data);
    }
    async getAssetProfileByIdUsingGET(assetProfileId, inlineImages, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/assetProfile/${assetProfileId}{?inlineImages}`,
            params: {
                inlineImages: inlineImages
            }
        };
        const response = await this.client.request(config);
        return schemas.AssetProfileSchema.parse(response.data);
    }
    async getDefaultAssetProfileInfoUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/assetProfileInfo/default`
        };
        const response = await this.client.request(config);
        return schemas.AssetProfileInfoSchema.parse(response.data);
    }
    async getAssetProfileInfoByIdUsingGET(assetProfileId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/assetProfileInfo/${assetProfileId}`
        };
        const response = await this.client.request(config);
        return schemas.AssetProfileInfoSchema.parse(response.data);
    }
    async getAssetProfilesByIdsUsingGET(assetProfileIds, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/assetProfileInfos{?assetProfileIds}`,
            params: {
                assetProfileIds: assetProfileIds
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getAssetProfileInfosUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/assetProfileInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_AssetProfileInfoSchema.parse(response.data);
    }
    async getAssetProfilesUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/assetProfiles{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_AssetProfileSchema.parse(response.data);
    }
    async getAuditLogsByCustomerIdUsingGET(customerId, pageSize, page, textSearch, sortProperty, sortOrder, startTime, endTime, actionTypes, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/audit/logs/customer/${customerId}{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder,
                startTime: startTime,
                endTime: endTime,
                actionTypes: actionTypes
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_AuditLogSchema.parse(response.data);
    }
    async getAuditLogsByEntityIdUsingGET(entityType, entityId, pageSize, page, textSearch, sortProperty, sortOrder, startTime, endTime, actionTypes, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/audit/logs/entity/${entityType}/${entityId}{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder,
                startTime: startTime,
                endTime: endTime,
                actionTypes: actionTypes
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_AuditLogSchema.parse(response.data);
    }
    async getAuditLogsByUserIdUsingGET(userId, pageSize, page, textSearch, sortProperty, sortOrder, startTime, endTime, actionTypes, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/audit/logs/user/${userId}{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder,
                startTime: startTime,
                endTime: endTime,
                actionTypes: actionTypes
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_AuditLogSchema.parse(response.data);
    }
    async getAuditLogsUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, startTime, endTime, actionTypes, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/audit/logs{?actionTypes,endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder,
                startTime: startTime,
                endTime: endTime,
                actionTypes: actionTypes
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_AuditLogSchema.parse(response.data);
    }
    async changePasswordUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/auth/changePassword`,
            data
        };
        const response = await this.client.request(config);
        return schemas.ObjectNodeSchema.parse(response.data);
    }
    async logoutUsingPOST(options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/auth/logout`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getUserUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/auth/user`
        };
        const response = await this.client.request(config);
        return schemas.UserSchema.parse(response.data);
    }
    async checkActivateTokenUsingGET(activateToken, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/noauth/activate{?activateToken}`,
            params: {
                activateToken: activateToken
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async activateUserUsingPOST(sendActivationMail, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/noauth/activate{?sendActivationMail}`,
            params: {
                sendActivationMail: sendActivationMail
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.JWT_PairSchema.parse(response.data);
    }
    async resetPasswordUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/noauth/resetPassword`,
            data
        };
        const response = await this.client.request(config);
        return schemas.JWT_PairSchema.parse(response.data);
    }
    async requestResetPasswordByEmailUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/noauth/resetPasswordByEmail`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async checkResetTokenUsingGET(resetToken, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/noauth/resetPassword{?resetToken}`,
            params: {
                resetToken: resetToken
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getUserPasswordPolicyUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/noauth/userPasswordPolicy`
        };
        const response = await this.client.request(config);
        return schemas.UserPasswordPolicySchema.parse(response.data);
    }
    async getBlobEntitiesByIdsUsingGET(blobEntityIds, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/blobEntities{?blobEntityIds}`,
            params: {
                blobEntityIds: blobEntityIds
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getBlobEntitiesUsingGET(pageSize, page, type, textSearch, sortProperty, sortOrder, startTime, endTime, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/blobEntities{?endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch,type}`,
            params: {
                pageSize: pageSize,
                page: page,
                type: type,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder,
                startTime: startTime,
                endTime: endTime
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_BlobEntityWithCustomerInfoSchema.parse(response.data);
    }
    async getBlobEntityInfoByIdUsingGET(blobEntityId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/blobEntity/info/${blobEntityId}`
        };
        const response = await this.client.request(config);
        return schemas.BlobEntityWithCustomerInfoSchema.parse(response.data);
    }
    async deleteBlobEntityUsingDELETE(blobEntityId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/blobEntity/${blobEntityId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async downloadBlobEntityUsingGET(blobEntityId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/blobEntity/${blobEntityId}/download`
        };
        const response = await this.client.request(config);
        return schemas.ResourceSchema.parse(response.data);
    }
    async getComponentDescriptorByClazzUsingGET(componentDescriptorClazz, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/component/${componentDescriptorClazz}`
        };
        const response = await this.client.request(config);
        return schemas.ComponentDescriptorSchema.parse(response.data);
    }
    async getComponentDescriptorsByTypeUsingGET(componentType, ruleChainType, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/components/${componentType}{?ruleChainType}`,
            params: {
                ruleChainType: ruleChainType
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getComponentDescriptorsByTypesUsingGET(componentTypes, ruleChainType, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/components{?componentTypes,ruleChainType}`,
            params: {
                componentTypes: componentTypes,
                ruleChainType: ruleChainType
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async saveConverterUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/converter`,
            data
        };
        const response = await this.client.request(config);
        return schemas.ConverterSchema.parse(response.data);
    }
    async testDownLinkConverterUsingPOST(scriptLang, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/converter/testDownLink{?scriptLang}`,
            params: {
                scriptLang: scriptLang
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.JsonNodeSchema.parse(response.data);
    }
    async testUpLinkConverterUsingPOST(scriptLang, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/converter/testUpLink{?scriptLang}`,
            params: {
                scriptLang: scriptLang
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.JsonNodeSchema.parse(response.data);
    }
    async getConverterByIdUsingGET(converterId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/converter/${converterId}`
        };
        const response = await this.client.request(config);
        return schemas.ConverterSchema.parse(response.data);
    }
    async deleteConverterUsingDELETE(converterId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/converter/${converterId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getLatestConverterDebugInputUsingGET(converterId, converterType, integrationType, integrationName, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/converter/${converterId}/debugIn{?converterType,integrationName,integrationType}`,
            params: {
                converterType: converterType,
                integrationType: integrationType,
                integrationName: integrationName
            }
        };
        const response = await this.client.request(config);
        return schemas.JsonNodeSchema.parse(response.data);
    }
    async getConvertersByIdsUsingGET(converterIds, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/converters{?converterIds}`,
            params: {
                converterIds: converterIds
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getConvertersUsingGET(isEdgeTemplate, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/converters{?isEdgeTemplate,page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                isEdgeTemplate: isEdgeTemplate,
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_ConverterSchema.parse(response.data);
    }
    async getCurrentCustomMenuUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customMenu/currentCustomMenu`
        };
        const response = await this.client.request(config);
        return schemas.CustomMenuSchema.parse(response.data);
    }
    async getCustomMenuUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customMenu/customMenu`
        };
        const response = await this.client.request(config);
        return schemas.CustomMenuSchema.parse(response.data);
    }
    async saveCustomMenuUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/customMenu/customMenu`,
            data
        };
        const response = await this.client.request(config);
        return schemas.CustomMenuSchema.parse(response.data);
    }
    async getCurrentCustomTranslationUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customTranslation/currentCustomTranslation`
        };
        const response = await this.client.request(config);
        return schemas.CustomTranslationSchema.parse(response.data);
    }
    async getCustomTranslationUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customTranslation/customTranslation`
        };
        const response = await this.client.request(config);
        return schemas.CustomTranslationSchema.parse(response.data);
    }
    async saveCustomTranslationUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/customTranslation/customTranslation`,
            data
        };
        const response = await this.client.request(config);
        return schemas.CustomTranslationSchema.parse(response.data);
    }
    async getCustomerInfoByIdUsingGET(customerId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customer/info/${customerId}`
        };
        const response = await this.client.request(config);
        return schemas.CustomerInfoSchema.parse(response.data);
    }
    async getCustomerByIdUsingGET(customerId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customer/${customerId}`
        };
        const response = await this.client.request(config);
        return schemas.CustomerSchema.parse(response.data);
    }
    async deleteCustomerUsingDELETE(customerId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/customer/${customerId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getCustomerCustomerInfosUsingGET(customerId, pageSize, page, includeCustomers, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customer/${customerId}/customerInfos{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                includeCustomers: includeCustomers,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_CustomerInfoSchema.parse(response.data);
    }
    async getShortCustomerInfoByIdUsingGET(customerId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customer/${customerId}/shortInfo`
        };
        const response = await this.client.request(config);
        return schemas.JsonNodeSchema.parse(response.data);
    }
    async getCustomerTitleByIdUsingGET(customerId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customer/${customerId}/title`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getAllCustomerInfosUsingGET(pageSize, page, includeCustomers, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customerInfos/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                includeCustomers: includeCustomers,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_CustomerInfoSchema.parse(response.data);
    }
    async getCustomersByIdsUsingGET(customerIds, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customers{?customerIds}`,
            params: {
                customerIds: customerIds
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getCustomersUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customers{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_CustomerSchema.parse(response.data);
    }
    async saveCustomerUsingPOST(entityGroupId, entityGroupIds, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/customer{?entityGroupId,entityGroupIds}`,
            params: {
                entityGroupId: entityGroupId,
                entityGroupIds: entityGroupIds
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.CustomerSchema.parse(response.data);
    }
    async getCustomersByEntityGroupIdUsingGET(entityGroupId, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroup/${entityGroupId}/customers{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_CustomerSchema.parse(response.data);
    }
    async getTenantCustomerUsingGET(customerTitle, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenant/customers{?customerTitle}`,
            params: {
                customerTitle: customerTitle
            }
        };
        const response = await this.client.request(config);
        return schemas.CustomerSchema.parse(response.data);
    }
    async getUserCustomersUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/user/customers{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_CustomerSchema.parse(response.data);
    }
    async getCustomerHomeDashboardInfoUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customer/dashboard/home/info`
        };
        const response = await this.client.request(config);
        return schemas.HomeDashboardInfoSchema.parse(response.data);
    }
    async setCustomerHomeDashboardInfoUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/customer/dashboard/home/info`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getCustomerDashboardsUsingGET(customerId, pageSize, page, includeCustomers, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customer/${customerId}/dashboards{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                includeCustomers: includeCustomers,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_DashboardInfoSchema.parse(response.data);
    }
    async getHomeDashboardUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/dashboard/home`
        };
        const response = await this.client.request(config);
        return schemas.HomeDashboardSchema.parse(response.data);
    }
    async getHomeDashboardInfoUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/dashboard/home/info`
        };
        const response = await this.client.request(config);
        return schemas.HomeDashboardInfoSchema.parse(response.data);
    }
    async getDashboardInfoByIdUsingGET(dashboardId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/dashboard/info/${dashboardId}`
        };
        const response = await this.client.request(config);
        return schemas.DashboardInfoSchema.parse(response.data);
    }
    async getMaxDatapointsLimitUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/dashboard/maxDatapointsLimit`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getServerTimeUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/dashboard/serverTime`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async deleteDashboardUsingDELETE(dashboardId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/dashboard/${dashboardId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getDashboardByIdUsingGET(dashboardId, inlineImages, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/dashboard/${dashboardId}{?inlineImages}`,
            params: {
                inlineImages: inlineImages
            }
        };
        const response = await this.client.request(config);
        return schemas.DashboardSchema.parse(response.data);
    }
    async getAllDashboardsUsingGET(pageSize, page, includeCustomers, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/dashboards/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                includeCustomers: includeCustomers,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_DashboardInfoSchema.parse(response.data);
    }
    async getDashboardsByIdsUsingGET(dashboardIds, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/dashboards{?dashboardIds}`,
            params: {
                dashboardIds: dashboardIds
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async saveDashboardUsingPOST(entityGroupId, entityGroupIds, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/dashboard{?entityGroupId,entityGroupIds}`,
            params: {
                entityGroupId: entityGroupId,
                entityGroupIds: entityGroupIds
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.DashboardSchema.parse(response.data);
    }
    async exportGroupDashboardsUsingGET(entityGroupId, limit, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroup/${entityGroupId}/dashboards/export{?limit}`,
            params: {
                limit: limit
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async importGroupDashboardsUsingPOST(entityGroupId, overwrite, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/entityGroup/${entityGroupId}/dashboards/import{?overwrite}`,
            params: {
                overwrite: overwrite
            },
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getDashboardsByEntityGroupIdUsingGET(entityGroupId, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroup/${entityGroupId}/dashboards{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_DashboardInfoSchema.parse(response.data);
    }
    async getTenantHomeDashboardInfoUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenant/dashboard/home/info`
        };
        const response = await this.client.request(config);
        return schemas.HomeDashboardInfoSchema.parse(response.data);
    }
    async setTenantHomeDashboardInfoUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/tenant/dashboard/home/info`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getTenantDashboardsUsingGET(pageSize, page, mobile, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenant/dashboards{?mobile,page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                mobile: mobile,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_DashboardInfoSchema.parse(response.data);
    }
    async getTenantDashboardsUsingGET_1(tenantId, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenant/${tenantId}/dashboards{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_DashboardInfoSchema.parse(response.data);
    }
    async getUserDashboardsUsingGET(pageSize, page, mobile, textSearch, sortProperty, sortOrder, operation, userId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/user/dashboards{?mobile,operation,page,pageSize,sortOrder,sortProperty,textSearch,userId}`,
            params: {
                pageSize: pageSize,
                page: page,
                mobile: mobile,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder,
                operation: operation,
                userId: userId
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_DashboardInfoSchema.parse(response.data);
    }
    async downloadGatewayDockerComposeUsingGET(deviceId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/device-connectivity/gateway-launch/${deviceId}/docker-compose/download`
        };
        const response = await this.client.request(config);
        return schemas.ResourceSchema.parse(response.data);
    }
    async getDevicePublishTelemetryCommandsUsingGET(deviceId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/device-connectivity/${deviceId}`
        };
        const response = await this.client.request(config);
        return schemas.JsonNodeSchema.parse(response.data);
    }
    async downloadServerCertificateUsingGET(protocol, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/device-connectivity/${protocol}/certificate/download`
        };
        const response = await this.client.request(config);
        return schemas.ResourceSchema.parse(response.data);
    }
    async reClaimDeviceUsingDELETE(deviceName, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/customer/device/${deviceName}/claim`
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async claimDeviceUsingPOST(deviceName, subCustomerId, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/customer/device/${deviceName}/claim{?subCustomerId}`,
            params: {
                subCustomerId: subCustomerId
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async getCustomerDeviceInfosUsingGET(customerId, pageSize, page, includeCustomers, deviceProfileId, active, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customer/${customerId}/deviceInfos{?active,deviceProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                includeCustomers: includeCustomers,
                deviceProfileId: deviceProfileId,
                active: active,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_DeviceInfoSchema.parse(response.data);
    }
    async getCustomerDevicesUsingGET(customerId, pageSize, page, type, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customer/${customerId}/devices{?page,pageSize,sortOrder,sortProperty,textSearch,type}`,
            params: {
                pageSize: pageSize,
                page: page,
                type: type,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_DeviceSchema.parse(response.data);
    }
    async saveDeviceWithCredentialsUsingPOST(entityGroupId, entityGroupIds, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/device-with-credentials{?entityGroupId,entityGroupIds}`,
            params: {
                entityGroupId: entityGroupId,
                entityGroupIds: entityGroupIds
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.DeviceSchema.parse(response.data);
    }
    async processDevicesBulkImportUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/device/bulk_import`,
            data
        };
        const response = await this.client.request(config);
        return schemas.BulkImportResult_Of_DeviceSchema.parse(response.data);
    }
    async updateDeviceCredentialsUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/device/credentials`,
            data
        };
        const response = await this.client.request(config);
        return schemas.DeviceCredentialsSchema.parse(response.data);
    }
    async getDeviceInfoByIdUsingGET(deviceId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/device/info/${deviceId}`
        };
        const response = await this.client.request(config);
        return schemas.DeviceInfoSchema.parse(response.data);
    }
    async getDeviceTypesUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/device/types`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getDeviceByIdUsingGET(deviceId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/device/${deviceId}`
        };
        const response = await this.client.request(config);
        return schemas.DeviceSchema.parse(response.data);
    }
    async deleteDeviceUsingDELETE(deviceId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/device/${deviceId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getDeviceCredentialsByDeviceIdUsingGET(deviceId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/device/${deviceId}/credentials`
        };
        const response = await this.client.request(config);
        return schemas.DeviceCredentialsSchema.parse(response.data);
    }
    async getAllDeviceInfosUsingGET(pageSize, page, includeCustomers, deviceProfileId, active, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/deviceInfos/all{?active,deviceProfileId,includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                includeCustomers: includeCustomers,
                deviceProfileId: deviceProfileId,
                active: active,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_DeviceInfoSchema.parse(response.data);
    }
    async findByQueryUsingPOST_1(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/devices`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async countByDeviceProfileAndEmptyOtaPackageUsingGET(otaPackageType, deviceProfileId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/devices/count/${otaPackageType}/${deviceProfileId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async countByDeviceGroupAndEmptyOtaPackageUsingGET(otaPackageType, otaPackageId, entityGroupId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/devices/count/${otaPackageType}/${otaPackageId}/${entityGroupId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getDevicesByIdsUsingGET(deviceIds, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/devices{?deviceIds}`,
            params: {
                deviceIds: deviceIds
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async saveDeviceUsingPOST(accessToken, entityGroupId, entityGroupIds, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/device{?accessToken,entityGroupId,entityGroupIds}`,
            params: {
                accessToken: accessToken,
                entityGroupId: entityGroupId,
                entityGroupIds: entityGroupIds
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.DeviceSchema.parse(response.data);
    }
    async getDevicesByEntityGroupIdUsingGET(entityGroupId, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroup/${entityGroupId}/devices{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_DeviceSchema.parse(response.data);
    }
    async getTenantDeviceUsingGET(deviceName, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenant/devices{?deviceName}`,
            params: {
                deviceName: deviceName
            }
        };
        const response = await this.client.request(config);
        return schemas.DeviceSchema.parse(response.data);
    }
    async getTenantDevicesUsingGET(pageSize, page, type, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenant/devices{?page,pageSize,sortOrder,sortProperty,textSearch,type}`,
            params: {
                pageSize: pageSize,
                page: page,
                type: type,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_DeviceSchema.parse(response.data);
    }
    async assignDeviceToTenantUsingPOST(tenantId, deviceId, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/tenant/${tenantId}/device/${deviceId}`
        };
        const response = await this.client.request(config);
        return schemas.DeviceSchema.parse(response.data);
    }
    async getUserDevicesUsingGET(pageSize, page, type, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/user/devices{?page,pageSize,sortOrder,sortProperty,textSearch,type}`,
            params: {
                pageSize: pageSize,
                page: page,
                type: type,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_DeviceSchema.parse(response.data);
    }
    async saveDeviceGroupOtaPackageUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/deviceGroupOtaPackage`,
            data
        };
        const response = await this.client.request(config);
        return schemas.DeviceGroupOtaPackageSchema.parse(response.data);
    }
    async getFirmwareByIdUsingGET(groupId, firmwareType, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/deviceGroupOtaPackage/${groupId}/${firmwareType}`
        };
        const response = await this.client.request(config);
        return schemas.DeviceGroupOtaPackageSchema.parse(response.data);
    }
    async deleteDeviceGroupOtaPackageUsingDELETE(id, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/deviceGroupOtaPackage/${id}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async saveDeviceProfileUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/deviceProfile`,
            data
        };
        const response = await this.client.request(config);
        return schemas.DeviceProfileSchema.parse(response.data);
    }
    async getAttributesKeysUsingGET(deviceProfileId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/deviceProfile/devices/keys/attributes{?deviceProfileId}`,
            params: {
                deviceProfileId: deviceProfileId
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getTimeseriesKeysUsingGET(deviceProfileId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/deviceProfile/devices/keys/timeseries{?deviceProfileId}`,
            params: {
                deviceProfileId: deviceProfileId
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getDeviceProfileNamesUsingGET(activeOnly, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/deviceProfile/names{?activeOnly}`,
            params: {
                activeOnly: activeOnly
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async deleteDeviceProfileUsingDELETE(deviceProfileId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/deviceProfile/${deviceProfileId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async setDefaultDeviceProfileUsingPOST(deviceProfileId, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/deviceProfile/${deviceProfileId}/default`
        };
        const response = await this.client.request(config);
        return schemas.DeviceProfileSchema.parse(response.data);
    }
    async getDeviceProfileByIdUsingGET(deviceProfileId, inlineImages, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/deviceProfile/${deviceProfileId}{?inlineImages}`,
            params: {
                inlineImages: inlineImages
            }
        };
        const response = await this.client.request(config);
        return schemas.DeviceProfileSchema.parse(response.data);
    }
    async getDefaultDeviceProfileInfoUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/deviceProfileInfo/default`
        };
        const response = await this.client.request(config);
        return schemas.DeviceProfileInfoSchema.parse(response.data);
    }
    async getDeviceProfileInfoByIdUsingGET(deviceProfileId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/deviceProfileInfo/${deviceProfileId}`
        };
        const response = await this.client.request(config);
        return schemas.DeviceProfileInfoSchema.parse(response.data);
    }
    async getDeviceProfilesByIdsUsingGET(deviceProfileIds, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/deviceProfileInfos{?deviceProfileIds}`,
            params: {
                deviceProfileIds: deviceProfileIds
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getDeviceProfileInfosUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, transportType, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/deviceProfileInfos{?page,pageSize,sortOrder,sortProperty,textSearch,transportType}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder,
                transportType: transportType
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_DeviceProfileInfoSchema.parse(response.data);
    }
    async getDeviceProfilesUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/deviceProfiles{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_DeviceProfileSchema.parse(response.data);
    }
    async getCustomerEdgeInfosUsingGET(customerId, pageSize, page, includeCustomers, type, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customer/${customerId}/edgeInfos{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch,type}`,
            params: {
                pageSize: pageSize,
                page: page,
                includeCustomers: includeCustomers,
                type: type,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EdgeInfoSchema.parse(response.data);
    }
    async getCustomerEdgesUsingGET(customerId, pageSize, page, type, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customer/${customerId}/edges{?page,pageSize,sortOrder,sortProperty,textSearch,type}`,
            params: {
                pageSize: pageSize,
                page: page,
                type: type,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EdgeSchema.parse(response.data);
    }
    async processEdgesBulkImportUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/edge/bulk_import`,
            data
        };
        const response = await this.client.request(config);
        return schemas.BulkImportResult_Of_EdgeSchema.parse(response.data);
    }
    async getEdgeInfoByIdUsingGET(edgeId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/edge/info/${edgeId}`
        };
        const response = await this.client.request(config);
        return schemas.EdgeInfoSchema.parse(response.data);
    }
    async getEdgeInstallInstructionsUsingGET(edgeId, method, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/edge/instructions/install/${edgeId}/${method}`
        };
        const response = await this.client.request(config);
        return schemas.EdgeInstructionsSchema.parse(response.data);
    }
    async getEdgeUpgradeInstructionsUsingGET(edgeVersion, method, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/edge/instructions/upgrade/${edgeVersion}/${method}`
        };
        const response = await this.client.request(config);
        return schemas.EdgeInstructionsSchema.parse(response.data);
    }
    async findMissingToRelatedRuleChainsUsingGET(edgeId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/edge/missingToRelatedRuleChains/${edgeId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async syncEdgeUsingPOST(edgeId, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/edge/sync/${edgeId}`
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async getEdgeTypesUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/edge/types`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getEdgeByIdUsingGET(edgeId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/edge/${edgeId}`
        };
        const response = await this.client.request(config);
        return schemas.EdgeSchema.parse(response.data);
    }
    async deleteEdgeUsingDELETE(edgeId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/edge/${edgeId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async isEdgeUpgradeAvailableUsingGET(edgeId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/edge/${edgeId}/upgrade/available`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async setEdgeRootRuleChainUsingPOST(edgeId, ruleChainId, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/edge/${edgeId}/${ruleChainId}/root`
        };
        const response = await this.client.request(config);
        return schemas.EdgeSchema.parse(response.data);
    }
    async getAllEdgeInfosUsingGET(pageSize, page, includeCustomers, type, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/edgeInfos/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch,type}`,
            params: {
                pageSize: pageSize,
                page: page,
                includeCustomers: includeCustomers,
                type: type,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EdgeInfoSchema.parse(response.data);
    }
    async findByQueryUsingPOST_2(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/edges`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async isEdgesSupportEnabledUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/edges/enabled`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getEdgesByIdsUsingGET(edgeIds, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/edges{?edgeIds}`,
            params: {
                edgeIds: edgeIds
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getEdgesUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/edges{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EdgeSchema.parse(response.data);
    }
    async saveEdgeUsingPOST(entityGroupId, entityGroupIds, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/edge{?entityGroupId,entityGroupIds}`,
            params: {
                entityGroupId: entityGroupId,
                entityGroupIds: entityGroupIds
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.EdgeSchema.parse(response.data);
    }
    async getEdgesByEntityGroupIdUsingGET(entityGroupId, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroup/${entityGroupId}/edges{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EdgeSchema.parse(response.data);
    }
    async activateInstanceUsingPOST(licenseSecret, releaseDate, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/license/activateInstance{?licenseSecret,releaseDate}`,
            params: {
                licenseSecret: licenseSecret,
                releaseDate: releaseDate
            }
        };
        const response = await this.client.request(config);
        return schemas.JsonNodeSchema.parse(response.data);
    }
    async checkInstanceUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/license/checkInstance`,
            data
        };
        const response = await this.client.request(config);
        return schemas.JsonNodeSchema.parse(response.data);
    }
    async getTenantEdgeUsingGET(edgeName, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenant/edges{?edgeName}`,
            params: {
                edgeName: edgeName
            }
        };
        const response = await this.client.request(config);
        return schemas.EdgeSchema.parse(response.data);
    }
    async getTenantEdgesUsingGET(pageSize, page, type, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenant/edges{?page,pageSize,sortOrder,sortProperty,textSearch,type}`,
            params: {
                pageSize: pageSize,
                page: page,
                type: type,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EdgeSchema.parse(response.data);
    }
    async getUserEdgesUsingGET(pageSize, page, type, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/user/edges{?page,pageSize,sortOrder,sortProperty,textSearch,type}`,
            params: {
                pageSize: pageSize,
                page: page,
                type: type,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EdgeSchema.parse(response.data);
    }
    async getEdgeEventsUsingGET(edgeId, pageSize, page, textSearch, sortProperty, sortOrder, startTime, endTime, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/edge/${edgeId}/events{?endTime,page,pageSize,sortOrder,sortProperty,startTime,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder,
                startTime: startTime,
                endTime: endTime
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EdgeEventSchema.parse(response.data);
    }
    async listBranchesUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entities/vc/branches`
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_List_Of_BranchInfoSchema.parse(response.data);
    }
    async compareEntityDataToVersionUsingGET(entityType, internalEntityUuid, versionId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entities/vc/diff/${entityType}/${internalEntityUuid}{?versionId}`,
            params: {
                versionId: versionId
            }
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_EntityDataDiffSchema.parse(response.data);
    }
    async loadEntitiesVersionUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/entities/vc/entity`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async listEntitiesAtVersionUsingGET(entityType, versionId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entities/vc/entity/${entityType}/${versionId}`
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_List_Of_VersionedEntityInfoSchema.parse(response.data);
    }
    async getVersionLoadRequestStatusUsingGET(requestId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entities/vc/entity/${requestId}/status`
        };
        const response = await this.client.request(config);
        return schemas.VersionLoadResultSchema.parse(response.data);
    }
    async listAllEntitiesAtVersionUsingGET(versionId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entities/vc/entity/${versionId}`
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_List_Of_VersionedEntityInfoSchema.parse(response.data);
    }
    async getEntityDataInfoUsingGET(versionId, entityType, externalEntityUuid, internalEntityId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entities/vc/info/${versionId}/${entityType}/${externalEntityUuid}{?internalEntityId}`,
            params: {
                internalEntityId: internalEntityId
            }
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_EntityDataInfoSchema.parse(response.data);
    }
    async saveEntitiesVersionUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/entities/vc/version`,
            data
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_uuidSchema.parse(response.data);
    }
    async listEntityVersionsUsingGET(entityType, externalEntityUuid, branch, internalEntityId, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entities/vc/version/${entityType}/${externalEntityUuid}?sortProperty=timestamp{&branch,internalEntityId,page,pageSize,sortOrder,textSearch}`,
            params: {
                branch: branch,
                internalEntityId: internalEntityId,
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_PageData_Of_EntityVersionSchema.parse(response.data);
    }
    async listEntityTypeVersionsUsingGET(entityType, branch, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entities/vc/version/${entityType}?sortProperty=timestamp{&branch,page,pageSize,sortOrder,textSearch}`,
            params: {
                branch: branch,
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_PageData_Of_EntityVersionSchema.parse(response.data);
    }
    async getVersionCreateRequestStatusUsingGET(requestId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entities/vc/version/${requestId}/status`
        };
        const response = await this.client.request(config);
        return schemas.VersionCreationResultSchema.parse(response.data);
    }
    async listVersionsUsingGET(branch, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entities/vc/version?sortProperty=timestamp{&branch,page,pageSize,sortOrder,textSearch}`,
            params: {
                branch: branch,
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_PageData_Of_EntityVersionSchema.parse(response.data);
    }
    async getAllEdgeEntityGroupsUsingGET(edgeId, groupType, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/allEntityGroups/edge/${edgeId}/${groupType}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async assignEntityGroupToEdgeUsingPOST(edgeId, groupType, entityGroupId, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/edge/${edgeId}/entityGroup/${entityGroupId}/${groupType}`
        };
        const response = await this.client.request(config);
        return schemas.EntityGroupSchema.parse(response.data);
    }
    async unassignEntityGroupFromEdgeUsingDELETE(edgeId, groupType, entityGroupId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/edge/${edgeId}/entityGroup/${entityGroupId}/${groupType}`
        };
        const response = await this.client.request(config);
        return schemas.EntityGroupSchema.parse(response.data);
    }
    async saveEntityGroupUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/entityGroup`,
            data
        };
        const response = await this.client.request(config);
        return schemas.EntityGroupInfoSchema.parse(response.data);
    }
    async getEntityGroupAllByOwnerAndTypeUsingGET(ownerType, ownerId, groupType, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroup/all/${ownerType}/${ownerId}/${groupType}`
        };
        const response = await this.client.request(config);
        return schemas.EntityGroupInfoSchema.parse(response.data);
    }
    async getEntityGroupByIdUsingGET(entityGroupId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroup/${entityGroupId}`
        };
        const response = await this.client.request(config);
        return schemas.EntityGroupInfoSchema.parse(response.data);
    }
    async deleteEntityGroupUsingDELETE(entityGroupId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/entityGroup/${entityGroupId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async addEntitiesToEntityGroupUsingPOST(entityGroupId, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/entityGroup/${entityGroupId}/addEntities`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async removeEntitiesFromEntityGroupUsingPOST(entityGroupId, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/entityGroup/${entityGroupId}/deleteEntities`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getEntitiesUsingGET(entityGroupId, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroup/${entityGroupId}/entities{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_ShortEntityViewSchema.parse(response.data);
    }
    async makeEntityGroupPrivateUsingPOST(entityGroupId, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/entityGroup/${entityGroupId}/makePrivate`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async makeEntityGroupPublicUsingPOST(entityGroupId, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/entityGroup/${entityGroupId}/makePublic`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async shareEntityGroupUsingPOST(entityGroupId, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/entityGroup/${entityGroupId}/share`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getGroupEntityUsingGET(entityGroupId, entityId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroup/${entityGroupId}/${entityId}`
        };
        const response = await this.client.request(config);
        return schemas.ShortEntityViewSchema.parse(response.data);
    }
    async shareEntityGroupToChildOwnerUserGroupUsingPOST(entityGroupId, userGroupId, roleId, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/entityGroup/${entityGroupId}/${userGroupId}/${roleId}/share`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getEntityGroupByOwnerAndNameAndTypeUsingGET(ownerType, ownerId, groupType, groupName, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroup/${ownerType}/${ownerId}/${groupType}/${groupName}`
        };
        const response = await this.client.request(config);
        return schemas.EntityGroupInfoSchema.parse(response.data);
    }
    async getEntityGroupEntityInfoByIdUsingGET(entityGroupId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroupInfo/${entityGroupId}`
        };
        const response = await this.client.request(config);
        return schemas.EntityInfoSchema.parse(response.data);
    }
    async getSharedEntityGroupEntityInfosByTypeAndPageLinkUsingGET(groupType, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroupInfos/${groupType}/shared{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EntityInfoSchema.parse(response.data);
    }
    async getEntityGroupEntityInfosByTypeAndPageLinkUsingGET(groupType, includeShared, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroupInfos/${groupType}{?includeShared,page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                includeShared: includeShared,
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EntityInfoSchema.parse(response.data);
    }
    async getEntityGroupEntityInfosByOwnerAndTypeAndPageLinkUsingGET(ownerType, ownerId, groupType, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroupInfos/${ownerType}/${ownerId}/${groupType}{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EntityInfoSchema.parse(response.data);
    }
    async getEntityGroupEntityInfosHierarchyByOwnerAndTypeAndPageLinkUsingGET(ownerType, ownerId, groupType, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroupInfosHierarchy/${ownerType}/${ownerId}/${groupType}{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EntityInfoSchema.parse(response.data);
    }
    async getEntityGroupEntityInfosByIdsUsingGET(entityGroupIds, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroupInfos{?entityGroupIds}`,
            params: {
                entityGroupIds: entityGroupIds
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getEdgeEntityGroupsUsingGET(edgeId, groupType, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroups/edge/${edgeId}/${groupType}{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EntityGroupInfoSchema.parse(response.data);
    }
    async getEntityGroupsForEntityUsingGET(entityType, entityId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroups/${entityType}/${entityId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getSharedEntityGroupsByTypeUsingGET(groupType, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroups/${groupType}/shared`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getSharedEntityGroupsByTypeAndPageLinkUsingGET(groupType, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroups/${groupType}/shared{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EntityGroupInfoSchema.parse(response.data);
    }
    async getEntityGroupsByTypeAndPageLinkUsingGET(groupType, includeShared, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroups/${groupType}{?includeShared,page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                includeShared: includeShared,
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EntityGroupInfoSchema.parse(response.data);
    }
    async getEntityGroupsByTypeUsingGET(groupType, includeShared, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroups/${groupType}{?includeShared}`,
            params: {
                includeShared: includeShared
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getEntityGroupsByOwnerAndTypeUsingGET(ownerType, ownerId, groupType, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroups/${ownerType}/${ownerId}/${groupType}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getEntityGroupsByOwnerAndTypeAndPageLinkUsingGET(ownerType, ownerId, groupType, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroups/${ownerType}/${ownerId}/${groupType}{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EntityGroupInfoSchema.parse(response.data);
    }
    async getEntityGroupsHierarchyByOwnerAndTypeAndPageLinkUsingGET(ownerType, ownerId, groupType, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroupsHierarchy/${ownerType}/${ownerId}/${groupType}{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EntityGroupInfoSchema.parse(response.data);
    }
    async getEntityGroupsByIdsUsingGET(entityGroupIds, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroups{?entityGroupIds}`,
            params: {
                entityGroupIds: entityGroupIds
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getOwnerInfoUsingGET(ownerType, ownerId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/ownerInfo/${ownerType}/${ownerId}`
        };
        const response = await this.client.request(config);
        return schemas.EntityInfoSchema.parse(response.data);
    }
    async getOwnerInfosUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/ownerInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EntityInfoSchema.parse(response.data);
    }
    async getOwnersUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/owners{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_ContactBased_Of_objectSchema.parse(response.data);
    }
    async countAlarmsByQueryUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/alarmsQuery/count`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async findAlarmDataByQueryUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/alarmsQuery/find`,
            data
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_AlarmDataSchema.parse(response.data);
    }
    async countEntitiesByQueryUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/entitiesQuery/count`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async findEntityDataByQueryUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/entitiesQuery/find`,
            data
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EntityDataSchema.parse(response.data);
    }
    async findEntityTimeseriesAndAttributesKeysByQueryUsingPOST(timeseries, attributes, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/entitiesQuery/find/keys{?attributes,timeseries}`,
            params: {
                timeseries: timeseries,
                attributes: attributes
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async saveRelationUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/relation`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async findByQueryUsingPOST_3(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/relations`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async findInfoByQueryUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/relations/info`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async findInfoByFromUsingGET(fromId, fromType, relationTypeGroup, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/relations/info{?fromId,fromType,relationTypeGroup}`,
            params: {
                fromId: fromId,
                fromType: fromType,
                relationTypeGroup: relationTypeGroup
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async findInfoByToUsingGET(toId, toType, relationTypeGroup, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/relations/info{?relationTypeGroup,toId,toType}`,
            params: {
                toId: toId,
                toType: toType,
                relationTypeGroup: relationTypeGroup
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async deleteRelationsUsingDELETE(entityId, entityType, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/relations{?entityId,entityType}`,
            params: {
                entityId: entityId,
                entityType: entityType
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async findByFromUsingGET(fromId, fromType, relationType, relationTypeGroup, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/relations{?fromId,fromType,relationType,relationTypeGroup}`,
            params: {
                fromId: fromId,
                fromType: fromType,
                relationType: relationType,
                relationTypeGroup: relationTypeGroup
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async findByFromUsingGET_1(fromId, fromType, relationTypeGroup, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/relations{?fromId,fromType,relationTypeGroup}`,
            params: {
                fromId: fromId,
                fromType: fromType,
                relationTypeGroup: relationTypeGroup
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async findByToUsingGET(toId, toType, relationType, relationTypeGroup, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/relations{?relationType,relationTypeGroup,toId,toType}`,
            params: {
                toId: toId,
                toType: toType,
                relationType: relationType,
                relationTypeGroup: relationTypeGroup
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async findByToUsingGET_1(toId, toType, relationTypeGroup, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/relations{?relationTypeGroup,toId,toType}`,
            params: {
                toId: toId,
                toType: toType,
                relationTypeGroup: relationTypeGroup
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getRelationUsingGET(fromId, fromType, relationType, relationTypeGroup, toId, toType, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/relation{?fromId,fromType,relationType,relationTypeGroup,toId,toType}`,
            params: {
                fromId: fromId,
                fromType: fromType,
                relationType: relationType,
                relationTypeGroup: relationTypeGroup,
                toId: toId,
                toType: toType
            }
        };
        const response = await this.client.request(config);
        return schemas.EntityRelationSchema.parse(response.data);
    }
    async deleteRelationUsingDELETE(fromId, fromType, relationType, relationTypeGroup, toId, toType, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/relation{?fromId,fromType,relationType,relationTypeGroup,toId,toType}`,
            params: {
                fromId: fromId,
                fromType: fromType,
                relationType: relationType,
                relationTypeGroup: relationTypeGroup,
                toId: toId,
                toType: toType
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getCustomerEntityViewInfosUsingGET(customerId, pageSize, page, includeCustomers, type, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customer/${customerId}/entityViewInfos{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch,type}`,
            params: {
                pageSize: pageSize,
                page: page,
                includeCustomers: includeCustomers,
                type: type,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EntityViewInfoSchema.parse(response.data);
    }
    async getCustomerEntityViewsUsingGET(customerId, pageSize, page, type, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customer/${customerId}/entityViews{?page,pageSize,sortOrder,sortProperty,textSearch,type}`,
            params: {
                pageSize: pageSize,
                page: page,
                type: type,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EntityViewSchema.parse(response.data);
    }
    async getEntityViewsByEntityGroupIdUsingGET(entityGroupId, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroup/${entityGroupId}/entityViews{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EntityViewSchema.parse(response.data);
    }
    async getEntityViewInfoByIdUsingGET(entityViewId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityView/info/${entityViewId}`
        };
        const response = await this.client.request(config);
        return schemas.EntityViewInfoSchema.parse(response.data);
    }
    async getEntityViewTypesUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityView/types`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getEntityViewByIdUsingGET(entityViewId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityView/${entityViewId}`
        };
        const response = await this.client.request(config);
        return schemas.EntityViewSchema.parse(response.data);
    }
    async deleteEntityViewUsingDELETE(entityViewId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/entityView/${entityViewId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getAllEntityViewInfosUsingGET(pageSize, page, includeCustomers, type, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityViewInfos/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch,type}`,
            params: {
                pageSize: pageSize,
                page: page,
                includeCustomers: includeCustomers,
                type: type,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EntityViewInfoSchema.parse(response.data);
    }
    async findByQueryUsingPOST_4(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/entityViews`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getEntityViewsByIdsUsingGET(entityViewIds, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityViews{?entityViewIds}`,
            params: {
                entityViewIds: entityViewIds
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async saveEntityViewUsingPOST(entityGroupId, entityGroupIds, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/entityView{?entityGroupId,entityGroupIds}`,
            params: {
                entityGroupId: entityGroupId,
                entityGroupIds: entityGroupIds
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.EntityViewSchema.parse(response.data);
    }
    async getTenantEntityViewUsingGET(entityViewName, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenant/entityViews{?entityViewName}`,
            params: {
                entityViewName: entityViewName
            }
        };
        const response = await this.client.request(config);
        return schemas.EntityViewSchema.parse(response.data);
    }
    async getTenantEntityViewsUsingGET(pageSize, page, type, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenant/entityViews{?page,pageSize,sortOrder,sortProperty,textSearch,type}`,
            params: {
                pageSize: pageSize,
                page: page,
                type: type,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EntityViewSchema.parse(response.data);
    }
    async getUserEntityViewsUsingGET(pageSize, page, type, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/user/entityViews{?page,pageSize,sortOrder,sortProperty,textSearch,type}`,
            params: {
                pageSize: pageSize,
                page: page,
                type: type,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EntityViewSchema.parse(response.data);
    }
    async clearEventsUsingPOST(entityType, entityId, startTime, endTime, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/events/${entityType}/${entityId}/clear{?endTime,startTime}`,
            params: {
                startTime: startTime,
                endTime: endTime
            },
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getEventsUsingGET_1(entityType, entityId, eventType, tenantId, pageSize, page, textSearch, sortProperty, sortOrder, startTime, endTime, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/events/${entityType}/${entityId}/${eventType}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}`,
            params: {
                tenantId: tenantId,
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder,
                startTime: startTime,
                endTime: endTime
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EventInfoSchema.parse(response.data);
    }
    async getEventsUsingGET(entityType, entityId, tenantId, pageSize, page, textSearch, sortProperty, sortOrder, startTime, endTime, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/events/${entityType}/${entityId}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}`,
            params: {
                tenantId: tenantId,
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder,
                startTime: startTime,
                endTime: endTime
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EventInfoSchema.parse(response.data);
    }
    async getEventsUsingPOST(entityType, entityId, tenantId, pageSize, page, textSearch, sortProperty, sortOrder, startTime, endTime, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/events/${entityType}/${entityId}{?endTime,page,pageSize,sortOrder,sortProperty,startTime,tenantId,textSearch}`,
            params: {
                tenantId: tenantId,
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder,
                startTime: startTime,
                endTime: endTime
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EventInfoSchema.parse(response.data);
    }
    async getEntityGroupPermissionsUsingGET(entityGroupId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroup/${entityGroupId}/groupPermissions`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async saveGroupPermissionUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/groupPermission`,
            data
        };
        const response = await this.client.request(config);
        return schemas.GroupPermissionSchema.parse(response.data);
    }
    async getGroupPermissionInfoByIdUsingGET(groupPermissionId, isUserGroup, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/groupPermission/info/${groupPermissionId}{?isUserGroup}`,
            params: {
                isUserGroup: isUserGroup
            }
        };
        const response = await this.client.request(config);
        return schemas.GroupPermissionInfoSchema.parse(response.data);
    }
    async getGroupPermissionByIdUsingGET(groupPermissionId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/groupPermission/${groupPermissionId}`
        };
        const response = await this.client.request(config);
        return schemas.GroupPermissionSchema.parse(response.data);
    }
    async deleteGroupPermissionUsingDELETE(groupPermissionId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/groupPermission/${groupPermissionId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async loadUserGroupPermissionInfosUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/userGroup/groupPermissions/info`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getUserGroupPermissionsUsingGET(userGroupId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/userGroup/${userGroupId}/groupPermissions`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async uploadImageUsingPOST(options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/image`
        };
        const response = await this.client.request(config);
        return schemas.TbResourceInfoSchema.parse(response.data);
    }
    async importImageUsingPUT(data, options) {
        const config = {
            ...options,
            method: 'PUT',
            url: `/api/image/import`,
            data
        };
        const response = await this.client.request(config);
        return schemas.TbResourceInfoSchema.parse(response.data);
    }
    async downloadPublicImageUsingGET(publicResourceKey, If_None_Match, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/images/public/${publicResourceKey}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async downloadImageUsingGET(type, key, If_None_Match, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/images/${type}/${key}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async updateImageUsingPUT(type, key, options) {
        const config = {
            ...options,
            method: 'PUT',
            url: `/api/images/${type}/${key}`
        };
        const response = await this.client.request(config);
        return schemas.TbResourceInfoSchema.parse(response.data);
    }
    async exportImageUsingGET(type, key, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/images/${type}/${key}/export`
        };
        const response = await this.client.request(config);
        return schemas.ImageExportDataSchema.parse(response.data);
    }
    async getImageInfoUsingGET(type, key, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/images/${type}/${key}/info`
        };
        const response = await this.client.request(config);
        return schemas.TbResourceInfoSchema.parse(response.data);
    }
    async updateImageInfoUsingPUT(type, key, data, options) {
        const config = {
            ...options,
            method: 'PUT',
            url: `/api/images/${type}/${key}/info`,
            data
        };
        const response = await this.client.request(config);
        return schemas.TbResourceInfoSchema.parse(response.data);
    }
    async downloadImagePreviewUsingGET(type, key, If_None_Match, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/images/${type}/${key}/preview`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async updateImagePublicStatusUsingPUT(type, key, isPublic, options) {
        const config = {
            ...options,
            method: 'PUT',
            url: `/api/images/${type}/${key}/public/${isPublic}`
        };
        const response = await this.client.request(config);
        return schemas.TbResourceInfoSchema.parse(response.data);
    }
    async deleteImageUsingDELETE(type, key, force, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/images/${type}/${key}{?force}`,
            params: {
                force: force
            }
        };
        const response = await this.client.request(config);
        return schemas.TbImageDeleteResultSchema.parse(response.data);
    }
    async getImagesUsingGET(pageSize, page, includeSystemImages, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/images{?includeSystemImages,page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                includeSystemImages: includeSystemImages,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_TbResourceInfoSchema.parse(response.data);
    }
    async downloadLoginFaviconUsingGET(type, key, If_None_Match, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/noauth/whiteLabel/loginFavicon/${type}/${key}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async downloadLoginLogoUsingGET(type, key, If_None_Match, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/noauth/whiteLabel/loginLogo/${type}/${key}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async findEdgeMissingAttributesUsingGET(edgeId, integrationIds, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/edge/integration/${edgeId}/missingAttributes{?integrationIds}`,
            params: {
                integrationIds: integrationIds
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async findAllRelatedEdgesMissingAttributesUsingGET(integrationId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/edge/integration/${integrationId}/allMissingAttributes`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async assignIntegrationToEdgeUsingPOST(edgeId, integrationId, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/edge/${edgeId}/integration/${integrationId}`
        };
        const response = await this.client.request(config);
        return schemas.IntegrationSchema.parse(response.data);
    }
    async unassignIntegrationFromEdgeUsingDELETE(edgeId, integrationId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/edge/${edgeId}/integration/${integrationId}`
        };
        const response = await this.client.request(config);
        return schemas.IntegrationSchema.parse(response.data);
    }
    async getEdgeIntegrationInfosUsingGET(edgeId, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/edge/${edgeId}/integrationInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_IntegrationInfoSchema.parse(response.data);
    }
    async getEdgeIntegrationsUsingGET(edgeId, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/edge/${edgeId}/integrations{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_IntegrationSchema.parse(response.data);
    }
    async saveIntegrationUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/integration`,
            data
        };
        const response = await this.client.request(config);
        return schemas.IntegrationSchema.parse(response.data);
    }
    async checkIntegrationConnectionUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/integration/check`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getIntegrationByRoutingKeyUsingGET(routingKey, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/integration/routingKey/${routingKey}`
        };
        const response = await this.client.request(config);
        return schemas.IntegrationSchema.parse(response.data);
    }
    async getIntegrationByIdUsingGET(integrationId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/integration/${integrationId}`
        };
        const response = await this.client.request(config);
        return schemas.IntegrationSchema.parse(response.data);
    }
    async deleteIntegrationUsingDELETE(integrationId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/integration/${integrationId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getIntegrationInfosUsingGET(isEdgeTemplate, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/integrationInfos{?isEdgeTemplate,page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                isEdgeTemplate: isEdgeTemplate,
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_IntegrationInfoSchema.parse(response.data);
    }
    async getIntegrationsByIdsUsingGET(integrationIds, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/integrations{?integrationIds}`,
            params: {
                integrationIds: integrationIds
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getIntegrationsUsingGET(isEdgeTemplate, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/integrations{?isEdgeTemplate,page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                isEdgeTemplate: isEdgeTemplate,
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_IntegrationSchema.parse(response.data);
    }
    async getClientRegistrationTemplatesUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/mail/config/template`
        };
        const response = await this.client.request(config);
        return schemas.JsonNodeSchema.parse(response.data);
    }
    async getAvailableDeliveryMethodsUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/notification/deliveryMethods`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async createNotificationRequestUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/notification/request`,
            data
        };
        const response = await this.client.request(config);
        return schemas.NotificationRequestSchema.parse(response.data);
    }
    async getNotificationRequestPreviewUsingPOST(recipientsPreviewSize, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/notification/request/preview{?recipientsPreviewSize}`,
            params: {
                recipientsPreviewSize: recipientsPreviewSize
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.NotificationRequestPreviewSchema.parse(response.data);
    }
    async getNotificationRequestByIdUsingGET(id, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/notification/request/${id}`
        };
        const response = await this.client.request(config);
        return schemas.NotificationRequestInfoSchema.parse(response.data);
    }
    async deleteNotificationRequestUsingDELETE(id, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/notification/request/${id}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getNotificationRequestsUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/notification/requests{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_NotificationRequestInfoSchema.parse(response.data);
    }
    async getNotificationSettingsUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/notification/settings`
        };
        const response = await this.client.request(config);
        return schemas.NotificationSettingsSchema.parse(response.data);
    }
    async saveNotificationSettingsUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/notification/settings`,
            data
        };
        const response = await this.client.request(config);
        return schemas.NotificationSettingsSchema.parse(response.data);
    }
    async getUserNotificationSettingsUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/notification/settings/user`
        };
        const response = await this.client.request(config);
        return schemas.UserNotificationSettingsSchema.parse(response.data);
    }
    async saveUserNotificationSettingsUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/notification/settings/user`,
            data
        };
        const response = await this.client.request(config);
        return schemas.UserNotificationSettingsSchema.parse(response.data);
    }
    async deleteNotificationUsingDELETE(id, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/notification/${id}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async markNotificationAsReadUsingPUT(id, options) {
        const config = {
            ...options,
            method: 'PUT',
            url: `/api/notification/${id}/read`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async markAllNotificationsAsReadUsingPUT(options) {
        const config = {
            ...options,
            method: 'PUT',
            url: `/api/notifications/read`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getNotificationsUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, unreadOnly, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/notifications{?page,pageSize,sortOrder,sortProperty,textSearch,unreadOnly}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder,
                unreadOnly: unreadOnly
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_NotificationSchema.parse(response.data);
    }
    async saveNotificationRuleUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/notification/rule`,
            data
        };
        const response = await this.client.request(config);
        return schemas.NotificationRuleSchema.parse(response.data);
    }
    async getNotificationRuleByIdUsingGET(id, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/notification/rule/${id}`
        };
        const response = await this.client.request(config);
        return schemas.NotificationRuleInfoSchema.parse(response.data);
    }
    async deleteNotificationRuleUsingDELETE(id, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/notification/rule/${id}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getNotificationRulesUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/notification/rules{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_NotificationRuleInfoSchema.parse(response.data);
    }
    async saveNotificationTargetUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/notification/target`,
            data
        };
        const response = await this.client.request(config);
        return schemas.NotificationTargetSchema.parse(response.data);
    }
    async getRecipientsForNotificationTargetConfigUsingPOST(pageSize, page, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/notification/target/recipients{?page,pageSize}`,
            params: {
                pageSize: pageSize,
                page: page
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_UserSchema.parse(response.data);
    }
    async getNotificationTargetByIdUsingGET(id, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/notification/target/${id}`
        };
        const response = await this.client.request(config);
        return schemas.NotificationTargetSchema.parse(response.data);
    }
    async deleteNotificationTargetByIdUsingDELETE(id, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/notification/target/${id}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getNotificationTargetsByIdsUsingGET(ids, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/notification/targets{?ids}`,
            params: {
                ids: ids
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getNotificationTargetsBySupportedNotificationTypeUsingGET(notificationType, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/notification/targets{?notificationType,page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                notificationType: notificationType,
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_NotificationTargetSchema.parse(response.data);
    }
    async getNotificationTargetsUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/notification/targets{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_NotificationTargetSchema.parse(response.data);
    }
    async listSlackConversationsUsingGET(type, token, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/notification/slack/conversations{?token,type}`,
            params: {
                type: type,
                token: token
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async saveNotificationTemplateUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/notification/template`,
            data
        };
        const response = await this.client.request(config);
        return schemas.NotificationTemplateSchema.parse(response.data);
    }
    async getNotificationTemplateByIdUsingGET(id, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/notification/template/${id}`
        };
        const response = await this.client.request(config);
        return schemas.NotificationTemplateSchema.parse(response.data);
    }
    async deleteNotificationTemplateByIdUsingDELETE(id, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/notification/template/${id}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getNotificationTemplatesUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, notificationTypes, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/notification/templates{?notificationTypes,page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder,
                notificationTypes: notificationTypes
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_NotificationTemplateSchema.parse(response.data);
    }
    async getClientRegistrationTemplatesUsingGET_1(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/oauth2/config/template`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async saveClientRegistrationTemplateUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/oauth2/config/template`,
            data
        };
        const response = await this.client.request(config);
        return schemas.OAuth2ClientRegistrationTemplateSchema.parse(response.data);
    }
    async deleteClientRegistrationTemplateUsingDELETE(clientRegistrationTemplateId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/oauth2/config/template/${clientRegistrationTemplateId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getOAuth2ClientsUsingPOST(pkgName, platform, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/noauth/oauth2Clients{?pkgName,platform}`,
            params: {
                pkgName: pkgName,
                platform: platform
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getCurrentOAuth2InfoUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/oauth2/config`
        };
        const response = await this.client.request(config);
        return schemas.OAuth2InfoSchema.parse(response.data);
    }
    async saveOAuth2InfoUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/oauth2/config`,
            data
        };
        const response = await this.client.request(config);
        return schemas.OAuth2InfoSchema.parse(response.data);
    }
    async getLoginProcessingUrlUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/oauth2/loginProcessingUrl`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async saveOtaPackageInfoUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/otaPackage`,
            data
        };
        const response = await this.client.request(config);
        return schemas.OtaPackageInfoSchema.parse(response.data);
    }
    async getOtaPackageInfoByIdUsingGET(otaPackageId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/otaPackage/info/${otaPackageId}`
        };
        const response = await this.client.request(config);
        return schemas.OtaPackageInfoSchema.parse(response.data);
    }
    async getOtaPackageByIdUsingGET(otaPackageId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/otaPackage/${otaPackageId}`
        };
        const response = await this.client.request(config);
        return schemas.OtaPackageSchema.parse(response.data);
    }
    async saveOtaPackageDataUsingPOST(otaPackageId, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/otaPackage/${otaPackageId}`
        };
        const response = await this.client.request(config);
        return schemas.OtaPackageInfoSchema.parse(response.data);
    }
    async deleteOtaPackageUsingDELETE(otaPackageId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/otaPackage/${otaPackageId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async downloadOtaPackageUsingGET(otaPackageId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/otaPackage/${otaPackageId}/download`
        };
        const response = await this.client.request(config);
        return schemas.ResourceSchema.parse(response.data);
    }
    async getGroupOtaPackagesUsingGET(groupId, type, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/otaPackages/group/${groupId}/${type}{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_OtaPackageInfoSchema.parse(response.data);
    }
    async getOtaPackagesUsingGET_1(deviceProfileId, type, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/otaPackages/${deviceProfileId}/${type}{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_OtaPackageInfoSchema.parse(response.data);
    }
    async getOtaPackagesUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/otaPackages{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_OtaPackageInfoSchema.parse(response.data);
    }
    async changeOwnerToCustomerUsingPOST(ownerId, entityType, entityId, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/owner/CUSTOMER/${ownerId}/${entityType}/${entityId}`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async changeOwnerToTenantUsingPOST(ownerId, entityType, entityId, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/owner/TENANT/${ownerId}/${entityType}/${entityId}`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getQueueByNameUsingGET(queueName, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/queues/name/${queueName}`
        };
        const response = await this.client.request(config);
        return schemas.QueueSchema.parse(response.data);
    }
    async getQueueByIdUsingGET(queueId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/queues/${queueId}`
        };
        const response = await this.client.request(config);
        return schemas.QueueSchema.parse(response.data);
    }
    async deleteQueueUsingDELETE(queueId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/queues/${queueId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getTenantQueuesByServiceTypeUsingGET(serviceType, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/queues{?page,pageSize,serviceType,sortOrder,sortProperty,textSearch}`,
            params: {
                serviceType: serviceType,
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_QueueSchema.parse(response.data);
    }
    async saveQueueUsingPOST(serviceType, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/queues{?serviceType}`,
            params: {
                serviceType: serviceType
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.QueueSchema.parse(response.data);
    }
    async downloadTestReportUsingPOST(reportsServerEndpointUrl, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/report/test{?reportsServerEndpointUrl}`,
            params: {
                reportsServerEndpointUrl: reportsServerEndpointUrl
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async downloadDashboardReportUsingPOST(dashboardId, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/report/${dashboardId}/download`,
            data
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async saveRoleUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/role`,
            data
        };
        const response = await this.client.request(config);
        return schemas.RoleSchema.parse(response.data);
    }
    async getRoleByIdUsingGET(roleId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/role/${roleId}`
        };
        const response = await this.client.request(config);
        return schemas.RoleSchema.parse(response.data);
    }
    async deleteRoleUsingDELETE(roleId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/role/${roleId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getRolesUsingGET(pageSize, page, type, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/roles{?page,pageSize,sortOrder,sortProperty,textSearch,type}`,
            params: {
                pageSize: pageSize,
                page: page,
                type: type,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_RoleSchema.parse(response.data);
    }
    async getRolesByIdsUsingGET(roleIds, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/roles{?roleIds}`,
            params: {
                roleIds: roleIds
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async handleOneWayDeviceRPCRequestUsingPOST(deviceId, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/plugins/rpc/oneway/${deviceId}`,
            data
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async handleTwoWayDeviceRPCRequestUsingPOST(deviceId, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/plugins/rpc/twoway/${deviceId}`,
            data
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async handleOneWayDeviceRPCRequestUsingPOST_1(deviceId, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/rpc/oneway/${deviceId}`,
            data
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async getPersistedRpcByDeviceUsingGET(deviceId, pageSize, page, rpcStatus, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/rpc/persistent/device/${deviceId}{?page,pageSize,rpcStatus,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                rpcStatus: rpcStatus,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async getPersistedRpcUsingGET(rpcId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/rpc/persistent/${rpcId}`
        };
        const response = await this.client.request(config);
        return schemas.RpcSchema.parse(response.data);
    }
    async deleteRpcUsingDELETE(rpcId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/rpc/persistent/${rpcId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async handleTwoWayDeviceRPCRequestUsingPOST_1(deviceId, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/rpc/twoway/${deviceId}`,
            data
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async assignRuleChainToEdgeUsingPOST(edgeId, ruleChainId, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/edge/${edgeId}/ruleChain/${ruleChainId}`
        };
        const response = await this.client.request(config);
        return schemas.RuleChainSchema.parse(response.data);
    }
    async unassignRuleChainFromEdgeUsingDELETE(edgeId, ruleChainId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/edge/${edgeId}/ruleChain/${ruleChainId}`
        };
        const response = await this.client.request(config);
        return schemas.RuleChainSchema.parse(response.data);
    }
    async getEdgeRuleChainsUsingGET(edgeId, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/edge/${edgeId}/ruleChains{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_RuleChainSchema.parse(response.data);
    }
    async saveRuleChainUsingPOST_1(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/ruleChain`,
            data
        };
        const response = await this.client.request(config);
        return schemas.RuleChainSchema.parse(response.data);
    }
    async getAutoAssignToEdgeRuleChainsUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/ruleChain/autoAssignToEdgeRuleChains`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async saveRuleChainUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/ruleChain/device/default`,
            data
        };
        const response = await this.client.request(config);
        return schemas.RuleChainSchema.parse(response.data);
    }
    async saveRuleChainMetaDataUsingPOST(updateRelated, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/ruleChain/metadata{?updateRelated}`,
            params: {
                updateRelated: updateRelated
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.RuleChainMetaDataSchema.parse(response.data);
    }
    async isTbelEnabledUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/ruleChain/tbelEnabled`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async testScriptUsingPOST(scriptLang, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/ruleChain/testScript{?scriptLang}`,
            params: {
                scriptLang: scriptLang
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.JsonNodeSchema.parse(response.data);
    }
    async getRuleChainByIdUsingGET(ruleChainId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/ruleChain/${ruleChainId}`
        };
        const response = await this.client.request(config);
        return schemas.RuleChainSchema.parse(response.data);
    }
    async deleteRuleChainUsingDELETE(ruleChainId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/ruleChain/${ruleChainId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async setAutoAssignToEdgeRuleChainUsingPOST(ruleChainId, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/ruleChain/${ruleChainId}/autoAssignToEdge`
        };
        const response = await this.client.request(config);
        return schemas.RuleChainSchema.parse(response.data);
    }
    async unsetAutoAssignToEdgeRuleChainUsingDELETE(ruleChainId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/ruleChain/${ruleChainId}/autoAssignToEdge`
        };
        const response = await this.client.request(config);
        return schemas.RuleChainSchema.parse(response.data);
    }
    async setEdgeTemplateRootRuleChainUsingPOST(ruleChainId, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/ruleChain/${ruleChainId}/edgeTemplateRoot`
        };
        const response = await this.client.request(config);
        return schemas.RuleChainSchema.parse(response.data);
    }
    async getRuleChainMetaDataUsingGET(ruleChainId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/ruleChain/${ruleChainId}/metadata`
        };
        const response = await this.client.request(config);
        return schemas.RuleChainMetaDataSchema.parse(response.data);
    }
    async getRuleChainOutputLabelsUsingGET(ruleChainId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/ruleChain/${ruleChainId}/output/labels`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getRuleChainOutputLabelsUsageUsingGET(ruleChainId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/ruleChain/${ruleChainId}/output/labels/usage`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async setRootRuleChainUsingPOST(ruleChainId, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/ruleChain/${ruleChainId}/root`
        };
        const response = await this.client.request(config);
        return schemas.RuleChainSchema.parse(response.data);
    }
    async exportRuleChainsUsingGET(limit, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/ruleChains/export{?limit}`,
            params: {
                limit: limit
            }
        };
        const response = await this.client.request(config);
        return schemas.RuleChainDataSchema.parse(response.data);
    }
    async importRuleChainsUsingPOST(overwrite, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/ruleChains/import{?overwrite}`,
            params: {
                overwrite: overwrite
            },
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getRuleChainsUsingGET(pageSize, page, type, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/ruleChains{?page,pageSize,sortOrder,sortProperty,textSearch,type}`,
            params: {
                pageSize: pageSize,
                page: page,
                type: type,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_RuleChainSchema.parse(response.data);
    }
    async getLatestRuleNodeDebugInputUsingGET(ruleNodeId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/ruleNode/${ruleNodeId}/debugIn`
        };
        const response = await this.client.request(config);
        return schemas.JsonNodeSchema.parse(response.data);
    }
    async handleRuleEngineRequestUsingPOST_3(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/rule-engine/`,
            data
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async handleRuleEngineRequestUsingPOST_2(entityType, entityId, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/rule-engine/${entityType}/${entityId}`,
            data
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async handleRuleEngineRequestUsingPOST_1(entityType, entityId, queueName, timeout, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/rule-engine/${entityType}/${entityId}/${queueName}/${timeout}`,
            data
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async handleRuleEngineRequestUsingPOST(entityType, entityId, timeout, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/rule-engine/${entityType}/${entityId}/${timeout}`,
            data
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async getAllSchedulerEventsUsingGET(edgeId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/edge/${edgeId}/allSchedulerEvents`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async assignSchedulerEventToEdgeUsingPOST(edgeId, schedulerEventId, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/edge/${edgeId}/schedulerEvent/${schedulerEventId}`
        };
        const response = await this.client.request(config);
        return schemas.SchedulerEventInfoSchema.parse(response.data);
    }
    async unassignSchedulerEventFromEdgeUsingDELETE(edgeId, schedulerEventId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/edge/${edgeId}/schedulerEvent/${schedulerEventId}`
        };
        const response = await this.client.request(config);
        return schemas.SchedulerEventInfoSchema.parse(response.data);
    }
    async getEdgeSchedulerEventsUsingGET(edgeId, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/edge/${edgeId}/schedulerEvents{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_SchedulerEventInfoSchema.parse(response.data);
    }
    async saveSchedulerEventUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/schedulerEvent`,
            data
        };
        const response = await this.client.request(config);
        return schemas.SchedulerEventSchema.parse(response.data);
    }
    async getSchedulerEventInfoByIdUsingGET(schedulerEventId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/schedulerEvent/info/${schedulerEventId}`
        };
        const response = await this.client.request(config);
        return schemas.SchedulerEventWithCustomerInfoSchema.parse(response.data);
    }
    async getSchedulerEventByIdUsingGET(schedulerEventId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/schedulerEvent/${schedulerEventId}`
        };
        const response = await this.client.request(config);
        return schemas.SchedulerEventSchema.parse(response.data);
    }
    async deleteSchedulerEventUsingDELETE(schedulerEventId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/schedulerEvent/${schedulerEventId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getSchedulerEventsByIdsUsingGET(schedulerEventIds, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/schedulerEvents{?schedulerEventIds}`,
            params: {
                schedulerEventIds: schedulerEventIds
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getSchedulerEventsUsingGET(type, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/schedulerEvents{?type}`,
            params: {
                type: type
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getPrivacyPolicyUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/noauth/selfRegistration/privacyPolicy`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getSignUpSelfRegistrationParamsUsingGET(pkgName, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/noauth/selfRegistration/signUpSelfRegistrationParams{?pkgName}`,
            params: {
                pkgName: pkgName
            }
        };
        const response = await this.client.request(config);
        return schemas.SignUpSelfRegistrationParamsSchema.parse(response.data);
    }
    async getTermsOfUseUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/noauth/selfRegistration/termsOfUse`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getSelfRegistrationParamsUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/selfRegistration/selfRegistrationParams`
        };
        const response = await this.client.request(config);
        return schemas.SelfRegistrationParamsSchema.parse(response.data);
    }
    async saveSelfRegistrationParamsUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/selfRegistration/selfRegistrationParams`,
            data
        };
        const response = await this.client.request(config);
        return schemas.SelfRegistrationParamsSchema.parse(response.data);
    }
    async deleteSelfRegistrationParamsUsingDELETE(domainName, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/selfRegistration/selfRegistrationParams/${domainName}`
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async activateUserByEmailCodeUsingPOST(emailCode, pkgName, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/noauth/activateByEmailCode{?emailCode,pkgName}`,
            params: {
                emailCode: emailCode,
                pkgName: pkgName
            }
        };
        const response = await this.client.request(config);
        return schemas.JWT_PairSchema.parse(response.data);
    }
    async activateEmailUsingGET(emailCode, pkgName, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/noauth/activateEmail{?emailCode,pkgName}`,
            params: {
                emailCode: emailCode,
                pkgName: pkgName
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async mobileLoginUsingGET(pkgName, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/noauth/login{?pkgName}`,
            params: {
                pkgName: pkgName
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async resendEmailActivationUsingPOST(email, pkgName, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/noauth/resendEmailActivation{?email,pkgName}`,
            params: {
                email: email,
                pkgName: pkgName
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async signUpUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/noauth/signup`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async acceptPrivacyPolicyUsingPOST(options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/signup/acceptPrivacyPolicy`
        };
        const response = await this.client.request(config);
        return schemas.JsonNodeSchema.parse(response.data);
    }
    async acceptTermsOfUseUsingPOST(options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/signup/acceptTermsOfUse`
        };
        const response = await this.client.request(config);
        return schemas.JsonNodeSchema.parse(response.data);
    }
    async privacyPolicyAcceptedUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/signup/privacyPolicyAccepted`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async termsOfUseAcceptedUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/signup/termsOfUseAccepted`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getSolutionTemplateDetailsUsingGET(solutionTemplateId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/solutions/templates/details/${solutionTemplateId}`
        };
        const response = await this.client.request(config);
        return schemas.TenantSolutionTemplateDetailsSchema.parse(response.data);
    }
    async getSolutionTemplateInfosUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/solutions/templates/infos`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getSolutionTemplateInstructionsUsingGET(solutionTemplateId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/solutions/templates/instructions/${solutionTemplateId}`
        };
        const response = await this.client.request(config);
        return schemas.TenantSolutionTemplateInstructionsSchema.parse(response.data);
    }
    async uninstallSolutionTemplateUsingDELETE(solutionTemplateId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/solutions/templates/${solutionTemplateId}/delete`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async installSolutionTemplateUsingPOST(solutionTemplateId, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/solutions/templates/${solutionTemplateId}/install`
        };
        const response = await this.client.request(config);
        return schemas.SolutionInstallResponseSchema.parse(response.data);
    }
    async saveResourceUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/resource`,
            data
        };
        const response = await this.client.request(config);
        return schemas.TbResourceInfoSchema.parse(response.data);
    }
    async getResourceInfoByIdUsingGET(resourceId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/resource/info/${resourceId}`
        };
        const response = await this.client.request(config);
        return schemas.TbResourceInfoSchema.parse(response.data);
    }
    async downloadJksResourceIfChangedUsingGET(resourceId, If_None_Match, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/resource/jks/${resourceId}/download`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async downloadJsResourceIfChangedUsingGET(resourceId, If_None_Match, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/resource/js/${resourceId}/download`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getLwm2mListObjectsPageUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/resource/lwm2m/page{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async downloadLwm2mResourceIfChangedUsingGET(resourceId, If_None_Match, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/resource/lwm2m/${resourceId}/download`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getLwm2mListObjectsUsingGET(sortOrder, sortProperty, objectIds, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/resource/lwm2m{?objectIds,sortOrder,sortProperty}`,
            params: {
                sortOrder: sortOrder,
                sortProperty: sortProperty,
                objectIds: objectIds
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async downloadPkcs12ResourceIfChangedUsingGET(resourceId, If_None_Match, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/resource/pkcs12/${resourceId}/download`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getTenantResourcesUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/resource/tenant{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_TbResourceInfoSchema.parse(response.data);
    }
    async deleteResourceUsingDELETE(resourceId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/resource/${resourceId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async downloadResourceUsingGET(resourceId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/resource/${resourceId}/download`
        };
        const response = await this.client.request(config);
        return schemas.ByteArrayResourceSchema.parse(response.data);
    }
    async getResourcesUsingGET(pageSize, page, resourceType, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/resource{?page,pageSize,resourceType,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                resourceType: resourceType,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_TbResourceInfoSchema.parse(response.data);
    }
    async saveDeviceAttributesUsingPOST(deviceId, scope, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/plugins/telemetry/${deviceId}/${scope}`,
            data
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async deleteDeviceAttributesUsingDELETE(deviceId, scope, keys, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/plugins/telemetry/${deviceId}/${scope}{?keys}`,
            params: {
                keys: keys
            }
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async saveEntityAttributesV2UsingPOST(entityType, entityId, scope, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/plugins/telemetry/${entityType}/${entityId}/attributes/${scope}`,
            data
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async getAttributeKeysUsingGET(entityType, entityId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/plugins/telemetry/${entityType}/${entityId}/keys/attributes`
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async getAttributeKeysByScopeUsingGET(entityType, entityId, scope, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/plugins/telemetry/${entityType}/${entityId}/keys/attributes/${scope}`
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async getTimeseriesKeysUsingGET_1(entityType, entityId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/plugins/telemetry/${entityType}/${entityId}/keys/timeseries`
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async deleteEntityTimeseriesUsingDELETE(entityType, entityId, keys, deleteAllDataForKeys, startTs, endTs, deleteLatest, rewriteLatestIfDeleted, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/plugins/telemetry/${entityType}/${entityId}/timeseries/delete{?deleteAllDataForKeys,deleteLatest,endTs,keys,rewriteLatestIfDeleted,startTs}`,
            params: {
                keys: keys,
                deleteAllDataForKeys: deleteAllDataForKeys,
                startTs: startTs,
                endTs: endTs,
                deleteLatest: deleteLatest,
                rewriteLatestIfDeleted: rewriteLatestIfDeleted
            }
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async saveEntityTelemetryWithTTLUsingPOST(entityType, entityId, scope, ttl, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/plugins/telemetry/${entityType}/${entityId}/timeseries/${scope}/${ttl}?scope=ANY`,
            data
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async saveEntityTelemetryUsingPOST(entityType, entityId, scope, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/plugins/telemetry/${entityType}/${entityId}/timeseries/${scope}?scope=ANY`,
            data
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async getAttributesByScopeUsingGET(entityType, entityId, scope, keys, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/plugins/telemetry/${entityType}/${entityId}/values/attributes/${scope}{?keys}`,
            params: {
                keys: keys
            }
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async getAttributesUsingGET(entityType, entityId, keys, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/plugins/telemetry/${entityType}/${entityId}/values/attributes{?keys}`,
            params: {
                keys: keys
            }
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async getTimeseriesUsingGET(entityType, entityId, keys, startTs, endTs, interval, limit, agg, orderBy, useStrictDataTypes, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/plugins/telemetry/${entityType}/${entityId}/values/timeseries{?agg,endTs,interval,keys,limit,orderBy,startTs,useStrictDataTypes}`,
            params: {
                keys: keys,
                startTs: startTs,
                endTs: endTs,
                interval: interval,
                limit: limit,
                agg: agg,
                orderBy: orderBy,
                useStrictDataTypes: useStrictDataTypes
            }
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async getLatestTimeseriesUsingGET(entityType, entityId, keys, useStrictDataTypes, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/plugins/telemetry/${entityType}/${entityId}/values/timeseries{?keys,useStrictDataTypes}`,
            params: {
                keys: keys,
                useStrictDataTypes: useStrictDataTypes
            }
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async saveEntityAttributesV1UsingPOST(entityType, entityId, scope, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/plugins/telemetry/${entityType}/${entityId}/${scope}`,
            data
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async deleteEntityAttributesUsingDELETE(entityType, entityId, scope, keys, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/plugins/telemetry/${entityType}/${entityId}/${scope}{?keys}`,
            params: {
                keys: keys
            }
        };
        const response = await this.client.request(config);
        return schemas.DeferredResult_Of_ResponseEntitySchema.parse(response.data);
    }
    async saveTenantUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/tenant`,
            data
        };
        const response = await this.client.request(config);
        return schemas.TenantSchema.parse(response.data);
    }
    async getTenantInfoByIdUsingGET(tenantId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenant/info/${tenantId}`
        };
        const response = await this.client.request(config);
        return schemas.TenantInfoSchema.parse(response.data);
    }
    async getTenantByIdUsingGET(tenantId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenant/${tenantId}`
        };
        const response = await this.client.request(config);
        return schemas.TenantSchema.parse(response.data);
    }
    async deleteTenantUsingDELETE(tenantId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/tenant/${tenantId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getTenantInfosUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenantInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_TenantInfoSchema.parse(response.data);
    }
    async getTenantsUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenants{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_TenantSchema.parse(response.data);
    }
    async getTenantsByIdsUsingGET(tenantIds, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenants{?tenantIds}`,
            params: {
                tenantIds: tenantIds
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async saveTenantProfileUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/tenantProfile`,
            data
        };
        const response = await this.client.request(config);
        return schemas.TenantProfileSchema.parse(response.data);
    }
    async getTenantProfileByIdUsingGET(tenantProfileId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenantProfile/${tenantProfileId}`
        };
        const response = await this.client.request(config);
        return schemas.TenantProfileSchema.parse(response.data);
    }
    async deleteTenantProfileUsingDELETE(tenantProfileId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/tenantProfile/${tenantProfileId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async setDefaultTenantProfileUsingPOST(tenantProfileId, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/tenantProfile/${tenantProfileId}/default`
        };
        const response = await this.client.request(config);
        return schemas.TenantProfileSchema.parse(response.data);
    }
    async getDefaultTenantProfileInfoUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenantProfileInfo/default`
        };
        const response = await this.client.request(config);
        return schemas.EntityInfoSchema.parse(response.data);
    }
    async getTenantProfileInfoByIdUsingGET(tenantProfileId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenantProfileInfo/${tenantProfileId}`
        };
        const response = await this.client.request(config);
        return schemas.EntityInfoSchema.parse(response.data);
    }
    async getTenantProfileInfosUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenantProfileInfos{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_EntityInfoSchema.parse(response.data);
    }
    async getTenantProfilesByIdsUsingGET(ids, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenantProfiles{?ids}`,
            params: {
                ids: ids
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getTenantProfilesUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenantProfiles{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_TenantProfileSchema.parse(response.data);
    }
    async generateTwoFaAccountConfigUsingPOST(providerType, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/2fa/account/config/generate{?providerType}`,
            params: {
                providerType: providerType
            }
        };
        const response = await this.client.request(config);
        return schemas.TwoFaAccountConfigSchema.parse(response.data);
    }
    async submitTwoFaAccountConfigUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/2fa/account/config/submit`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async updateTwoFaAccountConfigUsingPUT(providerType, data, options) {
        const config = {
            ...options,
            method: 'PUT',
            url: `/api/2fa/account/config{?providerType}`,
            params: {
                providerType: providerType
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.AccountTwoFaSettingsSchema.parse(response.data);
    }
    async deleteTwoFaAccountConfigUsingDELETE(providerType, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/2fa/account/config{?providerType}`,
            params: {
                providerType: providerType
            }
        };
        const response = await this.client.request(config);
        return schemas.AccountTwoFaSettingsSchema.parse(response.data);
    }
    async verifyAndSaveTwoFaAccountConfigUsingPOST(verificationCode, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/2fa/account/config{?verificationCode}`,
            params: {
                verificationCode: verificationCode
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.AccountTwoFaSettingsSchema.parse(response.data);
    }
    async getAccountTwoFaSettingsUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/2fa/account/settings`
        };
        const response = await this.client.request(config);
        return schemas.AccountTwoFaSettingsSchema.parse(response.data);
    }
    async getAvailableTwoFaProvidersUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/2fa/providers`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getPlatformTwoFaSettingsUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/2fa/settings`
        };
        const response = await this.client.request(config);
        return schemas.PlatformTwoFaSettingsSchema.parse(response.data);
    }
    async savePlatformTwoFaSettingsUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/2fa/settings`,
            data
        };
        const response = await this.client.request(config);
        return schemas.PlatformTwoFaSettingsSchema.parse(response.data);
    }
    async getAvailableTwoFaProvidersUsingGET_1(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/auth/2fa/providers`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async checkTwoFaVerificationCodeUsingPOST(providerType, verificationCode, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/auth/2fa/verification/check{?providerType,verificationCode}`,
            params: {
                providerType: providerType,
                verificationCode: verificationCode
            }
        };
        const response = await this.client.request(config);
        return schemas.JWT_PairSchema.parse(response.data);
    }
    async requestTwoFaVerificationCodeUsingPOST(providerType, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/auth/2fa/verification/send{?providerType}`,
            params: {
                providerType: providerType
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getHelpBaseUrlUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/uiSettings/helpBaseUrl`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getTenantUsageInfoUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/usage`
        };
        const response = await this.client.request(config);
        return schemas.UsageInfoSchema.parse(response.data);
    }
    async getAllCustomerUsersUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customer/users{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_UserSchema.parse(response.data);
    }
    async getCustomerUserInfosUsingGET(customerId, pageSize, page, includeCustomers, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customer/${customerId}/userInfos{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                includeCustomers: includeCustomers,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_UserInfoSchema.parse(response.data);
    }
    async getCustomerUsersUsingGET(customerId, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/customer/${customerId}/users{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_UserSchema.parse(response.data);
    }
    async getUsersByEntityGroupIdUsingGET(entityGroupId, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/entityGroup/${entityGroupId}/users{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_UserSchema.parse(response.data);
    }
    async getTenantAdminsUsingGET(tenantId, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/tenant/${tenantId}/users{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_UserSchema.parse(response.data);
    }
    async getUserDashboardsInfoUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/user/dashboards`
        };
        const response = await this.client.request(config);
        return schemas.UserDashboardsInfoSchema.parse(response.data);
    }
    async reportUserDashboardActionUsingGET(dashboardId, action, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/user/dashboards/${dashboardId}/${action}`
        };
        const response = await this.client.request(config);
        return schemas.UserDashboardsInfoSchema.parse(response.data);
    }
    async getUserInfoByIdUsingGET(userId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/user/info/${userId}`
        };
        const response = await this.client.request(config);
        return schemas.UserInfoSchema.parse(response.data);
    }
    async sendActivationEmailUsingPOST(email, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/user/sendActivationMail{?email}`,
            params: {
                email: email
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getUserSettingsUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/user/settings`
        };
        const response = await this.client.request(config);
        return schemas.JsonNodeSchema.parse(response.data);
    }
    async putUserSettingsUsingPUT(data, options) {
        const config = {
            ...options,
            method: 'PUT',
            url: `/api/user/settings`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async saveUserSettingsUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/user/settings`,
            data
        };
        const response = await this.client.request(config);
        return schemas.JsonNodeSchema.parse(response.data);
    }
    async deleteUserSettingsUsingDELETE_1(paths, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/user/settings/${paths}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getUserSettingsUsingGET_1(type, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/user/settings/${type}`
        };
        const response = await this.client.request(config);
        return schemas.JsonNodeSchema.parse(response.data);
    }
    async putUserSettingsUsingPUT_1(type, data, options) {
        const config = {
            ...options,
            method: 'PUT',
            url: `/api/user/settings/${type}`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async deleteUserSettingsUsingDELETE(paths, type, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/user/settings/${type}/${paths}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async isUserTokenAccessEnabledUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/user/tokenAccessEnabled`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getUserUsersUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/user/users{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_UserSchema.parse(response.data);
    }
    async getUserByIdUsingGET(userId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/user/${userId}`
        };
        const response = await this.client.request(config);
        return schemas.UserSchema.parse(response.data);
    }
    async deleteUserUsingDELETE(userId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/user/${userId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getActivationLinkUsingGET(userId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/user/${userId}/activationLink`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getUserTokenUsingGET(userId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/user/${userId}/token`
        };
        const response = await this.client.request(config);
        return schemas.JWT_PairSchema.parse(response.data);
    }
    async setUserCredentialsEnabledUsingPOST(userId, userCredentialsEnabled, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/user/${userId}/userCredentialsEnabled{?userCredentialsEnabled}`,
            params: {
                userCredentialsEnabled: userCredentialsEnabled
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getAllUserInfosUsingGET(pageSize, page, includeCustomers, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/userInfos/all{?includeCustomers,page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                includeCustomers: includeCustomers,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_UserInfoSchema.parse(response.data);
    }
    async getUsersForAssignUsingGET(alarmId, pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/users/assign/${alarmId}{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_UserEmailInfoSchema.parse(response.data);
    }
    async findUsersByQueryUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/users/info{?page,pageSize,sortOrder,sortProperty,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_UserEmailInfoSchema.parse(response.data);
    }
    async getUsersByIdsUsingGET(userIds, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/users{?userIds}`,
            params: {
                userIds: userIds
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async saveUserUsingPOST(sendActivationMail, entityGroupId, entityGroupIds, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/user{?entityGroupId,entityGroupIds,sendActivationMail}`,
            params: {
                sendActivationMail: sendActivationMail,
                entityGroupId: entityGroupId,
                entityGroupIds: entityGroupIds
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.UserSchema.parse(response.data);
    }
    async getAllowedPermissionsUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/permissions/allowedPermissions`
        };
        const response = await this.client.request(config);
        return schemas.AllowedPermissionsInfoSchema.parse(response.data);
    }
    async getLoginWhiteLabelParamsUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/noauth/whiteLabel/loginWhiteLabelParams`
        };
        const response = await this.client.request(config);
        return schemas.LoginWhiteLabelingParamsSchema.parse(response.data);
    }
    async getCurrentLoginWhiteLabelParamsUsingGET(customerId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/whiteLabel/currentLoginWhiteLabelParams{?customerId}`,
            params: {
                customerId: customerId
            }
        };
        const response = await this.client.request(config);
        return schemas.LoginWhiteLabelingParamsSchema.parse(response.data);
    }
    async getCurrentWhiteLabelParamsUsingGET(customerId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/whiteLabel/currentWhiteLabelParams{?customerId}`,
            params: {
                customerId: customerId
            }
        };
        const response = await this.client.request(config);
        return schemas.WhiteLabelingParamsSchema.parse(response.data);
    }
    async isCustomerWhiteLabelingAllowedUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/whiteLabel/isCustomerWhiteLabelingAllowed`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async isWhiteLabelingAllowedUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/whiteLabel/isWhiteLabelingAllowed`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async saveLoginWhiteLabelParamsUsingPOST(customerId, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/whiteLabel/loginWhiteLabelParams{?customerId}`,
            params: {
                customerId: customerId
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.LoginWhiteLabelingParamsSchema.parse(response.data);
    }
    async saveMailTemplatesUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/whiteLabel/mailTemplates`,
            data
        };
        const response = await this.client.request(config);
        return schemas.JsonNodeSchema.parse(response.data);
    }
    async getMailTemplatesUsingGET(systemByDefault, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/whiteLabel/mailTemplates{?systemByDefault}`,
            params: {
                systemByDefault: systemByDefault
            }
        };
        const response = await this.client.request(config);
        return schemas.JsonNodeSchema.parse(response.data);
    }
    async previewWhiteLabelParamsUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/whiteLabel/previewWhiteLabelParams`,
            data
        };
        const response = await this.client.request(config);
        return schemas.WhiteLabelingParamsSchema.parse(response.data);
    }
    async getWhiteLabelParamsUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/whiteLabel/whiteLabelParams`
        };
        const response = await this.client.request(config);
        return schemas.WhiteLabelingParamsSchema.parse(response.data);
    }
    async saveWhiteLabelParamsUsingPOST(customerId, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/whiteLabel/whiteLabelParams{?customerId}`,
            params: {
                customerId: customerId
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.WhiteLabelingParamsSchema.parse(response.data);
    }
    async deleteWidgetTypeUsingDELETE(widgetTypeId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/widgetType/${widgetTypeId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getWidgetTypeByIdUsingGET(widgetTypeId, inlineImages, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/widgetType/${widgetTypeId}{?inlineImages}`,
            params: {
                inlineImages: inlineImages
            }
        };
        const response = await this.client.request(config);
        return schemas.WidgetTypeDetailsSchema.parse(response.data);
    }
    async getBundleWidgetTypeFqnsUsingGET(widgetsBundleId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/widgetTypeFqns{?widgetsBundleId}`,
            params: {
                widgetsBundleId: widgetsBundleId
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getWidgetTypeInfoByIdUsingGET(widgetTypeId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/widgetTypeInfo/${widgetTypeId}`
        };
        const response = await this.client.request(config);
        return schemas.WidgetTypeInfoSchema.parse(response.data);
    }
    async getBundleWidgetTypesDetailsByBundleAliasUsingGET(isSystem, bundleAlias, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/widgetTypesDetails{?bundleAlias,isSystem}`,
            params: {
                isSystem: isSystem,
                bundleAlias: bundleAlias
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getBundleWidgetTypesDetailsUsingGET(widgetsBundleId, inlineImages, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/widgetTypesDetails{?inlineImages,widgetsBundleId}`,
            params: {
                widgetsBundleId: widgetsBundleId,
                inlineImages: inlineImages
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getBundleWidgetTypesInfosByBundleAliasUsingGET(isSystem, bundleAlias, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/widgetTypesInfos{?bundleAlias,isSystem}`,
            params: {
                isSystem: isSystem,
                bundleAlias: bundleAlias
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getBundleWidgetTypesInfosUsingGET(widgetsBundleId, pageSize, page, textSearch, sortProperty, sortOrder, fullSearch, deprecatedFilter, widgetTypeList, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/widgetTypesInfos{?deprecatedFilter,fullSearch,page,pageSize,sortOrder,sortProperty,textSearch,widgetTypeList,widgetsBundleId}`,
            params: {
                widgetsBundleId: widgetsBundleId,
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder,
                fullSearch: fullSearch,
                deprecatedFilter: deprecatedFilter,
                widgetTypeList: widgetTypeList
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_WidgetTypeInfoSchema.parse(response.data);
    }
    async getBundleWidgetTypesByBundleAliasUsingGET(isSystem, bundleAlias, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/widgetTypes{?bundleAlias,isSystem}`,
            params: {
                isSystem: isSystem,
                bundleAlias: bundleAlias
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getWidgetTypesUsingGET(pageSize, page, textSearch, sortProperty, sortOrder, tenantOnly, fullSearch, deprecatedFilter, widgetTypeList, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/widgetTypes{?deprecatedFilter,fullSearch,page,pageSize,sortOrder,sortProperty,tenantOnly,textSearch,widgetTypeList}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder,
                tenantOnly: tenantOnly,
                fullSearch: fullSearch,
                deprecatedFilter: deprecatedFilter,
                widgetTypeList: widgetTypeList
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_WidgetTypeInfoSchema.parse(response.data);
    }
    async getBundleWidgetTypesUsingGET(widgetsBundleId, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/widgetTypes{?widgetsBundleId}`,
            params: {
                widgetsBundleId: widgetsBundleId
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getWidgetTypeByBundleAliasAndTypeAliasUsingGET(isSystem, bundleAlias, alias, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/widgetType{?alias,bundleAlias,isSystem}`,
            params: {
                isSystem: isSystem,
                bundleAlias: bundleAlias,
                alias: alias
            }
        };
        const response = await this.client.request(config);
        return schemas.WidgetTypeSchema.parse(response.data);
    }
    async getWidgetTypeUsingGET(fqn, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/widgetType{?fqn}`,
            params: {
                fqn: fqn
            }
        };
        const response = await this.client.request(config);
        return schemas.WidgetTypeSchema.parse(response.data);
    }
    async saveWidgetTypeUsingPOST(updateExistingByFqn, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/widgetType{?updateExistingByFqn}`,
            params: {
                updateExistingByFqn: updateExistingByFqn
            },
            data
        };
        const response = await this.client.request(config);
        return schemas.WidgetTypeDetailsSchema.parse(response.data);
    }
    async saveWidgetsBundleUsingPOST(data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/widgetsBundle`,
            data
        };
        const response = await this.client.request(config);
        return schemas.WidgetsBundleSchema.parse(response.data);
    }
    async deleteWidgetsBundleUsingDELETE(widgetsBundleId, options) {
        const config = {
            ...options,
            method: 'DELETE',
            url: `/api/widgetsBundle/${widgetsBundleId}`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async updateWidgetsBundleWidgetFqnsUsingPOST(widgetsBundleId, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/widgetsBundle/${widgetsBundleId}/widgetTypeFqns`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async updateWidgetsBundleWidgetTypesUsingPOST(widgetsBundleId, data, options) {
        const config = {
            ...options,
            method: 'POST',
            url: `/api/widgetsBundle/${widgetsBundleId}/widgetTypes`,
            data
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getWidgetsBundleByIdUsingGET(widgetsBundleId, inlineImages, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/widgetsBundle/${widgetsBundleId}{?inlineImages}`,
            params: {
                inlineImages: inlineImages
            }
        };
        const response = await this.client.request(config);
        return schemas.WidgetsBundleSchema.parse(response.data);
    }
    async getWidgetsBundlesUsingGET(options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/widgetsBundles`
        };
        const response = await this.client.request(config);
        return response.data;
    }
    async getWidgetsBundlesUsingGET_1(pageSize, page, textSearch, sortProperty, sortOrder, tenantOnly, fullSearch, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/widgetsBundles{?fullSearch,page,pageSize,sortOrder,sortProperty,tenantOnly,textSearch}`,
            params: {
                pageSize: pageSize,
                page: page,
                textSearch: textSearch,
                sortProperty: sortProperty,
                sortOrder: sortOrder,
                tenantOnly: tenantOnly,
                fullSearch: fullSearch
            }
        };
        const response = await this.client.request(config);
        return schemas.PageData_Of_WidgetsBundleSchema.parse(response.data);
    }
    async getWidgetsBundlesByIdsUsingGET(widgetsBundleIds, options) {
        const config = {
            ...options,
            method: 'GET',
            url: `/api/widgetsBundles{?widgetsBundleIds}`,
            params: {
                widgetsBundleIds: widgetsBundleIds
            }
        };
        const response = await this.client.request(config);
        return response.data;
    }
}
exports.VXOlympusClient = VXOlympusClient;
__exportStar(require("./schemas"), exports);
