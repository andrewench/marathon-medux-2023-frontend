import { useEffect, useState } from 'react'

import { calculateProgress } from '@/shared/utils'

import { ISlider } from './use-slider.interface'

export const useSlider = ({ wrap, maxWidth, percent }: ISlider) => {
  const [isDrag, setDrag] = useState<boolean>(false)
  const [draggerPosition, setDraggerPosition] = useState<number>(() =>
    calculateProgress(maxWidth, percent),
  )

  const mouseDownHandler = () => {
    if (!isDrag) {
      setDrag(true)
    }
  }

  const mouseUpHandler = () => {
    if (isDrag) {
      setDrag(false)
    }
  }

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      if (isDrag) {
        const mouseX = event.pageX

        const progressWrap = wrap.current

        if (!progressWrap) return

        if (
          mouseX >= progressWrap.offsetLeft &&
          mouseX <= progressWrap.offsetLeft + progressWrap.offsetWidth
        ) {
          setDraggerPosition(mouseX - progressWrap.offsetLeft)
        }
      }
    }

    document.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [wrap, isDrag])

  useEffect(() => {
    const mouseUpHandler = () => {
      if (!isDrag) return

      setDrag(false)
    }

    document.addEventListener('mouseup', mouseUpHandler)

    return () => {
      document.removeEventListener('mouseup', mouseUpHandler)
    }
  }, [isDrag])

  useEffect(() => {
    const body = document.body

    isDrag ? (body.style.userSelect = 'none') : (body.style.userSelect = '')
  }, [isDrag])

  return {
    mouseDownHandler,
    mouseUpHandler,
    draggerPosition,
  }
}
