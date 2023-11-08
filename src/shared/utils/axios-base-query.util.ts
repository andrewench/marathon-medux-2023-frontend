import { type BaseQueryFn } from '@reduxjs/toolkit/query'
import axios, { AxiosError, type AxiosRequestConfig } from 'axios'

import { AxiosService } from '@/services'

interface IBaseQueryFnConfig {
  url: string
  method: AxiosRequestConfig['method']
  data?: AxiosRequestConfig['data']
  params?: AxiosRequestConfig['params']
  headers?: AxiosRequestConfig['headers']
}

export const axiosBaseQuery =
  ({ baseUrl = '' }: { baseUrl: string }): BaseQueryFn<IBaseQueryFnConfig> =>
  async ({ url, ...config }) => {
    try {
      const result = await AxiosService({
        url: baseUrl + url,
        ...config,
      })

      return {
        data: result.data,
      }
    } catch (error) {
      const err = error as AxiosError

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }
