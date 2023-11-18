import { FC, useLayoutEffect, useRef } from 'react'

import cn from 'clsx'

import { calculateProgress } from '@/shared/utils'

import { type IProgressBar } from './progress-bar.interface'

import styles from './progress-bar.module.scss'

export const ProgressBar: FC<IProgressBar> = ({
  color,
  variant,
  percent,
  maxWidth,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!wrapRef.current || !progressRef.current) return

    const progress = calculateProgress(maxWidth, percent)

    switch (variant) {
      case 'horizontal':
        wrapRef.current.style.width = `${maxWidth}px`
        progressRef.current.style.width = `${progress}px`
        break

      case 'vertical':
        wrapRef.current.style.height = `${maxWidth}px`
        progressRef.current.style.height = `${progress}px`
        break
    }
  }, [maxWidth, percent, variant])

  return (
    <div
      ref={wrapRef}
      className={cn(styles.box, {
        [styles.horizontal]: variant === 'horizontal',
        [styles.vertical]: variant === 'vertical',
      })}
    >
      <div className={cn(styles.bar, styles.track)} />
      <div
        ref={progressRef}
        style={{
          backgroundColor: color,
        }}
        className={cn(styles.bar, styles.progress, {
          [styles.colorized]: !color,
        })}
      />
    </div>
  )
}
