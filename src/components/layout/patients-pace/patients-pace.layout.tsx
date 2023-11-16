import { FC } from 'react'

import { Block } from '../block/block.layout'

export const PatientsPace: FC = () => {
  return (
    <Block title="Patients pace" slot={<div></div>}>
      <p className="text-neutral-500">Content</p>
    </Block>
  )
}
