'use client'

import { Link } from '@src/i18n/navigation'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '../../model'

export const Navbar = () => {
  const pathname = usePathname()
  const t = useTranslations('Navigation')

  return (
    <nav className="header__nav">
      <ul className="flex gap-8">
        {NAV_LINKS.map((item) => (
          <li key={item.id}>
            <Link
              className={`link text-2xl opacity-40 ${pathname === item.path ? 'opacity-100' : ''}`}
              href={item.path}
            >
              {t(item.labelKey)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
