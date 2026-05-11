'use client'

import { makeAutoObservable } from 'mobx'

type Theme = 'light' | 'dark'

class ThemeStore {
  theme: Theme = 'light'

  constructor() {
    makeAutoObservable(this)
  }

  hydrate(theme: Theme) {
    if (typeof window === 'undefined') return

    this.theme = theme
  }

  toggleTheme() {
    this.setTheme(this.theme === 'light' ? 'dark' : 'light')
  }

  setTheme(theme: Theme) {
    this.theme = theme

    document.documentElement.dataset.theme = theme
    document.cookie = `theme=${theme}; Path=/; Max-Age=31536000; SameSite=Lax`
  }
}

export const themeStore = new ThemeStore()
