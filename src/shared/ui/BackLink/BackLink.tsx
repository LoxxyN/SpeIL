import { ArrowLeft } from '@gravity-ui/icons'
import { Link } from '@src/i18n/navigation'

export const BackLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href} className="flex items-center gap-2">
      <ArrowLeft className="h-6 w-6" />
      <span className="text-2xl font-medium">{title}</span>
    </Link>
  )
}
