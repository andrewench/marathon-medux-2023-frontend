import { Type } from 'lucide-react'
import { FC, useEffect, useState } from 'react'

import cn from 'clsx'

import { Flex } from '@/components/layout'

import { DotProgressBar } from '@/components/ui/dot-progress-bar/dot-progress-bar.component'
import { type TPoint } from '@/components/ui/dot-progress-bar/dot-progress-bar.interface'

import { Constants } from '@/shared/constants'

import { useStorage } from '@/shared/hooks'

import { type TZoomValue } from '@/shared/types'

import { initPointList } from './font-zoomer.helper'

import styles from './font-zoomer.module.scss'

export const FontZoomer: FC = () => {
  const [currentPercent, setCurrentPercent] = useState<number>(0)

  const { initialStorage, updateStorage, getStorage } = useStorage(
    Constants.storage.NAME,
  )

  const [fontZoom, setFontZoom] = useState<TZoomValue>(() => {
    if (initialStorage === null) return Constants.fontZoomer.DEFAULT_VALUE

    return initialStorage.fontZoom
  })

  const [points, setPoints] = useState<TPoint[]>(
    initPointList(setFontZoom, setCurrentPercent),
  )

  useEffect(() => {
    const currentStorage = getStorage()

    updateStorage(Constants.storage.NAME, {
      ...currentStorage,
      fontZoom,
    })
  }, [fontZoom, getStorage, updateStorage])

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
