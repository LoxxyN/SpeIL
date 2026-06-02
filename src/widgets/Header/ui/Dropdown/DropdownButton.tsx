'use client'

import { themeStore } from '@/app/store'
import { usePathname, useRouter } from '@/src/i18n/navigation'
import { ChevronDown } from '@gravity-ui/icons'
import { Button, Dropdown } from '@heroui/react'
import { observer } from 'mobx-react-lite'
import { useLocale, useTranslations } from 'next-intl'
import { DropdownMenuItem } from './DropdownMenuItem'

export const DropdownButton = observer(() => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const { theme } = themeStore
  const t = useTranslations('HeaderMenu')
  const navigationT = useTranslations('Navigation')
  const nextLocale = locale === 'ru' ? 'en' : 'ru'

  const handleChangeLanguage = () => {
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <Dropdown>
      <Button aria-label="Menu" variant="outline">
        {navigationT('setting')} <ChevronDown />
      </Button>

      <Dropdown.Popover>
        <Dropdown.Menu>
          <DropdownMenuItem
            label={t('language')}
            activeLabel={locale === 'ru' ? t('ru') : t('en')}
            isSelected={locale === 'ru' ? false : true}
            onChange={handleChangeLanguage}
          />
          <DropdownMenuItem
            label={t('theme')}
            activeLabel={theme === 'dark' ? t('dark') : t('light')}
            isSelected={theme === 'dark' ? false : true}
            onChange={() => themeStore.toggleTheme()}
          />
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  )
})
