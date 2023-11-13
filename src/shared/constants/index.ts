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
}
