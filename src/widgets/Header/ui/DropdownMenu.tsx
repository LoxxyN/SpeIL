import { Dropdown } from '@heroui/react'
import { IDropdownItems } from '../model/types'
import { DropdownMenuItem } from './DropdownMenuItem'

type TSettings = {
  lang: boolean
  theme: boolean
}

type TDropdownMenu = {
  items: IDropdownItems[]
  settings: TSettings
  onChange: (key: 'theme' | 'lang', value: boolean) => void
}

export const DropdownMenu = ({ items, settings, onChange }: TDropdownMenu) => {
  return (
    <Dropdown.Menu>
      {items.map((item) => (
        <DropdownMenuItem
          key={item.id}
          item={item}
          isSelected={settings[item.key]}
          onChange={(value) => onChange(item.key, value)}
        />
      ))}
    </Dropdown.Menu>
  )
}
