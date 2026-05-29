import { BackLink } from '@shared/ui'

export const ActionInfoPanel = ({
  href,
  title,
  renderButton,
}: {
  href: string
  title: string
  renderButton: React.ReactNode
}) => {
  return (
    <div className="mb-10 flex items-center justify-between">
      <BackLink href={href} title={title} />
      {renderButton}
    </div>
  )
}
