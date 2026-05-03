import { ChevronDown } from '@gravity-ui/icons'
import { Button, Dropdown } from '@heroui/react'
import { DROPDOWN_ITEMS } from '../model/constants'
import { DropdownMenu } from './DropdownMenu'

export const DropdownButton = () => {
  return (
    <Dropdown>
      <Button aria-label="Menu" variant="outline">
        Настройки <ChevronDown />
      </Button>

      <Dropdown.Popover>
        <DropdownMenu items={DROPDOWN_ITEMS} />
      </Dropdown.Popover>
    </Dropdown>
  )
}
