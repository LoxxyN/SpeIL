import { TrashBin } from '@gravity-ui/icons'
import { Button } from '@heroui/react'

type TDeleteButton = {
  onRemoveReview: () => void
  hasTrashIcon: boolean
  label: string
}

export const DeleteButton = ({ onRemoveReview, hasTrashIcon, label }: TDeleteButton) => {
  return (
    <Button size="lg" variant="danger" onClick={onRemoveReview}>
      {label}
      {hasTrashIcon && <TrashBin />}
    </Button>
  )
}
