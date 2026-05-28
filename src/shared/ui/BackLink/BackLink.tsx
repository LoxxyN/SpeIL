import { ArrowLeft } from '@gravity-ui/icons'
import Link from 'next/link'

export const BackLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href} className="flex items-center gap-2">
      <ArrowLeft className="h-6 w-6" />
      <span className="text-2xl font-semibold">{title}</span>
    </Link>
  )
}
