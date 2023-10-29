import { useCallback, useEffect, useState } from 'react'

import { calculateProgress } from '@/shared/utils'

import { ISlider } from './use-slider.interface'

export const useSlider = ({ wrap, maxWidth, percent, isInteract }: ISlider) => {
  const [isDrag, setDrag] = useState<boolean>(false)
  const [draggerPosition, setDraggerPosition] = useState<number>(() =>
    calculateProgress(maxWidth, percent),
  )

  const onMouseDown = useCallback(() => {
    if (!isDrag) {
      setDrag(true)
    }
  }, [isDrag])

  const onMouseUp = useCallback(() => {
    if (isDrag) {
      setDrag(false)
    }
  }, [isDrag])

  useEffect(() => {
    if (!isInteract) return

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
  }, [wrap, isDrag, isInteract])

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
    if (!isInteract) return

    const body = document.body

    isDrag ? (body.style.userSelect = 'none') : (body.style.userSelect = '')
  }, [isDrag, isInteract])

  return {
    handlers: {
      onMouseDown,
      onMouseUp,
    },
    draggerPosition,
    setDraggerPosition,
  }
}
