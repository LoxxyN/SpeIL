'use client'

import { useEffect } from 'react'
import { themeStore } from '../store'

type Theme = 'dark' | 'light'
type ProviderProps = {
  children: React.ReactNode
  initialTheme: Theme
}

export const StoreProvider = ({ children, initialTheme }: ProviderProps) => {
  useEffect(() => {
    themeStore.hydrate(initialTheme)
    document.documentElement.dataset.theme = initialTheme
  }, [initialTheme])
  return <>{children}</>
}
