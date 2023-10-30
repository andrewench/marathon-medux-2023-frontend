import { FC, useEffect, useState } from 'react'

import cn from 'clsx'

import { Flex } from '@/components/layout'

import { DotProgressBar } from '@/components/ui'
import { type TPoint } from '@/components/ui/dot-progress-bar/dot-progress-bar.interface'

import { FontIcon } from '@/components/icons'

import { AppConstant } from '@/shared/constants'

import { type TZoomValue } from '@/shared/types'

import { initPointList } from './font-zoomer.helper'

import styles from './font-zoomer.module.scss'

export const FontZoomer: FC = () => {
  const [currentPercent, setCurrentPercent] = useState<number>(0)

  const [fontZoom, setFontZoom] = useState<TZoomValue>(() => {
    const { storage, fontZoomer } = AppConstant

    const DEFAULT_ZOOM = fontZoomer.DEFAULT_VALUE

    if (typeof window === 'undefined') return DEFAULT_ZOOM

    const storageZoom = localStorage.getItem(storage.keys.FONT_ZOOM_PREFIX)

    if (!storageZoom) return DEFAULT_ZOOM

    const parsedZoom = parseFloat(storageZoom) as TZoomValue

    const isValidValues = fontZoomer.VALUES.some(item => item === parsedZoom)

    return isValidValues ? parsedZoom : DEFAULT_ZOOM
  })

  const [points, setPoints] = useState<TPoint[]>(
    initPointList(setFontZoom, setCurrentPercent),
  )

  useEffect(() => {
    const foundPoint = points.some(
      item => fontZoom === item.zoomValue && !item.isDefault,
    )

    if (!foundPoint) return

    const newPoints = points

    newPoints.forEach(item => {
      if (fontZoom === item.zoomValue) {
        item.isDefault = true

        setCurrentPercent(item.percent)
      }
    })

    setPoints(newPoints)
  }, [fontZoom, points])

  useEffect(() => {
    const { storage, fontZoomer } = AppConstant

    const root = document.querySelector(':root') as HTMLElement

    if (!root) return

    root.style.setProperty(fontZoomer.VARIABLE, String(fontZoom))

    localStorage.setItem(storage.keys.FONT_ZOOM_PREFIX, String(fontZoom))
  }, [fontZoom])

  return (
    <Flex align="center" className={styles.size}>
      <FontIcon />

      <label className={cn(styles.text, styles.label)}>Font size</label>

      <DotProgressBar
        currentPercent={currentPercent}
        maxWidth={100}
        points={points}
      />
    </Flex>
  )
}
