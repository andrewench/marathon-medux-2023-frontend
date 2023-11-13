import { Type } from 'lucide-react'
import { FC, useEffect, useState } from 'react'

import cn from 'clsx'

import { Flex } from '@/components/layout'

import { DotProgressBar, type TPoint } from '@/components/ui'

import { Constants } from '@/shared/constants'

import { useStorage } from '@/shared/hooks'

import { type TZoomValue } from '@/shared/types'

import { initPointList } from './font-zoomer.helper'

import styles from './font-zoomer.module.scss'

export const FontZoomer: FC = () => {
  const [currentPercent, setCurrentPercent] = useState<number>(0)

  const { storage, updateStorage } = useStorage(Constants.storage.NAME)

  const [fontZoom, setFontZoom] = useState<TZoomValue>(storage.fontZoom)

  const [points, setPoints] = useState<TPoint[]>(
    initPointList(setFontZoom, setCurrentPercent),
  )

  useEffect(() => {
    updateStorage(Constants.storage.NAME, {
      ...storage,
      fontZoom,
    })
  }, [fontZoom, storage, updateStorage])

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
    const { fontZoomer } = Constants

    const root = document.querySelector(':root') as HTMLElement

    if (!root) return

    root.style.setProperty(fontZoomer.VARIABLE, String(fontZoom))
  }, [fontZoom])

  return (
    <Flex align="center" className={styles.size}>
      <Type size={20} strokeWidth={1} className="icon" />

      <label className={cn(styles.text, styles.label)}>Font size</label>

      <DotProgressBar
        currentPercent={currentPercent}
        maxWidth={100}
        points={points}
      />
    </Flex>
  )
}
