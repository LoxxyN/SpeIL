'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="header__nav">
      <ul className="flex gap-8">
        <li>
          <Link
            className={`link text-2xl text-black opacity-40 ${pathname === '/' ? 'opacity-100' : ''}`}
            href="/"
          >
            Главная
          </Link>
        </li>
        <li>
          <Link
            className={`link text-2xl text-black opacity-40 ${pathname === '/history' ? 'opacity-100' : ''}`}
            href="/history"
          >
            История
          </Link>
        </li>
      </ul>
    </nav>
  )
}
