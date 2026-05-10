'use client'

import { themeStore } from '@/app/store'
import { ChevronDown } from '@gravity-ui/icons'
import { Button, Dropdown } from '@heroui/react'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { DROPDOWN_ITEMS } from '../../model/constants'
import { DropdownMenu } from './index'

export const DropdownButton = observer(() => {
  const [settings, setSettings] = useState({
    lang: false,
  })

  return (
    <Dropdown>
      <Button aria-label="Menu" variant="outline">
        Настройки <ChevronDown />
      </Button>

      <Dropdown.Popover>
        <DropdownMenu
          items={DROPDOWN_ITEMS}
          settings={{
            theme: themeStore.theme === 'dark',
            lang: settings.lang,
          }}
          onChange={(key, value) => {
            if (key === 'theme') {
              themeStore.toggleTheme()
            }

            setSettings((prev) => ({
              ...prev,
              [key]: value,
            }))
          }}
        />
      </Dropdown.Popover>
    </Dropdown>
  )
})
