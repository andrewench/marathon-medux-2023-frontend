import type { TThemeMode, TZoomValue } from '@/shared/types'

export const Constants = {
  fontZoomer: {
    DEFAULT_VALUE: 1 as TZoomValue,
    VALUES: [0.9, 1, 1.1] as TZoomValue[],
    VARIABLE: '--font-zoom',
  },

  theme: {
    DEFAULT_VALUE: 'light' as TThemeMode,
    VALUES: ['light', 'dark'] as TThemeMode[],
  },

  storage: {
    keys: {
      FONT_ZOOM_PREFIX: 'marathon-font-zoom',
      THEME_PREFIX: 'marathon-theme',
    },
  },

  tokens: {
    ACCESS_TOKEN_PREFIX: 'at',
    REFRESH_TOKEN_PREFIX: 'rt',
  },
}
