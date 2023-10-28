import { FieldValues } from 'react-hook-form'

import { ITextField, TextField } from '@/components/ui'

import { SearchIcon } from '@/components/icons'

import styles from './search-field.module.scss'

export const SearchField = <T extends FieldValues>(props: ITextField<T>) => {
  return (
    <div className="flex relative">
      <SearchIcon className={styles.icon} />

      <TextField<T> {...props} />
    </div>
  )
}
