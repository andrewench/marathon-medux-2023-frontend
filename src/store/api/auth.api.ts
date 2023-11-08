import { createApi } from '@reduxjs/toolkit/query/react'

import { axiosBaseQuery } from '@/shared/utils'

import type { TSignInCredentials, User } from '@/shared/types'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_PROXY_HOST as string,
  }),
  endpoints: ({ mutation }) => ({
    login: mutation<User, TSignInCredentials>({
      query: payload => ({
        url: '/auth/login',
        method: 'POST',
        data: payload,
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi
