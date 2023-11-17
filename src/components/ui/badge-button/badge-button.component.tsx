import { FC } from 'react'

import cn from 'clsx'

import { IBadgeButton } from './badge-button.interface'

import styles from './badge-button.module.scss'

export const BadgeButton: FC<IBadgeButton> = ({
  icon,
  onClick,
  className,
  children,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn('flex-center gap-1', styles.button, className)}
    >
      {icon}

      {children}
    </button>
  )
}
