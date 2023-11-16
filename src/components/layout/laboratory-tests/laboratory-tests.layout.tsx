'use client'

import { FC } from 'react'

import { ButtonSlider } from '@/components/ui'

import { Block } from '../block/block.layout'

export const LaboratoryTests: FC = () => {
  return (
    <Block title="Laboratory tests" slot={<ButtonSlider />}>
      <p className="text-neutral-500">Content</p>
    </Block>
  )
}
