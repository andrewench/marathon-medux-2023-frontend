import { type TZoomValue } from '@/shared/types'

export const AppConstant = {
  fontZoomer: {
    DEFAULT_VALUE: 1 as TZoomValue,
    VALUES: [0.9, 1, 1.1] as TZoomValue[],
    VARIABLE: '--font-zoom',
  },

  storage: {
    keys: {
      FONT_ZOOM_PREFIX: 'marathon-font-zoom',
      THEME_PREFIX: 'marathon-theme',
    },
  },
}
