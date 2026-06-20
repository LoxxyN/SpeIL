export interface IDropdownItems {
  id: number
  key: 'theme' | 'lang'
  label: string
}

export interface INavLinks {
  id: number
  path: string
  labelKey: string
}

export type TDropdownMenuItem = {
  label: string
  activeLabel: string
  isSelected: boolean
  onChange: (value: boolean) => void
}
