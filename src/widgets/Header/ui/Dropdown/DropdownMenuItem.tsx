import { Dropdown, Switch } from '@heroui/react'

type TDropdownMenuItem = {
  label: string
  activeLabel: string
  isSelected: boolean
  onChange: (value: boolean) => void
}

export const DropdownMenuItem = ({
  activeLabel,
  label,
  isSelected,
  onChange,
}: TDropdownMenuItem) => {
  return (
    <Dropdown.Item shouldCloseOnSelect={false} textValue={label} className="flex justify-between">
      <p>
        {label}: {activeLabel}
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
