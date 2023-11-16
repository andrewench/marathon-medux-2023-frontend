import { FC } from 'react'

import { Block } from '../block/block.layout'

import styles from './confirmed-diagnoses.module.scss'

export const ConfirmedDiagnoses: FC = () => {
  return (
    <Block
      title="Confirmed diagnoses"
      slot={<div></div>}
      className={styles.box}
    >
      Content
    </Block>
  )
}
