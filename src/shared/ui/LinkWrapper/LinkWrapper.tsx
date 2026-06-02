import { Link } from '@src/i18n/navigation'

type TLinkWrapper = {
  className: string
  href: string
  children: string | React.ReactNode
}

export const LinkWrapper = ({ children, href, className }: TLinkWrapper) => {
  return (
    <Link className={`link ${className}`} href={href}>
      {children}
    </Link>
  )
}
