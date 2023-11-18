import { FC } from 'react'

import cn from 'clsx'

import { ITab } from './tab.interface'

export const Tab: FC<ITab> = ({
  index,
  currentTab,
  setTab,
  onClick,
  children,
  classNames,
}) => {
  const clickHandler = () => {
    setTab(index)

    if (onClick) onClick()
  }

  return (
    <button
      onClick={clickHandler}
      className={cn(classNames.button, {
        [classNames.active]: index === currentTab,
      })}
    >
      {children}
    </button>
  )
}
