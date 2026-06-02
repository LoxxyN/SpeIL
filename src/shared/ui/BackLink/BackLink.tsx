import { ArrowLeft } from '@gravity-ui/icons'
import { LinkWrapper } from '../LinkWrapper'

interface IBackLink {
  href: string
  title: string
}

export const BackLink = ({ href, title }: IBackLink) => {
  return (
    <LinkWrapper href={href} className="flex items-center gap-2">
      <ArrowLeft className="h-6 w-6" />
      <span className="text-2xl font-medium">{title}</span>
    </LinkWrapper>
  )
}
