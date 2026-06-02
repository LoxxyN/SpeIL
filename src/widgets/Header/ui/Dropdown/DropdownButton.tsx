'use client'

import { themeStore } from '@/app/store'
import { usePathname, useRouter } from '@/src/i18n/navigation'
import { ChevronDown } from '@gravity-ui/icons'
import { Button, Dropdown } from '@heroui/react'
import { observer } from 'mobx-react-lite'
import { useLocale } from 'next-intl'
import { DropdownMenuItem } from './DropdownMenuItem'

export const DropdownButton = observer(() => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const { theme } = themeStore

  const nextLocale = locale === 'ru' ? 'en' : 'ru'

  const handleChangeLanguage = () => {
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <Dropdown>
      <Button aria-label="Menu" variant="outline">
        Настройки <ChevronDown />
      </Button>

      <Dropdown.Popover>
        <Dropdown.Menu>
          <DropdownMenuItem
            label="Язык"
            activeLabel={locale === 'ru' ? 'RU' : 'EN'}
            isSelected={locale === 'ru' ? false : true}
            onChange={handleChangeLanguage}
          />
          <DropdownMenuItem
            label="Тема"
            activeLabel={theme === 'dark' ? 'Темная' : 'Светлая'}
            isSelected={theme === 'dark' ? false : true}
            onChange={() => themeStore.toggleTheme()}
          />
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  )
})
