import { BaseVXOlympusClient } from '../base-client';
import * as schemas from './schemas';
export declare class VXOlympusClient extends BaseVXOlympusClient {
    constructor(baseURL: string, token?: string);
    getAutoCommitSettingsUsingGET(options?: RequestInit): Promise<any>;
    saveAutoCommitSettingsUsingPOST(data: Record<string, schemas.AutoVersionCreateConfig>, options?: RequestInit): Promise<any>;
    deleteAutoCommitSettingsUsingDELETE(options?: RequestInit): Promise<any>;
    autoCommitSettingsExistsUsingGET(options?: RequestInit): Promise<any>;
    getFeaturesInfoUsingGET(options?: RequestInit): Promise<{
        smsEnabled: boolean;
        emailEnabled: boolean;
        notificationEnabled: boolean;
        oauthEnabled: boolean;
        twoFaEnabled: boolean;
        whiteLabelingEnabled: boolean;
    }>;
    getJwtSettingsUsingGET(options?: RequestInit): Promise<{
        tokenExpirationTime: number;
        refreshTokenExpTime: number;
        tokenIssuer: string;
        tokenSigningKey: string;
    }>;
    saveJwtSettingsUsingPOST(data: schemas.JWT_Settings, options?: RequestInit): Promise<{
        token: string;
        refreshToken: string;
        scope: "CUSTOMER_USER" | "PRE_VERIFICATION_TOKEN" | "REFRESH_TOKEN" | "SYS_ADMIN" | "TENANT_ADMIN";
    }>;
    getLicenseUsageInfoUsingGET(options?: RequestInit): Promise<{
        maxAssets: number;
        maxDevices: number;
        whiteLabelingEnabled: boolean;
        assetsCount: number;
        dashboardsCount: number;
        development: boolean;
        devicesCount: number;
        integrationsCount: number;
        plan: string;
    }>;
    getAuthorizationUrlUsingGET(options?: RequestInit): Promise<any>;
    codeProcessingUrlUsingGET(code: string, state: string, options?: RequestInit): Promise<any>;
    getMailProcessingUrlUsingGET(options?: RequestInit): Promise<any>;
    getRepositorySettingsUsingGET(options?: RequestInit): Promise<{
        password: string;
        readOnly: boolean;
        username: string;
        authMethod: "PRIVATE_KEY" | "USERNAME_PASSWORD";
        defaultBranch: string;
        privateKey: string;
        privateKeyFileName: string;
        privateKeyPassword: string;
        repositoryUri: string;
        showMergeCommits: boolean;
    }>;
    saveRepositorySettingsUsingPOST(data: schemas.RepositorySettings, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    deleteRepositorySettingsUsingDELETE(options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    checkRepositoryAccessUsingPOST(data: schemas.RepositorySettings, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    repositorySettingsExistsUsingGET(options?: RequestInit): Promise<any>;
    getRepositorySettingsInfoUsingGET(options?: RequestInit): Promise<{
        readOnly: boolean;
        configured: boolean;
    }>;
    getSecuritySettingsUsingGET(options?: RequestInit): Promise<{
        maxFailedLoginAttempts: number;
        userLockoutNotificationEmail: string;
        passwordPolicy?: any;
    }>;
    saveSecuritySettingsUsingPOST(data: schemas.SecuritySettings, options?: RequestInit): Promise<{
        maxFailedLoginAttempts: number;
        userLockoutNotificationEmail: string;
        passwordPolicy?: any;
    }>;
    saveAdminSettingsUsingPOST(data: schemas.AdminSettings, options?: RequestInit): Promise<{
        createdTime: number;
        key: string;
        id?: any;
        tenantId?: any;
        jsonValue?: any;
    }>;
    sendTestMailUsingPOST(data: schemas.AdminSettings, options?: RequestInit): Promise<any>;
    sendTestSmsUsingPOST(data: schemas.TestSmsRequest, options?: RequestInit): Promise<any>;
    getAdminSettingsUsingGET(key: string, systemByDefault: boolean, options?: RequestInit): Promise<{
        createdTime: number;
        key: string;
        id?: any;
        tenantId?: any;
        jsonValue?: any;
    }>;
    getSystemInfoUsingGET(options?: RequestInit): Promise<{
        monolith: boolean;
        systemData: any[];
    }>;
    checkUpdatesUsingGET(options?: RequestInit): Promise<{
        currentVersion: string;
        updateAvailable: boolean;
        latestVersion: string;
        upgradeInstructionsUrl: string;
        currentVersionReleaseNotesUrl: string;
        latestVersionReleaseNotesUrl: string;
    }>;
    loginPost(data: schemas.LoginRequest, options?: RequestInit): Promise<{
        token: string;
        refreshToken: string;
    }>;
    saveAlarmCommentUsingPOST(alarmId: string, data: schemas.AlarmComment, options?: RequestInit): Promise<{
        type: "OTHER" | "SYSTEM";
        createdTime: number;
        name: string;
        id?: any;
        alarmId?: any;
        userId?: any;
        comment?: any;
    }>;
    deleteAlarmCommentUsingDELETE(alarmId: string, commentId: string, options?: RequestInit): Promise<any>;
    getAlarmCommentsUsingGET(alarmId: string, pageSize: number, page: number, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    saveAlarmUsingPOST(data: schemas.Alarm, options?: RequestInit): Promise<{
        type: string;
        status: "ACTIVE_ACK" | "ACTIVE_UNACK" | "CLEARED_ACK" | "CLEARED_UNACK";
        createdTime: number;
        name: string;
        severity: "CRITICAL" | "INDETERMINATE" | "MAJOR" | "MINOR" | "WARNING";
        acknowledged: boolean;
        cleared: boolean;
        startTs: number;
        endTs: number;
        ackTs: number;
        clearTs: number;
        assignTs: number;
        propagateToOwnerHierarchy: boolean;
        propagate: boolean;
        propagateToTenant: boolean;
        propagateRelationTypes: string[];
        propagateToOwner: boolean;
        id?: any;
        tenantId?: any;
        customerId?: any;
        originator?: any;
        assigneeId?: any;
        details?: any;
    }>;
    getHighestAlarmSeverityUsingGET(entityType: string, entityId: string, searchStatus: string, status: string, assigneeId: string, options?: RequestInit): Promise<any>;
    getAlarmInfoByIdUsingGET(alarmId: string, options?: RequestInit): Promise<{
        type: string;
        status: "ACTIVE_ACK" | "ACTIVE_UNACK" | "CLEARED_ACK" | "CLEARED_UNACK";
        createdTime: number;
        name: string;
        severity: "CRITICAL" | "INDETERMINATE" | "MAJOR" | "MINOR" | "WARNING";
        acknowledged: boolean;
        cleared: boolean;
        startTs: number;
        endTs: number;
        ackTs: number;
        clearTs: number;
        assignTs: number;
        propagateToOwnerHierarchy: boolean;
        propagate: boolean;
        propagateToTenant: boolean;
        propagateRelationTypes: string[];
        propagateToOwner: boolean;
        originatorName: string;
        originatorLabel: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        originator?: any;
        assigneeId?: any;
        details?: any;
        assignee?: any;
    }>;
    getAlarmTypesUsingGET(pageSize: number, page: number, textSearch: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getAlarmByIdUsingGET(alarmId: string, options?: RequestInit): Promise<{
        type: string;
        status: "ACTIVE_ACK" | "ACTIVE_UNACK" | "CLEARED_ACK" | "CLEARED_UNACK";
        createdTime: number;
        name: string;
        severity: "CRITICAL" | "INDETERMINATE" | "MAJOR" | "MINOR" | "WARNING";
        acknowledged: boolean;
        cleared: boolean;
        startTs: number;
        endTs: number;
        ackTs: number;
        clearTs: number;
        assignTs: number;
        propagateToOwnerHierarchy: boolean;
        propagate: boolean;
        propagateToTenant: boolean;
        propagateRelationTypes: string[];
        propagateToOwner: boolean;
        id?: any;
        tenantId?: any;
        customerId?: any;
        originator?: any;
        assigneeId?: any;
        details?: any;
    }>;
    deleteAlarmUsingDELETE(alarmId: string, options?: RequestInit): Promise<any>;
    ackAlarmUsingPOST(alarmId: string, options?: RequestInit): Promise<{
        type: string;
        status: "ACTIVE_ACK" | "ACTIVE_UNACK" | "CLEARED_ACK" | "CLEARED_UNACK";
        createdTime: number;
        name: string;
        severity: "CRITICAL" | "INDETERMINATE" | "MAJOR" | "MINOR" | "WARNING";
        acknowledged: boolean;
        cleared: boolean;
        startTs: number;
        endTs: number;
        ackTs: number;
        clearTs: number;
        assignTs: number;
        propagateToOwnerHierarchy: boolean;
        propagate: boolean;
        propagateToTenant: boolean;
        propagateRelationTypes: string[];
        propagateToOwner: boolean;
        originatorName: string;
        originatorLabel: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        originator?: any;
        assigneeId?: any;
        details?: any;
        assignee?: any;
    }>;
    unassignAlarmUsingDELETE(alarmId: string, options?: RequestInit): Promise<{
        type: string;
        status: "ACTIVE_ACK" | "ACTIVE_UNACK" | "CLEARED_ACK" | "CLEARED_UNACK";
        createdTime: number;
        name: string;
        severity: "CRITICAL" | "INDETERMINATE" | "MAJOR" | "MINOR" | "WARNING";
        acknowledged: boolean;
        cleared: boolean;
        startTs: number;
        endTs: number;
        ackTs: number;
        clearTs: number;
        assignTs: number;
        propagateToOwnerHierarchy: boolean;
        propagate: boolean;
        propagateToTenant: boolean;
        propagateRelationTypes: string[];
        propagateToOwner: boolean;
        id?: any;
        tenantId?: any;
        customerId?: any;
        originator?: any;
        assigneeId?: any;
        details?: any;
    }>;
    assignAlarmUsingPOST(alarmId: string, assigneeId: string, options?: RequestInit): Promise<{
        type: string;
        status: "ACTIVE_ACK" | "ACTIVE_UNACK" | "CLEARED_ACK" | "CLEARED_UNACK";
        createdTime: number;
        name: string;
        severity: "CRITICAL" | "INDETERMINATE" | "MAJOR" | "MINOR" | "WARNING";
        acknowledged: boolean;
        cleared: boolean;
        startTs: number;
        endTs: number;
        ackTs: number;
        clearTs: number;
        assignTs: number;
        propagateToOwnerHierarchy: boolean;
        propagate: boolean;
        propagateToTenant: boolean;
        propagateRelationTypes: string[];
        propagateToOwner: boolean;
        id?: any;
        tenantId?: any;
        customerId?: any;
        originator?: any;
        assigneeId?: any;
        details?: any;
    }>;
    clearAlarmUsingPOST(alarmId: string, options?: RequestInit): Promise<{
        type: string;
        status: "ACTIVE_ACK" | "ACTIVE_UNACK" | "CLEARED_ACK" | "CLEARED_UNACK";
        createdTime: number;
        name: string;
        severity: "CRITICAL" | "INDETERMINATE" | "MAJOR" | "MINOR" | "WARNING";
        acknowledged: boolean;
        cleared: boolean;
        startTs: number;
        endTs: number;
        ackTs: number;
        clearTs: number;
        assignTs: number;
        propagateToOwnerHierarchy: boolean;
        propagate: boolean;
        propagateToTenant: boolean;
        propagateRelationTypes: string[];
        propagateToOwner: boolean;
        originatorName: string;
        originatorLabel: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        originator?: any;
        assigneeId?: any;
        details?: any;
        assignee?: any;
    }>;
    getAlarmsUsingGET(entityType: string, entityId: string, searchStatus: string, status: string, assigneeId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, fetchOriginator: boolean, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getAllAlarmsUsingGET(searchStatus: string, status: string, assigneeId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, fetchOriginator: boolean, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getAlarmsV2UsingGET(entityType: string, entityId: string, statusList: string, severityList: string, typeList: string, assigneeId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getAllAlarmsV2UsingGET(statusList: string, severityList: string, typeList: string, assigneeId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    processAssetBulkImportUsingPOST(data: schemas.BulkImportRequest, options?: RequestInit): Promise<{
        errorsList: string[];
        created?: any;
        errors?: any;
        updated?: any;
    }>;
    getAssetInfoByIdUsingGET(assetId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        ownerName: string;
        groups: any[];
        id?: any;
        tenantId?: any;
        customerId?: any;
        assetProfileId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    getAssetTypesUsingGET(options?: RequestInit): Promise<any>;
    getAssetByIdUsingGET(assetId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        assetProfileId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    deleteAssetUsingDELETE(assetId: string, options?: RequestInit): Promise<any>;
    getAllAssetInfosUsingGET(pageSize: number, page: number, includeCustomers: boolean, assetProfileId: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    findByQueryUsingPOST(data: schemas.AssetSearchQuery, options?: RequestInit): Promise<any>;
    getAssetsByIdsUsingGET(assetIds: string, options?: RequestInit): Promise<any>;
    saveAssetUsingPOST(entityGroupId: string, entityGroupIds: string, data: schemas.Asset, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        assetProfileId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    getCustomerAssetInfosUsingGET(customerId: string, pageSize: number, page: number, includeCustomers: boolean, assetProfileId: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getCustomerAssetsUsingGET(customerId: string, pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getAssetsByEntityGroupIdUsingGET(entityGroupId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getTenantAssetUsingGET(assetName: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        assetProfileId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    getTenantAssetsUsingGET(pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getUserAssetsUsingGET(pageSize: number, page: number, type: string, assetProfileId: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    saveAssetProfileUsingPOST(data: schemas.AssetProfile, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        default: boolean;
        defaultQueueName: string;
        description: string;
        image: string;
        id?: any;
        tenantId?: any;
        defaultDashboardId?: any;
        defaultRuleChainId?: any;
        defaultEdgeRuleChainId?: any;
    }>;
    getAssetProfileNamesUsingGET(activeOnly: boolean, options?: RequestInit): Promise<any>;
    deleteAssetProfileUsingDELETE(assetProfileId: string, options?: RequestInit): Promise<any>;
    setDefaultAssetProfileUsingPOST(assetProfileId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        default: boolean;
        defaultQueueName: string;
        description: string;
        image: string;
        id?: any;
        tenantId?: any;
        defaultDashboardId?: any;
        defaultRuleChainId?: any;
        defaultEdgeRuleChainId?: any;
    }>;
    getAssetProfileByIdUsingGET(assetProfileId: string, inlineImages: boolean, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        default: boolean;
        defaultQueueName: string;
        description: string;
        image: string;
        id?: any;
        tenantId?: any;
        defaultDashboardId?: any;
        defaultRuleChainId?: any;
        defaultEdgeRuleChainId?: any;
    }>;
    getDefaultAssetProfileInfoUsingGET(options?: RequestInit): Promise<{
        name: string;
        image: string;
        id?: any;
        tenantId?: any;
        defaultDashboardId?: any;
    }>;
    getAssetProfileInfoByIdUsingGET(assetProfileId: string, options?: RequestInit): Promise<{
        name: string;
        image: string;
        id?: any;
        tenantId?: any;
        defaultDashboardId?: any;
    }>;
    getAssetProfilesByIdsUsingGET(assetProfileIds: string, options?: RequestInit): Promise<any>;
    getAssetProfileInfosUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getAssetProfilesUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getAuditLogsByCustomerIdUsingGET(customerId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, actionTypes: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getAuditLogsByEntityIdUsingGET(entityType: string, entityId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, actionTypes: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getAuditLogsByUserIdUsingGET(userId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, actionTypes: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getAuditLogsUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, actionTypes: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    changePasswordUsingPOST(data: schemas.ChangePasswordRequest, options?: RequestInit): Promise<{}>;
    logoutUsingPOST(options?: RequestInit): Promise<any>;
    getUserUsingGET(options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        email: string;
        firstName: string;
        lastName: string;
        phone: string;
        authority: "CUSTOMER_USER" | "PRE_VERIFICATION_TOKEN" | "REFRESH_TOKEN" | "SYS_ADMIN" | "TENANT_ADMIN";
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    checkActivateTokenUsingGET(activateToken: string, options?: RequestInit): Promise<any>;
    activateUserUsingPOST(sendActivationMail: boolean, data: schemas.ActivateUserRequest, options?: RequestInit): Promise<{
        token: string;
        refreshToken: string;
        scope: "CUSTOMER_USER" | "PRE_VERIFICATION_TOKEN" | "REFRESH_TOKEN" | "SYS_ADMIN" | "TENANT_ADMIN";
    }>;
    resetPasswordUsingPOST(data: schemas.ResetPasswordRequest, options?: RequestInit): Promise<{
        token: string;
        refreshToken: string;
        scope: "CUSTOMER_USER" | "PRE_VERIFICATION_TOKEN" | "REFRESH_TOKEN" | "SYS_ADMIN" | "TENANT_ADMIN";
    }>;
    requestResetPasswordByEmailUsingPOST(data: schemas.ResetPasswordEmailRequest, options?: RequestInit): Promise<any>;
    checkResetTokenUsingGET(resetToken: string, options?: RequestInit): Promise<any>;
    getUserPasswordPolicyUsingGET(options?: RequestInit): Promise<{
        allowWhitespaces: boolean;
        forceUserToResetPasswordIfNotValid: boolean;
        maximumLength: number;
        minimumDigits: number;
        minimumLength: number;
        minimumLowercaseLetters: number;
        minimumSpecialCharacters: number;
        minimumUppercaseLetters: number;
        passwordExpirationPeriodDays: number;
        passwordReuseFrequencyDays: number;
    }>;
    getBlobEntitiesByIdsUsingGET(blobEntityIds: string, options?: RequestInit): Promise<any>;
    getBlobEntitiesUsingGET(pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getBlobEntityInfoByIdUsingGET(blobEntityId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        contentType: "application/pdf" | "image/jpeg" | "image/png";
        customerTitle: string;
        customerIsPublic: {};
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    deleteBlobEntityUsingDELETE(blobEntityId: string, options?: RequestInit): Promise<any>;
    downloadBlobEntityUsingGET(blobEntityId: string, options?: RequestInit): Promise<{
        description: string;
        file: string;
        filename: string;
        open: boolean;
        readable: boolean;
        uri: string;
        url: string;
        inputStream?: any;
    }>;
    getComponentDescriptorByClazzUsingGET(componentDescriptorClazz: string, options?: RequestInit): Promise<{
        type: "ACTION" | "ANALYTICS" | "ENRICHMENT" | "EXTERNAL" | "FILTER" | "FLOW" | "TRANSFORMATION";
        createdTime: number;
        name: string;
        scope: "TENANT";
        clusteringMode: "ENABLED" | "SINGLETON" | "USER_PREFERENCE";
        clazz: string;
        configurationVersion: number;
        actions: string;
        id?: any;
        configurationDescriptor?: any;
    }>;
    getComponentDescriptorsByTypeUsingGET(componentType: string, ruleChainType: string, options?: RequestInit): Promise<any>;
    getComponentDescriptorsByTypesUsingGET(componentTypes: string, ruleChainType: string, options?: RequestInit): Promise<any>;
    saveConverterUsingPOST(data: schemas.Converter, options?: RequestInit): Promise<{
        type: "DOWNLINK" | "UPLINK";
        createdTime: number;
        name: string;
        debugMode: boolean;
        edgeTemplate: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
    }>;
    testDownLinkConverterUsingPOST(scriptLang: string, data: schemas.JsonNode, options?: RequestInit): Promise<{}>;
    testUpLinkConverterUsingPOST(scriptLang: string, data: schemas.JsonNode, options?: RequestInit): Promise<{}>;
    getConverterByIdUsingGET(converterId: string, options?: RequestInit): Promise<{
        type: "DOWNLINK" | "UPLINK";
        createdTime: number;
        name: string;
        debugMode: boolean;
        edgeTemplate: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
    }>;
    deleteConverterUsingDELETE(converterId: string, options?: RequestInit): Promise<any>;
    getLatestConverterDebugInputUsingGET(converterId: string, converterType: string, integrationType: string, integrationName: string, options?: RequestInit): Promise<{}>;
    getConvertersByIdsUsingGET(converterIds: string, options?: RequestInit): Promise<any>;
    getConvertersUsingGET(isEdgeTemplate: boolean, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getCurrentCustomMenuUsingGET(options?: RequestInit): Promise<{
        disabledMenuItems: string[];
        menuItems: any[];
    }>;
    getCustomMenuUsingGET(options?: RequestInit): Promise<{
        disabledMenuItems: string[];
        menuItems: any[];
    }>;
    saveCustomMenuUsingPOST(data: schemas.CustomMenu, options?: RequestInit): Promise<{
        disabledMenuItems: string[];
        menuItems: any[];
    }>;
    getCurrentCustomTranslationUsingGET(options?: RequestInit): Promise<{
        translationMap: Record<string, string>;
    }>;
    getCustomTranslationUsingGET(options?: RequestInit): Promise<{
        translationMap: Record<string, string>;
    }>;
    saveCustomTranslationUsingPOST(data: schemas.CustomTranslation, options?: RequestInit): Promise<{
        translationMap: Record<string, string>;
    }>;
    getCustomerInfoByIdUsingGET(customerId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        email: string;
        ownerName: string;
        groups: any[];
        address: string;
        address2: string;
        city: string;
        country: string;
        phone: string;
        state: string;
        zip: string;
        title: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        parentCustomerId?: any;
    }>;
    getCustomerByIdUsingGET(customerId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        email: string;
        address: string;
        address2: string;
        city: string;
        country: string;
        phone: string;
        state: string;
        zip: string;
        title: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        parentCustomerId?: any;
    }>;
    deleteCustomerUsingDELETE(customerId: string, options?: RequestInit): Promise<any>;
    getCustomerCustomerInfosUsingGET(customerId: string, pageSize: number, page: number, includeCustomers: boolean, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getShortCustomerInfoByIdUsingGET(customerId: string, options?: RequestInit): Promise<{}>;
    getCustomerTitleByIdUsingGET(customerId: string, options?: RequestInit): Promise<any>;
    getAllCustomerInfosUsingGET(pageSize: number, page: number, includeCustomers: boolean, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getCustomersByIdsUsingGET(customerIds: string, options?: RequestInit): Promise<any>;
    getCustomersUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    saveCustomerUsingPOST(entityGroupId: string, entityGroupIds: string, data: schemas.Customer, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        email: string;
        address: string;
        address2: string;
        city: string;
        country: string;
        phone: string;
        state: string;
        zip: string;
        title: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        parentCustomerId?: any;
    }>;
    getCustomersByEntityGroupIdUsingGET(entityGroupId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getTenantCustomerUsingGET(customerTitle: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        email: string;
        address: string;
        address2: string;
        city: string;
        country: string;
        phone: string;
        state: string;
        zip: string;
        title: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        parentCustomerId?: any;
    }>;
    getUserCustomersUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getCustomerHomeDashboardInfoUsingGET(options?: RequestInit): Promise<{
        hideDashboardToolbar: boolean;
        dashboardId?: any;
    }>;
    setCustomerHomeDashboardInfoUsingPOST(data: schemas.HomeDashboardInfo, options?: RequestInit): Promise<any>;
    getCustomerDashboardsUsingGET(customerId: string, pageSize: number, page: number, includeCustomers: boolean, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getHomeDashboardUsingGET(options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        image: string;
        hideDashboardToolbar: boolean;
        title: string;
        assignedCustomers: any[];
        mobileHide: boolean;
        mobileOrder: number;
        id?: any;
        tenantId?: any;
        customerId?: any;
        ownerId?: any;
        configuration?: any;
    }>;
    getHomeDashboardInfoUsingGET(options?: RequestInit): Promise<{
        hideDashboardToolbar: boolean;
        dashboardId?: any;
    }>;
    getDashboardInfoByIdUsingGET(dashboardId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        ownerName: string;
        groups: any[];
        image: string;
        title: string;
        assignedCustomers: any[];
        mobileHide: boolean;
        mobileOrder: number;
        id?: any;
        tenantId?: any;
        customerId?: any;
        ownerId?: any;
        configuration?: any;
    }>;
    getMaxDatapointsLimitUsingGET(options?: RequestInit): Promise<any>;
    getServerTimeUsingGET(options?: RequestInit): Promise<any>;
    deleteDashboardUsingDELETE(dashboardId: string, options?: RequestInit): Promise<any>;
    getDashboardByIdUsingGET(dashboardId: string, inlineImages: boolean, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        image: string;
        title: string;
        assignedCustomers: any[];
        mobileHide: boolean;
        mobileOrder: number;
        id?: any;
        tenantId?: any;
        customerId?: any;
        ownerId?: any;
        configuration?: any;
    }>;
    getAllDashboardsUsingGET(pageSize: number, page: number, includeCustomers: boolean, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getDashboardsByIdsUsingGET(dashboardIds: string, options?: RequestInit): Promise<any>;
    saveDashboardUsingPOST(entityGroupId: string, entityGroupIds: string, data: schemas.Dashboard, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        image: string;
        title: string;
        assignedCustomers: any[];
        mobileHide: boolean;
        mobileOrder: number;
        id?: any;
        tenantId?: any;
        customerId?: any;
        ownerId?: any;
        configuration?: any;
    }>;
    exportGroupDashboardsUsingGET(entityGroupId: string, limit: number, options?: RequestInit): Promise<any>;
    importGroupDashboardsUsingPOST(entityGroupId: string, overwrite: boolean, data: Array<schemas.Dashboard>, options?: RequestInit): Promise<any>;
    getDashboardsByEntityGroupIdUsingGET(entityGroupId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getTenantHomeDashboardInfoUsingGET(options?: RequestInit): Promise<{
        hideDashboardToolbar: boolean;
        dashboardId?: any;
    }>;
    setTenantHomeDashboardInfoUsingPOST(data: schemas.HomeDashboardInfo, options?: RequestInit): Promise<any>;
    getTenantDashboardsUsingGET(pageSize: number, page: number, mobile: boolean, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getTenantDashboardsUsingGET_1(tenantId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getUserDashboardsUsingGET(pageSize: number, page: number, mobile: boolean, textSearch: string, sortProperty: string, sortOrder: string, operation: string, userId: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    downloadGatewayDockerComposeUsingGET(deviceId: string, options?: RequestInit): Promise<{
        description: string;
        file: string;
        filename: string;
        open: boolean;
        readable: boolean;
        uri: string;
        url: string;
        inputStream?: any;
    }>;
    getDevicePublishTelemetryCommandsUsingGET(deviceId: string, options?: RequestInit): Promise<{}>;
    downloadServerCertificateUsingGET(protocol: string, options?: RequestInit): Promise<{
        description: string;
        file: string;
        filename: string;
        open: boolean;
        readable: boolean;
        uri: string;
        url: string;
        inputStream?: any;
    }>;
    reClaimDeviceUsingDELETE(deviceName: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    claimDeviceUsingPOST(deviceName: string, subCustomerId: string, data: schemas.ClaimRequest, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getCustomerDeviceInfosUsingGET(customerId: string, pageSize: number, page: number, includeCustomers: boolean, deviceProfileId: string, active: boolean, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getCustomerDevicesUsingGET(customerId: string, pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    saveDeviceWithCredentialsUsingPOST(entityGroupId: string, entityGroupIds: string, data: schemas.SaveDeviceWithCredentialsRequest, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        deviceProfileId?: any;
        deviceData?: any;
        firmwareId?: any;
        softwareId?: any;
    }>;
    processDevicesBulkImportUsingPOST(data: schemas.BulkImportRequest, options?: RequestInit): Promise<{
        errorsList: string[];
        created?: any;
        errors?: any;
        updated?: any;
    }>;
    updateDeviceCredentialsUsingPOST(data: schemas.DeviceCredentials, options?: RequestInit): Promise<{
        createdTime: number;
        credentialsType: "ACCESS_TOKEN" | "LWM2M_CREDENTIALS" | "MQTT_BASIC" | "X509_CERTIFICATE";
        credentialsId: string;
        credentialsValue: string;
        id?: any;
        deviceId?: any;
    }>;
    getDeviceInfoByIdUsingGET(deviceId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        ownerName: string;
        groups: any[];
        active: boolean;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        deviceProfileId?: any;
        deviceData?: any;
        firmwareId?: any;
        softwareId?: any;
    }>;
    getDeviceTypesUsingGET(options?: RequestInit): Promise<any>;
    getDeviceByIdUsingGET(deviceId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        deviceProfileId?: any;
        deviceData?: any;
        firmwareId?: any;
        softwareId?: any;
    }>;
    deleteDeviceUsingDELETE(deviceId: string, options?: RequestInit): Promise<any>;
    getDeviceCredentialsByDeviceIdUsingGET(deviceId: string, options?: RequestInit): Promise<{
        createdTime: number;
        credentialsType: "ACCESS_TOKEN" | "LWM2M_CREDENTIALS" | "MQTT_BASIC" | "X509_CERTIFICATE";
        credentialsId: string;
        credentialsValue: string;
        id?: any;
        deviceId?: any;
    }>;
    getAllDeviceInfosUsingGET(pageSize: number, page: number, includeCustomers: boolean, deviceProfileId: string, active: boolean, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    findByQueryUsingPOST_1(data: schemas.DeviceSearchQuery, options?: RequestInit): Promise<any>;
    countByDeviceProfileAndEmptyOtaPackageUsingGET(otaPackageType: string, deviceProfileId: string, options?: RequestInit): Promise<any>;
    countByDeviceGroupAndEmptyOtaPackageUsingGET(otaPackageType: string, otaPackageId: string, entityGroupId: string, options?: RequestInit): Promise<any>;
    getDevicesByIdsUsingGET(deviceIds: string, options?: RequestInit): Promise<any>;
    saveDeviceUsingPOST(accessToken: string, entityGroupId: string, entityGroupIds: string, data: schemas.Device, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        deviceProfileId?: any;
        deviceData?: any;
        firmwareId?: any;
        softwareId?: any;
    }>;
    getDevicesByEntityGroupIdUsingGET(entityGroupId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getTenantDeviceUsingGET(deviceName: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        deviceProfileId?: any;
        deviceData?: any;
        firmwareId?: any;
        softwareId?: any;
    }>;
    getTenantDevicesUsingGET(pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    assignDeviceToTenantUsingPOST(tenantId: string, deviceId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        deviceProfileId?: any;
        deviceData?: any;
        firmwareId?: any;
        softwareId?: any;
    }>;
    getUserDevicesUsingGET(pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    saveDeviceGroupOtaPackageUsingPOST(data: schemas.DeviceGroupOtaPackage, options?: RequestInit): Promise<{
        id: string;
        otaPackageType: "FIRMWARE" | "SOFTWARE";
        otaPackageUpdateTime: number;
        groupId?: any;
        otaPackageId?: any;
    }>;
    getFirmwareByIdUsingGET(groupId: string, firmwareType: string, options?: RequestInit): Promise<{
        id: string;
        otaPackageType: "FIRMWARE" | "SOFTWARE";
        otaPackageUpdateTime: number;
        groupId?: any;
        otaPackageId?: any;
    }>;
    deleteDeviceGroupOtaPackageUsingDELETE(id: string, options?: RequestInit): Promise<any>;
    saveDeviceProfileUsingPOST(data: schemas.DeviceProfile, options?: RequestInit): Promise<{
        type: "DEFAULT";
        createdTime: number;
        name: string;
        default: boolean;
        defaultQueueName: string;
        description: string;
        image: string;
        provisionDeviceKey: string;
        transportType: "COAP" | "DEFAULT" | "LWM2M" | "MQTT" | "SNMP";
        provisionType: "ALLOW_CREATE_NEW_DEVICES" | "CHECK_PRE_PROVISIONED_DEVICES" | "DISABLED" | "X509_CERTIFICATE_CHAIN";
        id?: any;
        tenantId?: any;
        defaultDashboardId?: any;
        defaultRuleChainId?: any;
        defaultEdgeRuleChainId?: any;
        firmwareId?: any;
        softwareId?: any;
        profileData?: any;
    }>;
    getAttributesKeysUsingGET(deviceProfileId: string, options?: RequestInit): Promise<any>;
    getTimeseriesKeysUsingGET(deviceProfileId: string, options?: RequestInit): Promise<any>;
    getDeviceProfileNamesUsingGET(activeOnly: boolean, options?: RequestInit): Promise<any>;
    deleteDeviceProfileUsingDELETE(deviceProfileId: string, options?: RequestInit): Promise<any>;
    setDefaultDeviceProfileUsingPOST(deviceProfileId: string, options?: RequestInit): Promise<{
        type: "DEFAULT";
        createdTime: number;
        name: string;
        default: boolean;
        defaultQueueName: string;
        description: string;
        image: string;
        provisionDeviceKey: string;
        transportType: "COAP" | "DEFAULT" | "LWM2M" | "MQTT" | "SNMP";
        provisionType: "ALLOW_CREATE_NEW_DEVICES" | "CHECK_PRE_PROVISIONED_DEVICES" | "DISABLED" | "X509_CERTIFICATE_CHAIN";
        id?: any;
        tenantId?: any;
        defaultDashboardId?: any;
        defaultRuleChainId?: any;
        defaultEdgeRuleChainId?: any;
        firmwareId?: any;
        softwareId?: any;
        profileData?: any;
    }>;
    getDeviceProfileByIdUsingGET(deviceProfileId: string, inlineImages: boolean, options?: RequestInit): Promise<{
        type: "DEFAULT";
        createdTime: number;
        name: string;
        default: boolean;
        defaultQueueName: string;
        description: string;
        image: string;
        provisionDeviceKey: string;
        transportType: "COAP" | "DEFAULT" | "LWM2M" | "MQTT" | "SNMP";
        provisionType: "ALLOW_CREATE_NEW_DEVICES" | "CHECK_PRE_PROVISIONED_DEVICES" | "DISABLED" | "X509_CERTIFICATE_CHAIN";
        id?: any;
        tenantId?: any;
        defaultDashboardId?: any;
        defaultRuleChainId?: any;
        defaultEdgeRuleChainId?: any;
        firmwareId?: any;
        softwareId?: any;
        profileData?: any;
    }>;
    getDefaultDeviceProfileInfoUsingGET(options?: RequestInit): Promise<{
        type: "DEFAULT";
        name: string;
        image: string;
        transportType: "COAP" | "DEFAULT" | "LWM2M" | "MQTT" | "SNMP";
        id?: any;
        tenantId?: any;
        defaultDashboardId?: any;
    }>;
    getDeviceProfileInfoByIdUsingGET(deviceProfileId: string, options?: RequestInit): Promise<{
        type: "DEFAULT";
        name: string;
        image: string;
        transportType: "COAP" | "DEFAULT" | "LWM2M" | "MQTT" | "SNMP";
        id?: any;
        tenantId?: any;
        defaultDashboardId?: any;
    }>;
    getDeviceProfilesByIdsUsingGET(deviceProfileIds: string, options?: RequestInit): Promise<any>;
    getDeviceProfileInfosUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, transportType: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getDeviceProfilesUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getCustomerEdgeInfosUsingGET(customerId: string, pageSize: number, page: number, includeCustomers: boolean, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getCustomerEdgesUsingGET(customerId: string, pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    processEdgesBulkImportUsingPOST(data: schemas.BulkImportRequest, options?: RequestInit): Promise<{
        errorsList: string[];
        created?: any;
        errors?: any;
        updated?: any;
    }>;
    getEdgeInfoByIdUsingGET(edgeId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        ownerName: string;
        groups: any[];
        routingKey: string;
        secret: string;
        edgeLicenseKey: string;
        cloudEndpoint: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        rootRuleChainId?: any;
    }>;
    getEdgeInstallInstructionsUsingGET(edgeId: string, method: string, options?: RequestInit): Promise<{
        instructions: string;
    }>;
    getEdgeUpgradeInstructionsUsingGET(edgeVersion: string, method: string, options?: RequestInit): Promise<{
        instructions: string;
    }>;
    findMissingToRelatedRuleChainsUsingGET(edgeId: string, options?: RequestInit): Promise<any>;
    syncEdgeUsingPOST(edgeId: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getEdgeTypesUsingGET(options?: RequestInit): Promise<any>;
    getEdgeByIdUsingGET(edgeId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        routingKey: string;
        secret: string;
        edgeLicenseKey: string;
        cloudEndpoint: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        rootRuleChainId?: any;
    }>;
    deleteEdgeUsingDELETE(edgeId: string, options?: RequestInit): Promise<any>;
    isEdgeUpgradeAvailableUsingGET(edgeId: string, options?: RequestInit): Promise<any>;
    setEdgeRootRuleChainUsingPOST(edgeId: string, ruleChainId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        routingKey: string;
        secret: string;
        edgeLicenseKey: string;
        cloudEndpoint: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        rootRuleChainId?: any;
    }>;
    getAllEdgeInfosUsingGET(pageSize: number, page: number, includeCustomers: boolean, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    findByQueryUsingPOST_2(data: schemas.EdgeSearchQuery, options?: RequestInit): Promise<any>;
    isEdgesSupportEnabledUsingGET(options?: RequestInit): Promise<any>;
    getEdgesByIdsUsingGET(edgeIds: string, options?: RequestInit): Promise<any>;
    getEdgesUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    saveEdgeUsingPOST(entityGroupId: string, entityGroupIds: string, data: schemas.Edge, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        routingKey: string;
        secret: string;
        edgeLicenseKey: string;
        cloudEndpoint: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        rootRuleChainId?: any;
    }>;
    getEdgesByEntityGroupIdUsingGET(entityGroupId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    activateInstanceUsingPOST(licenseSecret: string, releaseDate: string, options?: RequestInit): Promise<{}>;
    checkInstanceUsingPOST(data: schemas.JsonNode, options?: RequestInit): Promise<{}>;
    getTenantEdgeUsingGET(edgeName: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        label: string;
        routingKey: string;
        secret: string;
        edgeLicenseKey: string;
        cloudEndpoint: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        rootRuleChainId?: any;
    }>;
    getTenantEdgesUsingGET(pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getUserEdgesUsingGET(pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEdgeEventsUsingGET(edgeId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    listBranchesUsingGET(options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    compareEntityDataToVersionUsingGET(entityType: string, internalEntityUuid: string, versionId: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    loadEntitiesVersionUsingPOST(data: schemas.VersionLoadRequest, options?: RequestInit): Promise<any>;
    listEntitiesAtVersionUsingGET(entityType: string, versionId: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getVersionLoadRequestStatusUsingGET(requestId: string, options?: RequestInit): Promise<{
        result: any[];
        done: boolean;
        error?: any;
    }>;
    listAllEntitiesAtVersionUsingGET(versionId: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getEntityDataInfoUsingGET(versionId: string, entityType: string, externalEntityUuid: string, internalEntityId: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    saveEntitiesVersionUsingPOST(data: schemas.VersionCreateRequest, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    listEntityVersionsUsingGET(entityType: string, externalEntityUuid: string, branch: string, internalEntityId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    listEntityTypeVersionsUsingGET(entityType: string, branch: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getVersionCreateRequestStatusUsingGET(requestId: string, options?: RequestInit): Promise<{
        error: string;
        added: number;
        done: boolean;
        modified: number;
        removed: number;
        version?: any;
    }>;
    listVersionsUsingGET(branch: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getAllEdgeEntityGroupsUsingGET(edgeId: string, groupType: string, options?: RequestInit): Promise<any>;
    assignEntityGroupToEdgeUsingPOST(edgeId: string, groupType: string, entityGroupId: string, options?: RequestInit): Promise<{
        type: "ASSET" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "EDGE" | "ENTITY_VIEW" | "USER";
        createdTime: number;
        name: string;
        groupAll: boolean;
        edgeGroupAll: boolean;
        id?: any;
        additionalInfo?: any;
        ownerId?: any;
        configuration?: any;
    }>;
    unassignEntityGroupFromEdgeUsingDELETE(edgeId: string, groupType: string, entityGroupId: string, options?: RequestInit): Promise<{
        type: "ASSET" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "EDGE" | "ENTITY_VIEW" | "USER";
        createdTime: number;
        name: string;
        groupAll: boolean;
        edgeGroupAll: boolean;
        id?: any;
        additionalInfo?: any;
        ownerId?: any;
        configuration?: any;
    }>;
    saveEntityGroupUsingPOST(data: schemas.EntityGroup, options?: RequestInit): Promise<{
        type: "ASSET" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "EDGE" | "ENTITY_VIEW" | "USER";
        createdTime: number;
        name: string;
        groupAll: boolean;
        edgeGroupAll: boolean;
        ownerIds: any[];
        id?: any;
        additionalInfo?: any;
        ownerId?: any;
        configuration?: any;
    }>;
    getEntityGroupAllByOwnerAndTypeUsingGET(ownerType: string, ownerId: string, groupType: string, options?: RequestInit): Promise<{
        type: "ASSET" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "EDGE" | "ENTITY_VIEW" | "USER";
        createdTime: number;
        name: string;
        groupAll: boolean;
        edgeGroupAll: boolean;
        ownerIds: any[];
        id?: any;
        additionalInfo?: any;
        ownerId?: any;
        configuration?: any;
    }>;
    getEntityGroupByIdUsingGET(entityGroupId: string, options?: RequestInit): Promise<{
        type: "ASSET" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "EDGE" | "ENTITY_VIEW" | "USER";
        createdTime: number;
        name: string;
        groupAll: boolean;
        edgeGroupAll: boolean;
        ownerIds: any[];
        id?: any;
        additionalInfo?: any;
        ownerId?: any;
        configuration?: any;
    }>;
    deleteEntityGroupUsingDELETE(entityGroupId: string, options?: RequestInit): Promise<any>;
    addEntitiesToEntityGroupUsingPOST(entityGroupId: string, data: Array<string>, options?: RequestInit): Promise<any>;
    removeEntitiesFromEntityGroupUsingPOST(entityGroupId: string, data: Array<string>, options?: RequestInit): Promise<any>;
    getEntitiesUsingGET(entityGroupId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    makeEntityGroupPrivateUsingPOST(entityGroupId: string, options?: RequestInit): Promise<any>;
    makeEntityGroupPublicUsingPOST(entityGroupId: string, options?: RequestInit): Promise<any>;
    shareEntityGroupUsingPOST(entityGroupId: string, data: schemas.ShareGroupRequest, options?: RequestInit): Promise<any>;
    getGroupEntityUsingGET(entityGroupId: string, entityId: string, options?: RequestInit): Promise<{
        name: string;
        id?: any;
    }>;
    shareEntityGroupToChildOwnerUserGroupUsingPOST(entityGroupId: string, userGroupId: string, roleId: string, options?: RequestInit): Promise<any>;
    getEntityGroupByOwnerAndNameAndTypeUsingGET(ownerType: string, ownerId: string, groupType: string, groupName: string, options?: RequestInit): Promise<{
        type: "ASSET" | "CUSTOMER" | "DASHBOARD" | "DEVICE" | "EDGE" | "ENTITY_VIEW" | "USER";
        createdTime: number;
        name: string;
        groupAll: boolean;
        edgeGroupAll: boolean;
        ownerIds: any[];
        id?: any;
        additionalInfo?: any;
        ownerId?: any;
        configuration?: any;
    }>;
    getEntityGroupEntityInfoByIdUsingGET(entityGroupId: string, options?: RequestInit): Promise<{
        name: string;
        id?: any;
    }>;
    getSharedEntityGroupEntityInfosByTypeAndPageLinkUsingGET(groupType: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEntityGroupEntityInfosByTypeAndPageLinkUsingGET(groupType: string, includeShared: boolean, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEntityGroupEntityInfosByOwnerAndTypeAndPageLinkUsingGET(ownerType: string, ownerId: string, groupType: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEntityGroupEntityInfosHierarchyByOwnerAndTypeAndPageLinkUsingGET(ownerType: string, ownerId: string, groupType: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEntityGroupEntityInfosByIdsUsingGET(entityGroupIds: string, options?: RequestInit): Promise<any>;
    getEdgeEntityGroupsUsingGET(edgeId: string, groupType: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEntityGroupsForEntityUsingGET(entityType: string, entityId: string, options?: RequestInit): Promise<any>;
    getSharedEntityGroupsByTypeUsingGET(groupType: string, options?: RequestInit): Promise<any>;
    getSharedEntityGroupsByTypeAndPageLinkUsingGET(groupType: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEntityGroupsByTypeAndPageLinkUsingGET(groupType: string, includeShared: boolean, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEntityGroupsByTypeUsingGET(groupType: string, includeShared: boolean, options?: RequestInit): Promise<any>;
    getEntityGroupsByOwnerAndTypeUsingGET(ownerType: string, ownerId: string, groupType: string, options?: RequestInit): Promise<any>;
    getEntityGroupsByOwnerAndTypeAndPageLinkUsingGET(ownerType: string, ownerId: string, groupType: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEntityGroupsHierarchyByOwnerAndTypeAndPageLinkUsingGET(ownerType: string, ownerId: string, groupType: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEntityGroupsByIdsUsingGET(entityGroupIds: string, options?: RequestInit): Promise<any>;
    getOwnerInfoUsingGET(ownerType: string, ownerId: string, options?: RequestInit): Promise<{
        name: string;
        id?: any;
    }>;
    getOwnerInfosUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getOwnersUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    countAlarmsByQueryUsingPOST(data: schemas.AlarmCountQuery, options?: RequestInit): Promise<any>;
    findAlarmDataByQueryUsingPOST(data: schemas.AlarmDataQuery, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    countEntitiesByQueryUsingPOST(data: schemas.EntityCountQuery, options?: RequestInit): Promise<any>;
    findEntityDataByQueryUsingPOST(data: schemas.EntityDataQuery, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    findEntityTimeseriesAndAttributesKeysByQueryUsingPOST(timeseries: boolean, attributes: boolean, data: schemas.EntityDataQuery, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    saveRelationUsingPOST(data: schemas.EntityRelation, options?: RequestInit): Promise<any>;
    findByQueryUsingPOST_3(data: schemas.EntityRelationsQuery, options?: RequestInit): Promise<any>;
    findInfoByQueryUsingPOST(data: schemas.EntityRelationsQuery, options?: RequestInit): Promise<any>;
    findInfoByFromUsingGET(fromId: string, fromType: string, relationTypeGroup: string, options?: RequestInit): Promise<any>;
    findInfoByToUsingGET(toId: string, toType: string, relationTypeGroup: string, options?: RequestInit): Promise<any>;
    deleteRelationsUsingDELETE(entityId: string, entityType: string, options?: RequestInit): Promise<any>;
    findByFromUsingGET(fromId: string, fromType: string, relationType: string, relationTypeGroup: string, options?: RequestInit): Promise<any>;
    findByFromUsingGET_1(fromId: string, fromType: string, relationTypeGroup: string, options?: RequestInit): Promise<any>;
    findByToUsingGET(toId: string, toType: string, relationType: string, relationTypeGroup: string, options?: RequestInit): Promise<any>;
    findByToUsingGET_1(toId: string, toType: string, relationTypeGroup: string, options?: RequestInit): Promise<any>;
    getRelationUsingGET(fromId: string, fromType: string, relationType: string, relationTypeGroup: string, toId: string, toType: string, options?: RequestInit): Promise<{
        type: string;
        typeGroup: "DASHBOARD" | "EDGE" | "RULE_CHAIN" | "RULE_NODE" | "COMMON" | "EDGE_AUTO_ASSIGN_RULE_CHAIN" | "FROM_ENTITY_GROUP";
        additionalInfo?: any;
        from?: any;
        to?: any;
    }>;
    deleteRelationUsingDELETE(fromId: string, fromType: string, relationType: string, relationTypeGroup: string, toId: string, toType: string, options?: RequestInit): Promise<any>;
    getCustomerEntityViewInfosUsingGET(customerId: string, pageSize: number, page: number, includeCustomers: boolean, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getCustomerEntityViewsUsingGET(customerId: string, pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEntityViewsByEntityGroupIdUsingGET(entityGroupId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEntityViewInfoByIdUsingGET(entityViewId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        ownerName: string;
        groups: any[];
        startTimeMs: number;
        endTimeMs: number;
        keys?: any;
        id?: any;
        tenantId?: any;
        customerId?: any;
        entityId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    getEntityViewTypesUsingGET(options?: RequestInit): Promise<any>;
    getEntityViewByIdUsingGET(entityViewId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        startTimeMs: number;
        endTimeMs: number;
        keys?: any;
        id?: any;
        tenantId?: any;
        customerId?: any;
        entityId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    deleteEntityViewUsingDELETE(entityViewId: string, options?: RequestInit): Promise<any>;
    getAllEntityViewInfosUsingGET(pageSize: number, page: number, includeCustomers: boolean, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    findByQueryUsingPOST_4(data: schemas.EntityViewSearchQuery, options?: RequestInit): Promise<any>;
    getEntityViewsByIdsUsingGET(entityViewIds: string, options?: RequestInit): Promise<any>;
    saveEntityViewUsingPOST(entityGroupId: string, entityGroupIds: string, data: schemas.EntityView, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        startTimeMs: number;
        endTimeMs: number;
        keys?: any;
        id?: any;
        tenantId?: any;
        customerId?: any;
        entityId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    getTenantEntityViewUsingGET(entityViewName: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        startTimeMs: number;
        endTimeMs: number;
        keys?: any;
        id?: any;
        tenantId?: any;
        customerId?: any;
        entityId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    getTenantEntityViewsUsingGET(pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getUserEntityViewsUsingGET(pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    clearEventsUsingPOST(entityType: string, entityId: string, startTime: number, endTime: number, data: schemas.EventFilter, options?: RequestInit): Promise<any>;
    getEventsUsingGET_1(entityType: string, entityId: string, eventType: string, tenantId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEventsUsingGET(entityType: string, entityId: string, tenantId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEventsUsingPOST(entityType: string, entityId: string, tenantId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, startTime: number, endTime: number, data: schemas.EventFilter, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
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
    uploadImageUsingPOST(options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        link: string;
        title: string;
        public: boolean;
        fileName: string;
        publicResourceKey: string;
        resourceKey: string;
        publicLink: string;
        resourceType: "IMAGE" | "JKS" | "JS_MODULE" | "LWM2M_MODEL" | "PKCS_12";
        etag: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        descriptor?: any;
    }>;
    importImageUsingPUT(data: schemas.ImageExportData, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        link: string;
        title: string;
        public: boolean;
        fileName: string;
        publicResourceKey: string;
        resourceKey: string;
        publicLink: string;
        resourceType: "IMAGE" | "JKS" | "JS_MODULE" | "LWM2M_MODEL" | "PKCS_12";
        etag: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        descriptor?: any;
    }>;
    downloadPublicImageUsingGET(publicResourceKey: string, If_None_Match: string, options?: RequestInit): Promise<any>;
    downloadImageUsingGET(type: string, key: string, If_None_Match: string, options?: RequestInit): Promise<any>;
    updateImageUsingPUT(type: string, key: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        link: string;
        title: string;
        public: boolean;
        fileName: string;
        publicResourceKey: string;
        resourceKey: string;
        publicLink: string;
        resourceType: "IMAGE" | "JKS" | "JS_MODULE" | "LWM2M_MODEL" | "PKCS_12";
        etag: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        descriptor?: any;
    }>;
    exportImageUsingGET(type: string, key: string, options?: RequestInit): Promise<{
        title: string;
        public: boolean;
        data: string;
        fileName: string;
        mediaType: string;
        publicResourceKey: string;
        resourceKey: string;
    }>;
    getImageInfoUsingGET(type: string, key: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        link: string;
        title: string;
        public: boolean;
        fileName: string;
        publicResourceKey: string;
        resourceKey: string;
        publicLink: string;
        resourceType: "IMAGE" | "JKS" | "JS_MODULE" | "LWM2M_MODEL" | "PKCS_12";
        etag: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        descriptor?: any;
    }>;
    updateImageInfoUsingPUT(type: string, key: string, data: schemas.TbResourceInfo, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        link: string;
        title: string;
        public: boolean;
        fileName: string;
        publicResourceKey: string;
        resourceKey: string;
        publicLink: string;
        resourceType: "IMAGE" | "JKS" | "JS_MODULE" | "LWM2M_MODEL" | "PKCS_12";
        etag: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        descriptor?: any;
    }>;
    downloadImagePreviewUsingGET(type: string, key: string, If_None_Match: string, options?: RequestInit): Promise<any>;
    updateImagePublicStatusUsingPUT(type: string, key: string, isPublic: boolean, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        link: string;
        title: string;
        public: boolean;
        fileName: string;
        publicResourceKey: string;
        resourceKey: string;
        publicLink: string;
        resourceType: "IMAGE" | "JKS" | "JS_MODULE" | "LWM2M_MODEL" | "PKCS_12";
        etag: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        descriptor?: any;
    }>;
    deleteImageUsingDELETE(type: string, key: string, force: boolean, options?: RequestInit): Promise<{
        success: boolean;
        references: Record<string, any[]>;
        whiteLabelingList: any[];
    }>;
    getImagesUsingGET(pageSize: number, page: number, includeSystemImages: boolean, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    downloadLoginFaviconUsingGET(type: string, key: string, If_None_Match: string, options?: RequestInit): Promise<any>;
    downloadLoginLogoUsingGET(type: string, key: string, If_None_Match: string, options?: RequestInit): Promise<any>;
    findEdgeMissingAttributesUsingGET(edgeId: string, integrationIds: string, options?: RequestInit): Promise<any>;
    findAllRelatedEdgesMissingAttributesUsingGET(integrationId: string, options?: RequestInit): Promise<any>;
    assignIntegrationToEdgeUsingPOST(edgeId: string, integrationId: string, options?: RequestInit): Promise<{
        type: "CUSTOM" | "COAP" | "MQTT" | "APACHE_PULSAR" | "AWS_IOT" | "AWS_KINESIS" | "AWS_SQS" | "AZURE_EVENT_HUB" | "AZURE_IOT_HUB" | "AZURE_SERVICE_BUS" | "CHIRPSTACK" | "HTTP" | "IBM_WATSON_IOT" | "KAFKA" | "KPN" | "LORIOT" | "OCEANCONNECT" | "OPC_UA" | "PARTICLE" | "PUB_SUB" | "RABBITMQ" | "SIGFOX" | "TCP" | "THINGPARK" | "TMOBILE_IOT_CDP" | "TPE" | "TTI" | "TTN" | "TUYA" | "UDP";
        createdTime: number;
        name: string;
        enabled: boolean;
        debugMode: boolean;
        edgeTemplate: boolean;
        routingKey: string;
        secret: string;
        remote: boolean;
        allowCreateDevicesOrAssets: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
        defaultConverterId?: any;
        downlinkConverterId?: any;
    }>;
    unassignIntegrationFromEdgeUsingDELETE(edgeId: string, integrationId: string, options?: RequestInit): Promise<{
        type: "CUSTOM" | "COAP" | "MQTT" | "APACHE_PULSAR" | "AWS_IOT" | "AWS_KINESIS" | "AWS_SQS" | "AZURE_EVENT_HUB" | "AZURE_IOT_HUB" | "AZURE_SERVICE_BUS" | "CHIRPSTACK" | "HTTP" | "IBM_WATSON_IOT" | "KAFKA" | "KPN" | "LORIOT" | "OCEANCONNECT" | "OPC_UA" | "PARTICLE" | "PUB_SUB" | "RABBITMQ" | "SIGFOX" | "TCP" | "THINGPARK" | "TMOBILE_IOT_CDP" | "TPE" | "TTI" | "TTN" | "TUYA" | "UDP";
        createdTime: number;
        name: string;
        enabled: boolean;
        debugMode: boolean;
        edgeTemplate: boolean;
        routingKey: string;
        secret: string;
        remote: boolean;
        allowCreateDevicesOrAssets: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
        defaultConverterId?: any;
        downlinkConverterId?: any;
    }>;
    getEdgeIntegrationInfosUsingGET(edgeId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getEdgeIntegrationsUsingGET(edgeId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    saveIntegrationUsingPOST(data: schemas.Integration, options?: RequestInit): Promise<{
        type: "CUSTOM" | "COAP" | "MQTT" | "APACHE_PULSAR" | "AWS_IOT" | "AWS_KINESIS" | "AWS_SQS" | "AZURE_EVENT_HUB" | "AZURE_IOT_HUB" | "AZURE_SERVICE_BUS" | "CHIRPSTACK" | "HTTP" | "IBM_WATSON_IOT" | "KAFKA" | "KPN" | "LORIOT" | "OCEANCONNECT" | "OPC_UA" | "PARTICLE" | "PUB_SUB" | "RABBITMQ" | "SIGFOX" | "TCP" | "THINGPARK" | "TMOBILE_IOT_CDP" | "TPE" | "TTI" | "TTN" | "TUYA" | "UDP";
        createdTime: number;
        name: string;
        enabled: boolean;
        debugMode: boolean;
        edgeTemplate: boolean;
        routingKey: string;
        secret: string;
        remote: boolean;
        allowCreateDevicesOrAssets: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
        defaultConverterId?: any;
        downlinkConverterId?: any;
    }>;
    checkIntegrationConnectionUsingPOST(data: schemas.Integration, options?: RequestInit): Promise<any>;
    getIntegrationByRoutingKeyUsingGET(routingKey: string, options?: RequestInit): Promise<{
        type: "CUSTOM" | "COAP" | "MQTT" | "APACHE_PULSAR" | "AWS_IOT" | "AWS_KINESIS" | "AWS_SQS" | "AZURE_EVENT_HUB" | "AZURE_IOT_HUB" | "AZURE_SERVICE_BUS" | "CHIRPSTACK" | "HTTP" | "IBM_WATSON_IOT" | "KAFKA" | "KPN" | "LORIOT" | "OCEANCONNECT" | "OPC_UA" | "PARTICLE" | "PUB_SUB" | "RABBITMQ" | "SIGFOX" | "TCP" | "THINGPARK" | "TMOBILE_IOT_CDP" | "TPE" | "TTI" | "TTN" | "TUYA" | "UDP";
        createdTime: number;
        name: string;
        enabled: boolean;
        debugMode: boolean;
        edgeTemplate: boolean;
        routingKey: string;
        secret: string;
        remote: boolean;
        allowCreateDevicesOrAssets: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
        defaultConverterId?: any;
        downlinkConverterId?: any;
    }>;
    getIntegrationByIdUsingGET(integrationId: string, options?: RequestInit): Promise<{
        type: "CUSTOM" | "COAP" | "MQTT" | "APACHE_PULSAR" | "AWS_IOT" | "AWS_KINESIS" | "AWS_SQS" | "AZURE_EVENT_HUB" | "AZURE_IOT_HUB" | "AZURE_SERVICE_BUS" | "CHIRPSTACK" | "HTTP" | "IBM_WATSON_IOT" | "KAFKA" | "KPN" | "LORIOT" | "OCEANCONNECT" | "OPC_UA" | "PARTICLE" | "PUB_SUB" | "RABBITMQ" | "SIGFOX" | "TCP" | "THINGPARK" | "TMOBILE_IOT_CDP" | "TPE" | "TTI" | "TTN" | "TUYA" | "UDP";
        createdTime: number;
        name: string;
        enabled: boolean;
        debugMode: boolean;
        edgeTemplate: boolean;
        routingKey: string;
        secret: string;
        remote: boolean;
        allowCreateDevicesOrAssets: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
        defaultConverterId?: any;
        downlinkConverterId?: any;
    }>;
    deleteIntegrationUsingDELETE(integrationId: string, options?: RequestInit): Promise<any>;
    getIntegrationInfosUsingGET(isEdgeTemplate: boolean, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getIntegrationsByIdsUsingGET(integrationIds: string, options?: RequestInit): Promise<any>;
    getIntegrationsUsingGET(isEdgeTemplate: boolean, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getClientRegistrationTemplatesUsingGET(options?: RequestInit): Promise<{}>;
    getAvailableDeliveryMethodsUsingGET(options?: RequestInit): Promise<any>;
    createNotificationRequestUsingPOST(data: schemas.NotificationRequest, options?: RequestInit): Promise<{
        status: "SENT" | "PROCESSING" | "SCHEDULED";
        createdTime: number;
        targets: string[];
        id?: any;
        tenantId?: any;
        stats?: any;
        additionalConfig?: any;
        info?: any;
        originatorEntityId?: any;
        ruleId?: any;
        template?: any;
        templateId?: any;
    }>;
    getNotificationRequestPreviewUsingPOST(recipientsPreviewSize: number, data: schemas.NotificationRequest, options?: RequestInit): Promise<{
        processedTemplates: Record<string, any>;
        recipientsCountByTarget: Record<string, number>;
        recipientsPreview: string[];
        totalRecipientsCount: number;
    }>;
    getNotificationRequestByIdUsingGET(id: string, options?: RequestInit): Promise<{
        status: "SENT" | "PROCESSING" | "SCHEDULED";
        createdTime: number;
        targets: string[];
        deliveryMethods: ("EMAIL" | "MICROSOFT_TEAMS" | "SLACK" | "SMS" | "WEB")[];
        templateName: string;
        id?: any;
        tenantId?: any;
        stats?: any;
        additionalConfig?: any;
        info?: any;
        originatorEntityId?: any;
        ruleId?: any;
        template?: any;
        templateId?: any;
    }>;
    deleteNotificationRequestUsingDELETE(id: string, options?: RequestInit): Promise<any>;
    getNotificationRequestsUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getNotificationSettingsUsingGET(options?: RequestInit): Promise<{
        deliveryMethodsConfigs: Record<string, any>;
    }>;
    saveNotificationSettingsUsingPOST(data: schemas.NotificationSettings, options?: RequestInit): Promise<{
        deliveryMethodsConfigs: Record<string, any>;
    }>;
    getUserNotificationSettingsUsingGET(options?: RequestInit): Promise<{
        prefs: Record<string, any>;
    }>;
    saveUserNotificationSettingsUsingPOST(data: schemas.UserNotificationSettings, options?: RequestInit): Promise<{
        prefs: Record<string, any>;
    }>;
    deleteNotificationUsingDELETE(id: string, options?: RequestInit): Promise<any>;
    markNotificationAsReadUsingPUT(id: string, options?: RequestInit): Promise<any>;
    markAllNotificationsAsReadUsingPUT(options?: RequestInit): Promise<any>;
    getNotificationsUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, unreadOnly: boolean, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    saveNotificationRuleUsingPOST(data: schemas.NotificationRule, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        triggerType: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
        enabled: boolean;
        tenantId?: any;
        additionalConfig?: any;
        templateId?: any;
        recipientsConfig?: any;
        triggerConfig?: any;
    }>;
    getNotificationRuleByIdUsingGET(id: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        triggerType: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT";
        enabled: boolean;
        deliveryMethods: ("EMAIL" | "MICROSOFT_TEAMS" | "SLACK" | "SMS" | "WEB")[];
        templateName: string;
        tenantId?: any;
        additionalConfig?: any;
        templateId?: any;
        recipientsConfig?: any;
        triggerConfig?: any;
    }>;
    deleteNotificationRuleUsingDELETE(id: string, options?: RequestInit): Promise<any>;
    getNotificationRulesUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    saveNotificationTargetUsingPOST(data: schemas.NotificationTarget, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        tenantId?: any;
        configuration?: any;
    }>;
    getRecipientsForNotificationTargetConfigUsingPOST(pageSize: number, page: number, data: schemas.NotificationTarget, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getNotificationTargetByIdUsingGET(id: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        tenantId?: any;
        configuration?: any;
    }>;
    deleteNotificationTargetByIdUsingDELETE(id: string, options?: RequestInit): Promise<any>;
    getNotificationTargetsByIdsUsingGET(ids: string, options?: RequestInit): Promise<any>;
    getNotificationTargetsBySupportedNotificationTypeUsingGET(notificationType: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getNotificationTargetsUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    listSlackConversationsUsingGET(type: string, token: string, options?: RequestInit): Promise<any>;
    saveNotificationTemplateUsingPOST(data: schemas.NotificationTemplate, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        notificationType: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT" | "RULE_NODE" | "GENERAL";
        tenantId?: any;
        configuration?: any;
    }>;
    getNotificationTemplateByIdUsingGET(id: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        notificationType: "ALARM" | "ALARM_ASSIGNMENT" | "ALARM_COMMENT" | "API_USAGE_LIMIT" | "DEVICE_ACTIVITY" | "ENTITIES_LIMIT" | "ENTITY_ACTION" | "INTEGRATION_LIFECYCLE_EVENT" | "NEW_PLATFORM_VERSION" | "RATE_LIMITS" | "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT" | "RULE_NODE" | "GENERAL";
        tenantId?: any;
        configuration?: any;
    }>;
    deleteNotificationTemplateByIdUsingDELETE(id: string, options?: RequestInit): Promise<any>;
    getNotificationTemplatesUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, notificationTypes: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getClientRegistrationTemplatesUsingGET_1(options?: RequestInit): Promise<any>;
    saveClientRegistrationTemplateUsingPOST(data: schemas.OAuth2ClientRegistrationTemplate, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        comment: string;
        scope: string[];
        accessTokenUri: string;
        authorizationUri: string;
        clientAuthenticationMethod: string;
        helpLink: string;
        jwkSetUri: string;
        loginButtonIcon: string;
        loginButtonLabel: string;
        providerId: string;
        userInfoUri: string;
        userNameAttributeName: string;
        id?: any;
        additionalInfo?: any;
        mapperConfig?: any;
    }>;
    deleteClientRegistrationTemplateUsingDELETE(clientRegistrationTemplateId: string, options?: RequestInit): Promise<any>;
    getOAuth2ClientsUsingPOST(pkgName: string, platform: string, options?: RequestInit): Promise<any>;
    getCurrentOAuth2InfoUsingGET(options?: RequestInit): Promise<{
        enabled: boolean;
        oauth2ParamsInfos: any[];
    }>;
    saveOAuth2InfoUsingPOST(data: schemas.OAuth2Info, options?: RequestInit): Promise<{
        enabled: boolean;
        oauth2ParamsInfos: any[];
    }>;
    getLoginProcessingUrlUsingGET(options?: RequestInit): Promise<any>;
    saveOtaPackageInfoUsingPOST(data: schemas.SaveOtaPackageInfoRequest, options?: RequestInit): Promise<{
        type: "FIRMWARE" | "SOFTWARE";
        createdTime: number;
        contentType: string;
        url: string;
        title: string;
        fileName: string;
        version: string;
        tag: string;
        hasData: boolean;
        checksumAlgorithm: "CRC32" | "MD5" | "MURMUR3_128" | "MURMUR3_32" | "SHA256" | "SHA384" | "SHA512";
        checksum: string;
        dataSize: number;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        deviceProfileId?: any;
    }>;
    getOtaPackageInfoByIdUsingGET(otaPackageId: string, options?: RequestInit): Promise<{
        type: "FIRMWARE" | "SOFTWARE";
        createdTime: number;
        contentType: string;
        url: string;
        title: string;
        fileName: string;
        version: string;
        tag: string;
        hasData: boolean;
        checksumAlgorithm: "CRC32" | "MD5" | "MURMUR3_128" | "MURMUR3_32" | "SHA256" | "SHA384" | "SHA512";
        checksum: string;
        dataSize: number;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        deviceProfileId?: any;
    }>;
    getOtaPackageByIdUsingGET(otaPackageId: string, options?: RequestInit): Promise<{
        type: "FIRMWARE" | "SOFTWARE";
        createdTime: number;
        contentType: string;
        url: string;
        title: string;
        fileName: string;
        version: string;
        tag: string;
        hasData: boolean;
        checksumAlgorithm: "CRC32" | "MD5" | "MURMUR3_128" | "MURMUR3_32" | "SHA256" | "SHA384" | "SHA512";
        checksum: string;
        dataSize: number;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        deviceProfileId?: any;
        data?: any;
    }>;
    saveOtaPackageDataUsingPOST(otaPackageId: string, options?: RequestInit): Promise<{
        type: "FIRMWARE" | "SOFTWARE";
        createdTime: number;
        contentType: string;
        url: string;
        title: string;
        fileName: string;
        version: string;
        tag: string;
        hasData: boolean;
        checksumAlgorithm: "CRC32" | "MD5" | "MURMUR3_128" | "MURMUR3_32" | "SHA256" | "SHA384" | "SHA512";
        checksum: string;
        dataSize: number;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        deviceProfileId?: any;
    }>;
    deleteOtaPackageUsingDELETE(otaPackageId: string, options?: RequestInit): Promise<any>;
    downloadOtaPackageUsingGET(otaPackageId: string, options?: RequestInit): Promise<{
        description: string;
        file: string;
        filename: string;
        open: boolean;
        readable: boolean;
        uri: string;
        url: string;
        inputStream?: any;
    }>;
    getGroupOtaPackagesUsingGET(groupId: string, type: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getOtaPackagesUsingGET_1(deviceProfileId: string, type: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getOtaPackagesUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    changeOwnerToCustomerUsingPOST(ownerId: string, entityType: string, entityId: string, data: Array<string>, options?: RequestInit): Promise<any>;
    changeOwnerToTenantUsingPOST(ownerId: string, entityType: string, entityId: string, data: Array<string>, options?: RequestInit): Promise<any>;
    getQueueByNameUsingGET(queueName: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        consumerPerPartition: boolean;
        packProcessingTimeout: number;
        partitions: number;
        pollInterval: number;
        topic: string;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        processingStrategy?: any;
        submitStrategy?: any;
    }>;
    getQueueByIdUsingGET(queueId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        consumerPerPartition: boolean;
        packProcessingTimeout: number;
        partitions: number;
        pollInterval: number;
        topic: string;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        processingStrategy?: any;
        submitStrategy?: any;
    }>;
    deleteQueueUsingDELETE(queueId: string, options?: RequestInit): Promise<any>;
    getTenantQueuesByServiceTypeUsingGET(serviceType: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    saveQueueUsingPOST(serviceType: string, data: schemas.Queue, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        consumerPerPartition: boolean;
        packProcessingTimeout: number;
        partitions: number;
        pollInterval: number;
        topic: string;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        processingStrategy?: any;
        submitStrategy?: any;
    }>;
    downloadTestReportUsingPOST(reportsServerEndpointUrl: string, data: schemas.ReportConfig, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    downloadDashboardReportUsingPOST(dashboardId: string, data: schemas.JsonNode, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    saveRoleUsingPOST(data: schemas.Role, options?: RequestInit): Promise<{
        type: "GENERIC" | "GROUP";
        createdTime: number;
        name: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        permissions?: any;
    }>;
    getRoleByIdUsingGET(roleId: string, options?: RequestInit): Promise<{
        type: "GENERIC" | "GROUP";
        createdTime: number;
        name: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
        permissions?: any;
    }>;
    deleteRoleUsingDELETE(roleId: string, options?: RequestInit): Promise<any>;
    getRolesUsingGET(pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getRolesByIdsUsingGET(roleIds: string, options?: RequestInit): Promise<any>;
    handleOneWayDeviceRPCRequestUsingPOST(deviceId: string, data: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    handleTwoWayDeviceRPCRequestUsingPOST(deviceId: string, data: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    handleOneWayDeviceRPCRequestUsingPOST_1(deviceId: string, data: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getPersistedRpcByDeviceUsingGET(deviceId: string, pageSize: number, page: number, rpcStatus: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getPersistedRpcUsingGET(rpcId: string, options?: RequestInit): Promise<{
        status: "DELETED" | "FAILED" | "SENT" | "DELIVERED" | "EXPIRED" | "QUEUED" | "SUCCESSFUL" | "TIMEOUT";
        createdTime: number;
        expirationTime: number;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        deviceId?: any;
        request?: any;
        response?: any;
    }>;
    deleteRpcUsingDELETE(rpcId: string, options?: RequestInit): Promise<any>;
    handleTwoWayDeviceRPCRequestUsingPOST_1(deviceId: string, data: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    assignRuleChainToEdgeUsingPOST(edgeId: string, ruleChainId: string, options?: RequestInit): Promise<{
        type: "EDGE" | "CORE";
        createdTime: number;
        name: string;
        debugMode: boolean;
        root: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
        firstRuleNodeId?: any;
    }>;
    unassignRuleChainFromEdgeUsingDELETE(edgeId: string, ruleChainId: string, options?: RequestInit): Promise<{
        type: "EDGE" | "CORE";
        createdTime: number;
        name: string;
        debugMode: boolean;
        root: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
        firstRuleNodeId?: any;
    }>;
    getEdgeRuleChainsUsingGET(edgeId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    saveRuleChainUsingPOST_1(data: schemas.RuleChain, options?: RequestInit): Promise<{
        type: "EDGE" | "CORE";
        createdTime: number;
        name: string;
        debugMode: boolean;
        root: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
        firstRuleNodeId?: any;
    }>;
    getAutoAssignToEdgeRuleChainsUsingGET(options?: RequestInit): Promise<any>;
    saveRuleChainUsingPOST(data: schemas.DefaultRuleChainCreateRequest, options?: RequestInit): Promise<{
        type: "EDGE" | "CORE";
        createdTime: number;
        name: string;
        debugMode: boolean;
        root: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
        firstRuleNodeId?: any;
    }>;
    saveRuleChainMetaDataUsingPOST(updateRelated: boolean, data: schemas.RuleChainMetaData, options?: RequestInit): Promise<{
        firstNodeIndex: number;
        nodes: any[];
        connections: any[];
        ruleChainConnections: any[];
        ruleChainId?: any;
    }>;
    isTbelEnabledUsingGET(options?: RequestInit): Promise<any>;
    testScriptUsingPOST(scriptLang: string, data: schemas.JsonNode, options?: RequestInit): Promise<{}>;
    getRuleChainByIdUsingGET(ruleChainId: string, options?: RequestInit): Promise<{
        type: "EDGE" | "CORE";
        createdTime: number;
        name: string;
        debugMode: boolean;
        root: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
        firstRuleNodeId?: any;
    }>;
    deleteRuleChainUsingDELETE(ruleChainId: string, options?: RequestInit): Promise<any>;
    setAutoAssignToEdgeRuleChainUsingPOST(ruleChainId: string, options?: RequestInit): Promise<{
        type: "EDGE" | "CORE";
        createdTime: number;
        name: string;
        debugMode: boolean;
        root: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
        firstRuleNodeId?: any;
    }>;
    unsetAutoAssignToEdgeRuleChainUsingDELETE(ruleChainId: string, options?: RequestInit): Promise<{
        type: "EDGE" | "CORE";
        createdTime: number;
        name: string;
        debugMode: boolean;
        root: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
        firstRuleNodeId?: any;
    }>;
    setEdgeTemplateRootRuleChainUsingPOST(ruleChainId: string, options?: RequestInit): Promise<{
        type: "EDGE" | "CORE";
        createdTime: number;
        name: string;
        debugMode: boolean;
        root: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
        firstRuleNodeId?: any;
    }>;
    getRuleChainMetaDataUsingGET(ruleChainId: string, options?: RequestInit): Promise<{
        firstNodeIndex: number;
        nodes: any[];
        connections: any[];
        ruleChainConnections: any[];
        ruleChainId?: any;
    }>;
    getRuleChainOutputLabelsUsingGET(ruleChainId: string, options?: RequestInit): Promise<any>;
    getRuleChainOutputLabelsUsageUsingGET(ruleChainId: string, options?: RequestInit): Promise<any>;
    setRootRuleChainUsingPOST(ruleChainId: string, options?: RequestInit): Promise<{
        type: "EDGE" | "CORE";
        createdTime: number;
        name: string;
        debugMode: boolean;
        root: boolean;
        id?: any;
        tenantId?: any;
        additionalInfo?: any;
        configuration?: any;
        firstRuleNodeId?: any;
    }>;
    exportRuleChainsUsingGET(limit: number, options?: RequestInit): Promise<{
        ruleChains: any[];
        metadata: any[];
    }>;
    importRuleChainsUsingPOST(overwrite: boolean, data: schemas.RuleChainData, options?: RequestInit): Promise<any>;
    getRuleChainsUsingGET(pageSize: number, page: number, type: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getLatestRuleNodeDebugInputUsingGET(ruleNodeId: string, options?: RequestInit): Promise<{}>;
    handleRuleEngineRequestUsingPOST_3(data: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    handleRuleEngineRequestUsingPOST_2(entityType: string, entityId: string, data: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    handleRuleEngineRequestUsingPOST_1(entityType: string, entityId: string, queueName: string, timeout: number, data: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    handleRuleEngineRequestUsingPOST(entityType: string, entityId: string, timeout: number, data: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getAllSchedulerEventsUsingGET(edgeId: string, options?: RequestInit): Promise<any>;
    assignSchedulerEventToEdgeUsingPOST(edgeId: string, schedulerEventId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        schedule?: any;
        additionalInfo?: any;
        ownerId?: any;
        originatorId?: any;
    }>;
    unassignSchedulerEventFromEdgeUsingDELETE(edgeId: string, schedulerEventId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        schedule?: any;
        additionalInfo?: any;
        ownerId?: any;
        originatorId?: any;
    }>;
    getEdgeSchedulerEventsUsingGET(edgeId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    saveSchedulerEventUsingPOST(data: schemas.SchedulerEvent, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        schedule?: any;
        additionalInfo?: any;
        ownerId?: any;
        configuration?: any;
        originatorId?: any;
    }>;
    getSchedulerEventInfoByIdUsingGET(schedulerEventId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        customerTitle: string;
        customerIsPublic: {};
        id?: any;
        tenantId?: any;
        customerId?: any;
        schedule?: any;
        additionalInfo?: any;
        ownerId?: any;
        originatorId?: any;
    }>;
    getSchedulerEventByIdUsingGET(schedulerEventId: string, options?: RequestInit): Promise<{
        type: string;
        createdTime: number;
        name: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        schedule?: any;
        additionalInfo?: any;
        ownerId?: any;
        configuration?: any;
        originatorId?: any;
    }>;
    deleteSchedulerEventUsingDELETE(schedulerEventId: string, options?: RequestInit): Promise<any>;
    getSchedulerEventsByIdsUsingGET(schedulerEventIds: string, options?: RequestInit): Promise<any>;
    getSchedulerEventsUsingGET(type: string, options?: RequestInit): Promise<any>;
    getPrivacyPolicyUsingGET(options?: RequestInit): Promise<any>;
    getSignUpSelfRegistrationParamsUsingGET(pkgName: string, options?: RequestInit): Promise<{
        signUpTextMessage: string;
        captchaSiteKey: string;
        captchaVersion: string;
        captchaAction: string;
        showPrivacyPolicy: boolean;
        showTermsOfUse: boolean;
    }>;
    getTermsOfUseUsingGET(options?: RequestInit): Promise<any>;
    getSelfRegistrationParamsUsingGET(options?: RequestInit): Promise<{
        defaultDashboardId: string;
        domainName: string;
        adminSettingsId: string;
        appSecret: string;
        pkgName: string;
        permissions: any[];
        signUpTextMessage: string;
        captchaSiteKey: string;
        captchaVersion: string;
        captchaAction: string;
        showPrivacyPolicy: boolean;
        showTermsOfUse: boolean;
        captchaSecretKey: string;
        privacyPolicy: string;
        termsOfUse: string;
        notificationEmail: string;
        defaultDashboardFullscreen: boolean;
        appScheme: string;
        appHost: string;
    }>;
    saveSelfRegistrationParamsUsingPOST(data: schemas.SelfRegistrationParams, options?: RequestInit): Promise<{
        defaultDashboardId: string;
        domainName: string;
        adminSettingsId: string;
        appSecret: string;
        pkgName: string;
        permissions: any[];
        signUpTextMessage: string;
        captchaSiteKey: string;
        captchaVersion: string;
        captchaAction: string;
        showPrivacyPolicy: boolean;
        showTermsOfUse: boolean;
        captchaSecretKey: string;
        privacyPolicy: string;
        termsOfUse: string;
        notificationEmail: string;
        defaultDashboardFullscreen: boolean;
        appScheme: string;
        appHost: string;
    }>;
    deleteSelfRegistrationParamsUsingDELETE(domainName: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    activateUserByEmailCodeUsingPOST(emailCode: string, pkgName: string, options?: RequestInit): Promise<{
        token: string;
        refreshToken: string;
        scope: "CUSTOMER_USER" | "PRE_VERIFICATION_TOKEN" | "REFRESH_TOKEN" | "SYS_ADMIN" | "TENANT_ADMIN";
    }>;
    activateEmailUsingGET(emailCode: string, pkgName: string, options?: RequestInit): Promise<any>;
    mobileLoginUsingGET(pkgName: string, options?: RequestInit): Promise<any>;
    resendEmailActivationUsingPOST(email: string, pkgName: string, options?: RequestInit): Promise<any>;
    signUpUsingPOST(data: schemas.SignUpRequest, options?: RequestInit): Promise<any>;
    acceptPrivacyPolicyUsingPOST(options?: RequestInit): Promise<{}>;
    acceptTermsOfUseUsingPOST(options?: RequestInit): Promise<{}>;
    privacyPolicyAcceptedUsingGET(options?: RequestInit): Promise<any>;
    termsOfUseAcceptedUsingGET(options?: RequestInit): Promise<any>;
    getSolutionTemplateDetailsUsingGET(solutionTemplateId: string, options?: RequestInit): Promise<{
        id: string;
        description: string;
        title: string;
        highlights: string;
        imageUrls: string[];
        installed: boolean;
        level: "MAKER" | "PROTOTYPE" | "STARTUP";
        installTimeoutMs: number;
        tenantTelemetryKeys: string[];
        tenantAttributeKeys: string[];
    }>;
    getSolutionTemplateInfosUsingGET(options?: RequestInit): Promise<any>;
    getSolutionTemplateInstructionsUsingGET(solutionTemplateId: string, options?: RequestInit): Promise<{
        details: string;
        mainDashboardPublic: boolean;
        dashboardId?: any;
        dashboardGroupId?: any;
        publicId?: any;
    }>;
    uninstallSolutionTemplateUsingDELETE(solutionTemplateId: string, options?: RequestInit): Promise<any>;
    installSolutionTemplateUsingPOST(solutionTemplateId: string, options?: RequestInit): Promise<{
        details: string;
        mainDashboardPublic: boolean;
        success: boolean;
        dashboardId?: any;
        dashboardGroupId?: any;
        publicId?: any;
    }>;
    saveResourceUsingPOST(data: schemas.TbResource, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        link: string;
        title: string;
        public: boolean;
        fileName: string;
        publicResourceKey: string;
        resourceKey: string;
        publicLink: string;
        resourceType: "IMAGE" | "JKS" | "JS_MODULE" | "LWM2M_MODEL" | "PKCS_12";
        etag: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        descriptor?: any;
    }>;
    getResourceInfoByIdUsingGET(resourceId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        link: string;
        title: string;
        public: boolean;
        fileName: string;
        publicResourceKey: string;
        resourceKey: string;
        publicLink: string;
        resourceType: "IMAGE" | "JKS" | "JS_MODULE" | "LWM2M_MODEL" | "PKCS_12";
        etag: string;
        id?: any;
        tenantId?: any;
        customerId?: any;
        descriptor?: any;
    }>;
    downloadJksResourceIfChangedUsingGET(resourceId: string, If_None_Match: string, options?: RequestInit): Promise<any>;
    downloadJsResourceIfChangedUsingGET(resourceId: string, If_None_Match: string, options?: RequestInit): Promise<any>;
    getLwm2mListObjectsPageUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<any>;
    downloadLwm2mResourceIfChangedUsingGET(resourceId: string, If_None_Match: string, options?: RequestInit): Promise<any>;
    getLwm2mListObjectsUsingGET(sortOrder: string, sortProperty: string, objectIds: string, options?: RequestInit): Promise<any>;
    downloadPkcs12ResourceIfChangedUsingGET(resourceId: string, If_None_Match: string, options?: RequestInit): Promise<any>;
    getTenantResourcesUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    deleteResourceUsingDELETE(resourceId: string, options?: RequestInit): Promise<any>;
    downloadResourceUsingGET(resourceId: string, options?: RequestInit): Promise<{
        description: string;
        file: string;
        byteArray: string;
        filename: string;
        open: boolean;
        readable: boolean;
        uri: string;
        url: string;
        inputStream?: any;
    }>;
    getResourcesUsingGET(pageSize: number, page: number, resourceType: string, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    saveDeviceAttributesUsingPOST(deviceId: string, scope: string, data: schemas.JsonNode, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    deleteDeviceAttributesUsingDELETE(deviceId: string, scope: string, keys: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    saveEntityAttributesV2UsingPOST(entityType: string, entityId: string, scope: string, data: schemas.JsonNode, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getAttributeKeysUsingGET(entityType: string, entityId: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getAttributeKeysByScopeUsingGET(entityType: string, entityId: string, scope: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getTimeseriesKeysUsingGET_1(entityType: string, entityId: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    deleteEntityTimeseriesUsingDELETE(entityType: string, entityId: string, keys: string, deleteAllDataForKeys: boolean, startTs: number, endTs: number, deleteLatest: boolean, rewriteLatestIfDeleted: boolean, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    saveEntityTelemetryWithTTLUsingPOST(entityType: string, entityId: string, scope: string, ttl: number, data: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    saveEntityTelemetryUsingPOST(entityType: string, entityId: string, scope: string, data: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getAttributesByScopeUsingGET(entityType: string, entityId: string, scope: string, keys: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getAttributesUsingGET(entityType: string, entityId: string, keys: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getTimeseriesUsingGET(entityType: string, entityId: string, keys: string, startTs: number, endTs: number, interval: number, limit: number, agg: string, orderBy: string, useStrictDataTypes: boolean, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    getLatestTimeseriesUsingGET(entityType: string, entityId: string, keys: string, useStrictDataTypes: boolean, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    saveEntityAttributesV1UsingPOST(entityType: string, entityId: string, scope: string, data: schemas.JsonNode, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    deleteEntityAttributesUsingDELETE(entityType: string, entityId: string, scope: string, keys: string, options?: RequestInit): Promise<{
        result: {};
        setOrExpired: boolean;
    }>;
    saveTenantUsingPOST(data: schemas.Tenant, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        email: string;
        address: string;
        address2: string;
        city: string;
        country: string;
        phone: string;
        state: string;
        zip: string;
        title: string;
        region: string;
        id?: any;
        additionalInfo?: any;
        tenantProfileId?: any;
    }>;
    getTenantInfoByIdUsingGET(tenantId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        email: string;
        address: string;
        address2: string;
        city: string;
        country: string;
        phone: string;
        state: string;
        zip: string;
        title: string;
        region: string;
        tenantProfileName: string;
        id?: any;
        additionalInfo?: any;
        tenantProfileId?: any;
    }>;
    getTenantByIdUsingGET(tenantId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        email: string;
        address: string;
        address2: string;
        city: string;
        country: string;
        phone: string;
        state: string;
        zip: string;
        title: string;
        region: string;
        id?: any;
        additionalInfo?: any;
        tenantProfileId?: any;
    }>;
    deleteTenantUsingDELETE(tenantId: string, options?: RequestInit): Promise<any>;
    getTenantInfosUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getTenantsUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getTenantsByIdsUsingGET(tenantIds: string, options?: RequestInit): Promise<any>;
    saveTenantProfileUsingPOST(data: schemas.TenantProfile, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        default: boolean;
        description: string;
        isolatedTbRuleEngine: boolean;
        id?: any;
        profileData?: any;
    }>;
    getTenantProfileByIdUsingGET(tenantProfileId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        default: boolean;
        description: string;
        isolatedTbRuleEngine: boolean;
        id?: any;
        profileData?: any;
    }>;
    deleteTenantProfileUsingDELETE(tenantProfileId: string, options?: RequestInit): Promise<any>;
    setDefaultTenantProfileUsingPOST(tenantProfileId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        default: boolean;
        description: string;
        isolatedTbRuleEngine: boolean;
        id?: any;
        profileData?: any;
    }>;
    getDefaultTenantProfileInfoUsingGET(options?: RequestInit): Promise<{
        name: string;
        id?: any;
    }>;
    getTenantProfileInfoByIdUsingGET(tenantProfileId: string, options?: RequestInit): Promise<{
        name: string;
        id?: any;
    }>;
    getTenantProfileInfosUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getTenantProfilesByIdsUsingGET(ids: string, options?: RequestInit): Promise<any>;
    getTenantProfilesUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    generateTwoFaAccountConfigUsingPOST(providerType: string, options?: RequestInit): Promise<{
        useByDefault: boolean;
    }>;
    submitTwoFaAccountConfigUsingPOST(data: schemas.TwoFaAccountConfig, options?: RequestInit): Promise<any>;
    updateTwoFaAccountConfigUsingPUT(providerType: string, data: schemas.TwoFaAccountConfigUpdateRequest, options?: RequestInit): Promise<{
        configs: Record<string, any>;
    }>;
    deleteTwoFaAccountConfigUsingDELETE(providerType: string, options?: RequestInit): Promise<{
        configs: Record<string, any>;
    }>;
    verifyAndSaveTwoFaAccountConfigUsingPOST(verificationCode: string, data: schemas.TwoFaAccountConfig, options?: RequestInit): Promise<{
        configs: Record<string, any>;
    }>;
    getAccountTwoFaSettingsUsingGET(options?: RequestInit): Promise<{
        configs: Record<string, any>;
    }>;
    getAvailableTwoFaProvidersUsingGET(options?: RequestInit): Promise<any>;
    getPlatformTwoFaSettingsUsingGET(options?: RequestInit): Promise<{
        maxVerificationFailuresBeforeUserLockout: number;
        minVerificationCodeSendPeriod: number;
        providers: any[];
        totalAllowedTimeForVerification: number;
        useSystemTwoFactorAuthSettings: boolean;
        verificationCodeCheckRateLimit: string;
    }>;
    savePlatformTwoFaSettingsUsingPOST(data: schemas.PlatformTwoFaSettings, options?: RequestInit): Promise<{
        maxVerificationFailuresBeforeUserLockout: number;
        minVerificationCodeSendPeriod: number;
        providers: any[];
        totalAllowedTimeForVerification: number;
        useSystemTwoFactorAuthSettings: boolean;
        verificationCodeCheckRateLimit: string;
    }>;
    getAvailableTwoFaProvidersUsingGET_1(options?: RequestInit): Promise<any>;
    checkTwoFaVerificationCodeUsingPOST(providerType: string, verificationCode: string, options?: RequestInit): Promise<{
        token: string;
        refreshToken: string;
        scope: "CUSTOMER_USER" | "PRE_VERIFICATION_TOKEN" | "REFRESH_TOKEN" | "SYS_ADMIN" | "TENANT_ADMIN";
    }>;
    requestTwoFaVerificationCodeUsingPOST(providerType: string, options?: RequestInit): Promise<any>;
    getHelpBaseUrlUsingGET(options?: RequestInit): Promise<any>;
    getTenantUsageInfoUsingGET(options?: RequestInit): Promise<{
        maxAssets: number;
        maxCustomers: number;
        maxDashboards: number;
        maxDevices: number;
        maxEmails: number;
        maxSms: number;
        maxTbelExecutions: number;
        maxTransportMessages: number;
        maxUsers: number;
        smsEnabled: boolean;
        alarms: number;
        assets: number;
        customers: number;
        dashboards: number;
        devices: number;
        emails: number;
        jsExecutions: number;
        maxAlarms: number;
        maxJsExecutions: number;
        sms: number;
        tbelExecutions: number;
        transportMessages: number;
        users: number;
    }>;
    getAllCustomerUsersUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getCustomerUserInfosUsingGET(customerId: string, pageSize: number, page: number, includeCustomers: boolean, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getCustomerUsersUsingGET(customerId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getUsersByEntityGroupIdUsingGET(entityGroupId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getTenantAdminsUsingGET(tenantId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getUserDashboardsInfoUsingGET(options?: RequestInit): Promise<{
        starred: any[];
        last: any[];
    }>;
    reportUserDashboardActionUsingGET(dashboardId: string, action: string, options?: RequestInit): Promise<{
        starred: any[];
        last: any[];
    }>;
    getUserInfoByIdUsingGET(userId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        email: string;
        firstName: string;
        lastName: string;
        ownerName: string;
        groups: any[];
        phone: string;
        authority: "CUSTOMER_USER" | "PRE_VERIFICATION_TOKEN" | "REFRESH_TOKEN" | "SYS_ADMIN" | "TENANT_ADMIN";
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    sendActivationEmailUsingPOST(email: string, options?: RequestInit): Promise<any>;
    getUserSettingsUsingGET(options?: RequestInit): Promise<{}>;
    putUserSettingsUsingPUT(data: schemas.JsonNode, options?: RequestInit): Promise<any>;
    saveUserSettingsUsingPOST(data: schemas.JsonNode, options?: RequestInit): Promise<{}>;
    deleteUserSettingsUsingDELETE_1(paths: string, options?: RequestInit): Promise<any>;
    getUserSettingsUsingGET_1(type: string, options?: RequestInit): Promise<{}>;
    putUserSettingsUsingPUT_1(type: string, data: schemas.JsonNode, options?: RequestInit): Promise<any>;
    deleteUserSettingsUsingDELETE(paths: string, type: string, options?: RequestInit): Promise<any>;
    isUserTokenAccessEnabledUsingGET(options?: RequestInit): Promise<any>;
    getUserUsersUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getUserByIdUsingGET(userId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        email: string;
        firstName: string;
        lastName: string;
        phone: string;
        authority: "CUSTOMER_USER" | "PRE_VERIFICATION_TOKEN" | "REFRESH_TOKEN" | "SYS_ADMIN" | "TENANT_ADMIN";
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    deleteUserUsingDELETE(userId: string, options?: RequestInit): Promise<any>;
    getActivationLinkUsingGET(userId: string, options?: RequestInit): Promise<any>;
    getUserTokenUsingGET(userId: string, options?: RequestInit): Promise<{
        token: string;
        refreshToken: string;
        scope: "CUSTOMER_USER" | "PRE_VERIFICATION_TOKEN" | "REFRESH_TOKEN" | "SYS_ADMIN" | "TENANT_ADMIN";
    }>;
    setUserCredentialsEnabledUsingPOST(userId: string, userCredentialsEnabled: boolean, options?: RequestInit): Promise<any>;
    getAllUserInfosUsingGET(pageSize: number, page: number, includeCustomers: boolean, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getUsersForAssignUsingGET(alarmId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    findUsersByQueryUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getUsersByIdsUsingGET(userIds: string, options?: RequestInit): Promise<any>;
    saveUserUsingPOST(sendActivationMail: boolean, entityGroupId: string, entityGroupIds: string, data: schemas.User, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        email: string;
        firstName: string;
        lastName: string;
        phone: string;
        authority: "CUSTOMER_USER" | "PRE_VERIFICATION_TOKEN" | "REFRESH_TOKEN" | "SYS_ADMIN" | "TENANT_ADMIN";
        id?: any;
        tenantId?: any;
        customerId?: any;
        additionalInfo?: any;
        ownerId?: any;
    }>;
    getAllowedPermissionsUsingGET(options?: RequestInit): Promise<{
        allowedResources: ("ALARM" | "ADMIN_SETTINGS" | "ALL" | "API_USAGE_STATE" | "ASSET" | "ASSET_GROUP" | "ASSET_PROFILE" | "AUDIT_LOG" | "BLOB_ENTITY" | "CONVERTER" | "CUSTOMER" | "CUSTOMER_GROUP" | "DASHBOARD" | "DASHBOARD_GROUP" | "DEVICE" | "DEVICE_GROUP" | "DEVICE_PROFILE" | "EDGE" | "EDGE_GROUP" | "ENTITY_VIEW" | "ENTITY_VIEW_GROUP" | "GROUP_PERMISSION" | "INTEGRATION" | "NOTIFICATION" | "OAUTH2_CONFIGURATION_INFO" | "OAUTH2_CONFIGURATION_TEMPLATE" | "OTA_PACKAGE" | "PROFILE" | "QUEUE" | "ROLE" | "RULE_CHAIN" | "SCHEDULER_EVENT" | "TB_RESOURCE" | "TENANT" | "TENANT_PROFILE" | "USER" | "USER_GROUP" | "VERSION_CONTROL" | "WHITE_LABELING" | "WIDGETS_BUNDLE" | "WIDGET_TYPE")[];
        operationsByResource: Record<string, string[]>;
        allowedForGroupRoleOperations: ("ALL" | "ADD_TO_GROUP" | "ASSIGN_TO_TENANT" | "CHANGE_OWNER" | "CLAIM_DEVICES" | "CREATE" | "DELETE" | "IMPERSONATE" | "READ" | "READ_ATTRIBUTES" | "READ_CREDENTIALS" | "READ_TELEMETRY" | "REMOVE_FROM_GROUP" | "RPC_CALL" | "SHARE_GROUP" | "WRITE" | "WRITE_ATTRIBUTES" | "WRITE_CREDENTIALS" | "WRITE_TELEMETRY")[];
        allowedForGroupOwnerOnlyOperations: ("ALL" | "ADD_TO_GROUP" | "ASSIGN_TO_TENANT" | "CHANGE_OWNER" | "CLAIM_DEVICES" | "CREATE" | "DELETE" | "IMPERSONATE" | "READ" | "READ_ATTRIBUTES" | "READ_CREDENTIALS" | "READ_TELEMETRY" | "REMOVE_FROM_GROUP" | "RPC_CALL" | "SHARE_GROUP" | "WRITE" | "WRITE_ATTRIBUTES" | "WRITE_CREDENTIALS" | "WRITE_TELEMETRY")[];
        allowedForGroupOwnerOnlyGroupOperations: ("ALL" | "ADD_TO_GROUP" | "ASSIGN_TO_TENANT" | "CHANGE_OWNER" | "CLAIM_DEVICES" | "CREATE" | "DELETE" | "IMPERSONATE" | "READ" | "READ_ATTRIBUTES" | "READ_CREDENTIALS" | "READ_TELEMETRY" | "REMOVE_FROM_GROUP" | "RPC_CALL" | "SHARE_GROUP" | "WRITE" | "WRITE_ATTRIBUTES" | "WRITE_CREDENTIALS" | "WRITE_TELEMETRY")[];
        userOwnerId?: any;
        userPermissions?: any;
    }>;
    getLoginWhiteLabelParamsUsingGET(options?: RequestInit): Promise<{
        whiteLabelingEnabled: boolean;
        logoImageUrl: string;
        logoImageHeight: number;
        appTitle: string;
        helpLinkBaseUrl: string;
        uiHelpBaseUrl: string;
        enableHelpLinks: boolean;
        showNameVersion: boolean;
        platformName: string;
        platformVersion: string;
        customCss: string;
        pageBackgroundColor: string;
        darkForeground: boolean;
        domainName: string;
        baseUrl: string;
        prohibitDifferentUrl: boolean;
        adminSettingsId: string;
        showNameBottom: boolean;
        favicon?: any;
        paletteSettings?: any;
    }>;
    getCurrentLoginWhiteLabelParamsUsingGET(customerId: string, options?: RequestInit): Promise<{
        whiteLabelingEnabled: boolean;
        logoImageUrl: string;
        logoImageHeight: number;
        appTitle: string;
        helpLinkBaseUrl: string;
        uiHelpBaseUrl: string;
        enableHelpLinks: boolean;
        showNameVersion: boolean;
        platformName: string;
        platformVersion: string;
        customCss: string;
        pageBackgroundColor: string;
        darkForeground: boolean;
        domainName: string;
        baseUrl: string;
        prohibitDifferentUrl: boolean;
        adminSettingsId: string;
        showNameBottom: boolean;
        favicon?: any;
        paletteSettings?: any;
    }>;
    getCurrentWhiteLabelParamsUsingGET(customerId: string, options?: RequestInit): Promise<{
        whiteLabelingEnabled: boolean;
        logoImageUrl: string;
        logoImageHeight: number;
        appTitle: string;
        helpLinkBaseUrl: string;
        uiHelpBaseUrl: string;
        enableHelpLinks: boolean;
        showNameVersion: boolean;
        platformName: string;
        platformVersion: string;
        customCss: string;
        favicon?: any;
        paletteSettings?: any;
    }>;
    isCustomerWhiteLabelingAllowedUsingGET(options?: RequestInit): Promise<any>;
    isWhiteLabelingAllowedUsingGET(options?: RequestInit): Promise<any>;
    saveLoginWhiteLabelParamsUsingPOST(customerId: string, data: schemas.LoginWhiteLabelingParams, options?: RequestInit): Promise<{
        whiteLabelingEnabled: boolean;
        logoImageUrl: string;
        logoImageHeight: number;
        appTitle: string;
        helpLinkBaseUrl: string;
        uiHelpBaseUrl: string;
        enableHelpLinks: boolean;
        showNameVersion: boolean;
        platformName: string;
        platformVersion: string;
        customCss: string;
        pageBackgroundColor: string;
        darkForeground: boolean;
        domainName: string;
        baseUrl: string;
        prohibitDifferentUrl: boolean;
        adminSettingsId: string;
        showNameBottom: boolean;
        favicon?: any;
        paletteSettings?: any;
    }>;
    saveMailTemplatesUsingPOST(data: schemas.JsonNode, options?: RequestInit): Promise<{}>;
    getMailTemplatesUsingGET(systemByDefault: boolean, options?: RequestInit): Promise<{}>;
    previewWhiteLabelParamsUsingPOST(data: schemas.WhiteLabelingParams, options?: RequestInit): Promise<{
        whiteLabelingEnabled: boolean;
        logoImageUrl: string;
        logoImageHeight: number;
        appTitle: string;
        helpLinkBaseUrl: string;
        uiHelpBaseUrl: string;
        enableHelpLinks: boolean;
        showNameVersion: boolean;
        platformName: string;
        platformVersion: string;
        customCss: string;
        favicon?: any;
        paletteSettings?: any;
    }>;
    getWhiteLabelParamsUsingGET(options?: RequestInit): Promise<{
        whiteLabelingEnabled: boolean;
        logoImageUrl: string;
        logoImageHeight: number;
        appTitle: string;
        helpLinkBaseUrl: string;
        uiHelpBaseUrl: string;
        enableHelpLinks: boolean;
        showNameVersion: boolean;
        platformName: string;
        platformVersion: string;
        customCss: string;
        favicon?: any;
        paletteSettings?: any;
    }>;
    saveWhiteLabelParamsUsingPOST(customerId: string, data: schemas.WhiteLabelingParams, options?: RequestInit): Promise<{
        whiteLabelingEnabled: boolean;
        logoImageUrl: string;
        logoImageHeight: number;
        appTitle: string;
        helpLinkBaseUrl: string;
        uiHelpBaseUrl: string;
        enableHelpLinks: boolean;
        showNameVersion: boolean;
        platformName: string;
        platformVersion: string;
        customCss: string;
        favicon?: any;
        paletteSettings?: any;
    }>;
    deleteWidgetTypeUsingDELETE(widgetTypeId: string, options?: RequestInit): Promise<any>;
    getWidgetTypeByIdUsingGET(widgetTypeId: string, inlineImages: boolean, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        description: string;
        image: string;
        fqn: string;
        deprecated: boolean;
        tags: string[];
        tenantId?: any;
        descriptor?: any;
    }>;
    getBundleWidgetTypeFqnsUsingGET(widgetsBundleId: string, options?: RequestInit): Promise<any>;
    getWidgetTypeInfoByIdUsingGET(widgetTypeId: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        description: string;
        image: string;
        fqn: string;
        deprecated: boolean;
        tags: string[];
        widgetType: string;
        id?: any;
        tenantId?: any;
    }>;
    getBundleWidgetTypesDetailsByBundleAliasUsingGET(isSystem: boolean, bundleAlias: string, options?: RequestInit): Promise<any>;
    getBundleWidgetTypesDetailsUsingGET(widgetsBundleId: string, inlineImages: boolean, options?: RequestInit): Promise<any>;
    getBundleWidgetTypesInfosByBundleAliasUsingGET(isSystem: boolean, bundleAlias: string, options?: RequestInit): Promise<any>;
    getBundleWidgetTypesInfosUsingGET(widgetsBundleId: string, pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, fullSearch: boolean, deprecatedFilter: string, widgetTypeList: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getBundleWidgetTypesByBundleAliasUsingGET(isSystem: boolean, bundleAlias: string, options?: RequestInit): Promise<any>;
    getWidgetTypesUsingGET(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, tenantOnly: boolean, fullSearch: boolean, deprecatedFilter: string, widgetTypeList: string, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getBundleWidgetTypesUsingGET(widgetsBundleId: string, options?: RequestInit): Promise<any>;
    getWidgetTypeByBundleAliasAndTypeAliasUsingGET(isSystem: boolean, bundleAlias: string, alias: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        fqn: string;
        deprecated: boolean;
        id?: any;
        tenantId?: any;
        descriptor?: any;
    }>;
    getWidgetTypeUsingGET(fqn: string, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        fqn: string;
        deprecated: boolean;
        id?: any;
        tenantId?: any;
        descriptor?: any;
    }>;
    saveWidgetTypeUsingPOST(updateExistingByFqn: boolean, data: schemas.WidgetTypeDetails, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        description: string;
        image: string;
        fqn: string;
        deprecated: boolean;
        tags: string[];
        tenantId?: any;
        descriptor?: any;
    }>;
    saveWidgetsBundleUsingPOST(data: schemas.WidgetsBundle, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        description: string;
        image: string;
        title: string;
        alias: string;
        order: number;
        id?: any;
        tenantId?: any;
    }>;
    deleteWidgetsBundleUsingDELETE(widgetsBundleId: string, options?: RequestInit): Promise<any>;
    updateWidgetsBundleWidgetFqnsUsingPOST(widgetsBundleId: string, data: Array<string>, options?: RequestInit): Promise<any>;
    updateWidgetsBundleWidgetTypesUsingPOST(widgetsBundleId: string, data: Array<string>, options?: RequestInit): Promise<any>;
    getWidgetsBundleByIdUsingGET(widgetsBundleId: string, inlineImages: boolean, options?: RequestInit): Promise<{
        createdTime: number;
        name: string;
        description: string;
        image: string;
        title: string;
        alias: string;
        order: number;
        id?: any;
        tenantId?: any;
    }>;
    getWidgetsBundlesUsingGET(options?: RequestInit): Promise<any>;
    getWidgetsBundlesUsingGET_1(pageSize: number, page: number, textSearch: string, sortProperty: string, sortOrder: string, tenantOnly: boolean, fullSearch: boolean, options?: RequestInit): Promise<{
        data: any[];
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }>;
    getWidgetsBundlesByIdsUsingGET(widgetsBundleIds: string, options?: RequestInit): Promise<any>;
}
export * from './schemas';
