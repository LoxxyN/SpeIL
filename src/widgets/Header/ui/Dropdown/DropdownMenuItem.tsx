import { Dropdown, Switch } from '@heroui/react'
import type { IDropdownItems } from '../../model/types'

type TDropdownMenuItem = {
  item: IDropdownItems
  isSelected: boolean
  onChange: (value: boolean) => void
}

export const DropdownMenuItem = ({ item, isSelected, onChange }: TDropdownMenuItem) => {
  const customLabel =
    item.key === 'theme' ? (isSelected ? 'Темная' : 'Светлая') : isSelected ? 'EN' : 'RU'

  return (
    <Dropdown.Item
      shouldCloseOnSelect={false}
      textValue={item.label}
      className="flex justify-between"
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
