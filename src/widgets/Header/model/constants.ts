import type { IDropdownItems, INavLinks } from './types'

export const DROPDOWN_ITEMS: IDropdownItems[] = [
  {
    id: 1,
    key: 'lang',
    label: 'Язык',
  },
  {
    id: 2,
    key: 'theme',
    label: 'Тема',
  },
] as const

export const NAV_LINKS: INavLinks[] = [
  {
    id: 1,
    path: '/',
    labelKey: 'home',
  },
  {
    id: 2,
    path: '/history',
    labelKey: 'history',
  },
] as const
