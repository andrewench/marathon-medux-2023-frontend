import { createApi } from '@reduxjs/toolkit/query/react'

import { axiosBaseQuery } from '@/shared/utils'

import type {
  TSignInCredentials,
  TSignUpCredentials,
  User,
} from '@/shared/types'

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
    signUp: mutation<User, Omit<TSignUpCredentials, 'confirm'>>({
      query: payload => ({
        url: '/auth/signup',
        method: 'PUT',
        data: payload,
      }),
    }),
    logout: mutation<null, null>({
      query: () => ({
        url: '/auth/logout',
        method: 'DELETE',
      }),
    }),
  }),
})

export const { useLoginMutation, useLogoutMutation, useSignUpMutation } =
  authApi
