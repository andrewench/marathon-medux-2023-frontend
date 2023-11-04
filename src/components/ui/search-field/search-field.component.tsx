'use client'

import { Search } from 'lucide-react'
import { FieldValues } from 'react-hook-form'

import cn from 'clsx'

import { ITextField, TextField } from '@/components/ui'

import styles from './search-field.module.scss'

export const SearchField = <T extends FieldValues>(props: ITextField<T>) => {
  return (
    <div className="flex relative">
      <Search size={16} className={cn(styles.icon, 'icon')} />

      <TextField<T> {...props} />
    </div>
  )
}
