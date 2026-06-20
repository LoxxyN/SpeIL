'use client'

import { themeStore } from '@app/store'
import type { TTheme } from '@shared/types'
import { useEffect } from 'react'

type ProviderProps = {
  children: React.ReactNode
  initialTheme: TTheme
}

export const StoreProvider = ({ children, initialTheme }: ProviderProps) => {
  useEffect(() => {
    themeStore.hydrate(initialTheme)
    document.documentElement.dataset.theme = initialTheme
  }, [initialTheme])
  return <>{children}</>
}
