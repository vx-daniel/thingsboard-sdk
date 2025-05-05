import { BaseVXOlympusClient } from '../../base-client';
import * as schemas from '../schemas';

export class RuleEngineControllerClient extends BaseVXOlympusClient {
  async handleRuleEngineRequestUsingPOST_3(data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/rule-engine/`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async handleRuleEngineRequestUsingPOST_2(entityType: string, entityId: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/rule-engine/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async handleRuleEngineRequestUsingPOST_1(entityType: string, entityId: string, queueName: string, timeout: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/rule-engine/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/${encodeURIComponent(queueName)}/${encodeURIComponent(timeout)}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }

  async handleRuleEngineRequestUsingPOST(entityType: string, entityId: string, timeout: string, data: any, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api/rule-engine/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}/${encodeURIComponent(timeout)}`;
    const response = await this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
    return response;
  }}