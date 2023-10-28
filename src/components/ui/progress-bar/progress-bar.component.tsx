import { FC, useEffect, useRef, useState } from 'react'

import { useSlider } from '@/shared/hooks'

import { type IProgressBar } from './progress-bar.interface'

import styles from './progress-bar.module.scss'

export const ProgressBar: FC<IProgressBar> = ({ percent, maxWidth }) => {
  const [isDrawProgress, setDrawProgress] = useState<boolean>(false)

  const wrapRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  const { mouseDownHandler, mouseUpHandler, draggerPosition } = useSlider({
    maxWidth,
    percent,
    wrap: wrapRef,
  })

  useEffect(() => {
    if (!wrapRef.current || !progressRef.current) return

    wrapRef.current.style.width = `${maxWidth}px`
    progressRef.current.style.width = `${draggerPosition}px`

    if (!isDrawProgress) setDrawProgress(true)
  }, [draggerPosition, isDrawProgress, maxWidth])

  return (
    <div
      ref={wrapRef}
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      className={styles.box}
    >
      <div className={styles.track} />
      <div ref={progressRef} className={styles.progress} />

      {isDrawProgress && (
        <div
          style={{ left: `${draggerPosition - 8}px` }}
          className={styles.drag}
        />
      )}
    </div>
  )
}
