import { RefObject, useEffect } from 'react'

export const useOutside = <T extends HTMLElement = HTMLElement>(
  wrapRef: RefObject<T>,
  callback: () => void,
) => {
  useEffect(() => {
    const wrap = wrapRef.current

    if (!wrap) return

    const clickHandler = (event: Event) => {
      if (!wrap.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('click', clickHandler)

    return () => {
      document.removeEventListener('click', clickHandler)
    }
  }, [callback, wrapRef])
}
