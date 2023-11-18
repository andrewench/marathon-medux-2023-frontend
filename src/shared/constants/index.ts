import type { TThemeMode, TZoomValue } from '@/shared/types'

export const Constants = {
  fontZoomer: {
    DEFAULT_VALUE: 1 as TZoomValue,
    VALUES: [0.9, 1, 1.1] as TZoomValue[],
    VARIABLE: '--font-zoom',
  },

  theme: {
    DEFAULT_VALUE: 'system' as TThemeMode,
    VALUES: ['light', 'dark', 'system', 'high_contrast'] as TThemeMode[],
  },

  storage: {
    NAME: 'marathon-medux-config',
    keys: {
      FONT_ZOOM_PREFIX: 'marathon-font-zoom',
      THEME_PREFIX: 'marathon-theme',
    },
    DEFAULT_CONFIG: {
      theme: 'system' as TThemeMode,
      fontZoom: 1 as TZoomValue,
    },
  },

  tokens: {
    ACCESS_TOKEN_PREFIX: 'at',
    REFRESH_TOKEN_PREFIX: 'rt',
  },

  patterns: {
    firstName: /\b[^0-9^\s]{2,28}\b/,
    lastName: /\b[^0-9^\s]{3,30}\b/,
    login: /^[a-z][\w\\_?\d*]+$/,
    email:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password:
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,
  },

  colors: {
    PEACH: '#ff715b',
    MALACHITE: '#04e762',
    AZURE: '#0496ff',
    PURPLE: '#6665dd',
    TEAL: '#34d1bf',
  },
}
