'use client'

import { FC, PropsWithChildren, useEffect } from 'react'

import { useActions } from '@/shared/hooks'

import { useGetProfileQuery } from '@/store/api'

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { data } = useGetProfileQuery(null)

  const { setUserData } = useActions()

  useEffect(() => {
    if (!data) return

    setUserData(data)
  }, [data, setUserData])

  return <>{children}</>
}
