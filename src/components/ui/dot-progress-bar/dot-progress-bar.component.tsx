import { FC, useEffect, useRef, useState } from 'react'

import { useSlider } from '@/shared/hooks'

import { calculateProgress } from '@/shared/utils'

import type { IDotProgressBar } from './dot-progress-bar.interface'

import styles from './dot-progress-bar.module.scss'

export const DotProgressBar: FC<IDotProgressBar> = ({
  currentPercent,
  maxWidth,
  points,
}) => {
  const [isDrawProgress, setDrawProgress] = useState<boolean>(false)

  const wrapRef = useRef<HTMLDivElement>(null)

  const foundDefaultDot = points.find(dot => dot.isDefault)

  const { handlers, draggerPosition, setDraggerPosition } = useSlider({
    maxWidth,
    percent: foundDefaultDot?.percent || points[0].percent,
    wrap: wrapRef,
    isInteract: false,
  })

  useEffect(() => {
    if (!wrapRef.current) return

    wrapRef.current.style.width = `${maxWidth}px`

    if (!isDrawProgress) setDrawProgress(true)
  }, [draggerPosition, isDrawProgress, maxWidth])

  return (
    <div ref={wrapRef} {...handlers} className={styles.box}>
      <div className={styles.track} />

      {isDrawProgress && (
        <>
          {points.map((dot, idx) => (
            <button
              onClick={() => {
                if (dot.onClick) dot.onClick()

                setDraggerPosition(calculateProgress(maxWidth, dot.percent))
              }}
              key={idx}
              className={styles.dot}
              data-label={dot.label}
              style={{
                left: `${calculateProgress(maxWidth, dot.percent) - 8}px`,
              }}
            />
          ))}

          <div
            style={{
              left: `${calculateProgress(maxWidth, currentPercent) - 8}px`,
            }}
            className={styles.drag}
          />
        </>
      )}
    </div>
  )
}
