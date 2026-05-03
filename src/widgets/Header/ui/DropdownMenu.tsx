'use client'

import { Dropdown } from '@heroui/react'
import { useState } from 'react'
import { IDropdownItems } from '../model/types'
import { DropdownMenuItem } from './DropdownMenuItem'

export const DropdownMenu = ({ items }: { items: IDropdownItems[] }) => {
  const [setting, setSettings] = useState<Record<string, boolean>>({
    theme: true,
    lang: true,
  })

  return (
    <Dropdown.Menu>
      {items.map((item) => (
        <DropdownMenuItem
          key={item.id}
          item={item}
          isSelected={setting[item.key]}
          onChange={(value) => {
            setSettings((prev) => ({
              ...prev,
              [item.key]: value,
            }))
          }}
        />
      ))}
    </Dropdown.Menu>
  )
}
