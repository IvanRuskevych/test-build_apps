import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { axiosInstance } from '~/shared/api/axiosInstance.ts'

export interface Response<T> {
  status: number
  data?: T
}

export class HttpService {
  private instance: AxiosInstance
  
  constructor(instance: AxiosInstance = axiosInstance) {
    this.instance = instance
  }
  
  public async get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<Response<T>> {
    const response: AxiosResponse<T> = await this.instance.get(url, config)
    return { data: response.data, status: response.status }
  }
}