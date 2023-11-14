import { FC } from 'react'

import cn from 'clsx'

import { IPrimaryButton } from './primary-button.interface'

import styles from './primary-button.module.scss'

export const PrimaryButton: FC<IPrimaryButton> = ({
  onClick,
  isLoading,
  children,
  className,
}) => {
  return (
    <button onClick={onClick} className={cn(styles.button, className)}>
      <div
        className={cn(styles.textWrap, {
          [styles.loader]: isLoading,
        })}
      >
        <p>{children}</p>
      </div>
    </button>
  )
}
