import { FC } from 'react'

import { Block } from '../block/block.layout'

export const NextPacient: FC = () => {
  return (
    <Block title="Next patient" slot={<div>1</div>}>
      Content
    </Block>
  )
}
