import Link from 'next/link'

import { FC } from 'react'

import { type IFormHelper } from './form-helper.interface'

import styles from './form-helper.module.scss'

export const FormHelper: FC<IFormHelper> = ({ label, link }) => {
  return (
    <p className={styles.label}>
      {label}{' '}
      <Link href={link.href} draggable={false} className={styles.link}>
        {link.label}
      </Link>
    </p>
  )
}
