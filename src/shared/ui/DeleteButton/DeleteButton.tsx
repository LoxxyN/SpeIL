import { TrashBin } from '@gravity-ui/icons'
import { Button } from '@heroui/react'

type TDeleteButton = {
  onClick?: (e: React.MouseEvent) => void
  slot?: string
  size?: 'lg' | 'md' | 'sm'
  hasTrashIcon: boolean
  label: string
}

export const DeleteButton = ({
  onClick,
  slot,
  size = 'md',
  hasTrashIcon,
  label,
}: TDeleteButton) => {
  return (
    <Button size={size} slot={slot} variant="danger" onClick={onClick}>
      <span className="flex items-center gap-2 font-mono">
        {label}
        {hasTrashIcon && <TrashBin />}
      </span>
    </Button>
  )
}
