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
]

export const NAV_LINKS: INavLinks[] = [
  {
    id: 1,
    path: '/',
    label: 'Главная',
  },
  {
    id: 2,
    path: '/history',
    label: 'История',
  },
]
