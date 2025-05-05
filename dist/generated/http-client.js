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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = exports.ContentType = void 0;
const axios_1 = __importDefault(require("axios"));
var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
    ContentType["Text"] = "text/plain";
})(ContentType || (exports.ContentType = ContentType = {}));
class HttpClient {
    constructor({ securityWorker, secure, format, ...axiosConfig } = {}) {
        this.securityData = null;
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.request = async ({ secure, path, type, query, format, body, ...params }) => {
            const secureParams = ((typeof secure === "boolean" ? secure : this.secure) &&
                this.securityWorker &&
                (await this.securityWorker(this.securityData))) ||
                {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const responseFormat = format || this.format || undefined;
            if (type === ContentType.FormData &&
                body &&
                body !== null &&
                typeof body === "object") {
                body = this.createFormData(body);
            }
            if (type === ContentType.Text &&
                body &&
                body !== null &&
                typeof body !== "string") {
                body = JSON.stringify(body);
            }
            return this.instance.request({
                ...requestParams,
                headers: {
                    ...(requestParams.headers || {}),
                    ...(type ? { "Content-Type": type } : {}),
                },
                params: query,
                responseType: responseFormat,
                data: body,
                url: path,
            });
        };
        this.instance = axios_1.default.create({
            ...axiosConfig,
            baseURL: axiosConfig.baseURL || "https://portal.vxolympus.com:443",
        });
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }
    mergeRequestParams(params1, params2) {
        const method = params1.method || (params2 && params2.method);
        return {
            ...this.instance.defaults,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...((method &&
                    this.instance.defaults.headers[method.toLowerCase()]) ||
                    {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }
    stringifyFormItem(formItem) {
        if (typeof formItem === "object" && formItem !== null) {
            return JSON.stringify(formItem);
        }
        else {
            return `${formItem}`;
        }
    }
    createFormData(input) {
        if (input instanceof FormData) {
            return input;
        }
        return Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            const propertyContent = property instanceof Array ? property : [property];
            for (const formItem of propertyContent) {
                const isFileType = formItem instanceof Blob || formItem instanceof File;
                formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
            }
            return formData;
        }, new FormData());
    }
}
exports.HttpClient = HttpClient;
