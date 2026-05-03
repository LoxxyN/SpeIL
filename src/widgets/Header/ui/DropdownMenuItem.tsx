'use client'

import { Dropdown, Switch } from '@heroui/react'
import { IDropdownItems } from '../model/types'

type TDropdownMenuItem = {
  item: IDropdownItems
  isSelected: boolean
  onChange: () => void
}

export function DropdownMenuItem({ item, isSelected, onChange }: TDropdownMenuItem) {
  const customLabel =
    item.key === 'theme' ? (isSelected ? 'Светлая' : 'Темая') : isSelected ? 'RU' : 'EN'
  return (
    <Dropdown.Item
      shouldCloseOnSelect={false}
      textValue={item.label}
      className="flex justify-between text-black"
    >
      <p>
        {item.label}: {customLabel}
      </p>
      <div
        onPointerDown={(event) => event.stopPropagation()}
        onClick={(event) => event.stopPropagation}
      >
        <Switch isSelected={isSelected} onChange={onChange}>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
        </Switch>
      </div>
    </Dropdown.Item>
  )
}
