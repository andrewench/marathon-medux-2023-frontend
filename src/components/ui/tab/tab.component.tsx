import { FC } from 'react'

import cn from 'clsx'

import { ITab } from './tab.interface'

import styles from './tab.module.scss'

export const Tab: FC<ITab> = ({
  index,
  currentTab,
  setTab,
  onClick,
  children,
}) => {
  const clickHandler = () => {
    setTab(index)

    if (onClick) onClick()
  }

  return (
    <button
      onClick={clickHandler}
      className={cn(styles.button, {
        [styles.active]: index === currentTab,
      })}
    >
      {children}
    </button>
  )
}
