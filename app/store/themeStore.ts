'use client'

import type { TTheme } from '@shared/types'
import { makeAutoObservable } from 'mobx'

class ThemeStore {
  theme: TTheme = 'light'

  constructor() {
    makeAutoObservable(this)
  }

  hydrate(theme: TTheme) {
    if (typeof window === 'undefined') return

    this.theme = theme
  }

  toggleTheme() {
    this.setTheme(this.theme === 'light' ? 'dark' : 'light')
  }

  setTheme(theme: TTheme) {
    this.theme = theme

    document.documentElement.dataset.theme = theme
    document.cookie = `theme=${theme}; Path=/; Max-Age=31536000; SameSite=Lax`
  }
}

export const themeStore = new ThemeStore()
