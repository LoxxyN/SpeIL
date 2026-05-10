'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '../../model'

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="header__nav">
      <ul className="flex gap-8">
        {NAV_LINKS.map((item) => (
          <li>
            <Link
              className={`link text-2xl opacity-40 ${pathname === item.path ? 'opacity-100' : ''}`}
              href={item.path}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
