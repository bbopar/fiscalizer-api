import { Client } from './Client'
import { FiscalizationRequest, FiscalizationResponse } from './types'

export class Resource {
  private client: Client

  constructor(client: Client) {
    this.client = client
  }

  protected request = async <T_Data = any>({
    method,
    path,
    data,
    params,
  }: {
    method: string
    path: string
    data: FiscalizationRequest
    params?: Record<string, any>
  }): Promise<FiscalizationResponse<T_Data>> =>
    this.client.request({ method, path, data, params })
}
