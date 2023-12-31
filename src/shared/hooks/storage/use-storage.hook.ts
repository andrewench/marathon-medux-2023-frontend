import { useCallback, useState } from 'react'

import { Constants } from '@/shared/constants'

import { IStorage } from './use-storage.interface'

export const useStorage = (name: string) => {
  const { DEFAULT_CONFIG } = Constants.storage

  const [initialStorage] = useState<IStorage | null>(() => {
    if (typeof window === 'undefined') return null

    const data = localStorage.getItem(name)

    if (!data) {
      localStorage.setItem(name, JSON.stringify(DEFAULT_CONFIG))

      return DEFAULT_CONFIG
    }

    try {
      const payload = JSON.parse(data)

      if (typeof payload !== 'object') return DEFAULT_CONFIG

      if (!Object.keys(payload).length) return DEFAULT_CONFIG

      return payload
    } catch (_) {
      return DEFAULT_CONFIG
    }
  })

  const updateStorage = useCallback((name: string, payload: IStorage) => {
    localStorage.setItem(name, JSON.stringify(payload))

    const prefersColorSchemeMedia = '(prefers-color-scheme: dark)'

    const headElement = document.documentElement

    const changeModeHandler = () => {
      const isDarkModeEnabled = window.matchMedia(
        prefersColorSchemeMedia,
      ).matches

      isDarkModeEnabled
        ? headElement.setAttribute('data-theme', 'dark')
        : headElement.setAttribute('data-theme', 'light')
    }

    switch (payload.theme) {
      case 'system':
        changeModeHandler()

        window
          .matchMedia(prefersColorSchemeMedia)
          .addEventListener('change', changeModeHandler)
        break

      default:
        headElement.setAttribute('data-theme', payload.theme)

        window
          .matchMedia(prefersColorSchemeMedia)
          .removeEventListener('change', changeModeHandler)
        break
    }
  }, [])

  const getStorage = useCallback((): typeof DEFAULT_CONFIG => {
    try {
      const storage = localStorage.getItem(name)

      if (!storage) return DEFAULT_CONFIG

      const parsedStorage = JSON.parse(storage)

      if (typeof parsedStorage !== 'object') return DEFAULT_CONFIG

      return parsedStorage
    } catch (err) {
      return DEFAULT_CONFIG
    }
  }, [DEFAULT_CONFIG, name])

  return { initialStorage, updateStorage, getStorage }
}
