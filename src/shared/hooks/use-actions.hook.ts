import { bindActionCreators } from '@reduxjs/toolkit'

import { useAppDispatch } from '@/shared/hooks'

import { allActions } from '@/shared/presets'

export const useActions = () => {
  const dispatch = useAppDispatch()

  return bindActionCreators(allActions, dispatch)
}
