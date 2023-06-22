/* eslint-disable no-console */
import fetch from 'node-fetch';
import { URL, URLSearchParams } from 'url';
import {
  FiscalizationRequest,
  ErrorResponse,
  FiscalizationResponse,
} from './types';

export interface Config {
  basePath?: string;
  apiVersion?: string;
  source?: string;
}

export class FiscalizerError extends Error {
  public errors: ErrorResponse[]
  public headers: Record<string, string>

  constructor({
    errors,
    headers,
  }: {
    errors: ErrorResponse[]
    headers: Record<string, string>
  }) {
    super()
    this.errors = errors
    this.headers = headers
  }
}

export class Client {
  private basePath: string
  private apiVersion: string
  private source: string | undefined

  constructor({ basePath, apiVersion, source }: Config) {
    this.basePath = basePath || 'http://localhost:5445'
    this.apiVersion = apiVersion || 'v1'
    this.source = source
  }

  public request = async <T_Data = any>({
    method,
    path,
    data,
    params,
    compress = false,
  }: {
    method: string
    path: string
    data: FiscalizationRequest,
    params?: Record<string, any>
    compress?: boolean
  }): Promise<FiscalizationResponse<T_Data>> => {
    let body
    let responseBody
    const fullPath = new URL(path, this.basePath);

    const headers = {
      'Content-Type': 'application/json',
      company: 'BARRAGE_TEST',
      'api-key': 'apiKeychinaTestna',
    };

    if (params) {
      const params_with_array_expanded = new URLSearchParams()
      Object.entries(params)
        .sort()
        .filter((option) => option[0] !== null)
        .forEach(([key, value]) => {
          if (Array.isArray(value)) {
            value.forEach((value) =>
              params_with_array_expanded.append(key, value.toString())
            )
          } else {
            params_with_array_expanded.append(key, value.toString())
          }
        })
      fullPath.search = params_with_array_expanded.toString()
    }

    if (data) {
      body = JSON.stringify(data);
    }

    const response = await fetch(fullPath.href, {
      method,
      headers,
      body,
      compress,
    });

    const contentType = response.headers.get('content-type')

    if (contentType && contentType.includes('json')) {
      responseBody = await response.json();
    } else {
      responseBody = (await response.text()) as any;
    }

    if (!response.ok || ('errors' in responseBody && responseBody.errors)) {
      throw new FiscalizerError({ ...responseBody, headers: response.headers });
    }

    return { data: { ...responseBody }, headers: response.headers };
  }
}
