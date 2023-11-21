'use client'

import { Search } from 'lucide-react'
import { FieldValues } from 'react-hook-form'

import cn from 'clsx'

import { TextField } from '../text-field/text-field.component'

import { type ITextField } from '../text-field/text-field.interface'

import styles from './search-field.module.scss'

export const SearchField = <T extends FieldValues>(props: ITextField<T>) => {
  return (
    <div className="flex relative">
      <Search size={16} className={cn(styles.icon, 'icon')} />

      <TextField<T> {...props} />
    </div>
  )
}
