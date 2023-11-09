import { createApi } from '@reduxjs/toolkit/query/react'

import { axiosBaseQuery } from '@/shared/utils'

import { User } from '@/shared/types'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_PROXY_HOST as string,
  }),
  endpoints: ({ query }) => ({
    getProfile: query<User, null>({
      query: () => ({
        url: '/user/profile',
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetProfileQuery } = userApi
