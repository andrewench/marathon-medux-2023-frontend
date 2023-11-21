import { bindActionCreators } from '@reduxjs/toolkit'

import { allActions } from '@/shared/presets'

import { useAppDispatch } from './use-redux.hook'

export const useActions = () => {
  const dispatch = useAppDispatch()

  return bindActionCreators(allActions, dispatch)
}
