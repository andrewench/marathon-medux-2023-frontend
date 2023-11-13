import { StateAction, TZoomValue } from '@/shared/types'

import { type TPoint } from '../dot-progress-bar/dot-progress-bar.interface'

export function initPointList(
  setFontZoom: StateAction<TZoomValue>,
  setCurrentPercent: StateAction<number>,
): TPoint[] {
  function clickHandler(zoomValue: TZoomValue, percent: number) {
    setFontZoom(zoomValue)
    setCurrentPercent(percent)
  }

  return [
    {
      zoomValue: 0.9,
      percent: 25,
      label: 'S',
      onClick: function () {
        clickHandler(this.zoomValue, this.percent)
      },
    },
    {
      zoomValue: 1,
      percent: 50,
      label: 'M',
      onClick: function () {
        clickHandler(this.zoomValue, this.percent)
      },
    },
    {
      zoomValue: 1.1,
      percent: 75,
      label: 'L',
      onClick: function () {
        clickHandler(this.zoomValue, this.percent)
      },
    },
  ]
}
