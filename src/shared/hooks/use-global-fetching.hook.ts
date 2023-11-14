import { useEffect } from 'react'

import { useActions } from './use-actions.hook'

export const useGlobalFetching = (isLoading: boolean) => {
  const { setFetching } = useActions()

  useEffect(() => {
    isLoading ? setFetching(true) : setFetching(false)
  }, [isLoading, setFetching])
}
