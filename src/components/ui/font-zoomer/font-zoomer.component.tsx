import { FC, useEffect, useMemo, useState } from 'react'

import cn from 'clsx'

import { Flex } from '@/components/layout'

import { DotProgressBar } from '@/components/ui'
import { type TPoint } from '@/components/ui/dot-progress-bar/dot-progress-bar.interface'

import { FontIcon } from '@/components/icons'

import styles from './font-zoomer.module.scss'

export const FontZoomer: FC = () => {
  const [fontZoom, setFontZoom] = useState<0.9 | 1 | 1.1>(1)

  const points: TPoint[] = useMemo(
    () => [
      {
        percent: 25,
        label: 'S',
        onClick: () => {
          setFontZoom(0.9)
        },
      },
      {
        percent: 50,
        isDefault: true,
        label: 'M',
        onClick: () => {
          setFontZoom(1)
        },
      },
      {
        percent: 75,
        label: 'L',
        onClick: () => {
          setFontZoom(1.1)
        },
      },
    ],
    [],
  )

  useEffect(() => {
    const root = document.querySelector(':root') as HTMLElement

    if (!root) return

    root.style.setProperty('--font-zoom', String(fontZoom))
  }, [fontZoom])

  return (
    <Flex align="center" className={styles.size}>
      <FontIcon />

      <label className={cn(styles.text, styles.label)}>Font size</label>

      <DotProgressBar maxWidth={100} points={points} />
    </Flex>
  )
}
