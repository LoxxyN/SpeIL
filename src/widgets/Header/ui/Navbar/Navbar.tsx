'use client'

import { usePathname } from '@i18n/navigation'
import { LinkWrapper } from '@shared/ui'
import { useTranslations } from 'next-intl'
import { NAV_LINKS } from '../../model'

export const Navbar = () => {
  const pathname = usePathname()
  const t = useTranslations('Navigation')

  return (
    <nav className="header__nav">
      <ul className="flex gap-8">
        {NAV_LINKS.map((item) => (
          <li key={item.id}>
            <LinkWrapper
              className={`text-2xl opacity-40 ${pathname === item.path ? 'opacity-100' : ''}`}
              href={item.path}
            >
              {t(item.labelKey)}
            </LinkWrapper>
          </li>
        ))}
      </ul>
    </nav>
  )
}
