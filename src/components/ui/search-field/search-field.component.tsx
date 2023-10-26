import Image from 'next/image'

import { FieldValues } from 'react-hook-form'

import { ITextField, TextField } from '@/components/ui'

export const SearchField = <T extends FieldValues>(props: ITextField<T>) => {
  return (
    <div className="flex relative">
      <Image
        src="/icons/search.svg"
        width={14}
        height={14}
        alt="Search icon"
        className="absolute left-5 top-3"
      />
      <TextField<T> {...props} />
    </div>
  )
}
